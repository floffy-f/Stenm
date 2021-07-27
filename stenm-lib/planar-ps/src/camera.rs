// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

//! Helper types and functions to manipulate camera poses and projections.

use crate::multires;
use nalgebra::Affine2;
use std::str::FromStr;

type Point2 = nalgebra::Point2<f32>;
type Point3 = nalgebra::Point3<f32>;
type Vec3 = nalgebra::Vector3<f32>;
type Mat3 = nalgebra::Matrix3<f32>;

/// A camera has intrinsic and extrinsic parameters.
/// Warning: extrinsics here is the pose of the camera,
/// not directly the projection matrix parameters.
///
/// As it stands, it is currently limited to the pinhole camera model.
#[derive(PartialEq, Debug, Clone)]
pub struct Camera {
    /// Intrinsic parameters of the camera.
    pub intrinsics: Intrinsics,
    /// Extrinsic parameters of the camera pose.
    pub extrinsics: Extrinsics,
}

impl Camera {
    /// Initialize a camera from intrinsic and extrinsic parameters.
    pub fn new(intrinsics: Intrinsics, extrinsics: Extrinsics) -> Self {
        Self {
            intrinsics,
            extrinsics,
        }
    }

    /// Project a 3D point into its corresponding pixel in the image generated by the camera.
    /// Result is still in homogeneous coordinates (thus `Vec3`).
    pub fn project(&self, point: Point3) -> Vec3 {
        self.intrinsics
            .project(extrinsics::project(&self.extrinsics, point))
    }

    /// From a 2D pixel position and a depth info,
    /// back project this point into the 3D world.
    pub fn back_project(&self, point: Point2, depth: f32) -> Point3 {
        extrinsics::back_project(&self.extrinsics, self.intrinsics.back_project(point, depth))
    }

    /// Generate a multi-resolution camera.
    /// Extrinsics are left intact, but intrinsics are scaled at each level.
    pub fn multi_res(self, n: usize) -> Vec<Self> {
        multires::limited_sequence(n, self, |cam| Some(cam.half_res()))
    }

    /// Generate a camera corresponding to an image with half resolution.
    /// Extrinsics are left intact, but intrinsics are scaled.
    pub fn half_res(&self) -> Self {
        Self::new(self.intrinsics.half_res(), self.extrinsics)
    }
}

// EXTRINSICS ##############################################

/// Extrinsic parameters are represented by a rigid body motion (or direct isometry).
pub type Extrinsics = nalgebra::Isometry3<f32>;

/// Module regrouping functions operating on extrinsics.
pub mod extrinsics {
    use super::*;

    /// Project a 3D point from world coordinates to camera coordinates.
    pub fn project(pose: &Extrinsics, point: Point3) -> Point3 {
        pose.rotation.inverse() * (pose.translation.inverse() * point)
    }

    /// Back project a 3D point from camera coordinates to world coordinates.
    pub fn back_project(pose: &Extrinsics, point: Point3) -> Point3 {
        pose * point
    }
}

// INTRINSICS ##############################################

/// Intrinsic parameters of a pinhole camera model.
#[derive(PartialEq, Debug, Clone)]
pub struct Intrinsics {
    /// Principal point (in the optical center axis) of the camera.
    pub principal_point: (f32, f32),
    /// Focal length in pixels along both axes.
    pub focal: (f32, f32),
    /// Skew of the camera, usually 0.0.
    pub skew: f32,
}

impl FromStr for Intrinsics {
    type Err = std::num::ParseFloatError;
    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let mut lines = s.lines();
        let read_triplet = |l: &str| {
            let mut items = l.split(',');
            (
                FromStr::from_str(items.next().unwrap()).unwrap(),
                FromStr::from_str(items.next().unwrap()).unwrap(),
                FromStr::from_str(items.next().unwrap()).unwrap(),
            )
        };
        let (fx, skew, ppx) = read_triplet(lines.next().unwrap());
        let (_, fy, ppy) = read_triplet(lines.next().unwrap());
        Ok(Intrinsics {
            principal_point: (ppx, ppy),
            focal: (fx, fy),
            skew,
        })
    }
}

impl Intrinsics {
    /// Equivalent matrix representation of intrinsic parameters.
    #[rustfmt::skip]
    pub fn matrix(&self) -> Affine2<f32> {
        Affine2::from_matrix_unchecked(Mat3::new(
            self.focal.0, self.skew,    self.principal_point.0,
            0.0,          self.focal.1, self.principal_point.1,
            0.0,          0.0,          1.0,
        ))
    }

    /// Generate a multi-resolution vector of intrinsic parameters.
    /// Each level corresponds to a camera with half resolution.
    pub fn multi_res(self, n: usize) -> Vec<Self> {
        multires::limited_sequence(n, self, |intrinsics| Some(intrinsics.half_res()))
    }

    /// Compute intrinsic parameters of a camera with half resolution.
    ///
    /// Since the (0,0) coordinates correspond the center of the first pixel,
    /// and not its top left corner, a shift of 0.5 is performed
    /// for the principal point before and after the resolution scaling.
    pub fn half_res(&self) -> Self {
        let (cx, cy) = self.principal_point;
        let (fx, fy) = self.focal;
        Self {
            principal_point: ((cx + 0.5) / 2.0 - 0.5, (cy + 0.5) / 2.0 - 0.5),
            focal: (0.5 * fx, 0.5 * fy),
            skew: self.skew,
        }
    }

    /// Project a 3D point in camera coordinates into a 2D homogeneous image point.
    pub fn project(&self, point: Point3) -> Vec3 {
        Vec3::new(
            self.focal.0 * point[0] + self.skew * point[1] + self.principal_point.0 * point[2],
            self.focal.1 * point[1] + self.principal_point.1 * point[2],
            point[2],
        )
    }

    /// Back project a pixel with depth info into a 3D point in camera coordinates.
    pub fn back_project(&self, point: Point2, depth: f32) -> Point3 {
        let z = depth;
        let y = (point[1] - self.principal_point.1) * z / self.focal.1;
        let x = ((point[0] - self.principal_point.0) * z - self.skew * y) / self.focal.0;
        Point3::new(x, y, z)
    }
}
