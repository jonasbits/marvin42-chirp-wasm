! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.ChirpConnectSDK = {})
}(this, function(e) {
    "use strict";
    var t, E = void 0 !== (E = {
            locateFile: function(e, t) {
                return "https://public.chirp.io/wasm/3.0.3/" + e
            }
        }) ? E : {},
        n = {};
    for (t in E) E.hasOwnProperty(t) && (n[t] = E[t]);
    E.arguments = [], E.thisProgram = "./this.program", E.quit = function(e, t) {
        throw t
    }, E.preRun = [];
    var i, f = !(E.postRun = []),
        d = !1,
        r = !1;
    if (f = "object" == typeof window, d = "function" == typeof importScripts, r = "object" == typeof process && "function" == typeof require && !f && !d, i = !f && !r && !d, E.ENVIRONMENT) throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
    var a, o, _ = "";

    function p(e) {
        return E.locateFile ? E.locateFile(e, _) : _ + e
    }
    if (r) _ = __dirname + "/", E.read = function(e, t) {
        var n;
        return a || (a = require("fs")), o || (o = require("path")), e = o.normalize(e), n = a.readFileSync(e), t ? n : n.toString()
    }, E.readBinary = function(e) {
        var t = E.read(e, !0);
        return t.buffer || (t = new Uint8Array(t)), O(t.buffer), t
    }, 1 < process.argv.length && (E.thisProgram = process.argv[1].replace(/\\/g, "/")), E.arguments = process.argv.slice(2), "undefined" != typeof module && (module.exports = E), process.on("uncaughtException", function(e) {
        if (!(e instanceof rn)) throw e
    }), process.on("unhandledRejection", sn), E.quit = function(e) {
        process.exit(e)
    }, E.inspect = function() {
        return "[Emscripten Module object]"
    };
    else if (i) "undefined" != typeof read && (E.read = function(e) {
        return read(e)
    }), E.readBinary = function(e) {
        var t;
        return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (O("object" == typeof(t = read(e, "binary"))), t)
    }, "undefined" != typeof scriptArgs ? E.arguments = scriptArgs : void 0 !== arguments && (E.arguments = arguments), "function" == typeof quit && (E.quit = function(e) {
        quit(e)
    });
    else {
        if (!f && !d) throw new Error("environment detection error");
        d ? _ = self.location.href : document.currentScript && (_ = document.currentScript.src), _ = 0 !== _.indexOf("blob:") ? _.substr(0, _.lastIndexOf("/") + 1) : "", E.read = function(e) {
            var t = new XMLHttpRequest;
            return t.open("GET", e, !1), t.send(null), t.responseText
        }, d && (E.readBinary = function(e) {
            var t = new XMLHttpRequest;
            return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
        }), E.readAsync = function(e, t, n) {
            var i = new XMLHttpRequest;
            i.open("GET", e, !0), i.responseType = "arraybuffer", i.onload = function() {
                200 == i.status || 0 == i.status && i.response ? t(i.response) : n()
            }, i.onerror = n, i.send(null)
        }, E.setWindowTitle = function(e) {
            document.title = e
        }
    }
    var s = E.print || ("undefined" != typeof console ? console.log.bind(console) : "undefined" != typeof print ? print : null),
        m = E.printErr || ("undefined" != typeof printErr ? printErr : "undefined" != typeof console && console.warn.bind(console) || s);
    for (t in n) n.hasOwnProperty(t) && (E[t] = n[t]);
    O((n = void 0) === E.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), O(void 0 === E.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), O(void 0 === E.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), O(void 0 === E.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");

    function h(e) {
        O(!te);
        var t = ee;
        return O((ee = ee + e + 15 & -16) < de, "not enough memory for static allocation - increase TOTAL_MEMORY"), t
    }

    function y(e) {
        O(oe);
        var t = K[oe >> 2],
            n = t + e + 15 & -16;
        if ((K[oe >> 2] = n, de <= n) && !le()) return K[oe >> 2] = t, 0;
        return t
    }

    function c(e, t) {
        return t || (t = 16), e = Math.ceil(e / t) * t
    }

    function T(e) {
        switch (e) {
            case "i1":
            case "i8":
                return 1;
            case "i16":
                return 2;
            case "i32":
                return 4;
            case "i64":
                return 8;
            case "float":
                return 4;
            case "double":
                return 8;
            default:
                if ("*" === e[e.length - 1]) return 4;
                if ("i" === e[0]) {
                    var t = parseInt(e.substr(1));
                    return O(t % 8 == 0), t / 8
                }
                return 0
        }
    }
    nn = tn = en = function() {
        sn("cannot use the stack before compiled code is ready to run, and has provided stack access")
    };
    var g = {
            "f64-rem": function(e, t) {
                return e % t
            },
            debugger: function() {}
        },
        u = new Array(20);
    var l = 0;

    function w(e, t) {
        switch (e) {
            case 1:
                return "i8";
            case 2:
                return "i16";
            case 4:
                return t ? "float" : "i32";
            case 8:
                return "double";
            default:
                O(0)
        }
    }

    function v(e, t, n, i) {
        e <= 0 && sn("segmentation fault storing " + n + " bytes to address " + e), e % n != 0 && sn("alignment error storing to address " + e + ", which was expected to be aligned to a multiple of " + n), te ? (e + n > K[oe >> 2] && sn("segmentation fault, exceeded the top of the available dynamic heap when storing " + n + " bytes to address " + e + ". STATICTOP=" + ee + ", DYNAMICTOP=" + K[oe >> 2]), O(oe), O(K[oe >> 2] <= de)) : ee < e + n && sn("segmentation fault, exceeded the top of the available static heap when storing " + n + " bytes to address " + e + ". STATICTOP=" + ee), N(e, t, w(n, i), 1)
    }

    function b(e, t, n) {
        v(e, t, n, !0)
    }

    function R(e, t, n, i) {
        e <= 0 && sn("segmentation fault loading " + t + " bytes from address " + e), e % t != 0 && sn("alignment error loading from address " + e + ", which was expected to be aligned to a multiple of " + t), te ? (e + t > K[oe >> 2] && sn("segmentation fault, exceeded the top of the available dynamic heap when loading " + t + " bytes from address " + e + ". STATICTOP=" + ee + ", DYNAMICTOP=" + K[oe >> 2]), O(oe), O(K[oe >> 2] <= de)) : ee < e + t && sn("segmentation fault, exceeded the top of the available static heap when loading " + t + " bytes from address " + e + ". STATICTOP=" + ee);
        var r = w(t, i),
            a = C(e, r, 1);
        return n && (a = function(e, t, n) {
            if (0 <= e) return e;
            return t <= 32 ? 2 * Math.abs(1 << t - 1) + e : Math.pow(2, t) + e
        }(a, parseInt(r.substr(1)))), a
    }

    function M(e, t, n) {
        return R(e, t, n, !0)
    }
    var I = !1;

    function O(e, t) {
        e || sn("Assertion failed: " + t)
    }
    var A = {
            stackSave: function() {
                nn()
            },
            stackRestore: function() {
                tn()
            },
            arrayToC: function(e) {
                var t, n, i = en(e.length);
                return n = i, O(0 <= (t = e).length, "writeArrayToMemory array must have a length (should be an array or typed array)"), W.set(t, n), i
            },
            stringToC: function(e) {
                var t = 0;
                if (null != e && 0 !== e) {
                    var n = 1 + (e.length << 2);
                    B(e, t = en(n), n)
                }
                return t
            }
        },
        x = {
            string: A.stringToC,
            array: A.arrayToC
        };

    function S(e, t, n, i, r) {
        var a, o, _ = (O(o = E["_" + (a = e)], "Cannot call unknown function " + a + ", make sure it is exported"), o),
            s = [],
            c = 0;
        if (O("array" !== t, 'Return type should not be "array".'), i)
            for (var u = 0; u < i.length; u++) {
                var l = x[n[u]];
                l ? (0 === c && (c = nn()), s[u] = l(i[u])) : s[u] = i[u]
            }
        var f, d = _.apply(null, s);
        return f = d, d = "string" === t ? P(f) : "boolean" === t ? Boolean(f) : f, 0 !== c && tn(c), d
    }

    function N(e, t, n, i) {
        if ("*" === (n = n || "i8").charAt(n.length - 1) && (n = "i32"), i) switch (n) {
            case "i1":
            case "i8":
                W[e >> 0] = t;
                break;
            case "i16":
                q[e >> 1] = t;
                break;
            case "i32":
                K[e >> 2] = t;
                break;
            case "i64":
                tempI64 = [t >>> 0, (tempDouble = t, 1 <= +we(tempDouble) ? 0 < tempDouble ? (0 | Me(+be(tempDouble / 4294967296), 4294967295)) >>> 0 : ~~+ve((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], K[e >> 2] = tempI64[0], K[e + 4 >> 2] = tempI64[1];
                break;
            case "float":
                Z[e >> 2] = t;
                break;
            case "double":
                $[e >> 3] = t;
                break;
            default:
                sn("invalid type for setValue: " + n)
        } else switch (n) {
            case "i1":
            case "i8":
                v(0 | e, 0 | t, 1);
                break;
            case "i16":
                v(0 | e, 0 | t, 2);
                break;
            case "i32":
                v(0 | e, 0 | t, 4);
                break;
            case "i64":
                tempI64 = [t >>> 0, (tempDouble = t, 1 <= +we(tempDouble) ? 0 < tempDouble ? (0 | Me(+be(tempDouble / 4294967296), 4294967295)) >>> 0 : ~~+ve((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], v(0 | e, 0 | tempI64[0], 4), v(e + 4 | 0, 0 | tempI64[1], 4);
                break;
            case "float":
                b(0 | e, Re(t), 4);
                break;
            case "double":
                b(0 | e, +t, 8);
                break;
            default:
                sn("invalid type for setValue: " + n)
        }
    }

    function C(e, t, n) {
        if ("*" === (t = t || "i8").charAt(t.length - 1) && (t = "i32"), n) switch (t) {
            case "i1":
            case "i8":
                return W[e >> 0];
            case "i16":
                return q[e >> 1];
            case "i32":
            case "i64":
                return K[e >> 2];
            case "float":
                return Z[e >> 2];
            case "double":
                return $[e >> 3];
            default:
                sn("invalid type for getValue: " + t)
        } else switch (t) {
            case "i1":
            case "i8":
                return 0 | R(0 | e, 1, 0);
            case "i16":
                return 0 | R(0 | e, 2, 0);
            case "i32":
                return 0 | R(0 | e, 4, 0);
            case "i64":
                return 0 | R(0 | e, 8, 0);
            case "float":
                return Re(M(0 | e, 4, 0));
            case "double":
                return +M(0 | e, 8, 0);
            default:
                sn("invalid type for getValue: " + t)
        }
        return null
    }
    var F = 0,
        U = 2,
        D = 4;

    function k(e, t, n, i) {
        var r, a;
        "number" == typeof e ? (r = !0, a = e) : (r = !1, a = e.length);
        var o, _ = "string" == typeof t ? t : null;
        if (o = n == D ? i : ["function" == typeof $t ? $t : h, en, h, y][void 0 === n ? U : n](Math.max(a, _ ? 1 : t.length)), r) {
            var s;
            for (O(0 == (3 & (i = o))), s = o + (-4 & a); i < s; i += 4) K[i >> 2] = 0;
            for (s = o + a; i < s;) W[i++ >> 0] = 0;
            return o
        }
        if ("i8" === _) return e.subarray || e.slice ? V.set(e, o) : V.set(new Uint8Array(e), o), o;
        for (var c, u, l, f = 0; f < a;) {
            var d = e[f];
            0 !== (c = _ || t[f]) ? (O(c, "Must know what type to store in allocate!"), "i64" == c && (c = "i32"), N(o + f, d, c), l !== c && (u = T(c), l = c), f += u) : f++
        }
        return o
    }

    function X(e) {
        return te ? Ee ? $t(e) : y(e) : h(e)
    }

    function P(e, t) {
        if (0 === t || !e) return "";
        for (var n, i = 0, r = 0; O(e + r < de), i |= n = 0 | R(e + r | 0, 1, 1), (0 != n || t) && (r++, !t || r != t););
        t || (t = r);
        var a = "";
        if (i < 128) {
            for (var o; 0 < t;) o = String.fromCharCode.apply(String, V.subarray(e, e + Math.min(t, 1024))), a = a ? a + o : o, e += 1024, t -= 1024;
            return a
        }
        return j(V, e)
    }
    var L = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

    function j(e, t) {
        for (var n = t; e[n];) ++n;
        if (16 < n - t && e.subarray && L) return L.decode(e.subarray(t, n));
        for (var i, r, a, o, _, s = "";;) {
            if (!(i = e[t++])) return s;
            if (128 & i)
                if (r = 63 & e[t++], 192 != (224 & i))
                    if (a = 63 & e[t++], 224 == (240 & i) ? i = (15 & i) << 12 | r << 6 | a : (o = 63 & e[t++], 240 == (248 & i) ? i = (7 & i) << 18 | r << 12 | a << 6 | o : (_ = 63 & e[t++], i = 248 == (252 & i) ? (3 & i) << 24 | r << 18 | a << 12 | o << 6 | _ : (1 & i) << 30 | r << 24 | a << 18 | o << 12 | _ << 6 | 63 & e[t++])), i < 65536) s += String.fromCharCode(i);
                    else {
                        var c = i - 65536;
                        s += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                    }
            else s += String.fromCharCode((31 & i) << 6 | r);
            else s += String.fromCharCode(i)
        }
    }

    function H(e, t, n, i) {
        if (!(0 < i)) return 0;
        for (var r = n, a = n + i - 1, o = 0; o < e.length; ++o) {
            var _ = e.charCodeAt(o);
            if (55296 <= _ && _ <= 57343) _ = 65536 + ((1023 & _) << 10) | 1023 & e.charCodeAt(++o);
            if (_ <= 127) {
                if (a <= n) break;
                t[n++] = _
            } else if (_ <= 2047) {
                if (a <= n + 1) break;
                t[n++] = 192 | _ >> 6, t[n++] = 128 | 63 & _
            } else if (_ <= 65535) {
                if (a <= n + 2) break;
                t[n++] = 224 | _ >> 12, t[n++] = 128 | _ >> 6 & 63, t[n++] = 128 | 63 & _
            } else if (_ <= 2097151) {
                if (a <= n + 3) break;
                t[n++] = 240 | _ >> 18, t[n++] = 128 | _ >> 12 & 63, t[n++] = 128 | _ >> 6 & 63, t[n++] = 128 | 63 & _
            } else if (_ <= 67108863) {
                if (a <= n + 4) break;
                t[n++] = 248 | _ >> 24, t[n++] = 128 | _ >> 18 & 63, t[n++] = 128 | _ >> 12 & 63, t[n++] = 128 | _ >> 6 & 63, t[n++] = 128 | 63 & _
            } else {
                if (a <= n + 5) break;
                t[n++] = 252 | _ >> 30, t[n++] = 128 | _ >> 24 & 63, t[n++] = 128 | _ >> 18 & 63, t[n++] = 128 | _ >> 12 & 63, t[n++] = 128 | _ >> 6 & 63, t[n++] = 128 | 63 & _
            }
        }
        return t[n] = 0, n - r
    }

    function B(e, t, n) {
        return O("number" == typeof n, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), H(e, V, t, n)
    }
    "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");

    function Q(e) {
        return function e(t) {
            e.shown || (e.shown = {}), e.shown[t] || (e.shown[t] = 1, m(t))
        }("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"), e
    }

    function z() {
        var e = function() {
            var t = new Error;
            if (!t.stack) {
                try {
                    throw new Error(0)
                } catch (e) {
                    t = e
                }
                if (!t.stack) return "(no stack trace available)"
            }
            return t.stack.toString()
        }();
        return E.extraStackTrace && (e += "\n" + E.extraStackTrace()), e.replace(/__Z[\w\d_]+/g, function(e) {
            var t = Q(e);
            return e === t ? e : t + " [" + e + "]"
        })
    }
    var Y, W, V, q, G, K, J, Z, $, ee, te, ne, ie, re, ae, oe, _e = 65536;

    function se() {
        E.HEAP8 = W = new Int8Array(Y), E.HEAP16 = q = new Int16Array(Y), E.HEAP32 = K = new Int32Array(Y), E.HEAPU8 = V = new Uint8Array(Y), E.HEAPU16 = G = new Uint16Array(Y), E.HEAPU32 = J = new Uint32Array(Y), E.HEAPF32 = Z = new Float32Array(Y), E.HEAPF64 = $ = new Float64Array(Y)
    }

    function ce() {
        if (34821223 == J[(re >> 2) - 1] && 2310721022 == J[(re >> 2) - 2] || sn("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x" + J[(re >> 2) - 2].toString(16) + " " + J[(re >> 2) - 1].toString(16)), 1668509029 !== K[0]) throw "Runtime error: The application has corrupted its heap memory area (address zero)!"
    }

    function ue() {
        sn("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + de + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
    }

    function le() {
        ue()
    }
    ee = re = oe = 0, te = !1;
    var fe = E.TOTAL_STACK || 5242880,
        de = E.TOTAL_MEMORY || 16777216;
    if (de < fe && m("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + de + "! (TOTAL_STACK=" + fe + ")"), O("undefined" != typeof Int32Array && "undefined" != typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support"), E.buffer ? O((Y = E.buffer).byteLength === de, "provided buffer should be " + de + " bytes, but it is " + Y.byteLength) : ("object" == typeof WebAssembly && "function" == typeof WebAssembly.Memory ? (O(de % _e == 0), E.wasmMemory = new WebAssembly.Memory({
            initial: de / _e,
            maximum: de / _e
        }), Y = E.wasmMemory.buffer) : Y = new ArrayBuffer(de), O(Y.byteLength === de), E.buffer = Y), se(), K[0] = 1668509029, q[1] = 25459, 115 !== V[2] || 99 !== V[3]) throw "Runtime error: expected the system to be little-endian!";

    function pe(e) {
        for (; 0 < e.length;) {
            var t = e.shift();
            if ("function" != typeof t) {
                var n = t.func;
                "number" == typeof n ? void 0 === t.arg ? E.dynCall_v(n) : E.dynCall_vi(n, t.arg) : n(void 0 === t.arg ? null : t.arg)
            } else t()
        }
    }
    var me = [],
        he = [],
        ye = [],
        Te = [],
        Ee = !1;

    function ge(e, t, n) {
        for (var i = 0; i < e.length; ++i) O(e.charCodeAt(i) == e.charCodeAt(i) & 255), v(0 | t++, 0 | e.charCodeAt(i), 1);
        n || v(0 | t, 0, 1)
    }
    O(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), O(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), O(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"), O(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    var we = Math.abs,
        ve = Math.ceil,
        be = Math.floor,
        Re = Math.fround,
        Me = Math.min,
        Ie = 0,
        Oe = null,
        Ae = null,
        xe = {};

    function Se(e) {
        Ie++, E.monitorRunDependencies && E.monitorRunDependencies(Ie), e ? (O(!xe[e]), xe[e] = 1, null === Oe && "undefined" != typeof setInterval && (Oe = setInterval(function() {
            if (I) return clearInterval(Oe), void(Oe = null);
            var e = !1;
            for (var t in xe) e || (e = !0, m("still waiting on run dependencies:")), m("dependency: " + t);
            e && m("(end of list)")
        }, 1e4))) : m("warning: run dependency added without ID")
    }

    function Ne(e) {
        if (Ie--, E.monitorRunDependencies && E.monitorRunDependencies(Ie), e ? (O(xe[e]), delete xe[e]) : m("warning: run dependency removed without ID"), 0 == Ie && (null !== Oe && (clearInterval(Oe), Oe = null), Ae)) {
            var t = Ae;
            Ae = null, t()
        }
    }
    E.preloadedImages = {}, E.preloadedAudios = {};
    var Ce = {
        error: function() {
            sn("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1")
        },
        init: function() {
            Ce.error()
        },
        createDataFile: function() {
            Ce.error()
        },
        createPreloadedFile: function() {
            Ce.error()
        },
        createLazyFile: function() {
            Ce.error()
        },
        open: function() {
            Ce.error()
        },
        mkdev: function() {
            Ce.error()
        },
        registerDevice: function() {
            Ce.error()
        },
        analyzePath: function() {
            Ce.error()
        },
        loadFilesFromDB: function() {
            Ce.error()
        },
        ErrnoError: function() {
            Ce.error()
        }
    };
    E.FS_createDataFile = Ce.createDataFile, E.FS_createPreloadedFile = Ce.createPreloadedFile;
    var Fe = "data:application/octet-stream;base64,";

    function Ue(e) {
        return String.prototype.startsWith ? e.startsWith(Fe) : 0 === e.indexOf(Fe)
    }! function() {
        var e = "chirp-connect.wast",
            _ = "chirp-connect.wasm",
            t = "chirp-connect.temp.asm.js";
        Ue(e) || (e = p(e)), Ue(_) || (_ = p(_)), Ue(t) || (t = p(t));
        var s = {
                global: null,
                env: null,
                asm2wasm: g,
                parent: E
            },
            c = null;

        function u(e) {
            var t = E.buffer;
            e.byteLength < t.byteLength && m("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
            var n, i = new Int8Array(t);
            new Int8Array(e).set(i), n = e, E.buffer = Y = n, se()
        }

        function l() {
            try {
                if (E.wasmBinary) return new Uint8Array(E.wasmBinary);
                if (E.readBinary) return E.readBinary(_);
                throw "both async and sync fetching of the wasm failed"
            } catch (e) {
                sn(e)
            }
        }

        function o(e, t, n) {
            if ("object" != typeof WebAssembly) return sn("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead."), m("no native wasm support detected"), !1;
            if (!(E.wasmMemory instanceof WebAssembly.Memory)) return m("no native wasm Memory in use"), !1;

            function i(e, t) {
                (c = e.exports).memory && u(c.memory), E.asm = c, E.usingWasm = !0, Ne("wasm-instantiate")
            }
            if (t.memory = E.wasmMemory, s.global = {
                    NaN: NaN,
                    Infinity: 1 / 0
                }, s["global.Math"] = Math, s.env = t, Se("wasm-instantiate"), E.instantiateWasm) try {
                return E.instantiateWasm(s, i)
            } catch (e) {
                return m("Module.instantiateWasm callback failed with error: " + e), !1
            }
            var r = E;

            function a(e) {
                O(E === r, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), r = null, i(e.instance, e.module)
            }

            function o(e) {
                (E.wasmBinary || !f && !d || "function" != typeof fetch ? new Promise(function(e, t) {
                    e(l())
                }) : fetch(_, {
                    credentials: "same-origin"
                }).then(function(e) {
                    if (!e.ok) throw "failed to load wasm binary file at '" + _ + "'";
                    return e.arrayBuffer()
                }).catch(function() {
                    return l()
                })).then(function(e) {
                    return WebAssembly.instantiate(e, s)
                }).then(e, function(e) {
                    m("failed to asynchronously prepare wasm: " + e), sn(e)
                })
            }
            return E.wasmBinary || "function" != typeof WebAssembly.instantiateStreaming || Ue(_) || "function" != typeof fetch ? o(a) : WebAssembly.instantiateStreaming(fetch(_, {
                credentials: "same-origin"
            }), s).then(a, function(e) {
                m("wasm streaming compile failed: " + e), m("falling back to ArrayBuffer instantiation"), o(a)
            }), {}
        }
        E.asmPreload = E.asm, E.reallocBuffer = function(e) {
            return function(t) {
                var e, n, i = E.usingWasm ? _e : 16777216;
                0 < (e = t) % (n = i) && (e += n - e % n), t = e;
                var r = E.buffer.byteLength;
                if (E.usingWasm) try {
                    return -1 !== E.wasmMemory.grow((t - r) / 65536) ? E.buffer = E.wasmMemory.buffer : null
                } catch (e) {
                    return console.error("Module.reallocBuffer: Attempted to grow from " + r + " bytes to " + t + " bytes, but got error: " + e), null
                }
            }(e)
        }, E.asm = function(e, t, n) {
            if (!t.table) {
                var i = E.wasmTableSize;
                void 0 === i && (i = 1024);
                var r = E.wasmMaxTableSize;
                "object" == typeof WebAssembly && "function" == typeof WebAssembly.Table ? t.table = void 0 !== r ? new WebAssembly.Table({
                    initial: i,
                    maximum: r,
                    element: "anyfunc"
                }) : new WebAssembly.Table({
                    initial: i,
                    element: "anyfunc"
                }) : t.table = new Array(i), E.wasmTable = t.table
            }
            var a;
            return t.__memory_base || (t.__memory_base = E.STATIC_BASE), t.__table_base || (t.__table_base = 0), O(a = o(0, t), "no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: http://kripken.github.io/emscripten-site/docs/compiling/WebAssembly.html#binaryen-methods"), a
        }
    }();
    var De = [function() {
        return navigator.onLine
    }, function() {
        E.onAuthenticationError()
    }];
    ee = 18816, he.push({
        func: function() {
            Gt()
        }
    });
    E.STATIC_BASE = 1024, E.STATIC_BUMP = 17792;
    var ke = ee;
    ee += 16, O(ke % 8 == 0);
    var Xe = {};
    var Pe = {
        buffers: [null, [],
            []
        ],
        printChar: function(e, t) {
            var n = Pe.buffers[e];
            O(n), 0 === t || 10 === t ? ((1 === e ? s : m)(j(n, 0)), n.length = 0) : n.push(t)
        },
        varargs: 0,
        get: function(e) {
            return Pe.varargs += 4, 0 | R(Pe.varargs - 4 | 0, 4, 0)
        },
        getStr: function() {
            return P(Pe.get())
        },
        get64: function() {
            var e = Pe.get(),
                t = Pe.get();
            return O(0 <= e ? 0 === t : -1 === t), e
        },
        getZero: function() {
            O(0 === Pe.get())
        }
    };

    function Le() {
        sn()
    }

    function je() {
        return r || "undefined" != typeof dateNow || (f || d) && self.performance && self.performance.now
    }
    var He = 22;

    function Be(e) {
        return E.___errno_location ? v(0 | E.___errno_location(), 0 | e, 4) : m("failed to set errno from JS"), e
    }
    var Qe = ee;
    ee += 48;
    k(et("GMT"), "i8", U);

    function ze() {
        if (!ze.called) {
            ze.called = !0, v(0 | Jt(), 60 * (new Date).getTimezoneOffset() | 0, 4);
            var e = new Date(2e3, 0, 1),
                t = new Date(2e3, 6, 1);
            v(0 | Kt(), 0 | Number(e.getTimezoneOffset() != t.getTimezoneOffset()), 4);
            var n = o(e),
                i = o(t),
                r = k(et(n), "i8", F),
                a = k(et(i), "i8", F);
            t.getTimezoneOffset() < e.getTimezoneOffset() ? (v(0 | Zt(), 0 | r, 4), v(Zt() + 4 | 0, 0 | a, 4)) : (v(0 | Zt(), 0 | a, 4), v(Zt() + 4 | 0, 0 | r, 4))
        }

        function o(e) {
            var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
            return t ? t[1] : "GMT"
        }
    }

    function Ye(e, t) {
        ze();
        var n = new Date(1e3 * (0 | R(0 | e, 4, 0)));
        v(0 | t, 0 | n.getSeconds(), 4), v(t + 4 | 0, 0 | n.getMinutes(), 4), v(t + 8 | 0, 0 | n.getHours(), 4), v(t + 12 | 0, 0 | n.getDate(), 4), v(t + 16 | 0, 0 | n.getMonth(), 4), v(t + 20 | 0, n.getFullYear() - 1900 | 0, 4), v(t + 24 | 0, 0 | n.getDay(), 4);
        var i = new Date(n.getFullYear(), 0, 1);
        v(t + 28 | 0, 0 | ((n.getTime() - i.getTime()) / 864e5 | 0), 4), v(t + 36 | 0, -60 * n.getTimezoneOffset() | 0, 4);
        var r = new Date(2e3, 6, 1).getTimezoneOffset(),
            a = i.getTimezoneOffset(),
            o = 0 | (r != a && n.getTimezoneOffset() == Math.min(a, r));
        return v(t + 32 | 0, 0 | o, 4), v(t + 40 | 0, 0 | (0 | R(Zt() + (o ? 4 : 0) | 0, 4, 0)), 4), t
    }

    function We(e, t) {
        var n = 0 | R(0 | e, 4, 0),
            i = 0 | R(e + 4 | 0, 4, 0),
            r = 0 | R(e + 8 | 0, 4, 0),
            a = 0 | R(e + 12 | 0, 4, 0),
            o = 0 | R(e + 16 | 0, 4, 0),
            _ = 0 | R(e + 20 | 0, 4, 0);
        return B(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][0 | R(e + 24 | 0, 4, 0)] + " " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][o] + (a < 10 ? "  " : " ") + a + (r < 10 ? " 0" : " ") + r + (i < 10 ? ":0" : ":") + i + (n < 10 ? ":0" : ":") + n + " " + (1900 + _) + "\n", t, 26), t
    }

    function Ve(e, t) {
        var n = nn(),
            i = We(Ye(e, en(44)), t);
        return tn(n), i
    }
    ee += 48;
    var qe = {
        attr_t_offset_requestMethod: 0,
        attr_t_offset_userData: 32,
        attr_t_offset_onsuccess: 36,
        attr_t_offset_onerror: 40,
        attr_t_offset_onprogress: 44,
        attr_t_offset_attributes: 48,
        attr_t_offset_timeoutMSecs: 52,
        attr_t_offset_withCredentials: 56,
        attr_t_offset_destinationPath: 60,
        attr_t_offset_userName: 64,
        attr_t_offset_password: 68,
        attr_t_offset_requestHeaders: 72,
        attr_t_offset_overriddenMimeType: 76,
        attr_t_offset_requestData: 80,
        attr_t_offset_requestDataSize: 84,
        fetch_t_offset_id: 0,
        fetch_t_offset_userData: 4,
        fetch_t_offset_url: 8,
        fetch_t_offset_data: 12,
        fetch_t_offset_numBytes: 16,
        fetch_t_offset_dataOffset: 24,
        fetch_t_offset_totalBytes: 32,
        fetch_t_offset_readyState: 40,
        fetch_t_offset_status: 42,
        fetch_t_offset_statusText: 44,
        fetch_t_offset___proxyState: 108,
        fetch_t_offset___attributes: 112,
        xhrs: [],
        worker: void 0,
        dbInstance: void 0,
        setu64: function(e, t) {
            J[e >> 2] = t, J[e + 4 >> 2] = t / 4294967296 | 0
        },
        openDatabase: function(e, t, n, i) {
            try {
                var r = indexedDB.open(e, t)
            } catch (e) {
                return i(e)
            }
            r.onupgradeneeded = function(e) {
                var t = e.target.result;
                t.objectStoreNames.contains("FILES") && t.deleteObjectStore("FILES"), t.createObjectStore("FILES")
            }, r.onsuccess = function(e) {
                n(e.target.result)
            }, r.onerror = function(e) {
                i(e)
            }
        },
        initFetchWorker: function() {
            var e = k(32768, "i32*", 3);
            qe.worker.postMessage({
                cmd: "init",
                TOTAL_MEMORY: de,
                DYNAMICTOP_PTR: oe,
                STACKTOP: e,
                STACK_MAX: e + 131072,
                queuePtr: $e,
                buffer: V.buffer
            })
        },
        staticInit: function() {
            var t = "undefined" == typeof ENVIRONMENT_IS_FETCH_WORKER;
            qe.openDatabase("emscripten_filesystem", 1, function(e) {
                qe.dbInstance = e, t && Ne("library_fetch_init")
            }, function() {
                qe.dbInstance = !1, t && Ne("library_fetch_init")
            }), "undefined" != typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER || Se("library_fetch_init")
        }
    };

    function Ge(r, a, o, i) {
        var e = J[r + qe.fetch_t_offset_url >> 2];
        if (e) {
            var t = P(e),
                n = r + qe.fetch_t_offset___attributes,
                _ = P(n);
            _ || (_ = "GET");
            J[n + qe.attr_t_offset_userData >> 2];
            var s = J[n + qe.attr_t_offset_attributes >> 2],
                c = J[n + qe.attr_t_offset_timeoutMSecs >> 2],
                u = !!J[n + qe.attr_t_offset_withCredentials >> 2],
                l = (J[n + qe.attr_t_offset_destinationPath >> 2], J[n + qe.attr_t_offset_userName >> 2]),
                f = J[n + qe.attr_t_offset_password >> 2],
                d = J[n + qe.attr_t_offset_requestHeaders >> 2],
                p = J[n + qe.attr_t_offset_overriddenMimeType >> 2],
                m = J[n + qe.attr_t_offset_requestData >> 2],
                h = J[n + qe.attr_t_offset_requestDataSize >> 2],
                y = !!(1 & s),
                T = !!(2 & s),
                E = !!(64 & s),
                g = l ? P(l) : void 0,
                w = f ? P(f) : void 0,
                v = p ? P(p) : void 0,
                b = new XMLHttpRequest;
            if (b.withCredentials = u, b.open(_, t, !E, g, w), E || (b.timeout = c), b.url_ = t, b.responseType = T ? "moz-chunked-arraybuffer" : "arraybuffer", p && b.overrideMimeType(v), d)
                for (;;) {
                    var R = J[d >> 2];
                    if (!R) break;
                    var M = J[d + 4 >> 2];
                    if (!M) break;
                    d += 8;
                    var I = P(R),
                        O = P(M);
                    b.setRequestHeader(I, O)
                }
            qe.xhrs.push(b);
            var A = qe.xhrs.length;
            J[r + qe.fetch_t_offset_id >> 2] = A;
            var x = m && h ? V.slice(m, m + h) : null;
            b.onload = function(e) {
                var t = b.response ? b.response.byteLength : 0,
                    n = 0,
                    i = 0;
                y && !T && (n = $t(i = t), V.set(new Uint8Array(b.response), n)), J[r + qe.fetch_t_offset_data >> 2] = n, qe.setu64(r + qe.fetch_t_offset_numBytes, i), qe.setu64(r + qe.fetch_t_offset_dataOffset, 0), t && qe.setu64(r + qe.fetch_t_offset_totalBytes, t), G[r + qe.fetch_t_offset_readyState >> 1] = b.readyState, 4 === b.readyState && 0 === b.status && (b.status = 0 < t ? 200 : 404), G[r + qe.fetch_t_offset_status >> 1] = b.status, b.statusText && B(b.statusText, r + qe.fetch_t_offset_statusText, 64), 200 == b.status ? a && a(r, b, e) : o && o(r, b, e)
            }, b.onerror = function(e) {
                var t = b.status;
                4 == b.readyState && 0 == t && (t = 404), J[r + qe.fetch_t_offset_data >> 2] = 0, qe.setu64(r + qe.fetch_t_offset_numBytes, 0), qe.setu64(r + qe.fetch_t_offset_dataOffset, 0), qe.setu64(r + qe.fetch_t_offset_totalBytes, 0), G[r + qe.fetch_t_offset_readyState >> 1] = b.readyState, G[r + qe.fetch_t_offset_status >> 1] = t, o && o(r, b, e)
            }, b.ontimeout = function(e) {
                o && o(r, b, e)
            }, b.onprogress = function(e) {
                var t = y && T && b.response ? b.response.byteLength : 0,
                    n = 0;
                y && T && (n = $t(t), V.set(new Uint8Array(b.response), n)), J[r + qe.fetch_t_offset_data >> 2] = n, qe.setu64(r + qe.fetch_t_offset_numBytes, t), qe.setu64(r + qe.fetch_t_offset_dataOffset, e.loaded - t), qe.setu64(r + qe.fetch_t_offset_totalBytes, e.total), G[r + qe.fetch_t_offset_readyState >> 1] = b.readyState, 3 <= b.readyState && 0 === b.status && 0 < e.loaded && (b.status = 200), G[r + qe.fetch_t_offset_status >> 1] = b.status, b.statusText && B(b.statusText, r + qe.fetch_t_offset_statusText, 64), i && i(r, b, e)
            };
            try {
                b.send(x)
            } catch (e) {
                o && o(r, b, e)
            }
        } else o(r, 0, "no url specified!")
    }

    function Ke(e, t, n, i, r) {
        if (e) {
            var a = t + qe.fetch_t_offset___attributes,
                o = J[a + qe.attr_t_offset_destinationPath >> 2];
            o || (o = J[t + qe.fetch_t_offset_url >> 2]);
            var _ = P(o);
            try {
                var s = e.transaction(["FILES"], "readwrite").objectStore("FILES").put(n, _);
                s.onsuccess = function(e) {
                    G[t + qe.fetch_t_offset_readyState >> 1] = 4, G[t + qe.fetch_t_offset_status >> 1] = 200, B("OK", t + qe.fetch_t_offset_statusText, 64), i(t, 0, _)
                }, s.onerror = function(e) {
                    G[t + qe.fetch_t_offset_readyState >> 1] = 4, G[t + qe.fetch_t_offset_status >> 1] = 413, B("Payload Too Large", t + qe.fetch_t_offset_statusText, 64), r(t, 0, e)
                }
            } catch (e) {
                r(t, 0, e)
            }
        } else r(t, 0, "IndexedDB not available!")
    }

    function Je(e, r, a, o) {
        if (e) {
            var t = r + qe.fetch_t_offset___attributes,
                n = J[t + qe.attr_t_offset_destinationPath >> 2];
            n || (n = J[r + qe.fetch_t_offset_url >> 2]);
            var i = P(n);
            try {
                var _ = e.transaction(["FILES"], "readonly").objectStore("FILES").get(i);
                _.onsuccess = function(e) {
                    if (e.target.result) {
                        var t = e.target.result,
                            n = t.byteLength || t.length,
                            i = $t(n);
                        V.set(new Uint8Array(t), i), J[r + qe.fetch_t_offset_data >> 2] = i, qe.setu64(r + qe.fetch_t_offset_numBytes, n), qe.setu64(r + qe.fetch_t_offset_dataOffset, 0), qe.setu64(r + qe.fetch_t_offset_totalBytes, n), G[r + qe.fetch_t_offset_readyState >> 1] = 4, G[r + qe.fetch_t_offset_status >> 1] = 200, B("OK", r + qe.fetch_t_offset_statusText, 64), a(r, 0, t)
                    } else G[r + qe.fetch_t_offset_readyState >> 1] = 4, G[r + qe.fetch_t_offset_status >> 1] = 404, B("Not Found", r + qe.fetch_t_offset_statusText, 64), o(r, 0, "no data")
                }, _.onerror = function(e) {
                    G[r + qe.fetch_t_offset_readyState >> 1] = 4, G[r + qe.fetch_t_offset_status >> 1] = 404, B("Not Found", r + qe.fetch_t_offset_statusText, 64), o(r, 0, e)
                }
            } catch (e) {
                o(r, 0, e)
            }
        } else o(r, 0, "IndexedDB not available!")
    }

    function Ze(e, n, i, t) {
        if (e) {
            var r = n + qe.fetch_t_offset___attributes,
                a = J[r + qe.attr_t_offset_destinationPath >> 2];
            a || (a = J[n + qe.fetch_t_offset_url >> 2]);
            var o = P(a);
            try {
                var _ = e.transaction(["FILES"], "readwrite").objectStore("FILES").delete(o);
                _.onsuccess = function(e) {
                    var t = e.target.result;
                    J[n + qe.fetch_t_offset_data >> 2] = 0, qe.setu64(n + qe.fetch_t_offset_numBytes, 0), qe.setu64(n + qe.fetch_t_offset_dataOffset, 0), qe.setu64(n + qe.fetch_t_offset_dataOffset, 0), G[n + qe.fetch_t_offset_readyState >> 1] = 4, G[n + qe.fetch_t_offset_status >> 1] = 200, B("OK", n + qe.fetch_t_offset_statusText, 64), i(n, 0, t)
                }, _.onerror = function(e) {
                    G[n + qe.fetch_t_offset_readyState >> 1] = 4, G[n + qe.fetch_t_offset_status >> 1] = 404, B("Not Found", n + qe.fetch_t_offset_statusText, 64), t(n, 0, e)
                }
            } catch (e) {
                t(n, 0, e)
            }
        } else t(n, 0, "IndexedDB not available!")
    }
    var $e = k(12, "i32*", U);

    function et(e, t, n) {
        var i = 0 < n ? n : function(e) {
                for (var t = 0, n = 0; n < e.length; ++n) {
                    var i = e.charCodeAt(n);
                    55296 <= i && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & e.charCodeAt(++n)), i <= 127 ? ++t : t += i <= 2047 ? 2 : i <= 65535 ? 3 : i <= 2097151 ? 4 : i <= 67108863 ? 5 : 6
                }
                return t
            }(e) + 1,
            r = new Array(i),
            a = H(e, r, 0, r.length);
        return t && (r.length = a), r
    }
    Le = r ? function() {
        var e = process.hrtime();
        return 1e3 * e[0] + e[1] / 1e6
    } : "undefined" != typeof dateNow ? dateNow : "object" == typeof self && self.performance && "function" == typeof self.performance.now ? function() {
        return self.performance.now()
    } : "object" == typeof performance && "function" == typeof performance.now ? function() {
        return performance.now()
    } : Date.now, qe.staticInit(), oe = h(4), ne = ie = c(ee), ae = c(re = ne + fe), K[oe >> 2] = ae, te = !0, O(ae < de, "TOTAL_MEMORY not big enough for stack");
    var tt = ["0", "jsCall_ii_0", "jsCall_ii_1", "jsCall_ii_2", "jsCall_ii_3", "jsCall_ii_4", "jsCall_ii_5", "jsCall_ii_6", "jsCall_ii_7", "jsCall_ii_8", "jsCall_ii_9", "jsCall_ii_10", "jsCall_ii_11", "jsCall_ii_12", "jsCall_ii_13", "jsCall_ii_14", "jsCall_ii_15", "jsCall_ii_16", "jsCall_ii_17", "jsCall_ii_18", "jsCall_ii_19", "___stdio_close", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        nt = ["0", "jsCall_iii_0", "jsCall_iii_1", "jsCall_iii_2", "jsCall_iii_3", "jsCall_iii_4", "jsCall_iii_5", "jsCall_iii_6", "jsCall_iii_7", "jsCall_iii_8", "jsCall_iii_9", "jsCall_iii_10", "jsCall_iii_11", "jsCall_iii_12", "jsCall_iii_13", "jsCall_iii_14", "jsCall_iii_15", "jsCall_iii_16", "jsCall_iii_17", "jsCall_iii_18", "jsCall_iii_19", "_sort_uint8_array", "_chirp_peak_cmp", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        it = ["0", "jsCall_iiii_0", "jsCall_iiii_1", "jsCall_iiii_2", "jsCall_iiii_3", "jsCall_iiii_4", "jsCall_iiii_5", "jsCall_iiii_6", "jsCall_iiii_7", "jsCall_iiii_8", "jsCall_iiii_9", "jsCall_iiii_10", "jsCall_iiii_11", "jsCall_iiii_12", "jsCall_iiii_13", "jsCall_iiii_14", "jsCall_iiii_15", "jsCall_iiii_16", "jsCall_iiii_17", "jsCall_iiii_18", "jsCall_iiii_19", "___stdio_write", "___stdio_seek", "___stdout_write", "_sn_write", "0", "0", "0", "0", "0", "0", "0"],
        rt = ["0", "jsCall_vi_0", "jsCall_vi_1", "jsCall_vi_2", "jsCall_vi_3", "jsCall_vi_4", "jsCall_vi_5", "jsCall_vi_6", "jsCall_vi_7", "jsCall_vi_8", "jsCall_vi_9", "jsCall_vi_10", "jsCall_vi_11", "jsCall_vi_12", "jsCall_vi_13", "jsCall_vi_14", "jsCall_vi_15", "jsCall_vi_16", "jsCall_vi_17", "jsCall_vi_18", "jsCall_vi_19", "_validate_success_callback", "_validate_failure_callback", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        at = ["0", "jsCall_viii_0", "jsCall_viii_1", "jsCall_viii_2", "jsCall_viii_3", "jsCall_viii_4", "jsCall_viii_5", "jsCall_viii_6", "jsCall_viii_7", "jsCall_viii_8", "jsCall_viii_9", "jsCall_viii_10", "jsCall_viii_11", "jsCall_viii_12", "jsCall_viii_13", "jsCall_viii_14", "jsCall_viii_15", "jsCall_viii_16", "jsCall_viii_17", "jsCall_viii_18", "jsCall_viii_19", "__chirp_encode_started_callback", "__chirp_encode_finished_callback", "__chirp_decode_started_callback", "__chirp_decode_finished_callback", "0", "0", "0", "0", "0", "0", "0"],
        ot = ["0", "jsCall_viiii_0", "jsCall_viiii_1", "jsCall_viiii_2", "jsCall_viiii_3", "jsCall_viiii_4", "jsCall_viiii_5", "jsCall_viiii_6", "jsCall_viiii_7", "jsCall_viiii_8", "jsCall_viiii_9", "jsCall_viiii_10", "jsCall_viiii_11", "jsCall_viiii_12", "jsCall_viiii_13", "jsCall_viiii_14", "jsCall_viiii_15", "jsCall_viiii_16", "jsCall_viiii_17", "jsCall_viiii_18", "jsCall_viiii_19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
    E.wasmTableSize = 192, E.wasmMaxTableSize = 192, E.asmGlobalArg = {}, E.asmLibraryArg = {
        abort: sn,
        assert: O,
        enlargeMemory: le,
        getTotalMemory: function() {
            return de
        },
        setTempRet0: function(e) {
            l = e
        },
        getTempRet0: function() {
            return l
        },
        abortOnCannotGrowMemory: ue,
        abortStackOverflow: function(e) {
            sn("Stack overflow! Attempted to allocate " + e + " bytes on the stack, but stack has only " + (re - nn() + e) + " bytes available!")
        },
        segfault: function() {
            sn("segmentation fault")
        },
        alignfault: function() {
            sn("alignment fault")
        },
        ftfault: function() {
            sn("Function table mask error")
        },
        nullFunc_ii: function(e) {
            m("Invalid function pointer '" + e + "' called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), m("This pointer might make sense in another type signature: iii: " + nt[e] + "  iiii: " + it[e] + "  vi: " + rt[e] + "  viii: " + at[e] + "  viiii: " + ot[e] + "  "), sn(e)
        },
        nullFunc_iii: function(e) {
            m("Invalid function pointer '" + e + "' called with signature 'iii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), m("This pointer might make sense in another type signature: ii: " + tt[e] + "  iiii: " + it[e] + "  viii: " + at[e] + "  vi: " + rt[e] + "  viiii: " + ot[e] + "  "), sn(e)
        },
        nullFunc_iiii: function(e) {
            m("Invalid function pointer '" + e + "' called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), m("This pointer might make sense in another type signature: iii: " + nt[e] + "  ii: " + tt[e] + "  viii: " + at[e] + "  viiii: " + ot[e] + "  vi: " + rt[e] + "  "), sn(e)
        },
        nullFunc_vi: function(e) {
            m("Invalid function pointer '" + e + "' called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), m("This pointer might make sense in another type signature: viii: " + at[e] + "  viiii: " + ot[e] + "  ii: " + tt[e] + "  iii: " + nt[e] + "  iiii: " + it[e] + "  "), sn(e)
        },
        nullFunc_viii: function(e) {
            m("Invalid function pointer '" + e + "' called with signature 'viii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), m("This pointer might make sense in another type signature: vi: " + rt[e] + "  viiii: " + ot[e] + "  iii: " + nt[e] + "  ii: " + tt[e] + "  iiii: " + it[e] + "  "), sn(e)
        },
        nullFunc_viiii: function(e) {
            m("Invalid function pointer '" + e + "' called with signature 'viiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), m("This pointer might make sense in another type signature: viii: " + at[e] + "  vi: " + rt[e] + "  iiii: " + it[e] + "  iii: " + nt[e] + "  ii: " + tt[e] + "  "), sn(e)
        },
        jsCall_ii: function(e, t) {
            return u[e](t)
        },
        jsCall_iii: function(e, t, n) {
            return u[e](t, n)
        },
        jsCall_iiii: function(e, t, n, i) {
            return u[e](t, n, i)
        },
        jsCall_vi: function(e, t) {
            u[e](t)
        },
        jsCall_viii: function(e, t, n, i) {
            u[e](t, n, i)
        },
        jsCall_viiii: function(e, t, n, i, r) {
            u[e](t, n, i, r)
        },
        ___buildEnvironment: function e(t) {
            var n, i;
            e.called ? n = 0 | R(0 | (i = 0 | R(0 | t, 4, 0)), 4, 0) : (e.called = !0, Xe.USER = Xe.LOGNAME = "web_user", Xe.PATH = "/", Xe.PWD = "/", Xe.HOME = "/home/web_user", Xe.LANG = "C.UTF-8", Xe._ = E.thisProgram, n = X(1024), v(0 | (i = X(256)), 0 | n, 4), v(0 | t, 0 | i, 4));
            var r = [],
                a = 0;
            for (var o in Xe)
                if ("string" == typeof Xe[o]) {
                    var _ = o + "=" + Xe[o];
                    r.push(_), a += _.length
                } if (1024 < a) throw new Error("Environment size exceeded TOTAL_ENV_SIZE!");
            for (var s = 0; s < r.length; s++) ge(_ = r[s], n), v(i + 4 * s | 0, 0 | n, 4), n += _.length + 1;
            v(i + 4 * r.length | 0, 0, 4)
        },
        ___setErrNo: Be,
        ___syscall140: function(e, t) {
            Pe.varargs = t;
            try {
                var n = Pe.getStreamFromFD(),
                    i = (Pe.get(), Pe.get()),
                    r = Pe.get(),
                    a = Pe.get(),
                    o = i;
                return Ce.llseek(n, o, a), v(0 | r, 0 | n.position, 4), n.getdents && 0 === o && 0 === a && (n.getdents = null), 0
            } catch (e) {
                return void 0 !== Ce && e instanceof Ce.ErrnoError || sn(e), -e.errno
            }
        },
        ___syscall146: function(e, t) {
            Pe.varargs = t;
            try {
                for (var n = Pe.get(), i = Pe.get(), r = Pe.get(), a = 0, o = 0; o < r; o++) {
                    for (var _ = 0 | R(i + 8 * o | 0, 4, 0), s = 0 | R(i + (8 * o + 4) | 0, 4, 0), c = 0; c < s; c++) Pe.printChar(n, V[_ + c]);
                    a += s
                }
                return a
            } catch (e) {
                return void 0 !== Ce && e instanceof Ce.ErrnoError || sn(e), -e.errno
            }
        },
        ___syscall54: function(e, t) {
            Pe.varargs = t;
            try {
                return 0
            } catch (e) {
                return void 0 !== Ce && e instanceof Ce.ErrnoError || sn(e), -e.errno
            }
        },
        ___syscall6: function(e, t) {
            Pe.varargs = t;
            try {
                var n = Pe.getStreamFromFD();
                return Ce.close(n), 0
            } catch (e) {
                return void 0 !== Ce && e instanceof Ce.ErrnoError || sn(e), -e.errno
            }
        },
        __emscripten_fetch_cache_data: Ke,
        __emscripten_fetch_delete_cached_data: Ze,
        __emscripten_fetch_load_cached_data: Je,
        __emscripten_fetch_xhr: Ge,
        __emscripten_get_fetch_work_queue: function() {
            return $e
        },
        _asctime_r: We,
        _clock_gettime: function(e, t) {
            var n;
            if (0 === e) n = Date.now();
            else {
                if (1 !== e || !je()) return Be(He), -1;
                n = Le()
            }
            return v(0 | t, 0 | n / 1e3, 4), v(t + 4 | 0, 0 | n % 1e3 * 1e3 * 1e3, 4), 0
        },
        _ctime: function(e) {
            return Ve(e, Qe)
        },
        _ctime_r: Ve,
        _emscripten_asm_const_i: function(e) {
            return De[e]()
        },
        _emscripten_get_now: Le,
        _emscripten_get_now_is_monotonic: je,
        _emscripten_is_main_browser_thread: function() {
            return !d
        },
        _emscripten_is_main_runtime_thread: function() {
            return 1
        },
        _emscripten_memcpy_big: function(e, t, n) {
            return V.set(V.subarray(t, t + n), e), e
        },
        _emscripten_start_fetch: function(e, i, r, a) {
            void 0 !== E && (E.noExitRuntime = !0);
            var t = e + qe.fetch_t_offset___attributes,
                n = P(t),
                o = J[t + qe.attr_t_offset_onsuccess >> 2],
                _ = J[t + qe.attr_t_offset_onerror >> 2],
                s = J[t + qe.attr_t_offset_onprogress >> 2],
                c = J[t + qe.attr_t_offset_attributes >> 2],
                u = !!(4 & c),
                l = !!(32 & c),
                f = function(e, t, n) {
                    o ? E.dynCall_vi(o, e) : i && i(e)
                },
                d = function(e, t, n) {
                    Ke(qe.dbInstance, e, t.response, function(e, t, n) {
                        o ? E.dynCall_vi(o, e) : i && i(e)
                    }, function(e, t, n) {
                        o ? E.dynCall_vi(o, e) : i && i(e)
                    })
                },
                p = function(e, t, n) {
                    s ? E.dynCall_vi(s, e) : a && a(e)
                },
                m = function(e, t, n) {
                    _ ? E.dynCall_vi(_, e) : r && r(e)
                };
            if (16 & c && "EM_IDB_STORE" !== n && "EM_IDB_DELETE" !== n) {
                if (l) return 0;
                Ge(e, u ? d : f, m, p)
            } else {
                if (!qe.dbInstance) return m(e), 0;
                if ("EM_IDB_STORE" === n) {
                    var h = J[t + qe.attr_t_offset_requestData >> 2],
                        y = J[t + qe.attr_t_offset_requestDataSize >> 2],
                        T = V.slice(h, h + y);
                    Ke(qe.dbInstance, e, T, f, m)
                } else "EM_IDB_DELETE" === n ? Ze(qe.dbInstance, e, f, m) : Je(qe.dbInstance, e, f, l ? m : u ? function(e, t, n) {
                    Ge(e, d, m, p)
                } : function(e, t, n) {
                    Ge(e, f, m, p)
                })
            }
            return e
        },
        _gettimeofday: function(e) {
            var t = Date.now();
            return v(0 | e, 0 | t / 1e3, 4), v(e + 4 | 0, 0 | t % 1e3 * 1e3, 4), 0
        },
        _llvm_exp2_f32: function(e) {
            return Math.pow(2, e)
        },
        _llvm_log10_f32: function(e) {
            return Math.log(e) / Math.LN10
        },
        _llvm_log2_f32: function(e) {
            return Math.log(e) / Math.LN2
        },
        _localtime_r: Ye,
        _mktime: function(e) {
            ze();
            var t = new Date(1900 + (0 | R(e + 20 | 0, 4, 0)), 0 | R(e + 16 | 0, 4, 0), 0 | R(e + 12 | 0, 4, 0), 0 | R(e + 8 | 0, 4, 0), 0 | R(e + 4 | 0, 4, 0), 0 | R(0 | e, 4, 0), 0),
                n = 0 | R(e + 32 | 0, 4, 0),
                i = t.getTimezoneOffset(),
                r = new Date(t.getFullYear(), 0, 1),
                a = new Date(2e3, 6, 1).getTimezoneOffset(),
                o = r.getTimezoneOffset(),
                _ = Math.min(o, a);
            if (n < 0) v(e + 32 | 0, 0 | Number(a != o && _ == i), 4);
            else if (0 < n != (_ == i)) {
                var s = Math.max(o, a),
                    c = 0 < n ? _ : s;
                t.setTime(t.getTime() + 6e4 * (c - i))
            }
            return v(e + 24 | 0, 0 | t.getDay(), 4), v(e + 28 | 0, 0 | (t.getTime() - r.getTime()) / 864e5, 4), t.getTime() / 1e3 | 0
        },
        _tzset: ze,
        flush_NO_FILESYSTEM: function() {
            var e = E._fflush;
            e && e(0);
            var t = Pe.buffers;
            t[1].length && Pe.printChar(1, 10), t[2].length && Pe.printChar(2, 10)
        },
        DYNAMICTOP_PTR: oe,
        tempDoublePtr: ke,
        STACKTOP: ie,
        STACK_MAX: re
    };
    var _t = E.asm(E.asmGlobalArg, E.asmLibraryArg, Y),
        st = _t.___emscripten_environ_constructor;
    _t.___emscripten_environ_constructor = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), st.apply(null, arguments)
    };
    var ct = _t.__get_daylight;
    _t.__get_daylight = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ct.apply(null, arguments)
    };
    var ut = _t.__get_timezone;
    _t.__get_timezone = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ut.apply(null, arguments)
    };
    var lt = _t.__get_tzname;
    _t.__get_tzname = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), lt.apply(null, arguments)
    };
    var ft = _t._chirp_connect_as_string;
    _t._chirp_connect_as_string = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ft.apply(null, arguments)
    };
    var dt = _t._chirp_connect_error_code_to_string;
    _t._chirp_connect_error_code_to_string = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), dt.apply(null, arguments)
    };
    var pt = _t._chirp_connect_get_duration_for_payload_length;
    _t._chirp_connect_get_duration_for_payload_length = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), pt.apply(null, arguments)
    };
    var mt = _t._chirp_connect_get_info;
    _t._chirp_connect_get_info = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), mt.apply(null, arguments)
    };
    var ht = _t._chirp_connect_get_input_sample_rate;
    _t._chirp_connect_get_input_sample_rate = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ht.apply(null, arguments)
    };
    var yt = _t._chirp_connect_get_max_payload_length;
    _t._chirp_connect_get_max_payload_length = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), yt.apply(null, arguments)
    };
    var Tt = _t._chirp_connect_get_output_sample_rate;
    _t._chirp_connect_get_output_sample_rate = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Tt.apply(null, arguments)
    };
    var Et = _t._chirp_connect_get_protocol_name;
    _t._chirp_connect_get_protocol_name = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Et.apply(null, arguments)
    };
    var gt = _t._chirp_connect_get_protocol_version;
    _t._chirp_connect_get_protocol_version = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), gt.apply(null, arguments)
    };
    var wt = _t._chirp_connect_get_state;
    _t._chirp_connect_get_state = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), wt.apply(null, arguments)
    };
    var vt = _t._chirp_connect_get_volume;
    _t._chirp_connect_get_volume = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), vt.apply(null, arguments)
    };
    var bt = _t._chirp_connect_process_input;
    _t._chirp_connect_process_input = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), bt.apply(null, arguments)
    };
    var Rt = _t._chirp_connect_process_output;
    _t._chirp_connect_process_output = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Rt.apply(null, arguments)
    };
    var Mt = _t._chirp_connect_process_payload;
    _t._chirp_connect_process_payload = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Mt.apply(null, arguments)
    };
    var It = _t._chirp_connect_random_payload;
    _t._chirp_connect_random_payload = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), It.apply(null, arguments)
    };
    var Ot = _t._chirp_connect_send;
    _t._chirp_connect_send = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Ot.apply(null, arguments)
    };
    var At = _t._chirp_connect_set_callbacks;
    _t._chirp_connect_set_callbacks = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), At.apply(null, arguments)
    };
    var xt = _t._chirp_connect_set_input_sample_rate;
    _t._chirp_connect_set_input_sample_rate = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), xt.apply(null, arguments)
    };
    var St = _t._chirp_connect_set_output_sample_rate;
    _t._chirp_connect_set_output_sample_rate = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), St.apply(null, arguments)
    };
    var Nt = _t._chirp_connect_set_random_seed;
    _t._chirp_connect_set_random_seed = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Nt.apply(null, arguments)
    };
    var Ct = _t._chirp_connect_set_volume;
    _t._chirp_connect_set_volume = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Ct.apply(null, arguments)
    };
    var Ft = _t._chirp_connect_start;
    _t._chirp_connect_start = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Ft.apply(null, arguments)
    };
    var Ut = _t._chirp_connect_stop;
    _t._chirp_connect_stop = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Ut.apply(null, arguments)
    };
    var Dt = _t._del_chirp_connect_wasm;
    _t._del_chirp_connect_wasm = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Dt.apply(null, arguments)
    };
    var kt = _t._free;
    _t._free = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), kt.apply(null, arguments)
    };
    var Xt = _t._llvm_bswap_i32;
    _t._llvm_bswap_i32 = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Xt.apply(null, arguments)
    };
    var Pt = _t._llvm_round_f32;
    _t._llvm_round_f32 = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Pt.apply(null, arguments)
    };
    var Lt = _t._malloc;
    _t._malloc = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Lt.apply(null, arguments)
    };
    var jt = _t._memmove;
    _t._memmove = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), jt.apply(null, arguments)
    };
    var Ht = _t._new_chirp_connect_wasm;
    _t._new_chirp_connect_wasm = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Ht.apply(null, arguments)
    };
    var Bt = _t._sbrk;
    _t._sbrk = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Bt.apply(null, arguments)
    };
    var Qt = _t.establishStackSpace;
    _t.establishStackSpace = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Qt.apply(null, arguments)
    };
    var zt = _t.setDynamicTop;
    _t.setDynamicTop = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), zt.apply(null, arguments)
    };
    var Yt = _t.setThrew;
    _t.setThrew = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Yt.apply(null, arguments)
    };
    var Wt = _t.stackAlloc;
    _t.stackAlloc = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Wt.apply(null, arguments)
    };
    var Vt = _t.stackRestore;
    _t.stackRestore = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Vt.apply(null, arguments)
    };
    var qt = _t.stackSave;
    _t.stackSave = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), qt.apply(null, arguments)
    }, E.asm = _t;
    var Gt = E.___emscripten_environ_constructor = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.___emscripten_environ_constructor.apply(null, arguments)
        },
        Kt = E.__get_daylight = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.__get_daylight.apply(null, arguments)
        },
        Jt = E.__get_timezone = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.__get_timezone.apply(null, arguments)
        },
        Zt = E.__get_tzname = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.__get_tzname.apply(null, arguments)
        },
        $t = (E._chirp_connect_as_string = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_as_string.apply(null, arguments)
        }, E._chirp_connect_error_code_to_string = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_error_code_to_string.apply(null, arguments)
        }, E._chirp_connect_get_duration_for_payload_length = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_get_duration_for_payload_length.apply(null, arguments)
        }, E._chirp_connect_get_info = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_get_info.apply(null, arguments)
        }, E._chirp_connect_get_input_sample_rate = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_get_input_sample_rate.apply(null, arguments)
        }, E._chirp_connect_get_max_payload_length = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_get_max_payload_length.apply(null, arguments)
        }, E._chirp_connect_get_output_sample_rate = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_get_output_sample_rate.apply(null, arguments)
        }, E._chirp_connect_get_protocol_name = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_get_protocol_name.apply(null, arguments)
        }, E._chirp_connect_get_protocol_version = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_get_protocol_version.apply(null, arguments)
        }, E._chirp_connect_get_state = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_get_state.apply(null, arguments)
        }, E._chirp_connect_get_volume = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_get_volume.apply(null, arguments)
        }, E._chirp_connect_process_input = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_process_input.apply(null, arguments)
        }, E._chirp_connect_process_output = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_process_output.apply(null, arguments)
        }, E._chirp_connect_process_payload = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_process_payload.apply(null, arguments)
        }, E._chirp_connect_random_payload = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_random_payload.apply(null, arguments)
        }, E._chirp_connect_send = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_send.apply(null, arguments)
        }, E._chirp_connect_set_callbacks = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_set_callbacks.apply(null, arguments)
        }, E._chirp_connect_set_input_sample_rate = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_set_input_sample_rate.apply(null, arguments)
        }, E._chirp_connect_set_output_sample_rate = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_set_output_sample_rate.apply(null, arguments)
        }, E._chirp_connect_set_random_seed = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_set_random_seed.apply(null, arguments)
        }, E._chirp_connect_set_volume = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_set_volume.apply(null, arguments)
        }, E._chirp_connect_start = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_start.apply(null, arguments)
        }, E._chirp_connect_stop = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._chirp_connect_stop.apply(null, arguments)
        }, E._del_chirp_connect_wasm = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._del_chirp_connect_wasm.apply(null, arguments)
        }, E._free = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._free.apply(null, arguments)
        }, E._llvm_bswap_i32 = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._llvm_bswap_i32.apply(null, arguments)
        }, E._llvm_round_f32 = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._llvm_round_f32.apply(null, arguments)
        }, E._malloc = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._malloc.apply(null, arguments)
        }),
        en = (E._memcpy = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._memcpy.apply(null, arguments)
        }, E._memmove = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._memmove.apply(null, arguments)
        }, E._memset = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._memset.apply(null, arguments)
        }, E._new_chirp_connect_wasm = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._new_chirp_connect_wasm.apply(null, arguments)
        }, E._sbrk = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm._sbrk.apply(null, arguments)
        }, E.establishStackSpace = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.establishStackSpace.apply(null, arguments)
        }, E.runPostSets = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.runPostSets.apply(null, arguments)
        }, E.setDynamicTop = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.setDynamicTop.apply(null, arguments)
        }, E.setThrew = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.setThrew.apply(null, arguments)
        }, E.stackAlloc = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.stackAlloc.apply(null, arguments)
        }),
        tn = E.stackRestore = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.stackRestore.apply(null, arguments)
        },
        nn = E.stackSave = function() {
            return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.stackSave.apply(null, arguments)
        };
    E.dynCall_ii = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.dynCall_ii.apply(null, arguments)
    }, E.dynCall_iii = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.dynCall_iii.apply(null, arguments)
    }, E.dynCall_iiii = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.dynCall_iiii.apply(null, arguments)
    }, E.dynCall_vi = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.dynCall_vi.apply(null, arguments)
    }, E.dynCall_viii = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.dynCall_viii.apply(null, arguments)
    }, E.dynCall_viiii = function() {
        return O(Ee, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), O(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), E.asm.dynCall_viiii.apply(null, arguments)
    };

    function rn(e) {
        this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
    }

    function an(e) {
        function t() {
            E.calledRun || (E.calledRun = !0, I || (ce(), Ee || (Ee = !0, pe(he)), ce(), pe(ye), E.onRuntimeInitialized && E.onRuntimeInitialized(), O(!E._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), function() {
                if (ce(), E.postRun)
                    for ("function" == typeof E.postRun && (E.postRun = [E.postRun]); E.postRun.length;) e = E.postRun.shift(), Te.unshift(e);
                var e;
                pe(Te)
            }()))
        }
        e = e || E.arguments, 0 < Ie || (O(0 == (3 & re)), J[(re >> 2) - 1] = 34821223, J[(re >> 2) - 2] = 2310721022, function() {
            if (E.preRun)
                for ("function" == typeof E.preRun && (E.preRun = [E.preRun]); E.preRun.length;) e = E.preRun.shift(), me.unshift(e);
            var e;
            pe(me)
        }(), 0 < Ie || E.calledRun || (E.setStatus ? (E.setStatus("Running..."), setTimeout(function() {
            setTimeout(function() {
                E.setStatus("")
            }, 1), t()
        }, 1)) : t(), ce()))
    }
    E.asm = _t, E.intArrayFromString = et, E.intArrayToString = function(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var i = e[n];
            255 < i && (O(!1, "Character code " + i + " (" + String.fromCharCode(i) + ")  at offset " + n + " not in 0x00-0xFF."), i &= 255), t.push(String.fromCharCode(i))
        }
        return t.join("")
    }, E.ccall = S, E.cwrap = function(e, t, n, i) {
        return function() {
            return S(e, t, n, arguments)
        }
    }, E.setValue || (E.setValue = function() {
        sn("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.getValue = C, E.allocate = k, E.getMemory || (E.getMemory = function() {
        sn("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
    }), E.Pointer_stringify = P, E.AsciiToString || (E.AsciiToString = function() {
        sn("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.stringToAscii || (E.stringToAscii = function() {
        sn("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.UTF8ArrayToString || (E.UTF8ArrayToString = function() {
        sn("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.UTF8ToString || (E.UTF8ToString = function() {
        sn("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.stringToUTF8Array || (E.stringToUTF8Array = function() {
        sn("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.stringToUTF8 || (E.stringToUTF8 = function() {
        sn("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.lengthBytesUTF8 || (E.lengthBytesUTF8 = function() {
        sn("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.UTF16ToString || (E.UTF16ToString = function() {
        sn("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.stringToUTF16 || (E.stringToUTF16 = function() {
        sn("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.lengthBytesUTF16 || (E.lengthBytesUTF16 = function() {
        sn("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.UTF32ToString || (E.UTF32ToString = function() {
        sn("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.stringToUTF32 || (E.stringToUTF32 = function() {
        sn("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.lengthBytesUTF32 || (E.lengthBytesUTF32 = function() {
        sn("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.allocateUTF8 || (E.allocateUTF8 = function() {
        sn("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.stackTrace || (E.stackTrace = function() {
        sn("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.addOnPreRun || (E.addOnPreRun = function() {
        sn("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.addOnInit || (E.addOnInit = function() {
        sn("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.addOnPreMain || (E.addOnPreMain = function() {
        sn("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.addOnExit || (E.addOnExit = function() {
        sn("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.addOnPostRun || (E.addOnPostRun = function() {
        sn("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.writeStringToMemory || (E.writeStringToMemory = function() {
        sn("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.writeArrayToMemory || (E.writeArrayToMemory = function() {
        sn("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.writeAsciiToMemory || (E.writeAsciiToMemory = function() {
        sn("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.addRunDependency || (E.addRunDependency = function() {
        sn("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
    }), E.removeRunDependency || (E.removeRunDependency = function() {
        sn("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
    }), E.ENV || (E.ENV = function() {
        sn("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.FS || (E.FS = function() {
        sn("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.FS_createFolder || (E.FS_createFolder = function() {
        sn("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
    }), E.FS_createPath || (E.FS_createPath = function() {
        sn("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
    }), E.FS_createDataFile || (E.FS_createDataFile = function() {
        sn("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
    }), E.FS_createPreloadedFile || (E.FS_createPreloadedFile = function() {
        sn("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
    }), E.FS_createLazyFile || (E.FS_createLazyFile = function() {
        sn("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
    }), E.FS_createLink || (E.FS_createLink = function() {
        sn("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
    }), E.FS_createDevice || (E.FS_createDevice = function() {
        sn("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
    }), E.FS_unlink || (E.FS_unlink = function() {
        sn("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
    }), E.GL || (E.GL = function() {
        sn("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.staticAlloc || (E.staticAlloc = function() {
        sn("'staticAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.dynamicAlloc || (E.dynamicAlloc = function() {
        sn("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.warnOnce || (E.warnOnce = function() {
        sn("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.loadDynamicLibrary || (E.loadDynamicLibrary = function() {
        sn("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.loadWebAssemblyModule || (E.loadWebAssemblyModule = function() {
        sn("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.getLEB || (E.getLEB = function() {
        sn("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.getFunctionTables || (E.getFunctionTables = function() {
        sn("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.alignFunctionTables || (E.alignFunctionTables = function() {
        sn("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.registerFunctions || (E.registerFunctions = function() {
        sn("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.addFunction = function(e, t) {
        void 0 === t && m("warning: addFunction(): You should provide a wasm function signature string as a second argument. This is not necessary for asm.js and asm2wasm, but is required for the LLVM wasm backend, so it is recommended for full portability.");
        for (var n = 0; n < 20; n++)
            if (!u[n]) return u[n] = e, 1 + n;
        throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."
    }, E.removeFunction || (E.removeFunction = function() {
        sn("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.getFuncWrapper || (E.getFuncWrapper = function() {
        sn("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.prettyPrint || (E.prettyPrint = function() {
        sn("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.makeBigInt || (E.makeBigInt = function() {
        sn("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.dynCall || (E.dynCall = function() {
        sn("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.getCompilerSetting || (E.getCompilerSetting = function() {
        sn("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.stackSave || (E.stackSave = function() {
        sn("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.stackRestore || (E.stackRestore = function() {
        sn("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.stackAlloc || (E.stackAlloc = function() {
        sn("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.establishStackSpace || (E.establishStackSpace = function() {
        sn("'establishStackSpace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.print || (E.print = function() {
        sn("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.printErr || (E.printErr = function() {
        sn("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
    }), E.ALLOC_NORMAL = F, E.ALLOC_STACK || Object.defineProperty(E, "ALLOC_STACK", {
        get: function() {
            sn("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }
    }), E.ALLOC_STATIC || Object.defineProperty(E, "ALLOC_STATIC", {
        get: function() {
            sn("'ALLOC_STATIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }
    }), E.ALLOC_DYNAMIC || Object.defineProperty(E, "ALLOC_DYNAMIC", {
        get: function() {
            sn("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }
    }), E.ALLOC_NONE || Object.defineProperty(E, "ALLOC_NONE", {
        get: function() {
            sn("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
        }
    }), (rn.prototype = new Error).constructor = rn, Ae = function e() {
        E.calledRun || an(), E.calledRun || (Ae = e)
    }, E.run = an;
    var on, _n = [];

    function sn(t) {
        E.onAbort && E.onAbort(t), void 0 !== t ? (s(t), m(t), t = JSON.stringify(t)) : t = "", I = !0;
        var n = "abort(" + t + ") at " + z();
        throw _n && _n.forEach(function(e) {
            n = e(n, t)
        }), n
    }
    if (E.abort = sn, E.preInit)
        for ("function" == typeof E.preInit && (E.preInit = [E.preInit]); 0 < E.preInit.length;) E.preInit.pop()();
    E.noExitRuntime = !0, an();
    var cn = /android/i.test(navigator.userAgent.toLowerCase()),
        un = {
            autoGainControl: !1,
            echoCancellation: !1,
            noiseSuppression: !1
        },
        ln = !1,
        fn = null,
        dn = function(e) {
            ln = e, fn && fn.getAudioTracks().forEach(function(e) {
                e.enabled = ln
            })
        },
        pn = "3.0.3",
        mn = function() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        },
        hn = "CHIRP_WASM_SDK_UUID",
        yn = localStorage.getItem(hn);
    yn || (yn = mn() + mn() + "-" + mn() + "-" + mn() + "-" + mn() + "-" + mn() + mn() + mn(), localStorage.setItem(hn, yn));
    var Tn = function(e, t, n) {
            var i = "https://analytics.chirp.io/" + t,
                r = JSON.stringify(n),
                a = new XMLHttpRequest;
            a.open("POST", i, !0), a.setRequestHeader("Content-Type", "application/json; charset=utf-8"), a.setRequestHeader("Authorization", "Basic " + btoa(e + ":")), a.send(r)
        },
        En = function(e) {
            for (var t = [], n = 0; n < e.length; n += 2) t.push(String.fromCharCode(parseInt(e.substr(n, 2), 16)).charCodeAt(0));
            return Uint8Array.from(t)
        },
        gn = null;
    E.onRuntimeInitialized = function() {
        gn = !0
    }, E.onAbort = function() {
        gn = !1
    }, E.onAuthenticationError = function() {
        dn(!1), console.error("\nChirp authentication failed, please check your origins are set correctly.\nSee https://developers.chirp.io/applications.\n  "), fn && fn.getAudioTracks().forEach(function(e) {
            return e.stop()
        }), on.close()
    };
    var wn = function(m) {
        return {
            init: function(e) {
                if (m.key = e, m.maxPayloadLength = 0, m.status = ["Not Created", "Stopped", "Paused", "Running", "Sending", "Receiving"], m.onStateChanged = function(e, t) {}, m.onSending = function(e) {}, m.onSent = function(e) {}, m.onReceiving = function() {}, m.onReceived = function(e) {}, m.connect = m.new_chirp_connect_wasm(e), !m.connect) throw new Error("Error initialising Chirp Connect");
                return m.connect
            },
            configure: function() {
                var e, t, n = E.addFunction(function(e, t, n) {
                        m.onStateChanged(m.status[t], m.status[n])
                    }, "viii"),
                    i = E.addFunction(function(e, t, n, i) {
                        var r = m.chirp_connect_as_string(m.connect, t, n);
                        m.onSending(En(r))
                    }, "viiii"),
                    r = E.addFunction(function(e, t, n, i) {
                        var r = m.chirp_connect_as_string(m.connect, t, n);
                        m.onSent(En(r))
                    }, "viiii"),
                    a = E.addFunction(function(e, t, n, i) {
                        m.onReceiving()
                    }, "viiii"),
                    o = E.addFunction(function(e, t, n, i) {
                        if (0 < n) {
                            var r = m.chirp_connect_as_string(m.connect, t, n);
                            m.onReceived(En(r))
                        } else m.onReceived(new Uint8Array([]));
                        var a, o, _, s, c;
                        a = m.key, o = n, _ = m.protocolName, s = m.protocolVersion, c = {
                            client_id: yn,
                            timestamp: (new Date).toISOString(),
                            success: 0 !== o,
                            payload_length: o,
                            protocol_name: _,
                            protocol_version: s,
                            platform: "wasm",
                            sdk_version: pn
                        }, Tn(a, "v3/connect/receive", c)
                    }, "viiii"),
                    _ = E._malloc(40);
                E.HEAPU32[_ / 4 + 0] = n, E.HEAPU32[_ / 4 + 1] = i, E.HEAPU32[_ / 4 + 2] = r, E.HEAPU32[_ / 4 + 3] = a, E.HEAPU32[_ / 4 + 4] = o, m.chirp_connect_set_callbacks(m.connect, _), m.chirp_connect_set_random_seed(m.connect, parseInt(Math.random() * Math.pow(2, 32), 10)), m.maxPayloadLength = m.chirp_connect_get_max_payload_length(m.connect), m.protocolName = m.chirp_connect_get_protocol_name(m.connect), m.protocolVersion = m.chirp_connect_get_protocol_version(m.connect), e = m.key, t = {
                    client_id: yn,
                    timestamp: (new Date).toISOString(),
                    platform: "wasm",
                    sdk_version: pn
                }, Tn(e, "v3/connect/instantiate", t)
            },
            processInput: function(e, t) {
                for (var n = E._malloc(t * Float32Array.BYTES_PER_ELEMENT), i = 0; i < t; i++) E.HEAPF32[n / Float32Array.BYTES_PER_ELEMENT + i] = e[i];
                m.chirp_connect_process_input(m.connect, n, t), E._free(n)
            },
            processOutput: function(e, t) {
                var n = E._malloc(t * Float32Array.BYTES_PER_ELEMENT);
                m.chirp_connect_process_output(m.connect, n, t);
                for (var i = 0; i < t; i++) e[i] = E.HEAPF32[n / Float32Array.BYTES_PER_ELEMENT + i];
                E._free(n)
            },
            send: function(e) {
                if (e.length > m.maxPayloadLength) throw new Error("Payload too long, maximum = " + m.maxPayloadLength + " bytes");
                var t = m.status[m.chirp_connect_get_state(m.connect)];
                if ("Running" !== t) throw new Error("Cannot send data when the SDK is " + t.toLowerCase());
                var n, i, r, a, o, _ = "string" == typeof e ? E.intArrayFromString(e) : e,
                    s = E.allocate(_, "i8", E.ALLOC_NORMAL),
                    c = m.chirp_connect_get_duration_for_payload_length(m.connect, e.length),
                    u = m.chirp_connect_get_output_sample_rate(m.connect) * c,
                    l = new Float32Array(u),
                    f = E._malloc(u * Float32Array.BYTES_PER_ELEMENT),
                    d = m.chirp_connect_process_payload(m.connect, s, e.length, f, u);
                if (d) throw m.chirp_connect_error_code_to_string(d);
                for (var p = 0; p < u; p++) l[p] = E.HEAPF32[f / Float32Array.BYTES_PER_ELEMENT + p];
                m.chirp_connect_send(m.connect, s, e.length),
                    function(e, t) {
                        "suspended" === on.state && (console.warn("AudioContext is suspended."), on.resume());
                        for (var n = t * on.sampleRate, i = on.createBuffer(1, n, on.sampleRate), r = i.getChannelData(0), a = 0; a < n; a++) r[a] = e[a];
                        var o = on.createBufferSource();
                        o.buffer = i, o.connect(on.destination), o.start(0)
                    }(l, c), n = m.key, i = e.length, r = m.protocolName, a = m.protocolVersion, o = {
                        client_id: yn,
                        timestamp: (new Date).toISOString(),
                        payload_length: i,
                        protocol_name: r,
                        protocol_version: a,
                        platform: "wasm",
                        sdk_version: pn
                    }, Tn(n, "v3/connect/send", o), E._free(f), E._free(s)
            },
            randomPayload: function(e) {
                var t = E._malloc(Uint32Array.BYTES_PER_ELEMENT);
                E.HEAPU32[t / Uint32Array.BYTES_PER_ELEMENT] = e || 0;
                var n = m.chirp_connect_random_payload(m.connect, t),
                    i = m.chirp_connect_as_string(m.connect, n, E.getValue(t, "i32"));
                return E._free(t), En(i)
            },
            setRandomSeed: function(e) {
                return m.chirp_connect_set_random_seed(m.connect, e)
            },
            setCallbacks: function(e, t, n, i, r) {
                m.onStateChanged = e || m.onStateChanged, m.onSending = t || m.onSending, m.onSent = n || m.onSent, m.onReceiving = i || m.onReceiving, m.onReceived = r || m.onReceived
            },
            start: function() {
                return dn(!0) || m.chirp_connect_start(m.connect)
            },
            stop: function() {
                return dn(!1) || m.chirp_connect_stop(m.connect)
            },
            getInfo: function() {
                return m.chirp_connect_get_info(m.connect)
            },
            getVersion: function() {
                return pn
            },
            getState: function() {
                return m.chirp_connect_get_state(m.connect)
            },
            getInputSampleRate: function() {
                return m.chirp_connect_get_input_sample_rate(m.connect)
            },
            setInputSampleRate: function(e) {
                return m.chirp_connect_set_input_sample_rate(m.connect, e)
            },
            getOutputSampleRate: function() {
                return m.chirp_connect_get_output_sample_rate(m.connect)
            },
            setOutputSampleRate: function(e) {
                return m.chirp_connect_set_output_sample_rate(m.connect, e)
            },
            getVolume: function() {
                return m.chirp_connect_get_volume(m.connect)
            },
            setVolume: function(e) {
                return m.chirp_connect_set_volume(m.connect, e)
            },
            getDuration: function(e) {
                return m.chirp_connect_get_duration_for_payload_length(m.connect, e)
            },
            getProtocolName: function() {
                return m.chirp_connect_get_protocol_name(m.connect)
            },
            getProtocolVersion: function() {
                return m.chirp_connect_get_protocol_version(m.connect)
            },
            isValid: function(e) {
                var t = "string" == typeof e ? E.intArrayFromString(e) : e,
                    n = E.allocate(t, "i8", E.ALLOC_NORMAL),
                    i = m.chirp_connect_is_valid(m.connect, n, e.length);
                return E._free(n), 0 === i
            },
            asString: function(e) {
                var t = "string" == typeof e ? E.intArrayFromString(e) : e,
                    n = E.allocate(t, "i8", E.ALLOC_NORMAL),
                    i = m.chirp_connect_as_string(m.connect, n, e.length);
                return E._free(n), i
            }
        }
    };
    e.SDK = wn, e.Chirp = function(e) {
        var a = e.key,
            o = e.onStateChanged,
            _ = e.onSending,
            s = e.onSent,
            c = e.onReceiving,
            u = e.onReceived;
        return new Promise(function(t, n) {
            var i = setInterval(function() {
                if (null === gn);
                else if (gn) {
                    clearInterval(i);
                    var e = wn({
                        new_chirp_connect_wasm: E.cwrap("new_chirp_connect_wasm", "number", ["string"]),
                        del_chirp_connect_wasm: E.cwrap("del_chirp_connect_wasm", "number", ["number"]),
                        chirp_connect_process_payload: E.cwrap("chirp_connect_process_payload", "number", ["number", "number", "number", "number", "number"]),
                        chirp_connect_start: E.cwrap("chirp_connect_start", "number", ["number"]),
                        chirp_connect_stop: E.cwrap("chirp_connect_stop", "number", ["number"]),
                        chirp_connect_random_payload: E.cwrap("chirp_connect_random_payload", "number", ["number", "number"]),
                        chirp_connect_send: E.cwrap("chirp_connect_send", "number", ["number", "number", "number"]),
                        chirp_connect_process_input: E.cwrap("chirp_connect_process_input", "number", ["number", "number", "number"]),
                        chirp_connect_process_output: E.cwrap("chirp_connect_process_output", "number", ["number", "number", "number"]),
                        chirp_connect_as_string: E.cwrap("chirp_connect_as_string", "string", ["number", "number", "number"]),
                        chirp_connect_get_input_sample_rate: E.cwrap("chirp_connect_get_input_sample_rate", "number", ["number"]),
                        chirp_connect_set_input_sample_rate: E.cwrap("chirp_connect_set_input_sample_rate", "number", ["number", "number"]),
                        chirp_connect_get_output_sample_rate: E.cwrap("chirp_connect_get_output_sample_rate", "number", ["number"]),
                        chirp_connect_set_output_sample_rate: E.cwrap("chirp_connect_set_output_sample_rate", "number", ["number", "number"]),
                        chirp_connect_get_max_payload_length: E.cwrap("chirp_connect_get_max_payload_length", "number", ["number"]),
                        chirp_connect_set_callbacks: E.cwrap("chirp_connect_set_callbacks", "number", ["number", "number"]),
                        chirp_connect_set_random_seed: E.cwrap("chirp_connect_set_random_seed", "null", ["number", "number"]),
                        chirp_connect_get_volume: E.cwrap("chirp_connect_get_volume", "number", ["number"]),
                        chirp_connect_set_volume: E.cwrap("chirp_connect_set_volume", "number", ["number", "number"]),
                        chirp_connect_get_state: E.cwrap("chirp_connect_get_state", "number", ["number"]),
                        chirp_connect_get_protocol_name: E.cwrap("chirp_connect_get_protocol_name", "string", ["number"]),
                        chirp_connect_get_protocol_version: E.cwrap("chirp_connect_get_protocol_version", "number", ["number"]),
                        chirp_connect_get_info: E.cwrap("chirp_connect_get_info", "string", ["number"]),
                        chirp_connect_error_code_to_string: E.cwrap("chirp_connect_error_code_to_string", "string", ["number"]),
                        chirp_connect_get_package_full_version: E.cwrap("chirp_connect_get_package_full_version", "string", []),
                        chirp_connect_get_duration_for_payload_length: E.cwrap("chirp_connect_get_duration_for_payload_length", "number", ["number", "number"])
                    });
                    try {
                        e.init(a), (r = e, navigator.mediaDevices.getUserMedia({
                            audio: un,
                            video: !1
                        }).then(function(e) {
                            fn = e, on = new(window.AudioContext || window.webkitAudioContext);
                            var t = cn ? 16384 : 0,
                                n = on.createMediaStreamSource(fn),
                                i = on.createScriptProcessor(t, 1, 1);
                            n.connect(i), i.connect(on.destination), r.setInputSampleRate(on.sampleRate), r.setOutputSampleRate(on.sampleRate), i.onaudioprocess = function(e) {
                                ln && (r.processInput(e.inputBuffer.getChannelData(0), e.inputBuffer.length), r.processOutput(new Float32Array(e.outputBuffer.length), e.outputBuffer.length))
                            }
                        })).then(function() {
                            e.configure(), e.setCallbacks(o, _, s, c, u), e.start(), t(e)
                        }).catch(n)
                    } catch (e) {
                        n(e)
                    }
                } else clearInterval(i), n(new Error("WebAssembly initialisation aborted"));
                var r
            }, 10)
        })
    }, e.hexToArray = En, e.arrayToHex = function(e) {
        return e.reduce(function(e, t) {
            return e + ("0" + t.toString(16)).slice(-2)
        }, "")
    }, e.toAscii = function(e) {
        for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
        return t
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});