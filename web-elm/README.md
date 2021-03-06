This is the Web application for the lowrr algorithm.

It's written using the Elm language and compiled to a JavaScript SPA with the following command:

```sh
elm make src/Main.elm --optimize --output=static/Elm.js
```

The `static/` directory contains all the files needed for the application to be served by a static server, meaning it's extremely easy to host this application on any server or on your own computer.
You just have to compile the Elm, Rust and WebAssembly parts of this repository, then simply start a static server inside the `static/` directory, such as:

```sh
python -m http.server 8080
```

You can then open the app in your browser at the address http://localhost:8080/.

## Bundling the JavaScript code

All the JavaScript code lives directly inside the `static/` directory.
Its main entry point is the `main.js` module, which activates the ports to Elm declared in `ports.js`, which in turn loads the `worker.mjs` module inside a Web worker, which then load the wasm module within the `static/pkg/` directory.
That `static/pkg/` directory is actually a link to the one resulting of the compilation of the WebAssembly code, in `../lowrr-wasm/pkg/`.
If your OS does not support symlinks (Windows), you'll probably have to manually create and update that `pkg/` folder every time the WebAssembly code is recompiled.

Since the worker file `worker.mjs` is defined as an ES module, it cannot be directly loaded as-is because Web workers do not support ES modules yet.
It is why the code in `ports.js` start a `new Worker("worker.js")` and not `worker.mjs`.
That file is generated by a "bundler" tool called [esbuild][esbuild] with the following command:

```sh
esbuild worker.mjs --bundle --preserve-symlinks --outfile=worker.js
```

[esbuild]: https://github.com/evanw/esbuild

## Example images

The example images supposed to be loaded if you click on "directly use this example set of 6 images" in the application are not in the git repository to minimize space.
You will find them in [that unicloud folder][unicloud-images].
Download them, rename them to `01-06.jpg`, and put them inside `static/img/bd_caen/` if you want to use them in the application.

[unicloud-images]: https://unicloud.unicaen.fr/index.php/s/tLYTCgwJ9EAqntw
