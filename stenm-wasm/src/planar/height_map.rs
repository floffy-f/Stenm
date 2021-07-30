//! Computation of height map from normal map

use anyhow::anyhow;
use nalgebra::DMatrix;
use nalgebra_sparse::{CooMatrix, CsrMatrix};

enum StorageStyle {
    HStack,
    VStack,
}

fn mat2vec(mat: &DMatrix<T>, store: StorageStyle) -> Vec<T> {
    match store {
        HStack => mat.iter().collect(),
        VStack => mat.row_iter().collect(),
    }
}

fn vec2mat(vec: &Vec<T>, nb_line: usize, nb_col: usize, store: StorageStyle) -> DMatrix<T> {
    match store {
        HStack => DMatrix::from_iterator(nb_line, nb_col, vec.into_iter()),
        VStack => DMatrix::from_iterator(nb_line, nb_col, vec.into_iter()).transpose(),
    }
}

fn sub2ind(
    nb_line: usize,
    nb_col: usize,
    i: usize,
    j: usize,
    store: StorageStyle,
) -> Result<usize, anyhow::Error> {
    if i >= nb_line {
        return Err(anyhow!("Line number too big"));
    }
    if j >= nb_col {
        return Err(anyhow!("Column number too big"));
    }
    Ok(match store {
        HStack => j * nb_line + i,
        CStack => i * nb_col + j,
    })
}

fn ind2sub(
    nb_line: usize,
    nb_col: usize,
    k: usize,
    store: StorageStyle,
) -> Result<(usize, usize), anyhow::Error> {
    if k >= nb_line * nb_col {
        return Err(anyhow!("Index to convert to array position too big"));
    }
    Ok(match store {
        HStack => (k % nb_line, k / nb_line),
        VStack => (k / nb_col, k % nb_line),
    })
}

fn add_lc_term(
    x0: usize,
    y0: usize,
    x: usize,
    y: usize,
    coef: f32,
    nb_line: usize,
    nb_col: usize,
    store: StorageStyle,
) -> Result<(usize, usize, f32), anyhow::Error> {
    let target: usize = match sub2ind(nb_line, nb_col, x0, y0, store) {
        Err(e) => return Err(e),
        Ok(t) => t,
    };
    let source: usize = match sub2ind(nb_line, nb_col, x, y, store) {
        Err(e) => return Err(e),
        Ok(s) => s,
    };
    Ok((target, source, coef))
}

fn build_sparse(
    rows: &Vec<usize>,
    cols: &Vec<usize>,
    values: &Vec<usize>,
    to_be_added: Result<(usize, usize, f32), anyhow::Error>,
) -> () {
    match to_be_added {
        Err(e) => (),
        Ok(res) => {
            rows.push(res.0);
            cols.push(res.1);
            values.push(res.2);
            ()
        }
    };
}

fn stylet_dx(
    i: usize,
    j: usize,
    nb_line: usize,
    nb_col: usize,
    store: StorageStyle,
    rows: &Vec<usize>,
    cols: &Vec<usize>,
    values: &Vec<usize>,
) -> () {
    if i > 0 {
        to_be_added = add_lc_term(i, j, i - 1, j, -0.5, nb_line, nb_col, store);
        build_sparse(&rows, &cols, &values, to_be_added);
    }
    if i < (nb_line - 1) {
        to_be_added = add_lc_term(i, j, i + 1, j, 0.5, nb_line, nb_col, store);
        build_sparse(&rows, &cols, &values, to_be_added);
    }
}

fn stylet_dy(
    i: usize,
    j: usize,
    nb_line: usize,
    nb_col: usize,
    store: StorageStyle,
    rows: &Vec<usize>,
    cols: &Vec<usize>,
    values: &Vec<usize>,
) -> () {
    if j > 0 {
        to_be_added = add_lc_term(i, j, i, j - 1, -0.5, nb_line, nb_col, store);
        build_sparse(&rows, &cols, &values, to_be_added);
    }
    if j < (nb_col - 1) {
        to_be_added = add_lc_term(i, j, i, j + 1, 0.5, nb_line, nb_col, store);
        build_sparse(&rows, &cols, &values, to_be_added);
    }
}

pub fn diff_op(
    nb_line: usize,
    nb_col: usize,
    stylet: fn(
        usize,
        usize,
        usize,
        usize,
        StorageStyle,
        &Vec<usize>,
        &Vec<usize>,
        &Vec<usize>,
    ) -> (),
) -> CooMatrix<f32> {
    let rows: Vec<usize> = Vec::new();
    let cols: Vec<usize> = Vec::new();
    let values: Vec<usize> = Vec::new();
    let nb_pix: usize = nb_line * nb_col;
    let mut to_be_added: Result<(usize, usize, f32), anyhow::Error>;
    // Centered finite differences :
    //          (0.0)
    //            |
    // (-0.5) _ (0.0) _ (0.5)
    //            |
    //          (0.0)
    for i in 0..nb_line {
        for j in 0..nb_col {
            stylet(i, j, nb_line, nb_col, store, &rows, &cols, &values);
        }
    }
    CooMatrix::try_from_triplets(nb_pix, nb_pix, rows, cols, values)
}

pub fn dx(nb_line: usize, nb_col: usize) -> CsrMatrix<f32> {
    CsrMatrix::from(&diff_op(nb_line, nb_col, stylet_dx))
}

pub fn dy(nb_line: usize, nb_col: usize) -> CsrMatrix<f32> {
    CsrMatrix::from(&diff_op(nb_line, nb_col, stylet_dy))
}

pub fn laplacian(nb_line: usize, nb_col: usize) -> CsrMatrix<f32> {
    let dx_mat = dx(nb_line, nb_col);
    let dy_mat = dy(nb_line, nb_col);
    -dx_mat.transpose() * &dx_mat - dy_mat.transpose() * &dy_mat
}
