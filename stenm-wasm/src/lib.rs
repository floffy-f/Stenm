// SPDX-License-Identifier: MPL-2.0

use anyhow;
use image::DynamicImage;
use nalgebra::{DMatrix, Scalar, Vector6};
use nalgebra_new;
use serde::Deserialize;
use std::cell::RefCell;
use std::io::Cursor;
use std::rc::Rc;
use wasm_bindgen::prelude::*;

use stenm::img::crop::{crop, recover_original_motion, Crop};
use stenm::interop::{IntoDMatrix, ToImage};

#[macro_use]
mod utils; // define console_log! macro
mod planar;

#[wasm_bindgen(raw_module = "../worker.mjs")]
extern "C" {
    #[wasm_bindgen(js_name = "shouldStop")]
    async fn should_stop(step: &str, progress: Option<u32>) -> JsValue; // bool
}

/// Configuration (parameters) of the registration algorithm.
#[wasm_bindgen]
#[derive(Debug, Clone, Copy, Deserialize)]
pub struct Config {
    pub max_iterations: usize,
    pub threshold: f32,
    pub verbosity: u32,
    pub z_mean: f32,
}

// This wrapper trick is because we cannot have async functions referencing &self.
// https://github.com/rustwasm/wasm-bindgen/issues/1858
#[wasm_bindgen]
pub struct Stenm(Rc<RefCell<StenmInner>>);

#[wasm_bindgen]
impl Stenm {
    pub fn init() -> Self {
        Stenm(Rc::new(RefCell::new(StenmInner::init())))
    }
    pub fn load(&mut self, id: String, img_file: &[u8]) -> Result<(), JsValue> {
        let inner = Rc::clone(&self.0);
        let result = (*inner).borrow_mut().load(id, img_file);
        result
    }
    pub fn push_light(&mut self, x: f32, y: f32, z: f32) {
        self.0.borrow_mut().push_light(x, y, z)
    }
    pub fn run(&mut self, params: JsValue) -> js_sys::Promise {
        let inner = Rc::clone(&self.0);
        wasm_bindgen_futures::future_to_promise(async_run_rc(inner, params))
    }
    pub fn image_ids(&self) -> Result<JsValue, JsValue> {
        self.0.borrow().image_ids()
    }
    pub fn normal_map(&self) -> Result<Box<[u8]>, JsValue> {
        self.0.borrow().normal_map()
    }
    pub fn height_map(&self) -> Result<Box<[u8]>, JsValue> {
        self.0.borrow().height_map()
    }
    // pub fn cropped_img_file(&self, i: usize) -> Result<Box<[u8]>, JsValue> {
    //     self.0.borrow().cropped_img_file(i)
    // }
    pub fn register_and_save(&self) -> Result<Box<[u8]>, JsValue> {
        self.0.borrow().register_and_save()
    }
}

async fn async_run_rc(
    mutself: Rc<RefCell<StenmInner>>,
    params: JsValue,
) -> Result<JsValue, JsValue> {
    let mut inner = (*mutself).borrow_mut();
    let result = inner.run(params);
    result.await
}

struct StenmInner {
    image_ids: Vec<String>,
    dataset: Dataset,
    // motion_vec: Option<Vec<Vector6<f32>>>,
    lights: Vec<(f32, f32, f32)>,
    normal_map: Vec<u8>,
    height_map: Vec<u8>,
}

enum Dataset {
    Empty,
    GrayImages(Vec<DMatrix<u8>>),
    GrayImagesU16(Vec<DMatrix<u16>>),
    RgbImages(Vec<DMatrix<(u8, u8, u8)>>),
    RgbImagesU16(Vec<DMatrix<(u16, u16, u16)>>),
}

#[wasm_bindgen]
#[derive(Deserialize)]
/// Type holding the algorithm parameters
pub struct Args {
    pub config: Config,
    pub crop: Option<Crop>,
}

/// 3D point, representing a 3D light direction
#[cfg_attr(feature = "wasm_bindgen", wasm_bindgen)]
#[derive(Debug, Clone, Copy)]
#[cfg_attr(feature = "serde", derive(Deserialize))]
pub struct Point3d {
    pub x: f32,
    pub y: f32,
    pub z: f32,
}

impl StenmInner {
    pub fn init() -> Self {
        utils::set_panic_hook();
        utils::WasmLogger::init().unwrap();
        utils::WasmLogger::setup(log::LevelFilter::Trace);
        Self {
            image_ids: Vec::new(),
            dataset: Dataset::Empty,
            // motion_vec: None,
            lights: Vec::new(),
            normal_map: Vec::<u8>::new(),
            height_map: Vec::<u8>::new(),
        }
    }

    pub fn push_light(&mut self, x: f32, y: f32, z: f32) {
        self.lights.push((x, y, z));
    }

    // Load and decode the images to be registered.
    pub fn load(&mut self, id: String, img_file: &[u8]) -> Result<(), JsValue> {
        //console_log!("Loading an image");
        let reader = image::io::Reader::new(Cursor::new(img_file))
            .with_guessed_format()
            .expect("Cursor io never fails");
        // let image = reader.decode().expect("Error decoding the image");
        let dyn_img = reader.decode().map_err(utils::report_error)?;
        let reported_err =
            |str_msg: &str| Err(utils::report_error(anyhow::anyhow!(str_msg.to_string())));

        match (&dyn_img, &mut self.dataset) {
            // Loading the first image (empty dataset)
            (DynamicImage::ImageLuma8(_), Dataset::Empty) => {
                log::info!("Images are of type Gray u8");
                self.dataset = Dataset::GrayImages(vec![dyn_img.into_dmatrix()]);
                self.image_ids = vec![id];
            }
            // Loading of subsequent images
            (DynamicImage::ImageLuma8(_), Dataset::GrayImages(imgs)) => {
                imgs.push(dyn_img.into_dmatrix());
                self.image_ids.push(id);
            }
            // Loading the first image (empty dataset)
            (DynamicImage::ImageLuma16(_), Dataset::Empty) => {
                log::info!("Images are of type Gray u16");
                self.dataset = Dataset::GrayImagesU16(vec![dyn_img.into_dmatrix()]);
                self.image_ids = vec![id];
            }
            // Loading of subsequent images
            (DynamicImage::ImageLuma16(_), Dataset::GrayImagesU16(imgs)) => {
                imgs.push(dyn_img.into_dmatrix());
                self.image_ids.push(id);
            }
            // Loading the first image (empty dataset)
            (DynamicImage::ImageRgb8(_), Dataset::Empty) => {
                log::info!("Images are of type RGB (u8, u8, u8)");
                self.dataset = Dataset::RgbImages(vec![dyn_img.into_dmatrix()]);
                self.image_ids = vec![id];
            }
            // Loading of subsequent images
            (DynamicImage::ImageRgb8(_), Dataset::RgbImages(imgs)) => {
                imgs.push(dyn_img.into_dmatrix());
                self.image_ids.push(id);
            }
            // Loading the first image (empty dataset)
            (DynamicImage::ImageRgb16(_), Dataset::Empty) => {
                log::info!("Images are of type RGB (u16, u16, u16)");
                self.dataset = Dataset::RgbImagesU16(vec![dyn_img.into_dmatrix()]);
                self.image_ids = vec![id];
            }
            // Loading of subsequent images
            (DynamicImage::ImageRgb16(_), Dataset::RgbImagesU16(imgs)) => {
                imgs.push(dyn_img.into_dmatrix());
                self.image_ids.push(id);
            }
            (DynamicImage::ImageBgr8(_), _) => return reported_err("BGR order not supported"),
            (DynamicImage::ImageBgra8(_), _) => return reported_err("Alpha channel not supported"),
            (DynamicImage::ImageLumaA8(_), _) => {
                return reported_err("Alpha channel not supported")
            }
            (DynamicImage::ImageLumaA16(_), _) => {
                return reported_err("Alpha channel not supported")
            }
            (DynamicImage::ImageRgba8(_), _) => return reported_err("Alpha channel not supported"),
            (DynamicImage::ImageRgba16(_), _) => {
                return reported_err("Alpha channel not supported")
            }
            _ => return reported_err("Images are not all of the same type"),
        }

        Ok(())
    }

    // Run the main stenm registration algorithm.
    //                                                 Vec<f32>
    async fn run(&mut self, params: JsValue) -> Result<JsValue, JsValue> {
        // self.motion_vec = None;
        self.normal_map.clear();
        self.height_map.clear();
        let args: Args = params.into_serde().unwrap();
        utils::WasmLogger::setup(utils::verbosity_filter(args.config.verbosity));

        log::info!("No conf yet");

        let conf: planar::pps::ConfigPps = planar::pps::ConfigPps {
            max_iterations: args.config.max_iterations,
            threshold: args.config.threshold,
            z_mean: args.config.z_mean,
            lights: self.lights.clone(),
        };

        log::info!("Conf : {}", conf.z_mean);

        // // Use the algorithm corresponding to the type of data.
        let (_, normals, _) = match &self.dataset {
            Dataset::Empty => todo!(), //Vec::new(),
            Dataset::GrayImages(gray_imgs) => {
                todo!()
            }
            Dataset::GrayImagesU16(gray_imgs) => {
                todo!()
            }
            Dataset::RgbImages(imgs) => {
                // let cropped_imgs: &Vec<DMatrix<(u8, u8, u8)>> = match args.crop {
                //     None => imgs,
                //     Some(frame) => imgs
                //         .iter()
                //         .map(|im| {
                //             im.slice(
                //                 (frame.top, frame.left),
                //                 (frame.bottom - frame.top, frame.right - frame.left),
                //             )
                //             .into_owned()
                //         })
                //         .collect(),
                // };
                let raw_images: Vec<DMatrix<f32>> = match args.crop {
                    None => imgs.iter().map(|im| f32_image_matrix(im)).collect(),
                    Some(frame) => {
                        let cropped: Result<Vec<DMatrix<f32>>, _> = imgs
                            .iter()
                            // .map(|im| {
                            //     log::info!("1st px : {:?}", im[1]);
                            //     im
                            // })
                            .map(|im| f32_image_matrix(im))
                            // .map(|im| {
                            //     // let mean = im.as_ref().map(|i| i.mean()).unwrap_or(0.0);
                            //     log::info!("1st float : {:?}", im[1]);
                            //     let mean = im.mean();
                            //     log::info!("Moy :{}", mean);
                            //     im
                            // })
                            .map(|im| crop(frame, &im))
                            .collect();
                        match cropped {
                            Err(e) => {
                                log::info!("Problem while cropping : {}", e);
                                imgs.iter().map(|im| f32_image_matrix(im)).collect()
                            }
                            Ok(cr) => {
                                log::info!("No problem while cropping");
                                cr
                            }
                        }
                    }
                };
                // let raw_images: Vec<DMatrix<f32>> =
                //     raw_images.map_err(utils::report_error).context("Pbm crop");
                log::info!("RGB");
                let results = planar::pps::photometric_stereo(conf, &raw_images)
                    .map_err(utils::report_error)?;
                log::info!("Planar ok");
                results
            }
            Dataset::RgbImagesU16(imgs) => {
                todo!()
            }
        };

        let (n, m) = normals.shape();
        log::info!("Computations ok");

        self.normal_map = planar::main::save_normals(&normals).map_err(utils::report_error)?;

        log::info!("Encode PNG OK");

        let height_map: Result<
            (nalgebra_new::DMatrix<f32>, nalgebra_new::DMatrix<f32>),
            anyhow::Error,
        > = planar::height_map::solve_for_nmap(&nalgebra_new::DMatrix::from_iterator(
            n,
            m,
            normals.iter().cloned(),
        ));

        log::info!("Height map ok");

        self.height_map = match height_map {
            Err(_) => Vec::<u8>::new(),
            Ok((_div, hm)) => {
                log::info!("rows: {}", n);
                log::info!("cols: {}", m);
                log::info!("pix: {}", n * m);
                let to_mat: DMatrix<f32> = DMatrix::from_iterator(n, m, hm.iter().cloned());
                log::info!("height map rows: {}", to_mat.nrows());
                log::info!("height map cols: {}", to_mat.ncols());
                planar::main::save_matrix(&to_mat).map_err(utils::report_error)?
            }
        };

        log::info!("Height map encoded");
        let false_vec: Vec<f32> = Vec::new();
        JsValue::from_serde(&false_vec).map_err(utils::report_error)
        // let flat_motion_vec: Vec<f32> = motion_vec.iter().flatten().cloned().collect();
        // self.motion_vec = Some(motion_vec);
        // JsValue::from_serde(&flat_motion_vec).map_err(utils::report_error)
    }

    // Return the ids of loaded images: [string]
    pub fn image_ids(&self) -> Result<JsValue, JsValue> {
        JsValue::from_serde(&self.image_ids).map_err(utils::report_error)
    }

    pub fn normal_map(&self) -> Result<Box<[u8]>, JsValue> {
        // WARNING : is the clone useful ??
        // Maybe we don't need to lose ownership.
        Ok(self.normal_map.clone().into_boxed_slice())
    }
    pub fn height_map(&self) -> Result<Box<[u8]>, JsValue> {
        // WARNING : is the clone useful ??
        // Maybe we don't need to lose ownership.
        Ok(self.height_map.clone().into_boxed_slice())
    }

    // // Retrieve the cropped registered images.
    // pub fn cropped_img_file(&self, i: usize) -> Result<Box<[u8]>, JsValue> {
    //     encode(i, &self.crop_registered[i]).map_err(utils::report_error)
    // }

    // Register and save that image.
    pub fn register_and_save(&self) -> Result<Box<[u8]>, JsValue> {
        log::info!("Downloading normal map as PNG");
        // Err(anyhow!("Images not loaded yet")).map_err(utils::report_error)
        Ok(self.normal_map.clone().into_boxed_slice())
        // match (&self.motion_vec, &self.dataset) {
        //     (_, Dataset::Empty) => {
        //         Err(anyhow!("Images not loaded yet")).map_err(utils::report_error)
        //     }
        //     (None, _) => {
        //         Err(anyhow!("Registration parameters unknown")).map_err(utils::report_error)
        //     }
        //     (Some(all_motion), Dataset::GrayImages(images)) => {
        //         let registered: DMatrix<u8> =
        //             stenm::img::registration::warp(&images[i], &all_motion[i]);
        //         encode(i, &registered).map_err(utils::report_error)
        //     }
        //     (Some(all_motion), Dataset::GrayImagesU16(images)) => {
        //         let registered: DMatrix<u16> =
        //             stenm::img::registration::warp(&images[i], &all_motion[i]);
        //         encode(i, &registered).map_err(utils::report_error)
        //     }
        //     (Some(all_motion), Dataset::RgbImages(images)) => {
        //         let registered: DMatrix<(u8, u8, u8)> =
        //             stenm::img::registration::warp(&images[i], &all_motion[i]);
        //         encode(i, &registered).map_err(utils::report_error)
        //     }
        //     (Some(all_motion), Dataset::RgbImagesU16(images)) => {
        //         let registered: DMatrix<(u16, u16, u16)> =
        //             stenm::img::registration::warp(&images[i], &all_motion[i]);
        //         encode(i, &registered).map_err(utils::report_error)
        //     }
        // }
    }
}

fn encode<Im: ToImage>(i: usize, mat: &Im) -> anyhow::Result<Box<[u8]>> {
    log::debug!("Encoding image {}", i);
    let img = mat.to_image();
    let mut buffer: Vec<u8> = Vec::new();
    img.write_to(&mut buffer, image::ImageOutputFormat::Png)?;
    Ok(buffer.into_boxed_slice())
}

// #[allow(clippy::type_complexity)]
// async fn crop_and_register<T: CanEqualize + CanRegister>(
//     args: &Args,
//     gray_imgs: Vec<DMatrix<T>>,
//     sparse_diff_threshold: <T as CanRegister>::Bigger,
// ) -> anyhow::Result<(Vec<Vector6<f32>>, Vec<DMatrix<T>>)>
// where
//     DMatrix<T>: ToImage,
// {
//     // Extract the cropped area from the images.
//     let cropped_imgs: Result<Vec<DMatrix<T>>, _> = match args.crop {
//         None => Ok(gray_imgs),
//         Some(frame) => {
//             log::info!("Cropping images ...");
//             gray_imgs.iter().map(|im| crop(frame, im)).collect()
//         }
//     };
//     let mut cropped_imgs = cropped_imgs.context("Failed to crop images")?;
//
//     // Equalize mean intensities of cropped area.
//     if let Some(mean_intensity) = args.equalize {
//         log::info!("Equalizing images mean intensities ...");
//         stenm::utils::equalize_mean(mean_intensity, &mut cropped_imgs);
//     }
//
//     // Compute the motion of each image for registration.
//     log::info!("Registration of images ...");
//     registration::async_gray_affine(
//         args.config,
//         cropped_imgs,
//         sparse_diff_threshold,
//         should_stop_bool,
//     )
//     .await
//     .context("Failed to register images")
// }

async fn should_stop_bool(step: &str, progress: Option<u32>) -> bool {
    let js_bool = should_stop(step, progress).await;
    js_bool.as_bool().unwrap()
}

fn original_motion(crop: Option<Crop>, motion_vec_crop: Vec<Vector6<f32>>) -> Vec<Vector6<f32>> {
    // Recover motion parameters in the frame of the full image from the one in the cropped frame.
    match crop {
        None => motion_vec_crop,
        Some(frame) => recover_original_motion(frame, &motion_vec_crop),
    }
}

fn into_gray_u8(m: DMatrix<u16>) -> DMatrix<u8> {
    m.map(|x| (x / 256) as u8)
}

trait IntoF32Gray {
    fn into_gray_f32(self) -> f32;
}

impl IntoF32Gray for (u8, u8, u8) {
    fn into_gray_f32(self) -> f32 {
        (0.2989 * self.0 as f32 + 0.5870 * self.1 as f32 + 0.1140 * self.2 as f32).min(255.0)
            / 255.0
    }
}
impl IntoF32Gray for (u16, u16, u16) {
    fn into_gray_f32(self) -> f32 {
        (0.2989 * self.0 as f32 + 0.5870 * self.1 as f32 + 0.1140 * self.2 as f32)
            .min(256.0 * 256.0 - 1.0)
            / (256.0 * 256.0 - 1.0)
    }
}

fn f32_image_matrix<T: IntoF32Gray + Clone + Scalar>(mat: &DMatrix<T>) -> DMatrix<f32> {
    let (d1, d2) = mat.shape();
    DMatrix::from_iterator(d1, d2, mat.iter().map(|pix| pix.clone().into_gray_f32()))
}
