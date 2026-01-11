"use client";
import {
  require_dijkstra
} from "./chunk-FLKA3UWU.js";
import {
  esm_default
} from "./chunk-R2GSB7OH.js";
import {
  require_bn,
  require_safe_buffer
} from "./chunk-7N3ZHYVH.js";
import {
  esm_browser_exports,
  init_esm_browser
} from "./chunk-UULP3SUT.js";
import {
  Field,
  FpInvertBatch,
  FpSqrtEven,
  _DST_scalar,
  _createCurveFields,
  createHasher,
  eventemitter3_default,
  expand_message_xmd,
  import_index,
  isNegativeLE,
  mod,
  normalizeZ,
  pippenger,
  pow2,
  secp256k1,
  wNAF
} from "./chunk-AETETENM.js";
import {
  _abool2,
  _abytes2,
  _validateObject,
  aInRange,
  bytesToNumberLE,
  copyBytes,
  ensureBytes,
  equalBytes,
  memoized,
  notImplemented,
  numberToBytesLE
} from "./chunk-T2A5ZAMZ.js";
import "./chunk-XXKD3HEK.js";
import "./chunk-QYYAG6CM.js";
import {
  keccak_256
} from "./chunk-Y7BWPSR5.js";
import {
  defaultSolanaExternalWallet
} from "./chunk-HDIQWJJX.js";
import "./chunk-IKAB4A4D.js";
import "./chunk-EO4ZYWSJ.js";
import "./chunk-3QM4QFEZ.js";
import {
  require_jsx_runtime
} from "./chunk-UPMDYLTV.js";
import "./chunk-AMXWO4KO.js";
import "./chunk-WAIU3DJR.js";
import "./chunk-U23KTIEM.js";
import {
  require_buffer
} from "./chunk-G6422SFU.js";
import "./chunk-EIHG224A.js";
import {
  sha256
} from "./chunk-PMFATS67.js";
import {
  sha512
} from "./chunk-M6UVRKN6.js";
import {
  abytes,
  bytesToHex,
  concatBytes,
  isBytes,
  randomBytes,
  utf8ToBytes
} from "./chunk-3ZL3LWEU.js";
import "./chunk-Q5OWYOJ4.js";
import {
  require_react
} from "./chunk-NSM7HXF2.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-QEK2ZTOW.js";

// node_modules/.pnpm/base-x@3.0.11/node_modules/base-x/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/base-x@3.0.11/node_modules/base-x/src/index.js"(exports, module) {
    "use strict";
    var _Buffer = require_safe_buffer().Buffer;
    function base(ALPHABET) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255;
      }
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
      }
      var BASE = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE);
      function encode3(source) {
        if (Array.isArray(source) || source instanceof Uint8Array) {
          source = _Buffer.from(source);
        }
        if (!_Buffer.isBuffer(source)) {
          throw new TypeError("Expected Buffer");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i2 = 0;
          for (var it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE >>> 0;
            carry = carry / BASE >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          pbegin++;
        }
        var it2 = size - length;
        while (it2 !== size && b58[it2] === 0) {
          it2++;
        }
        var str = LEADER.repeat(zeroes);
        for (; it2 < size; ++it2) {
          str += ALPHABET.charAt(b58[it2]);
        }
        return str;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return _Buffer.alloc(0);
        }
        var psz = 0;
        var zeroes = 0;
        var length = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while (psz < source.length) {
          var charCode = source.charCodeAt(psz);
          if (charCode > 255) {
            return;
          }
          var carry = BASE_MAP[charCode];
          if (carry === 255) {
            return;
          }
          var i2 = 0;
          for (var it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
            carry += BASE * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          psz++;
        }
        var it4 = size - length;
        while (it4 !== size && b256[it4] === 0) {
          it4++;
        }
        var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
        vch.fill(0, 0, zeroes);
        var j2 = zeroes;
        while (it4 !== size) {
          vch[j2++] = b256[it4++];
        }
        return vch;
      }
      function decode2(string2) {
        var buffer = decodeUnsafe(string2);
        if (buffer) {
          return buffer;
        }
        throw new Error("Non-base" + BASE + " character");
      }
      return {
        encode: encode3,
        decodeUnsafe,
        decode: decode2
      };
    }
    module.exports = base;
  }
});

// node_modules/.pnpm/bs58@4.0.1/node_modules/bs58/index.js
var require_bs58 = __commonJS({
  "node_modules/.pnpm/bs58@4.0.1/node_modules/bs58/index.js"(exports, module) {
    var basex = require_src();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module.exports = basex(ALPHABET);
  }
});

// node_modules/.pnpm/text-encoding-utf-8@1.0.2/node_modules/text-encoding-utf-8/src/encoding.js
var encoding_exports = {};
__export(encoding_exports, {
  TextDecoder: () => TextDecoder2,
  TextEncoder: () => TextEncoder2
});
function inRange(a, min, max) {
  return min <= a && a <= max;
}
function ToDictionary(o2) {
  if (o2 === void 0) return {};
  if (o2 === Object(o2)) return o2;
  throw TypeError("Could not convert argument to dictionary");
}
function stringToCodePoints(string2) {
  var s = String(string2);
  var n = s.length;
  var i = 0;
  var u = [];
  while (i < n) {
    var c = s.charCodeAt(i);
    if (c < 55296 || c > 57343) {
      u.push(c);
    } else if (56320 <= c && c <= 57343) {
      u.push(65533);
    } else if (55296 <= c && c <= 56319) {
      if (i === n - 1) {
        u.push(65533);
      } else {
        var d = string2.charCodeAt(i + 1);
        if (56320 <= d && d <= 57343) {
          var a = c & 1023;
          var b = d & 1023;
          u.push(65536 + (a << 10) + b);
          i += 1;
        } else {
          u.push(65533);
        }
      }
    }
    i += 1;
  }
  return u;
}
function codePointsToString(code_points) {
  var s = "";
  for (var i = 0; i < code_points.length; ++i) {
    var cp = code_points[i];
    if (cp <= 65535) {
      s += String.fromCharCode(cp);
    } else {
      cp -= 65536;
      s += String.fromCharCode(
        (cp >> 10) + 55296,
        (cp & 1023) + 56320
      );
    }
  }
  return s;
}
function Stream(tokens) {
  this.tokens = [].slice.call(tokens);
}
function decoderError(fatal, opt_code_point) {
  if (fatal)
    throw TypeError("Decoder error");
  return opt_code_point || 65533;
}
function Decoder() {
}
function Encoder() {
}
function TextDecoder2(encoding, options) {
  if (!(this instanceof TextDecoder2)) {
    return new TextDecoder2(encoding, options);
  }
  encoding = encoding !== void 0 ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
  if (encoding !== DEFAULT_ENCODING) {
    throw new Error("Encoding not supported. Only utf-8 is supported");
  }
  options = ToDictionary(options);
  this._streaming = false;
  this._BOMseen = false;
  this._decoder = null;
  this._fatal = Boolean(options["fatal"]);
  this._ignoreBOM = Boolean(options["ignoreBOM"]);
  Object.defineProperty(this, "encoding", { value: "utf-8" });
  Object.defineProperty(this, "fatal", { value: this._fatal });
  Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
function TextEncoder2(encoding, options) {
  if (!(this instanceof TextEncoder2))
    return new TextEncoder2(encoding, options);
  encoding = encoding !== void 0 ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
  if (encoding !== DEFAULT_ENCODING) {
    throw new Error("Encoding not supported. Only utf-8 is supported");
  }
  options = ToDictionary(options);
  this._streaming = false;
  this._encoder = null;
  this._options = { fatal: Boolean(options["fatal"]) };
  Object.defineProperty(this, "encoding", { value: "utf-8" });
}
function UTF8Decoder(options) {
  var fatal = options.fatal;
  var utf8_code_point = 0, utf8_bytes_seen = 0, utf8_bytes_needed = 0, utf8_lower_boundary = 128, utf8_upper_boundary = 191;
  this.handler = function(stream, bite) {
    if (bite === end_of_stream && utf8_bytes_needed !== 0) {
      utf8_bytes_needed = 0;
      return decoderError(fatal);
    }
    if (bite === end_of_stream)
      return finished;
    if (utf8_bytes_needed === 0) {
      if (inRange(bite, 0, 127)) {
        return bite;
      }
      if (inRange(bite, 194, 223)) {
        utf8_bytes_needed = 1;
        utf8_code_point = bite - 192;
      } else if (inRange(bite, 224, 239)) {
        if (bite === 224)
          utf8_lower_boundary = 160;
        if (bite === 237)
          utf8_upper_boundary = 159;
        utf8_bytes_needed = 2;
        utf8_code_point = bite - 224;
      } else if (inRange(bite, 240, 244)) {
        if (bite === 240)
          utf8_lower_boundary = 144;
        if (bite === 244)
          utf8_upper_boundary = 143;
        utf8_bytes_needed = 3;
        utf8_code_point = bite - 240;
      } else {
        return decoderError(fatal);
      }
      utf8_code_point = utf8_code_point << 6 * utf8_bytes_needed;
      return null;
    }
    if (!inRange(bite, utf8_lower_boundary, utf8_upper_boundary)) {
      utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
      utf8_lower_boundary = 128;
      utf8_upper_boundary = 191;
      stream.prepend(bite);
      return decoderError(fatal);
    }
    utf8_lower_boundary = 128;
    utf8_upper_boundary = 191;
    utf8_bytes_seen += 1;
    utf8_code_point += bite - 128 << 6 * (utf8_bytes_needed - utf8_bytes_seen);
    if (utf8_bytes_seen !== utf8_bytes_needed)
      return null;
    var code_point = utf8_code_point;
    utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
    return code_point;
  };
}
function UTF8Encoder(options) {
  var fatal = options.fatal;
  this.handler = function(stream, code_point) {
    if (code_point === end_of_stream)
      return finished;
    if (inRange(code_point, 0, 127))
      return code_point;
    var count, offset2;
    if (inRange(code_point, 128, 2047)) {
      count = 1;
      offset2 = 192;
    } else if (inRange(code_point, 2048, 65535)) {
      count = 2;
      offset2 = 224;
    } else if (inRange(code_point, 65536, 1114111)) {
      count = 3;
      offset2 = 240;
    }
    var bytes = [(code_point >> 6 * count) + offset2];
    while (count > 0) {
      var temp = code_point >> 6 * (count - 1);
      bytes.push(128 | temp & 63);
      count -= 1;
    }
    return bytes;
  };
}
var end_of_stream, finished, DEFAULT_ENCODING;
var init_encoding = __esm({
  "node_modules/.pnpm/text-encoding-utf-8@1.0.2/node_modules/text-encoding-utf-8/src/encoding.js"() {
    "use strict";
    end_of_stream = -1;
    Stream.prototype = {
      /**
       * @return {boolean} True if end-of-stream has been hit.
       */
      endOfStream: function() {
        return !this.tokens.length;
      },
      /**
       * When a token is read from a stream, the first token in the
       * stream must be returned and subsequently removed, and
       * end-of-stream must be returned otherwise.
       *
       * @return {number} Get the next token from the stream, or
       * end_of_stream.
       */
      read: function() {
        if (!this.tokens.length)
          return end_of_stream;
        return this.tokens.shift();
      },
      /**
       * When one or more tokens are prepended to a stream, those tokens
       * must be inserted, in given order, before the first token in the
       * stream.
       *
       * @param {(number|!Array.<number>)} token The token(s) to prepend to the stream.
       */
      prepend: function(token) {
        if (Array.isArray(token)) {
          var tokens = (
            /**@type {!Array.<number>}*/
            token
          );
          while (tokens.length)
            this.tokens.unshift(tokens.pop());
        } else {
          this.tokens.unshift(token);
        }
      },
      /**
       * When one or more tokens are pushed to a stream, those tokens
       * must be inserted, in given order, after the last token in the
       * stream.
       *
       * @param {(number|!Array.<number>)} token The tokens(s) to prepend to the stream.
       */
      push: function(token) {
        if (Array.isArray(token)) {
          var tokens = (
            /**@type {!Array.<number>}*/
            token
          );
          while (tokens.length)
            this.tokens.push(tokens.shift());
        } else {
          this.tokens.push(token);
        }
      }
    };
    finished = -1;
    Decoder.prototype = {
      /**
       * @param {Stream} stream The stream of bytes being decoded.
       * @param {number} bite The next byte read from the stream.
       * @return {?(number|!Array.<number>)} The next code point(s)
       *     decoded, or null if not enough data exists in the input
       *     stream to decode a complete code point, or |finished|.
       */
      handler: function(stream, bite) {
      }
    };
    Encoder.prototype = {
      /**
       * @param {Stream} stream The stream of code points being encoded.
       * @param {number} code_point Next code point read from the stream.
       * @return {(number|!Array.<number>)} Byte(s) to emit, or |finished|.
       */
      handler: function(stream, code_point) {
      }
    };
    DEFAULT_ENCODING = "utf-8";
    TextDecoder2.prototype = {
      /**
       * @param {ArrayBufferView=} input The buffer of bytes to decode.
       * @param {Object=} options
       * @return {string} The decoded string.
       */
      decode: function decode(input, options) {
        var bytes;
        if (typeof input === "object" && input instanceof ArrayBuffer) {
          bytes = new Uint8Array(input);
        } else if (typeof input === "object" && "buffer" in input && input.buffer instanceof ArrayBuffer) {
          bytes = new Uint8Array(
            input.buffer,
            input.byteOffset,
            input.byteLength
          );
        } else {
          bytes = new Uint8Array(0);
        }
        options = ToDictionary(options);
        if (!this._streaming) {
          this._decoder = new UTF8Decoder({ fatal: this._fatal });
          this._BOMseen = false;
        }
        this._streaming = Boolean(options["stream"]);
        var input_stream = new Stream(bytes);
        var code_points = [];
        var result;
        while (!input_stream.endOfStream()) {
          result = this._decoder.handler(input_stream, input_stream.read());
          if (result === finished)
            break;
          if (result === null)
            continue;
          if (Array.isArray(result))
            code_points.push.apply(
              code_points,
              /**@type {!Array.<number>}*/
              result
            );
          else
            code_points.push(result);
        }
        if (!this._streaming) {
          do {
            result = this._decoder.handler(input_stream, input_stream.read());
            if (result === finished)
              break;
            if (result === null)
              continue;
            if (Array.isArray(result))
              code_points.push.apply(
                code_points,
                /**@type {!Array.<number>}*/
                result
              );
            else
              code_points.push(result);
          } while (!input_stream.endOfStream());
          this._decoder = null;
        }
        if (code_points.length) {
          if (["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen) {
            if (code_points[0] === 65279) {
              this._BOMseen = true;
              code_points.shift();
            } else {
              this._BOMseen = true;
            }
          }
        }
        return codePointsToString(code_points);
      }
    };
    TextEncoder2.prototype = {
      /**
       * @param {string=} opt_string The string to encode.
       * @param {Object=} options
       * @return {Uint8Array} Encoded bytes, as a Uint8Array.
       */
      encode: function encode(opt_string, options) {
        opt_string = opt_string ? String(opt_string) : "";
        options = ToDictionary(options);
        if (!this._streaming)
          this._encoder = new UTF8Encoder(this._options);
        this._streaming = Boolean(options["stream"]);
        var bytes = [];
        var input_stream = new Stream(stringToCodePoints(opt_string));
        var result;
        while (!input_stream.endOfStream()) {
          result = this._encoder.handler(input_stream, input_stream.read());
          if (result === finished)
            break;
          if (Array.isArray(result))
            bytes.push.apply(
              bytes,
              /**@type {!Array.<number>}*/
              result
            );
          else
            bytes.push(result);
        }
        if (!this._streaming) {
          while (true) {
            result = this._encoder.handler(input_stream, input_stream.read());
            if (result === finished)
              break;
            if (Array.isArray(result))
              bytes.push.apply(
                bytes,
                /**@type {!Array.<number>}*/
                result
              );
            else
              bytes.push(result);
          }
          this._encoder = null;
        }
        return new Uint8Array(bytes);
      }
    };
  }
});

// node_modules/.pnpm/borsh@0.7.0/node_modules/borsh/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/borsh@0.7.0/node_modules/borsh/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o2, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    }) : (function(o2, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o2, v) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v });
    }) : function(o2, v) {
      o2["default"] = v;
    });
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importStar = exports && exports.__importStar || function(mod2) {
      if (mod2 && mod2.__esModule) return mod2;
      var result = {};
      if (mod2 != null) {
        for (var k in mod2) if (k !== "default" && Object.hasOwnProperty.call(mod2, k)) __createBinding(result, mod2, k);
      }
      __setModuleDefault(result, mod2);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod2) {
      return mod2 && mod2.__esModule ? mod2 : { "default": mod2 };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deserializeUnchecked = exports.deserialize = exports.serialize = exports.BinaryReader = exports.BinaryWriter = exports.BorshError = exports.baseDecode = exports.baseEncode = void 0;
    var bn_js_1 = __importDefault(require_bn());
    var bs58_1 = __importDefault(require_bs58());
    var encoding = __importStar((init_encoding(), __toCommonJS(encoding_exports)));
    var ResolvedTextDecoder = typeof TextDecoder !== "function" ? encoding.TextDecoder : TextDecoder;
    var textDecoder = new ResolvedTextDecoder("utf-8", { fatal: true });
    function baseEncode(value) {
      if (typeof value === "string") {
        value = Buffer.from(value, "utf8");
      }
      return bs58_1.default.encode(Buffer.from(value));
    }
    exports.baseEncode = baseEncode;
    function baseDecode(value) {
      return Buffer.from(bs58_1.default.decode(value));
    }
    exports.baseDecode = baseDecode;
    var INITIAL_LENGTH = 1024;
    var BorshError = class extends Error {
      constructor(message) {
        super(message);
        this.fieldPath = [];
        this.originalMessage = message;
      }
      addToFieldPath(fieldName) {
        this.fieldPath.splice(0, 0, fieldName);
        this.message = this.originalMessage + ": " + this.fieldPath.join(".");
      }
    };
    exports.BorshError = BorshError;
    var BinaryWriter = class {
      constructor() {
        this.buf = Buffer.alloc(INITIAL_LENGTH);
        this.length = 0;
      }
      maybeResize() {
        if (this.buf.length < 16 + this.length) {
          this.buf = Buffer.concat([this.buf, Buffer.alloc(INITIAL_LENGTH)]);
        }
      }
      writeU8(value) {
        this.maybeResize();
        this.buf.writeUInt8(value, this.length);
        this.length += 1;
      }
      writeU16(value) {
        this.maybeResize();
        this.buf.writeUInt16LE(value, this.length);
        this.length += 2;
      }
      writeU32(value) {
        this.maybeResize();
        this.buf.writeUInt32LE(value, this.length);
        this.length += 4;
      }
      writeU64(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 8)));
      }
      writeU128(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 16)));
      }
      writeU256(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 32)));
      }
      writeU512(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 64)));
      }
      writeBuffer(buffer) {
        this.buf = Buffer.concat([
          Buffer.from(this.buf.subarray(0, this.length)),
          buffer,
          Buffer.alloc(INITIAL_LENGTH)
        ]);
        this.length += buffer.length;
      }
      writeString(str) {
        this.maybeResize();
        const b = Buffer.from(str, "utf8");
        this.writeU32(b.length);
        this.writeBuffer(b);
      }
      writeFixedArray(array2) {
        this.writeBuffer(Buffer.from(array2));
      }
      writeArray(array2, fn) {
        this.maybeResize();
        this.writeU32(array2.length);
        for (const elem of array2) {
          this.maybeResize();
          fn(elem);
        }
      }
      toArray() {
        return this.buf.subarray(0, this.length);
      }
    };
    exports.BinaryWriter = BinaryWriter;
    function handlingRangeError(target, propertyKey, propertyDescriptor) {
      const originalMethod = propertyDescriptor.value;
      propertyDescriptor.value = function(...args) {
        try {
          return originalMethod.apply(this, args);
        } catch (e2) {
          if (e2 instanceof RangeError) {
            const code = e2.code;
            if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(code) >= 0) {
              throw new BorshError("Reached the end of buffer when deserializing");
            }
          }
          throw e2;
        }
      };
    }
    var BinaryReader = class {
      constructor(buf) {
        this.buf = buf;
        this.offset = 0;
      }
      readU8() {
        const value = this.buf.readUInt8(this.offset);
        this.offset += 1;
        return value;
      }
      readU16() {
        const value = this.buf.readUInt16LE(this.offset);
        this.offset += 2;
        return value;
      }
      readU32() {
        const value = this.buf.readUInt32LE(this.offset);
        this.offset += 4;
        return value;
      }
      readU64() {
        const buf = this.readBuffer(8);
        return new bn_js_1.default(buf, "le");
      }
      readU128() {
        const buf = this.readBuffer(16);
        return new bn_js_1.default(buf, "le");
      }
      readU256() {
        const buf = this.readBuffer(32);
        return new bn_js_1.default(buf, "le");
      }
      readU512() {
        const buf = this.readBuffer(64);
        return new bn_js_1.default(buf, "le");
      }
      readBuffer(len) {
        if (this.offset + len > this.buf.length) {
          throw new BorshError(`Expected buffer length ${len} isn't within bounds`);
        }
        const result = this.buf.slice(this.offset, this.offset + len);
        this.offset += len;
        return result;
      }
      readString() {
        const len = this.readU32();
        const buf = this.readBuffer(len);
        try {
          return textDecoder.decode(buf);
        } catch (e2) {
          throw new BorshError(`Error decoding UTF-8 string: ${e2}`);
        }
      }
      readFixedArray(len) {
        return new Uint8Array(this.readBuffer(len));
      }
      readArray(fn) {
        const len = this.readU32();
        const result = Array();
        for (let i = 0; i < len; ++i) {
          result.push(fn());
        }
        return result;
      }
    };
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU8", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU16", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU32", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU64", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU128", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU256", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU512", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readString", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readFixedArray", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readArray", null);
    exports.BinaryReader = BinaryReader;
    function capitalizeFirstLetter(string2) {
      return string2.charAt(0).toUpperCase() + string2.slice(1);
    }
    function serializeField(schema, fieldName, value, fieldType, writer) {
      try {
        if (typeof fieldType === "string") {
          writer[`write${capitalizeFirstLetter(fieldType)}`](value);
        } else if (fieldType instanceof Array) {
          if (typeof fieldType[0] === "number") {
            if (value.length !== fieldType[0]) {
              throw new BorshError(`Expecting byte array of length ${fieldType[0]}, but got ${value.length} bytes`);
            }
            writer.writeFixedArray(value);
          } else if (fieldType.length === 2 && typeof fieldType[1] === "number") {
            if (value.length !== fieldType[1]) {
              throw new BorshError(`Expecting byte array of length ${fieldType[1]}, but got ${value.length} bytes`);
            }
            for (let i = 0; i < fieldType[1]; i++) {
              serializeField(schema, null, value[i], fieldType[0], writer);
            }
          } else {
            writer.writeArray(value, (item) => {
              serializeField(schema, fieldName, item, fieldType[0], writer);
            });
          }
        } else if (fieldType.kind !== void 0) {
          switch (fieldType.kind) {
            case "option": {
              if (value === null || value === void 0) {
                writer.writeU8(0);
              } else {
                writer.writeU8(1);
                serializeField(schema, fieldName, value, fieldType.type, writer);
              }
              break;
            }
            case "map": {
              writer.writeU32(value.size);
              value.forEach((val, key) => {
                serializeField(schema, fieldName, key, fieldType.key, writer);
                serializeField(schema, fieldName, val, fieldType.value, writer);
              });
              break;
            }
            default:
              throw new BorshError(`FieldType ${fieldType} unrecognized`);
          }
        } else {
          serializeStruct(schema, value, writer);
        }
      } catch (error) {
        if (error instanceof BorshError) {
          error.addToFieldPath(fieldName);
        }
        throw error;
      }
    }
    function serializeStruct(schema, obj, writer) {
      if (typeof obj.borshSerialize === "function") {
        obj.borshSerialize(writer);
        return;
      }
      const structSchema = schema.get(obj.constructor);
      if (!structSchema) {
        throw new BorshError(`Class ${obj.constructor.name} is missing in schema`);
      }
      if (structSchema.kind === "struct") {
        structSchema.fields.map(([fieldName, fieldType]) => {
          serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
        });
      } else if (structSchema.kind === "enum") {
        const name = obj[structSchema.field];
        for (let idx = 0; idx < structSchema.values.length; ++idx) {
          const [fieldName, fieldType] = structSchema.values[idx];
          if (fieldName === name) {
            writer.writeU8(idx);
            serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
            break;
          }
        }
      } else {
        throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${obj.constructor.name}`);
      }
    }
    function serialize2(schema, obj, Writer = BinaryWriter) {
      const writer = new Writer();
      serializeStruct(schema, obj, writer);
      return writer.toArray();
    }
    exports.serialize = serialize2;
    function deserializeField(schema, fieldName, fieldType, reader) {
      try {
        if (typeof fieldType === "string") {
          return reader[`read${capitalizeFirstLetter(fieldType)}`]();
        }
        if (fieldType instanceof Array) {
          if (typeof fieldType[0] === "number") {
            return reader.readFixedArray(fieldType[0]);
          } else if (typeof fieldType[1] === "number") {
            const arr = [];
            for (let i = 0; i < fieldType[1]; i++) {
              arr.push(deserializeField(schema, null, fieldType[0], reader));
            }
            return arr;
          } else {
            return reader.readArray(() => deserializeField(schema, fieldName, fieldType[0], reader));
          }
        }
        if (fieldType.kind === "option") {
          const option = reader.readU8();
          if (option) {
            return deserializeField(schema, fieldName, fieldType.type, reader);
          }
          return void 0;
        }
        if (fieldType.kind === "map") {
          let map = /* @__PURE__ */ new Map();
          const length = reader.readU32();
          for (let i = 0; i < length; i++) {
            const key = deserializeField(schema, fieldName, fieldType.key, reader);
            const val = deserializeField(schema, fieldName, fieldType.value, reader);
            map.set(key, val);
          }
          return map;
        }
        return deserializeStruct(schema, fieldType, reader);
      } catch (error) {
        if (error instanceof BorshError) {
          error.addToFieldPath(fieldName);
        }
        throw error;
      }
    }
    function deserializeStruct(schema, classType, reader) {
      if (typeof classType.borshDeserialize === "function") {
        return classType.borshDeserialize(reader);
      }
      const structSchema = schema.get(classType);
      if (!structSchema) {
        throw new BorshError(`Class ${classType.name} is missing in schema`);
      }
      if (structSchema.kind === "struct") {
        const result = {};
        for (const [fieldName, fieldType] of schema.get(classType).fields) {
          result[fieldName] = deserializeField(schema, fieldName, fieldType, reader);
        }
        return new classType(result);
      }
      if (structSchema.kind === "enum") {
        const idx = reader.readU8();
        if (idx >= structSchema.values.length) {
          throw new BorshError(`Enum index: ${idx} is out of range`);
        }
        const [fieldName, fieldType] = structSchema.values[idx];
        const fieldValue = deserializeField(schema, fieldName, fieldType, reader);
        return new classType({ [fieldName]: fieldValue });
      }
      throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${classType.constructor.name}`);
    }
    function deserialize2(schema, classType, buffer, Reader = BinaryReader) {
      const reader = new Reader(buffer);
      const result = deserializeStruct(schema, classType, reader);
      if (reader.offset < buffer.length) {
        throw new BorshError(`Unexpected ${buffer.length - reader.offset} bytes after deserialized data`);
      }
      return result;
    }
    exports.deserialize = deserialize2;
    function deserializeUnchecked2(schema, classType, buffer, Reader = BinaryReader) {
      const reader = new Reader(buffer);
      return deserializeStruct(schema, classType, reader);
    }
    exports.deserializeUnchecked = deserializeUnchecked2;
  }
});

// node_modules/.pnpm/@solana+buffer-layout@4.0.1/node_modules/@solana/buffer-layout/lib/Layout.js
var require_Layout = __commonJS({
  "node_modules/.pnpm/@solana+buffer-layout@4.0.1/node_modules/@solana/buffer-layout/lib/Layout.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.s16 = exports.s8 = exports.nu64be = exports.u48be = exports.u40be = exports.u32be = exports.u24be = exports.u16be = exports.nu64 = exports.u48 = exports.u40 = exports.u32 = exports.u24 = exports.u16 = exports.u8 = exports.offset = exports.greedy = exports.Constant = exports.UTF8 = exports.CString = exports.Blob = exports.Boolean = exports.BitField = exports.BitStructure = exports.VariantLayout = exports.Union = exports.UnionLayoutDiscriminator = exports.UnionDiscriminator = exports.Structure = exports.Sequence = exports.DoubleBE = exports.Double = exports.FloatBE = exports.Float = exports.NearInt64BE = exports.NearInt64 = exports.NearUInt64BE = exports.NearUInt64 = exports.IntBE = exports.Int = exports.UIntBE = exports.UInt = exports.OffsetLayout = exports.GreedyCount = exports.ExternalLayout = exports.bindConstructorLayout = exports.nameWithProperty = exports.Layout = exports.uint8ArrayToBuffer = exports.checkUint8Array = void 0;
    exports.constant = exports.utf8 = exports.cstr = exports.blob = exports.unionLayoutDiscriminator = exports.union = exports.seq = exports.bits = exports.struct = exports.f64be = exports.f64 = exports.f32be = exports.f32 = exports.ns64be = exports.s48be = exports.s40be = exports.s32be = exports.s24be = exports.s16be = exports.ns64 = exports.s48 = exports.s40 = exports.s32 = exports.s24 = void 0;
    var buffer_1 = require_buffer();
    function checkUint8Array(b) {
      if (!(b instanceof Uint8Array)) {
        throw new TypeError("b must be a Uint8Array");
      }
    }
    exports.checkUint8Array = checkUint8Array;
    function uint8ArrayToBuffer(b) {
      checkUint8Array(b);
      return buffer_1.Buffer.from(b.buffer, b.byteOffset, b.length);
    }
    exports.uint8ArrayToBuffer = uint8ArrayToBuffer;
    var Layout = class {
      constructor(span, property) {
        if (!Number.isInteger(span)) {
          throw new TypeError("span must be an integer");
        }
        this.span = span;
        this.property = property;
      }
      /** Function to create an Object into which decoded properties will
       * be written.
       *
       * Used only for layouts that {@link Layout#decode|decode} to Object
       * instances, which means:
       * * {@link Structure}
       * * {@link Union}
       * * {@link VariantLayout}
       * * {@link BitStructure}
       *
       * If left undefined the JavaScript representation of these layouts
       * will be Object instances.
       *
       * See {@link bindConstructorLayout}.
       */
      makeDestinationObject() {
        return {};
      }
      /**
       * Calculate the span of a specific instance of a layout.
       *
       * @param {Uint8Array} b - the buffer that contains an encoded instance.
       *
       * @param {Number} [offset] - the offset at which the encoded instance
       * starts.  If absent a zero offset is inferred.
       *
       * @return {Number} - the number of bytes covered by the layout
       * instance.  If this method is not overridden in a subclass the
       * definition-time constant {@link Layout#span|span} will be
       * returned.
       *
       * @throws {RangeError} - if the length of the value cannot be
       * determined.
       */
      getSpan(b, offset2) {
        if (0 > this.span) {
          throw new RangeError("indeterminate span");
        }
        return this.span;
      }
      /**
       * Replicate the layout using a new property.
       *
       * This function must be used to get a structurally-equivalent layout
       * with a different name since all {@link Layout} instances are
       * immutable.
       *
       * **NOTE** This is a shallow copy.  All fields except {@link
       * Layout#property|property} are strictly equal to the origin layout.
       *
       * @param {String} property - the value for {@link
       * Layout#property|property} in the replica.
       *
       * @returns {Layout} - the copy with {@link Layout#property|property}
       * set to `property`.
       */
      replicate(property) {
        const rv = Object.create(this.constructor.prototype);
        Object.assign(rv, this);
        rv.property = property;
        return rv;
      }
      /**
       * Create an object from layout properties and an array of values.
       *
       * **NOTE** This function returns `undefined` if invoked on a layout
       * that does not return its value as an Object.  Objects are
       * returned for things that are a {@link Structure}, which includes
       * {@link VariantLayout|variant layouts} if they are structures, and
       * excludes {@link Union}s.  If you want this feature for a union
       * you must use {@link Union.getVariant|getVariant} to select the
       * desired layout.
       *
       * @param {Array} values - an array of values that correspond to the
       * default order for properties.  As with {@link Layout#decode|decode}
       * layout elements that have no property name are skipped when
       * iterating over the array values.  Only the top-level properties are
       * assigned; arguments are not assigned to properties of contained
       * layouts.  Any unused values are ignored.
       *
       * @return {(Object|undefined)}
       */
      fromArray(values) {
        return void 0;
      }
    };
    exports.Layout = Layout;
    function nameWithProperty(name, lo) {
      if (lo.property) {
        return name + "[" + lo.property + "]";
      }
      return name;
    }
    exports.nameWithProperty = nameWithProperty;
    function bindConstructorLayout(Class, layout) {
      if ("function" !== typeof Class) {
        throw new TypeError("Class must be constructor");
      }
      if (Object.prototype.hasOwnProperty.call(Class, "layout_")) {
        throw new Error("Class is already bound to a layout");
      }
      if (!(layout && layout instanceof Layout)) {
        throw new TypeError("layout must be a Layout");
      }
      if (Object.prototype.hasOwnProperty.call(layout, "boundConstructor_")) {
        throw new Error("layout is already bound to a constructor");
      }
      Class.layout_ = layout;
      layout.boundConstructor_ = Class;
      layout.makeDestinationObject = (() => new Class());
      Object.defineProperty(Class.prototype, "encode", {
        value(b, offset2) {
          return layout.encode(this, b, offset2);
        },
        writable: true
      });
      Object.defineProperty(Class, "decode", {
        value(b, offset2) {
          return layout.decode(b, offset2);
        },
        writable: true
      });
    }
    exports.bindConstructorLayout = bindConstructorLayout;
    var ExternalLayout = class extends Layout {
      /**
       * Return `true` iff the external layout decodes to an unsigned
       * integer layout.
       *
       * In that case it can be used as the source of {@link
       * Sequence#count|Sequence counts}, {@link Blob#length|Blob lengths},
       * or as {@link UnionLayoutDiscriminator#layout|external union
       * discriminators}.
       *
       * @abstract
       */
      isCount() {
        throw new Error("ExternalLayout is abstract");
      }
    };
    exports.ExternalLayout = ExternalLayout;
    var GreedyCount = class extends ExternalLayout {
      constructor(elementSpan = 1, property) {
        if (!Number.isInteger(elementSpan) || 0 >= elementSpan) {
          throw new TypeError("elementSpan must be a (positive) integer");
        }
        super(-1, property);
        this.elementSpan = elementSpan;
      }
      /** @override */
      isCount() {
        return true;
      }
      /** @override */
      decode(b, offset2 = 0) {
        checkUint8Array(b);
        const rem = b.length - offset2;
        return Math.floor(rem / this.elementSpan);
      }
      /** @override */
      encode(src, b, offset2) {
        return 0;
      }
    };
    exports.GreedyCount = GreedyCount;
    var OffsetLayout = class extends ExternalLayout {
      constructor(layout, offset2 = 0, property) {
        if (!(layout instanceof Layout)) {
          throw new TypeError("layout must be a Layout");
        }
        if (!Number.isInteger(offset2)) {
          throw new TypeError("offset must be integer or undefined");
        }
        super(layout.span, property || layout.property);
        this.layout = layout;
        this.offset = offset2;
      }
      /** @override */
      isCount() {
        return this.layout instanceof UInt || this.layout instanceof UIntBE;
      }
      /** @override */
      decode(b, offset2 = 0) {
        return this.layout.decode(b, offset2 + this.offset);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        return this.layout.encode(src, b, offset2 + this.offset);
      }
    };
    exports.OffsetLayout = OffsetLayout;
    var UInt = class extends Layout {
      constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
          throw new RangeError("span must not exceed 6 bytes");
        }
      }
      /** @override */
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readUIntLE(offset2, this.span);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeUIntLE(src, offset2, this.span);
        return this.span;
      }
    };
    exports.UInt = UInt;
    var UIntBE = class extends Layout {
      constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
          throw new RangeError("span must not exceed 6 bytes");
        }
      }
      /** @override */
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readUIntBE(offset2, this.span);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeUIntBE(src, offset2, this.span);
        return this.span;
      }
    };
    exports.UIntBE = UIntBE;
    var Int = class extends Layout {
      constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
          throw new RangeError("span must not exceed 6 bytes");
        }
      }
      /** @override */
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readIntLE(offset2, this.span);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeIntLE(src, offset2, this.span);
        return this.span;
      }
    };
    exports.Int = Int;
    var IntBE = class extends Layout {
      constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
          throw new RangeError("span must not exceed 6 bytes");
        }
      }
      /** @override */
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readIntBE(offset2, this.span);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeIntBE(src, offset2, this.span);
        return this.span;
      }
    };
    exports.IntBE = IntBE;
    var V2E32 = Math.pow(2, 32);
    function divmodInt64(src) {
      const hi32 = Math.floor(src / V2E32);
      const lo32 = src - hi32 * V2E32;
      return { hi32, lo32 };
    }
    function roundedInt64(hi32, lo32) {
      return hi32 * V2E32 + lo32;
    }
    var NearUInt64 = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      /** @override */
      decode(b, offset2 = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const lo32 = buffer.readUInt32LE(offset2);
        const hi32 = buffer.readUInt32LE(offset2 + 4);
        return roundedInt64(hi32, lo32);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32LE(split.lo32, offset2);
        buffer.writeUInt32LE(split.hi32, offset2 + 4);
        return 8;
      }
    };
    exports.NearUInt64 = NearUInt64;
    var NearUInt64BE = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      /** @override */
      decode(b, offset2 = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const hi32 = buffer.readUInt32BE(offset2);
        const lo32 = buffer.readUInt32BE(offset2 + 4);
        return roundedInt64(hi32, lo32);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32BE(split.hi32, offset2);
        buffer.writeUInt32BE(split.lo32, offset2 + 4);
        return 8;
      }
    };
    exports.NearUInt64BE = NearUInt64BE;
    var NearInt64 = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      /** @override */
      decode(b, offset2 = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const lo32 = buffer.readUInt32LE(offset2);
        const hi32 = buffer.readInt32LE(offset2 + 4);
        return roundedInt64(hi32, lo32);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32LE(split.lo32, offset2);
        buffer.writeInt32LE(split.hi32, offset2 + 4);
        return 8;
      }
    };
    exports.NearInt64 = NearInt64;
    var NearInt64BE = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      /** @override */
      decode(b, offset2 = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const hi32 = buffer.readInt32BE(offset2);
        const lo32 = buffer.readUInt32BE(offset2 + 4);
        return roundedInt64(hi32, lo32);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeInt32BE(split.hi32, offset2);
        buffer.writeUInt32BE(split.lo32, offset2 + 4);
        return 8;
      }
    };
    exports.NearInt64BE = NearInt64BE;
    var Float = class extends Layout {
      constructor(property) {
        super(4, property);
      }
      /** @override */
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readFloatLE(offset2);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeFloatLE(src, offset2);
        return 4;
      }
    };
    exports.Float = Float;
    var FloatBE = class extends Layout {
      constructor(property) {
        super(4, property);
      }
      /** @override */
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readFloatBE(offset2);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeFloatBE(src, offset2);
        return 4;
      }
    };
    exports.FloatBE = FloatBE;
    var Double = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      /** @override */
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readDoubleLE(offset2);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeDoubleLE(src, offset2);
        return 8;
      }
    };
    exports.Double = Double;
    var DoubleBE = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      /** @override */
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readDoubleBE(offset2);
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeDoubleBE(src, offset2);
        return 8;
      }
    };
    exports.DoubleBE = DoubleBE;
    var Sequence = class extends Layout {
      constructor(elementLayout, count, property) {
        if (!(elementLayout instanceof Layout)) {
          throw new TypeError("elementLayout must be a Layout");
        }
        if (!(count instanceof ExternalLayout && count.isCount() || Number.isInteger(count) && 0 <= count)) {
          throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
        }
        let span = -1;
        if (!(count instanceof ExternalLayout) && 0 < elementLayout.span) {
          span = count * elementLayout.span;
        }
        super(span, property);
        this.elementLayout = elementLayout;
        this.count = count;
      }
      /** @override */
      getSpan(b, offset2 = 0) {
        if (0 <= this.span) {
          return this.span;
        }
        let span = 0;
        let count = this.count;
        if (count instanceof ExternalLayout) {
          count = count.decode(b, offset2);
        }
        if (0 < this.elementLayout.span) {
          span = count * this.elementLayout.span;
        } else {
          let idx = 0;
          while (idx < count) {
            span += this.elementLayout.getSpan(b, offset2 + span);
            ++idx;
          }
        }
        return span;
      }
      /** @override */
      decode(b, offset2 = 0) {
        const rv = [];
        let i = 0;
        let count = this.count;
        if (count instanceof ExternalLayout) {
          count = count.decode(b, offset2);
        }
        while (i < count) {
          rv.push(this.elementLayout.decode(b, offset2));
          offset2 += this.elementLayout.getSpan(b, offset2);
          i += 1;
        }
        return rv;
      }
      /** Implement {@link Layout#encode|encode} for {@link Sequence}.
       *
       * **NOTE** If `src` is shorter than {@link Sequence#count|count} then
       * the unused space in the buffer is left unchanged.  If `src` is
       * longer than {@link Sequence#count|count} the unneeded elements are
       * ignored.
       *
       * **NOTE** If {@link Layout#count|count} is an instance of {@link
       * ExternalLayout} then the length of `src` will be encoded as the
       * count after `src` is encoded. */
      encode(src, b, offset2 = 0) {
        const elo = this.elementLayout;
        const span = src.reduce((span2, v) => {
          return span2 + elo.encode(v, b, offset2 + span2);
        }, 0);
        if (this.count instanceof ExternalLayout) {
          this.count.encode(src.length, b, offset2);
        }
        return span;
      }
    };
    exports.Sequence = Sequence;
    var Structure = class extends Layout {
      constructor(fields, property, decodePrefixes) {
        if (!(Array.isArray(fields) && fields.reduce((acc, v) => acc && v instanceof Layout, true))) {
          throw new TypeError("fields must be array of Layout instances");
        }
        if ("boolean" === typeof property && void 0 === decodePrefixes) {
          decodePrefixes = property;
          property = void 0;
        }
        for (const fd of fields) {
          if (0 > fd.span && void 0 === fd.property) {
            throw new Error("fields cannot contain unnamed variable-length layout");
          }
        }
        let span = -1;
        try {
          span = fields.reduce((span2, fd) => span2 + fd.getSpan(), 0);
        } catch (e2) {
        }
        super(span, property);
        this.fields = fields;
        this.decodePrefixes = !!decodePrefixes;
      }
      /** @override */
      getSpan(b, offset2 = 0) {
        if (0 <= this.span) {
          return this.span;
        }
        let span = 0;
        try {
          span = this.fields.reduce((span2, fd) => {
            const fsp = fd.getSpan(b, offset2);
            offset2 += fsp;
            return span2 + fsp;
          }, 0);
        } catch (e2) {
          throw new RangeError("indeterminate span");
        }
        return span;
      }
      /** @override */
      decode(b, offset2 = 0) {
        checkUint8Array(b);
        const dest = this.makeDestinationObject();
        for (const fd of this.fields) {
          if (void 0 !== fd.property) {
            dest[fd.property] = fd.decode(b, offset2);
          }
          offset2 += fd.getSpan(b, offset2);
          if (this.decodePrefixes && b.length === offset2) {
            break;
          }
        }
        return dest;
      }
      /** Implement {@link Layout#encode|encode} for {@link Structure}.
       *
       * If `src` is missing a property for a member with a defined {@link
       * Layout#property|property} the corresponding region of the buffer is
       * left unmodified. */
      encode(src, b, offset2 = 0) {
        const firstOffset = offset2;
        let lastOffset = 0;
        let lastWrote = 0;
        for (const fd of this.fields) {
          let span = fd.span;
          lastWrote = 0 < span ? span : 0;
          if (void 0 !== fd.property) {
            const fv = src[fd.property];
            if (void 0 !== fv) {
              lastWrote = fd.encode(fv, b, offset2);
              if (0 > span) {
                span = fd.getSpan(b, offset2);
              }
            }
          }
          lastOffset = offset2;
          offset2 += span;
        }
        return lastOffset + lastWrote - firstOffset;
      }
      /** @override */
      fromArray(values) {
        const dest = this.makeDestinationObject();
        for (const fd of this.fields) {
          if (void 0 !== fd.property && 0 < values.length) {
            dest[fd.property] = values.shift();
          }
        }
        return dest;
      }
      /**
       * Get access to the layout of a given property.
       *
       * @param {String} property - the structure member of interest.
       *
       * @return {Layout} - the layout associated with `property`, or
       * undefined if there is no such property.
       */
      layoutFor(property) {
        if ("string" !== typeof property) {
          throw new TypeError("property must be string");
        }
        for (const fd of this.fields) {
          if (fd.property === property) {
            return fd;
          }
        }
        return void 0;
      }
      /**
       * Get the offset of a structure member.
       *
       * @param {String} property - the structure member of interest.
       *
       * @return {Number} - the offset in bytes to the start of `property`
       * within the structure, or undefined if `property` is not a field
       * within the structure.  If the property is a member but follows a
       * variable-length structure member a negative number will be
       * returned.
       */
      offsetOf(property) {
        if ("string" !== typeof property) {
          throw new TypeError("property must be string");
        }
        let offset2 = 0;
        for (const fd of this.fields) {
          if (fd.property === property) {
            return offset2;
          }
          if (0 > fd.span) {
            offset2 = -1;
          } else if (0 <= offset2) {
            offset2 += fd.span;
          }
        }
        return void 0;
      }
    };
    exports.Structure = Structure;
    var UnionDiscriminator = class {
      constructor(property) {
        this.property = property;
      }
      /** Analog to {@link Layout#decode|Layout decode} for union discriminators.
       *
       * The implementation of this method need not reference the buffer if
       * variant information is available through other means. */
      decode(b, offset2) {
        throw new Error("UnionDiscriminator is abstract");
      }
      /** Analog to {@link Layout#decode|Layout encode} for union discriminators.
       *
       * The implementation of this method need not store the value if
       * variant information is maintained through other means. */
      encode(src, b, offset2) {
        throw new Error("UnionDiscriminator is abstract");
      }
    };
    exports.UnionDiscriminator = UnionDiscriminator;
    var UnionLayoutDiscriminator = class extends UnionDiscriminator {
      constructor(layout, property) {
        if (!(layout instanceof ExternalLayout && layout.isCount())) {
          throw new TypeError("layout must be an unsigned integer ExternalLayout");
        }
        super(property || layout.property || "variant");
        this.layout = layout;
      }
      /** Delegate decoding to {@link UnionLayoutDiscriminator#layout|layout}. */
      decode(b, offset2) {
        return this.layout.decode(b, offset2);
      }
      /** Delegate encoding to {@link UnionLayoutDiscriminator#layout|layout}. */
      encode(src, b, offset2) {
        return this.layout.encode(src, b, offset2);
      }
    };
    exports.UnionLayoutDiscriminator = UnionLayoutDiscriminator;
    var Union = class extends Layout {
      constructor(discr, defaultLayout, property) {
        let discriminator;
        if (discr instanceof UInt || discr instanceof UIntBE) {
          discriminator = new UnionLayoutDiscriminator(new OffsetLayout(discr));
        } else if (discr instanceof ExternalLayout && discr.isCount()) {
          discriminator = new UnionLayoutDiscriminator(discr);
        } else if (!(discr instanceof UnionDiscriminator)) {
          throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
        } else {
          discriminator = discr;
        }
        if (void 0 === defaultLayout) {
          defaultLayout = null;
        }
        if (!(null === defaultLayout || defaultLayout instanceof Layout)) {
          throw new TypeError("defaultLayout must be null or a Layout");
        }
        if (null !== defaultLayout) {
          if (0 > defaultLayout.span) {
            throw new Error("defaultLayout must have constant span");
          }
          if (void 0 === defaultLayout.property) {
            defaultLayout = defaultLayout.replicate("content");
          }
        }
        let span = -1;
        if (defaultLayout) {
          span = defaultLayout.span;
          if (0 <= span && (discr instanceof UInt || discr instanceof UIntBE)) {
            span += discriminator.layout.span;
          }
        }
        super(span, property);
        this.discriminator = discriminator;
        this.usesPrefixDiscriminator = discr instanceof UInt || discr instanceof UIntBE;
        this.defaultLayout = defaultLayout;
        this.registry = {};
        let boundGetSourceVariant = this.defaultGetSourceVariant.bind(this);
        this.getSourceVariant = function(src) {
          return boundGetSourceVariant(src);
        };
        this.configGetSourceVariant = function(gsv) {
          boundGetSourceVariant = gsv.bind(this);
        };
      }
      /** @override */
      getSpan(b, offset2 = 0) {
        if (0 <= this.span) {
          return this.span;
        }
        const vlo = this.getVariant(b, offset2);
        if (!vlo) {
          throw new Error("unable to determine span for unrecognized variant");
        }
        return vlo.getSpan(b, offset2);
      }
      /**
       * Method to infer a registered Union variant compatible with `src`.
       *
       * The first satisfied rule in the following sequence defines the
       * return value:
       * * If `src` has properties matching the Union discriminator and
       *   the default layout, `undefined` is returned regardless of the
       *   value of the discriminator property (this ensures the default
       *   layout will be used);
       * * If `src` has a property matching the Union discriminator, the
       *   value of the discriminator identifies a registered variant, and
       *   either (a) the variant has no layout, or (b) `src` has the
       *   variant's property, then the variant is returned (because the
       *   source satisfies the constraints of the variant it identifies);
       * * If `src` does not have a property matching the Union
       *   discriminator, but does have a property matching a registered
       *   variant, then the variant is returned (because the source
       *   matches a variant without an explicit conflict);
       * * An error is thrown (because we either can't identify a variant,
       *   or we were explicitly told the variant but can't satisfy it).
       *
       * @param {Object} src - an object presumed to be compatible with
       * the content of the Union.
       *
       * @return {(undefined|VariantLayout)} - as described above.
       *
       * @throws {Error} - if `src` cannot be associated with a default or
       * registered variant.
       */
      defaultGetSourceVariant(src) {
        if (Object.prototype.hasOwnProperty.call(src, this.discriminator.property)) {
          if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(src, this.defaultLayout.property)) {
            return void 0;
          }
          const vlo = this.registry[src[this.discriminator.property]];
          if (vlo && (!vlo.layout || vlo.property && Object.prototype.hasOwnProperty.call(src, vlo.property))) {
            return vlo;
          }
        } else {
          for (const tag in this.registry) {
            const vlo = this.registry[tag];
            if (vlo.property && Object.prototype.hasOwnProperty.call(src, vlo.property)) {
              return vlo;
            }
          }
        }
        throw new Error("unable to infer src variant");
      }
      /** Implement {@link Layout#decode|decode} for {@link Union}.
       *
       * If the variant is {@link Union#addVariant|registered} the return
       * value is an instance of that variant, with no explicit
       * discriminator.  Otherwise the {@link Union#defaultLayout|default
       * layout} is used to decode the content. */
      decode(b, offset2 = 0) {
        let dest;
        const dlo = this.discriminator;
        const discr = dlo.decode(b, offset2);
        const clo = this.registry[discr];
        if (void 0 === clo) {
          const defaultLayout = this.defaultLayout;
          let contentOffset = 0;
          if (this.usesPrefixDiscriminator) {
            contentOffset = dlo.layout.span;
          }
          dest = this.makeDestinationObject();
          dest[dlo.property] = discr;
          dest[defaultLayout.property] = defaultLayout.decode(b, offset2 + contentOffset);
        } else {
          dest = clo.decode(b, offset2);
        }
        return dest;
      }
      /** Implement {@link Layout#encode|encode} for {@link Union}.
       *
       * This API assumes the `src` object is consistent with the union's
       * {@link Union#defaultLayout|default layout}.  To encode variants
       * use the appropriate variant-specific {@link VariantLayout#encode}
       * method. */
      encode(src, b, offset2 = 0) {
        const vlo = this.getSourceVariant(src);
        if (void 0 === vlo) {
          const dlo = this.discriminator;
          const clo = this.defaultLayout;
          let contentOffset = 0;
          if (this.usesPrefixDiscriminator) {
            contentOffset = dlo.layout.span;
          }
          dlo.encode(src[dlo.property], b, offset2);
          return contentOffset + clo.encode(src[clo.property], b, offset2 + contentOffset);
        }
        return vlo.encode(src, b, offset2);
      }
      /** Register a new variant structure within a union.  The newly
       * created variant is returned.
       *
       * @param {Number} variant - initializer for {@link
       * VariantLayout#variant|variant}.
       *
       * @param {Layout} layout - initializer for {@link
       * VariantLayout#layout|layout}.
       *
       * @param {String} property - initializer for {@link
       * Layout#property|property}.
       *
       * @return {VariantLayout} */
      addVariant(variant, layout, property) {
        const rv = new VariantLayout(this, variant, layout, property);
        this.registry[variant] = rv;
        return rv;
      }
      /**
       * Get the layout associated with a registered variant.
       *
       * If `vb` does not produce a registered variant the function returns
       * `undefined`.
       *
       * @param {(Number|Uint8Array)} vb - either the variant number, or a
       * buffer from which the discriminator is to be read.
       *
       * @param {Number} offset - offset into `vb` for the start of the
       * union.  Used only when `vb` is an instance of {Uint8Array}.
       *
       * @return {({VariantLayout}|undefined)}
       */
      getVariant(vb, offset2 = 0) {
        let variant;
        if (vb instanceof Uint8Array) {
          variant = this.discriminator.decode(vb, offset2);
        } else {
          variant = vb;
        }
        return this.registry[variant];
      }
    };
    exports.Union = Union;
    var VariantLayout = class extends Layout {
      constructor(union2, variant, layout, property) {
        if (!(union2 instanceof Union)) {
          throw new TypeError("union must be a Union");
        }
        if (!Number.isInteger(variant) || 0 > variant) {
          throw new TypeError("variant must be a (non-negative) integer");
        }
        if ("string" === typeof layout && void 0 === property) {
          property = layout;
          layout = null;
        }
        if (layout) {
          if (!(layout instanceof Layout)) {
            throw new TypeError("layout must be a Layout");
          }
          if (null !== union2.defaultLayout && 0 <= layout.span && layout.span > union2.defaultLayout.span) {
            throw new Error("variant span exceeds span of containing union");
          }
          if ("string" !== typeof property) {
            throw new TypeError("variant must have a String property");
          }
        }
        let span = union2.span;
        if (0 > union2.span) {
          span = layout ? layout.span : 0;
          if (0 <= span && union2.usesPrefixDiscriminator) {
            span += union2.discriminator.layout.span;
          }
        }
        super(span, property);
        this.union = union2;
        this.variant = variant;
        this.layout = layout || null;
      }
      /** @override */
      getSpan(b, offset2 = 0) {
        if (0 <= this.span) {
          return this.span;
        }
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
          contentOffset = this.union.discriminator.layout.span;
        }
        let span = 0;
        if (this.layout) {
          span = this.layout.getSpan(b, offset2 + contentOffset);
        }
        return contentOffset + span;
      }
      /** @override */
      decode(b, offset2 = 0) {
        const dest = this.makeDestinationObject();
        if (this !== this.union.getVariant(b, offset2)) {
          throw new Error("variant mismatch");
        }
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
          contentOffset = this.union.discriminator.layout.span;
        }
        if (this.layout) {
          dest[this.property] = this.layout.decode(b, offset2 + contentOffset);
        } else if (this.property) {
          dest[this.property] = true;
        } else if (this.union.usesPrefixDiscriminator) {
          dest[this.union.discriminator.property] = this.variant;
        }
        return dest;
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
          contentOffset = this.union.discriminator.layout.span;
        }
        if (this.layout && !Object.prototype.hasOwnProperty.call(src, this.property)) {
          throw new TypeError("variant lacks property " + this.property);
        }
        this.union.discriminator.encode(this.variant, b, offset2);
        let span = contentOffset;
        if (this.layout) {
          this.layout.encode(src[this.property], b, offset2 + contentOffset);
          span += this.layout.getSpan(b, offset2 + contentOffset);
          if (0 <= this.union.span && span > this.union.span) {
            throw new Error("encoded variant overruns containing union");
          }
        }
        return span;
      }
      /** Delegate {@link Layout#fromArray|fromArray} to {@link
       * VariantLayout#layout|layout}. */
      fromArray(values) {
        if (this.layout) {
          return this.layout.fromArray(values);
        }
        return void 0;
      }
    };
    exports.VariantLayout = VariantLayout;
    function fixBitwiseResult(v) {
      if (0 > v) {
        v += 4294967296;
      }
      return v;
    }
    var BitStructure = class extends Layout {
      constructor(word, msb, property) {
        if (!(word instanceof UInt || word instanceof UIntBE)) {
          throw new TypeError("word must be a UInt or UIntBE layout");
        }
        if ("string" === typeof msb && void 0 === property) {
          property = msb;
          msb = false;
        }
        if (4 < word.span) {
          throw new RangeError("word cannot exceed 32 bits");
        }
        super(word.span, property);
        this.word = word;
        this.msb = !!msb;
        this.fields = [];
        let value = 0;
        this._packedSetValue = function(v) {
          value = fixBitwiseResult(v);
          return this;
        };
        this._packedGetValue = function() {
          return value;
        };
      }
      /** @override */
      decode(b, offset2 = 0) {
        const dest = this.makeDestinationObject();
        const value = this.word.decode(b, offset2);
        this._packedSetValue(value);
        for (const fd of this.fields) {
          if (void 0 !== fd.property) {
            dest[fd.property] = fd.decode(b);
          }
        }
        return dest;
      }
      /** Implement {@link Layout#encode|encode} for {@link BitStructure}.
       *
       * If `src` is missing a property for a member with a defined {@link
       * Layout#property|property} the corresponding region of the packed
       * value is left unmodified.  Unused bits are also left unmodified. */
      encode(src, b, offset2 = 0) {
        const value = this.word.decode(b, offset2);
        this._packedSetValue(value);
        for (const fd of this.fields) {
          if (void 0 !== fd.property) {
            const fv = src[fd.property];
            if (void 0 !== fv) {
              fd.encode(fv);
            }
          }
        }
        return this.word.encode(this._packedGetValue(), b, offset2);
      }
      /** Register a new bitfield with a containing bit structure.  The
       * resulting bitfield is returned.
       *
       * @param {Number} bits - initializer for {@link BitField#bits|bits}.
       *
       * @param {string} property - initializer for {@link
       * Layout#property|property}.
       *
       * @return {BitField} */
      addField(bits, property) {
        const bf = new BitField(this, bits, property);
        this.fields.push(bf);
        return bf;
      }
      /** As with {@link BitStructure#addField|addField} for single-bit
       * fields with `boolean` value representation.
       *
       * @param {string} property - initializer for {@link
       * Layout#property|property}.
       *
       * @return {Boolean} */
      // `Boolean` conflicts with the native primitive type
      // eslint-disable-next-line @typescript-eslint/ban-types
      addBoolean(property) {
        const bf = new Boolean2(this, property);
        this.fields.push(bf);
        return bf;
      }
      /**
       * Get access to the bit field for a given property.
       *
       * @param {String} property - the bit field of interest.
       *
       * @return {BitField} - the field associated with `property`, or
       * undefined if there is no such property.
       */
      fieldFor(property) {
        if ("string" !== typeof property) {
          throw new TypeError("property must be string");
        }
        for (const fd of this.fields) {
          if (fd.property === property) {
            return fd;
          }
        }
        return void 0;
      }
    };
    exports.BitStructure = BitStructure;
    var BitField = class {
      constructor(container, bits, property) {
        if (!(container instanceof BitStructure)) {
          throw new TypeError("container must be a BitStructure");
        }
        if (!Number.isInteger(bits) || 0 >= bits) {
          throw new TypeError("bits must be positive integer");
        }
        const totalBits = 8 * container.span;
        const usedBits = container.fields.reduce((sum, fd) => sum + fd.bits, 0);
        if (bits + usedBits > totalBits) {
          throw new Error("bits too long for span remainder (" + (totalBits - usedBits) + " of " + totalBits + " remain)");
        }
        this.container = container;
        this.bits = bits;
        this.valueMask = (1 << bits) - 1;
        if (32 === bits) {
          this.valueMask = 4294967295;
        }
        this.start = usedBits;
        if (this.container.msb) {
          this.start = totalBits - usedBits - bits;
        }
        this.wordMask = fixBitwiseResult(this.valueMask << this.start);
        this.property = property;
      }
      /** Store a value into the corresponding subsequence of the containing
       * bit field. */
      decode(b, offset2) {
        const word = this.container._packedGetValue();
        const wordValue = fixBitwiseResult(word & this.wordMask);
        const value = wordValue >>> this.start;
        return value;
      }
      /** Store a value into the corresponding subsequence of the containing
       * bit field.
       *
       * **NOTE** This is not a specialization of {@link
       * Layout#encode|Layout.encode} and there is no return value. */
      encode(value) {
        if ("number" !== typeof value || !Number.isInteger(value) || value !== fixBitwiseResult(value & this.valueMask)) {
          throw new TypeError(nameWithProperty("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
        }
        const word = this.container._packedGetValue();
        const wordValue = fixBitwiseResult(value << this.start);
        this.container._packedSetValue(fixBitwiseResult(word & ~this.wordMask) | wordValue);
      }
    };
    exports.BitField = BitField;
    var Boolean2 = class extends BitField {
      constructor(container, property) {
        super(container, 1, property);
      }
      /** Override {@link BitField#decode|decode} for {@link Boolean|Boolean}.
       *
       * @returns {boolean} */
      decode(b, offset2) {
        return !!super.decode(b, offset2);
      }
      /** @override */
      encode(value) {
        if ("boolean" === typeof value) {
          value = +value;
        }
        super.encode(value);
      }
    };
    exports.Boolean = Boolean2;
    var Blob = class extends Layout {
      constructor(length, property) {
        if (!(length instanceof ExternalLayout && length.isCount() || Number.isInteger(length) && 0 <= length)) {
          throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
        }
        let span = -1;
        if (!(length instanceof ExternalLayout)) {
          span = length;
        }
        super(span, property);
        this.length = length;
      }
      /** @override */
      getSpan(b, offset2) {
        let span = this.span;
        if (0 > span) {
          span = this.length.decode(b, offset2);
        }
        return span;
      }
      /** @override */
      decode(b, offset2 = 0) {
        let span = this.span;
        if (0 > span) {
          span = this.length.decode(b, offset2);
        }
        return uint8ArrayToBuffer(b).slice(offset2, offset2 + span);
      }
      /** Implement {@link Layout#encode|encode} for {@link Blob}.
       *
       * **NOTE** If {@link Layout#count|count} is an instance of {@link
       * ExternalLayout} then the length of `src` will be encoded as the
       * count after `src` is encoded. */
      encode(src, b, offset2) {
        let span = this.length;
        if (this.length instanceof ExternalLayout) {
          span = src.length;
        }
        if (!(src instanceof Uint8Array && span === src.length)) {
          throw new TypeError(nameWithProperty("Blob.encode", this) + " requires (length " + span + ") Uint8Array as src");
        }
        if (offset2 + span > b.length) {
          throw new RangeError("encoding overruns Uint8Array");
        }
        const srcBuffer = uint8ArrayToBuffer(src);
        uint8ArrayToBuffer(b).write(srcBuffer.toString("hex"), offset2, span, "hex");
        if (this.length instanceof ExternalLayout) {
          this.length.encode(span, b, offset2);
        }
        return span;
      }
    };
    exports.Blob = Blob;
    var CString = class extends Layout {
      constructor(property) {
        super(-1, property);
      }
      /** @override */
      getSpan(b, offset2 = 0) {
        checkUint8Array(b);
        let idx = offset2;
        while (idx < b.length && 0 !== b[idx]) {
          idx += 1;
        }
        return 1 + idx - offset2;
      }
      /** @override */
      decode(b, offset2 = 0) {
        const span = this.getSpan(b, offset2);
        return uint8ArrayToBuffer(b).slice(offset2, offset2 + span - 1).toString("utf-8");
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        if ("string" !== typeof src) {
          src = String(src);
        }
        const srcb = buffer_1.Buffer.from(src, "utf8");
        const span = srcb.length;
        if (offset2 + span > b.length) {
          throw new RangeError("encoding overruns Buffer");
        }
        const buffer = uint8ArrayToBuffer(b);
        srcb.copy(buffer, offset2);
        buffer[offset2 + span] = 0;
        return span + 1;
      }
    };
    exports.CString = CString;
    var UTF8 = class extends Layout {
      constructor(maxSpan, property) {
        if ("string" === typeof maxSpan && void 0 === property) {
          property = maxSpan;
          maxSpan = void 0;
        }
        if (void 0 === maxSpan) {
          maxSpan = -1;
        } else if (!Number.isInteger(maxSpan)) {
          throw new TypeError("maxSpan must be an integer");
        }
        super(-1, property);
        this.maxSpan = maxSpan;
      }
      /** @override */
      getSpan(b, offset2 = 0) {
        checkUint8Array(b);
        return b.length - offset2;
      }
      /** @override */
      decode(b, offset2 = 0) {
        const span = this.getSpan(b, offset2);
        if (0 <= this.maxSpan && this.maxSpan < span) {
          throw new RangeError("text length exceeds maxSpan");
        }
        return uint8ArrayToBuffer(b).slice(offset2, offset2 + span).toString("utf-8");
      }
      /** @override */
      encode(src, b, offset2 = 0) {
        if ("string" !== typeof src) {
          src = String(src);
        }
        const srcb = buffer_1.Buffer.from(src, "utf8");
        const span = srcb.length;
        if (0 <= this.maxSpan && this.maxSpan < span) {
          throw new RangeError("text length exceeds maxSpan");
        }
        if (offset2 + span > b.length) {
          throw new RangeError("encoding overruns Buffer");
        }
        srcb.copy(uint8ArrayToBuffer(b), offset2);
        return span;
      }
    };
    exports.UTF8 = UTF8;
    var Constant = class extends Layout {
      constructor(value, property) {
        super(0, property);
        this.value = value;
      }
      /** @override */
      decode(b, offset2) {
        return this.value;
      }
      /** @override */
      encode(src, b, offset2) {
        return 0;
      }
    };
    exports.Constant = Constant;
    exports.greedy = ((elementSpan, property) => new GreedyCount(elementSpan, property));
    exports.offset = ((layout, offset2, property) => new OffsetLayout(layout, offset2, property));
    exports.u8 = ((property) => new UInt(1, property));
    exports.u16 = ((property) => new UInt(2, property));
    exports.u24 = ((property) => new UInt(3, property));
    exports.u32 = ((property) => new UInt(4, property));
    exports.u40 = ((property) => new UInt(5, property));
    exports.u48 = ((property) => new UInt(6, property));
    exports.nu64 = ((property) => new NearUInt64(property));
    exports.u16be = ((property) => new UIntBE(2, property));
    exports.u24be = ((property) => new UIntBE(3, property));
    exports.u32be = ((property) => new UIntBE(4, property));
    exports.u40be = ((property) => new UIntBE(5, property));
    exports.u48be = ((property) => new UIntBE(6, property));
    exports.nu64be = ((property) => new NearUInt64BE(property));
    exports.s8 = ((property) => new Int(1, property));
    exports.s16 = ((property) => new Int(2, property));
    exports.s24 = ((property) => new Int(3, property));
    exports.s32 = ((property) => new Int(4, property));
    exports.s40 = ((property) => new Int(5, property));
    exports.s48 = ((property) => new Int(6, property));
    exports.ns64 = ((property) => new NearInt64(property));
    exports.s16be = ((property) => new IntBE(2, property));
    exports.s24be = ((property) => new IntBE(3, property));
    exports.s32be = ((property) => new IntBE(4, property));
    exports.s40be = ((property) => new IntBE(5, property));
    exports.s48be = ((property) => new IntBE(6, property));
    exports.ns64be = ((property) => new NearInt64BE(property));
    exports.f32 = ((property) => new Float(property));
    exports.f32be = ((property) => new FloatBE(property));
    exports.f64 = ((property) => new Double(property));
    exports.f64be = ((property) => new DoubleBE(property));
    exports.struct = ((fields, property, decodePrefixes) => new Structure(fields, property, decodePrefixes));
    exports.bits = ((word, msb, property) => new BitStructure(word, msb, property));
    exports.seq = ((elementLayout, count, property) => new Sequence(elementLayout, count, property));
    exports.union = ((discr, defaultLayout, property) => new Union(discr, defaultLayout, property));
    exports.unionLayoutDiscriminator = ((layout, property) => new UnionLayoutDiscriminator(layout, property));
    exports.blob = ((length, property) => new Blob(length, property));
    exports.cstr = ((property) => new CString(property));
    exports.utf8 = ((maxSpan, property) => new UTF8(maxSpan, property));
    exports.constant = ((value, property) => new Constant(value, property));
  }
});

// node_modules/.pnpm/jayson@4.2.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/jayson/lib/generateRequest.js
var require_generateRequest = __commonJS({
  "node_modules/.pnpm/jayson@4.2.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/jayson/lib/generateRequest.js"(exports, module) {
    "use strict";
    var uuid = (init_esm_browser(), __toCommonJS(esm_browser_exports)).v4;
    var generateRequest = function(method, params, id, options) {
      if (typeof method !== "string") {
        throw new TypeError(method + " must be a string");
      }
      options = options || {};
      const version = typeof options.version === "number" ? options.version : 2;
      if (version !== 1 && version !== 2) {
        throw new TypeError(version + " must be 1 or 2");
      }
      const request = {
        method
      };
      if (version === 2) {
        request.jsonrpc = "2.0";
      }
      if (params) {
        if (typeof params !== "object" && !Array.isArray(params)) {
          throw new TypeError(params + " must be an object, array or omitted");
        }
        request.params = params;
      }
      if (typeof id === "undefined") {
        const generator = typeof options.generator === "function" ? options.generator : function() {
          return uuid();
        };
        request.id = generator(request, options);
      } else if (version === 2 && id === null) {
        if (options.notificationIdNull) {
          request.id = null;
        }
      } else {
        request.id = id;
      }
      return request;
    };
    module.exports = generateRequest;
  }
});

// node_modules/.pnpm/jayson@4.2.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/jayson/lib/client/browser/index.js
var require_browser = __commonJS({
  "node_modules/.pnpm/jayson@4.2.0_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/jayson/lib/client/browser/index.js"(exports, module) {
    "use strict";
    var uuid = (init_esm_browser(), __toCommonJS(esm_browser_exports)).v4;
    var generateRequest = require_generateRequest();
    var ClientBrowser = function(callServer, options) {
      if (!(this instanceof ClientBrowser)) {
        return new ClientBrowser(callServer, options);
      }
      if (!options) {
        options = {};
      }
      this.options = {
        reviver: typeof options.reviver !== "undefined" ? options.reviver : null,
        replacer: typeof options.replacer !== "undefined" ? options.replacer : null,
        generator: typeof options.generator !== "undefined" ? options.generator : function() {
          return uuid();
        },
        version: typeof options.version !== "undefined" ? options.version : 2,
        notificationIdNull: typeof options.notificationIdNull === "boolean" ? options.notificationIdNull : false
      };
      this.callServer = callServer;
    };
    module.exports = ClientBrowser;
    ClientBrowser.prototype.request = function(method, params, id, callback) {
      const self = this;
      let request = null;
      const isBatch = Array.isArray(method) && typeof params === "function";
      if (this.options.version === 1 && isBatch) {
        throw new TypeError("JSON-RPC 1.0 does not support batching");
      }
      const isRaw = !isBatch && method && typeof method === "object" && typeof params === "function";
      if (isBatch || isRaw) {
        callback = params;
        request = method;
      } else {
        if (typeof id === "function") {
          callback = id;
          id = void 0;
        }
        const hasCallback = typeof callback === "function";
        try {
          request = generateRequest(method, params, id, {
            generator: this.options.generator,
            version: this.options.version,
            notificationIdNull: this.options.notificationIdNull
          });
        } catch (err) {
          if (hasCallback) {
            return callback(err);
          }
          throw err;
        }
        if (!hasCallback) {
          return request;
        }
      }
      let message;
      try {
        message = JSON.stringify(request, this.options.replacer);
      } catch (err) {
        return callback(err);
      }
      this.callServer(message, function(err, response) {
        self._parseResponse(err, response, callback);
      });
      return request;
    };
    ClientBrowser.prototype._parseResponse = function(err, responseText, callback) {
      if (err) {
        callback(err);
        return;
      }
      if (!responseText) {
        return callback();
      }
      let response;
      try {
        response = JSON.parse(responseText, this.options.reviver);
      } catch (err2) {
        return callback(err2);
      }
      if (callback.length === 3) {
        if (Array.isArray(response)) {
          const isError = function(res) {
            return typeof res.error !== "undefined";
          };
          const isNotError = function(res) {
            return !isError(res);
          };
          return callback(null, response.filter(isError), response.filter(isNotError));
        } else {
          return callback(null, response.error, response.result);
        }
      }
      callback(null, response);
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/can-promise.js"(exports, module) {
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/utils.js"(exports) {
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string2) {
      if (typeof string2 !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string2.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string2);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e2) {
        return defaultValue;
      }
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1) return [];
      const posCount = Math.floor(version / 7) + 2;
      const size = getSymbolSize(version);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version) {
      const coords = [];
      const pos = exports.getRowColCoords(version);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j = 0; j < posLength; j++) {
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i], pos[j]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version) {
      const size = getSymbolSize(version);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask2) {
      return mask2 != null && mask2 !== "" && !isNaN(mask2) && mask2 >= 0 && mask2 <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/galois-field.js"(exports) {
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1;
        if (x & 256) {
          x ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    exports.log = function log(n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };
    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    exports.mul = function mul(x, y) {
      if (x === 0 || y === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/polynomial.js"(exports) {
    var GF = require_galois_field();
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }
      return coeff;
    };
    exports.mod = function mod2(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset2 = 0;
        while (offset2 < result.length && result[offset2] === 0) offset2++;
        result = result.slice(offset2);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode3(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/version-check.js"(exports) {
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/regex.js"(exports) {
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/mode.js"(exports) {
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid version: " + version);
      }
      if (version >= 1 && version < 10) return mode.ccBits[0];
      else if (version < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString(string2) {
      if (typeof string2 !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string2.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string2);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e2) {
        return defaultValue;
      }
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/version.js"(exports) {
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version) {
      return Mode.getCharCountIndicator(mode, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version << 12 | d;
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/format-info.js"(exports) {
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask2) {
      const data = errorCorrectionLevel.bit << 3 | mask2;
      let d = data << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data << 10 | d) ^ G15_MASK;
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i, group, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
      }
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/segments.js"(exports) {
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i + j;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array2) {
      return array2.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data, version) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/qrcode.js"(exports) {
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r) continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c) continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r = 8; r < size - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version) {
      const pos = AlignmentPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version);
      let row, col, mod2;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod2 = (bits >> i & 1) === 1;
        matrix.set(row, col, mod2, true);
        matrix.set(col, row, mod2, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod2;
      for (i = 0; i < 15; i++) {
        mod2 = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod2, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod2, true);
        } else {
          matrix.set(size - 15 + i, 8, mod2, true);
        }
        if (i < 8) {
          matrix.set(8, size - i - 1, mod2, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod2, true);
        } else {
          matrix.set(8, 15 - i - 1, mod2, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset2 = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b = 0; b < ecTotalBlocks; b++) {
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b] = buffer.slice(offset2, offset2 + dataSize);
        ecData[b] = rs.encode(dcData[b]);
        offset2 += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }
      return data;
    }
    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version) {
        version = bestVersion;
      } else if (version < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      const dataBits = createData(version, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version >= 7) {
        setupVersionInfo(modules, version);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create2(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version;
      let mask2;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask2 = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version, errorCorrectionLevel, mask2);
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/utils.js"(exports) {
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
          return [c, c];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i = 0; i < symbolSize; i++) {
        for (let j = 0; j < symbolSize; j++) {
          let posDst = (i * symbolSize + j) * 4;
          let pxColor = opts.color.light;
          if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e2) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type2 = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type2, rendererOpts.quality);
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x, y) {
      let str = cmd + x;
      if (typeof y !== "undefined") str += " " + y;
      return str;
    }
    function qrToPath(data, size, margin) {
      let path = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
          lineLength++;
          if (!(i > 0 && col > 0 && data[i - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/browser.js
var require_browser2 = __commonJS({
  "node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/browser.js"(exports) {
    var canPromise = require_can_promise();
    var QRCode2 = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode2.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e2) {
            reject(e2);
          }
        });
      }
      try {
        const data = QRCode2.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e2) {
        cb(e2);
      }
    }
    exports.create = QRCode2.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// node_modules/.pnpm/base-x@4.0.1/node_modules/base-x/src/index.js
var require_src2 = __commonJS({
  "node_modules/.pnpm/base-x@4.0.1/node_modules/base-x/src/index.js"(exports, module) {
    "use strict";
    function base(ALPHABET) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255;
      }
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
      }
      var BASE = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE);
      function encode3(source) {
        if (source instanceof Uint8Array) {
        } else if (ArrayBuffer.isView(source)) {
          source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
          source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
          throw new TypeError("Expected Uint8Array");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i2 = 0;
          for (var it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE >>> 0;
            carry = carry / BASE >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          pbegin++;
        }
        var it2 = size - length;
        while (it2 !== size && b58[it2] === 0) {
          it2++;
        }
        var str = LEADER.repeat(zeroes);
        for (; it2 < size; ++it2) {
          str += ALPHABET.charAt(b58[it2]);
        }
        return str;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return new Uint8Array();
        }
        var psz = 0;
        var zeroes = 0;
        var length = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while (source[psz]) {
          var charCode = source.charCodeAt(psz);
          if (charCode > 255) {
            return;
          }
          var carry = BASE_MAP[charCode];
          if (carry === 255) {
            return;
          }
          var i2 = 0;
          for (var it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
            carry += BASE * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          psz++;
        }
        var it4 = size - length;
        while (it4 !== size && b256[it4] === 0) {
          it4++;
        }
        var vch = new Uint8Array(zeroes + (size - it4));
        var j2 = zeroes;
        while (it4 !== size) {
          vch[j2++] = b256[it4++];
        }
        return vch;
      }
      function decode2(string2) {
        var buffer = decodeUnsafe(string2);
        if (buffer) {
          return buffer;
        }
        throw new Error("Non-base" + BASE + " character");
      }
      return {
        encode: encode3,
        decodeUnsafe,
        decode: decode2
      };
    }
    module.exports = base;
  }
});

// node_modules/.pnpm/bs58@5.0.0/node_modules/bs58/index.js
var require_bs582 = __commonJS({
  "node_modules/.pnpm/bs58@5.0.0/node_modules/bs58/index.js"(exports, module) {
    var basex = require_src2();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module.exports = basex(ALPHABET);
  }
});

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/providers/SolanaExternalWalletContext.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react9 = __toESM(require_react(), 1);

// node_modules/.pnpm/@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js
var import_buffer2 = __toESM(require_buffer());

// node_modules/.pnpm/@noble+curves@1.9.7/node_modules/@noble/curves/esm/abstract/edwards.js
var _0n = BigInt(0);
var _1n = BigInt(1);
var _2n = BigInt(2);
var _8n = BigInt(8);
function isEdValidXY(Fp2, CURVE, x, y) {
  const x2 = Fp2.sqr(x);
  const y2 = Fp2.sqr(y);
  const left = Fp2.add(Fp2.mul(CURVE.a, x2), y2);
  const right = Fp2.add(Fp2.ONE, Fp2.mul(CURVE.d, Fp2.mul(x2, y2)));
  return Fp2.eql(left, right);
}
function edwards(params, extraOpts = {}) {
  const validated = _createCurveFields("edwards", params, extraOpts, extraOpts.FpFnLE);
  const { Fp: Fp2, Fn: Fn2 } = validated;
  let CURVE = validated.CURVE;
  const { h: cofactor } = CURVE;
  _validateObject(extraOpts, {}, { uvRatio: "function" });
  const MASK = _2n << BigInt(Fn2.BYTES * 8) - _1n;
  const modP = (n) => Fp2.create(n);
  const uvRatio2 = extraOpts.uvRatio || ((u, v) => {
    try {
      return { isValid: true, value: Fp2.sqrt(Fp2.div(u, v)) };
    } catch (e2) {
      return { isValid: false, value: _0n };
    }
  });
  if (!isEdValidXY(Fp2, CURVE, CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  function acoord(title, n, banZero = false) {
    const min = banZero ? _1n : _0n;
    aInRange("coordinate " + title, n, min, MASK);
    return n;
  }
  function aextpoint(other) {
    if (!(other instanceof Point))
      throw new Error("ExtendedPoint expected");
  }
  const toAffineMemo = memoized((p, iz) => {
    const { X, Y, Z } = p;
    const is0 = p.is0();
    if (iz == null)
      iz = is0 ? _8n : Fp2.inv(Z);
    const x = modP(X * iz);
    const y = modP(Y * iz);
    const zz = Fp2.mul(Z, iz);
    if (is0)
      return { x: _0n, y: _1n };
    if (zz !== _1n)
      throw new Error("invZ was invalid");
    return { x, y };
  });
  const assertValidMemo = memoized((p) => {
    const { a, d } = CURVE;
    if (p.is0())
      throw new Error("bad point: ZERO");
    const { X, Y, Z, T } = p;
    const X2 = modP(X * X);
    const Y2 = modP(Y * Y);
    const Z2 = modP(Z * Z);
    const Z4 = modP(Z2 * Z2);
    const aX2 = modP(X2 * a);
    const left = modP(Z2 * modP(aX2 + Y2));
    const right = modP(Z4 + modP(d * modP(X2 * Y2)));
    if (left !== right)
      throw new Error("bad point: equation left != right (1)");
    const XY = modP(X * Y);
    const ZT = modP(Z * T);
    if (XY !== ZT)
      throw new Error("bad point: equation left != right (2)");
    return true;
  });
  class Point {
    constructor(X, Y, Z, T) {
      this.X = acoord("x", X);
      this.Y = acoord("y", Y);
      this.Z = acoord("z", Z, true);
      this.T = acoord("t", T);
      Object.freeze(this);
    }
    static CURVE() {
      return CURVE;
    }
    static fromAffine(p) {
      if (p instanceof Point)
        throw new Error("extended point not allowed");
      const { x, y } = p || {};
      acoord("x", x);
      acoord("y", y);
      return new Point(x, y, _1n, modP(x * y));
    }
    // Uses algo from RFC8032 5.1.3.
    static fromBytes(bytes, zip215 = false) {
      const len = Fp2.BYTES;
      const { a, d } = CURVE;
      bytes = copyBytes(_abytes2(bytes, len, "point"));
      _abool2(zip215, "zip215");
      const normed = copyBytes(bytes);
      const lastByte = bytes[len - 1];
      normed[len - 1] = lastByte & ~128;
      const y = bytesToNumberLE(normed);
      const max = zip215 ? MASK : Fp2.ORDER;
      aInRange("point.y", y, _0n, max);
      const y2 = modP(y * y);
      const u = modP(y2 - _1n);
      const v = modP(d * y2 - a);
      let { isValid, value: x } = uvRatio2(u, v);
      if (!isValid)
        throw new Error("bad point: invalid y coordinate");
      const isXOdd = (x & _1n) === _1n;
      const isLastByteOdd = (lastByte & 128) !== 0;
      if (!zip215 && x === _0n && isLastByteOdd)
        throw new Error("bad point: x=0 and x_0=1");
      if (isLastByteOdd !== isXOdd)
        x = modP(-x);
      return Point.fromAffine({ x, y });
    }
    static fromHex(bytes, zip215 = false) {
      return Point.fromBytes(ensureBytes("point", bytes), zip215);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(windowSize = 8, isLazy = true) {
      wnaf.createCache(this, windowSize);
      if (!isLazy)
        this.multiply(_2n);
      return this;
    }
    // Useful in fromAffine() - not for fromBytes(), which always created valid points.
    assertValidity() {
      assertValidMemo(this);
    }
    // Compare one point to another.
    equals(other) {
      aextpoint(other);
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const { X: X2, Y: Y2, Z: Z2 } = other;
      const X1Z2 = modP(X1 * Z2);
      const X2Z1 = modP(X2 * Z1);
      const Y1Z2 = modP(Y1 * Z2);
      const Y2Z1 = modP(Y2 * Z1);
      return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
    }
    is0() {
      return this.equals(Point.ZERO);
    }
    negate() {
      return new Point(modP(-this.X), this.Y, this.Z, modP(-this.T));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a } = CURVE;
      const { X: X1, Y: Y1, Z: Z1 } = this;
      const A = modP(X1 * X1);
      const B = modP(Y1 * Y1);
      const C = modP(_2n * modP(Z1 * Z1));
      const D = modP(a * A);
      const x1y1 = X1 + Y1;
      const E = modP(modP(x1y1 * x1y1) - A - B);
      const G = D + B;
      const F = G - C;
      const H = D - B;
      const X3 = modP(E * F);
      const Y3 = modP(G * H);
      const T3 = modP(E * H);
      const Z3 = modP(F * G);
      return new Point(X3, Y3, Z3, T3);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(other) {
      aextpoint(other);
      const { a, d } = CURVE;
      const { X: X1, Y: Y1, Z: Z1, T: T1 } = this;
      const { X: X2, Y: Y2, Z: Z2, T: T2 } = other;
      const A = modP(X1 * X2);
      const B = modP(Y1 * Y2);
      const C = modP(T1 * d * T2);
      const D = modP(Z1 * Z2);
      const E = modP((X1 + Y1) * (X2 + Y2) - A - B);
      const F = D - C;
      const G = D + C;
      const H = modP(B - a * A);
      const X3 = modP(E * F);
      const Y3 = modP(G * H);
      const T3 = modP(E * H);
      const Z3 = modP(F * G);
      return new Point(X3, Y3, Z3, T3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    // Constant-time multiplication.
    multiply(scalar) {
      if (!Fn2.isValidNot0(scalar))
        throw new Error("invalid scalar: expected 1 <= sc < curve.n");
      const { p, f } = wnaf.cached(this, scalar, (p2) => normalizeZ(Point, p2));
      return normalizeZ(Point, [p, f])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    // Accepts optional accumulator to merge with multiply (important for sparse scalars)
    multiplyUnsafe(scalar, acc = Point.ZERO) {
      if (!Fn2.isValid(scalar))
        throw new Error("invalid scalar: expected 0 <= sc < curve.n");
      if (scalar === _0n)
        return Point.ZERO;
      if (this.is0() || scalar === _1n)
        return this;
      return wnaf.unsafe(this, scalar, (p) => normalizeZ(Point, p), acc);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(cofactor).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return wnaf.unsafe(this, CURVE.n).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(invertedZ) {
      return toAffineMemo(this, invertedZ);
    }
    clearCofactor() {
      if (cofactor === _1n)
        return this;
      return this.multiplyUnsafe(cofactor);
    }
    toBytes() {
      const { x, y } = this.toAffine();
      const bytes = Fp2.toBytes(y);
      bytes[bytes.length - 1] |= x & _1n ? 128 : 0;
      return bytes;
    }
    toHex() {
      return bytesToHex(this.toBytes());
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    // TODO: remove
    get ex() {
      return this.X;
    }
    get ey() {
      return this.Y;
    }
    get ez() {
      return this.Z;
    }
    get et() {
      return this.T;
    }
    static normalizeZ(points) {
      return normalizeZ(Point, points);
    }
    static msm(points, scalars) {
      return pippenger(Point, Fn2, points, scalars);
    }
    _setWindowSize(windowSize) {
      this.precompute(windowSize);
    }
    toRawBytes() {
      return this.toBytes();
    }
  }
  Point.BASE = new Point(CURVE.Gx, CURVE.Gy, _1n, modP(CURVE.Gx * CURVE.Gy));
  Point.ZERO = new Point(_0n, _1n, _1n, _0n);
  Point.Fp = Fp2;
  Point.Fn = Fn2;
  const wnaf = new wNAF(Point, Fn2.BITS);
  Point.BASE.precompute(8);
  return Point;
}
var PrimeEdwardsPoint = class {
  constructor(ep) {
    this.ep = ep;
  }
  // Static methods that must be implemented by subclasses
  static fromBytes(_bytes) {
    notImplemented();
  }
  static fromHex(_hex) {
    notImplemented();
  }
  get x() {
    return this.toAffine().x;
  }
  get y() {
    return this.toAffine().y;
  }
  // Common implementations
  clearCofactor() {
    return this;
  }
  assertValidity() {
    this.ep.assertValidity();
  }
  toAffine(invertedZ) {
    return this.ep.toAffine(invertedZ);
  }
  toHex() {
    return bytesToHex(this.toBytes());
  }
  toString() {
    return this.toHex();
  }
  isTorsionFree() {
    return true;
  }
  isSmallOrder() {
    return false;
  }
  add(other) {
    this.assertSame(other);
    return this.init(this.ep.add(other.ep));
  }
  subtract(other) {
    this.assertSame(other);
    return this.init(this.ep.subtract(other.ep));
  }
  multiply(scalar) {
    return this.init(this.ep.multiply(scalar));
  }
  multiplyUnsafe(scalar) {
    return this.init(this.ep.multiplyUnsafe(scalar));
  }
  double() {
    return this.init(this.ep.double());
  }
  negate() {
    return this.init(this.ep.negate());
  }
  precompute(windowSize, isLazy) {
    return this.init(this.ep.precompute(windowSize, isLazy));
  }
  /** @deprecated use `toBytes` */
  toRawBytes() {
    return this.toBytes();
  }
};
function eddsa(Point, cHash, eddsaOpts = {}) {
  if (typeof cHash !== "function")
    throw new Error('"hash" function param is required');
  _validateObject(eddsaOpts, {}, {
    adjustScalarBytes: "function",
    randomBytes: "function",
    domain: "function",
    prehash: "function",
    mapToCurve: "function"
  });
  const { prehash } = eddsaOpts;
  const { BASE, Fp: Fp2, Fn: Fn2 } = Point;
  const randomBytes2 = eddsaOpts.randomBytes || randomBytes;
  const adjustScalarBytes2 = eddsaOpts.adjustScalarBytes || ((bytes) => bytes);
  const domain = eddsaOpts.domain || ((data, ctx, phflag) => {
    _abool2(phflag, "phflag");
    if (ctx.length || phflag)
      throw new Error("Contexts/pre-hash are not supported");
    return data;
  });
  function modN_LE(hash) {
    return Fn2.create(bytesToNumberLE(hash));
  }
  function getPrivateScalar(key) {
    const len = lengths.secretKey;
    key = ensureBytes("private key", key, len);
    const hashed = ensureBytes("hashed private key", cHash(key), 2 * len);
    const head = adjustScalarBytes2(hashed.slice(0, len));
    const prefix = hashed.slice(len, 2 * len);
    const scalar = modN_LE(head);
    return { head, prefix, scalar };
  }
  function getExtendedPublicKey(secretKey) {
    const { head, prefix, scalar } = getPrivateScalar(secretKey);
    const point = BASE.multiply(scalar);
    const pointBytes = point.toBytes();
    return { head, prefix, scalar, point, pointBytes };
  }
  function getPublicKey2(secretKey) {
    return getExtendedPublicKey(secretKey).pointBytes;
  }
  function hashDomainToScalar(context = Uint8Array.of(), ...msgs) {
    const msg = concatBytes(...msgs);
    return modN_LE(cHash(domain(msg, ensureBytes("context", context), !!prehash)));
  }
  function sign2(msg, secretKey, options = {}) {
    msg = ensureBytes("message", msg);
    if (prehash)
      msg = prehash(msg);
    const { prefix, scalar, pointBytes } = getExtendedPublicKey(secretKey);
    const r = hashDomainToScalar(options.context, prefix, msg);
    const R = BASE.multiply(r).toBytes();
    const k = hashDomainToScalar(options.context, R, pointBytes, msg);
    const s = Fn2.create(r + k * scalar);
    if (!Fn2.isValid(s))
      throw new Error("sign failed: invalid s");
    const rs = concatBytes(R, Fn2.toBytes(s));
    return _abytes2(rs, lengths.signature, "result");
  }
  const verifyOpts = { zip215: true };
  function verify2(sig, msg, publicKey2, options = verifyOpts) {
    const { context, zip215 } = options;
    const len = lengths.signature;
    sig = ensureBytes("signature", sig, len);
    msg = ensureBytes("message", msg);
    publicKey2 = ensureBytes("publicKey", publicKey2, lengths.publicKey);
    if (zip215 !== void 0)
      _abool2(zip215, "zip215");
    if (prehash)
      msg = prehash(msg);
    const mid = len / 2;
    const r = sig.subarray(0, mid);
    const s = bytesToNumberLE(sig.subarray(mid, len));
    let A, R, SB;
    try {
      A = Point.fromBytes(publicKey2, zip215);
      R = Point.fromBytes(r, zip215);
      SB = BASE.multiplyUnsafe(s);
    } catch (error) {
      return false;
    }
    if (!zip215 && A.isSmallOrder())
      return false;
    const k = hashDomainToScalar(context, R.toBytes(), A.toBytes(), msg);
    const RkA = R.add(A.multiplyUnsafe(k));
    return RkA.subtract(SB).clearCofactor().is0();
  }
  const _size = Fp2.BYTES;
  const lengths = {
    secretKey: _size,
    publicKey: _size,
    signature: 2 * _size,
    seed: _size
  };
  function randomSecretKey(seed = randomBytes2(lengths.seed)) {
    return _abytes2(seed, lengths.seed, "seed");
  }
  function keygen(seed) {
    const secretKey = utils.randomSecretKey(seed);
    return { secretKey, publicKey: getPublicKey2(secretKey) };
  }
  function isValidSecretKey(key) {
    return isBytes(key) && key.length === Fn2.BYTES;
  }
  function isValidPublicKey(key, zip215) {
    try {
      return !!Point.fromBytes(key, zip215);
    } catch (error) {
      return false;
    }
  }
  const utils = {
    getExtendedPublicKey,
    randomSecretKey,
    isValidSecretKey,
    isValidPublicKey,
    /**
     * Converts ed public key to x public key. Uses formula:
     * - ed25519:
     *   - `(u, v) = ((1+y)/(1-y), sqrt(-486664)*u/x)`
     *   - `(x, y) = (sqrt(-486664)*u/v, (u-1)/(u+1))`
     * - ed448:
     *   - `(u, v) = ((y-1)/(y+1), sqrt(156324)*u/x)`
     *   - `(x, y) = (sqrt(156324)*u/v, (1+u)/(1-u))`
     */
    toMontgomery(publicKey2) {
      const { y } = Point.fromBytes(publicKey2);
      const size = lengths.publicKey;
      const is25519 = size === 32;
      if (!is25519 && size !== 57)
        throw new Error("only defined for 25519 and 448");
      const u = is25519 ? Fp2.div(_1n + y, _1n - y) : Fp2.div(y - _1n, y + _1n);
      return Fp2.toBytes(u);
    },
    toMontgomerySecret(secretKey) {
      const size = lengths.secretKey;
      _abytes2(secretKey, size);
      const hashed = cHash(secretKey.subarray(0, size));
      return adjustScalarBytes2(hashed).subarray(0, size);
    },
    /** @deprecated */
    randomPrivateKey: randomSecretKey,
    /** @deprecated */
    precompute(windowSize = 8, point = Point.BASE) {
      return point.precompute(windowSize, false);
    }
  };
  return Object.freeze({
    keygen,
    getPublicKey: getPublicKey2,
    sign: sign2,
    verify: verify2,
    utils,
    Point,
    lengths
  });
}
function _eddsa_legacy_opts_to_new(c) {
  const CURVE = {
    a: c.a,
    d: c.d,
    p: c.Fp.ORDER,
    n: c.n,
    h: c.h,
    Gx: c.Gx,
    Gy: c.Gy
  };
  const Fp2 = c.Fp;
  const Fn2 = Field(CURVE.n, c.nBitLength, true);
  const curveOpts = { Fp: Fp2, Fn: Fn2, uvRatio: c.uvRatio };
  const eddsaOpts = {
    randomBytes: c.randomBytes,
    adjustScalarBytes: c.adjustScalarBytes,
    domain: c.domain,
    prehash: c.prehash,
    mapToCurve: c.mapToCurve
  };
  return { CURVE, curveOpts, hash: c.hash, eddsaOpts };
}
function _eddsa_new_output_to_legacy(c, eddsa2) {
  const Point = eddsa2.Point;
  const legacy = Object.assign({}, eddsa2, {
    ExtendedPoint: Point,
    CURVE: c,
    nBitLength: Point.Fn.BITS,
    nByteLength: Point.Fn.BYTES
  });
  return legacy;
}
function twistedEdwards(c) {
  const { CURVE, curveOpts, hash, eddsaOpts } = _eddsa_legacy_opts_to_new(c);
  const Point = edwards(CURVE, curveOpts);
  const EDDSA = eddsa(Point, hash, eddsaOpts);
  return _eddsa_new_output_to_legacy(c, EDDSA);
}

// node_modules/.pnpm/@noble+curves@1.9.7/node_modules/@noble/curves/esm/abstract/montgomery.js
var _0n2 = BigInt(0);
var _1n2 = BigInt(1);
var _2n2 = BigInt(2);
function validateOpts(curve) {
  _validateObject(curve, {
    adjustScalarBytes: "function",
    powPminus2: "function"
  });
  return Object.freeze({ ...curve });
}
function montgomery(curveDef) {
  const CURVE = validateOpts(curveDef);
  const { P, type: type2, adjustScalarBytes: adjustScalarBytes2, powPminus2, randomBytes: rand } = CURVE;
  const is25519 = type2 === "x25519";
  if (!is25519 && type2 !== "x448")
    throw new Error("invalid type");
  const randomBytes_ = rand || randomBytes;
  const montgomeryBits = is25519 ? 255 : 448;
  const fieldLen = is25519 ? 32 : 56;
  const Gu = is25519 ? BigInt(9) : BigInt(5);
  const a24 = is25519 ? BigInt(121665) : BigInt(39081);
  const minScalar = is25519 ? _2n2 ** BigInt(254) : _2n2 ** BigInt(447);
  const maxAdded = is25519 ? BigInt(8) * _2n2 ** BigInt(251) - _1n2 : BigInt(4) * _2n2 ** BigInt(445) - _1n2;
  const maxScalar = minScalar + maxAdded + _1n2;
  const modP = (n) => mod(n, P);
  const GuBytes = encodeU(Gu);
  function encodeU(u) {
    return numberToBytesLE(modP(u), fieldLen);
  }
  function decodeU(u) {
    const _u = ensureBytes("u coordinate", u, fieldLen);
    if (is25519)
      _u[31] &= 127;
    return modP(bytesToNumberLE(_u));
  }
  function decodeScalar(scalar) {
    return bytesToNumberLE(adjustScalarBytes2(ensureBytes("scalar", scalar, fieldLen)));
  }
  function scalarMult(scalar, u) {
    const pu = montgomeryLadder(decodeU(u), decodeScalar(scalar));
    if (pu === _0n2)
      throw new Error("invalid private or public key received");
    return encodeU(pu);
  }
  function scalarMultBase(scalar) {
    return scalarMult(scalar, GuBytes);
  }
  function cswap(swap, x_2, x_3) {
    const dummy = modP(swap * (x_2 - x_3));
    x_2 = modP(x_2 - dummy);
    x_3 = modP(x_3 + dummy);
    return { x_2, x_3 };
  }
  function montgomeryLadder(u, scalar) {
    aInRange("u", u, _0n2, P);
    aInRange("scalar", scalar, minScalar, maxScalar);
    const k = scalar;
    const x_1 = u;
    let x_2 = _1n2;
    let z_2 = _0n2;
    let x_3 = u;
    let z_3 = _1n2;
    let swap = _0n2;
    for (let t = BigInt(montgomeryBits - 1); t >= _0n2; t--) {
      const k_t = k >> t & _1n2;
      swap ^= k_t;
      ({ x_2, x_3 } = cswap(swap, x_2, x_3));
      ({ x_2: z_2, x_3: z_3 } = cswap(swap, z_2, z_3));
      swap = k_t;
      const A = x_2 + z_2;
      const AA = modP(A * A);
      const B = x_2 - z_2;
      const BB = modP(B * B);
      const E = AA - BB;
      const C = x_3 + z_3;
      const D = x_3 - z_3;
      const DA = modP(D * A);
      const CB = modP(C * B);
      const dacb = DA + CB;
      const da_cb = DA - CB;
      x_3 = modP(dacb * dacb);
      z_3 = modP(x_1 * modP(da_cb * da_cb));
      x_2 = modP(AA * BB);
      z_2 = modP(E * (AA + modP(a24 * E)));
    }
    ({ x_2, x_3 } = cswap(swap, x_2, x_3));
    ({ x_2: z_2, x_3: z_3 } = cswap(swap, z_2, z_3));
    const z2 = powPminus2(z_2);
    return modP(x_2 * z2);
  }
  const lengths = {
    secretKey: fieldLen,
    publicKey: fieldLen,
    seed: fieldLen
  };
  const randomSecretKey = (seed = randomBytes_(fieldLen)) => {
    abytes(seed, lengths.seed);
    return seed;
  };
  function keygen(seed) {
    const secretKey = randomSecretKey(seed);
    return { secretKey, publicKey: scalarMultBase(secretKey) };
  }
  const utils = {
    randomSecretKey,
    randomPrivateKey: randomSecretKey
  };
  return {
    keygen,
    getSharedSecret: (secretKey, publicKey2) => scalarMult(secretKey, publicKey2),
    getPublicKey: (secretKey) => scalarMultBase(secretKey),
    scalarMult,
    scalarMultBase,
    utils,
    GuBytes: GuBytes.slice(),
    lengths
  };
}

// node_modules/.pnpm/@noble+curves@1.9.7/node_modules/@noble/curves/esm/ed25519.js
var _0n3 = BigInt(0);
var _1n3 = BigInt(1);
var _2n3 = BigInt(2);
var _3n = BigInt(3);
var _5n = BigInt(5);
var _8n2 = BigInt(8);
var ed25519_CURVE_p = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed");
var ed25519_CURVE = (() => ({
  p: ed25519_CURVE_p,
  n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
  h: _8n2,
  a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
  d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
  Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
  Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
}))();
function ed25519_pow_2_252_3(x) {
  const _10n = BigInt(10), _20n = BigInt(20), _40n = BigInt(40), _80n = BigInt(80);
  const P = ed25519_CURVE_p;
  const x2 = x * x % P;
  const b2 = x2 * x % P;
  const b4 = pow2(b2, _2n3, P) * b2 % P;
  const b5 = pow2(b4, _1n3, P) * x % P;
  const b10 = pow2(b5, _5n, P) * b5 % P;
  const b20 = pow2(b10, _10n, P) * b10 % P;
  const b40 = pow2(b20, _20n, P) * b20 % P;
  const b80 = pow2(b40, _40n, P) * b40 % P;
  const b160 = pow2(b80, _80n, P) * b80 % P;
  const b240 = pow2(b160, _80n, P) * b80 % P;
  const b250 = pow2(b240, _10n, P) * b10 % P;
  const pow_p_5_8 = pow2(b250, _2n3, P) * x % P;
  return { pow_p_5_8, b2 };
}
function adjustScalarBytes(bytes) {
  bytes[0] &= 248;
  bytes[31] &= 127;
  bytes[31] |= 64;
  return bytes;
}
var ED25519_SQRT_M1 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
function uvRatio(u, v) {
  const P = ed25519_CURVE_p;
  const v3 = mod(v * v * v, P);
  const v7 = mod(v3 * v3 * v, P);
  const pow = ed25519_pow_2_252_3(u * v7).pow_p_5_8;
  let x = mod(u * v3 * pow, P);
  const vx2 = mod(v * x * x, P);
  const root1 = x;
  const root2 = mod(x * ED25519_SQRT_M1, P);
  const useRoot1 = vx2 === u;
  const useRoot2 = vx2 === mod(-u, P);
  const noRoot = vx2 === mod(-u * ED25519_SQRT_M1, P);
  if (useRoot1)
    x = root1;
  if (useRoot2 || noRoot)
    x = root2;
  if (isNegativeLE(x, P))
    x = mod(-x, P);
  return { isValid: useRoot1 || useRoot2, value: x };
}
var Fp = (() => Field(ed25519_CURVE.p, { isLE: true }))();
var Fn = (() => Field(ed25519_CURVE.n, { isLE: true }))();
var ed25519Defaults = (() => ({
  ...ed25519_CURVE,
  Fp,
  hash: sha512,
  adjustScalarBytes,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio
}))();
var ed25519 = (() => twistedEdwards(ed25519Defaults))();
function ed25519_domain(data, ctx, phflag) {
  if (ctx.length > 255)
    throw new Error("Context is too big");
  return concatBytes(utf8ToBytes("SigEd25519 no Ed25519 collisions"), new Uint8Array([phflag ? 1 : 0, ctx.length]), ctx, data);
}
var ed25519ctx = (() => twistedEdwards({
  ...ed25519Defaults,
  domain: ed25519_domain
}))();
var ed25519ph = (() => twistedEdwards(Object.assign({}, ed25519Defaults, {
  domain: ed25519_domain,
  prehash: sha512
})))();
var x25519 = (() => {
  const P = Fp.ORDER;
  return montgomery({
    P,
    type: "x25519",
    powPminus2: (x) => {
      const { pow_p_5_8, b2 } = ed25519_pow_2_252_3(x);
      return mod(pow2(pow_p_5_8, _3n, P) * b2, P);
    },
    adjustScalarBytes
  });
})();
var ELL2_C1 = (() => (ed25519_CURVE_p + _3n) / _8n2)();
var ELL2_C2 = (() => Fp.pow(_2n3, ELL2_C1))();
var ELL2_C3 = (() => Fp.sqrt(Fp.neg(Fp.ONE)))();
function map_to_curve_elligator2_curve25519(u) {
  const ELL2_C4 = (ed25519_CURVE_p - _5n) / _8n2;
  const ELL2_J = BigInt(486662);
  let tv1 = Fp.sqr(u);
  tv1 = Fp.mul(tv1, _2n3);
  let xd = Fp.add(tv1, Fp.ONE);
  let x1n = Fp.neg(ELL2_J);
  let tv2 = Fp.sqr(xd);
  let gxd = Fp.mul(tv2, xd);
  let gx1 = Fp.mul(tv1, ELL2_J);
  gx1 = Fp.mul(gx1, x1n);
  gx1 = Fp.add(gx1, tv2);
  gx1 = Fp.mul(gx1, x1n);
  let tv3 = Fp.sqr(gxd);
  tv2 = Fp.sqr(tv3);
  tv3 = Fp.mul(tv3, gxd);
  tv3 = Fp.mul(tv3, gx1);
  tv2 = Fp.mul(tv2, tv3);
  let y11 = Fp.pow(tv2, ELL2_C4);
  y11 = Fp.mul(y11, tv3);
  let y12 = Fp.mul(y11, ELL2_C3);
  tv2 = Fp.sqr(y11);
  tv2 = Fp.mul(tv2, gxd);
  let e1 = Fp.eql(tv2, gx1);
  let y1 = Fp.cmov(y12, y11, e1);
  let x2n = Fp.mul(x1n, tv1);
  let y21 = Fp.mul(y11, u);
  y21 = Fp.mul(y21, ELL2_C2);
  let y22 = Fp.mul(y21, ELL2_C3);
  let gx2 = Fp.mul(gx1, tv1);
  tv2 = Fp.sqr(y21);
  tv2 = Fp.mul(tv2, gxd);
  let e2 = Fp.eql(tv2, gx2);
  let y2 = Fp.cmov(y22, y21, e2);
  tv2 = Fp.sqr(y1);
  tv2 = Fp.mul(tv2, gxd);
  let e3 = Fp.eql(tv2, gx1);
  let xn = Fp.cmov(x2n, x1n, e3);
  let y = Fp.cmov(y2, y1, e3);
  let e4 = Fp.isOdd(y);
  y = Fp.cmov(y, Fp.neg(y), e3 !== e4);
  return { xMn: xn, xMd: xd, yMn: y, yMd: _1n3 };
}
var ELL2_C1_EDWARDS = (() => FpSqrtEven(Fp, Fp.neg(BigInt(486664))))();
function map_to_curve_elligator2_edwards25519(u) {
  const { xMn, xMd, yMn, yMd } = map_to_curve_elligator2_curve25519(u);
  let xn = Fp.mul(xMn, yMd);
  xn = Fp.mul(xn, ELL2_C1_EDWARDS);
  let xd = Fp.mul(xMd, yMn);
  let yn = Fp.sub(xMn, xMd);
  let yd = Fp.add(xMn, xMd);
  let tv1 = Fp.mul(xd, yd);
  let e2 = Fp.eql(tv1, Fp.ZERO);
  xn = Fp.cmov(xn, Fp.ZERO, e2);
  xd = Fp.cmov(xd, Fp.ONE, e2);
  yn = Fp.cmov(yn, Fp.ONE, e2);
  yd = Fp.cmov(yd, Fp.ONE, e2);
  const [xd_inv, yd_inv] = FpInvertBatch(Fp, [xd, yd], true);
  return { x: Fp.mul(xn, xd_inv), y: Fp.mul(yn, yd_inv) };
}
var ed25519_hasher = (() => createHasher(ed25519.Point, (scalars) => map_to_curve_elligator2_edwards25519(scalars[0]), {
  DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
  encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
  p: ed25519_CURVE_p,
  m: 1,
  k: 128,
  expand: "xmd",
  hash: sha512
}))();
var SQRT_M1 = ED25519_SQRT_M1;
var SQRT_AD_MINUS_ONE = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
var INVSQRT_A_MINUS_D = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
var ONE_MINUS_D_SQ = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
var D_MINUS_ONE_SQ = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
var invertSqrt = (number2) => uvRatio(_1n3, number2);
var MAX_255B = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
var bytes255ToNumberLE = (bytes) => ed25519.Point.Fp.create(bytesToNumberLE(bytes) & MAX_255B);
function calcElligatorRistrettoMap(r0) {
  const { d } = ed25519_CURVE;
  const P = ed25519_CURVE_p;
  const mod2 = (n) => Fp.create(n);
  const r = mod2(SQRT_M1 * r0 * r0);
  const Ns = mod2((r + _1n3) * ONE_MINUS_D_SQ);
  let c = BigInt(-1);
  const D = mod2((c - d * r) * mod2(r + d));
  let { isValid: Ns_D_is_sq, value: s } = uvRatio(Ns, D);
  let s_ = mod2(s * r0);
  if (!isNegativeLE(s_, P))
    s_ = mod2(-s_);
  if (!Ns_D_is_sq)
    s = s_;
  if (!Ns_D_is_sq)
    c = r;
  const Nt = mod2(c * (r - _1n3) * D_MINUS_ONE_SQ - D);
  const s2 = s * s;
  const W0 = mod2((s + s) * D);
  const W1 = mod2(Nt * SQRT_AD_MINUS_ONE);
  const W2 = mod2(_1n3 - s2);
  const W3 = mod2(_1n3 + s2);
  return new ed25519.Point(mod2(W0 * W3), mod2(W2 * W1), mod2(W1 * W3), mod2(W0 * W2));
}
function ristretto255_map(bytes) {
  abytes(bytes, 64);
  const r1 = bytes255ToNumberLE(bytes.subarray(0, 32));
  const R1 = calcElligatorRistrettoMap(r1);
  const r2 = bytes255ToNumberLE(bytes.subarray(32, 64));
  const R2 = calcElligatorRistrettoMap(r2);
  return new _RistrettoPoint(R1.add(R2));
}
var _RistrettoPoint = class __RistrettoPoint extends PrimeEdwardsPoint {
  constructor(ep) {
    super(ep);
  }
  static fromAffine(ap) {
    return new __RistrettoPoint(ed25519.Point.fromAffine(ap));
  }
  assertSame(other) {
    if (!(other instanceof __RistrettoPoint))
      throw new Error("RistrettoPoint expected");
  }
  init(ep) {
    return new __RistrettoPoint(ep);
  }
  /** @deprecated use `import { ristretto255_hasher } from '@noble/curves/ed25519.js';` */
  static hashToCurve(hex) {
    return ristretto255_map(ensureBytes("ristrettoHash", hex, 64));
  }
  static fromBytes(bytes) {
    abytes(bytes, 32);
    const { a, d } = ed25519_CURVE;
    const P = ed25519_CURVE_p;
    const mod2 = (n) => Fp.create(n);
    const s = bytes255ToNumberLE(bytes);
    if (!equalBytes(Fp.toBytes(s), bytes) || isNegativeLE(s, P))
      throw new Error("invalid ristretto255 encoding 1");
    const s2 = mod2(s * s);
    const u1 = mod2(_1n3 + a * s2);
    const u2 = mod2(_1n3 - a * s2);
    const u1_2 = mod2(u1 * u1);
    const u2_2 = mod2(u2 * u2);
    const v = mod2(a * d * u1_2 - u2_2);
    const { isValid, value: I } = invertSqrt(mod2(v * u2_2));
    const Dx = mod2(I * u2);
    const Dy = mod2(I * Dx * v);
    let x = mod2((s + s) * Dx);
    if (isNegativeLE(x, P))
      x = mod2(-x);
    const y = mod2(u1 * Dy);
    const t = mod2(x * y);
    if (!isValid || isNegativeLE(t, P) || y === _0n3)
      throw new Error("invalid ristretto255 encoding 2");
    return new __RistrettoPoint(new ed25519.Point(x, y, _1n3, t));
  }
  /**
   * Converts ristretto-encoded string to ristretto point.
   * Described in [RFC9496](https://www.rfc-editor.org/rfc/rfc9496#name-decode).
   * @param hex Ristretto-encoded 32 bytes. Not every 32-byte string is valid ristretto encoding
   */
  static fromHex(hex) {
    return __RistrettoPoint.fromBytes(ensureBytes("ristrettoHex", hex, 32));
  }
  static msm(points, scalars) {
    return pippenger(__RistrettoPoint, ed25519.Point.Fn, points, scalars);
  }
  /**
   * Encodes ristretto point to Uint8Array.
   * Described in [RFC9496](https://www.rfc-editor.org/rfc/rfc9496#name-encode).
   */
  toBytes() {
    let { X, Y, Z, T } = this.ep;
    const P = ed25519_CURVE_p;
    const mod2 = (n) => Fp.create(n);
    const u1 = mod2(mod2(Z + Y) * mod2(Z - Y));
    const u2 = mod2(X * Y);
    const u2sq = mod2(u2 * u2);
    const { value: invsqrt } = invertSqrt(mod2(u1 * u2sq));
    const D1 = mod2(invsqrt * u1);
    const D2 = mod2(invsqrt * u2);
    const zInv = mod2(D1 * D2 * T);
    let D;
    if (isNegativeLE(T * zInv, P)) {
      let _x = mod2(Y * SQRT_M1);
      let _y = mod2(X * SQRT_M1);
      X = _x;
      Y = _y;
      D = mod2(D1 * INVSQRT_A_MINUS_D);
    } else {
      D = D2;
    }
    if (isNegativeLE(X * zInv, P))
      Y = mod2(-Y);
    let s = mod2((Z - Y) * D);
    if (isNegativeLE(s, P))
      s = mod2(-s);
    return Fp.toBytes(s);
  }
  /**
   * Compares two Ristretto points.
   * Described in [RFC9496](https://www.rfc-editor.org/rfc/rfc9496#name-equals).
   */
  equals(other) {
    this.assertSame(other);
    const { X: X1, Y: Y1 } = this.ep;
    const { X: X2, Y: Y2 } = other.ep;
    const mod2 = (n) => Fp.create(n);
    const one = mod2(X1 * Y2) === mod2(Y1 * X2);
    const two = mod2(Y1 * Y2) === mod2(X1 * X2);
    return one || two;
  }
  is0() {
    return this.equals(__RistrettoPoint.ZERO);
  }
};
_RistrettoPoint.BASE = (() => new _RistrettoPoint(ed25519.Point.BASE))();
_RistrettoPoint.ZERO = (() => new _RistrettoPoint(ed25519.Point.ZERO))();
_RistrettoPoint.Fp = /* @__PURE__ */ (() => Fp)();
_RistrettoPoint.Fn = /* @__PURE__ */ (() => Fn)();
var ristretto255_hasher = {
  hashToCurve(msg, options) {
    const DST = options?.DST || "ristretto255_XMD:SHA-512_R255MAP_RO_";
    const xmd = expand_message_xmd(msg, DST, 64, sha512);
    return ristretto255_map(xmd);
  },
  hashToScalar(msg, options = { DST: _DST_scalar }) {
    const xmd = expand_message_xmd(msg, options.DST, 64, sha512);
    return Fn.create(bytesToNumberLE(xmd));
  }
};
var hashToCurve = (() => ed25519_hasher.hashToCurve)();
var encodeToCurve = (() => ed25519_hasher.encodeToCurve)();
var hashToRistretto255 = (() => ristretto255_hasher.hashToCurve)();
var hash_to_ristretto255 = (() => ristretto255_hasher.hashToCurve)();

// node_modules/.pnpm/@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js
var import_bn = __toESM(require_bn());
var import_bs58 = __toESM(require_bs58());
var import_borsh = __toESM(require_lib());
var BufferLayout = __toESM(require_Layout());
var import_buffer_layout = __toESM(require_Layout());

// node_modules/.pnpm/@solana+errors@2.3.0_typescript@5.9.3/node_modules/@solana/errors/dist/index.browser.mjs
var SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED = 1;
var SOLANA_ERROR__INVALID_NONCE = 2;
var SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND = 3;
var SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE = 4;
var SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH = 5;
var SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE = 6;
var SOLANA_ERROR__MALFORMED_BIGINT_STRING = 7;
var SOLANA_ERROR__MALFORMED_NUMBER_STRING = 8;
var SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE = 9;
var SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR = 10;
var SOLANA_ERROR__JSON_RPC__PARSE_ERROR = -32700;
var SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR = -32603;
var SOLANA_ERROR__JSON_RPC__INVALID_PARAMS = -32602;
var SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND = -32601;
var SOLANA_ERROR__JSON_RPC__INVALID_REQUEST = -32600;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED = -32016;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION = -32015;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET = -32014;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH = -32013;
var SOLANA_ERROR__JSON_RPC__SCAN_ERROR = -32012;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE = -32011;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX = -32010;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED = -32009;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT = -32008;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED = -32007;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE = -32006;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY = -32005;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE = -32004;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE = -32003;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE = -32002;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP = -32001;
var SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH = 28e5;
var SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE = 2800001;
var SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS = 2800002;
var SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY = 2800003;
var SOLANA_ERROR__ADDRESSES__MALFORMED_PDA = 2800004;
var SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE = 2800005;
var SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED = 2800006;
var SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED = 2800007;
var SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE = 2800008;
var SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED = 2800009;
var SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER = 2800010;
var SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS = 2800011;
var SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND = 323e4;
var SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND = 32300001;
var SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT = 3230002;
var SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT = 3230003;
var SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED = 3230004;
var SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT = 361e4;
var SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED = 3610001;
var SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED = 3610002;
var SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED = 3610003;
var SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED = 3610004;
var SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED = 3610005;
var SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED = 3610006;
var SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY = 3610007;
var SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED = 3611e3;
var SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH = 3704e3;
var SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH = 3704001;
var SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH = 3704002;
var SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE = 3704003;
var SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY = 3704004;
var SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS = 4128e3;
var SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA = 4128001;
var SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH = 4128002;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN = 4615e3;
var SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR = 4615001;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT = 4615002;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA = 4615003;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA = 4615004;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL = 4615005;
var SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS = 4615006;
var SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID = 4615007;
var SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE = 4615008;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED = 4615009;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT = 4615010;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION = 4615011;
var SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID = 4615012;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND = 4615013;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED = 4615014;
var SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE = 4615015;
var SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED = 4615016;
var SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX = 4615017;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED = 4615018;
var SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED = 4615019;
var SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS = 4615020;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED = 4615021;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE = 4615022;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED = 4615023;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = 4615024;
var SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC = 4615025;
var SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM = 4615026;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR = 4615027;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED = 4615028;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE = 4615029;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT = 4615030;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID = 4615031;
var SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH = 4615032;
var SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT = 4615033;
var SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED = 4615034;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED = 4615035;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS = 4615036;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC = 4615037;
var SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED = 4615038;
var SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION = 4615039;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE = 4615040;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE = 4615041;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE = 4615042;
var SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE = 4615043;
var SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY = 4615044;
var SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR = 4615045;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT = 4615046;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER = 4615047;
var SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW = 4615048;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR = 4615049;
var SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER = 4615050;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED = 4615051;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED = 4615052;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED = 4615053;
var SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS = 4615054;
var SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS = 5508e3;
var SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER = 5508001;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER = 5508002;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER = 5508003;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER = 5508004;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER = 5508005;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER = 5508006;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER = 5508007;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER = 5508008;
var SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS = 5508009;
var SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING = 5508010;
var SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED = 5508011;
var SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES = 5663e3;
var SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE = 5663001;
var SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME = 5663002;
var SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME = 5663003;
var SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE = 5663004;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING = 5663005;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE = 5663006;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND = 5663007;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING = 5663008;
var SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING = 5663009;
var SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING = 5663010;
var SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING = 5663011;
var SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING = 5663012;
var SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING = 5663013;
var SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE = 5663014;
var SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION = 5663015;
var SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES = 5663016;
var SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH = 5663017;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT = 5663018;
var SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT = 5663019;
var SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT = 5663020;
var SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN = 705e4;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE = 7050001;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE = 7050002;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND = 7050003;
var SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND = 7050004;
var SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE = 7050005;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE = 7050006;
var SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED = 7050007;
var SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND = 7050008;
var SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP = 7050009;
var SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE = 7050010;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX = 7050011;
var SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE = 7050012;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION = 7050013;
var SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE = 7050014;
var SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE = 7050015;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = 7050016;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT = 7050017;
var SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION = 7050018;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT = 7050019;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT = 7050020;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT = 7050021;
var SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS = 7050022;
var SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND = 7050023;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER = 7050024;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA = 7050025;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX = 7050026;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT = 7050027;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT = 7050028;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT = 7050029;
var SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION = 7050030;
var SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT = 7050031;
var SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED = 7050032;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT = 7050033;
var SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED = 7050034;
var SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED = 7050035;
var SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION = 7050036;
var SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY = 8078e3;
var SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH = 8078001;
var SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH = 8078002;
var SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH = 8078003;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH = 8078004;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH = 8078005;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH = 8078006;
var SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS = 8078007;
var SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE = 8078008;
var SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT = 8078009;
var SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT = 8078010;
var SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE = 8078011;
var SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE = 8078012;
var SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH = 8078013;
var SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE = 8078014;
var SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT = 8078015;
var SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE = 8078016;
var SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE = 8078017;
var SOLANA_ERROR__CODECS__INVALID_CONSTANT = 8078018;
var SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE = 8078019;
var SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL = 8078020;
var SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES = 8078021;
var SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS = 8078022;
var SOLANA_ERROR__RPC__INTEGER_OVERFLOW = 81e5;
var SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN = 8100001;
var SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR = 8100002;
var SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD = 8100003;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN = 819e4;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID = 8190001;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED = 8190002;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED = 8190003;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT = 8190004;
var SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING = 99e5;
var SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE = 9900001;
var SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING = 9900002;
var SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE = 9900003;
var SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED = 9900004;
var SolanaErrorMessages = {
  [SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND]: "Account not found at address: $address",
  [SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED]: "Not all accounts were decoded. Encoded accounts found at addresses: $addresses.",
  [SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT]: "Expected decoded account at address: $address",
  [SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT]: "Failed to decode account data at address: $address",
  [SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND]: "Accounts not found at addresses: $addresses",
  [SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED]: "Unable to find a viable program address bump seed.",
  [SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS]: "$putativeAddress is not a base58-encoded address.",
  [SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH]: "Expected base58 encoded address to decode to a byte array of length 32. Actual length: $actualLength.",
  [SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY]: "The `CryptoKey` must be an `Ed25519` public key.",
  [SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS]: "$putativeOffCurveAddress is not a base58-encoded off-curve address.",
  [SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE]: "Invalid seeds; point must fall off the Ed25519 curve.",
  [SOLANA_ERROR__ADDRESSES__MALFORMED_PDA]: "Expected given program derived address to have the following format: [Address, ProgramDerivedAddressBump].",
  [SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED]: "A maximum of $maxSeeds seeds, including the bump seed, may be supplied when creating an address. Received: $actual.",
  [SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED]: "The seed at index $index with length $actual exceeds the maximum length of $maxSeedLength bytes.",
  [SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE]: "Expected program derived address bump to be in the range [0, 255], got: $bump.",
  [SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER]: "Program address cannot end with PDA marker.",
  [SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded address string of length in the range [32, 44]. Actual length: $actualLength.",
  [SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded blockash string of length in the range [32, 44]. Actual length: $actualLength.",
  [SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED]: "The network has progressed past the last block for which this transaction could have been committed.",
  [SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY]: "Codec [$codecDescription] cannot decode empty byte arrays.",
  [SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS]: "Enum codec cannot use lexical values [$stringValues] as discriminators. Either remove all lexical values or set `useValuesAsDiscriminators` to `false`.",
  [SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL]: "Sentinel [$hexSentinel] must not be present in encoded bytes [$hexEncodedBytes].",
  [SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH]: "Encoder and decoder must have the same fixed size, got [$encoderFixedSize] and [$decoderFixedSize].",
  [SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH]: "Encoder and decoder must have the same max size, got [$encoderMaxSize] and [$decoderMaxSize].",
  [SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH]: "Encoder and decoder must either both be fixed-size or variable-size.",
  [SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE]: "Enum discriminator out of range. Expected a number in [$formattedValidDiscriminators], got $discriminator.",
  [SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH]: "Expected a fixed-size codec, got a variable-size one.",
  [SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH]: "Codec [$codecDescription] expected a positive byte length, got $bytesLength.",
  [SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH]: "Expected a variable-size codec, got a fixed-size one.",
  [SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE]: "Codec [$codecDescription] expected zero-value [$hexZeroValue] to have the same size as the provided fixed-size item [$expectedSize bytes].",
  [SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH]: "Codec [$codecDescription] expected $expected bytes, got $bytesLength.",
  [SOLANA_ERROR__CODECS__INVALID_CONSTANT]: "Expected byte array constant [$hexConstant] to be present in data [$hexData] at offset [$offset].",
  [SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT]: "Invalid discriminated union variant. Expected one of [$variants], got $value.",
  [SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT]: "Invalid enum variant. Expected one of [$stringValues] or a number in [$formattedNumericalValues], got $variant.",
  [SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT]: "Invalid literal union variant. Expected one of [$variants], got $value.",
  [SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS]: "Expected [$codecDescription] to have $expected items, got $actual.",
  [SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE]: "Invalid value $value for base $base with alphabet $alphabet.",
  [SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE]: "Literal union discriminator out of range. Expected a number between $minRange and $maxRange, got $discriminator.",
  [SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE]: "Codec [$codecDescription] expected number to be in the range [$min, $max], got $value.",
  [SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE]: "Codec [$codecDescription] expected offset to be in the range [0, $bytesLength], got $offset.",
  [SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES]: "Expected sentinel [$hexSentinel] to be present in decoded bytes [$hexDecodedBytes].",
  [SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE]: "Union variant out of range. Expected an index between $minRange and $maxRange, got $variant.",
  [SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED]: "No random values implementation could be found.",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED]: "instruction requires an uninitialized account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED]: "instruction tries to borrow reference for an account which is already borrowed",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING]: "instruction left account with an outstanding borrowed reference",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED]: "program other than the account's owner changed the size of the account data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL]: "account data too small for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE]: "instruction expected an executable account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT]: "An account does not have enough lamports to be rent-exempt",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW]: "Program arithmetic overflowed",
  [SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR]: "Failed to serialize or deserialize account data: $encodedData",
  [SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS]: "Builtin programs must consume compute units",
  [SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH]: "Cross-program invocation call depth too deep",
  [SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED]: "Computational budget exceeded",
  [SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM]: "custom program error: #$code",
  [SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX]: "instruction contains duplicate accounts",
  [SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC]: "instruction modifications of multiply-passed account differ",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT]: "executable accounts must be rent exempt",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED]: "instruction changed executable accounts data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE]: "instruction changed the balance of an executable account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED]: "instruction changed executable bit of an account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED]: "instruction modified data of an account it does not own",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND]: "instruction spent from the balance of an account it does not own",
  [SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR]: "generic instruction error",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER]: "Provided owner is not allowed",
  [SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE]: "Account is immutable",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY]: "Incorrect authority provided",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID]: "incorrect program id for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS]: "insufficient funds for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA]: "invalid account data for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER]: "Invalid account owner",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT]: "invalid program argument",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR]: "program returned invalid error code",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA]: "invalid instruction data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC]: "Failed to reallocate account data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS]: "Provided seeds do not result in a valid address",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED]: "Accounts data allocations exceeded the maximum allowed per transaction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED]: "Max accounts exceeded",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED]: "Max instruction trace length exceeded",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED]: "Length of the seed is too long for address generation",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT]: "An account required by the instruction is missing",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE]: "missing required signature for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID]: "instruction illegally modified the program id of an account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS]: "insufficient account keys for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION]: "Cross-program invocation with unauthorized signer or writable account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE]: "Failed to create program execution environment",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE]: "Program failed to compile",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE]: "Program failed to complete",
  [SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED]: "instruction modified data of a read-only account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE]: "instruction changed the balance of a read-only account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED]: "Cross-program invocation reentrancy not allowed for this instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED]: "instruction modified rent epoch of an account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION]: "sum of account balances before and after instruction do not match",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT]: "instruction requires an initialized account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN]: "",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID]: "Unsupported program id",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR]: "Unsupported sysvar",
  [SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS]: "The instruction does not have any accounts.",
  [SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA]: "The instruction does not have any data.",
  [SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH]: "Expected instruction to have progress address $expectedProgramAddress, got $actualProgramAddress.",
  [SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH]: "Expected base58 encoded blockhash to decode to a byte array of length 32. Actual length: $actualLength.",
  [SOLANA_ERROR__INVALID_NONCE]: "The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`",
  [SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING]: "Invariant violation: Found no abortable iterable cache entry for key `$cacheKey`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED]: "Invariant violation: This data publisher does not publish to the channel named `$channelName`. Supported channels include $supportedChannelNames.",
  [SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE]: "Invariant violation: WebSocket message iterator state is corrupt; iterated without first resolving existing message promise. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING]: "Invariant violation: WebSocket message iterator is missing state storage. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE]: "Invariant violation: Switch statement non-exhaustive. Received unexpected value `$unexpectedValue`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR]: "JSON-RPC error: Internal JSON-RPC error ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__INVALID_PARAMS]: "JSON-RPC error: Invalid method parameter(s) ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__INVALID_REQUEST]: "JSON-RPC error: The JSON sent is not a valid `Request` object ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND]: "JSON-RPC error: The method does not exist / is not available ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__PARSE_ERROR]: "JSON-RPC error: An error occurred on the server while parsing the JSON text ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__SCAN_ERROR]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED]: "Minimum context slot has not been reached",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY]: "Node is unhealthy; behind by $numSlotsBehind slots",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT]: "No snapshot",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE]: "Transaction simulation failed",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE]: "Transaction history is not available from this node",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH]: "Transaction signature length mismatch",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE]: "Transaction signature verification failure",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION]: "$__serverMessage",
  [SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH]: "Key pair bytes must be of length 64, got $byteLength.",
  [SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH]: "Expected private key bytes with length 32. Actual length: $actualLength.",
  [SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH]: "Expected base58-encoded signature to decode to a byte array of length 64. Actual length: $actualLength.",
  [SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY]: "The provided private key does not match the provided public key.",
  [SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded signature string of length in the range [64, 88]. Actual length: $actualLength.",
  [SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE]: "Lamports value must be in the range [0, 2e64-1]",
  [SOLANA_ERROR__MALFORMED_BIGINT_STRING]: "`$value` cannot be parsed as a `BigInt`",
  [SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR]: "$message",
  [SOLANA_ERROR__MALFORMED_NUMBER_STRING]: "`$value` cannot be parsed as a `Number`",
  [SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND]: "No nonce account could be found at address `$nonceAccountAddress`",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN]: "The notification name must end in 'Notifications' and the API must supply a subscription plan creator function for the notification '$notificationName'.",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED]: "WebSocket was closed before payload could be added to the send buffer",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED]: "WebSocket connection closed",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT]: "WebSocket failed to connect",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID]: "Failed to obtain a subscription id from the server",
  [SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD]: "Could not find an API plan for RPC method: `$method`",
  [SOLANA_ERROR__RPC__INTEGER_OVERFLOW]: "The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was `$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds `Number.MAX_SAFE_INTEGER`.",
  [SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR]: "HTTP error ($statusCode): $message",
  [SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN]: "HTTP header(s) forbidden: $headers. Learn more at https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.",
  [SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS]: "Multiple distinct signers were identified for address `$address`. Please ensure that you are using the same signer instance for each address.",
  [SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER]: "The provided value does not implement the `KeyPairSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER]: "The provided value does not implement the `MessageModifyingSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER]: "The provided value does not implement the `MessagePartialSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER]: "The provided value does not implement any of the `MessageSigner` interfaces",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER]: "The provided value does not implement the `TransactionModifyingSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER]: "The provided value does not implement the `TransactionPartialSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER]: "The provided value does not implement the `TransactionSendingSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER]: "The provided value does not implement any of the `TransactionSigner` interfaces",
  [SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS]: "More than one `TransactionSendingSigner` was identified.",
  [SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING]: "No `TransactionSendingSigner` was identified. Please provide a valid `TransactionWithSingleSendingSigner` transaction.",
  [SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED]: "Wallet account signers do not support signing multiple messages/transactions in a single operation",
  [SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY]: "Cannot export a non-extractable key.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED]: "No digest implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT]: "Cryptographic operations are only allowed in secure browser contexts. Read more here: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED]: "This runtime does not support the generation of Ed25519 key pairs.\n\nInstall @solana/webcrypto-ed25519-polyfill and call its `install` function before generating keys in environments that do not support Ed25519.\n\nFor a list of runtimes that currently support Ed25519 operations, visit https://github.com/WICG/webcrypto-secure-curves/issues/20.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED]: "No signature verification implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED]: "No key generation implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED]: "No signing implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED]: "No key export implementation could be found.",
  [SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE]: "Timestamp value must be in the range [-(2n ** 63n), (2n ** 63n) - 1]. `$value` given",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING]: "Transaction processing left an account with an outstanding borrowed reference",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE]: "Account in use",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE]: "Account loaded twice",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND]: "Attempt to debit an account but found no record of a prior credit.",
  [SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND]: "Transaction loads an address table account that doesn't exist",
  [SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED]: "This transaction has already been processed",
  [SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND]: "Blockhash not found",
  [SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP]: "Loader call chain is too deep",
  [SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE]: "Transactions are currently disabled due to cluster maintenance",
  [SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION]: "Transaction contains a duplicate instruction ($index) that is not allowed",
  [SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE]: "Insufficient funds for fee",
  [SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT]: "Transaction results in an account ($accountIndex) with insufficient funds for rent",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE]: "This account may not be used to pay transaction fees",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX]: "Transaction contains an invalid account reference",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA]: "Transaction loads an address table account with invalid data",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX]: "Transaction address table lookup uses an invalid index",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER]: "Transaction loads an address table account with an invalid owner",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT]: "LoadedAccountsDataSizeLimit set for transaction must be greater than 0.",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION]: "This program may not be used for executing instructions",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT]: "Transaction leaves an account with a lower balance than rent-exempt minimum",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT]: "Transaction loads a writable account that cannot be written",
  [SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED]: "Transaction exceeded max loaded accounts data size cap",
  [SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE]: "Transaction requires a fee but has no signature present",
  [SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND]: "Attempt to load a program that does not exist",
  [SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED]: "Execution of the program referenced by account at index $accountIndex is temporarily restricted.",
  [SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED]: "ResanitizationNeeded",
  [SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE]: "Transaction failed to sanitize accounts offsets correctly",
  [SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE]: "Transaction did not pass signature verification",
  [SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS]: "Transaction locked too many accounts",
  [SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION]: "Sum of account balances before and after transaction do not match",
  [SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN]: "The transaction failed with the error `$errorName`",
  [SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION]: "Transaction version is unsupported",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT]: "Transaction would exceed account data limit within the block",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT]: "Transaction would exceed total account data limit",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT]: "Transaction would exceed max account limit within the block",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT]: "Transaction would exceed max Block Cost Limit",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT]: "Transaction would exceed max Vote Cost Limit",
  [SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION]: "Attempted to sign a transaction with an address that is not a signer for it",
  [SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING]: "Transaction is missing an address at index: $index.",
  [SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES]: "Transaction has no expected signers therefore it cannot be encoded",
  [SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT]: "Transaction size $transactionSize exceeds limit of $transactionSizeLimit bytes",
  [SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME]: "Transaction does not have a blockhash lifetime",
  [SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME]: "Transaction is not a durable nonce transaction",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING]: "Contents of these address lookup tables unknown: $lookupTableAddresses",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE]: "Lookup of address at index $highestRequestedIndex failed for lookup table `$lookupTableAddress`. Highest known index is $highestKnownIndex. The lookup table may have been extended since its contents were retrieved",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING]: "No fee payer set in CompiledTransaction",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND]: "Could not find program address at index $index",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT]: "Failed to estimate the compute unit consumption for this transaction message. This is likely because simulating the transaction failed. Inspect the `cause` property of this error to learn more",
  [SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT]: "Transaction failed when it was simulated in order to estimate the compute unit consumption. The compute unit estimate provided is for a transaction that failed when simulated and may not be representative of the compute units this transaction would consume if successful. Inspect the `cause` property of this error to learn more",
  [SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING]: "Transaction is missing a fee payer.",
  [SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING]: "Could not determine this transaction's signature. Make sure that the transaction has been signed by its fee payer.",
  [SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE]: "Transaction first instruction is not advance nonce account instruction.",
  [SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING]: "Transaction with no instructions cannot be durable nonce transaction.",
  [SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES]: "This transaction includes an address (`$programAddress`) which is both invoked and set as the fee payer. Program addresses may not pay fees",
  [SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE]: "This transaction includes an address (`$programAddress`) which is both invoked and marked writable. Program addresses may not be writable",
  [SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH]: "The transaction message expected the transaction to have $signerAddressesLength signatures, got $signaturesLength.",
  [SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING]: "Transaction is missing signatures for addresses: $addresses.",
  [SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE]: "Transaction version must be in the range [0, 127]. `$actualVersion` given"
};
var START_INDEX = "i";
var TYPE = "t";
function getHumanReadableErrorMessage(code, context = {}) {
  const messageFormatString = SolanaErrorMessages[code];
  if (messageFormatString.length === 0) {
    return "";
  }
  let state;
  function commitStateUpTo(endIndex) {
    if (state[TYPE] === 2) {
      const variableName = messageFormatString.slice(state[START_INDEX] + 1, endIndex);
      fragments.push(
        variableName in context ? (
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `${context[variableName]}`
        ) : `$${variableName}`
      );
    } else if (state[TYPE] === 1) {
      fragments.push(messageFormatString.slice(state[START_INDEX], endIndex));
    }
  }
  const fragments = [];
  messageFormatString.split("").forEach((char, ii) => {
    if (ii === 0) {
      state = {
        [START_INDEX]: 0,
        [TYPE]: messageFormatString[0] === "\\" ? 0 : messageFormatString[0] === "$" ? 2 : 1
        /* Text */
      };
      return;
    }
    let nextState;
    switch (state[TYPE]) {
      case 0:
        nextState = {
          [START_INDEX]: ii,
          [TYPE]: 1
          /* Text */
        };
        break;
      case 1:
        if (char === "\\") {
          nextState = {
            [START_INDEX]: ii,
            [TYPE]: 0
            /* EscapeSequence */
          };
        } else if (char === "$") {
          nextState = {
            [START_INDEX]: ii,
            [TYPE]: 2
            /* Variable */
          };
        }
        break;
      case 2:
        if (char === "\\") {
          nextState = {
            [START_INDEX]: ii,
            [TYPE]: 0
            /* EscapeSequence */
          };
        } else if (char === "$") {
          nextState = {
            [START_INDEX]: ii,
            [TYPE]: 2
            /* Variable */
          };
        } else if (!char.match(/\w/)) {
          nextState = {
            [START_INDEX]: ii,
            [TYPE]: 1
            /* Text */
          };
        }
        break;
    }
    if (nextState) {
      if (state !== nextState) {
        commitStateUpTo(ii);
      }
      state = nextState;
    }
  });
  commitStateUpTo();
  return fragments.join("");
}
function getErrorMessage(code, context = {}) {
  if (true) {
    return getHumanReadableErrorMessage(code, context);
  } else {
    let decodingAdviceMessage = `Solana error #${code}; Decode this error by running \`npx @solana/errors decode -- ${code}`;
    if (Object.keys(context).length) {
      decodingAdviceMessage += ` '${encodeContextObject(context)}'`;
    }
    return `${decodingAdviceMessage}\``;
  }
}
var SolanaError = class extends Error {
  /**
   * Indicates the root cause of this {@link SolanaError}, if any.
   *
   * For example, a transaction error might have an instruction error as its root cause. In this
   * case, you will be able to access the instruction error on the transaction error as `cause`.
   */
  cause = this.cause;
  /**
   * Contains context that can assist in understanding or recovering from a {@link SolanaError}.
   */
  context;
  constructor(...[code, contextAndErrorOptions]) {
    let context;
    let errorOptions;
    if (contextAndErrorOptions) {
      const { cause, ...contextRest } = contextAndErrorOptions;
      if (cause) {
        errorOptions = { cause };
      }
      if (Object.keys(contextRest).length > 0) {
        context = contextRest;
      }
    }
    const message = getErrorMessage(code, context);
    super(message, errorOptions);
    this.context = {
      __code: code,
      ...context
    };
    this.name = "SolanaError";
  }
};

// node_modules/.pnpm/@solana+codecs-core@2.3.0_typescript@5.9.3/node_modules/@solana/codecs-core/dist/index.browser.mjs
function getEncodedSize(value, encoder) {
  return "fixedSize" in encoder ? encoder.fixedSize : encoder.getSizeFromValue(value);
}
function createEncoder(encoder) {
  return Object.freeze({
    ...encoder,
    encode: (value) => {
      const bytes = new Uint8Array(getEncodedSize(value, encoder));
      encoder.write(value, bytes, 0);
      return bytes;
    }
  });
}
function createDecoder(decoder) {
  return Object.freeze({
    ...decoder,
    decode: (bytes, offset2 = 0) => decoder.read(bytes, offset2)[0]
  });
}
function isFixedSize(codec) {
  return "fixedSize" in codec && typeof codec.fixedSize === "number";
}
function combineCodec(encoder, decoder) {
  if (isFixedSize(encoder) !== isFixedSize(decoder)) {
    throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH);
  }
  if (isFixedSize(encoder) && isFixedSize(decoder) && encoder.fixedSize !== decoder.fixedSize) {
    throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH, {
      decoderFixedSize: decoder.fixedSize,
      encoderFixedSize: encoder.fixedSize
    });
  }
  if (!isFixedSize(encoder) && !isFixedSize(decoder) && encoder.maxSize !== decoder.maxSize) {
    throw new SolanaError(SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH, {
      decoderMaxSize: decoder.maxSize,
      encoderMaxSize: encoder.maxSize
    });
  }
  return {
    ...decoder,
    ...encoder,
    decode: decoder.decode,
    encode: encoder.encode,
    read: decoder.read,
    write: encoder.write
  };
}
function assertByteArrayIsNotEmptyForCodec(codecDescription, bytes, offset2 = 0) {
  if (bytes.length - offset2 <= 0) {
    throw new SolanaError(SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY, {
      codecDescription
    });
  }
}
function assertByteArrayHasEnoughBytesForCodec(codecDescription, expected, bytes, offset2 = 0) {
  const bytesLength = bytes.length - offset2;
  if (bytesLength < expected) {
    throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH, {
      bytesLength,
      codecDescription,
      expected
    });
  }
}

// node_modules/.pnpm/@solana+codecs-numbers@2.3.0_typescript@5.9.3/node_modules/@solana/codecs-numbers/dist/index.browser.mjs
function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
  if (value < min || value > max) {
    throw new SolanaError(SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE, {
      codecDescription,
      max,
      min,
      value
    });
  }
}
var Endian = ((Endian2) => {
  Endian2[Endian2["Little"] = 0] = "Little";
  Endian2[Endian2["Big"] = 1] = "Big";
  return Endian2;
})(Endian || {});
function isLittleEndian(config) {
  return config?.endian === 1 ? false : true;
}
function numberEncoderFactory(input) {
  return createEncoder({
    fixedSize: input.size,
    write(value, bytes, offset2) {
      if (input.range) {
        assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
      }
      const arrayBuffer = new ArrayBuffer(input.size);
      input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
      bytes.set(new Uint8Array(arrayBuffer), offset2);
      return offset2 + input.size;
    }
  });
}
function numberDecoderFactory(input) {
  return createDecoder({
    fixedSize: input.size,
    read(bytes, offset2 = 0) {
      assertByteArrayIsNotEmptyForCodec(input.name, bytes, offset2);
      assertByteArrayHasEnoughBytesForCodec(input.name, input.size, bytes, offset2);
      const view = new DataView(toArrayBuffer(bytes, offset2, input.size));
      return [input.get(view, isLittleEndian(input.config)), offset2 + input.size];
    }
  });
}
function toArrayBuffer(bytes, offset2, length) {
  const bytesOffset = bytes.byteOffset + (offset2 ?? 0);
  const bytesLength = length ?? bytes.byteLength;
  return bytes.buffer.slice(bytesOffset, bytesOffset + bytesLength);
}
var getU64Encoder = (config = {}) => numberEncoderFactory({
  config,
  name: "u64",
  range: [0n, BigInt("0xffffffffffffffff")],
  set: (view, value, le) => view.setBigUint64(0, BigInt(value), le),
  size: 8
});
var getU64Decoder = (config = {}) => numberDecoderFactory({
  config,
  get: (view, le) => view.getBigUint64(0, le),
  name: "u64",
  size: 8
});
var getU64Codec = (config = {}) => combineCodec(getU64Encoder(config), getU64Decoder(config));

// node_modules/.pnpm/superstruct@2.0.2/node_modules/superstruct/dist/index.mjs
var StructError = class extends TypeError {
  constructor(failure, failures) {
    let cached;
    const { message, explanation, ...rest } = failure;
    const { path } = failure;
    const msg = path.length === 0 ? message : `At path: ${path.join(".")} -- ${message}`;
    super(explanation ?? msg);
    if (explanation != null)
      this.cause = msg;
    Object.assign(this, rest);
    this.name = this.constructor.name;
    this.failures = () => {
      return cached ?? (cached = [failure, ...failures()]);
    };
  }
};
function isIterable(x) {
  return isObject(x) && typeof x[Symbol.iterator] === "function";
}
function isObject(x) {
  return typeof x === "object" && x != null;
}
function isNonArrayObject(x) {
  return isObject(x) && !Array.isArray(x);
}
function print(value) {
  if (typeof value === "symbol") {
    return value.toString();
  }
  return typeof value === "string" ? JSON.stringify(value) : `${value}`;
}
function shiftIterator(input) {
  const { done, value } = input.next();
  return done ? void 0 : value;
}
function toFailure(result, context, struct2, value) {
  if (result === true) {
    return;
  } else if (result === false) {
    result = {};
  } else if (typeof result === "string") {
    result = { message: result };
  }
  const { path, branch } = context;
  const { type: type2 } = struct2;
  const { refinement, message = `Expected a value of type \`${type2}\`${refinement ? ` with refinement \`${refinement}\`` : ""}, but received: \`${print(value)}\`` } = result;
  return {
    value,
    type: type2,
    refinement,
    key: path[path.length - 1],
    path,
    branch,
    ...result,
    message
  };
}
function* toFailures(result, context, struct2, value) {
  if (!isIterable(result)) {
    result = [result];
  }
  for (const r of result) {
    const failure = toFailure(r, context, struct2, value);
    if (failure) {
      yield failure;
    }
  }
}
function* run(value, struct2, options = {}) {
  const { path = [], branch = [value], coerce: coerce2 = false, mask: mask2 = false } = options;
  const ctx = { path, branch, mask: mask2 };
  if (coerce2) {
    value = struct2.coercer(value, ctx);
  }
  let status = "valid";
  for (const failure of struct2.validator(value, ctx)) {
    failure.explanation = options.message;
    status = "not_valid";
    yield [failure, void 0];
  }
  for (let [k, v, s] of struct2.entries(value, ctx)) {
    const ts = run(v, s, {
      path: k === void 0 ? path : [...path, k],
      branch: k === void 0 ? branch : [...branch, v],
      coerce: coerce2,
      mask: mask2,
      message: options.message
    });
    for (const t of ts) {
      if (t[0]) {
        status = t[0].refinement != null ? "not_refined" : "not_valid";
        yield [t[0], void 0];
      } else if (coerce2) {
        v = t[1];
        if (k === void 0) {
          value = v;
        } else if (value instanceof Map) {
          value.set(k, v);
        } else if (value instanceof Set) {
          value.add(v);
        } else if (isObject(value)) {
          if (v !== void 0 || k in value)
            value[k] = v;
        }
      }
    }
  }
  if (status !== "not_valid") {
    for (const failure of struct2.refiner(value, ctx)) {
      failure.explanation = options.message;
      status = "not_refined";
      yield [failure, void 0];
    }
  }
  if (status === "valid") {
    yield [void 0, value];
  }
}
var Struct = class {
  constructor(props) {
    const { type: type2, schema, validator, refiner, coercer = (value) => value, entries = function* () {
    } } = props;
    this.type = type2;
    this.schema = schema;
    this.entries = entries;
    this.coercer = coercer;
    if (validator) {
      this.validator = (value, context) => {
        const result = validator(value, context);
        return toFailures(result, context, this, value);
      };
    } else {
      this.validator = () => [];
    }
    if (refiner) {
      this.refiner = (value, context) => {
        const result = refiner(value, context);
        return toFailures(result, context, this, value);
      };
    } else {
      this.refiner = () => [];
    }
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(value, message) {
    return assert(value, this, message);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(value, message) {
    return create(value, this, message);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(value) {
    return is(value, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema. Masking applies recursively to
   * props of `object` structs only.
   */
  mask(value, message) {
    return mask(value, this, message);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `coerce` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful. Also, `mask` will turn on
   * masking of the unknown `object` props recursively if passed.
   */
  validate(value, options = {}) {
    return validate(value, this, options);
  }
};
function assert(value, struct2, message) {
  const result = validate(value, struct2, { message });
  if (result[0]) {
    throw result[0];
  }
}
function create(value, struct2, message) {
  const result = validate(value, struct2, { coerce: true, message });
  if (result[0]) {
    throw result[0];
  } else {
    return result[1];
  }
}
function mask(value, struct2, message) {
  const result = validate(value, struct2, { coerce: true, mask: true, message });
  if (result[0]) {
    throw result[0];
  } else {
    return result[1];
  }
}
function is(value, struct2) {
  const result = validate(value, struct2);
  return !result[0];
}
function validate(value, struct2, options = {}) {
  const tuples = run(value, struct2, options);
  const tuple2 = shiftIterator(tuples);
  if (tuple2[0]) {
    const error = new StructError(tuple2[0], function* () {
      for (const t of tuples) {
        if (t[0]) {
          yield t[0];
        }
      }
    });
    return [error, void 0];
  } else {
    const v = tuple2[1];
    return [void 0, v];
  }
}
function define(name, validator) {
  return new Struct({ type: name, schema: null, validator });
}
function any() {
  return define("any", () => true);
}
function array(Element) {
  return new Struct({
    type: "array",
    schema: Element,
    *entries(value) {
      if (Element && Array.isArray(value)) {
        for (const [i, v] of value.entries()) {
          yield [i, v, Element];
        }
      }
    },
    coercer(value) {
      return Array.isArray(value) ? value.slice() : value;
    },
    validator(value) {
      return Array.isArray(value) || `Expected an array value, but received: ${print(value)}`;
    }
  });
}
function boolean() {
  return define("boolean", (value) => {
    return typeof value === "boolean";
  });
}
function instance(Class) {
  return define("instance", (value) => {
    return value instanceof Class || `Expected a \`${Class.name}\` instance, but received: ${print(value)}`;
  });
}
function literal(constant) {
  const description = print(constant);
  const t = typeof constant;
  return new Struct({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? constant : null,
    validator(value) {
      return value === constant || `Expected the literal \`${description}\`, but received: ${print(value)}`;
    }
  });
}
function never() {
  return define("never", () => false);
}
function nullable(struct2) {
  return new Struct({
    ...struct2,
    validator: (value, ctx) => value === null || struct2.validator(value, ctx),
    refiner: (value, ctx) => value === null || struct2.refiner(value, ctx)
  });
}
function number() {
  return define("number", (value) => {
    return typeof value === "number" && !isNaN(value) || `Expected a number, but received: ${print(value)}`;
  });
}
function optional(struct2) {
  return new Struct({
    ...struct2,
    validator: (value, ctx) => value === void 0 || struct2.validator(value, ctx),
    refiner: (value, ctx) => value === void 0 || struct2.refiner(value, ctx)
  });
}
function record(Key, Value) {
  return new Struct({
    type: "record",
    schema: null,
    *entries(value) {
      if (isObject(value)) {
        for (const k in value) {
          const v = value[k];
          yield [k, k, Key];
          yield [k, v, Value];
        }
      }
    },
    validator(value) {
      return isNonArrayObject(value) || `Expected an object, but received: ${print(value)}`;
    },
    coercer(value) {
      return isNonArrayObject(value) ? { ...value } : value;
    }
  });
}
function string() {
  return define("string", (value) => {
    return typeof value === "string" || `Expected a string, but received: ${print(value)}`;
  });
}
function tuple(Structs) {
  const Never = never();
  return new Struct({
    type: "tuple",
    schema: null,
    *entries(value) {
      if (Array.isArray(value)) {
        const length = Math.max(Structs.length, value.length);
        for (let i = 0; i < length; i++) {
          yield [i, value[i], Structs[i] || Never];
        }
      }
    },
    validator(value) {
      return Array.isArray(value) || `Expected an array, but received: ${print(value)}`;
    },
    coercer(value) {
      return Array.isArray(value) ? value.slice() : value;
    }
  });
}
function type(schema) {
  const keys = Object.keys(schema);
  return new Struct({
    type: "type",
    schema,
    *entries(value) {
      if (isObject(value)) {
        for (const k of keys) {
          yield [k, value[k], schema[k]];
        }
      }
    },
    validator(value) {
      return isNonArrayObject(value) || `Expected an object, but received: ${print(value)}`;
    },
    coercer(value) {
      return isNonArrayObject(value) ? { ...value } : value;
    }
  });
}
function union(Structs) {
  const description = Structs.map((s) => s.type).join(" | ");
  return new Struct({
    type: "union",
    schema: null,
    coercer(value, ctx) {
      for (const S of Structs) {
        const [error, coerced] = S.validate(value, {
          coerce: true,
          mask: ctx.mask
        });
        if (!error) {
          return coerced;
        }
      }
      return value;
    },
    validator(value, ctx) {
      const failures = [];
      for (const S of Structs) {
        const [...tuples] = run(value, S, ctx);
        const [first] = tuples;
        if (!first[0]) {
          return [];
        } else {
          for (const [failure] of tuples) {
            if (failure) {
              failures.push(failure);
            }
          }
        }
      }
      return [
        `Expected the value to satisfy a union of \`${description}\`, but received: ${print(value)}`,
        ...failures
      ];
    }
  });
}
function unknown() {
  return define("unknown", () => true);
}
function coerce(struct2, condition, coercer) {
  return new Struct({
    ...struct2,
    coercer: (value, ctx) => {
      return is(value, condition) ? struct2.coercer(coercer(value, ctx), ctx) : struct2.coercer(value, ctx);
    }
  });
}

// node_modules/.pnpm/@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js
var import_browser = __toESM(require_browser());

// node_modules/.pnpm/rpc-websockets@9.3.2/node_modules/rpc-websockets/dist/index.browser.mjs
var import_buffer = __toESM(require_buffer(), 1);
var WebSocketBrowserImpl = class extends import_index.default {
  socket;
  /** Instantiate a WebSocket class
  * @constructor
  * @param {String} address - url to a websocket server
  * @param {WebSocketBrowserOptions} options - websocket options
  * @return {WebSocketBrowserImpl} - returns a WebSocket instance
  */
  constructor(address, options) {
    super();
    this.socket = new window.WebSocket(address, options.protocols);
    this.socket.onopen = () => this.emit("open");
    this.socket.onmessage = (event) => this.emit("message", event.data);
    this.socket.onerror = (error) => this.emit("error", error);
    this.socket.onclose = (event) => {
      this.emit("close", event.code, event.reason);
    };
  }
  /**
  * Sends data through a websocket connection
  * @method
  * @param {(String|Object)} data - data to be sent via websocket
  * @param {Object} optionsOrCallback - ws options
  * @param {Function} callback - a callback called once the data is sent
  * @return {Undefined}
  */
  send(data, optionsOrCallback, callback) {
    const cb = callback || optionsOrCallback;
    try {
      this.socket.send(data);
      cb();
    } catch (error) {
      cb(error);
    }
  }
  /**
  * Closes an underlying socket
  * @method
  * @param {Number} code - status code explaining why the connection is being closed
  * @param {String} reason - a description why the connection is closing
  * @return {Undefined}
  * @throws {Error}
  */
  close(code, reason) {
    this.socket.close(code, reason);
  }
  addEventListener(type2, listener, options) {
    this.socket.addEventListener(type2, listener, options);
  }
};
function WebSocket2(address, options) {
  return new WebSocketBrowserImpl(address, options);
}
var DefaultDataPack = class {
  encode(value) {
    return JSON.stringify(value);
  }
  decode(value) {
    return JSON.parse(value);
  }
};
var CommonClient = class extends import_index.default {
  address;
  rpc_id;
  queue;
  options;
  autoconnect;
  ready;
  reconnect;
  reconnect_timer_id;
  reconnect_interval;
  max_reconnects;
  rest_options;
  current_reconnects;
  generate_request_id;
  socket;
  webSocketFactory;
  dataPack;
  /**
  * Instantiate a Client class.
  * @constructor
  * @param {webSocketFactory} webSocketFactory - factory method for WebSocket
  * @param {String} address - url to a websocket server
  * @param {Object} options - ws options object with reconnect parameters
  * @param {Function} generate_request_id - custom generation request Id
  * @param {DataPack} dataPack - data pack contains encoder and decoder
  * @return {CommonClient}
  */
  constructor(webSocketFactory, address = "ws://localhost:8080", {
    autoconnect = true,
    reconnect = true,
    reconnect_interval = 1e3,
    max_reconnects = 5,
    ...rest_options
  } = {}, generate_request_id, dataPack) {
    super();
    this.webSocketFactory = webSocketFactory;
    this.queue = {};
    this.rpc_id = 0;
    this.address = address;
    this.autoconnect = autoconnect;
    this.ready = false;
    this.reconnect = reconnect;
    this.reconnect_timer_id = void 0;
    this.reconnect_interval = reconnect_interval;
    this.max_reconnects = max_reconnects;
    this.rest_options = rest_options;
    this.current_reconnects = 0;
    this.generate_request_id = generate_request_id || (() => typeof this.rpc_id === "number" ? ++this.rpc_id : Number(this.rpc_id) + 1);
    if (!dataPack) this.dataPack = new DefaultDataPack();
    else this.dataPack = dataPack;
    if (this.autoconnect)
      this._connect(this.address, {
        autoconnect: this.autoconnect,
        reconnect: this.reconnect,
        reconnect_interval: this.reconnect_interval,
        max_reconnects: this.max_reconnects,
        ...this.rest_options
      });
  }
  /**
  * Connects to a defined server if not connected already.
  * @method
  * @return {Undefined}
  */
  connect() {
    if (this.socket) return;
    this._connect(this.address, {
      autoconnect: this.autoconnect,
      reconnect: this.reconnect,
      reconnect_interval: this.reconnect_interval,
      max_reconnects: this.max_reconnects,
      ...this.rest_options
    });
  }
  /**
  * Calls a registered RPC method on server.
  * @method
  * @param {String} method - RPC method name
  * @param {Object|Array} params - optional method parameters
  * @param {Number} timeout - RPC reply timeout value
  * @param {Object} ws_opts - options passed to ws
  * @return {Promise}
  */
  call(method, params, timeout, ws_opts) {
    if (!ws_opts && "object" === typeof timeout) {
      ws_opts = timeout;
      timeout = null;
    }
    return new Promise((resolve, reject) => {
      if (!this.ready) return reject(new Error("socket not ready"));
      const rpc_id = this.generate_request_id(method, params);
      const message = {
        jsonrpc: "2.0",
        method,
        params: params || void 0,
        id: rpc_id
      };
      this.socket.send(this.dataPack.encode(message), ws_opts, (error) => {
        if (error) return reject(error);
        this.queue[rpc_id] = { promise: [resolve, reject] };
        if (timeout) {
          this.queue[rpc_id].timeout = setTimeout(() => {
            delete this.queue[rpc_id];
            reject(new Error("reply timeout"));
          }, timeout);
        }
      });
    });
  }
  /**
  * Logins with the other side of the connection.
  * @method
  * @param {Object} params - Login credentials object
  * @return {Promise}
  */
  async login(params) {
    const resp = await this.call("rpc.login", params);
    if (!resp) throw new Error("authentication failed");
    return resp;
  }
  /**
  * Fetches a list of client's methods registered on server.
  * @method
  * @return {Array}
  */
  async listMethods() {
    return await this.call("__listMethods");
  }
  /**
  * Sends a JSON-RPC 2.0 notification to server.
  * @method
  * @param {String} method - RPC method name
  * @param {Object} params - optional method parameters
  * @return {Promise}
  */
  notify(method, params) {
    return new Promise((resolve, reject) => {
      if (!this.ready) return reject(new Error("socket not ready"));
      const message = {
        jsonrpc: "2.0",
        method,
        params
      };
      this.socket.send(this.dataPack.encode(message), (error) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }
  /**
  * Subscribes for a defined event.
  * @method
  * @param {String|Array} event - event name
  * @return {Undefined}
  * @throws {Error}
  */
  async subscribe(event) {
    if (typeof event === "string") event = [event];
    const result = await this.call("rpc.on", event);
    if (typeof event === "string" && result[event] !== "ok")
      throw new Error(
        "Failed subscribing to an event '" + event + "' with: " + result[event]
      );
    return result;
  }
  /**
  * Unsubscribes from a defined event.
  * @method
  * @param {String|Array} event - event name
  * @return {Undefined}
  * @throws {Error}
  */
  async unsubscribe(event) {
    if (typeof event === "string") event = [event];
    const result = await this.call("rpc.off", event);
    if (typeof event === "string" && result[event] !== "ok")
      throw new Error("Failed unsubscribing from an event with: " + result);
    return result;
  }
  /**
  * Closes a WebSocket connection gracefully.
  * @method
  * @param {Number} code - socket close code
  * @param {String} data - optional data to be sent before closing
  * @return {Undefined}
  */
  close(code, data) {
    if (this.socket) this.socket.close(code || 1e3, data);
  }
  /**
  * Enable / disable automatic reconnection.
  * @method
  * @param {Boolean} reconnect - enable / disable reconnection
  * @return {Undefined}
  */
  setAutoReconnect(reconnect) {
    this.reconnect = reconnect;
  }
  /**
  * Set the interval between reconnection attempts.
  * @method
  * @param {Number} interval - reconnection interval in milliseconds
  * @return {Undefined}
  */
  setReconnectInterval(interval) {
    this.reconnect_interval = interval;
  }
  /**
  * Set the maximum number of reconnection attempts.
  * @method
  * @param {Number} max_reconnects - maximum reconnection attempts
  * @return {Undefined}
  */
  setMaxReconnects(max_reconnects) {
    this.max_reconnects = max_reconnects;
  }
  /**
  * Get the current number of reconnection attempts made.
  * @method
  * @return {Number} current reconnection attempts
  */
  getCurrentReconnects() {
    return this.current_reconnects;
  }
  /**
  * Get the maximum number of reconnection attempts.
  * @method
  * @return {Number} maximum reconnection attempts
  */
  getMaxReconnects() {
    return this.max_reconnects;
  }
  /**
  * Check if the client is currently attempting to reconnect.
  * @method
  * @return {Boolean} true if reconnection is in progress
  */
  isReconnecting() {
    return this.reconnect_timer_id !== void 0;
  }
  /**
  * Check if the client will attempt to reconnect on the next close event.
  * @method
  * @return {Boolean} true if reconnection will be attempted
  */
  willReconnect() {
    return this.reconnect && (this.max_reconnects === 0 || this.current_reconnects < this.max_reconnects);
  }
  /**
  * Connection/Message handler.
  * @method
  * @private
  * @param {String} address - WebSocket API address
  * @param {Object} options - ws options object
  * @return {Undefined}
  */
  _connect(address, options) {
    clearTimeout(this.reconnect_timer_id);
    this.socket = this.webSocketFactory(address, options);
    this.socket.addEventListener("open", () => {
      this.ready = true;
      this.emit("open");
      this.current_reconnects = 0;
    });
    this.socket.addEventListener("message", ({ data: message }) => {
      if (message instanceof ArrayBuffer)
        message = import_buffer.Buffer.from(message).toString();
      try {
        message = this.dataPack.decode(message);
      } catch (error) {
        return;
      }
      if (message.notification && this.listeners(message.notification).length) {
        if (!Object.keys(message.params).length)
          return this.emit(message.notification);
        const args = [message.notification];
        if (message.params.constructor === Object) args.push(message.params);
        else
          for (let i = 0; i < message.params.length; i++)
            args.push(message.params[i]);
        return Promise.resolve().then(() => {
          this.emit.apply(this, args);
        });
      }
      if (!this.queue[message.id]) {
        if (message.method) {
          return Promise.resolve().then(() => {
            this.emit(message.method, message?.params);
          });
        }
        return;
      }
      if ("error" in message === "result" in message)
        this.queue[message.id].promise[1](
          new Error(
            'Server response malformed. Response must include either "result" or "error", but not both.'
          )
        );
      if (this.queue[message.id].timeout)
        clearTimeout(this.queue[message.id].timeout);
      if (message.error) this.queue[message.id].promise[1](message.error);
      else this.queue[message.id].promise[0](message.result);
      delete this.queue[message.id];
    });
    this.socket.addEventListener("error", (error) => this.emit("error", error));
    this.socket.addEventListener("close", ({ code, reason }) => {
      if (this.ready)
        setTimeout(() => this.emit("close", code, reason), 0);
      this.ready = false;
      this.socket = void 0;
      if (code === 1e3) return;
      this.current_reconnects++;
      if (this.reconnect && (this.max_reconnects > this.current_reconnects || this.max_reconnects === 0))
        this.reconnect_timer_id = setTimeout(
          () => this._connect(address, options),
          this.reconnect_interval
        );
      else if (this.reconnect && this.max_reconnects > 0 && this.current_reconnects >= this.max_reconnects) {
        setTimeout(() => this.emit("max_reconnects_reached", code, reason), 1);
      }
    });
  }
};

// node_modules/.pnpm/@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js
var generatePrivateKey = ed25519.utils.randomPrivateKey;
var generateKeypair = () => {
  const privateScalar = ed25519.utils.randomPrivateKey();
  const publicKey2 = getPublicKey(privateScalar);
  const secretKey = new Uint8Array(64);
  secretKey.set(privateScalar);
  secretKey.set(publicKey2, 32);
  return {
    publicKey: publicKey2,
    secretKey
  };
};
var getPublicKey = ed25519.getPublicKey;
function isOnCurve(publicKey2) {
  try {
    ed25519.ExtendedPoint.fromHex(publicKey2);
    return true;
  } catch {
    return false;
  }
}
var sign = (message, secretKey) => ed25519.sign(message, secretKey.slice(0, 32));
var verify = ed25519.verify;
var toBuffer = (arr) => {
  if (import_buffer2.Buffer.isBuffer(arr)) {
    return arr;
  } else if (arr instanceof Uint8Array) {
    return import_buffer2.Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
  } else {
    return import_buffer2.Buffer.from(arr);
  }
};
var Struct2 = class {
  constructor(properties) {
    Object.assign(this, properties);
  }
  encode() {
    return import_buffer2.Buffer.from((0, import_borsh.serialize)(SOLANA_SCHEMA, this));
  }
  static decode(data) {
    return (0, import_borsh.deserialize)(SOLANA_SCHEMA, this, data);
  }
  static decodeUnchecked(data) {
    return (0, import_borsh.deserializeUnchecked)(SOLANA_SCHEMA, this, data);
  }
};
var SOLANA_SCHEMA = /* @__PURE__ */ new Map();
var _PublicKey;
var MAX_SEED_LENGTH = 32;
var PUBLIC_KEY_LENGTH = 32;
function isPublicKeyData(value) {
  return value._bn !== void 0;
}
var uniquePublicKeyCounter = 1;
var PublicKey = class _PublicKey2 extends Struct2 {
  /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */
  constructor(value) {
    super({});
    this._bn = void 0;
    if (isPublicKeyData(value)) {
      this._bn = value._bn;
    } else {
      if (typeof value === "string") {
        const decoded = import_bs58.default.decode(value);
        if (decoded.length != PUBLIC_KEY_LENGTH) {
          throw new Error(`Invalid public key input`);
        }
        this._bn = new import_bn.default(decoded);
      } else {
        this._bn = new import_bn.default(value);
      }
      if (this._bn.byteLength() > PUBLIC_KEY_LENGTH) {
        throw new Error(`Invalid public key input`);
      }
    }
  }
  /**
   * Returns a unique PublicKey for tests and benchmarks using a counter
   */
  static unique() {
    const key = new _PublicKey2(uniquePublicKeyCounter);
    uniquePublicKeyCounter += 1;
    return new _PublicKey2(key.toBuffer());
  }
  /**
   * Default public key value. The base58-encoded string representation is all ones (as seen below)
   * The underlying BN number is 32 bytes that are all zeros
   */
  /**
   * Checks if two publicKeys are equal
   */
  equals(publicKey2) {
    return this._bn.eq(publicKey2._bn);
  }
  /**
   * Return the base-58 representation of the public key
   */
  toBase58() {
    return import_bs58.default.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  /**
   * Return the byte array representation of the public key in big endian
   */
  toBytes() {
    const buf = this.toBuffer();
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  /**
   * Return the Buffer representation of the public key in big endian
   */
  toBuffer() {
    const b = this._bn.toArrayLike(import_buffer2.Buffer);
    if (b.length === PUBLIC_KEY_LENGTH) {
      return b;
    }
    const zeroPad = import_buffer2.Buffer.alloc(32);
    b.copy(zeroPad, 32 - b.length);
    return zeroPad;
  }
  get [Symbol.toStringTag]() {
    return `PublicKey(${this.toString()})`;
  }
  /**
   * Return the base-58 representation of the public key
   */
  toString() {
    return this.toBase58();
  }
  /**
   * Derive a public key from another key, a seed, and a program ID.
   * The program ID will also serve as the owner of the public key, giving
   * it permission to write data to the account.
   */
  /* eslint-disable require-await */
  static async createWithSeed(fromPublicKey, seed, programId) {
    const buffer = import_buffer2.Buffer.concat([fromPublicKey.toBuffer(), import_buffer2.Buffer.from(seed), programId.toBuffer()]);
    const publicKeyBytes = sha256(buffer);
    return new _PublicKey2(publicKeyBytes);
  }
  /**
   * Derive a program address from seeds and a program ID.
   */
  /* eslint-disable require-await */
  static createProgramAddressSync(seeds, programId) {
    let buffer = import_buffer2.Buffer.alloc(0);
    seeds.forEach(function(seed) {
      if (seed.length > MAX_SEED_LENGTH) {
        throw new TypeError(`Max seed length exceeded`);
      }
      buffer = import_buffer2.Buffer.concat([buffer, toBuffer(seed)]);
    });
    buffer = import_buffer2.Buffer.concat([buffer, programId.toBuffer(), import_buffer2.Buffer.from("ProgramDerivedAddress")]);
    const publicKeyBytes = sha256(buffer);
    if (isOnCurve(publicKeyBytes)) {
      throw new Error(`Invalid seeds, address must fall off the curve`);
    }
    return new _PublicKey2(publicKeyBytes);
  }
  /**
   * Async version of createProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link createProgramAddressSync} instead
   */
  /* eslint-disable require-await */
  static async createProgramAddress(seeds, programId) {
    return this.createProgramAddressSync(seeds, programId);
  }
  /**
   * Find a valid program address
   *
   * Valid program addresses must fall off the ed25519 curve.  This function
   * iterates a nonce until it finds one that when combined with the seeds
   * results in a valid program address.
   */
  static findProgramAddressSync(seeds, programId) {
    let nonce = 255;
    let address;
    while (nonce != 0) {
      try {
        const seedsWithNonce = seeds.concat(import_buffer2.Buffer.from([nonce]));
        address = this.createProgramAddressSync(seedsWithNonce, programId);
      } catch (err) {
        if (err instanceof TypeError) {
          throw err;
        }
        nonce--;
        continue;
      }
      return [address, nonce];
    }
    throw new Error(`Unable to find a viable program address nonce`);
  }
  /**
   * Async version of findProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link findProgramAddressSync} instead
   */
  static async findProgramAddress(seeds, programId) {
    return this.findProgramAddressSync(seeds, programId);
  }
  /**
   * Check that a pubkey is on the ed25519 curve.
   */
  static isOnCurve(pubkeyData) {
    const pubkey = new _PublicKey2(pubkeyData);
    return isOnCurve(pubkey.toBytes());
  }
};
_PublicKey = PublicKey;
PublicKey.default = new _PublicKey("11111111111111111111111111111111");
SOLANA_SCHEMA.set(PublicKey, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
var BPF_LOADER_DEPRECATED_PROGRAM_ID = new PublicKey("BPFLoader1111111111111111111111111111111111");
var PACKET_DATA_SIZE = 1280 - 40 - 8;
var VERSION_PREFIX_MASK = 127;
var SIGNATURE_LENGTH_IN_BYTES = 64;
var TransactionExpiredBlockheightExceededError = class extends Error {
  constructor(signature2) {
    super(`Signature ${signature2} has expired: block height exceeded.`);
    this.signature = void 0;
    this.signature = signature2;
  }
};
Object.defineProperty(TransactionExpiredBlockheightExceededError.prototype, "name", {
  value: "TransactionExpiredBlockheightExceededError"
});
var TransactionExpiredTimeoutError = class extends Error {
  constructor(signature2, timeoutSeconds) {
    super(`Transaction was not confirmed in ${timeoutSeconds.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${signature2} using the Solana Explorer or CLI tools.`);
    this.signature = void 0;
    this.signature = signature2;
  }
};
Object.defineProperty(TransactionExpiredTimeoutError.prototype, "name", {
  value: "TransactionExpiredTimeoutError"
});
var TransactionExpiredNonceInvalidError = class extends Error {
  constructor(signature2) {
    super(`Signature ${signature2} has expired: the nonce is no longer valid.`);
    this.signature = void 0;
    this.signature = signature2;
  }
};
Object.defineProperty(TransactionExpiredNonceInvalidError.prototype, "name", {
  value: "TransactionExpiredNonceInvalidError"
});
var MessageAccountKeys = class {
  constructor(staticAccountKeys, accountKeysFromLookups) {
    this.staticAccountKeys = void 0;
    this.accountKeysFromLookups = void 0;
    this.staticAccountKeys = staticAccountKeys;
    this.accountKeysFromLookups = accountKeysFromLookups;
  }
  keySegments() {
    const keySegments = [this.staticAccountKeys];
    if (this.accountKeysFromLookups) {
      keySegments.push(this.accountKeysFromLookups.writable);
      keySegments.push(this.accountKeysFromLookups.readonly);
    }
    return keySegments;
  }
  get(index) {
    for (const keySegment of this.keySegments()) {
      if (index < keySegment.length) {
        return keySegment[index];
      } else {
        index -= keySegment.length;
      }
    }
    return;
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(instructions) {
    const U8_MAX = 255;
    if (this.length > U8_MAX + 1) {
      throw new Error("Account index overflow encountered during compilation");
    }
    const keyIndexMap = /* @__PURE__ */ new Map();
    this.keySegments().flat().forEach((key, index) => {
      keyIndexMap.set(key.toBase58(), index);
    });
    const findKeyIndex = (key) => {
      const keyIndex = keyIndexMap.get(key.toBase58());
      if (keyIndex === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
      return keyIndex;
    };
    return instructions.map((instruction) => {
      return {
        programIdIndex: findKeyIndex(instruction.programId),
        accountKeyIndexes: instruction.keys.map((meta) => findKeyIndex(meta.pubkey)),
        data: instruction.data
      };
    });
  }
};
var publicKey = (property = "publicKey") => {
  return BufferLayout.blob(32, property);
};
var signature = (property = "signature") => {
  return BufferLayout.blob(64, property);
};
var rustString = (property = "string") => {
  const rsl = BufferLayout.struct([BufferLayout.u32("length"), BufferLayout.u32("lengthPadding"), BufferLayout.blob(BufferLayout.offset(BufferLayout.u32(), -8), "chars")], property);
  const _decode = rsl.decode.bind(rsl);
  const _encode = rsl.encode.bind(rsl);
  const rslShim = rsl;
  rslShim.decode = (b, offset2) => {
    const data = _decode(b, offset2);
    return data["chars"].toString();
  };
  rslShim.encode = (str, b, offset2) => {
    const data = {
      chars: import_buffer2.Buffer.from(str, "utf8")
    };
    return _encode(data, b, offset2);
  };
  rslShim.alloc = (str) => {
    return BufferLayout.u32().span + BufferLayout.u32().span + import_buffer2.Buffer.from(str, "utf8").length;
  };
  return rslShim;
};
var authorized = (property = "authorized") => {
  return BufferLayout.struct([publicKey("staker"), publicKey("withdrawer")], property);
};
var lockup = (property = "lockup") => {
  return BufferLayout.struct([BufferLayout.ns64("unixTimestamp"), BufferLayout.ns64("epoch"), publicKey("custodian")], property);
};
var voteInit = (property = "voteInit") => {
  return BufferLayout.struct([publicKey("nodePubkey"), publicKey("authorizedVoter"), publicKey("authorizedWithdrawer"), BufferLayout.u8("commission")], property);
};
var voteAuthorizeWithSeedArgs = (property = "voteAuthorizeWithSeedArgs") => {
  return BufferLayout.struct([BufferLayout.u32("voteAuthorizationType"), publicKey("currentAuthorityDerivedKeyOwnerPubkey"), rustString("currentAuthorityDerivedKeySeed"), publicKey("newAuthorized")], property);
};
function getAlloc(type2, fields) {
  const getItemAlloc = (item) => {
    if (item.span >= 0) {
      return item.span;
    } else if (typeof item.alloc === "function") {
      return item.alloc(fields[item.property]);
    } else if ("count" in item && "elementLayout" in item) {
      const field = fields[item.property];
      if (Array.isArray(field)) {
        return field.length * getItemAlloc(item.elementLayout);
      }
    } else if ("fields" in item) {
      return getAlloc({
        layout: item
      }, fields[item.property]);
    }
    return 0;
  };
  let alloc = 0;
  type2.layout.fields.forEach((item) => {
    alloc += getItemAlloc(item);
  });
  return alloc;
}
function decodeLength(bytes) {
  let len = 0;
  let size = 0;
  for (; ; ) {
    let elem = bytes.shift();
    len |= (elem & 127) << size * 7;
    size += 1;
    if ((elem & 128) === 0) {
      break;
    }
  }
  return len;
}
function encodeLength(bytes, len) {
  let rem_len = len;
  for (; ; ) {
    let elem = rem_len & 127;
    rem_len >>= 7;
    if (rem_len == 0) {
      bytes.push(elem);
      break;
    } else {
      elem |= 128;
      bytes.push(elem);
    }
  }
}
function assert2(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}
var CompiledKeys = class _CompiledKeys {
  constructor(payer, keyMetaMap) {
    this.payer = void 0;
    this.keyMetaMap = void 0;
    this.payer = payer;
    this.keyMetaMap = keyMetaMap;
  }
  static compile(instructions, payer) {
    const keyMetaMap = /* @__PURE__ */ new Map();
    const getOrInsertDefault = (pubkey) => {
      const address = pubkey.toBase58();
      let keyMeta = keyMetaMap.get(address);
      if (keyMeta === void 0) {
        keyMeta = {
          isSigner: false,
          isWritable: false,
          isInvoked: false
        };
        keyMetaMap.set(address, keyMeta);
      }
      return keyMeta;
    };
    const payerKeyMeta = getOrInsertDefault(payer);
    payerKeyMeta.isSigner = true;
    payerKeyMeta.isWritable = true;
    for (const ix of instructions) {
      getOrInsertDefault(ix.programId).isInvoked = true;
      for (const accountMeta of ix.keys) {
        const keyMeta = getOrInsertDefault(accountMeta.pubkey);
        keyMeta.isSigner ||= accountMeta.isSigner;
        keyMeta.isWritable ||= accountMeta.isWritable;
      }
    }
    return new _CompiledKeys(payer, keyMetaMap);
  }
  getMessageComponents() {
    const mapEntries = [...this.keyMetaMap.entries()];
    assert2(mapEntries.length <= 256, "Max static account keys length exceeded");
    const writableSigners = mapEntries.filter(([, meta]) => meta.isSigner && meta.isWritable);
    const readonlySigners = mapEntries.filter(([, meta]) => meta.isSigner && !meta.isWritable);
    const writableNonSigners = mapEntries.filter(([, meta]) => !meta.isSigner && meta.isWritable);
    const readonlyNonSigners = mapEntries.filter(([, meta]) => !meta.isSigner && !meta.isWritable);
    const header = {
      numRequiredSignatures: writableSigners.length + readonlySigners.length,
      numReadonlySignedAccounts: readonlySigners.length,
      numReadonlyUnsignedAccounts: readonlyNonSigners.length
    };
    {
      assert2(writableSigners.length > 0, "Expected at least one writable signer key");
      const [payerAddress] = writableSigners[0];
      assert2(payerAddress === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
    }
    const staticAccountKeys = [...writableSigners.map(([address]) => new PublicKey(address)), ...readonlySigners.map(([address]) => new PublicKey(address)), ...writableNonSigners.map(([address]) => new PublicKey(address)), ...readonlyNonSigners.map(([address]) => new PublicKey(address))];
    return [header, staticAccountKeys];
  }
  extractTableLookup(lookupTable) {
    const [writableIndexes, drainedWritableKeys] = this.drainKeysFoundInLookupTable(lookupTable.state.addresses, (keyMeta) => !keyMeta.isSigner && !keyMeta.isInvoked && keyMeta.isWritable);
    const [readonlyIndexes, drainedReadonlyKeys] = this.drainKeysFoundInLookupTable(lookupTable.state.addresses, (keyMeta) => !keyMeta.isSigner && !keyMeta.isInvoked && !keyMeta.isWritable);
    if (writableIndexes.length === 0 && readonlyIndexes.length === 0) {
      return;
    }
    return [{
      accountKey: lookupTable.key,
      writableIndexes,
      readonlyIndexes
    }, {
      writable: drainedWritableKeys,
      readonly: drainedReadonlyKeys
    }];
  }
  /** @internal */
  drainKeysFoundInLookupTable(lookupTableEntries, keyMetaFilter) {
    const lookupTableIndexes = new Array();
    const drainedKeys = new Array();
    for (const [address, keyMeta] of this.keyMetaMap.entries()) {
      if (keyMetaFilter(keyMeta)) {
        const key = new PublicKey(address);
        const lookupTableIndex = lookupTableEntries.findIndex((entry) => entry.equals(key));
        if (lookupTableIndex >= 0) {
          assert2(lookupTableIndex < 256, "Max lookup table index exceeded");
          lookupTableIndexes.push(lookupTableIndex);
          drainedKeys.push(key);
          this.keyMetaMap.delete(address);
        }
      }
    }
    return [lookupTableIndexes, drainedKeys];
  }
};
var END_OF_BUFFER_ERROR_MESSAGE = "Reached end of buffer unexpectedly";
function guardedShift(byteArray) {
  if (byteArray.length === 0) {
    throw new Error(END_OF_BUFFER_ERROR_MESSAGE);
  }
  return byteArray.shift();
}
function guardedSplice(byteArray, ...args) {
  const [start] = args;
  if (args.length === 2 ? start + (args[1] ?? 0) > byteArray.length : start >= byteArray.length) {
    throw new Error(END_OF_BUFFER_ERROR_MESSAGE);
  }
  return byteArray.splice(...args);
}
var Message = class _Message {
  constructor(args) {
    this.header = void 0;
    this.accountKeys = void 0;
    this.recentBlockhash = void 0;
    this.instructions = void 0;
    this.indexToProgramIds = /* @__PURE__ */ new Map();
    this.header = args.header;
    this.accountKeys = args.accountKeys.map((account) => new PublicKey(account));
    this.recentBlockhash = args.recentBlockhash;
    this.instructions = args.instructions;
    this.instructions.forEach((ix) => this.indexToProgramIds.set(ix.programIdIndex, this.accountKeys[ix.programIdIndex]));
  }
  get version() {
    return "legacy";
  }
  get staticAccountKeys() {
    return this.accountKeys;
  }
  get compiledInstructions() {
    return this.instructions.map((ix) => ({
      programIdIndex: ix.programIdIndex,
      accountKeyIndexes: ix.accounts,
      data: import_bs58.default.decode(ix.data)
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new MessageAccountKeys(this.staticAccountKeys);
  }
  static compile(args) {
    const compiledKeys = CompiledKeys.compile(args.instructions, args.payerKey);
    const [header, staticAccountKeys] = compiledKeys.getMessageComponents();
    const accountKeys = new MessageAccountKeys(staticAccountKeys);
    const instructions = accountKeys.compileInstructions(args.instructions).map((ix) => ({
      programIdIndex: ix.programIdIndex,
      accounts: ix.accountKeyIndexes,
      data: import_bs58.default.encode(ix.data)
    }));
    return new _Message({
      header,
      accountKeys: staticAccountKeys,
      recentBlockhash: args.recentBlockhash,
      instructions
    });
  }
  isAccountSigner(index) {
    return index < this.header.numRequiredSignatures;
  }
  isAccountWritable(index) {
    const numSignedAccounts = this.header.numRequiredSignatures;
    if (index >= this.header.numRequiredSignatures) {
      const unsignedAccountIndex = index - numSignedAccounts;
      const numUnsignedAccounts = this.accountKeys.length - numSignedAccounts;
      const numWritableUnsignedAccounts = numUnsignedAccounts - this.header.numReadonlyUnsignedAccounts;
      return unsignedAccountIndex < numWritableUnsignedAccounts;
    } else {
      const numWritableSignedAccounts = numSignedAccounts - this.header.numReadonlySignedAccounts;
      return index < numWritableSignedAccounts;
    }
  }
  isProgramId(index) {
    return this.indexToProgramIds.has(index);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((_, index) => !this.isProgramId(index));
  }
  serialize() {
    const numKeys = this.accountKeys.length;
    let keyCount = [];
    encodeLength(keyCount, numKeys);
    const instructions = this.instructions.map((instruction) => {
      const {
        accounts,
        programIdIndex
      } = instruction;
      const data = Array.from(import_bs58.default.decode(instruction.data));
      let keyIndicesCount = [];
      encodeLength(keyIndicesCount, accounts.length);
      let dataCount = [];
      encodeLength(dataCount, data.length);
      return {
        programIdIndex,
        keyIndicesCount: import_buffer2.Buffer.from(keyIndicesCount),
        keyIndices: accounts,
        dataLength: import_buffer2.Buffer.from(dataCount),
        data
      };
    });
    let instructionCount = [];
    encodeLength(instructionCount, instructions.length);
    let instructionBuffer = import_buffer2.Buffer.alloc(PACKET_DATA_SIZE);
    import_buffer2.Buffer.from(instructionCount).copy(instructionBuffer);
    let instructionBufferLength = instructionCount.length;
    instructions.forEach((instruction) => {
      const instructionLayout = BufferLayout.struct([BufferLayout.u8("programIdIndex"), BufferLayout.blob(instruction.keyIndicesCount.length, "keyIndicesCount"), BufferLayout.seq(BufferLayout.u8("keyIndex"), instruction.keyIndices.length, "keyIndices"), BufferLayout.blob(instruction.dataLength.length, "dataLength"), BufferLayout.seq(BufferLayout.u8("userdatum"), instruction.data.length, "data")]);
      const length2 = instructionLayout.encode(instruction, instructionBuffer, instructionBufferLength);
      instructionBufferLength += length2;
    });
    instructionBuffer = instructionBuffer.slice(0, instructionBufferLength);
    const signDataLayout = BufferLayout.struct([BufferLayout.blob(1, "numRequiredSignatures"), BufferLayout.blob(1, "numReadonlySignedAccounts"), BufferLayout.blob(1, "numReadonlyUnsignedAccounts"), BufferLayout.blob(keyCount.length, "keyCount"), BufferLayout.seq(publicKey("key"), numKeys, "keys"), publicKey("recentBlockhash")]);
    const transaction = {
      numRequiredSignatures: import_buffer2.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: import_buffer2.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: import_buffer2.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: import_buffer2.Buffer.from(keyCount),
      keys: this.accountKeys.map((key) => toBuffer(key.toBytes())),
      recentBlockhash: import_bs58.default.decode(this.recentBlockhash)
    };
    let signData = import_buffer2.Buffer.alloc(2048);
    const length = signDataLayout.encode(transaction, signData);
    instructionBuffer.copy(signData, length);
    return signData.slice(0, length + instructionBuffer.length);
  }
  /**
   * Decode a compiled message into a Message object.
   */
  static from(buffer) {
    let byteArray = [...buffer];
    const numRequiredSignatures = guardedShift(byteArray);
    if (numRequiredSignatures !== (numRequiredSignatures & VERSION_PREFIX_MASK)) {
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    }
    const numReadonlySignedAccounts = guardedShift(byteArray);
    const numReadonlyUnsignedAccounts = guardedShift(byteArray);
    const accountCount = decodeLength(byteArray);
    let accountKeys = [];
    for (let i = 0; i < accountCount; i++) {
      const account = guardedSplice(byteArray, 0, PUBLIC_KEY_LENGTH);
      accountKeys.push(new PublicKey(import_buffer2.Buffer.from(account)));
    }
    const recentBlockhash = guardedSplice(byteArray, 0, PUBLIC_KEY_LENGTH);
    const instructionCount = decodeLength(byteArray);
    let instructions = [];
    for (let i = 0; i < instructionCount; i++) {
      const programIdIndex = guardedShift(byteArray);
      const accountCount2 = decodeLength(byteArray);
      const accounts = guardedSplice(byteArray, 0, accountCount2);
      const dataLength = decodeLength(byteArray);
      const dataSlice = guardedSplice(byteArray, 0, dataLength);
      const data = import_bs58.default.encode(import_buffer2.Buffer.from(dataSlice));
      instructions.push({
        programIdIndex,
        accounts,
        data
      });
    }
    const messageArgs = {
      header: {
        numRequiredSignatures,
        numReadonlySignedAccounts,
        numReadonlyUnsignedAccounts
      },
      recentBlockhash: import_bs58.default.encode(import_buffer2.Buffer.from(recentBlockhash)),
      accountKeys,
      instructions
    };
    return new _Message(messageArgs);
  }
};
var MessageV0 = class _MessageV0 {
  constructor(args) {
    this.header = void 0;
    this.staticAccountKeys = void 0;
    this.recentBlockhash = void 0;
    this.compiledInstructions = void 0;
    this.addressTableLookups = void 0;
    this.header = args.header;
    this.staticAccountKeys = args.staticAccountKeys;
    this.recentBlockhash = args.recentBlockhash;
    this.compiledInstructions = args.compiledInstructions;
    this.addressTableLookups = args.addressTableLookups;
  }
  get version() {
    return 0;
  }
  get numAccountKeysFromLookups() {
    let count = 0;
    for (const lookup of this.addressTableLookups) {
      count += lookup.readonlyIndexes.length + lookup.writableIndexes.length;
    }
    return count;
  }
  getAccountKeys(args) {
    let accountKeysFromLookups;
    if (args && "accountKeysFromLookups" in args && args.accountKeysFromLookups) {
      if (this.numAccountKeysFromLookups != args.accountKeysFromLookups.writable.length + args.accountKeysFromLookups.readonly.length) {
        throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
      }
      accountKeysFromLookups = args.accountKeysFromLookups;
    } else if (args && "addressLookupTableAccounts" in args && args.addressLookupTableAccounts) {
      accountKeysFromLookups = this.resolveAddressTableLookups(args.addressLookupTableAccounts);
    } else if (this.addressTableLookups.length > 0) {
      throw new Error("Failed to get account keys because address table lookups were not resolved");
    }
    return new MessageAccountKeys(this.staticAccountKeys, accountKeysFromLookups);
  }
  isAccountSigner(index) {
    return index < this.header.numRequiredSignatures;
  }
  isAccountWritable(index) {
    const numSignedAccounts = this.header.numRequiredSignatures;
    const numStaticAccountKeys = this.staticAccountKeys.length;
    if (index >= numStaticAccountKeys) {
      const lookupAccountKeysIndex = index - numStaticAccountKeys;
      const numWritableLookupAccountKeys = this.addressTableLookups.reduce((count, lookup) => count + lookup.writableIndexes.length, 0);
      return lookupAccountKeysIndex < numWritableLookupAccountKeys;
    } else if (index >= this.header.numRequiredSignatures) {
      const unsignedAccountIndex = index - numSignedAccounts;
      const numUnsignedAccounts = numStaticAccountKeys - numSignedAccounts;
      const numWritableUnsignedAccounts = numUnsignedAccounts - this.header.numReadonlyUnsignedAccounts;
      return unsignedAccountIndex < numWritableUnsignedAccounts;
    } else {
      const numWritableSignedAccounts = numSignedAccounts - this.header.numReadonlySignedAccounts;
      return index < numWritableSignedAccounts;
    }
  }
  resolveAddressTableLookups(addressLookupTableAccounts) {
    const accountKeysFromLookups = {
      writable: [],
      readonly: []
    };
    for (const tableLookup of this.addressTableLookups) {
      const tableAccount = addressLookupTableAccounts.find((account) => account.key.equals(tableLookup.accountKey));
      if (!tableAccount) {
        throw new Error(`Failed to find address lookup table account for table key ${tableLookup.accountKey.toBase58()}`);
      }
      for (const index of tableLookup.writableIndexes) {
        if (index < tableAccount.state.addresses.length) {
          accountKeysFromLookups.writable.push(tableAccount.state.addresses[index]);
        } else {
          throw new Error(`Failed to find address for index ${index} in address lookup table ${tableLookup.accountKey.toBase58()}`);
        }
      }
      for (const index of tableLookup.readonlyIndexes) {
        if (index < tableAccount.state.addresses.length) {
          accountKeysFromLookups.readonly.push(tableAccount.state.addresses[index]);
        } else {
          throw new Error(`Failed to find address for index ${index} in address lookup table ${tableLookup.accountKey.toBase58()}`);
        }
      }
    }
    return accountKeysFromLookups;
  }
  static compile(args) {
    const compiledKeys = CompiledKeys.compile(args.instructions, args.payerKey);
    const addressTableLookups = new Array();
    const accountKeysFromLookups = {
      writable: new Array(),
      readonly: new Array()
    };
    const lookupTableAccounts = args.addressLookupTableAccounts || [];
    for (const lookupTable of lookupTableAccounts) {
      const extractResult = compiledKeys.extractTableLookup(lookupTable);
      if (extractResult !== void 0) {
        const [addressTableLookup, {
          writable,
          readonly
        }] = extractResult;
        addressTableLookups.push(addressTableLookup);
        accountKeysFromLookups.writable.push(...writable);
        accountKeysFromLookups.readonly.push(...readonly);
      }
    }
    const [header, staticAccountKeys] = compiledKeys.getMessageComponents();
    const accountKeys = new MessageAccountKeys(staticAccountKeys, accountKeysFromLookups);
    const compiledInstructions = accountKeys.compileInstructions(args.instructions);
    return new _MessageV0({
      header,
      staticAccountKeys,
      recentBlockhash: args.recentBlockhash,
      compiledInstructions,
      addressTableLookups
    });
  }
  serialize() {
    const encodedStaticAccountKeysLength = Array();
    encodeLength(encodedStaticAccountKeysLength, this.staticAccountKeys.length);
    const serializedInstructions = this.serializeInstructions();
    const encodedInstructionsLength = Array();
    encodeLength(encodedInstructionsLength, this.compiledInstructions.length);
    const serializedAddressTableLookups = this.serializeAddressTableLookups();
    const encodedAddressTableLookupsLength = Array();
    encodeLength(encodedAddressTableLookupsLength, this.addressTableLookups.length);
    const messageLayout = BufferLayout.struct([BufferLayout.u8("prefix"), BufferLayout.struct([BufferLayout.u8("numRequiredSignatures"), BufferLayout.u8("numReadonlySignedAccounts"), BufferLayout.u8("numReadonlyUnsignedAccounts")], "header"), BufferLayout.blob(encodedStaticAccountKeysLength.length, "staticAccountKeysLength"), BufferLayout.seq(publicKey(), this.staticAccountKeys.length, "staticAccountKeys"), publicKey("recentBlockhash"), BufferLayout.blob(encodedInstructionsLength.length, "instructionsLength"), BufferLayout.blob(serializedInstructions.length, "serializedInstructions"), BufferLayout.blob(encodedAddressTableLookupsLength.length, "addressTableLookupsLength"), BufferLayout.blob(serializedAddressTableLookups.length, "serializedAddressTableLookups")]);
    const serializedMessage = new Uint8Array(PACKET_DATA_SIZE);
    const MESSAGE_VERSION_0_PREFIX = 1 << 7;
    const serializedMessageLength = messageLayout.encode({
      prefix: MESSAGE_VERSION_0_PREFIX,
      header: this.header,
      staticAccountKeysLength: new Uint8Array(encodedStaticAccountKeysLength),
      staticAccountKeys: this.staticAccountKeys.map((key) => key.toBytes()),
      recentBlockhash: import_bs58.default.decode(this.recentBlockhash),
      instructionsLength: new Uint8Array(encodedInstructionsLength),
      serializedInstructions,
      addressTableLookupsLength: new Uint8Array(encodedAddressTableLookupsLength),
      serializedAddressTableLookups
    }, serializedMessage);
    return serializedMessage.slice(0, serializedMessageLength);
  }
  serializeInstructions() {
    let serializedLength = 0;
    const serializedInstructions = new Uint8Array(PACKET_DATA_SIZE);
    for (const instruction of this.compiledInstructions) {
      const encodedAccountKeyIndexesLength = Array();
      encodeLength(encodedAccountKeyIndexesLength, instruction.accountKeyIndexes.length);
      const encodedDataLength = Array();
      encodeLength(encodedDataLength, instruction.data.length);
      const instructionLayout = BufferLayout.struct([BufferLayout.u8("programIdIndex"), BufferLayout.blob(encodedAccountKeyIndexesLength.length, "encodedAccountKeyIndexesLength"), BufferLayout.seq(BufferLayout.u8(), instruction.accountKeyIndexes.length, "accountKeyIndexes"), BufferLayout.blob(encodedDataLength.length, "encodedDataLength"), BufferLayout.blob(instruction.data.length, "data")]);
      serializedLength += instructionLayout.encode({
        programIdIndex: instruction.programIdIndex,
        encodedAccountKeyIndexesLength: new Uint8Array(encodedAccountKeyIndexesLength),
        accountKeyIndexes: instruction.accountKeyIndexes,
        encodedDataLength: new Uint8Array(encodedDataLength),
        data: instruction.data
      }, serializedInstructions, serializedLength);
    }
    return serializedInstructions.slice(0, serializedLength);
  }
  serializeAddressTableLookups() {
    let serializedLength = 0;
    const serializedAddressTableLookups = new Uint8Array(PACKET_DATA_SIZE);
    for (const lookup of this.addressTableLookups) {
      const encodedWritableIndexesLength = Array();
      encodeLength(encodedWritableIndexesLength, lookup.writableIndexes.length);
      const encodedReadonlyIndexesLength = Array();
      encodeLength(encodedReadonlyIndexesLength, lookup.readonlyIndexes.length);
      const addressTableLookupLayout = BufferLayout.struct([publicKey("accountKey"), BufferLayout.blob(encodedWritableIndexesLength.length, "encodedWritableIndexesLength"), BufferLayout.seq(BufferLayout.u8(), lookup.writableIndexes.length, "writableIndexes"), BufferLayout.blob(encodedReadonlyIndexesLength.length, "encodedReadonlyIndexesLength"), BufferLayout.seq(BufferLayout.u8(), lookup.readonlyIndexes.length, "readonlyIndexes")]);
      serializedLength += addressTableLookupLayout.encode({
        accountKey: lookup.accountKey.toBytes(),
        encodedWritableIndexesLength: new Uint8Array(encodedWritableIndexesLength),
        writableIndexes: lookup.writableIndexes,
        encodedReadonlyIndexesLength: new Uint8Array(encodedReadonlyIndexesLength),
        readonlyIndexes: lookup.readonlyIndexes
      }, serializedAddressTableLookups, serializedLength);
    }
    return serializedAddressTableLookups.slice(0, serializedLength);
  }
  static deserialize(serializedMessage) {
    let byteArray = [...serializedMessage];
    const prefix = guardedShift(byteArray);
    const maskedPrefix = prefix & VERSION_PREFIX_MASK;
    assert2(prefix !== maskedPrefix, `Expected versioned message but received legacy message`);
    const version = maskedPrefix;
    assert2(version === 0, `Expected versioned message with version 0 but found version ${version}`);
    const header = {
      numRequiredSignatures: guardedShift(byteArray),
      numReadonlySignedAccounts: guardedShift(byteArray),
      numReadonlyUnsignedAccounts: guardedShift(byteArray)
    };
    const staticAccountKeys = [];
    const staticAccountKeysLength = decodeLength(byteArray);
    for (let i = 0; i < staticAccountKeysLength; i++) {
      staticAccountKeys.push(new PublicKey(guardedSplice(byteArray, 0, PUBLIC_KEY_LENGTH)));
    }
    const recentBlockhash = import_bs58.default.encode(guardedSplice(byteArray, 0, PUBLIC_KEY_LENGTH));
    const instructionCount = decodeLength(byteArray);
    const compiledInstructions = [];
    for (let i = 0; i < instructionCount; i++) {
      const programIdIndex = guardedShift(byteArray);
      const accountKeyIndexesLength = decodeLength(byteArray);
      const accountKeyIndexes = guardedSplice(byteArray, 0, accountKeyIndexesLength);
      const dataLength = decodeLength(byteArray);
      const data = new Uint8Array(guardedSplice(byteArray, 0, dataLength));
      compiledInstructions.push({
        programIdIndex,
        accountKeyIndexes,
        data
      });
    }
    const addressTableLookupsCount = decodeLength(byteArray);
    const addressTableLookups = [];
    for (let i = 0; i < addressTableLookupsCount; i++) {
      const accountKey = new PublicKey(guardedSplice(byteArray, 0, PUBLIC_KEY_LENGTH));
      const writableIndexesLength = decodeLength(byteArray);
      const writableIndexes = guardedSplice(byteArray, 0, writableIndexesLength);
      const readonlyIndexesLength = decodeLength(byteArray);
      const readonlyIndexes = guardedSplice(byteArray, 0, readonlyIndexesLength);
      addressTableLookups.push({
        accountKey,
        writableIndexes,
        readonlyIndexes
      });
    }
    return new _MessageV0({
      header,
      staticAccountKeys,
      recentBlockhash,
      compiledInstructions,
      addressTableLookups
    });
  }
};
var VersionedMessage = {
  deserializeMessageVersion(serializedMessage) {
    const prefix = serializedMessage[0];
    const maskedPrefix = prefix & VERSION_PREFIX_MASK;
    if (maskedPrefix === prefix) {
      return "legacy";
    }
    return maskedPrefix;
  },
  deserialize: (serializedMessage) => {
    const version = VersionedMessage.deserializeMessageVersion(serializedMessage);
    if (version === "legacy") {
      return Message.from(serializedMessage);
    }
    if (version === 0) {
      return MessageV0.deserialize(serializedMessage);
    } else {
      throw new Error(`Transaction message version ${version} deserialization is not supported`);
    }
  }
};
var TransactionStatus = (function(TransactionStatus2) {
  TransactionStatus2[TransactionStatus2["BLOCKHEIGHT_EXCEEDED"] = 0] = "BLOCKHEIGHT_EXCEEDED";
  TransactionStatus2[TransactionStatus2["PROCESSED"] = 1] = "PROCESSED";
  TransactionStatus2[TransactionStatus2["TIMED_OUT"] = 2] = "TIMED_OUT";
  TransactionStatus2[TransactionStatus2["NONCE_INVALID"] = 3] = "NONCE_INVALID";
  return TransactionStatus2;
})({});
var DEFAULT_SIGNATURE = import_buffer2.Buffer.alloc(SIGNATURE_LENGTH_IN_BYTES).fill(0);
var TransactionInstruction = class {
  constructor(opts) {
    this.keys = void 0;
    this.programId = void 0;
    this.data = import_buffer2.Buffer.alloc(0);
    this.programId = opts.programId;
    this.keys = opts.keys;
    if (opts.data) {
      this.data = opts.data;
    }
  }
  /**
   * @internal
   */
  toJSON() {
    return {
      keys: this.keys.map(({
        pubkey,
        isSigner,
        isWritable
      }) => ({
        pubkey: pubkey.toJSON(),
        isSigner,
        isWritable
      })),
      programId: this.programId.toJSON(),
      data: [...this.data]
    };
  }
};
var Transaction = class _Transaction {
  /**
   * The first (payer) Transaction signature
   *
   * @returns {Buffer | null} Buffer of payer's signature
   */
  get signature() {
    if (this.signatures.length > 0) {
      return this.signatures[0].signature;
    }
    return null;
  }
  /**
   * The transaction fee payer
   */
  // Construct a transaction with a blockhash and lastValidBlockHeight
  // Construct a transaction using a durable nonce
  /**
   * @deprecated `TransactionCtorFields` has been deprecated and will be removed in a future version.
   * Please supply a `TransactionBlockhashCtor` instead.
   */
  /**
   * Construct an empty Transaction
   */
  constructor(opts) {
    this.signatures = [];
    this.feePayer = void 0;
    this.instructions = [];
    this.recentBlockhash = void 0;
    this.lastValidBlockHeight = void 0;
    this.nonceInfo = void 0;
    this.minNonceContextSlot = void 0;
    this._message = void 0;
    this._json = void 0;
    if (!opts) {
      return;
    }
    if (opts.feePayer) {
      this.feePayer = opts.feePayer;
    }
    if (opts.signatures) {
      this.signatures = opts.signatures;
    }
    if (Object.prototype.hasOwnProperty.call(opts, "nonceInfo")) {
      const {
        minContextSlot,
        nonceInfo
      } = opts;
      this.minNonceContextSlot = minContextSlot;
      this.nonceInfo = nonceInfo;
    } else if (Object.prototype.hasOwnProperty.call(opts, "lastValidBlockHeight")) {
      const {
        blockhash,
        lastValidBlockHeight
      } = opts;
      this.recentBlockhash = blockhash;
      this.lastValidBlockHeight = lastValidBlockHeight;
    } else {
      const {
        recentBlockhash,
        nonceInfo
      } = opts;
      if (nonceInfo) {
        this.nonceInfo = nonceInfo;
      }
      this.recentBlockhash = recentBlockhash;
    }
  }
  /**
   * @internal
   */
  toJSON() {
    return {
      recentBlockhash: this.recentBlockhash || null,
      feePayer: this.feePayer ? this.feePayer.toJSON() : null,
      nonceInfo: this.nonceInfo ? {
        nonce: this.nonceInfo.nonce,
        nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
      } : null,
      instructions: this.instructions.map((instruction) => instruction.toJSON()),
      signers: this.signatures.map(({
        publicKey: publicKey2
      }) => {
        return publicKey2.toJSON();
      })
    };
  }
  /**
   * Add one or more instructions to this Transaction
   *
   * @param {Array< Transaction | TransactionInstruction | TransactionInstructionCtorFields >} items - Instructions to add to the Transaction
   */
  add(...items) {
    if (items.length === 0) {
      throw new Error("No instructions");
    }
    items.forEach((item) => {
      if ("instructions" in item) {
        this.instructions = this.instructions.concat(item.instructions);
      } else if ("data" in item && "programId" in item && "keys" in item) {
        this.instructions.push(item);
      } else {
        this.instructions.push(new TransactionInstruction(item));
      }
    });
    return this;
  }
  /**
   * Compile transaction data
   */
  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) {
      return this._message;
    }
    let recentBlockhash;
    let instructions;
    if (this.nonceInfo) {
      recentBlockhash = this.nonceInfo.nonce;
      if (this.instructions[0] != this.nonceInfo.nonceInstruction) {
        instructions = [this.nonceInfo.nonceInstruction, ...this.instructions];
      } else {
        instructions = this.instructions;
      }
    } else {
      recentBlockhash = this.recentBlockhash;
      instructions = this.instructions;
    }
    if (!recentBlockhash) {
      throw new Error("Transaction recentBlockhash required");
    }
    if (instructions.length < 1) {
      console.warn("No instructions provided");
    }
    let feePayer;
    if (this.feePayer) {
      feePayer = this.feePayer;
    } else if (this.signatures.length > 0 && this.signatures[0].publicKey) {
      feePayer = this.signatures[0].publicKey;
    } else {
      throw new Error("Transaction fee payer required");
    }
    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i].programId === void 0) {
        throw new Error(`Transaction instruction index ${i} has undefined program id`);
      }
    }
    const programIds = [];
    const accountMetas = [];
    instructions.forEach((instruction) => {
      instruction.keys.forEach((accountMeta) => {
        accountMetas.push({
          ...accountMeta
        });
      });
      const programId = instruction.programId.toString();
      if (!programIds.includes(programId)) {
        programIds.push(programId);
      }
    });
    programIds.forEach((programId) => {
      accountMetas.push({
        pubkey: new PublicKey(programId),
        isSigner: false,
        isWritable: false
      });
    });
    const uniqueMetas = [];
    accountMetas.forEach((accountMeta) => {
      const pubkeyString = accountMeta.pubkey.toString();
      const uniqueIndex = uniqueMetas.findIndex((x) => {
        return x.pubkey.toString() === pubkeyString;
      });
      if (uniqueIndex > -1) {
        uniqueMetas[uniqueIndex].isWritable = uniqueMetas[uniqueIndex].isWritable || accountMeta.isWritable;
        uniqueMetas[uniqueIndex].isSigner = uniqueMetas[uniqueIndex].isSigner || accountMeta.isSigner;
      } else {
        uniqueMetas.push(accountMeta);
      }
    });
    uniqueMetas.sort(function(x, y) {
      if (x.isSigner !== y.isSigner) {
        return x.isSigner ? -1 : 1;
      }
      if (x.isWritable !== y.isWritable) {
        return x.isWritable ? -1 : 1;
      }
      const options = {
        localeMatcher: "best fit",
        usage: "sort",
        sensitivity: "variant",
        ignorePunctuation: false,
        numeric: false,
        caseFirst: "lower"
      };
      return x.pubkey.toBase58().localeCompare(y.pubkey.toBase58(), "en", options);
    });
    const feePayerIndex = uniqueMetas.findIndex((x) => {
      return x.pubkey.equals(feePayer);
    });
    if (feePayerIndex > -1) {
      const [payerMeta] = uniqueMetas.splice(feePayerIndex, 1);
      payerMeta.isSigner = true;
      payerMeta.isWritable = true;
      uniqueMetas.unshift(payerMeta);
    } else {
      uniqueMetas.unshift({
        pubkey: feePayer,
        isSigner: true,
        isWritable: true
      });
    }
    for (const signature2 of this.signatures) {
      const uniqueIndex = uniqueMetas.findIndex((x) => {
        return x.pubkey.equals(signature2.publicKey);
      });
      if (uniqueIndex > -1) {
        if (!uniqueMetas[uniqueIndex].isSigner) {
          uniqueMetas[uniqueIndex].isSigner = true;
          console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.");
        }
      } else {
        throw new Error(`unknown signer: ${signature2.publicKey.toString()}`);
      }
    }
    let numRequiredSignatures = 0;
    let numReadonlySignedAccounts = 0;
    let numReadonlyUnsignedAccounts = 0;
    const signedKeys = [];
    const unsignedKeys = [];
    uniqueMetas.forEach(({
      pubkey,
      isSigner,
      isWritable
    }) => {
      if (isSigner) {
        signedKeys.push(pubkey.toString());
        numRequiredSignatures += 1;
        if (!isWritable) {
          numReadonlySignedAccounts += 1;
        }
      } else {
        unsignedKeys.push(pubkey.toString());
        if (!isWritable) {
          numReadonlyUnsignedAccounts += 1;
        }
      }
    });
    const accountKeys = signedKeys.concat(unsignedKeys);
    const compiledInstructions = instructions.map((instruction) => {
      const {
        data,
        programId
      } = instruction;
      return {
        programIdIndex: accountKeys.indexOf(programId.toString()),
        accounts: instruction.keys.map((meta) => accountKeys.indexOf(meta.pubkey.toString())),
        data: import_bs58.default.encode(data)
      };
    });
    compiledInstructions.forEach((instruction) => {
      assert2(instruction.programIdIndex >= 0);
      instruction.accounts.forEach((keyIndex) => assert2(keyIndex >= 0));
    });
    return new Message({
      header: {
        numRequiredSignatures,
        numReadonlySignedAccounts,
        numReadonlyUnsignedAccounts
      },
      accountKeys,
      recentBlockhash,
      instructions: compiledInstructions
    });
  }
  /**
   * @internal
   */
  _compile() {
    const message = this.compileMessage();
    const signedKeys = message.accountKeys.slice(0, message.header.numRequiredSignatures);
    if (this.signatures.length === signedKeys.length) {
      const valid = this.signatures.every((pair, index) => {
        return signedKeys[index].equals(pair.publicKey);
      });
      if (valid) return message;
    }
    this.signatures = signedKeys.map((publicKey2) => ({
      signature: null,
      publicKey: publicKey2
    }));
    return message;
  }
  /**
   * Get a buffer of the Transaction data that need to be covered by signatures
   */
  serializeMessage() {
    return this._compile().serialize();
  }
  /**
   * Get the estimated fee associated with a transaction
   *
   * @param {Connection} connection Connection to RPC Endpoint.
   *
   * @returns {Promise<number | null>} The estimated fee for the transaction
   */
  async getEstimatedFee(connection) {
    return (await connection.getFeeForMessage(this.compileMessage())).value;
  }
  /**
   * Specify the public keys which will be used to sign the Transaction.
   * The first signer will be used as the transaction fee payer account.
   *
   * Signatures can be added with either `partialSign` or `addSignature`
   *
   * @deprecated Deprecated since v0.84.0. Only the fee payer needs to be
   * specified and it can be set in the Transaction constructor or with the
   * `feePayer` property.
   */
  setSigners(...signers) {
    if (signers.length === 0) {
      throw new Error("No signers");
    }
    const seen = /* @__PURE__ */ new Set();
    this.signatures = signers.filter((publicKey2) => {
      const key = publicKey2.toString();
      if (seen.has(key)) {
        return false;
      } else {
        seen.add(key);
        return true;
      }
    }).map((publicKey2) => ({
      signature: null,
      publicKey: publicKey2
    }));
  }
  /**
   * Sign the Transaction with the specified signers. Multiple signatures may
   * be applied to a Transaction. The first signature is considered "primary"
   * and is used identify and confirm transactions.
   *
   * If the Transaction `feePayer` is not set, the first signer will be used
   * as the transaction fee payer account.
   *
   * Transaction fields should not be modified after the first call to `sign`,
   * as doing so may invalidate the signature and cause the Transaction to be
   * rejected.
   *
   * The Transaction must be assigned a valid `recentBlockhash` before invoking this method
   *
   * @param {Array<Signer>} signers Array of signers that will sign the transaction
   */
  sign(...signers) {
    if (signers.length === 0) {
      throw new Error("No signers");
    }
    const seen = /* @__PURE__ */ new Set();
    const uniqueSigners = [];
    for (const signer of signers) {
      const key = signer.publicKey.toString();
      if (seen.has(key)) {
        continue;
      } else {
        seen.add(key);
        uniqueSigners.push(signer);
      }
    }
    this.signatures = uniqueSigners.map((signer) => ({
      signature: null,
      publicKey: signer.publicKey
    }));
    const message = this._compile();
    this._partialSign(message, ...uniqueSigners);
  }
  /**
   * Partially sign a transaction with the specified accounts. All accounts must
   * correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * All the caveats from the `sign` method apply to `partialSign`
   *
   * @param {Array<Signer>} signers Array of signers that will sign the transaction
   */
  partialSign(...signers) {
    if (signers.length === 0) {
      throw new Error("No signers");
    }
    const seen = /* @__PURE__ */ new Set();
    const uniqueSigners = [];
    for (const signer of signers) {
      const key = signer.publicKey.toString();
      if (seen.has(key)) {
        continue;
      } else {
        seen.add(key);
        uniqueSigners.push(signer);
      }
    }
    const message = this._compile();
    this._partialSign(message, ...uniqueSigners);
  }
  /**
   * @internal
   */
  _partialSign(message, ...signers) {
    const signData = message.serialize();
    signers.forEach((signer) => {
      const signature2 = sign(signData, signer.secretKey);
      this._addSignature(signer.publicKey, toBuffer(signature2));
    });
  }
  /**
   * Add an externally created signature to a transaction. The public key
   * must correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * @param {PublicKey} pubkey Public key that will be added to the transaction.
   * @param {Buffer} signature An externally created signature to add to the transaction.
   */
  addSignature(pubkey, signature2) {
    this._compile();
    this._addSignature(pubkey, signature2);
  }
  /**
   * @internal
   */
  _addSignature(pubkey, signature2) {
    assert2(signature2.length === 64);
    const index = this.signatures.findIndex((sigpair) => pubkey.equals(sigpair.publicKey));
    if (index < 0) {
      throw new Error(`unknown signer: ${pubkey.toString()}`);
    }
    this.signatures[index].signature = import_buffer2.Buffer.from(signature2);
  }
  /**
   * Verify signatures of a Transaction
   * Optional parameter specifies if we're expecting a fully signed Transaction or a partially signed one.
   * If no boolean is provided, we expect a fully signed Transaction by default.
   *
   * @param {boolean} [requireAllSignatures=true] Require a fully signed Transaction
   */
  verifySignatures(requireAllSignatures = true) {
    const signatureErrors = this._getMessageSignednessErrors(this.serializeMessage(), requireAllSignatures);
    return !signatureErrors;
  }
  /**
   * @internal
   */
  _getMessageSignednessErrors(message, requireAllSignatures) {
    const errors = {};
    for (const {
      signature: signature2,
      publicKey: publicKey2
    } of this.signatures) {
      if (signature2 === null) {
        if (requireAllSignatures) {
          (errors.missing ||= []).push(publicKey2);
        }
      } else {
        if (!verify(signature2, message, publicKey2.toBytes())) {
          (errors.invalid ||= []).push(publicKey2);
        }
      }
    }
    return errors.invalid || errors.missing ? errors : void 0;
  }
  /**
   * Serialize the Transaction in the wire format.
   *
   * @param {Buffer} [config] Config of transaction.
   *
   * @returns {Buffer} Signature of transaction in wire format.
   */
  serialize(config) {
    const {
      requireAllSignatures,
      verifySignatures
    } = Object.assign({
      requireAllSignatures: true,
      verifySignatures: true
    }, config);
    const signData = this.serializeMessage();
    if (verifySignatures) {
      const sigErrors = this._getMessageSignednessErrors(signData, requireAllSignatures);
      if (sigErrors) {
        let errorMessage = "Signature verification failed.";
        if (sigErrors.invalid) {
          errorMessage += `
Invalid signature for public key${sigErrors.invalid.length === 1 ? "" : "(s)"} [\`${sigErrors.invalid.map((p) => p.toBase58()).join("`, `")}\`].`;
        }
        if (sigErrors.missing) {
          errorMessage += `
Missing signature for public key${sigErrors.missing.length === 1 ? "" : "(s)"} [\`${sigErrors.missing.map((p) => p.toBase58()).join("`, `")}\`].`;
        }
        throw new Error(errorMessage);
      }
    }
    return this._serialize(signData);
  }
  /**
   * @internal
   */
  _serialize(signData) {
    const {
      signatures
    } = this;
    const signatureCount = [];
    encodeLength(signatureCount, signatures.length);
    const transactionLength = signatureCount.length + signatures.length * 64 + signData.length;
    const wireTransaction = import_buffer2.Buffer.alloc(transactionLength);
    assert2(signatures.length < 256);
    import_buffer2.Buffer.from(signatureCount).copy(wireTransaction, 0);
    signatures.forEach(({
      signature: signature2
    }, index) => {
      if (signature2 !== null) {
        assert2(signature2.length === 64, `signature has invalid length`);
        import_buffer2.Buffer.from(signature2).copy(wireTransaction, signatureCount.length + index * 64);
      }
    });
    signData.copy(wireTransaction, signatureCount.length + signatures.length * 64);
    assert2(wireTransaction.length <= PACKET_DATA_SIZE, `Transaction too large: ${wireTransaction.length} > ${PACKET_DATA_SIZE}`);
    return wireTransaction;
  }
  /**
   * Deprecated method
   * @internal
   */
  get keys() {
    assert2(this.instructions.length === 1);
    return this.instructions[0].keys.map((keyObj) => keyObj.pubkey);
  }
  /**
   * Deprecated method
   * @internal
   */
  get programId() {
    assert2(this.instructions.length === 1);
    return this.instructions[0].programId;
  }
  /**
   * Deprecated method
   * @internal
   */
  get data() {
    assert2(this.instructions.length === 1);
    return this.instructions[0].data;
  }
  /**
   * Parse a wire transaction into a Transaction object.
   *
   * @param {Buffer | Uint8Array | Array<number>} buffer Signature of wire Transaction
   *
   * @returns {Transaction} Transaction associated with the signature
   */
  static from(buffer) {
    let byteArray = [...buffer];
    const signatureCount = decodeLength(byteArray);
    let signatures = [];
    for (let i = 0; i < signatureCount; i++) {
      const signature2 = guardedSplice(byteArray, 0, SIGNATURE_LENGTH_IN_BYTES);
      signatures.push(import_bs58.default.encode(import_buffer2.Buffer.from(signature2)));
    }
    return _Transaction.populate(Message.from(byteArray), signatures);
  }
  /**
   * Populate Transaction object from message and signatures
   *
   * @param {Message} message Message of transaction
   * @param {Array<string>} signatures List of signatures to assign to the transaction
   *
   * @returns {Transaction} The populated Transaction
   */
  static populate(message, signatures = []) {
    const transaction = new _Transaction();
    transaction.recentBlockhash = message.recentBlockhash;
    if (message.header.numRequiredSignatures > 0) {
      transaction.feePayer = message.accountKeys[0];
    }
    signatures.forEach((signature2, index) => {
      const sigPubkeyPair = {
        signature: signature2 == import_bs58.default.encode(DEFAULT_SIGNATURE) ? null : import_bs58.default.decode(signature2),
        publicKey: message.accountKeys[index]
      };
      transaction.signatures.push(sigPubkeyPair);
    });
    message.instructions.forEach((instruction) => {
      const keys = instruction.accounts.map((account) => {
        const pubkey = message.accountKeys[account];
        return {
          pubkey,
          isSigner: transaction.signatures.some((keyObj) => keyObj.publicKey.toString() === pubkey.toString()) || message.isAccountSigner(account),
          isWritable: message.isAccountWritable(account)
        };
      });
      transaction.instructions.push(new TransactionInstruction({
        keys,
        programId: message.accountKeys[instruction.programIdIndex],
        data: import_bs58.default.decode(instruction.data)
      }));
    });
    transaction._message = message;
    transaction._json = transaction.toJSON();
    return transaction;
  }
};
var VersionedTransaction = class _VersionedTransaction {
  get version() {
    return this.message.version;
  }
  constructor(message, signatures) {
    this.signatures = void 0;
    this.message = void 0;
    if (signatures !== void 0) {
      assert2(signatures.length === message.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures");
      this.signatures = signatures;
    } else {
      const defaultSignatures = [];
      for (let i = 0; i < message.header.numRequiredSignatures; i++) {
        defaultSignatures.push(new Uint8Array(SIGNATURE_LENGTH_IN_BYTES));
      }
      this.signatures = defaultSignatures;
    }
    this.message = message;
  }
  serialize() {
    const serializedMessage = this.message.serialize();
    const encodedSignaturesLength = Array();
    encodeLength(encodedSignaturesLength, this.signatures.length);
    const transactionLayout = BufferLayout.struct([BufferLayout.blob(encodedSignaturesLength.length, "encodedSignaturesLength"), BufferLayout.seq(signature(), this.signatures.length, "signatures"), BufferLayout.blob(serializedMessage.length, "serializedMessage")]);
    const serializedTransaction = new Uint8Array(2048);
    const serializedTransactionLength = transactionLayout.encode({
      encodedSignaturesLength: new Uint8Array(encodedSignaturesLength),
      signatures: this.signatures,
      serializedMessage
    }, serializedTransaction);
    return serializedTransaction.slice(0, serializedTransactionLength);
  }
  static deserialize(serializedTransaction) {
    let byteArray = [...serializedTransaction];
    const signatures = [];
    const signaturesLength = decodeLength(byteArray);
    for (let i = 0; i < signaturesLength; i++) {
      signatures.push(new Uint8Array(guardedSplice(byteArray, 0, SIGNATURE_LENGTH_IN_BYTES)));
    }
    const message = VersionedMessage.deserialize(new Uint8Array(byteArray));
    return new _VersionedTransaction(message, signatures);
  }
  sign(signers) {
    const messageData = this.message.serialize();
    const signerPubkeys = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
    for (const signer of signers) {
      const signerIndex = signerPubkeys.findIndex((pubkey) => pubkey.equals(signer.publicKey));
      assert2(signerIndex >= 0, `Cannot sign with non signer key ${signer.publicKey.toBase58()}`);
      this.signatures[signerIndex] = sign(messageData, signer.secretKey);
    }
  }
  addSignature(publicKey2, signature2) {
    assert2(signature2.byteLength === 64, "Signature must be 64 bytes long");
    const signerPubkeys = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
    const signerIndex = signerPubkeys.findIndex((pubkey) => pubkey.equals(publicKey2));
    assert2(signerIndex >= 0, `Can not add signature; \`${publicKey2.toBase58()}\` is not required to sign this transaction`);
    this.signatures[signerIndex] = signature2;
  }
};
var NUM_TICKS_PER_SECOND = 160;
var DEFAULT_TICKS_PER_SLOT = 64;
var NUM_SLOTS_PER_SECOND = NUM_TICKS_PER_SECOND / DEFAULT_TICKS_PER_SLOT;
var MS_PER_SLOT = 1e3 / NUM_SLOTS_PER_SECOND;
var SYSVAR_CLOCK_PUBKEY = new PublicKey("SysvarC1ock11111111111111111111111111111111");
var SYSVAR_EPOCH_SCHEDULE_PUBKEY = new PublicKey("SysvarEpochSchedu1e111111111111111111111111");
var SYSVAR_INSTRUCTIONS_PUBKEY = new PublicKey("Sysvar1nstructions1111111111111111111111111");
var SYSVAR_RECENT_BLOCKHASHES_PUBKEY = new PublicKey("SysvarRecentB1ockHashes11111111111111111111");
var SYSVAR_RENT_PUBKEY = new PublicKey("SysvarRent111111111111111111111111111111111");
var SYSVAR_REWARDS_PUBKEY = new PublicKey("SysvarRewards111111111111111111111111111111");
var SYSVAR_SLOT_HASHES_PUBKEY = new PublicKey("SysvarS1otHashes111111111111111111111111111");
var SYSVAR_SLOT_HISTORY_PUBKEY = new PublicKey("SysvarS1otHistory11111111111111111111111111");
var SYSVAR_STAKE_HISTORY_PUBKEY = new PublicKey("SysvarStakeHistory1111111111111111111111111");
var SendTransactionError = class extends Error {
  constructor({
    action,
    signature: signature2,
    transactionMessage,
    logs
  }) {
    const maybeLogsOutput = logs ? `Logs: 
${JSON.stringify(logs.slice(-10), null, 2)}. ` : "";
    const guideText = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
    let message;
    switch (action) {
      case "send":
        message = `Transaction ${signature2} resulted in an error. 
${transactionMessage}. ` + maybeLogsOutput + guideText;
        break;
      case "simulate":
        message = `Simulation failed. 
Message: ${transactionMessage}. 
` + maybeLogsOutput + guideText;
        break;
      default: {
        message = `Unknown action '${/* @__PURE__ */ ((a) => a)(action)}'`;
      }
    }
    super(message);
    this.signature = void 0;
    this.transactionMessage = void 0;
    this.transactionLogs = void 0;
    this.signature = signature2;
    this.transactionMessage = transactionMessage;
    this.transactionLogs = logs ? logs : void 0;
  }
  get transactionError() {
    return {
      message: this.transactionMessage,
      logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
    };
  }
  /* @deprecated Use `await getLogs()` instead */
  get logs() {
    const cachedLogs = this.transactionLogs;
    if (cachedLogs != null && typeof cachedLogs === "object" && "then" in cachedLogs) {
      return void 0;
    }
    return cachedLogs;
  }
  async getLogs(connection) {
    if (!Array.isArray(this.transactionLogs)) {
      this.transactionLogs = new Promise((resolve, reject) => {
        connection.getTransaction(this.signature).then((tx) => {
          if (tx && tx.meta && tx.meta.logMessages) {
            const logs = tx.meta.logMessages;
            this.transactionLogs = logs;
            resolve(logs);
          } else {
            reject(new Error("Log messages not found"));
          }
        }).catch(reject);
      });
    }
    return await this.transactionLogs;
  }
};
var SolanaJSONRPCError = class extends Error {
  constructor({
    code,
    message,
    data
  }, customMessage) {
    super(customMessage != null ? `${customMessage}: ${message}` : message);
    this.code = void 0;
    this.data = void 0;
    this.code = code;
    this.data = data;
    this.name = "SolanaJSONRPCError";
  }
};
async function sendAndConfirmTransaction(connection, transaction, signers, options) {
  const sendOptions = options && {
    skipPreflight: options.skipPreflight,
    preflightCommitment: options.preflightCommitment || options.commitment,
    maxRetries: options.maxRetries,
    minContextSlot: options.minContextSlot
  };
  const signature2 = await connection.sendTransaction(transaction, signers, sendOptions);
  let status;
  if (transaction.recentBlockhash != null && transaction.lastValidBlockHeight != null) {
    status = (await connection.confirmTransaction({
      abortSignal: options?.abortSignal,
      signature: signature2,
      blockhash: transaction.recentBlockhash,
      lastValidBlockHeight: transaction.lastValidBlockHeight
    }, options && options.commitment)).value;
  } else if (transaction.minNonceContextSlot != null && transaction.nonceInfo != null) {
    const {
      nonceInstruction
    } = transaction.nonceInfo;
    const nonceAccountPubkey = nonceInstruction.keys[0].pubkey;
    status = (await connection.confirmTransaction({
      abortSignal: options?.abortSignal,
      minContextSlot: transaction.minNonceContextSlot,
      nonceAccountPubkey,
      nonceValue: transaction.nonceInfo.nonce,
      signature: signature2
    }, options && options.commitment)).value;
  } else {
    if (options?.abortSignal != null) {
      console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable.");
    }
    status = (await connection.confirmTransaction(signature2, options && options.commitment)).value;
  }
  if (status.err) {
    if (signature2 != null) {
      throw new SendTransactionError({
        action: "send",
        signature: signature2,
        transactionMessage: `Status: (${JSON.stringify(status)})`
      });
    }
    throw new Error(`Transaction ${signature2} failed (${JSON.stringify(status)})`);
  }
  return signature2;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function encodeData(type2, fields) {
  const allocLength = type2.layout.span >= 0 ? type2.layout.span : getAlloc(type2, fields);
  const data = import_buffer2.Buffer.alloc(allocLength);
  const layoutFields = Object.assign({
    instruction: type2.index
  }, fields);
  type2.layout.encode(layoutFields, data);
  return data;
}
var FeeCalculatorLayout = BufferLayout.nu64("lamportsPerSignature");
var NonceAccountLayout = BufferLayout.struct([BufferLayout.u32("version"), BufferLayout.u32("state"), publicKey("authorizedPubkey"), publicKey("nonce"), BufferLayout.struct([FeeCalculatorLayout], "feeCalculator")]);
var NONCE_ACCOUNT_LENGTH = NonceAccountLayout.span;
var NonceAccount = class _NonceAccount {
  /**
   * @internal
   */
  constructor(args) {
    this.authorizedPubkey = void 0;
    this.nonce = void 0;
    this.feeCalculator = void 0;
    this.authorizedPubkey = args.authorizedPubkey;
    this.nonce = args.nonce;
    this.feeCalculator = args.feeCalculator;
  }
  /**
   * Deserialize NonceAccount from the account data.
   *
   * @param buffer account data
   * @return NonceAccount
   */
  static fromAccountData(buffer) {
    const nonceAccount = NonceAccountLayout.decode(toBuffer(buffer), 0);
    return new _NonceAccount({
      authorizedPubkey: new PublicKey(nonceAccount.authorizedPubkey),
      nonce: new PublicKey(nonceAccount.nonce).toString(),
      feeCalculator: nonceAccount.feeCalculator
    });
  }
};
function u64(property) {
  const layout = (0, import_buffer_layout.blob)(8, property);
  const decode2 = layout.decode.bind(layout);
  const encode3 = layout.encode.bind(layout);
  const bigIntLayout = layout;
  const codec = getU64Codec();
  bigIntLayout.decode = (buffer, offset2) => {
    const src = decode2(buffer, offset2);
    return codec.decode(src);
  };
  bigIntLayout.encode = (bigInt, buffer, offset2) => {
    const src = codec.encode(bigInt);
    return encode3(src, buffer, offset2);
  };
  return bigIntLayout;
}
var SYSTEM_INSTRUCTION_LAYOUTS = Object.freeze({
  Create: {
    index: 0,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("lamports"), BufferLayout.ns64("space"), publicKey("programId")])
  },
  Assign: {
    index: 1,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("programId")])
  },
  Transfer: {
    index: 2,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), u64("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("base"), rustString("seed"), BufferLayout.ns64("lamports"), BufferLayout.ns64("space"), publicKey("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: BufferLayout.struct([BufferLayout.u32("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("authorized")])
  },
  Allocate: {
    index: 8,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("base"), rustString("seed"), BufferLayout.ns64("space"), publicKey("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("base"), rustString("seed"), publicKey("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), u64("lamports"), rustString("seed"), publicKey("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: BufferLayout.struct([BufferLayout.u32("instruction")])
  }
});
var SystemProgram = class _SystemProgram {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the System program
   */
  /**
   * Generate a transaction instruction that creates a new account
   */
  static createAccount(params) {
    const type2 = SYSTEM_INSTRUCTION_LAYOUTS.Create;
    const data = encodeData(type2, {
      lamports: params.lamports,
      space: params.space,
      programId: toBuffer(params.programId.toBuffer())
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: params.fromPubkey,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: params.newAccountPubkey,
        isSigner: true,
        isWritable: true
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction instruction that transfers lamports from one account to another
   */
  static transfer(params) {
    let data;
    let keys;
    if ("basePubkey" in params) {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.TransferWithSeed;
      data = encodeData(type2, {
        lamports: BigInt(params.lamports),
        seed: params.seed,
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.fromPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      }, {
        pubkey: params.toPubkey,
        isSigner: false,
        isWritable: true
      }];
    } else {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.Transfer;
      data = encodeData(type2, {
        lamports: BigInt(params.lamports)
      });
      keys = [{
        pubkey: params.fromPubkey,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: params.toPubkey,
        isSigner: false,
        isWritable: true
      }];
    }
    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction instruction that assigns an account to a program
   */
  static assign(params) {
    let data;
    let keys;
    if ("basePubkey" in params) {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.AssignWithSeed;
      data = encodeData(type2, {
        base: toBuffer(params.basePubkey.toBuffer()),
        seed: params.seed,
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      }];
    } else {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.Assign;
      data = encodeData(type2, {
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: true,
        isWritable: true
      }];
    }
    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction instruction that creates a new account at
   *   an address generated with `from`, a seed, and programId
   */
  static createAccountWithSeed(params) {
    const type2 = SYSTEM_INSTRUCTION_LAYOUTS.CreateWithSeed;
    const data = encodeData(type2, {
      base: toBuffer(params.basePubkey.toBuffer()),
      seed: params.seed,
      lamports: params.lamports,
      space: params.space,
      programId: toBuffer(params.programId.toBuffer())
    });
    let keys = [{
      pubkey: params.fromPubkey,
      isSigner: true,
      isWritable: true
    }, {
      pubkey: params.newAccountPubkey,
      isSigner: false,
      isWritable: true
    }];
    if (!params.basePubkey.equals(params.fromPubkey)) {
      keys.push({
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      });
    }
    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction that creates a new Nonce account
   */
  static createNonceAccount(params) {
    const transaction = new Transaction();
    if ("basePubkey" in params && "seed" in params) {
      transaction.add(_SystemProgram.createAccountWithSeed({
        fromPubkey: params.fromPubkey,
        newAccountPubkey: params.noncePubkey,
        basePubkey: params.basePubkey,
        seed: params.seed,
        lamports: params.lamports,
        space: NONCE_ACCOUNT_LENGTH,
        programId: this.programId
      }));
    } else {
      transaction.add(_SystemProgram.createAccount({
        fromPubkey: params.fromPubkey,
        newAccountPubkey: params.noncePubkey,
        lamports: params.lamports,
        space: NONCE_ACCOUNT_LENGTH,
        programId: this.programId
      }));
    }
    const initParams = {
      noncePubkey: params.noncePubkey,
      authorizedPubkey: params.authorizedPubkey
    };
    transaction.add(this.nonceInitialize(initParams));
    return transaction;
  }
  /**
   * Generate an instruction to initialize a Nonce account
   */
  static nonceInitialize(params) {
    const type2 = SYSTEM_INSTRUCTION_LAYOUTS.InitializeNonceAccount;
    const data = encodeData(type2, {
      authorized: toBuffer(params.authorizedPubkey.toBuffer())
    });
    const instructionData = {
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }
  /**
   * Generate an instruction to advance the nonce in a Nonce account
   */
  static nonceAdvance(params) {
    const type2 = SYSTEM_INSTRUCTION_LAYOUTS.AdvanceNonceAccount;
    const data = encodeData(type2);
    const instructionData = {
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: params.authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }
  /**
   * Generate a transaction instruction that withdraws lamports from a Nonce account
   */
  static nonceWithdraw(params) {
    const type2 = SYSTEM_INSTRUCTION_LAYOUTS.WithdrawNonceAccount;
    const data = encodeData(type2, {
      lamports: params.lamports
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.toPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: params.authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction instruction that authorizes a new PublicKey as the authority
   * on a Nonce account.
   */
  static nonceAuthorize(params) {
    const type2 = SYSTEM_INSTRUCTION_LAYOUTS.AuthorizeNonceAccount;
    const data = encodeData(type2, {
      authorized: toBuffer(params.newAuthorizedPubkey.toBuffer())
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction instruction that allocates space in an account without funding
   */
  static allocate(params) {
    let data;
    let keys;
    if ("basePubkey" in params) {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.AllocateWithSeed;
      data = encodeData(type2, {
        base: toBuffer(params.basePubkey.toBuffer()),
        seed: params.seed,
        space: params.space,
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      }];
    } else {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.Allocate;
      data = encodeData(type2, {
        space: params.space
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: true,
        isWritable: true
      }];
    }
    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }
};
SystemProgram.programId = new PublicKey("11111111111111111111111111111111");
var CHUNK_SIZE = PACKET_DATA_SIZE - 300;
var Loader = class _Loader {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Amount of program data placed in each load Transaction
   */
  /**
   * Minimum number of signatures required to load a program not including
   * retries
   *
   * Can be used to calculate transaction fees
   */
  static getMinNumSignatures(dataLength) {
    return 2 * // Every transaction requires two signatures (payer + program)
    (Math.ceil(dataLength / _Loader.chunkSize) + 1 + // Add one for Create transaction
    1);
  }
  /**
   * Loads a generic program
   *
   * @param connection The connection to use
   * @param payer System account that pays to load the program
   * @param program Account to load the program into
   * @param programId Public key that identifies the loader
   * @param data Program octets
   * @return true if program was loaded successfully, false if program was already loaded
   */
  static async load(connection, payer, program, programId, data) {
    {
      const balanceNeeded = await connection.getMinimumBalanceForRentExemption(data.length);
      const programInfo = await connection.getAccountInfo(program.publicKey, "confirmed");
      let transaction = null;
      if (programInfo !== null) {
        if (programInfo.executable) {
          console.error("Program load failed, account is already executable");
          return false;
        }
        if (programInfo.data.length !== data.length) {
          transaction = transaction || new Transaction();
          transaction.add(SystemProgram.allocate({
            accountPubkey: program.publicKey,
            space: data.length
          }));
        }
        if (!programInfo.owner.equals(programId)) {
          transaction = transaction || new Transaction();
          transaction.add(SystemProgram.assign({
            accountPubkey: program.publicKey,
            programId
          }));
        }
        if (programInfo.lamports < balanceNeeded) {
          transaction = transaction || new Transaction();
          transaction.add(SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: program.publicKey,
            lamports: balanceNeeded - programInfo.lamports
          }));
        }
      } else {
        transaction = new Transaction().add(SystemProgram.createAccount({
          fromPubkey: payer.publicKey,
          newAccountPubkey: program.publicKey,
          lamports: balanceNeeded > 0 ? balanceNeeded : 1,
          space: data.length,
          programId
        }));
      }
      if (transaction !== null) {
        await sendAndConfirmTransaction(connection, transaction, [payer, program], {
          commitment: "confirmed"
        });
      }
    }
    const dataLayout = BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.u32("offset"), BufferLayout.u32("bytesLength"), BufferLayout.u32("bytesLengthPadding"), BufferLayout.seq(BufferLayout.u8("byte"), BufferLayout.offset(BufferLayout.u32(), -8), "bytes")]);
    const chunkSize = _Loader.chunkSize;
    let offset2 = 0;
    let array2 = data;
    let transactions = [];
    while (array2.length > 0) {
      const bytes = array2.slice(0, chunkSize);
      const data2 = import_buffer2.Buffer.alloc(chunkSize + 16);
      dataLayout.encode({
        instruction: 0,
        // Load instruction
        offset: offset2,
        bytes,
        bytesLength: 0,
        bytesLengthPadding: 0
      }, data2);
      const transaction = new Transaction().add({
        keys: [{
          pubkey: program.publicKey,
          isSigner: true,
          isWritable: true
        }],
        programId,
        data: data2
      });
      transactions.push(sendAndConfirmTransaction(connection, transaction, [payer, program], {
        commitment: "confirmed"
      }));
      if (connection._rpcEndpoint.includes("solana.com")) {
        const REQUESTS_PER_SECOND = 4;
        await sleep(1e3 / REQUESTS_PER_SECOND);
      }
      offset2 += chunkSize;
      array2 = array2.slice(chunkSize);
    }
    await Promise.all(transactions);
    {
      const dataLayout2 = BufferLayout.struct([BufferLayout.u32("instruction")]);
      const data2 = import_buffer2.Buffer.alloc(dataLayout2.span);
      dataLayout2.encode({
        instruction: 1
        // Finalize instruction
      }, data2);
      const transaction = new Transaction().add({
        keys: [{
          pubkey: program.publicKey,
          isSigner: true,
          isWritable: true
        }, {
          pubkey: SYSVAR_RENT_PUBKEY,
          isSigner: false,
          isWritable: false
        }],
        programId,
        data: data2
      });
      const deployCommitment = "processed";
      const finalizeSignature = await connection.sendTransaction(transaction, [payer, program], {
        preflightCommitment: deployCommitment
      });
      const {
        context,
        value
      } = await connection.confirmTransaction({
        signature: finalizeSignature,
        lastValidBlockHeight: transaction.lastValidBlockHeight,
        blockhash: transaction.recentBlockhash
      }, deployCommitment);
      if (value.err) {
        throw new Error(`Transaction ${finalizeSignature} failed (${JSON.stringify(value)})`);
      }
      while (true) {
        try {
          const currentSlot = await connection.getSlot({
            commitment: deployCommitment
          });
          if (currentSlot > context.slot) {
            break;
          }
        } catch {
        }
        await new Promise((resolve) => setTimeout(resolve, Math.round(MS_PER_SLOT / 2)));
      }
    }
    return true;
  }
};
Loader.chunkSize = CHUNK_SIZE;
var BPF_LOADER_PROGRAM_ID = new PublicKey("BPFLoader2111111111111111111111111111111111");
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var fastStableStringify$1;
var hasRequiredFastStableStringify;
function requireFastStableStringify() {
  if (hasRequiredFastStableStringify) return fastStableStringify$1;
  hasRequiredFastStableStringify = 1;
  var objToString = Object.prototype.toString;
  var objKeys = Object.keys || function(obj) {
    var keys = [];
    for (var name in obj) {
      keys.push(name);
    }
    return keys;
  };
  function stringify(val, isArrayProp) {
    var i, max, str, keys, key, propVal, toStr;
    if (val === true) {
      return "true";
    }
    if (val === false) {
      return "false";
    }
    switch (typeof val) {
      case "object":
        if (val === null) {
          return null;
        } else if (val.toJSON && typeof val.toJSON === "function") {
          return stringify(val.toJSON(), isArrayProp);
        } else {
          toStr = objToString.call(val);
          if (toStr === "[object Array]") {
            str = "[";
            max = val.length - 1;
            for (i = 0; i < max; i++) {
              str += stringify(val[i], true) + ",";
            }
            if (max > -1) {
              str += stringify(val[i], true);
            }
            return str + "]";
          } else if (toStr === "[object Object]") {
            keys = objKeys(val).sort();
            max = keys.length;
            str = "";
            i = 0;
            while (i < max) {
              key = keys[i];
              propVal = stringify(val[key], false);
              if (propVal !== void 0) {
                if (str) {
                  str += ",";
                }
                str += JSON.stringify(key) + ":" + propVal;
              }
              i++;
            }
            return "{" + str + "}";
          } else {
            return JSON.stringify(val);
          }
        }
      case "function":
      case "undefined":
        return isArrayProp ? null : void 0;
      case "string":
        return JSON.stringify(val);
      default:
        return isFinite(val) ? val : null;
    }
  }
  fastStableStringify$1 = function(val) {
    var returnVal = stringify(val, false);
    if (returnVal !== void 0) {
      return "" + returnVal;
    }
  };
  return fastStableStringify$1;
}
var fastStableStringifyExports = requireFastStableStringify();
var fastStableStringify = getDefaultExportFromCjs(fastStableStringifyExports);
var MINIMUM_SLOT_PER_EPOCH = 32;
function trailingZeros(n) {
  let trailingZeros2 = 0;
  while (n > 1) {
    n /= 2;
    trailingZeros2++;
  }
  return trailingZeros2;
}
function nextPowerOfTwo(n) {
  if (n === 0) return 1;
  n--;
  n |= n >> 1;
  n |= n >> 2;
  n |= n >> 4;
  n |= n >> 8;
  n |= n >> 16;
  n |= n >> 32;
  return n + 1;
}
var EpochSchedule = class {
  constructor(slotsPerEpoch, leaderScheduleSlotOffset, warmup, firstNormalEpoch, firstNormalSlot) {
    this.slotsPerEpoch = void 0;
    this.leaderScheduleSlotOffset = void 0;
    this.warmup = void 0;
    this.firstNormalEpoch = void 0;
    this.firstNormalSlot = void 0;
    this.slotsPerEpoch = slotsPerEpoch;
    this.leaderScheduleSlotOffset = leaderScheduleSlotOffset;
    this.warmup = warmup;
    this.firstNormalEpoch = firstNormalEpoch;
    this.firstNormalSlot = firstNormalSlot;
  }
  getEpoch(slot) {
    return this.getEpochAndSlotIndex(slot)[0];
  }
  getEpochAndSlotIndex(slot) {
    if (slot < this.firstNormalSlot) {
      const epoch = trailingZeros(nextPowerOfTwo(slot + MINIMUM_SLOT_PER_EPOCH + 1)) - trailingZeros(MINIMUM_SLOT_PER_EPOCH) - 1;
      const epochLen = this.getSlotsInEpoch(epoch);
      const slotIndex = slot - (epochLen - MINIMUM_SLOT_PER_EPOCH);
      return [epoch, slotIndex];
    } else {
      const normalSlotIndex = slot - this.firstNormalSlot;
      const normalEpochIndex = Math.floor(normalSlotIndex / this.slotsPerEpoch);
      const epoch = this.firstNormalEpoch + normalEpochIndex;
      const slotIndex = normalSlotIndex % this.slotsPerEpoch;
      return [epoch, slotIndex];
    }
  }
  getFirstSlotInEpoch(epoch) {
    if (epoch <= this.firstNormalEpoch) {
      return (Math.pow(2, epoch) - 1) * MINIMUM_SLOT_PER_EPOCH;
    } else {
      return (epoch - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
    }
  }
  getLastSlotInEpoch(epoch) {
    return this.getFirstSlotInEpoch(epoch) + this.getSlotsInEpoch(epoch) - 1;
  }
  getSlotsInEpoch(epoch) {
    if (epoch < this.firstNormalEpoch) {
      return Math.pow(2, epoch + trailingZeros(MINIMUM_SLOT_PER_EPOCH));
    } else {
      return this.slotsPerEpoch;
    }
  }
};
var fetchImpl = globalThis.fetch;
var RpcWebSocketClient = class extends CommonClient {
  constructor(address, options, generate_request_id) {
    const webSocketFactory = (url) => {
      const rpc = WebSocket2(url, {
        autoconnect: true,
        max_reconnects: 5,
        reconnect: true,
        reconnect_interval: 1e3,
        ...options
      });
      if ("socket" in rpc) {
        this.underlyingSocket = rpc.socket;
      } else {
        this.underlyingSocket = rpc;
      }
      return rpc;
    };
    super(webSocketFactory, address, options, generate_request_id);
    this.underlyingSocket = void 0;
  }
  call(...args) {
    const readyState = this.underlyingSocket?.readyState;
    if (readyState === 1) {
      return super.call(...args);
    }
    return Promise.reject(new Error("Tried to call a JSON-RPC method `" + args[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + readyState + ")"));
  }
  notify(...args) {
    const readyState = this.underlyingSocket?.readyState;
    if (readyState === 1) {
      return super.notify(...args);
    }
    return Promise.reject(new Error("Tried to send a JSON-RPC notification `" + args[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + readyState + ")"));
  }
};
function decodeData(type2, data) {
  let decoded;
  try {
    decoded = type2.layout.decode(data);
  } catch (err) {
    throw new Error("invalid instruction; " + err);
  }
  if (decoded.typeIndex !== type2.index) {
    throw new Error(`invalid account data; account type mismatch ${decoded.typeIndex} != ${type2.index}`);
  }
  return decoded;
}
var LOOKUP_TABLE_META_SIZE = 56;
var AddressLookupTableAccount = class {
  constructor(args) {
    this.key = void 0;
    this.state = void 0;
    this.key = args.key;
    this.state = args.state;
  }
  isActive() {
    const U64_MAX = BigInt("0xffffffffffffffff");
    return this.state.deactivationSlot === U64_MAX;
  }
  static deserialize(accountData) {
    const meta = decodeData(LookupTableMetaLayout, accountData);
    const serializedAddressesLen = accountData.length - LOOKUP_TABLE_META_SIZE;
    assert2(serializedAddressesLen >= 0, "lookup table is invalid");
    assert2(serializedAddressesLen % 32 === 0, "lookup table is invalid");
    const numSerializedAddresses = serializedAddressesLen / 32;
    const {
      addresses
    } = BufferLayout.struct([BufferLayout.seq(publicKey(), numSerializedAddresses, "addresses")]).decode(accountData.slice(LOOKUP_TABLE_META_SIZE));
    return {
      deactivationSlot: meta.deactivationSlot,
      lastExtendedSlot: meta.lastExtendedSlot,
      lastExtendedSlotStartIndex: meta.lastExtendedStartIndex,
      authority: meta.authority.length !== 0 ? new PublicKey(meta.authority[0]) : void 0,
      addresses: addresses.map((address) => new PublicKey(address))
    };
  }
};
var LookupTableMetaLayout = {
  index: 1,
  layout: BufferLayout.struct([
    BufferLayout.u32("typeIndex"),
    u64("deactivationSlot"),
    BufferLayout.nu64("lastExtendedSlot"),
    BufferLayout.u8("lastExtendedStartIndex"),
    BufferLayout.u8(),
    // option
    BufferLayout.seq(publicKey(), BufferLayout.offset(BufferLayout.u8(), -1), "authority")
  ])
};
var URL_RE = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function makeWebsocketUrl(endpoint) {
  const matches = endpoint.match(URL_RE);
  if (matches == null) {
    throw TypeError(`Failed to validate endpoint URL \`${endpoint}\``);
  }
  const [
    _,
    // eslint-disable-line @typescript-eslint/no-unused-vars
    hostish,
    portWithColon,
    rest
  ] = matches;
  const protocol = endpoint.startsWith("https:") ? "wss:" : "ws:";
  const startPort = portWithColon == null ? null : parseInt(portWithColon.slice(1), 10);
  const websocketPort = (
    // Only shift the port by +1 as a convention for ws(s) only if given endpoint
    // is explicitly specifying the endpoint port (HTTP-based RPC), assuming
    // we're directly trying to connect to agave-validator's ws listening port.
    // When the endpoint omits the port, we're connecting to the protocol
    // default ports: http(80) or https(443) and it's assumed we're behind a reverse
    // proxy which manages WebSocket upgrade and backend port redirection.
    startPort == null ? "" : `:${startPort + 1}`
  );
  return `${protocol}//${hostish}${websocketPort}${rest}`;
}
var PublicKeyFromString = coerce(instance(PublicKey), string(), (value) => new PublicKey(value));
var RawAccountDataResult = tuple([string(), literal("base64")]);
var BufferFromRawAccountData = coerce(instance(import_buffer2.Buffer), RawAccountDataResult, (value) => import_buffer2.Buffer.from(value[0], "base64"));
var BLOCKHASH_CACHE_TIMEOUT_MS = 30 * 1e3;
function assertEndpointUrl(putativeUrl) {
  if (/^https?:/.test(putativeUrl) === false) {
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  }
  return putativeUrl;
}
function extractCommitmentFromConfig(commitmentOrConfig) {
  let commitment;
  let config;
  if (typeof commitmentOrConfig === "string") {
    commitment = commitmentOrConfig;
  } else if (commitmentOrConfig) {
    const {
      commitment: specifiedCommitment,
      ...specifiedConfig
    } = commitmentOrConfig;
    commitment = specifiedCommitment;
    config = specifiedConfig;
  }
  return {
    commitment,
    config
  };
}
function applyDefaultMemcmpEncodingToFilters(filters) {
  return filters.map((filter) => "memcmp" in filter ? {
    ...filter,
    memcmp: {
      ...filter.memcmp,
      encoding: filter.memcmp.encoding ?? "base58"
    }
  } : filter);
}
function createRpcResult(result) {
  return union([type({
    jsonrpc: literal("2.0"),
    id: string(),
    result
  }), type({
    jsonrpc: literal("2.0"),
    id: string(),
    error: type({
      code: unknown(),
      message: string(),
      data: optional(any())
    })
  })]);
}
var UnknownRpcResult = createRpcResult(unknown());
function jsonRpcResult(schema) {
  return coerce(createRpcResult(schema), UnknownRpcResult, (value) => {
    if ("error" in value) {
      return value;
    } else {
      return {
        ...value,
        result: create(value.result, schema)
      };
    }
  });
}
function jsonRpcResultAndContext(value) {
  return jsonRpcResult(type({
    context: type({
      slot: number()
    }),
    value
  }));
}
function notificationResultAndContext(value) {
  return type({
    context: type({
      slot: number()
    }),
    value
  });
}
function versionedMessageFromResponse(version, response) {
  if (version === 0) {
    return new MessageV0({
      header: response.header,
      staticAccountKeys: response.accountKeys.map((accountKey) => new PublicKey(accountKey)),
      recentBlockhash: response.recentBlockhash,
      compiledInstructions: response.instructions.map((ix) => ({
        programIdIndex: ix.programIdIndex,
        accountKeyIndexes: ix.accounts,
        data: import_bs58.default.decode(ix.data)
      })),
      addressTableLookups: response.addressTableLookups
    });
  } else {
    return new Message(response);
  }
}
var GetInflationGovernorResult = type({
  foundation: number(),
  foundationTerm: number(),
  initial: number(),
  taper: number(),
  terminal: number()
});
var GetInflationRewardResult = jsonRpcResult(array(nullable(type({
  epoch: number(),
  effectiveSlot: number(),
  amount: number(),
  postBalance: number(),
  commission: optional(nullable(number()))
}))));
var GetRecentPrioritizationFeesResult = array(type({
  slot: number(),
  prioritizationFee: number()
}));
var GetInflationRateResult = type({
  total: number(),
  validator: number(),
  foundation: number(),
  epoch: number()
});
var GetEpochInfoResult = type({
  epoch: number(),
  slotIndex: number(),
  slotsInEpoch: number(),
  absoluteSlot: number(),
  blockHeight: optional(number()),
  transactionCount: optional(number())
});
var GetEpochScheduleResult = type({
  slotsPerEpoch: number(),
  leaderScheduleSlotOffset: number(),
  warmup: boolean(),
  firstNormalEpoch: number(),
  firstNormalSlot: number()
});
var GetLeaderScheduleResult = record(string(), array(number()));
var TransactionErrorResult = nullable(union([type({}), string()]));
var SignatureStatusResult = type({
  err: TransactionErrorResult
});
var SignatureReceivedResult = literal("receivedSignature");
var VersionResult = type({
  "solana-core": string(),
  "feature-set": optional(number())
});
var ParsedInstructionStruct = type({
  program: string(),
  programId: PublicKeyFromString,
  parsed: unknown()
});
var PartiallyDecodedInstructionStruct = type({
  programId: PublicKeyFromString,
  accounts: array(PublicKeyFromString),
  data: string()
});
var SimulatedTransactionResponseStruct = jsonRpcResultAndContext(type({
  err: nullable(union([type({}), string()])),
  logs: nullable(array(string())),
  accounts: optional(nullable(array(nullable(type({
    executable: boolean(),
    owner: string(),
    lamports: number(),
    data: array(string()),
    rentEpoch: optional(number())
  }))))),
  unitsConsumed: optional(number()),
  returnData: optional(nullable(type({
    programId: string(),
    data: tuple([string(), literal("base64")])
  }))),
  innerInstructions: optional(nullable(array(type({
    index: number(),
    instructions: array(union([ParsedInstructionStruct, PartiallyDecodedInstructionStruct]))
  }))))
}));
var BlockProductionResponseStruct = jsonRpcResultAndContext(type({
  byIdentity: record(string(), array(number())),
  range: type({
    firstSlot: number(),
    lastSlot: number()
  })
}));
function createRpcClient(url, httpHeaders, customFetch, fetchMiddleware, disableRetryOnRateLimit, httpAgent) {
  const fetch = customFetch ? customFetch : fetchImpl;
  let agent;
  {
    if (httpAgent != null) {
      console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    }
  }
  let fetchWithMiddleware;
  if (fetchMiddleware) {
    fetchWithMiddleware = async (info, init) => {
      const modifiedFetchArgs = await new Promise((resolve, reject) => {
        try {
          fetchMiddleware(info, init, (modifiedInfo, modifiedInit) => resolve([modifiedInfo, modifiedInit]));
        } catch (error) {
          reject(error);
        }
      });
      return await fetch(...modifiedFetchArgs);
    };
  }
  const clientBrowser = new import_browser.default(async (request, callback) => {
    const options = {
      method: "POST",
      body: request,
      agent,
      headers: Object.assign({
        "Content-Type": "application/json"
      }, httpHeaders || {}, COMMON_HTTP_HEADERS)
    };
    try {
      let too_many_requests_retries = 5;
      let res;
      let waitTime = 500;
      for (; ; ) {
        if (fetchWithMiddleware) {
          res = await fetchWithMiddleware(url, options);
        } else {
          res = await fetch(url, options);
        }
        if (res.status !== 429) {
          break;
        }
        if (disableRetryOnRateLimit === true) {
          break;
        }
        too_many_requests_retries -= 1;
        if (too_many_requests_retries === 0) {
          break;
        }
        console.error(`Server responded with ${res.status} ${res.statusText}.  Retrying after ${waitTime}ms delay...`);
        await sleep(waitTime);
        waitTime *= 2;
      }
      const text = await res.text();
      if (res.ok) {
        callback(null, text);
      } else {
        callback(new Error(`${res.status} ${res.statusText}: ${text}`));
      }
    } catch (err) {
      if (err instanceof Error) callback(err);
    }
  }, {});
  return clientBrowser;
}
function createRpcRequest(client) {
  return (method, args) => {
    return new Promise((resolve, reject) => {
      client.request(method, args, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  };
}
function createRpcBatchRequest(client) {
  return (requests) => {
    return new Promise((resolve, reject) => {
      if (requests.length === 0) resolve([]);
      const batch = requests.map((params) => {
        return client.request(params.methodName, params.args);
      });
      client.request(batch, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  };
}
var GetInflationGovernorRpcResult = jsonRpcResult(GetInflationGovernorResult);
var GetInflationRateRpcResult = jsonRpcResult(GetInflationRateResult);
var GetRecentPrioritizationFeesRpcResult = jsonRpcResult(GetRecentPrioritizationFeesResult);
var GetEpochInfoRpcResult = jsonRpcResult(GetEpochInfoResult);
var GetEpochScheduleRpcResult = jsonRpcResult(GetEpochScheduleResult);
var GetLeaderScheduleRpcResult = jsonRpcResult(GetLeaderScheduleResult);
var SlotRpcResult = jsonRpcResult(number());
var GetSupplyRpcResult = jsonRpcResultAndContext(type({
  total: number(),
  circulating: number(),
  nonCirculating: number(),
  nonCirculatingAccounts: array(PublicKeyFromString)
}));
var TokenAmountResult = type({
  amount: string(),
  uiAmount: nullable(number()),
  decimals: number(),
  uiAmountString: optional(string())
});
var GetTokenLargestAccountsResult = jsonRpcResultAndContext(array(type({
  address: PublicKeyFromString,
  amount: string(),
  uiAmount: nullable(number()),
  decimals: number(),
  uiAmountString: optional(string())
})));
var GetTokenAccountsByOwner = jsonRpcResultAndContext(array(type({
  pubkey: PublicKeyFromString,
  account: type({
    executable: boolean(),
    owner: PublicKeyFromString,
    lamports: number(),
    data: BufferFromRawAccountData,
    rentEpoch: number()
  })
})));
var ParsedAccountDataResult = type({
  program: string(),
  parsed: unknown(),
  space: number()
});
var GetParsedTokenAccountsByOwner = jsonRpcResultAndContext(array(type({
  pubkey: PublicKeyFromString,
  account: type({
    executable: boolean(),
    owner: PublicKeyFromString,
    lamports: number(),
    data: ParsedAccountDataResult,
    rentEpoch: number()
  })
})));
var GetLargestAccountsRpcResult = jsonRpcResultAndContext(array(type({
  lamports: number(),
  address: PublicKeyFromString
})));
var AccountInfoResult = type({
  executable: boolean(),
  owner: PublicKeyFromString,
  lamports: number(),
  data: BufferFromRawAccountData,
  rentEpoch: number()
});
var KeyedAccountInfoResult = type({
  pubkey: PublicKeyFromString,
  account: AccountInfoResult
});
var ParsedOrRawAccountData = coerce(union([instance(import_buffer2.Buffer), ParsedAccountDataResult]), union([RawAccountDataResult, ParsedAccountDataResult]), (value) => {
  if (Array.isArray(value)) {
    return create(value, BufferFromRawAccountData);
  } else {
    return value;
  }
});
var ParsedAccountInfoResult = type({
  executable: boolean(),
  owner: PublicKeyFromString,
  lamports: number(),
  data: ParsedOrRawAccountData,
  rentEpoch: number()
});
var KeyedParsedAccountInfoResult = type({
  pubkey: PublicKeyFromString,
  account: ParsedAccountInfoResult
});
var StakeActivationResult = type({
  state: union([literal("active"), literal("inactive"), literal("activating"), literal("deactivating")]),
  active: number(),
  inactive: number()
});
var GetConfirmedSignaturesForAddress2RpcResult = jsonRpcResult(array(type({
  signature: string(),
  slot: number(),
  err: TransactionErrorResult,
  memo: nullable(string()),
  blockTime: optional(nullable(number()))
})));
var GetSignaturesForAddressRpcResult = jsonRpcResult(array(type({
  signature: string(),
  slot: number(),
  err: TransactionErrorResult,
  memo: nullable(string()),
  blockTime: optional(nullable(number()))
})));
var AccountNotificationResult = type({
  subscription: number(),
  result: notificationResultAndContext(AccountInfoResult)
});
var ProgramAccountInfoResult = type({
  pubkey: PublicKeyFromString,
  account: AccountInfoResult
});
var ProgramAccountNotificationResult = type({
  subscription: number(),
  result: notificationResultAndContext(ProgramAccountInfoResult)
});
var SlotInfoResult = type({
  parent: number(),
  slot: number(),
  root: number()
});
var SlotNotificationResult = type({
  subscription: number(),
  result: SlotInfoResult
});
var SlotUpdateResult = union([type({
  type: union([literal("firstShredReceived"), literal("completed"), literal("optimisticConfirmation"), literal("root")]),
  slot: number(),
  timestamp: number()
}), type({
  type: literal("createdBank"),
  parent: number(),
  slot: number(),
  timestamp: number()
}), type({
  type: literal("frozen"),
  slot: number(),
  timestamp: number(),
  stats: type({
    numTransactionEntries: number(),
    numSuccessfulTransactions: number(),
    numFailedTransactions: number(),
    maxTransactionsPerEntry: number()
  })
}), type({
  type: literal("dead"),
  slot: number(),
  timestamp: number(),
  err: string()
})]);
var SlotUpdateNotificationResult = type({
  subscription: number(),
  result: SlotUpdateResult
});
var SignatureNotificationResult = type({
  subscription: number(),
  result: notificationResultAndContext(union([SignatureStatusResult, SignatureReceivedResult]))
});
var RootNotificationResult = type({
  subscription: number(),
  result: number()
});
var ContactInfoResult = type({
  pubkey: string(),
  gossip: nullable(string()),
  tpu: nullable(string()),
  rpc: nullable(string()),
  version: nullable(string())
});
var VoteAccountInfoResult = type({
  votePubkey: string(),
  nodePubkey: string(),
  activatedStake: number(),
  epochVoteAccount: boolean(),
  epochCredits: array(tuple([number(), number(), number()])),
  commission: number(),
  lastVote: number(),
  rootSlot: nullable(number())
});
var GetVoteAccounts = jsonRpcResult(type({
  current: array(VoteAccountInfoResult),
  delinquent: array(VoteAccountInfoResult)
}));
var ConfirmationStatus = union([literal("processed"), literal("confirmed"), literal("finalized")]);
var SignatureStatusResponse = type({
  slot: number(),
  confirmations: nullable(number()),
  err: TransactionErrorResult,
  confirmationStatus: optional(ConfirmationStatus)
});
var GetSignatureStatusesRpcResult = jsonRpcResultAndContext(array(nullable(SignatureStatusResponse)));
var GetMinimumBalanceForRentExemptionRpcResult = jsonRpcResult(number());
var AddressTableLookupStruct = type({
  accountKey: PublicKeyFromString,
  writableIndexes: array(number()),
  readonlyIndexes: array(number())
});
var ConfirmedTransactionResult = type({
  signatures: array(string()),
  message: type({
    accountKeys: array(string()),
    header: type({
      numRequiredSignatures: number(),
      numReadonlySignedAccounts: number(),
      numReadonlyUnsignedAccounts: number()
    }),
    instructions: array(type({
      accounts: array(number()),
      data: string(),
      programIdIndex: number()
    })),
    recentBlockhash: string(),
    addressTableLookups: optional(array(AddressTableLookupStruct))
  })
});
var AnnotatedAccountKey = type({
  pubkey: PublicKeyFromString,
  signer: boolean(),
  writable: boolean(),
  source: optional(union([literal("transaction"), literal("lookupTable")]))
});
var ConfirmedTransactionAccountsModeResult = type({
  accountKeys: array(AnnotatedAccountKey),
  signatures: array(string())
});
var ParsedInstructionResult = type({
  parsed: unknown(),
  program: string(),
  programId: PublicKeyFromString
});
var RawInstructionResult = type({
  accounts: array(PublicKeyFromString),
  data: string(),
  programId: PublicKeyFromString
});
var InstructionResult = union([RawInstructionResult, ParsedInstructionResult]);
var UnknownInstructionResult = union([type({
  parsed: unknown(),
  program: string(),
  programId: string()
}), type({
  accounts: array(string()),
  data: string(),
  programId: string()
})]);
var ParsedOrRawInstruction = coerce(InstructionResult, UnknownInstructionResult, (value) => {
  if ("accounts" in value) {
    return create(value, RawInstructionResult);
  } else {
    return create(value, ParsedInstructionResult);
  }
});
var ParsedConfirmedTransactionResult = type({
  signatures: array(string()),
  message: type({
    accountKeys: array(AnnotatedAccountKey),
    instructions: array(ParsedOrRawInstruction),
    recentBlockhash: string(),
    addressTableLookups: optional(nullable(array(AddressTableLookupStruct)))
  })
});
var TokenBalanceResult = type({
  accountIndex: number(),
  mint: string(),
  owner: optional(string()),
  programId: optional(string()),
  uiTokenAmount: TokenAmountResult
});
var LoadedAddressesResult = type({
  writable: array(PublicKeyFromString),
  readonly: array(PublicKeyFromString)
});
var ConfirmedTransactionMetaResult = type({
  err: TransactionErrorResult,
  fee: number(),
  innerInstructions: optional(nullable(array(type({
    index: number(),
    instructions: array(type({
      accounts: array(number()),
      data: string(),
      programIdIndex: number()
    }))
  })))),
  preBalances: array(number()),
  postBalances: array(number()),
  logMessages: optional(nullable(array(string()))),
  preTokenBalances: optional(nullable(array(TokenBalanceResult))),
  postTokenBalances: optional(nullable(array(TokenBalanceResult))),
  loadedAddresses: optional(LoadedAddressesResult),
  computeUnitsConsumed: optional(number()),
  costUnits: optional(number())
});
var ParsedConfirmedTransactionMetaResult = type({
  err: TransactionErrorResult,
  fee: number(),
  innerInstructions: optional(nullable(array(type({
    index: number(),
    instructions: array(ParsedOrRawInstruction)
  })))),
  preBalances: array(number()),
  postBalances: array(number()),
  logMessages: optional(nullable(array(string()))),
  preTokenBalances: optional(nullable(array(TokenBalanceResult))),
  postTokenBalances: optional(nullable(array(TokenBalanceResult))),
  loadedAddresses: optional(LoadedAddressesResult),
  computeUnitsConsumed: optional(number()),
  costUnits: optional(number())
});
var TransactionVersionStruct = union([literal(0), literal("legacy")]);
var RewardsResult = type({
  pubkey: string(),
  lamports: number(),
  postBalance: nullable(number()),
  rewardType: nullable(string()),
  commission: optional(nullable(number()))
});
var GetBlockRpcResult = jsonRpcResult(nullable(type({
  blockhash: string(),
  previousBlockhash: string(),
  parentSlot: number(),
  transactions: array(type({
    transaction: ConfirmedTransactionResult,
    meta: nullable(ConfirmedTransactionMetaResult),
    version: optional(TransactionVersionStruct)
  })),
  rewards: optional(array(RewardsResult)),
  blockTime: nullable(number()),
  blockHeight: nullable(number())
})));
var GetNoneModeBlockRpcResult = jsonRpcResult(nullable(type({
  blockhash: string(),
  previousBlockhash: string(),
  parentSlot: number(),
  rewards: optional(array(RewardsResult)),
  blockTime: nullable(number()),
  blockHeight: nullable(number())
})));
var GetAccountsModeBlockRpcResult = jsonRpcResult(nullable(type({
  blockhash: string(),
  previousBlockhash: string(),
  parentSlot: number(),
  transactions: array(type({
    transaction: ConfirmedTransactionAccountsModeResult,
    meta: nullable(ConfirmedTransactionMetaResult),
    version: optional(TransactionVersionStruct)
  })),
  rewards: optional(array(RewardsResult)),
  blockTime: nullable(number()),
  blockHeight: nullable(number())
})));
var GetParsedBlockRpcResult = jsonRpcResult(nullable(type({
  blockhash: string(),
  previousBlockhash: string(),
  parentSlot: number(),
  transactions: array(type({
    transaction: ParsedConfirmedTransactionResult,
    meta: nullable(ParsedConfirmedTransactionMetaResult),
    version: optional(TransactionVersionStruct)
  })),
  rewards: optional(array(RewardsResult)),
  blockTime: nullable(number()),
  blockHeight: nullable(number())
})));
var GetParsedAccountsModeBlockRpcResult = jsonRpcResult(nullable(type({
  blockhash: string(),
  previousBlockhash: string(),
  parentSlot: number(),
  transactions: array(type({
    transaction: ConfirmedTransactionAccountsModeResult,
    meta: nullable(ParsedConfirmedTransactionMetaResult),
    version: optional(TransactionVersionStruct)
  })),
  rewards: optional(array(RewardsResult)),
  blockTime: nullable(number()),
  blockHeight: nullable(number())
})));
var GetParsedNoneModeBlockRpcResult = jsonRpcResult(nullable(type({
  blockhash: string(),
  previousBlockhash: string(),
  parentSlot: number(),
  rewards: optional(array(RewardsResult)),
  blockTime: nullable(number()),
  blockHeight: nullable(number())
})));
var GetConfirmedBlockRpcResult = jsonRpcResult(nullable(type({
  blockhash: string(),
  previousBlockhash: string(),
  parentSlot: number(),
  transactions: array(type({
    transaction: ConfirmedTransactionResult,
    meta: nullable(ConfirmedTransactionMetaResult)
  })),
  rewards: optional(array(RewardsResult)),
  blockTime: nullable(number())
})));
var GetBlockSignaturesRpcResult = jsonRpcResult(nullable(type({
  blockhash: string(),
  previousBlockhash: string(),
  parentSlot: number(),
  signatures: array(string()),
  blockTime: nullable(number())
})));
var GetTransactionRpcResult = jsonRpcResult(nullable(type({
  slot: number(),
  meta: nullable(ConfirmedTransactionMetaResult),
  blockTime: optional(nullable(number())),
  transaction: ConfirmedTransactionResult,
  version: optional(TransactionVersionStruct)
})));
var GetParsedTransactionRpcResult = jsonRpcResult(nullable(type({
  slot: number(),
  transaction: ParsedConfirmedTransactionResult,
  meta: nullable(ParsedConfirmedTransactionMetaResult),
  blockTime: optional(nullable(number())),
  version: optional(TransactionVersionStruct)
})));
var GetLatestBlockhashRpcResult = jsonRpcResultAndContext(type({
  blockhash: string(),
  lastValidBlockHeight: number()
}));
var IsBlockhashValidRpcResult = jsonRpcResultAndContext(boolean());
var PerfSampleResult = type({
  slot: number(),
  numTransactions: number(),
  numSlots: number(),
  samplePeriodSecs: number()
});
var GetRecentPerformanceSamplesRpcResult = jsonRpcResult(array(PerfSampleResult));
var GetFeeCalculatorRpcResult = jsonRpcResultAndContext(nullable(type({
  feeCalculator: type({
    lamportsPerSignature: number()
  })
})));
var RequestAirdropRpcResult = jsonRpcResult(string());
var SendTransactionRpcResult = jsonRpcResult(string());
var LogsResult = type({
  err: TransactionErrorResult,
  logs: array(string()),
  signature: string()
});
var LogsNotificationResult = type({
  result: notificationResultAndContext(LogsResult),
  subscription: number()
});
var COMMON_HTTP_HEADERS = {
  "solana-client": `js/${"1.0.0-maintenance"}`
};
var Connection = class {
  /**
   * Establish a JSON RPC connection
   *
   * @param endpoint URL to the fullnode JSON RPC endpoint
   * @param commitmentOrConfig optional default commitment level or optional ConnectionConfig configuration object
   */
  constructor(endpoint, _commitmentOrConfig) {
    this._commitment = void 0;
    this._confirmTransactionInitialTimeout = void 0;
    this._rpcEndpoint = void 0;
    this._rpcWsEndpoint = void 0;
    this._rpcClient = void 0;
    this._rpcRequest = void 0;
    this._rpcBatchRequest = void 0;
    this._rpcWebSocket = void 0;
    this._rpcWebSocketConnected = false;
    this._rpcWebSocketHeartbeat = null;
    this._rpcWebSocketIdleTimeout = null;
    this._rpcWebSocketGeneration = 0;
    this._disableBlockhashCaching = false;
    this._pollingBlockhash = false;
    this._blockhashInfo = {
      latestBlockhash: null,
      lastFetch: 0,
      transactionSignatures: [],
      simulatedSignatures: []
    };
    this._nextClientSubscriptionId = 0;
    this._subscriptionDisposeFunctionsByClientSubscriptionId = {};
    this._subscriptionHashByClientSubscriptionId = {};
    this._subscriptionStateChangeCallbacksByHash = {};
    this._subscriptionCallbacksByServerSubscriptionId = {};
    this._subscriptionsByHash = {};
    this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set();
    this.getBlockHeight = /* @__PURE__ */ (() => {
      const requestPromises = {};
      return async (commitmentOrConfig) => {
        const {
          commitment,
          config
        } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([], commitment, void 0, config);
        const requestHash = fastStableStringify(args);
        requestPromises[requestHash] = requestPromises[requestHash] ?? (async () => {
          try {
            const unsafeRes = await this._rpcRequest("getBlockHeight", args);
            const res = create(unsafeRes, jsonRpcResult(number()));
            if ("error" in res) {
              throw new SolanaJSONRPCError(res.error, "failed to get block height information");
            }
            return res.result;
          } finally {
            delete requestPromises[requestHash];
          }
        })();
        return await requestPromises[requestHash];
      };
    })();
    let wsEndpoint;
    let httpHeaders;
    let fetch;
    let fetchMiddleware;
    let disableRetryOnRateLimit;
    let httpAgent;
    if (_commitmentOrConfig && typeof _commitmentOrConfig === "string") {
      this._commitment = _commitmentOrConfig;
    } else if (_commitmentOrConfig) {
      this._commitment = _commitmentOrConfig.commitment;
      this._confirmTransactionInitialTimeout = _commitmentOrConfig.confirmTransactionInitialTimeout;
      wsEndpoint = _commitmentOrConfig.wsEndpoint;
      httpHeaders = _commitmentOrConfig.httpHeaders;
      fetch = _commitmentOrConfig.fetch;
      fetchMiddleware = _commitmentOrConfig.fetchMiddleware;
      disableRetryOnRateLimit = _commitmentOrConfig.disableRetryOnRateLimit;
      httpAgent = _commitmentOrConfig.httpAgent;
    }
    this._rpcEndpoint = assertEndpointUrl(endpoint);
    this._rpcWsEndpoint = wsEndpoint || makeWebsocketUrl(endpoint);
    this._rpcClient = createRpcClient(endpoint, httpHeaders, fetch, fetchMiddleware, disableRetryOnRateLimit, httpAgent);
    this._rpcRequest = createRpcRequest(this._rpcClient);
    this._rpcBatchRequest = createRpcBatchRequest(this._rpcClient);
    this._rpcWebSocket = new RpcWebSocketClient(this._rpcWsEndpoint, {
      autoconnect: false,
      max_reconnects: Infinity
    });
    this._rpcWebSocket.on("open", this._wsOnOpen.bind(this));
    this._rpcWebSocket.on("error", this._wsOnError.bind(this));
    this._rpcWebSocket.on("close", this._wsOnClose.bind(this));
    this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this));
    this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this));
    this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this));
    this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this));
    this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this));
    this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this));
    this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this));
  }
  /**
   * The default commitment used for requests
   */
  get commitment() {
    return this._commitment;
  }
  /**
   * The RPC endpoint
   */
  get rpcEndpoint() {
    return this._rpcEndpoint;
  }
  /**
   * Fetch the balance for the specified public key, return with context
   */
  async getBalanceAndContext(publicKey2, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([publicKey2.toBase58()], commitment, void 0, config);
    const unsafeRes = await this._rpcRequest("getBalance", args);
    const res = create(unsafeRes, jsonRpcResultAndContext(number()));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get balance for ${publicKey2.toBase58()}`);
    }
    return res.result;
  }
  /**
   * Fetch the balance for the specified public key
   */
  async getBalance(publicKey2, commitmentOrConfig) {
    return await this.getBalanceAndContext(publicKey2, commitmentOrConfig).then((x) => x.value).catch((e2) => {
      throw new Error("failed to get balance of account " + publicKey2.toBase58() + ": " + e2);
    });
  }
  /**
   * Fetch the estimated production time of a block
   */
  async getBlockTime(slot) {
    const unsafeRes = await this._rpcRequest("getBlockTime", [slot]);
    const res = create(unsafeRes, jsonRpcResult(nullable(number())));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get block time for slot ${slot}`);
    }
    return res.result;
  }
  /**
   * Fetch the lowest slot that the node has information about in its ledger.
   * This value may increase over time if the node is configured to purge older ledger data
   */
  async getMinimumLedgerSlot() {
    const unsafeRes = await this._rpcRequest("minimumLedgerSlot", []);
    const res = create(unsafeRes, jsonRpcResult(number()));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get minimum ledger slot");
    }
    return res.result;
  }
  /**
   * Fetch the slot of the lowest confirmed block that has not been purged from the ledger
   */
  async getFirstAvailableBlock() {
    const unsafeRes = await this._rpcRequest("getFirstAvailableBlock", []);
    const res = create(unsafeRes, SlotRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get first available block");
    }
    return res.result;
  }
  /**
   * Fetch information about the current supply
   */
  async getSupply(config) {
    let configArg = {};
    if (typeof config === "string") {
      configArg = {
        commitment: config
      };
    } else if (config) {
      configArg = {
        ...config,
        commitment: config && config.commitment || this.commitment
      };
    } else {
      configArg = {
        commitment: this.commitment
      };
    }
    const unsafeRes = await this._rpcRequest("getSupply", [configArg]);
    const res = create(unsafeRes, GetSupplyRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get supply");
    }
    return res.result;
  }
  /**
   * Fetch the current supply of a token mint
   */
  async getTokenSupply(tokenMintAddress, commitment) {
    const args = this._buildArgs([tokenMintAddress.toBase58()], commitment);
    const unsafeRes = await this._rpcRequest("getTokenSupply", args);
    const res = create(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get token supply");
    }
    return res.result;
  }
  /**
   * Fetch the current balance of a token account
   */
  async getTokenAccountBalance(tokenAddress, commitment) {
    const args = this._buildArgs([tokenAddress.toBase58()], commitment);
    const unsafeRes = await this._rpcRequest("getTokenAccountBalance", args);
    const res = create(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get token account balance");
    }
    return res.result;
  }
  /**
   * Fetch all the token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<GetProgramAccountsResponse>}
   */
  async getTokenAccountsByOwner(ownerAddress, filter, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    let _args = [ownerAddress.toBase58()];
    if ("mint" in filter) {
      _args.push({
        mint: filter.mint.toBase58()
      });
    } else {
      _args.push({
        programId: filter.programId.toBase58()
      });
    }
    const args = this._buildArgs(_args, commitment, "base64", config);
    const unsafeRes = await this._rpcRequest("getTokenAccountsByOwner", args);
    const res = create(unsafeRes, GetTokenAccountsByOwner);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get token accounts owned by account ${ownerAddress.toBase58()}`);
    }
    return res.result;
  }
  /**
   * Fetch parsed token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<ParsedAccountData>}>>>}
   */
  async getParsedTokenAccountsByOwner(ownerAddress, filter, commitment) {
    let _args = [ownerAddress.toBase58()];
    if ("mint" in filter) {
      _args.push({
        mint: filter.mint.toBase58()
      });
    } else {
      _args.push({
        programId: filter.programId.toBase58()
      });
    }
    const args = this._buildArgs(_args, commitment, "jsonParsed");
    const unsafeRes = await this._rpcRequest("getTokenAccountsByOwner", args);
    const res = create(unsafeRes, GetParsedTokenAccountsByOwner);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get token accounts owned by account ${ownerAddress.toBase58()}`);
    }
    return res.result;
  }
  /**
   * Fetch the 20 largest accounts with their current balances
   */
  async getLargestAccounts(config) {
    const arg = {
      ...config,
      commitment: config && config.commitment || this.commitment
    };
    const args = arg.filter || arg.commitment ? [arg] : [];
    const unsafeRes = await this._rpcRequest("getLargestAccounts", args);
    const res = create(unsafeRes, GetLargestAccountsRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get largest accounts");
    }
    return res.result;
  }
  /**
   * Fetch the 20 largest token accounts with their current balances
   * for a given mint.
   */
  async getTokenLargestAccounts(mintAddress, commitment) {
    const args = this._buildArgs([mintAddress.toBase58()], commitment);
    const unsafeRes = await this._rpcRequest("getTokenLargestAccounts", args);
    const res = create(unsafeRes, GetTokenLargestAccountsResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get token largest accounts");
    }
    return res.result;
  }
  /**
   * Fetch all the account info for the specified public key, return with context
   */
  async getAccountInfoAndContext(publicKey2, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([publicKey2.toBase58()], commitment, "base64", config);
    const unsafeRes = await this._rpcRequest("getAccountInfo", args);
    const res = create(unsafeRes, jsonRpcResultAndContext(nullable(AccountInfoResult)));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get info about account ${publicKey2.toBase58()}`);
    }
    return res.result;
  }
  /**
   * Fetch parsed account info for the specified public key
   */
  async getParsedAccountInfo(publicKey2, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([publicKey2.toBase58()], commitment, "jsonParsed", config);
    const unsafeRes = await this._rpcRequest("getAccountInfo", args);
    const res = create(unsafeRes, jsonRpcResultAndContext(nullable(ParsedAccountInfoResult)));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get info about account ${publicKey2.toBase58()}`);
    }
    return res.result;
  }
  /**
   * Fetch all the account info for the specified public key
   */
  async getAccountInfo(publicKey2, commitmentOrConfig) {
    try {
      const res = await this.getAccountInfoAndContext(publicKey2, commitmentOrConfig);
      return res.value;
    } catch (e2) {
      throw new Error("failed to get info about account " + publicKey2.toBase58() + ": " + e2);
    }
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleParsedAccounts(publicKeys, rawConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(rawConfig);
    const keys = publicKeys.map((key) => key.toBase58());
    const args = this._buildArgs([keys], commitment, "jsonParsed", config);
    const unsafeRes = await this._rpcRequest("getMultipleAccounts", args);
    const res = create(unsafeRes, jsonRpcResultAndContext(array(nullable(ParsedAccountInfoResult))));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get info for accounts ${keys}`);
    }
    return res.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleAccountsInfoAndContext(publicKeys, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const keys = publicKeys.map((key) => key.toBase58());
    const args = this._buildArgs([keys], commitment, "base64", config);
    const unsafeRes = await this._rpcRequest("getMultipleAccounts", args);
    const res = create(unsafeRes, jsonRpcResultAndContext(array(nullable(AccountInfoResult))));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get info for accounts ${keys}`);
    }
    return res.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys
   */
  async getMultipleAccountsInfo(publicKeys, commitmentOrConfig) {
    const res = await this.getMultipleAccountsInfoAndContext(publicKeys, commitmentOrConfig);
    return res.value;
  }
  /**
   * Returns epoch activation information for a stake account that has been delegated
   *
   * @deprecated Deprecated since RPC v1.18; will be removed in a future version.
   */
  async getStakeActivation(publicKey2, commitmentOrConfig, epoch) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([publicKey2.toBase58()], commitment, void 0, {
      ...config,
      epoch: epoch != null ? epoch : config?.epoch
    });
    const unsafeRes = await this._rpcRequest("getStakeActivation", args);
    const res = create(unsafeRes, jsonRpcResult(StakeActivationResult));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get Stake Activation ${publicKey2.toBase58()}`);
    }
    return res.result;
  }
  /**
   * Fetch all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>}
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async getProgramAccounts(programId, configOrCommitment) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(configOrCommitment);
    const {
      encoding,
      ...configWithoutEncoding
    } = config || {};
    const args = this._buildArgs([programId.toBase58()], commitment, encoding || "base64", {
      ...configWithoutEncoding,
      ...configWithoutEncoding.filters ? {
        filters: applyDefaultMemcmpEncodingToFilters(configWithoutEncoding.filters)
      } : null
    });
    const unsafeRes = await this._rpcRequest("getProgramAccounts", args);
    const baseSchema = array(KeyedAccountInfoResult);
    const res = configWithoutEncoding.withContext === true ? create(unsafeRes, jsonRpcResultAndContext(baseSchema)) : create(unsafeRes, jsonRpcResult(baseSchema));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get accounts owned by program ${programId.toBase58()}`);
    }
    return res.result;
  }
  /**
   * Fetch and parse all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer | ParsedAccountData>}>>}
   */
  async getParsedProgramAccounts(programId, configOrCommitment) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(configOrCommitment);
    const args = this._buildArgs([programId.toBase58()], commitment, "jsonParsed", config);
    const unsafeRes = await this._rpcRequest("getProgramAccounts", args);
    const res = create(unsafeRes, jsonRpcResult(array(KeyedParsedAccountInfoResult)));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get accounts owned by program ${programId.toBase58()}`);
    }
    return res.result;
  }
  /** @deprecated Instead, call `confirmTransaction` and pass in {@link TransactionConfirmationStrategy} */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async confirmTransaction(strategy, commitment) {
    let rawSignature;
    if (typeof strategy == "string") {
      rawSignature = strategy;
    } else {
      const config = strategy;
      if (config.abortSignal?.aborted) {
        return Promise.reject(config.abortSignal.reason);
      }
      rawSignature = config.signature;
    }
    let decodedSignature;
    try {
      decodedSignature = import_bs58.default.decode(rawSignature);
    } catch (err) {
      throw new Error("signature must be base58 encoded: " + rawSignature);
    }
    assert2(decodedSignature.length === 64, "signature has invalid length");
    if (typeof strategy === "string") {
      return await this.confirmTransactionUsingLegacyTimeoutStrategy({
        commitment: commitment || this.commitment,
        signature: rawSignature
      });
    } else if ("lastValidBlockHeight" in strategy) {
      return await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
        commitment: commitment || this.commitment,
        strategy
      });
    } else {
      return await this.confirmTransactionUsingDurableNonceStrategy({
        commitment: commitment || this.commitment,
        strategy
      });
    }
  }
  getCancellationPromise(signal) {
    return new Promise((_, reject) => {
      if (signal == null) {
        return;
      }
      if (signal.aborted) {
        reject(signal.reason);
      } else {
        signal.addEventListener("abort", () => {
          reject(signal.reason);
        });
      }
    });
  }
  getTransactionConfirmationPromise({
    commitment,
    signature: signature2
  }) {
    let signatureSubscriptionId;
    let disposeSignatureSubscriptionStateChangeObserver;
    let done = false;
    const confirmationPromise = new Promise((resolve, reject) => {
      try {
        signatureSubscriptionId = this.onSignature(signature2, (result, context) => {
          signatureSubscriptionId = void 0;
          const response = {
            context,
            value: result
          };
          resolve({
            __type: TransactionStatus.PROCESSED,
            response
          });
        }, commitment);
        const subscriptionSetupPromise = new Promise((resolveSubscriptionSetup) => {
          if (signatureSubscriptionId == null) {
            resolveSubscriptionSetup();
          } else {
            disposeSignatureSubscriptionStateChangeObserver = this._onSubscriptionStateChange(signatureSubscriptionId, (nextState) => {
              if (nextState === "subscribed") {
                resolveSubscriptionSetup();
              }
            });
          }
        });
        (async () => {
          await subscriptionSetupPromise;
          if (done) return;
          const response = await this.getSignatureStatus(signature2);
          if (done) return;
          if (response == null) {
            return;
          }
          const {
            context,
            value
          } = response;
          if (value == null) {
            return;
          }
          if (value?.err) {
            reject(value.err);
          } else {
            switch (commitment) {
              case "confirmed":
              case "single":
              case "singleGossip": {
                if (value.confirmationStatus === "processed") {
                  return;
                }
                break;
              }
              case "finalized":
              case "max":
              case "root": {
                if (value.confirmationStatus === "processed" || value.confirmationStatus === "confirmed") {
                  return;
                }
                break;
              }
              // exhaust enums to ensure full coverage
              case "processed":
              case "recent":
            }
            done = true;
            resolve({
              __type: TransactionStatus.PROCESSED,
              response: {
                context,
                value
              }
            });
          }
        })();
      } catch (err) {
        reject(err);
      }
    });
    const abortConfirmation = () => {
      if (disposeSignatureSubscriptionStateChangeObserver) {
        disposeSignatureSubscriptionStateChangeObserver();
        disposeSignatureSubscriptionStateChangeObserver = void 0;
      }
      if (signatureSubscriptionId != null) {
        this.removeSignatureListener(signatureSubscriptionId);
        signatureSubscriptionId = void 0;
      }
    };
    return {
      abortConfirmation,
      confirmationPromise
    };
  }
  async confirmTransactionUsingBlockHeightExceedanceStrategy({
    commitment,
    strategy: {
      abortSignal,
      lastValidBlockHeight,
      signature: signature2
    }
  }) {
    let done = false;
    const expiryPromise = new Promise((resolve) => {
      const checkBlockHeight = async () => {
        try {
          const blockHeight = await this.getBlockHeight(commitment);
          return blockHeight;
        } catch (_e) {
          return -1;
        }
      };
      (async () => {
        let currentBlockHeight = await checkBlockHeight();
        if (done) return;
        while (currentBlockHeight <= lastValidBlockHeight) {
          await sleep(1e3);
          if (done) return;
          currentBlockHeight = await checkBlockHeight();
          if (done) return;
        }
        resolve({
          __type: TransactionStatus.BLOCKHEIGHT_EXCEEDED
        });
      })();
    });
    const {
      abortConfirmation,
      confirmationPromise
    } = this.getTransactionConfirmationPromise({
      commitment,
      signature: signature2
    });
    const cancellationPromise = this.getCancellationPromise(abortSignal);
    let result;
    try {
      const outcome = await Promise.race([cancellationPromise, confirmationPromise, expiryPromise]);
      if (outcome.__type === TransactionStatus.PROCESSED) {
        result = outcome.response;
      } else {
        throw new TransactionExpiredBlockheightExceededError(signature2);
      }
    } finally {
      done = true;
      abortConfirmation();
    }
    return result;
  }
  async confirmTransactionUsingDurableNonceStrategy({
    commitment,
    strategy: {
      abortSignal,
      minContextSlot,
      nonceAccountPubkey,
      nonceValue,
      signature: signature2
    }
  }) {
    let done = false;
    const expiryPromise = new Promise((resolve) => {
      let currentNonceValue = nonceValue;
      let lastCheckedSlot = null;
      const getCurrentNonceValue = async () => {
        try {
          const {
            context,
            value: nonceAccount
          } = await this.getNonceAndContext(nonceAccountPubkey, {
            commitment,
            minContextSlot
          });
          lastCheckedSlot = context.slot;
          return nonceAccount?.nonce;
        } catch (e2) {
          return currentNonceValue;
        }
      };
      (async () => {
        currentNonceValue = await getCurrentNonceValue();
        if (done) return;
        while (true) {
          if (nonceValue !== currentNonceValue) {
            resolve({
              __type: TransactionStatus.NONCE_INVALID,
              slotInWhichNonceDidAdvance: lastCheckedSlot
            });
            return;
          }
          await sleep(2e3);
          if (done) return;
          currentNonceValue = await getCurrentNonceValue();
          if (done) return;
        }
      })();
    });
    const {
      abortConfirmation,
      confirmationPromise
    } = this.getTransactionConfirmationPromise({
      commitment,
      signature: signature2
    });
    const cancellationPromise = this.getCancellationPromise(abortSignal);
    let result;
    try {
      const outcome = await Promise.race([cancellationPromise, confirmationPromise, expiryPromise]);
      if (outcome.__type === TransactionStatus.PROCESSED) {
        result = outcome.response;
      } else {
        let signatureStatus;
        while (true) {
          const status = await this.getSignatureStatus(signature2);
          if (status == null) {
            break;
          }
          if (status.context.slot < (outcome.slotInWhichNonceDidAdvance ?? minContextSlot)) {
            await sleep(400);
            continue;
          }
          signatureStatus = status;
          break;
        }
        if (signatureStatus?.value) {
          const commitmentForStatus = commitment || "finalized";
          const {
            confirmationStatus
          } = signatureStatus.value;
          switch (commitmentForStatus) {
            case "processed":
            case "recent":
              if (confirmationStatus !== "processed" && confirmationStatus !== "confirmed" && confirmationStatus !== "finalized") {
                throw new TransactionExpiredNonceInvalidError(signature2);
              }
              break;
            case "confirmed":
            case "single":
            case "singleGossip":
              if (confirmationStatus !== "confirmed" && confirmationStatus !== "finalized") {
                throw new TransactionExpiredNonceInvalidError(signature2);
              }
              break;
            case "finalized":
            case "max":
            case "root":
              if (confirmationStatus !== "finalized") {
                throw new TransactionExpiredNonceInvalidError(signature2);
              }
              break;
            default:
              /* @__PURE__ */ ((_) => {
              })(commitmentForStatus);
          }
          result = {
            context: signatureStatus.context,
            value: {
              err: signatureStatus.value.err
            }
          };
        } else {
          throw new TransactionExpiredNonceInvalidError(signature2);
        }
      }
    } finally {
      done = true;
      abortConfirmation();
    }
    return result;
  }
  async confirmTransactionUsingLegacyTimeoutStrategy({
    commitment,
    signature: signature2
  }) {
    let timeoutId;
    const expiryPromise = new Promise((resolve) => {
      let timeoutMs = this._confirmTransactionInitialTimeout || 60 * 1e3;
      switch (commitment) {
        case "processed":
        case "recent":
        case "single":
        case "confirmed":
        case "singleGossip": {
          timeoutMs = this._confirmTransactionInitialTimeout || 30 * 1e3;
          break;
        }
      }
      timeoutId = setTimeout(() => resolve({
        __type: TransactionStatus.TIMED_OUT,
        timeoutMs
      }), timeoutMs);
    });
    const {
      abortConfirmation,
      confirmationPromise
    } = this.getTransactionConfirmationPromise({
      commitment,
      signature: signature2
    });
    let result;
    try {
      const outcome = await Promise.race([confirmationPromise, expiryPromise]);
      if (outcome.__type === TransactionStatus.PROCESSED) {
        result = outcome.response;
      } else {
        throw new TransactionExpiredTimeoutError(signature2, outcome.timeoutMs / 1e3);
      }
    } finally {
      clearTimeout(timeoutId);
      abortConfirmation();
    }
    return result;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getClusterNodes() {
    const unsafeRes = await this._rpcRequest("getClusterNodes", []);
    const res = create(unsafeRes, jsonRpcResult(array(ContactInfoResult)));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get cluster nodes");
    }
    return res.result;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getVoteAccounts(commitment) {
    const args = this._buildArgs([], commitment);
    const unsafeRes = await this._rpcRequest("getVoteAccounts", args);
    const res = create(unsafeRes, GetVoteAccounts);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get vote accounts");
    }
    return res.result;
  }
  /**
   * Fetch the current slot that the node is processing
   */
  async getSlot(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([], commitment, void 0, config);
    const unsafeRes = await this._rpcRequest("getSlot", args);
    const res = create(unsafeRes, jsonRpcResult(number()));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get slot");
    }
    return res.result;
  }
  /**
   * Fetch the current slot leader of the cluster
   */
  async getSlotLeader(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([], commitment, void 0, config);
    const unsafeRes = await this._rpcRequest("getSlotLeader", args);
    const res = create(unsafeRes, jsonRpcResult(string()));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get slot leader");
    }
    return res.result;
  }
  /**
   * Fetch `limit` number of slot leaders starting from `startSlot`
   *
   * @param startSlot fetch slot leaders starting from this slot
   * @param limit number of slot leaders to return
   */
  async getSlotLeaders(startSlot, limit) {
    const args = [startSlot, limit];
    const unsafeRes = await this._rpcRequest("getSlotLeaders", args);
    const res = create(unsafeRes, jsonRpcResult(array(PublicKeyFromString)));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get slot leaders");
    }
    return res.result;
  }
  /**
   * Fetch the current status of a signature
   */
  async getSignatureStatus(signature2, config) {
    const {
      context,
      value: values
    } = await this.getSignatureStatuses([signature2], config);
    assert2(values.length === 1);
    const value = values[0];
    return {
      context,
      value
    };
  }
  /**
   * Fetch the current statuses of a batch of signatures
   */
  async getSignatureStatuses(signatures, config) {
    const params = [signatures];
    if (config) {
      params.push(config);
    }
    const unsafeRes = await this._rpcRequest("getSignatureStatuses", params);
    const res = create(unsafeRes, GetSignatureStatusesRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get signature status");
    }
    return res.result;
  }
  /**
   * Fetch the current transaction count of the cluster
   */
  async getTransactionCount(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([], commitment, void 0, config);
    const unsafeRes = await this._rpcRequest("getTransactionCount", args);
    const res = create(unsafeRes, jsonRpcResult(number()));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get transaction count");
    }
    return res.result;
  }
  /**
   * Fetch the current total currency supply of the cluster in lamports
   *
   * @deprecated Deprecated since RPC v1.2.8. Please use {@link getSupply} instead.
   */
  async getTotalSupply(commitment) {
    const result = await this.getSupply({
      commitment,
      excludeNonCirculatingAccountsList: true
    });
    return result.value.total;
  }
  /**
   * Fetch the cluster InflationGovernor parameters
   */
  async getInflationGovernor(commitment) {
    const args = this._buildArgs([], commitment);
    const unsafeRes = await this._rpcRequest("getInflationGovernor", args);
    const res = create(unsafeRes, GetInflationGovernorRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get inflation");
    }
    return res.result;
  }
  /**
   * Fetch the inflation reward for a list of addresses for an epoch
   */
  async getInflationReward(addresses, epoch, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([addresses.map((pubkey) => pubkey.toBase58())], commitment, void 0, {
      ...config,
      epoch: epoch != null ? epoch : config?.epoch
    });
    const unsafeRes = await this._rpcRequest("getInflationReward", args);
    const res = create(unsafeRes, GetInflationRewardResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get inflation reward");
    }
    return res.result;
  }
  /**
   * Fetch the specific inflation values for the current epoch
   */
  async getInflationRate() {
    const unsafeRes = await this._rpcRequest("getInflationRate", []);
    const res = create(unsafeRes, GetInflationRateRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get inflation rate");
    }
    return res.result;
  }
  /**
   * Fetch the Epoch Info parameters
   */
  async getEpochInfo(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([], commitment, void 0, config);
    const unsafeRes = await this._rpcRequest("getEpochInfo", args);
    const res = create(unsafeRes, GetEpochInfoRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get epoch info");
    }
    return res.result;
  }
  /**
   * Fetch the Epoch Schedule parameters
   */
  async getEpochSchedule() {
    const unsafeRes = await this._rpcRequest("getEpochSchedule", []);
    const res = create(unsafeRes, GetEpochScheduleRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get epoch schedule");
    }
    const epochSchedule = res.result;
    return new EpochSchedule(epochSchedule.slotsPerEpoch, epochSchedule.leaderScheduleSlotOffset, epochSchedule.warmup, epochSchedule.firstNormalEpoch, epochSchedule.firstNormalSlot);
  }
  /**
   * Fetch the leader schedule for the current epoch
   * @return {Promise<RpcResponseAndContext<LeaderSchedule>>}
   */
  async getLeaderSchedule() {
    const unsafeRes = await this._rpcRequest("getLeaderSchedule", []);
    const res = create(unsafeRes, GetLeaderScheduleRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get leader schedule");
    }
    return res.result;
  }
  /**
   * Fetch the minimum balance needed to exempt an account of `dataLength`
   * size from rent
   */
  async getMinimumBalanceForRentExemption(dataLength, commitment) {
    const args = this._buildArgs([dataLength], commitment);
    const unsafeRes = await this._rpcRequest("getMinimumBalanceForRentExemption", args);
    const res = create(unsafeRes, GetMinimumBalanceForRentExemptionRpcResult);
    if ("error" in res) {
      console.warn("Unable to fetch minimum balance for rent exemption");
      return 0;
    }
    return res.result;
  }
  /**
   * Fetch a recent blockhash from the cluster, return with context
   * @return {Promise<RpcResponseAndContext<{blockhash: Blockhash, feeCalculator: FeeCalculator}>>}
   *
   * @deprecated Deprecated since RPC v1.9.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhashAndContext(commitment) {
    const {
      context,
      value: {
        blockhash
      }
    } = await this.getLatestBlockhashAndContext(commitment);
    const feeCalculator = {
      get lamportsPerSignature() {
        throw new Error("The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message.");
      },
      toJSON() {
        return {};
      }
    };
    return {
      context,
      value: {
        blockhash,
        feeCalculator
      }
    };
  }
  /**
   * Fetch recent performance samples
   * @return {Promise<Array<PerfSample>>}
   */
  async getRecentPerformanceSamples(limit) {
    const unsafeRes = await this._rpcRequest("getRecentPerformanceSamples", limit ? [limit] : []);
    const res = create(unsafeRes, GetRecentPerformanceSamplesRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get recent performance samples");
    }
    return res.result;
  }
  /**
   * Fetch the fee calculator for a recent blockhash from the cluster, return with context
   *
   * @deprecated Deprecated since RPC v1.9.0. Please use {@link getFeeForMessage} instead.
   */
  async getFeeCalculatorForBlockhash(blockhash, commitment) {
    const args = this._buildArgs([blockhash], commitment);
    const unsafeRes = await this._rpcRequest("getFeeCalculatorForBlockhash", args);
    const res = create(unsafeRes, GetFeeCalculatorRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get fee calculator");
    }
    const {
      context,
      value
    } = res.result;
    return {
      context,
      value: value !== null ? value.feeCalculator : null
    };
  }
  /**
   * Fetch the fee for a message from the cluster, return with context
   */
  async getFeeForMessage(message, commitment) {
    const wireMessage = toBuffer(message.serialize()).toString("base64");
    const args = this._buildArgs([wireMessage], commitment);
    const unsafeRes = await this._rpcRequest("getFeeForMessage", args);
    const res = create(unsafeRes, jsonRpcResultAndContext(nullable(number())));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get fee for message");
    }
    if (res.result === null) {
      throw new Error("invalid blockhash");
    }
    return res.result;
  }
  /**
   * Fetch a list of prioritization fees from recent blocks.
   */
  async getRecentPrioritizationFees(config) {
    const accounts = config?.lockedWritableAccounts?.map((key) => key.toBase58());
    const args = accounts?.length ? [accounts] : [];
    const unsafeRes = await this._rpcRequest("getRecentPrioritizationFees", args);
    const res = create(unsafeRes, GetRecentPrioritizationFeesRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get recent prioritization fees");
    }
    return res.result;
  }
  /**
   * Fetch a recent blockhash from the cluster
   * @return {Promise<{blockhash: Blockhash, feeCalculator: FeeCalculator}>}
   *
   * @deprecated Deprecated since RPC v1.8.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhash(commitment) {
    try {
      const res = await this.getRecentBlockhashAndContext(commitment);
      return res.value;
    } catch (e2) {
      throw new Error("failed to get recent blockhash: " + e2);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhash(commitmentOrConfig) {
    try {
      const res = await this.getLatestBlockhashAndContext(commitmentOrConfig);
      return res.value;
    } catch (e2) {
      throw new Error("failed to get recent blockhash: " + e2);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhashAndContext(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([], commitment, void 0, config);
    const unsafeRes = await this._rpcRequest("getLatestBlockhash", args);
    const res = create(unsafeRes, GetLatestBlockhashRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get latest blockhash");
    }
    return res.result;
  }
  /**
   * Returns whether a blockhash is still valid or not
   */
  async isBlockhashValid(blockhash, rawConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(rawConfig);
    const args = this._buildArgs([blockhash], commitment, void 0, config);
    const unsafeRes = await this._rpcRequest("isBlockhashValid", args);
    const res = create(unsafeRes, IsBlockhashValidRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to determine if the blockhash `" + blockhash + "`is valid");
    }
    return res.result;
  }
  /**
   * Fetch the node version
   */
  async getVersion() {
    const unsafeRes = await this._rpcRequest("getVersion", []);
    const res = create(unsafeRes, jsonRpcResult(VersionResult));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get version");
    }
    return res.result;
  }
  /**
   * Fetch the genesis hash
   */
  async getGenesisHash() {
    const unsafeRes = await this._rpcRequest("getGenesisHash", []);
    const res = create(unsafeRes, jsonRpcResult(string()));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get genesis hash");
    }
    return res.result;
  }
  /**
   * Fetch a processed block from the cluster.
   *
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  /**
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a processed block from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a processed block from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getBlock(slot, rawConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(rawConfig);
    const args = this._buildArgsAtLeastConfirmed([slot], commitment, void 0, config);
    const unsafeRes = await this._rpcRequest("getBlock", args);
    try {
      switch (config?.transactionDetails) {
        case "accounts": {
          const res = create(unsafeRes, GetAccountsModeBlockRpcResult);
          if ("error" in res) {
            throw res.error;
          }
          return res.result;
        }
        case "none": {
          const res = create(unsafeRes, GetNoneModeBlockRpcResult);
          if ("error" in res) {
            throw res.error;
          }
          return res.result;
        }
        default: {
          const res = create(unsafeRes, GetBlockRpcResult);
          if ("error" in res) {
            throw res.error;
          }
          const {
            result
          } = res;
          return result ? {
            ...result,
            transactions: result.transactions.map(({
              transaction,
              meta,
              version
            }) => ({
              meta,
              transaction: {
                ...transaction,
                message: versionedMessageFromResponse(version, transaction.message)
              },
              version
            }))
          } : null;
        }
      }
    } catch (e2) {
      throw new SolanaJSONRPCError(e2, "failed to get confirmed block");
    }
  }
  /**
   * Fetch parsed transaction details for a confirmed or finalized block
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async getParsedBlock(slot, rawConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(rawConfig);
    const args = this._buildArgsAtLeastConfirmed([slot], commitment, "jsonParsed", config);
    const unsafeRes = await this._rpcRequest("getBlock", args);
    try {
      switch (config?.transactionDetails) {
        case "accounts": {
          const res = create(unsafeRes, GetParsedAccountsModeBlockRpcResult);
          if ("error" in res) {
            throw res.error;
          }
          return res.result;
        }
        case "none": {
          const res = create(unsafeRes, GetParsedNoneModeBlockRpcResult);
          if ("error" in res) {
            throw res.error;
          }
          return res.result;
        }
        default: {
          const res = create(unsafeRes, GetParsedBlockRpcResult);
          if ("error" in res) {
            throw res.error;
          }
          return res.result;
        }
      }
    } catch (e2) {
      throw new SolanaJSONRPCError(e2, "failed to get block");
    }
  }
  /*
   * Returns recent block production information from the current or previous epoch
   */
  async getBlockProduction(configOrCommitment) {
    let extra;
    let commitment;
    if (typeof configOrCommitment === "string") {
      commitment = configOrCommitment;
    } else if (configOrCommitment) {
      const {
        commitment: c,
        ...rest
      } = configOrCommitment;
      commitment = c;
      extra = rest;
    }
    const args = this._buildArgs([], commitment, "base64", extra);
    const unsafeRes = await this._rpcRequest("getBlockProduction", args);
    const res = create(unsafeRes, BlockProductionResponseStruct);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get block production information");
    }
    return res.result;
  }
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   *
   * @deprecated Instead, call `getTransaction` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getTransaction(signature2, rawConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(rawConfig);
    const args = this._buildArgsAtLeastConfirmed([signature2], commitment, void 0, config);
    const unsafeRes = await this._rpcRequest("getTransaction", args);
    const res = create(unsafeRes, GetTransactionRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get transaction");
    }
    const result = res.result;
    if (!result) return result;
    return {
      ...result,
      transaction: {
        ...result.transaction,
        message: versionedMessageFromResponse(result.version, result.transaction.message)
      }
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed or finalized transaction
   */
  async getParsedTransaction(signature2, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgsAtLeastConfirmed([signature2], commitment, "jsonParsed", config);
    const unsafeRes = await this._rpcRequest("getTransaction", args);
    const res = create(unsafeRes, GetParsedTransactionRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get transaction");
    }
    return res.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   */
  async getParsedTransactions(signatures, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const batch = signatures.map((signature2) => {
      const args = this._buildArgsAtLeastConfirmed([signature2], commitment, "jsonParsed", config);
      return {
        methodName: "getTransaction",
        args
      };
    });
    const unsafeRes = await this._rpcBatchRequest(batch);
    const res = unsafeRes.map((unsafeRes2) => {
      const res2 = create(unsafeRes2, GetParsedTransactionRpcResult);
      if ("error" in res2) {
        throw new SolanaJSONRPCError(res2.error, "failed to get transactions");
      }
      return res2.result;
    });
    return res;
  }
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link TransactionResponse}.
   *
   * @deprecated Instead, call `getTransactions` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link
   * VersionedTransactionResponse}.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link
   * VersionedTransactionResponse}.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getTransactions(signatures, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const batch = signatures.map((signature2) => {
      const args = this._buildArgsAtLeastConfirmed([signature2], commitment, void 0, config);
      return {
        methodName: "getTransaction",
        args
      };
    });
    const unsafeRes = await this._rpcBatchRequest(batch);
    const res = unsafeRes.map((unsafeRes2) => {
      const res2 = create(unsafeRes2, GetTransactionRpcResult);
      if ("error" in res2) {
        throw new SolanaJSONRPCError(res2.error, "failed to get transactions");
      }
      const result = res2.result;
      if (!result) return result;
      return {
        ...result,
        transaction: {
          ...result.transaction,
          message: versionedMessageFromResponse(result.version, result.transaction.message)
        }
      };
    });
    return res;
  }
  /**
   * Fetch a list of Transactions and transaction statuses from the cluster
   * for a confirmed block.
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getBlock} instead.
   */
  async getConfirmedBlock(slot, commitment) {
    const args = this._buildArgsAtLeastConfirmed([slot], commitment);
    const unsafeRes = await this._rpcRequest("getBlock", args);
    const res = create(unsafeRes, GetConfirmedBlockRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get confirmed block");
    }
    const result = res.result;
    if (!result) {
      throw new Error("Confirmed block " + slot + " not found");
    }
    const block = {
      ...result,
      transactions: result.transactions.map(({
        transaction,
        meta
      }) => {
        const message = new Message(transaction.message);
        return {
          meta,
          transaction: {
            ...transaction,
            message
          }
        };
      })
    };
    return {
      ...block,
      transactions: block.transactions.map(({
        transaction,
        meta
      }) => {
        return {
          meta,
          transaction: Transaction.populate(transaction.message, transaction.signatures)
        };
      })
    };
  }
  /**
   * Fetch confirmed blocks between two slots
   */
  async getBlocks(startSlot, endSlot, commitment) {
    const args = this._buildArgsAtLeastConfirmed(endSlot !== void 0 ? [startSlot, endSlot] : [startSlot], commitment);
    const unsafeRes = await this._rpcRequest("getBlocks", args);
    const res = create(unsafeRes, jsonRpcResult(array(number())));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get blocks");
    }
    return res.result;
  }
  /**
   * Fetch a list of Signatures from the cluster for a block, excluding rewards
   */
  async getBlockSignatures(slot, commitment) {
    const args = this._buildArgsAtLeastConfirmed([slot], commitment, void 0, {
      transactionDetails: "signatures",
      rewards: false
    });
    const unsafeRes = await this._rpcRequest("getBlock", args);
    const res = create(unsafeRes, GetBlockSignaturesRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get block");
    }
    const result = res.result;
    if (!result) {
      throw new Error("Block " + slot + " not found");
    }
    return result;
  }
  /**
   * Fetch a list of Signatures from the cluster for a confirmed block, excluding rewards
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getBlockSignatures} instead.
   */
  async getConfirmedBlockSignatures(slot, commitment) {
    const args = this._buildArgsAtLeastConfirmed([slot], commitment, void 0, {
      transactionDetails: "signatures",
      rewards: false
    });
    const unsafeRes = await this._rpcRequest("getBlock", args);
    const res = create(unsafeRes, GetBlockSignaturesRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get confirmed block");
    }
    const result = res.result;
    if (!result) {
      throw new Error("Confirmed block " + slot + " not found");
    }
    return result;
  }
  /**
   * Fetch a transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getTransaction} instead.
   */
  async getConfirmedTransaction(signature2, commitment) {
    const args = this._buildArgsAtLeastConfirmed([signature2], commitment);
    const unsafeRes = await this._rpcRequest("getTransaction", args);
    const res = create(unsafeRes, GetTransactionRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get transaction");
    }
    const result = res.result;
    if (!result) return result;
    const message = new Message(result.transaction.message);
    const signatures = result.transaction.signatures;
    return {
      ...result,
      transaction: Transaction.populate(message, signatures)
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getParsedTransaction} instead.
   */
  async getParsedConfirmedTransaction(signature2, commitment) {
    const args = this._buildArgsAtLeastConfirmed([signature2], commitment, "jsonParsed");
    const unsafeRes = await this._rpcRequest("getTransaction", args);
    const res = create(unsafeRes, GetParsedTransactionRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get confirmed transaction");
    }
    return res.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getParsedTransactions} instead.
   */
  async getParsedConfirmedTransactions(signatures, commitment) {
    const batch = signatures.map((signature2) => {
      const args = this._buildArgsAtLeastConfirmed([signature2], commitment, "jsonParsed");
      return {
        methodName: "getTransaction",
        args
      };
    });
    const unsafeRes = await this._rpcBatchRequest(batch);
    const res = unsafeRes.map((unsafeRes2) => {
      const res2 = create(unsafeRes2, GetParsedTransactionRpcResult);
      if ("error" in res2) {
        throw new SolanaJSONRPCError(res2.error, "failed to get confirmed transactions");
      }
      return res2.result;
    });
    return res;
  }
  /**
   * Fetch a list of all the confirmed signatures for transactions involving an address
   * within a specified slot range. Max range allowed is 10,000 slots.
   *
   * @deprecated Deprecated since RPC v1.3. Please use {@link getConfirmedSignaturesForAddress2} instead.
   *
   * @param address queried address
   * @param startSlot start slot, inclusive
   * @param endSlot end slot, inclusive
   */
  async getConfirmedSignaturesForAddress(address, startSlot, endSlot) {
    let options = {};
    let firstAvailableBlock = await this.getFirstAvailableBlock();
    while (!("until" in options)) {
      startSlot--;
      if (startSlot <= 0 || startSlot < firstAvailableBlock) {
        break;
      }
      try {
        const block = await this.getConfirmedBlockSignatures(startSlot, "finalized");
        if (block.signatures.length > 0) {
          options.until = block.signatures[block.signatures.length - 1].toString();
        }
      } catch (err) {
        if (err instanceof Error && err.message.includes("skipped")) {
          continue;
        } else {
          throw err;
        }
      }
    }
    let highestConfirmedRoot = await this.getSlot("finalized");
    while (!("before" in options)) {
      endSlot++;
      if (endSlot > highestConfirmedRoot) {
        break;
      }
      try {
        const block = await this.getConfirmedBlockSignatures(endSlot);
        if (block.signatures.length > 0) {
          options.before = block.signatures[block.signatures.length - 1].toString();
        }
      } catch (err) {
        if (err instanceof Error && err.message.includes("skipped")) {
          continue;
        } else {
          throw err;
        }
      }
    }
    const confirmedSignatureInfo = await this.getConfirmedSignaturesForAddress2(address, options);
    return confirmedSignatureInfo.map((info) => info.signature);
  }
  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getSignaturesForAddress} instead.
   */
  async getConfirmedSignaturesForAddress2(address, options, commitment) {
    const args = this._buildArgsAtLeastConfirmed([address.toBase58()], commitment, void 0, options);
    const unsafeRes = await this._rpcRequest("getConfirmedSignaturesForAddress2", args);
    const res = create(unsafeRes, GetConfirmedSignaturesForAddress2RpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get confirmed signatures for address");
    }
    return res.result;
  }
  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */
  async getSignaturesForAddress(address, options, commitment) {
    const args = this._buildArgsAtLeastConfirmed([address.toBase58()], commitment, void 0, options);
    const unsafeRes = await this._rpcRequest("getSignaturesForAddress", args);
    const res = create(unsafeRes, GetSignaturesForAddressRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, "failed to get signatures for address");
    }
    return res.result;
  }
  async getAddressLookupTable(accountKey, config) {
    const {
      context,
      value: accountInfo
    } = await this.getAccountInfoAndContext(accountKey, config);
    let value = null;
    if (accountInfo !== null) {
      value = new AddressLookupTableAccount({
        key: accountKey,
        state: AddressLookupTableAccount.deserialize(accountInfo.data)
      });
    }
    return {
      context,
      value
    };
  }
  /**
   * Fetch the contents of a Nonce account from the cluster, return with context
   */
  async getNonceAndContext(nonceAccount, commitmentOrConfig) {
    const {
      context,
      value: accountInfo
    } = await this.getAccountInfoAndContext(nonceAccount, commitmentOrConfig);
    let value = null;
    if (accountInfo !== null) {
      value = NonceAccount.fromAccountData(accountInfo.data);
    }
    return {
      context,
      value
    };
  }
  /**
   * Fetch the contents of a Nonce account from the cluster
   */
  async getNonce(nonceAccount, commitmentOrConfig) {
    return await this.getNonceAndContext(nonceAccount, commitmentOrConfig).then((x) => x.value).catch((e2) => {
      throw new Error("failed to get nonce for account " + nonceAccount.toBase58() + ": " + e2);
    });
  }
  /**
   * Request an allocation of lamports to the specified address
   *
   * ```typescript
   * import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
   *
   * (async () => {
   *   const connection = new Connection("https://api.testnet.solana.com", "confirmed");
   *   const myAddress = new PublicKey("2nr1bHFT86W9tGnyvmYW4vcHKsQB3sVQfnddasz4kExM");
   *   const signature = await connection.requestAirdrop(myAddress, LAMPORTS_PER_SOL);
   *   await connection.confirmTransaction(signature);
   * })();
   * ```
   */
  async requestAirdrop(to, lamports) {
    const unsafeRes = await this._rpcRequest("requestAirdrop", [to.toBase58(), lamports]);
    const res = create(unsafeRes, RequestAirdropRpcResult);
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `airdrop to ${to.toBase58()} failed`);
    }
    return res.result;
  }
  /**
   * @internal
   */
  async _blockhashWithExpiryBlockHeight(disableCache) {
    if (!disableCache) {
      while (this._pollingBlockhash) {
        await sleep(100);
      }
      const timeSinceFetch = Date.now() - this._blockhashInfo.lastFetch;
      const expired = timeSinceFetch >= BLOCKHASH_CACHE_TIMEOUT_MS;
      if (this._blockhashInfo.latestBlockhash !== null && !expired) {
        return this._blockhashInfo.latestBlockhash;
      }
    }
    return await this._pollNewBlockhash();
  }
  /**
   * @internal
   */
  async _pollNewBlockhash() {
    this._pollingBlockhash = true;
    try {
      const startTime = Date.now();
      const cachedLatestBlockhash = this._blockhashInfo.latestBlockhash;
      const cachedBlockhash = cachedLatestBlockhash ? cachedLatestBlockhash.blockhash : null;
      for (let i = 0; i < 50; i++) {
        const latestBlockhash = await this.getLatestBlockhash("finalized");
        if (cachedBlockhash !== latestBlockhash.blockhash) {
          this._blockhashInfo = {
            latestBlockhash,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          };
          return latestBlockhash;
        }
        await sleep(MS_PER_SLOT / 2);
      }
      throw new Error(`Unable to obtain a new blockhash after ${Date.now() - startTime}ms`);
    } finally {
      this._pollingBlockhash = false;
    }
  }
  /**
   * get the stake minimum delegation
   */
  async getStakeMinimumDelegation(config) {
    const {
      commitment,
      config: configArg
    } = extractCommitmentFromConfig(config);
    const args = this._buildArgs([], commitment, "base64", configArg);
    const unsafeRes = await this._rpcRequest("getStakeMinimumDelegation", args);
    const res = create(unsafeRes, jsonRpcResultAndContext(number()));
    if ("error" in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get stake minimum delegation`);
    }
    return res.result;
  }
  /**
   * Simulate a transaction
   *
   * @deprecated Instead, call {@link simulateTransaction} with {@link
   * VersionedTransaction} and {@link SimulateTransactionConfig} parameters
   */
  /**
   * Simulate a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Simulate a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  async simulateTransaction(transactionOrMessage, configOrSigners, includeAccounts) {
    if ("message" in transactionOrMessage) {
      const versionedTx = transactionOrMessage;
      const wireTransaction2 = versionedTx.serialize();
      const encodedTransaction2 = import_buffer2.Buffer.from(wireTransaction2).toString("base64");
      if (Array.isArray(configOrSigners) || includeAccounts !== void 0) {
        throw new Error("Invalid arguments");
      }
      const config2 = configOrSigners || {};
      config2.encoding = "base64";
      if (!("commitment" in config2)) {
        config2.commitment = this.commitment;
      }
      if (configOrSigners && typeof configOrSigners === "object" && "innerInstructions" in configOrSigners) {
        config2.innerInstructions = configOrSigners.innerInstructions;
      }
      const args2 = [encodedTransaction2, config2];
      const unsafeRes2 = await this._rpcRequest("simulateTransaction", args2);
      const res2 = create(unsafeRes2, SimulatedTransactionResponseStruct);
      if ("error" in res2) {
        throw new Error("failed to simulate transaction: " + res2.error.message);
      }
      return res2.result;
    }
    let transaction;
    if (transactionOrMessage instanceof Transaction) {
      let originalTx = transactionOrMessage;
      transaction = new Transaction();
      transaction.feePayer = originalTx.feePayer;
      transaction.instructions = transactionOrMessage.instructions;
      transaction.nonceInfo = originalTx.nonceInfo;
      transaction.signatures = originalTx.signatures;
    } else {
      transaction = Transaction.populate(transactionOrMessage);
      transaction._message = transaction._json = void 0;
    }
    if (configOrSigners !== void 0 && !Array.isArray(configOrSigners)) {
      throw new Error("Invalid arguments");
    }
    const signers = configOrSigners;
    if (transaction.nonceInfo && signers) {
      transaction.sign(...signers);
    } else {
      let disableCache = this._disableBlockhashCaching;
      for (; ; ) {
        const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
        transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
        transaction.recentBlockhash = latestBlockhash.blockhash;
        if (!signers) break;
        transaction.sign(...signers);
        if (!transaction.signature) {
          throw new Error("!signature");
        }
        const signature2 = transaction.signature.toString("base64");
        if (!this._blockhashInfo.simulatedSignatures.includes(signature2) && !this._blockhashInfo.transactionSignatures.includes(signature2)) {
          this._blockhashInfo.simulatedSignatures.push(signature2);
          break;
        } else {
          disableCache = true;
        }
      }
    }
    const message = transaction._compile();
    const signData = message.serialize();
    const wireTransaction = transaction._serialize(signData);
    const encodedTransaction = wireTransaction.toString("base64");
    const config = {
      encoding: "base64",
      commitment: this.commitment
    };
    if (includeAccounts) {
      const addresses = (Array.isArray(includeAccounts) ? includeAccounts : message.nonProgramIds()).map((key) => key.toBase58());
      config["accounts"] = {
        encoding: "base64",
        addresses
      };
    }
    if (signers) {
      config.sigVerify = true;
    }
    if (configOrSigners && typeof configOrSigners === "object" && "innerInstructions" in configOrSigners) {
      config.innerInstructions = configOrSigners.innerInstructions;
    }
    const args = [encodedTransaction, config];
    const unsafeRes = await this._rpcRequest("simulateTransaction", args);
    const res = create(unsafeRes, SimulatedTransactionResponseStruct);
    if ("error" in res) {
      let logs;
      if ("data" in res.error) {
        logs = res.error.data.logs;
        if (logs && Array.isArray(logs)) {
          const traceIndent = "\n    ";
          const logTrace = traceIndent + logs.join(traceIndent);
          console.error(res.error.message, logTrace);
        }
      }
      throw new SendTransactionError({
        action: "simulate",
        signature: "",
        transactionMessage: res.error.message,
        logs
      });
    }
    return res.result;
  }
  /**
   * Sign and send a transaction
   *
   * @deprecated Instead, call {@link sendTransaction} with a {@link
   * VersionedTransaction}
   */
  /**
   * Send a signed transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Sign and send a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  async sendTransaction(transaction, signersOrOptions, options) {
    if ("version" in transaction) {
      if (signersOrOptions && Array.isArray(signersOrOptions)) {
        throw new Error("Invalid arguments");
      }
      const wireTransaction2 = transaction.serialize();
      return await this.sendRawTransaction(wireTransaction2, signersOrOptions);
    }
    if (signersOrOptions === void 0 || !Array.isArray(signersOrOptions)) {
      throw new Error("Invalid arguments");
    }
    const signers = signersOrOptions;
    if (transaction.nonceInfo) {
      transaction.sign(...signers);
    } else {
      let disableCache = this._disableBlockhashCaching;
      for (; ; ) {
        const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
        transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
        transaction.recentBlockhash = latestBlockhash.blockhash;
        transaction.sign(...signers);
        if (!transaction.signature) {
          throw new Error("!signature");
        }
        const signature2 = transaction.signature.toString("base64");
        if (!this._blockhashInfo.transactionSignatures.includes(signature2)) {
          this._blockhashInfo.transactionSignatures.push(signature2);
          break;
        } else {
          disableCache = true;
        }
      }
    }
    const wireTransaction = transaction.serialize();
    return await this.sendRawTransaction(wireTransaction, options);
  }
  /**
   * Send a transaction that has already been signed and serialized into the
   * wire format
   */
  async sendRawTransaction(rawTransaction, options) {
    const encodedTransaction = toBuffer(rawTransaction).toString("base64");
    const result = await this.sendEncodedTransaction(encodedTransaction, options);
    return result;
  }
  /**
   * Send a transaction that has already been signed, serialized into the
   * wire format, and encoded as a base64 string
   */
  async sendEncodedTransaction(encodedTransaction, options) {
    const config = {
      encoding: "base64"
    };
    const skipPreflight = options && options.skipPreflight;
    const preflightCommitment = skipPreflight === true ? "processed" : options && options.preflightCommitment || this.commitment;
    if (options && options.maxRetries != null) {
      config.maxRetries = options.maxRetries;
    }
    if (options && options.minContextSlot != null) {
      config.minContextSlot = options.minContextSlot;
    }
    if (skipPreflight) {
      config.skipPreflight = skipPreflight;
    }
    if (preflightCommitment) {
      config.preflightCommitment = preflightCommitment;
    }
    const args = [encodedTransaction, config];
    const unsafeRes = await this._rpcRequest("sendTransaction", args);
    const res = create(unsafeRes, SendTransactionRpcResult);
    if ("error" in res) {
      let logs = void 0;
      if ("data" in res.error) {
        logs = res.error.data.logs;
      }
      throw new SendTransactionError({
        action: skipPreflight ? "send" : "simulate",
        signature: "",
        transactionMessage: res.error.message,
        logs
      });
    }
    return res.result;
  }
  /**
   * @internal
   */
  _wsOnOpen() {
    this._rpcWebSocketConnected = true;
    this._rpcWebSocketHeartbeat = setInterval(() => {
      (async () => {
        try {
          await this._rpcWebSocket.notify("ping");
        } catch {
        }
      })();
    }, 5e3);
    this._updateSubscriptions();
  }
  /**
   * @internal
   */
  _wsOnError(err) {
    this._rpcWebSocketConnected = false;
    console.error("ws error:", err.message);
  }
  /**
   * @internal
   */
  _wsOnClose(code) {
    this._rpcWebSocketConnected = false;
    this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER;
    if (this._rpcWebSocketIdleTimeout) {
      clearTimeout(this._rpcWebSocketIdleTimeout);
      this._rpcWebSocketIdleTimeout = null;
    }
    if (this._rpcWebSocketHeartbeat) {
      clearInterval(this._rpcWebSocketHeartbeat);
      this._rpcWebSocketHeartbeat = null;
    }
    if (code === 1e3) {
      this._updateSubscriptions();
      return;
    }
    this._subscriptionCallbacksByServerSubscriptionId = {};
    Object.entries(this._subscriptionsByHash).forEach(([hash, subscription]) => {
      this._setSubscription(hash, {
        ...subscription,
        state: "pending"
      });
    });
  }
  /**
   * @internal
   */
  _setSubscription(hash, nextSubscription) {
    const prevState = this._subscriptionsByHash[hash]?.state;
    this._subscriptionsByHash[hash] = nextSubscription;
    if (prevState !== nextSubscription.state) {
      const stateChangeCallbacks = this._subscriptionStateChangeCallbacksByHash[hash];
      if (stateChangeCallbacks) {
        stateChangeCallbacks.forEach((cb) => {
          try {
            cb(nextSubscription.state);
          } catch {
          }
        });
      }
    }
  }
  /**
   * @internal
   */
  _onSubscriptionStateChange(clientSubscriptionId, callback) {
    const hash = this._subscriptionHashByClientSubscriptionId[clientSubscriptionId];
    if (hash == null) {
      return () => {
      };
    }
    const stateChangeCallbacks = this._subscriptionStateChangeCallbacksByHash[hash] ||= /* @__PURE__ */ new Set();
    stateChangeCallbacks.add(callback);
    return () => {
      stateChangeCallbacks.delete(callback);
      if (stateChangeCallbacks.size === 0) {
        delete this._subscriptionStateChangeCallbacksByHash[hash];
      }
    };
  }
  /**
   * @internal
   */
  async _updateSubscriptions() {
    if (Object.keys(this._subscriptionsByHash).length === 0) {
      if (this._rpcWebSocketConnected) {
        this._rpcWebSocketConnected = false;
        this._rpcWebSocketIdleTimeout = setTimeout(() => {
          this._rpcWebSocketIdleTimeout = null;
          try {
            this._rpcWebSocket.close();
          } catch (err) {
            if (err instanceof Error) {
              console.log(`Error when closing socket connection: ${err.message}`);
            }
          }
        }, 500);
      }
      return;
    }
    if (this._rpcWebSocketIdleTimeout !== null) {
      clearTimeout(this._rpcWebSocketIdleTimeout);
      this._rpcWebSocketIdleTimeout = null;
      this._rpcWebSocketConnected = true;
    }
    if (!this._rpcWebSocketConnected) {
      this._rpcWebSocket.connect();
      return;
    }
    const activeWebSocketGeneration = this._rpcWebSocketGeneration;
    const isCurrentConnectionStillActive = () => {
      return activeWebSocketGeneration === this._rpcWebSocketGeneration;
    };
    await Promise.all(
      // Don't be tempted to change this to `Object.entries`. We call
      // `_updateSubscriptions` recursively when processing the state,
      // so it's important that we look up the *current* version of
      // each subscription, every time we process a hash.
      Object.keys(this._subscriptionsByHash).map(async (hash) => {
        const subscription = this._subscriptionsByHash[hash];
        if (subscription === void 0) {
          return;
        }
        switch (subscription.state) {
          case "pending":
          case "unsubscribed":
            if (subscription.callbacks.size === 0) {
              delete this._subscriptionsByHash[hash];
              if (subscription.state === "unsubscribed") {
                delete this._subscriptionCallbacksByServerSubscriptionId[subscription.serverSubscriptionId];
              }
              await this._updateSubscriptions();
              return;
            }
            await (async () => {
              const {
                args,
                method
              } = subscription;
              try {
                this._setSubscription(hash, {
                  ...subscription,
                  state: "subscribing"
                });
                const serverSubscriptionId = await this._rpcWebSocket.call(method, args);
                this._setSubscription(hash, {
                  ...subscription,
                  serverSubscriptionId,
                  state: "subscribed"
                });
                this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId] = subscription.callbacks;
                await this._updateSubscriptions();
              } catch (e2) {
                console.error(`Received ${e2 instanceof Error ? "" : "JSON-RPC "}error calling \`${method}\``, {
                  args,
                  error: e2
                });
                if (!isCurrentConnectionStillActive()) {
                  return;
                }
                this._setSubscription(hash, {
                  ...subscription,
                  state: "pending"
                });
                await this._updateSubscriptions();
              }
            })();
            break;
          case "subscribed":
            if (subscription.callbacks.size === 0) {
              await (async () => {
                const {
                  serverSubscriptionId,
                  unsubscribeMethod
                } = subscription;
                if (this._subscriptionsAutoDisposedByRpc.has(serverSubscriptionId)) {
                  this._subscriptionsAutoDisposedByRpc.delete(serverSubscriptionId);
                } else {
                  this._setSubscription(hash, {
                    ...subscription,
                    state: "unsubscribing"
                  });
                  this._setSubscription(hash, {
                    ...subscription,
                    state: "unsubscribing"
                  });
                  try {
                    await this._rpcWebSocket.call(unsubscribeMethod, [serverSubscriptionId]);
                  } catch (e2) {
                    if (e2 instanceof Error) {
                      console.error(`${unsubscribeMethod} error:`, e2.message);
                    }
                    if (!isCurrentConnectionStillActive()) {
                      return;
                    }
                    this._setSubscription(hash, {
                      ...subscription,
                      state: "subscribed"
                    });
                    await this._updateSubscriptions();
                    return;
                  }
                }
                this._setSubscription(hash, {
                  ...subscription,
                  state: "unsubscribed"
                });
                await this._updateSubscriptions();
              })();
            }
            break;
        }
      })
    );
  }
  /**
   * @internal
   */
  _handleServerNotification(serverSubscriptionId, callbackArgs) {
    const callbacks = this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId];
    if (callbacks === void 0) {
      return;
    }
    callbacks.forEach((cb) => {
      try {
        cb(
          ...callbackArgs
        );
      } catch (e2) {
        console.error(e2);
      }
    });
  }
  /**
   * @internal
   */
  _wsOnAccountNotification(notification) {
    const {
      result,
      subscription
    } = create(notification, AccountNotificationResult);
    this._handleServerNotification(subscription, [result.value, result.context]);
  }
  /**
   * @internal
   */
  _makeSubscription(subscriptionConfig, args) {
    const clientSubscriptionId = this._nextClientSubscriptionId++;
    const hash = fastStableStringify([subscriptionConfig.method, args]);
    const existingSubscription = this._subscriptionsByHash[hash];
    if (existingSubscription === void 0) {
      this._subscriptionsByHash[hash] = {
        ...subscriptionConfig,
        args,
        callbacks: /* @__PURE__ */ new Set([subscriptionConfig.callback]),
        state: "pending"
      };
    } else {
      existingSubscription.callbacks.add(subscriptionConfig.callback);
    }
    this._subscriptionHashByClientSubscriptionId[clientSubscriptionId] = hash;
    this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId] = async () => {
      delete this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];
      delete this._subscriptionHashByClientSubscriptionId[clientSubscriptionId];
      const subscription = this._subscriptionsByHash[hash];
      assert2(subscription !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${clientSubscriptionId}`);
      subscription.callbacks.delete(subscriptionConfig.callback);
      await this._updateSubscriptions();
    };
    this._updateSubscriptions();
    return clientSubscriptionId;
  }
  /**
   * Register a callback to be invoked whenever the specified account changes
   *
   * @param publicKey Public key of the account to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param config
   * @return subscription id
   */
  /** @deprecated Instead, pass in an {@link AccountSubscriptionConfig} */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  onAccountChange(publicKey2, callback, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs(
      [publicKey2.toBase58()],
      commitment || this._commitment || "finalized",
      // Apply connection/server default.
      "base64",
      config
    );
    return this._makeSubscription({
      callback,
      method: "accountSubscribe",
      unsubscribeMethod: "accountUnsubscribe"
    }, args);
  }
  /**
   * Deregister an account notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeAccountChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, "account change");
  }
  /**
   * @internal
   */
  _wsOnProgramAccountNotification(notification) {
    const {
      result,
      subscription
    } = create(notification, ProgramAccountNotificationResult);
    this._handleServerNotification(subscription, [{
      accountId: result.value.pubkey,
      accountInfo: result.value.account
    }, result.context]);
  }
  /**
   * Register a callback to be invoked whenever accounts owned by the
   * specified program change
   *
   * @param programId Public key of the program to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param config
   * @return subscription id
   */
  /** @deprecated Instead, pass in a {@link ProgramAccountSubscriptionConfig} */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  onProgramAccountChange(programId, callback, commitmentOrConfig, maybeFilters) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs(
      [programId.toBase58()],
      commitment || this._commitment || "finalized",
      // Apply connection/server default.
      "base64",
      config ? config : maybeFilters ? {
        filters: applyDefaultMemcmpEncodingToFilters(maybeFilters)
      } : void 0
      /* extra */
    );
    return this._makeSubscription({
      callback,
      method: "programSubscribe",
      unsubscribeMethod: "programUnsubscribe"
    }, args);
  }
  /**
   * Deregister an account notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeProgramAccountChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, "program account change");
  }
  /**
   * Registers a callback to be invoked whenever logs are emitted.
   */
  onLogs(filter, callback, commitment) {
    const args = this._buildArgs(
      [typeof filter === "object" ? {
        mentions: [filter.toString()]
      } : filter],
      commitment || this._commitment || "finalized"
      // Apply connection/server default.
    );
    return this._makeSubscription({
      callback,
      method: "logsSubscribe",
      unsubscribeMethod: "logsUnsubscribe"
    }, args);
  }
  /**
   * Deregister a logs callback.
   *
   * @param clientSubscriptionId client subscription id to deregister.
   */
  async removeOnLogsListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, "logs");
  }
  /**
   * @internal
   */
  _wsOnLogsNotification(notification) {
    const {
      result,
      subscription
    } = create(notification, LogsNotificationResult);
    this._handleServerNotification(subscription, [result.value, result.context]);
  }
  /**
   * @internal
   */
  _wsOnSlotNotification(notification) {
    const {
      result,
      subscription
    } = create(notification, SlotNotificationResult);
    this._handleServerNotification(subscription, [result]);
  }
  /**
   * Register a callback to be invoked upon slot changes
   *
   * @param callback Function to invoke whenever the slot changes
   * @return subscription id
   */
  onSlotChange(callback) {
    return this._makeSubscription(
      {
        callback,
        method: "slotSubscribe",
        unsubscribeMethod: "slotUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a slot notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeSlotChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, "slot change");
  }
  /**
   * @internal
   */
  _wsOnSlotUpdatesNotification(notification) {
    const {
      result,
      subscription
    } = create(notification, SlotUpdateNotificationResult);
    this._handleServerNotification(subscription, [result]);
  }
  /**
   * Register a callback to be invoked upon slot updates. {@link SlotUpdate}'s
   * may be useful to track live progress of a cluster.
   *
   * @param callback Function to invoke whenever the slot updates
   * @return subscription id
   */
  onSlotUpdate(callback) {
    return this._makeSubscription(
      {
        callback,
        method: "slotsUpdatesSubscribe",
        unsubscribeMethod: "slotsUpdatesUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a slot update notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeSlotUpdateListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, "slot update");
  }
  /**
   * @internal
   */
  async _unsubscribeClientSubscription(clientSubscriptionId, subscriptionName) {
    const dispose = this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];
    if (dispose) {
      await dispose();
    } else {
      console.warn(`Ignored unsubscribe request because an active subscription with id \`${clientSubscriptionId}\` for '${subscriptionName}' events could not be found.`);
    }
  }
  _buildArgs(args, override, encoding, extra) {
    const commitment = override || this._commitment;
    if (commitment || encoding || extra) {
      let options = {};
      if (encoding) {
        options.encoding = encoding;
      }
      if (commitment) {
        options.commitment = commitment;
      }
      if (extra) {
        options = Object.assign(options, extra);
      }
      args.push(options);
    }
    return args;
  }
  /**
   * @internal
   */
  _buildArgsAtLeastConfirmed(args, override, encoding, extra) {
    const commitment = override || this._commitment;
    if (commitment && !["confirmed", "finalized"].includes(commitment)) {
      throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
    }
    return this._buildArgs(args, override, encoding, extra);
  }
  /**
   * @internal
   */
  _wsOnSignatureNotification(notification) {
    const {
      result,
      subscription
    } = create(notification, SignatureNotificationResult);
    if (result.value !== "receivedSignature") {
      this._subscriptionsAutoDisposedByRpc.add(subscription);
    }
    this._handleServerNotification(subscription, result.value === "receivedSignature" ? [{
      type: "received"
    }, result.context] : [{
      type: "status",
      result: result.value
    }, result.context]);
  }
  /**
   * Register a callback to be invoked upon signature updates
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param commitment Specify the commitment level signature must reach before notification
   * @return subscription id
   */
  onSignature(signature2, callback, commitment) {
    const args = this._buildArgs(
      [signature2],
      commitment || this._commitment || "finalized"
      // Apply connection/server default.
    );
    const clientSubscriptionId = this._makeSubscription({
      callback: (notification, context) => {
        if (notification.type === "status") {
          callback(notification.result, context);
          try {
            this.removeSignatureListener(clientSubscriptionId);
          } catch (_err) {
          }
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, args);
    return clientSubscriptionId;
  }
  /**
   * Register a callback to be invoked when a transaction is
   * received and/or processed.
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param options Enable received notifications and set the commitment
   *   level that signature must reach before notification
   * @return subscription id
   */
  onSignatureWithOptions(signature2, callback, options) {
    const {
      commitment,
      ...extra
    } = {
      ...options,
      commitment: options && options.commitment || this._commitment || "finalized"
      // Apply connection/server default.
    };
    const args = this._buildArgs([signature2], commitment, void 0, extra);
    const clientSubscriptionId = this._makeSubscription({
      callback: (notification, context) => {
        callback(notification, context);
        try {
          this.removeSignatureListener(clientSubscriptionId);
        } catch (_err) {
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, args);
    return clientSubscriptionId;
  }
  /**
   * Deregister a signature notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeSignatureListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, "signature result");
  }
  /**
   * @internal
   */
  _wsOnRootNotification(notification) {
    const {
      result,
      subscription
    } = create(notification, RootNotificationResult);
    this._handleServerNotification(subscription, [result]);
  }
  /**
   * Register a callback to be invoked upon root changes
   *
   * @param callback Function to invoke whenever the root changes
   * @return subscription id
   */
  onRootChange(callback) {
    return this._makeSubscription(
      {
        callback,
        method: "rootSubscribe",
        unsubscribeMethod: "rootUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a root notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeRootChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, "root change");
  }
};
var Keypair = class _Keypair {
  /**
   * Create a new keypair instance.
   * Generate random keypair if no {@link Ed25519Keypair} is provided.
   *
   * @param {Ed25519Keypair} keypair ed25519 keypair
   */
  constructor(keypair) {
    this._keypair = void 0;
    this._keypair = keypair ?? generateKeypair();
  }
  /**
   * Generate a new random keypair
   *
   * @returns {Keypair} Keypair
   */
  static generate() {
    return new _Keypair(generateKeypair());
  }
  /**
   * Create a keypair from a raw secret key byte array.
   *
   * This method should only be used to recreate a keypair from a previously
   * generated secret key. Generating keypairs from a random seed should be done
   * with the {@link Keypair.fromSeed} method.
   *
   * @throws error if the provided secret key is invalid and validation is not skipped.
   *
   * @param secretKey secret key byte array
   * @param options skip secret key validation
   *
   * @returns {Keypair} Keypair
   */
  static fromSecretKey(secretKey, options) {
    if (secretKey.byteLength !== 64) {
      throw new Error("bad secret key size");
    }
    const publicKey2 = secretKey.slice(32, 64);
    if (!options || !options.skipValidation) {
      const privateScalar = secretKey.slice(0, 32);
      const computedPublicKey = getPublicKey(privateScalar);
      for (let ii = 0; ii < 32; ii++) {
        if (publicKey2[ii] !== computedPublicKey[ii]) {
          throw new Error("provided secretKey is invalid");
        }
      }
    }
    return new _Keypair({
      publicKey: publicKey2,
      secretKey
    });
  }
  /**
   * Generate a keypair from a 32 byte seed.
   *
   * @param seed seed byte array
   *
   * @returns {Keypair} Keypair
   */
  static fromSeed(seed) {
    const publicKey2 = getPublicKey(seed);
    const secretKey = new Uint8Array(64);
    secretKey.set(seed);
    secretKey.set(publicKey2, 32);
    return new _Keypair({
      publicKey: publicKey2,
      secretKey
    });
  }
  /**
   * The public key for this keypair
   *
   * @returns {PublicKey} PublicKey
   */
  get publicKey() {
    return new PublicKey(this._keypair.publicKey);
  }
  /**
   * The raw secret key for this keypair
   * @returns {Uint8Array} Secret key in an array of Uint8 bytes
   */
  get secretKey() {
    return new Uint8Array(this._keypair.secretKey);
  }
};
var LOOKUP_TABLE_INSTRUCTION_LAYOUTS = Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), u64("recentSlot"), BufferLayout.u8("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: BufferLayout.struct([BufferLayout.u32("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), u64(), BufferLayout.seq(publicKey(), BufferLayout.offset(BufferLayout.u32(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: BufferLayout.struct([BufferLayout.u32("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: BufferLayout.struct([BufferLayout.u32("instruction")])
  }
});
var AddressLookupTableProgram = class {
  /**
   * @internal
   */
  constructor() {
  }
  static createLookupTable(params) {
    const [lookupTableAddress, bumpSeed] = PublicKey.findProgramAddressSync([params.authority.toBuffer(), getU64Encoder().encode(params.recentSlot)], this.programId);
    const type2 = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CreateLookupTable;
    const data = encodeData(type2, {
      recentSlot: BigInt(params.recentSlot),
      bumpSeed
    });
    const keys = [{
      pubkey: lookupTableAddress,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: params.authority,
      isSigner: true,
      isWritable: false
    }, {
      pubkey: params.payer,
      isSigner: true,
      isWritable: true
    }, {
      pubkey: SystemProgram.programId,
      isSigner: false,
      isWritable: false
    }];
    return [new TransactionInstruction({
      programId: this.programId,
      keys,
      data
    }), lookupTableAddress];
  }
  static freezeLookupTable(params) {
    const type2 = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.FreezeLookupTable;
    const data = encodeData(type2);
    const keys = [{
      pubkey: params.lookupTable,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: params.authority,
      isSigner: true,
      isWritable: false
    }];
    return new TransactionInstruction({
      programId: this.programId,
      keys,
      data
    });
  }
  static extendLookupTable(params) {
    const type2 = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.ExtendLookupTable;
    const data = encodeData(type2, {
      addresses: params.addresses.map((addr) => addr.toBytes())
    });
    const keys = [{
      pubkey: params.lookupTable,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: params.authority,
      isSigner: true,
      isWritable: false
    }];
    if (params.payer) {
      keys.push({
        pubkey: params.payer,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: SystemProgram.programId,
        isSigner: false,
        isWritable: false
      });
    }
    return new TransactionInstruction({
      programId: this.programId,
      keys,
      data
    });
  }
  static deactivateLookupTable(params) {
    const type2 = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.DeactivateLookupTable;
    const data = encodeData(type2);
    const keys = [{
      pubkey: params.lookupTable,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: params.authority,
      isSigner: true,
      isWritable: false
    }];
    return new TransactionInstruction({
      programId: this.programId,
      keys,
      data
    });
  }
  static closeLookupTable(params) {
    const type2 = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CloseLookupTable;
    const data = encodeData(type2);
    const keys = [{
      pubkey: params.lookupTable,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: params.authority,
      isSigner: true,
      isWritable: false
    }, {
      pubkey: params.recipient,
      isSigner: false,
      isWritable: true
    }];
    return new TransactionInstruction({
      programId: this.programId,
      keys,
      data
    });
  }
};
AddressLookupTableProgram.programId = new PublicKey("AddressLookupTab1e1111111111111111111111111");
var COMPUTE_BUDGET_INSTRUCTION_LAYOUTS = Object.freeze({
  RequestUnits: {
    index: 0,
    layout: BufferLayout.struct([BufferLayout.u8("instruction"), BufferLayout.u32("units"), BufferLayout.u32("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: BufferLayout.struct([BufferLayout.u8("instruction"), BufferLayout.u32("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: BufferLayout.struct([BufferLayout.u8("instruction"), BufferLayout.u32("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: BufferLayout.struct([BufferLayout.u8("instruction"), u64("microLamports")])
  }
});
var ComputeBudgetProgram = class {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the Compute Budget program
   */
  /**
   * @deprecated Instead, call {@link setComputeUnitLimit} and/or {@link setComputeUnitPrice}
   */
  static requestUnits(params) {
    const type2 = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestUnits;
    const data = encodeData(type2, params);
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }
  static requestHeapFrame(params) {
    const type2 = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestHeapFrame;
    const data = encodeData(type2, params);
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }
  static setComputeUnitLimit(params) {
    const type2 = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitLimit;
    const data = encodeData(type2, params);
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }
  static setComputeUnitPrice(params) {
    const type2 = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitPrice;
    const data = encodeData(type2, {
      microLamports: BigInt(params.microLamports)
    });
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }
};
ComputeBudgetProgram.programId = new PublicKey("ComputeBudget111111111111111111111111111111");
var PRIVATE_KEY_BYTES$1 = 64;
var PUBLIC_KEY_BYTES$1 = 32;
var SIGNATURE_BYTES = 64;
var ED25519_INSTRUCTION_LAYOUT = BufferLayout.struct([BufferLayout.u8("numSignatures"), BufferLayout.u8("padding"), BufferLayout.u16("signatureOffset"), BufferLayout.u16("signatureInstructionIndex"), BufferLayout.u16("publicKeyOffset"), BufferLayout.u16("publicKeyInstructionIndex"), BufferLayout.u16("messageDataOffset"), BufferLayout.u16("messageDataSize"), BufferLayout.u16("messageInstructionIndex")]);
var Ed25519Program = class _Ed25519Program {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the ed25519 program
   */
  /**
   * Create an ed25519 instruction with a public key and signature. The
   * public key must be a buffer that is 32 bytes long, and the signature
   * must be a buffer of 64 bytes.
   */
  static createInstructionWithPublicKey(params) {
    const {
      publicKey: publicKey2,
      message,
      signature: signature2,
      instructionIndex
    } = params;
    assert2(publicKey2.length === PUBLIC_KEY_BYTES$1, `Public Key must be ${PUBLIC_KEY_BYTES$1} bytes but received ${publicKey2.length} bytes`);
    assert2(signature2.length === SIGNATURE_BYTES, `Signature must be ${SIGNATURE_BYTES} bytes but received ${signature2.length} bytes`);
    const publicKeyOffset = ED25519_INSTRUCTION_LAYOUT.span;
    const signatureOffset = publicKeyOffset + publicKey2.length;
    const messageDataOffset = signatureOffset + signature2.length;
    const numSignatures = 1;
    const instructionData = import_buffer2.Buffer.alloc(messageDataOffset + message.length);
    const index = instructionIndex == null ? 65535 : instructionIndex;
    ED25519_INSTRUCTION_LAYOUT.encode({
      numSignatures,
      padding: 0,
      signatureOffset,
      signatureInstructionIndex: index,
      publicKeyOffset,
      publicKeyInstructionIndex: index,
      messageDataOffset,
      messageDataSize: message.length,
      messageInstructionIndex: index
    }, instructionData);
    instructionData.fill(publicKey2, publicKeyOffset);
    instructionData.fill(signature2, signatureOffset);
    instructionData.fill(message, messageDataOffset);
    return new TransactionInstruction({
      keys: [],
      programId: _Ed25519Program.programId,
      data: instructionData
    });
  }
  /**
   * Create an ed25519 instruction with a private key. The private key
   * must be a buffer that is 64 bytes long.
   */
  static createInstructionWithPrivateKey(params) {
    const {
      privateKey,
      message,
      instructionIndex
    } = params;
    assert2(privateKey.length === PRIVATE_KEY_BYTES$1, `Private key must be ${PRIVATE_KEY_BYTES$1} bytes but received ${privateKey.length} bytes`);
    try {
      const keypair = Keypair.fromSecretKey(privateKey);
      const publicKey2 = keypair.publicKey.toBytes();
      const signature2 = sign(message, keypair.secretKey);
      return this.createInstructionWithPublicKey({
        publicKey: publicKey2,
        message,
        signature: signature2,
        instructionIndex
      });
    } catch (error) {
      throw new Error(`Error creating instruction; ${error}`);
    }
  }
};
Ed25519Program.programId = new PublicKey("Ed25519SigVerify111111111111111111111111111");
var ecdsaSign = (msgHash, privKey) => {
  const signature2 = secp256k1.sign(msgHash, privKey);
  return [signature2.toCompactRawBytes(), signature2.recovery];
};
secp256k1.utils.isValidPrivateKey;
var publicKeyCreate = secp256k1.getPublicKey;
var PRIVATE_KEY_BYTES = 32;
var ETHEREUM_ADDRESS_BYTES = 20;
var PUBLIC_KEY_BYTES = 64;
var SIGNATURE_OFFSETS_SERIALIZED_SIZE = 11;
var SECP256K1_INSTRUCTION_LAYOUT = BufferLayout.struct([BufferLayout.u8("numSignatures"), BufferLayout.u16("signatureOffset"), BufferLayout.u8("signatureInstructionIndex"), BufferLayout.u16("ethAddressOffset"), BufferLayout.u8("ethAddressInstructionIndex"), BufferLayout.u16("messageDataOffset"), BufferLayout.u16("messageDataSize"), BufferLayout.u8("messageInstructionIndex"), BufferLayout.blob(20, "ethAddress"), BufferLayout.blob(64, "signature"), BufferLayout.u8("recoveryId")]);
var Secp256k1Program = class _Secp256k1Program {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the secp256k1 program
   */
  /**
   * Construct an Ethereum address from a secp256k1 public key buffer.
   * @param {Buffer} publicKey a 64 byte secp256k1 public key buffer
   */
  static publicKeyToEthAddress(publicKey2) {
    assert2(publicKey2.length === PUBLIC_KEY_BYTES, `Public key must be ${PUBLIC_KEY_BYTES} bytes but received ${publicKey2.length} bytes`);
    try {
      return import_buffer2.Buffer.from(keccak_256(toBuffer(publicKey2))).slice(-ETHEREUM_ADDRESS_BYTES);
    } catch (error) {
      throw new Error(`Error constructing Ethereum address: ${error}`);
    }
  }
  /**
   * Create an secp256k1 instruction with a public key. The public key
   * must be a buffer that is 64 bytes long.
   */
  static createInstructionWithPublicKey(params) {
    const {
      publicKey: publicKey2,
      message,
      signature: signature2,
      recoveryId,
      instructionIndex
    } = params;
    return _Secp256k1Program.createInstructionWithEthAddress({
      ethAddress: _Secp256k1Program.publicKeyToEthAddress(publicKey2),
      message,
      signature: signature2,
      recoveryId,
      instructionIndex
    });
  }
  /**
   * Create an secp256k1 instruction with an Ethereum address. The address
   * must be a hex string or a buffer that is 20 bytes long.
   */
  static createInstructionWithEthAddress(params) {
    const {
      ethAddress: rawAddress,
      message,
      signature: signature2,
      recoveryId,
      instructionIndex = 0
    } = params;
    let ethAddress;
    if (typeof rawAddress === "string") {
      if (rawAddress.startsWith("0x")) {
        ethAddress = import_buffer2.Buffer.from(rawAddress.substr(2), "hex");
      } else {
        ethAddress = import_buffer2.Buffer.from(rawAddress, "hex");
      }
    } else {
      ethAddress = rawAddress;
    }
    assert2(ethAddress.length === ETHEREUM_ADDRESS_BYTES, `Address must be ${ETHEREUM_ADDRESS_BYTES} bytes but received ${ethAddress.length} bytes`);
    const dataStart = 1 + SIGNATURE_OFFSETS_SERIALIZED_SIZE;
    const ethAddressOffset = dataStart;
    const signatureOffset = dataStart + ethAddress.length;
    const messageDataOffset = signatureOffset + signature2.length + 1;
    const numSignatures = 1;
    const instructionData = import_buffer2.Buffer.alloc(SECP256K1_INSTRUCTION_LAYOUT.span + message.length);
    SECP256K1_INSTRUCTION_LAYOUT.encode({
      numSignatures,
      signatureOffset,
      signatureInstructionIndex: instructionIndex,
      ethAddressOffset,
      ethAddressInstructionIndex: instructionIndex,
      messageDataOffset,
      messageDataSize: message.length,
      messageInstructionIndex: instructionIndex,
      signature: toBuffer(signature2),
      ethAddress: toBuffer(ethAddress),
      recoveryId
    }, instructionData);
    instructionData.fill(toBuffer(message), SECP256K1_INSTRUCTION_LAYOUT.span);
    return new TransactionInstruction({
      keys: [],
      programId: _Secp256k1Program.programId,
      data: instructionData
    });
  }
  /**
   * Create an secp256k1 instruction with a private key. The private key
   * must be a buffer that is 32 bytes long.
   */
  static createInstructionWithPrivateKey(params) {
    const {
      privateKey: pkey,
      message,
      instructionIndex
    } = params;
    assert2(pkey.length === PRIVATE_KEY_BYTES, `Private key must be ${PRIVATE_KEY_BYTES} bytes but received ${pkey.length} bytes`);
    try {
      const privateKey = toBuffer(pkey);
      const publicKey2 = publicKeyCreate(
        privateKey,
        false
        /* isCompressed */
      ).slice(1);
      const messageHash = import_buffer2.Buffer.from(keccak_256(toBuffer(message)));
      const [signature2, recoveryId] = ecdsaSign(messageHash, privateKey);
      return this.createInstructionWithPublicKey({
        publicKey: publicKey2,
        message,
        signature: signature2,
        recoveryId,
        instructionIndex
      });
    } catch (error) {
      throw new Error(`Error creating instruction; ${error}`);
    }
  }
};
Secp256k1Program.programId = new PublicKey("KeccakSecp256k11111111111111111111111111111");
var _Lockup;
var STAKE_CONFIG_ID = new PublicKey("StakeConfig11111111111111111111111111111111");
var Lockup = class {
  /**
   * Create a new Lockup object
   */
  constructor(unixTimestamp, epoch, custodian) {
    this.unixTimestamp = void 0;
    this.epoch = void 0;
    this.custodian = void 0;
    this.unixTimestamp = unixTimestamp;
    this.epoch = epoch;
    this.custodian = custodian;
  }
  /**
   * Default, inactive Lockup value
   */
};
_Lockup = Lockup;
Lockup.default = new _Lockup(0, 0, PublicKey.default);
var STAKE_INSTRUCTION_LAYOUTS = Object.freeze({
  Initialize: {
    index: 0,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), authorized(), lockup()])
  },
  Authorize: {
    index: 1,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("newAuthorized"), BufferLayout.u32("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: BufferLayout.struct([BufferLayout.u32("instruction")])
  },
  Split: {
    index: 3,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: BufferLayout.struct([BufferLayout.u32("instruction")])
  },
  Merge: {
    index: 7,
    layout: BufferLayout.struct([BufferLayout.u32("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("newAuthorized"), BufferLayout.u32("stakeAuthorizationType"), rustString("authoritySeed"), publicKey("authorityOwner")])
  }
});
var StakeAuthorizationLayout = Object.freeze({
  Staker: {
    index: 0
  },
  Withdrawer: {
    index: 1
  }
});
var StakeProgram = class {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the Stake program
   */
  /**
   * Generate an Initialize instruction to add to a Stake Create transaction
   */
  static initialize(params) {
    const {
      stakePubkey,
      authorized: authorized2,
      lockup: maybeLockup
    } = params;
    const lockup2 = maybeLockup || Lockup.default;
    const type2 = STAKE_INSTRUCTION_LAYOUTS.Initialize;
    const data = encodeData(type2, {
      authorized: {
        staker: toBuffer(authorized2.staker.toBuffer()),
        withdrawer: toBuffer(authorized2.withdrawer.toBuffer())
      },
      lockup: {
        unixTimestamp: lockup2.unixTimestamp,
        epoch: lockup2.epoch,
        custodian: toBuffer(lockup2.custodian.toBuffer())
      }
    });
    const instructionData = {
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }
  /**
   * Generate a Transaction that creates a new Stake account at
   *   an address generated with `from`, a seed, and the Stake programId
   */
  static createAccountWithSeed(params) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccountWithSeed({
      fromPubkey: params.fromPubkey,
      newAccountPubkey: params.stakePubkey,
      basePubkey: params.basePubkey,
      seed: params.seed,
      lamports: params.lamports,
      space: this.space,
      programId: this.programId
    }));
    const {
      stakePubkey,
      authorized: authorized2,
      lockup: lockup2
    } = params;
    return transaction.add(this.initialize({
      stakePubkey,
      authorized: authorized2,
      lockup: lockup2
    }));
  }
  /**
   * Generate a Transaction that creates a new Stake account
   */
  static createAccount(params) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccount({
      fromPubkey: params.fromPubkey,
      newAccountPubkey: params.stakePubkey,
      lamports: params.lamports,
      space: this.space,
      programId: this.programId
    }));
    const {
      stakePubkey,
      authorized: authorized2,
      lockup: lockup2
    } = params;
    return transaction.add(this.initialize({
      stakePubkey,
      authorized: authorized2,
      lockup: lockup2
    }));
  }
  /**
   * Generate a Transaction that delegates Stake tokens to a validator
   * Vote PublicKey. This transaction can also be used to redelegate Stake
   * to a new validator Vote PublicKey.
   */
  static delegate(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      votePubkey
    } = params;
    const type2 = STAKE_INSTRUCTION_LAYOUTS.Delegate;
    const data = encodeData(type2);
    return new Transaction().add({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: votePubkey,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: STAKE_CONFIG_ID,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */
  static authorize(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      newAuthorizedPubkey,
      stakeAuthorizationType,
      custodianPubkey
    } = params;
    const type2 = STAKE_INSTRUCTION_LAYOUTS.Authorize;
    const data = encodeData(type2, {
      newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
      stakeAuthorizationType: stakeAuthorizationType.index
    });
    const keys = [{
      pubkey: stakePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: authorizedPubkey,
      isSigner: true,
      isWritable: false
    }];
    if (custodianPubkey) {
      keys.push({
        pubkey: custodianPubkey,
        isSigner: true,
        isWritable: false
      });
    }
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */
  static authorizeWithSeed(params) {
    const {
      stakePubkey,
      authorityBase,
      authoritySeed,
      authorityOwner,
      newAuthorizedPubkey,
      stakeAuthorizationType,
      custodianPubkey
    } = params;
    const type2 = STAKE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
    const data = encodeData(type2, {
      newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
      stakeAuthorizationType: stakeAuthorizationType.index,
      authoritySeed,
      authorityOwner: toBuffer(authorityOwner.toBuffer())
    });
    const keys = [{
      pubkey: stakePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: authorityBase,
      isSigner: true,
      isWritable: false
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false
    }];
    if (custodianPubkey) {
      keys.push({
        pubkey: custodianPubkey,
        isSigner: true,
        isWritable: false
      });
    }
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * @internal
   */
  static splitInstruction(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      splitStakePubkey,
      lamports
    } = params;
    const type2 = STAKE_INSTRUCTION_LAYOUTS.Split;
    const data = encodeData(type2, {
      lamports
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: splitStakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a Transaction that splits Stake tokens into another stake account
   */
  static split(params, rentExemptReserve) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccount({
      fromPubkey: params.authorizedPubkey,
      newAccountPubkey: params.splitStakePubkey,
      lamports: rentExemptReserve,
      space: this.space,
      programId: this.programId
    }));
    return transaction.add(this.splitInstruction(params));
  }
  /**
   * Generate a Transaction that splits Stake tokens into another account
   * derived from a base public key and seed
   */
  static splitWithSeed(params, rentExemptReserve) {
    const {
      stakePubkey,
      authorizedPubkey,
      splitStakePubkey,
      basePubkey,
      seed,
      lamports
    } = params;
    const transaction = new Transaction();
    transaction.add(SystemProgram.allocate({
      accountPubkey: splitStakePubkey,
      basePubkey,
      seed,
      space: this.space,
      programId: this.programId
    }));
    if (rentExemptReserve && rentExemptReserve > 0) {
      transaction.add(SystemProgram.transfer({
        fromPubkey: params.authorizedPubkey,
        toPubkey: splitStakePubkey,
        lamports: rentExemptReserve
      }));
    }
    return transaction.add(this.splitInstruction({
      stakePubkey,
      authorizedPubkey,
      splitStakePubkey,
      lamports
    }));
  }
  /**
   * Generate a Transaction that merges Stake accounts.
   */
  static merge(params) {
    const {
      stakePubkey,
      sourceStakePubKey,
      authorizedPubkey
    } = params;
    const type2 = STAKE_INSTRUCTION_LAYOUTS.Merge;
    const data = encodeData(type2);
    return new Transaction().add({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: sourceStakePubKey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a Transaction that withdraws deactivated Stake tokens.
   */
  static withdraw(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      toPubkey,
      lamports,
      custodianPubkey
    } = params;
    const type2 = STAKE_INSTRUCTION_LAYOUTS.Withdraw;
    const data = encodeData(type2, {
      lamports
    });
    const keys = [{
      pubkey: stakePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: toPubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false
    }, {
      pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
      isSigner: false,
      isWritable: false
    }, {
      pubkey: authorizedPubkey,
      isSigner: true,
      isWritable: false
    }];
    if (custodianPubkey) {
      keys.push({
        pubkey: custodianPubkey,
        isSigner: true,
        isWritable: false
      });
    }
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a Transaction that deactivates Stake tokens.
   */
  static deactivate(params) {
    const {
      stakePubkey,
      authorizedPubkey
    } = params;
    const type2 = STAKE_INSTRUCTION_LAYOUTS.Deactivate;
    const data = encodeData(type2);
    return new Transaction().add({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
};
StakeProgram.programId = new PublicKey("Stake11111111111111111111111111111111111111");
StakeProgram.space = 200;
var VOTE_INSTRUCTION_LAYOUTS = Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), voteInit()])
  },
  Authorize: {
    index: 1,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("newAuthorized"), BufferLayout.u32("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("lamports")])
  },
  UpdateValidatorIdentity: {
    index: 4,
    layout: BufferLayout.struct([BufferLayout.u32("instruction")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: BufferLayout.struct([BufferLayout.u32("instruction"), voteAuthorizeWithSeedArgs()])
  }
});
var VoteAuthorizationLayout = Object.freeze({
  Voter: {
    index: 0
  },
  Withdrawer: {
    index: 1
  }
});
var VoteProgram = class _VoteProgram {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Public key that identifies the Vote program
   */
  /**
   * Generate an Initialize instruction.
   */
  static initializeAccount(params) {
    const {
      votePubkey,
      nodePubkey,
      voteInit: voteInit2
    } = params;
    const type2 = VOTE_INSTRUCTION_LAYOUTS.InitializeAccount;
    const data = encodeData(type2, {
      voteInit: {
        nodePubkey: toBuffer(voteInit2.nodePubkey.toBuffer()),
        authorizedVoter: toBuffer(voteInit2.authorizedVoter.toBuffer()),
        authorizedWithdrawer: toBuffer(voteInit2.authorizedWithdrawer.toBuffer()),
        commission: voteInit2.commission
      }
    });
    const instructionData = {
      keys: [{
        pubkey: votePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: nodePubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }
  /**
   * Generate a transaction that creates a new Vote account.
   */
  static createAccount(params) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccount({
      fromPubkey: params.fromPubkey,
      newAccountPubkey: params.votePubkey,
      lamports: params.lamports,
      space: this.space,
      programId: this.programId
    }));
    return transaction.add(this.initializeAccount({
      votePubkey: params.votePubkey,
      nodePubkey: params.voteInit.nodePubkey,
      voteInit: params.voteInit
    }));
  }
  /**
   * Generate a transaction that authorizes a new Voter or Withdrawer on the Vote account.
   */
  static authorize(params) {
    const {
      votePubkey,
      authorizedPubkey,
      newAuthorizedPubkey,
      voteAuthorizationType
    } = params;
    const type2 = VOTE_INSTRUCTION_LAYOUTS.Authorize;
    const data = encodeData(type2, {
      newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
      voteAuthorizationType: voteAuthorizationType.index
    });
    const keys = [{
      pubkey: votePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false
    }, {
      pubkey: authorizedPubkey,
      isSigner: true,
      isWritable: false
    }];
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction that authorizes a new Voter or Withdrawer on the Vote account
   * where the current Voter or Withdrawer authority is a derived key.
   */
  static authorizeWithSeed(params) {
    const {
      currentAuthorityDerivedKeyBasePubkey,
      currentAuthorityDerivedKeyOwnerPubkey,
      currentAuthorityDerivedKeySeed,
      newAuthorizedPubkey,
      voteAuthorizationType,
      votePubkey
    } = params;
    const type2 = VOTE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
    const data = encodeData(type2, {
      voteAuthorizeWithSeedArgs: {
        currentAuthorityDerivedKeyOwnerPubkey: toBuffer(currentAuthorityDerivedKeyOwnerPubkey.toBuffer()),
        currentAuthorityDerivedKeySeed,
        newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
        voteAuthorizationType: voteAuthorizationType.index
      }
    });
    const keys = [{
      pubkey: votePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false
    }, {
      pubkey: currentAuthorityDerivedKeyBasePubkey,
      isSigner: true,
      isWritable: false
    }];
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction to withdraw from a Vote account.
   */
  static withdraw(params) {
    const {
      votePubkey,
      authorizedWithdrawerPubkey,
      lamports,
      toPubkey
    } = params;
    const type2 = VOTE_INSTRUCTION_LAYOUTS.Withdraw;
    const data = encodeData(type2, {
      lamports
    });
    const keys = [{
      pubkey: votePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: toPubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: authorizedWithdrawerPubkey,
      isSigner: true,
      isWritable: false
    }];
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction to withdraw safely from a Vote account.
   *
   * This function was created as a safeguard for vote accounts running validators, `safeWithdraw`
   * checks that the withdraw amount will not exceed the specified balance while leaving enough left
   * to cover rent. If you wish to close the vote account by withdrawing the full amount, call the
   * `withdraw` method directly.
   */
  static safeWithdraw(params, currentVoteAccountBalance, rentExemptMinimum) {
    if (params.lamports > currentVoteAccountBalance - rentExemptMinimum) {
      throw new Error("Withdraw will leave vote account with insufficient funds.");
    }
    return _VoteProgram.withdraw(params);
  }
  /**
   * Generate a transaction to update the validator identity (node pubkey) of a Vote account.
   */
  static updateValidatorIdentity(params) {
    const {
      votePubkey,
      authorizedWithdrawerPubkey,
      nodePubkey
    } = params;
    const type2 = VOTE_INSTRUCTION_LAYOUTS.UpdateValidatorIdentity;
    const data = encodeData(type2);
    const keys = [{
      pubkey: votePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: nodePubkey,
      isSigner: true,
      isWritable: false
    }, {
      pubkey: authorizedWithdrawerPubkey,
      isSigner: true,
      isWritable: false
    }];
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }
};
VoteProgram.programId = new PublicKey("Vote111111111111111111111111111111111111111");
VoteProgram.space = 3762;
var VALIDATOR_INFO_KEY = new PublicKey("Va1idator1nfo111111111111111111111111111111");
var InfoString = type({
  name: string(),
  website: optional(string()),
  details: optional(string()),
  iconUrl: optional(string()),
  keybaseUsername: optional(string())
});
var VOTE_PROGRAM_ID = new PublicKey("Vote111111111111111111111111111111111111111");
var VoteAccountLayout = BufferLayout.struct([
  publicKey("nodePubkey"),
  publicKey("authorizedWithdrawer"),
  BufferLayout.u8("commission"),
  BufferLayout.nu64(),
  // votes.length
  BufferLayout.seq(BufferLayout.struct([BufferLayout.nu64("slot"), BufferLayout.u32("confirmationCount")]), BufferLayout.offset(BufferLayout.u32(), -8), "votes"),
  BufferLayout.u8("rootSlotValid"),
  BufferLayout.nu64("rootSlot"),
  BufferLayout.nu64(),
  // authorizedVoters.length
  BufferLayout.seq(BufferLayout.struct([BufferLayout.nu64("epoch"), publicKey("authorizedVoter")]), BufferLayout.offset(BufferLayout.u32(), -8), "authorizedVoters"),
  BufferLayout.struct([BufferLayout.seq(BufferLayout.struct([publicKey("authorizedPubkey"), BufferLayout.nu64("epochOfLastAuthorizedSwitch"), BufferLayout.nu64("targetEpoch")]), 32, "buf"), BufferLayout.nu64("idx"), BufferLayout.u8("isEmpty")], "priorVoters"),
  BufferLayout.nu64(),
  // epochCredits.length
  BufferLayout.seq(BufferLayout.struct([BufferLayout.nu64("epoch"), BufferLayout.nu64("credits"), BufferLayout.nu64("prevCredits")]), BufferLayout.offset(BufferLayout.u32(), -8), "epochCredits"),
  BufferLayout.struct([BufferLayout.nu64("slot"), BufferLayout.nu64("timestamp")], "lastTimestamp")
]);

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/ConnectionProvider.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js
var import_react = __toESM(require_react(), 1);
var ConnectionContext = (0, import_react.createContext)({});
function useConnection() {
  return (0, import_react.useContext)(ConnectionContext);
}

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/ConnectionProvider.js
var ConnectionProvider = ({ children, endpoint, config = { commitment: "confirmed" } }) => {
  const connection = (0, import_react2.useMemo)(() => new Connection(endpoint, config), [endpoint, config]);
  return import_react2.default.createElement(ConnectionContext.Provider, { value: { connection } }, children);
};

// node_modules/.pnpm/@solana+wallet-adapter-base@0.9.27_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/errors.js
var WalletError = class extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message, error) {
    super(message);
    this.error = error;
  }
};
var WalletNotReadyError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletNotReadyError";
  }
};
var WalletConfigError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletConfigError";
  }
};
var WalletConnectionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletConnectionError";
  }
};
var WalletDisconnectedError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletDisconnectedError";
  }
};
var WalletDisconnectionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletDisconnectionError";
  }
};
var WalletAccountError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletAccountError";
  }
};
var WalletPublicKeyError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletPublicKeyError";
  }
};
var WalletNotConnectedError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletNotConnectedError";
  }
};
var WalletSendTransactionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSendTransactionError";
  }
};
var WalletSignTransactionError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSignTransactionError";
  }
};
var WalletSignMessageError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSignMessageError";
  }
};
var WalletSignInError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletSignInError";
  }
};

// node_modules/.pnpm/@solana+wallet-adapter-base@0.9.27_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/adapter.js
var WalletReadyState;
(function(WalletReadyState2) {
  WalletReadyState2["Installed"] = "Installed";
  WalletReadyState2["NotDetected"] = "NotDetected";
  WalletReadyState2["Loadable"] = "Loadable";
  WalletReadyState2["Unsupported"] = "Unsupported";
})(WalletReadyState || (WalletReadyState = {}));
var BaseWalletAdapter = class extends eventemitter3_default {
  get connected() {
    return !!this.publicKey;
  }
  async autoConnect() {
    await this.connect();
  }
  async prepareTransaction(transaction, connection, options = {}) {
    const publicKey2 = this.publicKey;
    if (!publicKey2)
      throw new WalletNotConnectedError();
    transaction.feePayer = transaction.feePayer || publicKey2;
    transaction.recentBlockhash = transaction.recentBlockhash || (await connection.getLatestBlockhash({
      commitment: options.preflightCommitment,
      minContextSlot: options.minContextSlot
    })).blockhash;
    return transaction;
  }
};
function isIosAndRedirectable() {
  if (!navigator)
    return false;
  const userAgent = navigator.userAgent.toLowerCase();
  const isIos = userAgent.includes("iphone") || userAgent.includes("ipad");
  const isSafari = userAgent.includes("safari");
  return isIos && isSafari;
}

// node_modules/.pnpm/@solana+wallet-adapter-base@0.9.27_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/transaction.js
function isVersionedTransaction(transaction) {
  return "version" in transaction;
}

// node_modules/.pnpm/@solana+wallet-adapter-base@0.9.27_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/signer.js
var BaseSignerWalletAdapter = class extends BaseWalletAdapter {
  async sendTransaction(transaction, connection, options = {}) {
    let emit = true;
    try {
      if (isVersionedTransaction(transaction)) {
        if (!this.supportedTransactionVersions)
          throw new WalletSendTransactionError(`Sending versioned transactions isn't supported by this wallet`);
        if (!this.supportedTransactionVersions.has(transaction.version))
          throw new WalletSendTransactionError(`Sending transaction version ${transaction.version} isn't supported by this wallet`);
        try {
          transaction = await this.signTransaction(transaction);
          const rawTransaction = transaction.serialize();
          return await connection.sendRawTransaction(rawTransaction, options);
        } catch (error) {
          if (error instanceof WalletSignTransactionError) {
            emit = false;
            throw error;
          }
          throw new WalletSendTransactionError(error?.message, error);
        }
      } else {
        try {
          const { signers, ...sendOptions } = options;
          transaction = await this.prepareTransaction(transaction, connection, sendOptions);
          signers?.length && transaction.partialSign(...signers);
          transaction = await this.signTransaction(transaction);
          const rawTransaction = transaction.serialize();
          return await connection.sendRawTransaction(rawTransaction, sendOptions);
        } catch (error) {
          if (error instanceof WalletSignTransactionError) {
            emit = false;
            throw error;
          }
          throw new WalletSendTransactionError(error?.message, error);
        }
      }
    } catch (error) {
      if (emit) {
        this.emit("error", error);
      }
      throw error;
    }
  }
  async signAllTransactions(transactions) {
    for (const transaction of transactions) {
      if (isVersionedTransaction(transaction)) {
        if (!this.supportedTransactionVersions)
          throw new WalletSignTransactionError(`Signing versioned transactions isn't supported by this wallet`);
        if (!this.supportedTransactionVersions.has(transaction.version))
          throw new WalletSignTransactionError(`Signing transaction version ${transaction.version} isn't supported by this wallet`);
      }
    }
    const signedTransactions = [];
    for (const transaction of transactions) {
      signedTransactions.push(await this.signTransaction(transaction));
    }
    return signedTransactions;
  }
};
var BaseMessageSignerWalletAdapter = class extends BaseSignerWalletAdapter {
};
var BaseSignInMessageSignerWalletAdapter = class extends BaseMessageSignerWalletAdapter {
};

// node_modules/.pnpm/@solana+wallet-standard-features@1.3.0/node_modules/@solana/wallet-standard-features/lib/esm/signAndSendTransaction.js
var SolanaSignAndSendTransaction = "solana:signAndSendTransaction";

// node_modules/.pnpm/@solana+wallet-standard-features@1.3.0/node_modules/@solana/wallet-standard-features/lib/esm/signIn.js
var SolanaSignIn = "solana:signIn";

// node_modules/.pnpm/@solana+wallet-standard-features@1.3.0/node_modules/@solana/wallet-standard-features/lib/esm/signMessage.js
var SolanaSignMessage = "solana:signMessage";

// node_modules/.pnpm/@solana+wallet-standard-features@1.3.0/node_modules/@solana/wallet-standard-features/lib/esm/signTransaction.js
var SolanaSignTransaction = "solana:signTransaction";

// node_modules/.pnpm/@wallet-standard+features@1.1.0/node_modules/@wallet-standard/features/lib/esm/connect.js
var StandardConnect = "standard:connect";

// node_modules/.pnpm/@wallet-standard+features@1.1.0/node_modules/@wallet-standard/features/lib/esm/disconnect.js
var StandardDisconnect = "standard:disconnect";

// node_modules/.pnpm/@wallet-standard+features@1.1.0/node_modules/@wallet-standard/features/lib/esm/events.js
var StandardEvents = "standard:events";

// node_modules/.pnpm/@solana+wallet-adapter-base@0.9.27_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/standard.js
function isWalletAdapterCompatibleStandardWallet(wallet) {
  return StandardConnect in wallet.features && StandardEvents in wallet.features && (SolanaSignAndSendTransaction in wallet.features || SolanaSignTransaction in wallet.features);
}

// node_modules/.pnpm/@solana+wallet-adapter-base@0.9.27_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_/node_modules/@solana/wallet-adapter-base/lib/esm/types.js
var WalletAdapterNetwork;
(function(WalletAdapterNetwork2) {
  WalletAdapterNetwork2["Mainnet"] = "mainnet-beta";
  WalletAdapterNetwork2["Testnet"] = "testnet";
  WalletAdapterNetwork2["Devnet"] = "devnet";
})(WalletAdapterNetwork || (WalletAdapterNetwork = {}));

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/errors.js
var WalletNotSelectedError = class extends WalletError {
  constructor() {
    super(...arguments);
    this.name = "WalletNotSelectedError";
  }
};

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/useAnchorWallet.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js
var import_react3 = __toESM(require_react(), 1);
var EMPTY_ARRAY = [];
var DEFAULT_CONTEXT = {
  autoConnect: false,
  connecting: false,
  connected: false,
  disconnecting: false,
  select() {
    logMissingProviderError("call", "select");
  },
  connect() {
    return Promise.reject(logMissingProviderError("call", "connect"));
  },
  disconnect() {
    return Promise.reject(logMissingProviderError("call", "disconnect"));
  },
  sendTransaction() {
    return Promise.reject(logMissingProviderError("call", "sendTransaction"));
  },
  signTransaction() {
    return Promise.reject(logMissingProviderError("call", "signTransaction"));
  },
  signAllTransactions() {
    return Promise.reject(logMissingProviderError("call", "signAllTransactions"));
  },
  signMessage() {
    return Promise.reject(logMissingProviderError("call", "signMessage"));
  },
  signIn() {
    return Promise.reject(logMissingProviderError("call", "signIn"));
  }
};
Object.defineProperty(DEFAULT_CONTEXT, "wallets", {
  get() {
    logMissingProviderError("read", "wallets");
    return EMPTY_ARRAY;
  }
});
Object.defineProperty(DEFAULT_CONTEXT, "wallet", {
  get() {
    logMissingProviderError("read", "wallet");
    return null;
  }
});
Object.defineProperty(DEFAULT_CONTEXT, "publicKey", {
  get() {
    logMissingProviderError("read", "publicKey");
    return null;
  }
});
function logMissingProviderError(action, property) {
  const error = new Error(`You have tried to ${action} "${property}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`);
  console.error(error);
  return error;
}
var WalletContext = (0, import_react3.createContext)(DEFAULT_CONTEXT);
function useWallet() {
  return (0, import_react3.useContext)(WalletContext);
}

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/useLocalStorage.js
var import_react5 = __toESM(require_react(), 1);
function useLocalStorage(key, defaultState) {
  const state = (0, import_react5.useState)(() => {
    try {
      const value2 = localStorage.getItem(key);
      if (value2)
        return JSON.parse(value2);
    } catch (error) {
      if (typeof window !== "undefined") {
        console.error(error);
      }
    }
    return defaultState;
  });
  const value = state[0];
  const isFirstRenderRef = (0, import_react5.useRef)(true);
  (0, import_react5.useEffect)(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      if (typeof window !== "undefined") {
        console.error(error);
      }
    }
  }, [value, key]);
  return state;
}

// node_modules/.pnpm/@solana-mobile+wallet-standard-mobile@0.4.4_@solana+wallet-adapter-base@0.9.27_@solana+_fd8f1dcb4136a036b743fe1e0e086ca8/node_modules/@solana-mobile/wallet-standard-mobile/lib/esm/index.browser.js
var import_qrcode = __toESM(require_browser2());

// node_modules/.pnpm/@solana+wallet-standard-util@1.1.2/node_modules/@solana/wallet-standard-util/lib/esm/commitment.js
function getCommitment(commitment) {
  switch (commitment) {
    case "processed":
    case "confirmed":
    case "finalized":
    case void 0:
      return commitment;
    case "recent":
      return "processed";
    case "single":
    case "singleGossip":
      return "confirmed";
    case "max":
    case "root":
      return "finalized";
    default:
      return void 0;
  }
}

// node_modules/.pnpm/@solana+wallet-standard-chains@1.1.1/node_modules/@solana/wallet-standard-chains/lib/esm/index.js
var SOLANA_MAINNET_CHAIN = "solana:mainnet";
var SOLANA_DEVNET_CHAIN = "solana:devnet";
var SOLANA_TESTNET_CHAIN = "solana:testnet";
var SOLANA_LOCALNET_CHAIN = "solana:localnet";

// node_modules/.pnpm/@solana+wallet-standard-util@1.1.2/node_modules/@solana/wallet-standard-util/lib/esm/endpoint.js
var MAINNET_ENDPOINT = "https://api.mainnet-beta.solana.com";
function getChainForEndpoint(endpoint) {
  if (endpoint.includes(MAINNET_ENDPOINT))
    return SOLANA_MAINNET_CHAIN;
  if (/\bdevnet\b/i.test(endpoint))
    return SOLANA_DEVNET_CHAIN;
  if (/\btestnet\b/i.test(endpoint))
    return SOLANA_TESTNET_CHAIN;
  if (/\blocalhost\b/i.test(endpoint) || /\b127\.0\.0\.1\b/.test(endpoint))
    return SOLANA_LOCALNET_CHAIN;
  return SOLANA_MAINNET_CHAIN;
}

// node_modules/.pnpm/@solana+wallet-standard-util@1.1.2/node_modules/@solana/wallet-standard-util/lib/esm/signIn.js
var DOMAIN = "(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n";
var ADDRESS = "(?<address>[^\\n]+)(?:\\n|$)";
var STATEMENT = "(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??";
var URI = "(?:\\nURI: (?<uri>[^\\n]+))?";
var VERSION = "(?:\\nVersion: (?<version>[^\\n]+))?";
var CHAIN_ID = "(?:\\nChain ID: (?<chainId>[^\\n]+))?";
var NONCE = "(?:\\nNonce: (?<nonce>[^\\n]+))?";
var ISSUED_AT = "(?:\\nIssued At: (?<issuedAt>[^\\n]+))?";
var EXPIRATION_TIME = "(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?";
var NOT_BEFORE = "(?:\\nNot Before: (?<notBefore>[^\\n]+))?";
var REQUEST_ID = "(?:\\nRequest ID: (?<requestId>[^\\n]+))?";
var RESOURCES = "(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?";
var FIELDS = `${URI}${VERSION}${CHAIN_ID}${NONCE}${ISSUED_AT}${EXPIRATION_TIME}${NOT_BEFORE}${REQUEST_ID}${RESOURCES}`;
var MESSAGE = new RegExp(`^${DOMAIN}${ADDRESS}${STATEMENT}${FIELDS}\\n*$`);
function createSignInMessageText(input) {
  let message = `${input.domain} wants you to sign in with your Solana account:
`;
  message += `${input.address}`;
  if (input.statement) {
    message += `

${input.statement}`;
  }
  const fields = [];
  if (input.uri) {
    fields.push(`URI: ${input.uri}`);
  }
  if (input.version) {
    fields.push(`Version: ${input.version}`);
  }
  if (input.chainId) {
    fields.push(`Chain ID: ${input.chainId}`);
  }
  if (input.nonce) {
    fields.push(`Nonce: ${input.nonce}`);
  }
  if (input.issuedAt) {
    fields.push(`Issued At: ${input.issuedAt}`);
  }
  if (input.expirationTime) {
    fields.push(`Expiration Time: ${input.expirationTime}`);
  }
  if (input.notBefore) {
    fields.push(`Not Before: ${input.notBefore}`);
  }
  if (input.requestId) {
    fields.push(`Request ID: ${input.requestId}`);
  }
  if (input.resources) {
    fields.push(`Resources:`);
    for (const resource of input.resources) {
      fields.push(`- ${resource}`);
    }
  }
  if (fields.length) {
    message += `

${fields.join("\n")}`;
  }
  return message;
}

// node_modules/.pnpm/@solana+errors@4.0.0_typescript@5.9.3/node_modules/@solana/errors/dist/index.browser.mjs
var SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED2 = 1;
var SOLANA_ERROR__INVALID_NONCE2 = 2;
var SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND2 = 3;
var SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE2 = 4;
var SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH2 = 5;
var SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE2 = 6;
var SOLANA_ERROR__MALFORMED_BIGINT_STRING2 = 7;
var SOLANA_ERROR__MALFORMED_NUMBER_STRING2 = 8;
var SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE2 = 9;
var SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR2 = 10;
var SOLANA_ERROR__JSON_RPC__PARSE_ERROR2 = -32700;
var SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR2 = -32603;
var SOLANA_ERROR__JSON_RPC__INVALID_PARAMS2 = -32602;
var SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND2 = -32601;
var SOLANA_ERROR__JSON_RPC__INVALID_REQUEST2 = -32600;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_UNREACHABLE = -32019;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_NOT_EPOCH_BOUNDARY = -32018;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_EPOCH_REWARDS_PERIOD_ACTIVE = -32017;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED2 = -32016;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION2 = -32015;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET2 = -32014;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH2 = -32013;
var SOLANA_ERROR__JSON_RPC__SCAN_ERROR2 = -32012;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE2 = -32011;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX2 = -32010;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED2 = -32009;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT2 = -32008;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED2 = -32007;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE2 = -32006;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY2 = -32005;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE2 = -32004;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE2 = -32003;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE2 = -32002;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP2 = -32001;
var SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH2 = 28e5;
var SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE2 = 2800001;
var SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS2 = 2800002;
var SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY2 = 2800003;
var SOLANA_ERROR__ADDRESSES__MALFORMED_PDA2 = 2800004;
var SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE2 = 2800005;
var SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED2 = 2800006;
var SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED2 = 2800007;
var SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE2 = 2800008;
var SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED2 = 2800009;
var SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER2 = 2800010;
var SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS2 = 2800011;
var SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND2 = 323e4;
var SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND2 = 32300001;
var SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT2 = 3230002;
var SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT2 = 3230003;
var SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED2 = 3230004;
var SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT2 = 361e4;
var SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED2 = 3610001;
var SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED2 = 3610002;
var SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED2 = 3610003;
var SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED2 = 3610004;
var SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED2 = 3610005;
var SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED2 = 3610006;
var SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY2 = 3610007;
var SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED2 = 3611e3;
var SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH2 = 3704e3;
var SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH2 = 3704001;
var SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH2 = 3704002;
var SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE2 = 3704003;
var SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY2 = 3704004;
var SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS2 = 4128e3;
var SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA2 = 4128001;
var SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH2 = 4128002;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN2 = 4615e3;
var SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR2 = 4615001;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT2 = 4615002;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA2 = 4615003;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA2 = 4615004;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL2 = 4615005;
var SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS2 = 4615006;
var SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID2 = 4615007;
var SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE2 = 4615008;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED2 = 4615009;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT2 = 4615010;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION2 = 4615011;
var SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID2 = 4615012;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND2 = 4615013;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED2 = 4615014;
var SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE2 = 4615015;
var SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED2 = 4615016;
var SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX2 = 4615017;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED2 = 4615018;
var SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED2 = 4615019;
var SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS2 = 4615020;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED2 = 4615021;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE2 = 4615022;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED2 = 4615023;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING2 = 4615024;
var SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC2 = 4615025;
var SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM2 = 4615026;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR2 = 4615027;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED2 = 4615028;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE2 = 4615029;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT2 = 4615030;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID2 = 4615031;
var SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH2 = 4615032;
var SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT2 = 4615033;
var SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED2 = 4615034;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED2 = 4615035;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS2 = 4615036;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC2 = 4615037;
var SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED2 = 4615038;
var SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION2 = 4615039;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE2 = 4615040;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE2 = 4615041;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE2 = 4615042;
var SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE2 = 4615043;
var SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY2 = 4615044;
var SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR2 = 4615045;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT2 = 4615046;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER2 = 4615047;
var SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW2 = 4615048;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR2 = 4615049;
var SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER2 = 4615050;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED2 = 4615051;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED2 = 4615052;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED2 = 4615053;
var SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS2 = 4615054;
var SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS2 = 5508e3;
var SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER2 = 5508001;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER2 = 5508002;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER2 = 5508003;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER2 = 5508004;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER2 = 5508005;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER2 = 5508006;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER2 = 5508007;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER2 = 5508008;
var SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS2 = 5508009;
var SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING2 = 5508010;
var SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED2 = 5508011;
var SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES2 = 5663e3;
var SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE2 = 5663001;
var SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME2 = 5663002;
var SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME2 = 5663003;
var SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE2 = 5663004;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING2 = 5663005;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE2 = 5663006;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND2 = 5663007;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING2 = 5663008;
var SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING2 = 5663009;
var SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING2 = 5663010;
var SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING2 = 5663011;
var SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING2 = 5663012;
var SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING2 = 5663013;
var SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE2 = 5663014;
var SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION2 = 5663015;
var SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES2 = 5663016;
var SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH2 = 5663017;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT2 = 5663018;
var SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT2 = 5663019;
var SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT2 = 5663020;
var SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_NOT_SUPPORTED = 5663021;
var SOLANA_ERROR__TRANSACTION__NONCE_ACCOUNT_CANNOT_BE_IN_LOOKUP_TABLE = 5663022;
var SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN2 = 705e4;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE2 = 7050001;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE2 = 7050002;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND2 = 7050003;
var SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND2 = 7050004;
var SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE2 = 7050005;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE2 = 7050006;
var SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED2 = 7050007;
var SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND2 = 7050008;
var SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP2 = 7050009;
var SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE2 = 7050010;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX2 = 7050011;
var SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE2 = 7050012;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION2 = 7050013;
var SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE2 = 7050014;
var SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE2 = 7050015;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING2 = 7050016;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT2 = 7050017;
var SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION2 = 7050018;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT2 = 7050019;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT2 = 7050020;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT2 = 7050021;
var SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS2 = 7050022;
var SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND2 = 7050023;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER2 = 7050024;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA2 = 7050025;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX2 = 7050026;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT2 = 7050027;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT2 = 7050028;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT2 = 7050029;
var SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION2 = 7050030;
var SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT2 = 7050031;
var SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED2 = 7050032;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT2 = 7050033;
var SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED2 = 7050034;
var SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED2 = 7050035;
var SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION2 = 7050036;
var SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN = 7618e3;
var SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE = 7618001;
var SOLANA_ERROR__INSTRUCTION_PLANS__EMPTY_INSTRUCTION_PLAN = 7618002;
var SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_TO_EXECUTE_TRANSACTION_PLAN = 7618003;
var SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY2 = 8078e3;
var SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH2 = 8078001;
var SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH2 = 8078002;
var SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH2 = 8078003;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH2 = 8078004;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH2 = 8078005;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH2 = 8078006;
var SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS2 = 8078007;
var SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE2 = 8078008;
var SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT2 = 8078009;
var SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT2 = 8078010;
var SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE2 = 8078011;
var SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE2 = 8078012;
var SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH2 = 8078013;
var SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE2 = 8078014;
var SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT2 = 8078015;
var SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE2 = 8078016;
var SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE2 = 8078017;
var SOLANA_ERROR__CODECS__INVALID_CONSTANT2 = 8078018;
var SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE2 = 8078019;
var SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL2 = 8078020;
var SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES2 = 8078021;
var SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS2 = 8078022;
var SOLANA_ERROR__CODECS__EXPECTED_DECODER_TO_CONSUME_ENTIRE_BYTE_ARRAY = 8078023;
var SOLANA_ERROR__RPC__INTEGER_OVERFLOW2 = 81e5;
var SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN2 = 8100001;
var SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR2 = 8100002;
var SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD2 = 8100003;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN2 = 819e4;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID2 = 8190001;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED2 = 8190002;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED2 = 8190003;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT2 = 8190004;
var SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING2 = 99e5;
var SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE2 = 9900001;
var SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING2 = 9900002;
var SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE2 = 9900003;
var SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED2 = 9900004;
var SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND = 9900005;
var SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND = 9900006;
var SolanaErrorMessages2 = {
  [SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND2]: "Account not found at address: $address",
  [SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED2]: "Not all accounts were decoded. Encoded accounts found at addresses: $addresses.",
  [SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT2]: "Expected decoded account at address: $address",
  [SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT2]: "Failed to decode account data at address: $address",
  [SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND2]: "Accounts not found at addresses: $addresses",
  [SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED2]: "Unable to find a viable program address bump seed.",
  [SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS2]: "$putativeAddress is not a base58-encoded address.",
  [SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH2]: "Expected base58 encoded address to decode to a byte array of length 32. Actual length: $actualLength.",
  [SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY2]: "The `CryptoKey` must be an `Ed25519` public key.",
  [SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS2]: "$putativeOffCurveAddress is not a base58-encoded off-curve address.",
  [SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE2]: "Invalid seeds; point must fall off the Ed25519 curve.",
  [SOLANA_ERROR__ADDRESSES__MALFORMED_PDA2]: "Expected given program derived address to have the following format: [Address, ProgramDerivedAddressBump].",
  [SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED2]: "A maximum of $maxSeeds seeds, including the bump seed, may be supplied when creating an address. Received: $actual.",
  [SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED2]: "The seed at index $index with length $actual exceeds the maximum length of $maxSeedLength bytes.",
  [SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE2]: "Expected program derived address bump to be in the range [0, 255], got: $bump.",
  [SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER2]: "Program address cannot end with PDA marker.",
  [SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE2]: "Expected base58-encoded address string of length in the range [32, 44]. Actual length: $actualLength.",
  [SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE2]: "Expected base58-encoded blockash string of length in the range [32, 44]. Actual length: $actualLength.",
  [SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED2]: "The network has progressed past the last block for which this transaction could have been committed.",
  [SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY2]: "Codec [$codecDescription] cannot decode empty byte arrays.",
  [SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS2]: "Enum codec cannot use lexical values [$stringValues] as discriminators. Either remove all lexical values or set `useValuesAsDiscriminators` to `false`.",
  [SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL2]: "Sentinel [$hexSentinel] must not be present in encoded bytes [$hexEncodedBytes].",
  [SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH2]: "Encoder and decoder must have the same fixed size, got [$encoderFixedSize] and [$decoderFixedSize].",
  [SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH2]: "Encoder and decoder must have the same max size, got [$encoderMaxSize] and [$decoderMaxSize].",
  [SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH2]: "Encoder and decoder must either both be fixed-size or variable-size.",
  [SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE2]: "Enum discriminator out of range. Expected a number in [$formattedValidDiscriminators], got $discriminator.",
  [SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH2]: "Expected a fixed-size codec, got a variable-size one.",
  [SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH2]: "Codec [$codecDescription] expected a positive byte length, got $bytesLength.",
  [SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH2]: "Expected a variable-size codec, got a fixed-size one.",
  [SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE2]: "Codec [$codecDescription] expected zero-value [$hexZeroValue] to have the same size as the provided fixed-size item [$expectedSize bytes].",
  [SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH2]: "Codec [$codecDescription] expected $expected bytes, got $bytesLength.",
  [SOLANA_ERROR__CODECS__INVALID_CONSTANT2]: "Expected byte array constant [$hexConstant] to be present in data [$hexData] at offset [$offset].",
  [SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT2]: "Invalid discriminated union variant. Expected one of [$variants], got $value.",
  [SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT2]: "Invalid enum variant. Expected one of [$stringValues] or a number in [$formattedNumericalValues], got $variant.",
  [SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT2]: "Invalid literal union variant. Expected one of [$variants], got $value.",
  [SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS2]: "Expected [$codecDescription] to have $expected items, got $actual.",
  [SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE2]: "Invalid value $value for base $base with alphabet $alphabet.",
  [SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE2]: "Literal union discriminator out of range. Expected a number between $minRange and $maxRange, got $discriminator.",
  [SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE2]: "Codec [$codecDescription] expected number to be in the range [$min, $max], got $value.",
  [SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE2]: "Codec [$codecDescription] expected offset to be in the range [0, $bytesLength], got $offset.",
  [SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES2]: "Expected sentinel [$hexSentinel] to be present in decoded bytes [$hexDecodedBytes].",
  [SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE2]: "Union variant out of range. Expected an index between $minRange and $maxRange, got $variant.",
  [SOLANA_ERROR__CODECS__EXPECTED_DECODER_TO_CONSUME_ENTIRE_BYTE_ARRAY]: "This decoder expected a byte array of exactly $expectedLength bytes, but $numExcessBytes unexpected excess bytes remained after decoding. Are you sure that you have chosen the correct decoder for this data?",
  [SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED2]: "No random values implementation could be found.",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED2]: "instruction requires an uninitialized account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED2]: "instruction tries to borrow reference for an account which is already borrowed",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING2]: "instruction left account with an outstanding borrowed reference",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED2]: "program other than the account's owner changed the size of the account data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL2]: "account data too small for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE2]: "instruction expected an executable account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT2]: "An account does not have enough lamports to be rent-exempt",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW2]: "Program arithmetic overflowed",
  [SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR2]: "Failed to serialize or deserialize account data: $encodedData",
  [SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS2]: "Builtin programs must consume compute units",
  [SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH2]: "Cross-program invocation call depth too deep",
  [SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED2]: "Computational budget exceeded",
  [SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM2]: "custom program error: #$code",
  [SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX2]: "instruction contains duplicate accounts",
  [SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC2]: "instruction modifications of multiply-passed account differ",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT2]: "executable accounts must be rent exempt",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED2]: "instruction changed executable accounts data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE2]: "instruction changed the balance of an executable account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED2]: "instruction changed executable bit of an account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED2]: "instruction modified data of an account it does not own",
  [SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND2]: "instruction spent from the balance of an account it does not own",
  [SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR2]: "generic instruction error",
  [SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER2]: "Provided owner is not allowed",
  [SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE2]: "Account is immutable",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY2]: "Incorrect authority provided",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID2]: "incorrect program id for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS2]: "insufficient funds for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA2]: "invalid account data for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER2]: "Invalid account owner",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT2]: "invalid program argument",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR2]: "program returned invalid error code",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA2]: "invalid instruction data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC2]: "Failed to reallocate account data",
  [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS2]: "Provided seeds do not result in a valid address",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED2]: "Accounts data allocations exceeded the maximum allowed per transaction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED2]: "Max accounts exceeded",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED2]: "Max instruction trace length exceeded",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED2]: "Length of the seed is too long for address generation",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT2]: "An account required by the instruction is missing",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE2]: "missing required signature for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID2]: "instruction illegally modified the program id of an account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS2]: "insufficient account keys for instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION2]: "Cross-program invocation with unauthorized signer or writable account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE2]: "Failed to create program execution environment",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE2]: "Program failed to compile",
  [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE2]: "Program failed to complete",
  [SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED2]: "instruction modified data of a read-only account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE2]: "instruction changed the balance of a read-only account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED2]: "Cross-program invocation reentrancy not allowed for this instruction",
  [SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED2]: "instruction modified rent epoch of an account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION2]: "sum of account balances before and after instruction do not match",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT2]: "instruction requires an initialized account",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN2]: "",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID2]: "Unsupported program id",
  [SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR2]: "Unsupported sysvar",
  [SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND]: "Invalid instruction plan kind: $kind.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__EMPTY_INSTRUCTION_PLAN]: "The provided instruction plan is empty.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_TO_EXECUTE_TRANSACTION_PLAN]: "The provided transaction plan failed to execute. See the `transactionPlanResult` attribute and the `cause` error for more details.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN]: "The provided message has insufficient capacity to accommodate the next instruction(s) in this plan. Expected at least $numBytesRequired free byte(s), got $numFreeBytes byte(s).",
  [SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND]: "Invalid transaction plan kind: $kind.",
  [SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE]: "No more instructions to pack; the message packer has completed the instruction plan.",
  [SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS2]: "The instruction does not have any accounts.",
  [SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA2]: "The instruction does not have any data.",
  [SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH2]: "Expected instruction to have progress address $expectedProgramAddress, got $actualProgramAddress.",
  [SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH2]: "Expected base58 encoded blockhash to decode to a byte array of length 32. Actual length: $actualLength.",
  [SOLANA_ERROR__INVALID_NONCE2]: "The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`",
  [SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING2]: "Invariant violation: Found no abortable iterable cache entry for key `$cacheKey`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED2]: "Invariant violation: This data publisher does not publish to the channel named `$channelName`. Supported channels include $supportedChannelNames.",
  [SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE2]: "Invariant violation: WebSocket message iterator state is corrupt; iterated without first resolving existing message promise. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING2]: "Invariant violation: WebSocket message iterator is missing state storage. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE2]: "Invariant violation: Switch statement non-exhaustive. Received unexpected value `$unexpectedValue`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR2]: "JSON-RPC error: Internal JSON-RPC error ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__INVALID_PARAMS2]: "JSON-RPC error: Invalid method parameter(s) ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__INVALID_REQUEST2]: "JSON-RPC error: The JSON sent is not a valid `Request` object ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND2]: "JSON-RPC error: The method does not exist / is not available ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__PARSE_ERROR2]: "JSON-RPC error: An error occurred on the server while parsing the JSON text ($__serverMessage)",
  [SOLANA_ERROR__JSON_RPC__SCAN_ERROR2]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP2]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE2]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET2]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_EPOCH_REWARDS_PERIOD_ACTIVE]: "Epoch rewards period still active at slot $slot",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX2]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED2]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_UNREACHABLE]: "Failed to query long-term storage; please try again",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED2]: "Minimum context slot has not been reached",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY2]: "Node is unhealthy; behind by $numSlotsBehind slots",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT2]: "No snapshot",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE2]: "Transaction simulation failed",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_NOT_EPOCH_BOUNDARY]: "Rewards cannot be found because slot $slot is not the epoch boundary. This may be due to gap in the queried node's local ledger or long-term storage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED2]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE2]: "Transaction history is not available from this node",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE2]: "$__serverMessage",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH2]: "Transaction signature length mismatch",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE2]: "Transaction signature verification failure",
  [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION2]: "$__serverMessage",
  [SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH2]: "Key pair bytes must be of length 64, got $byteLength.",
  [SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH2]: "Expected private key bytes with length 32. Actual length: $actualLength.",
  [SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH2]: "Expected base58-encoded signature to decode to a byte array of length 64. Actual length: $actualLength.",
  [SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY2]: "The provided private key does not match the provided public key.",
  [SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE2]: "Expected base58-encoded signature string of length in the range [64, 88]. Actual length: $actualLength.",
  [SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE2]: "Lamports value must be in the range [0, 2e64-1]",
  [SOLANA_ERROR__MALFORMED_BIGINT_STRING2]: "`$value` cannot be parsed as a `BigInt`",
  [SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR2]: "$message",
  [SOLANA_ERROR__MALFORMED_NUMBER_STRING2]: "`$value` cannot be parsed as a `Number`",
  [SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND2]: "No nonce account could be found at address `$nonceAccountAddress`",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN2]: "The notification name must end in 'Notifications' and the API must supply a subscription plan creator function for the notification '$notificationName'.",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED2]: "WebSocket was closed before payload could be added to the send buffer",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED2]: "WebSocket connection closed",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT2]: "WebSocket failed to connect",
  [SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID2]: "Failed to obtain a subscription id from the server",
  [SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD2]: "Could not find an API plan for RPC method: `$method`",
  [SOLANA_ERROR__RPC__INTEGER_OVERFLOW2]: "The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was `$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds `Number.MAX_SAFE_INTEGER`.",
  [SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR2]: "HTTP error ($statusCode): $message",
  [SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN2]: "HTTP header(s) forbidden: $headers. Learn more at https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.",
  [SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS2]: "Multiple distinct signers were identified for address `$address`. Please ensure that you are using the same signer instance for each address.",
  [SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER2]: "The provided value does not implement the `KeyPairSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER2]: "The provided value does not implement the `MessageModifyingSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER2]: "The provided value does not implement the `MessagePartialSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER2]: "The provided value does not implement any of the `MessageSigner` interfaces",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER2]: "The provided value does not implement the `TransactionModifyingSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER2]: "The provided value does not implement the `TransactionPartialSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER2]: "The provided value does not implement the `TransactionSendingSigner` interface",
  [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER2]: "The provided value does not implement any of the `TransactionSigner` interfaces",
  [SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS2]: "More than one `TransactionSendingSigner` was identified.",
  [SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING2]: "No `TransactionSendingSigner` was identified. Please provide a valid `TransactionWithSingleSendingSigner` transaction.",
  [SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED2]: "Wallet account signers do not support signing multiple messages/transactions in a single operation",
  [SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY2]: "Cannot export a non-extractable key.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED2]: "No digest implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT2]: "Cryptographic operations are only allowed in secure browser contexts. Read more here: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED2]: "This runtime does not support the generation of Ed25519 key pairs.\n\nInstall @solana/webcrypto-ed25519-polyfill and call its `install` function before generating keys in environments that do not support Ed25519.\n\nFor a list of runtimes that currently support Ed25519 operations, visit https://github.com/WICG/webcrypto-secure-curves/issues/20.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED2]: "No signature verification implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED2]: "No key generation implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED2]: "No signing implementation could be found.",
  [SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED2]: "No key export implementation could be found.",
  [SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE2]: "Timestamp value must be in the range [-(2n ** 63n), (2n ** 63n) - 1]. `$value` given",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING2]: "Transaction processing left an account with an outstanding borrowed reference",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE2]: "Account in use",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE2]: "Account loaded twice",
  [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND2]: "Attempt to debit an account but found no record of a prior credit.",
  [SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND2]: "Transaction loads an address table account that doesn't exist",
  [SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED2]: "This transaction has already been processed",
  [SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND2]: "Blockhash not found",
  [SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP2]: "Loader call chain is too deep",
  [SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE2]: "Transactions are currently disabled due to cluster maintenance",
  [SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION2]: "Transaction contains a duplicate instruction ($index) that is not allowed",
  [SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE2]: "Insufficient funds for fee",
  [SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT2]: "Transaction results in an account ($accountIndex) with insufficient funds for rent",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE2]: "This account may not be used to pay transaction fees",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX2]: "Transaction contains an invalid account reference",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA2]: "Transaction loads an address table account with invalid data",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX2]: "Transaction address table lookup uses an invalid index",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER2]: "Transaction loads an address table account with an invalid owner",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT2]: "LoadedAccountsDataSizeLimit set for transaction must be greater than 0.",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION2]: "This program may not be used for executing instructions",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT2]: "Transaction leaves an account with a lower balance than rent-exempt minimum",
  [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT2]: "Transaction loads a writable account that cannot be written",
  [SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED2]: "Transaction exceeded max loaded accounts data size cap",
  [SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE2]: "Transaction requires a fee but has no signature present",
  [SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND2]: "Attempt to load a program that does not exist",
  [SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED2]: "Execution of the program referenced by account at index $accountIndex is temporarily restricted.",
  [SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED2]: "ResanitizationNeeded",
  [SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE2]: "Transaction failed to sanitize accounts offsets correctly",
  [SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE2]: "Transaction did not pass signature verification",
  [SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS2]: "Transaction locked too many accounts",
  [SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION2]: "Sum of account balances before and after transaction do not match",
  [SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN2]: "The transaction failed with the error `$errorName`",
  [SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION2]: "Transaction version is unsupported",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT2]: "Transaction would exceed account data limit within the block",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT2]: "Transaction would exceed total account data limit",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT2]: "Transaction would exceed max account limit within the block",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT2]: "Transaction would exceed max Block Cost Limit",
  [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT2]: "Transaction would exceed max Vote Cost Limit",
  [SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION2]: "Attempted to sign a transaction with an address that is not a signer for it",
  [SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING2]: "Transaction is missing an address at index: $index.",
  [SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES2]: "Transaction has no expected signers therefore it cannot be encoded",
  [SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT2]: "Transaction size $transactionSize exceeds limit of $transactionSizeLimit bytes",
  [SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME2]: "Transaction does not have a blockhash lifetime",
  [SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME2]: "Transaction is not a durable nonce transaction",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING2]: "Contents of these address lookup tables unknown: $lookupTableAddresses",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE2]: "Lookup of address at index $highestRequestedIndex failed for lookup table `$lookupTableAddress`. Highest known index is $highestKnownIndex. The lookup table may have been extended since its contents were retrieved",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING2]: "No fee payer set in CompiledTransaction",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND2]: "Could not find program address at index $index",
  [SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT2]: "Failed to estimate the compute unit consumption for this transaction message. This is likely because simulating the transaction failed. Inspect the `cause` property of this error to learn more",
  [SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT2]: "Transaction failed when it was simulated in order to estimate the compute unit consumption. The compute unit estimate provided is for a transaction that failed when simulated and may not be representative of the compute units this transaction would consume if successful. Inspect the `cause` property of this error to learn more",
  [SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING2]: "Transaction is missing a fee payer.",
  [SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING2]: "Could not determine this transaction's signature. Make sure that the transaction has been signed by its fee payer.",
  [SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE2]: "Transaction first instruction is not advance nonce account instruction.",
  [SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING2]: "Transaction with no instructions cannot be durable nonce transaction.",
  [SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES2]: "This transaction includes an address (`$programAddress`) which is both invoked and set as the fee payer. Program addresses may not pay fees",
  [SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE2]: "This transaction includes an address (`$programAddress`) which is both invoked and marked writable. Program addresses may not be writable",
  [SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH2]: "The transaction message expected the transaction to have $numRequiredSignatures signatures, got $signaturesLength.",
  [SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING2]: "Transaction is missing signatures for addresses: $addresses.",
  [SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE2]: "Transaction version must be in the range [0, 127]. `$actualVersion` given",
  [SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_NOT_SUPPORTED]: "This version of Kit does not support decoding transactions with version $unsupportedVersion. The current max supported version is 0.",
  [SOLANA_ERROR__TRANSACTION__NONCE_ACCOUNT_CANNOT_BE_IN_LOOKUP_TABLE]: "The transaction has a durable nonce lifetime (with nonce `$nonce`), but the nonce account address is in a lookup table. The lifetime constraint cannot be constructed without fetching the lookup tables for the transaction."
};

// node_modules/.pnpm/@solana+codecs-core@4.0.0_typescript@5.9.3/node_modules/@solana/codecs-core/dist/index.browser.mjs
function createDecoder2(decoder) {
  return Object.freeze({
    ...decoder,
    decode: (bytes, offset2 = 0) => decoder.read(bytes, offset2)[0]
  });
}

// node_modules/.pnpm/@solana+codecs-strings@4.0.0_fastestsmallesttextencoderdecoder@1.0.22_typescript@5.9.3/node_modules/@solana/codecs-strings/dist/index.browser.mjs
var getBaseXDecoder = (alphabet4) => {
  return createDecoder2({
    read(rawBytes, offset2) {
      const bytes = offset2 === 0 ? rawBytes : rawBytes.slice(offset2);
      if (bytes.length === 0) return ["", 0];
      let trailIndex = bytes.findIndex((n) => n !== 0);
      trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
      const leadingZeroes = alphabet4[0].repeat(trailIndex);
      if (trailIndex === bytes.length) return [leadingZeroes, rawBytes.length];
      const base10Number = bytes.slice(trailIndex).reduce((sum, byte) => sum * 256n + BigInt(byte), 0n);
      const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
      return [leadingZeroes + tailChars, rawBytes.length];
    }
  });
};
function getBaseXFromBigInt(value, alphabet4) {
  const base = BigInt(alphabet4.length);
  const tailChars = [];
  while (value > 0n) {
    tailChars.unshift(alphabet4[Number(value % base)]);
    value /= base;
  }
  return tailChars.join("");
}
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Decoder = () => getBaseXDecoder(alphabet2);
var e = globalThis.TextDecoder;
var o = globalThis.TextEncoder;

// node_modules/.pnpm/@solana-mobile+mobile-wallet-adapter-protocol@2.2.5_@solana+wallet-adapter-base@0.9.27__bc27620ec0e9c7695328cd7e67560e81/node_modules/@solana-mobile/mobile-wallet-adapter-protocol/lib/esm/index.browser.js
var SolanaMobileWalletAdapterErrorCode = {
  ERROR_ASSOCIATION_PORT_OUT_OF_RANGE: "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
  ERROR_REFLECTOR_ID_OUT_OF_RANGE: "ERROR_REFLECTOR_ID_OUT_OF_RANGE",
  ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
  ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
  ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
  ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
  ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
  ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION",
  ERROR_BROWSER_NOT_SUPPORTED: "ERROR_BROWSER_NOT_SUPPORTED"
};
var SolanaMobileWalletAdapterError = class extends Error {
  constructor(...args) {
    const [code, message, data] = args;
    super(message);
    this.code = code;
    this.data = data;
    this.name = "SolanaMobileWalletAdapterError";
  }
};
var SolanaMobileWalletAdapterProtocolError = class extends Error {
  constructor(...args) {
    const [jsonRpcMessageId, code, message, data] = args;
    super(message);
    this.code = code;
    this.data = data;
    this.jsonRpcMessageId = jsonRpcMessageId;
    this.name = "SolanaMobileWalletAdapterProtocolError";
  }
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function encode2(input) {
  return window.btoa(input);
}
function fromUint8Array$1(byteArray, urlsafe) {
  const base64 = window.btoa(String.fromCharCode.call(null, ...byteArray));
  if (urlsafe) {
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  } else
    return base64;
}
function toUint8Array(base64EncodedByteArray) {
  return new Uint8Array(window.atob(base64EncodedByteArray).split("").map((c) => c.charCodeAt(0)));
}
function createHelloReq(ecdhPublicKey, associationKeypairPrivateKey) {
  return __awaiter(this, void 0, void 0, function* () {
    const publicKeyBuffer = yield crypto.subtle.exportKey("raw", ecdhPublicKey);
    const signatureBuffer = yield crypto.subtle.sign({ hash: "SHA-256", name: "ECDSA" }, associationKeypairPrivateKey, publicKeyBuffer);
    const response = new Uint8Array(publicKeyBuffer.byteLength + signatureBuffer.byteLength);
    response.set(new Uint8Array(publicKeyBuffer), 0);
    response.set(new Uint8Array(signatureBuffer), publicKeyBuffer.byteLength);
    return response;
  });
}
function createSIWSMessage(payload) {
  return createSignInMessageText(payload);
}
function createSIWSMessageBase64Url(payload) {
  return encode2(createSIWSMessage(payload)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
var SolanaSignTransactions = "solana:signTransactions";
var SolanaCloneAuthorization = "solana:cloneAuthorization";
function fromUint8Array(byteArray) {
  return getBase58Decoder().decode(byteArray);
}
function base64ToBase58(base64EncodedString) {
  return fromUint8Array(toUint8Array(base64EncodedString));
}
function createMobileWalletProxy(protocolVersion, protocolRequestHandler) {
  return new Proxy({}, {
    get(target, p) {
      if (p === "then") {
        return null;
      }
      if (target[p] == null) {
        target[p] = function(inputParams) {
          return __awaiter(this, void 0, void 0, function* () {
            const { method, params } = handleMobileWalletRequest(p, inputParams, protocolVersion);
            const result = yield protocolRequestHandler(method, params);
            if (method === "authorize" && params.sign_in_payload && !result.sign_in_result) {
              result["sign_in_result"] = yield signInFallback(params.sign_in_payload, result, protocolRequestHandler);
            }
            return handleMobileWalletResponse(p, result, protocolVersion);
          });
        };
      }
      return target[p];
    },
    defineProperty() {
      return false;
    },
    deleteProperty() {
      return false;
    }
  });
}
function handleMobileWalletRequest(methodName, methodParams, protocolVersion) {
  let params = methodParams;
  let method = methodName.toString().replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`).toLowerCase();
  switch (methodName) {
    case "authorize": {
      let { chain } = params;
      if (protocolVersion === "legacy") {
        switch (chain) {
          case "solana:testnet": {
            chain = "testnet";
            break;
          }
          case "solana:devnet": {
            chain = "devnet";
            break;
          }
          case "solana:mainnet": {
            chain = "mainnet-beta";
            break;
          }
          default: {
            chain = params.cluster;
          }
        }
        params.cluster = chain;
      } else {
        switch (chain) {
          case "testnet":
          case "devnet": {
            chain = `solana:${chain}`;
            break;
          }
          case "mainnet-beta": {
            chain = "solana:mainnet";
            break;
          }
        }
        params.chain = chain;
      }
    }
    case "reauthorize": {
      const { auth_token, identity } = params;
      if (auth_token) {
        switch (protocolVersion) {
          case "legacy": {
            method = "reauthorize";
            params = { auth_token, identity };
            break;
          }
          default: {
            method = "authorize";
            break;
          }
        }
      }
      break;
    }
  }
  return { method, params };
}
function handleMobileWalletResponse(method, response, protocolVersion) {
  switch (method) {
    case "getCapabilities": {
      const capabilities = response;
      switch (protocolVersion) {
        case "legacy": {
          const features = [SolanaSignTransactions];
          if (capabilities.supports_clone_authorization === true) {
            features.push(SolanaCloneAuthorization);
          }
          return Object.assign(Object.assign({}, capabilities), { features });
        }
        case "v1": {
          return Object.assign(Object.assign({}, capabilities), { supports_sign_and_send_transactions: true, supports_clone_authorization: capabilities.features.includes(SolanaCloneAuthorization) });
        }
      }
    }
  }
  return response;
}
function signInFallback(signInPayload, authorizationResult, protocolRequestHandler) {
  var _a;
  return __awaiter(this, void 0, void 0, function* () {
    const domain = (_a = signInPayload.domain) !== null && _a !== void 0 ? _a : window.location.host;
    const address = authorizationResult.accounts[0].address;
    const siwsMessage = createSIWSMessageBase64Url(Object.assign(Object.assign({}, signInPayload), { domain, address: base64ToBase58(address) }));
    const signMessageResult = yield protocolRequestHandler("sign_messages", {
      addresses: [address],
      payloads: [siwsMessage]
    });
    const signedPayload = toUint8Array(signMessageResult.signed_payloads[0]);
    const signedMessage = fromUint8Array$1(signedPayload.slice(0, signedPayload.length - 64));
    const signature2 = fromUint8Array$1(signedPayload.slice(signedPayload.length - 64));
    const signInResult = {
      address,
      // Workaround: some wallets have been observed to only reply with the message signature.
      // This is non-compliant with the spec, but in the interest of maximizing compatibility,
      // detect this case and reuse the original message.
      signed_message: signedMessage.length == 0 ? siwsMessage : signedMessage,
      signature: signature2
    };
    return signInResult;
  });
}
var SEQUENCE_NUMBER_BYTES = 4;
function createSequenceNumberVector(sequenceNumber) {
  if (sequenceNumber >= 4294967296) {
    throw new Error("Outbound sequence number overflow. The maximum sequence number is 32-bytes.");
  }
  const byteArray = new ArrayBuffer(SEQUENCE_NUMBER_BYTES);
  const view = new DataView(byteArray);
  view.setUint32(
    0,
    sequenceNumber,
    /* littleEndian */
    false
  );
  return new Uint8Array(byteArray);
}
var INITIALIZATION_VECTOR_BYTES = 12;
var ENCODED_PUBLIC_KEY_LENGTH_BYTES = 65;
function encryptMessage(plaintext, sequenceNumber, sharedSecret) {
  return __awaiter(this, void 0, void 0, function* () {
    const sequenceNumberVector = createSequenceNumberVector(sequenceNumber);
    const initializationVector = new Uint8Array(INITIALIZATION_VECTOR_BYTES);
    crypto.getRandomValues(initializationVector);
    const ciphertext = yield crypto.subtle.encrypt(getAlgorithmParams(sequenceNumberVector, initializationVector), sharedSecret, new TextEncoder().encode(plaintext));
    const response = new Uint8Array(sequenceNumberVector.byteLength + initializationVector.byteLength + ciphertext.byteLength);
    response.set(new Uint8Array(sequenceNumberVector), 0);
    response.set(new Uint8Array(initializationVector), sequenceNumberVector.byteLength);
    response.set(new Uint8Array(ciphertext), sequenceNumberVector.byteLength + initializationVector.byteLength);
    return response;
  });
}
function decryptMessage(message, sharedSecret) {
  return __awaiter(this, void 0, void 0, function* () {
    const sequenceNumberVector = message.slice(0, SEQUENCE_NUMBER_BYTES);
    const initializationVector = message.slice(SEQUENCE_NUMBER_BYTES, SEQUENCE_NUMBER_BYTES + INITIALIZATION_VECTOR_BYTES);
    const ciphertext = message.slice(SEQUENCE_NUMBER_BYTES + INITIALIZATION_VECTOR_BYTES);
    const plaintextBuffer = yield crypto.subtle.decrypt(getAlgorithmParams(sequenceNumberVector, initializationVector), sharedSecret, ciphertext);
    const plaintext = getUtf8Decoder().decode(plaintextBuffer);
    return plaintext;
  });
}
function getAlgorithmParams(sequenceNumber, initializationVector) {
  return {
    additionalData: sequenceNumber,
    iv: initializationVector,
    name: "AES-GCM",
    tagLength: 128
    // 16 byte tag => 128 bits
  };
}
var _utf8Decoder;
function getUtf8Decoder() {
  if (_utf8Decoder === void 0) {
    _utf8Decoder = new TextDecoder("utf-8");
  }
  return _utf8Decoder;
}
function generateAssociationKeypair() {
  return __awaiter(this, void 0, void 0, function* () {
    return yield crypto.subtle.generateKey(
      {
        name: "ECDSA",
        namedCurve: "P-256"
      },
      false,
      ["sign"]
      /* keyUsages */
    );
  });
}
function generateECDHKeypair() {
  return __awaiter(this, void 0, void 0, function* () {
    return yield crypto.subtle.generateKey(
      {
        name: "ECDH",
        namedCurve: "P-256"
      },
      false,
      ["deriveKey", "deriveBits"]
      /* keyUsages */
    );
  });
}
function arrayBufferToBase64String(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let ii = 0; ii < len; ii++) {
    binary += String.fromCharCode(bytes[ii]);
  }
  return window.btoa(binary);
}
function getRandomAssociationPort() {
  return assertAssociationPort(49152 + Math.floor(Math.random() * (65535 - 49152 + 1)));
}
function assertAssociationPort(port) {
  if (port < 49152 || port > 65535) {
    throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE, `Association port number must be between 49152 and 65535. ${port} given.`, { port });
  }
  return port;
}
function getStringWithURLUnsafeCharactersReplaced(unsafeBase64EncodedString) {
  return unsafeBase64EncodedString.replace(/[/+=]/g, (m) => ({
    "/": "_",
    "+": "-",
    "=": "."
  })[m]);
}
var INTENT_NAME = "solana-wallet";
function getPathParts(pathString) {
  return pathString.replace(/(^\/+|\/+$)/g, "").split("/");
}
function getIntentURL(methodPathname, intentUrlBase) {
  let baseUrl = null;
  if (intentUrlBase) {
    try {
      baseUrl = new URL(intentUrlBase);
    } catch (_a) {
    }
    if ((baseUrl === null || baseUrl === void 0 ? void 0 : baseUrl.protocol) !== "https:") {
      throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs");
    }
  }
  baseUrl || (baseUrl = new URL(`${INTENT_NAME}:/`));
  const pathname = methodPathname.startsWith("/") ? (
    // Method is an absolute path. Replace it wholesale.
    methodPathname
  ) : (
    // Method is a relative path. Merge it with the existing one.
    [...getPathParts(baseUrl.pathname), ...getPathParts(methodPathname)].join("/")
  );
  return new URL(pathname, baseUrl);
}
function getAssociateAndroidIntentURL(associationPublicKey, putativePort, associationURLBase, protocolVersions = ["v1"]) {
  return __awaiter(this, void 0, void 0, function* () {
    const associationPort = assertAssociationPort(putativePort);
    const exportedKey = yield crypto.subtle.exportKey("raw", associationPublicKey);
    const encodedKey = arrayBufferToBase64String(exportedKey);
    const url = getIntentURL("v1/associate/local", associationURLBase);
    url.searchParams.set("association", getStringWithURLUnsafeCharactersReplaced(encodedKey));
    url.searchParams.set("port", `${associationPort}`);
    protocolVersions.forEach((version) => {
      url.searchParams.set("v", version);
    });
    return url;
  });
}
function encryptJsonRpcMessage(jsonRpcMessage, sharedSecret) {
  return __awaiter(this, void 0, void 0, function* () {
    const plaintext = JSON.stringify(jsonRpcMessage);
    const sequenceNumber = jsonRpcMessage.id;
    return encryptMessage(plaintext, sequenceNumber, sharedSecret);
  });
}
function decryptJsonRpcMessage(message, sharedSecret) {
  return __awaiter(this, void 0, void 0, function* () {
    const plaintext = yield decryptMessage(message, sharedSecret);
    const jsonRpcMessage = JSON.parse(plaintext);
    if (Object.hasOwnProperty.call(jsonRpcMessage, "error")) {
      throw new SolanaMobileWalletAdapterProtocolError(jsonRpcMessage.id, jsonRpcMessage.error.code, jsonRpcMessage.error.message);
    }
    return jsonRpcMessage;
  });
}
function parseHelloRsp(payloadBuffer, associationPublicKey, ecdhPrivateKey) {
  return __awaiter(this, void 0, void 0, function* () {
    const [associationPublicKeyBuffer, walletPublicKey] = yield Promise.all([
      crypto.subtle.exportKey("raw", associationPublicKey),
      crypto.subtle.importKey(
        "raw",
        payloadBuffer.slice(0, ENCODED_PUBLIC_KEY_LENGTH_BYTES),
        { name: "ECDH", namedCurve: "P-256" },
        false,
        []
        /* keyUsages */
      )
    ]);
    const sharedSecret = yield crypto.subtle.deriveBits({ name: "ECDH", public: walletPublicKey }, ecdhPrivateKey, 256);
    const ecdhSecretKey = yield crypto.subtle.importKey(
      "raw",
      sharedSecret,
      "HKDF",
      false,
      ["deriveKey"]
      /* keyUsages */
    );
    const aesKeyMaterialVal = yield crypto.subtle.deriveKey({
      name: "HKDF",
      hash: "SHA-256",
      salt: new Uint8Array(associationPublicKeyBuffer),
      info: new Uint8Array()
    }, ecdhSecretKey, { name: "AES-GCM", length: 128 }, false, ["encrypt", "decrypt"]);
    return aesKeyMaterialVal;
  });
}
function parseSessionProps(message, sharedSecret) {
  return __awaiter(this, void 0, void 0, function* () {
    const plaintext = yield decryptMessage(message, sharedSecret);
    const jsonProperties = JSON.parse(plaintext);
    let protocolVersion = "legacy";
    if (Object.hasOwnProperty.call(jsonProperties, "v")) {
      switch (jsonProperties.v) {
        case 1:
        case "1":
        case "v1":
          protocolVersion = "v1";
          break;
        case "legacy":
          protocolVersion = "legacy";
          break;
        default:
          throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_INVALID_PROTOCOL_VERSION, `Unknown/unsupported protocol version: ${jsonProperties.v}`);
      }
    }
    return {
      protocol_version: protocolVersion
    };
  });
}
var Browser = {
  Firefox: 0,
  Other: 1
};
function assertUnreachable(x) {
  return x;
}
function getBrowser() {
  return navigator.userAgent.indexOf("Firefox/") !== -1 ? Browser.Firefox : Browser.Other;
}
function getDetectionPromise() {
  return new Promise((resolve, reject) => {
    function cleanup() {
      clearTimeout(timeoutId);
      window.removeEventListener("blur", handleBlur);
    }
    function handleBlur() {
      cleanup();
      resolve();
    }
    window.addEventListener("blur", handleBlur);
    const timeoutId = setTimeout(() => {
      cleanup();
      reject();
    }, 3e3);
  });
}
var _frame = null;
function launchUrlThroughHiddenFrame(url) {
  if (_frame == null) {
    _frame = document.createElement("iframe");
    _frame.style.display = "none";
    document.body.appendChild(_frame);
  }
  _frame.contentWindow.location.href = url.toString();
}
function launchAssociation(associationUrl) {
  return __awaiter(this, void 0, void 0, function* () {
    if (associationUrl.protocol === "https:") {
      window.location.assign(associationUrl);
    } else {
      try {
        const browser = getBrowser();
        switch (browser) {
          case Browser.Firefox:
            launchUrlThroughHiddenFrame(associationUrl);
            break;
          case Browser.Other: {
            const detectionPromise = getDetectionPromise();
            window.location.assign(associationUrl);
            yield detectionPromise;
            break;
          }
          default:
            assertUnreachable(browser);
        }
      } catch (e2) {
        throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_WALLET_NOT_FOUND, "Found no installed wallet that supports the mobile wallet protocol.");
      }
    }
  });
}
function startSession(associationPublicKey, associationURLBase) {
  return __awaiter(this, void 0, void 0, function* () {
    const randomAssociationPort = getRandomAssociationPort();
    const associationUrl = yield getAssociateAndroidIntentURL(associationPublicKey, randomAssociationPort, associationURLBase);
    yield launchAssociation(associationUrl);
    return randomAssociationPort;
  });
}
var WEBSOCKET_CONNECTION_CONFIG = {
  /**
   * 300 milliseconds is a generally accepted threshold for what someone
   * would consider an acceptable response time for a user interface
   * after having performed a low-attention tapping task. We set the initial
   * interval at which we wait for the wallet to set up the websocket at
   * half this, as per the Nyquist frequency, with a progressive backoff
   * sequence from there. The total wait time is 30s, which allows for the
   * user to be presented with a disambiguation dialog, select a wallet, and
   * for the wallet app to subsequently start.
   */
  retryDelayScheduleMs: [150, 150, 200, 500, 500, 750, 750, 1e3],
  timeoutMs: 3e4
};
var WEBSOCKET_PROTOCOL_BINARY = "com.solana.mobilewalletadapter.v1";
function assertSecureContext() {
  if (typeof window === "undefined" || window.isSecureContext !== true) {
    throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_SECURE_CONTEXT_REQUIRED, "The mobile wallet adapter protocol must be used in a secure context (`https`).");
  }
}
function assertSecureEndpointSpecificURI(walletUriBase) {
  let url;
  try {
    url = new URL(walletUriBase);
  } catch (_a) {
    throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_FORBIDDEN_WALLET_BASE_URL, "Invalid base URL supplied by wallet");
  }
  if (url.protocol !== "https:") {
    throw new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_FORBIDDEN_WALLET_BASE_URL, "Base URLs supplied by wallets must be valid `https` URLs");
  }
}
function getSequenceNumberFromByteArray(byteArray) {
  const view = new DataView(byteArray);
  return view.getUint32(
    0,
    /* littleEndian */
    false
  );
}
function transact(callback, config) {
  return __awaiter(this, void 0, void 0, function* () {
    assertSecureContext();
    const associationKeypair = yield generateAssociationKeypair();
    const sessionPort = yield startSession(associationKeypair.publicKey, config === null || config === void 0 ? void 0 : config.baseUri);
    const websocketURL = `ws://localhost:${sessionPort}/solana-wallet`;
    let connectionStartTime;
    const getNextRetryDelayMs = (() => {
      const schedule = [...WEBSOCKET_CONNECTION_CONFIG.retryDelayScheduleMs];
      return () => schedule.length > 1 ? schedule.shift() : schedule[0];
    })();
    let nextJsonRpcMessageId = 1;
    let lastKnownInboundSequenceNumber = 0;
    let state = { __type: "disconnected" };
    return new Promise((resolve, reject) => {
      let socket;
      const jsonRpcResponsePromises = {};
      const handleOpen = () => __awaiter(this, void 0, void 0, function* () {
        if (state.__type !== "connecting") {
          console.warn(`Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${state.__type}\`.`);
          return;
        }
        socket.removeEventListener("open", handleOpen);
        const { associationKeypair: associationKeypair2 } = state;
        const ecdhKeypair = yield generateECDHKeypair();
        socket.send(yield createHelloReq(ecdhKeypair.publicKey, associationKeypair2.privateKey));
        state = {
          __type: "hello_req_sent",
          associationPublicKey: associationKeypair2.publicKey,
          ecdhPrivateKey: ecdhKeypair.privateKey
        };
      });
      const handleClose = (evt) => {
        if (evt.wasClean) {
          state = { __type: "disconnected" };
        } else {
          reject(new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_SESSION_CLOSED, `The wallet session dropped unexpectedly (${evt.code}: ${evt.reason}).`, { closeEvent: evt }));
        }
        disposeSocket();
      };
      const handleError = (_evt) => __awaiter(this, void 0, void 0, function* () {
        disposeSocket();
        if (Date.now() - connectionStartTime >= WEBSOCKET_CONNECTION_CONFIG.timeoutMs) {
          reject(new SolanaMobileWalletAdapterError(SolanaMobileWalletAdapterErrorCode.ERROR_SESSION_TIMEOUT, `Failed to connect to the wallet websocket at ${websocketURL}.`));
        } else {
          yield new Promise((resolve2) => {
            const retryDelayMs = getNextRetryDelayMs();
            retryWaitTimeoutId = window.setTimeout(resolve2, retryDelayMs);
          });
          attemptSocketConnection();
        }
      });
      const handleMessage = (evt) => __awaiter(this, void 0, void 0, function* () {
        const responseBuffer = yield evt.data.arrayBuffer();
        switch (state.__type) {
          case "connecting":
            if (responseBuffer.byteLength !== 0) {
              throw new Error("Encountered unexpected message while connecting");
            }
            const ecdhKeypair = yield generateECDHKeypair();
            socket.send(yield createHelloReq(ecdhKeypair.publicKey, associationKeypair.privateKey));
            state = {
              __type: "hello_req_sent",
              associationPublicKey: associationKeypair.publicKey,
              ecdhPrivateKey: ecdhKeypair.privateKey
            };
            break;
          case "connected":
            try {
              const sequenceNumberVector = responseBuffer.slice(0, SEQUENCE_NUMBER_BYTES);
              const sequenceNumber = getSequenceNumberFromByteArray(sequenceNumberVector);
              if (sequenceNumber !== lastKnownInboundSequenceNumber + 1) {
                throw new Error("Encrypted message has invalid sequence number");
              }
              lastKnownInboundSequenceNumber = sequenceNumber;
              const jsonRpcMessage = yield decryptJsonRpcMessage(responseBuffer, state.sharedSecret);
              const responsePromise = jsonRpcResponsePromises[jsonRpcMessage.id];
              delete jsonRpcResponsePromises[jsonRpcMessage.id];
              responsePromise.resolve(jsonRpcMessage.result);
            } catch (e2) {
              if (e2 instanceof SolanaMobileWalletAdapterProtocolError) {
                const responsePromise = jsonRpcResponsePromises[e2.jsonRpcMessageId];
                delete jsonRpcResponsePromises[e2.jsonRpcMessageId];
                responsePromise.reject(e2);
              } else {
                throw e2;
              }
            }
            break;
          case "hello_req_sent": {
            if (responseBuffer.byteLength === 0) {
              const ecdhKeypair2 = yield generateECDHKeypair();
              socket.send(yield createHelloReq(ecdhKeypair2.publicKey, associationKeypair.privateKey));
              state = {
                __type: "hello_req_sent",
                associationPublicKey: associationKeypair.publicKey,
                ecdhPrivateKey: ecdhKeypair2.privateKey
              };
              break;
            }
            const sharedSecret = yield parseHelloRsp(responseBuffer, state.associationPublicKey, state.ecdhPrivateKey);
            const sessionPropertiesBuffer = responseBuffer.slice(ENCODED_PUBLIC_KEY_LENGTH_BYTES);
            const sessionProperties = sessionPropertiesBuffer.byteLength !== 0 ? yield (() => __awaiter(this, void 0, void 0, function* () {
              const sequenceNumberVector = sessionPropertiesBuffer.slice(0, SEQUENCE_NUMBER_BYTES);
              const sequenceNumber = getSequenceNumberFromByteArray(sequenceNumberVector);
              if (sequenceNumber !== lastKnownInboundSequenceNumber + 1) {
                throw new Error("Encrypted message has invalid sequence number");
              }
              lastKnownInboundSequenceNumber = sequenceNumber;
              return parseSessionProps(sessionPropertiesBuffer, sharedSecret);
            }))() : { protocol_version: "legacy" };
            state = { __type: "connected", sharedSecret, sessionProperties };
            const wallet = createMobileWalletProxy(sessionProperties.protocol_version, (method, params) => __awaiter(this, void 0, void 0, function* () {
              const id = nextJsonRpcMessageId++;
              socket.send(yield encryptJsonRpcMessage({
                id,
                jsonrpc: "2.0",
                method,
                params: params !== null && params !== void 0 ? params : {}
              }, sharedSecret));
              return new Promise((resolve2, reject2) => {
                jsonRpcResponsePromises[id] = {
                  resolve(result) {
                    switch (method) {
                      case "authorize":
                      case "reauthorize": {
                        const { wallet_uri_base } = result;
                        if (wallet_uri_base != null) {
                          try {
                            assertSecureEndpointSpecificURI(wallet_uri_base);
                          } catch (e2) {
                            reject2(e2);
                            return;
                          }
                        }
                        break;
                      }
                    }
                    resolve2(result);
                  },
                  reject: reject2
                };
              });
            }));
            try {
              resolve(yield callback(wallet));
            } catch (e2) {
              reject(e2);
            } finally {
              disposeSocket();
              socket.close();
            }
            break;
          }
        }
      });
      let disposeSocket;
      let retryWaitTimeoutId;
      const attemptSocketConnection = () => {
        if (disposeSocket) {
          disposeSocket();
        }
        state = { __type: "connecting", associationKeypair };
        if (connectionStartTime === void 0) {
          connectionStartTime = Date.now();
        }
        socket = new WebSocket(websocketURL, [WEBSOCKET_PROTOCOL_BINARY]);
        socket.addEventListener("open", handleOpen);
        socket.addEventListener("close", handleClose);
        socket.addEventListener("error", handleError);
        socket.addEventListener("message", handleMessage);
        disposeSocket = () => {
          window.clearTimeout(retryWaitTimeoutId);
          socket.removeEventListener("open", handleOpen);
          socket.removeEventListener("close", handleClose);
          socket.removeEventListener("error", handleError);
          socket.removeEventListener("message", handleMessage);
        };
      };
      attemptSocketConnection();
    });
  });
}

// node_modules/.pnpm/@solana-mobile+wallet-standard-mobile@0.4.4_@solana+wallet-adapter-base@0.9.27_@solana+_fd8f1dcb4136a036b743fe1e0e086ca8/node_modules/@solana-mobile/wallet-standard-mobile/lib/esm/index.browser.js
var import_bs582 = __toESM(require_bs582());
function __awaiter2(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __classPrivateFieldGet$1(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet$1(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
var _EmbeddedModal_instances;
var _EmbeddedModal_root;
var _EmbeddedModal_eventListeners;
var _EmbeddedModal_listenersAttached;
var _EmbeddedModal_injectHTML;
var _EmbeddedModal_attachEventListeners;
var _EmbeddedModal_removeEventListeners;
var _EmbeddedModal_handleKeyDown;
var modalHtml = `
<div class="mobile-wallet-adapter-embedded-modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div data-modal-close style="position: absolute; width: 100%; height: 100%;"></div>
	<div class="mobile-wallet-adapter-embedded-modal-card">
		<div>
			<button data-modal-close class="mobile-wallet-adapter-embedded-modal-close">
				<svg width="14" height="14">
					<path d="M 6.7125,8.3036995 1.9082,13.108199 c -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 C 0.1056,12.896899 0,12.631699 0,12.312499 c 0,-0.3192 0.1056,-0.5844 0.3167,-0.7958 L 5.1212,6.7124995 0.3167,1.9082 C 0.1056,1.6969 0,1.4317 0,1.1125 0,0.7933 0.1056,0.5281 0.3167,0.3167 0.5281,0.1056 0.7933,0 1.1125,0 1.4317,0 1.6969,0.1056 1.9082,0.3167 L 6.7125,5.1212 11.5167,0.3167 C 11.7281,0.1056 11.9933,0 12.3125,0 c 0.3192,0 0.5844,0.1056 0.7957,0.3167 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 L 8.3037001,6.7124995 13.1082,11.516699 c 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 z" />
				</svg>
			</button>
		</div>
		<div class="mobile-wallet-adapter-embedded-modal-content"></div>
	</div>
</div>
`;
var css$2 = `
.mobile-wallet-adapter-embedded-modal-container {
    display: flex; /* Use flexbox to center content */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    overflow-y: auto; /* enable scrolling */
}

.mobile-wallet-adapter-embedded-modal-card {
    display: flex;
    flex-direction: column;
    margin: auto 20px;
    max-width: 780px;
    padding: 20px;
    border-radius: 24px;
    background: #ffffff;
    font-family: "Inter Tight", "PT Sans", Calibri, sans-serif;
    transform: translateY(-200%);
    animation: slide-in 0.5s forwards;
}

@keyframes slide-in {
    100% { transform: translateY(0%); }
}

.mobile-wallet-adapter-embedded-modal-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    background: #e4e9e9;
    border: none;
    border-radius: 50%;
}

.mobile-wallet-adapter-embedded-modal-close:focus-visible {
    outline-color: red;
}

.mobile-wallet-adapter-embedded-modal-close svg {
    fill: #546266;
    transition: fill 200ms ease 0s;
}

.mobile-wallet-adapter-embedded-modal-close:hover svg {
    fill: #fff;
}
`;
var fonts = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
`;
var EmbeddedModal = class {
  constructor() {
    _EmbeddedModal_instances.add(this);
    _EmbeddedModal_root.set(this, null);
    _EmbeddedModal_eventListeners.set(this, {});
    _EmbeddedModal_listenersAttached.set(this, false);
    this.dom = null;
    this.open = () => {
      console.debug("Modal open");
      __classPrivateFieldGet$1(this, _EmbeddedModal_instances, "m", _EmbeddedModal_attachEventListeners).call(this);
      if (__classPrivateFieldGet$1(this, _EmbeddedModal_root, "f")) {
        __classPrivateFieldGet$1(this, _EmbeddedModal_root, "f").style.display = "flex";
      }
    };
    this.close = (event = void 0) => {
      var _a;
      console.debug("Modal close");
      __classPrivateFieldGet$1(this, _EmbeddedModal_instances, "m", _EmbeddedModal_removeEventListeners).call(this);
      if (__classPrivateFieldGet$1(this, _EmbeddedModal_root, "f")) {
        __classPrivateFieldGet$1(this, _EmbeddedModal_root, "f").style.display = "none";
      }
      (_a = __classPrivateFieldGet$1(this, _EmbeddedModal_eventListeners, "f")["close"]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => listener(event));
    };
    _EmbeddedModal_handleKeyDown.set(this, (event) => {
      if (event.key === "Escape")
        this.close(event);
    });
    this.init = this.init.bind(this);
    __classPrivateFieldSet$1(this, _EmbeddedModal_root, document.getElementById("mobile-wallet-adapter-embedded-root-ui"), "f");
  }
  init() {
    return __awaiter2(this, void 0, void 0, function* () {
      console.log("Injecting modal");
      __classPrivateFieldGet$1(this, _EmbeddedModal_instances, "m", _EmbeddedModal_injectHTML).call(this);
    });
  }
  addEventListener(event, listener) {
    var _a;
    ((_a = __classPrivateFieldGet$1(this, _EmbeddedModal_eventListeners, "f")[event]) === null || _a === void 0 ? void 0 : _a.push(listener)) || (__classPrivateFieldGet$1(this, _EmbeddedModal_eventListeners, "f")[event] = [listener]);
    return () => this.removeEventListener(event, listener);
  }
  removeEventListener(event, listener) {
    var _a;
    __classPrivateFieldGet$1(this, _EmbeddedModal_eventListeners, "f")[event] = (_a = __classPrivateFieldGet$1(this, _EmbeddedModal_eventListeners, "f")[event]) === null || _a === void 0 ? void 0 : _a.filter((existingListener) => listener !== existingListener);
  }
};
_EmbeddedModal_root = /* @__PURE__ */ new WeakMap(), _EmbeddedModal_eventListeners = /* @__PURE__ */ new WeakMap(), _EmbeddedModal_listenersAttached = /* @__PURE__ */ new WeakMap(), _EmbeddedModal_handleKeyDown = /* @__PURE__ */ new WeakMap(), _EmbeddedModal_instances = /* @__PURE__ */ new WeakSet(), _EmbeddedModal_injectHTML = function _EmbeddedModal_injectHTML2() {
  if (document.getElementById("mobile-wallet-adapter-embedded-root-ui")) {
    if (!__classPrivateFieldGet$1(this, _EmbeddedModal_root, "f"))
      __classPrivateFieldSet$1(this, _EmbeddedModal_root, document.getElementById("mobile-wallet-adapter-embedded-root-ui"), "f");
    return;
  }
  __classPrivateFieldSet$1(this, _EmbeddedModal_root, document.createElement("div"), "f");
  __classPrivateFieldGet$1(this, _EmbeddedModal_root, "f").id = "mobile-wallet-adapter-embedded-root-ui";
  __classPrivateFieldGet$1(this, _EmbeddedModal_root, "f").innerHTML = modalHtml;
  __classPrivateFieldGet$1(this, _EmbeddedModal_root, "f").style.display = "none";
  const content = __classPrivateFieldGet$1(this, _EmbeddedModal_root, "f").querySelector(".mobile-wallet-adapter-embedded-modal-content");
  if (content)
    content.innerHTML = this.contentHtml;
  const styles = document.createElement("style");
  styles.id = "mobile-wallet-adapter-embedded-modal-styles";
  styles.textContent = css$2 + this.contentStyles;
  const host = document.createElement("div");
  host.innerHTML = fonts;
  this.dom = host.attachShadow({ mode: "closed" });
  this.dom.appendChild(styles);
  this.dom.appendChild(__classPrivateFieldGet$1(this, _EmbeddedModal_root, "f"));
  document.body.appendChild(host);
}, _EmbeddedModal_attachEventListeners = function _EmbeddedModal_attachEventListeners2() {
  if (!__classPrivateFieldGet$1(this, _EmbeddedModal_root, "f") || __classPrivateFieldGet$1(this, _EmbeddedModal_listenersAttached, "f"))
    return;
  const closers = [...__classPrivateFieldGet$1(this, _EmbeddedModal_root, "f").querySelectorAll("[data-modal-close]")];
  closers.forEach((closer) => closer === null || closer === void 0 ? void 0 : closer.addEventListener("click", this.close));
  window.addEventListener("load", this.close);
  document.addEventListener("keydown", __classPrivateFieldGet$1(this, _EmbeddedModal_handleKeyDown, "f"));
  __classPrivateFieldSet$1(this, _EmbeddedModal_listenersAttached, true, "f");
}, _EmbeddedModal_removeEventListeners = function _EmbeddedModal_removeEventListeners2() {
  if (!__classPrivateFieldGet$1(this, _EmbeddedModal_listenersAttached, "f"))
    return;
  window.removeEventListener("load", this.close);
  document.removeEventListener("keydown", __classPrivateFieldGet$1(this, _EmbeddedModal_handleKeyDown, "f"));
  if (!__classPrivateFieldGet$1(this, _EmbeddedModal_root, "f"))
    return;
  const closers = [...__classPrivateFieldGet$1(this, _EmbeddedModal_root, "f").querySelectorAll("[data-modal-close]")];
  closers.forEach((closer) => closer === null || closer === void 0 ? void 0 : closer.removeEventListener("click", this.close));
  __classPrivateFieldSet$1(this, _EmbeddedModal_listenersAttached, false, "f");
};
var icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDIuNUgxN0MxNy44Mjg0IDIuNSAxOC41IDMuMTcxNTcgMTguNSA0VjIwQzE4LjUgMjAuODI4NCAxNy44Mjg0IDIxLjUgMTcgMjEuNUg3QzYuMTcxNTcgMjEuNSA1LjUgMjAuODI4NCA1LjUgMjBWNEM1LjUgMy4xNzE1NyA2LjE3MTU3IDIuNSA3IDIuNVpNMyA0QzMgMS43OTA4NiA0Ljc5MDg2IDAgNyAwSDE3QzE5LjIwOTEgMCAyMSAxLjc5MDg2IDIxIDRWMjBDMjEgMjIuMjA5MSAxOS4yMDkxIDI0IDE3IDI0SDdDNC43OTA4NiAyNCAzIDIyLjIwOTEgMyAyMFY0Wk0xMSA0LjYxNTM4QzEwLjQ0NzcgNC42MTUzOCAxMCA1LjA2MzEgMTAgNS42MTUzOFY2LjM4NDYyQzEwIDYuOTM2OSAxMC40NDc3IDcuMzg0NjIgMTEgNy4zODQ2MkgxM0MxMy41NTIzIDcuMzg0NjIgMTQgNi45MzY5IDE0IDYuMzg0NjJWNS42MTUzOEMxNCA1LjA2MzEgMTMuNTUyMyA0LjYxNTM4IDEzIDQuNjE1MzhIMTFaIiBmaWxsPSIjRENCOEZGIi8+Cjwvc3ZnPgo=";
function fromUint8Array2(byteArray) {
  return window.btoa(String.fromCharCode.call(null, ...byteArray));
}
function toUint8Array2(base64EncodedByteArray) {
  return new Uint8Array(window.atob(base64EncodedByteArray).split("").map((c) => c.charCodeAt(0)));
}
var _LocalSolanaMobileWalletAdapterWallet_instances;
var _LocalSolanaMobileWalletAdapterWallet_listeners;
var _LocalSolanaMobileWalletAdapterWallet_version;
var _LocalSolanaMobileWalletAdapterWallet_name;
var _LocalSolanaMobileWalletAdapterWallet_url;
var _LocalSolanaMobileWalletAdapterWallet_icon;
var _LocalSolanaMobileWalletAdapterWallet_appIdentity;
var _LocalSolanaMobileWalletAdapterWallet_authorization;
var _LocalSolanaMobileWalletAdapterWallet_authorizationCache;
var _LocalSolanaMobileWalletAdapterWallet_connecting;
var _LocalSolanaMobileWalletAdapterWallet_connectionGeneration;
var _LocalSolanaMobileWalletAdapterWallet_chains;
var _LocalSolanaMobileWalletAdapterWallet_chainSelector;
var _LocalSolanaMobileWalletAdapterWallet_optionalFeatures;
var _LocalSolanaMobileWalletAdapterWallet_onWalletNotFound;
var _LocalSolanaMobileWalletAdapterWallet_on;
var _LocalSolanaMobileWalletAdapterWallet_emit;
var _LocalSolanaMobileWalletAdapterWallet_off;
var _LocalSolanaMobileWalletAdapterWallet_connect;
var _LocalSolanaMobileWalletAdapterWallet_performAuthorization;
var _LocalSolanaMobileWalletAdapterWallet_handleAuthorizationResult;
var _LocalSolanaMobileWalletAdapterWallet_handleWalletCapabilitiesResult;
var _LocalSolanaMobileWalletAdapterWallet_performReauthorization;
var _LocalSolanaMobileWalletAdapterWallet_disconnect;
var _LocalSolanaMobileWalletAdapterWallet_transact;
var _LocalSolanaMobileWalletAdapterWallet_assertIsAuthorized;
var _LocalSolanaMobileWalletAdapterWallet_accountsToWalletStandardAccounts;
var _LocalSolanaMobileWalletAdapterWallet_performSignTransactions;
var _LocalSolanaMobileWalletAdapterWallet_performSignAndSendTransaction;
var _LocalSolanaMobileWalletAdapterWallet_signAndSendTransaction;
var _LocalSolanaMobileWalletAdapterWallet_signTransaction;
var _LocalSolanaMobileWalletAdapterWallet_signMessage;
var _LocalSolanaMobileWalletAdapterWallet_signIn;
var _LocalSolanaMobileWalletAdapterWallet_performSignIn;
var _RemoteSolanaMobileWalletAdapterWallet_instances;
var _RemoteSolanaMobileWalletAdapterWallet_listeners;
var _RemoteSolanaMobileWalletAdapterWallet_version;
var _RemoteSolanaMobileWalletAdapterWallet_name;
var _RemoteSolanaMobileWalletAdapterWallet_url;
var _RemoteSolanaMobileWalletAdapterWallet_icon;
var _RemoteSolanaMobileWalletAdapterWallet_appIdentity;
var _RemoteSolanaMobileWalletAdapterWallet_authorization;
var _RemoteSolanaMobileWalletAdapterWallet_authorizationCache;
var _RemoteSolanaMobileWalletAdapterWallet_connecting;
var _RemoteSolanaMobileWalletAdapterWallet_connectionGeneration;
var _RemoteSolanaMobileWalletAdapterWallet_chains;
var _RemoteSolanaMobileWalletAdapterWallet_chainSelector;
var _RemoteSolanaMobileWalletAdapterWallet_optionalFeatures;
var _RemoteSolanaMobileWalletAdapterWallet_onWalletNotFound;
var _RemoteSolanaMobileWalletAdapterWallet_hostAuthority;
var _RemoteSolanaMobileWalletAdapterWallet_session;
var _RemoteSolanaMobileWalletAdapterWallet_on;
var _RemoteSolanaMobileWalletAdapterWallet_emit;
var _RemoteSolanaMobileWalletAdapterWallet_off;
var _RemoteSolanaMobileWalletAdapterWallet_connect;
var _RemoteSolanaMobileWalletAdapterWallet_performAuthorization;
var _RemoteSolanaMobileWalletAdapterWallet_handleAuthorizationResult;
var _RemoteSolanaMobileWalletAdapterWallet_handleWalletCapabilitiesResult;
var _RemoteSolanaMobileWalletAdapterWallet_performReauthorization;
var _RemoteSolanaMobileWalletAdapterWallet_disconnect;
var _RemoteSolanaMobileWalletAdapterWallet_transact;
var _RemoteSolanaMobileWalletAdapterWallet_assertIsAuthorized;
var _RemoteSolanaMobileWalletAdapterWallet_accountsToWalletStandardAccounts;
var _RemoteSolanaMobileWalletAdapterWallet_performSignTransactions;
var _RemoteSolanaMobileWalletAdapterWallet_performSignAndSendTransaction;
var _RemoteSolanaMobileWalletAdapterWallet_signAndSendTransaction;
var _RemoteSolanaMobileWalletAdapterWallet_signTransaction;
var _RemoteSolanaMobileWalletAdapterWallet_signMessage;
var _RemoteSolanaMobileWalletAdapterWallet_signIn;
var _RemoteSolanaMobileWalletAdapterWallet_performSignIn;
var SolanaMobileWalletAdapterWalletName = "Mobile Wallet Adapter";
var SIGNATURE_LENGTH_IN_BYTES2 = 64;
var DEFAULT_FEATURES = [SolanaSignAndSendTransaction, SolanaSignTransaction, SolanaSignMessage, SolanaSignIn];
var LocalSolanaMobileWalletAdapterWallet = class {
  constructor(config) {
    _LocalSolanaMobileWalletAdapterWallet_instances.add(this);
    _LocalSolanaMobileWalletAdapterWallet_listeners.set(this, {});
    _LocalSolanaMobileWalletAdapterWallet_version.set(this, "1.0.0");
    _LocalSolanaMobileWalletAdapterWallet_name.set(this, SolanaMobileWalletAdapterWalletName);
    _LocalSolanaMobileWalletAdapterWallet_url.set(this, "https://solanamobile.com/wallets");
    _LocalSolanaMobileWalletAdapterWallet_icon.set(this, icon);
    _LocalSolanaMobileWalletAdapterWallet_appIdentity.set(this, void 0);
    _LocalSolanaMobileWalletAdapterWallet_authorization.set(this, void 0);
    _LocalSolanaMobileWalletAdapterWallet_authorizationCache.set(this, void 0);
    _LocalSolanaMobileWalletAdapterWallet_connecting.set(this, false);
    _LocalSolanaMobileWalletAdapterWallet_connectionGeneration.set(this, 0);
    _LocalSolanaMobileWalletAdapterWallet_chains.set(this, []);
    _LocalSolanaMobileWalletAdapterWallet_chainSelector.set(this, void 0);
    _LocalSolanaMobileWalletAdapterWallet_optionalFeatures.set(this, void 0);
    _LocalSolanaMobileWalletAdapterWallet_onWalletNotFound.set(this, void 0);
    _LocalSolanaMobileWalletAdapterWallet_on.set(this, (event, listener) => {
      var _a;
      ((_a = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_listeners, "f")[event]) === null || _a === void 0 ? void 0 : _a.push(listener)) || (__classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_listeners, "f")[event] = [listener]);
      return () => __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_instances, "m", _LocalSolanaMobileWalletAdapterWallet_off).call(this, event, listener);
    });
    _LocalSolanaMobileWalletAdapterWallet_connect.set(this, ({ silent } = {}) => __awaiter2(this, void 0, void 0, function* () {
      if (__classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_connecting, "f") || this.connected) {
        return { accounts: this.accounts };
      }
      __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_connecting, true, "f");
      try {
        if (silent) {
          const cachedAuthorization = yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorizationCache, "f").get();
          if (cachedAuthorization) {
            yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_handleWalletCapabilitiesResult, "f").call(this, cachedAuthorization.capabilities);
            yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_handleAuthorizationResult, "f").call(this, cachedAuthorization);
          } else {
            return { accounts: this.accounts };
          }
        } else {
          yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_performAuthorization, "f").call(this);
        }
      } catch (e2) {
        throw new Error(e2 instanceof Error && e2.message || "Unknown error");
      } finally {
        __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_connecting, false, "f");
      }
      return { accounts: this.accounts };
    }));
    _LocalSolanaMobileWalletAdapterWallet_performAuthorization.set(this, (signInPayload) => __awaiter2(this, void 0, void 0, function* () {
      try {
        const cachedAuthorizationResult = yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorizationCache, "f").get();
        if (cachedAuthorizationResult) {
          __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_handleAuthorizationResult, "f").call(this, cachedAuthorizationResult);
          return cachedAuthorizationResult;
        }
        const selectedChain = yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_chainSelector, "f").select(__classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_chains, "f"));
        return yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_transact, "f").call(this, (wallet) => __awaiter2(this, void 0, void 0, function* () {
          const [capabilities, mwaAuthorizationResult] = yield Promise.all([
            wallet.getCapabilities(),
            wallet.authorize({
              chain: selectedChain,
              identity: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_appIdentity, "f"),
              sign_in_payload: signInPayload
            })
          ]);
          const accounts = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_accountsToWalletStandardAccounts, "f").call(this, mwaAuthorizationResult.accounts);
          const authorization = Object.assign(Object.assign({}, mwaAuthorizationResult), { accounts, chain: selectedChain, capabilities });
          Promise.all([
            __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_handleWalletCapabilitiesResult, "f").call(this, capabilities),
            __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorizationCache, "f").set(authorization),
            __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_handleAuthorizationResult, "f").call(this, authorization)
          ]);
          return authorization;
        }));
      } catch (e2) {
        throw new Error(e2 instanceof Error && e2.message || "Unknown error");
      }
    }));
    _LocalSolanaMobileWalletAdapterWallet_handleAuthorizationResult.set(this, (authorization) => __awaiter2(this, void 0, void 0, function* () {
      var _a;
      const didPublicKeysChange = (
        // Case 1: We started from having no authorization.
        __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f") == null || // Case 2: The number of authorized accounts changed.
        ((_a = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f")) === null || _a === void 0 ? void 0 : _a.accounts.length) !== authorization.accounts.length || // Case 3: The new list of addresses isn't exactly the same as the old list, in the same order.
        __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f").accounts.some((account, ii) => account.address !== authorization.accounts[ii].address)
      );
      __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, authorization, "f");
      if (didPublicKeysChange) {
        __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_instances, "m", _LocalSolanaMobileWalletAdapterWallet_emit).call(this, "change", { accounts: this.accounts });
      }
    }));
    _LocalSolanaMobileWalletAdapterWallet_handleWalletCapabilitiesResult.set(this, (capabilities) => __awaiter2(this, void 0, void 0, function* () {
      const supportsSignTransaction = capabilities.features.includes("solana:signTransactions");
      const supportsSignAndSendTransaction = capabilities.supports_sign_and_send_transactions;
      const didCapabilitiesChange = SolanaSignAndSendTransaction in this.features !== supportsSignAndSendTransaction || SolanaSignTransaction in this.features !== supportsSignTransaction;
      __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_optionalFeatures, Object.assign(Object.assign({}, (supportsSignAndSendTransaction || !supportsSignAndSendTransaction && !supportsSignTransaction) && {
        [SolanaSignAndSendTransaction]: {
          version: "1.0.0",
          supportedTransactionVersions: ["legacy", 0],
          signAndSendTransaction: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_signAndSendTransaction, "f")
        }
      }), supportsSignTransaction && {
        [SolanaSignTransaction]: {
          version: "1.0.0",
          supportedTransactionVersions: ["legacy", 0],
          signTransaction: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_signTransaction, "f")
        }
      }), "f");
      if (didCapabilitiesChange) {
        __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_instances, "m", _LocalSolanaMobileWalletAdapterWallet_emit).call(this, "change", { features: this.features });
      }
    }));
    _LocalSolanaMobileWalletAdapterWallet_performReauthorization.set(this, (wallet, authToken, chain) => __awaiter2(this, void 0, void 0, function* () {
      var _b, _c;
      try {
        const [capabilities, mwaAuthorizationResult] = yield Promise.all([
          (_c = (_b = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f")) === null || _b === void 0 ? void 0 : _b.capabilities) !== null && _c !== void 0 ? _c : yield wallet.getCapabilities(),
          wallet.authorize({
            auth_token: authToken,
            identity: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_appIdentity, "f"),
            chain
          })
        ]);
        const accounts = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_accountsToWalletStandardAccounts, "f").call(this, mwaAuthorizationResult.accounts);
        const authorization = Object.assign(Object.assign({}, mwaAuthorizationResult), { accounts, chain, capabilities });
        Promise.all([
          __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorizationCache, "f").set(authorization),
          __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_handleAuthorizationResult, "f").call(this, authorization)
        ]);
      } catch (e2) {
        __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_disconnect, "f").call(this);
        throw new Error(e2 instanceof Error && e2.message || "Unknown error");
      }
    }));
    _LocalSolanaMobileWalletAdapterWallet_disconnect.set(this, () => __awaiter2(this, void 0, void 0, function* () {
      var _d;
      __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorizationCache, "f").clear();
      __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_connecting, false, "f");
      __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_connectionGeneration, (_d = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_connectionGeneration, "f"), _d++, _d), "f");
      __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, void 0, "f");
      __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_instances, "m", _LocalSolanaMobileWalletAdapterWallet_emit).call(this, "change", { accounts: this.accounts });
    }));
    _LocalSolanaMobileWalletAdapterWallet_transact.set(this, (callback) => __awaiter2(this, void 0, void 0, function* () {
      var _e;
      const walletUriBase = (_e = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f")) === null || _e === void 0 ? void 0 : _e.wallet_uri_base;
      const config2 = walletUriBase ? { baseUri: walletUriBase } : void 0;
      const currentConnectionGeneration = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_connectionGeneration, "f");
      try {
        return yield transact(callback, config2);
      } catch (e2) {
        if (__classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_connectionGeneration, "f") !== currentConnectionGeneration) {
          yield new Promise(() => {
          });
        }
        if (e2 instanceof Error && e2.name === "SolanaMobileWalletAdapterError" && e2.code === "ERROR_WALLET_NOT_FOUND") {
          yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_onWalletNotFound, "f").call(this, this);
        }
        throw e2;
      }
    }));
    _LocalSolanaMobileWalletAdapterWallet_assertIsAuthorized.set(this, () => {
      if (!__classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f"))
        throw new Error("Wallet not connected");
      return { authToken: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f").auth_token, chain: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f").chain };
    });
    _LocalSolanaMobileWalletAdapterWallet_accountsToWalletStandardAccounts.set(this, (accounts) => {
      return accounts.map((account) => {
        var _a, _b;
        const publicKey2 = toUint8Array2(account.address);
        return {
          address: import_bs582.default.encode(publicKey2),
          publicKey: publicKey2,
          label: account.label,
          icon: account.icon,
          chains: (_a = account.chains) !== null && _a !== void 0 ? _a : __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_chains, "f"),
          // TODO: get supported features from getCapabilities API 
          features: (_b = account.features) !== null && _b !== void 0 ? _b : DEFAULT_FEATURES
        };
      });
    });
    _LocalSolanaMobileWalletAdapterWallet_performSignTransactions.set(this, (transactions) => __awaiter2(this, void 0, void 0, function* () {
      const { authToken, chain } = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_assertIsAuthorized, "f").call(this);
      try {
        const base64Transactions = transactions.map((tx) => {
          return fromUint8Array2(tx);
        });
        return yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_transact, "f").call(this, (wallet) => __awaiter2(this, void 0, void 0, function* () {
          yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_performReauthorization, "f").call(this, wallet, authToken, chain);
          const signedTransactions = (yield wallet.signTransactions({
            payloads: base64Transactions
          })).signed_payloads.map(toUint8Array2);
          return signedTransactions;
        }));
      } catch (e2) {
        throw new Error(e2 instanceof Error && e2.message || "Unknown error");
      }
    }));
    _LocalSolanaMobileWalletAdapterWallet_performSignAndSendTransaction.set(this, (transaction, options) => __awaiter2(this, void 0, void 0, function* () {
      const { authToken, chain } = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_assertIsAuthorized, "f").call(this);
      try {
        return yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_transact, "f").call(this, (wallet) => __awaiter2(this, void 0, void 0, function* () {
          const [capabilities, _1] = yield Promise.all([
            wallet.getCapabilities(),
            __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_performReauthorization, "f").call(this, wallet, authToken, chain)
          ]);
          if (capabilities.supports_sign_and_send_transactions) {
            const base64Transaction = fromUint8Array2(transaction);
            const signatures = (yield wallet.signAndSendTransactions(Object.assign(Object.assign({}, options), { payloads: [base64Transaction] }))).signatures.map(toUint8Array2);
            return signatures[0];
          } else {
            throw new Error("connected wallet does not support signAndSendTransaction");
          }
        }));
      } catch (e2) {
        throw new Error(e2 instanceof Error && e2.message || "Unknown error");
      }
    }));
    _LocalSolanaMobileWalletAdapterWallet_signAndSendTransaction.set(this, (...inputs) => __awaiter2(this, void 0, void 0, function* () {
      const outputs = [];
      for (const input of inputs) {
        const signature2 = yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_performSignAndSendTransaction, "f").call(this, input.transaction, input.options);
        outputs.push({ signature: signature2 });
      }
      return outputs;
    }));
    _LocalSolanaMobileWalletAdapterWallet_signTransaction.set(this, (...inputs) => __awaiter2(this, void 0, void 0, function* () {
      return (yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_performSignTransactions, "f").call(this, inputs.map(({ transaction }) => transaction))).map((signedTransaction) => {
        return { signedTransaction };
      });
    }));
    _LocalSolanaMobileWalletAdapterWallet_signMessage.set(this, (...inputs) => __awaiter2(this, void 0, void 0, function* () {
      const { authToken, chain } = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_assertIsAuthorized, "f").call(this);
      const addresses = inputs.map(({ account }) => fromUint8Array2(account.publicKey));
      const messages = inputs.map(({ message }) => fromUint8Array2(message));
      try {
        return yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_transact, "f").call(this, (wallet) => __awaiter2(this, void 0, void 0, function* () {
          yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_performReauthorization, "f").call(this, wallet, authToken, chain);
          const signedMessages = (yield wallet.signMessages({
            addresses,
            payloads: messages
          })).signed_payloads.map(toUint8Array2);
          return signedMessages.map((signedMessage) => {
            return { signedMessage, signature: signedMessage.slice(-SIGNATURE_LENGTH_IN_BYTES2) };
          });
        }));
      } catch (e2) {
        throw new Error(e2 instanceof Error && e2.message || "Unknown error");
      }
    }));
    _LocalSolanaMobileWalletAdapterWallet_signIn.set(this, (...inputs) => __awaiter2(this, void 0, void 0, function* () {
      const outputs = [];
      if (inputs.length > 1) {
        for (const input of inputs) {
          outputs.push(yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_performSignIn, "f").call(this, input));
        }
      } else {
        return [yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_performSignIn, "f").call(this, inputs[0])];
      }
      return outputs;
    }));
    _LocalSolanaMobileWalletAdapterWallet_performSignIn.set(this, (input) => __awaiter2(this, void 0, void 0, function* () {
      var _f, _g, _h;
      __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_connecting, true, "f");
      try {
        const authorizationResult = yield __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_performAuthorization, "f").call(this, Object.assign(Object.assign({}, input), { domain: (_f = input === null || input === void 0 ? void 0 : input.domain) !== null && _f !== void 0 ? _f : window.location.host }));
        if (!authorizationResult.sign_in_result) {
          throw new Error("Sign in failed, no sign in result returned by wallet");
        }
        const signedInAddress = authorizationResult.sign_in_result.address;
        const signedInAccount = authorizationResult.accounts.find((acc) => acc.address == signedInAddress);
        return {
          account: Object.assign(Object.assign({}, signedInAccount !== null && signedInAccount !== void 0 ? signedInAccount : {
            address: import_bs582.default.encode(toUint8Array2(signedInAddress))
          }), { publicKey: toUint8Array2(signedInAddress), chains: (_g = signedInAccount === null || signedInAccount === void 0 ? void 0 : signedInAccount.chains) !== null && _g !== void 0 ? _g : __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_chains, "f"), features: (_h = signedInAccount === null || signedInAccount === void 0 ? void 0 : signedInAccount.features) !== null && _h !== void 0 ? _h : authorizationResult.capabilities.features }),
          signedMessage: toUint8Array2(authorizationResult.sign_in_result.signed_message),
          signature: toUint8Array2(authorizationResult.sign_in_result.signature)
        };
      } catch (e2) {
        throw new Error(e2 instanceof Error && e2.message || "Unknown error");
      } finally {
        __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_connecting, false, "f");
      }
    }));
    __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorizationCache, config.authorizationCache, "f");
    __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_appIdentity, config.appIdentity, "f");
    __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_chains, config.chains, "f");
    __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_chainSelector, config.chainSelector, "f");
    __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_onWalletNotFound, config.onWalletNotFound, "f");
    __classPrivateFieldSet$1(this, _LocalSolanaMobileWalletAdapterWallet_optionalFeatures, {
      // In MWA 1.0, signAndSend is optional and signTransaction is mandatory. Whereas in MWA 2.0+,
      // signAndSend is mandatory and signTransaction is optional (and soft deprecated). As of mid
      // 2025, all MWA wallets support both signAndSendTransaction and signTransaction so its safe
      // assume both are supported here. The features will be updated based on the actual connected 
      // wallets capabilities during connection regardless, so this is safe. 
      [SolanaSignAndSendTransaction]: {
        version: "1.0.0",
        supportedTransactionVersions: ["legacy", 0],
        signAndSendTransaction: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_signAndSendTransaction, "f")
      },
      [SolanaSignTransaction]: {
        version: "1.0.0",
        supportedTransactionVersions: ["legacy", 0],
        signTransaction: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_signTransaction, "f")
      }
    }, "f");
  }
  get version() {
    return __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_version, "f");
  }
  get name() {
    return __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_name, "f");
  }
  get url() {
    return __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_url, "f");
  }
  get icon() {
    return __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_icon, "f");
  }
  get chains() {
    return __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_chains, "f");
  }
  get features() {
    return Object.assign({ [StandardConnect]: {
      version: "1.0.0",
      connect: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_connect, "f")
    }, [StandardDisconnect]: {
      version: "1.0.0",
      disconnect: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_disconnect, "f")
    }, [StandardEvents]: {
      version: "1.0.0",
      on: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_on, "f")
    }, [SolanaSignMessage]: {
      version: "1.0.0",
      signMessage: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_signMessage, "f")
    }, [SolanaSignIn]: {
      version: "1.0.0",
      signIn: __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_signIn, "f")
    } }, __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_optionalFeatures, "f"));
  }
  get accounts() {
    var _a, _b;
    return (_b = (_a = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f")) === null || _a === void 0 ? void 0 : _a.accounts) !== null && _b !== void 0 ? _b : [];
  }
  get connected() {
    return !!__classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f");
  }
  get isAuthorized() {
    return !!__classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f");
  }
  get currentAuthorization() {
    return __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorization, "f");
  }
  get cachedAuthorizationResult() {
    return __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_authorizationCache, "f").get();
  }
};
_LocalSolanaMobileWalletAdapterWallet_listeners = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_version = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_name = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_url = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_icon = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_appIdentity = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_authorization = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_authorizationCache = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_connecting = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_connectionGeneration = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_chains = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_chainSelector = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_optionalFeatures = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_onWalletNotFound = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_on = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_connect = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_performAuthorization = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_handleAuthorizationResult = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_handleWalletCapabilitiesResult = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_performReauthorization = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_disconnect = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_transact = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_assertIsAuthorized = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_accountsToWalletStandardAccounts = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_performSignTransactions = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_performSignAndSendTransaction = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_signAndSendTransaction = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_signTransaction = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_signMessage = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_signIn = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_performSignIn = /* @__PURE__ */ new WeakMap(), _LocalSolanaMobileWalletAdapterWallet_instances = /* @__PURE__ */ new WeakSet(), _LocalSolanaMobileWalletAdapterWallet_emit = function _LocalSolanaMobileWalletAdapterWallet_emit2(event, ...args) {
  var _a;
  (_a = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_listeners, "f")[event]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => listener.apply(null, args));
}, _LocalSolanaMobileWalletAdapterWallet_off = function _LocalSolanaMobileWalletAdapterWallet_off2(event, listener) {
  var _a;
  __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_listeners, "f")[event] = (_a = __classPrivateFieldGet$1(this, _LocalSolanaMobileWalletAdapterWallet_listeners, "f")[event]) === null || _a === void 0 ? void 0 : _a.filter((existingListener) => listener !== existingListener);
};
_RemoteSolanaMobileWalletAdapterWallet_listeners = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_version = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_name = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_url = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_icon = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_appIdentity = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_authorization = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_authorizationCache = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_connecting = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_connectionGeneration = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_chains = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_chainSelector = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_optionalFeatures = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_onWalletNotFound = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_hostAuthority = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_session = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_on = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_connect = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_performAuthorization = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_handleAuthorizationResult = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_handleWalletCapabilitiesResult = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_performReauthorization = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_disconnect = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_transact = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_assertIsAuthorized = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_accountsToWalletStandardAccounts = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_performSignTransactions = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_performSignAndSendTransaction = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_signAndSendTransaction = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_signTransaction = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_signMessage = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_signIn = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_performSignIn = /* @__PURE__ */ new WeakMap(), _RemoteSolanaMobileWalletAdapterWallet_instances = /* @__PURE__ */ new WeakSet(), _RemoteSolanaMobileWalletAdapterWallet_emit = function _RemoteSolanaMobileWalletAdapterWallet_emit2(event, ...args) {
  var _a;
  (_a = __classPrivateFieldGet$1(this, _RemoteSolanaMobileWalletAdapterWallet_listeners, "f")[event]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => listener.apply(null, args));
}, _RemoteSolanaMobileWalletAdapterWallet_off = function _RemoteSolanaMobileWalletAdapterWallet_off2(event, listener) {
  var _a;
  __classPrivateFieldGet$1(this, _RemoteSolanaMobileWalletAdapterWallet_listeners, "f")[event] = (_a = __classPrivateFieldGet$1(this, _RemoteSolanaMobileWalletAdapterWallet_listeners, "f")[event]) === null || _a === void 0 ? void 0 : _a.filter((existingListener) => listener !== existingListener);
};
var _RegisterWalletEvent_detail;
_RegisterWalletEvent_detail = /* @__PURE__ */ new WeakMap();
var WALLET_NOT_FOUND_ERROR_MESSAGE = "To use mobile wallet adapter, you must have a compatible mobile wallet application installed on your device.";
var BROWSER_NOT_SUPPORTED_ERROR_MESSAGE = "This browser appears to be incompatible with mobile wallet adapter. Open this page in a compatible mobile browser app and try again.";
var ErrorModal = class extends EmbeddedModal {
  constructor() {
    super(...arguments);
    this.contentStyles = css;
    this.contentHtml = ErrorDialogHtml;
  }
  initWithError(error) {
    super.init();
    this.populateError(error);
  }
  populateError(error) {
    var _a, _b;
    const errorMessageElement = (_a = this.dom) === null || _a === void 0 ? void 0 : _a.getElementById("mobile-wallet-adapter-error-message");
    const actionBtn = (_b = this.dom) === null || _b === void 0 ? void 0 : _b.getElementById("mobile-wallet-adapter-error-action");
    if (errorMessageElement) {
      if (error.name === "SolanaMobileWalletAdapterError") {
        switch (error.code) {
          case "ERROR_WALLET_NOT_FOUND":
            errorMessageElement.innerHTML = WALLET_NOT_FOUND_ERROR_MESSAGE;
            if (actionBtn)
              actionBtn.addEventListener("click", () => {
                window.location.href = "https://solanamobile.com/wallets";
              });
            return;
          case "ERROR_BROWSER_NOT_SUPPORTED":
            errorMessageElement.innerHTML = BROWSER_NOT_SUPPORTED_ERROR_MESSAGE;
            if (actionBtn)
              actionBtn.style.display = "none";
            return;
        }
      }
      errorMessageElement.innerHTML = `An unexpected error occurred: ${error.message}`;
    } else {
      console.log("Failed to locate error dialog element");
    }
  }
};
var ErrorDialogHtml = `
<svg class="mobile-wallet-adapter-embedded-modal-error-icon" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M 280,-80 Q 197,-80 138.5,-138.5 80,-197 80,-280 80,-363 138.5,-421.5 197,-480 280,-480 q 83,0 141.5,58.5 58.5,58.5 58.5,141.5 0,83 -58.5,141.5 Q 363,-80 280,-80 Z M 824,-120 568,-376 Q 556,-389 542.5,-402.5 529,-416 516,-428 q 38,-24 61,-64 23,-40 23,-88 0,-75 -52.5,-127.5 Q 495,-760 420,-760 345,-760 292.5,-707.5 240,-655 240,-580 q 0,6 0.5,11.5 0.5,5.5 1.5,11.5 -18,2 -39.5,8 -21.5,6 -38.5,14 -2,-11 -3,-22 -1,-11 -1,-23 0,-109 75.5,-184.5 Q 311,-840 420,-840 q 109,0 184.5,75.5 75.5,75.5 75.5,184.5 0,43 -13.5,81.5 Q 653,-460 629,-428 l 251,252 z m -615,-61 71,-71 70,71 29,-28 -71,-71 71,-71 -28,-28 -71,71 -71,-71 -28,28 71,71 -71,71 z"/></svg>
<div class="mobile-wallet-adapter-embedded-modal-title">We can't find a wallet.</div>
<div id="mobile-wallet-adapter-error-message" class="mobile-wallet-adapter-embedded-modal-subtitle"></div>
<div>
    <button data-error-action id="mobile-wallet-adapter-error-action" class="mobile-wallet-adapter-embedded-modal-error-action">
        Find a wallet
    </button>
</div>
`;
var css = `
.mobile-wallet-adapter-embedded-modal-content {
    text-align: center;
}

.mobile-wallet-adapter-embedded-modal-error-icon {
    margin-top: 24px;
}

.mobile-wallet-adapter-embedded-modal-title {
    margin: 18px 100px auto 100px;
    color: #000000;
    font-size: 2.75em;
    font-weight: 600;
}

.mobile-wallet-adapter-embedded-modal-subtitle {
    margin: 30px 60px 40px 60px;
    color: #000000;
    font-size: 1.25em;
    font-weight: 400;
}

.mobile-wallet-adapter-embedded-modal-error-action {
    display: block;
    width: 100%;
    height: 56px;
    /*margin-top: 40px;*/
    font-size: 1.25em;
    /*line-height: 24px;*/
    /*letter-spacing: -1%;*/
    background: #000000;
    color: #FFFFFF;
    border-radius: 18px;
}

/* Smaller screens */
@media all and (max-width: 600px) {
    .mobile-wallet-adapter-embedded-modal-title {
        font-size: 1.5em;
        margin-right: 12px;
        margin-left: 12px;
    }
    .mobile-wallet-adapter-embedded-modal-subtitle {
        margin-right: 12px;
        margin-left: 12px;
    }
}
`;
function defaultErrorModalWalletNotFoundHandler() {
  return __awaiter2(this, void 0, void 0, function* () {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const errorDialog = new ErrorModal();
      if (userAgent.includes("wv")) {
        errorDialog.initWithError({
          name: "SolanaMobileWalletAdapterError",
          code: "ERROR_BROWSER_NOT_SUPPORTED",
          message: ""
        });
      } else {
        errorDialog.initWithError({
          name: "SolanaMobileWalletAdapterError",
          code: "ERROR_WALLET_NOT_FOUND",
          message: ""
        });
      }
      errorDialog.open();
    }
  });
}
var CACHE_KEY = "SolanaMobileWalletAdapterDefaultAuthorizationCache";
function createDefaultAuthorizationCache() {
  let storage;
  try {
    storage = window.localStorage;
  } catch (_a) {
  }
  return {
    clear() {
      return __awaiter2(this, void 0, void 0, function* () {
        if (!storage) {
          return;
        }
        try {
          storage.removeItem(CACHE_KEY);
        } catch (_a) {
        }
      });
    },
    get() {
      return __awaiter2(this, void 0, void 0, function* () {
        if (!storage) {
          return;
        }
        try {
          const parsed = JSON.parse(storage.getItem(CACHE_KEY));
          if (parsed && parsed.accounts) {
            const parsedAccounts = parsed.accounts.map((account) => {
              return Object.assign(Object.assign({}, account), { publicKey: "publicKey" in account ? new Uint8Array(Object.values(account.publicKey)) : import_bs582.default.decode(account.address) });
            });
            return Object.assign(Object.assign({}, parsed), { accounts: parsedAccounts });
          } else
            return parsed || void 0;
        } catch (_a) {
        }
      });
    },
    set(authorization) {
      return __awaiter2(this, void 0, void 0, function* () {
        if (!storage) {
          return;
        }
        try {
          storage.setItem(CACHE_KEY, JSON.stringify(authorization));
        } catch (_a) {
        }
      });
    }
  };
}
function createDefaultChainSelector() {
  return {
    select(chains) {
      return __awaiter2(this, void 0, void 0, function* () {
        if (chains.length === 1) {
          return chains[0];
        } else if (chains.includes(SOLANA_MAINNET_CHAIN)) {
          return SOLANA_MAINNET_CHAIN;
        } else
          return chains[0];
      });
    }
  };
}

// node_modules/.pnpm/@solana-mobile+wallet-adapter-mobile@2.2.5_@solana+web3.js@1.98.4_bufferutil@4.0.9_type_c34293a0caec7d4a67a277d021cf5a3a/node_modules/@solana-mobile/wallet-adapter-mobile/lib/esm/index.browser.js
function __awaiter3(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
var StandardConnect2 = "standard:connect";
var StandardDisconnect2 = "standard:disconnect";
var StandardEvents2 = "standard:events";
function fromUint8Array3(byteArray) {
  return window.btoa(String.fromCharCode.call(null, ...byteArray));
}
function getIsSupported() {
  return typeof window !== "undefined" && window.isSecureContext && typeof document !== "undefined" && /android/i.test(navigator.userAgent);
}
var _BaseSolanaMobileWalletAdapter_instances;
var _BaseSolanaMobileWalletAdapter_wallet;
var _BaseSolanaMobileWalletAdapter_connecting;
var _BaseSolanaMobileWalletAdapter_readyState;
var _BaseSolanaMobileWalletAdapter_accountSelector;
var _BaseSolanaMobileWalletAdapter_selectedAccount;
var _BaseSolanaMobileWalletAdapter_publicKey;
var _BaseSolanaMobileWalletAdapter_handleChangeEvent;
var _BaseSolanaMobileWalletAdapter_connect;
var _BaseSolanaMobileWalletAdapter_declareWalletAsInstalled;
var _BaseSolanaMobileWalletAdapter_assertIsAuthorized;
var _BaseSolanaMobileWalletAdapter_performSignTransactions;
var _BaseSolanaMobileWalletAdapter_runWithGuard;
var SolanaMobileWalletAdapterWalletName2 = SolanaMobileWalletAdapterWalletName;
var SIGNATURE_LENGTH_IN_BYTES3 = 64;
function isVersionedTransaction2(transaction) {
  return "version" in transaction;
}
function chainOrClusterToChainId(chain) {
  switch (chain) {
    case "mainnet-beta":
      return "solana:mainnet";
    case "testnet":
      return "solana:testnet";
    case "devnet":
      return "solana:devnet";
    default:
      return chain;
  }
}
var BaseSolanaMobileWalletAdapter = class extends BaseSignInMessageSignerWalletAdapter {
  constructor(wallet, config) {
    super();
    _BaseSolanaMobileWalletAdapter_instances.add(this);
    this.supportedTransactionVersions = /* @__PURE__ */ new Set(
      // FIXME(#244): We can't actually know what versions are supported until we know which wallet we're talking to.
      ["legacy", 0]
    );
    _BaseSolanaMobileWalletAdapter_wallet.set(this, void 0);
    _BaseSolanaMobileWalletAdapter_connecting.set(this, false);
    _BaseSolanaMobileWalletAdapter_readyState.set(this, getIsSupported() ? WalletReadyState.Loadable : WalletReadyState.Unsupported);
    _BaseSolanaMobileWalletAdapter_accountSelector.set(this, void 0);
    _BaseSolanaMobileWalletAdapter_selectedAccount.set(this, void 0);
    _BaseSolanaMobileWalletAdapter_publicKey.set(this, void 0);
    _BaseSolanaMobileWalletAdapter_handleChangeEvent.set(this, (properties) => __awaiter3(this, void 0, void 0, function* () {
      if (properties.accounts && properties.accounts.length > 0) {
        __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_declareWalletAsInstalled).call(this);
        const nextSelectedAccount = yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_accountSelector, "f").call(this, properties.accounts);
        if (nextSelectedAccount !== __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_selectedAccount, "f")) {
          __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_selectedAccount, nextSelectedAccount, "f");
          __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_publicKey, void 0, "f");
          this.emit(
            "connect",
            // Having just set `this.#selectedAccount`, `this.publicKey` is definitely non-null
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.publicKey
          );
        }
      }
    }));
    __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_accountSelector, (accounts) => __awaiter3(this, void 0, void 0, function* () {
      var _a;
      const selectedBase64EncodedAddress = yield config.addressSelector.select(accounts.map(({ publicKey: publicKey2 }) => fromUint8Array3(publicKey2)));
      return (_a = accounts.find(({ publicKey: publicKey2 }) => fromUint8Array3(publicKey2) === selectedBase64EncodedAddress)) !== null && _a !== void 0 ? _a : accounts[0];
    }), "f");
    __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_wallet, wallet, "f");
    __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features[StandardEvents2].on("change", __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_handleChangeEvent, "f"));
    this.name = __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").name;
    this.icon = __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").icon;
    this.url = __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").url;
  }
  get publicKey() {
    var _a;
    if (!__classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_publicKey, "f") && __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_selectedAccount, "f")) {
      try {
        __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_publicKey, new PublicKey(__classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_selectedAccount, "f").publicKey), "f");
      } catch (e2) {
        throw new WalletPublicKeyError(e2 instanceof Error && (e2 === null || e2 === void 0 ? void 0 : e2.message) || "Unknown error", e2);
      }
    }
    return (_a = __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_publicKey, "f")) !== null && _a !== void 0 ? _a : null;
  }
  get connected() {
    return __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").connected;
  }
  get connecting() {
    return __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_connecting, "f");
  }
  get readyState() {
    return __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_readyState, "f");
  }
  /** @deprecated Use `autoConnect()` instead. */
  autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield this.autoConnect();
    });
  }
  autoConnect() {
    return __awaiter3(this, void 0, void 0, function* () {
      __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_connect).call(this, true);
    });
  }
  connect() {
    return __awaiter3(this, void 0, void 0, function* () {
      __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_connect).call(this);
    });
  }
  /** @deprecated Use `connect()` or `autoConnect()` instead. */
  performAuthorization(signInPayload) {
    return __awaiter3(this, void 0, void 0, function* () {
      try {
        const cachedAuthorizationResult = yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").cachedAuthorizationResult;
        if (cachedAuthorizationResult) {
          yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features[StandardConnect2].connect({ silent: true });
          return cachedAuthorizationResult;
        }
        if (signInPayload) {
          yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features[SolanaSignIn].signIn(signInPayload);
        } else
          yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features[StandardConnect2].connect();
        const authorizationResult = yield yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").cachedAuthorizationResult;
        return authorizationResult;
      } catch (e2) {
        throw new WalletConnectionError(e2 instanceof Error && e2.message || "Unknown error", e2);
      }
    });
  }
  disconnect() {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_runWithGuard).call(this, () => __awaiter3(this, void 0, void 0, function* () {
        __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_connecting, false, "f");
        __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_publicKey, void 0, "f");
        __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_selectedAccount, void 0, "f");
        yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features[StandardDisconnect2].disconnect();
        this.emit("disconnect");
      }));
    });
  }
  signIn(input) {
    return __awaiter3(this, void 0, void 0, function* () {
      return __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_runWithGuard).call(this, () => __awaiter3(this, void 0, void 0, function* () {
        var _a;
        if (__classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_readyState, "f") !== WalletReadyState.Installed && __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_readyState, "f") !== WalletReadyState.Loadable) {
          throw new WalletNotReadyError();
        }
        __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_connecting, true, "f");
        try {
          const outputs = yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features[SolanaSignIn].signIn(Object.assign(Object.assign({}, input), { domain: (_a = input === null || input === void 0 ? void 0 : input.domain) !== null && _a !== void 0 ? _a : window.location.host }));
          if (outputs.length > 0) {
            return outputs[0];
          } else {
            throw new Error("Sign in failed, no sign in result returned by wallet");
          }
        } catch (e2) {
          throw new WalletConnectionError(e2 instanceof Error && e2.message || "Unknown error", e2);
        } finally {
          __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_connecting, false, "f");
        }
      }));
    });
  }
  signMessage(message) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_runWithGuard).call(this, () => __awaiter3(this, void 0, void 0, function* () {
        const account = __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_assertIsAuthorized).call(this);
        try {
          const outputs = yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features[SolanaSignMessage].signMessage({
            account,
            message
          });
          return outputs[0].signature;
        } catch (error) {
          throw new WalletSignMessageError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      }));
    });
  }
  sendTransaction(transaction, connection, options) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_runWithGuard).call(this, () => __awaiter3(this, void 0, void 0, function* () {
        const account = __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_assertIsAuthorized).call(this);
        try {
          let getTargetCommitment = function() {
            let targetCommitment;
            switch (connection.commitment) {
              case "confirmed":
              case "finalized":
              case "processed":
                targetCommitment = connection.commitment;
                break;
              default:
                targetCommitment = "finalized";
            }
            let targetPreflightCommitment;
            switch (options === null || options === void 0 ? void 0 : options.preflightCommitment) {
              case "confirmed":
              case "finalized":
              case "processed":
                targetPreflightCommitment = options.preflightCommitment;
                break;
              case void 0:
                targetPreflightCommitment = targetCommitment;
                break;
              default:
                targetPreflightCommitment = "finalized";
            }
            const preflightCommitmentScore = targetPreflightCommitment === "finalized" ? 2 : targetPreflightCommitment === "confirmed" ? 1 : 0;
            const targetCommitmentScore = targetCommitment === "finalized" ? 2 : targetCommitment === "confirmed" ? 1 : 0;
            return preflightCommitmentScore < targetCommitmentScore ? targetPreflightCommitment : targetCommitment;
          };
          if (SolanaSignAndSendTransaction in __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features) {
            const chain = chainOrClusterToChainId(__classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").currentAuthorization.chain);
            const [signature2] = (yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features[SolanaSignAndSendTransaction].signAndSendTransaction({
              account,
              transaction: transaction.serialize(),
              chain,
              options: options ? {
                skipPreflight: options.skipPreflight,
                maxRetries: options.maxRetries
              } : void 0
            })).map(((output) => {
              return fromUint8Array3(output.signature);
            }));
            return signature2;
          } else {
            const [signedTransaction] = yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_performSignTransactions).call(this, [transaction]);
            if (isVersionedTransaction2(signedTransaction)) {
              return yield connection.sendTransaction(signedTransaction);
            } else {
              const serializedTransaction = signedTransaction.serialize();
              return yield connection.sendRawTransaction(serializedTransaction, Object.assign(Object.assign({}, options), { preflightCommitment: getTargetCommitment() }));
            }
          }
        } catch (error) {
          throw new WalletSendTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      }));
    });
  }
  signTransaction(transaction) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_runWithGuard).call(this, () => __awaiter3(this, void 0, void 0, function* () {
        const [signedTransaction] = yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_performSignTransactions).call(this, [transaction]);
        return signedTransaction;
      }));
    });
  }
  signAllTransactions(transactions) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_runWithGuard).call(this, () => __awaiter3(this, void 0, void 0, function* () {
        const signedTransactions = yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_performSignTransactions).call(this, transactions);
        return signedTransactions;
      }));
    });
  }
};
_BaseSolanaMobileWalletAdapter_wallet = /* @__PURE__ */ new WeakMap(), _BaseSolanaMobileWalletAdapter_connecting = /* @__PURE__ */ new WeakMap(), _BaseSolanaMobileWalletAdapter_readyState = /* @__PURE__ */ new WeakMap(), _BaseSolanaMobileWalletAdapter_accountSelector = /* @__PURE__ */ new WeakMap(), _BaseSolanaMobileWalletAdapter_selectedAccount = /* @__PURE__ */ new WeakMap(), _BaseSolanaMobileWalletAdapter_publicKey = /* @__PURE__ */ new WeakMap(), _BaseSolanaMobileWalletAdapter_handleChangeEvent = /* @__PURE__ */ new WeakMap(), _BaseSolanaMobileWalletAdapter_instances = /* @__PURE__ */ new WeakSet(), _BaseSolanaMobileWalletAdapter_connect = function _BaseSolanaMobileWalletAdapter_connect2(autoConnect = false) {
  return __awaiter3(this, void 0, void 0, function* () {
    if (this.connecting || this.connected) {
      return;
    }
    return yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_runWithGuard).call(this, () => __awaiter3(this, void 0, void 0, function* () {
      if (__classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_readyState, "f") !== WalletReadyState.Installed && __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_readyState, "f") !== WalletReadyState.Loadable) {
        throw new WalletNotReadyError();
      }
      __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_connecting, true, "f");
      try {
        yield __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features[StandardConnect2].connect({ silent: autoConnect });
      } catch (e2) {
        throw new WalletConnectionError(e2 instanceof Error && e2.message || "Unknown error", e2);
      } finally {
        __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_connecting, false, "f");
      }
    }));
  });
}, _BaseSolanaMobileWalletAdapter_declareWalletAsInstalled = function _BaseSolanaMobileWalletAdapter_declareWalletAsInstalled2() {
  if (__classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_readyState, "f") !== WalletReadyState.Installed) {
    this.emit("readyStateChange", __classPrivateFieldSet(this, _BaseSolanaMobileWalletAdapter_readyState, WalletReadyState.Installed, "f"));
  }
}, _BaseSolanaMobileWalletAdapter_assertIsAuthorized = function _BaseSolanaMobileWalletAdapter_assertIsAuthorized2() {
  if (!__classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").isAuthorized || !__classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_selectedAccount, "f"))
    throw new WalletNotConnectedError();
  return __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_selectedAccount, "f");
}, _BaseSolanaMobileWalletAdapter_performSignTransactions = function _BaseSolanaMobileWalletAdapter_performSignTransactions2(transactions) {
  return __awaiter3(this, void 0, void 0, function* () {
    const account = __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_instances, "m", _BaseSolanaMobileWalletAdapter_assertIsAuthorized).call(this);
    try {
      if (SolanaSignTransaction in __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features) {
        return __classPrivateFieldGet(this, _BaseSolanaMobileWalletAdapter_wallet, "f").features[SolanaSignTransaction].signTransaction(...transactions.map((value) => {
          return { account, transaction: value.serialize() };
        })).then((outputs) => {
          return outputs.map((output) => {
            const byteArray = output.signedTransaction;
            const numSignatures = byteArray[0];
            const messageOffset = numSignatures * SIGNATURE_LENGTH_IN_BYTES3 + 1;
            const version = VersionedMessage.deserializeMessageVersion(byteArray.slice(messageOffset, byteArray.length));
            if (version === "legacy") {
              return Transaction.from(byteArray);
            } else {
              return VersionedTransaction.deserialize(byteArray);
            }
          });
        });
      } else {
        throw new Error("Connected wallet does not support signing transactions");
      }
    } catch (error) {
      throw new WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
    }
  });
}, _BaseSolanaMobileWalletAdapter_runWithGuard = function _BaseSolanaMobileWalletAdapter_runWithGuard2(callback) {
  return __awaiter3(this, void 0, void 0, function* () {
    try {
      return yield callback();
    } catch (e2) {
      this.emit("error", e2);
      throw e2;
    }
  });
};
var LocalSolanaMobileWalletAdapter = class extends BaseSolanaMobileWalletAdapter {
  constructor(config) {
    var _a;
    const chain = chainOrClusterToChainId((_a = config.chain) !== null && _a !== void 0 ? _a : config.cluster);
    super(new LocalSolanaMobileWalletAdapterWallet({
      appIdentity: config.appIdentity,
      authorizationCache: {
        set: config.authorizationResultCache.set,
        get: () => __awaiter3(this, void 0, void 0, function* () {
          return yield config.authorizationResultCache.get();
        }),
        clear: config.authorizationResultCache.clear
      },
      chains: [chain],
      chainSelector: createDefaultChainSelector(),
      onWalletNotFound: () => __awaiter3(this, void 0, void 0, function* () {
        config.onWalletNotFound(this);
      })
    }), {
      addressSelector: config.addressSelector,
      chain
    });
  }
};
var SolanaMobileWalletAdapter = class extends LocalSolanaMobileWalletAdapter {
};
function createDefaultAddressSelector() {
  return {
    select(addresses) {
      return __awaiter3(this, void 0, void 0, function* () {
        return addresses[0];
      });
    }
  };
}
function createDefaultAuthorizationResultCache() {
  return createDefaultAuthorizationCache();
}
function defaultWalletNotFoundHandler(mobileWalletAdapter) {
  return __awaiter3(this, void 0, void 0, function* () {
    return defaultErrorModalWalletNotFoundHandler();
  });
}
function createDefaultWalletNotFoundHandler() {
  return defaultWalletNotFoundHandler;
}

// node_modules/.pnpm/@wallet-standard+wallet@1.1.0/node_modules/@wallet-standard/wallet/lib/esm/register.js
var _RegisterWalletEvent_detail2;
_RegisterWalletEvent_detail2 = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/@wallet-standard+wallet@1.1.0/node_modules/@wallet-standard/wallet/lib/esm/util.js
var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _ReadonlyWalletAccount_address;
var _ReadonlyWalletAccount_publicKey;
var _ReadonlyWalletAccount_chains;
var _ReadonlyWalletAccount_features;
var _ReadonlyWalletAccount_label;
var _ReadonlyWalletAccount_icon;
var ReadonlyWalletAccount = class _ReadonlyWalletAccount {
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.address | WalletAccount::address} */
  get address() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_address, "f");
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.publicKey | WalletAccount::publicKey} */
  get publicKey() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_publicKey, "f").slice();
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.chains | WalletAccount::chains} */
  get chains() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_chains, "f").slice();
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.features | WalletAccount::features} */
  get features() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_features, "f").slice();
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.label | WalletAccount::label} */
  get label() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_label, "f");
  }
  /** Implementation of {@link "@wallet-standard/base".WalletAccount.icon | WalletAccount::icon} */
  get icon() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_icon, "f");
  }
  /**
   * Create and freeze a read-only account.
   *
   * @param account Account to copy properties from.
   */
  constructor(account) {
    _ReadonlyWalletAccount_address.set(this, void 0);
    _ReadonlyWalletAccount_publicKey.set(this, void 0);
    _ReadonlyWalletAccount_chains.set(this, void 0);
    _ReadonlyWalletAccount_features.set(this, void 0);
    _ReadonlyWalletAccount_label.set(this, void 0);
    _ReadonlyWalletAccount_icon.set(this, void 0);
    if (new.target === _ReadonlyWalletAccount) {
      Object.freeze(this);
    }
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_address, account.address, "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_publicKey, account.publicKey.slice(), "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_chains, account.chains.slice(), "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_features, account.features.slice(), "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_label, account.label, "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_icon, account.icon, "f");
  }
};
_ReadonlyWalletAccount_address = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_publicKey = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_chains = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_features = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_label = /* @__PURE__ */ new WeakMap(), _ReadonlyWalletAccount_icon = /* @__PURE__ */ new WeakMap();
function arraysEqual2(a, b) {
  if (a === b)
    return true;
  const length = a.length;
  if (length !== b.length)
    return false;
  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
}
function bytesEqual2(a, b) {
  return arraysEqual2(a, b);
}

// node_modules/.pnpm/@solana+wallet-standard-wallet-adapter-base@1.1.4_@solana+web3.js@1.98.4_bufferutil@4.0_62b29c5930c634375e4ef453aafb1973/node_modules/@solana/wallet-standard-wallet-adapter-base/lib/esm/adapter.js
var __classPrivateFieldGet3 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _StandardWalletAdapter_instances;
var _StandardWalletAdapter_account;
var _StandardWalletAdapter_publicKey;
var _StandardWalletAdapter_connecting;
var _StandardWalletAdapter_disconnecting;
var _StandardWalletAdapter_off;
var _StandardWalletAdapter_supportedTransactionVersions;
var _StandardWalletAdapter_wallet;
var _StandardWalletAdapter_readyState;
var _StandardWalletAdapter_connect;
var _StandardWalletAdapter_connected;
var _StandardWalletAdapter_disconnected;
var _StandardWalletAdapter_reset;
var _StandardWalletAdapter_changed;
var _StandardWalletAdapter_signTransaction;
var _StandardWalletAdapter_signAllTransactions;
var _StandardWalletAdapter_signMessage;
var _StandardWalletAdapter_signIn;
var StandardWalletAdapter = class extends BaseWalletAdapter {
  get name() {
    return __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").name;
  }
  get url() {
    return "https://github.com/solana-labs/wallet-standard";
  }
  get icon() {
    return __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").icon;
  }
  get readyState() {
    return __classPrivateFieldGet3(this, _StandardWalletAdapter_readyState, "f");
  }
  get publicKey() {
    return __classPrivateFieldGet3(this, _StandardWalletAdapter_publicKey, "f");
  }
  get connecting() {
    return __classPrivateFieldGet3(this, _StandardWalletAdapter_connecting, "f");
  }
  get supportedTransactionVersions() {
    return __classPrivateFieldGet3(this, _StandardWalletAdapter_supportedTransactionVersions, "f");
  }
  get wallet() {
    return __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f");
  }
  get standard() {
    return true;
  }
  constructor({ wallet }) {
    super();
    _StandardWalletAdapter_instances.add(this);
    _StandardWalletAdapter_account.set(this, void 0);
    _StandardWalletAdapter_publicKey.set(this, void 0);
    _StandardWalletAdapter_connecting.set(this, void 0);
    _StandardWalletAdapter_disconnecting.set(this, void 0);
    _StandardWalletAdapter_off.set(this, void 0);
    _StandardWalletAdapter_supportedTransactionVersions.set(this, void 0);
    _StandardWalletAdapter_wallet.set(this, void 0);
    _StandardWalletAdapter_readyState.set(this, typeof window === "undefined" || typeof document === "undefined" ? WalletReadyState.Unsupported : WalletReadyState.Installed);
    _StandardWalletAdapter_changed.set(this, (properties) => {
      if ("accounts" in properties) {
        const account = __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").accounts[0];
        if (__classPrivateFieldGet3(this, _StandardWalletAdapter_account, "f") && !__classPrivateFieldGet3(this, _StandardWalletAdapter_disconnecting, "f") && account !== __classPrivateFieldGet3(this, _StandardWalletAdapter_account, "f")) {
          if (account) {
            __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_connected).call(this, account);
          } else {
            this.emit("error", new WalletDisconnectedError());
            __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_disconnected).call(this);
          }
        }
      }
      if ("features" in properties) {
        __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_reset).call(this);
      }
    });
    __classPrivateFieldSet3(this, _StandardWalletAdapter_wallet, wallet, "f");
    __classPrivateFieldSet3(this, _StandardWalletAdapter_account, null, "f");
    __classPrivateFieldSet3(this, _StandardWalletAdapter_publicKey, null, "f");
    __classPrivateFieldSet3(this, _StandardWalletAdapter_connecting, false, "f");
    __classPrivateFieldSet3(this, _StandardWalletAdapter_disconnecting, false, "f");
    __classPrivateFieldSet3(this, _StandardWalletAdapter_off, __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features[StandardEvents].on("change", __classPrivateFieldGet3(this, _StandardWalletAdapter_changed, "f")), "f");
    __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_reset).call(this);
  }
  destroy() {
    __classPrivateFieldSet3(this, _StandardWalletAdapter_account, null, "f");
    __classPrivateFieldSet3(this, _StandardWalletAdapter_publicKey, null, "f");
    __classPrivateFieldSet3(this, _StandardWalletAdapter_connecting, false, "f");
    __classPrivateFieldSet3(this, _StandardWalletAdapter_disconnecting, false, "f");
    const off = __classPrivateFieldGet3(this, _StandardWalletAdapter_off, "f");
    if (off) {
      __classPrivateFieldSet3(this, _StandardWalletAdapter_off, null, "f");
      off();
    }
  }
  async autoConnect() {
    return __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_connect).call(this, { silent: true });
  }
  async connect() {
    return __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_connect).call(this);
  }
  async disconnect() {
    if (StandardDisconnect in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features) {
      try {
        __classPrivateFieldSet3(this, _StandardWalletAdapter_disconnecting, true, "f");
        await __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features[StandardDisconnect].disconnect();
      } catch (error) {
        this.emit("error", new WalletDisconnectionError(error?.message, error));
      } finally {
        __classPrivateFieldSet3(this, _StandardWalletAdapter_disconnecting, false, "f");
      }
    }
    __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_disconnected).call(this);
  }
  async sendTransaction(transaction, connection, options = {}) {
    try {
      const account = __classPrivateFieldGet3(this, _StandardWalletAdapter_account, "f");
      if (!account)
        throw new WalletNotConnectedError();
      let feature;
      if (SolanaSignAndSendTransaction in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features) {
        if (account.features.includes(SolanaSignAndSendTransaction)) {
          feature = SolanaSignAndSendTransaction;
        } else if (SolanaSignTransaction in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features && account.features.includes(SolanaSignTransaction)) {
          feature = SolanaSignTransaction;
        } else {
          throw new WalletAccountError();
        }
      } else if (SolanaSignTransaction in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features) {
        if (!account.features.includes(SolanaSignTransaction))
          throw new WalletAccountError();
        feature = SolanaSignTransaction;
      } else {
        throw new WalletConfigError();
      }
      const chain = getChainForEndpoint(connection.rpcEndpoint);
      if (!account.chains.includes(chain))
        throw new WalletSendTransactionError();
      try {
        const { signers, ...sendOptions } = options;
        let serializedTransaction;
        if (isVersionedTransaction(transaction)) {
          signers?.length && transaction.sign(signers);
          serializedTransaction = transaction.serialize();
        } else {
          transaction = await this.prepareTransaction(transaction, connection, sendOptions);
          signers?.length && transaction.partialSign(...signers);
          serializedTransaction = new Uint8Array(transaction.serialize({
            requireAllSignatures: false,
            verifySignatures: false
          }));
        }
        if (feature === SolanaSignAndSendTransaction) {
          const [output] = await __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignAndSendTransaction].signAndSendTransaction({
            account,
            chain,
            transaction: serializedTransaction,
            options: {
              preflightCommitment: getCommitment(sendOptions.preflightCommitment || connection.commitment),
              skipPreflight: sendOptions.skipPreflight,
              maxRetries: sendOptions.maxRetries,
              minContextSlot: sendOptions.minContextSlot
            }
          });
          return esm_default.encode(output.signature);
        } else {
          const [output] = await __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignTransaction].signTransaction({
            account,
            chain,
            transaction: serializedTransaction,
            options: {
              preflightCommitment: getCommitment(sendOptions.preflightCommitment || connection.commitment),
              minContextSlot: sendOptions.minContextSlot
            }
          });
          return await connection.sendRawTransaction(output.signedTransaction, {
            ...sendOptions,
            preflightCommitment: getCommitment(sendOptions.preflightCommitment || connection.commitment)
          });
        }
      } catch (error) {
        if (error instanceof WalletError)
          throw error;
        throw new WalletSendTransactionError(error?.message, error);
      }
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }
};
_StandardWalletAdapter_account = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_publicKey = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_connecting = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_disconnecting = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_off = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_supportedTransactionVersions = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_wallet = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_readyState = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_changed = /* @__PURE__ */ new WeakMap(), _StandardWalletAdapter_instances = /* @__PURE__ */ new WeakSet(), _StandardWalletAdapter_connect = async function _StandardWalletAdapter_connect2(input) {
  try {
    if (this.connected || this.connecting)
      return;
    if (__classPrivateFieldGet3(this, _StandardWalletAdapter_readyState, "f") !== WalletReadyState.Installed)
      throw new WalletNotReadyError();
    __classPrivateFieldSet3(this, _StandardWalletAdapter_connecting, true, "f");
    if (!__classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").accounts.length) {
      try {
        await __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features[StandardConnect].connect(input);
      } catch (error) {
        throw new WalletConnectionError(error?.message, error);
      }
    }
    const account = __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").accounts[0];
    if (!account)
      throw new WalletAccountError();
    __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_connected).call(this, account);
  } catch (error) {
    this.emit("error", error);
    throw error;
  } finally {
    __classPrivateFieldSet3(this, _StandardWalletAdapter_connecting, false, "f");
  }
}, _StandardWalletAdapter_connected = function _StandardWalletAdapter_connected2(account) {
  let publicKey2;
  try {
    publicKey2 = new PublicKey(account.address);
  } catch (error) {
    throw new WalletPublicKeyError(error?.message, error);
  }
  __classPrivateFieldSet3(this, _StandardWalletAdapter_account, account, "f");
  __classPrivateFieldSet3(this, _StandardWalletAdapter_publicKey, publicKey2, "f");
  __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_reset).call(this);
  this.emit("connect", publicKey2);
}, _StandardWalletAdapter_disconnected = function _StandardWalletAdapter_disconnected2() {
  __classPrivateFieldSet3(this, _StandardWalletAdapter_account, null, "f");
  __classPrivateFieldSet3(this, _StandardWalletAdapter_publicKey, null, "f");
  __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_reset).call(this);
  this.emit("disconnect");
}, _StandardWalletAdapter_reset = function _StandardWalletAdapter_reset2() {
  const supportedTransactionVersions = SolanaSignAndSendTransaction in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features ? __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignAndSendTransaction].supportedTransactionVersions : __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignTransaction].supportedTransactionVersions;
  __classPrivateFieldSet3(this, _StandardWalletAdapter_supportedTransactionVersions, arraysEqual2(supportedTransactionVersions, ["legacy"]) ? null : new Set(supportedTransactionVersions), "f");
  if (SolanaSignTransaction in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features && __classPrivateFieldGet3(this, _StandardWalletAdapter_account, "f")?.features.includes(SolanaSignTransaction)) {
    this.signTransaction = __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_signTransaction);
    this.signAllTransactions = __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_signAllTransactions);
  } else {
    delete this.signTransaction;
    delete this.signAllTransactions;
  }
  if (SolanaSignMessage in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features && __classPrivateFieldGet3(this, _StandardWalletAdapter_account, "f")?.features.includes(SolanaSignMessage)) {
    this.signMessage = __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_signMessage);
  } else {
    delete this.signMessage;
  }
  if (SolanaSignIn in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features) {
    this.signIn = __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_signIn);
  } else {
    delete this.signIn;
  }
}, _StandardWalletAdapter_signTransaction = async function _StandardWalletAdapter_signTransaction2(transaction) {
  try {
    const account = __classPrivateFieldGet3(this, _StandardWalletAdapter_account, "f");
    if (!account)
      throw new WalletNotConnectedError();
    if (!(SolanaSignTransaction in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features))
      throw new WalletConfigError();
    if (!account.features.includes(SolanaSignTransaction))
      throw new WalletAccountError();
    try {
      const signedTransactions = await __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignTransaction].signTransaction({
        account,
        transaction: isVersionedTransaction(transaction) ? transaction.serialize() : new Uint8Array(transaction.serialize({
          requireAllSignatures: false,
          verifySignatures: false
        }))
      });
      const serializedTransaction = signedTransactions[0].signedTransaction;
      return isVersionedTransaction(transaction) ? VersionedTransaction.deserialize(serializedTransaction) : Transaction.from(serializedTransaction);
    } catch (error) {
      if (error instanceof WalletError)
        throw error;
      throw new WalletSignTransactionError(error?.message, error);
    }
  } catch (error) {
    this.emit("error", error);
    throw error;
  }
}, _StandardWalletAdapter_signAllTransactions = async function _StandardWalletAdapter_signAllTransactions2(transactions) {
  try {
    const account = __classPrivateFieldGet3(this, _StandardWalletAdapter_account, "f");
    if (!account)
      throw new WalletNotConnectedError();
    if (!(SolanaSignTransaction in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features))
      throw new WalletConfigError();
    if (!account.features.includes(SolanaSignTransaction))
      throw new WalletAccountError();
    try {
      const signedTransactions = await __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignTransaction].signTransaction(...transactions.map((transaction) => ({
        account,
        transaction: isVersionedTransaction(transaction) ? transaction.serialize() : new Uint8Array(transaction.serialize({
          requireAllSignatures: false,
          verifySignatures: false
        }))
      })));
      return transactions.map((transaction, index) => {
        const signedTransaction = signedTransactions[index].signedTransaction;
        return isVersionedTransaction(transaction) ? VersionedTransaction.deserialize(signedTransaction) : Transaction.from(signedTransaction);
      });
    } catch (error) {
      throw new WalletSignTransactionError(error?.message, error);
    }
  } catch (error) {
    this.emit("error", error);
    throw error;
  }
}, _StandardWalletAdapter_signMessage = async function _StandardWalletAdapter_signMessage2(message) {
  try {
    const account = __classPrivateFieldGet3(this, _StandardWalletAdapter_account, "f");
    if (!account)
      throw new WalletNotConnectedError();
    if (!(SolanaSignMessage in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features))
      throw new WalletConfigError();
    if (!account.features.includes(SolanaSignMessage))
      throw new WalletAccountError();
    try {
      const signedMessages = await __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignMessage].signMessage({
        account,
        message
      });
      return signedMessages[0].signature;
    } catch (error) {
      throw new WalletSignMessageError(error?.message, error);
    }
  } catch (error) {
    this.emit("error", error);
    throw error;
  }
}, _StandardWalletAdapter_signIn = async function _StandardWalletAdapter_signIn2(input = {}) {
  try {
    if (!(SolanaSignIn in __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features))
      throw new WalletConfigError();
    let output;
    try {
      [output] = await __classPrivateFieldGet3(this, _StandardWalletAdapter_wallet, "f").features[SolanaSignIn].signIn(input);
    } catch (error) {
      throw new WalletSignInError(error?.message, error);
    }
    if (!output)
      throw new WalletSignInError();
    __classPrivateFieldGet3(this, _StandardWalletAdapter_instances, "m", _StandardWalletAdapter_connected).call(this, output.account);
    return output;
  } catch (error) {
    this.emit("error", error);
    throw error;
  }
};

// node_modules/.pnpm/@solana+wallet-standard-wallet-adapter-base@1.1.4_@solana+web3.js@1.98.4_bufferutil@4.0_62b29c5930c634375e4ef453aafb1973/node_modules/@solana/wallet-standard-wallet-adapter-base/lib/esm/types.js
var isWalletAdapterCompatibleWallet = isWalletAdapterCompatibleStandardWallet;

// node_modules/.pnpm/@wallet-standard+app@1.1.0/node_modules/@wallet-standard/app/lib/esm/wallets.js
var __classPrivateFieldGet4 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet4 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _AppReadyEvent_detail;
var wallets = void 0;
var registeredWalletsSet = /* @__PURE__ */ new Set();
function addRegisteredWallet(wallet) {
  cachedWalletsArray = void 0;
  registeredWalletsSet.add(wallet);
}
function removeRegisteredWallet(wallet) {
  cachedWalletsArray = void 0;
  registeredWalletsSet.delete(wallet);
}
var listeners = {};
function getWallets() {
  if (wallets)
    return wallets;
  wallets = Object.freeze({ register, get, on });
  if (typeof window === "undefined")
    return wallets;
  const api = Object.freeze({ register });
  try {
    window.addEventListener("wallet-standard:register-wallet", ({ detail: callback }) => callback(api));
  } catch (error) {
    console.error("wallet-standard:register-wallet event listener could not be added\n", error);
  }
  try {
    window.dispatchEvent(new AppReadyEvent(api));
  } catch (error) {
    console.error("wallet-standard:app-ready event could not be dispatched\n", error);
  }
  return wallets;
}
function register(...wallets2) {
  wallets2 = wallets2.filter((wallet) => !registeredWalletsSet.has(wallet));
  if (!wallets2.length)
    return () => {
    };
  wallets2.forEach((wallet) => addRegisteredWallet(wallet));
  listeners["register"]?.forEach((listener) => guard(() => listener(...wallets2)));
  return function unregister() {
    wallets2.forEach((wallet) => removeRegisteredWallet(wallet));
    listeners["unregister"]?.forEach((listener) => guard(() => listener(...wallets2)));
  };
}
var cachedWalletsArray;
function get() {
  if (!cachedWalletsArray) {
    cachedWalletsArray = [...registeredWalletsSet];
  }
  return cachedWalletsArray;
}
function on(event, listener) {
  listeners[event]?.push(listener) || (listeners[event] = [listener]);
  return function off() {
    listeners[event] = listeners[event]?.filter((existingListener) => listener !== existingListener);
  };
}
function guard(callback) {
  try {
    callback();
  } catch (error) {
    console.error(error);
  }
}
var AppReadyEvent = class extends Event {
  get detail() {
    return __classPrivateFieldGet4(this, _AppReadyEvent_detail, "f");
  }
  get type() {
    return "wallet-standard:app-ready";
  }
  constructor(api) {
    super("wallet-standard:app-ready", {
      bubbles: false,
      cancelable: false,
      composed: false
    });
    _AppReadyEvent_detail.set(this, void 0);
    __classPrivateFieldSet4(this, _AppReadyEvent_detail, api, "f");
  }
  /** @deprecated */
  preventDefault() {
    throw new Error("preventDefault cannot be called");
  }
  /** @deprecated */
  stopImmediatePropagation() {
    throw new Error("stopImmediatePropagation cannot be called");
  }
  /** @deprecated */
  stopPropagation() {
    throw new Error("stopPropagation cannot be called");
  }
};
_AppReadyEvent_detail = /* @__PURE__ */ new WeakMap();
function DEPRECATED_getWallets() {
  if (wallets)
    return wallets;
  wallets = getWallets();
  if (typeof window === "undefined")
    return wallets;
  const callbacks = window.navigator.wallets || [];
  if (!Array.isArray(callbacks)) {
    console.error("window.navigator.wallets is not an array");
    return wallets;
  }
  const { register: register2 } = wallets;
  const push = (...callbacks2) => callbacks2.forEach((callback) => guard(() => callback({ register: register2 })));
  try {
    Object.defineProperty(window.navigator, "wallets", {
      value: Object.freeze({ push })
    });
  } catch (error) {
    console.error("window.navigator.wallets could not be set");
    return wallets;
  }
  push(...callbacks);
  return wallets;
}

// node_modules/.pnpm/@solana+wallet-standard-wallet-adapter-base@1.1.4_@solana+web3.js@1.98.4_bufferutil@4.0_62b29c5930c634375e4ef453aafb1973/node_modules/@solana/wallet-standard-wallet-adapter-base/lib/esm/wallet.js
var __classPrivateFieldSet5 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet5 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SolanaWalletAdapterWalletAccount_adapter;
var _SolanaWalletAdapterWallet_instances;
var _SolanaWalletAdapterWallet_listeners;
var _SolanaWalletAdapterWallet_adapter;
var _SolanaWalletAdapterWallet_supportedTransactionVersions;
var _SolanaWalletAdapterWallet_chain;
var _SolanaWalletAdapterWallet_endpoint;
var _SolanaWalletAdapterWallet_account;
var _SolanaWalletAdapterWallet_connected;
var _SolanaWalletAdapterWallet_disconnected;
var _SolanaWalletAdapterWallet_connect;
var _SolanaWalletAdapterWallet_disconnect;
var _SolanaWalletAdapterWallet_on;
var _SolanaWalletAdapterWallet_emit;
var _SolanaWalletAdapterWallet_off;
var _SolanaWalletAdapterWallet_deserializeTransaction;
var _SolanaWalletAdapterWallet_signAndSendTransaction;
var _SolanaWalletAdapterWallet_signTransaction;
var _SolanaWalletAdapterWallet_signMessage;
var _SolanaWalletAdapterWallet_signIn;
var SolanaWalletAdapterWalletAccount = class _SolanaWalletAdapterWalletAccount extends ReadonlyWalletAccount {
  constructor({ adapter, address, publicKey: publicKey2, chains }) {
    const features = [SolanaSignAndSendTransaction];
    if ("signTransaction" in adapter) {
      features.push(SolanaSignTransaction);
    }
    if ("signMessage" in adapter) {
      features.push(SolanaSignMessage);
    }
    if ("signIn" in adapter) {
      features.push(SolanaSignIn);
    }
    super({ address, publicKey: publicKey2, chains, features });
    _SolanaWalletAdapterWalletAccount_adapter.set(this, void 0);
    if (new.target === _SolanaWalletAdapterWalletAccount) {
      Object.freeze(this);
    }
    __classPrivateFieldSet5(this, _SolanaWalletAdapterWalletAccount_adapter, adapter, "f");
  }
};
_SolanaWalletAdapterWalletAccount_adapter = /* @__PURE__ */ new WeakMap();
_SolanaWalletAdapterWallet_listeners = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_adapter = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_supportedTransactionVersions = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_chain = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_endpoint = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_account = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_connect = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_disconnect = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_on = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_signAndSendTransaction = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_signTransaction = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_signMessage = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_signIn = /* @__PURE__ */ new WeakMap(), _SolanaWalletAdapterWallet_instances = /* @__PURE__ */ new WeakSet(), _SolanaWalletAdapterWallet_connected = function _SolanaWalletAdapterWallet_connected2() {
  const publicKey2 = __classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_adapter, "f").publicKey?.toBytes();
  if (publicKey2) {
    const address = __classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_adapter, "f").publicKey.toBase58();
    const account = __classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_account, "f");
    if (!account || account.address !== address || account.chains.includes(__classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_chain, "f")) || !bytesEqual2(account.publicKey, publicKey2)) {
      __classPrivateFieldSet5(this, _SolanaWalletAdapterWallet_account, new SolanaWalletAdapterWalletAccount({
        adapter: __classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_adapter, "f"),
        address,
        publicKey: publicKey2,
        chains: [__classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_chain, "f")]
      }), "f");
      __classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_instances, "m", _SolanaWalletAdapterWallet_emit).call(this, "change", { accounts: this.accounts });
    }
  }
}, _SolanaWalletAdapterWallet_disconnected = function _SolanaWalletAdapterWallet_disconnected2() {
  if (__classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_account, "f")) {
    __classPrivateFieldSet5(this, _SolanaWalletAdapterWallet_account, void 0, "f");
    __classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_instances, "m", _SolanaWalletAdapterWallet_emit).call(this, "change", { accounts: this.accounts });
  }
}, _SolanaWalletAdapterWallet_emit = function _SolanaWalletAdapterWallet_emit2(event, ...args) {
  __classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_listeners, "f")[event]?.forEach((listener) => listener.apply(null, args));
}, _SolanaWalletAdapterWallet_off = function _SolanaWalletAdapterWallet_off2(event, listener) {
  __classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_listeners, "f")[event] = __classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_listeners, "f")[event]?.filter((existingListener) => listener !== existingListener);
}, _SolanaWalletAdapterWallet_deserializeTransaction = function _SolanaWalletAdapterWallet_deserializeTransaction2(serializedTransaction) {
  const transaction = VersionedTransaction.deserialize(serializedTransaction);
  if (!__classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_supportedTransactionVersions, "f").includes(transaction.version))
    throw new Error("unsupported transaction version");
  if (transaction.version === "legacy" && arraysEqual2(__classPrivateFieldGet5(this, _SolanaWalletAdapterWallet_supportedTransactionVersions, "f"), ["legacy"]))
    return Transaction.from(serializedTransaction);
  return transaction;
};

// node_modules/.pnpm/@solana+wallet-standard-wallet-adapter-react@1.1.4_@solana+wallet-adapter-base@0.9.27_@_59d8b84c2705de5989c67c1a36ee2319/node_modules/@solana/wallet-standard-wallet-adapter-react/lib/esm/useStandardWalletAdapters.js
var import_react6 = __toESM(require_react(), 1);
function useStandardWalletAdapters(adapters) {
  const warnings = useConstant(() => /* @__PURE__ */ new Set());
  const { get: get2, on: on2 } = useConstant(() => DEPRECATED_getWallets());
  const [standardAdapters, setStandardAdapters] = (0, import_react6.useState)(() => wrapWalletsWithAdapters(get2()));
  (0, import_react6.useEffect)(() => {
    const listeners2 = [
      on2("register", (...wallets2) => setStandardAdapters((standardAdapters2) => [...standardAdapters2, ...wrapWalletsWithAdapters(wallets2)])),
      on2("unregister", (...wallets2) => setStandardAdapters((standardAdapters2) => standardAdapters2.filter((standardAdapter) => wallets2.some((wallet) => wallet === standardAdapter.wallet))))
    ];
    return () => listeners2.forEach((off) => off());
  }, [on2]);
  const prevStandardAdapters = usePrevious(standardAdapters);
  (0, import_react6.useEffect)(() => {
    if (!prevStandardAdapters)
      return;
    const currentAdapters = new Set(standardAdapters);
    const removedAdapters = new Set(prevStandardAdapters.filter((previousAdapter) => !currentAdapters.has(previousAdapter)));
    removedAdapters.forEach((adapter) => adapter.destroy());
  }, [prevStandardAdapters, standardAdapters]);
  (0, import_react6.useEffect)(() => () => standardAdapters.forEach((adapter) => adapter.destroy()), []);
  return (0, import_react6.useMemo)(() => [
    ...standardAdapters,
    ...adapters.filter(({ name }) => {
      if (standardAdapters.some((standardAdapter) => standardAdapter.name === name)) {
        if (!warnings.has(name)) {
          warnings.add(name);
          console.warn(`${name} was registered as a Standard Wallet. The Wallet Adapter for ${name} can be removed from your app.`);
        }
        return false;
      }
      return true;
    })
  ], [standardAdapters, adapters, warnings]);
}
function useConstant(fn) {
  const ref = (0, import_react6.useRef)(void 0);
  if (ref.current === void 0) {
    ref.current = { value: fn() };
  }
  return ref.current.value;
}
function usePrevious(state) {
  const ref = (0, import_react6.useRef)(void 0);
  (0, import_react6.useEffect)(() => {
    ref.current = state;
  });
  return ref.current;
}
function wrapWalletsWithAdapters(wallets2) {
  return wallets2.filter(isWalletAdapterCompatibleWallet).map((wallet) => new StandardWalletAdapter({ wallet }));
}

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/WalletProvider.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/getEnvironment.js
var Environment;
(function(Environment2) {
  Environment2[Environment2["DESKTOP_WEB"] = 0] = "DESKTOP_WEB";
  Environment2[Environment2["MOBILE_WEB"] = 1] = "MOBILE_WEB";
})(Environment || (Environment = {}));
function isWebView(userAgentString) {
  return /(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(userAgentString);
}
function getEnvironment({ adapters, userAgentString }) {
  if (adapters.some((adapter) => adapter.name !== SolanaMobileWalletAdapterWalletName2 && adapter.readyState === WalletReadyState.Installed)) {
    return Environment.DESKTOP_WEB;
  }
  if (userAgentString && // Step 1: Check whether we're on a platform that supports MWA at all.
  /android/i.test(userAgentString) && // Step 2: Determine that we are *not* running in a WebView.
  !isWebView(userAgentString)) {
    return Environment.MOBILE_WEB;
  } else {
    return Environment.DESKTOP_WEB;
  }
}

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/getInferredClusterFromEndpoint.js
function getInferredClusterFromEndpoint(endpoint) {
  if (!endpoint) {
    return "mainnet-beta";
  }
  if (/devnet/i.test(endpoint)) {
    return "devnet";
  } else if (/testnet/i.test(endpoint)) {
    return "testnet";
  } else {
    return "mainnet-beta";
  }
}

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/WalletProviderBase.js
var import_react7 = __toESM(require_react(), 1);
function WalletProviderBase({ children, wallets: adapters, adapter, isUnloadingRef, onAutoConnectRequest, onConnectError, onError, onSelectWallet }) {
  const isConnectingRef = (0, import_react7.useRef)(false);
  const [connecting, setConnecting] = (0, import_react7.useState)(false);
  const isDisconnectingRef = (0, import_react7.useRef)(false);
  const [disconnecting, setDisconnecting] = (0, import_react7.useState)(false);
  const [publicKey2, setPublicKey] = (0, import_react7.useState)(() => adapter?.publicKey ?? null);
  const [connected, setConnected] = (0, import_react7.useState)(() => adapter?.connected ?? false);
  const onErrorRef = (0, import_react7.useRef)(onError);
  (0, import_react7.useEffect)(() => {
    onErrorRef.current = onError;
    return () => {
      onErrorRef.current = void 0;
    };
  }, [onError]);
  const handleErrorRef = (0, import_react7.useRef)((error, adapter2) => {
    if (!isUnloadingRef.current) {
      if (onErrorRef.current) {
        onErrorRef.current(error, adapter2);
      } else {
        console.error(error, adapter2);
        if (error instanceof WalletNotReadyError && typeof window !== "undefined" && adapter2) {
          window.open(adapter2.url, "_blank");
        }
      }
    }
    return error;
  });
  const [wallets2, setWallets] = (0, import_react7.useState)(() => adapters.map((adapter2) => ({
    adapter: adapter2,
    readyState: adapter2.readyState
  })).filter(({ readyState }) => readyState !== WalletReadyState.Unsupported));
  (0, import_react7.useEffect)(() => {
    setWallets((wallets3) => adapters.map((adapter2, index) => {
      const wallet2 = wallets3[index];
      return wallet2 && wallet2.adapter === adapter2 && wallet2.readyState === adapter2.readyState ? wallet2 : {
        adapter: adapter2,
        readyState: adapter2.readyState
      };
    }).filter(({ readyState }) => readyState !== WalletReadyState.Unsupported));
    function handleReadyStateChange(readyState) {
      setWallets((prevWallets) => {
        const index = prevWallets.findIndex(({ adapter: adapter3 }) => adapter3 === this);
        if (index === -1)
          return prevWallets;
        const { adapter: adapter2 } = prevWallets[index];
        return [
          ...prevWallets.slice(0, index),
          { adapter: adapter2, readyState },
          ...prevWallets.slice(index + 1)
        ].filter(({ readyState: readyState2 }) => readyState2 !== WalletReadyState.Unsupported);
      });
    }
    adapters.forEach((adapter2) => adapter2.on("readyStateChange", handleReadyStateChange, adapter2));
    return () => {
      adapters.forEach((adapter2) => adapter2.off("readyStateChange", handleReadyStateChange, adapter2));
    };
  }, [adapter, adapters]);
  const wallet = (0, import_react7.useMemo)(() => wallets2.find((wallet2) => wallet2.adapter === adapter) ?? null, [adapter, wallets2]);
  (0, import_react7.useEffect)(() => {
    if (!adapter)
      return;
    const handleConnect2 = (publicKey3) => {
      setPublicKey(publicKey3);
      isConnectingRef.current = false;
      setConnecting(false);
      setConnected(true);
      isDisconnectingRef.current = false;
      setDisconnecting(false);
    };
    const handleDisconnect2 = () => {
      if (isUnloadingRef.current)
        return;
      setPublicKey(null);
      isConnectingRef.current = false;
      setConnecting(false);
      setConnected(false);
      isDisconnectingRef.current = false;
      setDisconnecting(false);
    };
    const handleError = (error) => {
      handleErrorRef.current(error, adapter);
    };
    adapter.on("connect", handleConnect2);
    adapter.on("disconnect", handleDisconnect2);
    adapter.on("error", handleError);
    return () => {
      adapter.off("connect", handleConnect2);
      adapter.off("disconnect", handleDisconnect2);
      adapter.off("error", handleError);
      handleDisconnect2();
    };
  }, [adapter, isUnloadingRef]);
  const didAttemptAutoConnectRef = (0, import_react7.useRef)(false);
  (0, import_react7.useEffect)(() => {
    return () => {
      didAttemptAutoConnectRef.current = false;
    };
  }, [adapter]);
  (0, import_react7.useEffect)(() => {
    if (didAttemptAutoConnectRef.current || isConnectingRef.current || connected || !onAutoConnectRequest || !(wallet?.readyState === WalletReadyState.Installed || wallet?.readyState === WalletReadyState.Loadable))
      return;
    isConnectingRef.current = true;
    setConnecting(true);
    didAttemptAutoConnectRef.current = true;
    (async function() {
      try {
        await onAutoConnectRequest();
      } catch {
        onConnectError();
      } finally {
        setConnecting(false);
        isConnectingRef.current = false;
      }
    })();
  }, [connected, onAutoConnectRequest, onConnectError, wallet]);
  const sendTransaction = (0, import_react7.useCallback)(async (transaction, connection, options) => {
    if (!adapter)
      throw handleErrorRef.current(new WalletNotSelectedError());
    if (!connected)
      throw handleErrorRef.current(new WalletNotConnectedError(), adapter);
    return await adapter.sendTransaction(transaction, connection, options);
  }, [adapter, connected]);
  const signTransaction = (0, import_react7.useMemo)(() => adapter && "signTransaction" in adapter ? async (transaction) => {
    if (!connected)
      throw handleErrorRef.current(new WalletNotConnectedError(), adapter);
    return await adapter.signTransaction(transaction);
  } : void 0, [adapter, connected]);
  const signAllTransactions = (0, import_react7.useMemo)(() => adapter && "signAllTransactions" in adapter ? async (transactions) => {
    if (!connected)
      throw handleErrorRef.current(new WalletNotConnectedError(), adapter);
    return await adapter.signAllTransactions(transactions);
  } : void 0, [adapter, connected]);
  const signMessage = (0, import_react7.useMemo)(() => adapter && "signMessage" in adapter ? async (message) => {
    if (!connected)
      throw handleErrorRef.current(new WalletNotConnectedError(), adapter);
    return await adapter.signMessage(message);
  } : void 0, [adapter, connected]);
  const signIn = (0, import_react7.useMemo)(() => adapter && "signIn" in adapter ? async (input) => {
    return await adapter.signIn(input);
  } : void 0, [adapter]);
  const handleConnect = (0, import_react7.useCallback)(async () => {
    if (isConnectingRef.current || isDisconnectingRef.current || wallet?.adapter.connected)
      return;
    if (!wallet)
      throw handleErrorRef.current(new WalletNotSelectedError());
    const { adapter: adapter2, readyState } = wallet;
    if (!(readyState === WalletReadyState.Installed || readyState === WalletReadyState.Loadable))
      throw handleErrorRef.current(new WalletNotReadyError(), adapter2);
    isConnectingRef.current = true;
    setConnecting(true);
    try {
      await adapter2.connect();
    } catch (e2) {
      onConnectError();
      throw e2;
    } finally {
      setConnecting(false);
      isConnectingRef.current = false;
    }
  }, [onConnectError, wallet]);
  const handleDisconnect = (0, import_react7.useCallback)(async () => {
    if (isDisconnectingRef.current)
      return;
    if (!adapter)
      return;
    isDisconnectingRef.current = true;
    setDisconnecting(true);
    try {
      await adapter.disconnect();
    } finally {
      setDisconnecting(false);
      isDisconnectingRef.current = false;
    }
  }, [adapter]);
  return import_react7.default.createElement(WalletContext.Provider, { value: {
    autoConnect: !!onAutoConnectRequest,
    wallets: wallets2,
    wallet,
    publicKey: publicKey2,
    connected,
    connecting,
    disconnecting,
    select: onSelectWallet,
    connect: handleConnect,
    disconnect: handleDisconnect,
    sendTransaction,
    signTransaction,
    signAllTransactions,
    signMessage,
    signIn
  } }, children);
}

// node_modules/.pnpm/@solana+wallet-adapter-react@0.15.39_@solana+web3.js@1.98.4_bufferutil@4.0.9_typescript_86dc082a8599cc8fc91e872c2686e27c/node_modules/@solana/wallet-adapter-react/lib/esm/WalletProvider.js
var _userAgent;
function getUserAgent() {
  if (_userAgent === void 0) {
    _userAgent = globalThis.navigator?.userAgent ?? null;
  }
  return _userAgent;
}
function getIsMobile(adapters) {
  const userAgentString = getUserAgent();
  return getEnvironment({ adapters, userAgentString }) === Environment.MOBILE_WEB;
}
function getUriForAppIdentity() {
  const location = globalThis.location;
  if (!location)
    return;
  return `${location.protocol}//${location.host}`;
}
function WalletProvider({ children, wallets: adapters, autoConnect, localStorageKey = "walletName", onError }) {
  const { connection } = useConnection();
  const adaptersWithStandardAdapters = useStandardWalletAdapters(adapters);
  const mobileWalletAdapter = (0, import_react8.useMemo)(() => {
    if (!getIsMobile(adaptersWithStandardAdapters)) {
      return null;
    }
    const existingMobileWalletAdapter = adaptersWithStandardAdapters.find((adapter2) => adapter2.name === SolanaMobileWalletAdapterWalletName2);
    if (existingMobileWalletAdapter) {
      return existingMobileWalletAdapter;
    }
    return new SolanaMobileWalletAdapter({
      addressSelector: createDefaultAddressSelector(),
      appIdentity: {
        uri: getUriForAppIdentity()
      },
      authorizationResultCache: createDefaultAuthorizationResultCache(),
      cluster: getInferredClusterFromEndpoint(connection?.rpcEndpoint),
      onWalletNotFound: createDefaultWalletNotFoundHandler()
    });
  }, [adaptersWithStandardAdapters, connection?.rpcEndpoint]);
  const adaptersWithMobileWalletAdapter = (0, import_react8.useMemo)(() => {
    if (mobileWalletAdapter == null || adaptersWithStandardAdapters.indexOf(mobileWalletAdapter) !== -1) {
      return adaptersWithStandardAdapters;
    }
    return [mobileWalletAdapter, ...adaptersWithStandardAdapters];
  }, [adaptersWithStandardAdapters, mobileWalletAdapter]);
  const [walletName, setWalletName] = useLocalStorage(localStorageKey, null);
  const adapter = (0, import_react8.useMemo)(() => adaptersWithMobileWalletAdapter.find((a) => a.name === walletName) ?? null, [adaptersWithMobileWalletAdapter, walletName]);
  const changeWallet = (0, import_react8.useCallback)((nextWalletName) => {
    if (walletName === nextWalletName)
      return;
    if (adapter && // Selecting a wallet other than the mobile wallet adapter is not
    // sufficient reason to call `disconnect` on the mobile wallet adapter.
    // Calling `disconnect` on the mobile wallet adapter causes the entire
    // authorization store to be wiped.
    adapter.name !== SolanaMobileWalletAdapterWalletName2) {
      adapter.disconnect();
    }
    setWalletName(nextWalletName);
  }, [adapter, setWalletName, walletName]);
  (0, import_react8.useEffect)(() => {
    if (!adapter)
      return;
    function handleDisconnect() {
      if (isUnloadingRef.current)
        return;
      setWalletName(null);
    }
    adapter.on("disconnect", handleDisconnect);
    return () => {
      adapter.off("disconnect", handleDisconnect);
    };
  }, [adapter, adaptersWithStandardAdapters, setWalletName, walletName]);
  const hasUserSelectedAWallet = (0, import_react8.useRef)(false);
  const handleAutoConnectRequest = (0, import_react8.useMemo)(() => {
    if (!autoConnect || !adapter)
      return;
    return async () => {
      if (autoConnect === true || await autoConnect(adapter)) {
        if (hasUserSelectedAWallet.current) {
          await adapter.connect();
        } else {
          await adapter.autoConnect();
        }
      }
    };
  }, [autoConnect, adapter]);
  const isUnloadingRef = (0, import_react8.useRef)(false);
  (0, import_react8.useEffect)(() => {
    if (walletName === SolanaMobileWalletAdapterWalletName2 && getIsMobile(adaptersWithStandardAdapters)) {
      isUnloadingRef.current = false;
      return;
    }
    function handleBeforeUnload() {
      isUnloadingRef.current = true;
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [adaptersWithStandardAdapters, walletName]);
  const handleConnectError = (0, import_react8.useCallback)(() => {
    if (adapter) {
      changeWallet(null);
    }
  }, [adapter, changeWallet]);
  const selectWallet = (0, import_react8.useCallback)((walletName2) => {
    hasUserSelectedAWallet.current = true;
    changeWallet(walletName2);
  }, [changeWallet]);
  return import_react8.default.createElement(WalletProviderBase, { wallets: adaptersWithMobileWalletAdapter, adapter, isUnloadingRef, onAutoConnectRequest: handleAutoConnectRequest, onConnectError: handleConnectError, onError, onSelectWallet: selectWallet }, children);
}

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/providers/externalHooks.js
var externalHooks = { useWallet };

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/farcaster/farcasterIcon.js
var icon2 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEzNDFfMzQiIHN0eWxlPSJtYXNrLXR5cGU6bHVtaW5hbmNlIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI0IiB5PSIwIiB3aWR0aD0iMTciIGhlaWdodD0iMjQiPgo8cGF0aCBkPSJNMjAuNSAwSDRWMjRIMjAuNVYwWiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzEzNDFfMzQpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy44MTMgMS44ODcwOEMxNC42ODUzIDEuODg3MDggMTUuNTAzNSAyLjAwNDAyIDE2LjI2MTIgMi4yMjA4OUMxNS41MTk1IDAuNDkyMjU0IDEzLjk3OTUgMCAxMi4yNjU2IDBDMTAuNTQ4MyAwIDkuMDA1NjUgMC40OTQxODggOC4yNjU2MiAyLjIzMTA3QzkuMDE3NjUgMi4wMDY1NyA5LjgzMjM2IDEuODg3MDggMTAuNzAxNyAxLjg4NzA4SDEzLjgxM1pNMTAuNTAyMiAzLjYyMjU2QzYuMzYwMDMgMy42MjI1NiA0IDYuODgxMTQgNCAxMC45MDA4VjE1LjAzQzQgMTUuNDMyIDQuMzM1NzkgMTUuNzUgNC43NSAxNS43NUgxOS43NUMyMC4xNjQyIDE1Ljc1IDIwLjUgMTUuNDMyIDIwLjUgMTUuMDNWMTAuOTAwOEMyMC41IDYuODgxMTQgMTcuNzU1NiAzLjYyMjU2IDEzLjYxMzUgMy42MjI1NkgxMC41MDIyWk0xMi4yNDQxIDEwLjkzNjVDMTMuNjkzOSAxMC45MzY1IDE0Ljg2OTIgOS43NjEyMyAxNC44NjkyIDguMzExNTNDMTQuODY5MiA2Ljg2MTc4IDEzLjY5MzkgNS42ODY1MyAxMi4yNDQxIDUuNjg2NTNDMTAuNzk0NCA1LjY4NjUzIDkuNjE5MTQgNi44NjE3OCA5LjYxOTE0IDguMzExNTNDOS42MTkxNCA5Ljc2MTIzIDEwLjc5NDQgMTAuOTM2NSAxMi4yNDQxIDEwLjkzNjVaTTQgMTguMTc3MUM0IDE3Ljc3NTEgNC4zMzU3OSAxNy40NDkyIDQuNzUgMTcuNDQ5MkgxOS43NUMyMC4xNjQyIDE3LjQ0OTIgMjAuNSAxNy43NzUxIDIwLjUgMTguMTc3MVYyMi41NDRDMjAuNSAyMy4zNDc5IDE5LjgyODQgMjMuOTk5NyAxOSAyMy45OTk3SDUuNUM0LjY3MTU3IDIzLjk5OTcgNCAyMy4zNDc5IDQgMjIuNTQ0VjE4LjE3NzFaIiBmaWxsPSIjRTMzRTNGIi8+CjwvZz4KPC9zdmc+Cg==";

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/farcaster/farcaster.js
var farcasterWallet = () => {
  return {
    id: "farcaster",
    internalId: "FARCASTER",
    name: "Farcaster",
    iconUrl: icon2,
    isExtension: true,
    hasIosSafariExtension: false,
    downloadUrl: "https://farcaster.xyz"
  };
};

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/phantom/phantomIcon.js
var icon3 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjU5Nl8xMzg1ODApIj4KPHJlY3QgeT0iLTAuMDAwOTc2NTYyIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiBmaWxsPSIjQUI5RkYyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTIyLjIxOCA3NjQuODEzQzQ3NS4xMDEgODM3LjAxMSAzOTYuMTQ3IDkyOC4zNzcgMjkxLjA4OSA5MjguMzc3QzI0MS40MjUgOTI4LjM3NyAxOTMuNjcxIDkwNy45MzIgMTkzLjY3MSA4MTkuMTIxQzE5My42NzEgNTkyLjk0MiA1MDIuNDc5IDI0Mi44MTIgNzg5LjAwMyAyNDIuODEyQzk1Mi4wMDMgMjQyLjgxMiAxMDE2Ljk1IDM1NS45MDEgMTAxNi45NSA0ODQuMzI1QzEwMTYuOTUgNjQ5LjE2NyA5MDkuOTc5IDgzNy42NSA4MDMuNjQ3IDgzNy42NUM3NjkuOTAxIDgzNy42NSA3NTMuMzQ2IDgxOS4xMjEgNzUzLjM0NiA3ODkuNzMxQzc1My4zNDYgNzgyLjA2NCA3NTQuNjIgNzczLjc1OCA3NTcuMTY3IDc2NC44MTNDNzIwLjg3NCA4MjYuNzg4IDY1MC44MzUgODg0LjI5MiA1ODUuMjUzIDg4NC4yOTJDNTM3LjQ5OSA4ODQuMjkyIDUxMy4zMDQgODU0LjI2MiA1MTMuMzA0IDgxMi4wOTNDNTEzLjMwNCA3OTYuNzU5IDUxNi40ODcgNzgwLjc4NiA1MjIuMjE4IDc2NC44MTNaTTc2OS4wMzUgNDc5Ljg3MUM3NjkuMDM1IDUxNy4yOTMgNzQ2Ljk1NiA1MzYuMDAzIDcyMi4yNTggNTM2LjAwM0M2OTcuMTg1IDUzNi4wMDMgNjc1LjQ4MSA1MTcuMjkzIDY3NS40ODEgNDc5Ljg3MUM2NzUuNDgxIDQ0Mi40NDkgNjk3LjE4NSA0MjMuNzM4IDcyMi4yNTggNDIzLjczOEM3NDYuOTU2IDQyMy43MzggNzY5LjAzNSA0NDIuNDQ5IDc2OS4wMzUgNDc5Ljg3MVpNOTA5LjM2NyA0NzkuODcyQzkwOS4zNjcgNTE3LjI5NCA4ODcuMjg4IDUzNi4wMDUgODYyLjU5IDUzNi4wMDVDODM3LjUxNyA1MzYuMDA1IDgxNS44MTMgNTE3LjI5NCA4MTUuODEzIDQ3OS44NzJDODE1LjgxMyA0NDIuNDUgODM3LjUxNyA0MjMuNzQgODYyLjU5IDQyMy43NEM4ODcuMjg4IDQyMy43NCA5MDkuMzY3IDQ0Mi40NSA5MDkuMzY3IDQ3OS44NzJaIiBmaWxsPSIjRkZGREY4Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjU5Nl8xMzg1ODAiPgo8cmVjdCB5PSItMC4wMDA5NzY1NjIiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIHJ4PSI2MDAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/phantom/phantom.js
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var phantomWallet = () => {
  return {
    id: "phantom",
    internalId: "PHANTOM",
    name: "Phantom",
    iconUrl: icon3,
    isExtension: true,
    isMobile: true,
    hasIosSafariExtension: false,
    getQrUri: () => __async(void 0, null, function* () {
      if (typeof window !== "undefined" && isIosAndRedirectable()) {
        const url = encodeURIComponent(window.location.href);
        const ref = encodeURIComponent(window.location.origin);
        return `https://phantom.app/ul/browse/${url}?ref=${ref}`;
      }
      return "";
    }),
    downloadUrl: "https://phantom.app/download"
  };
};

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/glow/glowIcon.js
var icon4 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTAzN18xMjEwKSI+CiAgICA8cGF0aCBkPSJNMjAuNDE2MiAyMC41NTQxQzE4LjE3MzggMjIuNzY1OCAxNS4xNDk2IDI0LjAwNCAxMiAyNEM4Ljg1NzU3IDI0LjAwNDcgNS44Mzk2NSAyMi43NzE5IDMuNTk5MjQgMjAuNTY4NEM4LjUxMzI5IDE2LjY5NzkgMTUuNDk2NiAxNi42OTM0IDIwLjQxNjIgMjAuNTU0MVpNMjAuNTU0MSAyMC40MTYyQzIyLjc2NTggMTguMTczOCAyNC4wMDQgMTUuMTQ5NiAyNCAxMkMyNCA4LjcyOTQ4IDIyLjY5MTggNS43NjU2MSAyMC41NzA2IDMuNjAwMzRDMTYuNjk3OSA4LjUyODczIDE2LjY5MzQgMTUuNDk3NyAyMC41NTQxIDIwLjQxNjJaTTIwLjQzMzkgMy40NjM1NkMxNS41MDc3IDcuMzQ0MDYgOC41MDIyNiA3LjMzODU1IDMuNTgwNDggMy40NDkyMkM1LjgyMzA2IDEuMjM1MjkgOC44NDg3MSAtMC4wMDQyMjQ3NCAxMiAxLjA4MTk0ZS0wNUMxNS4yODcxIDEuMDgxOTRlLTA1IDE4LjI2NjQgMS4zMjI1NiAyMC40MzM5IDMuNDYzNTZaTTMuNDQ5MjIgMy41ODA0OEMxLjIzNTI5IDUuODIzMDYgLTAuMDA0MjI0NzQgOC44NDg3MSAxLjA4MTk0ZS0wNSAxMkMxLjA4MTk0ZS0wNSAxNS4yODgyIDEuMzIyNTYgMTguMjY2NCAzLjQ2MzU2IDIwLjQzMzlDNy4zNDQwNiAxNS41MDc3IDcuMzM4NTUgOC41MDIyNiAzLjQ0OTIyIDMuNTgwNDhaIiBmaWxsPSIjQ0M2MkQ1Ii8+CiAgPC9nPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwMF8xMDM3XzEyMTAiPgogICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+";

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/glow/glow.js
var glowWallet = () => {
  return {
    id: "glow",
    internalId: "GLOW",
    name: "Glow",
    iconUrl: icon4,
    isExtension: true,
    isMobile: true,
    hasIosSafariExtension: isIosAndRedirectable(),
    downloadUrl: "https://glow.app"
  };
};

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/backpack/backpackIcon.js
var icon5 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEzNDFfMzQiIHN0eWxlPSJtYXNrLXR5cGU6bHVtaW5hbmNlIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI0IiB5PSIwIiB3aWR0aD0iMTciIGhlaWdodD0iMjQiPgo8cGF0aCBkPSJNMjAuNSAwSDRWMjRIMjAuNVYwWiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzEzNDFfMzQpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy44MTMgMS44ODcwOEMxNC42ODUzIDEuODg3MDggMTUuNTAzNSAyLjAwNDAyIDE2LjI2MTIgMi4yMjA4OUMxNS41MTk1IDAuNDkyMjU0IDEzLjk3OTUgMCAxMi4yNjU2IDBDMTAuNTQ4MyAwIDkuMDA1NjUgMC40OTQxODggOC4yNjU2MiAyLjIzMTA3QzkuMDE3NjUgMi4wMDY1NyA5LjgzMjM2IDEuODg3MDggMTAuNzAxNyAxLjg4NzA4SDEzLjgxM1pNMTAuNTAyMiAzLjYyMjU2QzYuMzYwMDMgMy42MjI1NiA0IDYuODgxMTQgNCAxMC45MDA4VjE1LjAzQzQgMTUuNDMyIDQuMzM1NzkgMTUuNzUgNC43NSAxNS43NUgxOS43NUMyMC4xNjQyIDE1Ljc1IDIwLjUgMTUuNDMyIDIwLjUgMTUuMDNWMTAuOTAwOEMyMC41IDYuODgxMTQgMTcuNzU1NiAzLjYyMjU2IDEzLjYxMzUgMy42MjI1NkgxMC41MDIyWk0xMi4yNDQxIDEwLjkzNjVDMTMuNjkzOSAxMC45MzY1IDE0Ljg2OTIgOS43NjEyMyAxNC44NjkyIDguMzExNTNDMTQuODY5MiA2Ljg2MTc4IDEzLjY5MzkgNS42ODY1MyAxMi4yNDQxIDUuNjg2NTNDMTAuNzk0NCA1LjY4NjUzIDkuNjE5MTQgNi44NjE3OCA5LjYxOTE0IDguMzExNTNDOS42MTkxNCA5Ljc2MTIzIDEwLjc5NDQgMTAuOTM2NSAxMi4yNDQxIDEwLjkzNjVaTTQgMTguMTc3MUM0IDE3Ljc3NTEgNC4zMzU3OSAxNy40NDkyIDQuNzUgMTcuNDQ5MkgxOS43NUMyMC4xNjQyIDE3LjQ0OTIgMjAuNSAxNy43NzUxIDIwLjUgMTguMTc3MVYyMi41NDRDMjAuNSAyMy4zNDc5IDE5LjgyODQgMjMuOTk5NyAxOSAyMy45OTk3SDUuNUM0LjY3MTU3IDIzLjk5OTcgNCAyMy4zNDc5IDQgMjIuNTQ0VjE4LjE3NzFaIiBmaWxsPSIjRTMzRTNGIi8+CjwvZz4KPC9zdmc+Cg==";

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/backpack/backpack.js
var __async2 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var backpackWallet = () => {
  return {
    id: "backpack",
    internalId: "BACKPACK",
    name: "Backpack",
    iconUrl: icon5,
    isExtension: true,
    isMobile: true,
    hasIosSafariExtension: false,
    getQrUri: () => __async2(void 0, null, function* () {
      if (typeof window !== "undefined" && isIosAndRedirectable()) {
        const url = encodeURIComponent(window.location.href);
        const ref = encodeURIComponent(window.location.origin);
        return `https://backpack.app/ul/v1/browse/${url}?ref=${ref}`;
      }
      return "";
    }),
    downloadUrl: "https://backpack.app/download"
  };
};

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/solflare/solflareIcon.js
var icon6 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE5NDc3XzMyMTMpIj4KPHBhdGggZD0iTTUuMTkxNDEgMC41SDE4LjgwODZDMjEuMzk5NSAwLjUgMjMuNSAyLjYwMDUgMjMuNSA1LjE5MTQxVjE4LjgwODZDMjMuNSAyMS4zOTk1IDIxLjM5OTUgMjMuNSAxOC44MDg2IDIzLjVINS4xOTE0MUMyLjYwMDUgMjMuNSAwLjUgMjEuMzk5NSAwLjUgMTguODA4NlY1LjE5MTQxQzAuNSAyLjYwMDUgMi42MDA1IDAuNSA1LjE5MTQxIDAuNVoiIGZpbGw9IiNGRkVGNDYiIHN0cm9rZT0iI0VFREEwRiIvPgo8cGF0aCBkPSJNMTEuNTU1OSAxMi42MzU1TDEyLjY1MzkgMTEuNTcwMUwxNC43MDEgMTIuMjQzQzE2LjA0MDkgMTIuNjkxNiAxNi43MTA5IDEzLjUxNCAxNi43MTA5IDE0LjY3MjlDMTYuNzEwOSAxNS41NTE0IDE2LjM3NTkgMTYuMTMwOSAxNS43MDYgMTYuODc4NUwxNS41MDEzIDE3LjEwMjhMMTUuNTc1NyAxNi41Nzk0QzE1Ljg3MzQgMTQuNjcyOSAxNS4zMTUyIDEzLjg1MDUgMTMuNDcyNyAxMy4yNTIzTDExLjU1NTkgMTIuNjM1NVpNOC44MDE0NyA2LjExMjE2TDE0LjM4NDYgNy45ODEzMUwxMy4xNzQ5IDkuMTQwMkwxMC4yNzE3IDguMTY4MjNDOS4yNjY3NyA3LjgzMTc4IDguOTMxNzcgNy4yODk3MiA4LjgwMTQ3IDYuMTQ5NTRWNi4xMTIxNlpNOC40NjY0NyAxNS42MDc1TDkuNzMyIDE0LjM5MjVMMTIuMTE0MiAxNS4xNzc2QzEzLjM2MSAxNS41ODg4IDEzLjc4OSAxNi4xMzA5IDEzLjY1ODggMTcuNDk1M0w4LjQ2NjQ3IDE1LjYwNzVaTTYuODY2IDEwLjE4NjlDNi44NjYgOS44MzE4MiA3LjA1MjEgOS40OTUzNSA3LjM2ODQ4IDkuMjE0OTNDNy43MDM0NyA5LjcwMDk1IDguMjgwMzkgMTAuMTMwOCA5LjE5MjI5IDEwLjQyOTlMMTEuMTY1IDExLjA4NDFMMTAuMDY3IDEyLjE0OTZMOC4xMzE1MSAxMS41MTRDNy4yMzgyMSAxMS4yMTUgNi44NjYgMTAuNzY2MyA2Ljg2NiAxMC4xODY5Wk0xMi43MDk3IDIwQzE2LjgwMzkgMTcuMjcxMSAxOSAxNS40MjA2IDE5IDEzLjE0MDJDMTkgMTEuNjI2MiAxOC4xMDY3IDEwLjc4NSAxNi4xMzQgMTAuMTMwOEwxNC42NDUyIDkuNjI2MTRMMTguNzIwOSA1LjcwMDk0TDE3LjkwMiA0LjgyMjQ0TDE2LjY5MjMgNS44ODc4NUwxMC45Nzg5IDRDOS4yMTA4OSA0LjU3OTQ0IDYuOTc3NjcgNi4yODAzNyA2Ljk3NzY3IDcuOTgxM0M2Ljk3NzY3IDguMTY4MjIgNi45OTYyOCA4LjM1NTE0IDcuMDUyMTEgOC41NjA3NkM1LjU4MTg4IDkuNDAxODUgNC45ODYzNSAxMC4xODY5IDQuOTg2MzUgMTEuMTU4OEM0Ljk4NjM1IDEyLjA3NDcgNS40NzAyMiAxMi45OTA2IDcuMDE0ODkgMTMuNDk1M0w4LjI0MzE3IDEzLjkwNjVMNCAxOEw0LjgxODg2IDE4Ljg3ODVMNi4xNDAyIDE3LjY2MzZMMTIuNzA5NyAyMFoiIGZpbGw9IiMwMjA1MEEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xOTQ3N18zMjEzIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==";

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/solflare/solflare.js
var __async3 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var solflareWallet = () => {
  return {
    id: "solflare",
    internalId: "SOLFLARE",
    name: "Solflare",
    iconUrl: icon6,
    isExtension: true,
    isMobile: true,
    hasIosSafariExtension: false,
    getQrUri: () => __async3(void 0, null, function* () {
      if (typeof window !== "undefined" && isIosAndRedirectable()) {
        const url = encodeURIComponent(window.location.href);
        const ref = encodeURIComponent(window.location.origin);
        return `https://solflare.com/ul/v1/browse/${url}?ref=${ref}`;
      }
      return "";
    }),
    downloadUrl: "https://www.solflare.com/download/"
  };
};

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/metaMask/metaMaskIcon.js
var icon7 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE5MDMxXzE3MTgwOSkiPgo8cGF0aCBkPSJNMjIuNDI4MSAyMi4zNDUzTDE3LjI1ODUgMjAuODA2MUwxMy4zNiAyMy4xMzY2TDEwLjYzOTggMjMuMTM1NEw2LjczODk5IDIwLjgwNjFMMS41NzE3IDIyLjM0NTNMMCAxNy4wMzkxTDEuNTcxODcgMTEuMTVMMCA2LjE3MTAyTDEuNTcxODcgMEw5LjY0NjA4IDQuODIzOTdIMTQuMzUzOEwyMi40MjgxIDBMMjQgNi4xNzEwMkwyMi40MjgxIDExLjE1TDI0IDE3LjAzOTFMMjIuNDI4MSAyMi4zNDUzWiIgZmlsbD0iI0ZGNUMxNiIvPgo8cGF0aCBkPSJNMS41NzI4OCAwTDkuNjQ3MjUgNC44MjczNUw5LjMyNjI1IDguMTQwM0wxLjU3Mjg4IDBaTTYuNzQwMzMgMTcuMDQxM0wxMC4yOTMgMTkuNzQ3NUw2Ljc0MDMzIDIwLjgwNTlWMTcuMDQxM1pNMTAuMDA5IDEyLjU2N0w5LjMyNjI1IDguMTQyNjdMNC45NTU2NCAxMS4xNTE0TDQuOTUzMjcgMTEuMTUwMlYxMS4xNTI0TDQuOTY2NzkgMTQuMjQ5M0w2LjczOTE0IDEyLjU2NzJMMTAuMDA5IDEyLjU2N1pNMjIuNDI4MSAwTDE0LjM1MzcgNC44MjczNUwxNC42NzM3IDguMTQwM0wyMi40MjgxIDBaTTE3LjI2MDggMTcuMDQxM0wxMy43MDggMTkuNzQ3NUwxNy4yNjA4IDIwLjgwNTlWMTcuMDQxM1pNMTkuMDQ2NyAxMS4xNTIyVjExLjE1TDE5LjA0NTcgMTEuMTUxMkwxNC42NzQ5IDguMTQyNjdMMTMuOTkyMiAxMi41NjdIMTcuMjYwN0wxOS4wMzQyIDE0LjI0ODlMMTkuMDQ2NyAxMS4xNTIyWiIgZmlsbD0iI0ZGNUMxNiIvPgo8cGF0aCBkPSJNNi43MzkxNiAyMC44MDU5TDEuNTcxODcgMjIuMzQ1MUwwIDE3LjA0MTNINi43MzkxNlYyMC44MDU5Wk0xMC4wMDc4IDEyLjU2NThMMTAuOTk0OCAxOC45NjIyTDkuNjI2ODEgMTUuNDA1N0w0Ljk2NDYxIDE0LjI0ODlMNi43Mzc5NyAxMi41NjZMMTAuMDA3OCAxMi41NjU4Wk0xNy4yNjA3IDIwLjgwNTlMMjIuNDI4MSAyMi4zNDUxTDI0IDE3LjA0MTFIMTcuMjYwN0MxNy4yNjA3IDE3LjA0MTMgMTcuMjYwNyAyMC44MDU5IDE3LjI2MDcgMjAuODA1OVpNMTMuOTkyMiAxMi41NjU4TDEzLjAwNTIgMTguOTYyMkwxNC4zNzMgMTUuNDA1N0wxOS4wMzU2IDE0LjI0ODlMMTcuMjYxIDEyLjU2NkwxMy45OTIyIDEyLjU2NThaIiBmaWxsPSIjRTM0ODA3Ii8+CjxwYXRoIGQ9Ik0wIDE3LjAzOTFMMS41NzE4NyAxMS4xNUg0Ljk1MjFMNC45NjQ0NCAxNC4yNDc5TDkuNjI3MTUgMTUuNDA0N0wxMC45OTUgMTguOTYxTDEwLjI5MTggMTkuNzQ0Mkw2LjczOTE2IDE3LjAzNzlIMFYxNy4wMzkxWk0yNCAxNy4wMzkxTDIyLjQyODEgMTEuMTVIMTkuMDQ3N0wxOS4wMzU0IDE0LjI0NzlMMTQuMzczIDE1LjQwNDdMMTMuMDA1IDE4Ljk2MUwxMy43MDggMTkuNzQ0MkwxNy4yNjA4IDE3LjAzNzlIMjRWMTcuMDM5MVpNMTQuMzUzOCA0LjgyMzk3SDkuNjQ2MDhMOS4zMjY0MyA4LjEzNjkyTDEwLjk5NTIgMTguOTU3NUgxMy4wMDUyTDE0LjY3NDkgOC4xMzY5MkwxNC4zNTM4IDQuODIzOTdaIiBmaWxsPSIjRkY4RDVEIi8+CjxwYXRoIGQ9Ik0xLjU3MTg3IDBMMCA2LjE3MTAyTDEuNTcxODcgMTEuMTVINC45NTIxTDkuMzI1MDggOC4xNDA0N0wxLjU3MTg3IDBaTTkuMDMwOTUgMTMuODUwNUg3LjQ5OTY1TDYuNjY1OTYgMTQuNjY3OEw5LjYyODE2IDE1LjQwMjFMOS4wMzA5NSAxMy44NDkzVjEzLjg1MDVaTTIyLjQyODEgMEwyNCA2LjE3MTAyTDIyLjQyODEgMTEuMTVIMTkuMDQ3N0wxNC42NzQ5IDguMTQwNDdMMjIuNDI4MSAwWk0xNC45NzEyIDEzLjg1MDVIMTYuNTA0N0wxNy4zMzg0IDE0LjY2ODhMMTQuMzcyOSAxNS40MDQ3TDE0Ljk3MTIgMTMuODQ5M1YxMy44NTA1Wk0xMy4zNTg4IDIxLjAyNTZMMTMuNzA4MiAxOS43NDY1TDEzLjAwNSAxOC45NjM0SDEwLjk5MzVMMTAuMjkwNCAxOS43NDY1TDEwLjYzOTcgMjEuMDI1NiIgZmlsbD0iIzY2MTgwMCIvPgo8cGF0aCBkPSJNMTMuMzU4OSAyMS4wMjU1VjIzLjEzNzZIMTAuNjQwMVYyMS4wMjU1SDEzLjM1ODlaIiBmaWxsPSIjQzBDNENEIi8+CjxwYXRoIGQ9Ik02Ljc0MDM2IDIwLjgwMzdMMTAuNjQyMiAyMy4xMzY0VjIxLjAyNDNMMTAuMjkyOCAxOS43NDUzTDYuNzQwMzYgMjAuODAzN1pNMTcuMjYwOSAyMC44MDM3TDEzLjM1ODggMjMuMTM2NFYyMS4wMjQzTDEzLjcwODIgMTkuNzQ1M0wxNy4yNjA5IDIwLjgwMzdaIiBmaWxsPSIjRTdFQkY2Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTkwMzFfMTcxODA5Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/metaMask/metaMask.js
var metaMaskWallet = () => {
  return {
    id: "metaMask",
    internalId: "METAMASK",
    name: "MetaMask",
    iconUrl: icon7,
    isExtension: true,
    isMobile: true,
    hasIosSafariExtension: false,
    // Metamask deep linking doesn't seem to work as expected currently.
    // getQrUri: async () => {
    //   if (typeof window !== 'undefined' && isIosAndRedirectable()) {
    //     const url = encodeURIComponent(window.location.href);
    //     return `https://link.metamask.io/dapp/${url}`;
    //   }
    //   return '';
    // },
    downloadUrl: "https://metamask.io/download/"
  };
};

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/wallets/connectors/index.js
var allWallets = [phantomWallet, glowWallet, backpackWallet, solflareWallet, metaMaskWallet];

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/providers/SolanaExternalWalletContext.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async4 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var SolanaExternalWalletContext = (0, import_react9.createContext)(__spreadProps(__spreadValues({}, defaultSolanaExternalWallet), {
  farcasterStatus: void 0
}));
function SolanaExternalWalletProvider({
  children,
  wallets: walletFns,
  onSwitchWallet,
  para,
  walletsWithFullAuth,
  includeWalletVerification,
  connectionOnly,
  chain
}) {
  const {
    wallets: adapters,
    select: selectWallet,
    disconnect,
    disconnecting,
    publicKey: solanaAddress,
    wallet,
    connecting,
    signMessage: solanaSignMessage
  } = useWallet();
  const disconnectTypeRef = (0, import_react9.useRef)();
  const solanaSignMessageRef = (0, import_react9.useRef)(solanaSignMessage);
  const solanaAddressRef = (0, import_react9.useRef)(solanaAddress);
  const verificationMessage = (0, import_react9.useRef)();
  const [isFarcasterSetup, setIsFarcasterSetup] = (0, import_react9.useState)(false);
  const reset = () => __async4(this, null, function* () {
    yield disconnect();
    yield para.logout();
  });
  const login = (_0) => __async4(this, [_0], function* ({
    address,
    providerId,
    providerName
  }) {
    var _a, _b;
    try {
      return yield para.loginExternalWallet({
        externalWallet: {
          partnerId: para.partnerId,
          address,
          type: "SOLANA",
          provider: providerName,
          providerId,
          withFullParaAuth: walletsWithFullAuth === "ALL" || (walletsWithFullAuth == null ? void 0 : walletsWithFullAuth.includes((_b = (_a = getWallet(providerName != null ? providerName : "")) == null ? void 0 : _a.id.toUpperCase()) != null ? _b : "")),
          withVerification: includeWalletVerification,
          isConnectionOnly: connectionOnly
        },
        uri: window == null ? void 0 : window.location.origin,
        chainId: chain
      });
    } catch (e2) {
      yield reset();
      throw "Error logging you in. Please try again.";
    }
  });
  const switchWallet = (address) => __async4(this, null, function* () {
    var _a, _b, _c, _d;
    let error;
    if (!address) {
      yield para.logout();
    } else {
      if (para.isExternalWalletAuth || para.isExternalWalletWithVerification) {
        yield reset();
      } else {
        try {
          yield login({
            address,
            providerId: (_c = getWallet((_b = (_a = wallet == null ? void 0 : wallet.adapter) == null ? void 0 : _a.name) != null ? _b : "")) == null ? void 0 : _c.id,
            providerName: (_d = wallet == null ? void 0 : wallet.adapter) == null ? void 0 : _d.name
          });
        } catch (err) {
          error = err;
        }
      }
    }
    onSwitchWallet({ address, error });
  });
  (0, import_react9.useEffect)(() => {
    var _a;
    const storedExternalWallet = para.externalWallets[(_a = solanaAddress == null ? void 0 : solanaAddress.toString()) != null ? _a : ""];
    if (!!solanaAddress && !storedExternalWallet && !disconnectTypeRef.current) {
      reset();
    }
  }, []);
  (0, import_react9.useEffect)(() => {
    solanaSignMessageRef.current = solanaSignMessage;
  }, [solanaSignMessage]);
  (0, import_react9.useEffect)(() => {
    solanaAddressRef.current = solanaAddress;
  }, [solanaAddress]);
  (0, import_react9.useEffect)(() => {
    const storedExternalWallet = Object.values(para.externalWallets || {})[0];
    if (!connecting && (!wallet || (wallet == null ? void 0 : wallet.adapter.connected)) && (storedExternalWallet == null ? void 0 : storedExternalWallet.type) === "SOLANA" && (storedExternalWallet == null ? void 0 : storedExternalWallet.address) !== (solanaAddress == null ? void 0 : solanaAddress.toString()) && !disconnectTypeRef.current) {
      switchWallet(solanaAddress == null ? void 0 : solanaAddress.toString());
    }
  }, [solanaAddress, connecting, wallet]);
  const signMessage = (_0) => __async4(this, [_0], function* ({ message }) {
    var _a, _b, _c, _d;
    try {
      let solanaAddressNow = (_a = solanaAddressRef.current) != null ? _a : solanaAddress, solanaSignMessageNow = (_b = solanaSignMessageRef.current) != null ? _b : solanaSignMessage;
      while (!solanaAddressNow || !solanaSignMessageNow) {
        yield new Promise((resolve) => setTimeout(resolve, 100));
        solanaAddressNow = (_c = solanaAddressRef.current) != null ? _c : solanaAddress;
        solanaSignMessageNow = (_d = solanaSignMessageRef.current) != null ? _d : solanaSignMessage;
      }
      const encodedMessage = new TextEncoder().encode(message);
      const signature2 = yield solanaSignMessageNow(encodedMessage);
      solanaAddressRef.current = void 0;
      solanaSignMessageRef.current = void 0;
      return {
        address: solanaAddressNow.toString(),
        signature: esm_default.encode(signature2)
      };
    } catch (e2) {
      console.error(e2);
      if (e2.message.includes("User rejected the request")) {
        return { error: "Signature request rejected" };
      }
      console.error("Solana signature error:", e2.message);
      return { error: "An unknown error occurred" };
    }
  });
  const signVerificationMessage = () => __async4(this, null, function* () {
    const signature2 = yield signMessage({ message: verificationMessage.current });
    return signature2;
  });
  const connectBase = (adapter, _switchWallet = false) => __async4(this, null, function* () {
    if (!adapter) {
      throw new Error("Adapter not found.");
    }
    const wallet2 = getWallet(adapter.name);
    if (wallet2 == null ? void 0 : wallet2.getQrUri) {
      const qrUri = yield wallet2.getQrUri();
      window.dispatchEvent(new CustomEvent("PARA_WALLETCONNECT_URI_READY", { detail: qrUri }));
    }
    selectWallet(adapter.name);
    yield new Promise((resolve) => setTimeout(resolve, 100));
    let address;
    let error;
    try {
      yield adapter.connect();
      if (adapter.publicKey) {
        address = adapter.publicKey.toString();
      } else {
        yield new Promise((resolve, reject) => {
          adapter.once("connect", () => __async4(this, null, function* () {
            try {
              address = adapter.publicKey.toString();
              resolve();
            } catch (err) {
              reject(err);
            }
          }));
          adapter.once("error", (err) => {
            error = (err == null ? void 0 : err.message) || "An unknown error occurred";
            reject(err);
          });
          adapter.once("disconnect", () => {
            error = "Disconnected before connect event";
            reject(new Error(error));
          });
        });
      }
      return address;
    } catch (e2) {
      console.error(e2);
      yield adapter.disconnect();
      throw e2;
    }
  });
  const connect = (adapter) => __async4(this, null, function* () {
    var _a;
    if (isIosAndRedirectable()) {
      return;
    }
    yield disconnect();
    let address;
    let error;
    let authState;
    try {
      address = yield connectBase(adapter, true);
      if (address) {
        try {
          authState = yield login({ address, providerId: (_a = getWallet(adapter.name)) == null ? void 0 : _a.id, providerName: adapter.name });
          verificationMessage.current = authState.stage === "verify" ? authState.signatureVerificationMessage : void 0;
        } catch (err) {
          yield disconnect();
          address = void 0;
          error = err;
        }
      }
    } catch (err) {
      switch (err.message) {
        case "User aborted.":
        case "Approval Denied":
        case "You canceled this request.":
        case "Disconnected before connect event": {
          error = "Connection request rejected";
          break;
        }
        default: {
          console.error("Solana connection error:", err.message);
          error = "An unknown error occurred";
          break;
        }
      }
    }
    return { address, error, authState };
  });
  const requestInfo = (providerId) => __async4(this, null, function* () {
    var _a, _b;
    const wallet2 = wallets2.find((w) => w.id === providerId);
    const adapter = getAdapter((_a = wallet2.name) != null ? _a : "");
    disconnectTypeRef.current = "ACCOUNT_LINKING";
    try {
      const address = yield connectBase(adapter);
      const externalWallet = {
        partnerId: para.partnerId,
        address,
        type: "SOLANA",
        providerId: wallet2.id,
        provider: wallet2.name
      };
      return externalWallet;
    } catch (e2) {
      console.error("Error linking account:", e2);
      throw new Error((_b = e2 == null ? void 0 : e2.message) != null ? _b : e2);
    }
  });
  const disconnectBase = (_0, ..._1) => __async4(this, [_0, ..._1], function* (providerId, { disconnectType } = {}) {
    var _a;
    const wallet2 = wallets2.find((w) => w.id === providerId);
    if (!wallet2) {
      return;
    }
    const adapter = getAdapter((_a = wallet2.name) != null ? _a : "");
    if (!(adapter == null ? void 0 : adapter.connected)) {
      return;
    }
    if (disconnectType) {
      disconnectTypeRef.current = disconnectType;
    }
    try {
      yield adapter.disconnect();
    } catch (e2) {
      console.error("Error disconnecting Solana wallet:", e2);
    } finally {
      disconnectTypeRef.current = void 0;
    }
  });
  const getAdapter = (name) => {
    var _a;
    return (_a = adapters.find((a) => a.adapter.name === "Mobile Wallet Adapter" ? a : a.adapter.name === name ? a : false)) == null ? void 0 : _a.adapter;
  };
  const getWallet = (name) => wallets2.find((w) => w.name === name);
  const createWallet = (walletFn) => {
    const metaData = walletFn();
    const adapter = getAdapter(metaData.name);
    return __spreadProps(__spreadValues({
      connect: () => connect(adapter),
      connectMobile: () => connect(adapter),
      type: "SOLANA",
      installed: adapter && ((adapter == null ? void 0 : adapter.readyState) === WalletReadyState.Installed || (adapter == null ? void 0 : adapter.readyState) === WalletReadyState.Loadable)
    }, metaData), {
      // Using name here since that's the only common id across the networks
      id: metaData.name
    });
  };
  const [wallets2, setWallets] = (0, import_react9.useState)(() => walletFns.map(createWallet));
  const farcasterStatus = (0, import_react9.useMemo)(() => {
    if (!isFarcasterSetup) {
      return void 0;
    }
    const farcasterAdapter = getAdapter("Farcaster");
    if (!farcasterAdapter) {
      return {
        isPresent: false
      };
    }
    return farcasterAdapter.connected && farcasterAdapter.publicKey ? {
      isPresent: true,
      isConnected: true,
      address: farcasterAdapter.publicKey.toString()
    } : {
      isPresent: true,
      isConnected: false
    };
  }, [isFarcasterSetup, adapters]);
  (0, import_react9.useEffect)(() => {
    const detectFarcaster = () => __async4(this, null, function* () {
      if (para.isFarcasterMiniApp) {
        try {
          yield import("./solana-wallet-connectors_false-2DA7SK7V.js");
        } catch (e2) {
        }
      }
    });
    detectFarcaster();
  }, [para.isFarcasterMiniApp]);
  (0, import_react9.useEffect)(() => {
    const setupFarcaster = () => __async4(this, null, function* () {
      const adapter = getAdapter("Farcaster");
      if (para.isFarcasterMiniApp && !wallets2.some((w) => w.internalId === "FARCASTER") && !!adapter) {
        const wallet2 = createWallet(farcasterWallet);
        setWallets((prev) => [...prev, wallet2]);
        if (para.supportedWalletTypes.some(({ type: type2 }) => type2 === "SOLANA")) {
          yield connectBase(adapter, true);
        }
        setIsFarcasterSetup(true);
      }
    });
    setupFarcaster();
  }, [para.isFarcasterMiniApp, wallets2, adapters]);
  const injectedWallets = adapters.filter((wallet2) => wallet2.adapter.name !== "Mobile Wallet Adapter" && !wallets2.some((w) => w.name === wallet2.adapter.name)).map((wallet2) => {
    const adapter = wallet2.adapter;
    return {
      connect: () => connect(adapter),
      connectMobile: () => connect(adapter),
      type: "SOLANA",
      installed: adapter && ((adapter == null ? void 0 : adapter.readyState) === WalletReadyState.Installed || (adapter == null ? void 0 : adapter.readyState) === WalletReadyState.Loadable),
      name: adapter.name,
      iconUrl: adapter.icon,
      // Using name here since that's the only common id across the networks
      id: adapter.name,
      internalId: adapter.name
    };
  });
  const walletsWithInjected = [...wallets2, ...injectedWallets];
  return (0, import_jsx_runtime.jsx)(
    SolanaExternalWalletContext.Provider,
    {
      value: (0, import_react9.useMemo)(
        () => __spreadValues({
          wallets: walletsWithInjected,
          disconnect,
          disconnectStatus: disconnecting ? "pending" : "idle",
          signMessage,
          signVerificationMessage,
          requestInfo,
          disconnectBase,
          farcasterStatus
        }, externalHooks),
        [
          walletsWithInjected,
          disconnect,
          disconnecting,
          signMessage,
          signVerificationMessage,
          requestInfo,
          farcasterStatus,
          disconnectBase
        ]
      ),
      children
    }
  );
}

// node_modules/.pnpm/@getpara+solana-wallet-connectors@2.0.0-alpha.73_3c3356485ff55aba5893ffbf60d214e7/node_modules/@getpara/solana-wallet-connectors/dist/providers/ParaSolanaProvider.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react10 = __toESM(require_react(), 1);
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
function ParaSolanaProvider({ children, config, internalConfig }) {
  const { wallets: walletFns, endpoint, appIdentity, chain, connectionConfig } = config;
  const solanaExternalWalletProviderProps = (0, import_react10.useMemo)(
    () => __spreadValues2({ wallets: walletFns }, internalConfig),
    [walletFns, internalConfig]
  );
  return (0, import_jsx_runtime2.jsx)(ConnectionProvider, { endpoint, config: connectionConfig, children: (0, import_jsx_runtime2.jsx)(
    WalletProvider,
    {
      wallets: [
        new SolanaMobileWalletAdapter({
          addressSelector: createDefaultAddressSelector(),
          appIdentity,
          authorizationResultCache: createDefaultAuthorizationResultCache(),
          chain,
          onWalletNotFound: createDefaultWalletNotFoundHandler()
        })
      ],
      localStorageKey: "paraSolanaExternal",
      autoConnect: true,
      children: (0, import_jsx_runtime2.jsx)(SolanaExternalWalletProvider, __spreadProps2(__spreadValues2({}, solanaExternalWalletProviderProps), { chain, children }))
    }
  ) });
}
export {
  ParaSolanaProvider,
  SolanaExternalWalletContext,
  allWallets,
  backpackWallet,
  farcasterWallet,
  glowWallet,
  metaMaskWallet,
  phantomWallet,
  solflareWallet
};
//# sourceMappingURL=dist-SBI3GAV6.js.map
