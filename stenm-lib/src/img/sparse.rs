// SPDX-License-Identifier: MPL-2.0

//! Sparse points selection in a coarse to fine manner.

use nalgebra::{DMatrix, Scalar};

/// Select a subset of points satisfying two conditions:
///   * points shall be well-distributed in the image.
///   * higher density where gradients are bigger.
///
/// Each level is kept but important one
/// is the one at the highest resolution (the last one).
pub fn select<T>(diff_threshold: T, gradients: &[DMatrix<T>]) -> Vec<DMatrix<bool>>
where
    T: Copy + Scalar + std::cmp::PartialOrd + std::ops::Add<Output = T>,
{
    let (nrows, ncols) = gradients.last().unwrap().shape();
    let init_sparse = vec![DMatrix::repeat(nrows, ncols, true)];
    let prune = |a, b, c, d| prune_with_thresh(diff_threshold, a, b, c, d);
    gradients
        .iter()
        .rev() // start with lower res
        .skip(1) // skip lower since all points are good
        .fold(init_sparse, |mut multires_masks, grad_mat| {
            let new_mask = select_2x2_bloc(multires_masks.last().unwrap(), grad_mat, prune);
            multires_masks.push(new_mask);
            multires_masks
        })
}

/// Apply a predicate function on each 2x2 bloc.
/// Only evaluate the function in selected blocs in the half resolution `pre_mask`.
#[allow(clippy::many_single_char_names)]
fn select_2x2_bloc<T, F>(pre_mask: &DMatrix<bool>, mat: &DMatrix<T>, f: F) -> DMatrix<bool>
where
    T: Copy + Scalar,
    F: Fn(T, T, T, T) -> [bool; 4],
{
    let (nrows, ncols) = mat.shape();
    let (nrows_2, ncols_2) = pre_mask.shape();
    assert_eq!((nrows_2, ncols_2), (nrows / 2, ncols / 2));
    let mut mask = DMatrix::repeat(nrows, ncols, false);
    for j in 0..(ncols_2) {
        for i in 0..(nrows_2) {
            if pre_mask[(i, j)] {
                let a = mat[(2 * i, 2 * j)];
                let b = mat[(2 * i + 1, 2 * j)];
                let c = mat[(2 * i, 2 * j + 1)];
                let d = mat[(2 * i + 1, 2 * j + 1)];
                let ok = f(a, b, c, d);
                mask[(2 * i, 2 * j)] = ok[0];
                mask[(2 * i + 1, 2 * j)] = ok[1];
                mask[(2 * i, 2 * j + 1)] = ok[2];
                mask[(2 * i + 1, 2 * j + 1)] = ok[3];
            }
        }
    }
    mask
}

/// Discard the 2 or 3 lowest values.
/// The second higher value is kept only if:
///     second > third + thresh
///
/// For example: with thresh = 5
///     ( 0, 1, 8, 9 ) -> [ false, false, true, true ]
///     ( 0, 9, 1, 8 ) -> [ false, true, false, true ]
///     ( 1, 0, 9, 0 ) -> [ false, false, true, false ]
#[allow(clippy::many_single_char_names)]
fn prune_with_thresh<T>(thresh: T, a: T, b: T, c: T, d: T) -> [bool; 4]
where
    T: Copy + Scalar + std::cmp::PartialOrd + std::ops::Add<Output = T>,
{
    // let thresh = 7.0 / 255.0;
    let mut temp = [(a, 0_usize), (b, 1_usize), (c, 2_usize), (d, 3_usize)];
    temp.sort_unstable_by(|(x, _), (y, _)| x.partial_cmp(y).unwrap());
    let (_, first) = temp[3];
    let (x, second) = temp[2];
    let (y, _) = temp[1];
    let mut result = [false; 4];
    result[first] = true;
    if x > y + thresh {
        result[second] = true;
    }
    result
}

// Utilitary functions on sparse matrices ######################################

/// Merge multiple sparse matrices into one combining all sparsely selected pixels.
///
/// Will crash if there is no matrix or they don't all have the same size.
pub fn merge(matrices: &[DMatrix<bool>]) -> DMatrix<bool> {
    assert!(!matrices.is_empty(), "The list of matrices is empty");
    let mut merged = matrices[0].clone();
    for mat in matrices.iter().skip(1) {
        assert!(
            mat.shape() == merged.shape(),
            "Matrices do not all have the same size"
        );
        for (b_merged, b) in merged.iter_mut().zip(mat) {
            *b_merged |= b;
        }
    }
    merged
}

/// Extract sparsely selected data from an iterator.
pub fn extract<T, Sparse: Iterator<Item = bool>>(
    sparse_pixels: Sparse,
    mat: impl Iterator<Item = T>,
) -> impl Iterator<Item = T> {
    sparse_pixels
        .zip(mat)
        .filter_map(|(b, v)| if b { Some(v) } else { None })
}
