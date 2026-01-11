"use client";
import {
  require_zustand_sync_tabs
} from "./chunk-RSKXLY4J.js";
import "./chunk-IMZRE44G.js";
import "./chunk-3GS4UERE.js";
import {
  ens_normalize
} from "./chunk-KKF2JET3.js";
import {
  require_browser,
  require_fast_safe_stringify,
  require_semver
} from "./chunk-WOKYXAYI.js";
import {
  createStore as createStore2
} from "./chunk-PDPMFBBQ.js";
import "./chunk-2R7IBRRR.js";
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  chains_exports,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  polygonAmoy,
  sepolia
} from "./chunk-ZESLBNQB.js";
import "./chunk-357AXRKQ.js";
import "./chunk-DG5Q6M3Y.js";
import {
  import_index
} from "./chunk-AETETENM.js";
import "./chunk-QSHPD2PE.js";
import "./chunk-T2A5ZAMZ.js";
import {
  createClient,
  createWalletClient,
  custom,
  formatTransaction,
  getBalance,
  getEnsAvatar,
  getEnsName,
  hashMessage,
  hashTypedData,
  http,
  multicall,
  publicActions,
  readContract,
  rpc,
  serializeTransaction,
  signMessage,
  webSocket,
  withRetry,
  withTimeout
} from "./chunk-RELLE3JG.js";
import "./chunk-STGOGX46.js";
import "./chunk-XXKD3HEK.js";
import "./chunk-QYYAG6CM.js";
import {
  ContractFunctionExecutionError,
  ProviderRpcError,
  ResourceUnavailableRpcError,
  RpcRequestError,
  SwitchChainError,
  UserRejectedRequestError,
  etherUnits,
  formatUnits,
  fromHex,
  getAddress,
  hexToNumber,
  hexToString,
  isHex,
  keccak256,
  numberToHex,
  parseAccount,
  stringToHex,
  trim,
  weiUnits
} from "./chunk-42GQ5IOA.js";
import {
  keccak_256
} from "./chunk-Y7BWPSR5.js";
import "./chunk-YBCZ3K7B.js";
import {
  create,
  createStore
} from "./chunk-O7NLK35K.js";
import {
  defaultEvmExternalWallet,
  openMobileUrl
} from "./chunk-HDIQWJJX.js";
import "./chunk-IKAB4A4D.js";
import "./chunk-EO4ZYWSJ.js";
import "./chunk-3QM4QFEZ.js";
import {
  useMutation,
  useQuery
} from "./chunk-MSPEGW6G.js";
import {
  require_jsx_runtime
} from "./chunk-UPMDYLTV.js";
import {
  decimalToHex,
  hexStringToBase64,
  hexToDecimal,
  hexToSignature,
  isAndroid,
  isIOS,
  isMobile,
  isTelegram
} from "./chunk-AMXWO4KO.js";
import "./chunk-WAIU3DJR.js";
import "./chunk-U23KTIEM.js";
import "./chunk-G6422SFU.js";
import "./chunk-EIHG224A.js";
import "./chunk-PMFATS67.js";
import "./chunk-M6UVRKN6.js";
import "./chunk-3ZL3LWEU.js";
import "./chunk-Q5OWYOJ4.js";
import {
  require_react
} from "./chunk-NSM7HXF2.js";
import {
  __commonJS,
  __toESM
} from "./chunk-QEK2ZTOW.js";

// node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is2(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState3({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect12(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is2, useState3 = React.useState, useEffect12 = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.1/node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.1/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is2(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = require_react(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is2, useSyncExternalStore5 = shim.useSyncExternalStore, useRef7 = React.useRef, useEffect12 = React.useEffect, useMemo5 = React.useMemo, useDebugValue = React.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual3) {
        var instRef = useRef7(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo5(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual3 && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual3(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual3 && isEqual3(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual3]
        );
        var value = useSyncExternalStore5(subscribe, instRef[0], instRef[1]);
        useEffect12(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.1/node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.1/node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss",
        // Latin Extended-A block.
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = (function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      })();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array2, setter, iteratee, accumulator) {
        var index2 = -1, length = array2 == null ? 0 : array2.length;
        while (++index2 < length) {
          var value = array2[index2];
          setter(accumulator, value, iteratee(value), array2);
        }
        return accumulator;
      }
      function arrayEach(array2, iteratee) {
        var index2 = -1, length = array2 == null ? 0 : array2.length;
        while (++index2 < length) {
          if (iteratee(array2[index2], index2, array2) === false) {
            break;
          }
        }
        return array2;
      }
      function arrayEachRight(array2, iteratee) {
        var length = array2 == null ? 0 : array2.length;
        while (length--) {
          if (iteratee(array2[length], length, array2) === false) {
            break;
          }
        }
        return array2;
      }
      function arrayEvery(array2, predicate) {
        var index2 = -1, length = array2 == null ? 0 : array2.length;
        while (++index2 < length) {
          if (!predicate(array2[index2], index2, array2)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array2, predicate) {
        var index2 = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
        while (++index2 < length) {
          var value = array2[index2];
          if (predicate(value, index2, array2)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array2, value) {
        var length = array2 == null ? 0 : array2.length;
        return !!length && baseIndexOf(array2, value, 0) > -1;
      }
      function arrayIncludesWith(array2, value, comparator) {
        var index2 = -1, length = array2 == null ? 0 : array2.length;
        while (++index2 < length) {
          if (comparator(value, array2[index2])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array2, iteratee) {
        var index2 = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
        while (++index2 < length) {
          result[index2] = iteratee(array2[index2], index2, array2);
        }
        return result;
      }
      function arrayPush(array2, values) {
        var index2 = -1, length = values.length, offset = array2.length;
        while (++index2 < length) {
          array2[offset + index2] = values[index2];
        }
        return array2;
      }
      function arrayReduce(array2, iteratee, accumulator, initAccum) {
        var index2 = -1, length = array2 == null ? 0 : array2.length;
        if (initAccum && length) {
          accumulator = array2[++index2];
        }
        while (++index2 < length) {
          accumulator = iteratee(accumulator, array2[index2], index2, array2);
        }
        return accumulator;
      }
      function arrayReduceRight(array2, iteratee, accumulator, initAccum) {
        var length = array2 == null ? 0 : array2.length;
        if (initAccum && length) {
          accumulator = array2[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array2[length], length, array2);
        }
        return accumulator;
      }
      function arraySome(array2, predicate) {
        var index2 = -1, length = array2 == null ? 0 : array2.length;
        while (++index2 < length) {
          if (predicate(array2[index2], index2, array2)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string2) {
        return string2.split("");
      }
      function asciiWords(string2) {
        return string2.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array2, predicate, fromIndex, fromRight) {
        var length = array2.length, index2 = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index2-- : ++index2 < length) {
          if (predicate(array2[index2], index2, array2)) {
            return index2;
          }
        }
        return -1;
      }
      function baseIndexOf(array2, value, fromIndex) {
        return value === value ? strictIndexOf(array2, value, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array2, value, fromIndex, comparator) {
        var index2 = fromIndex - 1, length = array2.length;
        while (++index2 < length) {
          if (comparator(array2[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array2, iteratee) {
        var length = array2 == null ? 0 : array2.length;
        return length ? baseSum(array2, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object3) {
          return object3 == null ? undefined2 : object3[key];
        };
      }
      function basePropertyOf(object3) {
        return function(key) {
          return object3 == null ? undefined2 : object3[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index2, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index2, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array2, comparer) {
        var length = array2.length;
        array2.sort(comparer);
        while (length--) {
          array2[length] = array2[length].value;
        }
        return array2;
      }
      function baseSum(array2, iteratee) {
        var result, index2 = -1, length = array2.length;
        while (++index2 < length) {
          var current = iteratee(array2[index2]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index2 = -1, result = Array(n);
        while (++index2 < n) {
          result[index2] = iteratee(index2);
        }
        return result;
      }
      function baseToPairs(object3, props) {
        return arrayMap(props, function(key) {
          return [key, object3[key]];
        });
      }
      function baseTrim(string2) {
        return string2 ? string2.slice(0, trimmedEndIndex(string2) + 1).replace(reTrimStart, "") : string2;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object3, props) {
        return arrayMap(props, function(key) {
          return object3[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index2 = -1, length = strSymbols.length;
        while (++index2 < length && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
        }
        return index2;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index2 = strSymbols.length;
        while (index2-- && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
        }
        return index2;
      }
      function countHolders(array2, placeholder) {
        var length = array2.length, result = 0;
        while (length--) {
          if (array2[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object3, key) {
        return object3 == null ? undefined2 : object3[key];
      }
      function hasUnicode(string2) {
        return reHasUnicode.test(string2);
      }
      function hasUnicodeWord(string2) {
        return reHasUnicodeWord.test(string2);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index2 = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index2] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array2, placeholder) {
        var index2 = -1, length = array2.length, resIndex = 0, result = [];
        while (++index2 < length) {
          var value = array2[index2];
          if (value === placeholder || value === PLACEHOLDER) {
            array2[index2] = PLACEHOLDER;
            result[resIndex++] = index2;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index2 = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index2] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index2 = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index2] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array2, value, fromIndex) {
        var index2 = fromIndex - 1, length = array2.length;
        while (++index2 < length) {
          if (array2[index2] === value) {
            return index2;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array2, value, fromIndex) {
        var index2 = fromIndex + 1;
        while (index2--) {
          if (array2[index2] === value) {
            return index2;
          }
        }
        return index2;
      }
      function stringSize(string2) {
        return hasUnicode(string2) ? unicodeSize(string2) : asciiSize(string2);
      }
      function stringToArray(string2) {
        return hasUnicode(string2) ? unicodeToArray(string2) : asciiToArray(string2);
      }
      function trimmedEndIndex(string2) {
        var index2 = string2.length;
        while (index2-- && reWhitespace.test(string2.charAt(index2))) {
        }
        return index2;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string2) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string2)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string2) {
        return string2.match(reUnicode) || [];
      }
      function unicodeWords(string2) {
        return string2.match(reUnicodeWord) || [];
      }
      var runInContext = (function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = (function() {
          var uid3 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid3 ? "Symbol(src)_1." + uid3 : "";
        })();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = (function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        })();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap2 && new WeakMap2();
        var realNames = {};
        var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ (function() {
          function object3() {
          }
          return function(proto) {
            if (!isObject3(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object3.prototype = proto;
            var result2 = new object3();
            object3.prototype = undefined2;
            return result2;
          };
        })();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array2 = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array2), isRight = dir < 0, arrLength = isArr ? array2.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index2 = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array2, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index2 += dir;
              var iterIndex = -1, value = array2[index2];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type2 = data.type, computed = iteratee2(value);
                if (type2 == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type2 == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index2 = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index2 < length) {
            var entry = entries[index2];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index2 = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index2 < length) {
            var entry = entries[index2];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index2 = assocIndexOf(data, key);
          if (index2 < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index2 == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index2, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index2 = assocIndexOf(data, key);
          return index2 < 0 ? undefined2 : data[index2][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index2 = assocIndexOf(data, key);
          if (index2 < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index2][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index2 = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index2 < length) {
            var entry = entries[index2];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size6 = data.size;
          data.set(key, value);
          this.size += data.size == size6 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index2 = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index2 < length) {
            this.add(values2[index2]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array2) {
          var length = array2.length;
          return length ? array2[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array2, n) {
          return shuffleSelf(copyArray(array2), baseClamp(n, 0, array2.length));
        }
        function arrayShuffle(array2) {
          return shuffleSelf(copyArray(array2));
        }
        function assignMergeValue(object3, key, value) {
          if (value !== undefined2 && !eq(object3[key], value) || value === undefined2 && !(key in object3)) {
            baseAssignValue(object3, key, value);
          }
        }
        function assignValue(object3, key, value) {
          var objValue = object3[key];
          if (!(hasOwnProperty.call(object3, key) && eq(objValue, value)) || value === undefined2 && !(key in object3)) {
            baseAssignValue(object3, key, value);
          }
        }
        function assocIndexOf(array2, key) {
          var length = array2.length;
          while (length--) {
            if (eq(array2[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object3, source) {
          return object3 && copyObject(source, keys(source), object3);
        }
        function baseAssignIn(object3, source) {
          return object3 && copyObject(source, keysIn(source), object3);
        }
        function baseAssignValue(object3, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object3, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object3[key] = value;
          }
        }
        function baseAt(object3, paths) {
          var index2 = -1, length = paths.length, result2 = Array2(length), skip = object3 == null;
          while (++index2 < length) {
            result2[index2] = skip ? undefined2 : get(object3, paths[index2]);
          }
          return result2;
        }
        function baseClamp(number2, lower, upper) {
          if (number2 === number2) {
            if (upper !== undefined2) {
              number2 = number2 <= upper ? number2 : upper;
            }
            if (lower !== undefined2) {
              number2 = number2 >= lower ? number2 : lower;
            }
          }
          return number2;
        }
        function baseClone(value, bitmask, customizer, key, object3, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object3 ? customizer(value, key, object3, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject3(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object3) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object3 ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object3) {
            return baseConformsTo(object3, source, props);
          };
        }
        function baseConformsTo(object3, source, props) {
          var length = props.length;
          if (object3 == null) {
            return !length;
          }
          object3 = Object2(object3);
          while (length--) {
            var key = props[length], predicate = source[key], value = object3[key];
            if (value === undefined2 && !(key in object3) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array2, values2, iteratee2, comparator) {
          var index2 = -1, includes2 = arrayIncludes, isCommon = true, length = array2.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index2 < length) {
              var value = array2[index2], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index2, collection2) {
            result2 = !!predicate(value, index2, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array2, iteratee2, comparator) {
          var index2 = -1, length = array2.length;
          while (++index2 < length) {
            var value = array2[index2], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array2, value, start, end) {
          var length = array2.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array2[start++] = value;
          }
          return array2;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index2, collection2) {
            if (predicate(value, index2, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array2, depth, predicate, isStrict, result2) {
          var index2 = -1, length = array2.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index2 < length) {
            var value = array2[index2];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object3, iteratee2) {
          return object3 && baseFor(object3, iteratee2, keys);
        }
        function baseForOwnRight(object3, iteratee2) {
          return object3 && baseForRight(object3, iteratee2, keys);
        }
        function baseFunctions(object3, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object3[key]);
          });
        }
        function baseGet(object3, path2) {
          path2 = castPath(path2, object3);
          var index2 = 0, length = path2.length;
          while (object3 != null && index2 < length) {
            object3 = object3[toKey(path2[index2++])];
          }
          return index2 && index2 == length ? object3 : undefined2;
        }
        function baseGetAllKeys(object3, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object3);
          return isArray(object3) ? result2 : arrayPush(result2, symbolsFunc(object3));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object3, key) {
          return object3 != null && hasOwnProperty.call(object3, key);
        }
        function baseHasIn(object3, key) {
          return object3 != null && key in Object2(object3);
        }
        function baseInRange(number2, start, end) {
          return number2 >= nativeMin(start, end) && number2 < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array2 = arrays[othIndex];
            if (othIndex && iteratee2) {
              array2 = arrayMap(array2, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array2.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array2.length >= 120) ? new SetCache(othIndex && array2) : undefined2;
          }
          array2 = arrays[0];
          var index2 = -1, seen = caches[0];
          outer:
            while (++index2 < length && result2.length < maxLength) {
              var value = array2[index2], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object3, setter, iteratee2, accumulator) {
          baseForOwn(object3, function(value, key, object4) {
            setter(accumulator, iteratee2(value), key, object4);
          });
          return accumulator;
        }
        function baseInvoke(object3, path2, args) {
          path2 = castPath(path2, object3);
          object3 = parent(object3, path2);
          var func = object3 == null ? object3 : object3[toKey(last(path2))];
          return func == null ? undefined2 : apply(func, object3, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object3, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object3), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object3), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object3)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object3) ? equalArrays(object3, other, bitmask, customizer, equalFunc, stack) : equalByTag(object3, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object3, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object3.value() : object3, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object3, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object3, source, matchData, customizer) {
          var index2 = matchData.length, length = index2, noCustomizer = !customizer;
          if (object3 == null) {
            return !length;
          }
          object3 = Object2(object3);
          while (index2--) {
            var data = matchData[index2];
            if (noCustomizer && data[2] ? data[1] !== object3[data[0]] : !(data[0] in object3)) {
              return false;
            }
          }
          while (++index2 < length) {
            data = matchData[index2];
            var key = data[0], objValue = object3[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object3)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object3, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject3(value) || isMasked(value)) {
            return false;
          }
          var pattern2 = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern2.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object3) {
          if (!isPrototype(object3)) {
            return nativeKeys(object3);
          }
          var result2 = [];
          for (var key in Object2(object3)) {
            if (hasOwnProperty.call(object3, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object3) {
          if (!isObject3(object3)) {
            return nativeKeysIn(object3);
          }
          var isProto = isPrototype(object3), result2 = [];
          for (var key in object3) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object3, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index2 = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index2] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object3) {
            return object3 === source || baseIsMatch(object3, source, matchData);
          };
        }
        function baseMatchesProperty(path2, srcValue) {
          if (isKey(path2) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path2), srcValue);
          }
          return function(object3) {
            var objValue = get(object3, path2);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object3, path2) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object3, source, srcIndex, customizer, stack) {
          if (object3 === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject3(srcValue)) {
              baseMergeDeep(object3, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object3, key), srcValue, key + "", object3, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object3, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object3, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object3, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object3, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object3, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject5(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject3(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object3, key, newValue);
        }
        function baseNth(array2, n) {
          var length = array2.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array2[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index2 = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index2, "value": value };
          });
          return baseSortBy(result2, function(object3, other) {
            return compareMultiple(object3, other, orders);
          });
        }
        function basePick(object3, paths) {
          return basePickBy(object3, paths, function(value, path2) {
            return hasIn(object3, path2);
          });
        }
        function basePickBy(object3, paths, predicate) {
          var index2 = -1, length = paths.length, result2 = {};
          while (++index2 < length) {
            var path2 = paths[index2], value = baseGet(object3, path2);
            if (predicate(value, path2)) {
              baseSet(result2, castPath(path2, object3), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path2) {
          return function(object3) {
            return baseGet(object3, path2);
          };
        }
        function basePullAll(array2, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index2 = -1, length = values2.length, seen = array2;
          if (array2 === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array2, baseUnary(iteratee2));
          }
          while (++index2 < length) {
            var fromIndex = 0, value = values2[index2], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array2) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array2, fromIndex, 1);
            }
          }
          return array2;
        }
        function basePullAt(array2, indexes) {
          var length = array2 ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index2 = indexes[length];
            if (length == lastIndex || index2 !== previous) {
              var previous = index2;
              if (isIndex(index2)) {
                splice.call(array2, index2, 1);
              } else {
                baseUnset(array2, index2);
              }
            }
          }
          return array2;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index2 = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index2] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string2, n) {
          var result2 = "";
          if (!string2 || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string2;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string2 += string2;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array2 = values(collection);
          return shuffleSelf(array2, baseClamp(n, 0, array2.length));
        }
        function baseSet(object3, path2, value, customizer) {
          if (!isObject3(object3)) {
            return object3;
          }
          path2 = castPath(path2, object3);
          var index2 = -1, length = path2.length, lastIndex = length - 1, nested = object3;
          while (nested != null && ++index2 < length) {
            var key = toKey(path2[index2]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object3;
            }
            if (index2 != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject3(objValue) ? objValue : isIndex(path2[index2 + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object3;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string2) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string2),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array2, start, end) {
          var index2 = -1, length = array2.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index2 < length) {
            result2[index2] = array2[index2 + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index2, collection2) {
            result2 = predicate(value, index2, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array2, value, retHighest) {
          var low = 0, high = array2 == null ? low : array2.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array2[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array2, value, identity, retHighest);
        }
        function baseSortedIndexBy(array2, value, iteratee2, retHighest) {
          var low = 0, high = array2 == null ? 0 : array2.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array2[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array2, iteratee2) {
          var index2 = -1, length = array2.length, resIndex = 0, result2 = [];
          while (++index2 < length) {
            var value = array2[index2], computed = iteratee2 ? iteratee2(value) : value;
            if (!index2 || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array2, iteratee2, comparator) {
          var index2 = -1, includes2 = arrayIncludes, length = array2.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array2);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index2 < length) {
              var value = array2[index2], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object3, path2) {
          path2 = castPath(path2, object3);
          object3 = parent(object3, path2);
          return object3 == null || delete object3[toKey(last(path2))];
        }
        function baseUpdate(object3, path2, updater, customizer) {
          return baseSet(object3, path2, updater(baseGet(object3, path2)), customizer);
        }
        function baseWhile(array2, predicate, isDrop, fromRight) {
          var length = array2.length, index2 = fromRight ? length : -1;
          while ((fromRight ? index2-- : ++index2 < length) && predicate(array2[index2], index2, array2)) {
          }
          return isDrop ? baseSlice(array2, fromRight ? 0 : index2, fromRight ? index2 + 1 : length) : baseSlice(array2, fromRight ? index2 + 1 : 0, fromRight ? length : index2);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index2 = -1, result2 = Array2(length);
          while (++index2 < length) {
            var array2 = arrays[index2], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index2) {
                result2[index2] = baseDifference(result2[index2] || array2, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index2 = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index2 < length) {
            var value = index2 < valsLength ? values2[index2] : undefined2;
            assignFunc(result2, props[index2], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object3) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object3) ? [value] : stringToPath(toString2(value));
        }
        var castRest = baseRest;
        function castSlice(array2, start, end) {
          var length = array2.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array2 : baseSlice(array2, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer2, isDeep) {
          if (isDeep) {
            return buffer2.slice();
          }
          var length = buffer2.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer2.constructor(length);
          buffer2.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer2 = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer2, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer2 = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer2, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object3, other, orders) {
          var index2 = -1, objCriteria = object3.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index2 < length) {
            var result2 = compareAscending(objCriteria[index2], othCriteria[index2]);
            if (result2) {
              if (index2 >= ordersLength) {
                return result2;
              }
              var order = orders[index2];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object3.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array2) {
          var index2 = -1, length = source.length;
          array2 || (array2 = Array2(length));
          while (++index2 < length) {
            array2[index2] = source[index2];
          }
          return array2;
        }
        function copyObject(source, props, object3, customizer) {
          var isNew = !object3;
          object3 || (object3 = {});
          var index2 = -1, length = props.length;
          while (++index2 < length) {
            var key = props[index2];
            var newValue = customizer ? customizer(object3[key], source[key], key, object3, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object3, key, newValue);
            } else {
              assignValue(object3, key, newValue);
            }
          }
          return object3;
        }
        function copySymbols(source, object3) {
          return copyObject(source, getSymbols(source), object3);
        }
        function copySymbolsIn(source, object3) {
          return copyObject(source, getSymbolsIn(source), object3);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object3, sources) {
            var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object3 = Object2(object3);
            while (++index2 < length) {
              var source = sources[index2];
              if (source) {
                assigner(object3, source, index2, customizer);
              }
            }
            return object3;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index2 = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index2-- : ++index2 < length) {
              if (iteratee2(iterable[index2], index2, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object3, iteratee2, keysFunc) {
            var index2 = -1, iterable = Object2(object3), props = keysFunc(object3), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index2];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object3;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string2) {
            string2 = toString2(string2);
            var strSymbols = hasUnicode(string2) ? stringToArray(string2) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string2.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string2.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string2) {
            return arrayReduce(words(deburr(string2).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject3(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index2 = length, placeholder = getHolder(wrapper);
            while (index2--) {
              args[index2] = arguments[index2];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index2 = findIndexFunc(collection, predicate, fromIndex);
            return index2 > -1 ? iterable[iteratee2 ? collection[index2] : index2] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index2 = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index2--) {
              var func = funcs[index2];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index2 = wrapper ? index2 : length;
            while (++index2 < length) {
              func = funcs[index2];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index3 = 0, result2 = length ? funcs[index3].apply(this, args) : value;
              while (++index3 < length) {
                result2 = funcs[index3].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index2 = length;
            while (index2--) {
              args[index2] = arguments[index2];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object3, iteratee2) {
            return baseInverter(object3, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber2(value);
              other = toNumber2(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number2, precision) {
            number2 = toNumber2(number2);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number2)) {
              var pair = (toString2(number2) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString2(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number2);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object3) {
            var tag = getTag(object3);
            if (tag == mapTag) {
              return mapToArray(object3);
            }
            if (tag == setTag) {
              return setToPairs(object3);
            }
            return baseToPairs(object3, keysFunc(object3));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object3) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object3, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object3, source, stack) {
          if (isObject3(objValue) && isObject3(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject5(value) ? undefined2 : value;
        }
        function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array2);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array2;
          }
          var index2 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array2, other);
          stack.set(other, array2);
          while (++index2 < arrLength) {
            var arrValue = array2[index2], othValue = other[index2];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index2, other, array2, stack) : customizer(arrValue, othValue, index2, array2, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array2);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object3, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object3.byteLength != other.byteLength || object3.byteOffset != other.byteOffset) {
                return false;
              }
              object3 = object3.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object3.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object3), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object3, +other);
            case errorTag:
              return object3.name == other.name && object3.message == other.message;
            case regexpTag:
            case stringTag:
              return object3 == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object3.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object3);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object3, other);
              var result2 = equalArrays(convert(object3), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object3);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object3) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object3, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object3), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index2 = objLength;
          while (index2--) {
            var key = objProps[index2];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object3);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object3;
          }
          var result2 = true;
          stack.set(object3, other);
          stack.set(other, object3);
          var skipCtor = isPartial;
          while (++index2 < objLength) {
            key = objProps[index2];
            var objValue = object3[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object3, stack) : customizer(objValue, othValue, key, object3, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object3.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object3 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object3);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object3) {
          return baseGetAllKeys(object3, keys, getSymbols);
        }
        function getAllKeysIn(object3) {
          return baseGetAllKeys(object3, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array2 = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array2.length : 0;
          while (length--) {
            var data = array2[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object3 = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object3.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object3) {
          var result2 = keys(object3), length = result2.length;
          while (length--) {
            var key = result2[length], value = object3[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object3, key) {
          var value = getValue(object3, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object3) {
          if (object3 == null) {
            return [];
          }
          object3 = Object2(object3);
          return arrayFilter(nativeGetSymbols(object3), function(symbol) {
            return propertyIsEnumerable.call(object3, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object3) {
          var result2 = [];
          while (object3) {
            arrayPush(result2, getSymbols(object3));
            object3 = getPrototype(object3);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index2 = -1, length = transforms.length;
          while (++index2 < length) {
            var data = transforms[index2], size6 = data.size;
            switch (data.type) {
              case "drop":
                start += size6;
                break;
              case "dropRight":
                end -= size6;
                break;
              case "take":
                end = nativeMin(end, start + size6);
                break;
              case "takeRight":
                start = nativeMax(start, end - size6);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object3, path2, hasFunc) {
          path2 = castPath(path2, object3);
          var index2 = -1, length = path2.length, result2 = false;
          while (++index2 < length) {
            var key = toKey(path2[index2]);
            if (!(result2 = object3 != null && hasFunc(object3, key))) {
              break;
            }
            object3 = object3[key];
          }
          if (result2 || ++index2 != length) {
            return result2;
          }
          length = object3 == null ? 0 : object3.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object3) || isArguments(object3));
        }
        function initCloneArray(array2) {
          var length = array2.length, result2 = new array2.constructor(length);
          if (length && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
            result2.index = array2.index;
            result2.input = array2.input;
          }
          return result2;
        }
        function initCloneObject(object3) {
          return typeof object3.constructor == "function" && !isPrototype(object3) ? baseCreate(getPrototype(object3)) : {};
        }
        function initCloneByTag(object3, tag, isDeep) {
          var Ctor = object3.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object3);
            case boolTag:
            case dateTag:
              return new Ctor(+object3);
            case dataViewTag:
              return cloneDataView(object3, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object3, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object3);
            case regexpTag:
              return cloneRegExp(object3);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object3);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type2 = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index2, object3) {
          if (!isObject3(object3)) {
            return false;
          }
          var type2 = typeof index2;
          if (type2 == "number" ? isArrayLike(object3) && isIndex(index2, object3.length) : type2 == "string" && index2 in object3) {
            return eq(object3[index2], value);
          }
          return false;
        }
        function isKey(value, object3) {
          if (isArray(value)) {
            return false;
          }
          var type2 = typeof value;
          if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object3 != null && value in Object2(object3);
        }
        function isKeyable(value) {
          var type2 = typeof value;
          return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject3(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object3) {
            if (object3 == null) {
              return false;
            }
            return object3[key] === srcValue && (srcValue !== undefined2 || key in Object2(object3));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize2(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object3) {
          var result2 = [];
          if (object3 != null) {
            for (var key in Object2(object3)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array2 = Array2(length);
            while (++index2 < length) {
              array2[index2] = args[start + index2];
            }
            index2 = -1;
            var otherArgs = Array2(start + 1);
            while (++index2 < start) {
              otherArgs[index2] = args[index2];
            }
            otherArgs[start] = transform2(array2);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object3, path2) {
          return path2.length < 2 ? object3 : baseGet(object3, baseSlice(path2, 0, -1));
        }
        function reorder(array2, indexes) {
          var arrLength = array2.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array2);
          while (length--) {
            var index2 = indexes[length];
            array2[length] = isIndex(index2, arrLength) ? oldArray[index2] : undefined2;
          }
          return array2;
        }
        function safeGet(object3, key) {
          if (key === "constructor" && typeof object3[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object3[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array2, size6) {
          var index2 = -1, length = array2.length, lastIndex = length - 1;
          size6 = size6 === undefined2 ? length : size6;
          while (++index2 < size6) {
            var rand = baseRandom(index2, lastIndex), value = array2[rand];
            array2[rand] = array2[index2];
            array2[index2] = value;
          }
          array2.length = size6;
          return array2;
        }
        var stringToPath = memoizeCapped(function(string2) {
          var result2 = [];
          if (string2.charCodeAt(0) === 46) {
            result2.push("");
          }
          string2.replace(rePropName, function(match, number2, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array2, size6, guard) {
          if (guard ? isIterateeCall(array2, size6, guard) : size6 === undefined2) {
            size6 = 1;
          } else {
            size6 = nativeMax(toInteger(size6), 0);
          }
          var length = array2 == null ? 0 : array2.length;
          if (!length || size6 < 1) {
            return [];
          }
          var index2 = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size6));
          while (index2 < length) {
            result2[resIndex++] = baseSlice(array2, index2, index2 += size6);
          }
          return result2;
        }
        function compact(array2) {
          var index2 = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result2 = [];
          while (++index2 < length) {
            var value = array2[index2];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat3() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array2 = arguments[0], index2 = length;
          while (index2--) {
            args[index2 - 1] = arguments[index2];
          }
          return arrayPush(isArray(array2) ? copyArray(array2) : [array2], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array2, values2) {
          return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array2, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array2, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array2, n, guard) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array2, n < 0 ? 0 : n, length);
        }
        function dropRight(array2, n, guard) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array2, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), true) : [];
        }
        function fill(array2, value, start, end) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array2, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array2, value, start, end);
        }
        function findIndex(array2, predicate, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index2 < 0) {
            index2 = nativeMax(length + index2, 0);
          }
          return baseFindIndex(array2, getIteratee(predicate, 3), index2);
        }
        function findLastIndex(array2, predicate, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index2 = length - 1;
          if (fromIndex !== undefined2) {
            index2 = toInteger(fromIndex);
            index2 = fromIndex < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
          }
          return baseFindIndex(array2, getIteratee(predicate, 3), index2, true);
        }
        function flatten(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseFlatten(array2, 1) : [];
        }
        function flattenDeep(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseFlatten(array2, INFINITY) : [];
        }
        function flattenDepth(array2, depth) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array2, depth);
        }
        function fromPairs(pairs) {
          var index2 = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index2 < length) {
            var pair = pairs[index2];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array2) {
          return array2 && array2.length ? array2[0] : undefined2;
        }
        function indexOf(array2, value, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index2 < 0) {
            index2 = nativeMax(length + index2, 0);
          }
          return baseIndexOf(array2, value, index2);
        }
        function initial(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseSlice(array2, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array2, separator) {
          return array2 == null ? "" : nativeJoin.call(array2, separator);
        }
        function last(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? array2[length - 1] : undefined2;
        }
        function lastIndexOf(array2, value, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index2 = length;
          if (fromIndex !== undefined2) {
            index2 = toInteger(fromIndex);
            index2 = index2 < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
          }
          return value === value ? strictLastIndexOf(array2, value, index2) : baseFindIndex(array2, baseIsNaN, index2, true);
        }
        function nth(array2, n) {
          return array2 && array2.length ? baseNth(array2, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array2, values2) {
          return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2) : array2;
        }
        function pullAllBy(array2, values2, iteratee2) {
          return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2, getIteratee(iteratee2, 2)) : array2;
        }
        function pullAllWith(array2, values2, comparator) {
          return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2, undefined2, comparator) : array2;
        }
        var pullAt = flatRest(function(array2, indexes) {
          var length = array2 == null ? 0 : array2.length, result2 = baseAt(array2, indexes);
          basePullAt(array2, arrayMap(indexes, function(index2) {
            return isIndex(index2, length) ? +index2 : index2;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array2, predicate) {
          var result2 = [];
          if (!(array2 && array2.length)) {
            return result2;
          }
          var index2 = -1, indexes = [], length = array2.length;
          predicate = getIteratee(predicate, 3);
          while (++index2 < length) {
            var value = array2[index2];
            if (predicate(value, index2, array2)) {
              result2.push(value);
              indexes.push(index2);
            }
          }
          basePullAt(array2, indexes);
          return result2;
        }
        function reverse(array2) {
          return array2 == null ? array2 : nativeReverse.call(array2);
        }
        function slice3(array2, start, end) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array2, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array2, start, end);
        }
        function sortedIndex(array2, value) {
          return baseSortedIndex(array2, value);
        }
        function sortedIndexBy(array2, value, iteratee2) {
          return baseSortedIndexBy(array2, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array2, value) {
          var length = array2 == null ? 0 : array2.length;
          if (length) {
            var index2 = baseSortedIndex(array2, value);
            if (index2 < length && eq(array2[index2], value)) {
              return index2;
            }
          }
          return -1;
        }
        function sortedLastIndex(array2, value) {
          return baseSortedIndex(array2, value, true);
        }
        function sortedLastIndexBy(array2, value, iteratee2) {
          return baseSortedIndexBy(array2, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array2, value) {
          var length = array2 == null ? 0 : array2.length;
          if (length) {
            var index2 = baseSortedIndex(array2, value, true) - 1;
            if (eq(array2[index2], value)) {
              return index2;
            }
          }
          return -1;
        }
        function sortedUniq(array2) {
          return array2 && array2.length ? baseSortedUniq(array2) : [];
        }
        function sortedUniqBy(array2, iteratee2) {
          return array2 && array2.length ? baseSortedUniq(array2, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseSlice(array2, 1, length) : [];
        }
        function take(array2, n, guard) {
          if (!(array2 && array2.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array2, 0, n < 0 ? 0 : n);
        }
        function takeRight(array2, n, guard) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array2, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3)) : [];
        }
        var union2 = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array2) {
          return array2 && array2.length ? baseUniq(array2) : [];
        }
        function uniqBy(array2, iteratee2) {
          return array2 && array2.length ? baseUniq(array2, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array2, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array2 && array2.length ? baseUniq(array2, undefined2, comparator) : [];
        }
        function unzip(array2) {
          if (!(array2 && array2.length)) {
            return [];
          }
          var length = 0;
          array2 = arrayFilter(array2, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index2) {
            return arrayMap(array2, baseProperty(index2));
          });
        }
        function unzipWith(array2, iteratee2) {
          if (!(array2 && array2.length)) {
            return [];
          }
          var result2 = unzip(array2);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array2, values2) {
          return isArrayLikeObject(array2) ? baseDifference(array2, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object3) {
            return baseAt(object3, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array2) {
            if (length && !array2.length) {
              array2.push(undefined2);
            }
            return array2;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString2(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path2, args) {
          var index2 = -1, isFunc = typeof path2 == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index2] = isFunc ? apply(path2, value, args) : baseInvoke(value, path2, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size5(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString2(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object3, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object3, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber2(wait) || 0;
          if (isObject3(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber2(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber2(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize2(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize2.Cache || MapCache)();
          return memoized;
        }
        memoize2.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index2 = -1, length = nativeMin(args.length, funcsLength);
            while (++index2 < length) {
              args[index2] = transforms[index2].call(this, args[index2]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array2 = args[start], otherArgs = castSlice(args, 0, start);
            if (array2) {
              arrayPush(otherArgs, array2);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject3(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object3, source) {
          return source == null || baseConformsTo(object3, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject5(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual3(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject5(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject3(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject3(value) {
          var type2 = typeof value;
          return value != null && (type2 == "object" || type2 == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object3, source) {
          return object3 === source || baseIsMatch(object3, source, getMatchData(source));
        }
        function isMatchWith(object3, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object3, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject5(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString2(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString2(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber2(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber2(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject3(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject3(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString2(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object3, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object3);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object3, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object3, source) {
          copyObject(source, keysIn(source), object3);
        });
        var assignInWith = createAssigner(function(object3, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object3, customizer);
        });
        var assignWith = createAssigner(function(object3, source, srcIndex, customizer) {
          copyObject(source, keys(source), object3, customizer);
        });
        var at = flatRest(baseAt);
        function create5(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object3, sources) {
          object3 = Object2(object3);
          var index2 = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index2 < length) {
            var source = sources[index2];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object3[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object3, key)) {
                object3[key] = source[key];
              }
            }
          }
          return object3;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object3, predicate) {
          return baseFindKey(object3, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object3, predicate) {
          return baseFindKey(object3, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object3, iteratee2) {
          return object3 == null ? object3 : baseFor(object3, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object3, iteratee2) {
          return object3 == null ? object3 : baseForRight(object3, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object3, iteratee2) {
          return object3 && baseForOwn(object3, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object3, iteratee2) {
          return object3 && baseForOwnRight(object3, getIteratee(iteratee2, 3));
        }
        function functions(object3) {
          return object3 == null ? [] : baseFunctions(object3, keys(object3));
        }
        function functionsIn(object3) {
          return object3 == null ? [] : baseFunctions(object3, keysIn(object3));
        }
        function get(object3, path2, defaultValue) {
          var result2 = object3 == null ? undefined2 : baseGet(object3, path2);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object3, path2) {
          return object3 != null && hasPath(object3, path2, baseHas);
        }
        function hasIn(object3, path2) {
          return object3 != null && hasPath(object3, path2, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object3) {
          return isArrayLike(object3) ? arrayLikeKeys(object3) : baseKeys(object3);
        }
        function keysIn(object3) {
          return isArrayLike(object3) ? arrayLikeKeys(object3, true) : baseKeysIn(object3);
        }
        function mapKeys(object3, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object3, function(value, key, object4) {
            baseAssignValue(result2, iteratee2(value, key, object4), value);
          });
          return result2;
        }
        function mapValues(object3, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object3, function(value, key, object4) {
            baseAssignValue(result2, key, iteratee2(value, key, object4));
          });
          return result2;
        }
        var merge = createAssigner(function(object3, source, srcIndex) {
          baseMerge(object3, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object3, source, srcIndex, customizer) {
          baseMerge(object3, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object3, paths) {
          var result2 = {};
          if (object3 == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path2) {
            path2 = castPath(path2, object3);
            isDeep || (isDeep = path2.length > 1);
            return path2;
          });
          copyObject(object3, getAllKeysIn(object3), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object3, predicate) {
          return pickBy(object3, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object3, paths) {
          return object3 == null ? {} : basePick(object3, paths);
        });
        function pickBy(object3, predicate) {
          if (object3 == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object3), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object3, props, function(value, path2) {
            return predicate(value, path2[0]);
          });
        }
        function result(object3, path2, defaultValue) {
          path2 = castPath(path2, object3);
          var index2 = -1, length = path2.length;
          if (!length) {
            length = 1;
            object3 = undefined2;
          }
          while (++index2 < length) {
            var value = object3 == null ? undefined2 : object3[toKey(path2[index2])];
            if (value === undefined2) {
              index2 = length;
              value = defaultValue;
            }
            object3 = isFunction(value) ? value.call(object3) : value;
          }
          return object3;
        }
        function set(object3, path2, value) {
          return object3 == null ? object3 : baseSet(object3, path2, value);
        }
        function setWith(object3, path2, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object3 == null ? object3 : baseSet(object3, path2, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object3, iteratee2, accumulator) {
          var isArr = isArray(object3), isArrLike = isArr || isBuffer(object3) || isTypedArray(object3);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object3 && object3.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject3(object3)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object3)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object3, function(value, index2, object4) {
            return iteratee2(accumulator, value, index2, object4);
          });
          return accumulator;
        }
        function unset(object3, path2) {
          return object3 == null ? true : baseUnset(object3, path2);
        }
        function update(object3, path2, updater) {
          return object3 == null ? object3 : baseUpdate(object3, path2, castFunction(updater));
        }
        function updateWith(object3, path2, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object3 == null ? object3 : baseUpdate(object3, path2, castFunction(updater), customizer);
        }
        function values(object3) {
          return object3 == null ? [] : baseValues(object3, keys(object3));
        }
        function valuesIn(object3) {
          return object3 == null ? [] : baseValues(object3, keysIn(object3));
        }
        function clamp(number2, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber2(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber2(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber2(number2), lower, upper);
        }
        function inRange(number2, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number2 = toNumber2(number2);
          return baseInRange(number2, start, end);
        }
        function random2(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index2) {
          word = word.toLowerCase();
          return result2 + (index2 ? capitalize(word) : word);
        });
        function capitalize(string2) {
          return upperFirst(toString2(string2).toLowerCase());
        }
        function deburr(string2) {
          string2 = toString2(string2);
          return string2 && string2.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string2, target, position) {
          string2 = toString2(string2);
          target = baseToString(target);
          var length = string2.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string2.slice(position, end) == target;
        }
        function escape(string2) {
          string2 = toString2(string2);
          return string2 && reHasUnescapedHtml.test(string2) ? string2.replace(reUnescapedHtml, escapeHtmlChar) : string2;
        }
        function escapeRegExp(string2) {
          string2 = toString2(string2);
          return string2 && reHasRegExpChar.test(string2) ? string2.replace(reRegExpChar, "\\$&") : string2;
        }
        var kebabCase = createCompounder(function(result2, word, index2) {
          return result2 + (index2 ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index2) {
          return result2 + (index2 ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string2, length, chars) {
          string2 = toString2(string2);
          length = toInteger(length);
          var strLength = length ? stringSize(string2) : 0;
          if (!length || strLength >= length) {
            return string2;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string2 + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string2, length, chars) {
          string2 = toString2(string2);
          length = toInteger(length);
          var strLength = length ? stringSize(string2) : 0;
          return length && strLength < length ? string2 + createPadding(length - strLength, chars) : string2;
        }
        function padStart(string2, length, chars) {
          string2 = toString2(string2);
          length = toInteger(length);
          var strLength = length ? stringSize(string2) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string2 : string2;
        }
        function parseInt2(string2, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString2(string2).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string2, n, guard) {
          if (guard ? isIterateeCall(string2, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString2(string2), n);
        }
        function replace() {
          var args = arguments, string2 = toString2(args[0]);
          return args.length < 3 ? string2 : string2.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index2) {
          return result2 + (index2 ? "_" : "") + word.toLowerCase();
        });
        function split(string2, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string2, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string2 = toString2(string2);
          if (string2 && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string2)) {
              return castSlice(stringToArray(string2), 0, limit);
            }
          }
          return string2.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index2) {
          return result2 + (index2 ? " " : "") + upperFirst(word);
        });
        function startsWith(string2, target, position) {
          string2 = toString2(string2);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string2.length);
          target = baseToString(target);
          return string2.slice(position, position + target.length) == target;
        }
        function template(string2, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string2, options, guard)) {
            options = undefined2;
          }
          string2 = toString2(string2);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index2 = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string2.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string2.slice(index2, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index2 = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString2(value).toLowerCase();
        }
        function toUpper(value) {
          return toString2(value).toUpperCase();
        }
        function trim2(string2, chars, guard) {
          string2 = toString2(string2);
          if (string2 && (guard || chars === undefined2)) {
            return baseTrim(string2);
          }
          if (!string2 || !(chars = baseToString(chars))) {
            return string2;
          }
          var strSymbols = stringToArray(string2), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string2, chars, guard) {
          string2 = toString2(string2);
          if (string2 && (guard || chars === undefined2)) {
            return string2.slice(0, trimmedEndIndex(string2) + 1);
          }
          if (!string2 || !(chars = baseToString(chars))) {
            return string2;
          }
          var strSymbols = stringToArray(string2), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string2, chars, guard) {
          string2 = toString2(string2);
          if (string2 && (guard || chars === undefined2)) {
            return string2.replace(reTrimStart, "");
          }
          if (!string2 || !(chars = baseToString(chars))) {
            return string2;
          }
          var strSymbols = stringToArray(string2), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string2, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject3(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string2 = toString2(string2);
          var strLength = string2.length;
          if (hasUnicode(string2)) {
            var strSymbols = stringToArray(string2);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string2;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string2.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string2.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString2(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string2.indexOf(baseToString(separator), end) != end) {
            var index2 = result2.lastIndexOf(separator);
            if (index2 > -1) {
              result2 = result2.slice(0, index2);
            }
          }
          return result2 + omission;
        }
        function unescape(string2) {
          string2 = toString2(string2);
          return string2 && reHasEscapedHtml.test(string2) ? string2.replace(reEscapedHtml, unescapeHtmlChar) : string2;
        }
        var upperCase = createCompounder(function(result2, word, index2) {
          return result2 + (index2 ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string2, pattern2, guard) {
          string2 = toString2(string2);
          pattern2 = guard ? undefined2 : pattern2;
          if (pattern2 === undefined2) {
            return hasUnicodeWord(string2) ? unicodeWords(string2) : asciiWords(string2);
          }
          return string2.match(pattern2) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object3, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object3, key, bind(object3[key], object3));
          });
          return object3;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index2 = -1;
            while (++index2 < length) {
              var pair = pairs[index2];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path2, srcValue) {
          return baseMatchesProperty(path2, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path2, args) {
          return function(object3) {
            return baseInvoke(object3, path2, args);
          };
        });
        var methodOf = baseRest(function(object3, args) {
          return function(path2) {
            return baseInvoke(object3, path2, args);
          };
        });
        function mixin(object3, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject3(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object3;
            object3 = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject3(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object3);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object3[methodName] = func;
            if (isFunc) {
              object3.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object3(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object3 });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object3, arrayPush([this.value()], arguments));
              };
            }
          });
          return object3;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path2) {
          return isKey(path2) ? baseProperty(toKey(path2)) : basePropertyDeep(path2);
        }
        function propertyOf(object3) {
          return function(path2) {
            return object3 == null ? undefined2 : baseGet(object3, path2);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index2 = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index2 < n) {
            iteratee2(index2);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString2(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString2(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array2) {
          return array2 && array2.length ? baseExtremum(array2, identity, baseGt) : undefined2;
        }
        function maxBy(array2, iteratee2) {
          return array2 && array2.length ? baseExtremum(array2, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array2) {
          return baseMean(array2, identity);
        }
        function meanBy(array2, iteratee2) {
          return baseMean(array2, getIteratee(iteratee2, 2));
        }
        function min(array2) {
          return array2 && array2.length ? baseExtremum(array2, identity, baseLt) : undefined2;
        }
        function minBy(array2, iteratee2) {
          return array2 && array2.length ? baseExtremum(array2, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array2) {
          return array2 && array2.length ? baseSum(array2, identity) : 0;
        }
        function sumBy(array2, iteratee2) {
          return array2 && array2.length ? baseSum(array2, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat3;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create5;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize2;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice3;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union2;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual3;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject3;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject5;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString2;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random2;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size5;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber2;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString2;
        lodash.toUpper = toUpper;
        lodash.trim = trim2;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, (function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        })(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index2) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index2 ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index2) {
          var type2 = index2 + 1, isFilter = type2 == LAZY_FILTER_FLAG || type2 == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type2
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index2) {
          var takeName = "take" + (index2 ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index2) {
          var dropName = "drop" + (index2 ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path2, args) {
          if (typeof path2 == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path2, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      });
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports);
  }
});

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/chunk-MMUBH76A.js
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/context.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/utils/getAction.js
function getAction(client, actionFn, name) {
  const action_implicit = client[actionFn.name];
  if (typeof action_implicit === "function")
    return action_implicit;
  const action_explicit = client[name];
  if (typeof action_explicit === "function")
    return action_explicit;
  return (params) => actionFn(client, params);
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/version.js
var version = "2.22.1";

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/utils/getVersion.js
var getVersion = () => `@wagmi/core@${version}`;

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/errors/base.js
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseError_instances;
var _BaseError_walk;
var BaseError = class _BaseError extends Error {
  get docsBaseUrl() {
    return "https://wagmi.sh/core";
  }
  get version() {
    return getVersion();
  }
  constructor(shortMessage, options = {}) {
    super();
    _BaseError_instances.add(this);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "metaMessages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WagmiCoreError"
    });
    const details = options.cause instanceof _BaseError ? options.cause.details : options.cause?.message ? options.cause.message : options.details;
    const docsPath = options.cause instanceof _BaseError ? options.cause.docsPath || options.docsPath : options.docsPath;
    this.message = [
      shortMessage || "An error occurred.",
      "",
      ...options.metaMessages ? [...options.metaMessages, ""] : [],
      ...docsPath ? [
        `Docs: ${this.docsBaseUrl}${docsPath}.html${options.docsSlug ? `#${options.docsSlug}` : ""}`
      ] : [],
      ...details ? [`Details: ${details}`] : [],
      `Version: ${this.version}`
    ].join("\n");
    if (options.cause)
      this.cause = options.cause;
    this.details = details;
    this.docsPath = docsPath;
    this.metaMessages = options.metaMessages;
    this.shortMessage = shortMessage;
  }
  walk(fn) {
    return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, this, fn);
  }
};
_BaseError_instances = /* @__PURE__ */ new WeakSet(), _BaseError_walk = function _BaseError_walk2(err, fn) {
  if (fn?.(err))
    return err;
  if (err.cause)
    return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk2).call(this, err.cause, fn);
  return err;
};

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/errors/config.js
var ChainNotConfiguredError = class extends BaseError {
  constructor() {
    super("Chain not configured.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ChainNotConfiguredError"
    });
  }
};
var ConnectorAlreadyConnectedError = class extends BaseError {
  constructor() {
    super("Connector already connected.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorAlreadyConnectedError"
    });
  }
};
var ConnectorNotConnectedError = class extends BaseError {
  constructor() {
    super("Connector not connected.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorNotConnectedError"
    });
  }
};
var ConnectorAccountNotFoundError = class extends BaseError {
  constructor({ address, connector }) {
    super(`Account "${address}" not found for connector "${connector.name}".`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorAccountNotFoundError"
    });
  }
};
var ConnectorChainMismatchError = class extends BaseError {
  constructor({ connectionChainId, connectorChainId }) {
    super(`The current chain of the connector (id: ${connectorChainId}) does not match the connection's chain (id: ${connectionChainId}).`, {
      metaMessages: [
        `Current Chain ID:  ${connectorChainId}`,
        `Expected Chain ID: ${connectionChainId}`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorChainMismatchError"
    });
  }
};
var ConnectorUnavailableReconnectingError = class extends BaseError {
  constructor({ connector }) {
    super(`Connector "${connector.name}" unavailable while reconnecting.`, {
      details: [
        "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.",
        "All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.",
        "This error commonly occurs for connectors that asynchronously inject after reconnection has already started."
      ].join(" ")
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorUnavailableReconnectingError"
    });
  }
};

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/connect.js
async function connect(config, parameters) {
  let connector;
  if (typeof parameters.connector === "function") {
    connector = config._internal.connectors.setup(parameters.connector);
  } else
    connector = parameters.connector;
  if (connector.uid === config.state.current)
    throw new ConnectorAlreadyConnectedError();
  try {
    config.setState((x) => ({ ...x, status: "connecting" }));
    connector.emitter.emit("message", { type: "connecting" });
    const { connector: _, ...rest } = parameters;
    const data = await connector.connect(rest);
    connector.emitter.off("connect", config._internal.events.connect);
    connector.emitter.on("change", config._internal.events.change);
    connector.emitter.on("disconnect", config._internal.events.disconnect);
    await config.storage?.setItem("recentConnectorId", connector.id);
    config.setState((x) => ({
      ...x,
      connections: new Map(x.connections).set(connector.uid, {
        accounts: rest.withCapabilities ? data.accounts.map((account) => typeof account === "object" ? account.address : account) : data.accounts,
        chainId: data.chainId,
        connector
      }),
      current: connector.uid,
      status: "connected"
    }));
    return {
      // TODO(v3): Remove `withCapabilities: true` default behavior so remove compat marshalling
      // Workaround so downstream connectors work with `withCapabilities` without any changes required
      accounts: rest.withCapabilities ? data.accounts.map((address) => typeof address === "object" ? address : { address, capabilities: {} }) : data.accounts,
      chainId: data.chainId
    };
  } catch (error) {
    config.setState((x) => ({
      ...x,
      // Keep existing connector connected in case of error
      status: x.current ? "connected" : "disconnected"
    }));
    throw error;
  }
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js
async function getConnectorClient(config, parameters = {}) {
  const { assertChainId = true } = parameters;
  let connection;
  if (parameters.connector) {
    const { connector: connector2 } = parameters;
    if (config.state.status === "reconnecting" && !connector2.getAccounts && !connector2.getChainId)
      throw new ConnectorUnavailableReconnectingError({ connector: connector2 });
    const [accounts, chainId2] = await Promise.all([
      connector2.getAccounts().catch((e) => {
        if (parameters.account === null)
          return [];
        throw e;
      }),
      connector2.getChainId()
    ]);
    connection = {
      accounts,
      chainId: chainId2,
      connector: connector2
    };
  } else
    connection = config.state.connections.get(config.state.current);
  if (!connection)
    throw new ConnectorNotConnectedError();
  const chainId = parameters.chainId ?? connection.chainId;
  const connectorChainId = await connection.connector.getChainId();
  if (assertChainId && connectorChainId !== chainId)
    throw new ConnectorChainMismatchError({
      connectionChainId: chainId,
      connectorChainId
    });
  const connector = connection.connector;
  if (connector.getClient)
    return connector.getClient({ chainId });
  const account = parseAccount(parameters.account ?? connection.accounts[0]);
  if (account)
    account.address = getAddress(account.address);
  if (parameters.account && !connection.accounts.some((x) => x.toLowerCase() === account.address.toLowerCase()))
    throw new ConnectorAccountNotFoundError({
      address: account.address,
      connector
    });
  const chain = config.chains.find((chain2) => chain2.id === chainId);
  const provider = await connection.connector.getProvider({ chainId });
  return createClient({
    account,
    chain,
    name: "Connector Client",
    transport: (opts) => custom(provider)({ ...opts, retryCount: 0 })
  });
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/disconnect.js
async function disconnect(config, parameters = {}) {
  let connector;
  if (parameters.connector)
    connector = parameters.connector;
  else {
    const { connections: connections2, current } = config.state;
    const connection = connections2.get(current);
    connector = connection?.connector;
  }
  const connections = config.state.connections;
  if (connector) {
    await connector.disconnect();
    connector.emitter.off("change", config._internal.events.change);
    connector.emitter.off("disconnect", config._internal.events.disconnect);
    connector.emitter.on("connect", config._internal.events.connect);
    connections.delete(connector.uid);
  }
  config.setState((x) => {
    if (connections.size === 0)
      return {
        ...x,
        connections: /* @__PURE__ */ new Map(),
        current: null,
        status: "disconnected"
      };
    const nextConnection = connections.values().next().value;
    return {
      ...x,
      connections: new Map(connections),
      current: nextConnection.connector.uid
    };
  });
  {
    const current = config.state.current;
    if (!current)
      return;
    const connector2 = config.state.connections.get(current)?.connector;
    if (!connector2)
      return;
    await config.storage?.setItem("recentConnectorId", connector2.id);
  }
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/utils/getUnit.js
function getUnit(unit) {
  if (typeof unit === "number")
    return unit;
  if (unit === "wei")
    return 0;
  return Math.abs(weiUnits[unit]);
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/getAccount.js
function getAccount(config) {
  const uid3 = config.state.current;
  const connection = config.state.connections.get(uid3);
  const addresses = connection?.accounts;
  const address = addresses?.[0];
  const chain = config.chains.find((chain2) => chain2.id === connection?.chainId);
  const status = config.state.status;
  switch (status) {
    case "connected":
      return {
        address,
        addresses,
        chain,
        chainId: connection?.chainId,
        connector: connection?.connector,
        isConnected: true,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: false,
        status
      };
    case "reconnecting":
      return {
        address,
        addresses,
        chain,
        chainId: connection?.chainId,
        connector: connection?.connector,
        isConnected: !!address,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: true,
        status
      };
    case "connecting":
      return {
        address,
        addresses,
        chain,
        chainId: connection?.chainId,
        connector: connection?.connector,
        isConnected: false,
        isConnecting: true,
        isDisconnected: false,
        isReconnecting: false,
        status
      };
    case "disconnected":
      return {
        address: void 0,
        addresses: void 0,
        chain: void 0,
        chainId: void 0,
        connector: void 0,
        isConnected: false,
        isConnecting: false,
        isDisconnected: true,
        isReconnecting: false,
        status
      };
  }
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/multicall.js
async function multicall2(config, parameters) {
  const { allowFailure = true, chainId, contracts, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction(client, multicall, "multicall");
  return action({
    allowFailure,
    contracts,
    ...rest
  });
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/readContract.js
function readContract2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction(client, readContract, "readContract");
  return action(rest);
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/readContracts.js
async function readContracts(config, parameters) {
  const { allowFailure = true, blockNumber, blockTag, ...rest } = parameters;
  const contracts = parameters.contracts;
  try {
    const contractsByChainId = {};
    for (const [index2, contract] of contracts.entries()) {
      const chainId = contract.chainId ?? config.state.chainId;
      if (!contractsByChainId[chainId])
        contractsByChainId[chainId] = [];
      contractsByChainId[chainId]?.push({ contract, index: index2 });
    }
    const promises = () => Object.entries(contractsByChainId).map(([chainId, contracts2]) => multicall2(config, {
      ...rest,
      allowFailure,
      blockNumber,
      blockTag,
      chainId: Number.parseInt(chainId, 10),
      contracts: contracts2.map(({ contract }) => contract)
    }));
    const multicallResults = (await Promise.all(promises())).flat();
    const resultIndexes = Object.values(contractsByChainId).flatMap((contracts2) => contracts2.map(({ index: index2 }) => index2));
    return multicallResults.reduce((results, result, index2) => {
      if (results)
        results[resultIndexes[index2]] = result;
      return results;
    }, []);
  } catch (error) {
    if (error instanceof ContractFunctionExecutionError)
      throw error;
    const promises = () => contracts.map((contract) => readContract2(config, { ...contract, blockNumber, blockTag }));
    if (allowFailure)
      return (await Promise.allSettled(promises())).map((result) => {
        if (result.status === "fulfilled")
          return { result: result.value, status: "success" };
        return { error: result.reason, result: void 0, status: "failure" };
      });
    return await Promise.all(promises());
  }
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/getBalance.js
async function getBalance2(config, parameters) {
  const { address, blockNumber, blockTag, chainId, token: tokenAddress, unit = "ether" } = parameters;
  if (tokenAddress) {
    try {
      return await getTokenBalance(config, {
        balanceAddress: address,
        chainId,
        symbolType: "string",
        tokenAddress
      });
    } catch (error) {
      if (error.name === "ContractFunctionExecutionError") {
        const balance = await getTokenBalance(config, {
          balanceAddress: address,
          chainId,
          symbolType: "bytes32",
          tokenAddress
        });
        const symbol = hexToString(trim(balance.symbol, { dir: "right" }));
        return { ...balance, symbol };
      }
      throw error;
    }
  }
  const client = config.getClient({ chainId });
  const action = getAction(client, getBalance, "getBalance");
  const value = await action(blockNumber ? { address, blockNumber } : { address, blockTag });
  const chain = config.chains.find((x) => x.id === chainId) ?? client.chain;
  return {
    decimals: chain.nativeCurrency.decimals,
    formatted: formatUnits(value, getUnit(unit)),
    symbol: chain.nativeCurrency.symbol,
    value
  };
}
async function getTokenBalance(config, parameters) {
  const { balanceAddress, chainId, symbolType, tokenAddress, unit } = parameters;
  const contract = {
    abi: [
      {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [{ type: "address" }],
        outputs: [{ type: "uint256" }]
      },
      {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint8" }]
      },
      {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: symbolType }]
      }
    ],
    address: tokenAddress
  };
  const [value, decimals, symbol] = await readContracts(config, {
    allowFailure: false,
    contracts: [
      {
        ...contract,
        functionName: "balanceOf",
        args: [balanceAddress],
        chainId
      },
      { ...contract, functionName: "decimals", chainId },
      { ...contract, functionName: "symbol", chainId }
    ]
  });
  const formatted = formatUnits(value ?? "0", getUnit(unit ?? decimals));
  return { decimals, formatted, symbol, value };
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/getChainId.js
function getChainId(config) {
  return config.state.chainId;
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js
function deepEqual(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor)
      return false;
    let length;
    let i;
    if (Array.isArray(a) && Array.isArray(b)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!deepEqual(a[i], b[i]))
          return false;
      return true;
    }
    if (typeof a.valueOf === "function" && a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (typeof a.toString === "function" && a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    const keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.hasOwn(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key && !deepEqual(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/getChains.js
var previousChains = [];
function getChains(config) {
  const chains = config.chains;
  if (deepEqual(previousChains, chains))
    return previousChains;
  previousChains = chains;
  return chains;
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/getConnections.js
var previousConnections = [];
function getConnections(config) {
  const connections = [...config.state.connections.values()];
  if (config.state.status === "reconnecting")
    return previousConnections;
  if (deepEqual(previousConnections, connections))
    return previousConnections;
  previousConnections = connections;
  return connections;
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/getConnectors.js
var previousConnectors = [];
function getConnectors(config) {
  const connectors = config.connectors;
  if (previousConnectors.length === connectors.length && previousConnectors.every((connector, index2) => connector === connectors[index2]))
    return previousConnectors;
  previousConnectors = connectors;
  return connectors;
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/getEnsAvatar.js
function getEnsAvatar2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction(client, getEnsAvatar, "getEnsAvatar");
  return action(rest);
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/getEnsName.js
function getEnsName2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction(client, getEnsName, "getEnsName");
  return action(rest);
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/reconnect.js
var isReconnecting = false;
async function reconnect(config, parameters = {}) {
  if (isReconnecting)
    return [];
  isReconnecting = true;
  config.setState((x) => ({
    ...x,
    status: x.current ? "reconnecting" : "connecting"
  }));
  const connectors = [];
  if (parameters.connectors?.length) {
    for (const connector_ of parameters.connectors) {
      let connector;
      if (typeof connector_ === "function")
        connector = config._internal.connectors.setup(connector_);
      else
        connector = connector_;
      connectors.push(connector);
    }
  } else
    connectors.push(...config.connectors);
  let recentConnectorId;
  try {
    recentConnectorId = await config.storage?.getItem("recentConnectorId");
  } catch {
  }
  const scores = {};
  for (const [, connection] of config.state.connections) {
    scores[connection.connector.id] = 1;
  }
  if (recentConnectorId)
    scores[recentConnectorId] = 0;
  const sorted = Object.keys(scores).length > 0 ? (
    // .toSorted()
    [...connectors].sort((a, b) => (scores[a.id] ?? 10) - (scores[b.id] ?? 10))
  ) : connectors;
  let connected = false;
  const connections = [];
  const providers = [];
  for (const connector of sorted) {
    const provider = await connector.getProvider().catch(() => void 0);
    if (!provider)
      continue;
    if (providers.some((x) => x === provider))
      continue;
    const isAuthorized = await connector.isAuthorized();
    if (!isAuthorized)
      continue;
    const data = await connector.connect({ isReconnecting: true }).catch(() => null);
    if (!data)
      continue;
    connector.emitter.off("connect", config._internal.events.connect);
    connector.emitter.on("change", config._internal.events.change);
    connector.emitter.on("disconnect", config._internal.events.disconnect);
    config.setState((x) => {
      const connections2 = new Map(connected ? x.connections : /* @__PURE__ */ new Map()).set(connector.uid, { accounts: data.accounts, chainId: data.chainId, connector });
      return {
        ...x,
        current: connected ? x.current : connector.uid,
        connections: connections2
      };
    });
    connections.push({
      accounts: data.accounts,
      chainId: data.chainId,
      connector
    });
    providers.push(provider);
    connected = true;
  }
  if (config.state.status === "reconnecting" || config.state.status === "connecting") {
    if (!connected)
      config.setState((x) => ({
        ...x,
        connections: /* @__PURE__ */ new Map(),
        current: null,
        status: "disconnected"
      }));
    else
      config.setState((x) => ({ ...x, status: "connected" }));
  }
  isReconnecting = false;
  return connections;
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/signMessage.js
async function signMessage2(config, parameters) {
  const { account, connector, ...rest } = parameters;
  let client;
  if (typeof account === "object" && account.type === "local")
    client = config.getClient();
  else
    client = await getConnectorClient(config, { account, connector });
  const action = getAction(client, signMessage, "signMessage");
  return action({
    ...rest,
    ...account ? { account } : {}
  });
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/switchAccount.js
async function switchAccount(config, parameters) {
  const { connector } = parameters;
  const connection = config.state.connections.get(connector.uid);
  if (!connection)
    throw new ConnectorNotConnectedError();
  await config.storage?.setItem("recentConnectorId", connector.id);
  config.setState((x) => ({
    ...x,
    current: connector.uid
  }));
  return {
    accounts: connection.accounts,
    chainId: connection.chainId
  };
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/errors/connector.js
var ProviderNotFoundError = class extends BaseError {
  constructor() {
    super("Provider not found.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ProviderNotFoundError"
    });
  }
};
var SwitchChainNotSupportedError = class extends BaseError {
  constructor({ connector }) {
    super(`"${connector.name}" does not support programmatic chain switching.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "SwitchChainNotSupportedError"
    });
  }
};

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/switchChain.js
async function switchChain(config, parameters) {
  const { addEthereumChainParameter, chainId } = parameters;
  const connection = config.state.connections.get(parameters.connector?.uid ?? config.state.current);
  if (connection) {
    const connector = connection.connector;
    if (!connector.switchChain)
      throw new SwitchChainNotSupportedError({ connector });
    const chain2 = await connector.switchChain({
      addEthereumChainParameter,
      chainId
    });
    return chain2;
  }
  const chain = config.chains.find((x) => x.id === chainId);
  if (!chain)
    throw new ChainNotConfiguredError();
  config.setState((x) => ({ ...x, chainId }));
  return chain;
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js
function watchAccount(config, parameters) {
  const { onChange } = parameters;
  return config.subscribe(() => getAccount(config), onChange, {
    equalityFn(a, b) {
      const { connector: aConnector, ...aRest } = a;
      const { connector: bConnector, ...bRest } = b;
      return deepEqual(aRest, bRest) && // check connector separately
      aConnector?.id === bConnector?.id && aConnector?.uid === bConnector?.uid;
    }
  });
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/watchChainId.js
function watchChainId(config, parameters) {
  const { onChange } = parameters;
  return config.subscribe((state) => state.chainId, onChange);
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/watchConnections.js
function watchConnections(config, parameters) {
  const { onChange } = parameters;
  return config.subscribe(() => getConnections(config), onChange, {
    equalityFn: deepEqual
  });
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/watchConnectors.js
function watchConnectors(config, parameters) {
  const { onChange } = parameters;
  return config._internal.connectors.subscribe((connectors, prevConnectors) => {
    onChange(Object.values(connectors), prevConnectors);
  });
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js
function createConnector(createConnectorFn) {
  return createConnectorFn;
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/connectors/injected.js
injected.type = "injected";
function injected(parameters = {}) {
  const { shimDisconnect = true, unstable_shimAsyncInject } = parameters;
  function getTarget() {
    const target = parameters.target;
    if (typeof target === "function") {
      const result = target();
      if (result)
        return result;
    }
    if (typeof target === "object")
      return target;
    if (typeof target === "string")
      return {
        ...targetMap[target] ?? {
          id: target,
          name: `${target[0].toUpperCase()}${target.slice(1)}`,
          provider: `is${target[0].toUpperCase()}${target.slice(1)}`
        }
      };
    return {
      id: "injected",
      name: "Injected",
      provider(window2) {
        return window2?.ethereum;
      }
    };
  }
  let accountsChanged;
  let chainChanged;
  let connect2;
  let disconnect2;
  return createConnector((config) => ({
    get icon() {
      return getTarget().icon;
    },
    get id() {
      return getTarget().id;
    },
    get name() {
      return getTarget().name;
    },
    /** @deprecated */
    get supportsSimulation() {
      return true;
    },
    type: injected.type,
    async setup() {
      const provider = await this.getProvider();
      if (provider?.on && parameters.target) {
        if (!connect2) {
          connect2 = this.onConnect.bind(this);
          provider.on("connect", connect2);
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
      }
    },
    async connect({ chainId, isReconnecting: isReconnecting2, withCapabilities } = {}) {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      let accounts = [];
      if (isReconnecting2)
        accounts = await this.getAccounts().catch(() => []);
      else if (shimDisconnect) {
        try {
          const permissions = await provider.request({
            method: "wallet_requestPermissions",
            params: [{ eth_accounts: {} }]
          });
          accounts = permissions[0]?.caveats?.[0]?.value?.map((x) => getAddress(x));
          if (accounts.length > 0) {
            const sortedAccounts = await this.getAccounts();
            accounts = sortedAccounts;
          }
        } catch (err) {
          const error = err;
          if (error.code === UserRejectedRequestError.code)
            throw new UserRejectedRequestError(error);
          if (error.code === ResourceUnavailableRpcError.code)
            throw error;
        }
      }
      try {
        if (!accounts?.length && !isReconnecting2) {
          const requestedAccounts = await provider.request({
            method: "eth_requestAccounts"
          });
          accounts = requestedAccounts.map((x) => getAddress(x));
        }
        if (connect2) {
          provider.removeListener("connect", connect2);
          connect2 = void 0;
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider.on("chainChanged", chainChanged);
        }
        if (!disconnect2) {
          disconnect2 = this.onDisconnect.bind(this);
          provider.on("disconnect", disconnect2);
        }
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code)
              throw error;
            return { id: currentChainId };
          });
          currentChainId = chain?.id ?? currentChainId;
        }
        if (shimDisconnect)
          await config.storage?.removeItem(`${this.id}.disconnected`);
        if (!parameters.target)
          await config.storage?.setItem("injected.connected", true);
        return {
          accounts: withCapabilities ? accounts.map((address) => ({ address, capabilities: {} })) : accounts,
          chainId: currentChainId
        };
      } catch (err) {
        const error = err;
        if (error.code === UserRejectedRequestError.code)
          throw new UserRejectedRequestError(error);
        if (error.code === ResourceUnavailableRpcError.code)
          throw new ResourceUnavailableRpcError(error);
        throw error;
      }
    },
    async disconnect() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect2) {
        provider.removeListener("disconnect", disconnect2);
        disconnect2 = void 0;
      }
      if (!connect2) {
        connect2 = this.onConnect.bind(this);
        provider.on("connect", connect2);
      }
      try {
        await withTimeout(() => (
          // TODO: Remove explicit type for viem@3
          provider.request({
            // `'wallet_revokePermissions'` added in `viem@2.10.3`
            method: "wallet_revokePermissions",
            params: [{ eth_accounts: {} }]
          })
        ), { timeout: 100 });
      } catch {
      }
      if (shimDisconnect) {
        await config.storage?.setItem(`${this.id}.disconnected`, true);
      }
      if (!parameters.target)
        await config.storage?.removeItem("injected.connected");
    },
    async getAccounts() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      const accounts = await provider.request({ method: "eth_accounts" });
      return accounts.map((x) => getAddress(x));
    },
    async getChainId() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      const hexChainId = await provider.request({ method: "eth_chainId" });
      return Number(hexChainId);
    },
    async getProvider() {
      if (typeof window === "undefined")
        return void 0;
      let provider;
      const target = getTarget();
      if (typeof target.provider === "function")
        provider = target.provider(window);
      else if (typeof target.provider === "string")
        provider = findProvider(window, target.provider);
      else
        provider = target.provider;
      if (provider && !provider.removeListener) {
        if ("off" in provider && typeof provider.off === "function")
          provider.removeListener = provider.off;
        else
          provider.removeListener = () => {
          };
      }
      return provider;
    },
    async isAuthorized() {
      try {
        const isDisconnected = shimDisconnect && // If shim exists in storage, connector is disconnected
        await config.storage?.getItem(`${this.id}.disconnected`);
        if (isDisconnected)
          return false;
        if (!parameters.target) {
          const connected = await config.storage?.getItem("injected.connected");
          if (!connected)
            return false;
        }
        const provider = await this.getProvider();
        if (!provider) {
          if (unstable_shimAsyncInject !== void 0 && unstable_shimAsyncInject !== false) {
            const handleEthereum = async () => {
              if (typeof window !== "undefined")
                window.removeEventListener("ethereum#initialized", handleEthereum);
              const provider2 = await this.getProvider();
              return !!provider2;
            };
            const timeout = typeof unstable_shimAsyncInject === "number" ? unstable_shimAsyncInject : 1e3;
            const res = await Promise.race([
              ...typeof window !== "undefined" ? [
                new Promise((resolve) => window.addEventListener("ethereum#initialized", () => resolve(handleEthereum()), { once: true }))
              ] : [],
              new Promise((resolve) => setTimeout(() => resolve(handleEthereum()), timeout))
            ]);
            if (res)
              return true;
          }
          throw new ProviderNotFoundError();
        }
        const accounts = await withRetry(() => this.getAccounts());
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    async switchChain({ addEthereumChainParameter, chainId }) {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      const chain = config.chains.find((x) => x.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      const promise = new Promise((resolve) => {
        const listener = ((data) => {
          if ("chainId" in data && data.chainId === chainId) {
            config.emitter.off("change", listener);
            resolve();
          }
        });
        config.emitter.on("change", listener);
      });
      try {
        await Promise.all([
          provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: numberToHex(chainId) }]
          }).then(async () => {
            const currentChainId = await this.getChainId();
            if (currentChainId === chainId)
              config.emitter.emit("change", { chainId });
          }),
          promise
        ]);
        return chain;
      } catch (err) {
        const error = err;
        if (error.code === 4902 || // Unwrapping for MetaMask Mobile
        // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
        error?.data?.originalError?.code === 4902) {
          try {
            const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
            let blockExplorerUrls;
            if (addEthereumChainParameter?.blockExplorerUrls)
              blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
            else if (blockExplorer)
              blockExplorerUrls = [
                blockExplorer.url,
                ...Object.values(blockExplorers).map((x) => x.url)
              ];
            let rpcUrls;
            if (addEthereumChainParameter?.rpcUrls?.length)
              rpcUrls = addEthereumChainParameter.rpcUrls;
            else
              rpcUrls = [chain.rpcUrls.default?.http[0] ?? ""];
            const addEthereumChain = {
              blockExplorerUrls,
              chainId: numberToHex(chainId),
              chainName: addEthereumChainParameter?.chainName ?? chain.name,
              iconUrls: addEthereumChainParameter?.iconUrls,
              nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
              rpcUrls
            };
            await Promise.all([
              provider.request({
                method: "wallet_addEthereumChain",
                params: [addEthereumChain]
              }).then(async () => {
                const currentChainId = await this.getChainId();
                if (currentChainId === chainId)
                  config.emitter.emit("change", { chainId });
                else
                  throw new UserRejectedRequestError(new Error("User rejected switch after adding network."));
              }),
              promise
            ]);
            return chain;
          } catch (error2) {
            throw new UserRejectedRequestError(error2);
          }
        }
        if (error.code === UserRejectedRequestError.code)
          throw new UserRejectedRequestError(error);
        throw new SwitchChainError(error);
      }
    },
    async onAccountsChanged(accounts) {
      if (accounts.length === 0)
        this.onDisconnect();
      else if (config.emitter.listenerCount("connect")) {
        const chainId = (await this.getChainId()).toString();
        this.onConnect({ chainId });
        if (shimDisconnect)
          await config.storage?.removeItem(`${this.id}.disconnected`);
      } else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onConnect(connectInfo) {
      const accounts = await this.getAccounts();
      if (accounts.length === 0)
        return;
      const chainId = Number(connectInfo.chainId);
      config.emitter.emit("connect", { accounts, chainId });
      const provider = await this.getProvider();
      if (provider) {
        if (connect2) {
          provider.removeListener("connect", connect2);
          connect2 = void 0;
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider.on("chainChanged", chainChanged);
        }
        if (!disconnect2) {
          disconnect2 = this.onDisconnect.bind(this);
          provider.on("disconnect", disconnect2);
        }
      }
    },
    async onDisconnect(error) {
      const provider = await this.getProvider();
      if (error && error.code === 1013) {
        if (provider && !!(await this.getAccounts()).length)
          return;
      }
      config.emitter.emit("disconnect");
      if (provider) {
        if (chainChanged) {
          provider.removeListener("chainChanged", chainChanged);
          chainChanged = void 0;
        }
        if (disconnect2) {
          provider.removeListener("disconnect", disconnect2);
          disconnect2 = void 0;
        }
        if (!connect2) {
          connect2 = this.onConnect.bind(this);
          provider.on("connect", connect2);
        }
      }
    }
  }));
}
var targetMap = {
  coinbaseWallet: {
    id: "coinbaseWallet",
    name: "Coinbase Wallet",
    provider(window2) {
      if (window2?.coinbaseWalletExtension)
        return window2.coinbaseWalletExtension;
      return findProvider(window2, "isCoinbaseWallet");
    }
  },
  metaMask: {
    id: "metaMask",
    name: "MetaMask",
    provider(window2) {
      return findProvider(window2, (provider) => {
        if (!provider.isMetaMask)
          return false;
        if (provider.isBraveWallet && !provider._events && !provider._state)
          return false;
        const flags = [
          "isApexWallet",
          "isAvalanche",
          "isBitKeep",
          "isBlockWallet",
          "isKuCoinWallet",
          "isMathWallet",
          "isOkxWallet",
          "isOKExWallet",
          "isOneInchIOSWallet",
          "isOneInchAndroidWallet",
          "isOpera",
          "isPhantom",
          "isPortal",
          "isRabby",
          "isTokenPocket",
          "isTokenary",
          "isUniswapWallet",
          "isZerion"
        ];
        for (const flag of flags)
          if (provider[flag])
            return false;
        return true;
      });
    }
  },
  phantom: {
    id: "phantom",
    name: "Phantom",
    provider(window2) {
      if (window2?.phantom?.ethereum)
        return window2.phantom?.ethereum;
      return findProvider(window2, "isPhantom");
    }
  }
};
function findProvider(window2, select) {
  function isProvider(provider) {
    if (typeof select === "function")
      return select(provider);
    if (typeof select === "string")
      return provider[select];
    return true;
  }
  const ethereum = window2.ethereum;
  if (ethereum?.providers)
    return ethereum.providers.find((provider) => isProvider(provider));
  if (ethereum && isProvider(ethereum))
    return ethereum;
  return void 0;
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/connectors/mock.js
mock.type = "mock";
function mock(parameters) {
  const transactionCache = /* @__PURE__ */ new Map();
  const features = parameters.features ?? { defaultConnected: false };
  let connected = features.defaultConnected;
  let connectedChainId;
  return createConnector((config) => ({
    id: "mock",
    name: "Mock Connector",
    type: mock.type,
    async setup() {
      connectedChainId = config.chains[0].id;
    },
    async connect({ chainId, withCapabilities } = {}) {
      if (features.connectError) {
        if (typeof features.connectError === "boolean")
          throw new UserRejectedRequestError(new Error("Failed to connect."));
        throw features.connectError;
      }
      const provider = await this.getProvider();
      const accounts = await provider.request({
        method: "eth_requestAccounts"
      });
      let currentChainId = await this.getChainId();
      if (chainId && currentChainId !== chainId) {
        const chain = await this.switchChain({ chainId });
        currentChainId = chain.id;
      }
      connected = true;
      return {
        accounts: withCapabilities ? accounts.map((x) => ({
          address: getAddress(x),
          capabilities: { foo: { bar: x } }
        })) : accounts.map((x) => getAddress(x)),
        chainId: currentChainId
      };
    },
    async disconnect() {
      connected = false;
    },
    async getAccounts() {
      if (!connected)
        throw new ConnectorNotConnectedError();
      const provider = await this.getProvider();
      const accounts = await provider.request({ method: "eth_accounts" });
      return accounts.map((x) => getAddress(x));
    },
    async getChainId() {
      const provider = await this.getProvider();
      const hexChainId = await provider.request({ method: "eth_chainId" });
      return fromHex(hexChainId, "number");
    },
    async isAuthorized() {
      if (!features.reconnect)
        return false;
      if (!connected)
        return false;
      const accounts = await this.getAccounts();
      return !!accounts.length;
    },
    async switchChain({ chainId }) {
      const provider = await this.getProvider();
      const chain = config.chains.find((x) => x.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: numberToHex(chainId) }]
      });
      return chain;
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0)
        this.onDisconnect();
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onDisconnect(_error) {
      config.emitter.emit("disconnect");
      connected = false;
    },
    async getProvider({ chainId } = {}) {
      const chain = config.chains.find((x) => x.id === chainId) ?? config.chains[0];
      const url = chain.rpcUrls.default.http[0];
      const request = async ({ method, params }) => {
        if (method === "eth_chainId")
          return numberToHex(connectedChainId);
        if (method === "eth_requestAccounts")
          return parameters.accounts;
        if (method === "eth_signTypedData_v4") {
          if (features.signTypedDataError) {
            if (typeof features.signTypedDataError === "boolean")
              throw new UserRejectedRequestError(new Error("Failed to sign typed data."));
            throw features.signTypedDataError;
          }
        }
        if (method === "wallet_switchEthereumChain") {
          if (features.switchChainError) {
            if (typeof features.switchChainError === "boolean")
              throw new UserRejectedRequestError(new Error("Failed to switch chain."));
            throw features.switchChainError;
          }
          connectedChainId = fromHex(params[0].chainId, "number");
          this.onChainChanged(connectedChainId.toString());
          return;
        }
        if (method === "wallet_watchAsset") {
          if (features.watchAssetError) {
            if (typeof features.watchAssetError === "boolean")
              throw new UserRejectedRequestError(new Error("Failed to switch chain."));
            throw features.watchAssetError;
          }
          return connected;
        }
        if (method === "wallet_getCapabilities")
          return {
            "0x2105": {
              paymasterService: {
                supported: params[0] === "0x95132632579b073D12a6673e18Ab05777a6B86f8"
              },
              sessionKeys: {
                supported: true
              }
            },
            "0x14A34": {
              paymasterService: {
                supported: params[0] === "0x95132632579b073D12a6673e18Ab05777a6B86f8"
              }
            }
          };
        if (method === "wallet_sendCalls") {
          const hashes = [];
          const calls = params[0].calls;
          const from8 = params[0].from;
          for (const call3 of calls) {
            const { result: result2, error: error2 } = await rpc.http(url, {
              body: {
                method: "eth_sendTransaction",
                params: [
                  {
                    ...call3,
                    ...typeof from8 !== "undefined" ? { from: from8 } : {}
                  }
                ]
              }
            });
            if (error2)
              throw new RpcRequestError({
                body: { method, params },
                error: error2,
                url
              });
            hashes.push(result2);
          }
          const id = keccak256(stringToHex(JSON.stringify(calls)));
          transactionCache.set(id, hashes);
          return { id };
        }
        if (method === "wallet_getCallsStatus") {
          const hashes = transactionCache.get(params[0]);
          if (!hashes)
            return {
              atomic: false,
              chainId: "0x1",
              id: params[0],
              status: 100,
              receipts: [],
              version: "2.0.0"
            };
          const receipts = await Promise.all(hashes.map(async (hash) => {
            const { result: result2, error: error2 } = await rpc.http(url, {
              body: {
                method: "eth_getTransactionReceipt",
                params: [hash],
                id: 0
              }
            });
            if (error2)
              throw new RpcRequestError({
                body: { method, params },
                error: error2,
                url
              });
            if (!result2)
              return null;
            return {
              blockHash: result2.blockHash,
              blockNumber: result2.blockNumber,
              gasUsed: result2.gasUsed,
              logs: result2.logs,
              status: result2.status,
              transactionHash: result2.transactionHash
            };
          }));
          const receipts_ = receipts.filter((x) => x !== null);
          if (receipts_.length === 0)
            return {
              atomic: false,
              chainId: "0x1",
              id: params[0],
              status: 100,
              receipts: [],
              version: "2.0.0"
            };
          return {
            atomic: false,
            chainId: "0x1",
            id: params[0],
            status: 200,
            receipts: receipts_,
            version: "2.0.0"
          };
        }
        if (method === "wallet_showCallsStatus")
          return;
        if (method === "personal_sign") {
          if (features.signMessageError) {
            if (typeof features.signMessageError === "boolean")
              throw new UserRejectedRequestError(new Error("Failed to sign message."));
            throw features.signMessageError;
          }
          method = "eth_sign";
          params = [params[1], params[0]];
        }
        const body = { method, params };
        const { error, result } = await rpc.http(url, { body });
        if (error)
          throw new RpcRequestError({ body, error, url });
        return result;
      };
      return custom({ request })({ retryCount: 0 });
    }
  }));
}

// node_modules/.pnpm/zustand@5.0.0_@types+react@19.2.7_react@19.2.1_use-sync-external-store@1.4.0_react@19.2.1_/node_modules/zustand/esm/middleware.mjs
var subscribeWithSelectorImpl = (fn) => (set, get, api) => {
  const origSubscribe = api.subscribe;
  api.subscribe = (selector, optListener, options) => {
    let listener = selector;
    if (optListener) {
      const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
      let currentSlice = selector(api.getState());
      listener = (state) => {
        const nextSlice = selector(state);
        if (!equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          optListener(currentSlice = nextSlice, previousSlice);
        }
      };
      if (options == null ? void 0 : options.fireImmediately) {
        optListener(currentSlice, currentSlice);
      }
    }
    return origSubscribe(listener);
  };
  const initialState = fn(set, get, api);
  return initialState;
};
var subscribeWithSelector = subscribeWithSelectorImpl;
function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (e) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse2 = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, options == null ? void 0 : options.reviver);
      };
      const str = (_a = storage.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse2);
      }
      return parse2(str);
    },
    setItem: (name, newValue) => storage.setItem(
      name,
      JSON.stringify(newValue, options == null ? void 0 : options.replacer)
    ),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
var toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
var persistImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate2 = () => {
    var _a, _b;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a2;
      return cb((_a2 = get()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return [
              true,
              options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version
              )
            ];
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, void 0];
    }).then((migrationResult) => {
      var _a2;
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate2(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate2();
  }
  return stateFromStorage || configResult;
};
var persist = persistImpl;

// node_modules/.pnpm/zustand@5.0.0_@types+react@19.2.7_react@19.2.1_use-sync-external-store@1.4.0_react@19.2.1_/node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
var createStore3 = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/createEmitter.js
var Emitter = class {
  constructor(uid3) {
    Object.defineProperty(this, "uid", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: uid3
    });
    Object.defineProperty(this, "_emitter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new import_index.default()
    });
  }
  on(eventName, fn) {
    this._emitter.on(eventName, fn);
  }
  once(eventName, fn) {
    this._emitter.once(eventName, fn);
  }
  off(eventName, fn) {
    this._emitter.off(eventName, fn);
  }
  emit(eventName, ...params) {
    const data = params[0];
    this._emitter.emit(eventName, { uid: this.uid, ...data });
  }
  listenerCount(eventName) {
    return this._emitter.listenerCount(eventName);
  }
};
function createEmitter(uid3) {
  return new Emitter(uid3);
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/utils/deserialize.js
function deserialize(value, reviver) {
  return JSON.parse(value, (key, value_) => {
    let value2 = value_;
    if (value2?.__type === "bigint")
      value2 = BigInt(value2.value);
    if (value2?.__type === "Map")
      value2 = new Map(value2.value);
    return reviver?.(key, value2) ?? value2;
  });
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/utils/serialize.js
function getReferenceKey(keys, cutoff) {
  return keys.slice(0, cutoff).join(".") || ".";
}
function getCutoff(array2, value) {
  const { length } = array2;
  for (let index2 = 0; index2 < length; ++index2) {
    if (array2[index2] === value) {
      return index2 + 1;
    }
  }
  return 0;
}
function createReplacer(replacer, circularReplacer) {
  const hasReplacer = typeof replacer === "function";
  const hasCircularReplacer = typeof circularReplacer === "function";
  const cache = [];
  const keys = [];
  return function replace(key, value) {
    if (typeof value === "object") {
      if (cache.length) {
        const thisCutoff = getCutoff(cache, this);
        if (thisCutoff === 0) {
          cache[cache.length] = this;
        } else {
          cache.splice(thisCutoff);
          keys.splice(thisCutoff);
        }
        keys[keys.length] = key;
        const valueCutoff = getCutoff(cache, value);
        if (valueCutoff !== 0) {
          return hasCircularReplacer ? circularReplacer.call(this, key, value, getReferenceKey(keys, valueCutoff)) : `[ref=${getReferenceKey(keys, valueCutoff)}]`;
        }
      } else {
        cache[0] = value;
        keys[0] = key;
      }
    }
    return hasReplacer ? replacer.call(this, key, value) : value;
  };
}
function serialize(value, replacer, indent, circularReplacer) {
  return JSON.stringify(value, createReplacer((key, value_) => {
    let value2 = value_;
    if (typeof value2 === "bigint")
      value2 = { __type: "bigint", value: value_.toString() };
    if (value2 instanceof Map)
      value2 = { __type: "Map", value: Array.from(value_.entries()) };
    return replacer?.(key, value2) ?? value2;
  }, circularReplacer), indent ?? void 0);
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/createStorage.js
function createStorage(parameters) {
  const { deserialize: deserialize2 = deserialize, key: prefix = "wagmi", serialize: serialize2 = serialize, storage = noopStorage } = parameters;
  function unwrap(value) {
    if (value instanceof Promise)
      return value.then((x) => x).catch(() => null);
    return value;
  }
  return {
    ...storage,
    key: prefix,
    async getItem(key, defaultValue) {
      const value = storage.getItem(`${prefix}.${key}`);
      const unwrapped = await unwrap(value);
      if (unwrapped)
        return deserialize2(unwrapped) ?? null;
      return defaultValue ?? null;
    },
    async setItem(key, value) {
      const storageKey = `${prefix}.${key}`;
      if (value === null)
        await unwrap(storage.removeItem(storageKey));
      else
        await unwrap(storage.setItem(storageKey, serialize2(value)));
    },
    async removeItem(key) {
      await unwrap(storage.removeItem(`${prefix}.${key}`));
    }
  };
}
var noopStorage = {
  getItem: () => null,
  setItem: () => {
  },
  removeItem: () => {
  }
};
function getDefaultStorage() {
  const storage = (() => {
    if (typeof window !== "undefined" && window.localStorage)
      return window.localStorage;
    return noopStorage;
  })();
  return {
    getItem(key) {
      return storage.getItem(key);
    },
    removeItem(key) {
      storage.removeItem(key);
    },
    setItem(key, value) {
      try {
        storage.setItem(key, value);
      } catch {
      }
    }
  };
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/utils/uid.js
var size = 256;
var index = size;
var buffer;
function uid(length = 11) {
  if (!buffer || index + length > size * 2) {
    buffer = "";
    index = 0;
    for (let i = 0; i < size; i++) {
      buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
    }
  }
  return buffer.substring(index, index++ + length);
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/createConfig.js
function createConfig(parameters) {
  const { multiInjectedProviderDiscovery = true, storage = createStorage({
    storage: getDefaultStorage()
  }), syncConnectedChain = true, ssr = false, ...rest } = parameters;
  const mipd = typeof window !== "undefined" && multiInjectedProviderDiscovery ? createStore2() : void 0;
  const chains = createStore3(() => rest.chains);
  const connectors = createStore3(() => {
    const collection = [];
    const rdnsSet = /* @__PURE__ */ new Set();
    for (const connectorFns of rest.connectors ?? []) {
      const connector = setup(connectorFns);
      collection.push(connector);
      if (!ssr && connector.rdns) {
        const rdnsValues = typeof connector.rdns === "string" ? [connector.rdns] : connector.rdns;
        for (const rdns of rdnsValues) {
          rdnsSet.add(rdns);
        }
      }
    }
    if (!ssr && mipd) {
      const providers = mipd.getProviders();
      for (const provider of providers) {
        if (rdnsSet.has(provider.info.rdns))
          continue;
        collection.push(setup(providerDetailToConnector(provider)));
      }
    }
    return collection;
  });
  function setup(connectorFn) {
    const emitter = createEmitter(uid());
    const connector = {
      ...connectorFn({
        emitter,
        chains: chains.getState(),
        storage,
        transports: rest.transports
      }),
      emitter,
      uid: emitter.uid
    };
    emitter.on("connect", connect2);
    connector.setup?.();
    return connector;
  }
  function providerDetailToConnector(providerDetail) {
    const { info } = providerDetail;
    const provider = providerDetail.provider;
    return injected({ target: { ...info, id: info.rdns, provider } });
  }
  const clients = /* @__PURE__ */ new Map();
  function getClient2(config = {}) {
    const chainId = config.chainId ?? store.getState().chainId;
    const chain = chains.getState().find((x) => x.id === chainId);
    if (config.chainId && !chain)
      throw new ChainNotConfiguredError();
    {
      const client2 = clients.get(store.getState().chainId);
      if (client2 && !chain)
        return client2;
      if (!chain)
        throw new ChainNotConfiguredError();
    }
    {
      const client2 = clients.get(chainId);
      if (client2)
        return client2;
    }
    let client;
    if (rest.client)
      client = rest.client({ chain });
    else {
      const chainId2 = chain.id;
      const chainIds = chains.getState().map((x) => x.id);
      const properties = {};
      const entries = Object.entries(rest);
      for (const [key, value] of entries) {
        if (key === "chains" || key === "client" || key === "connectors" || key === "transports")
          continue;
        if (typeof value === "object") {
          if (chainId2 in value)
            properties[key] = value[chainId2];
          else {
            const hasChainSpecificValue = chainIds.some((x) => x in value);
            if (hasChainSpecificValue)
              continue;
            properties[key] = value;
          }
        } else
          properties[key] = value;
      }
      client = createClient({
        ...properties,
        chain,
        batch: properties.batch ?? { multicall: true },
        transport: (parameters2) => rest.transports[chainId2]({ ...parameters2, connectors })
      });
    }
    clients.set(chainId, client);
    return client;
  }
  function getInitialState() {
    return {
      chainId: chains.getState()[0].id,
      connections: /* @__PURE__ */ new Map(),
      current: null,
      status: "disconnected"
    };
  }
  let currentVersion;
  const prefix = "0.0.0-canary-";
  if (version.startsWith(prefix))
    currentVersion = Number.parseInt(version.replace(prefix, ""), 10);
  else
    currentVersion = Number.parseInt(version.split(".")[0] ?? "0", 10);
  const store = createStore3(subscribeWithSelector(
    // only use persist middleware if storage exists
    storage ? persist(getInitialState, {
      migrate(persistedState, version6) {
        if (version6 === currentVersion)
          return persistedState;
        const initialState = getInitialState();
        const chainId = validatePersistedChainId(persistedState, initialState.chainId);
        return { ...initialState, chainId };
      },
      name: "store",
      partialize(state) {
        return {
          connections: {
            __type: "Map",
            value: Array.from(state.connections.entries()).map(([key, connection]) => {
              const { id, name, type: type2, uid: uid3 } = connection.connector;
              const connector = { id, name, type: type2, uid: uid3 };
              return [key, { ...connection, connector }];
            })
          },
          chainId: state.chainId,
          current: state.current
        };
      },
      merge(persistedState, currentState) {
        if (typeof persistedState === "object" && persistedState && "status" in persistedState)
          delete persistedState.status;
        const chainId = validatePersistedChainId(persistedState, currentState.chainId);
        return {
          ...currentState,
          ...persistedState,
          chainId
        };
      },
      skipHydration: ssr,
      storage,
      version: currentVersion
    }) : getInitialState
  ));
  store.setState(getInitialState());
  function validatePersistedChainId(persistedState, defaultChainId) {
    return persistedState && typeof persistedState === "object" && "chainId" in persistedState && typeof persistedState.chainId === "number" && chains.getState().some((x) => x.id === persistedState.chainId) ? persistedState.chainId : defaultChainId;
  }
  if (syncConnectedChain)
    store.subscribe(({ connections, current }) => current ? connections.get(current)?.chainId : void 0, (chainId) => {
      const isChainConfigured = chains.getState().some((x) => x.id === chainId);
      if (!isChainConfigured)
        return;
      return store.setState((x) => ({
        ...x,
        chainId: chainId ?? x.chainId
      }));
    });
  mipd?.subscribe((providerDetails) => {
    const connectorIdSet = /* @__PURE__ */ new Set();
    const connectorRdnsSet = /* @__PURE__ */ new Set();
    for (const connector of connectors.getState()) {
      connectorIdSet.add(connector.id);
      if (connector.rdns) {
        const rdnsValues = typeof connector.rdns === "string" ? [connector.rdns] : connector.rdns;
        for (const rdns of rdnsValues) {
          connectorRdnsSet.add(rdns);
        }
      }
    }
    const newConnectors = [];
    for (const providerDetail of providerDetails) {
      if (connectorRdnsSet.has(providerDetail.info.rdns))
        continue;
      const connector = setup(providerDetailToConnector(providerDetail));
      if (connectorIdSet.has(connector.id))
        continue;
      newConnectors.push(connector);
    }
    if (storage && !store.persist.hasHydrated())
      return;
    connectors.setState((x) => [...x, ...newConnectors], true);
  });
  function change(data) {
    store.setState((x) => {
      const connection = x.connections.get(data.uid);
      if (!connection)
        return x;
      return {
        ...x,
        connections: new Map(x.connections).set(data.uid, {
          accounts: data.accounts ?? connection.accounts,
          chainId: data.chainId ?? connection.chainId,
          connector: connection.connector
        })
      };
    });
  }
  function connect2(data) {
    if (store.getState().status === "connecting" || store.getState().status === "reconnecting")
      return;
    store.setState((x) => {
      const connector = connectors.getState().find((x2) => x2.uid === data.uid);
      if (!connector)
        return x;
      if (connector.emitter.listenerCount("connect"))
        connector.emitter.off("connect", change);
      if (!connector.emitter.listenerCount("change"))
        connector.emitter.on("change", change);
      if (!connector.emitter.listenerCount("disconnect"))
        connector.emitter.on("disconnect", disconnect2);
      return {
        ...x,
        connections: new Map(x.connections).set(data.uid, {
          accounts: data.accounts,
          chainId: data.chainId,
          connector
        }),
        current: data.uid,
        status: "connected"
      };
    });
  }
  function disconnect2(data) {
    store.setState((x) => {
      const connection = x.connections.get(data.uid);
      if (connection) {
        const connector = connection.connector;
        if (connector.emitter.listenerCount("change"))
          connection.connector.emitter.off("change", change);
        if (connector.emitter.listenerCount("disconnect"))
          connection.connector.emitter.off("disconnect", disconnect2);
        if (!connector.emitter.listenerCount("connect"))
          connection.connector.emitter.on("connect", connect2);
      }
      x.connections.delete(data.uid);
      if (x.connections.size === 0)
        return {
          ...x,
          connections: /* @__PURE__ */ new Map(),
          current: null,
          status: "disconnected"
        };
      const nextConnection = x.connections.values().next().value;
      return {
        ...x,
        connections: new Map(x.connections),
        current: nextConnection.connector.uid
      };
    });
  }
  return {
    get chains() {
      return chains.getState();
    },
    get connectors() {
      return connectors.getState();
    },
    storage,
    getClient: getClient2,
    get state() {
      return store.getState();
    },
    setState(value) {
      let newState;
      if (typeof value === "function")
        newState = value(store.getState());
      else
        newState = value;
      const initialState = getInitialState();
      if (typeof newState !== "object")
        newState = initialState;
      const isCorrupt = Object.keys(initialState).some((x) => !(x in newState));
      if (isCorrupt)
        newState = initialState;
      store.setState(newState, true);
    },
    subscribe(selector, listener, options) {
      return store.subscribe(selector, listener, options ? {
        ...options,
        fireImmediately: options.emitImmediately
        // Workaround cast since Zustand does not support `'exactOptionalPropertyTypes'`
      } : void 0);
    },
    _internal: {
      mipd,
      async revalidate() {
        const state = store.getState();
        const connections = state.connections;
        let current = state.current;
        for (const [, connection] of connections) {
          const connector = connection.connector;
          const isAuthorized = connector.isAuthorized ? await connector.isAuthorized() : false;
          if (isAuthorized)
            continue;
          connections.delete(connector.uid);
          if (current === connector.uid)
            current = null;
        }
        store.setState((x) => ({ ...x, connections, current }));
      },
      store,
      ssr: Boolean(ssr),
      syncConnectedChain,
      transports: rest.transports,
      chains: {
        setState(value) {
          const nextChains = typeof value === "function" ? value(chains.getState()) : value;
          if (nextChains.length === 0)
            return;
          return chains.setState(nextChains, true);
        },
        subscribe(listener) {
          return chains.subscribe(listener);
        }
      },
      connectors: {
        providerDetailToConnector,
        setup,
        setState(value) {
          return connectors.setState(typeof value === "function" ? value(connectors.getState()) : value, true);
        },
        subscribe(listener) {
          return connectors.subscribe(listener);
        }
      },
      events: { change, connect: connect2, disconnect: disconnect2 }
    }
  };
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/hydrate.js
function hydrate(config, parameters) {
  const { initialState, reconnectOnMount } = parameters;
  if (initialState && !config._internal.store.persist.hasHydrated())
    config.setState({
      ...initialState,
      chainId: config.chains.some((x) => x.id === initialState.chainId) ? initialState.chainId : config.chains[0].id,
      connections: reconnectOnMount ? initialState.connections : /* @__PURE__ */ new Map(),
      status: reconnectOnMount ? "reconnecting" : "disconnected"
    });
  return {
    async onMount() {
      if (config._internal.ssr) {
        await config._internal.store.persist.rehydrate();
        if (config._internal.mipd) {
          config._internal.connectors.setState((connectors) => {
            const rdnsSet = /* @__PURE__ */ new Set();
            for (const connector of connectors ?? []) {
              if (connector.rdns) {
                const rdnsValues = Array.isArray(connector.rdns) ? connector.rdns : [connector.rdns];
                for (const rdns of rdnsValues) {
                  rdnsSet.add(rdns);
                }
              }
            }
            const mipdConnectors = [];
            const providers = config._internal.mipd?.getProviders() ?? [];
            for (const provider of providers) {
              if (rdnsSet.has(provider.info.rdns))
                continue;
              const connectorFn = config._internal.connectors.providerDetailToConnector(provider);
              const connector = config._internal.connectors.setup(connectorFn);
              mipdConnectors.push(connector);
            }
            return [...connectors, ...mipdConnectors];
          });
        }
      }
      if (reconnectOnMount)
        reconnect(config);
      else if (config.storage)
        config.setState((x) => ({
          ...x,
          connections: /* @__PURE__ */ new Map()
        }));
    }
  };
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/utils/extractRpcUrls.js
function extractRpcUrls(parameters) {
  const { chain } = parameters;
  const fallbackUrl = chain.rpcUrls.default.http[0];
  if (!parameters.transports)
    return [fallbackUrl];
  const transport = parameters.transports?.[chain.id]?.({ chain });
  const transports = transport?.value?.transports || [transport];
  return transports.map(({ value }) => value?.url || fallbackUrl);
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hydrate.js
var import_react = __toESM(require_react(), 1);
function Hydrate(parameters) {
  const { children, config, initialState, reconnectOnMount = true } = parameters;
  const { onMount } = hydrate(config, {
    initialState,
    reconnectOnMount
  });
  if (!config._internal.ssr)
    onMount();
  const active = (0, import_react.useRef)(true);
  (0, import_react.useEffect)(() => {
    if (!active.current)
      return;
    if (!config._internal.ssr)
      return;
    onMount();
    return () => {
      active.current = false;
    };
  }, []);
  return children;
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/context.js
var WagmiContext = (0, import_react2.createContext)(void 0);
function WagmiProvider(parameters) {
  const { children, config } = parameters;
  const props = { value: config };
  return (0, import_react2.createElement)(Hydrate, parameters, (0, import_react2.createElement)(WagmiContext.Provider, props, children));
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/version.js
var version2 = "2.19.5";

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/utils/getVersion.js
var getVersion2 = () => `wagmi@${version2}`;

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/errors/base.js
var BaseError2 = class extends BaseError {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WagmiError"
    });
  }
  get docsBaseUrl() {
    return "https://wagmi.sh/react";
  }
  get version() {
    return getVersion2();
  }
};

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/errors/context.js
var WagmiProviderNotFoundError = class extends BaseError2 {
  constructor() {
    super("`useConfig` must be used within `WagmiProvider`.", {
      docsPath: "/api/WagmiProvider"
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WagmiProviderNotFoundError"
    });
  }
};

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useConfig.js
var import_react3 = __toESM(require_react(), 1);
function useConfig(parameters = {}) {
  const config = parameters.config ?? (0, import_react3.useContext)(WagmiContext);
  if (!config)
    throw new WagmiProviderNotFoundError();
  return config;
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/actions/watchChains.js
function watchChains(config, parameters) {
  const { onChange } = parameters;
  return config._internal.chains.subscribe((chains, prevChains) => {
    onChange(chains, prevChains);
  });
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js
var import_react4 = __toESM(require_react(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);
var isPlainObject = (obj) => typeof obj === "object" && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual3 = deepEqual) {
  const trackedKeys = (0, import_react4.useRef)([]);
  const result = (0, import_with_selector.useSyncExternalStoreWithSelector)(subscribe, getSnapshot, getServerSnapshot, (x) => x, (a, b) => {
    if (isPlainObject(a) && isPlainObject(b) && trackedKeys.current.length) {
      for (const key of trackedKeys.current) {
        const equal = isEqual3(a[key], b[key]);
        if (!equal)
          return false;
      }
      return true;
    }
    return isEqual3(a, b);
  });
  return (0, import_react4.useMemo)(() => {
    if (isPlainObject(result)) {
      const trackedResult = { ...result };
      let properties = {};
      for (const [key, value] of Object.entries(trackedResult)) {
        properties = {
          ...properties,
          [key]: {
            configurable: false,
            enumerable: true,
            get: () => {
              if (!trackedKeys.current.includes(key)) {
                trackedKeys.current.push(key);
              }
              return value;
            }
          }
        };
      }
      Object.defineProperties(trackedResult, properties);
      return trackedResult;
    }
    return result;
  }, [result]);
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useAccount.js
function useAccount(parameters = {}) {
  const config = useConfig(parameters);
  return useSyncExternalStoreWithTracked((onChange) => watchAccount(config, { onChange }), () => getAccount(config));
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useAccountEffect.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/query/utils.js
function hashFn(queryKey) {
  return JSON.stringify(queryKey, (_, value) => {
    if (isPlainObject2(value))
      return Object.keys(value).sort().reduce((result, key) => {
        result[key] = value[key];
        return result;
      }, {});
    if (typeof value === "bigint")
      return value.toString();
    return value;
  });
}
function isPlainObject2(value) {
  if (!hasObjectPrototype(value)) {
    return false;
  }
  const ctor = value.constructor;
  if (typeof ctor === "undefined")
    return true;
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot))
    return false;
  if (!prot.hasOwnProperty("isPrototypeOf"))
    return false;
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function filterQueryOptions(options) {
  const {
    // import('@tanstack/query-core').QueryOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    _defaulted,
    behavior,
    gcTime,
    initialData,
    initialDataUpdatedAt,
    maxPages,
    meta,
    networkMode,
    queryFn,
    queryHash,
    queryKey,
    queryKeyHashFn,
    retry,
    retryDelay,
    structuralSharing: structuralSharing2,
    // import('@tanstack/query-core').InfiniteQueryObserverOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    getPreviousPageParam,
    getNextPageParam,
    initialPageParam,
    // import('@tanstack/react-query').UseQueryOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    _optimisticResults,
    enabled,
    notifyOnChangeProps,
    placeholderData,
    refetchInterval,
    refetchIntervalInBackground,
    refetchOnMount,
    refetchOnReconnect,
    refetchOnWindowFocus,
    retryOnMount,
    select,
    staleTime,
    suspense,
    throwOnError,
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // wagmi
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    config,
    connector,
    query,
    ...rest
  } = options;
  return rest;
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/query/connect.js
function connectMutationOptions(config) {
  return {
    mutationFn(variables) {
      return connect(config, variables);
    },
    mutationKey: ["connect"]
  };
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/query/disconnect.js
function disconnectMutationOptions(config) {
  return {
    mutationFn(variables) {
      return disconnect(config, variables);
    },
    mutationKey: ["disconnect"]
  };
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/query/getBalance.js
function getBalanceQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { address, scopeKey: _, ...parameters } = queryKey[1];
      if (!address)
        throw new Error("address is required");
      const balance = await getBalance2(config, {
        ...parameters,
        address
      });
      return balance ?? null;
    },
    queryKey: getBalanceQueryKey(options)
  };
}
function getBalanceQueryKey(options = {}) {
  return ["balance", filterQueryOptions(options)];
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/query/getEnsAvatar.js
function getEnsAvatarQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { name, scopeKey: _, ...parameters } = queryKey[1];
      if (!name)
        throw new Error("name is required");
      return getEnsAvatar2(config, { ...parameters, name });
    },
    queryKey: getEnsAvatarQueryKey(options)
  };
}
function getEnsAvatarQueryKey(options = {}) {
  return ["ensAvatar", filterQueryOptions(options)];
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/query/getEnsName.js
function getEnsNameQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { address, scopeKey: _, ...parameters } = queryKey[1];
      if (!address)
        throw new Error("address is required");
      return getEnsName2(config, { ...parameters, address });
    },
    queryKey: getEnsNameQueryKey(options)
  };
}
function getEnsNameQueryKey(options = {}) {
  return ["ensName", filterQueryOptions(options)];
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/query/signMessage.js
function signMessageMutationOptions(config) {
  return {
    mutationFn(variables) {
      return signMessage2(config, variables);
    },
    mutationKey: ["signMessage"]
  };
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/query/switchAccount.js
function switchAccountMutationOptions(config) {
  return {
    mutationFn(variables) {
      return switchAccount(config, variables);
    },
    mutationKey: ["switchAccount"]
  };
}

// node_modules/.pnpm/@wagmi+core@2.22.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.1_typesc_9f70c83aa026214384bb7afde90702f6/node_modules/@wagmi/core/dist/esm/query/switchChain.js
function switchChainMutationOptions(config) {
  return {
    mutationFn(variables) {
      return switchChain(config, variables);
    },
    mutationKey: ["switchChain"]
  };
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/utils/query.js
function useQuery2(parameters) {
  const result = useQuery({
    ...parameters,
    queryKeyHashFn: hashFn
    // for bigint support
  });
  result.queryKey = parameters.queryKey;
  return result;
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useChainId.js
var import_react6 = __toESM(require_react(), 1);
function useChainId(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react6.useSyncExternalStore)((onChange) => watchChainId(config, { onChange }), () => getChainId(config), () => getChainId(config));
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useBalance.js
function useBalance(parameters = {}) {
  const { address, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getBalanceQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useWatchBlocks.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useWatchBlockNumber.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useChains.js
var import_react9 = __toESM(require_react(), 1);
function useChains(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react9.useSyncExternalStore)((onChange) => watchChains(config, { onChange }), () => getChains(config), () => getChains(config));
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useClient.js
var import_with_selector2 = __toESM(require_with_selector(), 1);

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useConnect.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useConnectors.js
var import_react10 = __toESM(require_react(), 1);
function useConnectors(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react10.useSyncExternalStore)((onChange) => watchConnectors(config, { onChange }), () => getConnectors(config), () => getConnectors(config));
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useConnect.js
function useConnect(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = connectMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  (0, import_react11.useEffect)(() => {
    return config.subscribe(({ status }) => status, (status, previousStatus) => {
      if (previousStatus === "connected" && status === "disconnected")
        result.reset();
    });
  }, [config, result.reset]);
  return {
    ...result,
    connect: mutate,
    connectAsync: mutateAsync,
    connectors: useConnectors({ config })
  };
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useConnections.js
var import_react12 = __toESM(require_react(), 1);
function useConnections(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react12.useSyncExternalStore)((onChange) => watchConnections(config, { onChange }), () => getConnections(config), () => getConnections(config));
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useConnectorClient.js
var import_react13 = __toESM(require_react(), 1);

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useDisconnect.js
function useDisconnect(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = disconnectMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    connectors: useConnections({ config }).map((connection) => connection.connector),
    disconnect: mutate,
    disconnectAsync: mutateAsync
  };
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useEnsAvatar.js
function useEnsAvatar(parameters = {}) {
  const { name, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsAvatarQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(name && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useEnsName.js
function useEnsName(parameters = {}) {
  const { address, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsNameQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/usePublicClient.js
var import_with_selector3 = __toESM(require_with_selector(), 1);

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useReadContracts.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useSignMessage.js
function useSignMessage(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = signMessageMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    signMessage: mutate,
    signMessageAsync: mutateAsync
  };
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useSwitchAccount.js
function useSwitchAccount(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = switchAccountMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    connectors: useConnections({ config }).map((connection) => connection.connector),
    switchAccount: mutate,
    switchAccountAsync: mutateAsync
  };
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js
function useSwitchChain(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = switchChainMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    chains: useChains({ config }),
    switchChain: mutate,
    switchChainAsync: mutateAsync
  };
}

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useWalletClient.js
var import_react15 = __toESM(require_react(), 1);

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useWatchContractEvent.js
var import_react16 = __toESM(require_react(), 1);

// node_modules/.pnpm/wagmi@2.19.5_@react-native-async-storage+async-storage@1.24.0_react-native@0.82.1_@babe_d0f046c97ac486703f9a68a0e61c0cbf/node_modules/wagmi/dist/esm/hooks/useWatchPendingTransactions.js
var import_react17 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/utils/uniqueBy.js
function uniqueBy(items, key) {
  const filtered = [];
  for (const item of items) {
    if (!filtered.some((x) => x[key] === item[key])) {
      filtered.push(item);
    }
  }
  return filtered;
}

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/utils/computeWalletConnectMetaData.js
var computeWalletConnectMetaData = ({
  appName,
  appDescription,
  appUrl,
  appIcon
}) => {
  return {
    name: appName,
    description: appDescription != null ? appDescription : appName,
    url: appUrl != null ? appUrl : typeof window !== "undefined" ? window.location.href : "",
    icons: [...appIcon ? [appIcon] : []]
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/utils/omitUndefinedValues.js
function omitUndefinedValues(obj) {
  return Object.fromEntries(
    //@ts-ignore
    Object.entries(obj).filter(([_key, value]) => value !== void 0)
  );
}

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectorsForWallets.js
var connectorsForWallets = (walletList, {
  para,
  projectId,
  walletConnectParameters,
  appName,
  appDescription,
  appUrl,
  appIcon,
  createFarcasterConnector
}) => {
  if (!walletList.length) {
    return [];
  }
  let index2 = -1;
  const connectors = [];
  const wallets = [];
  const walletConnectMetaData = computeWalletConnectMetaData({
    appName,
    appDescription,
    appUrl,
    appIcon
  });
  walletList.forEach((createWallet) => {
    index2++;
    const wallet = createWallet({
      para,
      projectId,
      appName,
      appIcon,
      // `option` is being used only for `walletConnectWallet` wallet
      options: __spreadValues({
        metadata: walletConnectMetaData
      }, walletConnectParameters),
      // Every other wallet that supports walletConnect flow and is not
      // `walletConnectWallet` wallet will have `walletConnectParameters` property
      walletConnectParameters: __spreadValues({
        metadata: walletConnectMetaData
      }, walletConnectParameters),
      createFarcasterConnector
    });
    const walletListItem = __spreadProps(__spreadValues({}, wallet), {
      index: index2
    });
    wallets.push(walletListItem);
  });
  const walletListItems = uniqueBy([...wallets], "id");
  for (const _a of walletListItems) {
    const _b = _a, { createConnector: createConnector2 } = _b, walletMeta = __objRest(_b, ["createConnector"]);
    const walletMetaData = (additionalParaParams) => {
      return {
        paraDetails: omitUndefinedValues(__spreadValues(__spreadProps(__spreadValues({}, walletMeta), {
          isParaConnector: true
        }), additionalParaParams ? additionalParaParams : {}))
      };
    };
    const isWalletConnectConnector = walletMeta.internalId === "WALLETCONNECT";
    if (isWalletConnectConnector && createConnector2) {
      connectors.push(
        createConnector2(
          walletMetaData({
            isWalletConnectModalConnector: true,
            showQrModal: true
          })
        )
      );
    }
    if (createConnector2) {
      connectors.push(createConnector2(walletMetaData()));
    }
  }
  return connectors;
};

// node_modules/.pnpm/@getpara+wagmi-v2-connector@2.0.0-alpha.73_react-dom@19.2.1_react@19.2.1__react@19.2.1__667276eb49bdd23455847df095179048/node_modules/@getpara/wagmi-v2-connector/dist/chunk-IV3L3JVM.js
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
var __async2 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/.pnpm/@wagmi+connectors@6.2.0_28dd68cab15260b19c2f69bbbf386dcc/node_modules/@wagmi/connectors/dist/esm/coinbaseWallet.js
coinbaseWallet.type = "coinbaseWallet";
function coinbaseWallet(parameters = {}) {
  if (parameters.version === "3" || parameters.headlessMode)
    return version3(parameters);
  return version4(parameters);
}
function version4(parameters) {
  let walletProvider;
  let accountsChanged;
  let chainChanged;
  let disconnect2;
  return createConnector((config) => ({
    id: "coinbaseWalletSDK",
    name: "Coinbase Wallet",
    rdns: "com.coinbase.wallet",
    type: coinbaseWallet.type,
    async connect({ chainId, withCapabilities, ...rest } = {}) {
      try {
        const provider = await this.getProvider();
        const accounts = (await provider.request({
          method: "eth_requestAccounts",
          params: "instantOnboarding" in rest && rest.instantOnboarding ? [{ onboarding: "instant" }] : []
        })).map((x) => getAddress(x));
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider.on("chainChanged", chainChanged);
        }
        if (!disconnect2) {
          disconnect2 = this.onDisconnect.bind(this);
          provider.on("disconnect", disconnect2);
        }
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code)
              throw error;
            return { id: currentChainId };
          });
          currentChainId = chain?.id ?? currentChainId;
        }
        return {
          accounts: withCapabilities ? accounts.map((address) => ({ address, capabilities: {} })) : accounts,
          chainId: currentChainId
        };
      } catch (error) {
        if (/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(error.message))
          throw new UserRejectedRequestError(error);
        throw error;
      }
    },
    async disconnect() {
      const provider = await this.getProvider();
      if (accountsChanged) {
        provider.removeListener("accountsChanged", accountsChanged);
        accountsChanged = void 0;
      }
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect2) {
        provider.removeListener("disconnect", disconnect2);
        disconnect2 = void 0;
      }
      provider.disconnect();
      provider.close?.();
    },
    async getAccounts() {
      const provider = await this.getProvider();
      return (await provider.request({
        method: "eth_accounts"
      })).map((x) => getAddress(x));
    },
    async getChainId() {
      const provider = await this.getProvider();
      const chainId = await provider.request({
        method: "eth_chainId"
      });
      return Number(chainId);
    },
    async getProvider() {
      if (!walletProvider) {
        const preference = (() => {
          if (typeof parameters.preference === "string")
            return { options: parameters.preference };
          return {
            ...parameters.preference,
            options: parameters.preference?.options ?? "all"
          };
        })();
        const { createCoinbaseWalletSDK } = await import("./dist-ZK4I4YBZ.js");
        const sdk = createCoinbaseWalletSDK({
          ...parameters,
          appChainIds: config.chains.map((x) => x.id),
          preference
        });
        walletProvider = sdk.getProvider();
      }
      return walletProvider;
    },
    async isAuthorized() {
      try {
        const accounts = await this.getAccounts();
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    async switchChain({ addEthereumChainParameter, chainId }) {
      const chain = config.chains.find((chain2) => chain2.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      const provider = await this.getProvider();
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: numberToHex(chain.id) }]
        });
        return chain;
      } catch (error) {
        if (error.code === 4902) {
          try {
            let blockExplorerUrls;
            if (addEthereumChainParameter?.blockExplorerUrls)
              blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
            else
              blockExplorerUrls = chain.blockExplorers?.default.url ? [chain.blockExplorers?.default.url] : [];
            let rpcUrls;
            if (addEthereumChainParameter?.rpcUrls?.length)
              rpcUrls = addEthereumChainParameter.rpcUrls;
            else
              rpcUrls = [chain.rpcUrls.default?.http[0] ?? ""];
            const addEthereumChain = {
              blockExplorerUrls,
              chainId: numberToHex(chainId),
              chainName: addEthereumChainParameter?.chainName ?? chain.name,
              iconUrls: addEthereumChainParameter?.iconUrls,
              nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
              rpcUrls
            };
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [addEthereumChain]
            });
            return chain;
          } catch (error2) {
            throw new UserRejectedRequestError(error2);
          }
        }
        throw new SwitchChainError(error);
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0)
        this.onDisconnect();
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onDisconnect(_error) {
      config.emitter.emit("disconnect");
      const provider = await this.getProvider();
      if (accountsChanged) {
        provider.removeListener("accountsChanged", accountsChanged);
        accountsChanged = void 0;
      }
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect2) {
        provider.removeListener("disconnect", disconnect2);
        disconnect2 = void 0;
      }
    }
  }));
}
function version3(parameters) {
  const reloadOnDisconnect = false;
  let sdk;
  let walletProvider;
  let accountsChanged;
  let chainChanged;
  let disconnect2;
  return createConnector((config) => ({
    id: "coinbaseWalletSDK",
    name: "Coinbase Wallet",
    rdns: "com.coinbase.wallet",
    type: coinbaseWallet.type,
    async connect({ chainId, withCapabilities } = {}) {
      try {
        const provider = await this.getProvider();
        const accounts = (await provider.request({
          method: "eth_requestAccounts"
        })).map((x) => getAddress(x));
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider.on("chainChanged", chainChanged);
        }
        if (!disconnect2) {
          disconnect2 = this.onDisconnect.bind(this);
          provider.on("disconnect", disconnect2);
        }
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code)
              throw error;
            return { id: currentChainId };
          });
          currentChainId = chain?.id ?? currentChainId;
        }
        return {
          accounts: withCapabilities ? accounts.map((address) => ({ address, capabilities: {} })) : accounts,
          chainId: currentChainId
        };
      } catch (error) {
        if (/(user closed modal|accounts received is empty|user denied account)/i.test(error.message))
          throw new UserRejectedRequestError(error);
        throw error;
      }
    },
    async disconnect() {
      const provider = await this.getProvider();
      if (accountsChanged) {
        provider.removeListener("accountsChanged", accountsChanged);
        accountsChanged = void 0;
      }
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect2) {
        provider.removeListener("disconnect", disconnect2);
        disconnect2 = void 0;
      }
      provider.disconnect();
      provider.close();
    },
    async getAccounts() {
      const provider = await this.getProvider();
      return (await provider.request({
        method: "eth_accounts"
      })).map((x) => getAddress(x));
    },
    async getChainId() {
      const provider = await this.getProvider();
      const chainId = await provider.request({
        method: "eth_chainId"
      });
      return Number(chainId);
    },
    async getProvider() {
      if (!walletProvider) {
        const CoinbaseWalletSDK = await (async () => {
          const { default: SDK } = await import("./dist-MQ7X3SOC.js");
          if (typeof SDK !== "function" && typeof SDK.default === "function")
            return SDK.default;
          return SDK;
        })();
        sdk = new CoinbaseWalletSDK({ ...parameters, reloadOnDisconnect });
        const walletExtensionChainId = sdk.walletExtension?.getChainId();
        const chain = config.chains.find((chain2) => parameters.chainId ? chain2.id === parameters.chainId : chain2.id === walletExtensionChainId) || config.chains[0];
        const chainId = parameters.chainId || chain?.id;
        const jsonRpcUrl = parameters.jsonRpcUrl || chain?.rpcUrls.default.http[0];
        walletProvider = sdk.makeWeb3Provider(jsonRpcUrl, chainId);
      }
      return walletProvider;
    },
    async isAuthorized() {
      try {
        const accounts = await this.getAccounts();
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    async switchChain({ addEthereumChainParameter, chainId }) {
      const chain = config.chains.find((chain2) => chain2.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      const provider = await this.getProvider();
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: numberToHex(chain.id) }]
        });
        return chain;
      } catch (error) {
        if (error.code === 4902) {
          try {
            let blockExplorerUrls;
            if (addEthereumChainParameter?.blockExplorerUrls)
              blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
            else
              blockExplorerUrls = chain.blockExplorers?.default.url ? [chain.blockExplorers?.default.url] : [];
            let rpcUrls;
            if (addEthereumChainParameter?.rpcUrls?.length)
              rpcUrls = addEthereumChainParameter.rpcUrls;
            else
              rpcUrls = [chain.rpcUrls.default?.http[0] ?? ""];
            const addEthereumChain = {
              blockExplorerUrls,
              chainId: numberToHex(chainId),
              chainName: addEthereumChainParameter?.chainName ?? chain.name,
              iconUrls: addEthereumChainParameter?.iconUrls,
              nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
              rpcUrls
            };
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [addEthereumChain]
            });
            return chain;
          } catch (error2) {
            throw new UserRejectedRequestError(error2);
          }
        }
        throw new SwitchChainError(error);
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0)
        this.onDisconnect();
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onDisconnect(_error) {
      config.emitter.emit("disconnect");
      const provider = await this.getProvider();
      if (accountsChanged) {
        provider.removeListener("accountsChanged", accountsChanged);
        accountsChanged = void 0;
      }
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect2) {
        provider.removeListener("disconnect", disconnect2);
        disconnect2 = void 0;
      }
    }
  }));
}

// node_modules/.pnpm/@metamask+superstruct@3.2.1/node_modules/@metamask/superstruct/dist/error.mjs
var StructError = class extends TypeError {
  constructor(failure, failures) {
    let cached;
    const { message, explanation, ...rest } = failure;
    const { path: path2 } = failure;
    const cause = path2.length === 0 ? message : `At path: ${path2.join(".")} -- ${message}`;
    super(explanation ?? cause);
    if (explanation !== null && explanation !== void 0) {
      this.cause = cause;
    }
    Object.assign(this, rest);
    this.name = this.constructor.name;
    this.failures = () => {
      return cached ?? (cached = [failure, ...failures()]);
    };
  }
};

// node_modules/.pnpm/@metamask+superstruct@3.2.1/node_modules/@metamask/superstruct/dist/utils.mjs
function isIterable(value) {
  return isObject(value) && typeof value[Symbol.iterator] === "function";
}
function isObject(value) {
  return typeof value === "object" && value !== null;
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
function toFailure(result, context, struct, value) {
  if (result === true) {
    return void 0;
  } else if (result === false) {
    result = {};
  } else if (typeof result === "string") {
    result = { message: result };
  }
  const { path: path2, branch } = context;
  const { type: type2 } = struct;
  const { refinement, message = `Expected a value of type \`${type2}\`${refinement ? ` with refinement \`${refinement}\`` : ""}, but received: \`${print(value)}\`` } = result;
  return {
    value,
    type: type2,
    refinement,
    key: path2[path2.length - 1],
    path: path2,
    branch,
    ...result,
    message
  };
}
function* toFailures(result, context, struct, value) {
  if (!isIterable(result)) {
    result = [result];
  }
  for (const validationResult of result) {
    const failure = toFailure(validationResult, context, struct, value);
    if (failure) {
      yield failure;
    }
  }
}
function* run(value, struct, options = {}) {
  const { path: path2 = [], branch = [value], coerce: coerce2 = false, mask: mask2 = false } = options;
  const context = { path: path2, branch };
  if (coerce2) {
    value = struct.coercer(value, context);
    if (mask2 && struct.type !== "type" && isObject(struct.schema) && isObject(value) && !Array.isArray(value)) {
      for (const key in value) {
        if (struct.schema[key] === void 0) {
          delete value[key];
        }
      }
    }
  }
  let status = "valid";
  for (const failure of struct.validator(value, context)) {
    failure.explanation = options.message;
    status = "not_valid";
    yield [failure, void 0];
  }
  for (let [innerKey, innerValue, innerStruct] of struct.entries(value, context)) {
    const iterable = run(innerValue, innerStruct, {
      path: innerKey === void 0 ? path2 : [...path2, innerKey],
      branch: innerKey === void 0 ? branch : [...branch, innerValue],
      coerce: coerce2,
      mask: mask2,
      message: options.message
    });
    for (const result of iterable) {
      if (result[0]) {
        status = result[0].refinement === null || result[0].refinement === void 0 ? "not_valid" : "not_refined";
        yield [result[0], void 0];
      } else if (coerce2) {
        innerValue = result[1];
        if (innerKey === void 0) {
          value = innerValue;
        } else if (value instanceof Map) {
          value.set(innerKey, innerValue);
        } else if (value instanceof Set) {
          value.add(innerValue);
        } else if (isObject(value)) {
          if (innerValue !== void 0 || innerKey in value) {
            value[innerKey] = innerValue;
          }
        }
      }
    }
  }
  if (status !== "not_valid") {
    for (const failure of struct.refiner(value, context)) {
      failure.explanation = options.message;
      status = "not_refined";
      yield [failure, void 0];
    }
  }
  if (status === "valid") {
    yield [void 0, value];
  }
}

// node_modules/.pnpm/@metamask+superstruct@3.2.1/node_modules/@metamask/superstruct/dist/struct.mjs
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
    return create2(value, this, message);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(value) {
    return is(value, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(value, message) {
    return mask(value, this, message);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(value, options = {}) {
    return validate(value, this, options);
  }
};
var ExactOptionalBrand = "EXACT_OPTIONAL";
var ExactOptionalStruct = class extends Struct {
  constructor(props) {
    super({
      ...props,
      type: `exact optional ${props.type}`
    });
    this.brand = ExactOptionalBrand;
  }
  static isExactOptional(value) {
    return isObject(value) && "brand" in value && value.brand === ExactOptionalBrand;
  }
};
function assert(value, struct, message) {
  const result = validate(value, struct, { message });
  if (result[0]) {
    throw result[0];
  }
}
function create2(value, struct, message) {
  const result = validate(value, struct, { coerce: true, message });
  if (result[0]) {
    throw result[0];
  } else {
    return result[1];
  }
}
function mask(value, struct, message) {
  const result = validate(value, struct, { coerce: true, mask: true, message });
  if (result[0]) {
    throw result[0];
  } else {
    return result[1];
  }
}
function is(value, struct) {
  const result = validate(value, struct);
  return !result[0];
}
function validate(value, struct, options = {}) {
  const tuples = run(value, struct, options);
  const tuple = shiftIterator(tuples);
  if (tuple[0]) {
    const error = new StructError(tuple[0], function* () {
      for (const innerTuple of tuples) {
        if (innerTuple[0]) {
          yield innerTuple[0];
        }
      }
    });
    return [error, void 0];
  }
  const validatedValue = tuple[1];
  return [void 0, validatedValue];
}

// node_modules/.pnpm/@metamask+superstruct@3.2.1/node_modules/@metamask/superstruct/dist/structs/utilities.mjs
function define2(name, validator) {
  return new Struct({ type: name, schema: null, validator });
}

// node_modules/.pnpm/@metamask+superstruct@3.2.1/node_modules/@metamask/superstruct/dist/structs/types.mjs
function any() {
  return define2("any", () => true);
}
function array(Element) {
  return new Struct({
    type: "array",
    schema: Element,
    *entries(value) {
      if (Element && Array.isArray(value)) {
        for (const [index2, arrayValue] of value.entries()) {
          yield [index2, arrayValue, Element];
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
function bigint() {
  return define2("bigint", (value) => {
    return typeof value === "bigint";
  });
}
function instance(Class) {
  return define2("instance", (value) => {
    return value instanceof Class || `Expected a \`${Class.name}\` instance, but received: ${print(value)}`;
  });
}
function integer() {
  return define2("integer", (value) => {
    return typeof value === "number" && !isNaN(value) && Number.isInteger(value) || `Expected an integer, but received: ${print(value)}`;
  });
}
function literal(constant) {
  const description = print(constant);
  const valueType = typeof constant;
  return new Struct({
    type: "literal",
    schema: valueType === "string" || valueType === "number" || valueType === "boolean" ? constant : null,
    validator(value) {
      return value === constant || `Expected the literal \`${description}\`, but received: ${print(value)}`;
    }
  });
}
function never() {
  return define2("never", () => false);
}
function nullable(struct) {
  return new Struct({
    ...struct,
    validator: (value, ctx) => value === null || struct.validator(value, ctx),
    refiner: (value, ctx) => value === null || struct.refiner(value, ctx)
  });
}
function number() {
  return define2("number", (value) => {
    return typeof value === "number" && !isNaN(value) || `Expected a number, but received: ${print(value)}`;
  });
}
function object(schema) {
  const knowns = schema ? Object.keys(schema) : [];
  const Never = never();
  return new Struct({
    type: "object",
    schema: schema ?? null,
    *entries(value) {
      if (schema && isObject(value)) {
        const unknowns = new Set(Object.keys(value));
        for (const key of knowns) {
          unknowns.delete(key);
          const propertySchema = schema[key];
          if (ExactOptionalStruct.isExactOptional(propertySchema) && !Object.prototype.hasOwnProperty.call(value, key)) {
            continue;
          }
          yield [key, value[key], schema[key]];
        }
        for (const key of unknowns) {
          yield [key, value[key], Never];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${print(value)}`;
    },
    coercer(value) {
      return isObject(value) ? { ...value } : value;
    }
  });
}
function optional(struct) {
  return new Struct({
    ...struct,
    validator: (value, ctx) => value === void 0 || struct.validator(value, ctx),
    refiner: (value, ctx) => value === void 0 || struct.refiner(value, ctx)
  });
}
function record(Key, Value) {
  return new Struct({
    type: "record",
    schema: null,
    *entries(value) {
      if (isObject(value)) {
        for (const objectKey in value) {
          const objectValue = value[objectKey];
          yield [objectKey, objectKey, Key];
          yield [objectKey, objectValue, Value];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${print(value)}`;
    }
  });
}
function string() {
  return define2("string", (value) => {
    return typeof value === "string" || `Expected a string, but received: ${print(value)}`;
  });
}
function union(Structs) {
  const description = Structs.map((struct) => struct.type).join(" | ");
  return new Struct({
    type: "union",
    schema: null,
    coercer(value) {
      for (const InnerStruct of Structs) {
        const [error, coerced] = InnerStruct.validate(value, { coerce: true });
        if (!error) {
          return coerced;
        }
      }
      return value;
    },
    validator(value, ctx) {
      const failures = [];
      for (const InnerStruct of Structs) {
        const [...tuples] = run(value, InnerStruct, ctx);
        const [first] = tuples;
        if (!first?.[0]) {
          return [];
        }
        for (const [failure] of tuples) {
          if (failure) {
            failures.push(failure);
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
  return define2("unknown", () => true);
}

// node_modules/.pnpm/@metamask+superstruct@3.2.1/node_modules/@metamask/superstruct/dist/structs/coercions.mjs
function coerce(struct, condition, coercer) {
  return new Struct({
    ...struct,
    coercer: (value, ctx) => {
      return is(value, condition) ? struct.coercer(coercer(value, ctx), ctx) : struct.coercer(value, ctx);
    }
  });
}

// node_modules/.pnpm/@metamask+superstruct@3.2.1/node_modules/@metamask/superstruct/dist/structs/refinements.mjs
function pattern(struct, regexp) {
  return refine(struct, "pattern", (value) => {
    return regexp.test(value) || `Expected a ${struct.type} matching \`/${regexp.source}/\` but received "${value}"`;
  });
}
function size2(struct, minimum, maximum = minimum) {
  const expected = `Expected a ${struct.type}`;
  const of = minimum === maximum ? `of \`${minimum}\`` : `between \`${minimum}\` and \`${maximum}\``;
  return refine(struct, "size", (value) => {
    if (typeof value === "number" || value instanceof Date) {
      return minimum <= value && value <= maximum || // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${expected} ${of} but received \`${value}\``;
    } else if (value instanceof Map || value instanceof Set) {
      const { size: size5 } = value;
      return minimum <= size5 && size5 <= maximum || `${expected} with a size ${of} but received one with a size of \`${size5}\``;
    }
    const { length } = value;
    return minimum <= length && length <= maximum || `${expected} with a length ${of} but received one with a length of \`${length}\``;
  });
}
function refine(struct, name, refiner) {
  return new Struct({
    ...struct,
    *refiner(value, ctx) {
      yield* struct.refiner(value, ctx);
      const result = refiner(value, ctx);
      const failures = toFailures(result, ctx, struct, value);
      for (const failure of failures) {
        yield { ...failure, refinement: name };
      }
    }
  });
}

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/misc.mjs
function isObject2(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
var hasProperty = (objectToCheck, name) => Object.hasOwnProperty.call(objectToCheck, name);
var JsonSize;
(function(JsonSize2) {
  JsonSize2[JsonSize2["Null"] = 4] = "Null";
  JsonSize2[JsonSize2["Comma"] = 1] = "Comma";
  JsonSize2[JsonSize2["Wrapper"] = 1] = "Wrapper";
  JsonSize2[JsonSize2["True"] = 4] = "True";
  JsonSize2[JsonSize2["False"] = 5] = "False";
  JsonSize2[JsonSize2["Quote"] = 1] = "Quote";
  JsonSize2[JsonSize2["Colon"] = 1] = "Colon";
  JsonSize2[JsonSize2["Date"] = 24] = "Date";
})(JsonSize = JsonSize || (JsonSize = {}));
function isPlainObject4(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  try {
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
  } catch (_) {
    return false;
  }
}

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/assert.mjs
function isConstructable(fn) {
  return Boolean(typeof fn?.prototype?.constructor?.name === "string");
}
function getError(ErrorWrapper, message) {
  if (isConstructable(ErrorWrapper)) {
    return new ErrorWrapper({
      message
    });
  }
  return ErrorWrapper({
    message
  });
}
var AssertionError = class extends Error {
  constructor(options) {
    super(options.message);
    this.code = "ERR_ASSERTION";
  }
};
function assert2(value, message = "Assertion failed.", ErrorWrapper = AssertionError) {
  if (!value) {
    if (message instanceof Error) {
      throw message;
    }
    throw getError(ErrorWrapper, message);
  }
}

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/base64.mjs
var base64 = (struct, options = {}) => {
  const paddingRequired = options.paddingRequired ?? false;
  const characterSet = options.characterSet ?? "base64";
  let letters;
  if (characterSet === "base64") {
    letters = String.raw`[A-Za-z0-9+\/]`;
  } else {
    assert2(characterSet === "base64url");
    letters = String.raw`[-_A-Za-z0-9]`;
  }
  let re;
  if (paddingRequired) {
    re = new RegExp(`^(?:${letters}{4})*(?:${letters}{3}=|${letters}{2}==)?$`, "u");
  } else {
    re = new RegExp(`^(?:${letters}{4})*(?:${letters}{2,3}|${letters}{3}=|${letters}{2}==)?$`, "u");
  }
  return pattern(struct, re);
};

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/hex.mjs
var import_lodash = __toESM(require_lodash(), 1);
var { memoize } = import_lodash.default;
var HEX_REGEX = /^(?:0x)?[0-9a-f]+$/iu;
var STRICT_HEX_REGEX = /^0x[0-9a-f]+$/iu;
var HEX_ADDRESS_REGEX = /^0x[0-9a-f]{40}$/u;
var HEX_CHECKSUM_ADDRESS_REGEX = /^0x[0-9a-fA-F]{40}$/u;
var HexStruct = pattern(string(), HEX_REGEX);
var StrictHexStruct = pattern(string(), STRICT_HEX_REGEX);
var HexAddressStruct = pattern(string(), HEX_ADDRESS_REGEX);
var HexChecksumAddressStruct = pattern(string(), HEX_CHECKSUM_ADDRESS_REGEX);
var isString = (value) => typeof value === "string";
function isHexString(value) {
  return isString(value) && HEX_REGEX.test(value);
}
function isHexAddress(value) {
  return isString(value) && HEX_ADDRESS_REGEX.test(value);
}
function isHexChecksumAddress(value) {
  return isString(value) && HEX_CHECKSUM_ADDRESS_REGEX.test(value);
}
function assertIsHexString(value) {
  assert2(isHexString(value), "Value must be a hexadecimal string.");
}
function getChecksumAddressUnmemoized(hexAddress) {
  assert2(isHexChecksumAddress(hexAddress), "Invalid hex address.");
  const address = remove0x(hexAddress).toLowerCase();
  const hashBytes = keccak_256(address);
  const { length } = address;
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    const byteIndex = i >> 1;
    const nibbleIndex = i & 1;
    const byte = hashBytes[byteIndex];
    const nibble = nibbleIndex === 0 ? byte >> 4 : byte & 15;
    result[i] = nibble >= 8 ? address[i].toUpperCase() : address[i];
  }
  return `0x${result.join("")}`;
}
var getChecksumAddress = memoize(getChecksumAddressUnmemoized);
function isValidChecksumAddressUnmemoized(possibleChecksum) {
  if (!isHexChecksumAddress(possibleChecksum)) {
    return false;
  }
  return getChecksumAddress(possibleChecksum) === possibleChecksum;
}
var isValidChecksumAddress = memoize(isValidChecksumAddressUnmemoized);
function isValidHexAddressUnmemoized(possibleAddress) {
  return isHexAddress(possibleAddress) || isValidChecksumAddress(possibleAddress);
}
var isValidHexAddress = memoize(isValidHexAddressUnmemoized);
function add0x(hexadecimal) {
  if (hexadecimal.startsWith("0x")) {
    return hexadecimal;
  }
  if (hexadecimal.startsWith("0X")) {
    return `0x${hexadecimal.substring(2)}`;
  }
  return `0x${hexadecimal}`;
}
function remove0x(hexadecimal) {
  if (hexadecimal.startsWith("0x") || hexadecimal.startsWith("0X")) {
    return hexadecimal.substring(2);
  }
  return hexadecimal;
}

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/bytes.mjs
var HEX_MINIMUM_NUMBER_CHARACTER = 48;
var HEX_MAXIMUM_NUMBER_CHARACTER = 58;
var HEX_CHARACTER_OFFSET = 87;
function getPrecomputedHexValuesBuilder() {
  const lookupTable = [];
  return () => {
    if (lookupTable.length === 0) {
      for (let i = 0; i < 256; i++) {
        lookupTable.push(i.toString(16).padStart(2, "0"));
      }
    }
    return lookupTable;
  };
}
var getPrecomputedHexValues = getPrecomputedHexValuesBuilder();
function isBytes(value) {
  return value instanceof Uint8Array;
}
function assertIsBytes(value) {
  assert2(isBytes(value), "Value must be a Uint8Array.");
}
function bytesToHex(bytes) {
  assertIsBytes(bytes);
  if (bytes.length === 0) {
    return "0x";
  }
  const lookupTable = getPrecomputedHexValues();
  const hexadecimal = new Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    hexadecimal[i] = lookupTable[bytes[i]];
  }
  return add0x(hexadecimal.join(""));
}
function hexToBytes(value) {
  if (value?.toLowerCase?.() === "0x") {
    return new Uint8Array();
  }
  assertIsHexString(value);
  const strippedValue = remove0x(value).toLowerCase();
  const normalizedValue = strippedValue.length % 2 === 0 ? strippedValue : `0${strippedValue}`;
  const bytes = new Uint8Array(normalizedValue.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    const c1 = normalizedValue.charCodeAt(i * 2);
    const c2 = normalizedValue.charCodeAt(i * 2 + 1);
    const n1 = c1 - (c1 < HEX_MAXIMUM_NUMBER_CHARACTER ? HEX_MINIMUM_NUMBER_CHARACTER : HEX_CHARACTER_OFFSET);
    const n2 = c2 - (c2 < HEX_MAXIMUM_NUMBER_CHARACTER ? HEX_MINIMUM_NUMBER_CHARACTER : HEX_CHARACTER_OFFSET);
    bytes[i] = n1 * 16 + n2;
  }
  return bytes;
}

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/superstruct.mjs
function definePattern(name, pattern2) {
  return define2(name, (value) => {
    return typeof value === "string" && pattern2.test(value);
  });
}

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/caip-types.mjs
var CAIP_CHAIN_ID_REGEX = /^(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})$/u;
var CAIP_NAMESPACE_REGEX = /^[-a-z0-9]{3,8}$/u;
var CAIP_REFERENCE_REGEX = /^[-_a-zA-Z0-9]{1,32}$/u;
var CAIP_ACCOUNT_ID_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})):(?<accountAddress>[-.%a-zA-Z0-9]{1,128})$/u;
var CAIP_ACCOUNT_ADDRESS_REGEX = /^[-.%a-zA-Z0-9]{1,128}$/u;
var CAIP_ASSET_NAMESPACE_REGEX = /^[-a-z0-9]{3,8}$/u;
var CAIP_ASSET_REFERENCE_REGEX = /^[-.%a-zA-Z0-9]{1,128}$/u;
var CAIP_TOKEN_ID_REGEX = /^[-.%a-zA-Z0-9]{1,78}$/u;
var CAIP_ASSET_TYPE_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32}))\/(?<assetNamespace>[-a-z0-9]{3,8}):(?<assetReference>[-.%a-zA-Z0-9]{1,128})$/u;
var CAIP_ASSET_ID_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32}))\/(?<assetNamespace>[-a-z0-9]{3,8}):(?<assetReference>[-.%a-zA-Z0-9]{1,128})\/(?<tokenId>[-.%a-zA-Z0-9]{1,78})$/u;
var CAIP_ASSET_TYPE_OR_ID_REGEX = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32}))\/(?<assetNamespace>[-a-z0-9]{3,8}):(?<assetReference>[-.%a-zA-Z0-9]{1,128})(\/(?<tokenId>[-.%a-zA-Z0-9]{1,78}))?$/u;
var CaipChainIdStruct = definePattern("CaipChainId", CAIP_CHAIN_ID_REGEX);
var CaipNamespaceStruct = definePattern("CaipNamespace", CAIP_NAMESPACE_REGEX);
var CaipReferenceStruct = definePattern("CaipReference", CAIP_REFERENCE_REGEX);
var CaipAccountIdStruct = definePattern("CaipAccountId", CAIP_ACCOUNT_ID_REGEX);
var CaipAccountAddressStruct = definePattern("CaipAccountAddress", CAIP_ACCOUNT_ADDRESS_REGEX);
var CaipAssetNamespaceStruct = definePattern("CaipAssetNamespace", CAIP_ASSET_NAMESPACE_REGEX);
var CaipAssetReferenceStruct = definePattern("CaipAssetReference", CAIP_ASSET_REFERENCE_REGEX);
var CaipTokenIdStruct = definePattern("CaipTokenId", CAIP_TOKEN_ID_REGEX);
var CaipAssetTypeStruct = definePattern("CaipAssetType", CAIP_ASSET_TYPE_REGEX);
var CaipAssetIdStruct = definePattern("CaipAssetId", CAIP_ASSET_ID_REGEX);
var CaipAssetTypeOrIdStruct = definePattern("CaipAssetTypeOrId", CAIP_ASSET_TYPE_OR_ID_REGEX);
var KnownCaipNamespace;
(function(KnownCaipNamespace2) {
  KnownCaipNamespace2["Bip122"] = "bip122";
  KnownCaipNamespace2["Solana"] = "solana";
  KnownCaipNamespace2["Tron"] = "tron";
  KnownCaipNamespace2["Eip155"] = "eip155";
  KnownCaipNamespace2["Wallet"] = "wallet";
})(KnownCaipNamespace = KnownCaipNamespace || (KnownCaipNamespace = {}));

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/checksum.mjs
var ChecksumStruct = size2(base64(string(), { paddingRequired: true }), 44, 44);

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/coercers.mjs
var NumberLikeStruct = union([number(), bigint(), string(), StrictHexStruct]);
var NumberCoercer = coerce(number(), NumberLikeStruct, Number);
var BigIntCoercer = coerce(bigint(), NumberLikeStruct, BigInt);
var BytesLikeStruct = union([StrictHexStruct, instance(Uint8Array)]);
var BytesCoercer = coerce(instance(Uint8Array), union([StrictHexStruct]), hexToBytes);
var HexCoercer = coerce(StrictHexStruct, instance(Uint8Array), bytesToHex);

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/collections.mjs
var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _FrozenMap_map;
var _FrozenSet_set;
var FrozenMap = class {
  get size() {
    return __classPrivateFieldGet2(this, _FrozenMap_map, "f").size;
  }
  [(_FrozenMap_map = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return __classPrivateFieldGet2(this, _FrozenMap_map, "f")[Symbol.iterator]();
  }
  constructor(entries) {
    _FrozenMap_map.set(this, void 0);
    __classPrivateFieldSet(this, _FrozenMap_map, new Map(entries), "f");
    Object.freeze(this);
  }
  entries() {
    return __classPrivateFieldGet2(this, _FrozenMap_map, "f").entries();
  }
  forEach(callbackfn, thisArg) {
    return __classPrivateFieldGet2(this, _FrozenMap_map, "f").forEach((value, key, _map) => callbackfn.call(thisArg, value, key, this));
  }
  get(key) {
    return __classPrivateFieldGet2(this, _FrozenMap_map, "f").get(key);
  }
  has(key) {
    return __classPrivateFieldGet2(this, _FrozenMap_map, "f").has(key);
  }
  keys() {
    return __classPrivateFieldGet2(this, _FrozenMap_map, "f").keys();
  }
  values() {
    return __classPrivateFieldGet2(this, _FrozenMap_map, "f").values();
  }
  toString() {
    return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([key, value]) => `${String(key)} => ${String(value)}`).join(", ")} ` : ""}}`;
  }
};
var FrozenSet = class {
  get size() {
    return __classPrivateFieldGet2(this, _FrozenSet_set, "f").size;
  }
  [(_FrozenSet_set = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return __classPrivateFieldGet2(this, _FrozenSet_set, "f")[Symbol.iterator]();
  }
  constructor(values) {
    _FrozenSet_set.set(this, void 0);
    __classPrivateFieldSet(this, _FrozenSet_set, new Set(values), "f");
    Object.freeze(this);
  }
  entries() {
    return __classPrivateFieldGet2(this, _FrozenSet_set, "f").entries();
  }
  forEach(callbackfn, thisArg) {
    return __classPrivateFieldGet2(this, _FrozenSet_set, "f").forEach((value, value2, _set) => callbackfn.call(thisArg, value, value2, this));
  }
  has(value) {
    return __classPrivateFieldGet2(this, _FrozenSet_set, "f").has(value);
  }
  keys() {
    return __classPrivateFieldGet2(this, _FrozenSet_set, "f").keys();
  }
  values() {
    return __classPrivateFieldGet2(this, _FrozenSet_set, "f").values();
  }
  toString() {
    return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((member) => String(member)).join(", ")} ` : ""}}`;
  }
};
Object.freeze(FrozenMap);
Object.freeze(FrozenMap.prototype);
Object.freeze(FrozenSet);
Object.freeze(FrozenSet.prototype);

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/json.mjs
var object2 = (schema) => (
  // The type is slightly different from a regular object struct, because we
  // want to make properties with `undefined` in their type optional, but not
  // `undefined` itself. This means that we need a type cast.
  object(schema)
);
function hasOptional({ path: path2, branch }) {
  const field = path2[path2.length - 1];
  return hasProperty(branch[branch.length - 2], field);
}
function exactOptional(struct) {
  return new Struct({
    ...struct,
    type: `optional ${struct.type}`,
    validator: (value, context) => !hasOptional(context) || struct.validator(value, context),
    refiner: (value, context) => !hasOptional(context) || struct.refiner(value, context)
  });
}
function validateJson(json) {
  if (json === null || typeof json === "boolean" || typeof json === "string") {
    return true;
  }
  if (typeof json === "number" && Number.isFinite(json)) {
    return true;
  }
  if (typeof json === "object") {
    let every = true;
    if (Array.isArray(json)) {
      for (let i = 0; i < json.length; i++) {
        if (!validateJson(json[i])) {
          every = false;
          break;
        }
      }
      return every;
    }
    const entries = Object.entries(json);
    for (let i = 0; i < entries.length; i++) {
      if (typeof entries[i][0] !== "string" || !validateJson(entries[i][1])) {
        every = false;
        break;
      }
    }
    return every;
  }
  return false;
}
var UnsafeJsonStruct = define2("JSON", (json) => validateJson(json));
var JsonStruct = coerce(UnsafeJsonStruct, refine(any(), "JSON", (value) => is(value, UnsafeJsonStruct)), (value) => JSON.parse(JSON.stringify(value, (propKey, propValue) => {
  if (propKey === "__proto__" || propKey === "constructor") {
    return void 0;
  }
  return propValue;
})));
function isValidJson(value) {
  try {
    getSafeJson(value);
    return true;
  } catch {
    return false;
  }
}
function getSafeJson(value) {
  return create2(value, JsonStruct);
}
var jsonrpc2 = "2.0";
var JsonRpcVersionStruct = literal(jsonrpc2);
var JsonRpcIdStruct = nullable(union([number(), string()]));
var JsonRpcErrorStruct = object2({
  code: integer(),
  message: string(),
  data: exactOptional(JsonStruct),
  stack: exactOptional(string())
});
var JsonRpcParamsStruct = union([record(string(), JsonStruct), array(JsonStruct)]);
var JsonRpcRequestStruct = object2({
  id: JsonRpcIdStruct,
  jsonrpc: JsonRpcVersionStruct,
  method: string(),
  params: exactOptional(JsonRpcParamsStruct)
});
var JsonRpcNotificationStruct = object2({
  jsonrpc: JsonRpcVersionStruct,
  method: string(),
  params: exactOptional(JsonRpcParamsStruct)
});
var PendingJsonRpcResponseStruct = object({
  id: JsonRpcIdStruct,
  jsonrpc: JsonRpcVersionStruct,
  result: optional(unknown()),
  error: optional(JsonRpcErrorStruct)
});
var JsonRpcSuccessStruct = object2({
  id: JsonRpcIdStruct,
  jsonrpc: JsonRpcVersionStruct,
  result: JsonStruct
});
var JsonRpcFailureStruct = object2({
  id: JsonRpcIdStruct,
  jsonrpc: JsonRpcVersionStruct,
  error: JsonRpcErrorStruct
});
var JsonRpcResponseStruct = union([
  JsonRpcSuccessStruct,
  JsonRpcFailureStruct
]);
function isJsonRpcError(value) {
  return is(value, JsonRpcErrorStruct);
}

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/logging.mjs
var import_debug = __toESM(require_browser(), 1);
var globalLogger = (0, import_debug.default)("metamask");

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/time.mjs
var Duration;
(function(Duration2) {
  Duration2[Duration2["Millisecond"] = 1] = "Millisecond";
  Duration2[Duration2["Second"] = 1e3] = "Second";
  Duration2[Duration2["Minute"] = 6e4] = "Minute";
  Duration2[Duration2["Hour"] = 36e5] = "Hour";
  Duration2[Duration2["Day"] = 864e5] = "Day";
  Duration2[Duration2["Week"] = 6048e5] = "Week";
  Duration2[Duration2["Year"] = 31536e6] = "Year";
})(Duration = Duration || (Duration = {}));

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/versions.mjs
var import_semver = __toESM(require_semver(), 1);
var { gt: gtSemver, gtr: gtrSemver, satisfies: satisfiesSemver, valid: validSemVerVersion, validRange: validSemVerRange } = import_semver.default;
var VersionStruct = refine(string(), "Version", (value) => {
  if (validSemVerVersion(value) === null) {
    return `Expected SemVer version, got "${value}"`;
  }
  return true;
});
var VersionRangeStruct = refine(string(), "Version range", (value) => {
  if (validSemVerRange(value) === null) {
    return `Expected SemVer range, got "${value}"`;
  }
  return true;
});

// node_modules/.pnpm/@metamask+utils@11.8.1/node_modules/@metamask/utils/dist/unitsConversion.mjs
var zero = BigInt(0);
var negative1 = BigInt(-1);
var unitMap = {
  noether: "0",
  wei: "1",
  kwei: "1000",
  Kwei: "1000",
  babbage: "1000",
  femtoether: "1000",
  mwei: "1000000",
  Mwei: "1000000",
  lovelace: "1000000",
  picoether: "1000000",
  gwei: "1000000000",
  Gwei: "1000000000",
  shannon: "1000000000",
  nanoether: "1000000000",
  nano: "1000000000",
  szabo: "1000000000000",
  microether: "1000000000000",
  micro: "1000000000000",
  finney: "1000000000000000",
  milliether: "1000000000000000",
  milli: "1000000000000000",
  ether: "1000000000000000000",
  kether: "1000000000000000000000",
  grand: "1000000000000000000000",
  mether: "1000000000000000000000000",
  gether: "1000000000000000000000000000",
  tether: "1000000000000000000000000000000"
};
var unitMapBigInt = Object.fromEntries(Object.entries(unitMap).map(([key, value]) => [key, BigInt(value)]));
var unitLengths = Object.fromEntries(Object.entries(unitMap).map(([key, value]) => [key, value.length - 1 || 1]));

// node_modules/.pnpm/@metamask+rpc-errors@7.0.2/node_modules/@metamask/rpc-errors/dist/classes.mjs
var import_fast_safe_stringify = __toESM(require_fast_safe_stringify(), 1);

// node_modules/.pnpm/@metamask+rpc-errors@7.0.2/node_modules/@metamask/rpc-errors/dist/error-constants.mjs
var errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
};
var errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  "4001": {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  "4100": {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  "4200": {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  "4900": {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  "4901": {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
};

// node_modules/.pnpm/@metamask+rpc-errors@7.0.2/node_modules/@metamask/rpc-errors/dist/utils.mjs
var FALLBACK_ERROR_CODE = errorCodes.rpc.internal;
var FALLBACK_MESSAGE = "Unspecified error message. This is a bug, please report it.";
var FALLBACK_ERROR = {
  code: FALLBACK_ERROR_CODE,
  message: getMessageFromCode(FALLBACK_ERROR_CODE)
};
var JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
  if (isValidCode(code)) {
    const codeString = code.toString();
    if (hasProperty(errorValues, codeString)) {
      return errorValues[codeString].message;
    }
    if (isJsonRpcServerError(code)) {
      return JSON_RPC_SERVER_ERROR_MESSAGE;
    }
  }
  return fallbackMessage;
}
function isValidCode(code) {
  return Number.isInteger(code);
}
function serializeError(error, { fallbackError = FALLBACK_ERROR, shouldIncludeStack = true, shouldPreserveMessage = true } = {}) {
  if (!isJsonRpcError(fallbackError)) {
    throw new Error("Must provide fallback error with integer number code and string message.");
  }
  const serialized = buildError(error, fallbackError, shouldPreserveMessage);
  if (!shouldIncludeStack) {
    delete serialized.stack;
  }
  return serialized;
}
function buildError(error, fallbackError, shouldPreserveMessage) {
  if (error && typeof error === "object" && "serialize" in error && typeof error.serialize === "function") {
    return error.serialize();
  }
  if (isJsonRpcError(error)) {
    return error;
  }
  const originalMessage = getOriginalMessage(error);
  const cause = serializeCause(error);
  const fallbackWithCause = {
    ...fallbackError,
    ...shouldPreserveMessage && originalMessage && { message: originalMessage },
    data: { cause }
  };
  return fallbackWithCause;
}
function getOriginalMessage(error) {
  if (isObject2(error) && hasProperty(error, "message") && typeof error.message === "string" && error.message.length > 0) {
    return error.message;
  }
  return void 0;
}
function isJsonRpcServerError(code) {
  return code >= -32099 && code <= -32e3;
}
function serializeCause(error) {
  if (Array.isArray(error)) {
    return error.map((entry) => {
      if (isValidJson(entry)) {
        return entry;
      } else if (isObject2(entry)) {
        return serializeObject(entry);
      }
      return null;
    });
  } else if (isObject2(error)) {
    return serializeObject(error);
  }
  if (isValidJson(error)) {
    return error;
  }
  return null;
}
function serializeObject(object3) {
  return Object.getOwnPropertyNames(object3).reduce((acc, key) => {
    const value = object3[key];
    if (isValidJson(value)) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
function dataHasCause(data) {
  return isObject2(data) && hasProperty(data, "cause") && isObject2(data.cause);
}

// node_modules/.pnpm/@metamask+rpc-errors@7.0.2/node_modules/@metamask/rpc-errors/dist/classes.mjs
function $importDefault(module) {
  if (module?.__esModule) {
    return module.default;
  }
  return module;
}
var safeStringify = $importDefault(import_fast_safe_stringify.default);
var JsonRpcError = class extends Error {
  constructor(code, message, data) {
    if (!Number.isInteger(code)) {
      throw new Error('"code" must be an integer.');
    }
    if (!message || typeof message !== "string") {
      throw new Error('"message" must be a non-empty string.');
    }
    if (dataHasCause(data)) {
      super(message, { cause: data.cause });
      if (!hasProperty(this, "cause")) {
        Object.assign(this, { cause: data.cause });
      }
    } else {
      super(message);
    }
    if (data !== void 0) {
      this.data = data;
    }
    this.code = code;
  }
  /**
   * Get the error as JSON-serializable object.
   *
   * @returns A plain object with all public class properties.
   */
  serialize() {
    const serialized = {
      code: this.code,
      message: this.message
    };
    if (this.data !== void 0) {
      serialized.data = this.data;
      if (isPlainObject4(this.data)) {
        serialized.data.cause = serializeCause(this.data.cause);
      }
    }
    if (this.stack) {
      serialized.stack = this.stack;
    }
    return serialized;
  }
  /**
   * Get a string representation of the serialized error, omitting any circular
   * references.
   *
   * @returns A string representation of the serialized error.
   */
  toString() {
    return safeStringify(this.serialize(), stringifyReplacer, 2);
  }
};
var EthereumProviderError = class extends JsonRpcError {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   *
   * @param code - The JSON-RPC error code. Must be an integer in the
   * `1000 <= n <= 4999` range.
   * @param message - The JSON-RPC error message.
   * @param data - Optional data to include in the error.
   */
  constructor(code, message, data) {
    if (!isValidEthProviderCode(code)) {
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    }
    super(code, message, data);
  }
};
function isValidEthProviderCode(code) {
  return Number.isInteger(code) && code >= 1e3 && code <= 4999;
}
function stringifyReplacer(_, value) {
  if (value === "[Circular]") {
    return void 0;
  }
  return value;
}

// node_modules/.pnpm/@metamask+rpc-errors@7.0.2/node_modules/@metamask/rpc-errors/dist/errors.mjs
var rpcErrors = {
  /**
   * Get a JSON RPC 2.0 Parse (-32700) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  parse: (arg) => getJsonRpcError(errorCodes.rpc.parse, arg),
  /**
   * Get a JSON RPC 2.0 Invalid Request (-32600) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidRequest: (arg) => getJsonRpcError(errorCodes.rpc.invalidRequest, arg),
  /**
   * Get a JSON RPC 2.0 Invalid Params (-32602) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidParams: (arg) => getJsonRpcError(errorCodes.rpc.invalidParams, arg),
  /**
   * Get a JSON RPC 2.0 Method Not Found (-32601) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  methodNotFound: (arg) => getJsonRpcError(errorCodes.rpc.methodNotFound, arg),
  /**
   * Get a JSON RPC 2.0 Internal (-32603) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  internal: (arg) => getJsonRpcError(errorCodes.rpc.internal, arg),
  /**
   * Get a JSON RPC 2.0 Server error.
   * Permits integer error codes in the [ -32099 <= -32005 ] range.
   * Codes -32000 through -32004 are reserved by EIP-1474.
   *
   * @param opts - The error options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  server: (opts) => {
    if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
      throw new Error("Ethereum RPC Server errors must provide single object argument.");
    }
    const { code } = opts;
    if (!Number.isInteger(code) || code > -32005 || code < -32099) {
      throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
    }
    return getJsonRpcError(code, opts);
  },
  /**
   * Get an Ethereum JSON RPC Invalid Input (-32000) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidInput: (arg) => getJsonRpcError(errorCodes.rpc.invalidInput, arg),
  /**
   * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  resourceNotFound: (arg) => getJsonRpcError(errorCodes.rpc.resourceNotFound, arg),
  /**
   * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  resourceUnavailable: (arg) => getJsonRpcError(errorCodes.rpc.resourceUnavailable, arg),
  /**
   * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  transactionRejected: (arg) => getJsonRpcError(errorCodes.rpc.transactionRejected, arg),
  /**
   * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  methodNotSupported: (arg) => getJsonRpcError(errorCodes.rpc.methodNotSupported, arg),
  /**
   * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  limitExceeded: (arg) => getJsonRpcError(errorCodes.rpc.limitExceeded, arg)
};
var providerErrors = {
  /**
   * Get an Ethereum Provider User Rejected Request (4001) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  userRejectedRequest: (arg) => {
    return getEthProviderError(errorCodes.provider.userRejectedRequest, arg);
  },
  /**
   * Get an Ethereum Provider Unauthorized (4100) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  unauthorized: (arg) => {
    return getEthProviderError(errorCodes.provider.unauthorized, arg);
  },
  /**
   * Get an Ethereum Provider Unsupported Method (4200) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  unsupportedMethod: (arg) => {
    return getEthProviderError(errorCodes.provider.unsupportedMethod, arg);
  },
  /**
   * Get an Ethereum Provider Not Connected (4900) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  disconnected: (arg) => {
    return getEthProviderError(errorCodes.provider.disconnected, arg);
  },
  /**
   * Get an Ethereum Provider Chain Not Connected (4901) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  chainDisconnected: (arg) => {
    return getEthProviderError(errorCodes.provider.chainDisconnected, arg);
  },
  /**
   * Get a custom Ethereum Provider error.
   *
   * @param opts - The error options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  custom: (opts) => {
    if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
      throw new Error("Ethereum Provider custom errors must provide single object argument.");
    }
    const { code, message, data } = opts;
    if (!message || typeof message !== "string") {
      throw new Error('"message" must be a nonempty string');
    }
    return new EthereumProviderError(code, message, data);
  }
};
function getJsonRpcError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new JsonRpcError(code, message ?? getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new EthereumProviderError(code, message ?? getMessageFromCode(code), data);
}
function parseOpts(arg) {
  if (arg) {
    if (typeof arg === "string") {
      return [arg];
    } else if (typeof arg === "object" && !Array.isArray(arg)) {
      const { message, data } = arg;
      if (message && typeof message !== "string") {
        throw new Error("Must specify string message.");
      }
      return [message ?? void 0, data];
    }
  }
  return [];
}

// node_modules/.pnpm/@gemini-wallet+core@0.3.2_viem@2.41.2_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_zod@4.1.13_/node_modules/@gemini-wallet/core/dist/index.js
var package_default = {
  name: "@gemini-wallet/core",
  version: "0.3.2",
  description: "Core SDK for Gemini Wallet integration with popup communication",
  main: "./dist/index.cjs",
  types: "./dist/index.d.ts",
  type: "module",
  repository: {
    type: "git",
    url: "git+https://github.com/gemini/gemini-wallet-core.git"
  },
  homepage: "https://keys.gemini.com",
  bugs: {
    url: "https://github.com/gemini/gemini-wallet-core/issues"
  },
  license: "MIT",
  author: "Gemini",
  files: [
    "dist",
    "src",
    "README.md",
    "LICENSE"
  ],
  exports: {
    ".": {
      types: "./dist/index.d.ts",
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    },
    "./package.json": "./package.json"
  },
  scripts: {
    build: "dotenv -e .env.production -- tsup",
    dev: "dotenv -e .env.local -- tsup --watch",
    typecheck: "tsc --noEmit",
    lint: "eslint ./src",
    "lint:ci": "eslint --max-warnings 0 ./src",
    "lint:fix": "eslint ./src --fix",
    test: "bun test"
  },
  dependencies: {
    "@metamask/rpc-errors": "7.0.2",
    eventemitter3: "5.0.1"
  },
  devDependencies: {
    "@eslint/eslintrc": "3.3.1",
    "@eslint/js": "9.38.0",
    "@types/node": "22.13.0",
    "dotenv-cli": "10.0.0",
    "esbuild-plugin-replace": "1.4.0",
    eslint: "9.38.0",
    "eslint-config-prettier": "10.1.8",
    "eslint-config-turbo": "2.5.6",
    "eslint-plugin-import": "2.32.0",
    "eslint-plugin-only-warn": "1.1.0",
    "eslint-plugin-prettier": "5.5.4",
    "eslint-plugin-simple-import-sort": "12.1.1",
    "eslint-plugin-sort-keys-fix": "1.1.2",
    globals: "16.4.0",
    prettier: "3.6.2",
    tsup: "8.5.0",
    typescript: "5.5.3",
    "typescript-eslint": "8.40.0",
    vitest: "3.2.4"
  },
  peerDependencies: {
    viem: ">=2.0.0"
  },
  keywords: [
    "gemini",
    "wallet",
    "sdk",
    "ethereum",
    "web3",
    "crypto"
  ],
  module: "./dist/index.js"
};
var DEFAULT_BACKEND_URL = "https://keys.gemini.com";
var SDK_BACKEND_URL = DEFAULT_BACKEND_URL;
var SDK_VERSION = package_default.version;
var DEFAULT_CHAIN_ID = 42161;
var MAINNET_CHAIN_IDS = {
  ARBITRUM_ONE: 42161,
  BASE: 8453,
  ETHEREUM: 1,
  OP_MAINNET: 10,
  POLYGON: 137
};
var TESTNET_CHAIN_IDS = {
  ARBITRUM_SEPOLIA: 421614,
  BASE_SEPOLIA: 84532,
  OP_SEPOLIA: 11155420,
  POLYGON_AMOY: 80002,
  SEPOLIA: 11155111
};
var SUPPORTED_CHAIN_IDS = [...Object.values(MAINNET_CHAIN_IDS), ...Object.values(TESTNET_CHAIN_IDS)];
function getDefaultRpcUrl(chainId) {
  const chainMap = {
    [mainnet.id]: mainnet.rpcUrls.default.http[0],
    [arbitrum.id]: arbitrum.rpcUrls.default.http[0],
    [optimism.id]: optimism.rpcUrls.default.http[0],
    [base.id]: base.rpcUrls.default.http[0],
    [polygon.id]: polygon.rpcUrls.default.http[0],
    [sepolia.id]: sepolia.rpcUrls.default.http[0],
    [arbitrumSepolia.id]: arbitrumSepolia.rpcUrls.default.http[0],
    [optimismSepolia.id]: optimismSepolia.rpcUrls.default.http[0],
    [baseSepolia.id]: baseSepolia.rpcUrls.default.http[0],
    [polygonAmoy.id]: polygonAmoy.rpcUrls.default.http[0]
  };
  return chainMap[chainId];
}
var GeminiSdkEvent = ((GeminiSdkEvent2) => {
  GeminiSdkEvent2["POPUP_LOADED"] = "POPUP_LOADED";
  GeminiSdkEvent2["POPUP_UNLOADED"] = "POPUP_UNLOADED";
  GeminiSdkEvent2["POPUP_APP_CONTEXT"] = "POPUP_APP_CONTEXT";
  GeminiSdkEvent2["SDK_CONNECT"] = "SDK_CONNECT";
  GeminiSdkEvent2["SDK_DISCONNECT"] = "SDK_DISCONNECT";
  GeminiSdkEvent2["SDK_SEND_TRANSACTION"] = "SDK_SEND_TRANSACTION";
  GeminiSdkEvent2["SDK_SIGN_DATA"] = "SDK_SIGN_DATA";
  GeminiSdkEvent2["SDK_SIGN_TYPED_DATA"] = "SDK_SIGN_TYPED_DATA";
  GeminiSdkEvent2["SDK_SWITCH_CHAIN"] = "SDK_SWITCH_CHAIN";
  GeminiSdkEvent2["SDK_OPEN_SETTINGS"] = "SDK_OPEN_SETTINGS";
  GeminiSdkEvent2["SDK_CURRENT_ACCOUNT"] = "SDK_CURRENT_ACCOUNT";
  GeminiSdkEvent2["SDK_SEND_BATCH_CALLS"] = "SDK_SEND_BATCH_CALLS";
  GeminiSdkEvent2["SDK_GET_CAPABILITIES"] = "SDK_GET_CAPABILITIES";
  GeminiSdkEvent2["SDK_GET_CALLS_STATUS"] = "SDK_GET_CALLS_STATUS";
  GeminiSdkEvent2["SDK_SHOW_CALLS_STATUS"] = "SDK_SHOW_CALLS_STATUS";
  return GeminiSdkEvent2;
})(GeminiSdkEvent || {});
var ProviderEventEmitter = class extends import_index.default {
};
var SHARED_CONTRACT_ADDRESSES = {
  ATTESTER: "0x000474392a9cd86a4687354f1Ce2964B52e97484",
  BOOTSTRAPPER: "0x00000000D3254452a909E4eeD47455Af7E27C289",
  REGISTRY: "0x000000000069E2a187AEFFb852bF3cCdC95151B2"
};
var V2_CONTRACT_ADDRESSES = {
  ...SHARED_CONTRACT_ADDRESSES,
  ACCOUNT_IMPLEMENTATION: "0x00000000029d9c8b864DD51d6bb0d99FB72D650b",
  FACTORY: "0x000000000452377e1Bd9e72E939855ECb9363Cab",
  WEBAUTHN_VALIDATOR: "0x7ab16Ff354AcB328452F1D445b3Ddee9a91e9e69"
};
var V1_CONTRACT_ADDRESSES = {
  ...SHARED_CONTRACT_ADDRESSES,
  ACCOUNT_IMPLEMENTATION: "0x0006050168DE255a8672ACaD4821e721CBA44337",
  FACTORY: "0x00E58DF70FaB983a324c4C068c82d20407579FaC",
  WEBAUTHN_VALIDATOR: "0xbA45a2BFb8De3D24cA9D7F1B551E14dFF5d690Fd"
};
var POPUP_WIDTH2 = 420;
var POPUP_HEIGHT2 = 650;
var openPopup = (url) => {
  const left = (window.innerWidth - POPUP_WIDTH2) / 2 + window.screenX;
  const top = (window.innerHeight - POPUP_HEIGHT2) / 2 + window.screenY;
  const popupId = `wallet_${window?.crypto?.randomUUID()}`;
  const popup = window.open(url, popupId, `width=${POPUP_WIDTH2}, height=${POPUP_HEIGHT2}, left=${left}, top=${top}`);
  popup?.focus();
  if (!popup) {
    throw rpcErrors.internal("Pop up window failed to open");
  }
  return popup;
};
var closePopup = (popup) => {
  if (popup && !popup.closed) {
    popup.opener?.focus();
    popup.close();
  }
};
var hexStringFromNumber = (num) => {
  return `0x${BigInt(num).toString(16)}`;
};
var safeJsonStringify = (obj) => JSON.stringify(obj, (_, value) => typeof value === "bigint" ? value.toString() + "n" : value, 2);
var Communicator = class {
  constructor({ appMetadata, onDisconnectCallback }) {
    this.popup = null;
    this.listeners = /* @__PURE__ */ new Map();
    this.postMessage = async (message) => {
      const popup = await this.waitForPopupLoaded();
      popup.postMessage(message, this.url.origin);
    };
    this.postRequestAndWaitForResponse = async (request) => {
      const responsePromise = this.onMessage(({ requestId }) => requestId === request.requestId);
      this.postMessage(request);
      return await responsePromise;
    };
    this.onMessage = (predicate) => {
      return new Promise((resolve, reject) => {
        const listener = (event) => {
          if (event.origin !== this.url.origin) return;
          const message = event.data;
          if (predicate(message)) {
            resolve(message);
            window.removeEventListener("message", listener);
            this.listeners.delete(listener);
          }
        };
        window.addEventListener("message", listener);
        this.listeners.set(listener, { reject });
      });
    };
    this.onRequestCancelled = () => {
      closePopup(this.popup);
      this.popup = null;
      this.listeners.forEach(({ reject }, listener) => {
        reject(providerErrors.userRejectedRequest());
        window.removeEventListener("message", listener);
      });
      this.listeners.clear();
    };
    this.waitForPopupLoaded = () => {
      if (this.popup && !this.popup.closed) {
        this.popup.focus();
        return Promise.resolve(this.popup);
      }
      this.popup = openPopup(this.url);
      this.onMessage(
        ({ event }) => event === "POPUP_UNLOADED"
        /* POPUP_UNLOADED */
      ).then(this.onRequestCancelled).catch(() => {
      });
      this.onMessage(
        ({ event }) => event === "SDK_DISCONNECT"
        /* SDK_DISCONNECT */
      ).then(() => {
        this.onDisconnectCallback?.();
        this.onRequestCancelled();
      }).catch(() => {
      });
      return this.onMessage(
        ({ event }) => event === "POPUP_LOADED"
        /* POPUP_LOADED */
      ).then((message) => {
        this.postMessage({
          chainId: DEFAULT_CHAIN_ID,
          data: {
            appMetadata: this.appMetadata,
            origin: window.location.origin,
            sdkVersion: SDK_VERSION
          },
          event: "POPUP_APP_CONTEXT",
          origin: window.location.origin,
          requestId: message.requestId
        });
      }).then(() => {
        if (!this.popup) throw rpcErrors.internal();
        return this.popup;
      });
    };
    this.url = new URL(SDK_BACKEND_URL);
    this.appMetadata = appMetadata;
    this.onDisconnectCallback = onDisconnectCallback;
  }
};
var memoryStorage = {};
var GeminiStorage = class {
  constructor({ scope = "@gemini", module = "wallet" } = {}) {
    this.scope = scope;
    this.module = module;
  }
  scopedKey(key) {
    return `${this.scope}.${this.module}.${key}`;
  }
  async storeObject(key, item) {
    const json = safeJsonStringify(item);
    await this.setItem(key, json);
  }
  async loadObject(key, fallback3) {
    const item = await this.getItem(key);
    if (!item) {
      await this.storeObject(key, fallback3);
      return fallback3;
    }
    try {
      return JSON.parse(item);
    } catch (error) {
      console.error(`Error parsing JSON for key ${key}:`, error);
      return fallback3;
    }
  }
  // eslint-disable-next-line require-await
  async setItem(key, value) {
    const scoped = this.scopedKey(key);
    try {
      localStorage.setItem(scoped, value);
    } catch (e) {
      console.warn("localStorage not available, using memory storage", e);
      memoryStorage[scoped] = value;
    }
  }
  // eslint-disable-next-line require-await
  async getItem(key) {
    const scoped = this.scopedKey(key);
    try {
      return localStorage.getItem(scoped);
    } catch (e) {
      console.warn("localStorage not available, using memory storage", e);
      return memoryStorage[scoped] || null;
    }
  }
  // eslint-disable-next-line require-await
  async removeItem(key) {
    const scoped = this.scopedKey(key);
    try {
      localStorage.removeItem(scoped);
    } catch (e) {
      console.warn("localStorage not available, using memory storage", e);
      delete memoryStorage[scoped];
    }
  }
  async removeItems(keys) {
    await Promise.all(keys.map((key) => this.removeItem(key)));
  }
};
var STORAGE_ETH_ACCOUNTS_KEY = "eth-accounts";
var STORAGE_ETH_ACTIVE_CHAIN_KEY = "eth-active-chain";
var STORAGE_CALL_BATCHES_KEY = "call-batches";
function isChainSupportedByGeminiSw(chainId) {
  return SUPPORTED_CHAIN_IDS.includes(chainId);
}
var GeminiWallet = class {
  constructor({ appMetadata, chain, onDisconnectCallback, storage }) {
    this.accounts = [];
    this.chain = { id: DEFAULT_CHAIN_ID };
    this.communicator = new Communicator({
      appMetadata,
      onDisconnectCallback
    });
    this.storage = storage || new GeminiStorage();
    const fallbackChainId = chain?.id ?? DEFAULT_CHAIN_ID;
    const fallbackRpcUrl = chain?.rpcUrl ?? getDefaultRpcUrl(fallbackChainId);
    const defaultChain = {
      id: fallbackChainId,
      rpcUrl: fallbackRpcUrl
    };
    this.initPromise = this.initializeFromStorage(defaultChain);
  }
  async initializeFromStorage(defaultChain) {
    const fallbackChain = {
      ...defaultChain,
      rpcUrl: defaultChain.rpcUrl || getDefaultRpcUrl(defaultChain.id)
    };
    const [storedChain, storedAccounts] = await Promise.all([
      this.storage.loadObject(STORAGE_ETH_ACTIVE_CHAIN_KEY, fallbackChain),
      this.storage.loadObject(STORAGE_ETH_ACCOUNTS_KEY, this.accounts)
    ]);
    this.chain = {
      ...storedChain,
      rpcUrl: storedChain.rpcUrl || getDefaultRpcUrl(storedChain.id)
    };
    this.accounts = storedAccounts;
  }
  async ensureInitialized() {
    await this.initPromise;
  }
  async connect() {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup({
      chainId: this.chain.id,
      event: "SDK_CONNECT",
      origin: window.location.origin
    });
    this.accounts = response.data.address ? [response.data.address] : [];
    await this.storage.storeObject(STORAGE_ETH_ACCOUNTS_KEY, this.accounts);
    return this.accounts;
  }
  async disconnect() {
    await this.ensureInitialized();
    this.accounts = [];
    await this.storage.storeObject(STORAGE_ETH_ACCOUNTS_KEY, this.accounts);
  }
  async switchChain({ id }) {
    await this.ensureInitialized();
    if (isChainSupportedByGeminiSw(id)) {
      this.chain = {
        id,
        rpcUrl: getDefaultRpcUrl(id)
      };
      await this.storage.storeObject(STORAGE_ETH_ACTIVE_CHAIN_KEY, this.chain);
      return null;
    }
    const response = await this.sendMessageToPopup({
      chainId: this.chain.id,
      data: id,
      event: "SDK_SWITCH_CHAIN",
      origin: window.location.origin
    });
    return response.data.error ?? "Unsupported chain.";
  }
  async sendTransaction(txData) {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup({
      chainId: this.chain.id,
      data: txData,
      event: "SDK_SEND_TRANSACTION",
      origin: window.location.origin
    });
    return response.data;
  }
  async signData({ message }) {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup({
      chainId: this.chain.id,
      data: { message },
      event: "SDK_SIGN_DATA",
      origin: window.location.origin
    });
    return response.data;
  }
  async signTypedData({
    message,
    types,
    primaryType,
    domain
  }) {
    await this.ensureInitialized();
    const response = await this.sendMessageToPopup({
      chainId: this.chain.id,
      data: {
        domain,
        message,
        primaryType,
        types
      },
      event: "SDK_SIGN_TYPED_DATA",
      origin: window.location.origin
    });
    return response.data;
  }
  async openSettings() {
    await this.ensureInitialized();
    await this.sendMessageToPopup({
      chainId: this.chain.id,
      data: {},
      event: "SDK_OPEN_SETTINGS",
      origin: window.location.origin
    });
  }
  // EIP-5792 Wallet Call API Methods
  getCapabilities(requestedChainIds) {
    const capabilities = {};
    const chainIds = requestedChainIds?.map((id) => parseInt(id, 16)) || [this.chain.id];
    for (const chainId of chainIds) {
      const chainIdHex = hexStringFromNumber(chainId);
      capabilities[chainIdHex] = {
        atomic: {
          status: "supported"
          // Smart accounts support atomic batch execution
        },
        paymasterService: {
          supported: true
        }
      };
    }
    return capabilities;
  }
  async sendCalls(params) {
    await this.ensureInitialized();
    const batchId = window?.crypto?.randomUUID() || `batch-${Date.now()}-${Math.random()}`;
    const requestedChainId = parseInt(params.chainId, 16);
    if (requestedChainId !== this.chain.id) {
      throw new Error(`Chain mismatch. Expected ${this.chain.id}, got ${requestedChainId}`);
    }
    if (!params.calls || params.calls.length === 0) {
      throw new Error("No calls provided");
    }
    const batchMetadata = {
      calls: params.calls,
      capabilities: params.capabilities,
      chainId: params.chainId,
      from: params.from,
      id: batchId,
      status: "pending",
      timestamp: Date.now()
    };
    const batches = await this.storage.loadObject(STORAGE_CALL_BATCHES_KEY, {});
    batches[batchId] = batchMetadata;
    await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);
    try {
      const response = await this.sendMessageToPopup({
        chainId: this.chain.id,
        data: {
          calls: params.calls
        },
        event: "SDK_SEND_BATCH_CALLS",
        origin: window.location.origin
      });
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      batchMetadata.transactionHash = response.data.hash;
      batchMetadata.status = "pending";
      batches[batchId] = batchMetadata;
      await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);
      return {
        capabilities: {
          caip345: {
            caip2: `eip155:${requestedChainId}`,
            transactionHashes: [response.data.hash]
          }
        },
        id: batchId
      };
    } catch (error) {
      batchMetadata.status = "failed";
      batches[batchId] = batchMetadata;
      await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);
      throw error;
    }
  }
  async getCallsStatus(batchId) {
    await this.ensureInitialized();
    const batches = await this.storage.loadObject(STORAGE_CALL_BATCHES_KEY, {});
    const batch = batches[batchId];
    if (!batch) {
      throw new Error(`Unknown bundle ID: ${batchId}`);
    }
    if (batch.transactionHash && this.chain.rpcUrl) {
      try {
        const response = await fetch(this.chain.rpcUrl, {
          body: JSON.stringify({
            id: 1,
            jsonrpc: "2.0",
            method: "eth_getTransactionReceipt",
            params: [batch.transactionHash]
          }),
          headers: { "Content-Type": "application/json" },
          method: "POST"
        });
        const json = await response.json();
        const receipt = json.result;
        if (receipt) {
          const receiptStatus = receipt.status === "0x1" ? "confirmed" : "reverted";
          batch.status = receiptStatus;
          batches[batchId] = batch;
          await this.storage.storeObject(STORAGE_CALL_BATCHES_KEY, batches);
          return {
            atomic: true,
            chainId: batch.chainId,
            id: batchId,
            receipts: [
              {
                blockHash: receipt.blockHash,
                blockNumber: receipt.blockNumber,
                gasUsed: receipt.gasUsed,
                logs: receipt.logs.map((log) => ({
                  address: log.address,
                  data: log.data,
                  topics: log.topics
                })),
                status: receiptStatus === "confirmed" ? "success" : "reverted",
                transactionHash: receipt.transactionHash
              }
            ],
            status: receiptStatus === "confirmed" ? 200 : 500,
            version: "2.0.0"
          };
        }
      } catch (error) {
        console.error("Failed to fetch transaction receipt:", error);
      }
    }
    let statusCode;
    switch (batch.status) {
      case "pending":
        statusCode = 100;
        break;
      case "confirmed":
        statusCode = 200;
        break;
      case "failed":
        statusCode = 400;
        break;
      case "reverted":
        statusCode = 500;
        break;
      default:
        statusCode = 100;
    }
    return {
      atomic: true,
      chainId: batch.chainId,
      id: batchId,
      status: statusCode,
      version: "2.0.0"
    };
  }
  async showCallsStatus(batchId) {
    await this.ensureInitialized();
    const batches = await this.storage.loadObject(STORAGE_CALL_BATCHES_KEY, {});
    const batch = batches[batchId];
    if (!batch) {
      throw new Error(`Unknown bundle ID: ${batchId}`);
    }
  }
  sendMessageToPopup(request) {
    return this.communicator.postRequestAndWaitForResponse({
      ...request,
      requestId: window?.crypto?.randomUUID()
    });
  }
};
var fetchRpcRequest = async (request, rpcUrl) => {
  const requestBody = {
    ...request,
    id: window?.crypto?.randomUUID(),
    jsonrpc: "2.0"
  };
  const res = await window.fetch(rpcUrl, {
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    mode: "cors"
  });
  const { result, error } = await res.json();
  if (error) throw error;
  return result;
};
function validateRpcRequestArgs(args) {
  if (!args || typeof args !== "object" || Array.isArray(args)) {
    throw rpcErrors.invalidParams({
      message: "Expected a single, non-array, object argument."
    });
  }
  const { method, params } = args;
  if (typeof method !== "string" || method.length === 0) {
    throw rpcErrors.invalidParams({
      message: "'args.method' must be a non-empty string."
    });
  }
  if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
    throw rpcErrors.invalidParams({
      message: "'args.params' must be an object or array if provided."
    });
  }
}
function convertSendValuesToBigInt(tx) {
  const FIELDS_TO_NORMALIZE = ["value", "gas", "gasPrice", "maxPriorityFeePerGas", "maxFeePerGas"];
  const normalized = { ...tx };
  for (const field of FIELDS_TO_NORMALIZE) {
    if (!(field in tx)) continue;
    const value = tx[field];
    if (typeof value === "bigint") continue;
    if (isHex(value)) {
      normalized[field] = BigInt(value);
    }
  }
  return normalized;
}
var GeminiWalletProvider = class extends ProviderEventEmitter {
  constructor(providerConfig) {
    super();
    this.wallet = null;
    this.config = providerConfig;
    const userDisconnectCallback = providerConfig.onDisconnectCallback;
    this.wallet = new GeminiWallet({
      ...providerConfig,
      onDisconnectCallback: () => {
        userDisconnectCallback?.();
        this.disconnect();
      }
    });
  }
  async request(args) {
    try {
      validateRpcRequestArgs(args);
      if (!this.wallet?.accounts?.length) {
        switch (args.method) {
          case "eth_requestAccounts": {
            if (!this.wallet) {
              const userDisconnectCallback = this.config.onDisconnectCallback;
              this.wallet = new GeminiWallet({
                ...this.config,
                onDisconnectCallback: () => {
                  userDisconnectCallback?.();
                  this.disconnect();
                }
              });
            }
            await this.wallet.connect();
            this.emit("accountsChanged", this.wallet.accounts);
            break;
          }
          case "net_version":
            return DEFAULT_CHAIN_ID;
          case "eth_chainId":
            return hexStringFromNumber(DEFAULT_CHAIN_ID);
          default: {
            throw providerErrors.unauthorized();
          }
        }
      }
      let response;
      let requestParams;
      switch (args.method) {
        case "eth_requestAccounts":
        case "eth_accounts":
          response = this.wallet.accounts;
          break;
        case "net_version":
          response = this.wallet.chain.id;
          break;
        case "eth_chainId":
          response = hexStringFromNumber(this.wallet.chain.id);
          break;
        case "personal_sign":
        case "wallet_sign":
          requestParams = args.params;
          response = await this.wallet.signData({
            account: requestParams[1],
            message: requestParams[0]
          });
          if (response.error) {
            throw rpcErrors.transactionRejected(response.error);
          } else {
            response = response.hash;
          }
          break;
        case "eth_sendTransaction":
        case "wallet_sendTransaction":
          requestParams = args.params;
          requestParams = convertSendValuesToBigInt(requestParams[0]);
          response = await this.wallet.sendTransaction(requestParams);
          if (response.error) {
            throw rpcErrors.transactionRejected(response.error);
          } else {
            response = response.hash;
          }
          break;
        case "wallet_switchEthereumChain": {
          const rawParams = args.params;
          let chainId;
          if (Array.isArray(rawParams) && rawParams[0]?.chainId) {
            chainId = parseInt(rawParams[0].chainId, 16);
          } else if (rawParams && typeof rawParams === "object" && "id" in rawParams && Number.isInteger(rawParams.id)) {
            chainId = rawParams.id;
          } else {
            throw rpcErrors.invalidParams(
              "Invalid chain id argument. Expected [{ chainId: hex_string }] or { id: number }."
            );
          }
          response = await this.wallet.switchChain({ id: chainId });
          if (response) {
            throw providerErrors.custom({ code: 4902, message: response });
          }
          await this.emit("chainChanged", hexStringFromNumber(chainId));
          break;
        }
        case "eth_signTypedData_v1":
        case "eth_signTypedData_v2":
        case "eth_signTypedData_v3":
        case "eth_signTypedData_v4":
        case "eth_signTypedData": {
          requestParams = args.params;
          const signedTypedDataParams = JSON.parse(requestParams[1]);
          response = await this.wallet.signTypedData({
            account: requestParams[0],
            domain: signedTypedDataParams.domain,
            message: signedTypedDataParams.message,
            primaryType: signedTypedDataParams.primaryType,
            types: signedTypedDataParams.types
          });
          if (response.error) {
            throw rpcErrors.transactionRejected(response.error);
          } else {
            response = response.hash;
          }
          break;
        }
        // EIP-5792 Wallet Call API
        case "wallet_getCapabilities": {
          const capabilityParams = Array.isArray(args.params) ? args.params : void 0;
          response = this.getCapabilities(capabilityParams);
          break;
        }
        case "wallet_sendCalls": {
          requestParams = args.params;
          response = await this.sendCalls(requestParams[0]);
          break;
        }
        case "wallet_getCallsStatus": {
          requestParams = args.params;
          response = await this.getCallsStatus(requestParams[0]);
          break;
        }
        case "wallet_showCallsStatus": {
          requestParams = args.params;
          await this.showCallsStatus(requestParams[0]);
          response = null;
          break;
        }
        // TODO: not yet implemented or unclear if we support
        case "eth_ecRecover":
        case "eth_subscribe":
        case "eth_unsubscribe":
        case "personal_ecRecover":
        case "eth_signTransaction":
        case "wallet_watchAsset":
        case "wallet_grantPermissions":
          throw rpcErrors.methodNotSupported("Not yet implemented.");
        // not supported
        case "eth_sign":
        case "eth_coinbase":
        case "wallet_addEthereumChain":
          throw rpcErrors.methodNotSupported();
        // call rpc directly for everything else
        default:
          if (!this.wallet.chain.rpcUrl)
            throw rpcErrors.internal(`RPC URL missing for current chain (${this.wallet.chain.id})`);
          return fetchRpcRequest(args, this.wallet.chain.rpcUrl);
      }
      return response;
    } catch (error) {
      const { code } = error;
      if (code === errorCodes.provider.unauthorized) this.disconnect();
      return Promise.reject(serializeError(error));
    }
  }
  // custom wallet function to open settings page
  async openSettings() {
    await this.wallet?.openSettings();
  }
  // EIP-5792 Implementation Methods - delegating to wallet
  getCapabilities(params) {
    if (!this.wallet) {
      throw providerErrors.unauthorized();
    }
    const requestedChainIds = params?.[0];
    return this.wallet.getCapabilities(requestedChainIds);
  }
  async sendCalls(params) {
    if (!this.wallet) {
      throw providerErrors.unauthorized();
    }
    try {
      return await this.wallet.sendCalls(params);
    } catch (error) {
      throw rpcErrors.transactionRejected(error instanceof Error ? error.message : String(error));
    }
  }
  async getCallsStatus(batchId) {
    if (!this.wallet) {
      throw providerErrors.unauthorized();
    }
    try {
      return await this.wallet.getCallsStatus(batchId);
    } catch (error) {
      throw rpcErrors.invalidParams(error instanceof Error ? error.message : String(error));
    }
  }
  async showCallsStatus(batchId) {
    if (!this.wallet) {
      throw providerErrors.unauthorized();
    }
    try {
      await this.wallet.showCallsStatus(batchId);
    } catch (error) {
      throw rpcErrors.invalidParams(error instanceof Error ? error.message : String(error));
    }
  }
  async disconnect() {
    if (this.wallet) {
      const storage = this.config.storage || new GeminiStorage();
      await storage.removeItem(STORAGE_ETH_ACCOUNTS_KEY);
      await storage.removeItem(STORAGE_ETH_ACTIVE_CHAIN_KEY);
    }
    this.wallet = null;
    this.config.onDisconnectCallback?.();
    await this.emit("disconnect", "User initiated disconnection");
    await this.emit("accountsChanged", []);
  }
};

// node_modules/.pnpm/@wagmi+connectors@6.2.0_28dd68cab15260b19c2f69bbbf386dcc/node_modules/@wagmi/connectors/dist/esm/gemini.js
gemini.type = "gemini";
function gemini(parameters = {}) {
  let walletProvider;
  let onAccountsChanged;
  let onChainChanged;
  let onDisconnect;
  return createConnector((config) => ({
    id: "gemini",
    name: "Gemini Wallet",
    type: gemini.type,
    icon: "https://keys.gemini.com/images/gemini-wallet-logo.svg",
    async connect({ chainId, withCapabilities } = {}) {
      try {
        const provider = await this.getProvider();
        const accounts = await provider.request({
          method: "eth_requestAccounts"
        });
        if (!onAccountsChanged) {
          onAccountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", onAccountsChanged);
        }
        if (!onChainChanged) {
          onChainChanged = this.onChainChanged.bind(this);
          provider.on("chainChanged", onChainChanged);
        }
        if (!onDisconnect) {
          onDisconnect = this.onDisconnect.bind(this);
          provider.on("disconnect", onDisconnect);
        }
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code)
              throw error;
            return { id: currentChainId };
          });
          currentChainId = chain?.id ?? currentChainId;
        }
        return {
          // TODO(v3): Make `withCapabilities: true` default behavior
          accounts: withCapabilities ? accounts.map((address) => ({ address, capabilities: {} })) : accounts,
          chainId: currentChainId
        };
      } catch (error) {
        if (/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(error.message))
          throw new UserRejectedRequestError(error);
        throw error;
      }
    },
    async disconnect() {
      const provider = await this.getProvider();
      if (onAccountsChanged) {
        provider.removeListener("accountsChanged", onAccountsChanged);
        onAccountsChanged = void 0;
      }
      if (onChainChanged) {
        provider.removeListener("chainChanged", onChainChanged);
        onChainChanged = void 0;
      }
      if (onDisconnect) {
        provider.removeListener("disconnect", onDisconnect);
        onDisconnect = void 0;
      }
      await provider.disconnect();
    },
    async getAccounts() {
      const provider = await this.getProvider();
      const accounts = await provider.request({
        method: "eth_accounts"
      });
      return accounts.map((x) => getAddress(x));
    },
    async getChainId() {
      const provider = await this.getProvider();
      const chainId = await provider.request({
        method: "eth_chainId"
      });
      return Number(chainId);
    },
    async getProvider() {
      if (!walletProvider) {
        walletProvider = new GeminiWalletProvider({
          appMetadata: parameters.appMetadata ?? {},
          chain: {
            id: config.chains[0]?.id ?? 1,
            rpcUrl: config.chains[0]?.rpcUrls?.default?.http[0]
          }
        });
      }
      return walletProvider;
    },
    async isAuthorized() {
      try {
        const accounts = await this.getAccounts();
        return Boolean(accounts.length);
      } catch {
        return false;
      }
    },
    async switchChain({ chainId }) {
      const chain = config.chains.find((chain2) => chain2.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      const provider = await this.getProvider();
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: numberToHex(chainId) }]
        });
        return chain;
      } catch (error) {
        throw new SwitchChainError(error);
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0)
        this.onDisconnect();
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onDisconnect() {
      config.emitter.emit("disconnect");
      const provider = await this.getProvider();
      if (onAccountsChanged) {
        provider.removeListener("accountsChanged", onAccountsChanged);
        onAccountsChanged = void 0;
      }
      if (onChainChanged) {
        provider.removeListener("chainChanged", onChainChanged);
        onChainChanged = void 0;
      }
      if (onDisconnect) {
        provider.removeListener("disconnect", onDisconnect);
        onDisconnect = void 0;
      }
    }
  }));
}

// node_modules/.pnpm/@wagmi+connectors@6.2.0_28dd68cab15260b19c2f69bbbf386dcc/node_modules/@wagmi/connectors/dist/esm/metaMask.js
metaMask.type = "metaMask";
function metaMask(parameters = {}) {
  let sdk;
  let provider;
  let providerPromise;
  let accountsChanged;
  let chainChanged;
  let connect2;
  let displayUri;
  let disconnect2;
  return createConnector((config) => ({
    id: "metaMaskSDK",
    name: "MetaMask",
    rdns: ["io.metamask", "io.metamask.mobile"],
    type: metaMask.type,
    async setup() {
      const provider2 = await this.getProvider();
      if (provider2?.on) {
        if (!connect2) {
          connect2 = this.onConnect.bind(this);
          provider2.on("connect", connect2);
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider2.on("accountsChanged", accountsChanged);
        }
      }
    },
    async connect({ chainId, isReconnecting: isReconnecting2, withCapabilities } = {}) {
      const provider2 = await this.getProvider();
      if (!displayUri) {
        displayUri = this.onDisplayUri;
        provider2.on("display_uri", displayUri);
      }
      let accounts = [];
      if (isReconnecting2)
        accounts = await this.getAccounts().catch(() => []);
      try {
        let signResponse;
        let connectWithResponse;
        if (!accounts?.length) {
          if (parameters.connectAndSign || parameters.connectWith) {
            if (parameters.connectAndSign)
              signResponse = await sdk.connectAndSign({
                msg: parameters.connectAndSign
              });
            else if (parameters.connectWith)
              connectWithResponse = await sdk.connectWith({
                method: parameters.connectWith.method,
                params: parameters.connectWith.params
              });
            accounts = await this.getAccounts();
          } else {
            const requestedAccounts = await sdk.connect();
            accounts = requestedAccounts.map((x) => getAddress(x));
          }
        }
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code)
              throw error;
            return { id: currentChainId };
          });
          currentChainId = chain?.id ?? currentChainId;
        }
        if (displayUri) {
          provider2.removeListener("display_uri", displayUri);
          displayUri = void 0;
        }
        if (signResponse)
          provider2.emit("connectAndSign", {
            accounts,
            chainId: currentChainId,
            signResponse
          });
        else if (connectWithResponse)
          provider2.emit("connectWith", {
            accounts,
            chainId: currentChainId,
            connectWithResponse
          });
        if (connect2) {
          provider2.removeListener("connect", connect2);
          connect2 = void 0;
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider2.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider2.on("chainChanged", chainChanged);
        }
        if (!disconnect2) {
          disconnect2 = this.onDisconnect.bind(this);
          provider2.on("disconnect", disconnect2);
        }
        return {
          // TODO(v3): Make `withCapabilities: true` default behavior
          accounts: withCapabilities ? accounts.map((address) => ({ address, capabilities: {} })) : accounts,
          chainId: currentChainId
        };
      } catch (err) {
        const error = err;
        if (error.code === UserRejectedRequestError.code)
          throw new UserRejectedRequestError(error);
        if (error.code === ResourceUnavailableRpcError.code)
          throw new ResourceUnavailableRpcError(error);
        throw error;
      }
    },
    async disconnect() {
      const provider2 = await this.getProvider();
      if (chainChanged) {
        provider2.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect2) {
        provider2.removeListener("disconnect", disconnect2);
        disconnect2 = void 0;
      }
      if (!connect2) {
        connect2 = this.onConnect.bind(this);
        provider2.on("connect", connect2);
      }
      await sdk.terminate();
    },
    async getAccounts() {
      const provider2 = await this.getProvider();
      const accounts = await provider2.request({
        method: "eth_accounts"
      });
      return accounts.map((x) => getAddress(x));
    },
    async getChainId() {
      const provider2 = await this.getProvider();
      const chainId = provider2.getChainId() || await provider2?.request({ method: "eth_chainId" });
      return Number(chainId);
    },
    async getProvider() {
      async function initProvider() {
        const MetaMaskSDK = await (async () => {
          const { default: SDK } = await import("./metamask-sdk-QUW3C5MR.js");
          if (typeof SDK !== "function" && typeof SDK.default === "function")
            return SDK.default;
          return SDK;
        })();
        const readonlyRPCMap = {};
        for (const chain of config.chains)
          readonlyRPCMap[numberToHex(chain.id)] = extractRpcUrls({
            chain,
            transports: config.transports
          })?.[0];
        sdk = new MetaMaskSDK({
          _source: "wagmi",
          forceDeleteProvider: false,
          forceInjectProvider: false,
          injectProvider: false,
          // Workaround cast since MetaMask SDK does not support `'exactOptionalPropertyTypes'`
          ...parameters,
          readonlyRPCMap,
          dappMetadata: {
            ...parameters.dappMetadata,
            // Test if name and url are set AND not empty
            name: parameters.dappMetadata?.name ? parameters.dappMetadata?.name : "wagmi",
            url: parameters.dappMetadata?.url ? parameters.dappMetadata?.url : typeof window !== "undefined" ? window.location.origin : "https://wagmi.sh"
          },
          useDeeplink: parameters.useDeeplink ?? true
        });
        const result = await sdk.init();
        const provider2 = (() => {
          if (result?.activeProvider)
            return result.activeProvider;
          return sdk.getProvider();
        })();
        if (!provider2)
          throw new ProviderNotFoundError();
        return provider2;
      }
      if (!provider) {
        if (!providerPromise)
          providerPromise = initProvider();
        provider = await providerPromise;
      }
      return provider;
    },
    async isAuthorized() {
      try {
        const timeout = 200;
        const accounts = await withRetry(() => withTimeout(() => this.getAccounts(), { timeout }), {
          delay: timeout + 1,
          retryCount: 3
        });
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    async switchChain({ addEthereumChainParameter, chainId }) {
      const provider2 = await this.getProvider();
      const chain = config.chains.find((x) => x.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      try {
        await provider2.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: numberToHex(chainId) }]
        });
        await waitForChainIdToSync();
        await sendAndWaitForChangeEvent(chainId);
        return chain;
      } catch (err) {
        const error = err;
        if (error.code === UserRejectedRequestError.code)
          throw new UserRejectedRequestError(error);
        if (error.code === 4902 || // Unwrapping for MetaMask Mobile
        // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
        error?.data?.originalError?.code === 4902) {
          try {
            await provider2.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  blockExplorerUrls: (() => {
                    const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
                    if (addEthereumChainParameter?.blockExplorerUrls)
                      return addEthereumChainParameter.blockExplorerUrls;
                    if (blockExplorer)
                      return [
                        blockExplorer.url,
                        ...Object.values(blockExplorers).map((x) => x.url)
                      ];
                    return;
                  })(),
                  chainId: numberToHex(chainId),
                  chainName: addEthereumChainParameter?.chainName ?? chain.name,
                  iconUrls: addEthereumChainParameter?.iconUrls,
                  nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
                  rpcUrls: (() => {
                    if (addEthereumChainParameter?.rpcUrls?.length)
                      return addEthereumChainParameter.rpcUrls;
                    return [chain.rpcUrls.default?.http[0] ?? ""];
                  })()
                }
              ]
            });
            await waitForChainIdToSync();
            await sendAndWaitForChangeEvent(chainId);
            return chain;
          } catch (err2) {
            const error2 = err2;
            if (error2.code === UserRejectedRequestError.code)
              throw new UserRejectedRequestError(error2);
            throw new SwitchChainError(error2);
          }
        }
        throw new SwitchChainError(error);
      }
      async function waitForChainIdToSync() {
        await withRetry(async () => {
          const value = hexToNumber(
            // `'eth_chainId'` is cached by the MetaMask SDK side to avoid unnecessary deeplinks
            await provider2.request({ method: "eth_chainId" })
          );
          if (value !== chainId)
            throw new Error("User rejected switch after adding network.");
          return value;
        }, {
          delay: 50,
          retryCount: 20
          // android device encryption is slower
        });
      }
      async function sendAndWaitForChangeEvent(chainId2) {
        await new Promise((resolve) => {
          const listener = ((data) => {
            if ("chainId" in data && data.chainId === chainId2) {
              config.emitter.off("change", listener);
              resolve();
            }
          });
          config.emitter.on("change", listener);
          config.emitter.emit("change", { chainId: chainId2 });
        });
      }
    },
    async onAccountsChanged(accounts) {
      if (accounts.length === 0) {
        if (sdk.isExtensionActive())
          this.onDisconnect();
        else
          return;
      } else if (config.emitter.listenerCount("connect")) {
        const chainId = (await this.getChainId()).toString();
        this.onConnect({ chainId });
      } else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onConnect(connectInfo) {
      const accounts = await this.getAccounts();
      if (accounts.length === 0)
        return;
      const chainId = Number(connectInfo.chainId);
      config.emitter.emit("connect", { accounts, chainId });
      const provider2 = await this.getProvider();
      if (connect2) {
        provider2.removeListener("connect", connect2);
        connect2 = void 0;
      }
      if (!accountsChanged) {
        accountsChanged = this.onAccountsChanged.bind(this);
        provider2.on("accountsChanged", accountsChanged);
      }
      if (!chainChanged) {
        chainChanged = this.onChainChanged.bind(this);
        provider2.on("chainChanged", chainChanged);
      }
      if (!disconnect2) {
        disconnect2 = this.onDisconnect.bind(this);
        provider2.on("disconnect", disconnect2);
      }
    },
    async onDisconnect(error) {
      const provider2 = await this.getProvider();
      if (error && error.code === 1013) {
        if (provider2 && !!(await this.getAccounts()).length)
          return;
      }
      config.emitter.emit("disconnect");
      if (chainChanged) {
        provider2.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect2) {
        provider2.removeListener("disconnect", disconnect2);
        disconnect2 = void 0;
      }
      if (!connect2) {
        connect2 = this.onConnect.bind(this);
        provider2.on("connect", connect2);
      }
    },
    onDisplayUri(uri) {
      config.emitter.emit("message", { type: "display_uri", data: uri });
    }
  }));
}

// node_modules/.pnpm/@wagmi+connectors@6.2.0_28dd68cab15260b19c2f69bbbf386dcc/node_modules/@wagmi/connectors/dist/esm/safe.js
safe.type = "safe";
function safe(parameters = {}) {
  const { shimDisconnect = false } = parameters;
  let provider_;
  let disconnect2;
  return createConnector((config) => ({
    id: "safe",
    name: "Safe",
    type: safe.type,
    async connect({ withCapabilities } = {}) {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      const accounts = await this.getAccounts();
      const chainId = await this.getChainId();
      if (!disconnect2) {
        disconnect2 = this.onDisconnect.bind(this);
        provider.on("disconnect", disconnect2);
      }
      if (shimDisconnect)
        await config.storage?.removeItem("safe.disconnected");
      return {
        // TODO(v3): Make `withCapabilities: true` default behavior
        accounts: withCapabilities ? accounts.map((address) => ({ address, capabilities: {} })) : accounts,
        chainId
      };
    },
    async disconnect() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      if (disconnect2) {
        provider.removeListener("disconnect", disconnect2);
        disconnect2 = void 0;
      }
      if (shimDisconnect)
        await config.storage?.setItem("safe.disconnected", true);
    },
    async getAccounts() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      return (await provider.request({ method: "eth_accounts" })).map(getAddress);
    },
    async getProvider() {
      const isIframe = typeof window !== "undefined" && window?.parent !== window;
      if (!isIframe)
        return;
      if (!provider_) {
        const { default: SDK } = await import("./esm-6PY7PWF3.js");
        const sdk = new SDK(parameters);
        const safe2 = await withTimeout(() => sdk.safe.getInfo(), {
          timeout: parameters.unstable_getInfoTimeout ?? 10
        });
        if (!safe2)
          throw new Error("Could not load Safe information");
        const SafeAppProvider = await (async () => {
          const Provider = await import("./dist-V2F7SF6L.js");
          if (typeof Provider.SafeAppProvider !== "function" && typeof Provider.default.SafeAppProvider === "function")
            return Provider.default.SafeAppProvider;
          return Provider.SafeAppProvider;
        })();
        provider_ = new SafeAppProvider(safe2, sdk);
      }
      return provider_;
    },
    async getChainId() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      return Number(provider.chainId);
    },
    async isAuthorized() {
      try {
        const isDisconnected = shimDisconnect && // If shim exists in storage, connector is disconnected
        await config.storage?.getItem("safe.disconnected");
        if (isDisconnected)
          return false;
        const accounts = await this.getAccounts();
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    onAccountsChanged() {
    },
    onChainChanged() {
    },
    onDisconnect() {
      config.emitter.emit("disconnect");
    }
  }));
}

// node_modules/.pnpm/@wagmi+connectors@6.2.0_28dd68cab15260b19c2f69bbbf386dcc/node_modules/@wagmi/connectors/dist/esm/walletConnect.js
walletConnect.type = "walletConnect";
function walletConnect(parameters) {
  const isNewChainsStale = parameters.isNewChainsStale ?? true;
  let provider_;
  let providerPromise;
  const NAMESPACE = "eip155";
  let accountsChanged;
  let chainChanged;
  let connect2;
  let displayUri;
  let sessionDelete;
  let disconnect2;
  return createConnector((config) => ({
    id: "walletConnect",
    name: "WalletConnect",
    type: walletConnect.type,
    async setup() {
      const provider = await this.getProvider().catch(() => null);
      if (!provider)
        return;
      if (!connect2) {
        connect2 = this.onConnect.bind(this);
        provider.on("connect", connect2);
      }
      if (!sessionDelete) {
        sessionDelete = this.onSessionDelete.bind(this);
        provider.on("session_delete", sessionDelete);
      }
    },
    async connect({ chainId, withCapabilities, ...rest } = {}) {
      try {
        const provider = await this.getProvider();
        if (!provider)
          throw new ProviderNotFoundError();
        if (!displayUri) {
          displayUri = this.onDisplayUri;
          provider.on("display_uri", displayUri);
        }
        let targetChainId = chainId;
        if (!targetChainId) {
          const state = await config.storage?.getItem("state") ?? {};
          const isChainSupported = config.chains.some((x) => x.id === state.chainId);
          if (isChainSupported)
            targetChainId = state.chainId;
          else
            targetChainId = config.chains[0]?.id;
        }
        if (!targetChainId)
          throw new Error("No chains found on connector.");
        const isChainsStale = await this.isChainsStale();
        if (provider.session && isChainsStale)
          await provider.disconnect();
        if (!provider.session || isChainsStale) {
          const optionalChains = config.chains.filter((chain) => chain.id !== targetChainId).map((optionalChain) => optionalChain.id);
          await provider.connect({
            optionalChains: [targetChainId, ...optionalChains],
            ..."pairingTopic" in rest ? { pairingTopic: rest.pairingTopic } : {}
          });
          this.setRequestedChainsIds(config.chains.map((x) => x.id));
        }
        const accounts = (await provider.enable()).map((x) => getAddress(x));
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code && error.cause?.message !== "Missing or invalid. request() method: wallet_addEthereumChain")
              throw error;
            return { id: currentChainId };
          });
          currentChainId = chain?.id ?? currentChainId;
        }
        if (displayUri) {
          provider.removeListener("display_uri", displayUri);
          displayUri = void 0;
        }
        if (connect2) {
          provider.removeListener("connect", connect2);
          connect2 = void 0;
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider.on("chainChanged", chainChanged);
        }
        if (!disconnect2) {
          disconnect2 = this.onDisconnect.bind(this);
          provider.on("disconnect", disconnect2);
        }
        if (!sessionDelete) {
          sessionDelete = this.onSessionDelete.bind(this);
          provider.on("session_delete", sessionDelete);
        }
        return {
          accounts: withCapabilities ? accounts.map((address) => ({ address, capabilities: {} })) : accounts,
          chainId: currentChainId
        };
      } catch (error) {
        if (/(user rejected|connection request reset)/i.test(error?.message)) {
          throw new UserRejectedRequestError(error);
        }
        throw error;
      }
    },
    async disconnect() {
      const provider = await this.getProvider();
      try {
        await provider?.disconnect();
      } catch (error) {
        if (!/No matching key/i.test(error.message))
          throw error;
      } finally {
        if (chainChanged) {
          provider?.removeListener("chainChanged", chainChanged);
          chainChanged = void 0;
        }
        if (disconnect2) {
          provider?.removeListener("disconnect", disconnect2);
          disconnect2 = void 0;
        }
        if (!connect2) {
          connect2 = this.onConnect.bind(this);
          provider?.on("connect", connect2);
        }
        if (accountsChanged) {
          provider?.removeListener("accountsChanged", accountsChanged);
          accountsChanged = void 0;
        }
        if (sessionDelete) {
          provider?.removeListener("session_delete", sessionDelete);
          sessionDelete = void 0;
        }
        this.setRequestedChainsIds([]);
      }
    },
    async getAccounts() {
      const provider = await this.getProvider();
      return provider.accounts.map((x) => getAddress(x));
    },
    async getProvider({ chainId } = {}) {
      async function initProvider() {
        const optionalChains = config.chains.map((x) => x.id);
        if (!optionalChains.length)
          return;
        const { EthereumProvider } = await import("./index.es-HKGX2I7X.js");
        return await EthereumProvider.init({
          ...parameters,
          disableProviderPing: true,
          optionalChains,
          projectId: parameters.projectId,
          rpcMap: Object.fromEntries(config.chains.map((chain) => {
            const [url] = extractRpcUrls({
              chain,
              transports: config.transports
            });
            return [chain.id, url];
          })),
          showQrModal: parameters.showQrModal ?? true
        });
      }
      if (!provider_) {
        if (!providerPromise)
          providerPromise = initProvider();
        provider_ = await providerPromise;
        provider_?.events.setMaxListeners(Number.POSITIVE_INFINITY);
      }
      if (chainId)
        await this.switchChain?.({ chainId });
      return provider_;
    },
    async getChainId() {
      const provider = await this.getProvider();
      return provider.chainId;
    },
    async isAuthorized() {
      try {
        const [accounts, provider] = await Promise.all([
          this.getAccounts(),
          this.getProvider()
        ]);
        if (!accounts.length)
          return false;
        const isChainsStale = await this.isChainsStale();
        if (isChainsStale && provider.session) {
          await provider.disconnect().catch(() => {
          });
          return false;
        }
        return true;
      } catch {
        return false;
      }
    },
    async switchChain({ addEthereumChainParameter, chainId }) {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      const chain = config.chains.find((x) => x.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      try {
        await Promise.all([
          new Promise((resolve) => {
            const listener = ({ chainId: currentChainId }) => {
              if (currentChainId === chainId) {
                config.emitter.off("change", listener);
                resolve();
              }
            };
            config.emitter.on("change", listener);
          }),
          provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: numberToHex(chainId) }]
          })
        ]);
        const requestedChains = await this.getRequestedChainsIds();
        this.setRequestedChainsIds([...requestedChains, chainId]);
        return chain;
      } catch (err) {
        const error = err;
        if (/(user rejected)/i.test(error.message))
          throw new UserRejectedRequestError(error);
        try {
          let blockExplorerUrls;
          if (addEthereumChainParameter?.blockExplorerUrls)
            blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
          else
            blockExplorerUrls = chain.blockExplorers?.default.url ? [chain.blockExplorers?.default.url] : [];
          let rpcUrls;
          if (addEthereumChainParameter?.rpcUrls?.length)
            rpcUrls = addEthereumChainParameter.rpcUrls;
          else
            rpcUrls = [...chain.rpcUrls.default.http];
          const addEthereumChain = {
            blockExplorerUrls,
            chainId: numberToHex(chainId),
            chainName: addEthereumChainParameter?.chainName ?? chain.name,
            iconUrls: addEthereumChainParameter?.iconUrls,
            nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
            rpcUrls
          };
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [addEthereumChain]
          });
          const requestedChains = await this.getRequestedChainsIds();
          this.setRequestedChainsIds([...requestedChains, chainId]);
          return chain;
        } catch (error2) {
          throw new UserRejectedRequestError(error2);
        }
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0)
        this.onDisconnect();
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onConnect(connectInfo) {
      const chainId = Number(connectInfo.chainId);
      const accounts = await this.getAccounts();
      config.emitter.emit("connect", { accounts, chainId });
    },
    async onDisconnect(_error) {
      this.setRequestedChainsIds([]);
      config.emitter.emit("disconnect");
      const provider = await this.getProvider();
      if (accountsChanged) {
        provider.removeListener("accountsChanged", accountsChanged);
        accountsChanged = void 0;
      }
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect2) {
        provider.removeListener("disconnect", disconnect2);
        disconnect2 = void 0;
      }
      if (sessionDelete) {
        provider.removeListener("session_delete", sessionDelete);
        sessionDelete = void 0;
      }
      if (!connect2) {
        connect2 = this.onConnect.bind(this);
        provider.on("connect", connect2);
      }
    },
    onDisplayUri(uri) {
      config.emitter.emit("message", { type: "display_uri", data: uri });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      if (!provider_)
        return [];
      const chainIds = provider_.session?.namespaces[NAMESPACE]?.accounts?.map((account) => Number.parseInt(account.split(":")[1] || "", 10));
      return chainIds ?? [];
    },
    async getRequestedChainsIds() {
      return await config.storage?.getItem(this.requestedChainsStorageKey) ?? [];
    },
    /**
     * Checks if the target chains match the chains that were
     * initially requested by the connector for the WalletConnect session.
     * If there is a mismatch, this means that the chains on the connector
     * are considered stale, and need to be revalidated at a later point (via
     * connection).
     *
     * There may be a scenario where a dapp adds a chain to the
     * connector later on, however, this chain will not have been approved or rejected
     * by the wallet. In this case, the chain is considered stale.
     */
    async isChainsStale() {
      if (!isNewChainsStale)
        return false;
      const connectorChains = config.chains.map((x) => x.id);
      const namespaceChains = this.getNamespaceChainsIds();
      if (namespaceChains.length && !namespaceChains.some((id) => connectorChains.includes(id)))
        return false;
      const requestedChains = await this.getRequestedChainsIds();
      return !connectorChains.every((id) => requestedChains.includes(id));
    },
    async setRequestedChainsIds(chains) {
      await config.storage?.setItem(this.requestedChainsStorageKey, chains);
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    }
  }));
}

// node_modules/.pnpm/@getpara+viem-v2-integration@2.0.0-alpha.73_viem@2.41.2_bufferutil@4.0.9_typescript@5.9_27de194e260905322a37c9fbcd6421bc/node_modules/@getpara/viem-v2-integration/dist/esm/viemWalletClient.js
var __defProp3 = Object.defineProperty;
var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp3.call(b, prop))
      __defNormalProp3(a, prop, b[prop]);
  if (__getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(b)) {
      if (__propIsEnum3.call(b, prop))
        __defNormalProp3(a, prop, b[prop]);
    }
  return a;
};
var __async3 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function createParaAccount(para, walletAddress) {
  let currentWallet;
  if (walletAddress) {
    currentWallet = para.findWalletByAddress(walletAddress, { type: ["EVM"] });
  } else {
    const walletId = para.findWalletId(void 0, { type: ["EVM"] });
    currentWallet = para.wallets[walletId];
  }
  return {
    address: currentWallet.address,
    publicKey: currentWallet.publicKey || "0x",
    source: "custom",
    type: "local",
    signMessage: (_0) => __async3(this, [_0], function* ({ message }) {
      const hashedMessage = hashMessage(message);
      const res = yield para.signMessage({ walletId: currentWallet.id, messageBase64: hexStringToBase64(hashedMessage) });
      const signature = res.signature;
      return `0x${signature}`;
    }),
    signTransaction: (transaction, args) => __async3(this, null, function* () {
      let { serializer } = args || {};
      if (!serializer) {
        serializer = serializeTransaction;
      }
      const serializedTx = yield serializer(transaction, {
        r: "0x",
        s: "0x",
        v: BigInt(0)
      });
      const res = yield para.signTransaction({
        walletId: currentWallet.id,
        rlpEncodedTxBase64: hexStringToBase64(serializedTx.substring(2)),
        chainId: `${transaction.chainId}`
      });
      const signature = res.signature;
      const formattedSig = hexToSignature(`0x${signature}`);
      formattedSig.v += BigInt(27);
      return serializer(transaction, formattedSig);
    }),
    signTypedData: (typedDataDefinition) => __async3(this, null, function* () {
      const res = yield para.signMessage({
        walletId: currentWallet.id,
        messageBase64: hexStringToBase64(hashTypedData(typedDataDefinition))
      });
      const signature = res.signature;
      return `0x${signature}`;
    })
  };
}
function getViemChain(chainId) {
  const chainIdNum = Number(chainId);
  for (const chain of Object.values(chains_exports)) {
    if (chain.id === chainIdNum) {
      return chain;
    }
  }
  throw new Error(`chain with id ${chainId} not found`);
}
function createParaViemClient(para, params, opts) {
  return createWalletClient(__spreadValues3({
    account: (opts == null ? void 0 : opts.noAccount) ? void 0 : createParaAccount(para)
  }, params));
}

// node_modules/.pnpm/@getpara+wagmi-v2-connector@2.0.0-alpha.73_react-dom@19.2.1_react@19.2.1__react@19.2.1__667276eb49bdd23455847df095179048/node_modules/@getpara/wagmi-v2-connector/dist/ParaEIP1193Provider.js
var STORAGE_CHAIN_ID_KEY = "@CAPSULE/chainId";
var TEN_MINUTES_MS = 6e5;
var serverSessionStorageStub = {
  setItem: () => {
  },
  getItem: () => null
};
var ParaEIP1193Provider = class extends import_index.default {
  constructor(opts) {
    super();
    this.getRpcUrlsFromViemChain = (chain) => {
      return extractRpcUrls({ chain, transports: this.transports });
    };
    this.wagmiChainToAddEthereumChainParameters = (chain) => {
      const hexChainId = decimalToHex(`${chain.id}`);
      return [
        hexChainId,
        {
          chainId: hexChainId,
          chainName: chain.name,
          nativeCurrency: chain.nativeCurrency,
          rpcUrls: this.getRpcUrlsFromViemChain(chain)
        }
      ];
    };
    this.wagmiChainsToAddEthereumChainParameters = (chains) => {
      return Object.fromEntries(chains.map(this.wagmiChainToAddEthereumChainParameters));
    };
    this.accountFromAddress = (address) => {
      return createParaAccount(this.para, address);
    };
    this.setCurrentChain = (chainId) => {
      const chain = this.chains[chainId];
      this.setChainId(chainId);
      const viemChain = this.viemChains[chainId] || getViemChain(hexToDecimal(chainId));
      const rpcUrls = this.getRpcUrlsFromViemChain(viemChain);
      let transport;
      if (this.transports[viemChain.id]) {
        transport = this.transports[viemChain.id];
      } else if (rpcUrls[0].startsWith("ws")) {
        transport = webSocket(chain.rpcUrls[0]);
      } else {
        transport = http(rpcUrls[0]);
        this.chainTransportSubscribe = void 0;
      }
      const chainTransport = transport({
        chain: viemChain
      });
      if (chainTransport.config.type === "ws") {
        this.chainTransportSubscribe = chainTransport.value.subscribe;
      }
      this.walletClient = createParaViemClient(
        this.para,
        {
          chain: viemChain,
          transport
          // @ts-ignore
        },
        { noAccount: true }
      );
      this.walletClient.extend(publicActions);
      this.emit("chainChanged", this.currentHexChainId);
    };
    this.closeModal = () => {
      this.isModalClosed = true;
    };
    this.request = (args) => __async2(this, null, function* () {
      var _a;
      const { method, params } = args;
      switch (method) {
        case "eth_accounts": {
          const accounts = this.accounts;
          return accounts || [];
        }
        case "eth_chainId": {
          return this.currentHexChainId;
        }
        case "eth_requestAccounts": {
          if (yield this.para.isFullyLoggedIn()) {
            const accounts = this.accounts;
            if (accounts && accounts.length > 0) {
              return accounts;
            }
          }
          this.isModalClosed = false;
          (_a = this.openModal) == null ? void 0 : _a.call(this);
          yield this.waitForLogin();
          try {
            const accounts = yield this.waitForAccounts();
            this.emit("accountsChanged", accounts);
            return accounts;
          } catch (e) {
            throw new ProviderRpcError(new Error("accounts not available after login"), {
              code: 4001,
              shortMessage: "accounts not available after login"
            });
          }
        }
        case "eth_sendTransaction": {
          const fromAddress = params[0].from;
          return this.walletClient.sendTransaction(__spreadProps2(__spreadValues2({}, formatTransaction(params[0])), {
            chain: void 0,
            // uses the chain from the wallet client
            account: this.accountFromAddress(fromAddress)
          }));
        }
        case "eth_sign":
        case "personal_sign": {
          return this.walletClient.signMessage({
            message: { raw: params[0] },
            account: this.accountFromAddress(params[1])
          });
        }
        case "eth_signTransaction": {
          const fromAddress = params[0].from;
          return this.accountFromAddress(fromAddress).signTransaction(formatTransaction(params[0]));
        }
        case "eth_signTypedData_v4": {
          const fromAddress = params[0];
          let typedMessage = params[1];
          if (typeof typedMessage === "string") {
            typedMessage = JSON.parse(typedMessage);
          }
          return this.walletClient.signTypedData(__spreadProps2(__spreadValues2({}, typedMessage), {
            account: this.accountFromAddress(fromAddress)
          }));
        }
        case "eth_subscribe": {
          if (!this.chainTransportSubscribe) {
            throw new ProviderRpcError(new Error("chain does not support subscriptions"), {
              code: 4200,
              shortMessage: "chain does not support subscriptions"
            });
          }
          const res = yield this.chainTransportSubscribe({
            params,
            onData: (data) => {
              this.emit("message", {
                type: "eth_subscription",
                data
              });
            }
          });
          return res.subscriptionId;
        }
        case "wallet_addEthereumChain": {
          if (!this.chains[params[0].chainId]) {
            this.chains[params[0].chainId] = params[0];
          }
          return null;
        }
        case "wallet_getPermissions": {
          return [];
        }
        case "wallet_requestPermissions": {
          return [];
        }
        case "wallet_switchEthereumChain": {
          if (!this.chains[params[0].chainId]) {
            const chain = getViemChain(hexToDecimal(params[0].chainId));
            const [hexChainId, addEthereumChainParameter] = this.wagmiChainToAddEthereumChainParameters(chain);
            this.chains[hexChainId] = addEthereumChainParameter;
            this.setCurrentChain(params[0].chainId);
          }
          if (this.currentHexChainId !== params[0].chainId) {
            this.setCurrentChain(params[0].chainId);
          }
          return null;
        }
        case "wallet_watchAsset": {
          return false;
        }
        default: {
          return this.walletClient.request({
            method,
            params
          });
        }
      }
    });
    this.storage = opts.storageOverride || typeof window === "undefined" ? serverSessionStorageStub : sessionStorage;
    this.isModalClosed = true;
    this.para = opts.para;
    this.disableModal = !!opts.disableModal;
    this.viemChains = opts.chains.reduce((acc, curChain) => {
      acc[decimalToHex(`${curChain.id}`)] = curChain;
      return acc;
    }, {});
    this.chains = this.wagmiChainsToAddEthereumChainParameters(opts.chains);
    this.transports = opts.transports;
    if (!this.disableModal && opts.renderModal) {
      const { openModal } = opts.renderModal(this.closeModal);
      this.openModal = openModal;
    }
    const defaultChainId = this.getStorageChainId() || opts.chainId;
    const currentChainId = this.chains[decimalToHex(defaultChainId)] ? defaultChainId : `${opts.chains[0].id}`;
    this.setCurrentChain(decimalToHex(currentChainId));
    this.emit("connect", { chainId: this.currentHexChainId });
  }
  get accounts() {
    return this.para.getWalletsByType("EVM").map((w) => w.address);
  }
  getStorageChainId() {
    return this.storage.getItem(STORAGE_CHAIN_ID_KEY);
  }
  setChainId(hexChainId) {
    this.currentHexChainId = hexChainId;
    this.storage.setItem(STORAGE_CHAIN_ID_KEY, hexToDecimal(hexChainId));
  }
  waitForLogin() {
    return __async2(this, arguments, function* (timeoutMs = TEN_MINUTES_MS) {
      const startTime = Date.now();
      while (Date.now() - startTime < timeoutMs) {
        if (yield this.para.isFullyLoggedIn()) {
          return true;
        }
        if (!this.disableModal && this.isModalClosed) {
          throw new ProviderRpcError(new Error("user closed modal"), {
            code: 4001,
            shortMessage: "user closed modal"
          });
        }
        yield new Promise((resolve) => setTimeout(resolve, 2e3));
      }
      throw new ProviderRpcError(new Error("timed out waiting for user to log in"), {
        code: 4900,
        //provider is disconnected code
        shortMessage: "timed out waiting for user to log in"
      });
    });
  }
  waitForAccounts(timeoutMs = 5e3) {
    return __async2(this, null, function* () {
      const startTime = Date.now();
      while (Date.now() - startTime < timeoutMs) {
        const accounts = this.accounts;
        if (accounts && accounts.length > 0) {
          return accounts;
        }
        yield new Promise((resolve) => setTimeout(resolve, 500));
      }
      throw new ProviderRpcError(new Error("timed out waiting for accounts to load"), {
        code: 4900,
        //provider is disconnected code
        shortMessage: "timed out waiting for accounts to load"
      });
    });
  }
};

// node_modules/.pnpm/@getpara+wagmi-v2-connector@2.0.0-alpha.73_react-dom@19.2.1_react@19.2.1__react@19.2.1__667276eb49bdd23455847df095179048/node_modules/@getpara/wagmi-v2-connector/dist/paraConnector.js
var PARA_ID = "para";
var PARA_NAME = "Para";
var PARA_ICON = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE2IiBoZWlnaHQ9IjIwNCIgdmlld0JveD0iMCAwIDIxNiAyMDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MCAwSDE0NEMxODMuNzY0IDAgMjE2IDMyLjIzNTUgMjE2IDcyQzIxNiAxMTEuNzY1IDE4My43NjQgMTQ0IDE0NCAxNDRIOTZDODIuNzQ1MiAxNDQgNzIgMTU0Ljc0NSA3MiAxNjhWMjA0SDBWMTMySDM2QzQ5LjI1NDggMTMyIDYwIDEyMS4yNTUgNjAgMTA4TDYwIDBaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K";
var createParaConnector = ({
  para,
  chains: _chains,
  disableModal,
  storageOverride,
  options,
  iconOverride,
  nameOverride,
  idOverride,
  transports,
  renderModal
}) => {
  return createConnector((config) => {
    const chains = [...config.chains];
    const eip1193Provider = new ParaEIP1193Provider({
      para,
      chainId: `${chains[0].id}`,
      chains,
      disableModal,
      storageOverride,
      transports: transports || config.transports,
      renderModal
    });
    const injectedObj = injected(__spreadValues2({
      target: {
        name: PARA_NAME,
        id: idOverride != null ? idOverride : PARA_ID,
        provider: eip1193Provider
      }
    }, options))(config);
    return __spreadProps2(__spreadValues2({}, injectedObj), {
      type: idOverride != null ? idOverride : PARA_ID,
      name: nameOverride != null ? nameOverride : PARA_NAME,
      icon: iconOverride != null ? iconOverride : PARA_ICON,
      disconnect: () => __async2(void 0, null, function* () {
        eip1193Provider.closeModal();
        yield injectedObj.disconnect();
      })
    });
  });
};
var paraConnector = (opts) => {
  return createParaConnector(opts);
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/stores/wagmiConfigStore.js
var wagmiConfigStore = createStore(() => ({
  config: null
}));
var setWagmiConfig = (config) => {
  wagmiConfigStore.setState({ config });
};
var getWagmiConfig = () => {
  return wagmiConfigStore.getState().config;
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/farcaster/farcasterIcon.js
var icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiByeD0iNTYiIGZpbGw9IiM3QzY1QzEiPjwvcmVjdD48cGF0aCBkPSJNMTgzLjI5NiA3MS42OEgyMTEuOTY4TDIwNy44NzIgOTQuMjA4SDIwMC43MDRWMTgwLjIyNEwyMDEuMDIgMTgwLjIzMkMyMDQuMjY2IDE4MC4zOTYgMjA2Ljg0OCAxODMuMDgxIDIwNi44NDggMTg2LjM2OFYxOTEuNDg4TDIwNy4xNjQgMTkxLjQ5NkMyMTAuNDEgMTkxLjY2IDIxMi45OTIgMTk0LjM0NSAyMTIuOTkyIDE5Ny42MzJWMjAyLjc1MkgxNTUuNjQ4VjE5Ny42MzJDMTU1LjY0OCAxOTQuMzQ1IDE1OC4yMjkgMTkxLjY2IDE2MS40NzYgMTkxLjQ5NkwxNjEuNzkyIDE5MS40ODhWMTg2LjM2OEMxNjEuNzkyIDE4My4wODEgMTY0LjM3MyAxODAuMzk2IDE2Ny42MiAxODAuMjMyTDE2Ny45MzYgMTgwLjIyNFYxMzguMjRDMTY3LjkzNiAxMTYuMTg0IDE1MC4wNTYgOTguMzA0IDEyOCA5OC4zMDRDMTA1Ljk0NCA5OC4zMDQgODguMDYzOCAxMTYuMTg0IDg4LjA2MzggMTM4LjI0VjE4MC4yMjRMODguMzc5OCAxODAuMjMyQzkxLjYyNjIgMTgwLjM5NiA5NC4yMDc4IDE4My4wODEgOTQuMjA3OCAxODYuMzY4VjE5MS40ODhMOTQuNTIzOCAxOTEuNDk2Qzk3Ljc3MDIgMTkxLjY2IDEwMC4zNTIgMTk0LjM0NSAxMDAuMzUyIDE5Ny42MzJWMjAyLjc1Mkg0My4wMDc4VjE5Ny42MzJDNDMuMDA3OCAxOTQuMzQ1IDQ1LjU4OTQgMTkxLjY2IDQ4LjgzNTggMTkxLjQ5Nkw0OS4xNTE4IDE5MS40ODhWMTg2LjM2OEM0OS4xNTE4IDE4My4wODEgNTEuNzMzNCAxODAuMzk2IDU0Ljk3OTggMTgwLjIzMkw1NS4yOTU4IDE4MC4yMjRWOTQuMjA4SDQ4LjEyNzhMNDQuMDMxOCA3MS42OEg3Mi43MDM4VjU0LjI3MkgxODMuMjk2VjcxLjY4WiIgZmlsbD0id2hpdGUiPjwvcGF0aD48L3N2Zz4K";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/farcaster/farcaster.js
var farcasterWallet = ({ para, createFarcasterConnector }) => {
  return {
    id: "farcaster",
    internalId: "FARCASTER",
    name: "Farcaster",
    rdns: "xyz.farcaster.MiniAppWallet",
    iconUrl: icon,
    installed: (para == null ? void 0 : para.isReady) && (para == null ? void 0 : para.isFarcasterMiniApp),
    isExtension: true,
    downloadUrl: "https://farcaster.xyz/",
    createConnector: (walletDetails) => createConnector((config) => __spreadValues(__spreadValues({}, createFarcasterConnector()(config)), walletDetails))
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/utils/getInjectedConnector.js
function getExplicitInjectedProvider(flag) {
  const _window = typeof window !== "undefined" ? window : void 0;
  if (typeof _window === "undefined" || typeof _window.ethereum === "undefined") return;
  const providers = _window.ethereum.providers;
  return providers ? providers.find((provider) => provider[flag]) : _window.ethereum[flag] ? _window.ethereum : void 0;
}
function getWindowProviderNamespace(namespace) {
  const providerSearch = (provider, namespace2) => {
    const [property, ...path2] = namespace2.split(".");
    const _provider = provider[property];
    if (_provider) {
      if (path2.length === 0) return _provider;
      return providerSearch(_provider, path2.join("."));
    }
  };
  if (typeof window !== "undefined") return providerSearch(window, namespace);
}
function hasInjectedProvider({ flag, namespace }) {
  if (namespace && typeof getWindowProviderNamespace(namespace) !== "undefined") return true;
  if (flag && typeof getExplicitInjectedProvider(flag) !== "undefined") return true;
  return false;
}
function getInjectedProvider({ flag, namespace }) {
  var _a;
  const _window = typeof window !== "undefined" ? window : void 0;
  if (typeof _window === "undefined") return;
  if (namespace) {
    const windowProvider = getWindowProviderNamespace(namespace);
    if (windowProvider) return windowProvider;
  }
  const providers = (_a = _window.ethereum) == null ? void 0 : _a.providers;
  if (flag) {
    const provider = getExplicitInjectedProvider(flag);
    if (provider) return provider;
  }
  if (typeof providers !== "undefined" && providers.length > 0) return providers[0];
  return _window.ethereum;
}
function createInjectedConnector(provider) {
  return (walletDetails) => {
    const injectedConfig = provider ? {
      target: () => ({
        id: walletDetails.paraDetails.id,
        name: walletDetails.paraDetails.name,
        provider
      })
    } : {};
    return createConnector((config) => __spreadValues(__spreadValues({}, injected(injectedConfig)(config)), walletDetails));
  };
}
function getInjectedConnector({
  flag,
  namespace,
  target
}) {
  const provider = target ? target : getInjectedProvider({ flag, namespace });
  return createInjectedConnector(provider);
}

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/connectors/walletConnect.js
walletConnect2.type = "walletConnect";
function walletConnect2(parameters) {
  var _a;
  const isNewChainsStale = (_a = parameters.isNewChainsStale) != null ? _a : true;
  let provider_;
  let providerPromise;
  const NAMESPACE = "eip155";
  let accountsChanged;
  let chainChanged;
  let connect2;
  let displayUri;
  let sessionDelete;
  let disconnect2;
  return createConnector((config) => ({
    id: "walletConnect",
    name: "WalletConnect",
    type: walletConnect2.type,
    setup() {
      return __async(this, null, function* () {
        const provider = yield this.getProvider().catch(() => null);
        if (!provider) return;
        if (!connect2) {
          connect2 = this.onConnect.bind(this);
          provider.on("connect", connect2);
        }
        if (!sessionDelete) {
          sessionDelete = this.onSessionDelete.bind(this);
          provider.on("session_delete", sessionDelete);
        }
      });
    },
    connect() {
      return __async(this, arguments, function* (_b = {}) {
        var _c = _b, { chainId } = _c, rest = __objRest(_c, ["chainId"]);
        var _a3, _b2, _c2;
        try {
          const provider = yield this.getProvider();
          if (!provider) throw new ProviderNotFoundError();
          if (!displayUri) {
            displayUri = this.onDisplayUri;
            provider.on("display_uri", displayUri);
          }
          let targetChainId = chainId;
          if (!targetChainId) {
            const state = (_b2 = yield (_a3 = config.storage) == null ? void 0 : _a3.getItem("state")) != null ? _b2 : {};
            const isChainSupported = config.chains.some((x) => x.id === state.chainId);
            if (isChainSupported) targetChainId = state.chainId;
            else targetChainId = (_c2 = config.chains[0]) == null ? void 0 : _c2.id;
          }
          if (!targetChainId) throw new Error("No chains found on connector.");
          const isChainsStale = yield this.isChainsStale();
          if (provider.session && isChainsStale) yield provider.disconnect();
          if (!provider.session || isChainsStale) {
            const optionalChains = config.chains.filter((chain) => chain.id !== targetChainId).map((optionalChain) => optionalChain.id);
            yield provider.connect(__spreadValues({
              optionalChains: [targetChainId, ...optionalChains]
            }, "pairingTopic" in rest ? { pairingTopic: rest.pairingTopic } : {}));
            this.setRequestedChainsIds(config.chains.map((x) => x.id));
          }
          const accounts = (yield provider.enable()).map((x) => getAddress(x));
          const currentChainId = yield this.getChainId();
          if (displayUri) {
            provider.removeListener("display_uri", displayUri);
            displayUri = void 0;
          }
          if (connect2) {
            provider.removeListener("connect", connect2);
            connect2 = void 0;
          }
          if (!accountsChanged) {
            accountsChanged = this.onAccountsChanged.bind(this);
            provider.on("accountsChanged", accountsChanged);
          }
          if (!chainChanged) {
            chainChanged = this.onChainChanged.bind(this);
            provider.on("chainChanged", chainChanged);
          }
          if (!disconnect2) {
            disconnect2 = this.onDisconnect.bind(this);
            provider.on("disconnect", disconnect2);
          }
          if (!sessionDelete) {
            sessionDelete = this.onSessionDelete.bind(this);
            provider.on("session_delete", sessionDelete);
          }
          return { accounts, chainId: currentChainId };
        } catch (error) {
          if (/(user rejected|connection request reset)/i.test(error == null ? void 0 : error.message)) {
            throw new UserRejectedRequestError(error);
          }
          throw error;
        }
      });
    },
    disconnect() {
      return __async(this, null, function* () {
        const provider = yield this.getProvider();
        try {
          yield provider == null ? void 0 : provider.disconnect();
        } catch (error) {
          if (!/No matching key/i.test(error.message)) throw error;
        } finally {
          if (chainChanged) {
            provider == null ? void 0 : provider.removeListener("chainChanged", chainChanged);
            chainChanged = void 0;
          }
          if (disconnect2) {
            provider == null ? void 0 : provider.removeListener("disconnect", disconnect2);
            disconnect2 = void 0;
          }
          if (!connect2) {
            connect2 = this.onConnect.bind(this);
            provider == null ? void 0 : provider.on("connect", connect2);
          }
          if (accountsChanged) {
            provider == null ? void 0 : provider.removeListener("accountsChanged", accountsChanged);
            accountsChanged = void 0;
          }
          if (sessionDelete) {
            provider == null ? void 0 : provider.removeListener("session_delete", sessionDelete);
            sessionDelete = void 0;
          }
          this.setRequestedChainsIds([]);
        }
      });
    },
    getAccounts() {
      return __async(this, null, function* () {
        const provider = yield this.getProvider();
        return provider.accounts.map((x) => getAddress(x));
      });
    },
    getProvider() {
      return __async(this, arguments, function* ({ chainId } = {}) {
        var _a3;
        function initProvider() {
          return __async(this, null, function* () {
            var _a4;
            const optionalChains = config.chains.map((x) => x.id);
            if (!optionalChains.length) return;
            const { EthereumProvider } = yield import("./dist-X6CMM5UP.js");
            return yield EthereumProvider.init(__spreadProps(__spreadValues({}, parameters), {
              disableProviderPing: true,
              optionalChains,
              projectId: parameters.projectId,
              rpcMap: Object.fromEntries(
                config.chains.map((chain) => {
                  const [url] = extractRpcUrls({
                    chain,
                    transports: config.transports
                  });
                  return [chain.id, url];
                })
              ),
              showQrModal: (_a4 = parameters.showQrModal) != null ? _a4 : true
            }));
          });
        }
        if (!provider_) {
          if (!providerPromise) providerPromise = initProvider();
          provider_ = yield providerPromise;
          provider_ == null ? void 0 : provider_.events.setMaxListeners(Number.POSITIVE_INFINITY);
        }
        if (chainId) yield (_a3 = this.switchChain) == null ? void 0 : _a3.call(this, { chainId });
        return provider_;
      });
    },
    getChainId() {
      return __async(this, null, function* () {
        const provider = yield this.getProvider();
        return provider.chainId;
      });
    },
    isAuthorized() {
      return __async(this, null, function* () {
        try {
          const [accounts, provider] = yield Promise.all([this.getAccounts(), this.getProvider()]);
          if (!accounts.length) return false;
          const isChainsStale = yield this.isChainsStale();
          if (isChainsStale && provider.session) {
            yield provider.disconnect().catch(() => {
            });
            return false;
          }
          return true;
        } catch (e) {
          return false;
        }
      });
    },
    switchChain(_0) {
      return __async(this, arguments, function* ({ addEthereumChainParameter, chainId }) {
        var _a3, _b, _c, _d, _e;
        const provider = yield this.getProvider();
        if (!provider) throw new ProviderNotFoundError();
        const chain = config.chains.find((x) => x.id === chainId);
        if (!chain) throw new SwitchChainError(new ChainNotConfiguredError());
        try {
          yield Promise.all([
            new Promise((resolve) => {
              const listener = ({ chainId: currentChainId }) => {
                if (currentChainId === chainId) {
                  config.emitter.off("change", listener);
                  resolve();
                }
              };
              config.emitter.on("change", listener);
            }),
            provider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: numberToHex(chainId) }]
            })
          ]);
          const requestedChains = yield this.getRequestedChainsIds();
          this.setRequestedChainsIds([...requestedChains, chainId]);
          return chain;
        } catch (err) {
          const error = err;
          if (/(user rejected)/i.test(error.message)) throw new UserRejectedRequestError(error);
          try {
            let blockExplorerUrls;
            if (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.blockExplorerUrls) blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
            else blockExplorerUrls = ((_a3 = chain.blockExplorers) == null ? void 0 : _a3.default.url) ? [(_b = chain.blockExplorers) == null ? void 0 : _b.default.url] : [];
            let rpcUrls;
            if ((_c = addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.rpcUrls) == null ? void 0 : _c.length) rpcUrls = addEthereumChainParameter.rpcUrls;
            else rpcUrls = [...chain.rpcUrls.default.http];
            const addEthereumChain = {
              blockExplorerUrls,
              chainId: numberToHex(chainId),
              chainName: (_d = addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.chainName) != null ? _d : chain.name,
              iconUrls: addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.iconUrls,
              nativeCurrency: (_e = addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.nativeCurrency) != null ? _e : chain.nativeCurrency,
              rpcUrls
            };
            yield provider.request({
              method: "wallet_addEthereumChain",
              params: [addEthereumChain]
            });
            const requestedChains = yield this.getRequestedChainsIds();
            this.setRequestedChainsIds([...requestedChains, chainId]);
            return chain;
          } catch (error2) {
            throw new UserRejectedRequestError(error2);
          }
        }
      });
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0) this.onDisconnect();
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    onConnect(connectInfo) {
      return __async(this, null, function* () {
        const chainId = Number(connectInfo.chainId);
        const accounts = yield this.getAccounts();
        config.emitter.emit("connect", { accounts, chainId });
      });
    },
    onDisconnect(_error) {
      return __async(this, null, function* () {
        this.setRequestedChainsIds([]);
        config.emitter.emit("disconnect");
        const provider = yield this.getProvider();
        if (accountsChanged) {
          provider.removeListener("accountsChanged", accountsChanged);
          accountsChanged = void 0;
        }
        if (chainChanged) {
          provider.removeListener("chainChanged", chainChanged);
          chainChanged = void 0;
        }
        if (disconnect2) {
          provider.removeListener("disconnect", disconnect2);
          disconnect2 = void 0;
        }
        if (sessionDelete) {
          provider.removeListener("session_delete", sessionDelete);
          sessionDelete = void 0;
        }
        if (!connect2) {
          connect2 = this.onConnect.bind(this);
          provider.on("connect", connect2);
        }
      });
    },
    onDisplayUri(uri) {
      config.emitter.emit("message", { type: "display_uri", data: uri });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      var _a3, _b, _c;
      if (!provider_) return [];
      const chainIds = (_c = (_b = (_a3 = provider_.session) == null ? void 0 : _a3.namespaces[NAMESPACE]) == null ? void 0 : _b.accounts) == null ? void 0 : _c.map(
        (account) => Number.parseInt(account.split(":")[1] || "")
      );
      return chainIds != null ? chainIds : [];
    },
    getRequestedChainsIds() {
      return __async(this, null, function* () {
        var _a3, _b;
        return (_b = yield (_a3 = config.storage) == null ? void 0 : _a3.getItem(this.requestedChainsStorageKey)) != null ? _b : [];
      });
    },
    /**
     * Checks if the target chains match the chains that were
     * initially requested by the connector for the WalletConnect session.
     * If there is a mismatch, this means that the chains on the connector
     * are considered stale, and need to be revalidated at a later point (via
     * connection).
     *
     * There may be a scenario where a dapp adds a chain to the
     * connector later on, however, this chain will not have been approved or rejected
     * by the wallet. In this case, the chain is considered stale.
     */
    isChainsStale() {
      return __async(this, null, function* () {
        if (!isNewChainsStale) return false;
        const connectorChains = config.chains.map((x) => x.id);
        const namespaceChains = this.getNamespaceChainsIds();
        if (namespaceChains.length && !namespaceChains.some((id) => connectorChains.includes(id))) return false;
        const requestedChains = yield this.getRequestedChainsIds();
        return !connectorChains.every((id) => requestedChains.includes(id));
      });
    },
    setRequestedChainsIds(chains) {
      return __async(this, null, function* () {
        var _a3;
        yield (_a3 = config.storage) == null ? void 0 : _a3.setItem(this.requestedChainsStorageKey, chains);
      });
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    }
  }));
}

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/utils/getWalletConnectConnector.js
var walletConnectInstances = /* @__PURE__ */ new Map();
var getOrCreateWalletConnectInstance = ({
  projectId,
  walletConnectParameters,
  paraDetailsShowQrModal
}) => {
  let config = __spreadProps(__spreadValues({}, walletConnectParameters ? walletConnectParameters : {}), {
    projectId,
    showQrModal: false
    // Required. Otherwise WalletConnect modal (Web3Modal) will popup during time of connection for a wallet
  });
  if (paraDetailsShowQrModal) {
    config = __spreadProps(__spreadValues({}, config), { showQrModal: true });
  }
  const serializedConfig = JSON.stringify(config);
  const sharedWalletConnector = walletConnectInstances.get(serializedConfig);
  if (sharedWalletConnector) {
    return sharedWalletConnector;
  }
  const newWalletConnectInstance = walletConnect2(config);
  walletConnectInstances.set(serializedConfig, newWalletConnectInstance);
  return newWalletConnectInstance;
};
function createWalletConnectConnector({
  projectId,
  walletDetails,
  walletConnectParameters
}) {
  return createConnector((config) => __spreadProps(__spreadValues(__spreadValues({}, getOrCreateWalletConnectInstance({
    projectId,
    walletConnectParameters,
    // Used in `connectorsForWallets` to add another
    // walletConnect wallet into Para with modal popup option
    paraDetailsShowQrModal: walletDetails.paraDetails.showQrModal
  })(config)), walletDetails), {
    id: walletDetails.paraDetails.id
  }));
}
function getWalletConnectConnector({
  projectId,
  walletConnectParameters
}) {
  if (!projectId || projectId === "") {
    return;
  }
  return (walletDetails) => createWalletConnectConnector({
    projectId,
    walletDetails,
    walletConnectParameters
  });
}

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/metaMask/metaMaskIcon.js
var icon2 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE5MDMxXzE3MTgwOSkiPgo8cGF0aCBkPSJNMjIuNDI4MSAyMi4zNDUzTDE3LjI1ODUgMjAuODA2MUwxMy4zNiAyMy4xMzY2TDEwLjYzOTggMjMuMTM1NEw2LjczODk5IDIwLjgwNjFMMS41NzE3IDIyLjM0NTNMMCAxNy4wMzkxTDEuNTcxODcgMTEuMTVMMCA2LjE3MTAyTDEuNTcxODcgMEw5LjY0NjA4IDQuODIzOTdIMTQuMzUzOEwyMi40MjgxIDBMMjQgNi4xNzEwMkwyMi40MjgxIDExLjE1TDI0IDE3LjAzOTFMMjIuNDI4MSAyMi4zNDUzWiIgZmlsbD0iI0ZGNUMxNiIvPgo8cGF0aCBkPSJNMS41NzI4OCAwTDkuNjQ3MjUgNC44MjczNUw5LjMyNjI1IDguMTQwM0wxLjU3Mjg4IDBaTTYuNzQwMzMgMTcuMDQxM0wxMC4yOTMgMTkuNzQ3NUw2Ljc0MDMzIDIwLjgwNTlWMTcuMDQxM1pNMTAuMDA5IDEyLjU2N0w5LjMyNjI1IDguMTQyNjdMNC45NTU2NCAxMS4xNTE0TDQuOTUzMjcgMTEuMTUwMlYxMS4xNTI0TDQuOTY2NzkgMTQuMjQ5M0w2LjczOTE0IDEyLjU2NzJMMTAuMDA5IDEyLjU2N1pNMjIuNDI4MSAwTDE0LjM1MzcgNC44MjczNUwxNC42NzM3IDguMTQwM0wyMi40MjgxIDBaTTE3LjI2MDggMTcuMDQxM0wxMy43MDggMTkuNzQ3NUwxNy4yNjA4IDIwLjgwNTlWMTcuMDQxM1pNMTkuMDQ2NyAxMS4xNTIyVjExLjE1TDE5LjA0NTcgMTEuMTUxMkwxNC42NzQ5IDguMTQyNjdMMTMuOTkyMiAxMi41NjdIMTcuMjYwN0wxOS4wMzQyIDE0LjI0ODlMMTkuMDQ2NyAxMS4xNTIyWiIgZmlsbD0iI0ZGNUMxNiIvPgo8cGF0aCBkPSJNNi43MzkxNiAyMC44MDU5TDEuNTcxODcgMjIuMzQ1MUwwIDE3LjA0MTNINi43MzkxNlYyMC44MDU5Wk0xMC4wMDc4IDEyLjU2NThMMTAuOTk0OCAxOC45NjIyTDkuNjI2ODEgMTUuNDA1N0w0Ljk2NDYxIDE0LjI0ODlMNi43Mzc5NyAxMi41NjZMMTAuMDA3OCAxMi41NjU4Wk0xNy4yNjA3IDIwLjgwNTlMMjIuNDI4MSAyMi4zNDUxTDI0IDE3LjA0MTFIMTcuMjYwN0MxNy4yNjA3IDE3LjA0MTMgMTcuMjYwNyAyMC44MDU5IDE3LjI2MDcgMjAuODA1OVpNMTMuOTkyMiAxMi41NjU4TDEzLjAwNTIgMTguOTYyMkwxNC4zNzMgMTUuNDA1N0wxOS4wMzU2IDE0LjI0ODlMMTcuMjYxIDEyLjU2NkwxMy45OTIyIDEyLjU2NThaIiBmaWxsPSIjRTM0ODA3Ii8+CjxwYXRoIGQ9Ik0wIDE3LjAzOTFMMS41NzE4NyAxMS4xNUg0Ljk1MjFMNC45NjQ0NCAxNC4yNDc5TDkuNjI3MTUgMTUuNDA0N0wxMC45OTUgMTguOTYxTDEwLjI5MTggMTkuNzQ0Mkw2LjczOTE2IDE3LjAzNzlIMFYxNy4wMzkxWk0yNCAxNy4wMzkxTDIyLjQyODEgMTEuMTVIMTkuMDQ3N0wxOS4wMzU0IDE0LjI0NzlMMTQuMzczIDE1LjQwNDdMMTMuMDA1IDE4Ljk2MUwxMy43MDggMTkuNzQ0MkwxNy4yNjA4IDE3LjAzNzlIMjRWMTcuMDM5MVpNMTQuMzUzOCA0LjgyMzk3SDkuNjQ2MDhMOS4zMjY0MyA4LjEzNjkyTDEwLjk5NTIgMTguOTU3NUgxMy4wMDUyTDE0LjY3NDkgOC4xMzY5MkwxNC4zNTM4IDQuODIzOTdaIiBmaWxsPSIjRkY4RDVEIi8+CjxwYXRoIGQ9Ik0xLjU3MTg3IDBMMCA2LjE3MTAyTDEuNTcxODcgMTEuMTVINC45NTIxTDkuMzI1MDggOC4xNDA0N0wxLjU3MTg3IDBaTTkuMDMwOTUgMTMuODUwNUg3LjQ5OTY1TDYuNjY1OTYgMTQuNjY3OEw5LjYyODE2IDE1LjQwMjFMOS4wMzA5NSAxMy44NDkzVjEzLjg1MDVaTTIyLjQyODEgMEwyNCA2LjE3MTAyTDIyLjQyODEgMTEuMTVIMTkuMDQ3N0wxNC42NzQ5IDguMTQwNDdMMjIuNDI4MSAwWk0xNC45NzEyIDEzLjg1MDVIMTYuNTA0N0wxNy4zMzg0IDE0LjY2ODhMMTQuMzcyOSAxNS40MDQ3TDE0Ljk3MTIgMTMuODQ5M1YxMy44NTA1Wk0xMy4zNTg4IDIxLjAyNTZMMTMuNzA4MiAxOS43NDY1TDEzLjAwNSAxOC45NjM0SDEwLjk5MzVMMTAuMjkwNCAxOS43NDY1TDEwLjYzOTcgMjEuMDI1NiIgZmlsbD0iIzY2MTgwMCIvPgo8cGF0aCBkPSJNMTMuMzU4OSAyMS4wMjU1VjIzLjEzNzZIMTAuNjQwMVYyMS4wMjU1SDEzLjM1ODlaIiBmaWxsPSIjQzBDNENEIi8+CjxwYXRoIGQ9Ik02Ljc0MDM2IDIwLjgwMzdMMTAuNjQyMiAyMy4xMzY0VjIxLjAyNDNMMTAuMjkyOCAxOS43NDUzTDYuNzQwMzYgMjAuODAzN1pNMTcuMjYwOSAyMC44MDM3TDEzLjM1ODggMjMuMTM2NFYyMS4wMjQzTDEzLjcwODIgMTkuNzQ1M0wxNy4yNjA5IDIwLjgwMzdaIiBmaWxsPSIjRTdFQkY2Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTkwMzFfMTcxODA5Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/metaMask/metaMask.js
function isMetaMask(ethereum) {
  if (!(ethereum == null ? void 0 : ethereum.isMetaMask)) return false;
  if (ethereum.isBraveWallet && !ethereum._events && !ethereum._state) return false;
  if (ethereum.isApexWallet) return false;
  if (ethereum.isAvalanche) return false;
  if (ethereum.isBackpack) return false;
  if (ethereum.isBifrost) return false;
  if (ethereum.isBitKeep) return false;
  if (ethereum.isBitski) return false;
  if (ethereum.isBlockWallet) return false;
  if (ethereum.isCoinbaseWallet) return false;
  if (ethereum.isDawn) return false;
  if (ethereum.isEnkrypt) return false;
  if (ethereum.isExodus) return false;
  if (ethereum.isFrame) return false;
  if (ethereum.isFrontier) return false;
  if (ethereum.isGamestop) return false;
  if (ethereum.isHyperPay) return false;
  if (ethereum.isImToken) return false;
  if (ethereum.isKuCoinWallet) return false;
  if (ethereum.isMathWallet) return false;
  if (ethereum.isNestWallet) return false;
  if (ethereum.isOkxWallet || ethereum.isOKExWallet) return false;
  if (ethereum.isOneInchIOSWallet || ethereum.isOneInchAndroidWallet) return false;
  if (ethereum.isOpera) return false;
  if (ethereum.isPhantom) return false;
  if (ethereum.isPortal) return false;
  if (ethereum.isRabby) return false;
  if (ethereum.isSafe) return false;
  if (ethereum.isRainbow) return false;
  if (ethereum.isStatus) return false;
  if (ethereum.isTalisman) return false;
  if (ethereum.isTally) return false;
  if (ethereum.isTokenPocket) return false;
  if (ethereum.isTokenary) return false;
  if (ethereum.isTrust || ethereum.isTrustWallet) return false;
  if (ethereum.isXDEFI) return false;
  if (ethereum.isZeal) return false;
  if (ethereum.isZerion) return false;
  if (ethereum.__seif) return false;
  return true;
}
var metaMaskWallet = ({ projectId, walletConnectParameters }) => {
  var _a, _b, _c, _d;
  let metaMaskTarget = typeof window !== "undefined" ? (_c = (_b = (_a = window.ethereum) == null ? void 0 : _a.providers) == null ? void 0 : _b.find(isMetaMask)) != null ? _c : window.ethereum : void 0;
  const metaMaskInjectedProvider = metaMaskTarget ? metaMaskTarget : getInjectedProvider({ flag: "isMetaMask" });
  const isMetaMaskInjected = !!metaMaskInjectedProvider && metaMaskInjectedProvider.isMetaMask;
  const providerMapTarget = (_d = metaMaskTarget == null ? void 0 : metaMaskTarget.providerMap) == null ? void 0 : _d.get("MetaMask");
  if (providerMapTarget) {
    metaMaskTarget = providerMapTarget;
  }
  const deeplinkUri = "metamask://";
  const baseUri = isAndroid() ? `${deeplinkUri}wc` : isIOS() ? !isTelegram() ? (
    // currently broken in MetaMask v6.5.0 https://github.com/MetaMask/metamask-mobile/issues/6457
    `${deeplinkUri}wc`
  ) : "https://metamask.app.link/wc" : "https://metamask.app.link/wc";
  const getUri = (uri) => {
    return `${baseUri}?uri=${encodeURIComponent(uri)}`;
  };
  return {
    id: "metaMask",
    internalId: "METAMASK",
    name: "MetaMask",
    rdns: "io.metamask",
    iconUrl: icon2,
    installed: isMetaMaskInjected,
    isExtension: true,
    isMobile: true,
    downloadUrl: "https://metamask.io/download/",
    getUri,
    deeplinkUri,
    createConnector: isMetaMaskInjected ? getInjectedConnector({
      target: metaMaskTarget
    }) : getWalletConnectConnector({
      projectId,
      walletConnectParameters
    })
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/rainbow/rainbowIcon.js
var icon3 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMCA1LjRIMS44QzExLjA3ODQgNS40IDE4LjYgMTIuOTIxNiAxOC42IDIyLjJWMjRIMjIuMkMyMy4xOTQxIDI0IDI0IDIzLjE5NDEgMjQgMjIuMkMyNCA5LjkzOTI3IDE0LjA2MDcgMCAxLjggMEMwLjgwNTg4NyAwIDAgMC44MDU4ODcgMCAxLjhWNS40WiIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzQ0Ml84MjcpIi8+CiAgPHBhdGggZD0iTTE5LjIgMjIuMkgyMy45OTk5QzIzLjk5OTkgMjMuMTk0MSAyMy4xOTQxIDI0IDIyLjE5OTkgMjRIMTkuMlYyMi4yWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzQ0Ml84MjcpIi8+CiAgPHBhdGggZD0iTTEuOCAwTDEuOCA0LjhIMEwxLjMxMTM0ZS0wNyAxLjhDMS43NDU4OGUtMDcgMC44MDU4ODcgMC44MDU4ODcgLTQuMzQ1NGUtMDggMS44IDBaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfNDQyXzgyNykiLz4KICA8cGF0aCBkPSJNMCA0Ljc5OTk5SDEuOEMxMS40MDk3IDQuNzk5OTkgMTkuMiAxMi41OTAyIDE5LjIgMjIuMlYyNEgxMy44VjIyLjJDMTMuOCAxNS41NzI2IDguNDI3NDEgMTAuMiAxLjggMTAuMkgwVjQuNzk5OTlaIiBmaWxsPSJ1cmwoI3BhaW50M19yYWRpYWxfNDQyXzgyNykiLz4KICA8cGF0aCBkPSJNMTQuMzk5OSAyMi4ySDE5LjE5OTlWMjRIMTQuMzk5OVYyMi4yWiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyXzQ0Ml84MjcpIi8+CiAgPHBhdGggZD0iTTIuMDk4MTVlLTA3IDkuNTk5OTlMMCA0Ljc5OTk5TDEuOCA0Ljc5OTk5TDEuOCA5LjU5OTk5SDIuMDk4MTVlLTA3WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzQ0Ml84MjcpIi8+CiAgPHBhdGggZD0iTTAgMTIuNkMwIDEzLjU5NDEgMC44MDU4ODcgMTQuNCAxLjggMTQuNEM2LjEwNzgyIDE0LjQgOS42IDE3Ljg5MjEgOS42IDIyLjJDOS42IDIzLjE5NDEgMTAuNDA1OSAyNCAxMS40IDI0SDE0LjRWMjIuMkMxNC40IDE1LjI0MTIgOC43NTg3OCA5LjU5OTk4IDEuOCA5LjU5OTk4SDBWMTIuNloiIGZpbGw9InVybCgjcGFpbnQ2X3JhZGlhbF80NDJfODI3KSIvPgogIDxwYXRoIGQ9Ik05LjYwMDEgMjIuMkgxNC40MDAxVjI0SDExLjQwMDFDMTAuNDA2IDI0IDkuNjAwMSAyMy4xOTQxIDkuNjAwMSAyMi4yWiIgZmlsbD0idXJsKCNwYWludDdfcmFkaWFsXzQ0Ml84MjcpIi8+CiAgPHBhdGggZD0iTTEuOCAxNC40QzAuODA1ODg3IDE0LjQgMS43NDU4OGUtMDcgMTMuNTk0MSAxLjMxMTM0ZS0wNyAxMi42TDAgOS41OTk5OEwxLjggOS41OTk5OEwxLjggMTQuNFoiIGZpbGw9InVybCgjcGFpbnQ4X3JhZGlhbF80NDJfODI3KSIvPgogIDxkZWZzPgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsXzQ0Ml84MjciIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS44IDIyLjIpIHJvdGF0ZSgtOTApIHNjYWxlKDIyLjIpIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjc3MDI3NyIgc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfNDQyXzgyNyIgeDE9IjE4LjkiIHkxPSIyMy4xIiB4Mj0iMjMuOTk5OSIgeTI9IjIzLjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfNDQyXzgyNyIgeDE9IjAuOSIgeTE9Ii0zLjkzMzllLTA3IiB4Mj0iMC44OTk5OTgiIHkyPSI1LjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzg3NTRDOSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50M19yYWRpYWxfNDQyXzgyNyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxLjggMjIuMikgcm90YXRlKC05MCkgc2NhbGUoMTcuNCkiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNzIzOTI5IiBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl80NDJfODI3IiB4MT0iMTQuMzk5OSIgeTE9IjIzLjEiIHgyPSIxOS4xOTk5IiB5Mj0iMjMuMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl80NDJfODI3IiB4MT0iMC45MDAwMDEiIHkxPSI5LjU5OTk5IiB4Mj0iMC44OTk5OTkiIHkyPSI0Ljc5OTk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDZfcmFkaWFsXzQ0Ml84MjciIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS44IDIyLjIpIHJvdGF0ZSgtOTApIHNjYWxlKDEyLjYpIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjU5NTEzIiBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ3X3JhZGlhbF80NDJfODI3IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMzAwMSAyMy4xKSBzY2FsZSg1LjEgMTMuNikiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ4X3JhZGlhbF80NDJfODI3IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAuODk5OTk5IDE0LjcpIHJvdGF0ZSgtOTApIHNjYWxlKDUuMSA5Ni43MTEpIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwQUFGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMURBNDAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgo8L3N2Zz4=";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/rainbow/rainbow.js
var rainbowWallet = ({ projectId, walletConnectParameters }) => {
  const isRainbowInjected = hasInjectedProvider({ flag: "isRainbow" });
  const deeplinkUri = "rainbow://";
  const baseUri = isAndroid() ? `${deeplinkUri}wc` : isIOS() ? !isTelegram() ? (
    // currently broken in MetaMask v6.5.0 https://github.com/MetaMask/metamask-mobile/issues/6457
    `${deeplinkUri}wc`
  ) : "https://rnbwapp.com/wc" : "https://rnbwapp.com/wc";
  const getUri = (uri) => {
    return `${baseUri}?uri=${encodeURIComponent(uri)}`;
  };
  return {
    id: "rainbow",
    internalId: "RAINBOW",
    name: "Rainbow",
    rdns: "me.rainbow",
    iconUrl: icon3,
    installed: isRainbowInjected,
    isExtension: true,
    isMobile: true,
    downloadUrl: "https://rainbow.me/",
    getUri,
    deeplinkUri,
    createConnector: isRainbowInjected ? getInjectedConnector({ flag: "isRainbow" }) : getWalletConnectConnector({
      projectId,
      walletConnectParameters
    })
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/walletConnect/walletConnectIcon.js
var icon4 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNNC45MTMzIDYuOTM1NDFDOC44MjcxOCAzLjAyMTUzIDE1LjE3MjggMy4wMjE1MyAxOS4wODY3IDYuOTM1NDFMMTkuNTU3OCA3LjQwNjQ2QzE5Ljc1MzUgNy42MDIxNSAxOS43NTM1IDcuOTE5NDMgMTkuNTU3OCA4LjExNTEzTDE3Ljk0NjQgOS43MjY0N0MxNy44NDg2IDkuODI0MzIgMTcuNjg5OSA5LjgyNDMyIDE3LjU5MjEgOS43MjY0N0wxNi45NDM5IDkuMDc4MjZDMTQuMjEzNSA2LjM0Nzg0IDkuNzg2NTcgNi4zNDc4NCA3LjA1NjE0IDkuMDc4MjZMNi4zNjE5NiA5Ljc3MjQ0QzYuMjY0MTIgOS44NzAyOCA2LjEwNTQ4IDkuODcwMjggNi4wMDc2MyA5Ljc3MjQ0TDQuMzk2MjkgOC4xNjExQzQuMjAwNTkgNy45NjU0IDQuMjAwNTkgNy42NDgxMiA0LjM5NjI5IDcuNDUyNDNMNC45MTMzIDYuOTM1NDFaTTIyLjQxOTEgMTAuMjY3OEwyMy44NTMyIDExLjcwMTlDMjQuMDQ4OSAxMS44OTc2IDI0LjA0ODkgMTIuMjE0OSAyMy44NTMyIDEyLjQxMDZMMTcuMzg2OCAxOC44NzcyQzE3LjE5MTEgMTkuMDcyOCAxNi44NzM4IDE5LjA3MjkgMTYuNjc4MSAxOC44NzcyQzE2LjY3ODEgMTguODc3MiAxNi42NzgxIDE4Ljg3NzIgMTYuNjc4MSAxOC44NzcyTDEyLjA4ODYgMTQuMjg3N0MxMi4wMzk3IDE0LjIzODcgMTEuOTYwNCAxNC4yMzg3IDExLjkxMTUgMTQuMjg3N0MxMS45MTE1IDE0LjI4NzcgMTEuOTExNSAxNC4yODc3IDExLjkxMTUgMTQuMjg3N0w3LjMyMjA3IDE4Ljg3NzJDNy4xMjYzOCAxOS4wNzI4IDYuODA5MDkgMTkuMDcyOSA2LjYxMzQgMTguODc3MkM2LjYxMzQgMTguODc3MiA2LjYxMzM5IDE4Ljg3NzIgNi42MTMzOSAxOC44NzcyTDAuMTQ2NzcxIDEyLjQxMDVDLTAuMDQ4OTIzNiAxMi4yMTQ4IC0wLjA0ODkyMzYgMTEuODk3NSAwLjE0Njc3MSAxMS43MDE5TDEuNTgwODcgMTAuMjY3OEMxLjc3NjU2IDEwLjA3MjEgMi4wOTM4NSAxMC4wNzIxIDIuMjg5NTQgMTAuMjY3OEw2Ljg3OTEgMTQuODU3M0M2LjkyODAyIDE0LjkwNjIgNy4wMDczNCAxNC45MDYyIDcuMDU2MjYgMTQuODU3M0M3LjA1NjI2IDE0Ljg1NzMgNy4wNTYyNiAxNC44NTczIDcuMDU2MjcgMTQuODU3M0wxMS42NDU2IDEwLjI2NzhDMTEuODQxMyAxMC4wNzIxIDEyLjE1ODYgMTAuMDcyIDEyLjM1NDMgMTAuMjY3N0MxMi4zNTQzIDEwLjI2NzcgMTIuMzU0MyAxMC4yNjc3IDEyLjM1NDMgMTAuMjY3N0wxNi45NDM4IDE0Ljg1NzNDMTYuOTkyNyAxNC45MDYyIDE3LjA3MjEgMTQuOTA2MiAxNy4xMjEgMTQuODU3M0wyMS43MTA1IDEwLjI2NzhDMjEuOTA2MiAxMC4wNzIxIDIyLjIyMzQgMTAuMDcyMSAyMi40MTkxIDEwLjI2NzhaIiBmaWxsPSIjM0I5OUZDIi8+Cjwvc3ZnPg==";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/walletConnect/walletConnect.js
var walletConnectWallet = ({ projectId, options }) => {
  const getUri = (uri) => uri;
  return {
    id: "walletConnect",
    internalId: "WALLETCONNECT",
    name: "WalletConnect",
    installed: void 0,
    iconUrl: icon4,
    isMobile: true,
    getUri,
    createConnector: getWalletConnectConnector({
      projectId,
      walletConnectParameters: options
    })
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/coinbase/coinbaseIcon.js
var icon5 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDQyXzg1NCkiPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyNEMxOC42Mjc0IDI0IDI0IDE4LjYyNzQgMjQgMTJDMjQgNS4zNzI1OCAxOC42Mjc0IDAgMTIgMEM1LjM3MjU4IDAgMCA1LjM3MjU4IDAgMTJDMCAxOC42Mjc0IDUuMzcyNTggMjQgMTIgMjRaTTguODMxNzUgOC4wODE2MkM4LjQxNzU0IDguMDgxNjIgOC4wODE3NSA4LjQxNzQxIDguMDgxNzUgOC44MzE2MlYxNS4xNjg0QzguMDgxNzUgMTUuNTgyNiA4LjQxNzU0IDE1LjkxODQgOC44MzE3NSAxNS45MTg0SDE1LjE2ODVDMTUuNTgyNyAxNS45MTg0IDE1LjkxODUgMTUuNTgyNiAxNS45MTg1IDE1LjE2ODRWOC44MzE2MkMxNS45MTg1IDguNDE3NDEgMTUuNTgyNyA4LjA4MTYyIDE1LjE2ODUgOC4wODE2Mkg4LjgzMTc1WiIgZmlsbD0iIzJDNUZGNiIvPgogIDwvZz4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcDBfNDQyXzg1NCI+CiAgICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgo8L3N2Zz4=";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/coinbase/coinbase.js
var coinbaseWallet2 = ({ appName, appIcon }) => {
  const isCoinbaseInjected = hasInjectedProvider({ flag: "isCoinbaseWallet" });
  const getUri = (uri) => uri;
  return {
    id: "coinbase",
    internalId: "COINBASE",
    name: "Coinbase Wallet",
    rdns: "com.coinbase.wallet",
    iconUrl: icon5,
    // Note that we never resolve `installed` to `false` because the
    // Coinbase Wallet SDK falls back to other connection methods if
    // the injected connector isn't available
    installed: isCoinbaseInjected,
    isExtension: true,
    isMobile: true,
    downloadUrl: "https://www.coinbase.com/wallet/downloads",
    getUri,
    createConnector: (walletDetails) => createConnector((config) => __spreadValues(__spreadValues({}, coinbaseWallet({
      version: "4",
      appName,
      appLogoUrl: appIcon,
      preference: "eoaOnly"
    })(config)), walletDetails))
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/zerion/zerionIcon.js
var icon6 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyOCAyOCI+PHBhdGggZmlsbD0iIzI5NjJFRiIgZD0iTTAgMGgyOHYyOEgweiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02LjA3MyA3Yy0uNDggMC0uNjY1LjU5My0uMjYyLjg0MWwxMC4wNzMgNi4wNzRhLjU3Ny41NzcgMCAwIDAgLjc1OC0uMTM5bDQuNDMtNS44MTRjLjMtLjQwNC0uMDA0LS45NjItLjUyNS0uOTYySDYuMDczWk0yMS45MDQgMjFjLjQ4IDAgLjY3LS41OTYuMjY3LS44NDRsLTEwLjA3NS02LjA3M2EuNTY5LjU2OSAwIDAgMC0uNzUxLjE0NmwtNC40MzcgNS44MTNjLS4zMDEuNDA0LjAxMi45NTguNTM0Ljk1OGgxNC40NjJaIi8+PC9zdmc+";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/zerion/zerion.js
var zerionWallet = ({ projectId, walletConnectParameters }) => {
  const isZerionInjected = hasInjectedProvider({
    namespace: "zerionWallet",
    flag: "isZerion"
  });
  const deeplinkUri = "zerion://";
  const baseUri = isTelegram() && isIOS() ? "https://app.zerion.io/wc" : `${deeplinkUri}wc`;
  const getUri = (uri) => {
    return `${baseUri}?uri=${encodeURIComponent(uri)}`;
  };
  return {
    id: "zerion",
    internalId: "ZERION",
    name: "Zerion",
    rdns: "io.zerion.wallet",
    iconUrl: icon6,
    installed: isZerionInjected,
    isExtension: true,
    isMobile: true,
    getUri,
    deeplinkUri,
    downloadUrl: "https://zerion.io/download",
    createConnector: isZerionInjected ? getInjectedConnector({
      namespace: "zerionWallet",
      flag: "isZerion"
    }) : getWalletConnectConnector({
      projectId,
      walletConnectParameters
    })
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/rabby/rabbyIcon.js
var icon7 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSIjODY5N0ZGIiBkPSJNMjggMEgwdjI4aDI4VjBaIi8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTIyLjU0IDE1LjA3OGMuNjc3LTEuNTE0LTIuNjczLTUuNzQ0LTUuODc0LTcuNTA2LTIuMDE3LTEuMzY1LTQuMTItMS4xNzgtNC41NDUtLjU3OS0uOTM1IDEuMzE2IDMuMDk0IDIuNDMgNS43ODggMy43MzEtLjU4LjI1Mi0xLjEyNS43MDMtMS40NDYgMS4yOC0xLjAwNC0xLjA5Ni0zLjIwOS0yLjA0LTUuNzk2LTEuMjgtMS43NDMuNTEzLTMuMTkxIDEuNzIxLTMuNzUxIDMuNTQ2YTEuMDk3IDEuMDk3IDAgMSAwLS40NDUgMi4xYy4xMTIgMCAuNDYzLS4wNzUuNDYzLS4wNzVsNS42MTIuMDQxYy0yLjI0NCAzLjU2LTQuMDE4IDQuMDgxLTQuMDE4IDQuNjk4czEuNjk3LjQ1IDIuMzM1LjIyYzMuMDUtMS4xIDYuMzI3LTQuNTMxIDYuODktNS41MTkgMi4zNi4yOTUgNC4zNDUuMzMgNC43ODYtLjY1N1oiLz48cGF0aCBmaWxsPSJ1cmwoI2MpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xNy44ODUgMTAuNzEzLjAyNS4wMWMuMTI1LS4wNDkuMTA1LS4yMzMuMDctLjM3OC0uMDc4LS4zMzMtMS40MzgtMS42NzYtMi43MTUtMi4yNzctMS43NDMtLjgyLTMuMDI1LS43NzctMy4yMTItLjM5OC4zNTYuNzI2IDEuOTk4IDEuNDA4IDMuNzE0IDIuMTIuNzIzLjMgMS40Ni42MDYgMi4xMTguOTIzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNkKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNzAxIDE4LjAzNmExMC4yOTYgMTAuMjk2IDAgMCAwLTEuMi0uMzdjLjQ4Mi0uODYyLjU4My0yLjEzOC4xMjgtMi45NDUtLjYzOS0xLjEzMy0xLjQ0LTEuNzM2LTMuMzA0LTEuNzM2LTEuMDI0IDAtMy43ODMuMzQ2LTMuODMyIDIuNjQ4LS4wMDUuMjQyIDAgLjQ2NC4wMTcuNjY3bDUuMDM2LjAzN2ExNy4yNjQgMTcuMjY0IDAgMCAxLTEuODcxIDIuNDgzYy42NjkuMTcyIDEuMjIxLjMxNiAxLjcyOC40NDguNDguMTI1LjkyLjI0IDEuMzguMzU3YTIxLjAwMyAyMS4wMDMgMCAwIDAgMS45MTgtMS41OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9InVybCgjZSkiIGQ9Ik02Ljg0OCAxNi4wNjNjLjIwNiAxLjc1IDEuMiAyLjQzNSAzLjIzMiAyLjYzOCAyLjAzMi4yMDMgMy4xOTcuMDY3IDQuNzQ5LjIwOCAxLjI5Ni4xMTggMi40NTMuNzc4IDIuODgyLjU1LjM4Ni0uMjA1LjE3LS45NDctLjM0Ny0xLjQyMy0uNjctLjYxNy0xLjU5Ny0xLjA0Ni0zLjIyOS0xLjE5OS4zMjUtLjg5LjIzNC0yLjEzOC0uMjctMi44MTctLjczMS0uOTgyLTIuMDc5LTEuNDI2LTMuNzg1LTEuMjMyLTEuNzgyLjIwMi0zLjQ5IDEuMDgtMy4yMzIgMy4yNzVaIi8+PC9nPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjEwLjQ2NCIgeDI9IjIyLjM5NCIgeTE9IjEzLjczNyIgeTI9IjE3LjEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iMjAuMzg2IiB4Mj0iMTEuNzc5IiB5MT0iMTMuNTA5IiB5Mj0iNC44NzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNzI1OERDIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzk3REVBIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjE1Ljk0IiB4Mj0iNy42NzMiIHkxPSIxOC4zMzciIHkyPSIxMy41ODQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNzQ2MUVBIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkZDMkZGIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZSIgeDE9IjExLjE3NyIgeDI9IjE2Ljc2NSIgeTE9IjEzLjY0OCIgeTI9IjIwLjc0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9Ii45ODQiIHN0b3AtY29sb3I9IiNENUNFRkYiLz48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyOHYyOEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/rabby/rabby.js
var rabbyWallet = ({ projectId, walletConnectParameters }) => {
  const isRabbyInjected = hasInjectedProvider({ flag: "isRabby" });
  return {
    id: "rabby",
    internalId: "RABBY",
    name: "Rabby Wallet",
    rdns: "io.rabby",
    iconUrl: icon7,
    installed: isRabbyInjected,
    isExtension: true,
    isMobile: false,
    downloadUrl: "https://rabby.io",
    createConnector: isRabbyInjected ? getInjectedConnector({ flag: "isRabby" }) : getWalletConnectConnector({
      projectId,
      walletConnectParameters
    })
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/safe/safeIcon.js
var icon8 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiBmaWxsPSIjMTJGRjgwIi8+CjxwYXRoIGQ9Ik0yMi41MTUxIDEzLjk5NzlIMjAuNDI0NEMxOS43OTgxIDEzLjk5NzkgMTkuMjk0NSAxNC41MDU4IDE5LjI5NDUgMTUuMTI4VjE4LjE2M0MxOS4yOTQ1IDE4Ljc4OTQgMTguNzg2NiAxOS4yOTMxIDE4LjE2NDUgMTkuMjkzMUg5LjgzOThDOS4yMTM0NCAxOS4yOTMxIDguNzA5ODEgMTkuODAxMSA4LjcwOTgxIDIwLjQyMzNWMjIuNTE4NUM4LjcwOTgxIDIzLjE0NSA5LjIxNzY3IDIzLjY0ODcgOS44Mzk4IDIzLjY0ODdIMTguNjQyN0MxOS4yNjkxIDIzLjY0ODcgMTkuNzY0MiAyMy4xNDA3IDE5Ljc2NDIgMjIuNTE4NVYyMC44NDIzQzE5Ljc2NDIgMjAuMjE1OSAyMC4yNzIxIDE5Ljc3NTcgMjAuODk0MiAxOS43NzU3SDIyLjUxNTFDMjMuMTQxNSAxOS43NzU3IDIzLjY0NTEgMTkuMjY3NyAyMy42NDUxIDE4LjY0NTVWMTUuMTE5NkMyMy42NDUxIDE0LjQ4ODkgMjMuMTM3MyAxMy45OTc5IDIyLjUxNTEgMTMuOTk3OVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik04LjcwOTggOS44NDEyN0M4LjcwOTggOS4yMTQ4MSA5LjIxNzY2IDguNzExMTEgOS44Mzk3OCA4LjcxMTExSDE4LjE1NkMxOC43ODIzIDguNzExMTEgMTkuMjg2IDguMjAzMTcgMTkuMjg2IDcuNTgwOTVWNS40ODk5NUMxOS4yODYgNC44NjM0OSAxOC43NzgxIDQuMzU5NzkgMTguMTU2IDQuMzU5NzlIOS4zNTczMkM4LjczMDk2IDQuMzU5NzkgOC4yMjczMyA0Ljg2NzcyIDguMjI3MzMgNS40ODk5NVY3LjEwMjY0QzguMjI3MzMgNy43MjkxIDcuNzE5NDcgOC4yMzI4IDcuMDk3MzQgOC4yMzI4SDUuNDg5MTJDNC44NjI3NiA4LjIzMjggNC4zNTkxMyA4Ljc0MDc0IDQuMzU5MTMgOS4zNjI5NlYxMi44OTMxQzQuMzU5MTMgMTMuNTE5NiA0Ljg2Njk5IDEzLjk5NzkgNS40OTMzNSAxMy45OTc5SDcuNTg0MDRDOC4yMTA0IDEzLjk5NzkgOC43MTQwMyAxMy40ODk5IDguNzE0MDMgMTIuODY3N0w4LjcwOTggOS44NDEyN1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMy4wMTM5IDExLjgwMTFIMTUuMDI0MkMxNS42ODAyIDExLjgwMTEgMTYuMjA5MiAxMi4zMzQ0IDE2LjIwOTIgMTIuOTg2MlYxNC45OTY4QzE2LjIwOTIgMTUuNjUyOSAxNS42NzU5IDE2LjE4MiAxNS4wMjQyIDE2LjE4MkgxMy4wMTM5QzEyLjM1NzkgMTYuMTgyIDExLjgyODkgMTUuNjQ4NyAxMS44Mjg5IDE0Ljk5NjhWMTIuOTg2MkMxMS44Mjg5IDEyLjMzMDIgMTIuMzYyMSAxMS44MDExIDEzLjAxMzkgMTEuODAxMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/safe/safe.js
var safeWallet = () => ({
  id: "safe",
  internalId: "SAFE",
  name: "Safe",
  rdns: "io.safe",
  iconUrl: icon8,
  installed: (
    // Only allowed in iframe context
    !(typeof window === "undefined") && (window == null ? void 0 : window.parent) !== window
  ),
  isExtension: false,
  isMobile: false,
  downloadUrl: "https://safe.global",
  createConnector: (walletDetails) => {
    return createConnector((config) => __spreadValues(__spreadValues({}, safe()(config)), walletDetails));
  }
});

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/okx/okxIcon.js
var icon9 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE5NDE1XzUxKSI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjIiIGZpbGw9IiNCN0YyNjAiLz4KPHBhdGggZD0iTTkuMzMzMzMgMjBINFYxNC42NjY3SDkuMzMzMzNWMjBaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjAgMjBIMTQuNjY2N1YxNC42NjY3SDIwVjIwWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE0LjY2NjcgMTQuNjY2N0g5LjMzMzMzVjkuMzMzMzNIMTQuNjY2N1YxNC42NjY3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTkuMzMzMzMgOS4zMzMzM0g0VjRIOS4zMzMzM1Y5LjMzMzMzWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIwIDkuMzMzMzNIMTQuNjY2N1Y0SDIwVjkuMzMzMzNaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE5NDE1XzUxIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/okx/okx.js
var okxWallet = ({ projectId, walletConnectParameters }) => {
  const isOKXInjected = hasInjectedProvider({ namespace: "okxwallet" });
  const shouldUseWalletConnect = !isOKXInjected;
  const getUri = (uri) => {
    return isAndroid() ? uri : `okex://main/wc?uri=${encodeURIComponent(uri)}`;
  };
  return {
    id: "okx",
    internalId: "OKX",
    name: "OKX Wallet",
    rdns: "com.okex.wallet",
    iconUrl: icon9,
    installed: isOKXInjected,
    isExtension: true,
    isMobile: true,
    getUri,
    downloadUrl: "https://okx.com/download",
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ namespace: "okxwallet" })
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/backpack/backpackIcon.js
var icon10 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEzNDFfMzQiIHN0eWxlPSJtYXNrLXR5cGU6bHVtaW5hbmNlIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI0IiB5PSIwIiB3aWR0aD0iMTciIGhlaWdodD0iMjQiPgo8cGF0aCBkPSJNMjAuNSAwSDRWMjRIMjAuNVYwWiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzEzNDFfMzQpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy44MTMgMS44ODcwOEMxNC42ODUzIDEuODg3MDggMTUuNTAzNSAyLjAwNDAyIDE2LjI2MTIgMi4yMjA4OUMxNS41MTk1IDAuNDkyMjU0IDEzLjk3OTUgMCAxMi4yNjU2IDBDMTAuNTQ4MyAwIDkuMDA1NjUgMC40OTQxODggOC4yNjU2MiAyLjIzMTA3QzkuMDE3NjUgMi4wMDY1NyA5LjgzMjM2IDEuODg3MDggMTAuNzAxNyAxLjg4NzA4SDEzLjgxM1pNMTAuNTAyMiAzLjYyMjU2QzYuMzYwMDMgMy42MjI1NiA0IDYuODgxMTQgNCAxMC45MDA4VjE1LjAzQzQgMTUuNDMyIDQuMzM1NzkgMTUuNzUgNC43NSAxNS43NUgxOS43NUMyMC4xNjQyIDE1Ljc1IDIwLjUgMTUuNDMyIDIwLjUgMTUuMDNWMTAuOTAwOEMyMC41IDYuODgxMTQgMTcuNzU1NiAzLjYyMjU2IDEzLjYxMzUgMy42MjI1NkgxMC41MDIyWk0xMi4yNDQxIDEwLjkzNjVDMTMuNjkzOSAxMC45MzY1IDE0Ljg2OTIgOS43NjEyMyAxNC44NjkyIDguMzExNTNDMTQuODY5MiA2Ljg2MTc4IDEzLjY5MzkgNS42ODY1MyAxMi4yNDQxIDUuNjg2NTNDMTAuNzk0NCA1LjY4NjUzIDkuNjE5MTQgNi44NjE3OCA5LjYxOTE0IDguMzExNTNDOS42MTkxNCA5Ljc2MTIzIDEwLjc5NDQgMTAuOTM2NSAxMi4yNDQxIDEwLjkzNjVaTTQgMTguMTc3MUM0IDE3Ljc3NTEgNC4zMzU3OSAxNy40NDkyIDQuNzUgMTcuNDQ5MkgxOS43NUMyMC4xNjQyIDE3LjQ0OTIgMjAuNSAxNy43NzUxIDIwLjUgMTguMTc3MVYyMi41NDRDMjAuNSAyMy4zNDc5IDE5LjgyODQgMjMuOTk5NyAxOSAyMy45OTk3SDUuNUM0LjY3MTU3IDIzLjk5OTcgNCAyMy4zNDc5IDQgMjIuNTQ0VjE4LjE3NzFaIiBmaWxsPSIjRTMzRTNGIi8+CjwvZz4KPC9zdmc+Cg==";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/backpack/backpack.js
var backpackWallet = ({ projectId, walletConnectParameters }) => {
  const isBackpackInjected = hasInjectedProvider({ namespace: "backpack.ethereum" });
  const shouldUseWalletConnect = !isBackpackInjected;
  const getUri = (uri) => {
    return uri;
  };
  return {
    id: "backpack",
    internalId: "BACKPACK",
    name: "Backpack",
    rdns: "app.backpack",
    iconUrl: icon10,
    installed: isBackpackInjected,
    isExtension: true,
    isMobile: true,
    getUri,
    downloadUrl: "https://backpack.app/download",
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ namespace: "backpack.ethereum" })
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/haha/hahaIcon.js
var icon11 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE5NTA1XzI3KSI+CjxwYXRoIGQ9Ik0yMC40IDBIMy42QzEuNjExNzcgMCAwIDEuNjExNzcgMCAzLjZWMjAuNEMwIDIyLjM4ODIgMS42MTE3NyAyNCAzLjYgMjRIMjAuNEMyMi4zODgyIDI0IDI0IDIyLjM4ODIgMjQgMjAuNFYzLjZDMjQgMS42MTE3NyAyMi4zODgyIDAgMjAuNCAwWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE5NTA1XzI3KSIvPgo8cGF0aCBkPSJNOS4yMDAyIDEwLjcxNzlMMTQuNzk5OCA5LjIxNzk0VjUuMTk5MzhIMTguNzk5OFYxMi4yOTEyTDI0IDEwLjg5NzZWMTUuMDM5MkwxOC43OTk4IDE2LjQzMThWMTguNzk5SDE0Ljc5OThWMTMuMzU5NUw5LjIwMDIgMTQuODU5NVYxOC43OTlINS4yMDAyVjE1LjkzMDhMNS4xOTkyMiAxNS45MzE4VjExLjc5MTJMNS4yMDAyIDExLjc5MDJWMTEuNzg4MkwwIDEzLjE4MThWOS4wNDAyTDUuMjAwMiA3LjY0NzYyVjUuMTk5MzhIOS4yMDAyVjEwLjcxNzlaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTk1MDVfMjciIHgxPSIwIiB5MT0iMjQiIHgyPSIyNCIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzExQTlGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGQzY1RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xOTUwNV8yNyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/haha/haha.js
var hahaWallet = ({ projectId, walletConnectParameters }) => {
  const isHahaInjected = hasInjectedProvider({ namespace: "haha" });
  const shouldUseWalletConnect = !isHahaInjected;
  const getUri = (uri) => {
    return uri;
  };
  return {
    id: "haha",
    internalId: "HAHA",
    name: "HaHa",
    rdns: "haha.me",
    iconUrl: icon11,
    installed: isHahaInjected,
    isExtension: true,
    isMobile: true,
    getUri,
    downloadUrl: "https://www.haha.me/",
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ namespace: "haha" })
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/phantom/phantomIcon.js
var icon12 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjU5Nl8xMzg1ODApIj4KPHJlY3QgeT0iLTAuMDAwOTc2NTYyIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiBmaWxsPSIjQUI5RkYyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTIyLjIxOCA3NjQuODEzQzQ3NS4xMDEgODM3LjAxMSAzOTYuMTQ3IDkyOC4zNzcgMjkxLjA4OSA5MjguMzc3QzI0MS40MjUgOTI4LjM3NyAxOTMuNjcxIDkwNy45MzIgMTkzLjY3MSA4MTkuMTIxQzE5My42NzEgNTkyLjk0MiA1MDIuNDc5IDI0Mi44MTIgNzg5LjAwMyAyNDIuODEyQzk1Mi4wMDMgMjQyLjgxMiAxMDE2Ljk1IDM1NS45MDEgMTAxNi45NSA0ODQuMzI1QzEwMTYuOTUgNjQ5LjE2NyA5MDkuOTc5IDgzNy42NSA4MDMuNjQ3IDgzNy42NUM3NjkuOTAxIDgzNy42NSA3NTMuMzQ2IDgxOS4xMjEgNzUzLjM0NiA3ODkuNzMxQzc1My4zNDYgNzgyLjA2NCA3NTQuNjIgNzczLjc1OCA3NTcuMTY3IDc2NC44MTNDNzIwLjg3NCA4MjYuNzg4IDY1MC44MzUgODg0LjI5MiA1ODUuMjUzIDg4NC4yOTJDNTM3LjQ5OSA4ODQuMjkyIDUxMy4zMDQgODU0LjI2MiA1MTMuMzA0IDgxMi4wOTNDNTEzLjMwNCA3OTYuNzU5IDUxNi40ODcgNzgwLjc4NiA1MjIuMjE4IDc2NC44MTNaTTc2OS4wMzUgNDc5Ljg3MUM3NjkuMDM1IDUxNy4yOTMgNzQ2Ljk1NiA1MzYuMDAzIDcyMi4yNTggNTM2LjAwM0M2OTcuMTg1IDUzNi4wMDMgNjc1LjQ4MSA1MTcuMjkzIDY3NS40ODEgNDc5Ljg3MUM2NzUuNDgxIDQ0Mi40NDkgNjk3LjE4NSA0MjMuNzM4IDcyMi4yNTggNDIzLjczOEM3NDYuOTU2IDQyMy43MzggNzY5LjAzNSA0NDIuNDQ5IDc2OS4wMzUgNDc5Ljg3MVpNOTA5LjM2NyA0NzkuODcyQzkwOS4zNjcgNTE3LjI5NCA4ODcuMjg4IDUzNi4wMDUgODYyLjU5IDUzNi4wMDVDODM3LjUxNyA1MzYuMDA1IDgxNS44MTMgNTE3LjI5NCA4MTUuODEzIDQ3OS44NzJDODE1LjgxMyA0NDIuNDUgODM3LjUxNyA0MjMuNzQgODYyLjU5IDQyMy43NEM4ODcuMjg4IDQyMy43NCA5MDkuMzY3IDQ0Mi40NSA5MDkuMzY3IDQ3OS44NzJaIiBmaWxsPSIjRkZGREY4Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjU5Nl8xMzg1ODAiPgo8cmVjdCB5PSItMC4wMDA5NzY1NjIiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIHJ4PSI2MDAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/phantom/phantom.js
var phantomWallet = ({ projectId, walletConnectParameters }) => {
  const isPhantomInjected = hasInjectedProvider({ namespace: "phantom.ethereum" });
  const shouldUseWalletConnect = !isPhantomInjected;
  const getUri = (uri) => {
    return uri;
  };
  return {
    id: "phantom",
    internalId: "PHANTOM",
    name: "Phantom",
    rdns: "app.phantom",
    iconUrl: icon12,
    installed: isPhantomInjected,
    isExtension: true,
    isMobile: true,
    getUri,
    downloadUrl: "https://phantom.app/download",
    createConnector: shouldUseWalletConnect ? getWalletConnectConnector({
      projectId,
      walletConnectParameters
    }) : getInjectedConnector({ namespace: "phantom.ethereum" })
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/valora/valoraIcon.js
var icon13 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzMxNl8yKSI+CjxtYXNrIGlkPSJtYXNrMF8zMTZfMiIgc3R5bGU9Im1hc2stdHlwZTpsdW1pbmFuY2UiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxwYXRoIGQ9Ik0yNCAwSDBWMjRIMjRWMFoiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8zMTZfMikiPgo8cGF0aCBkPSJNMCAwSDI0VjI0SDBWMFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zMTZfMikiLz4KPG1hc2sgaWQ9Im1hc2sxXzMxNl8yIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iNCIgeT0iNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIj4KPHBhdGggZD0iTTQuMjg1NjQgNkgxOS43MTQyVjE4SDQuMjg1NjRWNloiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMV8zMTZfMikiPgo8cGF0aCBkPSJNMTMuMzgyNSAxOEMxNC4wMDMxIDEzLjMyIDE2LjI3NzEgMTAuNjU1MSAxOS43MTQyIDguMjQwNTdMMTcuOTU3MSA2QzE1LjcwODggNy42NjggMTMuMjUzMSAxMC4wMzI5IDEyLjExNjUgMTMuMjk0M0MxMS4xODU2IDEwLjYzMTEgOS4yNDc2NCA4LjI5MDI5IDYuMTE5OTMgNkw0LjI4NTY0IDguMjkwMjlDOC4xODgyMiAxMC45OCAxMC4xNTE5IDEzLjk5MiAxMC42OTQ1IDE4SDEzLjM4MjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzMxNl8yIiB4MT0iLTQuNTk4MDdlLTA3IiB5MT0iMjQiIHgyPSIyMS44NTcxIiB5Mj0iMy40Mjg1NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTciIHN0b3AtY29sb3I9IiNGRkQ1MkMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjZEOThBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzE2XzIiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/valora/valora.js
var valoraWallet = ({ projectId, walletConnectParameters }) => {
  const getUri = (uri) => {
    return !isMobile() ? uri : `celo://wallet/wc?uri=${encodeURIComponent(uri)}`;
  };
  return {
    id: "valora",
    internalId: "VALORA",
    name: "Valora",
    rdns: "co.clabs.valora",
    iconUrl: icon13,
    installed: false,
    isExtension: false,
    isMobile: true,
    downloadUrl: "https://valora.xyz",
    getUri,
    createConnector: getWalletConnectConnector({
      projectId,
      walletConnectParameters
    })
  };
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/wallets/connectors/index.js
var allWallets = [
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet2,
  zerionWallet,
  rabbyWallet,
  safeWallet,
  okxWallet,
  backpackWallet,
  hahaWallet,
  phantomWallet,
  valoraWallet
];

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/utils/resolveWalletList.js
function resolveWalletList(wallets) {
  if (!wallets || !wallets.length) return [];
  if (typeof wallets[0] === "function") return wallets;
  const ids = wallets;
  const resolved = allWallets.filter((createWalletFn) => {
    const meta = createWalletFn({ projectId: "", appName: "" });
    return ids.includes(meta.id.toUpperCase());
  });
  return resolved;
}

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/providers/createParaWagmiConfig.js
function createParaWagmiConfig(para, cfg) {
  const _a = cfg, {
    projectId,
    appName,
    appDescription,
    appIcon,
    appUrl,
    wallets,
    chains,
    transports,
    paraConnectorOptions
  } = _a, wagmiParams = __objRest(_a, [
    "projectId",
    "appName",
    "appDescription",
    "appIcon",
    "appUrl",
    "wallets",
    "chains",
    "transports",
    "paraConnectorOptions"
  ]);
  const wcMetadata = computeWalletConnectMetaData({ appName, appDescription, appUrl, appIcon });
  const walletFactories = resolveWalletList(wallets);
  const baseConnectors = connectorsForWallets(walletFactories, {
    para,
    projectId,
    appName,
    appDescription,
    appUrl,
    appIcon,
    walletConnectParameters: { metadata: wcMetadata }
  });
  const paraConn = paraConnector({
    para,
    chains: [...chains],
    disableModal: true,
    appName,
    options: paraConnectorOptions != null ? paraConnectorOptions : {}
  });
  const created = createConfig(__spreadProps(__spreadValues({
    ssr: true
  }, wagmiParams), {
    chains,
    transports,
    connectors: [...baseConnectors, paraConn]
  }));
  setWagmiConfig(created);
  return created;
}

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/providers/EvmExternalWalletContext.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react18 = __toESM(require_react(), 1);

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/utils/isEIP6963Connector.js
var isEIP6963Connector = (wallet) => {
  var _a;
  return !!(!wallet.isRainbowKitConnector && ((_a = wallet.icon) == null ? void 0 : _a.trim().startsWith("data:image")) && wallet.uid && wallet.name);
};

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/utils/getWalletConnectUri.js
var emitWalletConnectUri = (connector, uriConverter) => __async(void 0, null, function* () {
  var _a, _b;
  if (typeof window === "undefined") {
    return;
  }
  const provider = yield (_b = (_a = connector.getProvider) == null ? void 0 : _a.call(connector)) != null ? _b : void 0;
  if (connector.type === "coinbaseWallet" && (provider == null ? void 0 : provider.qrUrl)) {
    window.dispatchEvent(new CustomEvent("PARA_WALLETCONNECT_URI_READY", { detail: provider.qrUrl }));
  }
  if (!provider || typeof provider.once !== "function" && typeof provider.on !== "function") {
    throw new Error("display_uri event not supported for this connector");
  }
  const listen = typeof provider.once === "function" ? provider.once.bind(provider) : provider.on.bind(provider);
  const cancel = setTimeout(() => console.error("display_uri event not emitted"), 1e4);
  listen("display_uri", (uri) => {
    clearTimeout(cancel);
    window.dispatchEvent(
      new CustomEvent("PARA_WALLETCONNECT_URI_READY", { detail: uriConverter ? uriConverter(uri) : uri })
    );
  });
});

// node_modules/.pnpm/ox@0.9.6_typescript@5.9.3_zod@4.1.13/node_modules/ox/_esm/core/internal/base58.js
var alphabetToInteger = (
  /* __PURE__ */
  Object.freeze({
    1: 0n,
    2: 1n,
    3: 2n,
    4: 3n,
    5: 4n,
    6: 5n,
    7: 6n,
    8: 7n,
    9: 8n,
    A: 9n,
    B: 10n,
    C: 11n,
    D: 12n,
    E: 13n,
    F: 14n,
    G: 15n,
    H: 16n,
    J: 17n,
    K: 18n,
    L: 19n,
    M: 20n,
    N: 21n,
    P: 22n,
    Q: 23n,
    R: 24n,
    S: 25n,
    T: 26n,
    U: 27n,
    V: 28n,
    W: 29n,
    X: 30n,
    Y: 31n,
    Z: 32n,
    a: 33n,
    b: 34n,
    c: 35n,
    d: 36n,
    e: 37n,
    f: 38n,
    g: 39n,
    h: 40n,
    i: 41n,
    j: 42n,
    k: 43n,
    m: 44n,
    n: 45n,
    o: 46n,
    p: 47n,
    q: 48n,
    r: 49n,
    s: 50n,
    t: 51n,
    u: 52n,
    v: 53n,
    w: 54n,
    x: 55n,
    y: 56n,
    z: 57n
  })
);

// node_modules/.pnpm/ox@0.9.6_typescript@5.9.3_zod@4.1.13/node_modules/ox/_esm/core/Blobs.js
var blobsPerTransaction = 6;
var bytesPerFieldElement = 32;
var fieldElementsPerBlob = 4096;
var bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
var maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * fieldElementsPerBlob * blobsPerTransaction;

// node_modules/.pnpm/ox@0.9.6_typescript@5.9.3_zod@4.1.13/node_modules/ox/_esm/core/RpcResponse.js
var BaseError4 = class extends Error {
  constructor(errorObject) {
    const { cause, code, message, data, stack } = errorObject;
    super(message, { cause });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.BaseError"
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "stack", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cause = cause;
    this.code = code;
    this.data = data;
    this.stack = stack ?? "";
  }
};
var InvalidInputError = class _InvalidInputError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      code: _InvalidInputError.code,
      data: parameters.data,
      message: parameters.message ?? "Missing or invalid parameters."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32e3
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidInputError"
    });
  }
};
Object.defineProperty(InvalidInputError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32e3
});
var ResourceNotFoundError = class _ResourceNotFoundError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      code: _ResourceNotFoundError.code,
      data: parameters.data,
      message: parameters.message ?? "Requested resource not found."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32001
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ResourceNotFoundError"
    });
  }
};
Object.defineProperty(ResourceNotFoundError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32001
});
var ResourceUnavailableError = class _ResourceUnavailableError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      code: _ResourceUnavailableError.code,
      data: parameters.data,
      message: parameters.message ?? "Requested resource not available."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32002
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ResourceUnavailableError"
    });
  }
};
Object.defineProperty(ResourceUnavailableError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32002
});
var TransactionRejectedError = class _TransactionRejectedError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      code: _TransactionRejectedError.code,
      data: parameters.data,
      message: parameters.message ?? "Transaction creation failed."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32003
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.TransactionRejectedError"
    });
  }
};
Object.defineProperty(TransactionRejectedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32003
});
var MethodNotSupportedError = class _MethodNotSupportedError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      code: _MethodNotSupportedError.code,
      data: parameters.data,
      message: parameters.message ?? "Method is not implemented."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32004
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.MethodNotSupportedError"
    });
  }
};
Object.defineProperty(MethodNotSupportedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32004
});
var LimitExceededError = class _LimitExceededError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      code: _LimitExceededError.code,
      data: parameters.data,
      message: parameters.message ?? "Rate limit exceeded."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32005
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.LimitExceededError"
    });
  }
};
Object.defineProperty(LimitExceededError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32005
});
var VersionNotSupportedError = class _VersionNotSupportedError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      code: _VersionNotSupportedError.code,
      data: parameters.data,
      message: parameters.message ?? "JSON-RPC version not supported."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32006
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.VersionNotSupportedError"
    });
  }
};
Object.defineProperty(VersionNotSupportedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32006
});
var InvalidRequestError = class _InvalidRequestError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      code: _InvalidRequestError.code,
      data: parameters.data,
      message: parameters.message ?? "Input is not a valid JSON-RPC request."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32600
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidRequestError"
    });
  }
};
Object.defineProperty(InvalidRequestError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32600
});
var MethodNotFoundError = class _MethodNotFoundError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      code: _MethodNotFoundError.code,
      data: parameters.data,
      message: parameters.message ?? "Method does not exist."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32601
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.MethodNotFoundError"
    });
  }
};
Object.defineProperty(MethodNotFoundError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32601
});
var InvalidParamsError = class _InvalidParamsError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      code: _InvalidParamsError.code,
      data: parameters.data,
      message: parameters.message ?? "Invalid method parameters."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32602
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidParamsError"
    });
  }
};
Object.defineProperty(InvalidParamsError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32602
});
var InternalError = class _InternalError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      cause: parameters.cause,
      code: _InternalError.code,
      data: parameters.data,
      message: parameters.message ?? "Internal JSON-RPC error.",
      stack: parameters.stack
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32603
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InternalError"
    });
  }
};
Object.defineProperty(InternalError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32603
});
var ParseError = class _ParseError extends BaseError4 {
  constructor(parameters = {}) {
    super({
      code: _ParseError.code,
      data: parameters.data,
      message: parameters.message ?? "Failed to parse JSON-RPC response."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32700
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ParseError"
    });
  }
};
Object.defineProperty(ParseError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32700
});

// node_modules/.pnpm/ox@0.9.6_typescript@5.9.3_zod@4.1.13/node_modules/ox/_esm/core/Provider.js
var ProviderRpcError2 = class extends Error {
  constructor(code, message) {
    super(message);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ProviderRpcError"
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.code = code;
    this.details = message;
  }
};
var UserRejectedRequestError2 = class extends ProviderRpcError2 {
  constructor({ message = "The user rejected the request." } = {}) {
    super(4001, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4001
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UserRejectedRequestError"
    });
  }
};
Object.defineProperty(UserRejectedRequestError2, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4001
});
var UnauthorizedError = class extends ProviderRpcError2 {
  constructor({ message = "The requested method and/or account has not been authorized by the user." } = {}) {
    super(4100, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4100
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnauthorizedError"
    });
  }
};
Object.defineProperty(UnauthorizedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4100
});
var UnsupportedMethodError = class extends ProviderRpcError2 {
  constructor({ message = "The provider does not support the requested method." } = {}) {
    super(4200, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4200
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnsupportedMethodError"
    });
  }
};
Object.defineProperty(UnsupportedMethodError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4200
});
var DisconnectedError = class extends ProviderRpcError2 {
  constructor({ message = "The provider is disconnected from all chains." } = {}) {
    super(4900, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4900
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.DisconnectedError"
    });
  }
};
Object.defineProperty(DisconnectedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4900
});
var ChainDisconnectedError2 = class extends ProviderRpcError2 {
  constructor({ message = "The provider is not connected to the requested chain." } = {}) {
    super(4901, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4901
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.ChainDisconnectedError"
    });
  }
};
Object.defineProperty(ChainDisconnectedError2, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4901
});
var SwitchChainError2 = class extends ProviderRpcError2 {
  constructor({ message = "An error occurred when attempting to switch chain." } = {}) {
    super(4902, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4902
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.SwitchChainError"
    });
  }
};
Object.defineProperty(SwitchChainError2, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4902
});
var UnsupportedNonOptionalCapabilityError = class extends ProviderRpcError2 {
  constructor({ message = "This Wallet does not support a capability that was not marked as optional." } = {}) {
    super(5700, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5700
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnsupportedNonOptionalCapabilityError"
    });
  }
};
Object.defineProperty(UnsupportedNonOptionalCapabilityError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5700
});
var UnsupportedChainIdError = class extends ProviderRpcError2 {
  constructor({ message = "This Wallet does not support the requested chain ID." } = {}) {
    super(5710, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5710
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnsupportedChainIdError"
    });
  }
};
Object.defineProperty(UnsupportedChainIdError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5710
});
var DuplicateIdError = class extends ProviderRpcError2 {
  constructor({ message = "There is already a bundle submitted with this ID." } = {}) {
    super(5720, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5720
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.DuplicateIdError"
    });
  }
};
Object.defineProperty(DuplicateIdError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5720
});
var UnknownBundleIdError = class extends ProviderRpcError2 {
  constructor({ message = "This bundle id is unknown / has not been submitted." } = {}) {
    super(5730, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5730
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnknownBundleIdError"
    });
  }
};
Object.defineProperty(UnknownBundleIdError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5730
});
var BundleTooLargeError = class extends ProviderRpcError2 {
  constructor({ message = "The call bundle is too large for the Wallet to process." } = {}) {
    super(5740, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5740
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.BundleTooLargeError"
    });
  }
};
Object.defineProperty(BundleTooLargeError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5740
});
var AtomicReadyWalletRejectedUpgradeError = class extends ProviderRpcError2 {
  constructor({ message = "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade." } = {}) {
    super(5750, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5750
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.AtomicReadyWalletRejectedUpgradeError"
    });
  }
};
Object.defineProperty(AtomicReadyWalletRejectedUpgradeError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5750
});
var AtomicityNotSupportedError = class extends ProviderRpcError2 {
  constructor({ message = "The wallet does not support atomic execution but the request requires it." } = {}) {
    super(5760, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5760
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.AtomicityNotSupportedError"
    });
  }
};
Object.defineProperty(AtomicityNotSupportedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 5760
});

// node_modules/.pnpm/ox@0.9.6_typescript@5.9.3_zod@4.1.13/node_modules/ox/_esm/core/Ens.js
function normalize(name) {
  return ens_normalize(name);
}

// node_modules/.pnpm/viem@2.41.2_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_zod@4.1.13/node_modules/viem/_esm/utils/ens/normalize.js
function normalize2(name) {
  return normalize(name);
}

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/stores/useStore.js
var import_zustand_sync_tabs = __toESM(require_zustand_sync_tabs(), 1);
var useExternalWalletStore = create(
  (0, import_zustand_sync_tabs.syncTabs)(
    (set) => ({
      isConnecting: false,
      updateState: (state) => {
        set(__spreadValues({}, state));
      }
    }),
    {
      name: "para-evm-external-wallet-state"
    }
  )
);

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/providers/externalHooks.js
var externalHooks = { useAccount };

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/providers/EvmExternalWalletContext.js
var EvmExternalWalletContext = (0, import_react18.createContext)(__spreadProps(__spreadValues({}, defaultEvmExternalWallet), {
  farcasterStatus: void 0,
  verificationStage: void 0
}));
function EvmExternalWalletProvider({
  children,
  onSwitchWallet,
  para,
  walletsWithFullAuth,
  connectedWallet: connectedWalletProp,
  includeWalletVerification,
  connectionOnly
}) {
  const { connectAsync, connectors: untypedConnectors } = useConnect();
  const connections = useConnections();
  const {
    address: wagmiAddress,
    isConnecting,
    isReconnecting: isReconnecting2,
    chainId,
    connector: connectedConnector,
    isConnected
  } = useAccount();
  const { switchAccount: wagmiSwitchAccount } = useSwitchAccount();
  const { chains, switchChainAsync } = useSwitchChain();
  const { disconnectAsync, status: disconnectStatus } = useDisconnect();
  const { data: ensName, refetch: refetchEnsName } = useEnsName({ address: wagmiAddress });
  const { data: ensAvatar, refetch: refetchEnsAvatar } = useEnsAvatar({
    name: normalize2(ensName)
  });
  const { signMessageAsync } = useSignMessage();
  const connectedWallet = connectedWalletProp ? para.findWallet(connectedWalletProp.id, connectedWalletProp.type) : null;
  const disconnectTypeRef = (0, import_react18.useRef)();
  const verificationMessage = (0, import_react18.useRef)();
  const { refetch: getBalance3 } = useBalance({ address: wagmiAddress });
  const connectors = untypedConnectors;
  const connectionsRef = (0, import_react18.useRef)(connections);
  const connectorsRef = (0, import_react18.useRef)(connectors);
  const [verificationStage, setVerificationStage] = (0, import_react18.useState)("verifying");
  const isLocalConnecting = useExternalWalletStore((state) => state.isConnecting);
  const updateExternalWalletState = useExternalWalletStore((state) => state.updateState);
  const getStoredExternalWallets = () => {
    const storedExternalWalletsString = localStorage.getItem("@CAPSULE/externalWallets");
    let storedExternalWallets = {};
    if (storedExternalWalletsString) {
      storedExternalWallets = JSON.parse(storedExternalWalletsString);
    }
    return storedExternalWallets;
  };
  const switchAccount2 = (0, import_react18.useCallback)(
    (connectorName) => {
      var _a;
      const connector = (_a = connectionsRef.current.find((c) => {
        var _a2;
        const paraDetails = (_a2 = c.connector) == null ? void 0 : _a2.paraDetails;
        return [paraDetails == null ? void 0 : paraDetails.name, paraDetails == null ? void 0 : paraDetails.id, paraDetails == null ? void 0 : paraDetails.internalId].includes(connectorName);
      })) == null ? void 0 : _a.connector;
      if (!connector) {
        console.warn(`connector not found: ${connectorName}`);
        return;
      }
      wagmiSwitchAccount({ connector });
    },
    [wagmiSwitchAccount]
  );
  const findConnectorAndAccount = (externalWallet) => {
    var _a;
    let connector;
    switch (true) {
      case !!externalWallet.providerId:
        {
          connector = (_a = connectionsRef.current.find((c) => {
            var _a2;
            return ((_a2 = c.connector) == null ? void 0 : _a2.name) === externalWallet.providerId;
          })) == null ? void 0 : _a.connector;
        }
        break;
    }
    return { connector, account: externalWallet.address };
  };
  const getWalletBalance = (0, import_react18.useCallback)(
    // Format from wei to eth
    () => __async(this, null, function* () {
      const { data: balance } = yield getBalance3();
      return balance ? formatUnits(balance.value, etherUnits.wei) : void 0;
    }),
    [chainId, wagmiAddress, getBalance3]
  );
  (0, import_react18.useEffect)(() => {
    const storedExternalWallet = getStoredExternalWallets()[wagmiAddress != null ? wagmiAddress : ""];
    if ((connectedConnector == null ? void 0 : connectedConnector.id) === "para") {
      return;
    }
    if (!isConnecting && !isReconnecting2 && !isLocalConnecting && !!wagmiAddress && !storedExternalWallet && !disconnectTypeRef.current && para.isReady && !para.isFarcasterMiniApp) {
      reset();
    }
  }, [isConnected, isLocalConnecting, wagmiAddress, connectedConnector, para.isReady, para.isFarcasterMiniApp]);
  (0, import_react18.useEffect)(() => {
    const storedExternalWallet = Object.values(para.externalWallets || {})[0];
    if (!isLocalConnecting && isConnected && (storedExternalWallet == null ? void 0 : storedExternalWallet.type) === "EVM" && (storedExternalWallet == null ? void 0 : storedExternalWallet.address) !== wagmiAddress && (connectedConnector == null ? void 0 : connectedConnector.id) !== "para" && !disconnectTypeRef.current) {
      switchWallet(wagmiAddress);
    }
  }, [isLocalConnecting, wagmiAddress, isConnected]);
  (0, import_react18.useEffect)(() => {
    var _a;
    const connectedConnectorName = (connectedConnector == null ? void 0 : connectedConnector.name) === "WalletConnect" ? (_a = connectedConnector == null ? void 0 : connectedConnector.paraDetails) == null ? void 0 : _a.name : connectedConnector == null ? void 0 : connectedConnector.name;
    if (!isLocalConnecting && !isConnecting && !isReconnecting2 && connectedWallet && connectedConnector && connectedWallet.type === "EVM" && connectedConnectorName !== connectedWallet.name) {
      switchAccount2(connectedWallet.isExternal ? connectedWallet.name : "Para");
    }
  }, [isLocalConnecting, isConnecting, isReconnecting2, connectedWallet, wagmiSwitchAccount]);
  (0, import_react18.useEffect)(() => {
    const connectPara = () => __async(this, null, function* () {
      if (!isLocalConnecting && !isConnecting && !isReconnecting2 && !isConnected && !connectedConnector) {
        if (Object.values(para.wallets).length === 0 || !(yield para.isFullyLoggedIn())) {
          return;
        }
        connectParaEmbedded();
      }
    });
    connectPara();
  }, [isLocalConnecting, isConnecting, isReconnecting2, isConnected, connectedConnector]);
  const reset = () => __async(this, null, function* () {
    yield disconnectAsync();
    yield para.logout();
  });
  const getChainParams = (chainId2) => {
    var _a;
    const chain = chains.find((c) => c.id === chainId2);
    if (!chain) return null;
    return {
      chainId: `0x${chainId2.toString(16)}`,
      chainName: chain.name,
      nativeCurrency: {
        name: chain.nativeCurrency.name,
        symbol: chain.nativeCurrency.symbol,
        decimals: chain.nativeCurrency.decimals
      },
      rpcUrls: [chain.rpcUrls.default.http[0]],
      blockExplorerUrls: ((_a = chain.blockExplorers) == null ? void 0 : _a.default) ? [chain.blockExplorers.default.url] : void 0
    };
  };
  const signMessage3 = (_0) => __async(this, [_0], function* ({ message, externalWallet }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    let signOpts = {};
    const connector = findConnector(
      externalWallet ? externalWallet.providerId : getConnectorInfo(connectedConnector).providerId
    );
    const signUri = isMobile() && connector.type === "walletConnect" ? (_a = connector.paraDetails) == null ? void 0 : _a.deeplinkUri : void 0;
    const openApp = () => {
      if (signUri) {
        openMobileUrl(signUri);
      }
    };
    openApp();
    if (externalWallet) {
      signOpts = findConnectorAndAccount(externalWallet);
      yield switchAccount2((_b = externalWallet.providerId) != null ? _b : "");
    }
    const address = signOpts.account ? typeof signOpts.account === "string" ? signOpts.account : signOpts.account.getAddress() : wagmiAddress;
    try {
      const signature = yield signMessageAsync(__spreadValues({
        message,
        account: address
      }, signOpts));
      return {
        address,
        signature
      };
    } catch (e) {
      console.error("Error signing message:", e);
      console.error("Error signing message:", e.message, e.details);
      if (e.message.includes("Chain not configured") || e.details.includes("Chain not configured")) {
        setVerificationStage("switchingChain");
        const currentChainParams = getChainParams((_d = (_c = chains[0]) == null ? void 0 : _c.id) != null ? _d : chainId);
        if (!currentChainParams) {
          return {
            error: `Chain ${chainId} not found in configuration`
          };
        }
        try {
          yield switchChainAsync({
            addEthereumChainParameter: currentChainParams,
            chainId: (_f = (_e = chains[0]) == null ? void 0 : _e.id) != null ? _f : chainId
          });
          setVerificationStage("verifying");
          return yield signMessage3({ message, externalWallet });
        } catch (error) {
          console.error("Error adding chain:", error);
          return {
            error: `Error adding chain. You may need to add ${currentChainParams == null ? void 0 : currentChainParams.chainName} support to ${(_i = (_h = (_g = connectedConnector == null ? void 0 : connectedConnector.paraDetails) == null ? void 0 : _g.name) != null ? _h : connectedConnector == null ? void 0 : connectedConnector.name) != null ? _i : "the wallet"} manually.`
          };
        }
      }
      switch (e.name) {
        case "UserRejectedRequestError": {
          return { error: "Signature request rejected" };
        }
        default: {
          return { error: "An unknown error occurred" };
        }
      }
    }
  });
  const signVerificationMessage = () => __async(this, null, function* () {
    setVerificationStage("verifying");
    const signature = yield signMessage3({ message: verificationMessage.current });
    return signature;
  });
  const switchChain2 = (chainId2) => __async(this, null, function* () {
    var _a, _b, _c;
    let error;
    try {
      yield switchChainAsync({ chainId: chainId2 });
    } catch (e) {
      if (e.details.includes("Missing or invalid.")) {
        const chain = chains.find((c) => c.id === chainId2);
        error = [
          "Network not supported.",
          `You may need to add ${chain == null ? void 0 : chain.name} support to ${(_c = (_b = (_a = connectedConnector == null ? void 0 : connectedConnector.paraDetails) == null ? void 0 : _a.name) != null ? _b : connectedConnector == null ? void 0 : connectedConnector.name) != null ? _c : "the wallet"} manually.`
        ];
      } else {
        switch (e.name) {
          case "UserRejectedRequestError": {
            error = ["Change request rejected"];
            break;
          }
          default: {
            error = ["An unknown error occurred"];
            break;
          }
        }
      }
    }
    return { error };
  });
  const login = (_0) => __async(this, [_0], function* ({ address, withFullParaAuth = false, providerId, provider }) {
    var _a, _b, _c;
    try {
      refetchEnsName();
      refetchEnsAvatar();
      return yield para.loginExternalWallet({
        externalWallet: {
          partnerId: para.partnerId,
          address,
          type: "EVM",
          provider,
          providerId,
          withFullParaAuth,
          ensName,
          ensAvatar,
          isConnectionOnly: connectionOnly,
          withVerification: includeWalletVerification
        },
        uri: window == null ? void 0 : window.location.origin,
        chainId: (_c = (_b = (_a = chains[0]) == null ? void 0 : _a.id) != null ? _b : chainId) == null ? void 0 : _c.toString()
      });
    } catch (e) {
      yield disconnectAsync();
      yield para.logout();
      throw "Error logging you in. Please try again.";
    }
  });
  const switchWallet = (address) => __async(this, null, function* () {
    updateExternalWalletState({ isConnecting: true });
    let error;
    if (!address) {
      yield para.logout();
    } else {
      if (para.isExternalWalletAuth || para.isExternalWalletWithVerification) {
        yield reset();
      } else {
        try {
          const loginInfo = getConnectorInfo(connectedConnector);
          yield login(__spreadValues({
            address
          }, loginInfo));
        } catch (err) {
          error = err;
        }
      }
    }
    onSwitchWallet == null ? void 0 : onSwitchWallet({ address, error });
    updateExternalWalletState({ isConnecting: false });
  });
  const connectBase = (connector) => __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f;
    if (connector.type === "walletConnect" || ((_a = connector.paraDetails) == null ? void 0 : _a.internalId) === "WALLETCONNECT" || ((_b = connector.paraDetails) == null ? void 0 : _b.showQrModal)) {
      yield emitWalletConnectUri(connector, connector.getUri);
    }
    const walletChainId = yield connector.getChainId();
    const data = yield connectAsync({
      // If the wallet is already on a supported chain, use that to avoid a chain switch prompt.
      chainId: (_e = (_c = chains.find(({ id }) => id === walletChainId)) == null ? void 0 : _c.id) != null ? _e : (
        // Fall back to the first chain provided.
        (_d = chains[0]) == null ? void 0 : _d.id
      ),
      connector
    });
    return (_f = data.accounts) == null ? void 0 : _f[0];
  });
  const connect2 = (connector) => __async(this, null, function* () {
    updateExternalWalletState({ isConnecting: true });
    yield disconnectAsync();
    let authState;
    let address;
    let error;
    try {
      address = yield connectBase(connector);
      if (address) {
        try {
          const loginInfo = getConnectorInfo(connector);
          authState = yield login(__spreadValues({
            address
          }, loginInfo));
          verificationMessage.current = authState.signatureVerificationMessage;
        } catch (err) {
          address = void 0;
          error = err;
        }
      }
    } catch (e) {
      switch (e.name) {
        case "UserRejectedRequestError": {
          error = "Connection request rejected";
          break;
        }
        case "ResourceUnavailableRpcError": {
          error = `${connector.name} not detected`;
          break;
        }
        default: {
          console.error("Wagmi connection error:", e.message);
          error = "An unknown error occurred";
          break;
        }
      }
    }
    updateExternalWalletState({ isConnecting: false });
    return { address, authState, error };
  });
  const connectMobile = (connector, isManualWalletConnect) => __async(this, null, function* () {
    const _isMobile = isManualWalletConnect !== void 0 ? isManualWalletConnect : isMobile();
    const _connector = connector.walletConnectModalConnector && _isMobile ? connector.walletConnectModalConnector : connector;
    return yield connect2(_connector);
  });
  const findConnector = (providerId) => {
    var _a;
    const connector = connectorsRef.current.find(
      (w) => {
        var _a2, _b, _c;
        return [(_a2 = w == null ? void 0 : w.paraDetails) == null ? void 0 : _a2.name, (_b = w == null ? void 0 : w.paraDetails) == null ? void 0 : _b.id, (_c = w == null ? void 0 : w.paraDetails) == null ? void 0 : _c.internalId].includes(providerId);
      }
    );
    return connector ? __spreadProps(__spreadValues({}, connector), { getUri: (_a = connector.paraDetails) == null ? void 0 : _a.getUri }) : void 0;
  };
  const requestInfo = (providerId) => __async(this, null, function* () {
    var _a, _b, _c, _d;
    const connector = findConnector(providerId);
    disconnectTypeRef.current = "ACCOUNT_LINKING";
    try {
      let address;
      if (connector.connected && ((_a = connector.accounts) == null ? void 0 : _a[0])) {
        address = connector.accounts[0];
      } else {
        address = yield connectBase(connector);
      }
      const providerId2 = (_c = (_b = wallets.find((w) => {
        var _a2, _b2;
        return (w == null ? void 0 : w.name) === ((_b2 = (_a2 = connector == null ? void 0 : connector.paraDetails) == null ? void 0 : _a2.name) != null ? _b2 : "");
      })) == null ? void 0 : _b.name) != null ? _c : connector == null ? void 0 : connector.name;
      return {
        partnerId: para.partnerId,
        address,
        type: "EVM",
        providerId: providerId2,
        provider: providerId2,
        ensName,
        ensAvatar
      };
    } catch (e) {
      throw new Error((_d = e == null ? void 0 : e.message) != null ? _d : e);
    }
  });
  const disconnectBase = (_0, ..._1) => __async(this, [_0, ..._1], function* (providerId, { disconnectType } = {}) {
    var _a;
    if (!providerId) {
      throw new Error("Provider ID is required to disconnect");
    }
    const connector = findConnector(providerId);
    if (disconnectType) {
      disconnectTypeRef.current = disconnectType;
    }
    try {
      yield connector == null ? void 0 : connector.disconnect();
    } catch (e) {
      throw new Error((_a = e == null ? void 0 : e.message) != null ? _a : e);
    } finally {
      disconnectTypeRef.current = void 0;
    }
  });
  const nonEip6963ConnectorsByRdns = {};
  let walletConnectModalConnector;
  connectors.filter((c) => !isEIP6963Connector(c)).forEach((c) => {
    if (c.paraDetails) {
      nonEip6963ConnectorsByRdns[c.paraDetails.rdns] = c.paraDetails;
      if (c.paraDetails.isWalletConnectModalConnector) {
        walletConnectModalConnector = c;
      }
    }
  });
  const eip6963Names = connectors.filter((c) => isEIP6963Connector(c)).map((c) => c.name);
  const dedupedConnectors = connectors.map((c) => {
    var _a, _b;
    if ((_a = c.paraDetails) == null ? void 0 : _a.isWalletConnectModalConnector) {
      return;
    }
    if (!isEIP6963Connector(c) && eip6963Names.includes(c.name)) {
      return;
    }
    if (isEIP6963Connector(c)) {
      const paraMetadata = nonEip6963ConnectorsByRdns[c.id];
      return __spreadProps(__spreadValues({}, c), { paraDetails: paraMetadata });
    }
    if (((_b = c.paraDetails) == null ? void 0 : _b.internalId) === "WALLETCONNECT" && walletConnectModalConnector) {
      return __spreadProps(__spreadValues({}, c), { walletConnectModalConnector });
    }
    return c;
  }).filter((c) => !!c);
  const wallets = dedupedConnectors.map((c) => {
    var _a, _b, _c, _d, _e;
    if (((_a = c.paraDetails) == null ? void 0 : _a.internalId) === "SAFE" && (typeof window === "undefined" || window.parent === window)) {
      return void 0;
    }
    const connector = __spreadValues(__spreadValues({}, c), c.paraDetails);
    const isInjected = !c.paraDetails && eip6963Names.includes(c.name);
    if (isInjected && connectors.some((c2) => {
      var _a2;
      return ((_a2 = c2.paraDetails) == null ? void 0 : _a2.rdns) === c2.id;
    })) {
      return void 0;
    }
    return __spreadProps(__spreadValues({}, connector), {
      // Using name here since that's the only common id across the networks
      id: connector.name,
      internalId: (_b = connector.internalId) != null ? _b : connector.name,
      isExtension: (_c = connector.isExtension) != null ? _c : isInjected,
      installed: (_d = connector.installed) != null ? _d : isInjected,
      iconUrl: (_e = connector.iconUrl) != null ? _e : connector.icon,
      connect: () => connect2(connector),
      connectMobile: (manual) => connectMobile(connector, manual),
      type: "EVM"
    });
  }).filter(Boolean);
  const getConnectorInfo = (connector) => {
    const paraDetails = connector.paraDetails;
    const withFullParaAuth = walletsWithFullAuth === "ALL" || (walletsWithFullAuth == null ? void 0 : walletsWithFullAuth.includes(paraDetails == null ? void 0 : paraDetails.internalId));
    return {
      type: "EVM",
      providerId: connector.name,
      provider: connector.name,
      withFullParaAuth
    };
  };
  const formattedChains = chains.map((c) => {
    return {
      id: c.id,
      name: c.name
    };
  });
  const username = (0, import_react18.useMemo)(() => ensName != null ? ensName : wagmiAddress, [ensName, wagmiAddress]);
  const farcasterStatus = (0, import_react18.useMemo)(() => {
    var _a;
    const connection = connections.find(
      (c) => {
        var _a2;
        return ((_a2 = c.connector.paraDetails) == null ? void 0 : _a2.internalId) === "FARCASTER";
      }
    );
    if (!connection) {
      return { isPresent: false };
    }
    const address = (_a = connection == null ? void 0 : connection.accounts) == null ? void 0 : _a[0];
    return address ? { isPresent: true, isConnected: true, address } : { isPresent: true, isConnected: false };
  }, [connections]);
  const connectParaEmbedded = (0, import_react18.useCallback)(() => __async(this, null, function* () {
    const paraConnectorInstance = connectors.find((c) => c.id === "para");
    if (!paraConnectorInstance) {
      return { error: "No para connector instance" };
    }
    try {
      const result = yield connectAsync({ connector: paraConnectorInstance });
      return { result };
    } catch (err) {
      const error = err instanceof Error ? err.message : "Unknown error";
      return { error };
    }
  }), [connectors]);
  (0, import_react18.useEffect)(() => {
    connectionsRef.current = connections;
  }, [connections]);
  (0, import_react18.useEffect)(() => {
    connectorsRef.current = connectors;
  }, [connectors]);
  return (0, import_jsx_runtime.jsx)(
    EvmExternalWalletContext.Provider,
    {
      value: __spreadValues({
        wallets,
        chains: formattedChains,
        chainId,
        username,
        avatar: ensAvatar,
        disconnect: disconnectAsync,
        disconnectStatus,
        switchChain: switchChain2,
        connectParaEmbedded,
        signMessage: signMessage3,
        signVerificationMessage,
        getWalletBalance,
        requestInfo,
        disconnectBase,
        farcasterStatus,
        verificationStage
      }, externalHooks),
      children
    }
  );
}

// node_modules/.pnpm/@getpara+evm-wallet-connectors@2.0.0-alpha.73_dee874a719f81742dd3bac03b82e1f4a/node_modules/@getpara/evm-wallet-connectors/dist/providers/ParaEvmContext.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react19 = __toESM(require_react(), 1);
var createDefaultTransports = (chains) => {
  const transportsObject = chains.reduce((acc, chain) => {
    const key = chain.id;
    acc[key] = http();
    return acc;
  }, {});
  return transportsObject;
};
function ParaEvmProvider({
  children,
  internalConfig,
  config: _config,
  wagmiProviderProps
}) {
  const para = internalConfig.para;
  const _a = _config, {
    projectId,
    appName,
    appDescription,
    appIcon,
    appUrl,
    wallets: propsWallets,
    chains,
    transports,
    paraConnectorOptions
  } = _a, wagmiConfigParams = __objRest(_a, [
    "projectId",
    "appName",
    "appDescription",
    "appIcon",
    "appUrl",
    "wallets",
    "chains",
    "transports",
    "paraConnectorOptions"
  ]);
  const propsWalletList = (0, import_react19.useMemo)(() => {
    return resolveWalletList(propsWallets != null ? propsWallets : []);
  }, [propsWallets]);
  const prevWallets = (0, import_react19.useRef)(propsWalletList);
  const paraConnectorInstance = (0, import_react19.useMemo)(() => {
    return paraConnector({
      para,
      chains: [...chains],
      disableModal: true,
      appName,
      options: paraConnectorOptions != null ? paraConnectorOptions : {}
    });
  }, [para]);
  const createConfig2 = (walletList, createFarcasterConnector) => {
    const existing = getWagmiConfig();
    if (existing && prevWallets.current === walletList) {
      return existing;
    }
    prevWallets.current = walletList;
    const wcMetadata = computeWalletConnectMetaData({ appName, appDescription, appUrl, appIcon });
    const baseConnectors = connectorsForWallets(walletList, {
      para,
      createFarcasterConnector,
      projectId,
      appName,
      appDescription,
      appUrl,
      appIcon,
      walletConnectParameters: { metadata: wcMetadata }
    });
    const allConnectors = [...baseConnectors, paraConnectorInstance];
    const createdConfig = createConfig(__spreadProps(__spreadValues({
      ssr: true
    }, wagmiConfigParams), {
      chains,
      transports: transports || createDefaultTransports(chains),
      connectors: allConnectors
    }));
    setWagmiConfig(createdConfig);
    return createdConfig;
  };
  const [config, setConfig] = (0, import_react19.useState)(null);
  (0, import_react19.useEffect)(() => {
    if (!para.isReady) {
      return;
    }
    const initializeConfig = () => __async(this, null, function* () {
      var _a2;
      if (para.isFarcasterMiniApp) {
        let createFarcasterConnector = null;
        try {
          createFarcasterConnector = (_a2 = (yield import("./evm-wallet-connectors_false-UQDXIVTY.js")).farcasterMiniApp) != null ? _a2 : void 0;
        } catch (e) {
        }
        setConfig(createConfig2([...propsWalletList, farcasterWallet], createFarcasterConnector));
      } else {
        setConfig(createConfig2([...propsWalletList]));
      }
    });
    initializeConfig();
  }, [para.isFarcasterMiniApp, para.isReady, propsWalletList]);
  if (!config) {
    return null;
  }
  return (0, import_jsx_runtime2.jsx)(WagmiProvider, __spreadProps(__spreadValues({ config }, wagmiProviderProps), { children: (0, import_jsx_runtime2.jsx)(EvmExternalWalletProvider, __spreadProps(__spreadValues({}, internalConfig), { children })) }));
}
export {
  EvmExternalWalletContext,
  ParaEvmProvider,
  allWallets,
  backpackWallet,
  coinbaseWallet2 as coinbaseWallet,
  createParaWagmiConfig,
  farcasterWallet,
  getWagmiConfig,
  hahaWallet,
  metaMaskWallet,
  okxWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  valoraWallet,
  walletConnectWallet,
  zerionWallet
};
//# sourceMappingURL=dist-766XTUU2.js.map
