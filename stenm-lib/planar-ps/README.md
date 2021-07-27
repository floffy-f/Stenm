# pps

Planar photometric stereo.

```sh
cargo run --release -- --lights data-bayeux/lights.csv data-bayeux/*.jpg
```

Where lights.csv looks something like this,
with directions of lights obtained from light calibration step.
(no need for it to be normalized, doesn't matter)

```csv
-5572.41288647651,10223.2280248599,15623.3881625612
876.927634237602,11292.6574672864,17249.6879948994
12776.0813287204,8668.26040675236,13911.4380411348
12786.3370930413,-9549.51952069571,14667.6582011582
-621.520276780703,-14452.6359158454,21081.5492969975
-6864.35747542611,-12329.6532693843,16371.3369552331
-2573.12258838687,8006.53578329793,3595.50507522962
527.933316704627,8929.57862981802,3163.89869781967
4714.1393569844,7492.79095402622,3322.70178780881
2526.69339688908,-4849.89934872433,2260.10657467306
-152.155440768913,-6391.24330609897,2438.04051185047
-2874.79542451994,-7889.12989043371,3573.23949150095
```

And the images passed as arguments with `data-bayeux/*jpg` should not contain
the first, almost black, reference image.
We do as if it was already deducted from all images.