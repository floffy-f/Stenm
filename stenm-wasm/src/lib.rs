// SPDX-License-Identifier: MPL-2.0

use anyhow::{anyhow, Context};
use image::DynamicImage;
use nalgebra::{DMatrix, Vector6};
use serde::Deserialize;
use std::cell::RefCell;
use std::io::Cursor;
use std::rc::Rc;
use wasm_bindgen::prelude::*;

use stenm::img::crop::{crop, recover_original_motion, Crop};
use stenm::img::registration::{self, CanRegister};
use stenm::interop::{IntoDMatrix, ToImage};
use stenm::utils::CanEqualize;

#[macro_use]
mod utils; // define console_log! macro

#[wasm_bindgen(raw_module = "../worker.mjs")]
extern "C" {
    #[wasm_bindgen(js_name = "shouldStop")]
    async fn should_stop(step: &str, progress: Option<u32>) -> JsValue; // bool
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
    pub fn run(&mut self, params: JsValue) -> js_sys::Promise {
        let inner = Rc::clone(&self.0);
        wasm_bindgen_futures::future_to_promise(async_run_rc(inner, params))
    }
    pub fn image_ids(&self) -> Result<JsValue, JsValue> {
        self.0.borrow().image_ids()
    }
    pub fn cropped_img_file(&self, i: usize) -> Result<Box<[u8]>, JsValue> {
        self.0.borrow().cropped_img_file(i)
    }
    pub fn register_and_save(&self, i: usize) -> Result<Box<[u8]>, JsValue> {
        self.0.borrow().register_and_save(i)
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
    crop_registered: Vec<DMatrix<u8>>,
    motion_vec: Option<Vec<Vector6<f32>>>,
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
    pub config: registration::Config,
    pub equalize: Option<f32>,
    pub crop: Option<Crop>,
}

impl StenmInner {
    pub fn init() -> Self {
        utils::set_panic_hook();
        utils::WasmLogger::init().unwrap();
        utils::WasmLogger::setup(log::LevelFilter::Trace);
        Self {
            image_ids: Vec::new(),
            dataset: Dataset::Empty,
            crop_registered: Vec::new(),
            motion_vec: None,
        }
    }

    // Load and decode the images to be registered.
    pub fn load(&mut self, id: String, img_file: &[u8]) -> Result<(), JsValue> {
        console_log!("Loading an image");
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
        self.motion_vec = None;
        self.crop_registered.clear();
        let args: Args = params.into_serde().unwrap();
        utils::WasmLogger::setup(utils::verbosity_filter(args.config.verbosity));

        // Use the algorithm corresponding to the type of data.
        let motion_vec = match &self.dataset {
            Dataset::Empty => Vec::new(),
            Dataset::GrayImages(gray_imgs) => {
                let (motion_vec_crop, cropped_eq_imgs) =
                    crop_and_register(&args, gray_imgs.clone(), 40)
                        .await
                        .map_err(utils::report_error)?;
                log::info!("Applying registration on cropped images ...");
                self.crop_registered = registration::reproject_may_stop::<u8, f32, u8, _>(
                    &cropped_eq_imgs,
                    &motion_vec_crop,
                    should_stop_bool,
                )
                .await
                .map_err(utils::report_error)?;
                original_motion(args.crop, motion_vec_crop)
            }
            Dataset::GrayImagesU16(gray_imgs) => {
                let (motion_vec_crop, cropped_eq_imgs) =
                    crop_and_register(&args, gray_imgs.clone(), 10 * 256)
                        .await
                        .map_err(utils::report_error)?;
                log::info!("Applying registration on cropped images ...");
                let cropped_u8: Vec<_> = cropped_eq_imgs.into_iter().map(into_gray_u8).collect();
                self.crop_registered = registration::reproject_may_stop::<u8, f32, u8, _>(
                    &cropped_u8,
                    &motion_vec_crop,
                    should_stop_bool,
                )
                .await
                .map_err(utils::report_error)?;
                original_motion(args.crop, motion_vec_crop)
            }
            Dataset::RgbImages(imgs) => {
                let gray_imgs: Vec<_> = imgs.iter().map(|im| im.map(|(_r, g, _b)| g)).collect();
                let (motion_vec_crop, cropped_eq_imgs) = crop_and_register(&args, gray_imgs, 40)
                    .await
                    .map_err(utils::report_error)?;
                log::info!("Applying registration on cropped images ...");
                self.crop_registered = registration::reproject_may_stop::<u8, f32, u8, _>(
                    &cropped_eq_imgs,
                    &motion_vec_crop,
                    should_stop_bool,
                )
                .await
                .map_err(utils::report_error)?;
                original_motion(args.crop, motion_vec_crop)
            }
            Dataset::RgbImagesU16(imgs) => {
                let gray_imgs: Vec<_> = imgs.iter().map(|im| im.map(|(_r, g, _b)| g)).collect();
                let (motion_vec_crop, cropped_eq_imgs) =
                    crop_and_register(&args, gray_imgs, 10 * 256)
                        .await
                        .map_err(utils::report_error)?;
                log::info!("Applying registration on cropped images ...");
                let cropped_u8: Vec<_> = cropped_eq_imgs.into_iter().map(into_gray_u8).collect();
                self.crop_registered = registration::reproject_may_stop::<u8, f32, u8, _>(
                    &cropped_u8,
                    &motion_vec_crop,
                    should_stop_bool,
                )
                .await
                .map_err(utils::report_error)?;
                original_motion(args.crop, motion_vec_crop)
            }
        };

        let flat_motion_vec: Vec<f32> = motion_vec.iter().flatten().cloned().collect();
        self.motion_vec = Some(motion_vec);
        JsValue::from_serde(&flat_motion_vec).map_err(utils::report_error)
    }

    // Return the ids of loaded images: [string]
    pub fn image_ids(&self) -> Result<JsValue, JsValue> {
        JsValue::from_serde(&self.image_ids).map_err(utils::report_error)
    }

    // Retrieve the cropped registered images.
    pub fn cropped_img_file(&self, i: usize) -> Result<Box<[u8]>, JsValue> {
        encode(i, &self.crop_registered[i]).map_err(utils::report_error)
    }

    // Register and save that image.
    pub fn register_and_save(&self, i: usize) -> Result<Box<[u8]>, JsValue> {
        log::info!("Registering image {}", i);
        match (&self.motion_vec, &self.dataset) {
            (_, Dataset::Empty) => {
                Err(anyhow!("Images not loaded yet")).map_err(utils::report_error)
            }
            (None, _) => {
                Err(anyhow!("Registration parameters unknown")).map_err(utils::report_error)
            }
            (Some(all_motion), Dataset::GrayImages(images)) => {
                let registered: DMatrix<u8> =
                    stenm::img::registration::warp(&images[i], &all_motion[i]);
                encode(i, &registered).map_err(utils::report_error)
            }
            (Some(all_motion), Dataset::GrayImagesU16(images)) => {
                let registered: DMatrix<u16> =
                    stenm::img::registration::warp(&images[i], &all_motion[i]);
                encode(i, &registered).map_err(utils::report_error)
            }
            (Some(all_motion), Dataset::RgbImages(images)) => {
                let registered: DMatrix<(u8, u8, u8)> =
                    stenm::img::registration::warp(&images[i], &all_motion[i]);
                encode(i, &registered).map_err(utils::report_error)
            }
            (Some(all_motion), Dataset::RgbImagesU16(images)) => {
                let registered: DMatrix<(u16, u16, u16)> =
                    stenm::img::registration::warp(&images[i], &all_motion[i]);
                encode(i, &registered).map_err(utils::report_error)
            }
        }
    }
}

fn encode<Im: ToImage>(i: usize, mat: &Im) -> anyhow::Result<Box<[u8]>> {
    log::debug!("Encoding image {}", i);
    let img = mat.to_image();
    let mut buffer: Vec<u8> = Vec::new();
    img.write_to(&mut buffer, image::ImageOutputFormat::Png)?;
    Ok(buffer.into_boxed_slice())
}

#[allow(clippy::type_complexity)]
async fn crop_and_register<T: CanEqualize + CanRegister>(
    args: &Args,
    gray_imgs: Vec<DMatrix<T>>,
    sparse_diff_threshold: <T as CanRegister>::Bigger,
) -> anyhow::Result<(Vec<Vector6<f32>>, Vec<DMatrix<T>>)>
where
    DMatrix<T>: ToImage,
{
    // Extract the cropped area from the images.
    let cropped_imgs: Result<Vec<DMatrix<T>>, _> = match args.crop {
        None => Ok(gray_imgs),
        Some(frame) => {
            log::info!("Cropping images ...");
            gray_imgs.iter().map(|im| crop(frame, im)).collect()
        }
    };
    let mut cropped_imgs = cropped_imgs.context("Failed to crop images")?;

    // Equalize mean intensities of cropped area.
    if let Some(mean_intensity) = args.equalize {
        log::info!("Equalizing images mean intensities ...");
        stenm::utils::equalize_mean(mean_intensity, &mut cropped_imgs);
    }

    // Compute the motion of each image for registration.
    log::info!("Registration of images ...");
    registration::async_gray_affine(
        args.config,
        cropped_imgs,
        sparse_diff_threshold,
        should_stop_bool,
    )
    .await
    .context("Failed to register images")
}

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
