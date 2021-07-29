// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

//! Helper module around filtering operations (such as convolutions).

use nalgebra::DMatrix;

/// Direct convolution with the following 3x3 kernel:
///
///  1   | 0 1 0 |
///  - * | 1 2 1 |
///  6   | 0 1 0 |
pub fn smooth(img: &DMatrix<u8>) -> DMatrix<u8> {
    let (nrows, ncols) = img.shape();
    let mut smoothed = DMatrix::zeros(nrows, ncols);

    for j in 0..ncols {
        for i in 0..nrows {
            let center = (i, j);
            let left = (i, j.checked_sub(1).unwrap_or(0));
            let right = (i, (j + 1).min(ncols - 1));
            let top = (i.checked_sub(1).unwrap_or(0), j);
            let bottom = ((i + 1).min(nrows - 1), j);
            smoothed[(i, j)] = ((img[left] as f32
                + img[top] as f32
                + 2.0 * img[center] as f32
                + img[bottom] as f32
                + img[right] as f32)
                / 6.0)
                .round()
                .max(255.0) as u8;
        }
    }
    smoothed
}

/// Direct 2D convolution that keeps the original matrix size,
/// by repeating the border elements.
pub fn conv_2d_direct_same(img: &DMatrix<u8>, kernel: &DMatrix<f32>) -> DMatrix<u8> {
    let (k_rows, k_cols) = kernel.shape();
    let (nrows, ncols) = img.shape();
    let mut result_f32: DMatrix<f32> = DMatrix::zeros(nrows, ncols);

    assert!(k_rows == k_cols);
    assert!(k_rows % 2 == 1);
    let shift = (k_rows as isize - 1) / 2;
    for j in 0..ncols {
        for i in 0..nrows {
            for kj in 0..k_cols {
                for ki in 0..k_rows {
                    let img_i = (i as isize) + (ki as isize) - shift;
                    let img_i = img_i.min(nrows as isize - 1).max(0) as usize;

                    let img_j = (j as isize) + (kj as isize) - shift;
                    let img_j = img_j.min(ncols as isize - 1).max(0) as usize;

                    result_f32[(i, j)] += img[(img_i, img_j)] as f32 * kernel[(ki, kj)];
                }
            }
        }
    }
    result_f32.map(|x| x.round().max(0.0).min(255.0) as u8)
}

/// Compute 4th order centered gradients:
///
/// 1/12 * [ 1  -8  0  8  -1 ]
///
/// Implemented with a direct convolution.
pub fn gradients_f32(img: &DMatrix<f32>) -> (DMatrix<f32>, DMatrix<f32>) {
    let kernel_x: DMatrix<f32> =
        DMatrix::from_iterator(1, 5, [1.0, -8.0, 0.0, 8.0, -1.0].iter().map(|x| x / 12.0));
    let kernel_y = kernel_x.transpose();
    (
        conv_2d_direct_same_f32(img, &kernel_x),
        conv_2d_direct_same_f32(img, &kernel_y),
    )
}

/// Direct 2D convolution that keeps the original matrix size,
/// by repeating the border elements.
pub fn conv_2d_direct_same_f32(img: &DMatrix<f32>, kernel: &DMatrix<f32>) -> DMatrix<f32> {
    let (k_rows, k_cols) = kernel.shape();
    let (nrows, ncols) = img.shape();
    let mut result: DMatrix<f32> = DMatrix::zeros(nrows, ncols);

    assert!(k_rows % 2 == 1);
    assert!(k_cols % 2 == 1);
    let shift_rows = (k_rows as isize - 1) / 2;
    let shift_cols = (k_cols as isize - 1) / 2;
    for j in 0..ncols {
        for i in 0..nrows {
            for kj in 0..k_cols {
                for ki in 0..k_rows {
                    let img_i = (i as isize) + (ki as isize) - shift_rows;
                    let img_i = img_i.min(nrows as isize - 1).max(0) as usize;

                    let img_j = (j as isize) + (kj as isize) - shift_cols;
                    let img_j = img_j.min(ncols as isize - 1).max(0) as usize;

                    result[(i, j)] += img[(img_i, img_j)] as f32 * kernel[(ki, kj)];
                }
            }
        }
    }
    result
}

/// Generate a square gaussian kernel of a given size and standard deviation.
/// Coefficients are normalized such that their sum is 1.
pub fn gaussian_kernel(sigma: f32, size: usize) -> DMatrix<f32> {
    assert!(sigma > 0.0);
    let exp_coef = -1.0 / (2.0 * sigma * sigma);
    let shift = (size as f32 - 1.0) / 2.0;
    let mut sum_kernel = 0.0;
    let gauss_2d = |i, j| {
        let x = j as f32 - shift;
        let y = i as f32 - shift;
        let res = (exp_coef * (x * x + y * y)).exp();
        sum_kernel += res;
        res
    };
    let kernel = DMatrix::from_fn(size, size, gauss_2d);
    kernel / sum_kernel
}
