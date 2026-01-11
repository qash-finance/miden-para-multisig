import {
  __commonJS
} from "./chunk-QEK2ZTOW.js";

// node_modules/.pnpm/zustand-sync-tabs@0.2.3_zustand@4.5.7_@types+react@19.2.7_react@19.2.1_/node_modules/zustand-sync-tabs/index.js
var require_zustand_sync_tabs = __commonJS({
  "node_modules/.pnpm/zustand-sync-tabs@0.2.3_zustand@4.5.7_@types+react@19.2.7_react@19.2.1_/node_modules/zustand-sync-tabs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.syncTabs = void 0;
    var LOAD = "__load__";
    var syncTabs = function(f, options) {
      return function(set, get, store) {
        if (!globalThis.BroadcastChannel) {
          console.log("BroadcastChannel is not supported in this context!");
          return f(set, get, store);
        }
        if (!options.exclude)
          options.exclude = [];
        if (options.regExpToIgnore)
          options.exclude.push(options.regExpToIgnore);
        var channel = new BroadcastChannel(options.name);
        if (channel)
          channel.postMessage(LOAD);
        var set_ = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var prevState = get();
          set.apply(void 0, args);
          var currentState = get();
          var stateUpdates = {};
          var keysToSync = getKeysToSyncMemoised(Object.keys(currentState), options);
          if (keysToSync.length === 0)
            return;
          keysToSync.forEach(function(k) {
            if (currentState[k] !== prevState[k])
              stateUpdates[k] = currentState[k];
          });
          if (Object.keys(stateUpdates).length) {
            channel === null || channel === void 0 ? void 0 : channel.postMessage(stateUpdates);
          }
        };
        if (channel)
          channel.onmessage = function(e) {
            if (e.data === LOAD) {
              var currentState_1 = get();
              var stateUpdates_1 = {};
              var keysToSync = getKeysToSyncMemoised(Object.keys(currentState_1), options);
              if (keysToSync.length === 0)
                return;
              keysToSync.forEach(function(k) {
                if (typeof currentState_1[k] !== "function") {
                  stateUpdates_1[k] = currentState_1[k];
                }
              });
              if (Object.keys(stateUpdates_1).length) {
                channel === null || channel === void 0 ? void 0 : channel.postMessage(stateUpdates_1);
              }
            } else
              set(e.data);
          };
        return f(set_, get, store);
      };
    };
    exports.syncTabs = syncTabs;
    function matchPatternOrKey(key, patterns) {
      for (var _i = 0, patterns_1 = patterns; _i < patterns_1.length; _i++) {
        var patternOrKey = patterns_1[_i];
        if (typeof patternOrKey === "string" && key === patternOrKey)
          return true;
        else if (patternOrKey instanceof RegExp && patternOrKey.test(key))
          return true;
      }
      return false;
    }
    var getKeysToSyncMemoised = /* @__PURE__ */ (function() {
      var persistAndSyncKeysCache = {};
      var getKeysSync = function(keys, options) {
        var exclude = options.exclude, include = options.include;
        var keysToInlcude = (include === null || include === void 0 ? void 0 : include.length) ? keys.filter(function(key) {
          return matchPatternOrKey(key, include);
        }) : keys;
        var keysToPersistAndSync = keysToInlcude.filter(function(key) {
          return !matchPatternOrKey(key, exclude || []);
        });
        return keysToPersistAndSync;
      };
      return function(keys, options) {
        var cacheKey = JSON.stringify({ options, keys });
        if (!persistAndSyncKeysCache[cacheKey])
          persistAndSyncKeysCache[cacheKey] = getKeysSync(keys, options);
        return persistAndSyncKeysCache[cacheKey];
      };
    })();
  }
});

export {
  require_zustand_sync_tabs
};
//# sourceMappingURL=chunk-RSKXLY4J.js.map
