//! Computation of height map from normal map

use anyhow::anyhow;
use nalgebra_new::DMatrix;
use nalgebra_sparse::{
    coo::CooMatrix,
    csc::CscMatrix,
    factorization::{CholeskyError, CscCholesky},
};

/// Solve Au = b with b the flattened divergence of the gradient map,
/// and A the finite difference Laplacian matrix.
/// We flatten the maps column-wise
pub fn solve_for_nmap(
    nmap: &DMatrix<(f32, f32, f32)>,
) -> Result<(DMatrix<f32>, DMatrix<f32>), anyhow::Error> {
    // lap(u) = div(g)
    let (n, m) = nmap.shape();
    let nb_pix: usize = n * m;
    log::info!("Begining computations of div_g");
    let div_g: DMatrix<f32> = DMatrix::from_fn(n, m, |i, j| {
        // i, j € [0, n-1]x[0, m-1]
        let (gradx_left, _grady_left) = {
            let (nx, ny, nz) = if i > 0 {
                nmap[(i - 1, j)]
            } else {
                (0.0, 0.0, -1.0)
            };
            (-nx / nz, -ny / nz)
        };
        let (gradx_right, _grady_right) = {
            let (nx, ny, nz) = if i < n - 1 {
                nmap[(i + 1, j)]
            } else {
                (0.0, 0.0, -1.0)
            };
            (-nx / nz, -ny / nz)
        };
        let (_gradx_top, grady_top) = {
            let (nx, ny, nz) = if j > 0 {
                nmap[(i, j - 1)]
            } else {
                (0.0, 0.0, -1.0)
            };
            (-nx / nz, -ny / nz)
        };
        let (_gradx_bottom, grady_bottom) = {
            let (nx, ny, nz) = if j < m - 1 {
                nmap[(i, j + 1)]
            } else {
                (0.0, 0.0, -1.0)
            };
            (-nx / nz, -ny / nz)
        };
        // Centered finite differences for div(nmap):
        //         (-0.5)
        //            |
        // (-0.5) _ (0.0) _ (0.5)
        //            |
        //          (0.5)
        let div: f32 = -0.5 * gradx_left + 0.5 * gradx_right - 0.5 * grady_top + 0.5 * grady_bottom;
        div
    });
    log::info!("...\n...");

    let mut rhs: DMatrix<f32> = DMatrix::from_column_slice(nb_pix, 1, div_g.as_slice());
    log::info!("Ending computations of div_g");

    let mut laplacian = CooMatrix::new(nb_pix, nb_pix);
    // Memory alloc to avoid frequent realloc
    // Count of non-0 coefs :
    laplacian.reserve(11 * nb_pix - 4 * n - 9);
    let total = nb_pix / 1000;
    for i in 0..nb_pix {
        // if is_on_border(i, n, m) {
        //     laplacian.push(i, i, 1.0);
        //     rhs[i] = 1.0;
        // } else
        {
            laplacian.push(i, i, 4.0);
            if i >= 1 {
                laplacian.push(i, i - 1, -1.0);
            }
            if i + 1 <= nb_pix - 1 {
                laplacian.push(i, i + 1, -1.0);
            }
            if i >= n {
                laplacian.push(i, i - n, -1.0);
            }
            if i <= nb_pix - (1 + n) {
                laplacian.push(i, i + n, -1.0);
            }
        }
        if i % 1000 == 0 {
            log::info!("Laplacian computation : {}/{}", i / 1000, total);
        }
    }
    let csc: CscMatrix<f32> = CscMatrix::from(&laplacian);

    log::info!("Factorization...");
    let lhs: Result<CscCholesky<f32>, CholeskyError> = CscCholesky::<f32>::factor(&csc);
    log::info!("Factorization ok, solving system");
    let result: DMatrix<f32> = match lhs {
        Ok(factorization) => {
            factorization.solve_mut(&mut rhs); // in place factorization on rhs
            rhs
        }
        Err(_) => return Err(anyhow!("Solving cholesky failed")),
    };
    log::info!("Result of height map OK");
    Ok((div_g, result))
}

//

/// Checks if ith line of the laplacian refers to the border (for the diagonal coef that is).
/// n and m represent the size of the cropped vector field input.
fn is_on_border(k: usize, n: usize, m: usize) -> bool {
    let i = k % n;
    let j = k / n;
    i == 0 || i == (n - 1) || j == 0 || j == (m - 1)
}

// Centered finite differences for laplacian(heightmap):
//         (-1.0)
//            |
// (-1.0) _ (4.0) _ (-1.0)
//            |
//         (-1.0)
// let mut rhs: DVector<f32> = DVector::from_iterator(nb_pix, div_g.iter());
// let lhs: DMatrix<f32> = DMatrix::from_fn(nb_pix, nb_pix, |i, j| {
//     if i == j {
//         4.0
//     } else if i == j - 1 {
//         -1.0
//     } else if i == j + 1 {
//         -1.0
//     } else if i == j + m {
//         -1.0
//     } else if i == j - m {
//         1.0
//     } else {
//         0.0
//     }
// });
// let decompo: Cholesky<f32, Dynamic> = lhs
//     .cholesky()
//     .expect("Cholesky decomposition for height map failed !!!");
// decompo.solve_mut(&mut rhs); // solve "in place" on rhs
// let u: DVector<f32> = rhs;
// DMatrix::from_vec_generic(Dynamic::new(n), Dynamic::new(m), u.as_slice().to_vec())
