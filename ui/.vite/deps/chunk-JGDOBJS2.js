// node_modules/.pnpm/@demox-labs+miden-sdk@0.12.5_rollup@4.53.3_tslib@2.8.1_typescript@5.9.3/node_modules/@demox-labs/miden-sdk/dist/Cargo-68d95828.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dexie = { exports: {} };
(function(module2, exports) {
  (function(global2, factory) {
    module2.exports = factory();
  })(commonjsGlobal, (function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    }
    var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : commonjsGlobal;
    var keys = Object.keys;
    var isArray = Array.isArray;
    if (typeof Promise !== "undefined" && !_global.Promise) {
      _global.Promise = Promise;
    }
    function extend(obj, extension) {
      if (typeof extension !== "object")
        return obj;
      keys(extension).forEach(function(key) {
        obj[key] = extension[key];
      });
      return obj;
    }
    var getProto = Object.getPrototypeOf;
    var _hasOwn = {}.hasOwnProperty;
    function hasOwn(obj, prop) {
      return _hasOwn.call(obj, prop);
    }
    function props(proto, extension) {
      if (typeof extension === "function")
        extension = extension(getProto(proto));
      (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(function(key) {
        setProp(proto, key, extension[key]);
      });
    }
    var defineProperty = Object.defineProperty;
    function setProp(obj, prop, functionOrGetSet, options) {
      defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } : { value: functionOrGetSet, configurable: true, writable: true }, options));
    }
    function derive(Child) {
      return {
        from: function(Parent) {
          Child.prototype = Object.create(Parent.prototype);
          setProp(Child.prototype, "constructor", Child);
          return {
            extend: props.bind(null, Child.prototype)
          };
        }
      };
    }
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    function getPropertyDescriptor(obj, prop) {
      var pd = getOwnPropertyDescriptor(obj, prop);
      var proto;
      return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
    }
    var _slice = [].slice;
    function slice(args, start, end) {
      return _slice.call(args, start, end);
    }
    function override(origFunc, overridedFactory) {
      return overridedFactory(origFunc);
    }
    function assert(b) {
      if (!b)
        throw new Error("Assertion Failed");
    }
    function asap$1(fn) {
      if (_global.setImmediate)
        setImmediate(fn);
      else
        setTimeout(fn, 0);
    }
    function arrayToObject(array, extractor) {
      return array.reduce(function(result, item, i) {
        var nameAndValue = extractor(item, i);
        if (nameAndValue)
          result[nameAndValue[0]] = nameAndValue[1];
        return result;
      }, {});
    }
    function getByKeyPath(obj, keyPath) {
      if (typeof keyPath === "string" && hasOwn(obj, keyPath))
        return obj[keyPath];
      if (!keyPath)
        return obj;
      if (typeof keyPath !== "string") {
        var rv = [];
        for (var i = 0, l = keyPath.length; i < l; ++i) {
          var val = getByKeyPath(obj, keyPath[i]);
          rv.push(val);
        }
        return rv;
      }
      var period = keyPath.indexOf(".");
      if (period !== -1) {
        var innerObj = obj[keyPath.substr(0, period)];
        return innerObj == null ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
      }
      return void 0;
    }
    function setByKeyPath(obj, keyPath, value) {
      if (!obj || keyPath === void 0)
        return;
      if ("isFrozen" in Object && Object.isFrozen(obj))
        return;
      if (typeof keyPath !== "string" && "length" in keyPath) {
        assert(typeof value !== "string" && "length" in value);
        for (var i = 0, l = keyPath.length; i < l; ++i) {
          setByKeyPath(obj, keyPath[i], value[i]);
        }
      } else {
        var period = keyPath.indexOf(".");
        if (period !== -1) {
          var currentKeyPath = keyPath.substr(0, period);
          var remainingKeyPath = keyPath.substr(period + 1);
          if (remainingKeyPath === "")
            if (value === void 0) {
              if (isArray(obj) && !isNaN(parseInt(currentKeyPath)))
                obj.splice(currentKeyPath, 1);
              else
                delete obj[currentKeyPath];
            } else
              obj[currentKeyPath] = value;
          else {
            var innerObj = obj[currentKeyPath];
            if (!innerObj || !hasOwn(obj, currentKeyPath))
              innerObj = obj[currentKeyPath] = {};
            setByKeyPath(innerObj, remainingKeyPath, value);
          }
        } else {
          if (value === void 0) {
            if (isArray(obj) && !isNaN(parseInt(keyPath)))
              obj.splice(keyPath, 1);
            else
              delete obj[keyPath];
          } else
            obj[keyPath] = value;
        }
      }
    }
    function delByKeyPath(obj, keyPath) {
      if (typeof keyPath === "string")
        setByKeyPath(obj, keyPath, void 0);
      else if ("length" in keyPath)
        [].map.call(keyPath, function(kp) {
          setByKeyPath(obj, kp, void 0);
        });
    }
    function shallowClone(obj) {
      var rv = {};
      for (var m in obj) {
        if (hasOwn(obj, m))
          rv[m] = obj[m];
      }
      return rv;
    }
    var concat = [].concat;
    function flatten(a) {
      return concat.apply([], a);
    }
    var intrinsicTypeNames = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(function(num) {
      return ["Int", "Uint", "Float"].map(function(t) {
        return t + num + "Array";
      });
    }))).filter(function(t) {
      return _global[t];
    });
    var intrinsicTypes = new Set(intrinsicTypeNames.map(function(t) {
      return _global[t];
    }));
    function cloneSimpleObjectTree(o) {
      var rv = {};
      for (var k in o)
        if (hasOwn(o, k)) {
          var v = o[k];
          rv[k] = !v || typeof v !== "object" || intrinsicTypes.has(v.constructor) ? v : cloneSimpleObjectTree(v);
        }
      return rv;
    }
    function objectIsEmpty(o) {
      for (var k in o)
        if (hasOwn(o, k))
          return false;
      return true;
    }
    var circularRefs = null;
    function deepClone(any) {
      circularRefs = /* @__PURE__ */ new WeakMap();
      var rv = innerDeepClone(any);
      circularRefs = null;
      return rv;
    }
    function innerDeepClone(x) {
      if (!x || typeof x !== "object")
        return x;
      var rv = circularRefs.get(x);
      if (rv)
        return rv;
      if (isArray(x)) {
        rv = [];
        circularRefs.set(x, rv);
        for (var i = 0, l = x.length; i < l; ++i) {
          rv.push(innerDeepClone(x[i]));
        }
      } else if (intrinsicTypes.has(x.constructor)) {
        rv = x;
      } else {
        var proto = getProto(x);
        rv = proto === Object.prototype ? {} : Object.create(proto);
        circularRefs.set(x, rv);
        for (var prop in x) {
          if (hasOwn(x, prop)) {
            rv[prop] = innerDeepClone(x[prop]);
          }
        }
      }
      return rv;
    }
    var toString2 = {}.toString;
    function toStringTag(o) {
      return toString2.call(o).slice(8, -1);
    }
    var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
    var getIteratorOf = typeof iteratorSymbol === "symbol" ? function(x) {
      var i;
      return x != null && (i = x[iteratorSymbol]) && i.apply(x);
    } : function() {
      return null;
    };
    function delArrayItem(a, x) {
      var i = a.indexOf(x);
      if (i >= 0)
        a.splice(i, 1);
      return i >= 0;
    }
    var NO_CHAR_ARRAY = {};
    function getArrayOf(arrayLike) {
      var i, a, x, it;
      if (arguments.length === 1) {
        if (isArray(arrayLike))
          return arrayLike.slice();
        if (this === NO_CHAR_ARRAY && typeof arrayLike === "string")
          return [arrayLike];
        if (it = getIteratorOf(arrayLike)) {
          a = [];
          while (x = it.next(), !x.done)
            a.push(x.value);
          return a;
        }
        if (arrayLike == null)
          return [arrayLike];
        i = arrayLike.length;
        if (typeof i === "number") {
          a = new Array(i);
          while (i--)
            a[i] = arrayLike[i];
          return a;
        }
        return [arrayLike];
      }
      i = arguments.length;
      a = new Array(i);
      while (i--)
        a[i] = arguments[i];
      return a;
    }
    var isAsyncFunction = typeof Symbol !== "undefined" ? function(fn) {
      return fn[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return false;
    };
    var dexieErrorNames = [
      "Modify",
      "Bulk",
      "OpenFailed",
      "VersionChange",
      "Schema",
      "Upgrade",
      "InvalidTable",
      "MissingAPI",
      "NoSuchDatabase",
      "InvalidArgument",
      "SubTransaction",
      "Unsupported",
      "Internal",
      "DatabaseClosed",
      "PrematureCommit",
      "ForeignAwait"
    ];
    var idbDomErrorNames = [
      "Unknown",
      "Constraint",
      "Data",
      "TransactionInactive",
      "ReadOnly",
      "Version",
      "NotFound",
      "InvalidState",
      "InvalidAccess",
      "Abort",
      "Timeout",
      "QuotaExceeded",
      "Syntax",
      "DataClone"
    ];
    var errorList = dexieErrorNames.concat(idbDomErrorNames);
    var defaultTexts = {
      VersionChanged: "Database version changed by other database connection",
      DatabaseClosed: "Database has been closed",
      Abort: "Transaction aborted",
      TransactionInactive: "Transaction has already completed or failed",
      MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
    };
    function DexieError(name, msg) {
      this.name = name;
      this.message = msg;
    }
    derive(DexieError).from(Error).extend({
      toString: function() {
        return this.name + ": " + this.message;
      }
    });
    function getMultiErrorMessage(msg, failures) {
      return msg + ". Errors: " + Object.keys(failures).map(function(key) {
        return failures[key].toString();
      }).filter(function(v, i, s) {
        return s.indexOf(v) === i;
      }).join("\n");
    }
    function ModifyError(msg, failures, successCount, failedKeys) {
      this.failures = failures;
      this.failedKeys = failedKeys;
      this.successCount = successCount;
      this.message = getMultiErrorMessage(msg, failures);
    }
    derive(ModifyError).from(DexieError);
    function BulkError(msg, failures) {
      this.name = "BulkError";
      this.failures = Object.keys(failures).map(function(pos) {
        return failures[pos];
      });
      this.failuresByPos = failures;
      this.message = getMultiErrorMessage(msg, this.failures);
    }
    derive(BulkError).from(DexieError);
    var errnames = errorList.reduce(function(obj, name) {
      return obj[name] = name + "Error", obj;
    }, {});
    var BaseException = DexieError;
    var exceptions = errorList.reduce(function(obj, name) {
      var fullName = name + "Error";
      function DexieError2(msgOrInner, inner) {
        this.name = fullName;
        if (!msgOrInner) {
          this.message = defaultTexts[name] || fullName;
          this.inner = null;
        } else if (typeof msgOrInner === "string") {
          this.message = "".concat(msgOrInner).concat(!inner ? "" : "\n " + inner);
          this.inner = inner || null;
        } else if (typeof msgOrInner === "object") {
          this.message = "".concat(msgOrInner.name, " ").concat(msgOrInner.message);
          this.inner = msgOrInner;
        }
      }
      derive(DexieError2).from(BaseException);
      obj[name] = DexieError2;
      return obj;
    }, {});
    exceptions.Syntax = SyntaxError;
    exceptions.Type = TypeError;
    exceptions.Range = RangeError;
    var exceptionMap = idbDomErrorNames.reduce(function(obj, name) {
      obj[name + "Error"] = exceptions[name];
      return obj;
    }, {});
    function mapError(domError, message) {
      if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
        return domError;
      var rv = new exceptionMap[domError.name](message || domError.message, domError);
      if ("stack" in domError) {
        setProp(rv, "stack", { get: function() {
          return this.inner.stack;
        } });
      }
      return rv;
    }
    var fullNameExceptions = errorList.reduce(function(obj, name) {
      if (["Syntax", "Type", "Range"].indexOf(name) === -1)
        obj[name + "Error"] = exceptions[name];
      return obj;
    }, {});
    fullNameExceptions.ModifyError = ModifyError;
    fullNameExceptions.DexieError = DexieError;
    fullNameExceptions.BulkError = BulkError;
    function nop() {
    }
    function mirror(val) {
      return val;
    }
    function pureFunctionChain(f1, f2) {
      if (f1 == null || f1 === mirror)
        return f2;
      return function(val) {
        return f2(f1(val));
      };
    }
    function callBoth(on1, on2) {
      return function() {
        on1.apply(this, arguments);
        on2.apply(this, arguments);
      };
    }
    function hookCreatingChain(f1, f2) {
      if (f1 === nop)
        return f2;
      return function() {
        var res = f1.apply(this, arguments);
        if (res !== void 0)
          arguments[0] = res;
        var onsuccess = this.onsuccess, onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
          this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
          this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res2 !== void 0 ? res2 : res;
      };
    }
    function hookDeletingChain(f1, f2) {
      if (f1 === nop)
        return f2;
      return function() {
        f1.apply(this, arguments);
        var onsuccess = this.onsuccess, onerror = this.onerror;
        this.onsuccess = this.onerror = null;
        f2.apply(this, arguments);
        if (onsuccess)
          this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
          this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
      };
    }
    function hookUpdatingChain(f1, f2) {
      if (f1 === nop)
        return f2;
      return function(modifications) {
        var res = f1.apply(this, arguments);
        extend(modifications, res);
        var onsuccess = this.onsuccess, onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
          this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
          this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
      };
    }
    function reverseStoppableEventChain(f1, f2) {
      if (f1 === nop)
        return f2;
      return function() {
        if (f2.apply(this, arguments) === false)
          return false;
        return f1.apply(this, arguments);
      };
    }
    function promisableChain(f1, f2) {
      if (f1 === nop)
        return f2;
      return function() {
        var res = f1.apply(this, arguments);
        if (res && typeof res.then === "function") {
          var thiz = this, i = arguments.length, args = new Array(i);
          while (i--)
            args[i] = arguments[i];
          return res.then(function() {
            return f2.apply(thiz, args);
          });
        }
        return f2.apply(this, arguments);
      };
    }
    var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function setDebug(value, filter) {
      debug = value;
    }
    var INTERNAL = {};
    var ZONE_ECHO_LIMIT = 100, _a$1 = typeof Promise === "undefined" ? [] : (function() {
      var globalP = Promise.resolve();
      if (typeof crypto === "undefined" || !crypto.subtle)
        return [globalP, getProto(globalP), globalP];
      var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
      return [
        nativeP,
        getProto(nativeP),
        globalP
      ];
    })(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
    var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
    var patchGlobalPromise = !!resolvedGlobalPromise;
    function schedulePhysicalTick() {
      queueMicrotask(physicalTick);
    }
    var asap = function(callback, args) {
      microtickQueue.push([callback, args]);
      if (needsNewPhysicalTick) {
        schedulePhysicalTick();
        needsNewPhysicalTick = false;
      }
    };
    var isOutsideMicroTick = true, needsNewPhysicalTick = true, unhandledErrors = [], rejectingErrors = [], rejectionMapper = mirror;
    var globalPSD = {
      id: "global",
      global: true,
      ref: 0,
      unhandleds: [],
      onunhandled: nop,
      pgp: false,
      env: {},
      finalize: nop
    };
    var PSD = globalPSD;
    var microtickQueue = [];
    var numScheduledCalls = 0;
    var tickFinalizers = [];
    function DexiePromise(fn) {
      if (typeof this !== "object")
        throw new TypeError("Promises must be constructed via new");
      this._listeners = [];
      this._lib = false;
      var psd = this._PSD = PSD;
      if (typeof fn !== "function") {
        if (fn !== INTERNAL)
          throw new TypeError("Not a function");
        this._state = arguments[1];
        this._value = arguments[2];
        if (this._state === false)
          handleRejection(this, this._value);
        return;
      }
      this._state = null;
      this._value = null;
      ++psd.ref;
      executePromiseTask(this, fn);
    }
    var thenProp = {
      get: function() {
        var psd = PSD, microTaskId = totalEchoes;
        function then(onFulfilled, onRejected) {
          var _this = this;
          var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
          var cleanup = possibleAwait && !decrementExpectedAwaits();
          var rv = new DexiePromise(function(resolve, reject) {
            propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
          });
          if (this._consoleTask)
            rv._consoleTask = this._consoleTask;
          return rv;
        }
        then.prototype = INTERNAL;
        return then;
      },
      set: function(value) {
        setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
          get: function() {
            return value;
          },
          set: thenProp.set
        });
      }
    };
    props(DexiePromise.prototype, {
      then: thenProp,
      _then: function(onFulfilled, onRejected) {
        propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
      },
      catch: function(onRejected) {
        if (arguments.length === 1)
          return this.then(null, onRejected);
        var type2 = arguments[0], handler = arguments[1];
        return typeof type2 === "function" ? this.then(null, function(err) {
          return err instanceof type2 ? handler(err) : PromiseReject(err);
        }) : this.then(null, function(err) {
          return err && err.name === type2 ? handler(err) : PromiseReject(err);
        });
      },
      finally: function(onFinally) {
        return this.then(function(value) {
          return DexiePromise.resolve(onFinally()).then(function() {
            return value;
          });
        }, function(err) {
          return DexiePromise.resolve(onFinally()).then(function() {
            return PromiseReject(err);
          });
        });
      },
      timeout: function(ms, msg) {
        var _this = this;
        return ms < Infinity ? new DexiePromise(function(resolve, reject) {
          var handle = setTimeout(function() {
            return reject(new exceptions.Timeout(msg));
          }, ms);
          _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
        }) : this;
      }
    });
    if (typeof Symbol !== "undefined" && Symbol.toStringTag)
      setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
    globalPSD.env = snapShot();
    function Listener(onFulfilled, onRejected, resolve, reject, zone) {
      this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
      this.onRejected = typeof onRejected === "function" ? onRejected : null;
      this.resolve = resolve;
      this.reject = reject;
      this.psd = zone;
    }
    props(DexiePromise, {
      all: function() {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function(resolve, reject) {
          if (values.length === 0)
            resolve([]);
          var remaining = values.length;
          values.forEach(function(a, i) {
            return DexiePromise.resolve(a).then(function(x) {
              values[i] = x;
              if (!--remaining)
                resolve(values);
            }, reject);
          });
        });
      },
      resolve: function(value) {
        if (value instanceof DexiePromise)
          return value;
        if (value && typeof value.then === "function")
          return new DexiePromise(function(resolve, reject) {
            value.then(resolve, reject);
          });
        var rv = new DexiePromise(INTERNAL, true, value);
        return rv;
      },
      reject: PromiseReject,
      race: function() {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function(resolve, reject) {
          values.map(function(value) {
            return DexiePromise.resolve(value).then(resolve, reject);
          });
        });
      },
      PSD: {
        get: function() {
          return PSD;
        },
        set: function(value) {
          return PSD = value;
        }
      },
      totalEchoes: { get: function() {
        return totalEchoes;
      } },
      newPSD: newScope,
      usePSD,
      scheduler: {
        get: function() {
          return asap;
        },
        set: function(value) {
          asap = value;
        }
      },
      rejectionMapper: {
        get: function() {
          return rejectionMapper;
        },
        set: function(value) {
          rejectionMapper = value;
        }
      },
      follow: function(fn, zoneProps) {
        return new DexiePromise(function(resolve, reject) {
          return newScope(function(resolve2, reject2) {
            var psd = PSD;
            psd.unhandleds = [];
            psd.onunhandled = reject2;
            psd.finalize = callBoth(function() {
              var _this = this;
              run_at_end_of_this_or_next_physical_tick(function() {
                _this.unhandleds.length === 0 ? resolve2() : reject2(_this.unhandleds[0]);
              });
            }, psd.finalize);
            fn();
          }, zoneProps, resolve, reject);
        });
      }
    });
    if (NativePromise) {
      if (NativePromise.allSettled)
        setProp(DexiePromise, "allSettled", function() {
          var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
          return new DexiePromise(function(resolve) {
            if (possiblePromises.length === 0)
              resolve([]);
            var remaining = possiblePromises.length;
            var results = new Array(remaining);
            possiblePromises.forEach(function(p, i) {
              return DexiePromise.resolve(p).then(function(value) {
                return results[i] = { status: "fulfilled", value };
              }, function(reason) {
                return results[i] = { status: "rejected", reason };
              }).then(function() {
                return --remaining || resolve(results);
              });
            });
          });
        });
      if (NativePromise.any && typeof AggregateError !== "undefined")
        setProp(DexiePromise, "any", function() {
          var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
          return new DexiePromise(function(resolve, reject) {
            if (possiblePromises.length === 0)
              reject(new AggregateError([]));
            var remaining = possiblePromises.length;
            var failures = new Array(remaining);
            possiblePromises.forEach(function(p, i) {
              return DexiePromise.resolve(p).then(function(value) {
                return resolve(value);
              }, function(failure) {
                failures[i] = failure;
                if (!--remaining)
                  reject(new AggregateError(failures));
              });
            });
          });
        });
    }
    function executePromiseTask(promise, fn) {
      try {
        fn(function(value) {
          if (promise._state !== null)
            return;
          if (value === promise)
            throw new TypeError("A promise cannot be resolved with itself.");
          var shouldExecuteTick = promise._lib && beginMicroTickScope();
          if (value && typeof value.then === "function") {
            executePromiseTask(promise, function(resolve, reject) {
              value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
            });
          } else {
            promise._state = true;
            promise._value = value;
            propagateAllListeners(promise);
          }
          if (shouldExecuteTick)
            endMicroTickScope();
        }, handleRejection.bind(null, promise));
      } catch (ex) {
        handleRejection(promise, ex);
      }
    }
    function handleRejection(promise, reason) {
      rejectingErrors.push(reason);
      if (promise._state !== null)
        return;
      var shouldExecuteTick = promise._lib && beginMicroTickScope();
      reason = rejectionMapper(reason);
      promise._state = false;
      promise._value = reason;
      addPossiblyUnhandledError(promise);
      propagateAllListeners(promise);
      if (shouldExecuteTick)
        endMicroTickScope();
    }
    function propagateAllListeners(promise) {
      var listeners = promise._listeners;
      promise._listeners = [];
      for (var i = 0, len = listeners.length; i < len; ++i) {
        propagateToListener(promise, listeners[i]);
      }
      var psd = promise._PSD;
      --psd.ref || psd.finalize();
      if (numScheduledCalls === 0) {
        ++numScheduledCalls;
        asap(function() {
          if (--numScheduledCalls === 0)
            finalizePhysicalTick();
        }, []);
      }
    }
    function propagateToListener(promise, listener) {
      if (promise._state === null) {
        promise._listeners.push(listener);
        return;
      }
      var cb = promise._state ? listener.onFulfilled : listener.onRejected;
      if (cb === null) {
        return (promise._state ? listener.resolve : listener.reject)(promise._value);
      }
      ++listener.psd.ref;
      ++numScheduledCalls;
      asap(callListener, [cb, promise, listener]);
    }
    function callListener(cb, promise, listener) {
      try {
        var ret, value = promise._value;
        if (!promise._state && rejectingErrors.length)
          rejectingErrors = [];
        ret = debug && promise._consoleTask ? promise._consoleTask.run(function() {
          return cb(value);
        }) : cb(value);
        if (!promise._state && rejectingErrors.indexOf(value) === -1) {
          markErrorAsHandled(promise);
        }
        listener.resolve(ret);
      } catch (e) {
        listener.reject(e);
      } finally {
        if (--numScheduledCalls === 0)
          finalizePhysicalTick();
        --listener.psd.ref || listener.psd.finalize();
      }
    }
    function physicalTick() {
      usePSD(globalPSD, function() {
        beginMicroTickScope() && endMicroTickScope();
      });
    }
    function beginMicroTickScope() {
      var wasRootExec = isOutsideMicroTick;
      isOutsideMicroTick = false;
      needsNewPhysicalTick = false;
      return wasRootExec;
    }
    function endMicroTickScope() {
      var callbacks, i, l;
      do {
        while (microtickQueue.length > 0) {
          callbacks = microtickQueue;
          microtickQueue = [];
          l = callbacks.length;
          for (i = 0; i < l; ++i) {
            var item = callbacks[i];
            item[0].apply(null, item[1]);
          }
        }
      } while (microtickQueue.length > 0);
      isOutsideMicroTick = true;
      needsNewPhysicalTick = true;
    }
    function finalizePhysicalTick() {
      var unhandledErrs = unhandledErrors;
      unhandledErrors = [];
      unhandledErrs.forEach(function(p) {
        p._PSD.onunhandled.call(null, p._value, p);
      });
      var finalizers = tickFinalizers.slice(0);
      var i = finalizers.length;
      while (i)
        finalizers[--i]();
    }
    function run_at_end_of_this_or_next_physical_tick(fn) {
      function finalizer() {
        fn();
        tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
      }
      tickFinalizers.push(finalizer);
      ++numScheduledCalls;
      asap(function() {
        if (--numScheduledCalls === 0)
          finalizePhysicalTick();
      }, []);
    }
    function addPossiblyUnhandledError(promise) {
      if (!unhandledErrors.some(function(p) {
        return p._value === promise._value;
      }))
        unhandledErrors.push(promise);
    }
    function markErrorAsHandled(promise) {
      var i = unhandledErrors.length;
      while (i)
        if (unhandledErrors[--i]._value === promise._value) {
          unhandledErrors.splice(i, 1);
          return;
        }
    }
    function PromiseReject(reason) {
      return new DexiePromise(INTERNAL, false, reason);
    }
    function wrap(fn, errorCatcher) {
      var psd = PSD;
      return function() {
        var wasRootExec = beginMicroTickScope(), outerScope = PSD;
        try {
          switchToZone(psd, true);
          return fn.apply(this, arguments);
        } catch (e) {
          errorCatcher && errorCatcher(e);
        } finally {
          switchToZone(outerScope, false);
          if (wasRootExec)
            endMicroTickScope();
        }
      };
    }
    var task = { awaits: 0, echoes: 0, id: 0 };
    var taskCounter = 0;
    var zoneStack = [];
    var zoneEchoes = 0;
    var totalEchoes = 0;
    var zone_id_counter = 0;
    function newScope(fn, props2, a1, a2) {
      var parent = PSD, psd = Object.create(parent);
      psd.parent = parent;
      psd.ref = 0;
      psd.global = false;
      psd.id = ++zone_id_counter;
      globalPSD.env;
      psd.env = patchGlobalPromise ? {
        Promise: DexiePromise,
        PromiseProp: { value: DexiePromise, configurable: true, writable: true },
        all: DexiePromise.all,
        race: DexiePromise.race,
        allSettled: DexiePromise.allSettled,
        any: DexiePromise.any,
        resolve: DexiePromise.resolve,
        reject: DexiePromise.reject
      } : {};
      if (props2)
        extend(psd, props2);
      ++parent.ref;
      psd.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      };
      var rv = usePSD(psd, fn, a1, a2);
      if (psd.ref === 0)
        psd.finalize();
      return rv;
    }
    function incrementExpectedAwaits() {
      if (!task.id)
        task.id = ++taskCounter;
      ++task.awaits;
      task.echoes += ZONE_ECHO_LIMIT;
      return task.id;
    }
    function decrementExpectedAwaits() {
      if (!task.awaits)
        return false;
      if (--task.awaits === 0)
        task.id = 0;
      task.echoes = task.awaits * ZONE_ECHO_LIMIT;
      return true;
    }
    if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
      incrementExpectedAwaits = decrementExpectedAwaits = nop;
    }
    function onPossibleParallellAsync(possiblePromise) {
      if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
        incrementExpectedAwaits();
        return possiblePromise.then(function(x) {
          decrementExpectedAwaits();
          return x;
        }, function(e) {
          decrementExpectedAwaits();
          return rejection(e);
        });
      }
      return possiblePromise;
    }
    function zoneEnterEcho(targetZone) {
      ++totalEchoes;
      if (!task.echoes || --task.echoes === 0) {
        task.echoes = task.awaits = task.id = 0;
      }
      zoneStack.push(PSD);
      switchToZone(targetZone, true);
    }
    function zoneLeaveEcho() {
      var zone = zoneStack[zoneStack.length - 1];
      zoneStack.pop();
      switchToZone(zone, false);
    }
    function switchToZone(targetZone, bEnteringZone) {
      var currentZone = PSD;
      if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
        queueMicrotask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
      }
      if (targetZone === PSD)
        return;
      PSD = targetZone;
      if (currentZone === globalPSD)
        globalPSD.env = snapShot();
      if (patchGlobalPromise) {
        var GlobalPromise = globalPSD.env.Promise;
        var targetEnv = targetZone.env;
        if (currentZone.global || targetZone.global) {
          Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
          GlobalPromise.all = targetEnv.all;
          GlobalPromise.race = targetEnv.race;
          GlobalPromise.resolve = targetEnv.resolve;
          GlobalPromise.reject = targetEnv.reject;
          if (targetEnv.allSettled)
            GlobalPromise.allSettled = targetEnv.allSettled;
          if (targetEnv.any)
            GlobalPromise.any = targetEnv.any;
        }
      }
    }
    function snapShot() {
      var GlobalPromise = _global.Promise;
      return patchGlobalPromise ? {
        Promise: GlobalPromise,
        PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
        all: GlobalPromise.all,
        race: GlobalPromise.race,
        allSettled: GlobalPromise.allSettled,
        any: GlobalPromise.any,
        resolve: GlobalPromise.resolve,
        reject: GlobalPromise.reject
      } : {};
    }
    function usePSD(psd, fn, a1, a2, a3) {
      var outerScope = PSD;
      try {
        switchToZone(psd, true);
        return fn(a1, a2, a3);
      } finally {
        switchToZone(outerScope, false);
      }
    }
    function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
      return typeof fn !== "function" ? fn : function() {
        var outerZone = PSD;
        if (possibleAwait)
          incrementExpectedAwaits();
        switchToZone(zone, true);
        try {
          return fn.apply(this, arguments);
        } finally {
          switchToZone(outerZone, false);
          if (cleanup)
            queueMicrotask(decrementExpectedAwaits);
        }
      };
    }
    function execInGlobalContext(cb) {
      if (Promise === NativePromise && task.echoes === 0) {
        if (zoneEchoes === 0) {
          cb();
        } else {
          enqueueNativeMicroTask(cb);
        }
      } else {
        setTimeout(cb, 0);
      }
    }
    var rejection = DexiePromise.reject;
    function tempTransaction(db2, mode, storeNames, fn) {
      if (!db2.idbdb || !db2._state.openComplete && (!PSD.letThrough && !db2._vip)) {
        if (db2._state.openComplete) {
          return rejection(new exceptions.DatabaseClosed(db2._state.dbOpenError));
        }
        if (!db2._state.isBeingOpened) {
          if (!db2._state.autoOpen)
            return rejection(new exceptions.DatabaseClosed());
          db2.open().catch(nop);
        }
        return db2._state.dbReadyPromise.then(function() {
          return tempTransaction(db2, mode, storeNames, fn);
        });
      } else {
        var trans = db2._createTransaction(mode, storeNames, db2._dbSchema);
        try {
          trans.create();
          db2._state.PR1398_maxLoop = 3;
        } catch (ex) {
          if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
            console.warn("Dexie: Need to reopen db");
            db2.close({ disableAutoOpen: false });
            return db2.open().then(function() {
              return tempTransaction(db2, mode, storeNames, fn);
            });
          }
          return rejection(ex);
        }
        return trans._promise(mode, function(resolve, reject) {
          return newScope(function() {
            PSD.trans = trans;
            return fn(resolve, reject, trans);
          });
        }).then(function(result) {
          if (mode === "readwrite")
            try {
              trans.idbtrans.commit();
            } catch (_a2) {
            }
          return mode === "readonly" ? result : trans._completion.then(function() {
            return result;
          });
        });
      }
    }
    var DEXIE_VERSION = "4.0.8";
    var maxString = String.fromCharCode(65535);
    var minKey = -Infinity;
    var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
    var STRING_EXPECTED = "String expected.";
    var connections = [];
    var DBNAMES_DB = "__dbnames";
    var READONLY = "readonly";
    var READWRITE = "readwrite";
    function combine(filter1, filter2) {
      return filter1 ? filter2 ? function() {
        return filter1.apply(this, arguments) && filter2.apply(this, arguments);
      } : filter1 : filter2;
    }
    var AnyRange = {
      type: 3,
      lower: -Infinity,
      lowerOpen: false,
      upper: [[]],
      upperOpen: false
    };
    function workaroundForUndefinedPrimKey(keyPath) {
      return typeof keyPath === "string" && !/\./.test(keyPath) ? function(obj) {
        if (obj[keyPath] === void 0 && keyPath in obj) {
          obj = deepClone(obj);
          delete obj[keyPath];
        }
        return obj;
      } : function(obj) {
        return obj;
      };
    }
    function Entity() {
      throw exceptions.Type();
    }
    function cmp(a, b) {
      try {
        var ta = type(a);
        var tb = type(b);
        if (ta !== tb) {
          if (ta === "Array")
            return 1;
          if (tb === "Array")
            return -1;
          if (ta === "binary")
            return 1;
          if (tb === "binary")
            return -1;
          if (ta === "string")
            return 1;
          if (tb === "string")
            return -1;
          if (ta === "Date")
            return 1;
          if (tb !== "Date")
            return NaN;
          return -1;
        }
        switch (ta) {
          case "number":
          case "Date":
          case "string":
            return a > b ? 1 : a < b ? -1 : 0;
          case "binary": {
            return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
          }
          case "Array":
            return compareArrays(a, b);
        }
      } catch (_a2) {
      }
      return NaN;
    }
    function compareArrays(a, b) {
      var al = a.length;
      var bl = b.length;
      var l = al < bl ? al : bl;
      for (var i = 0; i < l; ++i) {
        var res = cmp(a[i], b[i]);
        if (res !== 0)
          return res;
      }
      return al === bl ? 0 : al < bl ? -1 : 1;
    }
    function compareUint8Arrays(a, b) {
      var al = a.length;
      var bl = b.length;
      var l = al < bl ? al : bl;
      for (var i = 0; i < l; ++i) {
        if (a[i] !== b[i])
          return a[i] < b[i] ? -1 : 1;
      }
      return al === bl ? 0 : al < bl ? -1 : 1;
    }
    function type(x) {
      var t = typeof x;
      if (t !== "object")
        return t;
      if (ArrayBuffer.isView(x))
        return "binary";
      var tsTag = toStringTag(x);
      return tsTag === "ArrayBuffer" ? "binary" : tsTag;
    }
    function getUint8Array(a) {
      if (a instanceof Uint8Array)
        return a;
      if (ArrayBuffer.isView(a))
        return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
      return new Uint8Array(a);
    }
    var Table2 = (function() {
      function Table3() {
      }
      Table3.prototype._trans = function(mode, fn, writeLocked) {
        var trans = this._tx || PSD.trans;
        var tableName = this.name;
        var task2 = debug && typeof console !== "undefined" && console.createTask && console.createTask("Dexie: ".concat(mode === "readonly" ? "read" : "write", " ").concat(this.name));
        function checkTableInTransaction(resolve, reject, trans2) {
          if (!trans2.schema[tableName])
            throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
          return fn(trans2.idbtrans, trans2);
        }
        var wasRootExec = beginMicroTickScope();
        try {
          var p = trans && trans.db._novip === this.db._novip ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function() {
            return trans._promise(mode, checkTableInTransaction, writeLocked);
          }, { trans, transless: PSD.transless || PSD }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
          if (task2) {
            p._consoleTask = task2;
            p = p.catch(function(err) {
              console.trace(err);
              return rejection(err);
            });
          }
          return p;
        } finally {
          if (wasRootExec)
            endMicroTickScope();
        }
      };
      Table3.prototype.get = function(keyOrCrit, cb) {
        var _this = this;
        if (keyOrCrit && keyOrCrit.constructor === Object)
          return this.where(keyOrCrit).first(cb);
        if (keyOrCrit == null)
          return rejection(new exceptions.Type("Invalid argument to Table.get()"));
        return this._trans("readonly", function(trans) {
          return _this.core.get({ trans, key: keyOrCrit }).then(function(res) {
            return _this.hook.reading.fire(res);
          });
        }).then(cb);
      };
      Table3.prototype.where = function(indexOrCrit) {
        if (typeof indexOrCrit === "string")
          return new this.db.WhereClause(this, indexOrCrit);
        if (isArray(indexOrCrit))
          return new this.db.WhereClause(this, "[".concat(indexOrCrit.join("+"), "]"));
        var keyPaths = keys(indexOrCrit);
        if (keyPaths.length === 1)
          return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
        var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function(ix) {
          if (ix.compound && keyPaths.every(function(keyPath) {
            return ix.keyPath.indexOf(keyPath) >= 0;
          })) {
            for (var i = 0; i < keyPaths.length; ++i) {
              if (keyPaths.indexOf(ix.keyPath[i]) === -1)
                return false;
            }
            return true;
          }
          return false;
        }).sort(function(a, b) {
          return a.keyPath.length - b.keyPath.length;
        })[0];
        if (compoundIndex && this.db._maxKey !== maxString) {
          var keyPathsInValidOrder = compoundIndex.keyPath.slice(0, keyPaths.length);
          return this.where(keyPathsInValidOrder).equals(keyPathsInValidOrder.map(function(kp) {
            return indexOrCrit[kp];
          }));
        }
        if (!compoundIndex && debug)
          console.warn("The query ".concat(JSON.stringify(indexOrCrit), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(keyPaths.join("+"), "]"));
        var idxByName = this.schema.idxByName;
        var idb = this.db._deps.indexedDB;
        function equals(a, b) {
          return idb.cmp(a, b) === 0;
        }
        var _a2 = keyPaths.reduce(function(_a3, keyPath) {
          var prevIndex = _a3[0], prevFilterFn = _a3[1];
          var index = idxByName[keyPath];
          var value = indexOrCrit[keyPath];
          return [
            prevIndex || index,
            prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function(x) {
              var prop = getByKeyPath(x, keyPath);
              return isArray(prop) && prop.some(function(item) {
                return equals(value, item);
              });
            } : function(x) {
              return equals(value, getByKeyPath(x, keyPath));
            }) : prevFilterFn
          ];
        }, [null, null]), idx = _a2[0], filterFunction = _a2[1];
        return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
      };
      Table3.prototype.filter = function(filterFunction) {
        return this.toCollection().and(filterFunction);
      };
      Table3.prototype.count = function(thenShortcut) {
        return this.toCollection().count(thenShortcut);
      };
      Table3.prototype.offset = function(offset) {
        return this.toCollection().offset(offset);
      };
      Table3.prototype.limit = function(numRows) {
        return this.toCollection().limit(numRows);
      };
      Table3.prototype.each = function(callback) {
        return this.toCollection().each(callback);
      };
      Table3.prototype.toArray = function(thenShortcut) {
        return this.toCollection().toArray(thenShortcut);
      };
      Table3.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      };
      Table3.prototype.orderBy = function(index) {
        return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[".concat(index.join("+"), "]") : index));
      };
      Table3.prototype.reverse = function() {
        return this.toCollection().reverse();
      };
      Table3.prototype.mapToClass = function(constructor) {
        var _a2 = this, db2 = _a2.db, tableName = _a2.name;
        this.schema.mappedClass = constructor;
        if (constructor.prototype instanceof Entity) {
          constructor = (function(_super) {
            __extends(class_1, _super);
            function class_1() {
              return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(class_1.prototype, "db", {
              get: function() {
                return db2;
              },
              enumerable: false,
              configurable: true
            });
            class_1.prototype.table = function() {
              return tableName;
            };
            return class_1;
          })(constructor);
        }
        var inheritedProps = /* @__PURE__ */ new Set();
        for (var proto = constructor.prototype; proto; proto = getProto(proto)) {
          Object.getOwnPropertyNames(proto).forEach(function(propName) {
            return inheritedProps.add(propName);
          });
        }
        var readHook = function(obj) {
          if (!obj)
            return obj;
          var res = Object.create(constructor.prototype);
          for (var m in obj)
            if (!inheritedProps.has(m))
              try {
                res[m] = obj[m];
              } catch (_) {
              }
          return res;
        };
        if (this.schema.readHook) {
          this.hook.reading.unsubscribe(this.schema.readHook);
        }
        this.schema.readHook = readHook;
        this.hook("reading", readHook);
        return constructor;
      };
      Table3.prototype.defineClass = function() {
        function Class(content) {
          extend(this, content);
        }
        return this.mapToClass(Class);
      };
      Table3.prototype.add = function(obj, key) {
        var _this = this;
        var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
        var objToAdd = obj;
        if (keyPath && auto) {
          objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
        }
        return this._trans("readwrite", function(trans) {
          return _this.core.mutate({ trans, type: "add", keys: key != null ? [key] : null, values: [objToAdd] });
        }).then(function(res) {
          return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
        }).then(function(lastResult) {
          if (keyPath) {
            try {
              setByKeyPath(obj, keyPath, lastResult);
            } catch (_) {
            }
          }
          return lastResult;
        });
      };
      Table3.prototype.update = function(keyOrObject, modifications) {
        if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
          var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
          if (key === void 0)
            return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
          return this.where(":id").equals(key).modify(modifications);
        } else {
          return this.where(":id").equals(keyOrObject).modify(modifications);
        }
      };
      Table3.prototype.put = function(obj, key) {
        var _this = this;
        var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
        var objToAdd = obj;
        if (keyPath && auto) {
          objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
        }
        return this._trans("readwrite", function(trans) {
          return _this.core.mutate({ trans, type: "put", values: [objToAdd], keys: key != null ? [key] : null });
        }).then(function(res) {
          return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
        }).then(function(lastResult) {
          if (keyPath) {
            try {
              setByKeyPath(obj, keyPath, lastResult);
            } catch (_) {
            }
          }
          return lastResult;
        });
      };
      Table3.prototype.delete = function(key) {
        var _this = this;
        return this._trans("readwrite", function(trans) {
          return _this.core.mutate({ trans, type: "delete", keys: [key] });
        }).then(function(res) {
          return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
        });
      };
      Table3.prototype.clear = function() {
        var _this = this;
        return this._trans("readwrite", function(trans) {
          return _this.core.mutate({ trans, type: "deleteRange", range: AnyRange });
        }).then(function(res) {
          return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
        });
      };
      Table3.prototype.bulkGet = function(keys2) {
        var _this = this;
        return this._trans("readonly", function(trans) {
          return _this.core.getMany({
            keys: keys2,
            trans
          }).then(function(result) {
            return result.map(function(res) {
              return _this.hook.reading.fire(res);
            });
          });
        });
      };
      Table3.prototype.bulkAdd = function(objects, keysOrOptions, options) {
        var _this = this;
        var keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
        options = options || (keys2 ? void 0 : keysOrOptions);
        var wantResults = options ? options.allKeys : void 0;
        return this._trans("readwrite", function(trans) {
          var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
          if (keyPath && keys2)
            throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (keys2 && keys2.length !== objects.length)
            throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
          var numObjects = objects.length;
          var objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
          return _this.core.mutate({ trans, type: "add", keys: keys2, values: objectsToAdd, wantResults }).then(function(_a3) {
            var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
            var result = wantResults ? results : lastResult;
            if (numFailures === 0)
              return result;
            throw new BulkError("".concat(_this.name, ".bulkAdd(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
          });
        });
      };
      Table3.prototype.bulkPut = function(objects, keysOrOptions, options) {
        var _this = this;
        var keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
        options = options || (keys2 ? void 0 : keysOrOptions);
        var wantResults = options ? options.allKeys : void 0;
        return this._trans("readwrite", function(trans) {
          var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
          if (keyPath && keys2)
            throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (keys2 && keys2.length !== objects.length)
            throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
          var numObjects = objects.length;
          var objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
          return _this.core.mutate({ trans, type: "put", keys: keys2, values: objectsToPut, wantResults }).then(function(_a3) {
            var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
            var result = wantResults ? results : lastResult;
            if (numFailures === 0)
              return result;
            throw new BulkError("".concat(_this.name, ".bulkPut(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
          });
        });
      };
      Table3.prototype.bulkUpdate = function(keysAndChanges) {
        var _this = this;
        var coreTable = this.core;
        var keys2 = keysAndChanges.map(function(entry) {
          return entry.key;
        });
        var changeSpecs = keysAndChanges.map(function(entry) {
          return entry.changes;
        });
        var offsetMap = [];
        return this._trans("readwrite", function(trans) {
          return coreTable.getMany({ trans, keys: keys2, cache: "clone" }).then(function(objs) {
            var resultKeys = [];
            var resultObjs = [];
            keysAndChanges.forEach(function(_a2, idx) {
              var key = _a2.key, changes = _a2.changes;
              var obj = objs[idx];
              if (obj) {
                for (var _i = 0, _b = Object.keys(changes); _i < _b.length; _i++) {
                  var keyPath = _b[_i];
                  var value = changes[keyPath];
                  if (keyPath === _this.schema.primKey.keyPath) {
                    if (cmp(value, key) !== 0) {
                      throw new exceptions.Constraint("Cannot update primary key in bulkUpdate()");
                    }
                  } else {
                    setByKeyPath(obj, keyPath, value);
                  }
                }
                offsetMap.push(idx);
                resultKeys.push(key);
                resultObjs.push(obj);
              }
            });
            var numEntries = resultKeys.length;
            return coreTable.mutate({
              trans,
              type: "put",
              keys: resultKeys,
              values: resultObjs,
              updates: {
                keys: keys2,
                changeSpecs
              }
            }).then(function(_a2) {
              var numFailures = _a2.numFailures, failures = _a2.failures;
              if (numFailures === 0)
                return numEntries;
              for (var _i = 0, _b = Object.keys(failures); _i < _b.length; _i++) {
                var offset = _b[_i];
                var mappedOffset = offsetMap[Number(offset)];
                if (mappedOffset != null) {
                  var failure = failures[offset];
                  delete failures[offset];
                  failures[mappedOffset] = failure;
                }
              }
              throw new BulkError("".concat(_this.name, ".bulkUpdate(): ").concat(numFailures, " of ").concat(numEntries, " operations failed"), failures);
            });
          });
        });
      };
      Table3.prototype.bulkDelete = function(keys2) {
        var _this = this;
        var numKeys = keys2.length;
        return this._trans("readwrite", function(trans) {
          return _this.core.mutate({ trans, type: "delete", keys: keys2 });
        }).then(function(_a2) {
          var numFailures = _a2.numFailures, lastResult = _a2.lastResult, failures = _a2.failures;
          if (numFailures === 0)
            return lastResult;
          throw new BulkError("".concat(_this.name, ".bulkDelete(): ").concat(numFailures, " of ").concat(numKeys, " operations failed"), failures);
        });
      };
      return Table3;
    })();
    function Events(ctx) {
      var evs = {};
      var rv = function(eventName, subscriber) {
        if (subscriber) {
          var i2 = arguments.length, args = new Array(i2 - 1);
          while (--i2)
            args[i2 - 1] = arguments[i2];
          evs[eventName].subscribe.apply(null, args);
          return ctx;
        } else if (typeof eventName === "string") {
          return evs[eventName];
        }
      };
      rv.addEventType = add2;
      for (var i = 1, l = arguments.length; i < l; ++i) {
        add2(arguments[i]);
      }
      return rv;
      function add2(eventName, chainFunction, defaultFunction) {
        if (typeof eventName === "object")
          return addConfiguredEvents(eventName);
        if (!chainFunction)
          chainFunction = reverseStoppableEventChain;
        if (!defaultFunction)
          defaultFunction = nop;
        var context = {
          subscribers: [],
          fire: defaultFunction,
          subscribe: function(cb) {
            if (context.subscribers.indexOf(cb) === -1) {
              context.subscribers.push(cb);
              context.fire = chainFunction(context.fire, cb);
            }
          },
          unsubscribe: function(cb) {
            context.subscribers = context.subscribers.filter(function(fn) {
              return fn !== cb;
            });
            context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
          }
        };
        evs[eventName] = rv[eventName] = context;
        return context;
      }
      function addConfiguredEvents(cfg) {
        keys(cfg).forEach(function(eventName) {
          var args = cfg[eventName];
          if (isArray(args)) {
            add2(eventName, cfg[eventName][0], cfg[eventName][1]);
          } else if (args === "asap") {
            var context = add2(eventName, mirror, function fire() {
              var i2 = arguments.length, args2 = new Array(i2);
              while (i2--)
                args2[i2] = arguments[i2];
              context.subscribers.forEach(function(fn) {
                asap$1(function fireEvent() {
                  fn.apply(null, args2);
                });
              });
            });
          } else
            throw new exceptions.InvalidArgument("Invalid event config");
        });
      }
    }
    function makeClassConstructor(prototype, constructor) {
      derive(constructor).from({ prototype });
      return constructor;
    }
    function createTableConstructor(db2) {
      return makeClassConstructor(Table2.prototype, function Table3(name, tableSchema, trans) {
        this.db = db2;
        this._tx = trans;
        this.name = name;
        this.schema = tableSchema;
        this.hook = db2._allTables[name] ? db2._allTables[name].hook : Events(null, {
          "creating": [hookCreatingChain, nop],
          "reading": [pureFunctionChain, mirror],
          "updating": [hookUpdatingChain, nop],
          "deleting": [hookDeletingChain, nop]
        });
      });
    }
    function isPlainKeyRange(ctx, ignoreLimitFilter) {
      return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
    }
    function addFilter(ctx, fn) {
      ctx.filter = combine(ctx.filter, fn);
    }
    function addReplayFilter(ctx, factory, isLimitFilter) {
      var curr = ctx.replayFilter;
      ctx.replayFilter = curr ? function() {
        return combine(curr(), factory());
      } : factory;
      ctx.justLimit = isLimitFilter && !curr;
    }
    function addMatchFilter(ctx, fn) {
      ctx.isMatch = combine(ctx.isMatch, fn);
    }
    function getIndexOrStore(ctx, coreSchema) {
      if (ctx.isPrimKey)
        return coreSchema.primaryKey;
      var index = coreSchema.getIndexByKeyPath(ctx.index);
      if (!index)
        throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
      return index;
    }
    function openCursor(ctx, coreTable, trans) {
      var index = getIndexOrStore(ctx, coreTable.schema);
      return coreTable.openCursor({
        trans,
        values: !ctx.keysOnly,
        reverse: ctx.dir === "prev",
        unique: !!ctx.unique,
        query: {
          index,
          range: ctx.range
        }
      });
    }
    function iter(ctx, fn, coreTrans, coreTable) {
      var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
      if (!ctx.or) {
        return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
      } else {
        var set_1 = {};
        var union = function(item, cursor, advance) {
          if (!filter || filter(cursor, advance, function(result) {
            return cursor.stop(result);
          }, function(err) {
            return cursor.fail(err);
          })) {
            var primaryKey = cursor.primaryKey;
            var key = "" + primaryKey;
            if (key === "[object ArrayBuffer]")
              key = "" + new Uint8Array(primaryKey);
            if (!hasOwn(set_1, key)) {
              set_1[key] = true;
              fn(item, cursor, advance);
            }
          }
        };
        return Promise.all([
          ctx.or._iterate(union, coreTrans),
          iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
        ]);
      }
    }
    function iterate(cursorPromise, filter, fn, valueMapper) {
      var mappedFn = valueMapper ? function(x, c, a) {
        return fn(valueMapper(x), c, a);
      } : fn;
      var wrappedFn = wrap(mappedFn);
      return cursorPromise.then(function(cursor) {
        if (cursor) {
          return cursor.start(function() {
            var c = function() {
              return cursor.continue();
            };
            if (!filter || filter(cursor, function(advancer) {
              return c = advancer;
            }, function(val) {
              cursor.stop(val);
              c = nop;
            }, function(e) {
              cursor.fail(e);
              c = nop;
            }))
              wrappedFn(cursor.value, cursor, function(advancer) {
                return c = advancer;
              });
            c();
          });
        }
      });
    }
    var PropModSymbol = Symbol();
    var PropModification = (function() {
      function PropModification2(spec) {
        Object.assign(this, spec);
      }
      PropModification2.prototype.execute = function(value) {
        var _a2;
        if (this.add !== void 0) {
          var term = this.add;
          if (isArray(term)) {
            return __spreadArray(__spreadArray([], isArray(value) ? value : [], true), term, true).sort();
          }
          if (typeof term === "number")
            return (Number(value) || 0) + term;
          if (typeof term === "bigint") {
            try {
              return BigInt(value) + term;
            } catch (_b) {
              return BigInt(0) + term;
            }
          }
          throw new TypeError("Invalid term ".concat(term));
        }
        if (this.remove !== void 0) {
          var subtrahend_1 = this.remove;
          if (isArray(subtrahend_1)) {
            return isArray(value) ? value.filter(function(item) {
              return !subtrahend_1.includes(item);
            }).sort() : [];
          }
          if (typeof subtrahend_1 === "number")
            return Number(value) - subtrahend_1;
          if (typeof subtrahend_1 === "bigint") {
            try {
              return BigInt(value) - subtrahend_1;
            } catch (_c) {
              return BigInt(0) - subtrahend_1;
            }
          }
          throw new TypeError("Invalid subtrahend ".concat(subtrahend_1));
        }
        var prefixToReplace = (_a2 = this.replacePrefix) === null || _a2 === void 0 ? void 0 : _a2[0];
        if (prefixToReplace && typeof value === "string" && value.startsWith(prefixToReplace)) {
          return this.replacePrefix[1] + value.substring(prefixToReplace.length);
        }
        return value;
      };
      return PropModification2;
    })();
    var Collection = (function() {
      function Collection2() {
      }
      Collection2.prototype._read = function(fn, cb) {
        var ctx = this._ctx;
        return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
      };
      Collection2.prototype._write = function(fn) {
        var ctx = this._ctx;
        return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
      };
      Collection2.prototype._addAlgorithm = function(fn) {
        var ctx = this._ctx;
        ctx.algorithm = combine(ctx.algorithm, fn);
      };
      Collection2.prototype._iterate = function(fn, coreTrans) {
        return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
      };
      Collection2.prototype.clone = function(props2) {
        var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
        if (props2)
          extend(ctx, props2);
        rv._ctx = ctx;
        return rv;
      };
      Collection2.prototype.raw = function() {
        this._ctx.valueMapper = null;
        return this;
      };
      Collection2.prototype.each = function(fn) {
        var ctx = this._ctx;
        return this._read(function(trans) {
          return iter(ctx, fn, trans, ctx.table.core);
        });
      };
      Collection2.prototype.count = function(cb) {
        var _this = this;
        return this._read(function(trans) {
          var ctx = _this._ctx;
          var coreTable = ctx.table.core;
          if (isPlainKeyRange(ctx, true)) {
            return coreTable.count({
              trans,
              query: {
                index: getIndexOrStore(ctx, coreTable.schema),
                range: ctx.range
              }
            }).then(function(count2) {
              return Math.min(count2, ctx.limit);
            });
          } else {
            var count = 0;
            return iter(ctx, function() {
              ++count;
              return false;
            }, trans, coreTable).then(function() {
              return count;
            });
          }
        }).then(cb);
      };
      Collection2.prototype.sortBy = function(keyPath, cb) {
        var parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
        function getval(obj, i) {
          if (i)
            return getval(obj[parts[i]], i - 1);
          return obj[lastPart];
        }
        var order = this._ctx.dir === "next" ? 1 : -1;
        function sorter(a, b) {
          var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
          return aVal < bVal ? -order : aVal > bVal ? order : 0;
        }
        return this.toArray(function(a) {
          return a.sort(sorter);
        }).then(cb);
      };
      Collection2.prototype.toArray = function(cb) {
        var _this = this;
        return this._read(function(trans) {
          var ctx = _this._ctx;
          if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
            var valueMapper_1 = ctx.valueMapper;
            var index = getIndexOrStore(ctx, ctx.table.core.schema);
            return ctx.table.core.query({
              trans,
              limit: ctx.limit,
              values: true,
              query: {
                index,
                range: ctx.range
              }
            }).then(function(_a2) {
              var result = _a2.result;
              return valueMapper_1 ? result.map(valueMapper_1) : result;
            });
          } else {
            var a_1 = [];
            return iter(ctx, function(item) {
              return a_1.push(item);
            }, trans, ctx.table.core).then(function() {
              return a_1;
            });
          }
        }, cb);
      };
      Collection2.prototype.offset = function(offset) {
        var ctx = this._ctx;
        if (offset <= 0)
          return this;
        ctx.offset += offset;
        if (isPlainKeyRange(ctx)) {
          addReplayFilter(ctx, function() {
            var offsetLeft = offset;
            return function(cursor, advance) {
              if (offsetLeft === 0)
                return true;
              if (offsetLeft === 1) {
                --offsetLeft;
                return false;
              }
              advance(function() {
                cursor.advance(offsetLeft);
                offsetLeft = 0;
              });
              return false;
            };
          });
        } else {
          addReplayFilter(ctx, function() {
            var offsetLeft = offset;
            return function() {
              return --offsetLeft < 0;
            };
          });
        }
        return this;
      };
      Collection2.prototype.limit = function(numRows) {
        this._ctx.limit = Math.min(this._ctx.limit, numRows);
        addReplayFilter(this._ctx, function() {
          var rowsLeft = numRows;
          return function(cursor, advance, resolve) {
            if (--rowsLeft <= 0)
              advance(resolve);
            return rowsLeft >= 0;
          };
        }, true);
        return this;
      };
      Collection2.prototype.until = function(filterFunction, bIncludeStopEntry) {
        addFilter(this._ctx, function(cursor, advance, resolve) {
          if (filterFunction(cursor.value)) {
            advance(resolve);
            return bIncludeStopEntry;
          } else {
            return true;
          }
        });
        return this;
      };
      Collection2.prototype.first = function(cb) {
        return this.limit(1).toArray(function(a) {
          return a[0];
        }).then(cb);
      };
      Collection2.prototype.last = function(cb) {
        return this.reverse().first(cb);
      };
      Collection2.prototype.filter = function(filterFunction) {
        addFilter(this._ctx, function(cursor) {
          return filterFunction(cursor.value);
        });
        addMatchFilter(this._ctx, filterFunction);
        return this;
      };
      Collection2.prototype.and = function(filter) {
        return this.filter(filter);
      };
      Collection2.prototype.or = function(indexName) {
        return new this.db.WhereClause(this._ctx.table, indexName, this);
      };
      Collection2.prototype.reverse = function() {
        this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
        if (this._ondirectionchange)
          this._ondirectionchange(this._ctx.dir);
        return this;
      };
      Collection2.prototype.desc = function() {
        return this.reverse();
      };
      Collection2.prototype.eachKey = function(cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function(val, cursor) {
          cb(cursor.key, cursor);
        });
      };
      Collection2.prototype.eachUniqueKey = function(cb) {
        this._ctx.unique = "unique";
        return this.eachKey(cb);
      };
      Collection2.prototype.eachPrimaryKey = function(cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function(val, cursor) {
          cb(cursor.primaryKey, cursor);
        });
      };
      Collection2.prototype.keys = function(cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function(item, cursor) {
          a.push(cursor.key);
        }).then(function() {
          return a;
        }).then(cb);
      };
      Collection2.prototype.primaryKeys = function(cb) {
        var ctx = this._ctx;
        if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
          return this._read(function(trans) {
            var index = getIndexOrStore(ctx, ctx.table.core.schema);
            return ctx.table.core.query({
              trans,
              values: false,
              limit: ctx.limit,
              query: {
                index,
                range: ctx.range
              }
            });
          }).then(function(_a2) {
            var result = _a2.result;
            return result;
          }).then(cb);
        }
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function(item, cursor) {
          a.push(cursor.primaryKey);
        }).then(function() {
          return a;
        }).then(cb);
      };
      Collection2.prototype.uniqueKeys = function(cb) {
        this._ctx.unique = "unique";
        return this.keys(cb);
      };
      Collection2.prototype.firstKey = function(cb) {
        return this.limit(1).keys(function(a) {
          return a[0];
        }).then(cb);
      };
      Collection2.prototype.lastKey = function(cb) {
        return this.reverse().firstKey(cb);
      };
      Collection2.prototype.distinct = function() {
        var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
        if (!idx || !idx.multi)
          return this;
        var set = {};
        addFilter(this._ctx, function(cursor) {
          var strKey = cursor.primaryKey.toString();
          var found = hasOwn(set, strKey);
          set[strKey] = true;
          return !found;
        });
        return this;
      };
      Collection2.prototype.modify = function(changes) {
        var _this = this;
        var ctx = this._ctx;
        return this._write(function(trans) {
          var modifyer;
          if (typeof changes === "function") {
            modifyer = changes;
          } else {
            var keyPaths = keys(changes);
            var numKeys = keyPaths.length;
            modifyer = function(item) {
              var anythingModified = false;
              for (var i = 0; i < numKeys; ++i) {
                var keyPath = keyPaths[i];
                var val = changes[keyPath];
                var origVal = getByKeyPath(item, keyPath);
                if (val instanceof PropModification) {
                  setByKeyPath(item, keyPath, val.execute(origVal));
                  anythingModified = true;
                } else if (origVal !== val) {
                  setByKeyPath(item, keyPath, val);
                  anythingModified = true;
                }
              }
              return anythingModified;
            };
          }
          var coreTable = ctx.table.core;
          var _a2 = coreTable.schema.primaryKey, outbound = _a2.outbound, extractKey = _a2.extractKey;
          var limit = _this.db._options.modifyChunkSize || 200;
          var totalFailures = [];
          var successCount = 0;
          var failedKeys = [];
          var applyMutateResult = function(expectedCount, res) {
            var failures = res.failures, numFailures = res.numFailures;
            successCount += expectedCount - numFailures;
            for (var _i = 0, _a3 = keys(failures); _i < _a3.length; _i++) {
              var pos = _a3[_i];
              totalFailures.push(failures[pos]);
            }
          };
          return _this.clone().primaryKeys().then(function(keys2) {
            var criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || changes === deleteCallback) && {
              index: ctx.index,
              range: ctx.range
            };
            var nextChunk = function(offset) {
              var count = Math.min(limit, keys2.length - offset);
              return coreTable.getMany({
                trans,
                keys: keys2.slice(offset, offset + count),
                cache: "immutable"
              }).then(function(values) {
                var addValues = [];
                var putValues = [];
                var putKeys = outbound ? [] : null;
                var deleteKeys = [];
                for (var i = 0; i < count; ++i) {
                  var origValue = values[i];
                  var ctx_1 = {
                    value: deepClone(origValue),
                    primKey: keys2[offset + i]
                  };
                  if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                    if (ctx_1.value == null) {
                      deleteKeys.push(keys2[offset + i]);
                    } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                      deleteKeys.push(keys2[offset + i]);
                      addValues.push(ctx_1.value);
                    } else {
                      putValues.push(ctx_1.value);
                      if (outbound)
                        putKeys.push(keys2[offset + i]);
                    }
                  }
                }
                return Promise.resolve(addValues.length > 0 && coreTable.mutate({ trans, type: "add", values: addValues }).then(function(res) {
                  for (var pos in res.failures) {
                    deleteKeys.splice(parseInt(pos), 1);
                  }
                  applyMutateResult(addValues.length, res);
                })).then(function() {
                  return (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
                    trans,
                    type: "put",
                    keys: putKeys,
                    values: putValues,
                    criteria,
                    changeSpec: typeof changes !== "function" && changes,
                    isAdditionalChunk: offset > 0
                  }).then(function(res) {
                    return applyMutateResult(putValues.length, res);
                  });
                }).then(function() {
                  return (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
                    trans,
                    type: "delete",
                    keys: deleteKeys,
                    criteria,
                    isAdditionalChunk: offset > 0
                  }).then(function(res) {
                    return applyMutateResult(deleteKeys.length, res);
                  });
                }).then(function() {
                  return keys2.length > offset + count && nextChunk(offset + limit);
                });
              });
            };
            return nextChunk(0).then(function() {
              if (totalFailures.length > 0)
                throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
              return keys2.length;
            });
          });
        });
      };
      Collection2.prototype.delete = function() {
        var ctx = this._ctx, range = ctx.range;
        if (isPlainKeyRange(ctx) && (ctx.isPrimKey || range.type === 3)) {
          return this._write(function(trans) {
            var primaryKey = ctx.table.core.schema.primaryKey;
            var coreRange = range;
            return ctx.table.core.count({ trans, query: { index: primaryKey, range: coreRange } }).then(function(count) {
              return ctx.table.core.mutate({ trans, type: "deleteRange", range: coreRange }).then(function(_a2) {
                var failures = _a2.failures;
                _a2.lastResult;
                _a2.results;
                var numFailures = _a2.numFailures;
                if (numFailures)
                  throw new ModifyError("Could not delete some values", Object.keys(failures).map(function(pos) {
                    return failures[pos];
                  }), count - numFailures);
                return count - numFailures;
              });
            });
          });
        }
        return this.modify(deleteCallback);
      };
      return Collection2;
    })();
    var deleteCallback = function(value, ctx) {
      return ctx.value = null;
    };
    function createCollectionConstructor(db2) {
      return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
        this.db = db2;
        var keyRange = AnyRange, error = null;
        if (keyRangeGenerator)
          try {
            keyRange = keyRangeGenerator();
          } catch (ex) {
            error = ex;
          }
        var whereCtx = whereClause._ctx;
        var table = whereCtx.table;
        var readingHook = table.hook.reading.fire;
        this._ctx = {
          table,
          index: whereCtx.index,
          isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
          range: keyRange,
          keysOnly: false,
          dir: "next",
          unique: "",
          algorithm: null,
          filter: null,
          replayFilter: null,
          justLimit: true,
          isMatch: null,
          offset: 0,
          limit: Infinity,
          error,
          or: whereCtx.or,
          valueMapper: readingHook !== mirror ? readingHook : null
        };
      });
    }
    function simpleCompare(a, b) {
      return a < b ? -1 : a === b ? 0 : 1;
    }
    function simpleCompareReverse(a, b) {
      return a > b ? -1 : a === b ? 0 : 1;
    }
    function fail(collectionOrWhereClause, err, T) {
      var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
      collection._ctx.error = T ? new T(err) : new TypeError(err);
      return collection;
    }
    function emptyCollection(whereClause) {
      return new whereClause.Collection(whereClause, function() {
        return rangeEqual("");
      }).limit(0);
    }
    function upperFactory(dir) {
      return dir === "next" ? function(s) {
        return s.toUpperCase();
      } : function(s) {
        return s.toLowerCase();
      };
    }
    function lowerFactory(dir) {
      return dir === "next" ? function(s) {
        return s.toLowerCase();
      } : function(s) {
        return s.toUpperCase();
      };
    }
    function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp2, dir) {
      var length = Math.min(key.length, lowerNeedle.length);
      var llp = -1;
      for (var i = 0; i < length; ++i) {
        var lwrKeyChar = lowerKey[i];
        if (lwrKeyChar !== lowerNeedle[i]) {
          if (cmp2(key[i], upperNeedle[i]) < 0)
            return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
          if (cmp2(key[i], lowerNeedle[i]) < 0)
            return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
          if (llp >= 0)
            return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
          return null;
        }
        if (cmp2(key[i], lwrKeyChar) < 0)
          llp = i;
      }
      if (length < lowerNeedle.length && dir === "next")
        return key + upperNeedle.substr(key.length);
      if (length < key.length && dir === "prev")
        return key.substr(0, upperNeedle.length);
      return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
    }
    function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
      var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
      if (!needles.every(function(s) {
        return typeof s === "string";
      })) {
        return fail(whereClause, STRING_EXPECTED);
      }
      function initDirection(dir) {
        upper = upperFactory(dir);
        lower = lowerFactory(dir);
        compare = dir === "next" ? simpleCompare : simpleCompareReverse;
        var needleBounds = needles.map(function(needle) {
          return { lower: lower(needle), upper: upper(needle) };
        }).sort(function(a, b) {
          return compare(a.lower, b.lower);
        });
        upperNeedles = needleBounds.map(function(nb) {
          return nb.upper;
        });
        lowerNeedles = needleBounds.map(function(nb) {
          return nb.lower;
        });
        direction = dir;
        nextKeySuffix = dir === "next" ? "" : suffix;
      }
      initDirection("next");
      var c = new whereClause.Collection(whereClause, function() {
        return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
      });
      c._ondirectionchange = function(direction2) {
        initDirection(direction2);
      };
      var firstPossibleNeedle = 0;
      c._addAlgorithm(function(cursor, advance, resolve) {
        var key = cursor.key;
        if (typeof key !== "string")
          return false;
        var lowerKey = lower(key);
        if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
          return true;
        } else {
          var lowestPossibleCasing = null;
          for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
            var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
            if (casing === null && lowestPossibleCasing === null)
              firstPossibleNeedle = i + 1;
            else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
              lowestPossibleCasing = casing;
            }
          }
          if (lowestPossibleCasing !== null) {
            advance(function() {
              cursor.continue(lowestPossibleCasing + nextKeySuffix);
            });
          } else {
            advance(resolve);
          }
          return false;
        }
      });
      return c;
    }
    function createRange(lower, upper, lowerOpen, upperOpen) {
      return {
        type: 2,
        lower,
        upper,
        lowerOpen,
        upperOpen
      };
    }
    function rangeEqual(value) {
      return {
        type: 1,
        lower: value,
        upper: value
      };
    }
    var WhereClause = (function() {
      function WhereClause2() {
      }
      Object.defineProperty(WhereClause2.prototype, "Collection", {
        get: function() {
          return this._ctx.table.db.Collection;
        },
        enumerable: false,
        configurable: true
      });
      WhereClause2.prototype.between = function(lower, upper, includeLower, includeUpper) {
        includeLower = includeLower !== false;
        includeUpper = includeUpper === true;
        try {
          if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper))
            return emptyCollection(this);
          return new this.Collection(this, function() {
            return createRange(lower, upper, !includeLower, !includeUpper);
          });
        } catch (e) {
          return fail(this, INVALID_KEY_ARGUMENT);
        }
      };
      WhereClause2.prototype.equals = function(value) {
        if (value == null)
          return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function() {
          return rangeEqual(value);
        });
      };
      WhereClause2.prototype.above = function(value) {
        if (value == null)
          return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function() {
          return createRange(value, void 0, true);
        });
      };
      WhereClause2.prototype.aboveOrEqual = function(value) {
        if (value == null)
          return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function() {
          return createRange(value, void 0, false);
        });
      };
      WhereClause2.prototype.below = function(value) {
        if (value == null)
          return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function() {
          return createRange(void 0, value, false, true);
        });
      };
      WhereClause2.prototype.belowOrEqual = function(value) {
        if (value == null)
          return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function() {
          return createRange(void 0, value);
        });
      };
      WhereClause2.prototype.startsWith = function(str) {
        if (typeof str !== "string")
          return fail(this, STRING_EXPECTED);
        return this.between(str, str + maxString, true, true);
      };
      WhereClause2.prototype.startsWithIgnoreCase = function(str) {
        if (str === "")
          return this.startsWith(str);
        return addIgnoreCaseAlgorithm(this, function(x, a) {
          return x.indexOf(a[0]) === 0;
        }, [str], maxString);
      };
      WhereClause2.prototype.equalsIgnoreCase = function(str) {
        return addIgnoreCaseAlgorithm(this, function(x, a) {
          return x === a[0];
        }, [str], "");
      };
      WhereClause2.prototype.anyOfIgnoreCase = function() {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
          return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function(x, a) {
          return a.indexOf(x) !== -1;
        }, set, "");
      };
      WhereClause2.prototype.startsWithAnyOfIgnoreCase = function() {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
          return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function(x, a) {
          return a.some(function(n) {
            return x.indexOf(n) === 0;
          });
        }, set, maxString);
      };
      WhereClause2.prototype.anyOf = function() {
        var _this = this;
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        var compare = this._cmp;
        try {
          set.sort(compare);
        } catch (e) {
          return fail(this, INVALID_KEY_ARGUMENT);
        }
        if (set.length === 0)
          return emptyCollection(this);
        var c = new this.Collection(this, function() {
          return createRange(set[0], set[set.length - 1]);
        });
        c._ondirectionchange = function(direction) {
          compare = direction === "next" ? _this._ascending : _this._descending;
          set.sort(compare);
        };
        var i = 0;
        c._addAlgorithm(function(cursor, advance, resolve) {
          var key = cursor.key;
          while (compare(key, set[i]) > 0) {
            ++i;
            if (i === set.length) {
              advance(resolve);
              return false;
            }
          }
          if (compare(key, set[i]) === 0) {
            return true;
          } else {
            advance(function() {
              cursor.continue(set[i]);
            });
            return false;
          }
        });
        return c;
      };
      WhereClause2.prototype.notEqual = function(value) {
        return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
      };
      WhereClause2.prototype.noneOf = function() {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
          return new this.Collection(this);
        try {
          set.sort(this._ascending);
        } catch (e) {
          return fail(this, INVALID_KEY_ARGUMENT);
        }
        var ranges = set.reduce(function(res, val) {
          return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
        }, null);
        ranges.push([set[set.length - 1], this.db._maxKey]);
        return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
      };
      WhereClause2.prototype.inAnyRange = function(ranges, options) {
        var _this = this;
        var cmp2 = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
        if (ranges.length === 0)
          return emptyCollection(this);
        if (!ranges.every(function(range) {
          return range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0;
        })) {
          return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
        }
        var includeLowers = !options || options.includeLowers !== false;
        var includeUppers = options && options.includeUppers === true;
        function addRange2(ranges2, newRange) {
          var i = 0, l = ranges2.length;
          for (; i < l; ++i) {
            var range = ranges2[i];
            if (cmp2(newRange[0], range[1]) < 0 && cmp2(newRange[1], range[0]) > 0) {
              range[0] = min(range[0], newRange[0]);
              range[1] = max(range[1], newRange[1]);
              break;
            }
          }
          if (i === l)
            ranges2.push(newRange);
          return ranges2;
        }
        var sortDirection = ascending;
        function rangeSorter(a, b) {
          return sortDirection(a[0], b[0]);
        }
        var set;
        try {
          set = ranges.reduce(addRange2, []);
          set.sort(rangeSorter);
        } catch (ex) {
          return fail(this, INVALID_KEY_ARGUMENT);
        }
        var rangePos = 0;
        var keyIsBeyondCurrentEntry = includeUppers ? function(key) {
          return ascending(key, set[rangePos][1]) > 0;
        } : function(key) {
          return ascending(key, set[rangePos][1]) >= 0;
        };
        var keyIsBeforeCurrentEntry = includeLowers ? function(key) {
          return descending(key, set[rangePos][0]) > 0;
        } : function(key) {
          return descending(key, set[rangePos][0]) >= 0;
        };
        function keyWithinCurrentRange(key) {
          return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
        }
        var checkKey = keyIsBeyondCurrentEntry;
        var c = new this.Collection(this, function() {
          return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
        });
        c._ondirectionchange = function(direction) {
          if (direction === "next") {
            checkKey = keyIsBeyondCurrentEntry;
            sortDirection = ascending;
          } else {
            checkKey = keyIsBeforeCurrentEntry;
            sortDirection = descending;
          }
          set.sort(rangeSorter);
        };
        c._addAlgorithm(function(cursor, advance, resolve) {
          var key = cursor.key;
          while (checkKey(key)) {
            ++rangePos;
            if (rangePos === set.length) {
              advance(resolve);
              return false;
            }
          }
          if (keyWithinCurrentRange(key)) {
            return true;
          } else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
            return false;
          } else {
            advance(function() {
              if (sortDirection === ascending)
                cursor.continue(set[rangePos][0]);
              else
                cursor.continue(set[rangePos][1]);
            });
            return false;
          }
        });
        return c;
      };
      WhereClause2.prototype.startsWithAnyOf = function() {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (!set.every(function(s) {
          return typeof s === "string";
        })) {
          return fail(this, "startsWithAnyOf() only works with strings");
        }
        if (set.length === 0)
          return emptyCollection(this);
        return this.inAnyRange(set.map(function(str) {
          return [str, str + maxString];
        }));
      };
      return WhereClause2;
    })();
    function createWhereClauseConstructor(db2) {
      return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
        this.db = db2;
        this._ctx = {
          table,
          index: index === ":id" ? null : index,
          or: orCollection
        };
        this._cmp = this._ascending = cmp;
        this._descending = function(a, b) {
          return cmp(b, a);
        };
        this._max = function(a, b) {
          return cmp(a, b) > 0 ? a : b;
        };
        this._min = function(a, b) {
          return cmp(a, b) < 0 ? a : b;
        };
        this._IDBKeyRange = db2._deps.IDBKeyRange;
        if (!this._IDBKeyRange)
          throw new exceptions.MissingAPI();
      });
    }
    function eventRejectHandler(reject) {
      return wrap(function(event) {
        preventDefault(event);
        reject(event.target.error);
        return false;
      });
    }
    function preventDefault(event) {
      if (event.stopPropagation)
        event.stopPropagation();
      if (event.preventDefault)
        event.preventDefault();
    }
    var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
    var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
    var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
    var Transaction = (function() {
      function Transaction2() {
      }
      Transaction2.prototype._lock = function() {
        assert(!PSD.global);
        ++this._reculock;
        if (this._reculock === 1 && !PSD.global)
          PSD.lockOwnerFor = this;
        return this;
      };
      Transaction2.prototype._unlock = function() {
        assert(!PSD.global);
        if (--this._reculock === 0) {
          if (!PSD.global)
            PSD.lockOwnerFor = null;
          while (this._blockedFuncs.length > 0 && !this._locked()) {
            var fnAndPSD = this._blockedFuncs.shift();
            try {
              usePSD(fnAndPSD[1], fnAndPSD[0]);
            } catch (e) {
            }
          }
        }
        return this;
      };
      Transaction2.prototype._locked = function() {
        return this._reculock && PSD.lockOwnerFor !== this;
      };
      Transaction2.prototype.create = function(idbtrans) {
        var _this = this;
        if (!this.mode)
          return this;
        var idbdb = this.db.idbdb;
        var dbOpenError = this.db._state.dbOpenError;
        assert(!this.idbtrans);
        if (!idbtrans && !idbdb) {
          switch (dbOpenError && dbOpenError.name) {
            case "DatabaseClosedError":
              throw new exceptions.DatabaseClosed(dbOpenError);
            case "MissingAPIError":
              throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
            default:
              throw new exceptions.OpenFailed(dbOpenError);
          }
        }
        if (!this.active)
          throw new exceptions.TransactionInactive();
        assert(this._completion._state === null);
        idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : idbdb.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }));
        idbtrans.onerror = wrap(function(ev) {
          preventDefault(ev);
          _this._reject(idbtrans.error);
        });
        idbtrans.onabort = wrap(function(ev) {
          preventDefault(ev);
          _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
          _this.active = false;
          _this.on("abort").fire(ev);
        });
        idbtrans.oncomplete = wrap(function() {
          _this.active = false;
          _this._resolve();
          if ("mutatedParts" in idbtrans) {
            globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
          }
        });
        return this;
      };
      Transaction2.prototype._promise = function(mode, fn, bWriteLock) {
        var _this = this;
        if (mode === "readwrite" && this.mode !== "readwrite")
          return rejection(new exceptions.ReadOnly("Transaction is readonly"));
        if (!this.active)
          return rejection(new exceptions.TransactionInactive());
        if (this._locked()) {
          return new DexiePromise(function(resolve, reject) {
            _this._blockedFuncs.push([function() {
              _this._promise(mode, fn, bWriteLock).then(resolve, reject);
            }, PSD]);
          });
        } else if (bWriteLock) {
          return newScope(function() {
            var p2 = new DexiePromise(function(resolve, reject) {
              _this._lock();
              var rv = fn(resolve, reject, _this);
              if (rv && rv.then)
                rv.then(resolve, reject);
            });
            p2.finally(function() {
              return _this._unlock();
            });
            p2._lib = true;
            return p2;
          });
        } else {
          var p = new DexiePromise(function(resolve, reject) {
            var rv = fn(resolve, reject, _this);
            if (rv && rv.then)
              rv.then(resolve, reject);
          });
          p._lib = true;
          return p;
        }
      };
      Transaction2.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      };
      Transaction2.prototype.waitFor = function(promiseLike) {
        var root = this._root();
        var promise = DexiePromise.resolve(promiseLike);
        if (root._waitingFor) {
          root._waitingFor = root._waitingFor.then(function() {
            return promise;
          });
        } else {
          root._waitingFor = promise;
          root._waitingQueue = [];
          var store = root.idbtrans.objectStore(root.storeNames[0]);
          (function spin() {
            ++root._spinCount;
            while (root._waitingQueue.length)
              root._waitingQueue.shift()();
            if (root._waitingFor)
              store.get(-Infinity).onsuccess = spin;
          })();
        }
        var currentWaitPromise = root._waitingFor;
        return new DexiePromise(function(resolve, reject) {
          promise.then(function(res) {
            return root._waitingQueue.push(wrap(resolve.bind(null, res)));
          }, function(err) {
            return root._waitingQueue.push(wrap(reject.bind(null, err)));
          }).finally(function() {
            if (root._waitingFor === currentWaitPromise) {
              root._waitingFor = null;
            }
          });
        });
      };
      Transaction2.prototype.abort = function() {
        if (this.active) {
          this.active = false;
          if (this.idbtrans)
            this.idbtrans.abort();
          this._reject(new exceptions.Abort());
        }
      };
      Transaction2.prototype.table = function(tableName) {
        var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
        if (hasOwn(memoizedTables, tableName))
          return memoizedTables[tableName];
        var tableSchema = this.schema[tableName];
        if (!tableSchema) {
          throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
        }
        var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
        transactionBoundTable.core = this.db.core.table(tableName);
        memoizedTables[tableName] = transactionBoundTable;
        return transactionBoundTable;
      };
      return Transaction2;
    })();
    function createTransactionConstructor(db2) {
      return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
        var _this = this;
        this.db = db2;
        this.mode = mode;
        this.storeNames = storeNames;
        this.schema = dbschema;
        this.chromeTransactionDurability = chromeTransactionDurability;
        this.idbtrans = null;
        this.on = Events(this, "complete", "error", "abort");
        this.parent = parent || null;
        this.active = true;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._resolve = null;
        this._reject = null;
        this._waitingFor = null;
        this._waitingQueue = null;
        this._spinCount = 0;
        this._completion = new DexiePromise(function(resolve, reject) {
          _this._resolve = resolve;
          _this._reject = reject;
        });
        this._completion.then(function() {
          _this.active = false;
          _this.on.complete.fire();
        }, function(e) {
          var wasActive = _this.active;
          _this.active = false;
          _this.on.error.fire(e);
          _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
          return rejection(e);
        });
      });
    }
    function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
      return {
        name,
        keyPath,
        unique,
        multi,
        auto,
        compound,
        src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
      };
    }
    function nameFromKeyPath(keyPath) {
      return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
    }
    function createTableSchema(name, primKey, indexes2) {
      return {
        name,
        primKey,
        indexes: indexes2,
        mappedClass: null,
        idxByName: arrayToObject(indexes2, function(index) {
          return [index.name, index];
        })
      };
    }
    function safariMultiStoreFix(storeNames) {
      return storeNames.length === 1 ? storeNames[0] : storeNames;
    }
    var getMaxKey = function(IdbKeyRange) {
      try {
        IdbKeyRange.only([[]]);
        getMaxKey = function() {
          return [[]];
        };
        return [[]];
      } catch (e) {
        getMaxKey = function() {
          return maxString;
        };
        return maxString;
      }
    };
    function getKeyExtractor(keyPath) {
      if (keyPath == null) {
        return function() {
          return void 0;
        };
      } else if (typeof keyPath === "string") {
        return getSinglePathKeyExtractor(keyPath);
      } else {
        return function(obj) {
          return getByKeyPath(obj, keyPath);
        };
      }
    }
    function getSinglePathKeyExtractor(keyPath) {
      var split = keyPath.split(".");
      if (split.length === 1) {
        return function(obj) {
          return obj[keyPath];
        };
      } else {
        return function(obj) {
          return getByKeyPath(obj, keyPath);
        };
      }
    }
    function arrayify(arrayLike) {
      return [].slice.call(arrayLike);
    }
    var _id_counter = 0;
    function getKeyPathAlias(keyPath) {
      return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : "[".concat(keyPath.join("+"), "]");
    }
    function createDBCore(db2, IdbKeyRange, tmpTrans) {
      function extractSchema(db3, trans) {
        var tables2 = arrayify(db3.objectStoreNames);
        return {
          schema: {
            name: db3.name,
            tables: tables2.map(function(table) {
              return trans.objectStore(table);
            }).map(function(store) {
              var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
              var compound = isArray(keyPath);
              var outbound = keyPath == null;
              var indexByKeyPath = {};
              var result = {
                name: store.name,
                primaryKey: {
                  name: null,
                  isPrimaryKey: true,
                  outbound,
                  compound,
                  keyPath,
                  autoIncrement,
                  unique: true,
                  extractKey: getKeyExtractor(keyPath)
                },
                indexes: arrayify(store.indexNames).map(function(indexName) {
                  return store.index(indexName);
                }).map(function(index) {
                  var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath2 = index.keyPath;
                  var compound2 = isArray(keyPath2);
                  var result2 = {
                    name,
                    compound: compound2,
                    keyPath: keyPath2,
                    unique,
                    multiEntry,
                    extractKey: getKeyExtractor(keyPath2)
                  };
                  indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
                  return result2;
                }),
                getIndexByKeyPath: function(keyPath2) {
                  return indexByKeyPath[getKeyPathAlias(keyPath2)];
                }
              };
              indexByKeyPath[":id"] = result.primaryKey;
              if (keyPath != null) {
                indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
              }
              return result;
            })
          },
          hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
        };
      }
      function makeIDBKeyRange(range) {
        if (range.type === 3)
          return null;
        if (range.type === 4)
          throw new Error("Cannot convert never type to IDBKeyRange");
        var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
        var idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
        return idbRange;
      }
      function createDbCoreTable(tableSchema) {
        var tableName = tableSchema.name;
        function mutate(_a3) {
          var trans = _a3.trans, type2 = _a3.type, keys2 = _a3.keys, values = _a3.values, range = _a3.range;
          return new Promise(function(resolve, reject) {
            resolve = wrap(resolve);
            var store = trans.objectStore(tableName);
            var outbound = store.keyPath == null;
            var isAddOrPut = type2 === "put" || type2 === "add";
            if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange")
              throw new Error("Invalid operation type: " + type2);
            var length = (keys2 || values || { length: 1 }).length;
            if (keys2 && values && keys2.length !== values.length) {
              throw new Error("Given keys array must have same length as given values array.");
            }
            if (length === 0)
              return resolve({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            var req;
            var reqs = [];
            var failures = [];
            var numFailures = 0;
            var errorHandler = function(event) {
              ++numFailures;
              preventDefault(event);
            };
            if (type2 === "deleteRange") {
              if (range.type === 4)
                return resolve({ numFailures, failures, results: [], lastResult: void 0 });
              if (range.type === 3)
                reqs.push(req = store.clear());
              else
                reqs.push(req = store.delete(makeIDBKeyRange(range)));
            } else {
              var _a4 = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null], args1 = _a4[0], args2 = _a4[1];
              if (isAddOrPut) {
                for (var i = 0; i < length; ++i) {
                  reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
                  req.onerror = errorHandler;
                }
              } else {
                for (var i = 0; i < length; ++i) {
                  reqs.push(req = store[type2](args1[i]));
                  req.onerror = errorHandler;
                }
              }
            }
            var done = function(event) {
              var lastResult = event.target.result;
              reqs.forEach(function(req2, i2) {
                return req2.error != null && (failures[i2] = req2.error);
              });
              resolve({
                numFailures,
                failures,
                results: type2 === "delete" ? keys2 : reqs.map(function(req2) {
                  return req2.result;
                }),
                lastResult
              });
            };
            req.onerror = function(event) {
              errorHandler(event);
              done(event);
            };
            req.onsuccess = done;
          });
        }
        function openCursor2(_a3) {
          var trans = _a3.trans, values = _a3.values, query2 = _a3.query, reverse = _a3.reverse, unique = _a3.unique;
          return new Promise(function(resolve, reject) {
            resolve = wrap(resolve);
            var index = query2.index, range = query2.range;
            var store = trans.objectStore(tableName);
            var source = index.isPrimaryKey ? store : store.index(index.name);
            var direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
            var req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
            req.onerror = eventRejectHandler(reject);
            req.onsuccess = wrap(function(ev) {
              var cursor = req.result;
              if (!cursor) {
                resolve(null);
                return;
              }
              cursor.___id = ++_id_counter;
              cursor.done = false;
              var _cursorContinue = cursor.continue.bind(cursor);
              var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
              if (_cursorContinuePrimaryKey)
                _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
              var _cursorAdvance = cursor.advance.bind(cursor);
              var doThrowCursorIsNotStarted = function() {
                throw new Error("Cursor not started");
              };
              var doThrowCursorIsStopped = function() {
                throw new Error("Cursor not stopped");
              };
              cursor.trans = trans;
              cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
              cursor.fail = wrap(reject);
              cursor.next = function() {
                var _this = this;
                var gotOne = 1;
                return this.start(function() {
                  return gotOne-- ? _this.continue() : _this.stop();
                }).then(function() {
                  return _this;
                });
              };
              cursor.start = function(callback) {
                var iterationPromise = new Promise(function(resolveIteration, rejectIteration) {
                  resolveIteration = wrap(resolveIteration);
                  req.onerror = eventRejectHandler(rejectIteration);
                  cursor.fail = rejectIteration;
                  cursor.stop = function(value) {
                    cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                    resolveIteration(value);
                  };
                });
                var guardedCallback = function() {
                  if (req.result) {
                    try {
                      callback();
                    } catch (err) {
                      cursor.fail(err);
                    }
                  } else {
                    cursor.done = true;
                    cursor.start = function() {
                      throw new Error("Cursor behind last entry");
                    };
                    cursor.stop();
                  }
                };
                req.onsuccess = wrap(function(ev2) {
                  req.onsuccess = guardedCallback;
                  guardedCallback();
                });
                cursor.continue = _cursorContinue;
                cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                cursor.advance = _cursorAdvance;
                guardedCallback();
                return iterationPromise;
              };
              resolve(cursor);
            }, reject);
          });
        }
        function query(hasGetAll2) {
          return function(request) {
            return new Promise(function(resolve, reject) {
              resolve = wrap(resolve);
              var trans = request.trans, values = request.values, limit = request.limit, query2 = request.query;
              var nonInfinitLimit = limit === Infinity ? void 0 : limit;
              var index = query2.index, range = query2.range;
              var store = trans.objectStore(tableName);
              var source = index.isPrimaryKey ? store : store.index(index.name);
              var idbKeyRange = makeIDBKeyRange(range);
              if (limit === 0)
                return resolve({ result: [] });
              if (hasGetAll2) {
                var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
                req.onsuccess = function(event) {
                  return resolve({ result: event.target.result });
                };
                req.onerror = eventRejectHandler(reject);
              } else {
                var count_1 = 0;
                var req_1 = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
                var result_1 = [];
                req_1.onsuccess = function(event) {
                  var cursor = req_1.result;
                  if (!cursor)
                    return resolve({ result: result_1 });
                  result_1.push(values ? cursor.value : cursor.primaryKey);
                  if (++count_1 === limit)
                    return resolve({ result: result_1 });
                  cursor.continue();
                };
                req_1.onerror = eventRejectHandler(reject);
              }
            });
          };
        }
        return {
          name: tableName,
          schema: tableSchema,
          mutate,
          getMany: function(_a3) {
            var trans = _a3.trans, keys2 = _a3.keys;
            return new Promise(function(resolve, reject) {
              resolve = wrap(resolve);
              var store = trans.objectStore(tableName);
              var length = keys2.length;
              var result = new Array(length);
              var keyCount = 0;
              var callbackCount = 0;
              var req;
              var successHandler = function(event) {
                var req2 = event.target;
                if ((result[req2._pos] = req2.result) != null)
                  ;
                if (++callbackCount === keyCount)
                  resolve(result);
              };
              var errorHandler = eventRejectHandler(reject);
              for (var i = 0; i < length; ++i) {
                var key = keys2[i];
                if (key != null) {
                  req = store.get(keys2[i]);
                  req._pos = i;
                  req.onsuccess = successHandler;
                  req.onerror = errorHandler;
                  ++keyCount;
                }
              }
              if (keyCount === 0)
                resolve(result);
            });
          },
          get: function(_a3) {
            var trans = _a3.trans, key = _a3.key;
            return new Promise(function(resolve, reject) {
              resolve = wrap(resolve);
              var store = trans.objectStore(tableName);
              var req = store.get(key);
              req.onsuccess = function(event) {
                return resolve(event.target.result);
              };
              req.onerror = eventRejectHandler(reject);
            });
          },
          query: query(hasGetAll),
          openCursor: openCursor2,
          count: function(_a3) {
            var query2 = _a3.query, trans = _a3.trans;
            var index = query2.index, range = query2.range;
            return new Promise(function(resolve, reject) {
              var store = trans.objectStore(tableName);
              var source = index.isPrimaryKey ? store : store.index(index.name);
              var idbKeyRange = makeIDBKeyRange(range);
              var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
              req.onsuccess = wrap(function(ev) {
                return resolve(ev.target.result);
              });
              req.onerror = eventRejectHandler(reject);
            });
          }
        };
      }
      var _a2 = extractSchema(db2, tmpTrans), schema = _a2.schema, hasGetAll = _a2.hasGetAll;
      var tables = schema.tables.map(function(tableSchema) {
        return createDbCoreTable(tableSchema);
      });
      var tableMap = {};
      tables.forEach(function(table) {
        return tableMap[table.name] = table;
      });
      return {
        stack: "dbcore",
        transaction: db2.transaction.bind(db2),
        table: function(name) {
          var result = tableMap[name];
          if (!result)
            throw new Error("Table '".concat(name, "' not found"));
          return tableMap[name];
        },
        MIN_KEY: -Infinity,
        MAX_KEY: getMaxKey(IdbKeyRange),
        schema
      };
    }
    function createMiddlewareStack(stackImpl, middlewares) {
      return middlewares.reduce(function(down, _a2) {
        var create = _a2.create;
        return __assign(__assign({}, down), create(down));
      }, stackImpl);
    }
    function createMiddlewareStacks(middlewares, idbdb, _a2, tmpTrans) {
      var IDBKeyRange = _a2.IDBKeyRange;
      _a2.indexedDB;
      var dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
      return {
        dbcore
      };
    }
    function generateMiddlewareStacks(db2, tmpTrans) {
      var idbdb = tmpTrans.db;
      var stacks = createMiddlewareStacks(db2._middlewares, idbdb, db2._deps, tmpTrans);
      db2.core = stacks.dbcore;
      db2.tables.forEach(function(table) {
        var tableName = table.name;
        if (db2.core.schema.tables.some(function(tbl) {
          return tbl.name === tableName;
        })) {
          table.core = db2.core.table(tableName);
          if (db2[tableName] instanceof db2.Table) {
            db2[tableName].core = table.core;
          }
        }
      });
    }
    function setApiOnPlace(db2, objs, tableNames, dbschema) {
      tableNames.forEach(function(tableName) {
        var schema = dbschema[tableName];
        objs.forEach(function(obj) {
          var propDesc = getPropertyDescriptor(obj, tableName);
          if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
            if (obj === db2.Transaction.prototype || obj instanceof db2.Transaction) {
              setProp(obj, tableName, {
                get: function() {
                  return this.table(tableName);
                },
                set: function(value) {
                  defineProperty(this, tableName, { value, writable: true, configurable: true, enumerable: true });
                }
              });
            } else {
              obj[tableName] = new db2.Table(tableName, schema);
            }
          }
        });
      });
    }
    function removeTablesApi(db2, objs) {
      objs.forEach(function(obj) {
        for (var key in obj) {
          if (obj[key] instanceof db2.Table)
            delete obj[key];
        }
      });
    }
    function lowerVersionFirst(a, b) {
      return a._cfg.version - b._cfg.version;
    }
    function runUpgraders(db2, oldVersion, idbUpgradeTrans, reject) {
      var globalSchema = db2._dbSchema;
      if (idbUpgradeTrans.objectStoreNames.contains("$meta") && !globalSchema.$meta) {
        globalSchema.$meta = createTableSchema("$meta", parseIndexSyntax("")[0], []);
        db2._storeNames.push("$meta");
      }
      var trans = db2._createTransaction("readwrite", db2._storeNames, globalSchema);
      trans.create(idbUpgradeTrans);
      trans._completion.catch(reject);
      var rejectTransaction = trans._reject.bind(trans);
      var transless = PSD.transless || PSD;
      newScope(function() {
        PSD.trans = trans;
        PSD.transless = transless;
        if (oldVersion === 0) {
          keys(globalSchema).forEach(function(tableName) {
            createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
          });
          generateMiddlewareStacks(db2, idbUpgradeTrans);
          DexiePromise.follow(function() {
            return db2.on.populate.fire(trans);
          }).catch(rejectTransaction);
        } else {
          generateMiddlewareStacks(db2, idbUpgradeTrans);
          return getExistingVersion(db2, trans, oldVersion).then(function(oldVersion2) {
            return updateTablesAndIndexes(db2, oldVersion2, trans, idbUpgradeTrans);
          }).catch(rejectTransaction);
        }
      });
    }
    function patchCurrentVersion(db2, idbUpgradeTrans) {
      createMissingTables(db2._dbSchema, idbUpgradeTrans);
      if (idbUpgradeTrans.db.version % 10 === 0 && !idbUpgradeTrans.objectStoreNames.contains("$meta")) {
        idbUpgradeTrans.db.createObjectStore("$meta").add(Math.ceil(idbUpgradeTrans.db.version / 10 - 1), "version");
      }
      var globalSchema = buildGlobalSchema(db2, db2.idbdb, idbUpgradeTrans);
      adjustToExistingIndexNames(db2, db2._dbSchema, idbUpgradeTrans);
      var diff = getSchemaDiff(globalSchema, db2._dbSchema);
      var _loop_1 = function(tableChange2) {
        if (tableChange2.change.length || tableChange2.recreate) {
          console.warn("Unable to patch indexes of table ".concat(tableChange2.name, " because it has changes on the type of index or primary key."));
          return { value: void 0 };
        }
        var store = idbUpgradeTrans.objectStore(tableChange2.name);
        tableChange2.add.forEach(function(idx) {
          if (debug)
            console.debug("Dexie upgrade patch: Creating missing index ".concat(tableChange2.name, ".").concat(idx.src));
          addIndex(store, idx);
        });
      };
      for (var _i = 0, _a2 = diff.change; _i < _a2.length; _i++) {
        var tableChange = _a2[_i];
        var state_1 = _loop_1(tableChange);
        if (typeof state_1 === "object")
          return state_1.value;
      }
    }
    function getExistingVersion(db2, trans, oldVersion) {
      if (trans.storeNames.includes("$meta")) {
        return trans.table("$meta").get("version").then(function(metaVersion) {
          return metaVersion != null ? metaVersion : oldVersion;
        });
      } else {
        return DexiePromise.resolve(oldVersion);
      }
    }
    function updateTablesAndIndexes(db2, oldVersion, trans, idbUpgradeTrans) {
      var queue = [];
      var versions = db2._versions;
      var globalSchema = db2._dbSchema = buildGlobalSchema(db2, db2.idbdb, idbUpgradeTrans);
      var versToRun = versions.filter(function(v) {
        return v._cfg.version >= oldVersion;
      });
      if (versToRun.length === 0) {
        return DexiePromise.resolve();
      }
      versToRun.forEach(function(version) {
        queue.push(function() {
          var oldSchema = globalSchema;
          var newSchema = version._cfg.dbschema;
          adjustToExistingIndexNames(db2, oldSchema, idbUpgradeTrans);
          adjustToExistingIndexNames(db2, newSchema, idbUpgradeTrans);
          globalSchema = db2._dbSchema = newSchema;
          var diff = getSchemaDiff(oldSchema, newSchema);
          diff.add.forEach(function(tuple) {
            createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
          });
          diff.change.forEach(function(change) {
            if (change.recreate) {
              throw new exceptions.Upgrade("Not yet support for changing primary key");
            } else {
              var store_1 = idbUpgradeTrans.objectStore(change.name);
              change.add.forEach(function(idx) {
                return addIndex(store_1, idx);
              });
              change.change.forEach(function(idx) {
                store_1.deleteIndex(idx.name);
                addIndex(store_1, idx);
              });
              change.del.forEach(function(idxName) {
                return store_1.deleteIndex(idxName);
              });
            }
          });
          var contentUpgrade = version._cfg.contentUpgrade;
          if (contentUpgrade && version._cfg.version > oldVersion) {
            generateMiddlewareStacks(db2, idbUpgradeTrans);
            trans._memoizedTables = {};
            var upgradeSchema_1 = shallowClone(newSchema);
            diff.del.forEach(function(table) {
              upgradeSchema_1[table] = oldSchema[table];
            });
            removeTablesApi(db2, [db2.Transaction.prototype]);
            setApiOnPlace(db2, [db2.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
            trans.schema = upgradeSchema_1;
            var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
            if (contentUpgradeIsAsync_1) {
              incrementExpectedAwaits();
            }
            var returnValue_1;
            var promiseFollowed = DexiePromise.follow(function() {
              returnValue_1 = contentUpgrade(trans);
              if (returnValue_1) {
                if (contentUpgradeIsAsync_1) {
                  var decrementor = decrementExpectedAwaits.bind(null, null);
                  returnValue_1.then(decrementor, decrementor);
                }
              }
            });
            return returnValue_1 && typeof returnValue_1.then === "function" ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function() {
              return returnValue_1;
            });
          }
        });
        queue.push(function(idbtrans) {
          var newSchema = version._cfg.dbschema;
          deleteRemovedTables(newSchema, idbtrans);
          removeTablesApi(db2, [db2.Transaction.prototype]);
          setApiOnPlace(db2, [db2.Transaction.prototype], db2._storeNames, db2._dbSchema);
          trans.schema = db2._dbSchema;
        });
        queue.push(function(idbtrans) {
          if (db2.idbdb.objectStoreNames.contains("$meta")) {
            if (Math.ceil(db2.idbdb.version / 10) === version._cfg.version) {
              db2.idbdb.deleteObjectStore("$meta");
              delete db2._dbSchema.$meta;
              db2._storeNames = db2._storeNames.filter(function(name) {
                return name !== "$meta";
              });
            } else {
              idbtrans.objectStore("$meta").put(version._cfg.version, "version");
            }
          }
        });
      });
      function runQueue() {
        return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
      }
      return runQueue().then(function() {
        createMissingTables(globalSchema, idbUpgradeTrans);
      });
    }
    function getSchemaDiff(oldSchema, newSchema) {
      var diff = {
        del: [],
        add: [],
        change: []
      };
      var table;
      for (table in oldSchema) {
        if (!newSchema[table])
          diff.del.push(table);
      }
      for (table in newSchema) {
        var oldDef = oldSchema[table], newDef = newSchema[table];
        if (!oldDef) {
          diff.add.push([table, newDef]);
        } else {
          var change = {
            name: table,
            def: newDef,
            recreate: false,
            del: [],
            add: [],
            change: []
          };
          if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto) {
            change.recreate = true;
            diff.change.push(change);
          } else {
            var oldIndexes = oldDef.idxByName;
            var newIndexes = newDef.idxByName;
            var idxName = void 0;
            for (idxName in oldIndexes) {
              if (!newIndexes[idxName])
                change.del.push(idxName);
            }
            for (idxName in newIndexes) {
              var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
              if (!oldIdx)
                change.add.push(newIdx);
              else if (oldIdx.src !== newIdx.src)
                change.change.push(newIdx);
            }
            if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
              diff.change.push(change);
            }
          }
        }
      }
      return diff;
    }
    function createTable(idbtrans, tableName, primKey, indexes2) {
      var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
      indexes2.forEach(function(idx) {
        return addIndex(store, idx);
      });
      return store;
    }
    function createMissingTables(newSchema, idbtrans) {
      keys(newSchema).forEach(function(tableName) {
        if (!idbtrans.db.objectStoreNames.contains(tableName)) {
          if (debug)
            console.debug("Dexie: Creating missing table", tableName);
          createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
        }
      });
    }
    function deleteRemovedTables(newSchema, idbtrans) {
      [].slice.call(idbtrans.db.objectStoreNames).forEach(function(storeName) {
        return newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName);
      });
    }
    function addIndex(store, idx) {
      store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
    }
    function buildGlobalSchema(db2, idbdb, tmpTrans) {
      var globalSchema = {};
      var dbStoreNames = slice(idbdb.objectStoreNames, 0);
      dbStoreNames.forEach(function(storeName) {
        var store = tmpTrans.objectStore(storeName);
        var keyPath = store.keyPath;
        var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", true, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
        var indexes2 = [];
        for (var j = 0; j < store.indexNames.length; ++j) {
          var idbindex = store.index(store.indexNames[j]);
          keyPath = idbindex.keyPath;
          var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
          indexes2.push(index);
        }
        globalSchema[storeName] = createTableSchema(storeName, primKey, indexes2);
      });
      return globalSchema;
    }
    function readGlobalSchema(db2, idbdb, tmpTrans) {
      db2.verno = idbdb.version / 10;
      var globalSchema = db2._dbSchema = buildGlobalSchema(db2, idbdb, tmpTrans);
      db2._storeNames = slice(idbdb.objectStoreNames, 0);
      setApiOnPlace(db2, [db2._allTables], keys(globalSchema), globalSchema);
    }
    function verifyInstalledSchema(db2, tmpTrans) {
      var installedSchema = buildGlobalSchema(db2, db2.idbdb, tmpTrans);
      var diff = getSchemaDiff(installedSchema, db2._dbSchema);
      return !(diff.add.length || diff.change.some(function(ch) {
        return ch.add.length || ch.change.length;
      }));
    }
    function adjustToExistingIndexNames(db2, schema, idbtrans) {
      var storeNames = idbtrans.db.objectStoreNames;
      for (var i = 0; i < storeNames.length; ++i) {
        var storeName = storeNames[i];
        var store = idbtrans.objectStore(storeName);
        db2._hasGetAll = "getAll" in store;
        for (var j = 0; j < store.indexNames.length; ++j) {
          var indexName = store.indexNames[j];
          var keyPath = store.index(indexName).keyPath;
          var dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
          if (schema[storeName]) {
            var indexSpec = schema[storeName].idxByName[dexieName];
            if (indexSpec) {
              indexSpec.name = indexName;
              delete schema[storeName].idxByName[dexieName];
              schema[storeName].idxByName[indexName] = indexSpec;
            }
          }
        }
      }
      if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
        db2._hasGetAll = false;
      }
    }
    function parseIndexSyntax(primKeyAndIndexes) {
      return primKeyAndIndexes.split(",").map(function(index, indexNum) {
        index = index.trim();
        var name = index.replace(/([&*]|\+\+)/g, "");
        var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
        return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
      });
    }
    var Version = (function() {
      function Version2() {
      }
      Version2.prototype._parseStoresSpec = function(stores, outSchema) {
        keys(stores).forEach(function(tableName) {
          if (stores[tableName] !== null) {
            var indexes2 = parseIndexSyntax(stores[tableName]);
            var primKey = indexes2.shift();
            primKey.unique = true;
            if (primKey.multi)
              throw new exceptions.Schema("Primary key cannot be multi-valued");
            indexes2.forEach(function(idx) {
              if (idx.auto)
                throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!idx.keyPath)
                throw new exceptions.Schema("Index must have a name and cannot be an empty string");
            });
            outSchema[tableName] = createTableSchema(tableName, primKey, indexes2);
          }
        });
      };
      Version2.prototype.stores = function(stores) {
        var db2 = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
        var versions = db2._versions;
        var storesSpec = {};
        var dbschema = {};
        versions.forEach(function(version) {
          extend(storesSpec, version._cfg.storesSource);
          dbschema = version._cfg.dbschema = {};
          version._parseStoresSpec(storesSpec, dbschema);
        });
        db2._dbSchema = dbschema;
        removeTablesApi(db2, [db2._allTables, db2, db2.Transaction.prototype]);
        setApiOnPlace(db2, [db2._allTables, db2, db2.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
        db2._storeNames = keys(dbschema);
        return this;
      };
      Version2.prototype.upgrade = function(upgradeFunction) {
        this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
        return this;
      };
      return Version2;
    })();
    function createVersionConstructor(db2) {
      return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
        this.db = db2;
        this._cfg = {
          version: versionNumber,
          storesSource: null,
          dbschema: {},
          tables: {},
          contentUpgrade: null
        };
      });
    }
    function getDbNamesTable(indexedDB2, IDBKeyRange) {
      var dbNamesDB = indexedDB2["_dbNamesDB"];
      if (!dbNamesDB) {
        dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
          addons: [],
          indexedDB: indexedDB2,
          IDBKeyRange
        });
        dbNamesDB.version(1).stores({ dbnames: "name" });
      }
      return dbNamesDB.table("dbnames");
    }
    function hasDatabasesNative(indexedDB2) {
      return indexedDB2 && typeof indexedDB2.databases === "function";
    }
    function getDatabaseNames(_a2) {
      var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
      return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(function(infos) {
        return infos.map(function(info) {
          return info.name;
        }).filter(function(name) {
          return name !== DBNAMES_DB;
        });
      }) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
    }
    function _onDatabaseCreated(_a2, name) {
      var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
      !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({ name }).catch(nop);
    }
    function _onDatabaseDeleted(_a2, name) {
      var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
      !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
    }
    function vip(fn) {
      return newScope(function() {
        PSD.letThrough = true;
        return fn();
      });
    }
    function idbReady() {
      var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
      if (!isSafari || !indexedDB.databases)
        return Promise.resolve();
      var intervalId;
      return new Promise(function(resolve) {
        var tryIdb = function() {
          return indexedDB.databases().finally(resolve);
        };
        intervalId = setInterval(tryIdb, 100);
        tryIdb();
      }).finally(function() {
        return clearInterval(intervalId);
      });
    }
    var _a;
    function isEmptyRange(node) {
      return !("from" in node);
    }
    var RangeSet = function(fromOrTree, to) {
      if (this) {
        extend(this, arguments.length ? { d: 1, from: fromOrTree, to: arguments.length > 1 ? to : fromOrTree } : { d: 0 });
      } else {
        var rv = new RangeSet();
        if (fromOrTree && "d" in fromOrTree) {
          extend(rv, fromOrTree);
        }
        return rv;
      }
    };
    props(RangeSet.prototype, (_a = {
      add: function(rangeSet) {
        mergeRanges(this, rangeSet);
        return this;
      },
      addKey: function(key) {
        addRange(this, key, key);
        return this;
      },
      addKeys: function(keys2) {
        var _this = this;
        keys2.forEach(function(key) {
          return addRange(_this, key, key);
        });
        return this;
      },
      hasKey: function(key) {
        var node = getRangeSetIterator(this).next(key).value;
        return node && cmp(node.from, key) <= 0 && cmp(node.to, key) >= 0;
      }
    }, _a[iteratorSymbol] = function() {
      return getRangeSetIterator(this);
    }, _a));
    function addRange(target, from, to) {
      var diff = cmp(from, to);
      if (isNaN(diff))
        return;
      if (diff > 0)
        throw RangeError();
      if (isEmptyRange(target))
        return extend(target, { from, to, d: 1 });
      var left = target.l;
      var right = target.r;
      if (cmp(to, target.from) < 0) {
        left ? addRange(left, from, to) : target.l = { from, to, d: 1, l: null, r: null };
        return rebalance(target);
      }
      if (cmp(from, target.to) > 0) {
        right ? addRange(right, from, to) : target.r = { from, to, d: 1, l: null, r: null };
        return rebalance(target);
      }
      if (cmp(from, target.from) < 0) {
        target.from = from;
        target.l = null;
        target.d = right ? right.d + 1 : 1;
      }
      if (cmp(to, target.to) > 0) {
        target.to = to;
        target.r = null;
        target.d = target.l ? target.l.d + 1 : 1;
      }
      var rightWasCutOff = !target.r;
      if (left && !target.l) {
        mergeRanges(target, left);
      }
      if (right && rightWasCutOff) {
        mergeRanges(target, right);
      }
    }
    function mergeRanges(target, newSet) {
      function _addRangeSet(target2, _a2) {
        var from = _a2.from, to = _a2.to, l = _a2.l, r = _a2.r;
        addRange(target2, from, to);
        if (l)
          _addRangeSet(target2, l);
        if (r)
          _addRangeSet(target2, r);
      }
      if (!isEmptyRange(newSet))
        _addRangeSet(target, newSet);
    }
    function rangesOverlap(rangeSet1, rangeSet2) {
      var i1 = getRangeSetIterator(rangeSet2);
      var nextResult1 = i1.next();
      if (nextResult1.done)
        return false;
      var a = nextResult1.value;
      var i2 = getRangeSetIterator(rangeSet1);
      var nextResult2 = i2.next(a.from);
      var b = nextResult2.value;
      while (!nextResult1.done && !nextResult2.done) {
        if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0)
          return true;
        cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
      }
      return false;
    }
    function getRangeSetIterator(node) {
      var state = isEmptyRange(node) ? null : { s: 0, n: node };
      return {
        next: function(key) {
          var keyProvided = arguments.length > 0;
          while (state) {
            switch (state.s) {
              case 0:
                state.s = 1;
                if (keyProvided) {
                  while (state.n.l && cmp(key, state.n.from) < 0)
                    state = { up: state, n: state.n.l, s: 1 };
                } else {
                  while (state.n.l)
                    state = { up: state, n: state.n.l, s: 1 };
                }
              case 1:
                state.s = 2;
                if (!keyProvided || cmp(key, state.n.to) <= 0)
                  return { value: state.n, done: false };
              case 2:
                if (state.n.r) {
                  state.s = 3;
                  state = { up: state, n: state.n.r, s: 0 };
                  continue;
                }
              case 3:
                state = state.up;
            }
          }
          return { done: true };
        }
      };
    }
    function rebalance(target) {
      var _a2, _b;
      var diff = (((_a2 = target.r) === null || _a2 === void 0 ? void 0 : _a2.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
      var r = diff > 1 ? "r" : diff < -1 ? "l" : "";
      if (r) {
        var l = r === "r" ? "l" : "r";
        var rootClone = __assign({}, target);
        var oldRootRight = target[r];
        target.from = oldRootRight.from;
        target.to = oldRootRight.to;
        target[r] = oldRootRight[r];
        rootClone[r] = oldRootRight[l];
        target[l] = rootClone;
        rootClone.d = computeDepth(rootClone);
      }
      target.d = computeDepth(target);
    }
    function computeDepth(_a2) {
      var r = _a2.r, l = _a2.l;
      return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
    }
    function extendObservabilitySet(target, newSet) {
      keys(newSet).forEach(function(part) {
        if (target[part])
          mergeRanges(target[part], newSet[part]);
        else
          target[part] = cloneSimpleObjectTree(newSet[part]);
      });
      return target;
    }
    function obsSetsOverlap(os1, os2) {
      return os1.all || os2.all || Object.keys(os1).some(function(key) {
        return os2[key] && rangesOverlap(os2[key], os1[key]);
      });
    }
    var cache = {};
    var unsignaledParts = {};
    var isTaskEnqueued = false;
    function signalSubscribersLazily(part, optimistic) {
      extendObservabilitySet(unsignaledParts, part);
      if (!isTaskEnqueued) {
        isTaskEnqueued = true;
        setTimeout(function() {
          isTaskEnqueued = false;
          var parts = unsignaledParts;
          unsignaledParts = {};
          signalSubscribersNow(parts, false);
        }, 0);
      }
    }
    function signalSubscribersNow(updatedParts, deleteAffectedCacheEntries) {
      if (deleteAffectedCacheEntries === void 0) {
        deleteAffectedCacheEntries = false;
      }
      var queriesToSignal = /* @__PURE__ */ new Set();
      if (updatedParts.all) {
        for (var _i = 0, _a2 = Object.values(cache); _i < _a2.length; _i++) {
          var tblCache = _a2[_i];
          collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
        }
      } else {
        for (var key in updatedParts) {
          var parts = /^idb\:\/\/(.*)\/(.*)\//.exec(key);
          if (parts) {
            var dbName = parts[1], tableName = parts[2];
            var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
            if (tblCache)
              collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
          }
        }
      }
      queriesToSignal.forEach(function(requery) {
        return requery();
      });
    }
    function collectTableSubscribers(tblCache, updatedParts, outQueriesToSignal, deleteAffectedCacheEntries) {
      var updatedEntryLists = [];
      for (var _i = 0, _a2 = Object.entries(tblCache.queries.query); _i < _a2.length; _i++) {
        var _b = _a2[_i], indexName = _b[0], entries = _b[1];
        var filteredEntries = [];
        for (var _c = 0, entries_1 = entries; _c < entries_1.length; _c++) {
          var entry = entries_1[_c];
          if (obsSetsOverlap(updatedParts, entry.obsSet)) {
            entry.subscribers.forEach(function(requery) {
              return outQueriesToSignal.add(requery);
            });
          } else if (deleteAffectedCacheEntries) {
            filteredEntries.push(entry);
          }
        }
        if (deleteAffectedCacheEntries)
          updatedEntryLists.push([indexName, filteredEntries]);
      }
      if (deleteAffectedCacheEntries) {
        for (var _d = 0, updatedEntryLists_1 = updatedEntryLists; _d < updatedEntryLists_1.length; _d++) {
          var _e = updatedEntryLists_1[_d], indexName = _e[0], filteredEntries = _e[1];
          tblCache.queries.query[indexName] = filteredEntries;
        }
      }
    }
    function dexieOpen(db2) {
      var state = db2._state;
      var indexedDB2 = db2._deps.indexedDB;
      if (state.isBeingOpened || db2.idbdb)
        return state.dbReadyPromise.then(function() {
          return state.dbOpenError ? rejection(state.dbOpenError) : db2;
        });
      state.isBeingOpened = true;
      state.dbOpenError = null;
      state.openComplete = false;
      var openCanceller = state.openCanceller;
      var nativeVerToOpen = Math.round(db2.verno * 10);
      var schemaPatchMode = false;
      function throwIfCancelled() {
        if (state.openCanceller !== openCanceller)
          throw new exceptions.DatabaseClosed("db.open() was cancelled");
      }
      var resolveDbReady = state.dbReadyResolve, upgradeTransaction = null, wasCreated = false;
      var tryOpenDB = function() {
        return new DexiePromise(function(resolve, reject) {
          throwIfCancelled();
          if (!indexedDB2)
            throw new exceptions.MissingAPI();
          var dbName = db2.name;
          var req = state.autoSchema || !nativeVerToOpen ? indexedDB2.open(dbName) : indexedDB2.open(dbName, nativeVerToOpen);
          if (!req)
            throw new exceptions.MissingAPI();
          req.onerror = eventRejectHandler(reject);
          req.onblocked = wrap(db2._fireOnBlocked);
          req.onupgradeneeded = wrap(function(e) {
            upgradeTransaction = req.transaction;
            if (state.autoSchema && !db2._options.allowEmptyDB) {
              req.onerror = preventDefault;
              upgradeTransaction.abort();
              req.result.close();
              var delreq = indexedDB2.deleteDatabase(dbName);
              delreq.onsuccess = delreq.onerror = wrap(function() {
                reject(new exceptions.NoSuchDatabase("Database ".concat(dbName, " doesnt exist")));
              });
            } else {
              upgradeTransaction.onerror = eventRejectHandler(reject);
              var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
              wasCreated = oldVer < 1;
              db2.idbdb = req.result;
              if (schemaPatchMode) {
                patchCurrentVersion(db2, upgradeTransaction);
              }
              runUpgraders(db2, oldVer / 10, upgradeTransaction, reject);
            }
          }, reject);
          req.onsuccess = wrap(function() {
            upgradeTransaction = null;
            var idbdb = db2.idbdb = req.result;
            var objectStoreNames = slice(idbdb.objectStoreNames);
            if (objectStoreNames.length > 0)
              try {
                var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
                if (state.autoSchema)
                  readGlobalSchema(db2, idbdb, tmpTrans);
                else {
                  adjustToExistingIndexNames(db2, db2._dbSchema, tmpTrans);
                  if (!verifyInstalledSchema(db2, tmpTrans) && !schemaPatchMode) {
                    console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.");
                    idbdb.close();
                    nativeVerToOpen = idbdb.version + 1;
                    schemaPatchMode = true;
                    return resolve(tryOpenDB());
                  }
                }
                generateMiddlewareStacks(db2, tmpTrans);
              } catch (e) {
              }
            connections.push(db2);
            idbdb.onversionchange = wrap(function(ev) {
              state.vcFired = true;
              db2.on("versionchange").fire(ev);
            });
            idbdb.onclose = wrap(function(ev) {
              db2.on("close").fire(ev);
            });
            if (wasCreated)
              _onDatabaseCreated(db2._deps, dbName);
            resolve();
          }, reject);
        }).catch(function(err) {
          switch (err === null || err === void 0 ? void 0 : err.name) {
            case "UnknownError":
              if (state.PR1398_maxLoop > 0) {
                state.PR1398_maxLoop--;
                console.warn("Dexie: Workaround for Chrome UnknownError on open()");
                return tryOpenDB();
              }
              break;
            case "VersionError":
              if (nativeVerToOpen > 0) {
                nativeVerToOpen = 0;
                return tryOpenDB();
              }
              break;
          }
          return DexiePromise.reject(err);
        });
      };
      return DexiePromise.race([
        openCanceller,
        (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(tryOpenDB)
      ]).then(function() {
        throwIfCancelled();
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(function() {
          return db2.on.ready.fire(db2.vip);
        })).then(function fireRemainders() {
          if (state.onReadyBeingFired.length > 0) {
            var remainders_1 = state.onReadyBeingFired.reduce(promisableChain, nop);
            state.onReadyBeingFired = [];
            return DexiePromise.resolve(vip(function() {
              return remainders_1(db2.vip);
            })).then(fireRemainders);
          }
        });
      }).finally(function() {
        if (state.openCanceller === openCanceller) {
          state.onReadyBeingFired = null;
          state.isBeingOpened = false;
        }
      }).catch(function(err) {
        state.dbOpenError = err;
        try {
          upgradeTransaction && upgradeTransaction.abort();
        } catch (_a2) {
        }
        if (openCanceller === state.openCanceller) {
          db2._close();
        }
        return rejection(err);
      }).finally(function() {
        state.openComplete = true;
        resolveDbReady();
      }).then(function() {
        if (wasCreated) {
          var everything_1 = {};
          db2.tables.forEach(function(table) {
            table.schema.indexes.forEach(function(idx) {
              if (idx.name)
                everything_1["idb://".concat(db2.name, "/").concat(table.name, "/").concat(idx.name)] = new RangeSet(-Infinity, [[[]]]);
            });
            everything_1["idb://".concat(db2.name, "/").concat(table.name, "/")] = everything_1["idb://".concat(db2.name, "/").concat(table.name, "/:dels")] = new RangeSet(-Infinity, [[[]]]);
          });
          globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME).fire(everything_1);
          signalSubscribersNow(everything_1, true);
        }
        return db2;
      });
    }
    function awaitIterator(iterator) {
      var callNext = function(result) {
        return iterator.next(result);
      }, doThrow = function(error) {
        return iterator.throw(error);
      }, onSuccess = step(callNext), onError = step(doThrow);
      function step(getNext) {
        return function(val) {
          var next = getNext(val), value = next.value;
          return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
        };
      }
      return step(callNext)();
    }
    function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
      var i = arguments.length;
      if (i < 2)
        throw new exceptions.InvalidArgument("Too few arguments");
      var args = new Array(i - 1);
      while (--i)
        args[i - 1] = arguments[i];
      scopeFunc = args.pop();
      var tables = flatten(args);
      return [mode, tables, scopeFunc];
    }
    function enterTransactionScope(db2, mode, storeNames, parentTransaction, scopeFunc) {
      return DexiePromise.resolve().then(function() {
        var transless = PSD.transless || PSD;
        var trans = db2._createTransaction(mode, storeNames, db2._dbSchema, parentTransaction);
        trans.explicit = true;
        var zoneProps = {
          trans,
          transless
        };
        if (parentTransaction) {
          trans.idbtrans = parentTransaction.idbtrans;
        } else {
          try {
            trans.create();
            trans.idbtrans._explicit = true;
            db2._state.PR1398_maxLoop = 3;
          } catch (ex) {
            if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
              console.warn("Dexie: Need to reopen db");
              db2.close({ disableAutoOpen: false });
              return db2.open().then(function() {
                return enterTransactionScope(db2, mode, storeNames, null, scopeFunc);
              });
            }
            return rejection(ex);
          }
        }
        var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
        if (scopeFuncIsAsync) {
          incrementExpectedAwaits();
        }
        var returnValue;
        var promiseFollowed = DexiePromise.follow(function() {
          returnValue = scopeFunc.call(trans, trans);
          if (returnValue) {
            if (scopeFuncIsAsync) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue.then(decrementor, decrementor);
            } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
              returnValue = awaitIterator(returnValue);
            }
          }
        }, zoneProps);
        return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(function(x) {
          return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
        }) : promiseFollowed.then(function() {
          return returnValue;
        })).then(function(x) {
          if (parentTransaction)
            trans._resolve();
          return trans._completion.then(function() {
            return x;
          });
        }).catch(function(e) {
          trans._reject(e);
          return rejection(e);
        });
      });
    }
    function pad(a, value, count) {
      var result = isArray(a) ? a.slice() : [a];
      for (var i = 0; i < count; ++i)
        result.push(value);
      return result;
    }
    function createVirtualIndexMiddleware(down) {
      return __assign(__assign({}, down), { table: function(tableName) {
        var table = down.table(tableName);
        var schema = table.schema;
        var indexLookup = {};
        var allVirtualIndexes = [];
        function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
          var keyPathAlias = getKeyPathAlias(keyPath);
          var indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
          var keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
          var isVirtual = keyTail > 0;
          var virtualIndex = __assign(__assign({}, lowLevelIndex), { name: isVirtual ? "".concat(keyPathAlias, "(virtual-from:").concat(lowLevelIndex.name, ")") : lowLevelIndex.name, lowLevelIndex, isVirtual, keyTail, keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
          indexList.push(virtualIndex);
          if (!virtualIndex.isPrimaryKey) {
            allVirtualIndexes.push(virtualIndex);
          }
          if (keyLength > 1) {
            var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
            addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
          }
          indexList.sort(function(a, b) {
            return a.keyTail - b.keyTail;
          });
          return virtualIndex;
        }
        var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
        indexLookup[":id"] = [primaryKey];
        for (var _i = 0, _a2 = schema.indexes; _i < _a2.length; _i++) {
          var index = _a2[_i];
          addVirtualIndexes(index.keyPath, 0, index);
        }
        function findBestIndex(keyPath) {
          var result2 = indexLookup[getKeyPathAlias(keyPath)];
          return result2 && result2[0];
        }
        function translateRange(range, keyTail) {
          return {
            type: range.type === 1 ? 2 : range.type,
            lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
            lowerOpen: true,
            upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
            upperOpen: true
          };
        }
        function translateRequest(req) {
          var index2 = req.query.index;
          return index2.isVirtual ? __assign(__assign({}, req), { query: {
            index: index2.lowLevelIndex,
            range: translateRange(req.query.range, index2.keyTail)
          } }) : req;
        }
        var result = __assign(__assign({}, table), { schema: __assign(__assign({}, schema), { primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: function(req) {
          return table.count(translateRequest(req));
        }, query: function(req) {
          return table.query(translateRequest(req));
        }, openCursor: function(req) {
          var _a3 = req.query.index, keyTail = _a3.keyTail, isVirtual = _a3.isVirtual, keyLength = _a3.keyLength;
          if (!isVirtual)
            return table.openCursor(req);
          function createVirtualCursor(cursor) {
            function _continue(key) {
              key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
            }
            var virtualCursor = Object.create(cursor, {
              continue: { value: _continue },
              continuePrimaryKey: {
                value: function(key, primaryKey2) {
                  cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                }
              },
              primaryKey: {
                get: function() {
                  return cursor.primaryKey;
                }
              },
              key: {
                get: function() {
                  var key = cursor.key;
                  return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                }
              },
              value: {
                get: function() {
                  return cursor.value;
                }
              }
            });
            return virtualCursor;
          }
          return table.openCursor(translateRequest(req)).then(function(cursor) {
            return cursor && createVirtualCursor(cursor);
          });
        } });
        return result;
      } });
    }
    var virtualIndexMiddleware = {
      stack: "dbcore",
      name: "VirtualIndexMiddleware",
      level: 1,
      create: createVirtualIndexMiddleware
    };
    function getObjectDiff(a, b, rv, prfx) {
      rv = rv || {};
      prfx = prfx || "";
      keys(a).forEach(function(prop) {
        if (!hasOwn(b, prop)) {
          rv[prfx + prop] = void 0;
        } else {
          var ap = a[prop], bp = b[prop];
          if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
            var apTypeName = toStringTag(ap);
            var bpTypeName = toStringTag(bp);
            if (apTypeName !== bpTypeName) {
              rv[prfx + prop] = b[prop];
            } else if (apTypeName === "Object") {
              getObjectDiff(ap, bp, rv, prfx + prop + ".");
            } else if (ap !== bp) {
              rv[prfx + prop] = b[prop];
            }
          } else if (ap !== bp)
            rv[prfx + prop] = b[prop];
        }
      });
      keys(b).forEach(function(prop) {
        if (!hasOwn(a, prop)) {
          rv[prfx + prop] = b[prop];
        }
      });
      return rv;
    }
    function getEffectiveKeys(primaryKey, req) {
      if (req.type === "delete")
        return req.keys;
      return req.keys || req.values.map(primaryKey.extractKey);
    }
    var hooksMiddleware = {
      stack: "dbcore",
      name: "HooksMiddleware",
      level: 2,
      create: function(downCore) {
        return __assign(__assign({}, downCore), { table: function(tableName) {
          var downTable = downCore.table(tableName);
          var primaryKey = downTable.schema.primaryKey;
          var tableMiddleware = __assign(__assign({}, downTable), { mutate: function(req) {
            var dxTrans = PSD.trans;
            var _a2 = dxTrans.table(tableName).hook, deleting = _a2.deleting, creating = _a2.creating, updating = _a2.updating;
            switch (req.type) {
              case "add":
                if (creating.fire === nop)
                  break;
                return dxTrans._promise("readwrite", function() {
                  return addPutOrDelete(req);
                }, true);
              case "put":
                if (creating.fire === nop && updating.fire === nop)
                  break;
                return dxTrans._promise("readwrite", function() {
                  return addPutOrDelete(req);
                }, true);
              case "delete":
                if (deleting.fire === nop)
                  break;
                return dxTrans._promise("readwrite", function() {
                  return addPutOrDelete(req);
                }, true);
              case "deleteRange":
                if (deleting.fire === nop)
                  break;
                return dxTrans._promise("readwrite", function() {
                  return deleteRange(req);
                }, true);
            }
            return downTable.mutate(req);
            function addPutOrDelete(req2) {
              var dxTrans2 = PSD.trans;
              var keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
              if (!keys2)
                throw new Error("Keys missing");
              req2 = req2.type === "add" || req2.type === "put" ? __assign(__assign({}, req2), { keys: keys2 }) : __assign({}, req2);
              if (req2.type !== "delete")
                req2.values = __spreadArray([], req2.values, true);
              if (req2.keys)
                req2.keys = __spreadArray([], req2.keys, true);
              return getExistingValues(downTable, req2, keys2).then(function(existingValues) {
                var contexts = keys2.map(function(key, i) {
                  var existingValue = existingValues[i];
                  var ctx = { onerror: null, onsuccess: null };
                  if (req2.type === "delete") {
                    deleting.fire.call(ctx, key, existingValue, dxTrans2);
                  } else if (req2.type === "add" || existingValue === void 0) {
                    var generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                    if (key == null && generatedPrimaryKey != null) {
                      key = generatedPrimaryKey;
                      req2.keys[i] = key;
                      if (!primaryKey.outbound) {
                        setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                      }
                    }
                  } else {
                    var objectDiff = getObjectDiff(existingValue, req2.values[i]);
                    var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                    if (additionalChanges_1) {
                      var requestedValue_1 = req2.values[i];
                      Object.keys(additionalChanges_1).forEach(function(keyPath) {
                        if (hasOwn(requestedValue_1, keyPath)) {
                          requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                        } else {
                          setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                        }
                      });
                    }
                  }
                  return ctx;
                });
                return downTable.mutate(req2).then(function(_a3) {
                  var failures = _a3.failures, results = _a3.results, numFailures = _a3.numFailures, lastResult = _a3.lastResult;
                  for (var i = 0; i < keys2.length; ++i) {
                    var primKey = results ? results[i] : keys2[i];
                    var ctx = contexts[i];
                    if (primKey == null) {
                      ctx.onerror && ctx.onerror(failures[i]);
                    } else {
                      ctx.onsuccess && ctx.onsuccess(
                        req2.type === "put" && existingValues[i] ? req2.values[i] : primKey
                      );
                    }
                  }
                  return { failures, results, numFailures, lastResult };
                }).catch(function(error) {
                  contexts.forEach(function(ctx) {
                    return ctx.onerror && ctx.onerror(error);
                  });
                  return Promise.reject(error);
                });
              });
            }
            function deleteRange(req2) {
              return deleteNextChunk(req2.trans, req2.range, 1e4);
            }
            function deleteNextChunk(trans, range, limit) {
              return downTable.query({ trans, values: false, query: { index: primaryKey, range }, limit }).then(function(_a3) {
                var result = _a3.result;
                return addPutOrDelete({ type: "delete", keys: result, trans }).then(function(res) {
                  if (res.numFailures > 0)
                    return Promise.reject(res.failures[0]);
                  if (result.length < limit) {
                    return { failures: [], numFailures: 0, lastResult: void 0 };
                  } else {
                    return deleteNextChunk(trans, __assign(__assign({}, range), { lower: result[result.length - 1], lowerOpen: true }), limit);
                  }
                });
              });
            }
          } });
          return tableMiddleware;
        } });
      }
    };
    function getExistingValues(table, req, effectiveKeys) {
      return req.type === "add" ? Promise.resolve([]) : table.getMany({ trans: req.trans, keys: effectiveKeys, cache: "immutable" });
    }
    function getFromTransactionCache(keys2, cache2, clone) {
      try {
        if (!cache2)
          return null;
        if (cache2.keys.length < keys2.length)
          return null;
        var result = [];
        for (var i = 0, j = 0; i < cache2.keys.length && j < keys2.length; ++i) {
          if (cmp(cache2.keys[i], keys2[j]) !== 0)
            continue;
          result.push(clone ? deepClone(cache2.values[i]) : cache2.values[i]);
          ++j;
        }
        return result.length === keys2.length ? result : null;
      } catch (_a2) {
        return null;
      }
    }
    var cacheExistingValuesMiddleware = {
      stack: "dbcore",
      level: -1,
      create: function(core) {
        return {
          table: function(tableName) {
            var table = core.table(tableName);
            return __assign(__assign({}, table), { getMany: function(req) {
              if (!req.cache) {
                return table.getMany(req);
              }
              var cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
              if (cachedResult) {
                return DexiePromise.resolve(cachedResult);
              }
              return table.getMany(req).then(function(res) {
                req.trans["_cache"] = {
                  keys: req.keys,
                  values: req.cache === "clone" ? deepClone(res) : res
                };
                return res;
              });
            }, mutate: function(req) {
              if (req.type !== "add")
                req.trans["_cache"] = null;
              return table.mutate(req);
            } });
          }
        };
      }
    };
    function isCachableContext(ctx, table) {
      return ctx.trans.mode === "readonly" && !!ctx.subscr && !ctx.trans.explicit && ctx.trans.db._options.cache !== "disabled" && !table.schema.primaryKey.outbound;
    }
    function isCachableRequest(type2, req) {
      switch (type2) {
        case "query":
          return req.values && !req.unique;
        case "get":
          return false;
        case "getMany":
          return false;
        case "count":
          return false;
        case "openCursor":
          return false;
      }
    }
    var observabilityMiddleware = {
      stack: "dbcore",
      level: 0,
      name: "Observability",
      create: function(core) {
        var dbName = core.schema.name;
        var FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
        return __assign(__assign({}, core), { transaction: function(stores, mode, options) {
          if (PSD.subscr && mode !== "readonly") {
            throw new exceptions.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(PSD.querier));
          }
          return core.transaction(stores, mode, options);
        }, table: function(tableName) {
          var table = core.table(tableName);
          var schema = table.schema;
          var primaryKey = schema.primaryKey, indexes2 = schema.indexes;
          var extractKey = primaryKey.extractKey, outbound = primaryKey.outbound;
          var indexesWithAutoIncPK = primaryKey.autoIncrement && indexes2.filter(function(index) {
            return index.compound && index.keyPath.includes(primaryKey.keyPath);
          });
          var tableClone = __assign(__assign({}, table), { mutate: function(req) {
            var trans = req.trans;
            var mutatedParts = req.mutatedParts || (req.mutatedParts = {});
            var getRangeSet = function(indexName) {
              var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
              return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
            };
            var pkRangeSet = getRangeSet("");
            var delsRangeSet = getRangeSet(":dels");
            var type2 = req.type;
            var _a2 = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [getEffectiveKeys(primaryKey, req).filter(function(id) {
              return id;
            }), req.values] : [], keys2 = _a2[0], newObjs = _a2[1];
            var oldCache = req.trans["_cache"];
            if (isArray(keys2)) {
              pkRangeSet.addKeys(keys2);
              var oldObjs = type2 === "delete" || keys2.length === newObjs.length ? getFromTransactionCache(keys2, oldCache) : null;
              if (!oldObjs) {
                delsRangeSet.addKeys(keys2);
              }
              if (oldObjs || newObjs) {
                trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
              }
            } else if (keys2) {
              var range = { from: keys2.lower, to: keys2.upper };
              delsRangeSet.add(range);
              pkRangeSet.add(range);
            } else {
              pkRangeSet.add(FULL_RANGE);
              delsRangeSet.add(FULL_RANGE);
              schema.indexes.forEach(function(idx) {
                return getRangeSet(idx.name).add(FULL_RANGE);
              });
            }
            return table.mutate(req).then(function(res) {
              if (keys2 && (req.type === "add" || req.type === "put")) {
                pkRangeSet.addKeys(res.results);
                if (indexesWithAutoIncPK) {
                  indexesWithAutoIncPK.forEach(function(idx) {
                    var idxVals = req.values.map(function(v) {
                      return idx.extractKey(v);
                    });
                    var pkPos = idx.keyPath.findIndex(function(prop) {
                      return prop === primaryKey.keyPath;
                    });
                    res.results.forEach(function(pk) {
                      return idxVals[pkPos] = pk;
                    });
                    getRangeSet(idx.name).addKeys(idxVals);
                  });
                }
              }
              trans.mutatedParts = extendObservabilitySet(trans.mutatedParts || {}, mutatedParts);
              return res;
            });
          } });
          var getRange = function(_a2) {
            var _b, _c;
            var _d = _a2.query, index = _d.index, range = _d.range;
            return [
              index,
              new RangeSet((_b = range.lower) !== null && _b !== void 0 ? _b : core.MIN_KEY, (_c = range.upper) !== null && _c !== void 0 ? _c : core.MAX_KEY)
            ];
          };
          var readSubscribers = {
            get: function(req) {
              return [primaryKey, new RangeSet(req.key)];
            },
            getMany: function(req) {
              return [primaryKey, new RangeSet().addKeys(req.keys)];
            },
            count: getRange,
            query: getRange,
            openCursor: getRange
          };
          keys(readSubscribers).forEach(function(method) {
            tableClone[method] = function(req) {
              var subscr = PSD.subscr;
              var isLiveQuery = !!subscr;
              var cachable = isCachableContext(PSD, table) && isCachableRequest(method, req);
              var obsSet = cachable ? req.obsSet = {} : subscr;
              if (isLiveQuery) {
                var getRangeSet = function(indexName) {
                  var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
                  return obsSet[part] || (obsSet[part] = new RangeSet());
                };
                var pkRangeSet_1 = getRangeSet("");
                var delsRangeSet_1 = getRangeSet(":dels");
                var _a2 = readSubscribers[method](req), queriedIndex = _a2[0], queriedRanges = _a2[1];
                if (method === "query" && queriedIndex.isPrimaryKey && !req.values) {
                  delsRangeSet_1.add(queriedRanges);
                } else {
                  getRangeSet(queriedIndex.name || "").add(queriedRanges);
                }
                if (!queriedIndex.isPrimaryKey) {
                  if (method === "count") {
                    delsRangeSet_1.add(FULL_RANGE);
                  } else {
                    var keysPromise_1 = method === "query" && outbound && req.values && table.query(__assign(__assign({}, req), { values: false }));
                    return table[method].apply(this, arguments).then(function(res) {
                      if (method === "query") {
                        if (outbound && req.values) {
                          return keysPromise_1.then(function(_a3) {
                            var resultingKeys = _a3.result;
                            pkRangeSet_1.addKeys(resultingKeys);
                            return res;
                          });
                        }
                        var pKeys = req.values ? res.result.map(extractKey) : res.result;
                        if (req.values) {
                          pkRangeSet_1.addKeys(pKeys);
                        } else {
                          delsRangeSet_1.addKeys(pKeys);
                        }
                      } else if (method === "openCursor") {
                        var cursor_1 = res;
                        var wantValues_1 = req.values;
                        return cursor_1 && Object.create(cursor_1, {
                          key: {
                            get: function() {
                              delsRangeSet_1.addKey(cursor_1.primaryKey);
                              return cursor_1.key;
                            }
                          },
                          primaryKey: {
                            get: function() {
                              var pkey = cursor_1.primaryKey;
                              delsRangeSet_1.addKey(pkey);
                              return pkey;
                            }
                          },
                          value: {
                            get: function() {
                              wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey);
                              return cursor_1.value;
                            }
                          }
                        });
                      }
                      return res;
                    });
                  }
                }
              }
              return table[method].apply(this, arguments);
            };
          });
          return tableClone;
        } });
      }
    };
    function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
      function addAffectedIndex(ix) {
        var rangeSet = getRangeSet(ix.name || "");
        function extractKey(obj) {
          return obj != null ? ix.extractKey(obj) : null;
        }
        var addKeyOrKeys = function(key) {
          return ix.multiEntry && isArray(key) ? key.forEach(function(key2) {
            return rangeSet.addKey(key2);
          }) : rangeSet.addKey(key);
        };
        (oldObjs || newObjs).forEach(function(_, i) {
          var oldKey = oldObjs && extractKey(oldObjs[i]);
          var newKey = newObjs && extractKey(newObjs[i]);
          if (cmp(oldKey, newKey) !== 0) {
            if (oldKey != null)
              addKeyOrKeys(oldKey);
            if (newKey != null)
              addKeyOrKeys(newKey);
          }
        });
      }
      schema.indexes.forEach(addAffectedIndex);
    }
    function adjustOptimisticFromFailures(tblCache, req, res) {
      if (res.numFailures === 0)
        return req;
      if (req.type === "deleteRange") {
        return null;
      }
      var numBulkOps = req.keys ? req.keys.length : "values" in req && req.values ? req.values.length : 1;
      if (res.numFailures === numBulkOps) {
        return null;
      }
      var clone = __assign({}, req);
      if (isArray(clone.keys)) {
        clone.keys = clone.keys.filter(function(_, i) {
          return !(i in res.failures);
        });
      }
      if ("values" in clone && isArray(clone.values)) {
        clone.values = clone.values.filter(function(_, i) {
          return !(i in res.failures);
        });
      }
      return clone;
    }
    function isAboveLower(key, range) {
      return range.lower === void 0 ? true : range.lowerOpen ? cmp(key, range.lower) > 0 : cmp(key, range.lower) >= 0;
    }
    function isBelowUpper(key, range) {
      return range.upper === void 0 ? true : range.upperOpen ? cmp(key, range.upper) < 0 : cmp(key, range.upper) <= 0;
    }
    function isWithinRange(key, range) {
      return isAboveLower(key, range) && isBelowUpper(key, range);
    }
    function applyOptimisticOps(result, req, ops, table, cacheEntry, immutable) {
      if (!ops || ops.length === 0)
        return result;
      var index = req.query.index;
      var multiEntry = index.multiEntry;
      var queryRange = req.query.range;
      var primaryKey = table.schema.primaryKey;
      var extractPrimKey = primaryKey.extractKey;
      var extractIndex = index.extractKey;
      var extractLowLevelIndex = (index.lowLevelIndex || index).extractKey;
      var finalResult = ops.reduce(function(result2, op) {
        var modifedResult = result2;
        var includedValues = [];
        if (op.type === "add" || op.type === "put") {
          var includedPKs = new RangeSet();
          for (var i = op.values.length - 1; i >= 0; --i) {
            var value = op.values[i];
            var pk = extractPrimKey(value);
            if (includedPKs.hasKey(pk))
              continue;
            var key = extractIndex(value);
            if (multiEntry && isArray(key) ? key.some(function(k) {
              return isWithinRange(k, queryRange);
            }) : isWithinRange(key, queryRange)) {
              includedPKs.addKey(pk);
              includedValues.push(value);
            }
          }
        }
        switch (op.type) {
          case "add":
            modifedResult = result2.concat(req.values ? includedValues : includedValues.map(function(v) {
              return extractPrimKey(v);
            }));
            break;
          case "put":
            var keySet_1 = new RangeSet().addKeys(op.values.map(function(v) {
              return extractPrimKey(v);
            }));
            modifedResult = result2.filter(
              function(item) {
                return !keySet_1.hasKey(req.values ? extractPrimKey(item) : item);
              }
            ).concat(
              req.values ? includedValues : includedValues.map(function(v) {
                return extractPrimKey(v);
              })
            );
            break;
          case "delete":
            var keysToDelete_1 = new RangeSet().addKeys(op.keys);
            modifedResult = result2.filter(function(item) {
              return !keysToDelete_1.hasKey(req.values ? extractPrimKey(item) : item);
            });
            break;
          case "deleteRange":
            var range_1 = op.range;
            modifedResult = result2.filter(function(item) {
              return !isWithinRange(extractPrimKey(item), range_1);
            });
            break;
        }
        return modifedResult;
      }, result);
      if (finalResult === result)
        return result;
      finalResult.sort(function(a, b) {
        return cmp(extractLowLevelIndex(a), extractLowLevelIndex(b)) || cmp(extractPrimKey(a), extractPrimKey(b));
      });
      if (req.limit && req.limit < Infinity) {
        if (finalResult.length > req.limit) {
          finalResult.length = req.limit;
        } else if (result.length === req.limit && finalResult.length < req.limit) {
          cacheEntry.dirty = true;
        }
      }
      return immutable ? Object.freeze(finalResult) : finalResult;
    }
    function areRangesEqual(r1, r2) {
      return cmp(r1.lower, r2.lower) === 0 && cmp(r1.upper, r2.upper) === 0 && !!r1.lowerOpen === !!r2.lowerOpen && !!r1.upperOpen === !!r2.upperOpen;
    }
    function compareLowers(lower1, lower2, lowerOpen1, lowerOpen2) {
      if (lower1 === void 0)
        return lower2 !== void 0 ? -1 : 0;
      if (lower2 === void 0)
        return 1;
      var c = cmp(lower1, lower2);
      if (c === 0) {
        if (lowerOpen1 && lowerOpen2)
          return 0;
        if (lowerOpen1)
          return 1;
        if (lowerOpen2)
          return -1;
      }
      return c;
    }
    function compareUppers(upper1, upper2, upperOpen1, upperOpen2) {
      if (upper1 === void 0)
        return upper2 !== void 0 ? 1 : 0;
      if (upper2 === void 0)
        return -1;
      var c = cmp(upper1, upper2);
      if (c === 0) {
        if (upperOpen1 && upperOpen2)
          return 0;
        if (upperOpen1)
          return -1;
        if (upperOpen2)
          return 1;
      }
      return c;
    }
    function isSuperRange(r1, r2) {
      return compareLowers(r1.lower, r2.lower, r1.lowerOpen, r2.lowerOpen) <= 0 && compareUppers(r1.upper, r2.upper, r1.upperOpen, r2.upperOpen) >= 0;
    }
    function findCompatibleQuery(dbName, tableName, type2, req) {
      var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
      if (!tblCache)
        return [];
      var queries = tblCache.queries[type2];
      if (!queries)
        return [null, false, tblCache, null];
      var indexName = req.query ? req.query.index.name : null;
      var entries = queries[indexName || ""];
      if (!entries)
        return [null, false, tblCache, null];
      switch (type2) {
        case "query":
          var equalEntry = entries.find(function(entry) {
            return entry.req.limit === req.limit && entry.req.values === req.values && areRangesEqual(entry.req.query.range, req.query.range);
          });
          if (equalEntry)
            return [
              equalEntry,
              true,
              tblCache,
              entries
            ];
          var superEntry = entries.find(function(entry) {
            var limit = "limit" in entry.req ? entry.req.limit : Infinity;
            return limit >= req.limit && (req.values ? entry.req.values : true) && isSuperRange(entry.req.query.range, req.query.range);
          });
          return [superEntry, false, tblCache, entries];
        case "count":
          var countQuery = entries.find(function(entry) {
            return areRangesEqual(entry.req.query.range, req.query.range);
          });
          return [countQuery, !!countQuery, tblCache, entries];
      }
    }
    function subscribeToCacheEntry(cacheEntry, container, requery, signal) {
      cacheEntry.subscribers.add(requery);
      signal.addEventListener("abort", function() {
        cacheEntry.subscribers.delete(requery);
        if (cacheEntry.subscribers.size === 0) {
          enqueForDeletion(cacheEntry, container);
        }
      });
    }
    function enqueForDeletion(cacheEntry, container) {
      setTimeout(function() {
        if (cacheEntry.subscribers.size === 0) {
          delArrayItem(container, cacheEntry);
        }
      }, 3e3);
    }
    var cacheMiddleware = {
      stack: "dbcore",
      level: 0,
      name: "Cache",
      create: function(core) {
        var dbName = core.schema.name;
        var coreMW = __assign(__assign({}, core), { transaction: function(stores, mode, options) {
          var idbtrans = core.transaction(stores, mode, options);
          if (mode === "readwrite") {
            var ac_1 = new AbortController();
            var signal = ac_1.signal;
            var endTransaction = function(wasCommitted) {
              return function() {
                ac_1.abort();
                if (mode === "readwrite") {
                  var affectedSubscribers_1 = /* @__PURE__ */ new Set();
                  for (var _i = 0, stores_1 = stores; _i < stores_1.length; _i++) {
                    var storeName = stores_1[_i];
                    var tblCache = cache["idb://".concat(dbName, "/").concat(storeName)];
                    if (tblCache) {
                      var table = core.table(storeName);
                      var ops = tblCache.optimisticOps.filter(function(op) {
                        return op.trans === idbtrans;
                      });
                      if (idbtrans._explicit && wasCommitted && idbtrans.mutatedParts) {
                        for (var _a2 = 0, _b = Object.values(tblCache.queries.query); _a2 < _b.length; _a2++) {
                          var entries = _b[_a2];
                          for (var _c = 0, _d = entries.slice(); _c < _d.length; _c++) {
                            var entry = _d[_c];
                            if (obsSetsOverlap(entry.obsSet, idbtrans.mutatedParts)) {
                              delArrayItem(entries, entry);
                              entry.subscribers.forEach(function(requery) {
                                return affectedSubscribers_1.add(requery);
                              });
                            }
                          }
                        }
                      } else if (ops.length > 0) {
                        tblCache.optimisticOps = tblCache.optimisticOps.filter(function(op) {
                          return op.trans !== idbtrans;
                        });
                        for (var _e = 0, _f = Object.values(tblCache.queries.query); _e < _f.length; _e++) {
                          var entries = _f[_e];
                          for (var _g = 0, _h = entries.slice(); _g < _h.length; _g++) {
                            var entry = _h[_g];
                            if (entry.res != null && idbtrans.mutatedParts) {
                              if (wasCommitted && !entry.dirty) {
                                var freezeResults = Object.isFrozen(entry.res);
                                var modRes = applyOptimisticOps(entry.res, entry.req, ops, table, entry, freezeResults);
                                if (entry.dirty) {
                                  delArrayItem(entries, entry);
                                  entry.subscribers.forEach(function(requery) {
                                    return affectedSubscribers_1.add(requery);
                                  });
                                } else if (modRes !== entry.res) {
                                  entry.res = modRes;
                                  entry.promise = DexiePromise.resolve({ result: modRes });
                                }
                              } else {
                                if (entry.dirty) {
                                  delArrayItem(entries, entry);
                                }
                                entry.subscribers.forEach(function(requery) {
                                  return affectedSubscribers_1.add(requery);
                                });
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  affectedSubscribers_1.forEach(function(requery) {
                    return requery();
                  });
                }
              };
            };
            idbtrans.addEventListener("abort", endTransaction(false), {
              signal
            });
            idbtrans.addEventListener("error", endTransaction(false), {
              signal
            });
            idbtrans.addEventListener("complete", endTransaction(true), {
              signal
            });
          }
          return idbtrans;
        }, table: function(tableName) {
          var downTable = core.table(tableName);
          var primKey = downTable.schema.primaryKey;
          var tableMW = __assign(__assign({}, downTable), { mutate: function(req) {
            var trans = PSD.trans;
            if (primKey.outbound || trans.db._options.cache === "disabled" || trans.explicit) {
              return downTable.mutate(req);
            }
            var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
            if (!tblCache)
              return downTable.mutate(req);
            var promise = downTable.mutate(req);
            if ((req.type === "add" || req.type === "put") && (req.values.length >= 50 || getEffectiveKeys(primKey, req).some(function(key) {
              return key == null;
            }))) {
              promise.then(function(res) {
                var reqWithResolvedKeys = __assign(__assign({}, req), { values: req.values.map(function(value, i) {
                  var _a2;
                  var valueWithKey = ((_a2 = primKey.keyPath) === null || _a2 === void 0 ? void 0 : _a2.includes(".")) ? deepClone(value) : __assign({}, value);
                  setByKeyPath(valueWithKey, primKey.keyPath, res.results[i]);
                  return valueWithKey;
                }) });
                var adjustedReq = adjustOptimisticFromFailures(tblCache, reqWithResolvedKeys, res);
                tblCache.optimisticOps.push(adjustedReq);
                queueMicrotask(function() {
                  return req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                });
              });
            } else {
              tblCache.optimisticOps.push(req);
              req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
              promise.then(function(res) {
                if (res.numFailures > 0) {
                  delArrayItem(tblCache.optimisticOps, req);
                  var adjustedReq = adjustOptimisticFromFailures(tblCache, req, res);
                  if (adjustedReq) {
                    tblCache.optimisticOps.push(adjustedReq);
                  }
                  req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                }
              });
              promise.catch(function() {
                delArrayItem(tblCache.optimisticOps, req);
                req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
              });
            }
            return promise;
          }, query: function(req) {
            var _a2;
            if (!isCachableContext(PSD, downTable) || !isCachableRequest("query", req))
              return downTable.query(req);
            var freezeResults = ((_a2 = PSD.trans) === null || _a2 === void 0 ? void 0 : _a2.db._options.cache) === "immutable";
            var _b = PSD, requery = _b.requery, signal = _b.signal;
            var _c = findCompatibleQuery(dbName, tableName, "query", req), cacheEntry = _c[0], exactMatch = _c[1], tblCache = _c[2], container = _c[3];
            if (cacheEntry && exactMatch) {
              cacheEntry.obsSet = req.obsSet;
            } else {
              var promise = downTable.query(req).then(function(res) {
                var result = res.result;
                if (cacheEntry)
                  cacheEntry.res = result;
                if (freezeResults) {
                  for (var i = 0, l = result.length; i < l; ++i) {
                    Object.freeze(result[i]);
                  }
                  Object.freeze(result);
                } else {
                  res.result = deepClone(result);
                }
                return res;
              }).catch(function(error) {
                if (container && cacheEntry)
                  delArrayItem(container, cacheEntry);
                return Promise.reject(error);
              });
              cacheEntry = {
                obsSet: req.obsSet,
                promise,
                subscribers: /* @__PURE__ */ new Set(),
                type: "query",
                req,
                dirty: false
              };
              if (container) {
                container.push(cacheEntry);
              } else {
                container = [cacheEntry];
                if (!tblCache) {
                  tblCache = cache["idb://".concat(dbName, "/").concat(tableName)] = {
                    queries: {
                      query: {},
                      count: {}
                    },
                    objs: /* @__PURE__ */ new Map(),
                    optimisticOps: [],
                    unsignaledParts: {}
                  };
                }
                tblCache.queries.query[req.query.index.name || ""] = container;
              }
            }
            subscribeToCacheEntry(cacheEntry, container, requery, signal);
            return cacheEntry.promise.then(function(res) {
              return {
                result: applyOptimisticOps(res.result, req, tblCache === null || tblCache === void 0 ? void 0 : tblCache.optimisticOps, downTable, cacheEntry, freezeResults)
              };
            });
          } });
          return tableMW;
        } });
        return coreMW;
      }
    };
    function vipify(target, vipDb) {
      return new Proxy(target, {
        get: function(target2, prop, receiver) {
          if (prop === "db")
            return vipDb;
          return Reflect.get(target2, prop, receiver);
        }
      });
    }
    var Dexie$1 = (function() {
      function Dexie3(name, options) {
        var _this = this;
        this._middlewares = {};
        this.verno = 0;
        var deps = Dexie3.dependencies;
        this._options = options = __assign({
          addons: Dexie3.addons,
          autoOpen: true,
          indexedDB: deps.indexedDB,
          IDBKeyRange: deps.IDBKeyRange,
          cache: "cloned"
        }, options);
        this._deps = {
          indexedDB: options.indexedDB,
          IDBKeyRange: options.IDBKeyRange
        };
        var addons = options.addons;
        this._dbSchema = {};
        this._versions = [];
        this._storeNames = [];
        this._allTables = {};
        this.idbdb = null;
        this._novip = this;
        var state = {
          dbOpenError: null,
          isBeingOpened: false,
          onReadyBeingFired: null,
          openComplete: false,
          dbReadyResolve: nop,
          dbReadyPromise: null,
          cancelOpen: nop,
          openCanceller: null,
          autoSchema: true,
          PR1398_maxLoop: 3,
          autoOpen: options.autoOpen
        };
        state.dbReadyPromise = new DexiePromise(function(resolve) {
          state.dbReadyResolve = resolve;
        });
        state.openCanceller = new DexiePromise(function(_, reject) {
          state.cancelOpen = reject;
        });
        this._state = state;
        this.name = name;
        this.on = Events(this, "populate", "blocked", "versionchange", "close", { ready: [promisableChain, nop] });
        this.on.ready.subscribe = override(this.on.ready.subscribe, function(subscribe) {
          return function(subscriber, bSticky) {
            Dexie3.vip(function() {
              var state2 = _this._state;
              if (state2.openComplete) {
                if (!state2.dbOpenError)
                  DexiePromise.resolve().then(subscriber);
                if (bSticky)
                  subscribe(subscriber);
              } else if (state2.onReadyBeingFired) {
                state2.onReadyBeingFired.push(subscriber);
                if (bSticky)
                  subscribe(subscriber);
              } else {
                subscribe(subscriber);
                var db_1 = _this;
                if (!bSticky)
                  subscribe(function unsubscribe() {
                    db_1.on.ready.unsubscribe(subscriber);
                    db_1.on.ready.unsubscribe(unsubscribe);
                  });
              }
            });
          };
        });
        this.Collection = createCollectionConstructor(this);
        this.Table = createTableConstructor(this);
        this.Transaction = createTransactionConstructor(this);
        this.Version = createVersionConstructor(this);
        this.WhereClause = createWhereClauseConstructor(this);
        this.on("versionchange", function(ev) {
          if (ev.newVersion > 0)
            console.warn("Another connection wants to upgrade database '".concat(_this.name, "'. Closing db now to resume the upgrade."));
          else
            console.warn("Another connection wants to delete database '".concat(_this.name, "'. Closing db now to resume the delete request."));
          _this.close({ disableAutoOpen: false });
        });
        this.on("blocked", function(ev) {
          if (!ev.newVersion || ev.newVersion < ev.oldVersion)
            console.warn("Dexie.delete('".concat(_this.name, "') was blocked"));
          else
            console.warn("Upgrade '".concat(_this.name, "' blocked by other connection holding version ").concat(ev.oldVersion / 10));
        });
        this._maxKey = getMaxKey(options.IDBKeyRange);
        this._createTransaction = function(mode, storeNames, dbschema, parentTransaction) {
          return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction);
        };
        this._fireOnBlocked = function(ev) {
          _this.on("blocked").fire(ev);
          connections.filter(function(c) {
            return c.name === _this.name && c !== _this && !c._state.vcFired;
          }).map(function(c) {
            return c.on("versionchange").fire(ev);
          });
        };
        this.use(cacheExistingValuesMiddleware);
        this.use(cacheMiddleware);
        this.use(observabilityMiddleware);
        this.use(virtualIndexMiddleware);
        this.use(hooksMiddleware);
        var vipDB = new Proxy(this, {
          get: function(_, prop, receiver) {
            if (prop === "_vip")
              return true;
            if (prop === "table")
              return function(tableName) {
                return vipify(_this.table(tableName), vipDB);
              };
            var rv = Reflect.get(_, prop, receiver);
            if (rv instanceof Table2)
              return vipify(rv, vipDB);
            if (prop === "tables")
              return rv.map(function(t) {
                return vipify(t, vipDB);
              });
            if (prop === "_createTransaction")
              return function() {
                var tx = rv.apply(this, arguments);
                return vipify(tx, vipDB);
              };
            return rv;
          }
        });
        this.vip = vipDB;
        addons.forEach(function(addon) {
          return addon(_this);
        });
      }
      Dexie3.prototype.version = function(versionNumber) {
        if (isNaN(versionNumber) || versionNumber < 0.1)
          throw new exceptions.Type("Given version is not a positive number");
        versionNumber = Math.round(versionNumber * 10) / 10;
        if (this.idbdb || this._state.isBeingOpened)
          throw new exceptions.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, versionNumber);
        var versions = this._versions;
        var versionInstance = versions.filter(function(v) {
          return v._cfg.version === versionNumber;
        })[0];
        if (versionInstance)
          return versionInstance;
        versionInstance = new this.Version(versionNumber);
        versions.push(versionInstance);
        versions.sort(lowerVersionFirst);
        versionInstance.stores({});
        this._state.autoSchema = false;
        return versionInstance;
      };
      Dexie3.prototype._whenReady = function(fn) {
        var _this = this;
        return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise(function(resolve, reject) {
          if (_this._state.openComplete) {
            return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
          }
          if (!_this._state.isBeingOpened) {
            if (!_this._state.autoOpen) {
              reject(new exceptions.DatabaseClosed());
              return;
            }
            _this.open().catch(nop);
          }
          _this._state.dbReadyPromise.then(resolve, reject);
        }).then(fn);
      };
      Dexie3.prototype.use = function(_a2) {
        var stack = _a2.stack, create = _a2.create, level = _a2.level, name = _a2.name;
        if (name)
          this.unuse({ stack, name });
        var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
        middlewares.push({ stack, create, level: level == null ? 10 : level, name });
        middlewares.sort(function(a, b) {
          return a.level - b.level;
        });
        return this;
      };
      Dexie3.prototype.unuse = function(_a2) {
        var stack = _a2.stack, name = _a2.name, create = _a2.create;
        if (stack && this._middlewares[stack]) {
          this._middlewares[stack] = this._middlewares[stack].filter(function(mw) {
            return create ? mw.create !== create : name ? mw.name !== name : false;
          });
        }
        return this;
      };
      Dexie3.prototype.open = function() {
        var _this = this;
        return usePSD(
          globalPSD,
          function() {
            return dexieOpen(_this);
          }
        );
      };
      Dexie3.prototype._close = function() {
        var state = this._state;
        var idx = connections.indexOf(this);
        if (idx >= 0)
          connections.splice(idx, 1);
        if (this.idbdb) {
          try {
            this.idbdb.close();
          } catch (e) {
          }
          this.idbdb = null;
        }
        if (!state.isBeingOpened) {
          state.dbReadyPromise = new DexiePromise(function(resolve) {
            state.dbReadyResolve = resolve;
          });
          state.openCanceller = new DexiePromise(function(_, reject) {
            state.cancelOpen = reject;
          });
        }
      };
      Dexie3.prototype.close = function(_a2) {
        var _b = _a2 === void 0 ? { disableAutoOpen: true } : _a2, disableAutoOpen = _b.disableAutoOpen;
        var state = this._state;
        if (disableAutoOpen) {
          if (state.isBeingOpened) {
            state.cancelOpen(new exceptions.DatabaseClosed());
          }
          this._close();
          state.autoOpen = false;
          state.dbOpenError = new exceptions.DatabaseClosed();
        } else {
          this._close();
          state.autoOpen = this._options.autoOpen || state.isBeingOpened;
          state.openComplete = false;
          state.dbOpenError = null;
        }
      };
      Dexie3.prototype.delete = function(closeOptions) {
        var _this = this;
        if (closeOptions === void 0) {
          closeOptions = { disableAutoOpen: true };
        }
        var hasInvalidArguments = arguments.length > 0 && typeof arguments[0] !== "object";
        var state = this._state;
        return new DexiePromise(function(resolve, reject) {
          var doDelete = function() {
            _this.close(closeOptions);
            var req = _this._deps.indexedDB.deleteDatabase(_this.name);
            req.onsuccess = wrap(function() {
              _onDatabaseDeleted(_this._deps, _this.name);
              resolve();
            });
            req.onerror = eventRejectHandler(reject);
            req.onblocked = _this._fireOnBlocked;
          };
          if (hasInvalidArguments)
            throw new exceptions.InvalidArgument("Invalid closeOptions argument to db.delete()");
          if (state.isBeingOpened) {
            state.dbReadyPromise.then(doDelete);
          } else {
            doDelete();
          }
        });
      };
      Dexie3.prototype.backendDB = function() {
        return this.idbdb;
      };
      Dexie3.prototype.isOpen = function() {
        return this.idbdb !== null;
      };
      Dexie3.prototype.hasBeenClosed = function() {
        var dbOpenError = this._state.dbOpenError;
        return dbOpenError && dbOpenError.name === "DatabaseClosed";
      };
      Dexie3.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      };
      Dexie3.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      };
      Object.defineProperty(Dexie3.prototype, "tables", {
        get: function() {
          var _this = this;
          return keys(this._allTables).map(function(name) {
            return _this._allTables[name];
          });
        },
        enumerable: false,
        configurable: true
      });
      Dexie3.prototype.transaction = function() {
        var args = extractTransactionArgs.apply(this, arguments);
        return this._transaction.apply(this, args);
      };
      Dexie3.prototype._transaction = function(mode, tables, scopeFunc) {
        var _this = this;
        var parentTransaction = PSD.trans;
        if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1)
          parentTransaction = null;
        var onlyIfCompatible = mode.indexOf("?") !== -1;
        mode = mode.replace("!", "").replace("?", "");
        var idbMode, storeNames;
        try {
          storeNames = tables.map(function(table) {
            var storeName = table instanceof _this.Table ? table.name : table;
            if (typeof storeName !== "string")
              throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return storeName;
          });
          if (mode == "r" || mode === READONLY)
            idbMode = READONLY;
          else if (mode == "rw" || mode == READWRITE)
            idbMode = READWRITE;
          else
            throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
          if (parentTransaction) {
            if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
              if (onlyIfCompatible) {
                parentTransaction = null;
              } else
                throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            }
            if (parentTransaction) {
              storeNames.forEach(function(storeName) {
                if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                  if (onlyIfCompatible) {
                    parentTransaction = null;
                  } else
                    throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
                }
              });
            }
            if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
              parentTransaction = null;
            }
          }
        } catch (e) {
          return parentTransaction ? parentTransaction._promise(null, function(_, reject) {
            reject(e);
          }) : rejection(e);
        }
        var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
        return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function() {
          return _this._whenReady(enterTransaction);
        }) : this._whenReady(enterTransaction);
      };
      Dexie3.prototype.table = function(tableName) {
        if (!hasOwn(this._allTables, tableName)) {
          throw new exceptions.InvalidTable("Table ".concat(tableName, " does not exist"));
        }
        return this._allTables[tableName];
      };
      return Dexie3;
    })();
    var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
    var Observable = (function() {
      function Observable2(subscribe) {
        this._subscribe = subscribe;
      }
      Observable2.prototype.subscribe = function(x, error, complete) {
        return this._subscribe(!x || typeof x === "function" ? { next: x, error, complete } : x);
      };
      Observable2.prototype[symbolObservable] = function() {
        return this;
      };
      return Observable2;
    })();
    var domDeps;
    try {
      domDeps = {
        indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
        IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
      };
    } catch (e) {
      domDeps = { indexedDB: null, IDBKeyRange: null };
    }
    function liveQuery(querier) {
      var hasValue = false;
      var currentValue;
      var observable = new Observable(function(observer) {
        var scopeFuncIsAsync = isAsyncFunction(querier);
        function execute(ctx) {
          var wasRootExec = beginMicroTickScope();
          try {
            if (scopeFuncIsAsync) {
              incrementExpectedAwaits();
            }
            var rv = newScope(querier, ctx);
            if (scopeFuncIsAsync) {
              rv = rv.finally(decrementExpectedAwaits);
            }
            return rv;
          } finally {
            wasRootExec && endMicroTickScope();
          }
        }
        var closed = false;
        var abortController;
        var accumMuts = {};
        var currentObs = {};
        var subscription = {
          get closed() {
            return closed;
          },
          unsubscribe: function() {
            if (closed)
              return;
            closed = true;
            if (abortController)
              abortController.abort();
            if (startedListening)
              globalEvents.storagemutated.unsubscribe(mutationListener);
          }
        };
        observer.start && observer.start(subscription);
        var startedListening = false;
        var doQuery = function() {
          return execInGlobalContext(_doQuery);
        };
        function shouldNotify() {
          return obsSetsOverlap(currentObs, accumMuts);
        }
        var mutationListener = function(parts) {
          extendObservabilitySet(accumMuts, parts);
          if (shouldNotify()) {
            doQuery();
          }
        };
        var _doQuery = function() {
          if (closed || !domDeps.indexedDB) {
            return;
          }
          accumMuts = {};
          var subscr = {};
          if (abortController)
            abortController.abort();
          abortController = new AbortController();
          var ctx = {
            subscr,
            signal: abortController.signal,
            requery: doQuery,
            querier,
            trans: null
          };
          var ret = execute(ctx);
          Promise.resolve(ret).then(function(result) {
            hasValue = true;
            currentValue = result;
            if (closed || ctx.signal.aborted) {
              return;
            }
            accumMuts = {};
            currentObs = subscr;
            if (!objectIsEmpty(currentObs) && !startedListening) {
              globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
              startedListening = true;
            }
            execInGlobalContext(function() {
              return !closed && observer.next && observer.next(result);
            });
          }, function(err) {
            hasValue = false;
            if (!["DatabaseClosedError", "AbortError"].includes(err === null || err === void 0 ? void 0 : err.name)) {
              if (!closed)
                execInGlobalContext(function() {
                  if (closed)
                    return;
                  observer.error && observer.error(err);
                });
            }
          });
        };
        setTimeout(doQuery, 0);
        return subscription;
      });
      observable.hasValue = function() {
        return hasValue;
      };
      observable.getValue = function() {
        return currentValue;
      };
      return observable;
    }
    var Dexie2 = Dexie$1;
    props(Dexie2, __assign(__assign({}, fullNameExceptions), {
      delete: function(databaseName) {
        var db2 = new Dexie2(databaseName, { addons: [] });
        return db2.delete();
      },
      exists: function(name) {
        return new Dexie2(name, { addons: [] }).open().then(function(db2) {
          db2.close();
          return true;
        }).catch("NoSuchDatabaseError", function() {
          return false;
        });
      },
      getDatabaseNames: function(cb) {
        try {
          return getDatabaseNames(Dexie2.dependencies).then(cb);
        } catch (_a2) {
          return rejection(new exceptions.MissingAPI());
        }
      },
      defineClass: function() {
        function Class(content) {
          extend(this, content);
        }
        return Class;
      },
      ignoreTransaction: function(scopeFunc) {
        return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
      },
      vip,
      async: function(generatorFn) {
        return function() {
          try {
            var rv = awaitIterator(generatorFn.apply(this, arguments));
            if (!rv || typeof rv.then !== "function")
              return DexiePromise.resolve(rv);
            return rv;
          } catch (e) {
            return rejection(e);
          }
        };
      },
      spawn: function(generatorFn, args, thiz) {
        try {
          var rv = awaitIterator(generatorFn.apply(thiz, args || []));
          if (!rv || typeof rv.then !== "function")
            return DexiePromise.resolve(rv);
          return rv;
        } catch (e) {
          return rejection(e);
        }
      },
      currentTransaction: {
        get: function() {
          return PSD.trans || null;
        }
      },
      waitFor: function(promiseOrFunction, optionalTimeout) {
        var promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie2.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
        return PSD.trans ? PSD.trans.waitFor(promise) : promise;
      },
      Promise: DexiePromise,
      debug: {
        get: function() {
          return debug;
        },
        set: function(value) {
          setDebug(value);
        }
      },
      derive,
      extend,
      props,
      override,
      Events,
      on: globalEvents,
      liveQuery,
      extendObservabilitySet,
      getByKeyPath,
      setByKeyPath,
      delByKeyPath,
      shallowClone,
      deepClone,
      getObjectDiff,
      cmp,
      asap: asap$1,
      minKey,
      addons: [],
      connections,
      errnames,
      dependencies: domDeps,
      cache,
      semVer: DEXIE_VERSION,
      version: DEXIE_VERSION.split(".").map(function(n) {
        return parseInt(n);
      }).reduce(function(p, c, i) {
        return p + c / Math.pow(10, i * 2);
      })
    }));
    Dexie2.maxKey = getMaxKey(Dexie2.dependencies.IDBKeyRange);
    if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
      globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(updatedParts) {
        if (!propagatingLocally) {
          var event_1;
          event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
            detail: updatedParts
          });
          propagatingLocally = true;
          dispatchEvent(event_1);
          propagatingLocally = false;
        }
      });
      addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function(_a2) {
        var detail = _a2.detail;
        if (!propagatingLocally) {
          propagateLocally(detail);
        }
      });
    }
    function propagateLocally(updateParts) {
      var wasMe = propagatingLocally;
      try {
        propagatingLocally = true;
        globalEvents.storagemutated.fire(updateParts);
        signalSubscribersNow(updateParts, true);
      } finally {
        propagatingLocally = wasMe;
      }
    }
    var propagatingLocally = false;
    var bc;
    var createBC = function() {
    };
    if (typeof BroadcastChannel !== "undefined") {
      createBC = function() {
        bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
        bc.onmessage = function(ev) {
          return ev.data && propagateLocally(ev.data);
        };
      };
      createBC();
      if (typeof bc.unref === "function") {
        bc.unref();
      }
      globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(changedParts) {
        if (!propagatingLocally) {
          bc.postMessage(changedParts);
        }
      });
    }
    if (typeof addEventListener !== "undefined") {
      addEventListener("pagehide", function(event) {
        if (!Dexie$1.disableBfCache && event.persisted) {
          if (debug)
            console.debug("Dexie: handling persisted pagehide");
          bc === null || bc === void 0 ? void 0 : bc.close();
          for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
            var db2 = connections_1[_i];
            db2.close({ disableAutoOpen: false });
          }
        }
      });
      addEventListener("pageshow", function(event) {
        if (!Dexie$1.disableBfCache && event.persisted) {
          if (debug)
            console.debug("Dexie: handling persisted pageshow");
          createBC();
          propagateLocally({ all: new RangeSet(-Infinity, [[]]) });
        }
      });
    }
    function add(value) {
      return new PropModification({ add: value });
    }
    function remove(value) {
      return new PropModification({ remove: value });
    }
    function replacePrefix(a, b) {
      return new PropModification({ replacePrefix: [a, b] });
    }
    DexiePromise.rejectionMapper = mapError;
    setDebug(debug);
    var namedExports = Object.freeze({
      __proto__: null,
      Dexie: Dexie$1,
      liveQuery,
      Entity,
      cmp,
      PropModSymbol,
      PropModification,
      replacePrefix,
      add,
      remove,
      "default": Dexie$1,
      RangeSet,
      mergeRanges,
      rangesOverlap
    });
    __assign(Dexie$1, namedExports, { default: Dexie$1 });
    return Dexie$1;
  }));
})(dexie);
var dexieExports = dexie.exports;
var _Dexie = getDefaultExportFromCjs(dexieExports);
var DexieSymbol = Symbol.for("Dexie");
var Dexie = globalThis[DexieSymbol] || (globalThis[DexieSymbol] = _Dexie);
if (_Dexie.semVer !== Dexie.semVer) {
  throw new Error(`Two different versions of Dexie loaded in the same app: ${_Dexie.semVer} and ${Dexie.semVer}`);
}
var mapOption = (value, func) => {
  return value != void 0 ? func(value) : void 0;
};
var logWebStoreError = (error, errorContext) => {
  if (error instanceof Dexie.DexieError) {
    if (errorContext) {
      console.error(`${errorContext}: Indexdb error (${error.name}): ${error.message}`);
    } else {
      console.error(`Indexdb error: (${error.name}): ${error.message}`);
    }
    mapOption(error.stack, (stack) => {
      console.error(`Stacktrace: 
 ${stack}`);
    });
    mapOption(error.inner, (innerException) => logWebStoreError(innerException));
  } else if (error instanceof Error) {
    console.error(`Unexpected error while accessing indexdb: ${error.toString()}`);
    mapOption(error.stack, (stack) => {
      console.error(`Stacktrace: ${stack}`);
    });
  } else {
    console.error(`Got an exception with a non-error value, as JSON: 
 ${JSON.stringify(error)}. As String 
 ${String(error)} `);
    console.trace();
  }
  throw error;
};
var uint8ArrayToBase64 = (bytes) => {
  const binary = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  return btoa(binary);
};
var DATABASE_NAME = "MidenClientDB";
async function openDatabase() {
  console.log("Opening database...");
  try {
    await db.open();
    console.log("Database opened successfully");
    return true;
  } catch (err) {
    logWebStoreError(err, "Failed to open database");
    return false;
  }
}
var Table;
(function(Table2) {
  Table2["AccountCode"] = "accountCode";
  Table2["AccountStorage"] = "accountStorage";
  Table2["AccountAssets"] = "accountAssets";
  Table2["StorageMapEntries"] = "storageMapEntries";
  Table2["AccountAuth"] = "accountAuth";
  Table2["Accounts"] = "accounts";
  Table2["Addresses"] = "addresses";
  Table2["Transactions"] = "transactions";
  Table2["TransactionScripts"] = "transactionScripts";
  Table2["InputNotes"] = "inputNotes";
  Table2["OutputNotes"] = "outputNotes";
  Table2["NotesScripts"] = "notesScripts";
  Table2["StateSync"] = "stateSync";
  Table2["BlockHeaders"] = "blockHeaders";
  Table2["PartialBlockchainNodes"] = "partialBlockchainNodes";
  Table2["Tags"] = "tags";
  Table2["ForeignAccountCode"] = "foreignAccountCode";
  Table2["Settings"] = "settings";
  Table2["TrackedAccounts"] = "trackedAccounts";
})(Table || (Table = {}));
var db = new Dexie(DATABASE_NAME);
db.version(1).stores({
  [Table.AccountCode]: indexes("root"),
  [Table.AccountStorage]: indexes("[commitment+slotIndex]", "commitment"),
  [Table.StorageMapEntries]: indexes("[root+key]", "root"),
  [Table.AccountAssets]: indexes("[root+vaultKey]", "root", "faucetIdPrefix"),
  [Table.AccountAuth]: indexes("pubKey"),
  [Table.Accounts]: indexes("&accountCommitment", "id", "[id+nonce]", "codeRoot", "storageRoot", "vaultRoot"),
  [Table.Addresses]: indexes("address", "id"),
  [Table.Transactions]: indexes("id", "statusVariant"),
  [Table.TransactionScripts]: indexes("scriptRoot"),
  [Table.InputNotes]: indexes("noteId", "nullifier", "stateDiscriminant"),
  [Table.OutputNotes]: indexes("noteId", "recipientDigest", "stateDiscriminant", "nullifier"),
  [Table.NotesScripts]: indexes("scriptRoot"),
  [Table.StateSync]: indexes("id"),
  [Table.BlockHeaders]: indexes("blockNum", "hasClientNotes"),
  [Table.PartialBlockchainNodes]: indexes("id"),
  [Table.Tags]: indexes("id++", "tag", "source_note_id", "source_account_id"),
  [Table.ForeignAccountCode]: indexes("accountId"),
  [Table.Settings]: indexes("key"),
  [Table.TrackedAccounts]: indexes("&id")
});
function indexes(...items) {
  return items.join(",");
}
db.on("populate", () => {
  stateSync.put({ id: 1, blockNum: "0" }).catch((err) => logWebStoreError(err, "Failed to populate DB"));
});
var accountCodes = db.table(Table.AccountCode);
var accountStorages = db.table(Table.AccountStorage);
var storageMapEntries = db.table(Table.StorageMapEntries);
var accountAssets = db.table(Table.AccountAssets);
var accountAuths = db.table(Table.AccountAuth);
var accounts = db.table(Table.Accounts);
var addresses = db.table(Table.Addresses);
var transactions = db.table(Table.Transactions);
var transactionScripts = db.table(Table.TransactionScripts);
var inputNotes = db.table(Table.InputNotes);
var outputNotes = db.table(Table.OutputNotes);
var notesScripts = db.table(Table.NotesScripts);
var stateSync = db.table(Table.StateSync);
var blockHeaders = db.table(Table.BlockHeaders);
var partialBlockchainNodes = db.table(Table.PartialBlockchainNodes);
var tags = db.table(Table.Tags);
var foreignAccountCode = db.table(Table.ForeignAccountCode);
var settings = db.table(Table.Settings);
var trackedAccounts = db.table(Table.TrackedAccounts);
async function getAccountIds() {
  try {
    const tracked = await trackedAccounts.toArray();
    return tracked.map((entry) => entry.id);
  } catch (error) {
    logWebStoreError(error, "Error while fetching account IDs");
  }
  return [];
}
async function getAllAccountHeaders() {
  try {
    const latestRecordsMap = /* @__PURE__ */ new Map();
    await accounts.each((record) => {
      const existingRecord = latestRecordsMap.get(record.id);
      if (!existingRecord || BigInt(record.nonce) > BigInt(existingRecord.nonce)) {
        latestRecordsMap.set(record.id, record);
      }
    });
    const latestRecords = Array.from(latestRecordsMap.values());
    const resultObject = await Promise.all(latestRecords.map((record) => {
      let accountSeedBase64 = void 0;
      if (record.accountSeed) {
        const seedAsBytes = new Uint8Array(record.accountSeed);
        if (seedAsBytes.length > 0) {
          accountSeedBase64 = uint8ArrayToBase64(seedAsBytes);
        }
      }
      return {
        id: record.id,
        nonce: record.nonce,
        vaultRoot: record.vaultRoot,
        // Fallback if missing
        storageRoot: record.storageRoot || "",
        codeRoot: record.codeRoot || "",
        accountSeed: accountSeedBase64,
        // null or base64 string
        locked: record.locked,
        committed: record.committed,
        // Use actual value or default
        accountCommitment: record.accountCommitment || ""
        // Keep original field name
      };
    }));
    return resultObject;
  } catch (error) {
    logWebStoreError(error, "Error while fetching account headers");
  }
}
async function getAccountHeader(accountId) {
  try {
    const allMatchingRecords = await accounts.where("id").equals(accountId).toArray();
    if (allMatchingRecords.length === 0) {
      console.log("No account header record found for given ID.");
      return null;
    }
    const sortedRecords = allMatchingRecords.sort((a, b) => {
      const bigIntA = BigInt(a.nonce);
      const bigIntB = BigInt(b.nonce);
      return bigIntA > bigIntB ? -1 : bigIntA < bigIntB ? 1 : 0;
    });
    const mostRecentRecord = sortedRecords[0];
    if (mostRecentRecord === void 0) {
      return null;
    }
    let accountSeedBase64 = void 0;
    if (mostRecentRecord.accountSeed) {
      if (mostRecentRecord.accountSeed.length > 0) {
        accountSeedBase64 = uint8ArrayToBase64(mostRecentRecord.accountSeed);
      }
    }
    const AccountHeader2 = {
      id: mostRecentRecord.id,
      nonce: mostRecentRecord.nonce,
      vaultRoot: mostRecentRecord.vaultRoot,
      storageRoot: mostRecentRecord.storageRoot,
      codeRoot: mostRecentRecord.codeRoot,
      accountSeed: accountSeedBase64,
      locked: mostRecentRecord.locked
    };
    return AccountHeader2;
  } catch (error) {
    logWebStoreError(error, `Error while fetching account header for id: ${accountId}`);
  }
}
async function getAccountHeaderByCommitment(accountCommitment) {
  try {
    const allMatchingRecords = await accounts.where("accountCommitment").equals(accountCommitment).toArray();
    if (allMatchingRecords.length == 0) {
      return void 0;
    }
    const matchingRecord = allMatchingRecords[0];
    if (matchingRecord === void 0) {
      console.log("No account header record found for given commitment.");
      return null;
    }
    let accountSeedBase64 = void 0;
    if (matchingRecord.accountSeed) {
      accountSeedBase64 = uint8ArrayToBase64(matchingRecord.accountSeed);
    }
    const AccountHeader2 = {
      id: matchingRecord.id,
      nonce: matchingRecord.nonce,
      vaultRoot: matchingRecord.vaultRoot,
      storageRoot: matchingRecord.storageRoot,
      codeRoot: matchingRecord.codeRoot,
      accountSeed: accountSeedBase64,
      locked: matchingRecord.locked
    };
    return AccountHeader2;
  } catch (error) {
    logWebStoreError(error, `Error fetching account header for commitment ${accountCommitment}`);
  }
}
async function getAccountCode(codeRoot) {
  try {
    const allMatchingRecords = await accountCodes.where("root").equals(codeRoot).toArray();
    const codeRecord = allMatchingRecords[0];
    if (codeRecord === void 0) {
      console.log("No records found for given code root.");
      return null;
    }
    const codeBase64 = uint8ArrayToBase64(codeRecord.code);
    return {
      root: codeRecord.root,
      code: codeBase64
    };
  } catch (error) {
    logWebStoreError(error, `Error fetching account code for root ${codeRoot}`);
  }
}
async function getAccountStorage(storageCommitment) {
  try {
    const allMatchingRecords = await accountStorages.where("commitment").equals(storageCommitment).toArray();
    const slots = allMatchingRecords.map((record) => {
      return {
        slotIndex: record.slotIndex,
        slotValue: record.slotValue,
        slotType: record.slotType
      };
    });
    return slots;
  } catch (error) {
    logWebStoreError(error, `Error fetching account storage for commitment ${storageCommitment}`);
  }
}
async function getAccountStorageMaps(roots) {
  try {
    const allMatchingRecords = await storageMapEntries.where("root").anyOf(roots).toArray();
    return allMatchingRecords;
  } catch (error) {
    logWebStoreError(error, `Error fetching account storage maps for roots ${roots.join(", ")}`);
  }
}
async function getAccountVaultAssets(vaultRoot) {
  try {
    const allMatchingRecords = await accountAssets.where("root").equals(vaultRoot).toArray();
    const assets = allMatchingRecords.map((record) => {
      return {
        asset: record.asset
      };
    });
    return assets;
  } catch (error) {
    logWebStoreError(error, `Error fetching account vault for root ${vaultRoot}`);
  }
}
async function getAccountAuthByPubKey(pubKey) {
  const accountSecretKey = await accountAuths.where("pubKey").equals(pubKey).first();
  if (!accountSecretKey) {
    throw new Error("Account auth not found in cache.");
  }
  const data = {
    secretKey: accountSecretKey.secretKey
  };
  return data;
}
async function getAccountAddresses(accountId) {
  try {
    const allMatchingRecords = await addresses.where("id").equals(accountId).toArray();
    if (allMatchingRecords.length === 0) {
      console.log("No address records found for given account ID.");
      return [];
    }
    return allMatchingRecords;
  } catch (error) {
    logWebStoreError(error, `Error while fetching account addresses for id: ${accountId}`);
  }
}
async function upsertAccountCode(codeRoot, code) {
  try {
    const data = {
      root: codeRoot,
      // Using codeRoot as the key
      code
    };
    await accountCodes.put(data);
  } catch (error) {
    logWebStoreError(error, `Error inserting code with root: ${codeRoot}`);
  }
}
async function upsertAccountStorage(storageSlots) {
  try {
    let processedSlots = storageSlots.map((slot) => {
      return {
        commitment: slot.commitment,
        slotIndex: slot.slotIndex,
        slotValue: slot.slotValue,
        slotType: slot.slotType
      };
    });
    await accountStorages.bulkPut(processedSlots);
  } catch (error) {
    logWebStoreError(error, `Error inserting storage slots`);
  }
}
async function upsertStorageMapEntries(entries) {
  try {
    let processedEntries = entries.map((entry) => {
      return {
        root: entry.root,
        key: entry.key,
        value: entry.value
      };
    });
    await storageMapEntries.bulkPut(processedEntries);
  } catch (error) {
    logWebStoreError(error, `Error inserting storage map entries`);
  }
}
async function upsertVaultAssets(assets) {
  try {
    let processedAssets = assets.map((asset) => {
      return {
        root: asset.root,
        vaultKey: asset.vaultKey,
        faucetIdPrefix: asset.faucetIdPrefix,
        asset: asset.asset
      };
    });
    await accountAssets.bulkPut(processedAssets);
  } catch (error) {
    logWebStoreError(error, `Error inserting assets`);
  }
}
async function upsertAccountRecord(accountId, codeRoot, storageRoot, vaultRoot, nonce, committed, commitment, accountSeed) {
  try {
    const data = {
      id: accountId,
      codeRoot,
      storageRoot,
      vaultRoot,
      nonce,
      committed,
      accountSeed,
      accountCommitment: commitment,
      locked: false
    };
    await accounts.put(data);
    await trackedAccounts.put({ id: accountId });
  } catch (error) {
    logWebStoreError(error, `Error inserting account: ${accountId}`);
  }
}
async function insertAccountAuth(pubKey, secretKey) {
  try {
    const data = {
      pubKey,
      secretKey
    };
    await accountAuths.add(data);
  } catch (error) {
    logWebStoreError(error, `Error inserting account auth for pubKey: ${pubKey}`);
  }
}
async function insertAccountAddress(accountId, address) {
  try {
    const data = {
      id: accountId,
      address
    };
    await addresses.put(data);
  } catch (error) {
    logWebStoreError(error, `Error inserting address with value: ${String(address)} for the account ID ${accountId}`);
  }
}
async function removeAccountAddress(address) {
  try {
    await addresses.where("address").equals(address).delete();
  } catch (error) {
    logWebStoreError(error, `Error removing address with value: ${String(address)}`);
  }
}
async function upsertForeignAccountCode(accountId, code, codeRoot) {
  try {
    await upsertAccountCode(codeRoot, code);
    const data = {
      accountId,
      codeRoot
    };
    await foreignAccountCode.put(data);
  } catch (error) {
    logWebStoreError(error, `Error upserting foreign account code for account: ${accountId}`);
  }
}
async function getForeignAccountCode(accountIds) {
  try {
    const foreignAccounts = await foreignAccountCode.where("accountId").anyOf(accountIds).toArray();
    if (foreignAccounts.length === 0) {
      console.log("No records found for the given account IDs.");
      return null;
    }
    const codeRoots = foreignAccounts.map((account) => account.codeRoot);
    const accountCode = await accountCodes.where("root").anyOf(codeRoots).toArray();
    const processedCode = foreignAccounts.map((foreignAccount) => {
      const matchingCode = accountCode.find((code) => code.root === foreignAccount.codeRoot);
      if (matchingCode === void 0) {
        return void 0;
      }
      const codeBase64 = uint8ArrayToBase64(matchingCode.code);
      return {
        accountId: foreignAccount.accountId,
        code: codeBase64
      };
    }).filter((matchingCode) => matchingCode !== void 0);
    return processedCode;
  } catch (error) {
    logWebStoreError(error, "Error fetching foreign account code");
  }
}
async function lockAccount(accountId) {
  try {
    await accounts.where("id").equals(accountId).modify({ locked: true });
  } catch (error) {
    logWebStoreError(error, `Error locking account: ${accountId}`);
  }
}
async function undoAccountStates(accountCommitments) {
  try {
    await accounts.where("accountCommitment").anyOf(accountCommitments).delete();
  } catch (error) {
    logWebStoreError(error, `Error undoing account states: ${accountCommitments.join(",")}`);
  }
}
async function insertBlockHeader(blockNum, header, partialBlockchainPeaks, hasClientNotes) {
  try {
    const data = {
      blockNum,
      header,
      partialBlockchainPeaks,
      hasClientNotes: hasClientNotes.toString()
    };
    const existingBlockHeader = await blockHeaders.get(blockNum);
    if (!existingBlockHeader) {
      await blockHeaders.add(data);
    } else {
      console.log("Block header already exists, checking for update.");
      if (existingBlockHeader.hasClientNotes === "false" && hasClientNotes) {
        await blockHeaders.update(blockNum, {
          hasClientNotes: hasClientNotes.toString()
        });
        console.log("Updated hasClientNotes to true.");
      } else {
        console.log("No update needed for hasClientNotes.");
      }
    }
  } catch (err) {
    logWebStoreError(err);
  }
}
async function insertPartialBlockchainNodes(ids, nodes) {
  try {
    if (ids.length !== nodes.length) {
      throw new Error("ids and nodes arrays must be of the same length");
    }
    if (ids.length === 0) {
      return;
    }
    const data = nodes.map((node, index) => ({
      id: ids[index],
      node
    }));
    await partialBlockchainNodes.bulkPut(data);
  } catch (err) {
    logWebStoreError(err, "Failed to insert partial blockchain nodes");
  }
}
async function getBlockHeaders(blockNumbers) {
  try {
    const results = await blockHeaders.bulkGet(blockNumbers);
    const processedResults = await Promise.all(results.map((result) => {
      if (result === void 0) {
        return null;
      } else {
        const headerBase64 = uint8ArrayToBase64(result.header);
        const partialBlockchainPeaksBase64 = uint8ArrayToBase64(result.partialBlockchainPeaks);
        return {
          blockNum: result.blockNum,
          header: headerBase64,
          partialBlockchainPeaks: partialBlockchainPeaksBase64,
          hasClientNotes: result.hasClientNotes === "true"
        };
      }
    }));
    return processedResults;
  } catch (err) {
    logWebStoreError(err, "Failed to get block headers");
  }
}
async function getTrackedBlockHeaders() {
  try {
    const allMatchingRecords = await blockHeaders.where("hasClientNotes").equals("true").toArray();
    const processedRecords = await Promise.all(allMatchingRecords.map((record) => {
      const headerBase64 = uint8ArrayToBase64(record.header);
      const partialBlockchainPeaksBase64 = uint8ArrayToBase64(record.partialBlockchainPeaks);
      return {
        blockNum: record.blockNum,
        header: headerBase64,
        partialBlockchainPeaks: partialBlockchainPeaksBase64,
        hasClientNotes: record.hasClientNotes === "true"
      };
    }));
    return processedRecords;
  } catch (err) {
    logWebStoreError(err, "Failed to get tracked block headers");
  }
}
async function getPartialBlockchainPeaksByBlockNum(blockNum) {
  try {
    const blockHeader = await blockHeaders.get(blockNum);
    if (blockHeader == void 0) {
      return {
        peaks: void 0
      };
    }
    const partialBlockchainPeaksBase64 = uint8ArrayToBase64(blockHeader.partialBlockchainPeaks);
    return {
      peaks: partialBlockchainPeaksBase64
    };
  } catch (err) {
    logWebStoreError(err, "Failed to get partial blockchain peaks");
  }
}
async function getPartialBlockchainNodesAll() {
  try {
    const partialBlockchainNodesAll = await partialBlockchainNodes.toArray();
    return partialBlockchainNodesAll;
  } catch (err) {
    logWebStoreError(err, "Failed to get partial blockchain nodes");
  }
}
async function getPartialBlockchainNodes(ids) {
  try {
    const results = await partialBlockchainNodes.bulkGet(ids);
    return results;
  } catch (err) {
    logWebStoreError(err, "Failed to get partial blockchain nodes");
  }
}
async function pruneIrrelevantBlocks() {
  try {
    const syncHeight = await stateSync.get(1);
    if (syncHeight == void 0) {
      throw Error("SyncHeight is undefined -- is the state sync table empty?");
    }
    const allMatchingRecords = await blockHeaders.where("hasClientNotes").equals("false").and((record) => record.blockNum !== "0" && record.blockNum !== syncHeight.blockNum).toArray();
    await blockHeaders.bulkDelete(allMatchingRecords.map((r) => r.blockNum));
  } catch (err) {
    logWebStoreError(err, "Failed to prune irrelevant blocks");
  }
}
async function recursivelyTransformForExport(obj) {
  switch (obj.type) {
    case "Uint8Array":
      return Array.from(obj.value);
    case "Blob":
      return {
        __type: "Blob",
        data: uint8ArrayToBase64(new Uint8Array(await obj.value.arrayBuffer()))
      };
    case "Array":
      return await Promise.all(obj.value.map((v) => recursivelyTransformForExport({ type: getInputType(v), value: v })));
    case "Record":
      return Object.fromEntries(await Promise.all(Object.entries(obj.value).map(async ([key, value]) => [
        key,
        await recursivelyTransformForExport({
          type: getInputType(value),
          value
        })
      ])));
    case "Primitive":
      return obj.value;
  }
}
function getInputType(value) {
  if (value instanceof Uint8Array)
    return "Uint8Array";
  if (value instanceof Blob)
    return "Blob";
  if (Array.isArray(value))
    return "Array";
  if (value && typeof value === "object")
    return "Record";
  return "Primitive";
}
async function transformForExport(obj) {
  return recursivelyTransformForExport({ type: getInputType(obj), value: obj });
}
async function exportStore() {
  const dbJson = {};
  for (const table of db.tables) {
    const records = await table.toArray();
    dbJson[table.name] = await Promise.all(records.map(transformForExport));
  }
  return JSON.stringify(dbJson);
}
async function recursivelyTransformForImport(obj) {
  switch (obj.type) {
    case "Blob":
      return new Blob([base64ToUint8Array(obj.value.data)]);
    case "Array":
      return await Promise.all(obj.value.map((v) => recursivelyTransformForImport({ type: getImportType(v), value: v })));
    case "Object":
      return Object.fromEntries(await Promise.all(Object.entries(obj.value).map(async ([key, value]) => [
        key,
        await recursivelyTransformForImport({
          type: getImportType(value),
          value
        })
      ])));
    case "Primitive":
      return obj.value;
  }
}
function getImportType(value) {
  if (value && typeof value === "object" && value.__type === "Blob") {
    return "Blob";
  }
  if (Array.isArray(value))
    return "Array";
  if (value && typeof value === "object")
    return "Object";
  return "Primitive";
}
async function transformForImport(obj) {
  return recursivelyTransformForImport({
    type: getImportType(obj),
    value: obj
  });
}
async function forceImportStore(jsonStr) {
  try {
    if (!db.isOpen) {
      await openDatabase();
    }
    let dbJson = JSON.parse(jsonStr);
    if (typeof dbJson === "string") {
      dbJson = JSON.parse(dbJson);
    }
    const jsonTableNames = Object.keys(dbJson);
    const dbTableNames = db.tables.map((t) => t.name);
    if (jsonTableNames.length === 0) {
      throw new Error("No tables found in the provided JSON.");
    }
    await db.transaction("rw", dbTableNames, async () => {
      await Promise.all(db.tables.map((t) => t.clear()));
      for (const tableName of jsonTableNames) {
        const table = db.table(tableName);
        if (!dbTableNames.includes(tableName)) {
          console.warn(`Table "${tableName}" does not exist in the database schema. Skipping.`);
          continue;
        }
        const records = dbJson[tableName];
        const transformedRecords = await Promise.all(records.map(transformForImport));
        await table.bulkPut(transformedRecords);
      }
    });
    console.log("Store imported successfully.");
  } catch (err) {
    logWebStoreError(err);
  }
}
function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
async function getOutputNotes(states) {
  try {
    let notes = states.length == 0 ? await outputNotes.toArray() : await outputNotes.where("stateDiscriminant").anyOf(states).toArray();
    return await processOutputNotes(notes);
  } catch (err) {
    logWebStoreError(err, "Failed to get output notes");
  }
}
async function getInputNotes(states) {
  try {
    let notes;
    if (states.length === 0) {
      notes = await inputNotes.toArray();
    } else {
      notes = await inputNotes.where("stateDiscriminant").anyOf(states).toArray();
    }
    return await processInputNotes(notes);
  } catch (err) {
    logWebStoreError(err, "Failed to get input notes");
  }
}
async function getInputNotesFromIds(noteIds) {
  try {
    let notes = await inputNotes.where("noteId").anyOf(noteIds).toArray();
    return await processInputNotes(notes);
  } catch (err) {
    logWebStoreError(err, "Failed to get input notes from IDs");
  }
}
async function getInputNotesFromNullifiers(nullifiers) {
  try {
    let notes = await inputNotes.where("nullifier").anyOf(nullifiers).toArray();
    return await processInputNotes(notes);
  } catch (err) {
    logWebStoreError(err, "Failed to get input notes from nullifiers");
  }
}
async function getOutputNotesFromNullifiers(nullifiers) {
  try {
    let notes = await outputNotes.where("nullifier").anyOf(nullifiers).toArray();
    return await processOutputNotes(notes);
  } catch (err) {
    logWebStoreError(err, "Failed to get output notes from nullifiers");
  }
}
async function getOutputNotesFromIds(noteIds) {
  try {
    let notes = await outputNotes.where("noteId").anyOf(noteIds).toArray();
    return await processOutputNotes(notes);
  } catch (err) {
    logWebStoreError(err, "Failed to get output notes from IDs");
  }
}
async function getUnspentInputNoteNullifiers() {
  try {
    const notes = await inputNotes.where("stateDiscriminant").anyOf([2, 4, 5]).toArray();
    return notes.map((note) => note.nullifier);
  } catch (err) {
    logWebStoreError(err, "Failed to get unspent input note nullifiers");
  }
}
async function getNoteScript(scriptRoot) {
  try {
    const noteScript = await notesScripts.where("scriptRoot").equals(scriptRoot).first();
    return noteScript;
  } catch (err) {
    logWebStoreError(err, "Failed to get note script from root");
  }
}
async function upsertInputNote(noteId, assets, serialNumber, inputs, scriptRoot, serializedNoteScript, nullifier, serializedCreatedAt, stateDiscriminant, state) {
  return db.transaction("rw", inputNotes, notesScripts, async (tx) => {
    try {
      const data = {
        noteId,
        assets,
        serialNumber,
        inputs,
        scriptRoot,
        nullifier,
        state,
        stateDiscriminant,
        serializedCreatedAt
      };
      await tx.inputNotes.put(data);
      const noteScriptData = {
        scriptRoot,
        serializedNoteScript
      };
      await tx.notesScripts.put(noteScriptData);
    } catch (error) {
      logWebStoreError(error, `Error inserting note: ${noteId}`);
    }
  });
}
async function upsertOutputNote(noteId, assets, recipientDigest, metadata, nullifier, expectedHeight, stateDiscriminant, state) {
  return db.transaction("rw", outputNotes, notesScripts, async (tx) => {
    try {
      const data = {
        noteId,
        assets,
        recipientDigest,
        metadata,
        nullifier: nullifier ? nullifier : void 0,
        expectedHeight,
        stateDiscriminant,
        state
      };
      await tx.outputNotes.put(data);
    } catch (error) {
      logWebStoreError(error, `Error inserting note: ${noteId}`);
    }
  });
}
async function processInputNotes(notes) {
  return await Promise.all(notes.map(async (note) => {
    const assetsBase64 = uint8ArrayToBase64(note.assets);
    const serialNumberBase64 = uint8ArrayToBase64(note.serialNumber);
    const inputsBase64 = uint8ArrayToBase64(note.inputs);
    let serializedNoteScriptBase64 = void 0;
    if (note.scriptRoot) {
      let record = await notesScripts.get(note.scriptRoot);
      if (record) {
        serializedNoteScriptBase64 = uint8ArrayToBase64(record.serializedNoteScript);
      }
    }
    const stateBase64 = uint8ArrayToBase64(note.state);
    return {
      assets: assetsBase64,
      serialNumber: serialNumberBase64,
      inputs: inputsBase64,
      createdAt: note.serializedCreatedAt,
      serializedNoteScript: serializedNoteScriptBase64,
      state: stateBase64
    };
  }));
}
async function processOutputNotes(notes) {
  return await Promise.all(notes.map((note) => {
    const assetsBase64 = uint8ArrayToBase64(note.assets);
    const metadataBase64 = uint8ArrayToBase64(note.metadata);
    const stateBase64 = uint8ArrayToBase64(note.state);
    return {
      assets: assetsBase64,
      recipientDigest: note.recipientDigest,
      metadata: metadataBase64,
      expectedHeight: note.expectedHeight,
      state: stateBase64
    };
  }));
}
async function upsertNoteScript(scriptRoot, serializedNoteScript) {
  return db.transaction("rw", outputNotes, notesScripts, async (tx) => {
    try {
      const noteScriptData = {
        scriptRoot,
        serializedNoteScript
      };
      await tx.notesScripts.put(noteScriptData);
    } catch (error) {
      logWebStoreError(error, `Error inserting note script: ${scriptRoot}`);
    }
  });
}
async function getSetting(key) {
  try {
    const allMatchingRecords = await settings.where("key").equals(key).toArray();
    if (allMatchingRecords.length === 0) {
      console.log("No setting record found for given key.");
      return null;
    }
    const matchingRecord = allMatchingRecords[0];
    const valueBase64 = uint8ArrayToBase64(matchingRecord.value);
    return {
      key: matchingRecord.key,
      value: valueBase64
    };
  } catch (error) {
    logWebStoreError(error, `Error while fetching setting key: ${key}`);
  }
}
async function insertSetting(key, value) {
  try {
    const setting = {
      key,
      value
    };
    await settings.put(setting);
  } catch (error) {
    logWebStoreError(error, `Error inserting setting with key: ${key} and value(base64): ${uint8ArrayToBase64(value)}`);
  }
}
async function removeSetting(key) {
  try {
    await settings.where("key").equals(key).delete();
  } catch (error) {
    logWebStoreError(error, `Error deleting setting with key: ${key}`);
  }
}
async function listSettingKeys() {
  try {
    const keys = await settings.toArray().then((settings2) => settings2.map((setting) => setting.key));
    return keys;
  } catch (error) {
    logWebStoreError(error, `Error listing setting keys`);
  }
}
var IDS_FILTER_PREFIX = "Ids:";
var EXPIRED_BEFORE_FILTER_PREFIX = "ExpiredPending:";
var STATUS_PENDING_VARIANT = 0;
var STATUS_COMMITTED_VARIANT = 1;
var STATUS_DISCARDED_VARIANT = 2;
async function getTransactions(filter) {
  let transactionRecords = [];
  try {
    if (filter === "Uncommitted") {
      transactionRecords = await transactions.filter((tx) => tx.statusVariant === STATUS_PENDING_VARIANT).toArray();
    } else if (filter.startsWith(IDS_FILTER_PREFIX)) {
      const idsString = filter.substring(IDS_FILTER_PREFIX.length);
      const ids = idsString.split(",");
      if (ids.length > 0) {
        transactionRecords = await transactions.where("id").anyOf(ids).toArray();
      } else {
        transactionRecords = [];
      }
    } else if (filter.startsWith(EXPIRED_BEFORE_FILTER_PREFIX)) {
      const blockNumString = filter.substring(EXPIRED_BEFORE_FILTER_PREFIX.length);
      const blockNum = parseInt(blockNumString);
      transactionRecords = await transactions.filter((tx) => tx.blockNum < blockNum && tx.statusVariant !== STATUS_COMMITTED_VARIANT && tx.statusVariant !== STATUS_DISCARDED_VARIANT).toArray();
    } else {
      transactionRecords = await transactions.toArray();
    }
    if (transactionRecords.length === 0) {
      return [];
    }
    const scriptRoots = transactionRecords.map((transactionRecord) => {
      return transactionRecord.scriptRoot;
    }).filter((scriptRoot) => scriptRoot != void 0);
    const scripts = await transactionScripts.where("scriptRoot").anyOf(scriptRoots).toArray();
    const scriptMap = /* @__PURE__ */ new Map();
    scripts.forEach((script) => {
      if (script.txScript) {
        scriptMap.set(script.scriptRoot, script.txScript);
      }
    });
    const processedTransactions = await Promise.all(transactionRecords.map((transactionRecord) => {
      let txScriptBase64 = void 0;
      if (transactionRecord.scriptRoot) {
        const txScript = scriptMap.get(transactionRecord.scriptRoot);
        if (txScript) {
          txScriptBase64 = uint8ArrayToBase64(txScript);
        }
      }
      const detailsBase64 = uint8ArrayToBase64(transactionRecord.details);
      const statusBase64 = uint8ArrayToBase64(transactionRecord.status);
      const data = {
        id: transactionRecord.id,
        details: detailsBase64,
        scriptRoot: transactionRecord.scriptRoot,
        txScript: txScriptBase64,
        blockNum: transactionRecord.blockNum.toString(),
        statusVariant: transactionRecord.statusVariant,
        status: statusBase64
      };
      return data;
    }));
    return processedTransactions;
  } catch (err) {
    logWebStoreError(err, "Failed to get transactions");
  }
}
async function insertTransactionScript(scriptRoot, txScript) {
  try {
    const scriptRootArray = new Uint8Array(scriptRoot);
    const scriptRootBase64 = uint8ArrayToBase64(scriptRootArray);
    const data = {
      scriptRoot: scriptRootBase64,
      txScript: mapOption(txScript, (txScript2) => new Uint8Array(txScript2))
    };
    await transactionScripts.put(data);
  } catch (error) {
    logWebStoreError(error, "Failed to insert transaction script");
  }
}
async function upsertTransactionRecord(transactionId, details, blockNum, statusVariant, status, scriptRoot) {
  try {
    const data = {
      id: transactionId,
      details,
      scriptRoot: mapOption(scriptRoot, (root) => uint8ArrayToBase64(root)),
      blockNum: parseInt(blockNum, 10),
      statusVariant,
      status
    };
    await transactions.put(data);
  } catch (err) {
    logWebStoreError(err, "Failed to insert proven transaction data");
  }
}
async function getNoteTags() {
  try {
    let records = await tags.toArray();
    let processedRecords = records.map((record) => {
      record.sourceNoteId = record.sourceNoteId == "" ? void 0 : record.sourceNoteId;
      record.sourceAccountId = record.sourceAccountId == "" ? void 0 : record.sourceAccountId;
      return record;
    });
    return processedRecords;
  } catch (error) {
    logWebStoreError(error, "Error fetch tag record");
  }
}
async function getSyncHeight() {
  try {
    const record = await stateSync.get(1);
    if (record) {
      let data = {
        blockNum: record.blockNum
      };
      return data;
    } else {
      return null;
    }
  } catch (error) {
    logWebStoreError(error, "Error fetching sync height");
  }
}
async function addNoteTag(tag, sourceNoteId, sourceAccountId) {
  try {
    let tagArray = new Uint8Array(tag);
    let tagBase64 = uint8ArrayToBase64(tagArray);
    await tags.add({
      tag: tagBase64,
      sourceNoteId: sourceNoteId ? sourceNoteId : "",
      sourceAccountId: sourceAccountId ? sourceAccountId : ""
    });
  } catch (error) {
    logWebStoreError(error, "Failed to add note tag");
  }
}
async function removeNoteTag(tag, sourceNoteId, sourceAccountId) {
  try {
    let tagArray = new Uint8Array(tag);
    let tagBase64 = uint8ArrayToBase64(tagArray);
    return await tags.where({
      tag: tagBase64,
      sourceNoteId: sourceNoteId ? sourceNoteId : "",
      sourceAccountId: sourceAccountId ? sourceAccountId : ""
    }).delete();
  } catch (error) {
    logWebStoreError(error, "Failed to remove note tag");
  }
}
async function applyStateSync(stateUpdate) {
  const {
    blockNum,
    // Target block number for this sync
    flattenedNewBlockHeaders,
    // Serialized block headers to be reconstructed
    flattenedPartialBlockChainPeaks,
    // Serialized blockchain peaks for verification
    newBlockNums,
    // Block numbers corresponding to new headers
    blockHasRelevantNotes,
    // Flags indicating which blocks have relevant notes
    serializedNodeIds,
    // IDs for new authentication nodes
    serializedNodes,
    // Authentication node data for merkle proofs
    committedNoteIds,
    // Note tags to be cleaned up/removed
    serializedInputNotes,
    // Input notes consumed in transactions
    serializedOutputNotes,
    // Output notes created in transactions
    accountUpdates,
    // Account state changes
    transactionUpdates
    // Transaction records and scripts
  } = stateUpdate;
  const newBlockHeaders = reconstructFlattenedVec(flattenedNewBlockHeaders);
  const partialBlockchainPeaks = reconstructFlattenedVec(flattenedPartialBlockChainPeaks);
  let inputNotesWriteOp = Promise.all(serializedInputNotes.map((note) => {
    return upsertInputNote(note.noteId, note.noteAssets, note.serialNumber, note.inputs, note.noteScriptRoot, note.noteScript, note.nullifier, note.createdAt, note.stateDiscriminant, note.state);
  }));
  let outputNotesWriteOp = Promise.all(serializedOutputNotes.map((note) => {
    return upsertOutputNote(note.noteId, note.noteAssets, note.recipientDigest, note.metadata, note.nullifier, note.expectedHeight, note.stateDiscriminant, note.state);
  }));
  let transactionWriteOp = Promise.all(transactionUpdates.map((transactionRecord) => {
    let promises = [
      upsertTransactionRecord(transactionRecord.id, transactionRecord.details, transactionRecord.blockNum, transactionRecord.statusVariant, transactionRecord.status, transactionRecord.scriptRoot)
    ];
    if (transactionRecord.scriptRoot && transactionRecord.txScript) {
      promises.push(insertTransactionScript(transactionRecord.scriptRoot, transactionRecord.txScript));
    }
    return Promise.all(promises);
  }));
  let accountUpdatesWriteOp = Promise.all(accountUpdates.flatMap((accountUpdate) => {
    return [
      upsertAccountStorage(accountUpdate.storageSlots),
      upsertStorageMapEntries(accountUpdate.storageMapEntries),
      upsertVaultAssets(accountUpdate.assets),
      upsertAccountRecord(accountUpdate.accountId, accountUpdate.codeRoot, accountUpdate.storageRoot, accountUpdate.assetVaultRoot, accountUpdate.nonce, accountUpdate.committed, accountUpdate.accountCommitment, accountUpdate.accountSeed)
    ];
  }));
  const tablesToAccess = [
    stateSync,
    inputNotes,
    outputNotes,
    transactions,
    blockHeaders,
    partialBlockchainNodes,
    tags
  ];
  return await db.transaction("rw", tablesToAccess, async (tx) => {
    await Promise.all([
      inputNotesWriteOp,
      outputNotesWriteOp,
      transactionWriteOp,
      accountUpdatesWriteOp,
      updateSyncHeight(tx, blockNum),
      updatePartialBlockchainNodes(tx, serializedNodeIds, serializedNodes),
      updateCommittedNoteTags(tx, committedNoteIds),
      Promise.all(newBlockHeaders.map((newBlockHeader, i) => {
        return updateBlockHeader(tx, newBlockNums[i], newBlockHeader, partialBlockchainPeaks[i], blockHasRelevantNotes[i] == 1);
      }))
    ]);
  });
}
async function updateSyncHeight(tx, blockNum) {
  try {
    await tx.stateSync.update(1, { blockNum });
  } catch (error) {
    logWebStoreError(error, "Failed to update sync height");
  }
}
async function updateBlockHeader(tx, blockNum, blockHeader, partialBlockchainPeaks, hasClientNotes) {
  try {
    const data = {
      blockNum,
      header: blockHeader,
      partialBlockchainPeaks,
      hasClientNotes: hasClientNotes.toString()
    };
    const existingBlockHeader = await tx.blockHeaders.get(blockNum);
    if (!existingBlockHeader) {
      await tx.blockHeaders.add(data);
    }
  } catch (err) {
    logWebStoreError(err, "Failed to insert block header");
  }
}
async function updatePartialBlockchainNodes(tx, nodeIndexes, nodes) {
  try {
    if (nodeIndexes.length !== nodes.length) {
      throw new Error("nodeIndexes and nodes arrays must be of the same length");
    }
    if (nodeIndexes.length === 0) {
      return;
    }
    const data = nodes.map((node, index) => ({
      id: nodeIndexes[index],
      node
    }));
    await tx.partialBlockchainNodes.bulkPut(data);
  } catch (err) {
    logWebStoreError(err, "Failed to update partial blockchain nodes");
  }
}
async function updateCommittedNoteTags(tx, inputNoteIds) {
  try {
    for (let i = 0; i < inputNoteIds.length; i++) {
      const noteId = inputNoteIds[i];
      await tx.tags.where("source_note_id").equals(noteId).delete();
    }
  } catch (error) {
    logWebStoreError(error, "Failed to pudate committed note tags");
  }
}
function reconstructFlattenedVec(flattenedVec) {
  const data = flattenedVec.data();
  const lengths = flattenedVec.lengths();
  let index = 0;
  const result = [];
  lengths.forEach((length) => {
    result.push(data.slice(index, index + length));
    index += length;
  });
  return result;
}
var wasm;
var cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
var cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var MAX_SAFARI_DECODE_BYTES = 2146435072;
var numBytesDecoded = 0;
function decodeText(ptr, len) {
  numBytesDecoded += len;
  if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
    cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    numBytesDecoded = len;
  }
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return decodeText(ptr, len);
}
var heap = new Array(128).fill(void 0);
heap.push(void 0, null, true, false);
var heap_next = heap.length;
function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function getObject(idx) {
  return heap[idx];
}
var WASM_VECTOR_LEN = 0;
var cachedTextEncoder = new TextEncoder();
if (!("encodeInto" in cachedTextEncoder)) {
  cachedTextEncoder.encodeInto = function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
}
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = cachedTextEncoder.encodeInto(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
var cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === void 0 && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
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
  if (builtInMatches && builtInMatches.length > 1) {
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
function dropObject(idx) {
  if (idx < 132) return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_export4(addHeapObject(e));
  }
}
function getArrayJsValueFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getDataViewMemory0();
  const result = [];
  for (let i = ptr; i < ptr + 4 * len; i += 4) {
    result.push(takeObject(mem.getUint32(i, true)));
  }
  return result;
}
var CLOSURE_DTORS = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((state) => state.dtor(state.a, state.b));
function makeMutClosure(arg0, arg1, dtor, f) {
  const state = { a: arg0, b: arg1, cnt: 1, dtor };
  const real = (...args) => {
    state.cnt++;
    const a = state.a;
    state.a = 0;
    try {
      return f(a, state.b, ...args);
    } finally {
      state.a = a;
      real._wbg_cb_unref();
    }
  };
  real._wbg_cb_unref = () => {
    if (--state.cnt === 0) {
      state.dtor(state.a, state.b);
      state.a = 0;
      CLOSURE_DTORS.unregister(state);
    }
  };
  CLOSURE_DTORS.register(real, state, state);
  return real;
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
}
function passArrayJsValueToWasm0(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  const mem = getDataViewMemory0();
  for (let i = 0; i < array.length; i++) {
    mem.setUint32(ptr + 4 * i, addHeapObject(array[i]), true);
  }
  WASM_VECTOR_LEN = array.length;
  return ptr;
}
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
var stack_pointer = 128;
function addBorrowedObject(obj) {
  if (stack_pointer == 1) throw new Error("out of js stack");
  heap[--stack_pointer] = obj;
  return stack_pointer;
}
var cachedBigUint64ArrayMemory0 = null;
function getBigUint64ArrayMemory0() {
  if (cachedBigUint64ArrayMemory0 === null || cachedBigUint64ArrayMemory0.byteLength === 0) {
    cachedBigUint64ArrayMemory0 = new BigUint64Array(wasm.memory.buffer);
  }
  return cachedBigUint64ArrayMemory0;
}
function passArray64ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 8, 8) >>> 0;
  getBigUint64ArrayMemory0().set(arg, ptr / 8);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function getArrayU64FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getBigUint64ArrayMemory0().subarray(ptr / 8, ptr / 8 + len);
}
var cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
  if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
    cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
  }
  return cachedUint32ArrayMemory0;
}
function getArrayU32FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}
function __wasm_bindgen_func_elem_10070(arg0, arg1) {
  wasm.__wasm_bindgen_func_elem_10070(arg0, arg1);
}
function __wasm_bindgen_func_elem_10140(arg0, arg1, arg2) {
  wasm.__wasm_bindgen_func_elem_10140(arg0, arg1, addHeapObject(arg2));
}
function __wasm_bindgen_func_elem_3930(arg0, arg1, arg2, arg3) {
  wasm.__wasm_bindgen_func_elem_3930(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}
var AccountInterface = Object.freeze({
  BasicWallet: 0,
  "0": "BasicWallet"
});
var AccountType = Object.freeze({
  FungibleFaucet: 0,
  "0": "FungibleFaucet",
  NonFungibleFaucet: 1,
  "1": "NonFungibleFaucet",
  RegularAccountImmutableCode: 2,
  "2": "RegularAccountImmutableCode",
  RegularAccountUpdatableCode: 3,
  "3": "RegularAccountUpdatableCode"
});
var InputNoteState = Object.freeze({
  Expected: 0,
  "0": "Expected",
  Unverified: 1,
  "1": "Unverified",
  Committed: 2,
  "2": "Committed",
  Invalid: 3,
  "3": "Invalid",
  ProcessingAuthenticated: 4,
  "4": "ProcessingAuthenticated",
  ProcessingUnauthenticated: 5,
  "5": "ProcessingUnauthenticated",
  ConsumedAuthenticatedLocal: 6,
  "6": "ConsumedAuthenticatedLocal",
  ConsumedUnauthenticatedLocal: 7,
  "7": "ConsumedUnauthenticatedLocal",
  ConsumedExternal: 8,
  "8": "ConsumedExternal"
});
var NetworkId = Object.freeze({
  Mainnet: 0,
  "0": "Mainnet",
  Testnet: 1,
  "1": "Testnet",
  Devnet: 2,
  "2": "Devnet"
});
var NoteFilterTypes = Object.freeze({
  All: 0,
  "0": "All",
  Consumed: 1,
  "1": "Consumed",
  Committed: 2,
  "2": "Committed",
  Expected: 3,
  "3": "Expected",
  Processing: 4,
  "4": "Processing",
  List: 5,
  "5": "List",
  Unique: 6,
  "6": "Unique",
  Nullifiers: 7,
  "7": "Nullifiers",
  Unverified: 8,
  "8": "Unverified"
});
var NoteType = Object.freeze({
  /**
   * Notes with this type have only their hash published to the network.
   */
  Private: 2,
  "2": "Private",
  /**
   * Notes with this type are shared with the network encrypted.
   */
  Encrypted: 3,
  "3": "Encrypted",
  /**
   * Notes with this type are fully shared with the network.
   */
  Public: 1,
  "1": "Public"
});
var SigningInputsType = Object.freeze({
  TransactionSummary: 0,
  "0": "TransactionSummary",
  Arbitrary: 1,
  "1": "Arbitrary",
  Blind: 2,
  "2": "Blind"
});
var __wbindgen_enum_AddressInterface = ["BasicWallet"];
var __wbindgen_enum_ReadableStreamType = ["bytes"];
var __wbindgen_enum_ReferrerPolicy = ["", "no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "unsafe-url", "same-origin", "strict-origin", "strict-origin-when-cross-origin"];
var __wbindgen_enum_RequestCache = ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"];
var __wbindgen_enum_RequestCredentials = ["omit", "same-origin", "include"];
var __wbindgen_enum_RequestMode = ["same-origin", "no-cors", "cors", "navigate"];
var __wbindgen_enum_RequestRedirect = ["follow", "error", "manual"];
var AccountFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_account_free(ptr >>> 0, 1));
var Account = class _Account {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Account.prototype);
    obj.__wbg_ptr = ptr;
    AccountFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _Account)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_account_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  commitment() {
    const ret = wasm.account_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  isNetwork() {
    const ret = wasm.account_isNetwork(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {boolean}
   */
  isPrivate() {
    const ret = wasm.account_isPrivate(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {Account}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.account_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _Account.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @returns {boolean}
   */
  isUpdatable() {
    const ret = wasm.account_isUpdatable(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {Word[]}
   */
  getPublicKeys() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.account_getPublicKeys(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {boolean}
   */
  isRegularAccount() {
    const ret = wasm.account_isRegularAccount(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {AccountId}
   */
  id() {
    const ret = wasm.account_id(this.__wbg_ptr);
    return AccountId.__wrap(ret);
  }
  /**
   * @returns {AccountCode}
   */
  code() {
    const ret = wasm.account_code(this.__wbg_ptr);
    return AccountCode.__wrap(ret);
  }
  /**
   * @returns {Felt}
   */
  nonce() {
    const ret = wasm.account_nonce(this.__wbg_ptr);
    return Felt.__wrap(ret);
  }
  /**
   * @returns {AssetVault}
   */
  vault() {
    const ret = wasm.account_vault(this.__wbg_ptr);
    return AssetVault.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  isNew() {
    const ret = wasm.account_isNew(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {AccountStorage}
   */
  storage() {
    const ret = wasm.account_storage(this.__wbg_ptr);
    return AccountStorage.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  isFaucet() {
    const ret = wasm.account_isFaucet(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {boolean}
   */
  isPublic() {
    const ret = wasm.account_isPublic(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.account_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) Account.prototype[Symbol.dispose] = Account.prototype.free;
var AccountArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountarray_free(ptr >>> 0, 1));
var AccountArray = class {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountarray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {Account} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, Account);
      var ptr0 = elem.__destroy_into_raw();
      wasm.accountarray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {Account}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountarray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return Account.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Account[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.accountarray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    AccountArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {Account} element
   */
  push(element) {
    _assertClass(element, Account);
    wasm.accountarray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.accountarray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) AccountArray.prototype[Symbol.dispose] = AccountArray.prototype.free;
var AccountBuilderFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountbuilder_free(ptr >>> 0, 1));
var AccountBuilder = class _AccountBuilder {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountBuilder.prototype);
    obj.__wbg_ptr = ptr;
    AccountBuilderFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountBuilderFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountbuilder_free(ptr, 0);
  }
  /**
   * @param {AccountType} account_type
   * @returns {AccountBuilder}
   */
  accountType(account_type) {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.accountbuilder_accountType(ptr, account_type);
    return _AccountBuilder.__wrap(ret);
  }
  /**
   * @param {AccountStorageMode} storage_mode
   * @returns {AccountBuilder}
   */
  storageMode(storage_mode) {
    const ptr = this.__destroy_into_raw();
    _assertClass(storage_mode, AccountStorageMode);
    const ret = wasm.accountbuilder_storageMode(ptr, storage_mode.__wbg_ptr);
    return _AccountBuilder.__wrap(ret);
  }
  /**
   * @param {AccountComponent} account_component
   * @returns {AccountBuilder}
   */
  withComponent(account_component) {
    const ptr = this.__destroy_into_raw();
    _assertClass(account_component, AccountComponent);
    const ret = wasm.accountbuilder_withComponent(ptr, account_component.__wbg_ptr);
    return _AccountBuilder.__wrap(ret);
  }
  /**
   * @param {AccountComponent} account_component
   * @returns {AccountBuilder}
   */
  withAuthComponent(account_component) {
    const ptr = this.__destroy_into_raw();
    _assertClass(account_component, AccountComponent);
    const ret = wasm.accountbuilder_withAuthComponent(ptr, account_component.__wbg_ptr);
    return _AccountBuilder.__wrap(ret);
  }
  /**
   * @returns {AccountBuilder}
   */
  withNoAuthComponent() {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.accountbuilder_withNoAuthComponent(ptr);
    return _AccountBuilder.__wrap(ret);
  }
  /**
   * @returns {AccountBuilder}
   */
  withBasicWalletComponent() {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.accountbuilder_withBasicWalletComponent(ptr);
    return _AccountBuilder.__wrap(ret);
  }
  /**
   * @param {Uint8Array} init_seed
   */
  constructor(init_seed) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passArray8ToWasm0(init_seed, wasm.__wbindgen_export);
      const len0 = WASM_VECTOR_LEN;
      wasm.accountbuilder_new(retptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      this.__wbg_ptr = r0 >>> 0;
      AccountBuilderFinalization.register(this, this.__wbg_ptr, this);
      return this;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {AccountBuilderResult}
   */
  build() {
    try {
      const ptr = this.__destroy_into_raw();
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountbuilder_build(retptr, ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return AccountBuilderResult.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) AccountBuilder.prototype[Symbol.dispose] = AccountBuilder.prototype.free;
var AccountBuilderResultFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountbuilderresult_free(ptr >>> 0, 1));
var AccountBuilderResult = class _AccountBuilderResult {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountBuilderResult.prototype);
    obj.__wbg_ptr = ptr;
    AccountBuilderResultFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountBuilderResultFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountbuilderresult_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  get seed() {
    const ret = wasm.accountbuilderresult_seed(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Account}
   */
  get account() {
    const ret = wasm.accountbuilderresult_account(this.__wbg_ptr);
    return Account.__wrap(ret);
  }
};
if (Symbol.dispose) AccountBuilderResult.prototype[Symbol.dispose] = AccountBuilderResult.prototype.free;
var AccountCodeFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountcode_free(ptr >>> 0, 1));
var AccountCode = class _AccountCode {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountCode.prototype);
    obj.__wbg_ptr = ptr;
    AccountCodeFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountCodeFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountcode_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  commitment() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @param {Word} mast_root
   * @returns {boolean}
   */
  hasProcedure(mast_root) {
    _assertClass(mast_root, Word);
    var ptr0 = mast_root.__destroy_into_raw();
    const ret = wasm.accountcode_hasProcedure(this.__wbg_ptr, ptr0);
    return ret !== 0;
  }
};
if (Symbol.dispose) AccountCode.prototype[Symbol.dispose] = AccountCode.prototype.free;
var AccountComponentFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountcomponent_free(ptr >>> 0, 1));
var AccountComponent = class _AccountComponent {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountComponent.prototype);
    obj.__wbg_ptr = ptr;
    AccountComponentFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountComponentFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountcomponent_free(ptr, 0);
  }
  /**
   * @param {Package} _package
   * @param {StorageSlotArray} storage_slots
   * @returns {AccountComponent}
   */
  static fromPackage(_package, storage_slots) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(_package, Package);
      _assertClass(storage_slots, StorageSlotArray);
      wasm.accountcomponent_fromPackage(retptr, _package.__wbg_ptr, storage_slots.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _AccountComponent.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {GetProceduresResultItem[]}
   */
  getProcedures() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountcomponent_getProcedures(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {string} procedure_name
   * @returns {string}
   */
  getProcedureHash(procedure_name) {
    let deferred3_0;
    let deferred3_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(procedure_name, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      wasm.accountcomponent_getProcedureHash(retptr, this.__wbg_ptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      var r3 = getDataViewMemory0().getInt32(retptr + 4 * 3, true);
      var ptr2 = r0;
      var len2 = r1;
      if (r3) {
        ptr2 = 0;
        len2 = 0;
        throw takeObject(r2);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0(ptr2, len2);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred3_0, deferred3_1, 1);
    }
  }
  /**
   * @param {SecretKey} secret_key
   * @returns {AccountComponent}
   */
  static createAuthComponent(secret_key) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(secret_key, SecretKey);
      wasm.accountcomponent_createAuthComponent(retptr, secret_key.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _AccountComponent.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {AccountComponent}
   */
  withSupportsAllTypes() {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.accountcomponent_withSupportsAllTypes(ptr);
    return _AccountComponent.__wrap(ret);
  }
  /**
   * @param {Word} commitment
   * @param {number} auth_scheme_id
   * @returns {AccountComponent}
   */
  static createAuthComponentFromCommitment(commitment, auth_scheme_id) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(commitment, Word);
      wasm.accountcomponent_createAuthComponentFromCommitment(retptr, commitment.__wbg_ptr, auth_scheme_id);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _AccountComponent.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {string} account_code
   * @param {ScriptBuilder} builder
   * @param {StorageSlot[]} storage_slots
   * @returns {AccountComponent}
   */
  static compile(account_code, builder, storage_slots) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(account_code, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      _assertClass(builder, ScriptBuilder);
      const ptr1 = passArrayJsValueToWasm0(storage_slots, wasm.__wbindgen_export);
      const len1 = WASM_VECTOR_LEN;
      wasm.accountcomponent_compile(retptr, ptr0, len0, builder.__wbg_ptr, ptr1, len1);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _AccountComponent.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) AccountComponent.prototype[Symbol.dispose] = AccountComponent.prototype.free;
var AccountDeltaFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountdelta_free(ptr >>> 0, 1));
var AccountDelta = class _AccountDelta {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountDelta.prototype);
    obj.__wbg_ptr = ptr;
    AccountDeltaFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountDeltaFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountdelta_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {AccountDelta}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountdelta_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _AccountDelta.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @returns {Felt}
   */
  nonceDelta() {
    const ret = wasm.accountdelta_nonceDelta(this.__wbg_ptr);
    return Felt.__wrap(ret);
  }
  /**
   * @returns {AccountId}
   */
  id() {
    const ret = wasm.accountdelta_id(this.__wbg_ptr);
    return AccountId.__wrap(ret);
  }
  /**
   * @returns {AccountVaultDelta}
   */
  vault() {
    const ret = wasm.accountdelta_vault(this.__wbg_ptr);
    return AccountVaultDelta.__wrap(ret);
  }
  /**
   * @returns {AccountStorageDelta}
   */
  storage() {
    const ret = wasm.accountdelta_storage(this.__wbg_ptr);
    return AccountStorageDelta.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  isEmpty() {
    const ret = wasm.accountdelta_isEmpty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.accountdelta_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) AccountDelta.prototype[Symbol.dispose] = AccountDelta.prototype.free;
var AccountFileFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountfile_free(ptr >>> 0, 1));
var AccountFile = class _AccountFile {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountFile.prototype);
    obj.__wbg_ptr = ptr;
    AccountFileFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountFileFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountfile_free(ptr, 0);
  }
  /**
   * Deserializes a byte array into an `AccountFile`
   * @param {Uint8Array} bytes
   * @returns {AccountFile}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountfile_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _AccountFile.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * Serializes the `AccountFile` into a byte array
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.accountfile_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) AccountFile.prototype[Symbol.dispose] = AccountFile.prototype.free;
var AccountHeaderFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountheader_free(ptr >>> 0, 1));
var AccountHeader = class _AccountHeader {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountHeader.prototype);
    obj.__wbg_ptr = ptr;
    AccountHeaderFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountHeaderFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountheader_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  commitment() {
    const ret = wasm.accountheader_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  codeCommitment() {
    const ret = wasm.accountheader_codeCommitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  vaultCommitment() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  storageCommitment() {
    const ret = wasm.accountheader_storageCommitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {AccountId}
   */
  id() {
    const ret = wasm.accountheader_id(this.__wbg_ptr);
    return AccountId.__wrap(ret);
  }
  /**
   * @returns {Felt}
   */
  nonce() {
    const ret = wasm.accountheader_nonce(this.__wbg_ptr);
    return Felt.__wrap(ret);
  }
};
if (Symbol.dispose) AccountHeader.prototype[Symbol.dispose] = AccountHeader.prototype.free;
var AccountIdFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountid_free(ptr >>> 0, 1));
var AccountId = class _AccountId {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountId.prototype);
    obj.__wbg_ptr = ptr;
    AccountIdFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _AccountId)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountIdFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountid_free(ptr, 0);
  }
  /**
   * @returns {boolean}
   */
  isNetwork() {
    const ret = wasm.accountid_isNetwork(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {boolean}
   */
  isPrivate() {
    const ret = wasm.accountid_isPrivate(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * Turn this Account ID into its bech32 string representation. This method accepts a custom
   * network ID.
   * @param {string} custom_network_id
   * @param {AccountInterface} account_interface
   * @returns {string}
   */
  toBech32Custom(custom_network_id, account_interface) {
    let deferred3_0;
    let deferred3_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(custom_network_id, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      wasm.accountid_toBech32Custom(retptr, this.__wbg_ptr, ptr0, len0, account_interface);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      var r3 = getDataViewMemory0().getInt32(retptr + 4 * 3, true);
      var ptr2 = r0;
      var len2 = r1;
      if (r3) {
        ptr2 = 0;
        len2 = 0;
        throw takeObject(r2);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0(ptr2, len2);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred3_0, deferred3_1, 1);
    }
  }
  /**
   * @returns {boolean}
   */
  isRegularAccount() {
    const ret = wasm.accountid_isRegularAccount(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {Felt}
   */
  prefix() {
    const ret = wasm.accountid_prefix(this.__wbg_ptr);
    return Felt.__wrap(ret);
  }
  /**
   * @returns {Felt}
   */
  suffix() {
    const ret = wasm.accountid_suffix(this.__wbg_ptr);
    return Felt.__wrap(ret);
  }
  /**
   * @param {string} hex
   * @returns {AccountId}
   */
  static fromHex(hex) {
    const ptr0 = passStringToWasm0(hex, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.accountid_fromHex(ptr0, len0);
    return _AccountId.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  isFaucet() {
    const ret = wasm.accountid_isFaucet(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {boolean}
   */
  isPublic() {
    const ret = wasm.accountid_isPublic(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * Will turn the Account ID into its bech32 string representation. To avoid a potential
   * wrongful encoding, this function will expect only IDs for either mainnet ("mm"),
   * testnet ("mtst") or devnet ("mdev"). To use a custom bech32 prefix, see
   * `Self::to_bech_32_custom`.
   * @param {NetworkId} network_id
   * @param {AccountInterface} account_interface
   * @returns {string}
   */
  toBech32(network_id, account_interface) {
    let deferred2_0;
    let deferred2_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountid_toBech32(retptr, this.__wbg_ptr, network_id, account_interface);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      var r3 = getDataViewMemory0().getInt32(retptr + 4 * 3, true);
      var ptr1 = r0;
      var len1 = r1;
      if (r3) {
        ptr1 = 0;
        len1 = 0;
        throw takeObject(r2);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountid_toString(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) AccountId.prototype[Symbol.dispose] = AccountId.prototype.free;
var AccountIdArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountidarray_free(ptr >>> 0, 1));
var AccountIdArray = class {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountIdArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountidarray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {AccountId} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, AccountId);
      var ptr0 = elem.__destroy_into_raw();
      wasm.accountidarray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {AccountId}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountidarray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return AccountId.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {AccountId[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.accountidarray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    AccountIdArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {AccountId} element
   */
  push(element) {
    _assertClass(element, AccountId);
    wasm.accountidarray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.accountidarray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) AccountIdArray.prototype[Symbol.dispose] = AccountIdArray.prototype.free;
var AccountStorageFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountstorage_free(ptr >>> 0, 1));
var AccountStorage = class _AccountStorage {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountStorage.prototype);
    obj.__wbg_ptr = ptr;
    AccountStorageFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountStorageFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountstorage_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  commitment() {
    const ret = wasm.accountstorage_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @param {number} index
   * @param {Word} key
   * @returns {Word | undefined}
   */
  getMapItem(index, key) {
    _assertClass(key, Word);
    const ret = wasm.accountstorage_getMapItem(this.__wbg_ptr, index, key.__wbg_ptr);
    return ret === 0 ? void 0 : Word.__wrap(ret);
  }
  /**
   * Get all key-value pairs from the map slot at `index`.
   * Returns `undefined` if the slot isn't a map or `index` is out of bounds (0-255).
   * Returns `[]` if the map exists but is empty.
   * @param {number} index
   * @returns {JsStorageMapEntry[] | undefined}
   */
  getMapEntries(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountstorage_getMapEntries(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      let v1;
      if (r0 !== 0) {
        v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_export3(r0, r1 * 4, 4);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {number} index
   * @returns {Word | undefined}
   */
  getItem(index) {
    const ret = wasm.accountstorage_getItem(this.__wbg_ptr, index);
    return ret === 0 ? void 0 : Word.__wrap(ret);
  }
};
if (Symbol.dispose) AccountStorage.prototype[Symbol.dispose] = AccountStorage.prototype.free;
var AccountStorageDeltaFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountstoragedelta_free(ptr >>> 0, 1));
var AccountStorageDelta = class _AccountStorageDelta {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountStorageDelta.prototype);
    obj.__wbg_ptr = ptr;
    AccountStorageDeltaFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountStorageDeltaFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountstoragedelta_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {AccountStorageDelta}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountstoragedelta_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _AccountStorageDelta.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @returns {Word[]}
   */
  values() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountstoragedelta_values(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {boolean}
   */
  isEmpty() {
    const ret = wasm.accountstoragedelta_isEmpty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.accountstoragedelta_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) AccountStorageDelta.prototype[Symbol.dispose] = AccountStorageDelta.prototype.free;
var AccountStorageModeFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountstoragemode_free(ptr >>> 0, 1));
var AccountStorageMode = class _AccountStorageMode {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountStorageMode.prototype);
    obj.__wbg_ptr = ptr;
    AccountStorageModeFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountStorageModeFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountstoragemode_free(ptr, 0);
  }
  /**
   * @param {string} s
   * @returns {AccountStorageMode}
   */
  static tryFromStr(s) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(s, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      wasm.accountstoragemode_tryFromStr(retptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _AccountStorageMode.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {string}
   */
  asStr() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountstoragemode_asStr(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {AccountStorageMode}
   */
  static public() {
    const ret = wasm.accountstoragemode_public();
    return _AccountStorageMode.__wrap(ret);
  }
  /**
   * @returns {AccountStorageMode}
   */
  static network() {
    const ret = wasm.accountstoragemode_network();
    return _AccountStorageMode.__wrap(ret);
  }
  /**
   * @returns {AccountStorageMode}
   */
  static private() {
    const ret = wasm.accountstoragemode_private();
    return _AccountStorageMode.__wrap(ret);
  }
};
if (Symbol.dispose) AccountStorageMode.prototype[Symbol.dispose] = AccountStorageMode.prototype.free;
var AccountStorageRequirementsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountstoragerequirements_free(ptr >>> 0, 1));
var AccountStorageRequirements = class _AccountStorageRequirements {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountStorageRequirements.prototype);
    obj.__wbg_ptr = ptr;
    AccountStorageRequirementsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountStorageRequirementsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountstoragerequirements_free(ptr, 0);
  }
  /**
   * @param {SlotAndKeys[]} slots_and_keys
   * @returns {AccountStorageRequirements}
   */
  static fromSlotAndKeysArray(slots_and_keys) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passArrayJsValueToWasm0(slots_and_keys, wasm.__wbindgen_export);
      const len0 = WASM_VECTOR_LEN;
      wasm.accountstoragerequirements_fromSlotAndKeysArray(retptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _AccountStorageRequirements.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  constructor() {
    const ret = wasm.accountstoragerequirements_new();
    this.__wbg_ptr = ret >>> 0;
    AccountStorageRequirementsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
};
if (Symbol.dispose) AccountStorageRequirements.prototype[Symbol.dispose] = AccountStorageRequirements.prototype.free;
var AccountVaultDeltaFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_accountvaultdelta_free(ptr >>> 0, 1));
var AccountVaultDelta = class _AccountVaultDelta {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AccountVaultDelta.prototype);
    obj.__wbg_ptr = ptr;
    AccountVaultDeltaFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AccountVaultDeltaFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_accountvaultdelta_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {AccountVaultDelta}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountvaultdelta_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _AccountVaultDelta.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @returns {FungibleAsset[]}
   */
  addedFungibleAssets() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountvaultdelta_addedFungibleAssets(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {FungibleAsset[]}
   */
  removedFungibleAssets() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.accountvaultdelta_removedFungibleAssets(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {FungibleAssetDelta}
   */
  fungible() {
    const ret = wasm.accountvaultdelta_fungible(this.__wbg_ptr);
    return FungibleAssetDelta.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  isEmpty() {
    const ret = wasm.accountstoragedelta_isEmpty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.accountvaultdelta_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) AccountVaultDelta.prototype[Symbol.dispose] = AccountVaultDelta.prototype.free;
var AddressFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_address_free(ptr >>> 0, 1));
var Address = class _Address {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Address.prototype);
    obj.__wbg_ptr = ptr;
    AddressFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AddressFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_address_free(ptr, 0);
  }
  /**
   * @returns {AccountId}
   */
  accountId() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.address_accountId(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return AccountId.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {string} bech32
   * @returns {Address}
   */
  static fromBech32(bech32) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(bech32, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      wasm.address_fromBech32(retptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _Address.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {NoteTag}
   */
  toNoteTag() {
    const ret = wasm.address_toNoteTag(this.__wbg_ptr);
    return NoteTag.__wrap(ret);
  }
  /**
   * @param {AccountId} account_id
   * @param {string | null} [_interface]
   * @returns {Address}
   */
  static fromAccountId(account_id, _interface) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(account_id, AccountId);
      var ptr0 = isLikeNone(_interface) ? 0 : passStringToWasm0(_interface, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      var len0 = WASM_VECTOR_LEN;
      wasm.address_fromAccountId(retptr, account_id.__wbg_ptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _Address.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {AddressInterface}
   */
  interface() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.address_interface(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return __wbindgen_enum_AddressInterface[r0];
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {NetworkId} network_id
   * @returns {string}
   */
  toBech32(network_id) {
    let deferred2_0;
    let deferred2_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.address_toBech32(retptr, this.__wbg_ptr, network_id);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      var r3 = getDataViewMemory0().getInt32(retptr + 4 * 3, true);
      var ptr1 = r0;
      var len1 = r1;
      if (r3) {
        ptr1 = 0;
        len1 = 0;
        throw takeObject(r2);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred2_0, deferred2_1, 1);
    }
  }
};
if (Symbol.dispose) Address.prototype[Symbol.dispose] = Address.prototype.free;
var AdviceInputsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_adviceinputs_free(ptr >>> 0, 1));
var AdviceInputs = class _AdviceInputs {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AdviceInputs.prototype);
    obj.__wbg_ptr = ptr;
    AdviceInputsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AdviceInputsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_adviceinputs_free(ptr, 0);
  }
  /**
   * @param {Word} key
   * @returns {Felt[] | undefined}
   */
  mappedValues(key) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(key, Word);
      wasm.adviceinputs_mappedValues(retptr, this.__wbg_ptr, key.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      let v1;
      if (r0 !== 0) {
        v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_export3(r0, r1 * 4, 4);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Felt[]}
   */
  stack() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.adviceinputs_stack(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) AdviceInputs.prototype[Symbol.dispose] = AdviceInputs.prototype.free;
var AdviceMapFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_advicemap_free(ptr >>> 0, 1));
var AdviceMap = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AdviceMapFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_advicemap_free(ptr, 0);
  }
  constructor() {
    const ret = wasm.accountstoragerequirements_new();
    this.__wbg_ptr = ret >>> 0;
    AdviceMapFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {Word} key
   * @param {FeltArray} value
   * @returns {Felt[] | undefined}
   */
  insert(key, value) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(key, Word);
      _assertClass(value, FeltArray);
      wasm.advicemap_insert(retptr, this.__wbg_ptr, key.__wbg_ptr, value.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      let v1;
      if (r0 !== 0) {
        v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_export3(r0, r1 * 4, 4);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) AdviceMap.prototype[Symbol.dispose] = AdviceMap.prototype.free;
var AssetVaultFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_assetvault_free(ptr >>> 0, 1));
var AssetVault = class _AssetVault {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AssetVault.prototype);
    obj.__wbg_ptr = ptr;
    AssetVaultFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AssetVaultFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_assetvault_free(ptr, 0);
  }
  /**
   * @param {AccountId} faucet_id
   * @returns {bigint}
   */
  getBalance(faucet_id) {
    _assertClass(faucet_id, AccountId);
    const ret = wasm.assetvault_getBalance(this.__wbg_ptr, faucet_id.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @returns {FungibleAsset[]}
   */
  fungibleAssets() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.assetvault_fungibleAssets(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Word}
   */
  root() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
};
if (Symbol.dispose) AssetVault.prototype[Symbol.dispose] = AssetVault.prototype.free;
var AuthSecretKeyFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_authsecretkey_free(ptr >>> 0, 1));
var AuthSecretKey = class _AuthSecretKey {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_AuthSecretKey.prototype);
    obj.__wbg_ptr = ptr;
    AuthSecretKeyFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    AuthSecretKeyFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_authsecretkey_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  getRpoFalcon512PublicKeyAsWord() {
    const ret = wasm.authsecretkey_getRpoFalcon512PublicKeyAsWord(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Felt[]}
   */
  getRpoFalcon512SecretKeyAsFelts() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.authsecretkey_getRpoFalcon512SecretKeyAsFelts(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Word}
   */
  getEcdsaK256KeccakPublicKeyAsWord() {
    const ret = wasm.authsecretkey_getEcdsaK256KeccakPublicKeyAsWord(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Felt[]}
   */
  getEcdsaK256KeccakSecretKeyAsFelts() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.authsecretkey_getEcdsaK256KeccakSecretKeyAsFelts(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) AuthSecretKey.prototype[Symbol.dispose] = AuthSecretKey.prototype.free;
var BasicFungibleFaucetComponentFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_basicfungiblefaucetcomponent_free(ptr >>> 0, 1));
var BasicFungibleFaucetComponent = class _BasicFungibleFaucetComponent {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_BasicFungibleFaucetComponent.prototype);
    obj.__wbg_ptr = ptr;
    BasicFungibleFaucetComponentFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    BasicFungibleFaucetComponentFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_basicfungiblefaucetcomponent_free(ptr, 0);
  }
  /**
   * @returns {Felt}
   */
  maxSupply() {
    const ret = wasm.accountid_suffix(this.__wbg_ptr);
    return Felt.__wrap(ret);
  }
  /**
   * @param {Account} account
   * @returns {BasicFungibleFaucetComponent}
   */
  static fromAccount(account) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(account, Account);
      var ptr0 = account.__destroy_into_raw();
      wasm.basicfungiblefaucetcomponent_fromAccount(retptr, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _BasicFungibleFaucetComponent.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {TokenSymbol}
   */
  symbol() {
    const ret = wasm.accountid_prefix(this.__wbg_ptr);
    return TokenSymbol.__wrap(ret);
  }
  /**
   * @returns {number}
   */
  decimals() {
    const ret = wasm.basicfungiblefaucetcomponent_decimals(this.__wbg_ptr);
    return ret;
  }
};
if (Symbol.dispose) BasicFungibleFaucetComponent.prototype[Symbol.dispose] = BasicFungibleFaucetComponent.prototype.free;
var BlockHeaderFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_blockheader_free(ptr >>> 0, 1));
var BlockHeader = class _BlockHeader {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_BlockHeader.prototype);
    obj.__wbg_ptr = ptr;
    BlockHeaderFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    BlockHeaderFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_blockheader_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  commitment() {
    const ret = wasm.blockheader_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  accountRoot() {
    const ret = wasm.accountheader_codeCommitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  txCommitment() {
    const ret = wasm.blockheader_txCommitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  nullifierRoot() {
    const ret = wasm.blockheader_nullifierRoot(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  subCommitment() {
    const ret = wasm.blockheader_subCommitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  chainCommitment() {
    const ret = wasm.accountheader_storageCommitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  proofCommitment() {
    const ret = wasm.blockheader_proofCommitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  txKernelCommitment() {
    const ret = wasm.accountbuilderresult_seed(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  prevBlockCommitment() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {number}
   */
  version() {
    const ret = wasm.blockheader_version(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {number}
   */
  blockNum() {
    const ret = wasm.blockheader_blockNum(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {Word}
   */
  noteRoot() {
    const ret = wasm.blockheader_noteRoot(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {number}
   */
  timestamp() {
    const ret = wasm.blockheader_timestamp(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) BlockHeader.prototype[Symbol.dispose] = BlockHeader.prototype.free;
var ConsumableNoteRecordFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_consumablenoterecord_free(ptr >>> 0, 1));
var ConsumableNoteRecord = class _ConsumableNoteRecord {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_ConsumableNoteRecord.prototype);
    obj.__wbg_ptr = ptr;
    ConsumableNoteRecordFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ConsumableNoteRecordFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_consumablenoterecord_free(ptr, 0);
  }
  /**
   * @returns {InputNoteRecord}
   */
  inputNoteRecord() {
    const ret = wasm.consumablenoterecord_inputNoteRecord(this.__wbg_ptr);
    return InputNoteRecord.__wrap(ret);
  }
  /**
   * @returns {NoteConsumability[]}
   */
  noteConsumability() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.consumablenoterecord_noteConsumability(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {InputNoteRecord} input_note_record
   * @param {NoteConsumability[]} note_consumability
   */
  constructor(input_note_record, note_consumability) {
    _assertClass(input_note_record, InputNoteRecord);
    var ptr0 = input_note_record.__destroy_into_raw();
    const ptr1 = passArrayJsValueToWasm0(note_consumability, wasm.__wbindgen_export);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.consumablenoterecord_new(ptr0, ptr1, len1);
    this.__wbg_ptr = ret >>> 0;
    ConsumableNoteRecordFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
};
if (Symbol.dispose) ConsumableNoteRecord.prototype[Symbol.dispose] = ConsumableNoteRecord.prototype.free;
var EndpointFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_endpoint_free(ptr >>> 0, 1));
var Endpoint = class _Endpoint {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Endpoint.prototype);
    obj.__wbg_ptr = ptr;
    EndpointFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EndpointFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_endpoint_free(ptr, 0);
  }
  /**
   * Creates an endpoint from a URL string.
   *
   * @param url - The URL string (e.g., <https://localhost:57291>)
   * @throws throws an error if the URL is invalid
   * @param {string} url
   */
  constructor(url) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(url, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      wasm.endpoint_new(retptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      this.__wbg_ptr = r0 >>> 0;
      EndpointFinalization.register(this, this.__wbg_ptr, this);
      return this;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Returns the host of the endpoint.
   * @returns {string}
   */
  get host() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.endpoint_host(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Returns the port of the endpoint.
   * @returns {number | undefined}
   */
  get port() {
    const ret = wasm.endpoint_port(this.__wbg_ptr);
    return ret === 16777215 ? void 0 : ret;
  }
  /**
   * Returns the endpoint for the Miden devnet.
   * @returns {Endpoint}
   */
  static devnet() {
    const ret = wasm.endpoint_devnet();
    return _Endpoint.__wrap(ret);
  }
  /**
   * Returns the endpoint for the Miden testnet.
   * @returns {Endpoint}
   */
  static testnet() {
    const ret = wasm.endpoint_testnet();
    return _Endpoint.__wrap(ret);
  }
  /**
   * Returns the protocol of the endpoint.
   * @returns {string}
   */
  get protocol() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.endpoint_protocol(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Returns the endpoint for a local Miden node.
   *
   * Uses <http://localhost:57291>
   * @returns {Endpoint}
   */
  static localhost() {
    const ret = wasm.endpoint_localhost();
    return _Endpoint.__wrap(ret);
  }
  /**
   * Returns the string representation of the endpoint.
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.endpoint_toString(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) Endpoint.prototype[Symbol.dispose] = Endpoint.prototype.free;
var ExecutedTransactionFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_executedtransaction_free(ptr >>> 0, 1));
var ExecutedTransaction = class _ExecutedTransaction {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_ExecutedTransaction.prototype);
    obj.__wbg_ptr = ptr;
    ExecutedTransactionFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ExecutedTransactionFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_executedtransaction_free(ptr, 0);
  }
  /**
   * @returns {AccountId}
   */
  accountId() {
    const ret = wasm.executedtransaction_accountId(this.__wbg_ptr);
    return AccountId.__wrap(ret);
  }
  /**
   * @returns {InputNotes}
   */
  inputNotes() {
    const ret = wasm.executedtransaction_inputNotes(this.__wbg_ptr);
    return InputNotes.__wrap(ret);
  }
  /**
   * @returns {BlockHeader}
   */
  blockHeader() {
    const ret = wasm.executedtransaction_blockHeader(this.__wbg_ptr);
    return BlockHeader.__wrap(ret);
  }
  /**
   * @returns {OutputNotes}
   */
  outputNotes() {
    const ret = wasm.executedtransaction_outputNotes(this.__wbg_ptr);
    return OutputNotes.__wrap(ret);
  }
  /**
   * @returns {AccountDelta}
   */
  accountDelta() {
    const ret = wasm.executedtransaction_accountDelta(this.__wbg_ptr);
    return AccountDelta.__wrap(ret);
  }
  /**
   * @returns {AccountHeader}
   */
  finalAccountHeader() {
    const ret = wasm.executedtransaction_finalAccountHeader(this.__wbg_ptr);
    return AccountHeader.__wrap(ret);
  }
  /**
   * @returns {AccountHeader}
   */
  initialAccountHeader() {
    const ret = wasm.executedtransaction_initialAccountHeader(this.__wbg_ptr);
    return AccountHeader.__wrap(ret);
  }
  /**
   * @returns {TransactionId}
   */
  id() {
    const ret = wasm.executedtransaction_id(this.__wbg_ptr);
    return TransactionId.__wrap(ret);
  }
  /**
   * @returns {TransactionArgs}
   */
  txArgs() {
    const ret = wasm.executedtransaction_txArgs(this.__wbg_ptr);
    return TransactionArgs.__wrap(ret);
  }
};
if (Symbol.dispose) ExecutedTransaction.prototype[Symbol.dispose] = ExecutedTransaction.prototype.free;
var FeltFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_felt_free(ptr >>> 0, 1));
var Felt = class _Felt {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Felt.prototype);
    obj.__wbg_ptr = ptr;
    FeltFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _Felt)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    FeltFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_felt_free(ptr, 0);
  }
  /**
   * @param {bigint} value
   */
  constructor(value) {
    const ret = wasm.felt_new(value);
    this.__wbg_ptr = ret >>> 0;
    FeltFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {bigint}
   */
  asInt() {
    const ret = wasm.felt_asInt(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.felt_toString(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) Felt.prototype[Symbol.dispose] = Felt.prototype.free;
var FeltArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_feltarray_free(ptr >>> 0, 1));
var FeltArray = class _FeltArray {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_FeltArray.prototype);
    obj.__wbg_ptr = ptr;
    FeltArrayFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    FeltArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_feltarray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {Felt} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, Felt);
      var ptr0 = elem.__destroy_into_raw();
      wasm.feltarray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {Felt}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.feltarray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return Felt.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Felt[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.feltarray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    FeltArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {Felt} element
   */
  push(element) {
    _assertClass(element, Felt);
    wasm.feltarray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.feltarray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) FeltArray.prototype[Symbol.dispose] = FeltArray.prototype.free;
var FetchedNoteFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_fetchednote_free(ptr >>> 0, 1));
var FetchedNote = class _FetchedNote {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_FetchedNote.prototype);
    obj.__wbg_ptr = ptr;
    FetchedNoteFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    FetchedNoteFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_fetchednote_free(ptr, 0);
  }
  /**
   * The full [`InputNote`] with inclusion proof.
   *
   * For public notes, it contains the complete note data and inclusion proof.
   * For private notes, it will be ``None`.
   * @returns {InputNote | undefined}
   */
  get inputNote() {
    const ret = wasm.fetchednote_inputNote(this.__wbg_ptr);
    return ret === 0 ? void 0 : InputNote.__wrap(ret);
  }
  /**
   * Create a note with an optional `InputNote`.
   * @param {NoteId} note_id
   * @param {NoteMetadata} metadata
   * @param {InputNote | null} [input_note]
   */
  constructor(note_id, metadata, input_note) {
    _assertClass(note_id, NoteId);
    var ptr0 = note_id.__destroy_into_raw();
    _assertClass(metadata, NoteMetadata);
    var ptr1 = metadata.__destroy_into_raw();
    let ptr2 = 0;
    if (!isLikeNone(input_note)) {
      _assertClass(input_note, InputNote);
      ptr2 = input_note.__destroy_into_raw();
    }
    const ret = wasm.fetchednote_new(ptr0, ptr1, ptr2);
    this.__wbg_ptr = ret >>> 0;
    FetchedNoteFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * The unique identifier of the note.
   * @returns {NoteId}
   */
  get noteId() {
    const ret = wasm.fetchednote_noteId(this.__wbg_ptr);
    return NoteId.__wrap(ret);
  }
  /**
   * The note's metadata, including sender, tag, and other properties.
   * Available for both private and public notes.
   * @returns {NoteMetadata}
   */
  get metadata() {
    const ret = wasm.fetchednote_metadata(this.__wbg_ptr);
    return NoteMetadata.__wrap(ret);
  }
  /**
   * @returns {NoteType}
   */
  get noteType() {
    const ret = wasm.fetchednote_noteType(this.__wbg_ptr);
    return ret;
  }
};
if (Symbol.dispose) FetchedNote.prototype[Symbol.dispose] = FetchedNote.prototype.free;
var FlattenedU8VecFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_flattenedu8vec_free(ptr >>> 0, 1));
var FlattenedU8Vec = class _FlattenedU8Vec {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_FlattenedU8Vec.prototype);
    obj.__wbg_ptr = ptr;
    FlattenedU8VecFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    FlattenedU8VecFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_flattenedu8vec_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  num_inner_vecs() {
    const ret = wasm.flattenedu8vec_num_inner_vecs(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {Uint8Array}
   */
  data() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.flattenedu8vec_data(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Uint32Array}
   */
  lengths() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.flattenedu8vec_lengths(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU32FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) FlattenedU8Vec.prototype[Symbol.dispose] = FlattenedU8Vec.prototype.free;
var ForeignAccountFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_foreignaccount_free(ptr >>> 0, 1));
var ForeignAccount = class _ForeignAccount {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_ForeignAccount.prototype);
    obj.__wbg_ptr = ptr;
    ForeignAccountFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _ForeignAccount)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ForeignAccountFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_foreignaccount_free(ptr, 0);
  }
  /**
   * @returns {AccountId}
   */
  account_id() {
    const ret = wasm.foreignaccount_account_id(this.__wbg_ptr);
    return AccountId.__wrap(ret);
  }
  /**
   * @returns {AccountStorageRequirements}
   */
  storage_slot_requirements() {
    const ret = wasm.foreignaccount_storage_slot_requirements(this.__wbg_ptr);
    return AccountStorageRequirements.__wrap(ret);
  }
  /**
   * @param {AccountId} account_id
   * @param {AccountStorageRequirements} storage_requirements
   * @returns {ForeignAccount}
   */
  static public(account_id, storage_requirements) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(account_id, AccountId);
      var ptr0 = account_id.__destroy_into_raw();
      _assertClass(storage_requirements, AccountStorageRequirements);
      var ptr1 = storage_requirements.__destroy_into_raw();
      wasm.foreignaccount_public(retptr, ptr0, ptr1);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _ForeignAccount.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) ForeignAccount.prototype[Symbol.dispose] = ForeignAccount.prototype.free;
var ForeignAccountArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_foreignaccountarray_free(ptr >>> 0, 1));
var ForeignAccountArray = class {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ForeignAccountArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_foreignaccountarray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {ForeignAccount} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, ForeignAccount);
      var ptr0 = elem.__destroy_into_raw();
      wasm.foreignaccountarray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {ForeignAccount}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.foreignaccountarray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return ForeignAccount.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {ForeignAccount[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.foreignaccountarray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    ForeignAccountArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {ForeignAccount} element
   */
  push(element) {
    _assertClass(element, ForeignAccount);
    wasm.foreignaccountarray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.foreignaccountarray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) ForeignAccountArray.prototype[Symbol.dispose] = ForeignAccountArray.prototype.free;
var FungibleAssetFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_fungibleasset_free(ptr >>> 0, 1));
var FungibleAsset = class _FungibleAsset {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_FungibleAsset.prototype);
    obj.__wbg_ptr = ptr;
    FungibleAssetFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _FungibleAsset)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    FungibleAssetFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_fungibleasset_free(ptr, 0);
  }
  /**
   * @param {AccountId} faucet_id
   * @param {bigint} amount
   */
  constructor(faucet_id, amount) {
    _assertClass(faucet_id, AccountId);
    const ret = wasm.fungibleasset_new(faucet_id.__wbg_ptr, amount);
    this.__wbg_ptr = ret >>> 0;
    FungibleAssetFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {bigint}
   */
  amount() {
    const ret = wasm.fungibleasset_amount(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @returns {AccountId}
   */
  faucetId() {
    const ret = wasm.accountdelta_id(this.__wbg_ptr);
    return AccountId.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  intoWord() {
    const ret = wasm.fungibleasset_intoWord(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
};
if (Symbol.dispose) FungibleAsset.prototype[Symbol.dispose] = FungibleAsset.prototype.free;
var FungibleAssetDeltaFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_fungibleassetdelta_free(ptr >>> 0, 1));
var FungibleAssetDelta = class _FungibleAssetDelta {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_FungibleAssetDelta.prototype);
    obj.__wbg_ptr = ptr;
    FungibleAssetDeltaFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    FungibleAssetDeltaFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_fungibleassetdelta_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  numAssets() {
    const ret = wasm.fungibleassetdelta_numAssets(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {FungibleAssetDelta}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fungibleassetdelta_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _FungibleAssetDelta.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @param {AccountId} faucet_id
   * @returns {bigint | undefined}
   */
  amount(faucet_id) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(faucet_id, AccountId);
      wasm.fungibleassetdelta_amount(retptr, this.__wbg_ptr, faucet_id.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r2 = getDataViewMemory0().getBigInt64(retptr + 8 * 1, true);
      return r0 === 0 ? void 0 : r2;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {FungibleAssetDeltaItem[]}
   */
  assets() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.fungibleassetdelta_assets(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {boolean}
   */
  isEmpty() {
    const ret = wasm.fungibleassetdelta_isEmpty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.fungibleassetdelta_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) FungibleAssetDelta.prototype[Symbol.dispose] = FungibleAssetDelta.prototype.free;
var FungibleAssetDeltaItemFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_fungibleassetdeltaitem_free(ptr >>> 0, 1));
var FungibleAssetDeltaItem = class _FungibleAssetDeltaItem {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_FungibleAssetDeltaItem.prototype);
    obj.__wbg_ptr = ptr;
    FungibleAssetDeltaItemFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    FungibleAssetDeltaItemFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_fungibleassetdeltaitem_free(ptr, 0);
  }
  /**
   * @returns {bigint}
   */
  get amount() {
    const ret = wasm.fungibleasset_amount(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {AccountId}
   */
  get faucetId() {
    const ret = wasm.accountdelta_id(this.__wbg_ptr);
    return AccountId.__wrap(ret);
  }
};
if (Symbol.dispose) FungibleAssetDeltaItem.prototype[Symbol.dispose] = FungibleAssetDeltaItem.prototype.free;
var GetProceduresResultItemFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_getproceduresresultitem_free(ptr >>> 0, 1));
var GetProceduresResultItem = class _GetProceduresResultItem {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_GetProceduresResultItem.prototype);
    obj.__wbg_ptr = ptr;
    GetProceduresResultItemFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    GetProceduresResultItemFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_getproceduresresultitem_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  get digest() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  get isAuth() {
    const ret = wasm.getproceduresresultitem_isAuth(this.__wbg_ptr);
    return ret !== 0;
  }
};
if (Symbol.dispose) GetProceduresResultItem.prototype[Symbol.dispose] = GetProceduresResultItem.prototype.free;
var InputNoteFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_inputnote_free(ptr >>> 0, 1));
var InputNote = class _InputNote {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_InputNote.prototype);
    obj.__wbg_ptr = ptr;
    InputNoteFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    InputNoteFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_inputnote_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  commitment() {
    const ret = wasm.inputnote_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {NoteId}
   */
  id() {
    const ret = wasm.inputnote_id(this.__wbg_ptr);
    return NoteId.__wrap(ret);
  }
  /**
   * @returns {Note}
   */
  note() {
    const ret = wasm.inputnote_note(this.__wbg_ptr);
    return Note.__wrap(ret);
  }
  /**
   * @returns {NoteInclusionProof | undefined}
   */
  proof() {
    const ret = wasm.inputnote_proof(this.__wbg_ptr);
    return ret === 0 ? void 0 : NoteInclusionProof.__wrap(ret);
  }
  /**
   * @returns {NoteLocation | undefined}
   */
  location() {
    const ret = wasm.inputnote_location(this.__wbg_ptr);
    return ret === 0 ? void 0 : NoteLocation.__wrap(ret);
  }
};
if (Symbol.dispose) InputNote.prototype[Symbol.dispose] = InputNote.prototype.free;
var InputNoteRecordFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_inputnoterecord_free(ptr >>> 0, 1));
var InputNoteRecord = class _InputNoteRecord {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_InputNoteRecord.prototype);
    obj.__wbg_ptr = ptr;
    InputNoteRecordFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    InputNoteRecordFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_inputnoterecord_free(ptr, 0);
  }
  /**
   * @returns {Word | undefined}
   */
  commitment() {
    const ret = wasm.inputnoterecord_commitment(this.__wbg_ptr);
    return ret === 0 ? void 0 : Word.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  isConsumed() {
    const ret = wasm.inputnoterecord_isConsumed(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {boolean}
   */
  isProcessing() {
    const ret = wasm.inputnoterecord_isProcessing(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {InputNote}
   */
  toInputNote() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.inputnoterecord_toInputNote(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return InputNote.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {NoteInclusionProof | undefined}
   */
  inclusionProof() {
    const ret = wasm.inputnoterecord_inclusionProof(this.__wbg_ptr);
    return ret === 0 ? void 0 : NoteInclusionProof.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  isAuthenticated() {
    const ret = wasm.inputnoterecord_isAuthenticated(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {string | undefined}
   */
  consumerTransactionId() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.inputnoterecord_consumerTransactionId(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      let v1;
      if (r0 !== 0) {
        v1 = getStringFromWasm0(r0, r1).slice();
        wasm.__wbindgen_export3(r0, r1 * 1, 1);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {NoteId}
   */
  id() {
    const ret = wasm.inputnoterecord_id(this.__wbg_ptr);
    return NoteId.__wrap(ret);
  }
  /**
   * @returns {InputNoteState}
   */
  state() {
    const ret = wasm.inputnoterecord_state(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {NoteDetails}
   */
  details() {
    const ret = wasm.inputnoterecord_details(this.__wbg_ptr);
    return NoteDetails.__wrap(ret);
  }
  /**
   * @returns {NoteMetadata | undefined}
   */
  metadata() {
    const ret = wasm.inputnoterecord_metadata(this.__wbg_ptr);
    return ret === 0 ? void 0 : NoteMetadata.__wrap(ret);
  }
  /**
   * @returns {string}
   */
  nullifier() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.inputnoterecord_nullifier(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) InputNoteRecord.prototype[Symbol.dispose] = InputNoteRecord.prototype.free;
var InputNotesFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_inputnotes_free(ptr >>> 0, 1));
var InputNotes = class _InputNotes {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_InputNotes.prototype);
    obj.__wbg_ptr = ptr;
    InputNotesFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    InputNotesFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_inputnotes_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  commitment() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {InputNote[]}
   */
  notes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.inputnotes_notes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {number} index
   * @returns {InputNote}
   */
  getNote(index) {
    const ret = wasm.inputnotes_getNote(this.__wbg_ptr, index);
    return InputNote.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  isEmpty() {
    const ret = wasm.inputnotes_isEmpty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {number}
   */
  numNotes() {
    const ret = wasm.inputnotes_numNotes(this.__wbg_ptr);
    return ret;
  }
};
if (Symbol.dispose) InputNotes.prototype[Symbol.dispose] = InputNotes.prototype.free;
var IntoUnderlyingByteSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingbytesource_free(ptr >>> 0, 1));
var IntoUnderlyingByteSource = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    IntoUnderlyingByteSourceFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_intounderlyingbytesource_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  get autoAllocateChunkSize() {
    const ret = wasm.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {ReadableByteStreamController} controller
   * @returns {Promise<any>}
   */
  pull(controller) {
    const ret = wasm.intounderlyingbytesource_pull(this.__wbg_ptr, addHeapObject(controller));
    return takeObject(ret);
  }
  /**
   * @param {ReadableByteStreamController} controller
   */
  start(controller) {
    wasm.intounderlyingbytesource_start(this.__wbg_ptr, addHeapObject(controller));
  }
  /**
   * @returns {ReadableStreamType}
   */
  get type() {
    const ret = wasm.intounderlyingbytesource_type(this.__wbg_ptr);
    return __wbindgen_enum_ReadableStreamType[ret];
  }
  cancel() {
    const ptr = this.__destroy_into_raw();
    wasm.intounderlyingbytesource_cancel(ptr);
  }
};
if (Symbol.dispose) IntoUnderlyingByteSource.prototype[Symbol.dispose] = IntoUnderlyingByteSource.prototype.free;
var IntoUnderlyingSinkFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsink_free(ptr >>> 0, 1));
var IntoUnderlyingSink = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    IntoUnderlyingSinkFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_intounderlyingsink_free(ptr, 0);
  }
  /**
   * @param {any} reason
   * @returns {Promise<any>}
   */
  abort(reason) {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.intounderlyingsink_abort(ptr, addHeapObject(reason));
    return takeObject(ret);
  }
  /**
   * @returns {Promise<any>}
   */
  close() {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.intounderlyingsink_close(ptr);
    return takeObject(ret);
  }
  /**
   * @param {any} chunk
   * @returns {Promise<any>}
   */
  write(chunk) {
    const ret = wasm.intounderlyingsink_write(this.__wbg_ptr, addHeapObject(chunk));
    return takeObject(ret);
  }
};
if (Symbol.dispose) IntoUnderlyingSink.prototype[Symbol.dispose] = IntoUnderlyingSink.prototype.free;
var IntoUnderlyingSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsource_free(ptr >>> 0, 1));
var IntoUnderlyingSource = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    IntoUnderlyingSourceFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_intounderlyingsource_free(ptr, 0);
  }
  /**
   * @param {ReadableStreamDefaultController} controller
   * @returns {Promise<any>}
   */
  pull(controller) {
    const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, addHeapObject(controller));
    return takeObject(ret);
  }
  cancel() {
    const ptr = this.__destroy_into_raw();
    wasm.intounderlyingsource_cancel(ptr);
  }
};
if (Symbol.dispose) IntoUnderlyingSource.prototype[Symbol.dispose] = IntoUnderlyingSource.prototype.free;
var JsAccountUpdateFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_jsaccountupdate_free(ptr >>> 0, 1));
var JsAccountUpdate = class _JsAccountUpdate {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_JsAccountUpdate.prototype);
    obj.__wbg_ptr = ptr;
    JsAccountUpdateFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _JsAccountUpdate)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  toJSON() {
    return {
      storageRoot: this.storageRoot,
      storageSlots: this.storageSlots,
      storageMapEntries: this.storageMapEntries,
      assetVaultRoot: this.assetVaultRoot,
      assets: this.assets,
      accountId: this.accountId,
      codeRoot: this.codeRoot,
      committed: this.committed,
      nonce: this.nonce,
      accountCommitment: this.accountCommitment,
      accountSeed: this.accountSeed
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    JsAccountUpdateFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_jsaccountupdate_free(ptr, 0);
  }
  /**
   * The merkle root of the account's storage trie.
   * @returns {string}
   */
  get storageRoot() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_storageRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The merkle root of the account's storage trie.
   * @param {string} arg0
   */
  set storageRoot(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_storageRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Serialized storage slot data for this account.
   * @returns {JsStorageSlot[]}
   */
  get storageSlots() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_storageSlots(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Serialized storage slot data for this account.
   * @param {JsStorageSlot[]} arg0
   */
  set storageSlots(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_storageSlots(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Serialized storage map entries for this account.
   * @returns {JsStorageMapEntry[]}
   */
  get storageMapEntries() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_storageMapEntries(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Serialized storage map entries for this account.
   * @param {JsStorageMapEntry[]} arg0
   */
  set storageMapEntries(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_storageMapEntries(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The merkle root of the account's asset vault.
   * @returns {string}
   */
  get assetVaultRoot() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_assetVaultRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The merkle root of the account's asset vault.
   * @param {string} arg0
   */
  set assetVaultRoot(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_assetVaultRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The account's asset vault.
   * @returns {JsVaultAsset[]}
   */
  get assets() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_assets(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * The account's asset vault.
   * @param {JsVaultAsset[]} arg0
   */
  set assets(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_assets(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * ID for this account.
   * @returns {string}
   */
  get accountId() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_accountId(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * ID for this account.
   * @param {string} arg0
   */
  set accountId(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_accountId(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The merkle root of the account's executable code.
   * @returns {string}
   */
  get codeRoot() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_codeRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The merkle root of the account's executable code.
   * @param {string} arg0
   */
  set codeRoot(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_codeRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Whether this account update has been committed.
   * @returns {boolean}
   */
  get committed() {
    const ret = wasm.__wbg_get_jsaccountupdate_committed(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * Whether this account update has been committed.
   * @param {boolean} arg0
   */
  set committed(arg0) {
    wasm.__wbg_set_jsaccountupdate_committed(this.__wbg_ptr, arg0);
  }
  /**
   * The account's transaction nonce as a string.
   * @returns {string}
   */
  get nonce() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_nonce(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The account's transaction nonce as a string.
   * @param {string} arg0
   */
  set nonce(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_nonce(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The cryptographic commitment representing this account's current state.
   * @returns {string}
   */
  get accountCommitment() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_accountCommitment(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The cryptographic commitment representing this account's current state.
   * @param {string} arg0
   */
  set accountCommitment(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_accountCommitment(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Optional seed data for the account.
   * @returns {Uint8Array | undefined}
   */
  get accountSeed() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_accountSeed(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      let v1;
      if (r0 !== 0) {
        v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_export3(r0, r1 * 1, 1);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Optional seed data for the account.
   * @param {Uint8Array | null} [arg0]
   */
  set accountSeed(arg0) {
    var ptr0 = isLikeNone(arg0) ? 0 : passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_accountSeed(this.__wbg_ptr, ptr0, len0);
  }
};
if (Symbol.dispose) JsAccountUpdate.prototype[Symbol.dispose] = JsAccountUpdate.prototype.free;
var JsStateSyncUpdateFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_jsstatesyncupdate_free(ptr >>> 0, 1));
var JsStateSyncUpdate = class _JsStateSyncUpdate {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_JsStateSyncUpdate.prototype);
    obj.__wbg_ptr = ptr;
    JsStateSyncUpdateFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    JsStateSyncUpdateFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_jsstatesyncupdate_free(ptr, 0);
  }
  /**
   * The block number for this update, stored as a string since it will be
   * persisted in `IndexedDB`.
   * @returns {string}
   */
  get blockNum() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_storageRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The block number for this update, stored as a string since it will be
   * persisted in `IndexedDB`.
   * @param {string} arg0
   */
  set blockNum(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_storageRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The new block headers for this state update, serialized into a flattened byte array.
   * @returns {FlattenedU8Vec}
   */
  get flattenedNewBlockHeaders() {
    const ret = wasm.__wbg_get_jsstatesyncupdate_flattenedNewBlockHeaders(this.__wbg_ptr);
    return FlattenedU8Vec.__wrap(ret);
  }
  /**
   * The new block headers for this state update, serialized into a flattened byte array.
   * @param {FlattenedU8Vec} arg0
   */
  set flattenedNewBlockHeaders(arg0) {
    _assertClass(arg0, FlattenedU8Vec);
    var ptr0 = arg0.__destroy_into_raw();
    wasm.__wbg_set_jsstatesyncupdate_flattenedNewBlockHeaders(this.__wbg_ptr, ptr0);
  }
  /**
   * The block numbers corresponding to each header in `flattened_new_block_headers`.
   * This vec should have the same length as the number of headers, with each index
   * representing the block number for the header at that same index.
   * @returns {string[]}
   */
  get newBlockNums() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstatesyncupdate_newBlockNums(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * The block numbers corresponding to each header in `flattened_new_block_headers`.
   * This vec should have the same length as the number of headers, with each index
   * representing the block number for the header at that same index.
   * @param {string[]} arg0
   */
  set newBlockNums(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstatesyncupdate_newBlockNums(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Flattened byte array containing partial blockchain peaks used for merkle tree
   * verification.
   * @returns {FlattenedU8Vec}
   */
  get flattenedPartialBlockChainPeaks() {
    const ret = wasm.__wbg_get_jsstatesyncupdate_flattenedPartialBlockChainPeaks(this.__wbg_ptr);
    return FlattenedU8Vec.__wrap(ret);
  }
  /**
   * Flattened byte array containing partial blockchain peaks used for merkle tree
   * verification.
   * @param {FlattenedU8Vec} arg0
   */
  set flattenedPartialBlockChainPeaks(arg0) {
    _assertClass(arg0, FlattenedU8Vec);
    var ptr0 = arg0.__destroy_into_raw();
    wasm.__wbg_set_jsstatesyncupdate_flattenedPartialBlockChainPeaks(this.__wbg_ptr, ptr0);
  }
  /**
   * For each block in this update, stores a boolean (as u8) indicating whether
   * that block contains notes relevant to this client. Index i corresponds to
   * the ith block, with 1 meaning relevant and 0 meaning not relevant.
   * @returns {Uint8Array}
   */
  get blockHasRelevantNotes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstatesyncupdate_blockHasRelevantNotes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * For each block in this update, stores a boolean (as u8) indicating whether
   * that block contains notes relevant to this client. Index i corresponds to
   * the ith block, with 1 meaning relevant and 0 meaning not relevant.
   * @param {Uint8Array} arg0
   */
  set blockHasRelevantNotes(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstatesyncupdate_blockHasRelevantNotes(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Serialized IDs for new authentication nodes required to verify block headers.
   * @returns {string[]}
   */
  get serializedNodeIds() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstatesyncupdate_serializedNodeIds(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Serialized IDs for new authentication nodes required to verify block headers.
   * @param {string[]} arg0
   */
  set serializedNodeIds(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstatesyncupdate_serializedNodeIds(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The actual authentication node data corresponding to the IDs above.
   * @returns {string[]}
   */
  get serializedNodes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstatesyncupdate_serializedNodes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * The actual authentication node data corresponding to the IDs above.
   * @param {string[]} arg0
   */
  set serializedNodes(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstatesyncupdate_serializedNodes(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * IDs of note tags that should be removed from the client's local state.
   * @returns {string[]}
   */
  get committedNoteIds() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstatesyncupdate_committedNoteIds(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * IDs of note tags that should be removed from the client's local state.
   * @param {string[]} arg0
   */
  set committedNoteIds(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstatesyncupdate_committedNoteIds(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Input notes for this state update in serialized form.
   * @returns {SerializedInputNoteData[]}
   */
  get serializedInputNotes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstatesyncupdate_serializedInputNotes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Input notes for this state update in serialized form.
   * @param {SerializedInputNoteData[]} arg0
   */
  set serializedInputNotes(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstatesyncupdate_serializedInputNotes(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Output notes created in this state update in serialized form.
   * @returns {SerializedOutputNoteData[]}
   */
  get serializedOutputNotes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstatesyncupdate_serializedOutputNotes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Output notes created in this state update in serialized form.
   * @param {SerializedOutputNoteData[]} arg0
   */
  set serializedOutputNotes(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstatesyncupdate_serializedOutputNotes(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Account state updates included in this sync.
   * @returns {JsAccountUpdate[]}
   */
  get accountUpdates() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstatesyncupdate_accountUpdates(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Account state updates included in this sync.
   * @param {JsAccountUpdate[]} arg0
   */
  set accountUpdates(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstatesyncupdate_accountUpdates(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Transaction data for transactions included in this update.
   * @returns {SerializedTransactionData[]}
   */
  get transactionUpdates() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstatesyncupdate_transactionUpdates(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Transaction data for transactions included in this update.
   * @param {SerializedTransactionData[]} arg0
   */
  set transactionUpdates(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstatesyncupdate_transactionUpdates(this.__wbg_ptr, ptr0, len0);
  }
};
if (Symbol.dispose) JsStateSyncUpdate.prototype[Symbol.dispose] = JsStateSyncUpdate.prototype.free;
var JsStorageMapEntryFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_jsstoragemapentry_free(ptr >>> 0, 1));
var JsStorageMapEntry = class _JsStorageMapEntry {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_JsStorageMapEntry.prototype);
    obj.__wbg_ptr = ptr;
    JsStorageMapEntryFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _JsStorageMapEntry)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  toJSON() {
    return {
      root: this.root,
      key: this.key,
      value: this.value
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    JsStorageMapEntryFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_jsstoragemapentry_free(ptr, 0);
  }
  /**
   * The root of the storage map entry.
   * @returns {string}
   */
  get root() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_storageRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The root of the storage map entry.
   * @param {string} arg0
   */
  set root(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_storageRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The key of the storage map entry.
   * @returns {string}
   */
  get key() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstoragemapentry_key(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The key of the storage map entry.
   * @param {string} arg0
   */
  set key(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstoragemapentry_key(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The value of the storage map entry.
   * @returns {string}
   */
  get value() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstoragemapentry_value(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The value of the storage map entry.
   * @param {string} arg0
   */
  set value(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstoragemapentry_value(this.__wbg_ptr, ptr0, len0);
  }
};
if (Symbol.dispose) JsStorageMapEntry.prototype[Symbol.dispose] = JsStorageMapEntry.prototype.free;
var JsStorageSlotFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_jsstorageslot_free(ptr >>> 0, 1));
var JsStorageSlot = class _JsStorageSlot {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_JsStorageSlot.prototype);
    obj.__wbg_ptr = ptr;
    JsStorageSlotFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _JsStorageSlot)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  toJSON() {
    return {
      commitment: this.commitment,
      slotIndex: this.slotIndex,
      slotValue: this.slotValue,
      slotType: this.slotType
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    JsStorageSlotFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_jsstorageslot_free(ptr, 0);
  }
  /**
   * Commitment of the whole account storage
   * @returns {string}
   */
  get commitment() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_storageRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Commitment of the whole account storage
   * @param {string} arg0
   */
  set commitment(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_storageRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The index of the storage slot.
   * @returns {number}
   */
  get slotIndex() {
    const ret = wasm.__wbg_get_jsstorageslot_slotIndex(this.__wbg_ptr);
    return ret;
  }
  /**
   * The index of the storage slot.
   * @param {number} arg0
   */
  set slotIndex(arg0) {
    wasm.__wbg_set_jsstorageslot_slotIndex(this.__wbg_ptr, arg0);
  }
  /**
   * The value stored in the storage slot.
   * @returns {string}
   */
  get slotValue() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstoragemapentry_key(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The value stored in the storage slot.
   * @param {string} arg0
   */
  set slotValue(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstoragemapentry_key(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The type of the storage slot.
   * @returns {number}
   */
  get slotType() {
    const ret = wasm.__wbg_get_jsstorageslot_slotType(this.__wbg_ptr);
    return ret;
  }
  /**
   * The type of the storage slot.
   * @param {number} arg0
   */
  set slotType(arg0) {
    wasm.__wbg_set_jsstorageslot_slotType(this.__wbg_ptr, arg0);
  }
};
if (Symbol.dispose) JsStorageSlot.prototype[Symbol.dispose] = JsStorageSlot.prototype.free;
var JsVaultAssetFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_jsvaultasset_free(ptr >>> 0, 1));
var JsVaultAsset = class _JsVaultAsset {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_JsVaultAsset.prototype);
    obj.__wbg_ptr = ptr;
    JsVaultAssetFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _JsVaultAsset)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  toJSON() {
    return {
      root: this.root,
      vaultKey: this.vaultKey,
      faucetIdPrefix: this.faucetIdPrefix,
      asset: this.asset
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    JsVaultAssetFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_jsvaultasset_free(ptr, 0);
  }
  /**
   * The merkle root of the vault's assets.
   * @returns {string}
   */
  get root() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_storageRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The merkle root of the vault's assets.
   * @param {string} arg0
   */
  set root(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_storageRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * The vault key associated with the asset.
   * @returns {string}
   */
  get vaultKey() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstoragemapentry_key(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * The vault key associated with the asset.
   * @param {string} arg0
   */
  set vaultKey(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstoragemapentry_key(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Asset's faucet ID prefix.
   * @returns {string}
   */
  get faucetIdPrefix() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstoragemapentry_value(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Asset's faucet ID prefix.
   * @param {string} arg0
   */
  set faucetIdPrefix(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstoragemapentry_value(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Word representing the asset.
   * @returns {string}
   */
  get asset() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_assetVaultRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Word representing the asset.
   * @param {string} arg0
   */
  set asset(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_assetVaultRoot(this.__wbg_ptr, ptr0, len0);
  }
};
if (Symbol.dispose) JsVaultAsset.prototype[Symbol.dispose] = JsVaultAsset.prototype.free;
var LibraryFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_library_free(ptr >>> 0, 1));
var Library = class _Library {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Library.prototype);
    obj.__wbg_ptr = ptr;
    LibraryFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LibraryFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_library_free(ptr, 0);
  }
};
if (Symbol.dispose) Library.prototype[Symbol.dispose] = Library.prototype.free;
var MerklePathFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_merklepath_free(ptr >>> 0, 1));
var MerklePath = class _MerklePath {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_MerklePath.prototype);
    obj.__wbg_ptr = ptr;
    MerklePathFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    MerklePathFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_merklepath_free(ptr, 0);
  }
  /**
   * @param {bigint} index
   * @param {Word} node
   * @returns {Word}
   */
  computeRoot(index, node) {
    _assertClass(node, Word);
    const ret = wasm.merklepath_computeRoot(this.__wbg_ptr, index, node.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {number}
   */
  depth() {
    const ret = wasm.merklepath_depth(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {Word[]}
   */
  nodes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.merklepath_nodes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {bigint} index
   * @param {Word} node
   * @param {Word} root
   * @returns {boolean}
   */
  verify(index, node, root) {
    _assertClass(node, Word);
    _assertClass(root, Word);
    const ret = wasm.merklepath_verify(this.__wbg_ptr, index, node.__wbg_ptr, root.__wbg_ptr);
    return ret !== 0;
  }
};
if (Symbol.dispose) MerklePath.prototype[Symbol.dispose] = MerklePath.prototype.free;
var NoteFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_note_free(ptr >>> 0, 1));
var Note = class _Note {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Note.prototype);
    obj.__wbg_ptr = ptr;
    NoteFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_note_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  commitment() {
    const ret = wasm.note_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {Note}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.note_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _Note.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @param {AccountId} sender
   * @param {AccountId} target
   * @param {NoteAssets} assets
   * @param {NoteType} note_type
   * @param {Felt} aux
   * @returns {Note}
   */
  static createP2IDNote(sender, target, assets, note_type, aux) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(sender, AccountId);
      _assertClass(target, AccountId);
      _assertClass(assets, NoteAssets);
      _assertClass(aux, Felt);
      wasm.note_createP2IDNote(retptr, sender.__wbg_ptr, target.__wbg_ptr, assets.__wbg_ptr, note_type, aux.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _Note.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {AccountId} sender
   * @param {AccountId} target
   * @param {NoteAssets} assets
   * @param {number | null | undefined} reclaim_height
   * @param {number | null | undefined} timelock_height
   * @param {NoteType} note_type
   * @param {Felt} aux
   * @returns {Note}
   */
  static createP2IDENote(sender, target, assets, reclaim_height, timelock_height, note_type, aux) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(sender, AccountId);
      _assertClass(target, AccountId);
      _assertClass(assets, NoteAssets);
      _assertClass(aux, Felt);
      wasm.note_createP2IDENote(retptr, sender.__wbg_ptr, target.__wbg_ptr, assets.__wbg_ptr, isLikeNone(reclaim_height) ? 4294967297 : reclaim_height >>> 0, isLikeNone(timelock_height) ? 4294967297 : timelock_height >>> 0, note_type, aux.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _Note.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {NoteId}
   */
  id() {
    const ret = wasm.note_id(this.__wbg_ptr);
    return NoteId.__wrap(ret);
  }
  /**
   * @param {NoteAssets} note_assets
   * @param {NoteMetadata} note_metadata
   * @param {NoteRecipient} note_recipient
   */
  constructor(note_assets, note_metadata, note_recipient) {
    _assertClass(note_assets, NoteAssets);
    _assertClass(note_metadata, NoteMetadata);
    _assertClass(note_recipient, NoteRecipient);
    const ret = wasm.note_new(note_assets.__wbg_ptr, note_metadata.__wbg_ptr, note_recipient.__wbg_ptr);
    this.__wbg_ptr = ret >>> 0;
    NoteFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {NoteAssets}
   */
  assets() {
    const ret = wasm.note_assets(this.__wbg_ptr);
    return NoteAssets.__wrap(ret);
  }
  /**
   * @returns {NoteScript}
   */
  script() {
    const ret = wasm.note_script(this.__wbg_ptr);
    return NoteScript.__wrap(ret);
  }
  /**
   * @returns {NoteMetadata}
   */
  metadata() {
    const ret = wasm.note_metadata(this.__wbg_ptr);
    return NoteMetadata.__wrap(ret);
  }
  /**
   * @returns {NoteRecipient}
   */
  recipient() {
    const ret = wasm.note_recipient(this.__wbg_ptr);
    return NoteRecipient.__wrap(ret);
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.note_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) Note.prototype[Symbol.dispose] = Note.prototype.free;
var NoteAndArgsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteandargs_free(ptr >>> 0, 1));
var NoteAndArgs = class _NoteAndArgs {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteAndArgs.prototype);
    obj.__wbg_ptr = ptr;
    NoteAndArgsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _NoteAndArgs)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteAndArgsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteandargs_free(ptr, 0);
  }
  /**
   * @param {Note} note
   * @param {Word | null} [args]
   */
  constructor(note, args) {
    _assertClass(note, Note);
    var ptr0 = note.__destroy_into_raw();
    let ptr1 = 0;
    if (!isLikeNone(args)) {
      _assertClass(args, Word);
      ptr1 = args.__destroy_into_raw();
    }
    const ret = wasm.noteandargs_new(ptr0, ptr1);
    this.__wbg_ptr = ret >>> 0;
    NoteAndArgsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
};
if (Symbol.dispose) NoteAndArgs.prototype[Symbol.dispose] = NoteAndArgs.prototype.free;
var NoteAndArgsArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteandargsarray_free(ptr >>> 0, 1));
var NoteAndArgsArray = class {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteAndArgsArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteandargsarray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {NoteAndArgs} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, NoteAndArgs);
      var ptr0 = elem.__destroy_into_raw();
      wasm.noteandargsarray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {NoteAndArgs}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.noteandargsarray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return NoteAndArgs.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {NoteAndArgs[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.noteandargsarray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    NoteAndArgsArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {NoteAndArgs} element
   */
  push(element) {
    _assertClass(element, NoteAndArgs);
    wasm.noteandargsarray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.noteandargsarray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) NoteAndArgsArray.prototype[Symbol.dispose] = NoteAndArgsArray.prototype.free;
var NoteAssetsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteassets_free(ptr >>> 0, 1));
var NoteAssets = class _NoteAssets {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteAssets.prototype);
    obj.__wbg_ptr = ptr;
    NoteAssetsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteAssetsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteassets_free(ptr, 0);
  }
  /**
   * @returns {FungibleAsset[]}
   */
  fungibleAssets() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.noteassets_fungibleAssets(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {FungibleAsset[] | null} [assets_array]
   */
  constructor(assets_array) {
    var ptr0 = isLikeNone(assets_array) ? 0 : passArrayJsValueToWasm0(assets_array, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.noteassets_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    NoteAssetsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {FungibleAsset} asset
   */
  push(asset) {
    _assertClass(asset, FungibleAsset);
    wasm.noteassets_push(this.__wbg_ptr, asset.__wbg_ptr);
  }
};
if (Symbol.dispose) NoteAssets.prototype[Symbol.dispose] = NoteAssets.prototype.free;
var NoteConsumabilityFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteconsumability_free(ptr >>> 0, 1));
var NoteConsumability = class _NoteConsumability {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteConsumability.prototype);
    obj.__wbg_ptr = ptr;
    NoteConsumabilityFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _NoteConsumability)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteConsumabilityFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteconsumability_free(ptr, 0);
  }
  /**
   * @returns {AccountId}
   */
  accountId() {
    const ret = wasm.noteconsumability_accountId(this.__wbg_ptr);
    return AccountId.__wrap(ret);
  }
  /**
   * @returns {number | undefined}
   */
  consumableAfterBlock() {
    const ret = wasm.noteconsumability_consumableAfterBlock(this.__wbg_ptr);
    return ret === 4294967297 ? void 0 : ret;
  }
};
if (Symbol.dispose) NoteConsumability.prototype[Symbol.dispose] = NoteConsumability.prototype.free;
var NoteDetailsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_notedetails_free(ptr >>> 0, 1));
var NoteDetails = class _NoteDetails {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteDetails.prototype);
    obj.__wbg_ptr = ptr;
    NoteDetailsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteDetailsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_notedetails_free(ptr, 0);
  }
  /**
   * @returns {NoteId}
   */
  id() {
    const ret = wasm.notedetails_id(this.__wbg_ptr);
    return NoteId.__wrap(ret);
  }
  /**
   * @param {NoteAssets} note_assets
   * @param {NoteRecipient} note_recipient
   */
  constructor(note_assets, note_recipient) {
    _assertClass(note_assets, NoteAssets);
    _assertClass(note_recipient, NoteRecipient);
    const ret = wasm.notedetails_new(note_assets.__wbg_ptr, note_recipient.__wbg_ptr);
    this.__wbg_ptr = ret >>> 0;
    NoteDetailsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {NoteAssets}
   */
  assets() {
    const ret = wasm.notedetails_assets(this.__wbg_ptr);
    return NoteAssets.__wrap(ret);
  }
  /**
   * @returns {NoteRecipient}
   */
  recipient() {
    const ret = wasm.notedetails_recipient(this.__wbg_ptr);
    return NoteRecipient.__wrap(ret);
  }
};
if (Symbol.dispose) NoteDetails.prototype[Symbol.dispose] = NoteDetails.prototype.free;
var NoteDetailsAndTagFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_notedetailsandtag_free(ptr >>> 0, 1));
var NoteDetailsAndTag = class _NoteDetailsAndTag {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteDetailsAndTag.prototype);
    obj.__wbg_ptr = ptr;
    NoteDetailsAndTagFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _NoteDetailsAndTag)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteDetailsAndTagFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_notedetailsandtag_free(ptr, 0);
  }
  /**
   * @returns {NoteDetails}
   */
  get noteDetails() {
    const ret = wasm.notedetailsandtag_noteDetails(this.__wbg_ptr);
    return NoteDetails.__wrap(ret);
  }
  /**
   * @param {NoteDetails} note_details
   * @param {NoteTag} tag
   */
  constructor(note_details, tag) {
    _assertClass(note_details, NoteDetails);
    var ptr0 = note_details.__destroy_into_raw();
    _assertClass(tag, NoteTag);
    var ptr1 = tag.__destroy_into_raw();
    const ret = wasm.notedetailsandtag_new(ptr0, ptr1);
    this.__wbg_ptr = ret >>> 0;
    NoteDetailsAndTagFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {NoteTag}
   */
  get tag() {
    const ret = wasm.notedetailsandtag_tag(this.__wbg_ptr);
    return NoteTag.__wrap(ret);
  }
};
if (Symbol.dispose) NoteDetailsAndTag.prototype[Symbol.dispose] = NoteDetailsAndTag.prototype.free;
var NoteDetailsAndTagArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_notedetailsandtagarray_free(ptr >>> 0, 1));
var NoteDetailsAndTagArray = class {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteDetailsAndTagArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_notedetailsandtagarray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {NoteDetailsAndTag} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, NoteDetailsAndTag);
      var ptr0 = elem.__destroy_into_raw();
      wasm.notedetailsandtagarray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {NoteDetailsAndTag}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.notedetailsandtagarray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return NoteDetailsAndTag.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {NoteDetailsAndTag[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.notedetailsandtagarray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    NoteDetailsAndTagArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {NoteDetailsAndTag} element
   */
  push(element) {
    _assertClass(element, NoteDetailsAndTag);
    wasm.notedetailsandtagarray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.notedetailsandtagarray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) NoteDetailsAndTagArray.prototype[Symbol.dispose] = NoteDetailsAndTagArray.prototype.free;
var NoteExecutionHintFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteexecutionhint_free(ptr >>> 0, 1));
var NoteExecutionHint = class _NoteExecutionHint {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteExecutionHint.prototype);
    obj.__wbg_ptr = ptr;
    NoteExecutionHintFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteExecutionHintFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteexecutionhint_free(ptr, 0);
  }
  /**
   * @param {number} tag
   * @param {number} payload
   * @returns {NoteExecutionHint}
   */
  static fromParts(tag, payload) {
    const ret = wasm.noteexecutionhint_fromParts(tag, payload);
    return _NoteExecutionHint.__wrap(ret);
  }
  /**
   * @param {number} block_num
   * @returns {NoteExecutionHint}
   */
  static afterBlock(block_num) {
    const ret = wasm.noteexecutionhint_afterBlock(block_num);
    return _NoteExecutionHint.__wrap(ret);
  }
  /**
   * @param {number} epoch_len
   * @param {number} slot_len
   * @param {number} slot_offset
   * @returns {NoteExecutionHint}
   */
  static onBlockSlot(epoch_len, slot_len, slot_offset) {
    const ret = wasm.noteexecutionhint_onBlockSlot(epoch_len, slot_len, slot_offset);
    return _NoteExecutionHint.__wrap(ret);
  }
  /**
   * @param {number} block_num
   * @returns {boolean}
   */
  canBeConsumed(block_num) {
    const ret = wasm.noteexecutionhint_canBeConsumed(this.__wbg_ptr, block_num);
    return ret !== 0;
  }
  /**
   * @returns {NoteExecutionHint}
   */
  static none() {
    const ret = wasm.noteexecutionhint_none();
    return _NoteExecutionHint.__wrap(ret);
  }
  /**
   * @returns {NoteExecutionHint}
   */
  static always() {
    const ret = wasm.noteexecutionhint_always();
    return _NoteExecutionHint.__wrap(ret);
  }
};
if (Symbol.dispose) NoteExecutionHint.prototype[Symbol.dispose] = NoteExecutionHint.prototype.free;
var NoteExecutionModeFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteexecutionmode_free(ptr >>> 0, 1));
var NoteExecutionMode = class _NoteExecutionMode {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteExecutionMode.prototype);
    obj.__wbg_ptr = ptr;
    NoteExecutionModeFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteExecutionModeFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteexecutionmode_free(ptr, 0);
  }
  /**
   * @returns {NoteExecutionMode}
   */
  static newNetwork() {
    const ret = wasm.accountstoragemode_public();
    return _NoteExecutionMode.__wrap(ret);
  }
  /**
   * @returns {NoteExecutionMode}
   */
  static newLocal() {
    const ret = wasm.accountstoragemode_network();
    return _NoteExecutionMode.__wrap(ret);
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.noteexecutionmode_toString(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) NoteExecutionMode.prototype[Symbol.dispose] = NoteExecutionMode.prototype.free;
var NoteFileFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_notefile_free(ptr >>> 0, 1));
var NoteFile = class _NoteFile {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteFile.prototype);
    obj.__wbg_ptr = ptr;
    NoteFileFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteFileFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_notefile_free(ptr, 0);
  }
  /**
   * Given a valid byte representation of a `NoteFile`,
   * return it as a struct.
   * @param {Uint8Array} bytes
   * @returns {NoteFile}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_export);
      const len0 = WASM_VECTOR_LEN;
      wasm.notefile_deserialize(retptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _NoteFile.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {NoteId} note_details
   * @returns {NoteFile}
   */
  static fromNoteId(note_details) {
    _assertClass(note_details, NoteId);
    const ret = wasm.notefile_fromNoteId(note_details.__wbg_ptr);
    return _NoteFile.__wrap(ret);
  }
  /**
   * @param {InputNote} note
   * @returns {NoteFile}
   */
  static fromInputNote(note) {
    _assertClass(note, InputNote);
    const ret = wasm.notefile_fromInputNote(note.__wbg_ptr);
    return _NoteFile.__wrap(ret);
  }
  /**
   * @param {OutputNote} note
   * @returns {NoteFile}
   */
  static fromOutputNote(note) {
    _assertClass(note, OutputNote);
    const ret = wasm.notefile_fromOutputNote(note.__wbg_ptr);
    return _NoteFile.__wrap(ret);
  }
  /**
   * @param {NoteDetails} note_details
   * @returns {NoteFile}
   */
  static fromNoteDetails(note_details) {
    _assertClass(note_details, NoteDetails);
    const ret = wasm.notefile_fromNoteDetails(note_details.__wbg_ptr);
    return _NoteFile.__wrap(ret);
  }
  /**
   * Returns this `NoteFile`'s types.
   * @returns {string}
   */
  noteType() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.notefile_noteType(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Turn a notefile into its byte representation.
   * @returns {Uint8Array}
   */
  serialize() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.notefile_serialize(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) NoteFile.prototype[Symbol.dispose] = NoteFile.prototype.free;
var NoteFilterFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_notefilter_free(ptr >>> 0, 1));
var NoteFilter = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteFilterFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_notefilter_free(ptr, 0);
  }
  /**
   * @param {NoteFilterTypes} note_type
   * @param {NoteId[] | null} [note_ids]
   */
  constructor(note_type, note_ids) {
    var ptr0 = isLikeNone(note_ids) ? 0 : passArrayJsValueToWasm0(note_ids, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.notefilter_new(note_type, ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    NoteFilterFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
};
if (Symbol.dispose) NoteFilter.prototype[Symbol.dispose] = NoteFilter.prototype.free;
var NoteHeaderFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteheader_free(ptr >>> 0, 1));
var NoteHeader = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteHeaderFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteheader_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  commitment() {
    const ret = wasm.noteheader_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {NoteId}
   */
  id() {
    const ret = wasm.noteheader_id(this.__wbg_ptr);
    return NoteId.__wrap(ret);
  }
  /**
   * @returns {NoteMetadata}
   */
  metadata() {
    const ret = wasm.noteheader_metadata(this.__wbg_ptr);
    return NoteMetadata.__wrap(ret);
  }
};
if (Symbol.dispose) NoteHeader.prototype[Symbol.dispose] = NoteHeader.prototype.free;
var NoteIdFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteid_free(ptr >>> 0, 1));
var NoteId = class _NoteId {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteId.prototype);
    obj.__wbg_ptr = ptr;
    NoteIdFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _NoteId)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteIdFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteid_free(ptr, 0);
  }
  /**
   * @param {Word} recipient_digest
   * @param {Word} asset_commitment_digest
   */
  constructor(recipient_digest, asset_commitment_digest) {
    _assertClass(recipient_digest, Word);
    _assertClass(asset_commitment_digest, Word);
    const ret = wasm.noteid_new(recipient_digest.__wbg_ptr, asset_commitment_digest.__wbg_ptr);
    this.__wbg_ptr = ret >>> 0;
    NoteIdFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {string} hex
   * @returns {NoteId}
   */
  static fromHex(hex) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(hex, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      wasm.noteid_fromHex(retptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _NoteId.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.noteid_toString(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) NoteId.prototype[Symbol.dispose] = NoteId.prototype.free;
var NoteIdAndArgsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteidandargs_free(ptr >>> 0, 1));
var NoteIdAndArgs = class _NoteIdAndArgs {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteIdAndArgs.prototype);
    obj.__wbg_ptr = ptr;
    NoteIdAndArgsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _NoteIdAndArgs)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteIdAndArgsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteidandargs_free(ptr, 0);
  }
  /**
   * @param {NoteId} note_id
   * @param {Word | null} [args]
   */
  constructor(note_id, args) {
    _assertClass(note_id, NoteId);
    var ptr0 = note_id.__destroy_into_raw();
    let ptr1 = 0;
    if (!isLikeNone(args)) {
      _assertClass(args, Word);
      ptr1 = args.__destroy_into_raw();
    }
    const ret = wasm.noteidandargs_new(ptr0, ptr1);
    this.__wbg_ptr = ret >>> 0;
    NoteIdAndArgsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
};
if (Symbol.dispose) NoteIdAndArgs.prototype[Symbol.dispose] = NoteIdAndArgs.prototype.free;
var NoteIdAndArgsArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteidandargsarray_free(ptr >>> 0, 1));
var NoteIdAndArgsArray = class {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteIdAndArgsArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteidandargsarray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {NoteIdAndArgs} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, NoteIdAndArgs);
      var ptr0 = elem.__destroy_into_raw();
      wasm.noteidandargsarray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {NoteIdAndArgs}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.noteidandargsarray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return NoteIdAndArgs.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {NoteIdAndArgs[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.noteidandargsarray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    NoteIdAndArgsArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {NoteIdAndArgs} element
   */
  push(element) {
    _assertClass(element, NoteIdAndArgs);
    wasm.noteidandargsarray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.noteidandargsarray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) NoteIdAndArgsArray.prototype[Symbol.dispose] = NoteIdAndArgsArray.prototype.free;
var NoteInclusionProofFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteinclusionproof_free(ptr >>> 0, 1));
var NoteInclusionProof = class _NoteInclusionProof {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteInclusionProof.prototype);
    obj.__wbg_ptr = ptr;
    NoteInclusionProofFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteInclusionProofFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteinclusionproof_free(ptr, 0);
  }
  /**
   * @returns {NoteLocation}
   */
  location() {
    const ret = wasm.noteinclusionproof_location(this.__wbg_ptr);
    return NoteLocation.__wrap(ret);
  }
  /**
   * @returns {MerklePath}
   */
  notePath() {
    const ret = wasm.noteinclusionproof_notePath(this.__wbg_ptr);
    return MerklePath.__wrap(ret);
  }
};
if (Symbol.dispose) NoteInclusionProof.prototype[Symbol.dispose] = NoteInclusionProof.prototype.free;
var NoteInputsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noteinputs_free(ptr >>> 0, 1));
var NoteInputs = class _NoteInputs {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteInputs.prototype);
    obj.__wbg_ptr = ptr;
    NoteInputsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteInputsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noteinputs_free(ptr, 0);
  }
  /**
   * @param {FeltArray} felt_array
   */
  constructor(felt_array) {
    _assertClass(felt_array, FeltArray);
    const ret = wasm.noteinputs_new(felt_array.__wbg_ptr);
    this.__wbg_ptr = ret >>> 0;
    NoteInputsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {Felt[]}
   */
  values() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.noteinputs_values(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) NoteInputs.prototype[Symbol.dispose] = NoteInputs.prototype.free;
var NoteLocationFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_notelocation_free(ptr >>> 0, 1));
var NoteLocation = class _NoteLocation {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteLocation.prototype);
    obj.__wbg_ptr = ptr;
    NoteLocationFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteLocationFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_notelocation_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  nodeIndexInBlock() {
    const ret = wasm.notelocation_nodeIndexInBlock(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {number}
   */
  blockNum() {
    const ret = wasm.notelocation_blockNum(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) NoteLocation.prototype[Symbol.dispose] = NoteLocation.prototype.free;
var NoteMetadataFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_notemetadata_free(ptr >>> 0, 1));
var NoteMetadata = class _NoteMetadata {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteMetadata.prototype);
    obj.__wbg_ptr = ptr;
    NoteMetadataFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteMetadataFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_notemetadata_free(ptr, 0);
  }
  /**
   * @param {AccountId} sender
   * @param {NoteType} note_type
   * @param {NoteTag} note_tag
   * @param {NoteExecutionHint} note_execution_hint
   * @param {Felt | null} [aux]
   */
  constructor(sender, note_type, note_tag, note_execution_hint, aux) {
    _assertClass(sender, AccountId);
    _assertClass(note_tag, NoteTag);
    _assertClass(note_execution_hint, NoteExecutionHint);
    let ptr0 = 0;
    if (!isLikeNone(aux)) {
      _assertClass(aux, Felt);
      ptr0 = aux.__destroy_into_raw();
    }
    const ret = wasm.notemetadata_new(sender.__wbg_ptr, note_type, note_tag.__wbg_ptr, note_execution_hint.__wbg_ptr, ptr0);
    this.__wbg_ptr = ret >>> 0;
    NoteMetadataFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {NoteTag}
   */
  tag() {
    const ret = wasm.notedetailsandtag_tag(this.__wbg_ptr);
    return NoteTag.__wrap(ret);
  }
  /**
   * @returns {AccountId}
   */
  sender() {
    const ret = wasm.notemetadata_sender(this.__wbg_ptr);
    return AccountId.__wrap(ret);
  }
  /**
   * @returns {NoteType}
   */
  noteType() {
    const ret = wasm.notemetadata_noteType(this.__wbg_ptr);
    return ret;
  }
};
if (Symbol.dispose) NoteMetadata.prototype[Symbol.dispose] = NoteMetadata.prototype.free;
var NoteRecipientFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noterecipient_free(ptr >>> 0, 1));
var NoteRecipient = class _NoteRecipient {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteRecipient.prototype);
    obj.__wbg_ptr = ptr;
    NoteRecipientFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _NoteRecipient)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteRecipientFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noterecipient_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  serialNum() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @param {Word} serial_num
   * @param {NoteScript} note_script
   * @param {NoteInputs} inputs
   */
  constructor(serial_num, note_script, inputs) {
    _assertClass(serial_num, Word);
    _assertClass(note_script, NoteScript);
    _assertClass(inputs, NoteInputs);
    const ret = wasm.noterecipient_new(serial_num.__wbg_ptr, note_script.__wbg_ptr, inputs.__wbg_ptr);
    this.__wbg_ptr = ret >>> 0;
    NoteRecipientFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {Word}
   */
  digest() {
    const ret = wasm.accountheader_storageCommitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {NoteInputs}
   */
  inputs() {
    const ret = wasm.noterecipient_inputs(this.__wbg_ptr);
    return NoteInputs.__wrap(ret);
  }
  /**
   * @returns {NoteScript}
   */
  script() {
    const ret = wasm.noterecipient_script(this.__wbg_ptr);
    return NoteScript.__wrap(ret);
  }
};
if (Symbol.dispose) NoteRecipient.prototype[Symbol.dispose] = NoteRecipient.prototype.free;
var NoteRecipientArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_noterecipientarray_free(ptr >>> 0, 1));
var NoteRecipientArray = class {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteRecipientArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_noterecipientarray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {NoteRecipient} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, NoteRecipient);
      var ptr0 = elem.__destroy_into_raw();
      wasm.noterecipientarray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {NoteRecipient}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.noterecipientarray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return NoteRecipient.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {NoteRecipient[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.noterecipientarray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    NoteRecipientArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {NoteRecipient} element
   */
  push(element) {
    _assertClass(element, NoteRecipient);
    wasm.noterecipientarray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.noterecipientarray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) NoteRecipientArray.prototype[Symbol.dispose] = NoteRecipientArray.prototype.free;
var NoteScriptFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_notescript_free(ptr >>> 0, 1));
var NoteScript = class _NoteScript {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteScript.prototype);
    obj.__wbg_ptr = ptr;
    NoteScriptFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteScriptFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_notescript_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {NoteScript}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.notescript_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _NoteScript.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * Creates a `NoteScript` from the given `Package`.
   * Throws if the package is invalid.
   * @param {Package} _package
   * @returns {NoteScript}
   */
  static fromPackage(_package) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(_package, Package);
      wasm.notescript_fromPackage(retptr, _package.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _NoteScript.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {NoteScript}
   */
  static p2id() {
    const ret = wasm.notescript_p2id();
    return _NoteScript.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  root() {
    const ret = wasm.notescript_root(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {NoteScript}
   */
  static swap() {
    const ret = wasm.notescript_swap();
    return _NoteScript.__wrap(ret);
  }
  /**
   * @returns {NoteScript}
   */
  static p2ide() {
    const ret = wasm.notescript_p2ide();
    return _NoteScript.__wrap(ret);
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.notescript_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * Print the MAST source for this script.
   * @returns {string}
   */
  toString() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.notescript_toString(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) NoteScript.prototype[Symbol.dispose] = NoteScript.prototype.free;
var NoteTagFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_notetag_free(ptr >>> 0, 1));
var NoteTag = class _NoteTag {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_NoteTag.prototype);
    obj.__wbg_ptr = ptr;
    NoteTagFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    NoteTagFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_notetag_free(ptr, 0);
  }
  /**
   * @returns {NoteExecutionMode}
   */
  executionMode() {
    const ret = wasm.notetag_executionMode(this.__wbg_ptr);
    return NoteExecutionMode.__wrap(ret);
  }
  /**
   * @param {AccountId} account_id
   * @returns {NoteTag}
   */
  static fromAccountId(account_id) {
    _assertClass(account_id, AccountId);
    const ret = wasm.notetag_fromAccountId(account_id.__wbg_ptr);
    return _NoteTag.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  isSingleTarget() {
    const ret = wasm.notetag_isSingleTarget(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @param {number} use_case_id
   * @param {number} payload
   * @returns {NoteTag}
   */
  static forLocalUseCase(use_case_id, payload) {
    const ret = wasm.notetag_forLocalUseCase(use_case_id, payload);
    return _NoteTag.__wrap(ret);
  }
  /**
   * @param {number} use_case_id
   * @param {number} payload
   * @param {NoteExecutionMode} execution
   * @returns {NoteTag}
   */
  static forPublicUseCase(use_case_id, payload, execution) {
    _assertClass(execution, NoteExecutionMode);
    const ret = wasm.notetag_forPublicUseCase(use_case_id, payload, execution.__wbg_ptr);
    return _NoteTag.__wrap(ret);
  }
  /**
   * @returns {number}
   */
  asU32() {
    const ret = wasm.notetag_asU32(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) NoteTag.prototype[Symbol.dispose] = NoteTag.prototype.free;
var OutputNoteFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_outputnote_free(ptr >>> 0, 1));
var OutputNote = class _OutputNote {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_OutputNote.prototype);
    obj.__wbg_ptr = ptr;
    OutputNoteFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _OutputNote)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    OutputNoteFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_outputnote_free(ptr, 0);
  }
  /**
   * @returns {Word | undefined}
   */
  recipientDigest() {
    const ret = wasm.outputnote_recipientDigest(this.__wbg_ptr);
    return ret === 0 ? void 0 : Word.__wrap(ret);
  }
  /**
   * @returns {NoteId}
   */
  id() {
    const ret = wasm.outputnote_id(this.__wbg_ptr);
    return NoteId.__wrap(ret);
  }
  /**
   * @param {Note} note
   * @returns {OutputNote}
   */
  static full(note) {
    _assertClass(note, Note);
    const ret = wasm.outputnote_full(note.__wbg_ptr);
    return _OutputNote.__wrap(ret);
  }
  /**
   * @returns {NoteAssets | undefined}
   */
  assets() {
    const ret = wasm.outputnote_assets(this.__wbg_ptr);
    return ret === 0 ? void 0 : NoteAssets.__wrap(ret);
  }
  /**
   * @param {NoteHeader} note_header
   * @returns {OutputNote}
   */
  static header(note_header) {
    _assertClass(note_header, NoteHeader);
    const ret = wasm.outputnote_header(note_header.__wbg_ptr);
    return _OutputNote.__wrap(ret);
  }
  /**
   * @returns {OutputNote}
   */
  shrink() {
    const ret = wasm.outputnote_shrink(this.__wbg_ptr);
    return _OutputNote.__wrap(ret);
  }
  /**
   * @param {PartialNote} partial_note
   * @returns {OutputNote}
   */
  static partial(partial_note) {
    _assertClass(partial_note, PartialNote);
    const ret = wasm.outputnote_partial(partial_note.__wbg_ptr);
    return _OutputNote.__wrap(ret);
  }
  /**
   * @returns {NoteMetadata}
   */
  metadata() {
    const ret = wasm.outputnote_metadata(this.__wbg_ptr);
    return NoteMetadata.__wrap(ret);
  }
  /**
   * @returns {Note | undefined}
   */
  intoFull() {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.outputnote_intoFull(ptr);
    return ret === 0 ? void 0 : Note.__wrap(ret);
  }
};
if (Symbol.dispose) OutputNote.prototype[Symbol.dispose] = OutputNote.prototype.free;
var OutputNoteArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_outputnotearray_free(ptr >>> 0, 1));
var OutputNoteArray = class {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    OutputNoteArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_outputnotearray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {OutputNote} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, OutputNote);
      var ptr0 = elem.__destroy_into_raw();
      wasm.outputnotearray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {OutputNote}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.outputnotearray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return OutputNote.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {OutputNote[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.outputnotearray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    OutputNoteArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {OutputNote} element
   */
  push(element) {
    _assertClass(element, OutputNote);
    wasm.outputnotearray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.outputnotearray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) OutputNoteArray.prototype[Symbol.dispose] = OutputNoteArray.prototype.free;
var OutputNotesFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_outputnotes_free(ptr >>> 0, 1));
var OutputNotes = class _OutputNotes {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_OutputNotes.prototype);
    obj.__wbg_ptr = ptr;
    OutputNotesFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _OutputNotes)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    OutputNotesFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_outputnotes_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  commitment() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {OutputNote[]}
   */
  notes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.outputnotes_notes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {number} index
   * @returns {OutputNote}
   */
  getNote(index) {
    const ret = wasm.outputnotes_getNote(this.__wbg_ptr, index);
    return OutputNote.__wrap(ret);
  }
  /**
   * @returns {boolean}
   */
  isEmpty() {
    const ret = wasm.outputnotes_isEmpty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {number}
   */
  numNotes() {
    const ret = wasm.outputnotes_numNotes(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) OutputNotes.prototype[Symbol.dispose] = OutputNotes.prototype.free;
var OutputNotesArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_outputnotesarray_free(ptr >>> 0, 1));
var OutputNotesArray = class {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    OutputNotesArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_outputnotesarray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {OutputNotes} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, OutputNotes);
      var ptr0 = elem.__destroy_into_raw();
      wasm.outputnotesarray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {OutputNotes}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.outputnotesarray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return OutputNotes.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {OutputNotes[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.outputnotesarray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    OutputNotesArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {OutputNotes} element
   */
  push(element) {
    _assertClass(element, OutputNotes);
    wasm.outputnotesarray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.outputnotesarray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) OutputNotesArray.prototype[Symbol.dispose] = OutputNotesArray.prototype.free;
var PackageFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_package_free(ptr >>> 0, 1));
var Package = class _Package {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Package.prototype);
    obj.__wbg_ptr = ptr;
    PackageFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PackageFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_package_free(ptr, 0);
  }
  /**
   * Returns the underlying library of a `Package`.
   * Fails if the package is not a library.
   * @returns {Library}
   */
  asLibrary() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.package_asLibrary(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return Library.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Returns the underlying program of a `Package`.
   * Fails if the package is not a program.
   * @returns {Program}
   */
  asProgram() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.package_asProgram(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return Program.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {Package}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.package_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _Package.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.package_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) Package.prototype[Symbol.dispose] = Package.prototype.free;
var PartialNoteFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_partialnote_free(ptr >>> 0, 1));
var PartialNote = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PartialNoteFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_partialnote_free(ptr, 0);
  }
  /**
   * @returns {Word}
   */
  recipientDigest() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {NoteId}
   */
  id() {
    const ret = wasm.partialnote_id(this.__wbg_ptr);
    return NoteId.__wrap(ret);
  }
  /**
   * @returns {NoteAssets}
   */
  assets() {
    const ret = wasm.partialnote_assets(this.__wbg_ptr);
    return NoteAssets.__wrap(ret);
  }
  /**
   * @returns {NoteMetadata}
   */
  metadata() {
    const ret = wasm.note_metadata(this.__wbg_ptr);
    return NoteMetadata.__wrap(ret);
  }
};
if (Symbol.dispose) PartialNote.prototype[Symbol.dispose] = PartialNote.prototype.free;
var ProgramFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_program_free(ptr >>> 0, 1));
var Program = class _Program {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Program.prototype);
    obj.__wbg_ptr = ptr;
    ProgramFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ProgramFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_program_free(ptr, 0);
  }
};
if (Symbol.dispose) Program.prototype[Symbol.dispose] = Program.prototype.free;
var ProvenTransactionFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_proventransaction_free(ptr >>> 0, 1));
var ProvenTransaction = class _ProvenTransaction {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_ProvenTransaction.prototype);
    obj.__wbg_ptr = ptr;
    ProvenTransactionFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ProvenTransactionFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_proventransaction_free(ptr, 0);
  }
  /**
   * Returns the account ID the transaction was executed against.
   * @returns {AccountId}
   */
  accountId() {
    const ret = wasm.proventransaction_accountId(this.__wbg_ptr);
    return AccountId.__wrap(ret);
  }
  /**
   * Returns the nullifiers of the consumed input notes.
   * @returns {Word[]}
   */
  nullifiers() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.proventransaction_nullifiers(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Deserializes a proven transaction from bytes.
   * @param {Uint8Array} bytes
   * @returns {ProvenTransaction}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.proventransaction_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _ProvenTransaction.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * Returns notes created by this transaction.
   * @returns {OutputNotes}
   */
  outputNotes() {
    const ret = wasm.proventransaction_outputNotes(this.__wbg_ptr);
    return OutputNotes.__wrap(ret);
  }
  /**
   * Returns the reference block number used during execution.
   * @returns {number}
   */
  refBlockNumber() {
    const ret = wasm.proventransaction_refBlockNumber(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * Returns the commitment of the reference block.
   * @returns {Word}
   */
  refBlockCommitment() {
    const ret = wasm.proventransaction_refBlockCommitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * Returns the block number at which the transaction expires.
   * @returns {number}
   */
  expirationBlockNumber() {
    const ret = wasm.proventransaction_expirationBlockNumber(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * Returns the transaction ID.
   * @returns {TransactionId}
   */
  id() {
    const ret = wasm.proventransaction_id(this.__wbg_ptr);
    return TransactionId.__wrap(ret);
  }
  /**
   * Serializes the proven transaction into bytes.
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.proventransaction_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) ProvenTransaction.prototype[Symbol.dispose] = ProvenTransaction.prototype.free;
var PublicKeyFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_publickey_free(ptr >>> 0, 1));
var PublicKey = class _PublicKey {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_PublicKey.prototype);
    obj.__wbg_ptr = ptr;
    PublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    PublicKeyFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_publickey_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {PublicKey}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.publickey_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _PublicKey.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @param {SigningInputs} signing_inputs
   * @param {Signature} signature
   * @returns {boolean}
   */
  verifyData(signing_inputs, signature) {
    _assertClass(signing_inputs, SigningInputs);
    _assertClass(signature, Signature);
    const ret = wasm.publickey_verifyData(this.__wbg_ptr, signing_inputs.__wbg_ptr, signature.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @param {Word} message
   * @param {Signature} signature
   * @returns {PublicKey}
   */
  static recoverFrom(message, signature) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(message, Word);
      _assertClass(signature, Signature);
      wasm.publickey_recoverFrom(retptr, message.__wbg_ptr, signature.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _PublicKey.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Word}
   */
  toCommitment() {
    const ret = wasm.publickey_toCommitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @param {Word} message
   * @param {Signature} signature
   * @returns {boolean}
   */
  verify(message, signature) {
    _assertClass(message, Word);
    _assertClass(signature, Signature);
    const ret = wasm.publickey_verify(this.__wbg_ptr, message.__wbg_ptr, signature.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.publickey_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) PublicKey.prototype[Symbol.dispose] = PublicKey.prototype.free;
var RpcClientFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_rpcclient_free(ptr >>> 0, 1));
var RpcClient = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    RpcClientFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rpcclient_free(ptr, 0);
  }
  /**
   * Fetches notes by their IDs from the connected Miden node.
   *
   * @param note_ids - Array of [`NoteId`] objects to fetch
   * @returns Promise that resolves to  different data depending on the note type:
   * - Private notes: Returns only `note_id` and `metadata`. The `input_note` field will be
   *   `null`.
   * - Public notes: Returns the full `input_note` with inclusion proof, alongside metadata and
   *   ID.
   * @param {NoteId[]} note_ids
   * @returns {Promise<FetchedNote[]>}
   */
  getNotesById(note_ids) {
    const ptr0 = passArrayJsValueToWasm0(note_ids, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.rpcclient_getNotesById(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
   * Fetches a note script by its root hash from the connected Miden node.
   *
   * @param `script_root` The root hash of the note script to fetch
   * @returns Promise that resolves to the `NoteScript`
   * @param {Word} script_root
   * @returns {Promise<NoteScript>}
   */
  getNoteScriptByRoot(script_root) {
    _assertClass(script_root, Word);
    var ptr0 = script_root.__destroy_into_raw();
    const ret = wasm.rpcclient_getNoteScriptByRoot(this.__wbg_ptr, ptr0);
    return takeObject(ret);
  }
  /**
   * Creates a new RPC client instance.
   *
   * @param endpoint - Endpoint to connect to.
   * @param {Endpoint} endpoint
   */
  constructor(endpoint) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(endpoint, Endpoint);
      var ptr0 = endpoint.__destroy_into_raw();
      wasm.rpcclient_new(retptr, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      this.__wbg_ptr = r0 >>> 0;
      RpcClientFinalization.register(this, this.__wbg_ptr, this);
      return this;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) RpcClient.prototype[Symbol.dispose] = RpcClient.prototype.free;
var Rpo256Finalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_rpo256_free(ptr >>> 0, 1));
var Rpo256 = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    Rpo256Finalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rpo256_free(ptr, 0);
  }
  /**
   * @param {FeltArray} felt_array
   * @returns {Word}
   */
  static hashElements(felt_array) {
    _assertClass(felt_array, FeltArray);
    const ret = wasm.rpo256_hashElements(felt_array.__wbg_ptr);
    return Word.__wrap(ret);
  }
};
if (Symbol.dispose) Rpo256.prototype[Symbol.dispose] = Rpo256.prototype.free;
var ScriptBuilderFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_scriptbuilder_free(ptr >>> 0, 1));
var ScriptBuilder = class _ScriptBuilder {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_ScriptBuilder.prototype);
    obj.__wbg_ptr = ptr;
    ScriptBuilderFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ScriptBuilderFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_scriptbuilder_free(ptr, 0);
  }
  /**
   * Given a module path (something like `my_lib::module`) and source code, this will
   * statically link it for use with scripts to be built with this builder.
   * @param {string} module_path
   * @param {string} module_code
   */
  linkModule(module_path, module_code) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(module_path, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      const ptr1 = passStringToWasm0(module_code, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len1 = WASM_VECTOR_LEN;
      wasm.scriptbuilder_linkModule(retptr, this.__wbg_ptr, ptr0, len0, ptr1, len1);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Given a Library Path, and a source code, turn it into a Library.
   * E.g. A path library can be `miden::my_contract`. When turned into a library,
   * this can be used from another script with an import statement, following the
   * previous example: `use.miden::my_contract'.
   * @param {string} library_path
   * @param {string} source_code
   * @returns {Library}
   */
  buildLibrary(library_path, source_code) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(library_path, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      const ptr1 = passStringToWasm0(source_code, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len1 = WASM_VECTOR_LEN;
      wasm.scriptbuilder_buildLibrary(retptr, this.__wbg_ptr, ptr0, len0, ptr1, len1);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return Library.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Given a Transaction Script's source code, compiles it with the available
   * modules under this builder. Returns the compiled script.
   * @param {string} tx_script
   * @returns {TransactionScript}
   */
  compileTxScript(tx_script) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(tx_script, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      wasm.scriptbuilder_compileTxScript(retptr, this.__wbg_ptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return TransactionScript.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Given a Note Script's source code, compiles it with the available
   * modules under this builder. Returns the compiled script.
   * @param {string} program
   * @returns {NoteScript}
   */
  compileNoteScript(program) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(program, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      wasm.scriptbuilder_compileNoteScript(retptr, this.__wbg_ptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return NoteScript.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Statically links the given library.
   *
   * Static linking means the library code is copied into the script code.
   * Use this for most libraries that are not available on-chain.
   *
   * Receives as argument the library to link.
   * @param {Library} library
   */
  linkStaticLibrary(library) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(library, Library);
      wasm.scriptbuilder_linkStaticLibrary(retptr, this.__wbg_ptr, library.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * This is useful to dynamically link the [`Library`] of a foreign account
   * that is invoked using foreign procedure invocation (FPI). Its code is available
   * on-chain and so it does not have to be copied into the script code.
   *
   * For all other use cases not involving FPI, link the library statically.
   * Receives as argument the library to be linked.
   * @param {Library} library
   */
  linkDynamicLibrary(library) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(library, Library);
      wasm.scriptbuilder_linkDynamicLibrary(retptr, this.__wbg_ptr, library.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) ScriptBuilder.prototype[Symbol.dispose] = ScriptBuilder.prototype.free;
var SecretKeyFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_secretkey_free(ptr >>> 0, 1));
var SecretKey = class _SecretKey {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_SecretKey.prototype);
    obj.__wbg_ptr = ptr;
    SecretKeyFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SecretKeyFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_secretkey_free(ptr, 0);
  }
  /**
   * @returns {PublicKey}
   */
  publicKey() {
    const ret = wasm.secretkey_publicKey(this.__wbg_ptr);
    return PublicKey.__wrap(ret);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {SecretKey}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.secretkey_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _SecretKey.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @param {Uint8Array | null} [seed]
   * @returns {SecretKey}
   */
  static ecdsaWithRNG(seed) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      var ptr0 = isLikeNone(seed) ? 0 : passArray8ToWasm0(seed, wasm.__wbindgen_export);
      var len0 = WASM_VECTOR_LEN;
      wasm.secretkey_ecdsaWithRNG(retptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _SecretKey.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array | null} [seed]
   * @returns {SecretKey}
   */
  static rpoFalconWithRNG(seed) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      var ptr0 = isLikeNone(seed) ? 0 : passArray8ToWasm0(seed, wasm.__wbindgen_export);
      var len0 = WASM_VECTOR_LEN;
      wasm.secretkey_rpoFalconWithRNG(retptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _SecretKey.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Word} message
   * @returns {Signature}
   */
  sign(message) {
    _assertClass(message, Word);
    const ret = wasm.secretkey_sign(this.__wbg_ptr, message.__wbg_ptr);
    return Signature.__wrap(ret);
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.secretkey_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {SigningInputs} signing_inputs
   * @returns {Signature}
   */
  signData(signing_inputs) {
    _assertClass(signing_inputs, SigningInputs);
    const ret = wasm.secretkey_signData(this.__wbg_ptr, signing_inputs.__wbg_ptr);
    return Signature.__wrap(ret);
  }
};
if (Symbol.dispose) SecretKey.prototype[Symbol.dispose] = SecretKey.prototype.free;
var SerializedInputNoteDataFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_serializedinputnotedata_free(ptr >>> 0, 1));
var SerializedInputNoteData = class _SerializedInputNoteData {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_SerializedInputNoteData.prototype);
    obj.__wbg_ptr = ptr;
    SerializedInputNoteDataFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _SerializedInputNoteData)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SerializedInputNoteDataFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_serializedinputnotedata_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get noteId() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_storageRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set noteId(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_storageRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {Uint8Array}
   */
  get noteAssets() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedinputnotedata_noteAssets(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} arg0
   */
  set noteAssets(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedinputnotedata_noteAssets(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {Uint8Array}
   */
  get serialNumber() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedinputnotedata_serialNumber(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} arg0
   */
  set serialNumber(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedinputnotedata_serialNumber(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {Uint8Array}
   */
  get inputs() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedinputnotedata_inputs(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} arg0
   */
  set inputs(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedinputnotedata_inputs(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {string}
   */
  get noteScriptRoot() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedinputnotedata_noteScriptRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set noteScriptRoot(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedinputnotedata_noteScriptRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {Uint8Array}
   */
  get noteScript() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedinputnotedata_noteScript(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} arg0
   */
  set noteScript(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedinputnotedata_noteScript(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {string}
   */
  get nullifier() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_codeRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set nullifier(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_codeRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {number}
   */
  get stateDiscriminant() {
    const ret = wasm.__wbg_get_serializedinputnotedata_stateDiscriminant(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} arg0
   */
  set stateDiscriminant(arg0) {
    wasm.__wbg_set_serializedinputnotedata_stateDiscriminant(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {Uint8Array}
   */
  get state() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedinputnotedata_state(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} arg0
   */
  set state(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedinputnotedata_state(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {string}
   */
  get createdAt() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_accountCommitment(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set createdAt(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_accountCommitment(this.__wbg_ptr, ptr0, len0);
  }
};
if (Symbol.dispose) SerializedInputNoteData.prototype[Symbol.dispose] = SerializedInputNoteData.prototype.free;
var SerializedOutputNoteDataFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_serializedoutputnotedata_free(ptr >>> 0, 1));
var SerializedOutputNoteData = class _SerializedOutputNoteData {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_SerializedOutputNoteData.prototype);
    obj.__wbg_ptr = ptr;
    SerializedOutputNoteDataFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _SerializedOutputNoteData)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SerializedOutputNoteDataFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_serializedoutputnotedata_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get noteId() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_storageRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set noteId(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_storageRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {Uint8Array}
   */
  get noteAssets() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedinputnotedata_noteAssets(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} arg0
   */
  set noteAssets(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedinputnotedata_noteAssets(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {string}
   */
  get recipientDigest() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstoragemapentry_value(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set recipientDigest(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstoragemapentry_value(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {Uint8Array}
   */
  get metadata() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedinputnotedata_inputs(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} arg0
   */
  set metadata(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedinputnotedata_inputs(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {string | undefined}
   */
  get nullifier() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedoutputnotedata_nullifier(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      let v1;
      if (r0 !== 0) {
        v1 = getStringFromWasm0(r0, r1).slice();
        wasm.__wbindgen_export3(r0, r1 * 1, 1);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {string | null} [arg0]
   */
  set nullifier(arg0) {
    var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    var len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedoutputnotedata_nullifier(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {number}
   */
  get expectedHeight() {
    const ret = wasm.__wbg_get_serializedoutputnotedata_expectedHeight(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set expectedHeight(arg0) {
    wasm.__wbg_set_serializedoutputnotedata_expectedHeight(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {number}
   */
  get stateDiscriminant() {
    const ret = wasm.__wbg_get_serializedoutputnotedata_stateDiscriminant(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} arg0
   */
  set stateDiscriminant(arg0) {
    wasm.__wbg_set_serializedoutputnotedata_stateDiscriminant(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {Uint8Array}
   */
  get state() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedoutputnotedata_state(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} arg0
   */
  set state(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedoutputnotedata_state(this.__wbg_ptr, ptr0, len0);
  }
};
if (Symbol.dispose) SerializedOutputNoteData.prototype[Symbol.dispose] = SerializedOutputNoteData.prototype.free;
var SerializedTransactionDataFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_serializedtransactiondata_free(ptr >>> 0, 1));
var SerializedTransactionData = class _SerializedTransactionData {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_SerializedTransactionData.prototype);
    obj.__wbg_ptr = ptr;
    SerializedTransactionDataFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _SerializedTransactionData)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SerializedTransactionDataFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_serializedtransactiondata_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get id() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsaccountupdate_storageRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set id(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsaccountupdate_storageRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {Uint8Array}
   */
  get details() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedinputnotedata_noteAssets(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} arg0
   */
  set details(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedinputnotedata_noteAssets(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {Uint8Array | undefined}
   */
  get scriptRoot() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedtransactiondata_scriptRoot(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      let v1;
      if (r0 !== 0) {
        v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_export3(r0, r1 * 1, 1);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array | null} [arg0]
   */
  set scriptRoot(arg0) {
    var ptr0 = isLikeNone(arg0) ? 0 : passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedtransactiondata_scriptRoot(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {Uint8Array | undefined}
   */
  get txScript() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedtransactiondata_txScript(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      let v1;
      if (r0 !== 0) {
        v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_export3(r0, r1 * 1, 1);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array | null} [arg0]
   */
  set txScript(arg0) {
    var ptr0 = isLikeNone(arg0) ? 0 : passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedtransactiondata_txScript(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {string}
   */
  get blockNum() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_jsstoragemapentry_value(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set blockNum(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_jsstoragemapentry_value(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {number}
   */
  get statusVariant() {
    const ret = wasm.__wbg_get_serializedtransactiondata_statusVariant(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} arg0
   */
  set statusVariant(arg0) {
    wasm.__wbg_set_serializedtransactiondata_statusVariant(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {Uint8Array}
   */
  get status() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.__wbg_get_serializedinputnotedata_inputs(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} arg0
   */
  set status(arg0) {
    const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_serializedinputnotedata_inputs(this.__wbg_ptr, ptr0, len0);
  }
};
if (Symbol.dispose) SerializedTransactionData.prototype[Symbol.dispose] = SerializedTransactionData.prototype.free;
var SignatureFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_signature_free(ptr >>> 0, 1));
var Signature = class _Signature {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Signature.prototype);
    obj.__wbg_ptr = ptr;
    SignatureFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SignatureFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_signature_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {Signature}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.signature_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _Signature.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @param {Word} message
   * @returns {Felt[]}
   */
  toPreparedSignature(message) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(message, Word);
      var ptr0 = message.__destroy_into_raw();
      wasm.signature_toPreparedSignature(retptr, this.__wbg_ptr, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v2 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v2;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.signature_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) Signature.prototype[Symbol.dispose] = Signature.prototype.free;
var SigningInputsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_signinginputs_free(ptr >>> 0, 1));
var SigningInputs = class _SigningInputs {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_SigningInputs.prototype);
    obj.__wbg_ptr = ptr;
    SigningInputsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SigningInputsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_signinginputs_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {SigningInputs}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.signinginputs_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _SigningInputs.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @returns {FeltArray}
   */
  toElements() {
    const ret = wasm.signinginputs_toElements(this.__wbg_ptr);
    return FeltArray.__wrap(ret);
  }
  /**
   * @returns {SigningInputsType}
   */
  get variantType() {
    const ret = wasm.signinginputs_variantType(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {Word}
   */
  blindPayload() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.signinginputs_blindPayload(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return Word.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Felt[]} felts
   * @returns {SigningInputs}
   */
  static newArbitrary(felts) {
    const ptr0 = passArrayJsValueToWasm0(felts, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.signinginputs_newArbitrary(ptr0, len0);
    return _SigningInputs.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  toCommitment() {
    const ret = wasm.signinginputs_toCommitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {FeltArray}
   */
  arbitraryPayload() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.signinginputs_arbitraryPayload(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return FeltArray.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {TransactionSummary} summary
   * @returns {SigningInputs}
   */
  static newTransactionSummary(summary) {
    _assertClass(summary, TransactionSummary);
    var ptr0 = summary.__destroy_into_raw();
    const ret = wasm.signinginputs_newTransactionSummary(ptr0);
    return _SigningInputs.__wrap(ret);
  }
  /**
   * @returns {TransactionSummary}
   */
  transactionSummaryPayload() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.signinginputs_transactionSummaryPayload(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return TransactionSummary.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Word} word
   * @returns {SigningInputs}
   */
  static newBlind(word) {
    _assertClass(word, Word);
    const ret = wasm.signinginputs_newBlind(word.__wbg_ptr);
    return _SigningInputs.__wrap(ret);
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.signinginputs_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) SigningInputs.prototype[Symbol.dispose] = SigningInputs.prototype.free;
var SlotAndKeysFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_slotandkeys_free(ptr >>> 0, 1));
var SlotAndKeys = class _SlotAndKeys {
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _SlotAndKeys)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SlotAndKeysFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_slotandkeys_free(ptr, 0);
  }
  /**
   * @returns {Word[]}
   */
  storage_map_keys() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.slotandkeys_storage_map_keys(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {number}
   */
  storage_slot_index() {
    const ret = wasm.slotandkeys_storage_slot_index(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {number} storage_slot_index
   * @param {Word[]} storage_map_keys
   */
  constructor(storage_slot_index, storage_map_keys) {
    const ptr0 = passArrayJsValueToWasm0(storage_map_keys, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.slotandkeys_new(storage_slot_index, ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    SlotAndKeysFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
};
if (Symbol.dispose) SlotAndKeys.prototype[Symbol.dispose] = SlotAndKeys.prototype.free;
var StorageMapFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_storagemap_free(ptr >>> 0, 1));
var StorageMap = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    StorageMapFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_storagemap_free(ptr, 0);
  }
  constructor() {
    const ret = wasm.storagemap_new();
    this.__wbg_ptr = ret >>> 0;
    StorageMapFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {Word} key
   * @param {Word} value
   * @returns {Word}
   */
  insert(key, value) {
    _assertClass(key, Word);
    _assertClass(value, Word);
    const ret = wasm.storagemap_insert(this.__wbg_ptr, key.__wbg_ptr, value.__wbg_ptr);
    return Word.__wrap(ret);
  }
};
if (Symbol.dispose) StorageMap.prototype[Symbol.dispose] = StorageMap.prototype.free;
var StorageSlotFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_storageslot_free(ptr >>> 0, 1));
var StorageSlot = class _StorageSlot {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_StorageSlot.prototype);
    obj.__wbg_ptr = ptr;
    StorageSlotFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _StorageSlot)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    StorageSlotFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_storageslot_free(ptr, 0);
  }
  /**
   * @param {Word} value
   * @returns {StorageSlot}
   */
  static fromValue(value) {
    _assertClass(value, Word);
    const ret = wasm.storageslot_fromValue(value.__wbg_ptr);
    return _StorageSlot.__wrap(ret);
  }
  /**
   * @returns {StorageSlot}
   */
  static emptyValue() {
    const ret = wasm.storageslot_emptyValue();
    return _StorageSlot.__wrap(ret);
  }
  /**
   * @param {StorageMap} storage_map
   * @returns {StorageSlot}
   */
  static map(storage_map) {
    _assertClass(storage_map, StorageMap);
    const ret = wasm.storageslot_map(storage_map.__wbg_ptr);
    return _StorageSlot.__wrap(ret);
  }
};
if (Symbol.dispose) StorageSlot.prototype[Symbol.dispose] = StorageSlot.prototype.free;
var StorageSlotArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_storageslotarray_free(ptr >>> 0, 1));
var StorageSlotArray = class {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    StorageSlotArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_storageslotarray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {StorageSlot} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, StorageSlot);
      var ptr0 = elem.__destroy_into_raw();
      wasm.storageslotarray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {StorageSlot}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.storageslotarray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return StorageSlot.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {StorageSlot[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.storageslotarray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    StorageSlotArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {StorageSlot} element
   */
  push(element) {
    _assertClass(element, StorageSlot);
    wasm.storageslotarray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.storageslotarray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) StorageSlotArray.prototype[Symbol.dispose] = StorageSlotArray.prototype.free;
var SyncSummaryFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_syncsummary_free(ptr >>> 0, 1));
var SyncSummary = class _SyncSummary {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_SyncSummary.prototype);
    obj.__wbg_ptr = ptr;
    SyncSummaryFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SyncSummaryFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_syncsummary_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {SyncSummary}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.syncsummary_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _SyncSummary.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @returns {NoteId[]}
   */
  consumedNotes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.syncsummary_consumedNotes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {NoteId[]}
   */
  committedNotes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.syncsummary_committedNotes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {AccountId[]}
   */
  updatedAccounts() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.syncsummary_updatedAccounts(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {TransactionId[]}
   */
  committedTransactions() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.syncsummary_committedTransactions(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {number}
   */
  blockNum() {
    const ret = wasm.syncsummary_blockNum(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.syncsummary_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) SyncSummary.prototype[Symbol.dispose] = SyncSummary.prototype.free;
var TestUtilsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_testutils_free(ptr >>> 0, 1));
var TestUtils = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TestUtilsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_testutils_free(ptr, 0);
  }
  /**
   * @returns {AccountId}
   */
  static createMockAccountId() {
    const ret = wasm.testutils_createMockAccountId();
    return AccountId.__wrap(ret);
  }
  /**
   * @returns {Uint8Array}
   */
  static createMockSerializedLibraryPackage() {
    const ret = wasm.testutils_createMockSerializedLibraryPackage();
    return takeObject(ret);
  }
  /**
   * @returns {Uint8Array}
   */
  static createMockSerializedProgramPackage() {
    const ret = wasm.testutils_createMockSerializedProgramPackage();
    return takeObject(ret);
  }
};
if (Symbol.dispose) TestUtils.prototype[Symbol.dispose] = TestUtils.prototype.free;
var TokenSymbolFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_tokensymbol_free(ptr >>> 0, 1));
var TokenSymbol = class _TokenSymbol {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TokenSymbol.prototype);
    obj.__wbg_ptr = ptr;
    TokenSymbolFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TokenSymbolFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_tokensymbol_free(ptr, 0);
  }
  /**
   * @param {string} symbol
   */
  constructor(symbol) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(symbol, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      wasm.tokensymbol_new(retptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      this.__wbg_ptr = r0 >>> 0;
      TokenSymbolFinalization.register(this, this.__wbg_ptr, this);
      return this;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {string}
   */
  toString() {
    let deferred2_0;
    let deferred2_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.tokensymbol_toString(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      var r3 = getDataViewMemory0().getInt32(retptr + 4 * 3, true);
      var ptr1 = r0;
      var len1 = r1;
      if (r3) {
        ptr1 = 0;
        len1 = 0;
        throw takeObject(r2);
      }
      deferred2_0 = ptr1;
      deferred2_1 = len1;
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred2_0, deferred2_1, 1);
    }
  }
};
if (Symbol.dispose) TokenSymbol.prototype[Symbol.dispose] = TokenSymbol.prototype.free;
var TransactionArgsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionargs_free(ptr >>> 0, 1));
var TransactionArgs = class _TransactionArgs {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionArgs.prototype);
    obj.__wbg_ptr = ptr;
    TransactionArgsFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionArgsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionargs_free(ptr, 0);
  }
  /**
   * @returns {AdviceInputs}
   */
  adviceInputs() {
    const ret = wasm.transactionargs_adviceInputs(this.__wbg_ptr);
    return AdviceInputs.__wrap(ret);
  }
  /**
   * @param {NoteId} note_id
   * @returns {Word | undefined}
   */
  getNoteArgs(note_id) {
    _assertClass(note_id, NoteId);
    const ret = wasm.transactionargs_getNoteArgs(this.__wbg_ptr, note_id.__wbg_ptr);
    return ret === 0 ? void 0 : Word.__wrap(ret);
  }
  /**
   * @returns {TransactionScript | undefined}
   */
  txScript() {
    const ret = wasm.transactionargs_txScript(this.__wbg_ptr);
    return ret === 0 ? void 0 : TransactionScript.__wrap(ret);
  }
};
if (Symbol.dispose) TransactionArgs.prototype[Symbol.dispose] = TransactionArgs.prototype.free;
var TransactionFilterFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionfilter_free(ptr >>> 0, 1));
var TransactionFilter = class _TransactionFilter {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionFilter.prototype);
    obj.__wbg_ptr = ptr;
    TransactionFilterFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionFilterFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionfilter_free(ptr, 0);
  }
  /**
   * @returns {TransactionFilter}
   */
  static uncommitted() {
    const ret = wasm.transactionfilter_uncommitted();
    return _TransactionFilter.__wrap(ret);
  }
  /**
   * @param {number} block_num
   * @returns {TransactionFilter}
   */
  static expiredBefore(block_num) {
    const ret = wasm.transactionfilter_expiredBefore(block_num);
    return _TransactionFilter.__wrap(ret);
  }
  /**
   * @returns {TransactionFilter}
   */
  static all() {
    const ret = wasm.transactionfilter_all();
    return _TransactionFilter.__wrap(ret);
  }
  /**
   * @param {TransactionId[]} ids
   * @returns {TransactionFilter}
   */
  static ids(ids) {
    const ptr0 = passArrayJsValueToWasm0(ids, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.transactionfilter_ids(ptr0, len0);
    return _TransactionFilter.__wrap(ret);
  }
};
if (Symbol.dispose) TransactionFilter.prototype[Symbol.dispose] = TransactionFilter.prototype.free;
var TransactionIdFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionid_free(ptr >>> 0, 1));
var TransactionId = class _TransactionId {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionId.prototype);
    obj.__wbg_ptr = ptr;
    TransactionIdFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _TransactionId)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionIdFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionid_free(ptr, 0);
  }
  /**
   * @returns {Felt[]}
   */
  asElements() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionid_asElements(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Word}
   */
  inner() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {string}
   */
  toHex() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionid_toHex(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {Uint8Array}
   */
  asBytes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionid_asBytes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
if (Symbol.dispose) TransactionId.prototype[Symbol.dispose] = TransactionId.prototype.free;
var TransactionProverFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionprover_free(ptr >>> 0, 1));
var TransactionProver = class _TransactionProver {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionProver.prototype);
    obj.__wbg_ptr = ptr;
    TransactionProverFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionProverFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionprover_free(ptr, 0);
  }
  /**
   * @param {string} prover_type
   * @param {string | null} [endpoint]
   * @returns {TransactionProver}
   */
  static deserialize(prover_type, endpoint) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(prover_type, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      var ptr1 = isLikeNone(endpoint) ? 0 : passStringToWasm0(endpoint, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      var len1 = WASM_VECTOR_LEN;
      wasm.transactionprover_deserialize(retptr, ptr0, len0, ptr1, len1);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _TransactionProver.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {TransactionProver}
   */
  static newLocalProver() {
    const ret = wasm.transactionprover_newLocalProver();
    return _TransactionProver.__wrap(ret);
  }
  /**
   * @param {string} endpoint
   * @returns {TransactionProver}
   */
  static newRemoteProver(endpoint) {
    const ptr0 = passStringToWasm0(endpoint, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.transactionprover_newRemoteProver(ptr0, len0);
    return _TransactionProver.__wrap(ret);
  }
  /**
   * @returns {string | undefined}
   */
  endpoint() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionprover_endpoint(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      let v1;
      if (r0 !== 0) {
        v1 = getStringFromWasm0(r0, r1).slice();
        wasm.__wbindgen_export3(r0, r1 * 1, 1);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {string}
   */
  serialize() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionprover_serialize(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) TransactionProver.prototype[Symbol.dispose] = TransactionProver.prototype.free;
var TransactionRecordFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionrecord_free(ptr >>> 0, 1));
var TransactionRecord = class _TransactionRecord {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionRecord.prototype);
    obj.__wbg_ptr = ptr;
    TransactionRecordFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionRecordFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionrecord_free(ptr, 0);
  }
  /**
   * @returns {AccountId}
   */
  accountId() {
    const ret = wasm.transactionrecord_accountId(this.__wbg_ptr);
    return AccountId.__wrap(ret);
  }
  /**
   * @returns {OutputNotes}
   */
  outputNotes() {
    const ret = wasm.transactionrecord_outputNotes(this.__wbg_ptr);
    return OutputNotes.__wrap(ret);
  }
  /**
   * @returns {bigint}
   */
  creationTimestamp() {
    const ret = wasm.transactionrecord_creationTimestamp(this.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * @returns {Word}
   */
  initAccountState() {
    const ret = wasm.transactionrecord_initAccountState(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {TransactionStatus}
   */
  transactionStatus() {
    const ret = wasm.transactionrecord_transactionStatus(this.__wbg_ptr);
    return TransactionStatus.__wrap(ret);
  }
  /**
   * @returns {Word}
   */
  finalAccountState() {
    const ret = wasm.transactionrecord_finalAccountState(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {Word[]}
   */
  inputNoteNullifiers() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionrecord_inputNoteNullifiers(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {TransactionId}
   */
  id() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return TransactionId.__wrap(ret);
  }
  /**
   * @returns {number}
   */
  blockNum() {
    const ret = wasm.transactionrecord_blockNum(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) TransactionRecord.prototype[Symbol.dispose] = TransactionRecord.prototype.free;
var TransactionRequestFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionrequest_free(ptr >>> 0, 1));
var TransactionRequest = class _TransactionRequest {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionRequest.prototype);
    obj.__wbg_ptr = ptr;
    TransactionRequestFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionRequestFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionrequest_free(ptr, 0);
  }
  /**
   * @returns {Word | undefined}
   */
  scriptArg() {
    const ret = wasm.transactionrequest_scriptArg(this.__wbg_ptr);
    return ret === 0 ? void 0 : Word.__wrap(ret);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {TransactionRequest}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionrequest_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _TransactionRequest.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @returns {NoteDetailsAndTag[]}
   */
  expectedFutureNotes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionrequest_expectedFutureNotes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      var r3 = getDataViewMemory0().getInt32(retptr + 4 * 3, true);
      if (r3) {
        throw takeObject(r2);
      }
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Note[]}
   */
  expectedOutputOwnNotes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionrequest_expectedOutputOwnNotes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      var r3 = getDataViewMemory0().getInt32(retptr + 4 * 3, true);
      if (r3) {
        throw takeObject(r2);
      }
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Word | undefined}
   */
  authArg() {
    const ret = wasm.transactionrequest_authArg(this.__wbg_ptr);
    return ret === 0 ? void 0 : Word.__wrap(ret);
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.transactionrequest_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) TransactionRequest.prototype[Symbol.dispose] = TransactionRequest.prototype.free;
var TransactionRequestBuilderFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionrequestbuilder_free(ptr >>> 0, 1));
var TransactionRequestBuilder = class _TransactionRequestBuilder {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionRequestBuilder.prototype);
    obj.__wbg_ptr = ptr;
    TransactionRequestBuilderFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionRequestBuilderFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionrequestbuilder_free(ptr, 0);
  }
  /**
   * @param {Word} auth_arg
   * @returns {TransactionRequestBuilder}
   */
  withAuthArg(auth_arg) {
    const ptr = this.__destroy_into_raw();
    _assertClass(auth_arg, Word);
    const ret = wasm.transactionrequestbuilder_withAuthArg(ptr, auth_arg.__wbg_ptr);
    return _TransactionRequestBuilder.__wrap(ret);
  }
  /**
   * @param {Word} script_arg
   * @returns {TransactionRequestBuilder}
   */
  withScriptArg(script_arg) {
    const ptr = this.__destroy_into_raw();
    _assertClass(script_arg, Word);
    const ret = wasm.transactionrequestbuilder_withScriptArg(ptr, script_arg.__wbg_ptr);
    return _TransactionRequestBuilder.__wrap(ret);
  }
  /**
   * @param {AdviceMap} advice_map
   * @returns {TransactionRequestBuilder}
   */
  extendAdviceMap(advice_map) {
    const ptr = this.__destroy_into_raw();
    _assertClass(advice_map, AdviceMap);
    const ret = wasm.transactionrequestbuilder_extendAdviceMap(ptr, advice_map.__wbg_ptr);
    return _TransactionRequestBuilder.__wrap(ret);
  }
  /**
   * @param {TransactionScript} script
   * @returns {TransactionRequestBuilder}
   */
  withCustomScript(script) {
    const ptr = this.__destroy_into_raw();
    _assertClass(script, TransactionScript);
    const ret = wasm.transactionrequestbuilder_withCustomScript(ptr, script.__wbg_ptr);
    return _TransactionRequestBuilder.__wrap(ret);
  }
  /**
   * @param {ForeignAccountArray} foreign_accounts
   * @returns {TransactionRequestBuilder}
   */
  withForeignAccounts(foreign_accounts) {
    const ptr = this.__destroy_into_raw();
    _assertClass(foreign_accounts, ForeignAccountArray);
    const ret = wasm.transactionrequestbuilder_withForeignAccounts(ptr, foreign_accounts.__wbg_ptr);
    return _TransactionRequestBuilder.__wrap(ret);
  }
  /**
   * @param {OutputNoteArray} notes
   * @returns {TransactionRequestBuilder}
   */
  withOwnOutputNotes(notes) {
    const ptr = this.__destroy_into_raw();
    _assertClass(notes, OutputNoteArray);
    const ret = wasm.transactionrequestbuilder_withOwnOutputNotes(ptr, notes.__wbg_ptr);
    return _TransactionRequestBuilder.__wrap(ret);
  }
  /**
   * @param {NoteDetailsAndTagArray} note_details_and_tag
   * @returns {TransactionRequestBuilder}
   */
  withExpectedFutureNotes(note_details_and_tag) {
    const ptr = this.__destroy_into_raw();
    _assertClass(note_details_and_tag, NoteDetailsAndTagArray);
    const ret = wasm.transactionrequestbuilder_withExpectedFutureNotes(ptr, note_details_and_tag.__wbg_ptr);
    return _TransactionRequestBuilder.__wrap(ret);
  }
  /**
   * @param {NoteRecipientArray} recipients
   * @returns {TransactionRequestBuilder}
   */
  withExpectedOutputRecipients(recipients) {
    const ptr = this.__destroy_into_raw();
    _assertClass(recipients, NoteRecipientArray);
    const ret = wasm.transactionrequestbuilder_withExpectedOutputRecipients(ptr, recipients.__wbg_ptr);
    return _TransactionRequestBuilder.__wrap(ret);
  }
  /**
   * @param {NoteIdAndArgsArray} notes
   * @returns {TransactionRequestBuilder}
   */
  withAuthenticatedInputNotes(notes) {
    const ptr = this.__destroy_into_raw();
    _assertClass(notes, NoteIdAndArgsArray);
    const ret = wasm.transactionrequestbuilder_withAuthenticatedInputNotes(ptr, notes.__wbg_ptr);
    return _TransactionRequestBuilder.__wrap(ret);
  }
  /**
   * @param {NoteAndArgsArray} notes
   * @returns {TransactionRequestBuilder}
   */
  withUnauthenticatedInputNotes(notes) {
    const ptr = this.__destroy_into_raw();
    _assertClass(notes, NoteAndArgsArray);
    const ret = wasm.transactionrequestbuilder_withUnauthenticatedInputNotes(ptr, notes.__wbg_ptr);
    return _TransactionRequestBuilder.__wrap(ret);
  }
  constructor() {
    const ret = wasm.transactionrequestbuilder_new();
    this.__wbg_ptr = ret >>> 0;
    TransactionRequestBuilderFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {TransactionRequest}
   */
  build() {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.transactionrequestbuilder_build(ptr);
    return TransactionRequest.__wrap(ret);
  }
};
if (Symbol.dispose) TransactionRequestBuilder.prototype[Symbol.dispose] = TransactionRequestBuilder.prototype.free;
var TransactionResultFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionresult_free(ptr >>> 0, 1));
var TransactionResult = class _TransactionResult {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionResult.prototype);
    obj.__wbg_ptr = ptr;
    TransactionResultFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionResultFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionresult_free(ptr, 0);
  }
  /**
   * Deserializes a transaction result from bytes.
   * @param {Uint8Array} bytes
   * @returns {TransactionResult}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionresult_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _TransactionResult.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * Returns notes that are expected to be created as a result of follow-up executions.
   * @returns {NoteDetailsAndTag[]}
   */
  futureNotes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionresult_futureNotes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Returns the executed transaction.
   * @returns {ExecutedTransaction}
   */
  executedTransaction() {
    const ret = wasm.transactionresult_executedTransaction(this.__wbg_ptr);
    return ExecutedTransaction.__wrap(ret);
  }
  /**
   * Returns the ID of the transaction.
   * @returns {TransactionId}
   */
  id() {
    const ret = wasm.executedtransaction_id(this.__wbg_ptr);
    return TransactionId.__wrap(ret);
  }
  /**
   * Serializes the transaction result into bytes.
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.transactionresult_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) TransactionResult.prototype[Symbol.dispose] = TransactionResult.prototype.free;
var TransactionScriptFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionscript_free(ptr >>> 0, 1));
var TransactionScript = class _TransactionScript {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionScript.prototype);
    obj.__wbg_ptr = ptr;
    TransactionScriptFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionScriptFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionscript_free(ptr, 0);
  }
  /**
   * Creates a `NoteScript` from the given `Package`.
   * Throws if the package is invalid.
   * @param {Package} _package
   * @returns {TransactionScript}
   */
  static fromPackage(_package) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(_package, Package);
      wasm.transactionscript_fromPackage(retptr, _package.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _TransactionScript.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Word}
   */
  root() {
    const ret = wasm.transactionscript_root(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
};
if (Symbol.dispose) TransactionScript.prototype[Symbol.dispose] = TransactionScript.prototype.free;
var TransactionScriptInputPairFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionscriptinputpair_free(ptr >>> 0, 1));
var TransactionScriptInputPair = class _TransactionScriptInputPair {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionScriptInputPair.prototype);
    obj.__wbg_ptr = ptr;
    TransactionScriptInputPairFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _TransactionScriptInputPair)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionScriptInputPairFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionscriptinputpair_free(ptr, 0);
  }
  /**
   * @param {Word} word
   * @param {FeltArray} felts
   */
  constructor(word, felts) {
    _assertClass(word, Word);
    var ptr0 = word.__destroy_into_raw();
    _assertClass(felts, FeltArray);
    const ret = wasm.transactionscriptinputpair_new(ptr0, felts.__wbg_ptr);
    this.__wbg_ptr = ret >>> 0;
    TransactionScriptInputPairFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {Word}
   */
  word() {
    const ret = wasm.accountcode_commitment(this.__wbg_ptr);
    return Word.__wrap(ret);
  }
  /**
   * @returns {FeltArray}
   */
  felts() {
    const ret = wasm.transactionscriptinputpair_felts(this.__wbg_ptr);
    return FeltArray.__wrap(ret);
  }
};
if (Symbol.dispose) TransactionScriptInputPair.prototype[Symbol.dispose] = TransactionScriptInputPair.prototype.free;
var TransactionScriptInputPairArrayFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionscriptinputpairarray_free(ptr >>> 0, 1));
var TransactionScriptInputPairArray = class {
  toJSON() {
    return {};
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionScriptInputPairArrayFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionscriptinputpairarray_free(ptr, 0);
  }
  /**
   * @param {number} index
   * @param {TransactionScriptInputPair} elem
   */
  replaceAt(index, elem) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(elem, TransactionScriptInputPair);
      var ptr0 = elem.__destroy_into_raw();
      wasm.transactionscriptinputpairarray_replaceAt(retptr, this.__wbg_ptr, index, ptr0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Get element at index, will always return a clone to avoid aliasing issues.
   * @param {number} index
   * @returns {TransactionScriptInputPair}
   */
  get(index) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionscriptinputpairarray_get(retptr, this.__wbg_ptr, index);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return TransactionScriptInputPair.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {TransactionScriptInputPair[] | null} [elements]
   */
  constructor(elements) {
    var ptr0 = isLikeNone(elements) ? 0 : passArrayJsValueToWasm0(elements, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.transactionscriptinputpairarray_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    TransactionScriptInputPairArrayFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @param {TransactionScriptInputPair} element
   */
  push(element) {
    _assertClass(element, TransactionScriptInputPair);
    wasm.transactionscriptinputpairarray_push(this.__wbg_ptr, element.__wbg_ptr);
  }
  /**
   * @returns {number}
   */
  length() {
    const ret = wasm.outputnotesarray_length(this.__wbg_ptr);
    return ret >>> 0;
  }
};
if (Symbol.dispose) TransactionScriptInputPairArray.prototype[Symbol.dispose] = TransactionScriptInputPairArray.prototype.free;
var TransactionStatusFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionstatus_free(ptr >>> 0, 1));
var TransactionStatus = class _TransactionStatus {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionStatus.prototype);
    obj.__wbg_ptr = ptr;
    TransactionStatusFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionStatusFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionstatus_free(ptr, 0);
  }
  /**
   * @returns {boolean}
   */
  isPending() {
    const ret = wasm.transactionstatus_isPending(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {boolean}
   */
  isCommitted() {
    const ret = wasm.transactionstatus_isCommitted(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {boolean}
   */
  isDiscarded() {
    const ret = wasm.transactionstatus_isDiscarded(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {number | undefined}
   */
  getBlockNum() {
    const ret = wasm.transactionstatus_getBlockNum(this.__wbg_ptr);
    return ret === 4294967297 ? void 0 : ret;
  }
  /**
   * @returns {bigint | undefined}
   */
  getCommitTimestamp() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionstatus_getCommitTimestamp(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r2 = getDataViewMemory0().getBigInt64(retptr + 8 * 1, true);
      return r0 === 0 ? void 0 : BigInt.asUintN(64, r2);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {TransactionStatus}
   */
  static pending() {
    const ret = wasm.transactionstatus_pending();
    return _TransactionStatus.__wrap(ret);
  }
  /**
   * @param {number} block_num
   * @param {bigint} commit_timestamp
   * @returns {TransactionStatus}
   */
  static committed(block_num, commit_timestamp) {
    const ret = wasm.transactionstatus_committed(block_num, commit_timestamp);
    return _TransactionStatus.__wrap(ret);
  }
  /**
   * @param {string} cause
   * @returns {TransactionStatus}
   */
  static discarded(cause) {
    const ptr0 = passStringToWasm0(cause, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.transactionstatus_discarded(ptr0, len0);
    return _TransactionStatus.__wrap(ret);
  }
};
if (Symbol.dispose) TransactionStatus.prototype[Symbol.dispose] = TransactionStatus.prototype.free;
var TransactionStoreUpdateFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionstoreupdate_free(ptr >>> 0, 1));
var TransactionStoreUpdate = class _TransactionStoreUpdate {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionStoreUpdate.prototype);
    obj.__wbg_ptr = ptr;
    TransactionStoreUpdateFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionStoreUpdateFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionstoreupdate_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {TransactionStoreUpdate}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionstoreupdate_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _TransactionStoreUpdate.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @returns {NoteDetailsAndTag[]}
   */
  futureNotes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionstoreupdate_futureNotes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {AccountDelta}
   */
  accountDelta() {
    const ret = wasm.transactionstoreupdate_accountDelta(this.__wbg_ptr);
    return AccountDelta.__wrap(ret);
  }
  /**
   * @returns {OutputNotes}
   */
  createdNotes() {
    const ret = wasm.transactionstoreupdate_createdNotes(this.__wbg_ptr);
    return OutputNotes.__wrap(ret);
  }
  /**
   * @returns {number}
   */
  submissionHeight() {
    const ret = wasm.transactionstoreupdate_submissionHeight(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {ExecutedTransaction}
   */
  executedTransaction() {
    const ret = wasm.transactionstoreupdate_executedTransaction(this.__wbg_ptr);
    return ExecutedTransaction.__wrap(ret);
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.transactionstoreupdate_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) TransactionStoreUpdate.prototype[Symbol.dispose] = TransactionStoreUpdate.prototype.free;
var TransactionSummaryFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_transactionsummary_free(ptr >>> 0, 1));
var TransactionSummary = class _TransactionSummary {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_TransactionSummary.prototype);
    obj.__wbg_ptr = ptr;
    TransactionSummaryFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    TransactionSummaryFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_transactionsummary_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {TransactionSummary}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionsummary_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _TransactionSummary.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @returns {InputNotes}
   */
  inputNotes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionsummary_inputNotes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return InputNotes.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {OutputNotes}
   */
  outputNotes() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionsummary_outputNotes(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return OutputNotes.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {AccountDelta}
   */
  accountDelta() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionsummary_accountDelta(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return AccountDelta.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Word}
   */
  salt() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionsummary_salt(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return Word.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.transactionsummary_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) TransactionSummary.prototype[Symbol.dispose] = TransactionSummary.prototype.free;
var WebClientFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_webclient_free(ptr >>> 0, 1));
var WebClient = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    WebClientFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_webclient_free(ptr, 0);
  }
  /**
   * @param {AccountStorageMode} storage_mode
   * @param {boolean} non_fungible
   * @param {string} token_symbol
   * @param {number} decimals
   * @param {bigint} max_supply
   * @param {number} auth_scheme_id
   * @returns {Promise<Account>}
   */
  newFaucet(storage_mode, non_fungible, token_symbol, decimals, max_supply, auth_scheme_id) {
    _assertClass(storage_mode, AccountStorageMode);
    const ptr0 = passStringToWasm0(token_symbol, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_newFaucet(this.__wbg_ptr, storage_mode.__wbg_ptr, non_fungible, ptr0, len0, decimals, max_supply, auth_scheme_id);
    return takeObject(ret);
  }
  /**
   * @param {AccountStorageMode} storage_mode
   * @param {boolean} mutable
   * @param {number} auth_scheme_id
   * @param {Uint8Array | null} [init_seed]
   * @returns {Promise<Account>}
   */
  newWallet(storage_mode, mutable, auth_scheme_id, init_seed) {
    _assertClass(storage_mode, AccountStorageMode);
    var ptr0 = isLikeNone(init_seed) ? 0 : passArray8ToWasm0(init_seed, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_newWallet(this.__wbg_ptr, storage_mode.__wbg_ptr, mutable, auth_scheme_id, ptr0, len0);
    return takeObject(ret);
  }
  /**
   * @param {Account} account
   * @param {boolean} overwrite
   * @returns {Promise<void>}
   */
  newAccount(account, overwrite) {
    _assertClass(account, Account);
    const ret = wasm.webclient_newAccount(this.__wbg_ptr, account.__wbg_ptr, overwrite);
    return takeObject(ret);
  }
  /**
   * @param {SecretKey} secret_key
   * @returns {Promise<void>}
   */
  addAccountSecretKeyToWebStore(secret_key) {
    _assertClass(secret_key, SecretKey);
    const ret = wasm.webclient_addAccountSecretKeyToWebStore(this.__wbg_ptr, secret_key.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {TransactionFilter} transaction_filter
   * @returns {Promise<TransactionRecord[]>}
   */
  getTransactions(transaction_filter) {
    _assertClass(transaction_filter, TransactionFilter);
    var ptr0 = transaction_filter.__destroy_into_raw();
    const ret = wasm.webclient_getTransactions(this.__wbg_ptr, ptr0);
    return takeObject(ret);
  }
  /**
   * Send a private note via the note transport layer
   * @param {Note} note
   * @param {Address} address
   * @returns {Promise<void>}
   */
  sendPrivateNote(note, address) {
    _assertClass(note, Note);
    var ptr0 = note.__destroy_into_raw();
    _assertClass(address, Address);
    var ptr1 = address.__destroy_into_raw();
    const ret = wasm.webclient_sendPrivateNote(this.__wbg_ptr, ptr0, ptr1);
    return takeObject(ret);
  }
  /**
   * Fetch private notes from the note transport layer
   *
   * Uses an internal pagination mechanism to avoid fetching duplicate notes.
   * @returns {Promise<void>}
   */
  fetchPrivateNotes() {
    const ret = wasm.webclient_fetchPrivateNotes(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * Fetch all private notes from the note transport layer
   *
   * Fetches all notes stored in the transport layer, with no pagination.
   * Prefer using [`WebClient::fetch_private_notes`] for a more efficient, on-going,
   * fetching mechanism.
   * @returns {Promise<void>}
   */
  fetchAllPrivateNotes() {
    const ret = wasm.webclient_fetchAllPrivateNotes(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {TransactionResult} transaction_result
   * @param {number} submission_height
   * @returns {Promise<TransactionStoreUpdate>}
   */
  applyTransaction(transaction_result, submission_height) {
    _assertClass(transaction_result, TransactionResult);
    const ret = wasm.webclient_applyTransaction(this.__wbg_ptr, transaction_result.__wbg_ptr, submission_height);
    return takeObject(ret);
  }
  /**
   * Generates a transaction proof using either the provided prover or the client's default
   * prover if none is supplied.
   * @param {TransactionResult} transaction_result
   * @param {TransactionProver | null} [prover]
   * @returns {Promise<ProvenTransaction>}
   */
  proveTransaction(transaction_result, prover) {
    _assertClass(transaction_result, TransactionResult);
    let ptr0 = 0;
    if (!isLikeNone(prover)) {
      _assertClass(prover, TransactionProver);
      ptr0 = prover.__destroy_into_raw();
    }
    const ret = wasm.webclient_proveTransaction(this.__wbg_ptr, transaction_result.__wbg_ptr, ptr0);
    return takeObject(ret);
  }
  /**
   * Executes a transaction specified by the request against the specified account but does not
   * submit it to the network nor update the local database. The returned [`TransactionResult`]
   * retains the execution artifacts needed to continue with the transaction lifecycle.
   *
   * If the transaction utilizes foreign account data, there is a chance that the client doesn't
   * have the required block header in the local database. In these scenarios, a sync to
   * the chain tip is performed, and the required block header is retrieved.
   * @param {AccountId} account_id
   * @param {TransactionRequest} transaction_request
   * @returns {Promise<TransactionResult>}
   */
  executeTransaction(account_id, transaction_request) {
    _assertClass(account_id, AccountId);
    _assertClass(transaction_request, TransactionRequest);
    const ret = wasm.webclient_executeTransaction(this.__wbg_ptr, account_id.__wbg_ptr, transaction_request.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * Executes a transaction specified by the request against the specified account,
   * proves it, submits it to the network, and updates the local database.
   *
   * If the transaction utilizes foreign account data, there is a chance that the client doesn't
   * have the required block header in the local database. In these scenarios, a sync to
   * the chain tip is performed, and the required block header is retrieved.
   * @param {AccountId} account_id
   * @param {TransactionRequest} transaction_request
   * @returns {Promise<TransactionId>}
   */
  submitNewTransaction(account_id, transaction_request) {
    _assertClass(account_id, AccountId);
    _assertClass(transaction_request, TransactionRequest);
    const ret = wasm.webclient_submitNewTransaction(this.__wbg_ptr, account_id.__wbg_ptr, transaction_request.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {ProvenTransaction} proven_transaction
   * @param {TransactionResult} transaction_result
   * @returns {Promise<number>}
   */
  submitProvenTransaction(proven_transaction, transaction_result) {
    _assertClass(proven_transaction, ProvenTransaction);
    _assertClass(transaction_result, TransactionResult);
    const ret = wasm.webclient_submitProvenTransaction(this.__wbg_ptr, proven_transaction.__wbg_ptr, transaction_result.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {AccountId} target_account_id
   * @param {AccountId} faucet_id
   * @param {NoteType} note_type
   * @param {bigint} amount
   * @returns {TransactionRequest}
   */
  newMintTransactionRequest(target_account_id, faucet_id, note_type, amount) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(target_account_id, AccountId);
      _assertClass(faucet_id, AccountId);
      wasm.webclient_newMintTransactionRequest(retptr, this.__wbg_ptr, target_account_id.__wbg_ptr, faucet_id.__wbg_ptr, note_type, amount);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return TransactionRequest.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {AccountId} sender_account_id
   * @param {AccountId} target_account_id
   * @param {AccountId} faucet_id
   * @param {NoteType} note_type
   * @param {bigint} amount
   * @param {number | null} [recall_height]
   * @param {number | null} [timelock_height]
   * @returns {TransactionRequest}
   */
  newSendTransactionRequest(sender_account_id, target_account_id, faucet_id, note_type, amount, recall_height, timelock_height) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(sender_account_id, AccountId);
      _assertClass(target_account_id, AccountId);
      _assertClass(faucet_id, AccountId);
      wasm.webclient_newSendTransactionRequest(retptr, this.__wbg_ptr, sender_account_id.__wbg_ptr, target_account_id.__wbg_ptr, faucet_id.__wbg_ptr, note_type, amount, isLikeNone(recall_height) ? 4294967297 : recall_height >>> 0, isLikeNone(timelock_height) ? 4294967297 : timelock_height >>> 0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return TransactionRequest.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {AccountId} sender_account_id
   * @param {AccountId} offered_asset_faucet_id
   * @param {bigint} offered_asset_amount
   * @param {AccountId} requested_asset_faucet_id
   * @param {bigint} requested_asset_amount
   * @param {NoteType} note_type
   * @param {NoteType} payback_note_type
   * @returns {TransactionRequest}
   */
  newSwapTransactionRequest(sender_account_id, offered_asset_faucet_id, offered_asset_amount, requested_asset_faucet_id, requested_asset_amount, note_type, payback_note_type) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(sender_account_id, AccountId);
      _assertClass(offered_asset_faucet_id, AccountId);
      _assertClass(requested_asset_faucet_id, AccountId);
      wasm.webclient_newSwapTransactionRequest(retptr, this.__wbg_ptr, sender_account_id.__wbg_ptr, offered_asset_faucet_id.__wbg_ptr, offered_asset_amount, requested_asset_faucet_id.__wbg_ptr, requested_asset_amount, note_type, payback_note_type);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return TransactionRequest.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {string[]} list_of_note_ids
   * @returns {TransactionRequest}
   */
  newConsumeTransactionRequest(list_of_note_ids) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passArrayJsValueToWasm0(list_of_note_ids, wasm.__wbindgen_export);
      const len0 = WASM_VECTOR_LEN;
      wasm.webclient_newConsumeTransactionRequest(retptr, this.__wbg_ptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return TransactionRequest.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  proveBlock() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.webclient_proveBlock(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {boolean}
   */
  usesMockChain() {
    const ret = wasm.webclient_usesMockChain(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * Creates a new client with a mock RPC API. Useful for testing purposes and proof-of-concept
   * applications as it uses a mock chain that simulates the behavior of a real node.
   * @param {Uint8Array | null} [seed]
   * @param {Uint8Array | null} [serialized_mock_chain]
   * @param {Uint8Array | null} [serialized_mock_note_transport_node]
   * @returns {Promise<any>}
   */
  createMockClient(seed, serialized_mock_chain, serialized_mock_note_transport_node) {
    var ptr0 = isLikeNone(seed) ? 0 : passArray8ToWasm0(seed, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(serialized_mock_chain) ? 0 : passArray8ToWasm0(serialized_mock_chain, wasm.__wbindgen_export);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = isLikeNone(serialized_mock_note_transport_node) ? 0 : passArray8ToWasm0(serialized_mock_note_transport_node, wasm.__wbindgen_export);
    var len2 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_createMockClient(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
    return takeObject(ret);
  }
  /**
   * Returns the inner serialized mock chain if it exists.
   * @returns {Uint8Array}
   */
  serializeMockChain() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.webclient_serializeMockChain(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      var r3 = getDataViewMemory0().getInt32(retptr + 4 * 3, true);
      if (r3) {
        throw takeObject(r2);
      }
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Returns the inner serialized mock note transport node if it exists.
   * @returns {Uint8Array}
   */
  serializeMockNoteTransportNode() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.webclient_serializeMockNoteTransportNode(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      var r3 = getDataViewMemory0().getInt32(retptr + 4 * 3, true);
      if (r3) {
        throw takeObject(r2);
      }
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 1, 1);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Promise<SyncSummary>}
   */
  syncState() {
    const ret = wasm.webclient_syncState(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {NoteType} note_type
   * @param {AccountId} offered_asset_faucet_id
   * @param {bigint} offered_asset_amount
   * @param {AccountId} requested_asset_faucet_id
   * @param {bigint} requested_asset_amount
   * @returns {NoteTag}
   */
  static buildSwapTag(note_type, offered_asset_faucet_id, offered_asset_amount, requested_asset_faucet_id, requested_asset_amount) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(offered_asset_faucet_id, AccountId);
      _assertClass(requested_asset_faucet_id, AccountId);
      wasm.webclient_buildSwapTag(retptr, note_type, offered_asset_faucet_id.__wbg_ptr, offered_asset_amount, requested_asset_faucet_id.__wbg_ptr, requested_asset_amount);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return NoteTag.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Promise<number>}
   */
  getSyncHeight() {
    const ret = wasm.webclient_getSyncHeight(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {string} tag
   * @returns {Promise<void>}
   */
  removeTag(tag) {
    const ptr0 = passStringToWasm0(tag, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_removeTag(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
   * @param {string} tag
   * @returns {Promise<void>}
   */
  addTag(tag) {
    const ptr0 = passStringToWasm0(tag, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_addTag(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
   * @returns {Promise<any>}
   */
  listTags() {
    const ret = wasm.webclient_listTags(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {string} note_id
   * @returns {Promise<InputNoteRecord | undefined>}
   */
  getInputNote(note_id) {
    const ptr0 = passStringToWasm0(note_id, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_getInputNote(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
   * @param {NoteFilter} filter
   * @returns {Promise<InputNoteRecord[]>}
   */
  getInputNotes(filter) {
    _assertClass(filter, NoteFilter);
    var ptr0 = filter.__destroy_into_raw();
    const ret = wasm.webclient_getInputNotes(this.__wbg_ptr, ptr0);
    return takeObject(ret);
  }
  /**
   * @param {string} note_id
   * @returns {Promise<any>}
   */
  getOutputNote(note_id) {
    const ptr0 = passStringToWasm0(note_id, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_getOutputNote(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
   * @param {NoteFilter} filter
   * @returns {Promise<any>}
   */
  getOutputNotes(filter) {
    _assertClass(filter, NoteFilter);
    var ptr0 = filter.__destroy_into_raw();
    const ret = wasm.webclient_getOutputNotes(this.__wbg_ptr, ptr0);
    return takeObject(ret);
  }
  /**
   * @param {AccountId | null} [account_id]
   * @returns {Promise<ConsumableNoteRecord[]>}
   */
  getConsumableNotes(account_id) {
    let ptr0 = 0;
    if (!isLikeNone(account_id)) {
      _assertClass(account_id, AccountId);
      ptr0 = account_id.__destroy_into_raw();
    }
    const ret = wasm.webclient_getConsumableNotes(this.__wbg_ptr, ptr0);
    return takeObject(ret);
  }
  /**
   * Retrieves the entire underlying web store and returns it as a `JsValue`
   *
   * Meant to be used in conjunction with the `force_import_store` method
   * @returns {Promise<any>}
   */
  exportStore() {
    const ret = wasm.webclient_exportStore(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {string} note_id
   * @param {string} export_type
   * @returns {Promise<NoteFile>}
   */
  exportNoteFile(note_id, export_type) {
    const ptr0 = passStringToWasm0(note_id, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(export_type, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_exportNoteFile(this.__wbg_ptr, ptr0, len0, ptr1, len1);
    return takeObject(ret);
  }
  /**
   * @param {AccountId} account_id
   * @returns {Promise<AccountFile>}
   */
  exportAccountFile(account_id) {
    _assertClass(account_id, AccountId);
    var ptr0 = account_id.__destroy_into_raw();
    const ret = wasm.webclient_exportAccountFile(this.__wbg_ptr, ptr0);
    return takeObject(ret);
  }
  /**
   * @param {NoteFile} note_file
   * @returns {Promise<NoteId>}
   */
  importNoteFile(note_file) {
    _assertClass(note_file, NoteFile);
    var ptr0 = note_file.__destroy_into_raw();
    const ret = wasm.webclient_importNoteFile(this.__wbg_ptr, ptr0);
    return takeObject(ret);
  }
  /**
   * @param {any} store_dump
   * @returns {Promise<any>}
   */
  forceImportStore(store_dump) {
    const ret = wasm.webclient_forceImportStore(this.__wbg_ptr, addHeapObject(store_dump));
    return takeObject(ret);
  }
  /**
   * @param {AccountFile} account_file
   * @returns {Promise<any>}
   */
  importAccountFile(account_file) {
    _assertClass(account_file, AccountFile);
    var ptr0 = account_file.__destroy_into_raw();
    const ret = wasm.webclient_importAccountFile(this.__wbg_ptr, ptr0);
    return takeObject(ret);
  }
  /**
   * @param {AccountId} account_id
   * @returns {Promise<any>}
   */
  importAccountById(account_id) {
    _assertClass(account_id, AccountId);
    const ret = wasm.webclient_importAccountById(this.__wbg_ptr, account_id.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {Uint8Array} init_seed
   * @param {boolean} mutable
   * @param {number} auth_scheme_id
   * @returns {Promise<Account>}
   */
  importPublicAccountFromSeed(init_seed, mutable, auth_scheme_id) {
    const ptr0 = passArray8ToWasm0(init_seed, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_importPublicAccountFromSeed(this.__wbg_ptr, ptr0, len0, mutable, auth_scheme_id);
    return takeObject(ret);
  }
  /**
   * @param {AccountId} account_id
   * @returns {Promise<Account | undefined>}
   */
  getAccount(account_id) {
    _assertClass(account_id, AccountId);
    const ret = wasm.webclient_getAccount(this.__wbg_ptr, account_id.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @returns {Promise<AccountHeader[]>}
   */
  getAccounts() {
    const ret = wasm.webclient_getAccounts(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {AccountId} account_id
   * @param {Address} address
   * @returns {Promise<void>}
   */
  insertAccountAddress(account_id, address) {
    _assertClass(account_id, AccountId);
    _assertClass(address, Address);
    const ret = wasm.webclient_insertAccountAddress(this.__wbg_ptr, account_id.__wbg_ptr, address.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {AccountId} account_id
   * @param {Address} address
   * @returns {Promise<void>}
   */
  removeAccountAddress(account_id, address) {
    _assertClass(account_id, AccountId);
    _assertClass(address, Address);
    const ret = wasm.webclient_removeAccountAddress(this.__wbg_ptr, account_id.__wbg_ptr, address.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * @param {Word} pub_key
   * @returns {Promise<AuthSecretKey>}
   */
  getAccountAuthByPubKey(pub_key) {
    _assertClass(pub_key, Word);
    const ret = wasm.webclient_getAccountAuthByPubKey(this.__wbg_ptr, pub_key.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * Retrieves the setting value for `key`, or `None` if it hasn’t been set.
   * @param {string} key
   * @returns {Promise<any | undefined>}
   */
  getSetting(key) {
    const ptr0 = passStringToWasm0(key, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_getSetting(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
   * Sets a setting key-value in the store. It can then be retrieved using `get_setting`.
   * @param {string} key
   * @param {any} value
   * @returns {Promise<void>}
   */
  setSetting(key, value) {
    const ptr0 = passStringToWasm0(key, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_setSetting(this.__wbg_ptr, ptr0, len0, addHeapObject(value));
    return takeObject(ret);
  }
  /**
   * Deletes a setting key-value from the store.
   * @param {string} key
   * @returns {Promise<void>}
   */
  removeSetting(key) {
    const ptr0 = passStringToWasm0(key, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_removeSetting(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
   * Returns all the existing setting keys from the store.
   * @returns {Promise<string[]>}
   */
  listSettingKeys() {
    const ret = wasm.webclient_listSettingKeys(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
   * Creates a new client with the given node URL and optional seed.
   * If `node_url` is `None`, it defaults to the testnet endpoint.
   * @param {string | null} [node_url]
   * @param {string | null} [node_note_transport_url]
   * @param {Uint8Array | null} [seed]
   * @returns {Promise<any>}
   */
  createClient(node_url, node_note_transport_url, seed) {
    var ptr0 = isLikeNone(node_url) ? 0 : passStringToWasm0(node_url, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(node_note_transport_url) ? 0 : passStringToWasm0(node_note_transport_url, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = isLikeNone(seed) ? 0 : passArray8ToWasm0(seed, wasm.__wbindgen_export);
    var len2 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_createClient(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
    return takeObject(ret);
  }
  /**
   * @returns {ScriptBuilder}
   */
  createScriptBuilder() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.webclient_createScriptBuilder(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return ScriptBuilder.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Creates a new client with the given node URL, optional seed, and external keystore
   * callbacks. If `node_url` is `None`, it defaults to the testnet endpoint.
   * @param {string | null} [node_url]
   * @param {string | null} [node_note_transport_url]
   * @param {Uint8Array | null} [seed]
   * @param {Function | null} [get_key_cb]
   * @param {Function | null} [insert_key_cb]
   * @param {Function | null} [sign_cb]
   * @returns {Promise<any>}
   */
  createClientWithExternalKeystore(node_url, node_note_transport_url, seed, get_key_cb, insert_key_cb, sign_cb) {
    var ptr0 = isLikeNone(node_url) ? 0 : passStringToWasm0(node_url, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(node_note_transport_url) ? 0 : passStringToWasm0(node_note_transport_url, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = isLikeNone(seed) ? 0 : passArray8ToWasm0(seed, wasm.__wbindgen_export);
    var len2 = WASM_VECTOR_LEN;
    const ret = wasm.webclient_createClientWithExternalKeystore(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2, isLikeNone(get_key_cb) ? 0 : addHeapObject(get_key_cb), isLikeNone(insert_key_cb) ? 0 : addHeapObject(insert_key_cb), isLikeNone(sign_cb) ? 0 : addHeapObject(sign_cb));
    return takeObject(ret);
  }
  constructor() {
    const ret = wasm.webclient_new();
    this.__wbg_ptr = ret >>> 0;
    WebClientFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
};
if (Symbol.dispose) WebClient.prototype[Symbol.dispose] = WebClient.prototype.free;
var WordFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_word_free(ptr >>> 0, 1));
var Word = class _Word {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Word.prototype);
    obj.__wbg_ptr = ptr;
    WordFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof _Word)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    WordFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_word_free(ptr, 0);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {Word}
   */
  static deserialize(bytes) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.word_deserialize(retptr, addBorrowedObject(bytes));
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _Word.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
   * @param {Felt[]} felt_vec
   * @returns {Word}
   */
  static newFromFelts(felt_vec) {
    const ptr0 = passArrayJsValueToWasm0(felt_vec, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.word_newFromFelts(ptr0, len0);
    return _Word.__wrap(ret);
  }
  /**
   * @param {BigUint64Array} u64_vec
   */
  constructor(u64_vec) {
    const ptr0 = passArray64ToWasm0(u64_vec, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.word_new(ptr0, len0);
    this.__wbg_ptr = ret >>> 0;
    WordFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {string}
   */
  toHex() {
    let deferred1_0;
    let deferred1_1;
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionid_toHex(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      deferred1_0 = r0;
      deferred1_1 = r1;
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {BigUint64Array}
   */
  toU64s() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.word_toU64s(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayU64FromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 8, 8);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * Creates a Word from a hex string.
   * Fails if the provided string is not a valid hex representation of a Word.
   * @param {string} hex
   * @returns {Word}
   */
  static fromHex(hex) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(hex, wasm.__wbindgen_export, wasm.__wbindgen_export2);
      const len0 = WASM_VECTOR_LEN;
      wasm.word_fromHex(retptr, ptr0, len0);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
      if (r2) {
        throw takeObject(r1);
      }
      return _Word.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Felt[]}
   */
  toFelts() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.transactionid_asElements(retptr, this.__wbg_ptr);
      var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
      var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
      var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
      wasm.__wbindgen_export3(r0, r1 * 4, 4);
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @returns {Uint8Array}
   */
  serialize() {
    const ret = wasm.word_serialize(this.__wbg_ptr);
    return takeObject(ret);
  }
};
if (Symbol.dispose) Word.prototype[Symbol.dispose] = Word.prototype.free;
var EXPECTED_RESPONSE_TYPES = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function __wbg_load(module2, imports) {
  if (typeof Response === "function" && module2 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module2, imports);
      } catch (e) {
        const validResponse = module2.ok && EXPECTED_RESPONSE_TYPES.has(module2.type);
        if (validResponse && module2.headers.get("Content-Type") !== "application/wasm") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module2.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module2, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module: module2 };
    } else {
      return instance;
    }
  }
}
function __wbg_get_imports() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbg_Error_e83987f665cf5504 = function(arg0, arg1) {
    const ret = Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_Number_bb48ca12f395cd08 = function(arg0) {
    const ret = Number(getObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(arg0, arg1) {
    const ret = String(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbg___wbindgen_bigint_get_as_i64_f3ebc5a755000afd = function(arg0, arg1) {
    const v = getObject(arg1);
    const ret = typeof v === "bigint" ? v : void 0;
    getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
  };
  imports.wbg.__wbg___wbindgen_boolean_get_6d5a1ee65bab5f68 = function(arg0) {
    const v = getObject(arg0);
    const ret = typeof v === "boolean" ? v : void 0;
    return isLikeNone(ret) ? 16777215 : ret ? 1 : 0;
  };
  imports.wbg.__wbg___wbindgen_debug_string_df47ffb5e35e6763 = function(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbg___wbindgen_in_bb933bd9e1b3bc0f = function(arg0, arg1) {
    const ret = getObject(arg0) in getObject(arg1);
    return ret;
  };
  imports.wbg.__wbg___wbindgen_is_bigint_cb320707dcd35f0b = function(arg0) {
    const ret = typeof getObject(arg0) === "bigint";
    return ret;
  };
  imports.wbg.__wbg___wbindgen_is_function_ee8a6c5833c90377 = function(arg0) {
    const ret = typeof getObject(arg0) === "function";
    return ret;
  };
  imports.wbg.__wbg___wbindgen_is_null_5e69f72e906cc57c = function(arg0) {
    const ret = getObject(arg0) === null;
    return ret;
  };
  imports.wbg.__wbg___wbindgen_is_object_c818261d21f283a4 = function(arg0) {
    const val = getObject(arg0);
    const ret = typeof val === "object" && val !== null;
    return ret;
  };
  imports.wbg.__wbg___wbindgen_is_undefined_2d472862bd29a478 = function(arg0) {
    const ret = getObject(arg0) === void 0;
    return ret;
  };
  imports.wbg.__wbg___wbindgen_jsval_eq_6b13ab83478b1c50 = function(arg0, arg1) {
    const ret = getObject(arg0) === getObject(arg1);
    return ret;
  };
  imports.wbg.__wbg___wbindgen_jsval_loose_eq_b664b38a2f582147 = function(arg0, arg1) {
    const ret = getObject(arg0) == getObject(arg1);
    return ret;
  };
  imports.wbg.__wbg___wbindgen_number_get_a20bf9b85341449d = function(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof obj === "number" ? obj : void 0;
    getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
  };
  imports.wbg.__wbg___wbindgen_string_get_e4f06c90489ad01b = function(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof obj === "string" ? obj : void 0;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbg___wbindgen_throw_b855445ff6a94295 = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbg__wbg_cb_unref_2454a539ea5790d9 = function(arg0) {
    getObject(arg0)._wbg_cb_unref();
  };
  imports.wbg.__wbg_abort_28ad55c5825b004d = function(arg0, arg1) {
    getObject(arg0).abort(getObject(arg1));
  };
  imports.wbg.__wbg_abort_e7eb059f72f9ed0c = function(arg0) {
    getObject(arg0).abort();
  };
  imports.wbg.__wbg_account_new = function(arg0) {
    const ret = Account.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_account_unwrap = function(arg0) {
    const ret = Account.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_accountfile_new = function(arg0) {
    const ret = AccountFile.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_accountheader_new = function(arg0) {
    const ret = AccountHeader.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_accountid_new = function(arg0) {
    const ret = AccountId.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_accountid_unwrap = function(arg0) {
    const ret = AccountId.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_addNoteTag_62738b3d8709ab49 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    var v0 = getArrayU8FromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 1, 1);
    let v1;
    if (arg2 !== 0) {
      v1 = getStringFromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
    }
    let v2;
    if (arg4 !== 0) {
      v2 = getStringFromWasm0(arg4, arg5).slice();
      wasm.__wbindgen_export3(arg4, arg5 * 1, 1);
    }
    const ret = addNoteTag(v0, v1, v2);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_append_b577eb3a177bc0fa = function() {
    return handleError(function(arg0, arg1, arg2, arg3, arg4) {
      getObject(arg0).append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments);
  };
  imports.wbg.__wbg_applyStateSync_8cbc6333db2c4843 = function(arg0) {
    const ret = applyStateSync(JsStateSyncUpdate.__wrap(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_authsecretkey_new = function(arg0) {
    const ret = AuthSecretKey.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_body_587542b2fd8e06c0 = function(arg0) {
    const ret = getObject(arg0).body;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  };
  imports.wbg.__wbg_buffer_ccc4520b36d3ccf4 = function(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_byobRequest_2344e6975f27456e = function(arg0) {
    const ret = getObject(arg0).byobRequest;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  };
  imports.wbg.__wbg_byteLength_bcd42e4025299788 = function(arg0) {
    const ret = getObject(arg0).byteLength;
    return ret;
  };
  imports.wbg.__wbg_byteOffset_ca3a6cf7944b364b = function(arg0) {
    const ret = getObject(arg0).byteOffset;
    return ret;
  };
  imports.wbg.__wbg_call_525440f72fbfc0ea = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_call_e45d2cf9fc925fcf = function() {
    return handleError(function(arg0, arg1, arg2, arg3) {
      const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_call_e762c39fa8ea36bf = function() {
    return handleError(function(arg0, arg1) {
      const ret = getObject(arg0).call(getObject(arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_cancel_48ab6f9dc366e369 = function(arg0) {
    const ret = getObject(arg0).cancel();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_catch_943836faa5d29bfb = function(arg0, arg1) {
    const ret = getObject(arg0).catch(getObject(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_clearTimeout_2e2c4939388cdfbb = function(arg0) {
    const ret = clearTimeout(takeObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_close_5a6caed3231b68cd = function() {
    return handleError(function(arg0) {
      getObject(arg0).close();
    }, arguments);
  };
  imports.wbg.__wbg_close_6956df845478561a = function() {
    return handleError(function(arg0) {
      getObject(arg0).close();
    }, arguments);
  };
  imports.wbg.__wbg_consumablenoterecord_new = function(arg0) {
    const ret = ConsumableNoteRecord.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_done_2042aa2670fb1db1 = function(arg0) {
    const ret = getObject(arg0).done;
    return ret;
  };
  imports.wbg.__wbg_enqueue_7b18a650aec77898 = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).enqueue(getObject(arg1));
    }, arguments);
  };
  imports.wbg.__wbg_error_7534b8e9a36f1ab4 = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      console.error(getStringFromWasm0(arg0, arg1));
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_exportStore_cf480ce44861b257 = function() {
    const ret = exportStore();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_felt_new = function(arg0) {
    const ret = Felt.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_felt_unwrap = function(arg0) {
    const ret = Felt.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_fetch_53eef7df7b439a49 = function(arg0, arg1) {
    const ret = fetch(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_fetch_8725865ff47e7fcc = function(arg0, arg1, arg2) {
    const ret = getObject(arg0).fetch(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_fetchednote_new = function(arg0) {
    const ret = FetchedNote.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_forceImportStore_eb28613940d428b2 = function(arg0) {
    const ret = forceImportStore(takeObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_foreignaccount_unwrap = function(arg0) {
    const ret = ForeignAccount.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_fungibleasset_new = function(arg0) {
    const ret = FungibleAsset.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_fungibleasset_unwrap = function(arg0) {
    const ret = FungibleAsset.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_fungibleassetdeltaitem_new = function(arg0) {
    const ret = FungibleAssetDeltaItem.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getAccountAddresses_138a0bd0527303ec = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = getAccountAddresses(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_getAccountAuthByPubKey_7d0c695b4e3edc50 = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = getAccountAuthByPubKey(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_getAccountCode_a5a8d3c4ef9adec0 = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = getAccountCode(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_getAccountHeaderByCommitment_3f7c192c9c84e28c = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = getAccountHeaderByCommitment(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_getAccountHeader_0c21ea5f95bc127e = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = getAccountHeader(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_getAccountIds_f098d4ace1898dbb = function() {
    const ret = getAccountIds();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getAccountStorageMaps_d4cd7e409c96a8f5 = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = getAccountStorageMaps(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getAccountStorage_b21b1897931e81e0 = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = getAccountStorage(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_getAccountVaultAssets_361a5ead3e11b159 = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = getAccountVaultAssets(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_getAllAccountHeaders_d084838f25065a36 = function() {
    const ret = getAllAccountHeaders();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getBlockHeaders_a6cfcbeb4657170c = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = getBlockHeaders(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getForeignAccountCode_63832c6627ea6b63 = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = getForeignAccountCode(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getInputNotesFromIds_b7445730d107645c = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = getInputNotesFromIds(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getInputNotesFromNullifiers_4a590439f0ccd3ea = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = getInputNotesFromNullifiers(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getInputNotes_b88c2880fdd97986 = function(arg0, arg1) {
    var v0 = getArrayU8FromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 1, 1);
    const ret = getInputNotes(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getNoteScript_90e4c96239a2a12e = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = getNoteScript(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_getNoteTags_77aeb719ab80b13f = function() {
    const ret = getNoteTags();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getOutputNotesFromIds_8db565b21e7abdf8 = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = getOutputNotesFromIds(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getOutputNotesFromNullifiers_cffe12e3896a5746 = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = getOutputNotesFromNullifiers(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getOutputNotes_f3796481b4f65268 = function(arg0, arg1) {
    var v0 = getArrayU8FromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 1, 1);
    const ret = getOutputNotes(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getPartialBlockchainNodesAll_f2949dee2f271236 = function() {
    const ret = getPartialBlockchainNodesAll();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getPartialBlockchainNodes_13544f9f776eaf2b = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = getPartialBlockchainNodes(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getPartialBlockchainPeaksByBlockNum_1cbd8dee847202a4 = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = getPartialBlockchainPeaksByBlockNum(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_getRandomValues_1c61fac11405ffdc = function() {
    return handleError(function(arg0, arg1) {
      globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
    }, arguments);
  };
  imports.wbg.__wbg_getReader_48e00749fe3f6089 = function() {
    return handleError(function(arg0) {
      const ret = getObject(arg0).getReader();
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_getSetting_cedf982cc84a0a94 = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = getSetting(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_getSyncHeight_9f28b9200e6c7aca = function() {
    const ret = getSyncHeight();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getTime_14776bfb48a1bff9 = function(arg0) {
    const ret = getObject(arg0).getTime();
    return ret;
  };
  imports.wbg.__wbg_getTrackedBlockHeaders_6c54035e3f81d417 = function() {
    const ret = getTrackedBlockHeaders();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getTransactions_41b09219dcf5a7b3 = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = getTransactions(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_getUnspentInputNoteNullifiers_5742277387a97561 = function() {
    const ret = getUnspentInputNoteNullifiers();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_get_7bed016f185add81 = function(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_get_done_a0463af43a1fc764 = function(arg0) {
    const ret = getObject(arg0).done;
    return isLikeNone(ret) ? 16777215 : ret ? 1 : 0;
  };
  imports.wbg.__wbg_get_efcb449f58ec27c2 = function() {
    return handleError(function(arg0, arg1) {
      const ret = Reflect.get(getObject(arg0), getObject(arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_get_value_5ce96c9f81ce7398 = function(arg0) {
    const ret = getObject(arg0).value;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(arg0, arg1) {
    const ret = getObject(arg0)[getObject(arg1)];
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getproceduresresultitem_new = function(arg0) {
    const ret = GetProceduresResultItem.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_has_787fafc980c3ccdb = function() {
    return handleError(function(arg0, arg1) {
      const ret = Reflect.has(getObject(arg0), getObject(arg1));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_headers_b87d7eaba61c3278 = function(arg0) {
    const ret = getObject(arg0).headers;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_inputnote_new = function(arg0) {
    const ret = InputNote.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_inputnoterecord_new = function(arg0) {
    const ret = InputNoteRecord.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_insertAccountAddress_72ec8143928c7a25 = function(arg0, arg1, arg2, arg3) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      var v1 = getArrayU8FromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
      const ret = insertAccountAddress(getStringFromWasm0(arg0, arg1), v1);
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_insertAccountAuth_612507e88197a9a8 = function(arg0, arg1, arg2, arg3) {
    let deferred0_0;
    let deferred0_1;
    let deferred1_0;
    let deferred1_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      deferred1_0 = arg2;
      deferred1_1 = arg3;
      const ret = insertAccountAuth(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
    }
  };
  imports.wbg.__wbg_insertBlockHeader_22d43f8461f488d3 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      var v1 = getArrayU8FromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
      var v2 = getArrayU8FromWasm0(arg4, arg5).slice();
      wasm.__wbindgen_export3(arg4, arg5 * 1, 1);
      const ret = insertBlockHeader(getStringFromWasm0(arg0, arg1), v1, v2, arg6 !== 0);
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_insertPartialBlockchainNodes_5b53d8fd3b2f0c32 = function(arg0, arg1, arg2, arg3) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    var v1 = getArrayJsValueFromWasm0(arg2, arg3).slice();
    wasm.__wbindgen_export3(arg2, arg3 * 4, 4);
    const ret = insertPartialBlockchainNodes(v0, v1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_insertSetting_8b580ff6a7047f6e = function(arg0, arg1, arg2, arg3) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      var v1 = getArrayU8FromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
      const ret = insertSetting(getStringFromWasm0(arg0, arg1), v1);
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_insertTransactionScript_075d5f2ed0f63656 = function(arg0, arg1, arg2, arg3) {
    var v0 = getArrayU8FromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 1, 1);
    let v1;
    if (arg2 !== 0) {
      v1 = getArrayU8FromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
    }
    const ret = insertTransactionScript(v0, v1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_instanceof_ArrayBuffer_70beb1189ca63b38 = function(arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof ArrayBuffer;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_instanceof_Promise_001fdd42afa1b7ef = function(arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof Promise;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_instanceof_Uint8Array_20c8e73002f7af98 = function(arg0) {
    let result;
    try {
      result = getObject(arg0) instanceof Uint8Array;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_isArray_96e0af9891d0945d = function(arg0) {
    const ret = Array.isArray(getObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_isSafeInteger_d216eda7911dde36 = function(arg0) {
    const ret = Number.isSafeInteger(getObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_iterator_e5822695327a3c39 = function() {
    const ret = Symbol.iterator;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_jsaccountupdate_new = function(arg0) {
    const ret = JsAccountUpdate.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_jsaccountupdate_unwrap = function(arg0) {
    const ret = JsAccountUpdate.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_jsstoragemapentry_new = function(arg0) {
    const ret = JsStorageMapEntry.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_jsstoragemapentry_unwrap = function(arg0) {
    const ret = JsStorageMapEntry.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_jsstorageslot_new = function(arg0) {
    const ret = JsStorageSlot.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_jsstorageslot_unwrap = function(arg0) {
    const ret = JsStorageSlot.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_jsvaultasset_new = function(arg0) {
    const ret = JsVaultAsset.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_jsvaultasset_unwrap = function(arg0) {
    const ret = JsVaultAsset.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_length_69bca3cb64fc8748 = function(arg0) {
    const ret = getObject(arg0).length;
    return ret;
  };
  imports.wbg.__wbg_length_cdd215e10d9dd507 = function(arg0) {
    const ret = getObject(arg0).length;
    return ret;
  };
  imports.wbg.__wbg_listSettingKeys_ebb09e1981657b4d = function() {
    const ret = listSettingKeys();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_lockAccount_2e934e6fb19bed34 = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = lockAccount(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_new_0_f9740686d739025c = function() {
    const ret = /* @__PURE__ */ new Date();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_1acc0b6eea89d040 = function() {
    const ret = new Object();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_2531773dac38ebb3 = function() {
    return handleError(function() {
      const ret = new AbortController();
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_new_3c3d849046688a66 = function(arg0, arg1) {
    try {
      var state0 = { a: arg0, b: arg1 };
      var cb0 = (arg02, arg12) => {
        const a = state0.a;
        state0.a = 0;
        try {
          return __wasm_bindgen_func_elem_3930(a, state0.b, arg02, arg12);
        } finally {
          state0.a = a;
        }
      };
      const ret = new Promise(cb0);
      return addHeapObject(ret);
    } finally {
      state0.a = state0.b = 0;
    }
  };
  imports.wbg.__wbg_new_5a79be3ab53b8aa5 = function(arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_8a6f238a6ece86ea = function() {
    const ret = new Error();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_9edf9838a2def39c = function() {
    return handleError(function() {
      const ret = new Headers();
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_new_a7442b4b19c1a356 = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_e17d9f43105b08be = function() {
    const ret = new Array();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_from_slice_92f4d78ca282a2d2 = function(arg0, arg1) {
    const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_no_args_ee98eee5275000a4 = function(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_with_byte_offset_and_length_46e3e6a5e9f9e89b = function(arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_with_str_and_init_0ae7728b6ec367b1 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_next_020810e0ae8ebcb0 = function() {
    return handleError(function(arg0) {
      const ret = getObject(arg0).next();
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_next_2c826fe5dfec6b6a = function(arg0) {
    const ret = getObject(arg0).next;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_note_new = function(arg0) {
    const ret = Note.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_noteandargs_unwrap = function(arg0) {
    const ret = NoteAndArgs.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_noteconsumability_new = function(arg0) {
    const ret = NoteConsumability.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_noteconsumability_unwrap = function(arg0) {
    const ret = NoteConsumability.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_notedetailsandtag_new = function(arg0) {
    const ret = NoteDetailsAndTag.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_notedetailsandtag_unwrap = function(arg0) {
    const ret = NoteDetailsAndTag.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_notefile_new = function(arg0) {
    const ret = NoteFile.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_noteid_new = function(arg0) {
    const ret = NoteId.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_noteid_unwrap = function(arg0) {
    const ret = NoteId.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_noteidandargs_unwrap = function(arg0) {
    const ret = NoteIdAndArgs.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_noterecipient_unwrap = function(arg0) {
    const ret = NoteRecipient.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_notescript_new = function(arg0) {
    const ret = NoteScript.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_openDatabase_30aa9cee5bded5e3 = function() {
    const ret = openDatabase();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_outputnote_new = function(arg0) {
    const ret = OutputNote.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_outputnote_unwrap = function(arg0) {
    const ret = OutputNote.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_outputnotes_unwrap = function(arg0) {
    const ret = OutputNotes.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_prototypesetcall_2a6620b6922694b2 = function(arg0, arg1, arg2) {
    Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), getObject(arg2));
  };
  imports.wbg.__wbg_proventransaction_new = function(arg0) {
    const ret = ProvenTransaction.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_pruneIrrelevantBlocks_d8c1c30e0dd889db = function() {
    const ret = pruneIrrelevantBlocks();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_queueMicrotask_34d692c25c47d05b = function(arg0) {
    const ret = getObject(arg0).queueMicrotask;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_queueMicrotask_9d76cacb20c84d58 = function(arg0) {
    queueMicrotask(getObject(arg0));
  };
  imports.wbg.__wbg_read_48f1593df542f968 = function(arg0) {
    const ret = getObject(arg0).read();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_releaseLock_5d0b5a68887b891d = function(arg0) {
    getObject(arg0).releaseLock();
  };
  imports.wbg.__wbg_removeAccountAddress_3ff20b2517dae60b = function(arg0, arg1) {
    var v0 = getArrayU8FromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 1, 1);
    const ret = removeAccountAddress(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_removeNoteTag_f42e8080f62ce855 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    var v0 = getArrayU8FromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 1, 1);
    let v1;
    if (arg2 !== 0) {
      v1 = getStringFromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
    }
    let v2;
    if (arg4 !== 0) {
      v2 = getStringFromWasm0(arg4, arg5).slice();
      wasm.__wbindgen_export3(arg4, arg5 * 1, 1);
    }
    const ret = removeNoteTag(v0, v1, v2);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_removeSetting_49c0f44fb0129e42 = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      const ret = removeSetting(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_resolve_caf97c30b83f7053 = function(arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_respond_0f4dbf5386f5c73e = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).respond(arg1 >>> 0);
    }, arguments);
  };
  imports.wbg.__wbg_serializedinputnotedata_new = function(arg0) {
    const ret = SerializedInputNoteData.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_serializedinputnotedata_unwrap = function(arg0) {
    const ret = SerializedInputNoteData.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_serializedoutputnotedata_new = function(arg0) {
    const ret = SerializedOutputNoteData.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_serializedoutputnotedata_unwrap = function(arg0) {
    const ret = SerializedOutputNoteData.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_serializedtransactiondata_new = function(arg0) {
    const ret = SerializedTransactionData.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_serializedtransactiondata_unwrap = function(arg0) {
    const ret = SerializedTransactionData.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_setTimeout_929c97a7c0f23d36 = function(arg0, arg1) {
    const ret = setTimeout(getObject(arg0), arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_set_8b342d8cd9d2a02c = function() {
    return handleError(function(arg0, arg1, arg2, arg3, arg4) {
      getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments);
  };
  imports.wbg.__wbg_set_9e6516df7b7d0f19 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getArrayU8FromWasm0(arg1, arg2));
  };
  imports.wbg.__wbg_set_body_3c365989753d61f4 = function(arg0, arg1) {
    getObject(arg0).body = getObject(arg1);
  };
  imports.wbg.__wbg_set_c213c871859d6500 = function(arg0, arg1, arg2) {
    getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
  };
  imports.wbg.__wbg_set_c2abbebe8b9ebee1 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_set_cache_2f9deb19b92b81e3 = function(arg0, arg1) {
    getObject(arg0).cache = __wbindgen_enum_RequestCache[arg1];
  };
  imports.wbg.__wbg_set_credentials_f621cd2d85c0c228 = function(arg0, arg1) {
    getObject(arg0).credentials = __wbindgen_enum_RequestCredentials[arg1];
  };
  imports.wbg.__wbg_set_headers_6926da238cd32ee4 = function(arg0, arg1) {
    getObject(arg0).headers = getObject(arg1);
  };
  imports.wbg.__wbg_set_integrity_62a46fc792832f41 = function(arg0, arg1, arg2) {
    getObject(arg0).integrity = getStringFromWasm0(arg1, arg2);
  };
  imports.wbg.__wbg_set_method_c02d8cbbe204ac2d = function(arg0, arg1, arg2) {
    getObject(arg0).method = getStringFromWasm0(arg1, arg2);
  };
  imports.wbg.__wbg_set_mode_52ef73cfa79639cb = function(arg0, arg1) {
    getObject(arg0).mode = __wbindgen_enum_RequestMode[arg1];
  };
  imports.wbg.__wbg_set_redirect_df0285496ec45ff8 = function(arg0, arg1) {
    getObject(arg0).redirect = __wbindgen_enum_RequestRedirect[arg1];
  };
  imports.wbg.__wbg_set_referrer_ec9cf8a8a315d50c = function(arg0, arg1, arg2) {
    getObject(arg0).referrer = getStringFromWasm0(arg1, arg2);
  };
  imports.wbg.__wbg_set_referrer_policy_99c1f299b4e37446 = function(arg0, arg1) {
    getObject(arg0).referrerPolicy = __wbindgen_enum_ReferrerPolicy[arg1];
  };
  imports.wbg.__wbg_set_signal_dda2cf7ccb6bee0f = function(arg0, arg1) {
    getObject(arg0).signal = getObject(arg1);
  };
  imports.wbg.__wbg_signal_4db5aa055bf9eb9a = function(arg0) {
    const ret = getObject(arg0).signal;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_slotandkeys_unwrap = function(arg0) {
    const ret = SlotAndKeys.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_stack_0ed75d68575b0f3c = function(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbg_static_accessor_GLOBAL_89e1d9ac6a1b250e = function() {
    const ret = typeof global === "undefined" ? null : global;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  };
  imports.wbg.__wbg_static_accessor_GLOBAL_THIS_8b530f326a9e48ac = function() {
    const ret = typeof globalThis === "undefined" ? null : globalThis;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  };
  imports.wbg.__wbg_static_accessor_SELF_6fdf4b64710cc91b = function() {
    const ret = typeof self === "undefined" ? null : self;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  };
  imports.wbg.__wbg_static_accessor_WINDOW_b45bfc5a37f6cfa2 = function() {
    const ret = typeof window === "undefined" ? null : window;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  };
  imports.wbg.__wbg_status_de7eed5a7a5bfd5d = function(arg0) {
    const ret = getObject(arg0).status;
    return ret;
  };
  imports.wbg.__wbg_storageslot_unwrap = function(arg0) {
    const ret = StorageSlot.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_syncsummary_new = function(arg0) {
    const ret = SyncSummary.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_then_4f46f6544e6b4a28 = function(arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_then_70d05cf780a18d77 = function(arg0, arg1, arg2) {
    const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_toString_7da7c8dbec78fcb8 = function(arg0) {
    const ret = getObject(arg0).toString();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_transactionid_new = function(arg0) {
    const ret = TransactionId.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_transactionid_unwrap = function(arg0) {
    const ret = TransactionId.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_transactionrecord_new = function(arg0) {
    const ret = TransactionRecord.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_transactionresult_new = function(arg0) {
    const ret = TransactionResult.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_transactionscriptinputpair_unwrap = function(arg0) {
    const ret = TransactionScriptInputPair.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_transactionstoreupdate_new = function(arg0) {
    const ret = TransactionStoreUpdate.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_undoAccountStates_1e510799add2b50d = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = undoAccountStates(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_upsertAccountCode_52b98775a988a26d = function(arg0, arg1, arg2, arg3) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      var v1 = getArrayU8FromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
      const ret = upsertAccountCode(getStringFromWasm0(arg0, arg1), v1);
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_upsertAccountRecord_9fe913e1e45e8ab1 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
    let deferred0_0;
    let deferred0_1;
    let deferred1_0;
    let deferred1_1;
    let deferred2_0;
    let deferred2_1;
    let deferred3_0;
    let deferred3_1;
    let deferred4_0;
    let deferred4_1;
    let deferred5_0;
    let deferred5_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      deferred1_0 = arg2;
      deferred1_1 = arg3;
      deferred2_0 = arg4;
      deferred2_1 = arg5;
      deferred3_0 = arg6;
      deferred3_1 = arg7;
      deferred4_0 = arg8;
      deferred4_1 = arg9;
      deferred5_0 = arg11;
      deferred5_1 = arg12;
      let v6;
      if (arg13 !== 0) {
        v6 = getArrayU8FromWasm0(arg13, arg14).slice();
        wasm.__wbindgen_export3(arg13, arg14 * 1, 1);
      }
      const ret = upsertAccountRecord(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7), getStringFromWasm0(arg8, arg9), arg10 !== 0, getStringFromWasm0(arg11, arg12), v6);
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
      wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
      wasm.__wbindgen_export3(deferred2_0, deferred2_1, 1);
      wasm.__wbindgen_export3(deferred3_0, deferred3_1, 1);
      wasm.__wbindgen_export3(deferred4_0, deferred4_1, 1);
      wasm.__wbindgen_export3(deferred5_0, deferred5_1, 1);
    }
  };
  imports.wbg.__wbg_upsertAccountStorage_85625903cddd5208 = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = upsertAccountStorage(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_upsertForeignAccountCode_9600b8e0c7549dfb = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    let deferred0_0;
    let deferred0_1;
    let deferred2_0;
    let deferred2_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      var v1 = getArrayU8FromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
      deferred2_0 = arg4;
      deferred2_1 = arg5;
      const ret = upsertForeignAccountCode(getStringFromWasm0(arg0, arg1), v1, getStringFromWasm0(arg4, arg5));
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
      wasm.__wbindgen_export3(deferred2_0, deferred2_1, 1);
    }
  };
  imports.wbg.__wbg_upsertInputNote_8ca03aad9d69cac4 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18) {
    let deferred0_0;
    let deferred0_1;
    let deferred4_0;
    let deferred4_1;
    let deferred6_0;
    let deferred6_1;
    let deferred7_0;
    let deferred7_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      var v1 = getArrayU8FromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
      var v2 = getArrayU8FromWasm0(arg4, arg5).slice();
      wasm.__wbindgen_export3(arg4, arg5 * 1, 1);
      var v3 = getArrayU8FromWasm0(arg6, arg7).slice();
      wasm.__wbindgen_export3(arg6, arg7 * 1, 1);
      deferred4_0 = arg8;
      deferred4_1 = arg9;
      var v5 = getArrayU8FromWasm0(arg10, arg11).slice();
      wasm.__wbindgen_export3(arg10, arg11 * 1, 1);
      deferred6_0 = arg12;
      deferred6_1 = arg13;
      deferred7_0 = arg14;
      deferred7_1 = arg15;
      var v8 = getArrayU8FromWasm0(arg17, arg18).slice();
      wasm.__wbindgen_export3(arg17, arg18 * 1, 1);
      const ret = upsertInputNote(getStringFromWasm0(arg0, arg1), v1, v2, v3, getStringFromWasm0(arg8, arg9), v5, getStringFromWasm0(arg12, arg13), getStringFromWasm0(arg14, arg15), arg16, v8);
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
      wasm.__wbindgen_export3(deferred4_0, deferred4_1, 1);
      wasm.__wbindgen_export3(deferred6_0, deferred6_1, 1);
      wasm.__wbindgen_export3(deferred7_0, deferred7_1, 1);
    }
  };
  imports.wbg.__wbg_upsertNoteScript_8d421ab913ab6874 = function(arg0, arg1, arg2, arg3) {
    let deferred0_0;
    let deferred0_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      var v1 = getArrayU8FromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
      const ret = upsertNoteScript(getStringFromWasm0(arg0, arg1), v1);
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
    }
  };
  imports.wbg.__wbg_upsertOutputNote_9d6b8b882d087ce9 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13) {
    let deferred0_0;
    let deferred0_1;
    let deferred2_0;
    let deferred2_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      var v1 = getArrayU8FromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
      deferred2_0 = arg4;
      deferred2_1 = arg5;
      var v3 = getArrayU8FromWasm0(arg6, arg7).slice();
      wasm.__wbindgen_export3(arg6, arg7 * 1, 1);
      let v4;
      if (arg8 !== 0) {
        v4 = getStringFromWasm0(arg8, arg9).slice();
        wasm.__wbindgen_export3(arg8, arg9 * 1, 1);
      }
      var v5 = getArrayU8FromWasm0(arg12, arg13).slice();
      wasm.__wbindgen_export3(arg12, arg13 * 1, 1);
      const ret = upsertOutputNote(getStringFromWasm0(arg0, arg1), v1, getStringFromWasm0(arg4, arg5), v3, v4, arg10 >>> 0, arg11, v5);
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
      wasm.__wbindgen_export3(deferred2_0, deferred2_1, 1);
    }
  };
  imports.wbg.__wbg_upsertStorageMapEntries_5535d30e64882a11 = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = upsertStorageMapEntries(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_upsertTransactionRecord_a5083f42e09003f8 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    let deferred0_0;
    let deferred0_1;
    let deferred2_0;
    let deferred2_1;
    try {
      deferred0_0 = arg0;
      deferred0_1 = arg1;
      var v1 = getArrayU8FromWasm0(arg2, arg3).slice();
      wasm.__wbindgen_export3(arg2, arg3 * 1, 1);
      deferred2_0 = arg4;
      deferred2_1 = arg5;
      var v3 = getArrayU8FromWasm0(arg7, arg8).slice();
      wasm.__wbindgen_export3(arg7, arg8 * 1, 1);
      let v4;
      if (arg9 !== 0) {
        v4 = getArrayU8FromWasm0(arg9, arg10).slice();
        wasm.__wbindgen_export3(arg9, arg10 * 1, 1);
      }
      const ret = upsertTransactionRecord(getStringFromWasm0(arg0, arg1), v1, getStringFromWasm0(arg4, arg5), arg6, v3, v4);
      return addHeapObject(ret);
    } finally {
      wasm.__wbindgen_export3(deferred0_0, deferred0_1, 1);
      wasm.__wbindgen_export3(deferred2_0, deferred2_1, 1);
    }
  };
  imports.wbg.__wbg_upsertVaultAssets_073000f29c05dd3d = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = upsertVaultAssets(v0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_value_692627309814bb8c = function(arg0) {
    const ret = getObject(arg0).value;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_view_f6c15ac9fed63bbd = function(arg0) {
    const ret = getObject(arg0).view;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  };
  imports.wbg.__wbg_word_new = function(arg0) {
    const ret = Word.__wrap(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_word_unwrap = function(arg0) {
    const ret = Word.__unwrap(takeObject(arg0));
    return ret;
  };
  imports.wbg.__wbindgen_cast_0de90658f733b325 = function(arg0, arg1) {
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_10069, __wasm_bindgen_func_elem_10070);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cast_1ff30c89f8c13d4b = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = v0;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cast_25a0a844437d0e92 = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = v0;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cast_298dfd99998f1bbf = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = v0;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cast_3186144f3014a6e9 = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = v0;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(arg0) {
    const ret = BigInt.asUintN(64, arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cast_61180cf2da5580dc = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = v0;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cast_77bc3e92745e9a35 = function(arg0, arg1) {
    var v0 = getArrayU8FromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 1, 1);
    const ret = v0;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cast_8faefe34839f066a = function(arg0, arg1) {
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_10069, __wasm_bindgen_func_elem_10140);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cast_a0c9c97993851672 = function(arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_export3(arg0, arg1 * 4, 4);
    const ret = v0;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(arg0) {
    const ret = arg0;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
  };
  return imports;
}
function __wbg_finalize_init(instance, module2) {
  wasm = instance.exports;
  __wbg_init.__wbindgen_wasm_module = module2;
  cachedBigUint64ArrayMemory0 = null;
  cachedDataViewMemory0 = null;
  cachedUint32ArrayMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  return wasm;
}
function initSync(module2) {
  if (wasm !== void 0) return wasm;
  if (typeof module2 !== "undefined") {
    if (Object.getPrototypeOf(module2) === Object.prototype) {
      ({ module: module2 } = module2);
    } else {
      console.warn("using deprecated parameters for `initSync()`; pass a single object instead");
    }
  }
  const imports = __wbg_get_imports();
  if (!(module2 instanceof WebAssembly.Module)) {
    module2 = new WebAssembly.Module(module2);
  }
  const instance = new WebAssembly.Instance(module2, imports);
  return __wbg_finalize_init(instance, module2);
}
async function __wbg_init(module_or_path) {
  if (wasm !== void 0) return wasm;
  if (typeof module_or_path !== "undefined") {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({ module_or_path } = module_or_path);
    } else {
      console.warn("using deprecated parameters for the initialization function; pass a single object instead");
    }
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  const { instance, module: module2 } = await __wbg_load(await module_or_path, imports);
  return __wbg_finalize_init(instance, module2);
}
var module = new URL("assets/miden_client_web.wasm", import.meta.url);
await __wbg_init({ module_or_path: module });

export {
  AccountInterface,
  AccountType,
  InputNoteState,
  NetworkId,
  NoteFilterTypes,
  NoteType,
  SigningInputsType,
  Account,
  AccountArray,
  AccountBuilder,
  AccountBuilderResult,
  AccountCode,
  AccountComponent,
  AccountDelta,
  AccountFile,
  AccountHeader,
  AccountId,
  AccountIdArray,
  AccountStorage,
  AccountStorageDelta,
  AccountStorageMode,
  AccountStorageRequirements,
  AccountVaultDelta,
  Address,
  AdviceInputs,
  AdviceMap,
  AssetVault,
  AuthSecretKey,
  BasicFungibleFaucetComponent,
  BlockHeader,
  ConsumableNoteRecord,
  Endpoint,
  ExecutedTransaction,
  Felt,
  FeltArray,
  FetchedNote,
  FlattenedU8Vec,
  ForeignAccount,
  ForeignAccountArray,
  FungibleAsset,
  FungibleAssetDelta,
  FungibleAssetDeltaItem,
  GetProceduresResultItem,
  InputNote,
  InputNoteRecord,
  InputNotes,
  IntoUnderlyingByteSource,
  IntoUnderlyingSink,
  IntoUnderlyingSource,
  JsAccountUpdate,
  JsStateSyncUpdate,
  JsStorageMapEntry,
  JsStorageSlot,
  JsVaultAsset,
  Library,
  MerklePath,
  Note,
  NoteAndArgs,
  NoteAndArgsArray,
  NoteAssets,
  NoteConsumability,
  NoteDetails,
  NoteDetailsAndTag,
  NoteDetailsAndTagArray,
  NoteExecutionHint,
  NoteExecutionMode,
  NoteFile,
  NoteFilter,
  NoteHeader,
  NoteId,
  NoteIdAndArgs,
  NoteIdAndArgsArray,
  NoteInclusionProof,
  NoteInputs,
  NoteLocation,
  NoteMetadata,
  NoteRecipient,
  NoteRecipientArray,
  NoteScript,
  NoteTag,
  OutputNote,
  OutputNoteArray,
  OutputNotes,
  OutputNotesArray,
  Package,
  PartialNote,
  Program,
  ProvenTransaction,
  PublicKey,
  RpcClient,
  Rpo256,
  ScriptBuilder,
  SecretKey,
  SerializedInputNoteData,
  SerializedOutputNoteData,
  SerializedTransactionData,
  Signature,
  SigningInputs,
  SlotAndKeys,
  StorageMap,
  StorageSlot,
  StorageSlotArray,
  SyncSummary,
  TestUtils,
  TokenSymbol,
  TransactionArgs,
  TransactionFilter,
  TransactionId,
  TransactionProver,
  TransactionRecord,
  TransactionRequest,
  TransactionRequestBuilder,
  TransactionResult,
  TransactionScript,
  TransactionScriptInputPair,
  TransactionScriptInputPairArray,
  TransactionStatus,
  TransactionStoreUpdate,
  TransactionSummary,
  WebClient,
  Word,
  initSync
};
//# sourceMappingURL=chunk-JGDOBJS2.js.map
