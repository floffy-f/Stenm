(() => {
  // pkg/stenm_wasm.js
  var import_meta = {};
  var wasm;
  var cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
  cachedTextDecoder.decode();
  var cachegetUint8Memory0 = null;
  function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
      cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
  }
  function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
  }
  var heap = new Array(32).fill(void 0);
  heap.push(void 0, null, true, false);
  var heap_next = heap.length;
  function addHeapObject(obj) {
    if (heap_next === heap.length)
      heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];
    heap[idx] = obj;
    return idx;
  }
  function getObject(idx) {
    return heap[idx];
  }
  var WASM_VECTOR_LEN = 0;
  var cachedTextEncoder = new TextEncoder("utf-8");
  var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
  } : function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
  function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === void 0) {
      const buf = cachedTextEncoder.encode(arg);
      const ptr2 = malloc(buf.length);
      getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
      WASM_VECTOR_LEN = buf.length;
      return ptr2;
    }
    let len = arg.length;
    let ptr = malloc(len);
    const mem = getUint8Memory0();
    let offset = 0;
    for (; offset < len; offset++) {
      const code = arg.charCodeAt(offset);
      if (code > 127)
        break;
      mem[ptr + offset] = code;
    }
    if (offset !== len) {
      if (offset !== 0) {
        arg = arg.slice(offset);
      }
      ptr = realloc(ptr, len, len = offset + arg.length * 3);
      const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
      const ret = encodeString(arg, view);
      offset += ret.written;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
  }
  var cachegetInt32Memory0 = null;
  function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
      cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
  }
  function dropObject(idx) {
    if (idx < 36)
      return;
    heap[idx] = heap_next;
    heap_next = idx;
  }
  function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
  }
  function debugString(val) {
    const type = typeof val;
    if (type == "number" || type == "boolean" || val == null) {
      return `${val}`;
    }
    if (type == "string") {
      return `"${val}"`;
    }
    if (type == "symbol") {
      const description = val.description;
      if (description == null) {
        return "Symbol";
      } else {
        return `Symbol(${description})`;
      }
    }
    if (type == "function") {
      const name = val.name;
      if (typeof name == "string" && name.length > 0) {
        return `Function(${name})`;
      } else {
        return "Function";
      }
    }
    if (Array.isArray(val)) {
      const length = val.length;
      let debug = "[";
      if (length > 0) {
        debug += debugString(val[0]);
      }
      for (let i = 1; i < length; i++) {
        debug += ", " + debugString(val[i]);
      }
      debug += "]";
      return debug;
    }
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
      className = builtInMatches[1];
    } else {
      return toString.call(val);
    }
    if (className == "Object") {
      try {
        return "Object(" + JSON.stringify(val) + ")";
      } catch (_) {
        return "Object";
      }
    }
    if (val instanceof Error) {
      return `${val.name}: ${val.message}
${val.stack}`;
    }
    return className;
  }
  function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
      state.cnt++;
      const a = state.a;
      state.a = 0;
      try {
        return f(a, state.b, ...args);
      } finally {
        if (--state.cnt === 0) {
          wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
        } else {
          state.a = a;
        }
      }
    };
    real.original = state;
    return real;
  }
  function __wbg_adapter_20(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0fad0911a14fabff(arg0, arg1, addHeapObject(arg2));
  }
  function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
  }
  function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
  }
  function handleError(f) {
    return function() {
      try {
        return f.apply(this, arguments);
      } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
      }
    };
  }
  function __wbg_adapter_41(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures__invoke2_mut__h8777040fa8ea93b6(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
  }
  var Stenm = class {
    static __wrap(ptr) {
      const obj = Object.create(Stenm.prototype);
      obj.ptr = ptr;
      return obj;
    }
    __destroy_into_raw() {
      const ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
    free() {
      const ptr = this.__destroy_into_raw();
      wasm.__wbg_stenm_free(ptr);
    }
    static init() {
      var ret = wasm.stenm_init();
      return Stenm.__wrap(ret);
    }
    load(id, img_file) {
      var ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ptr1 = passArray8ToWasm0(img_file, wasm.__wbindgen_malloc);
      var len1 = WASM_VECTOR_LEN;
      wasm.stenm_load(this.ptr, ptr0, len0, ptr1, len1);
    }
    run(params) {
      var ret = wasm.stenm_run(this.ptr, addHeapObject(params));
      return takeObject(ret);
    }
    image_ids() {
      var ret = wasm.stenm_image_ids(this.ptr);
      return takeObject(ret);
    }
    cropped_img_file(i) {
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.stenm_cropped_img_file(retptr, this.ptr, i);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    register_and_save(i) {
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.stenm_register_and_save(retptr, this.ptr, i);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
  };
  async function load(module, imports) {
    if (typeof Response === "function" && module instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming === "function") {
        try {
          return await WebAssembly.instantiateStreaming(module, imports);
        } catch (e) {
          if (module.headers.get("Content-Type") != "application/wasm") {
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
          } else {
            throw e;
          }
        }
      }
      const bytes = await module.arrayBuffer();
      return await WebAssembly.instantiate(bytes, imports);
    } else {
      const instance = await WebAssembly.instantiate(module, imports);
      if (instance instanceof WebAssembly.Instance) {
        return { instance, module };
      } else {
        return instance;
      }
    }
  }
  async function init(input) {
    if (typeof input === "undefined") {
      input = new URL("stenm_wasm_bg.wasm", import_meta.url);
    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_log_f7c237618bada41f = function(arg0, arg1) {
      console.log(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_json_parse = function(arg0, arg1) {
      var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_json_serialize = function(arg0, arg1) {
      const obj = getObject(arg1);
      var ret = JSON.stringify(obj === void 0 ? null : obj);
      var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len0;
      getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
      takeObject(arg0);
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
      const obj = takeObject(arg0).original;
      if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
      }
      var ret = false;
      return ret;
    };
    imports.wbg.__wbg_appLog_21c4f8183421fc75 = function(arg0, arg1, arg2) {
      appLog(arg0 >>> 0, getStringFromWasm0(arg1, arg2));
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
      var ret = getStringFromWasm0(arg0, arg1);
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_shouldStop_93933a126006f0cb = function(arg0, arg1, arg2, arg3) {
      var ret = shouldStop(getStringFromWasm0(arg0, arg1), arg2 === 0 ? void 0 : arg3 >>> 0);
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_f5e0576f61ee7461 = handleError(function(arg0, arg1, arg2) {
      var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
      return addHeapObject(ret);
    });
    imports.wbg.__wbg_new_3ea8490cd276c848 = function(arg0, arg1) {
      try {
        var state0 = { a: arg0, b: arg1 };
        var cb0 = (arg02, arg12) => {
          const a = state0.a;
          state0.a = 0;
          try {
            return __wbg_adapter_41(a, state0.b, arg02, arg12);
          } finally {
            state0.a = a;
          }
        };
        var ret = new Promise(cb0);
        return addHeapObject(ret);
      } finally {
        state0.a = state0.b = 0;
      }
    };
    imports.wbg.__wbg_resolve_778af3f90b8e2b59 = function(arg0) {
      var ret = Promise.resolve(getObject(arg0));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_then_367b3e718069cfb9 = function(arg0, arg1) {
      var ret = getObject(arg0).then(getObject(arg1));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_then_ac66ca61394bfd21 = function(arg0, arg1, arg2) {
      var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_59cb74e423758ede = function() {
      var ret = new Error();
      return addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_558ba5917b466edd = function(arg0, arg1) {
      var ret = getObject(arg1).stack;
      var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len0;
      getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
      try {
        console.error(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(arg0, arg1);
      }
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
      const v = getObject(arg0);
      var ret = typeof v === "boolean" ? v ? 1 : 0 : 2;
      return ret;
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
      var ret = debugString(getObject(arg1));
      var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len0;
      getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_rethrow = function(arg0) {
      throw takeObject(arg0);
    };
    imports.wbg.__wbindgen_closure_wrapper478 = function(arg0, arg1, arg2) {
      var ret = makeMutClosure(arg0, arg1, 244, __wbg_adapter_20);
      return addHeapObject(ret);
    };
    if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
      input = fetch(input);
    }
    const { instance, module } = await load(await input, imports);
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    return wasm;
  }
  var stenm_wasm_default = init;

  // worker.mjs
  var Stenm2;
  (async function() {
    await stenm_wasm_default("./pkg/stenm_wasm_bg.wasm");
    Stenm2 = Stenm.init();
  })();
  var stopOrder = false;
  console.log("Hello from worker");
  onmessage = async function(event) {
    console.log(`worker message: ${event.data.type}`);
    if (event.data.type == "decode-image") {
      await decode(event.data.data);
      postMessage({ type: "image-decoded", data: event.data.data });
    } else if (event.data.type == "run") {
      await run(event.data.data);
    } else if (event.data.type == "warp-encode") {
      await warpEncode(event.data.data);
    } else if (event.data.type == "stop") {
      console.log("Received STOP in worker");
      stopOrder = true;
    }
  };
  async function decode({ id, url }) {
    console.log("Loading into wasm: " + id);
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    Stenm2.load(id, new Uint8Array(arrayBuffer));
  }
  async function run(params) {
    console.log("worker running with parameters:", params);
    const args = {
      config: {
        lambda: params.lambda,
        rho: params.rho,
        max_iterations: params.maxIterations,
        threshold: params.convergenceThreshold,
        sparse_ratio_threshold: params.sparse,
        levels: params.levels,
        verbosity: params.maxVerbosity
      },
      equalize: 0.5,
      crop: params.crop
    };
    stopOrder = false;
    let motion = await Stenm2.run(args);
    const image_ids = Stenm2.image_ids();
    const imgCount = image_ids.length;
    console.log(`Encoding ${imgCount} cropped aligned images:`);
    for (let i = 0; i < imgCount; i++) {
      await shouldStop("encoding", i);
      const id = image_ids[i];
      console.log("   Encoding ", id, " ...");
      let croppedImgArrayU8 = Stenm2.cropped_img_file(i);
      postMessage({
        type: "cropped-image",
        data: { id, arrayBuffer: croppedImgArrayU8.buffer, imgCount }
      }, [croppedImgArrayU8.buffer]);
    }
    await shouldStop("done", null);
  }
  async function warpEncode({ imgCount }) {
    stopOrder = false;
    console.log("Warping and encoding registered images");
    for (let i = 0; i < imgCount; i++) {
      if (await shouldStop("saving", i)) {
        appLog(0, "Saving stopped by user");
        await shouldStop("done", null);
        break;
      }
      let imgArrayU8 = Stenm2.register_and_save(i);
      postMessage({
        type: "registered-image",
        data: { index: i, arrayBuffer: imgArrayU8.buffer, imgCount }
      }, [imgArrayU8.buffer]);
    }
    await shouldStop("done", null);
  }
  function appLog(lvl, content) {
    postMessage({ type: "log", data: { lvl, content } });
  }
  async function shouldStop(step, progress) {
    postMessage({ type: "should-stop", data: { step, progress } });
    await sleep(0);
    return stopOrder;
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
})();
