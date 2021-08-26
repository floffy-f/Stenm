// use crate::planar::camera;
use crate::planar::interop;
// mod unused;

use glob::glob;
use image::{ImageError, RgbaImage};
use nalgebra::{DMatrix, RealField};
use std::path::{Path, PathBuf};
use stenm::interop::ToImage;
// use std::str::FromStr;

// // Default values for some of the program arguments.
// const DEFAULT_OUT_DIR: &str = "out";
// // const DEFAULT_CROP: Crop = Crop::NoCrop;
// const DEFAULT_Z_MEAN: f32 = 3500.0;
// const DEFAULT_THRESHOLD: f32 = 1e-4;
// const DEFAULT_MAX_ITERATIONS: usize = 10;

// /// Entry point of the program.
// fn main() {
//     parse_args()
//         .and_then(run)
//         .unwrap_or_else(|err| eprintln!("Error: {:?}", err));
// }
//
// fn display_help() {
//     eprintln!(
//         r#"
// pps
//
// Planar photometric stereo.
//
// USAGE:
//     pps [FLAGS...] IMAGE_FILES...
//     For example:
//         pps --zmean=3500 *.png
//
// FLAGS:
//     --help                 # Print this message and exit
//     --version              # Print version and exit
//     --lights file.csv      # File path for the ligths coordinates
//     --intrinsics file.csv  # File path for the camera intrinsics
//     --out-dir dir/         # Output directory to save depth images (default: {})
//     --crop x1,y1,x2,y2     # Crop image into a restricted working area (use no space between coordinates)
//     --zmean float          # Mean depth of the scene in mm (default: {})
//     --threshold float      # Stop when relative diff RMSE falls below this (default: {})
//     --max-iterations int   # Maximum number of iterations (default: {})
// "#,
//         DEFAULT_OUT_DIR, DEFAULT_Z_MEAN, DEFAULT_THRESHOLD, DEFAULT_MAX_ITERATIONS,
//     )
// }
//
// #[derive(Debug)]
// /// Type holding command line arguments.
// struct Args {
//     config: pps::pps::Config,
//     out_dir: String,
//     images_paths: Vec<PathBuf>,
//     crop: Crop,
// }

// /// Function parsing the command line arguments and returning an Args object or an error.
// fn parse_args() -> Result<Args, Box<dyn std::error::Error>> {
//     let mut args = pico_args::Arguments::from_env();
//
//     // Retrieve command line arguments.
//     let help = args.contains(["-h", "--help"]);
//     let version = args.contains(["-v", "--version"]);
//
//     // Check if the --help or --version flags are present.
//     if help {
//         display_help();
//         std::process::exit(0);
//     } else if version {
//         println!("{}", std::env!("CARGO_PKG_VERSION"));
//         std::process::exit(0);
//     }
//
//     // Mandatory arguments.
//     let lights_path: String = args.value_from_str("--lights")?;
//     // let intrinsics_path: String = args.value_from_str("--intrinsics")?;
//
//     // Optional arguments.
//     let crop = args.opt_value_from_str("--crop")?.unwrap_or(DEFAULT_CROP);
//     let z_mean = args
//         .opt_value_from_str("--zmean")?
//         .unwrap_or(DEFAULT_Z_MEAN);
//     let threshold = args
//         .opt_value_from_str("--threshold")?
//         .unwrap_or(DEFAULT_THRESHOLD);
//     let max_iterations = args
//         .opt_value_from_str("--max-iterations")?
//         .unwrap_or(DEFAULT_MAX_ITERATIONS);
//     let out_dir = args
//         .opt_value_from_str("--out-dir")?
//         .unwrap_or(DEFAULT_OUT_DIR.into());
//
//     // Verify that images paths are correct.
//     // let free_args = args.free()?;
//     // let images_paths = absolute_file_paths(&free_args)?;
//
//     // Load ligths.
//     let lights_str = std::fs::read_to_string(lights_path)?;
//     let lights: Vec<_> = lights_str
//         .lines()
//         .map(|line| {
//             let mut coords = line.split(',');
//             let x: f32 = coords.next().unwrap().parse().unwrap();
//             let y: f32 = coords.next().unwrap().parse().unwrap();
//             let z: f32 = coords.next().unwrap().parse().unwrap();
//             (x, y, z)
//         })
//         .collect();
//
//     // // Load intrinsics.
//     // let intrinsics_str = std::fs::read_to_string(intrinsics_path)?;
//     // let intrinsics = camera::Intrinsics::from_str(&intrinsics_str)?;
//
//     // Return Args struct.
//     Ok(Args {
//         config: pps::pps::Config {
//             z_mean,
//             threshold,
//             max_iterations,
//             lights,
//             // intrinsics,
//         },
//         out_dir,
//         images_paths,
//         crop,
//     })
// }

// /// Retrieve the absolute paths of all files matching the arguments.
// fn absolute_file_paths(args: &[String]) -> Result<Vec<PathBuf>, Box<dyn std::error::Error>> {
//     let mut abs_paths = Vec::new();
//     for path_glob in args {
//         let mut paths = paths_from_glob(path_glob)?;
//         abs_paths.append(&mut paths);
//     }
//     abs_paths
//         .iter()
//         .map(|p| p.canonicalize().map_err(|e| e.into()))
//         .collect()
// }
//
// /// Retrieve the paths of files matchin the glob pattern.
// fn paths_from_glob(p: &str) -> Result<Vec<PathBuf>, Box<dyn std::error::Error>> {
//     let paths = glob(p)?;
//     Ok(paths.into_iter().filter_map(|x| x.ok()).collect())
// }

// #[derive(Debug)]
// enum Crop {
//     NoCrop,
//     Area(usize, usize, usize, usize),
// }

// impl FromStr for Crop {
//     type Err = std::num::ParseIntError;
//     fn from_str(s: &str) -> Result<Self, Self::Err> {
//         let parts: Vec<_> = s.splitn(4, ',').collect();
//         if parts.len() != 4 {
//             panic!(
//                 "--crop argument must be of the shape x1,y1,x2,y2 with no space between elements"
//             );
//         }
//         let x1 = parts[0].parse()?;
//         let y1 = parts[1].parse()?;
//         let x2 = parts[2].parse()?;
//         let y2 = parts[3].parse()?;
//         Ok(Crop::Area(x1, y1, x2, y2))
//     }
// }
//
// /// Start actual program with command line arguments successfully parsed.
// fn run(args: Args) -> Result<(), Box<dyn std::error::Error>> {
//     // Get the path of output directory.
//     let out_dir_path = PathBuf::from(args.out_dir);
//
//     // Load the dataset in memory.
//     let now = std::time::Instant::now();
//     let (dataset, _) = load_dataset(&args.images_paths)?;
//     eprintln!("Loading took {:.1} s", now.elapsed().as_secs_f32());
//     // panic!("stop");
//
//     // Use the algorithm corresponding to the type of data.
//     match dataset {
//         Dataset::GrayImages(_) => unimplemented!(),
//         Dataset::RgbImages(imgs) => {
//             // Extract the cropped area from the images.
//             // let cropped_imgs = crop_mat(&args.crop, &imgs);
//
//             // Convert to gray images: Rec.ITU-R BT.601-7
//             // 0.299 * R + 0.587 * G + 0.114 * B
//             let gray_imgs: Vec<DMatrix<f32>> = imgs
//                 .iter()
//                 .map(|rgb| {
//                     rgb.map(|(r, g, b)| {
//                         (0.299 * r as f32 + 0.587 * g as f32 + 0.114 * b as f32) / 255.0
//                     })
//                 })
//                 .collect();
//
//             // Compute planar photometric stereo
//             let (xyz, normals, albedo) =
//                 crate::planar::pps::photometric_stereo(args.config, &gray_imgs)?;
//
//             // Visualization of depth and normals images.
//             save_matrix(&albedo, "albedo.png");
//             save_normals(&normals, "normals.png");
//             // TODO
//             Ok(())
//         }
//         Dataset::RawImages(_) => unimplemented!(),
//     }
// }

pub fn save_u8_imgs(dir: &Path, imgs: &[DMatrix<u8>]) {
    std::fs::create_dir_all(dir).expect(&format!("Could not create output dir: {:?}", dir));
    imgs.iter().enumerate().for_each(|(i, img)| {
        interop::image_from_matrix(img)
            .save(dir.join(format!("{}.png", i)))
            .expect("Error saving image");
    });
}

pub fn save_matrix(img: &DMatrix<f32>) -> Result<Vec<u8>, ImageError> {
    let im_max = img.max();
    let (nrows, ncols) = img.shape();
    let img_u8: DMatrix<u8> =
        DMatrix::from_iterator(nrows, ncols, img.iter().map(|x| (x / im_max * 255.0) as u8));
    let mut buffer: Vec<u8> = Vec::new();
    img_u8
        .to_image()
        .write_to(&mut buffer, image::ImageOutputFormat::Png)?;
    Ok(buffer)
    // crate::planar::interop::image_from_matrix(&img_u8)
    //     .save(path)
    //     .unwrap();
}

type Coords = (f32, f32, f32);

pub fn save_normals(img: &DMatrix<Coords>, height: &DMatrix<f32>) -> Result<Vec<u8>, ImageError> {
    // let mut pixels = img.iter();
    // let (pix_mins, pix_maxs): (Coords, Coords) = match pixels.next() {
    //     None => return,
    //     Some(px0) => pixels.fold((px0.clone(), px0.clone()), |(mins, maxs), px| {
    //         (
    //             (px.0.min(mins.0), px.1.min(mins.1), px.2.min(mins.2)),
    //             (px.0.max(maxs.0), px.1.max(maxs.1), px.2.max(maxs.2)),
    //         )
    //     }),
    // };
    let (nrows, ncols) = img.shape();
    let alpha_max: f32 = height.max();
    let img_u8: DMatrix<(u8, u8, u8, u8)> = DMatrix::from_iterator(
        nrows,
        ncols,
        img.iter().zip(height.iter()).map(|(&(x, y, z), &alpha)| {
            (
                ((x + 1.0) / 2.0 * 255.0) as u8,
                ((y + 1.0) / 2.0 * 255.0) as u8,
                ((z + 1.0) / 2.0 * 255.0) as u8,
                (alpha / alpha_max * 255.0) as u8,
            )
        }),
    );
    // crate::planar::interop::rgb_from_matrix(&img_u8)
    // .save(path)
    // .unwrap();
    let mut buffer: Vec<u8> = Vec::new();

    let mut output = image::RgbaImage::new(nrows as u32, ncols as u32);
    let mut px: (u8, u8, u8, u8);
    for x in 0..nrows {
        for y in 0..ncols {
            px = img_u8[(x, y)];
            output.put_pixel(x as u32, y as u32, image::Rgba([px.0, px.1, px.2, px.3]))
        }
    }
    // img_u8
    //     .to_image()
    //     .write_to(&mut buffer, image::ImageOutputFormat::Png)?;
    image::DynamicImage::ImageRgba8(output).write_to(&mut buffer, image::ImageOutputFormat::Png)?;
    Ok(buffer)
}

// fn crop_mat<T: RealField>(crop: &Crop, imgs: &[DMatrix<T>]) -> Vec<DMatrix<T>> {
//     imgs.iter()
//         .map(|im| match crop {
//             Crop::NoCrop => im.clone(),
//             Crop::Area(x1, y1, x2, y2) => {
//                 let (height, width) = im.shape();
//                 assert!(x1 < &width, "Error: x1 >= image width");
//                 assert!(x2 < &width, "Error: x2 >= image width");
//                 assert!(y1 < &height, "Error: y1 >= image height");
//                 assert!(y2 < &height, "Error: y2 >= image height");
//                 assert!(x1 <= x2, "Error: x2 must be greater than x1");
//                 assert!(y1 <= y2, "Error: y2 must be greater than y1");
//                 let nrows = y2 - y1;
//                 let ncols = x2 - x1;
//                 im.slice((*y1, *x1), (nrows, ncols)).into_owned()
//             }
//         })
//         .collect()
// }

// enum Dataset {
//     RawImages(Vec<DMatrix<u16>>),
//     GrayImages(Vec<DMatrix<u8>>),
//     RgbImages(Vec<DMatrix<(u8, u8, u8)>>),
// }
//
// /// Load all images into memory.
// fn load_dataset<P: AsRef<Path>>(
//     paths: &[P],
// ) -> Result<(Dataset, (usize, usize)), Box<dyn std::error::Error>> {
//     eprintln!("Images to be processed:");
//     let images_types: Vec<_> = paths
//         .iter()
//         .map(|path| {
//             eprintln!("    {:?}", path.as_ref());
//             match path
//                 .as_ref()
//                 .extension()
//                 .and_then(|e| e.to_str())
//                 .map(|e| e.to_lowercase())
//                 .as_deref()
//             {
//                 Some("nef") => "raw",
//                 Some("png") => "image",
//                 Some("jpg") => "image",
//                 Some("jpeg") => "image",
//                 Some(ext) => panic!("Unrecognized extension: {}", ext),
//                 None => panic!("Hum no extension?"),
//             }
//         })
//         .collect();
//
//     if images_types.is_empty() {
//         Err("There is no such image. Use --help to know how to use this tool.".into())
//     } else if images_types.iter().all(|&t| t == "raw") {
//         unimplemented!("imread raw")
//     } else if images_types.iter().all(|&t| t == "image") {
//         let img_count = images_types.len();
//         eprintln!("Loading {} images ...", img_count);
//         let pb = indicatif::ProgressBar::new(img_count as u64);
//         let images: Vec<DMatrix<(u8, u8, u8)>> = paths
//             .iter()
//             .map(|path| {
//                 let rgb_img = image::open(path).unwrap().into_rgb8();
//                 let rgb_mat = interop::matrix_from_rgb_image(rgb_img);
//                 pb.inc(1);
//                 rgb_mat
//             })
//             .collect();
//         let (height, width) = images[0].shape();
//         pb.finish();
//         Ok((Dataset::RgbImages(images), (width, height)))
//     } else {
//         Err("There is a mix of image types".into())
//     }
// }
