var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b)
        for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g)
        c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in g = a.defaultProps, g)
          void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k)
        a = null;
      var h = false;
      if (null === a)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
      if (h)
        return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (f = A(a), "function" === typeof f)
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k)
        throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a)
        return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status)
        return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f)
        d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.2.0";
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self2 = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self2 = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self2 = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self2, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module2 && module2[requireString];
              enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = require_react_development();
    }
  }
});

// node_modules/anud12.github.io_ui_base/lib/index.js
var require_lib = __commonJS({
  "node_modules/anud12.github.io_ui_base/lib/index.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Button: () => Button,
      Form: () => Form2,
      Input: () => Input2,
      Link: () => Link2,
      Page: () => Page3,
      Table: () => Table2
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_react7 = __toESM2(require_react());
    var import_react3 = __toESM2(require_react());
    var Comment = ({ children }) => {
      return /* @__PURE__ */ import_react3.default.createElement("div", { dangerouslySetInnerHTML: { __html: `<!-- ${children} -->` } });
    };
    var import_react6 = __toESM2(require_react());
    var import_react22 = __toESM2(require_react());
    var CardContainer = (props) => {
      return /* @__PURE__ */ import_react22.default.createElement("div", { className: "container-container" }, /* @__PURE__ */ import_react22.default.createElement("div", { className: `container card-container ${props.className ?? ""}`.trim() }, props.children));
    };
    var import_react32 = __toESM2(require_react());
    var config = {
      apiKey: "AIzaSyBtQ2WOyIUnaSWAhl3s5PA_LZkWtpWz5iA",
      clientId: "985280907031-ffvfnc8pi0ane99lso9dbl1m2l5oc9nn.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/userinfo.profile ",
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]
    };
    var loadScript = (src) => new Promise((resolve, reject) => {
      if (!globalThis.document) {
        return;
      }
      resolve();
    });
    var loadGoogleDependencies = Promise.all([
      loadScript("https://apis.google.com/js/api.js"),
      loadScript("https://accounts.google.com/gsi/client")
    ]);
    var gapiClientPromise = new Promise(async (resolve) => {
      await loadGoogleDependencies;
      gapi.load("client", async () => {
        const client = await gapi.client.init({
          apiKey: config.apiKey,
          discoveryDocs: config.discoveryDocs
        });
        await new Promise((resolve2) => gapi.client.load("sheets", "v4", function() {
          resolve2();
        }));
        resolve(gapi);
      });
    });
    var getExpirationDate = async () => {
      const gapi2 = await gapiClientPromise;
      const token = gapi2?.auth?.getToken();
      if (!token) {
        return new Promise((res) => res(void 0));
      }
      return fetch(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token.access_token}`).then(async (res) => {
        if (res.status !== 200) {
          throw Error(`getExpirationDate status ${res.status}`);
        }
        return (await res.json())?.expires_in;
      });
    };
    var tokenClientPromise = new Promise(async (res) => {
      await loadGoogleDependencies;
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: config.clientId,
        scope: config.scope,
        redirect_uri: "http://localhost:8080",
        callback: () => {
        }
      });
      res(tokenClient);
    });
    function addQueryParam(value) {
      const newUrl = new URL(window.location.href);
      newUrl.hash = JSON.stringify(value);
      window.history.replaceState(null, "", newUrl.href);
    }
    var newApi = {
      sessionName: () => new Promise(async (resolve) => {
        const gapi2 = await gapiClientPromise;
        gapi2.client.request({
          "path": "https://people.googleapis.com/v1/people/me?personFields=names",
          "method": "GET",
          "callback": function(response) {
            resolve(response?.names?.[0]?.displayName);
          }
        });
      }),
      loadFromUrl: async () => {
        const gapi2 = await gapiClientPromise;
        const credentialsFromUrl = decodeURI(window.location.hash.replace("#", ""));
        if (credentialsFromUrl) {
          const credentials = JSON.parse(credentialsFromUrl);
          await gapi2.client.init({});
          gapi2.client.setToken(credentials);
          document.dispatchEvent(new CustomEvent("newApi-onChange"));
        }
        return false;
      },
      onChange: (callback) => {
        const fn = (event) => {
          callback(event);
        };
        globalThis?.document?.addEventListener("newApi-onChange", fn);
        return () => globalThis?.document?.removeEventListener("newApi-onChange", fn);
      },
      logout: async () => {
        const gapi2 = await gapiClientPromise;
        gapi2.client.setToken(null);
        window.location.hash = "";
        document.dispatchEvent(new CustomEvent("newApi-onChange"));
      },
      login: async () => new Promise(async (resolve) => {
        const tokenClient = await tokenClientPromise;
        try {
          if (await newApi.loadFromUrl()) {
            await getExpirationDate();
            return;
          }
        } catch {
        }
        tokenClient.callback = (credentialsResponse) => {
          addQueryParam(credentialsResponse);
          document.dispatchEvent(new CustomEvent("newApi-onChange"));
          resolve();
        };
        tokenClient.requestAccessToken({ prompt: "consent" });
      })
    };
    var Link2 = (props) => {
      const [searchParams, setSearchParams] = (0, import_react32.useState)("");
      (0, import_react32.useEffect)(() => {
        setSearchParams(window.location.hash);
        const fn = () => {
          setSearchParams(window.location.hash);
        };
        const subscription = newApi.onChange(() => {
          fn();
        });
        window.addEventListener("hashchange", fn);
        return () => {
          window.removeEventListener("hashchange", fn);
          subscription();
        };
      }, []);
      return /* @__PURE__ */ import_react32.default.createElement("a", { className: "link", href: props.href + searchParams }, props.children);
    };
    var import_react5 = __toESM2(require_react());
    var import_react4 = __toESM2(require_react());
    var Button = (props) => {
      return /* @__PURE__ */ import_react4.default.createElement("button", { ...props, className: "button" }, props.children);
    };
    var SignIn = () => {
      const [state, setState] = (0, import_react5.useState)(void 0);
      const callback = (0, import_react5.useCallback)(() => {
        if (state) {
          newApi.logout();
          return;
        }
        newApi.login();
      }, [state]);
      (0, import_react5.useEffect)(() => {
        newApi.sessionName().then(setState);
        const unsubscribe = newApi.onChange(async (e) => {
          setState(await newApi.sessionName());
        });
        newApi.loadFromUrl();
        return unsubscribe;
      }, []);
      return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Button, { onClick: callback }, state ? `Logout of ${state}` : "Login"));
    };
    var buildBack = (index) => new Array(index + 1).fill("..").join("/");
    var buildPath = () => {
      const href = globalThis?.window?.location.href;
      const url = href ? new URL(href) : void 0;
      const path = url?.pathname?.split("/").filter((e) => e) ?? [];
      path.reverse();
      path.splice(0, 1);
      path.reverse();
      return path;
    };
    var Header = (props) => {
      const path = buildPath();
      return /* @__PURE__ */ import_react6.default.createElement(import_react6.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(CardContainer, null, /* @__PURE__ */ import_react6.default.createElement("div", { className: "header-content" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "header-title" }, props.children), /* @__PURE__ */ import_react6.default.createElement("div", { className: "header-login" }, /* @__PURE__ */ import_react6.default.createElement(SignIn, null))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "border-top header-url-chips" }, /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement(Link2, { href: "/" }, "Home")), path.reverse().map(
        (e, index) => /* @__PURE__ */ import_react6.default.createElement("div", { key: e }, /* @__PURE__ */ import_react6.default.createElement(Link2, { href: buildBack(index) }, e))
      ).reverse())));
    };
    var time = (/* @__PURE__ */ new Date()).toISOString();
    var Page3 = (props) => {
      const theme = props.theme ?? {};
      return /* @__PURE__ */ import_react7.default.createElement("html", null, /* @__PURE__ */ import_react7.default.createElement("head", null, /* @__PURE__ */ import_react7.default.createElement("link", { href: "https://anud.ro/ui_base/src/main.css", type: "text/css", rel: "stylesheet" }), /* @__PURE__ */ import_react7.default.createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,-25" }), /* @__PURE__ */ import_react7.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), /* @__PURE__ */ import_react7.default.createElement("script", { src: "https://apis.google.com/js/api.js" }), /* @__PURE__ */ import_react7.default.createElement("script", { src: "https://accounts.google.com/gsi/client" }), /* @__PURE__ */ import_react7.default.createElement("script", { src: "https://izitoast.marcelodolza.com/js/iziToast.min.js?v=140b" }), /* @__PURE__ */ import_react7.default.createElement("link", { href: "https://izitoast.marcelodolza.com/css/iziToast.min.css?v=140a", rel: "stylesheet" }), /* @__PURE__ */ import_react7.default.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Rajdhani&display=swap", rel: "stylesheet" }), /* @__PURE__ */ import_react7.default.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap", rel: "stylesheet" })), /* @__PURE__ */ import_react7.default.createElement("body", null, /* @__PURE__ */ import_react7.default.createElement(Comment, null, time), /* @__PURE__ */ import_react7.default.createElement("div", { className: "page", style: {
        "--primary": theme["--primary"] ?? "#0074cc",
        "--background-color": theme["--background-color"] ?? "white",
        "--border-color": theme["--border-color"] ?? "#c4c4c4"
      } }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "page-content" }, /* @__PURE__ */ import_react7.default.createElement(Header, null, props.title), props.children))));
    };
    var import_react8 = __toESM2(require_react());
    function arrayToObject(arr) {
      var keys = arr[0];
      return arr.slice(1).map(function(row) {
        return keys.reduce(function(obj, key, i) {
          obj[key] = row[i];
          return obj;
        }, {});
      });
    }
    var loadFromSheet = (source) => new Promise(async (resolve, reject) => {
      var url = `https://sheets.googleapis.com/v4/spreadsheets/${source}/values/Sheet1`;
      const gapi2 = await gapiClientPromise;
      var accessToken = gapi2.auth.getToken().access_token;
      var headers = new Headers();
      headers.append("Authorization", "Bearer " + accessToken);
      var options = {
        method: "GET",
        headers
      };
      fetch(url, options).then(function(response) {
        if (!response.ok) {
          throw new Error("Failed to fetch spreadsheet data");
        }
        return response.json();
      }).then(function(data) {
        var range = data.values;
        resolve(arrayToObject(range));
      });
    }).catch((e) => {
      throw e.result.error;
    });
    var Table2 = (props) => {
      const [data, setData] = (0, import_react8.useState)([]);
      const loadData = async () => {
        const data2 = await loadFromSheet(props.source);
        const changedData = data2.map((e) => {
          Object.entries(props.cellValues ?? {}).map(([key, value]) => {
            const func = value;
            e[key] = func(e);
          });
          return e;
        });
        setData(changedData);
      };
      (0, import_react8.useEffect)(() => {
        const unsubscribe = newApi.onChange(loadData);
        return () => unsubscribe();
      }, [props.source]);
      const columns = (0, import_react8.useMemo)(() => {
        const columnSet = /* @__PURE__ */ new Set();
        props.columnOrder?.map((e) => columnSet.add(e));
        Object.keys(data?.[0] ?? {}).map((e) => columnSet.add(e));
        return [...columnSet];
      }, [data, JSON.stringify(props.columnOrder)]);
      return /* @__PURE__ */ import_react8.default.createElement(import_react8.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(CardContainer, null, /* @__PURE__ */ import_react8.default.createElement("div", { className: "table-container" }, data instanceof Array && data.length > 0 && /* @__PURE__ */ import_react8.default.createElement("div", { className: "table", style: {
        "--number-of-columns": columns.length,
        "--number-of-rows": "20"
      } }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "row" }, columns.map(
        (header, jndex) => /* @__PURE__ */ import_react8.default.createElement("div", { key: jndex }, header)
      )), data.map(
        (e, index) => /* @__PURE__ */ import_react8.default.createElement("div", { key: index, className: "row" }, columns.map(
          (column) => /* @__PURE__ */ import_react8.default.createElement("div", { key: column }, e[column])
        ))
      )), !(data instanceof Array) && /* @__PURE__ */ import_react8.default.createElement("pre", { style: { whiteSpace: "break-spaces" } }, "Failed to load table ", props.source, " Reason:", /* @__PURE__ */ import_react8.default.createElement("br", null), JSON.stringify(data, null, 2)))));
    };
    var import_react10 = __toESM2(require_react());
    var uploadFormDataToFolder = (parentId, data) => async (event) => {
      event.preventDefault();
      const gapi2 = await gapiClientPromise;
      const idToken = gapi2.client.getToken().access_token;
      return fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable", {
        method: "POST",
        headers: new Headers({
          "Authorization": `Bearer ${idToken}`,
          "Content-Type": "application/json; charset=UTF-8"
        }),
        body: JSON.stringify({
          name: "form-data.json",
          parents: [parentId]
        })
      }).then(async (apiResponse) => {
        return fetch(await apiResponse.headers.get("Location") ?? "", {
          method: "PUT",
          headers: new Headers({
            "Authorization": `Bearer ${idToken}`,
            "Content-Type": "application/json"
          }),
          body: JSON.stringify(data)
        });
      });
    };
    var import_react9 = __toESM2(require_react());
    var Title = (props) => /* @__PURE__ */ import_react9.default.createElement("div", { className: "title" }, props.children);
    var FormContext = (0, import_react10.createContext)({
      state: {},
      setState: (...args) => {
      }
    });
    var Form2 = (props) => {
      const [state, setState] = (0, import_react10.useState)({});
      const onSubmit = (0, import_react10.useCallback)((event) => {
        uploadFormDataToFolder(props.folderId, state)(event).then(() => {
          if (!globalThis.document) {
            return;
          }
          iziToast.success({
            icon: "icon-person",
            title: "Upload succesfull",
            position: "bottomRight"
          });
        }).catch((e) => {
          if (!globalThis.document) {
            return;
          }
          iziToast.error({
            timeout: 2e4,
            title: `${e.name}:${e.message}`,
            position: "bottomRight"
          });
        });
      }, [state]);
      return /* @__PURE__ */ import_react10.default.createElement(import_react10.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(CardContainer, null, props.title && /* @__PURE__ */ import_react10.default.createElement(Title, null, props.title), /* @__PURE__ */ import_react10.default.createElement("form", { className: "form", onSubmit: (e) => onSubmit(e) }, /* @__PURE__ */ import_react10.default.createElement(FormContext.Provider, { value: { state, setState } }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "form-content" }, props.children)), /* @__PURE__ */ import_react10.default.createElement("div", { className: "submit-container" }, /* @__PURE__ */ import_react10.default.createElement(Button, null, "Submit")))));
    };
    var import_react11 = __toESM2(require_react());
    var kebabToSentence = (str) => str.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    var camelToSentence = (str) => str.replace(/([A-Z])/g, " $1").replace(/^./, (str2) => str2.toUpperCase());
    var snakeToSentence = (str) => str.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    var lowercaseIgnoringGroups = (str) => str.replaceAll(/([a-z]|\s)([A-Z])([a-z]|\s)/g, (match, p1, p2, p3) => p1 + p2.toLowerCase() + p3);
    var stringToSentence = (str) => {
      if (str.includes("-")) {
        return kebabToSentence(str);
      } else if (str.includes("_")) {
        return snakeToSentence(str);
      } else {
        return camelToSentence(str);
      }
    };
    var fileToBase64 = (file) => {
      return new Promise((resolve) => {
        if (!file) {
          resolve(void 0);
          return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve(reader?.result?.split?.(",")[1]);
        };
      });
    };
    var Input2 = (props) => {
      const { state, setState } = (0, import_react11.useContext)(FormContext);
      (0, import_react11.useEffect)(() => {
        props.value ?? setState(props.value);
      }, [props.value]);
      const ref = (0, import_react11.useRef)(null);
      (0, import_react11.useEffect)(() => {
        if (props.type !== "file") {
          return;
        }
        if (ref.current) {
          ref.current.value = null;
        }
      }, [props.type, ref]);
      const onChange = (0, import_react11.useCallback)((e) => {
        const file = e?.target?.files?.[0];
        if (props.type === "file") {
          fileToBase64(file).then((fileData) => {
            setState({ ...state, [props.name]: { data: fileData, mimeType: file.type } });
          });
          return;
        }
        setState({ ...state, [props.name]: e.target.value });
      }, [props.type, setState, state]);
      const value = (0, import_react11.useMemo)(() => {
        if (props.type === "file") {
          return void 0;
        }
        return state[String(props.name)];
      }, [state]);
      (0, import_react11.useEffect)(() => {
        ref.current && setState({ ...state, [props.name]: ref.current.value });
      }, [ref.current]);
      return /* @__PURE__ */ import_react11.default.createElement("label", { className: "input" }, /* @__PURE__ */ import_react11.default.createElement("span", { className: "input-name" }, lowercaseIgnoringGroups(stringToSentence(props.name))), /* @__PURE__ */ import_react11.default.createElement(
        "input",
        {
          ref,
          type: props.type ?? "text",
          value,
          required: props.isOptional && false || true,
          capture: props.capture,
          accept: props.accept,
          onChange
        }
      ));
    };
  }
});

// node_modules/anud12.github.io_job_base/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/anud12.github.io_job_base/lib/index.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __commonJS2 = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var require_delayed_stream = __commonJS2({
      "node_modules/delayed-stream/lib/delayed_stream.js"(exports2, module22) {
        var Stream = require("stream").Stream;
        var util = require("util");
        module22.exports = DelayedStream;
        function DelayedStream() {
          this.source = null;
          this.dataSize = 0;
          this.maxDataSize = 1024 * 1024;
          this.pauseStream = true;
          this._maxDataSizeExceeded = false;
          this._released = false;
          this._bufferedEvents = [];
        }
        util.inherits(DelayedStream, Stream);
        DelayedStream.create = function(source, options) {
          var delayedStream = new this();
          options = options || {};
          for (var option in options) {
            delayedStream[option] = options[option];
          }
          delayedStream.source = source;
          var realEmit = source.emit;
          source.emit = function() {
            delayedStream._handleEmit(arguments);
            return realEmit.apply(source, arguments);
          };
          source.on("error", function() {
          });
          if (delayedStream.pauseStream) {
            source.pause();
          }
          return delayedStream;
        };
        Object.defineProperty(DelayedStream.prototype, "readable", {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.source.readable;
          }
        });
        DelayedStream.prototype.setEncoding = function() {
          return this.source.setEncoding.apply(this.source, arguments);
        };
        DelayedStream.prototype.resume = function() {
          if (!this._released) {
            this.release();
          }
          this.source.resume();
        };
        DelayedStream.prototype.pause = function() {
          this.source.pause();
        };
        DelayedStream.prototype.release = function() {
          this._released = true;
          this._bufferedEvents.forEach(function(args) {
            this.emit.apply(this, args);
          }.bind(this));
          this._bufferedEvents = [];
        };
        DelayedStream.prototype.pipe = function() {
          var r = Stream.prototype.pipe.apply(this, arguments);
          this.resume();
          return r;
        };
        DelayedStream.prototype._handleEmit = function(args) {
          if (this._released) {
            this.emit.apply(this, args);
            return;
          }
          if (args[0] === "data") {
            this.dataSize += args[1].length;
            this._checkIfMaxDataSizeExceeded();
          }
          this._bufferedEvents.push(args);
        };
        DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
          if (this._maxDataSizeExceeded) {
            return;
          }
          if (this.dataSize <= this.maxDataSize) {
            return;
          }
          this._maxDataSizeExceeded = true;
          var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
          this.emit("error", new Error(message));
        };
      }
    });
    var require_combined_stream = __commonJS2({
      "node_modules/combined-stream/lib/combined_stream.js"(exports2, module22) {
        var util = require("util");
        var Stream = require("stream").Stream;
        var DelayedStream = require_delayed_stream();
        module22.exports = CombinedStream;
        function CombinedStream() {
          this.writable = false;
          this.readable = true;
          this.dataSize = 0;
          this.maxDataSize = 2 * 1024 * 1024;
          this.pauseStreams = true;
          this._released = false;
          this._streams = [];
          this._currentStream = null;
          this._insideLoop = false;
          this._pendingNext = false;
        }
        util.inherits(CombinedStream, Stream);
        CombinedStream.create = function(options) {
          var combinedStream = new this();
          options = options || {};
          for (var option in options) {
            combinedStream[option] = options[option];
          }
          return combinedStream;
        };
        CombinedStream.isStreamLike = function(stream) {
          return typeof stream !== "function" && typeof stream !== "string" && typeof stream !== "boolean" && typeof stream !== "number" && !Buffer.isBuffer(stream);
        };
        CombinedStream.prototype.append = function(stream) {
          var isStreamLike = CombinedStream.isStreamLike(stream);
          if (isStreamLike) {
            if (!(stream instanceof DelayedStream)) {
              var newStream = DelayedStream.create(stream, {
                maxDataSize: Infinity,
                pauseStream: this.pauseStreams
              });
              stream.on("data", this._checkDataSize.bind(this));
              stream = newStream;
            }
            this._handleErrors(stream);
            if (this.pauseStreams) {
              stream.pause();
            }
          }
          this._streams.push(stream);
          return this;
        };
        CombinedStream.prototype.pipe = function(dest, options) {
          Stream.prototype.pipe.call(this, dest, options);
          this.resume();
          return dest;
        };
        CombinedStream.prototype._getNext = function() {
          this._currentStream = null;
          if (this._insideLoop) {
            this._pendingNext = true;
            return;
          }
          this._insideLoop = true;
          try {
            do {
              this._pendingNext = false;
              this._realGetNext();
            } while (this._pendingNext);
          } finally {
            this._insideLoop = false;
          }
        };
        CombinedStream.prototype._realGetNext = function() {
          var stream = this._streams.shift();
          if (typeof stream == "undefined") {
            this.end();
            return;
          }
          if (typeof stream !== "function") {
            this._pipeNext(stream);
            return;
          }
          var getStream = stream;
          getStream(function(stream2) {
            var isStreamLike = CombinedStream.isStreamLike(stream2);
            if (isStreamLike) {
              stream2.on("data", this._checkDataSize.bind(this));
              this._handleErrors(stream2);
            }
            this._pipeNext(stream2);
          }.bind(this));
        };
        CombinedStream.prototype._pipeNext = function(stream) {
          this._currentStream = stream;
          var isStreamLike = CombinedStream.isStreamLike(stream);
          if (isStreamLike) {
            stream.on("end", this._getNext.bind(this));
            stream.pipe(this, { end: false });
            return;
          }
          var value = stream;
          this.write(value);
          this._getNext();
        };
        CombinedStream.prototype._handleErrors = function(stream) {
          var self2 = this;
          stream.on("error", function(err) {
            self2._emitError(err);
          });
        };
        CombinedStream.prototype.write = function(data) {
          this.emit("data", data);
        };
        CombinedStream.prototype.pause = function() {
          if (!this.pauseStreams) {
            return;
          }
          if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function")
            this._currentStream.pause();
          this.emit("pause");
        };
        CombinedStream.prototype.resume = function() {
          if (!this._released) {
            this._released = true;
            this.writable = true;
            this._getNext();
          }
          if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function")
            this._currentStream.resume();
          this.emit("resume");
        };
        CombinedStream.prototype.end = function() {
          this._reset();
          this.emit("end");
        };
        CombinedStream.prototype.destroy = function() {
          this._reset();
          this.emit("close");
        };
        CombinedStream.prototype._reset = function() {
          this.writable = false;
          this._streams = [];
          this._currentStream = null;
        };
        CombinedStream.prototype._checkDataSize = function() {
          this._updateDataSize();
          if (this.dataSize <= this.maxDataSize) {
            return;
          }
          var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
          this._emitError(new Error(message));
        };
        CombinedStream.prototype._updateDataSize = function() {
          this.dataSize = 0;
          var self2 = this;
          this._streams.forEach(function(stream) {
            if (!stream.dataSize) {
              return;
            }
            self2.dataSize += stream.dataSize;
          });
          if (this._currentStream && this._currentStream.dataSize) {
            this.dataSize += this._currentStream.dataSize;
          }
        };
        CombinedStream.prototype._emitError = function(err) {
          this._reset();
          this.emit("error", err);
        };
      }
    });
    var require_db = __commonJS2({
      "node_modules/mime-db/db.json"(exports2, module22) {
        module22.exports = {
          "application/1d-interleaved-parityfec": {
            source: "iana"
          },
          "application/3gpdash-qoe-report+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/3gpp-ims+xml": {
            source: "iana",
            compressible: true
          },
          "application/3gpphal+json": {
            source: "iana",
            compressible: true
          },
          "application/3gpphalforms+json": {
            source: "iana",
            compressible: true
          },
          "application/a2l": {
            source: "iana"
          },
          "application/ace+cbor": {
            source: "iana"
          },
          "application/activemessage": {
            source: "iana"
          },
          "application/activity+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-costmap+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-costmapfilter+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-directory+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-endpointcost+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-endpointcostparams+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-endpointprop+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-endpointpropparams+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-error+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-networkmap+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-networkmapfilter+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-updatestreamcontrol+json": {
            source: "iana",
            compressible: true
          },
          "application/alto-updatestreamparams+json": {
            source: "iana",
            compressible: true
          },
          "application/aml": {
            source: "iana"
          },
          "application/andrew-inset": {
            source: "iana",
            extensions: ["ez"]
          },
          "application/applefile": {
            source: "iana"
          },
          "application/applixware": {
            source: "apache",
            extensions: ["aw"]
          },
          "application/at+jwt": {
            source: "iana"
          },
          "application/atf": {
            source: "iana"
          },
          "application/atfx": {
            source: "iana"
          },
          "application/atom+xml": {
            source: "iana",
            compressible: true,
            extensions: ["atom"]
          },
          "application/atomcat+xml": {
            source: "iana",
            compressible: true,
            extensions: ["atomcat"]
          },
          "application/atomdeleted+xml": {
            source: "iana",
            compressible: true,
            extensions: ["atomdeleted"]
          },
          "application/atomicmail": {
            source: "iana"
          },
          "application/atomsvc+xml": {
            source: "iana",
            compressible: true,
            extensions: ["atomsvc"]
          },
          "application/atsc-dwd+xml": {
            source: "iana",
            compressible: true,
            extensions: ["dwd"]
          },
          "application/atsc-dynamic-event-message": {
            source: "iana"
          },
          "application/atsc-held+xml": {
            source: "iana",
            compressible: true,
            extensions: ["held"]
          },
          "application/atsc-rdt+json": {
            source: "iana",
            compressible: true
          },
          "application/atsc-rsat+xml": {
            source: "iana",
            compressible: true,
            extensions: ["rsat"]
          },
          "application/atxml": {
            source: "iana"
          },
          "application/auth-policy+xml": {
            source: "iana",
            compressible: true
          },
          "application/bacnet-xdd+zip": {
            source: "iana",
            compressible: false
          },
          "application/batch-smtp": {
            source: "iana"
          },
          "application/bdoc": {
            compressible: false,
            extensions: ["bdoc"]
          },
          "application/beep+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/calendar+json": {
            source: "iana",
            compressible: true
          },
          "application/calendar+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xcs"]
          },
          "application/call-completion": {
            source: "iana"
          },
          "application/cals-1840": {
            source: "iana"
          },
          "application/captive+json": {
            source: "iana",
            compressible: true
          },
          "application/cbor": {
            source: "iana"
          },
          "application/cbor-seq": {
            source: "iana"
          },
          "application/cccex": {
            source: "iana"
          },
          "application/ccmp+xml": {
            source: "iana",
            compressible: true
          },
          "application/ccxml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["ccxml"]
          },
          "application/cdfx+xml": {
            source: "iana",
            compressible: true,
            extensions: ["cdfx"]
          },
          "application/cdmi-capability": {
            source: "iana",
            extensions: ["cdmia"]
          },
          "application/cdmi-container": {
            source: "iana",
            extensions: ["cdmic"]
          },
          "application/cdmi-domain": {
            source: "iana",
            extensions: ["cdmid"]
          },
          "application/cdmi-object": {
            source: "iana",
            extensions: ["cdmio"]
          },
          "application/cdmi-queue": {
            source: "iana",
            extensions: ["cdmiq"]
          },
          "application/cdni": {
            source: "iana"
          },
          "application/cea": {
            source: "iana"
          },
          "application/cea-2018+xml": {
            source: "iana",
            compressible: true
          },
          "application/cellml+xml": {
            source: "iana",
            compressible: true
          },
          "application/cfw": {
            source: "iana"
          },
          "application/city+json": {
            source: "iana",
            compressible: true
          },
          "application/clr": {
            source: "iana"
          },
          "application/clue+xml": {
            source: "iana",
            compressible: true
          },
          "application/clue_info+xml": {
            source: "iana",
            compressible: true
          },
          "application/cms": {
            source: "iana"
          },
          "application/cnrp+xml": {
            source: "iana",
            compressible: true
          },
          "application/coap-group+json": {
            source: "iana",
            compressible: true
          },
          "application/coap-payload": {
            source: "iana"
          },
          "application/commonground": {
            source: "iana"
          },
          "application/conference-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/cose": {
            source: "iana"
          },
          "application/cose-key": {
            source: "iana"
          },
          "application/cose-key-set": {
            source: "iana"
          },
          "application/cpl+xml": {
            source: "iana",
            compressible: true,
            extensions: ["cpl"]
          },
          "application/csrattrs": {
            source: "iana"
          },
          "application/csta+xml": {
            source: "iana",
            compressible: true
          },
          "application/cstadata+xml": {
            source: "iana",
            compressible: true
          },
          "application/csvm+json": {
            source: "iana",
            compressible: true
          },
          "application/cu-seeme": {
            source: "apache",
            extensions: ["cu"]
          },
          "application/cwt": {
            source: "iana"
          },
          "application/cybercash": {
            source: "iana"
          },
          "application/dart": {
            compressible: true
          },
          "application/dash+xml": {
            source: "iana",
            compressible: true,
            extensions: ["mpd"]
          },
          "application/dash-patch+xml": {
            source: "iana",
            compressible: true,
            extensions: ["mpp"]
          },
          "application/dashdelta": {
            source: "iana"
          },
          "application/davmount+xml": {
            source: "iana",
            compressible: true,
            extensions: ["davmount"]
          },
          "application/dca-rft": {
            source: "iana"
          },
          "application/dcd": {
            source: "iana"
          },
          "application/dec-dx": {
            source: "iana"
          },
          "application/dialog-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/dicom": {
            source: "iana"
          },
          "application/dicom+json": {
            source: "iana",
            compressible: true
          },
          "application/dicom+xml": {
            source: "iana",
            compressible: true
          },
          "application/dii": {
            source: "iana"
          },
          "application/dit": {
            source: "iana"
          },
          "application/dns": {
            source: "iana"
          },
          "application/dns+json": {
            source: "iana",
            compressible: true
          },
          "application/dns-message": {
            source: "iana"
          },
          "application/docbook+xml": {
            source: "apache",
            compressible: true,
            extensions: ["dbk"]
          },
          "application/dots+cbor": {
            source: "iana"
          },
          "application/dskpp+xml": {
            source: "iana",
            compressible: true
          },
          "application/dssc+der": {
            source: "iana",
            extensions: ["dssc"]
          },
          "application/dssc+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xdssc"]
          },
          "application/dvcs": {
            source: "iana"
          },
          "application/ecmascript": {
            source: "iana",
            compressible: true,
            extensions: ["es", "ecma"]
          },
          "application/edi-consent": {
            source: "iana"
          },
          "application/edi-x12": {
            source: "iana",
            compressible: false
          },
          "application/edifact": {
            source: "iana",
            compressible: false
          },
          "application/efi": {
            source: "iana"
          },
          "application/elm+json": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/elm+xml": {
            source: "iana",
            compressible: true
          },
          "application/emergencycalldata.cap+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/emergencycalldata.comment+xml": {
            source: "iana",
            compressible: true
          },
          "application/emergencycalldata.control+xml": {
            source: "iana",
            compressible: true
          },
          "application/emergencycalldata.deviceinfo+xml": {
            source: "iana",
            compressible: true
          },
          "application/emergencycalldata.ecall.msd": {
            source: "iana"
          },
          "application/emergencycalldata.providerinfo+xml": {
            source: "iana",
            compressible: true
          },
          "application/emergencycalldata.serviceinfo+xml": {
            source: "iana",
            compressible: true
          },
          "application/emergencycalldata.subscriberinfo+xml": {
            source: "iana",
            compressible: true
          },
          "application/emergencycalldata.veds+xml": {
            source: "iana",
            compressible: true
          },
          "application/emma+xml": {
            source: "iana",
            compressible: true,
            extensions: ["emma"]
          },
          "application/emotionml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["emotionml"]
          },
          "application/encaprtp": {
            source: "iana"
          },
          "application/epp+xml": {
            source: "iana",
            compressible: true
          },
          "application/epub+zip": {
            source: "iana",
            compressible: false,
            extensions: ["epub"]
          },
          "application/eshop": {
            source: "iana"
          },
          "application/exi": {
            source: "iana",
            extensions: ["exi"]
          },
          "application/expect-ct-report+json": {
            source: "iana",
            compressible: true
          },
          "application/express": {
            source: "iana",
            extensions: ["exp"]
          },
          "application/fastinfoset": {
            source: "iana"
          },
          "application/fastsoap": {
            source: "iana"
          },
          "application/fdt+xml": {
            source: "iana",
            compressible: true,
            extensions: ["fdt"]
          },
          "application/fhir+json": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/fhir+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/fido.trusted-apps+json": {
            compressible: true
          },
          "application/fits": {
            source: "iana"
          },
          "application/flexfec": {
            source: "iana"
          },
          "application/font-sfnt": {
            source: "iana"
          },
          "application/font-tdpfr": {
            source: "iana",
            extensions: ["pfr"]
          },
          "application/font-woff": {
            source: "iana",
            compressible: false
          },
          "application/framework-attributes+xml": {
            source: "iana",
            compressible: true
          },
          "application/geo+json": {
            source: "iana",
            compressible: true,
            extensions: ["geojson"]
          },
          "application/geo+json-seq": {
            source: "iana"
          },
          "application/geopackage+sqlite3": {
            source: "iana"
          },
          "application/geoxacml+xml": {
            source: "iana",
            compressible: true
          },
          "application/gltf-buffer": {
            source: "iana"
          },
          "application/gml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["gml"]
          },
          "application/gpx+xml": {
            source: "apache",
            compressible: true,
            extensions: ["gpx"]
          },
          "application/gxf": {
            source: "apache",
            extensions: ["gxf"]
          },
          "application/gzip": {
            source: "iana",
            compressible: false,
            extensions: ["gz"]
          },
          "application/h224": {
            source: "iana"
          },
          "application/held+xml": {
            source: "iana",
            compressible: true
          },
          "application/hjson": {
            extensions: ["hjson"]
          },
          "application/http": {
            source: "iana"
          },
          "application/hyperstudio": {
            source: "iana",
            extensions: ["stk"]
          },
          "application/ibe-key-request+xml": {
            source: "iana",
            compressible: true
          },
          "application/ibe-pkg-reply+xml": {
            source: "iana",
            compressible: true
          },
          "application/ibe-pp-data": {
            source: "iana"
          },
          "application/iges": {
            source: "iana"
          },
          "application/im-iscomposing+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/index": {
            source: "iana"
          },
          "application/index.cmd": {
            source: "iana"
          },
          "application/index.obj": {
            source: "iana"
          },
          "application/index.response": {
            source: "iana"
          },
          "application/index.vnd": {
            source: "iana"
          },
          "application/inkml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["ink", "inkml"]
          },
          "application/iotp": {
            source: "iana"
          },
          "application/ipfix": {
            source: "iana",
            extensions: ["ipfix"]
          },
          "application/ipp": {
            source: "iana"
          },
          "application/isup": {
            source: "iana"
          },
          "application/its+xml": {
            source: "iana",
            compressible: true,
            extensions: ["its"]
          },
          "application/java-archive": {
            source: "apache",
            compressible: false,
            extensions: ["jar", "war", "ear"]
          },
          "application/java-serialized-object": {
            source: "apache",
            compressible: false,
            extensions: ["ser"]
          },
          "application/java-vm": {
            source: "apache",
            compressible: false,
            extensions: ["class"]
          },
          "application/javascript": {
            source: "iana",
            charset: "UTF-8",
            compressible: true,
            extensions: ["js", "mjs"]
          },
          "application/jf2feed+json": {
            source: "iana",
            compressible: true
          },
          "application/jose": {
            source: "iana"
          },
          "application/jose+json": {
            source: "iana",
            compressible: true
          },
          "application/jrd+json": {
            source: "iana",
            compressible: true
          },
          "application/jscalendar+json": {
            source: "iana",
            compressible: true
          },
          "application/json": {
            source: "iana",
            charset: "UTF-8",
            compressible: true,
            extensions: ["json", "map"]
          },
          "application/json-patch+json": {
            source: "iana",
            compressible: true
          },
          "application/json-seq": {
            source: "iana"
          },
          "application/json5": {
            extensions: ["json5"]
          },
          "application/jsonml+json": {
            source: "apache",
            compressible: true,
            extensions: ["jsonml"]
          },
          "application/jwk+json": {
            source: "iana",
            compressible: true
          },
          "application/jwk-set+json": {
            source: "iana",
            compressible: true
          },
          "application/jwt": {
            source: "iana"
          },
          "application/kpml-request+xml": {
            source: "iana",
            compressible: true
          },
          "application/kpml-response+xml": {
            source: "iana",
            compressible: true
          },
          "application/ld+json": {
            source: "iana",
            compressible: true,
            extensions: ["jsonld"]
          },
          "application/lgr+xml": {
            source: "iana",
            compressible: true,
            extensions: ["lgr"]
          },
          "application/link-format": {
            source: "iana"
          },
          "application/load-control+xml": {
            source: "iana",
            compressible: true
          },
          "application/lost+xml": {
            source: "iana",
            compressible: true,
            extensions: ["lostxml"]
          },
          "application/lostsync+xml": {
            source: "iana",
            compressible: true
          },
          "application/lpf+zip": {
            source: "iana",
            compressible: false
          },
          "application/lxf": {
            source: "iana"
          },
          "application/mac-binhex40": {
            source: "iana",
            extensions: ["hqx"]
          },
          "application/mac-compactpro": {
            source: "apache",
            extensions: ["cpt"]
          },
          "application/macwriteii": {
            source: "iana"
          },
          "application/mads+xml": {
            source: "iana",
            compressible: true,
            extensions: ["mads"]
          },
          "application/manifest+json": {
            source: "iana",
            charset: "UTF-8",
            compressible: true,
            extensions: ["webmanifest"]
          },
          "application/marc": {
            source: "iana",
            extensions: ["mrc"]
          },
          "application/marcxml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["mrcx"]
          },
          "application/mathematica": {
            source: "iana",
            extensions: ["ma", "nb", "mb"]
          },
          "application/mathml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["mathml"]
          },
          "application/mathml-content+xml": {
            source: "iana",
            compressible: true
          },
          "application/mathml-presentation+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbms-associated-procedure-description+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbms-deregister+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbms-envelope+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbms-msk+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbms-msk-response+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbms-protection-description+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbms-reception-report+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbms-register+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbms-register-response+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbms-schedule+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbms-user-service-description+xml": {
            source: "iana",
            compressible: true
          },
          "application/mbox": {
            source: "iana",
            extensions: ["mbox"]
          },
          "application/media-policy-dataset+xml": {
            source: "iana",
            compressible: true,
            extensions: ["mpf"]
          },
          "application/media_control+xml": {
            source: "iana",
            compressible: true
          },
          "application/mediaservercontrol+xml": {
            source: "iana",
            compressible: true,
            extensions: ["mscml"]
          },
          "application/merge-patch+json": {
            source: "iana",
            compressible: true
          },
          "application/metalink+xml": {
            source: "apache",
            compressible: true,
            extensions: ["metalink"]
          },
          "application/metalink4+xml": {
            source: "iana",
            compressible: true,
            extensions: ["meta4"]
          },
          "application/mets+xml": {
            source: "iana",
            compressible: true,
            extensions: ["mets"]
          },
          "application/mf4": {
            source: "iana"
          },
          "application/mikey": {
            source: "iana"
          },
          "application/mipc": {
            source: "iana"
          },
          "application/missing-blocks+cbor-seq": {
            source: "iana"
          },
          "application/mmt-aei+xml": {
            source: "iana",
            compressible: true,
            extensions: ["maei"]
          },
          "application/mmt-usd+xml": {
            source: "iana",
            compressible: true,
            extensions: ["musd"]
          },
          "application/mods+xml": {
            source: "iana",
            compressible: true,
            extensions: ["mods"]
          },
          "application/moss-keys": {
            source: "iana"
          },
          "application/moss-signature": {
            source: "iana"
          },
          "application/mosskey-data": {
            source: "iana"
          },
          "application/mosskey-request": {
            source: "iana"
          },
          "application/mp21": {
            source: "iana",
            extensions: ["m21", "mp21"]
          },
          "application/mp4": {
            source: "iana",
            extensions: ["mp4s", "m4p"]
          },
          "application/mpeg4-generic": {
            source: "iana"
          },
          "application/mpeg4-iod": {
            source: "iana"
          },
          "application/mpeg4-iod-xmt": {
            source: "iana"
          },
          "application/mrb-consumer+xml": {
            source: "iana",
            compressible: true
          },
          "application/mrb-publish+xml": {
            source: "iana",
            compressible: true
          },
          "application/msc-ivr+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/msc-mixer+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/msword": {
            source: "iana",
            compressible: false,
            extensions: ["doc", "dot"]
          },
          "application/mud+json": {
            source: "iana",
            compressible: true
          },
          "application/multipart-core": {
            source: "iana"
          },
          "application/mxf": {
            source: "iana",
            extensions: ["mxf"]
          },
          "application/n-quads": {
            source: "iana",
            extensions: ["nq"]
          },
          "application/n-triples": {
            source: "iana",
            extensions: ["nt"]
          },
          "application/nasdata": {
            source: "iana"
          },
          "application/news-checkgroups": {
            source: "iana",
            charset: "US-ASCII"
          },
          "application/news-groupinfo": {
            source: "iana",
            charset: "US-ASCII"
          },
          "application/news-transmission": {
            source: "iana"
          },
          "application/nlsml+xml": {
            source: "iana",
            compressible: true
          },
          "application/node": {
            source: "iana",
            extensions: ["cjs"]
          },
          "application/nss": {
            source: "iana"
          },
          "application/oauth-authz-req+jwt": {
            source: "iana"
          },
          "application/oblivious-dns-message": {
            source: "iana"
          },
          "application/ocsp-request": {
            source: "iana"
          },
          "application/ocsp-response": {
            source: "iana"
          },
          "application/octet-stream": {
            source: "iana",
            compressible: false,
            extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"]
          },
          "application/oda": {
            source: "iana",
            extensions: ["oda"]
          },
          "application/odm+xml": {
            source: "iana",
            compressible: true
          },
          "application/odx": {
            source: "iana"
          },
          "application/oebps-package+xml": {
            source: "iana",
            compressible: true,
            extensions: ["opf"]
          },
          "application/ogg": {
            source: "iana",
            compressible: false,
            extensions: ["ogx"]
          },
          "application/omdoc+xml": {
            source: "apache",
            compressible: true,
            extensions: ["omdoc"]
          },
          "application/onenote": {
            source: "apache",
            extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"]
          },
          "application/opc-nodeset+xml": {
            source: "iana",
            compressible: true
          },
          "application/oscore": {
            source: "iana"
          },
          "application/oxps": {
            source: "iana",
            extensions: ["oxps"]
          },
          "application/p21": {
            source: "iana"
          },
          "application/p21+zip": {
            source: "iana",
            compressible: false
          },
          "application/p2p-overlay+xml": {
            source: "iana",
            compressible: true,
            extensions: ["relo"]
          },
          "application/parityfec": {
            source: "iana"
          },
          "application/passport": {
            source: "iana"
          },
          "application/patch-ops-error+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xer"]
          },
          "application/pdf": {
            source: "iana",
            compressible: false,
            extensions: ["pdf"]
          },
          "application/pdx": {
            source: "iana"
          },
          "application/pem-certificate-chain": {
            source: "iana"
          },
          "application/pgp-encrypted": {
            source: "iana",
            compressible: false,
            extensions: ["pgp"]
          },
          "application/pgp-keys": {
            source: "iana",
            extensions: ["asc"]
          },
          "application/pgp-signature": {
            source: "iana",
            extensions: ["asc", "sig"]
          },
          "application/pics-rules": {
            source: "apache",
            extensions: ["prf"]
          },
          "application/pidf+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/pidf-diff+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/pkcs10": {
            source: "iana",
            extensions: ["p10"]
          },
          "application/pkcs12": {
            source: "iana"
          },
          "application/pkcs7-mime": {
            source: "iana",
            extensions: ["p7m", "p7c"]
          },
          "application/pkcs7-signature": {
            source: "iana",
            extensions: ["p7s"]
          },
          "application/pkcs8": {
            source: "iana",
            extensions: ["p8"]
          },
          "application/pkcs8-encrypted": {
            source: "iana"
          },
          "application/pkix-attr-cert": {
            source: "iana",
            extensions: ["ac"]
          },
          "application/pkix-cert": {
            source: "iana",
            extensions: ["cer"]
          },
          "application/pkix-crl": {
            source: "iana",
            extensions: ["crl"]
          },
          "application/pkix-pkipath": {
            source: "iana",
            extensions: ["pkipath"]
          },
          "application/pkixcmp": {
            source: "iana",
            extensions: ["pki"]
          },
          "application/pls+xml": {
            source: "iana",
            compressible: true,
            extensions: ["pls"]
          },
          "application/poc-settings+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/postscript": {
            source: "iana",
            compressible: true,
            extensions: ["ai", "eps", "ps"]
          },
          "application/ppsp-tracker+json": {
            source: "iana",
            compressible: true
          },
          "application/problem+json": {
            source: "iana",
            compressible: true
          },
          "application/problem+xml": {
            source: "iana",
            compressible: true
          },
          "application/provenance+xml": {
            source: "iana",
            compressible: true,
            extensions: ["provx"]
          },
          "application/prs.alvestrand.titrax-sheet": {
            source: "iana"
          },
          "application/prs.cww": {
            source: "iana",
            extensions: ["cww"]
          },
          "application/prs.cyn": {
            source: "iana",
            charset: "7-BIT"
          },
          "application/prs.hpub+zip": {
            source: "iana",
            compressible: false
          },
          "application/prs.nprend": {
            source: "iana"
          },
          "application/prs.plucker": {
            source: "iana"
          },
          "application/prs.rdf-xml-crypt": {
            source: "iana"
          },
          "application/prs.xsf+xml": {
            source: "iana",
            compressible: true
          },
          "application/pskc+xml": {
            source: "iana",
            compressible: true,
            extensions: ["pskcxml"]
          },
          "application/pvd+json": {
            source: "iana",
            compressible: true
          },
          "application/qsig": {
            source: "iana"
          },
          "application/raml+yaml": {
            compressible: true,
            extensions: ["raml"]
          },
          "application/raptorfec": {
            source: "iana"
          },
          "application/rdap+json": {
            source: "iana",
            compressible: true
          },
          "application/rdf+xml": {
            source: "iana",
            compressible: true,
            extensions: ["rdf", "owl"]
          },
          "application/reginfo+xml": {
            source: "iana",
            compressible: true,
            extensions: ["rif"]
          },
          "application/relax-ng-compact-syntax": {
            source: "iana",
            extensions: ["rnc"]
          },
          "application/remote-printing": {
            source: "iana"
          },
          "application/reputon+json": {
            source: "iana",
            compressible: true
          },
          "application/resource-lists+xml": {
            source: "iana",
            compressible: true,
            extensions: ["rl"]
          },
          "application/resource-lists-diff+xml": {
            source: "iana",
            compressible: true,
            extensions: ["rld"]
          },
          "application/rfc+xml": {
            source: "iana",
            compressible: true
          },
          "application/riscos": {
            source: "iana"
          },
          "application/rlmi+xml": {
            source: "iana",
            compressible: true
          },
          "application/rls-services+xml": {
            source: "iana",
            compressible: true,
            extensions: ["rs"]
          },
          "application/route-apd+xml": {
            source: "iana",
            compressible: true,
            extensions: ["rapd"]
          },
          "application/route-s-tsid+xml": {
            source: "iana",
            compressible: true,
            extensions: ["sls"]
          },
          "application/route-usd+xml": {
            source: "iana",
            compressible: true,
            extensions: ["rusd"]
          },
          "application/rpki-ghostbusters": {
            source: "iana",
            extensions: ["gbr"]
          },
          "application/rpki-manifest": {
            source: "iana",
            extensions: ["mft"]
          },
          "application/rpki-publication": {
            source: "iana"
          },
          "application/rpki-roa": {
            source: "iana",
            extensions: ["roa"]
          },
          "application/rpki-updown": {
            source: "iana"
          },
          "application/rsd+xml": {
            source: "apache",
            compressible: true,
            extensions: ["rsd"]
          },
          "application/rss+xml": {
            source: "apache",
            compressible: true,
            extensions: ["rss"]
          },
          "application/rtf": {
            source: "iana",
            compressible: true,
            extensions: ["rtf"]
          },
          "application/rtploopback": {
            source: "iana"
          },
          "application/rtx": {
            source: "iana"
          },
          "application/samlassertion+xml": {
            source: "iana",
            compressible: true
          },
          "application/samlmetadata+xml": {
            source: "iana",
            compressible: true
          },
          "application/sarif+json": {
            source: "iana",
            compressible: true
          },
          "application/sarif-external-properties+json": {
            source: "iana",
            compressible: true
          },
          "application/sbe": {
            source: "iana"
          },
          "application/sbml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["sbml"]
          },
          "application/scaip+xml": {
            source: "iana",
            compressible: true
          },
          "application/scim+json": {
            source: "iana",
            compressible: true
          },
          "application/scvp-cv-request": {
            source: "iana",
            extensions: ["scq"]
          },
          "application/scvp-cv-response": {
            source: "iana",
            extensions: ["scs"]
          },
          "application/scvp-vp-request": {
            source: "iana",
            extensions: ["spq"]
          },
          "application/scvp-vp-response": {
            source: "iana",
            extensions: ["spp"]
          },
          "application/sdp": {
            source: "iana",
            extensions: ["sdp"]
          },
          "application/secevent+jwt": {
            source: "iana"
          },
          "application/senml+cbor": {
            source: "iana"
          },
          "application/senml+json": {
            source: "iana",
            compressible: true
          },
          "application/senml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["senmlx"]
          },
          "application/senml-etch+cbor": {
            source: "iana"
          },
          "application/senml-etch+json": {
            source: "iana",
            compressible: true
          },
          "application/senml-exi": {
            source: "iana"
          },
          "application/sensml+cbor": {
            source: "iana"
          },
          "application/sensml+json": {
            source: "iana",
            compressible: true
          },
          "application/sensml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["sensmlx"]
          },
          "application/sensml-exi": {
            source: "iana"
          },
          "application/sep+xml": {
            source: "iana",
            compressible: true
          },
          "application/sep-exi": {
            source: "iana"
          },
          "application/session-info": {
            source: "iana"
          },
          "application/set-payment": {
            source: "iana"
          },
          "application/set-payment-initiation": {
            source: "iana",
            extensions: ["setpay"]
          },
          "application/set-registration": {
            source: "iana"
          },
          "application/set-registration-initiation": {
            source: "iana",
            extensions: ["setreg"]
          },
          "application/sgml": {
            source: "iana"
          },
          "application/sgml-open-catalog": {
            source: "iana"
          },
          "application/shf+xml": {
            source: "iana",
            compressible: true,
            extensions: ["shf"]
          },
          "application/sieve": {
            source: "iana",
            extensions: ["siv", "sieve"]
          },
          "application/simple-filter+xml": {
            source: "iana",
            compressible: true
          },
          "application/simple-message-summary": {
            source: "iana"
          },
          "application/simplesymbolcontainer": {
            source: "iana"
          },
          "application/sipc": {
            source: "iana"
          },
          "application/slate": {
            source: "iana"
          },
          "application/smil": {
            source: "iana"
          },
          "application/smil+xml": {
            source: "iana",
            compressible: true,
            extensions: ["smi", "smil"]
          },
          "application/smpte336m": {
            source: "iana"
          },
          "application/soap+fastinfoset": {
            source: "iana"
          },
          "application/soap+xml": {
            source: "iana",
            compressible: true
          },
          "application/sparql-query": {
            source: "iana",
            extensions: ["rq"]
          },
          "application/sparql-results+xml": {
            source: "iana",
            compressible: true,
            extensions: ["srx"]
          },
          "application/spdx+json": {
            source: "iana",
            compressible: true
          },
          "application/spirits-event+xml": {
            source: "iana",
            compressible: true
          },
          "application/sql": {
            source: "iana"
          },
          "application/srgs": {
            source: "iana",
            extensions: ["gram"]
          },
          "application/srgs+xml": {
            source: "iana",
            compressible: true,
            extensions: ["grxml"]
          },
          "application/sru+xml": {
            source: "iana",
            compressible: true,
            extensions: ["sru"]
          },
          "application/ssdl+xml": {
            source: "apache",
            compressible: true,
            extensions: ["ssdl"]
          },
          "application/ssml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["ssml"]
          },
          "application/stix+json": {
            source: "iana",
            compressible: true
          },
          "application/swid+xml": {
            source: "iana",
            compressible: true,
            extensions: ["swidtag"]
          },
          "application/tamp-apex-update": {
            source: "iana"
          },
          "application/tamp-apex-update-confirm": {
            source: "iana"
          },
          "application/tamp-community-update": {
            source: "iana"
          },
          "application/tamp-community-update-confirm": {
            source: "iana"
          },
          "application/tamp-error": {
            source: "iana"
          },
          "application/tamp-sequence-adjust": {
            source: "iana"
          },
          "application/tamp-sequence-adjust-confirm": {
            source: "iana"
          },
          "application/tamp-status-query": {
            source: "iana"
          },
          "application/tamp-status-response": {
            source: "iana"
          },
          "application/tamp-update": {
            source: "iana"
          },
          "application/tamp-update-confirm": {
            source: "iana"
          },
          "application/tar": {
            compressible: true
          },
          "application/taxii+json": {
            source: "iana",
            compressible: true
          },
          "application/td+json": {
            source: "iana",
            compressible: true
          },
          "application/tei+xml": {
            source: "iana",
            compressible: true,
            extensions: ["tei", "teicorpus"]
          },
          "application/tetra_isi": {
            source: "iana"
          },
          "application/thraud+xml": {
            source: "iana",
            compressible: true,
            extensions: ["tfi"]
          },
          "application/timestamp-query": {
            source: "iana"
          },
          "application/timestamp-reply": {
            source: "iana"
          },
          "application/timestamped-data": {
            source: "iana",
            extensions: ["tsd"]
          },
          "application/tlsrpt+gzip": {
            source: "iana"
          },
          "application/tlsrpt+json": {
            source: "iana",
            compressible: true
          },
          "application/tnauthlist": {
            source: "iana"
          },
          "application/token-introspection+jwt": {
            source: "iana"
          },
          "application/toml": {
            compressible: true,
            extensions: ["toml"]
          },
          "application/trickle-ice-sdpfrag": {
            source: "iana"
          },
          "application/trig": {
            source: "iana",
            extensions: ["trig"]
          },
          "application/ttml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["ttml"]
          },
          "application/tve-trigger": {
            source: "iana"
          },
          "application/tzif": {
            source: "iana"
          },
          "application/tzif-leap": {
            source: "iana"
          },
          "application/ubjson": {
            compressible: false,
            extensions: ["ubj"]
          },
          "application/ulpfec": {
            source: "iana"
          },
          "application/urc-grpsheet+xml": {
            source: "iana",
            compressible: true
          },
          "application/urc-ressheet+xml": {
            source: "iana",
            compressible: true,
            extensions: ["rsheet"]
          },
          "application/urc-targetdesc+xml": {
            source: "iana",
            compressible: true,
            extensions: ["td"]
          },
          "application/urc-uisocketdesc+xml": {
            source: "iana",
            compressible: true
          },
          "application/vcard+json": {
            source: "iana",
            compressible: true
          },
          "application/vcard+xml": {
            source: "iana",
            compressible: true
          },
          "application/vemmi": {
            source: "iana"
          },
          "application/vividence.scriptfile": {
            source: "apache"
          },
          "application/vnd.1000minds.decision-model+xml": {
            source: "iana",
            compressible: true,
            extensions: ["1km"]
          },
          "application/vnd.3gpp-prose+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp-prose-pc3ch+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp-v2x-local-service-information": {
            source: "iana"
          },
          "application/vnd.3gpp.5gnas": {
            source: "iana"
          },
          "application/vnd.3gpp.access-transfer-events+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.bsf+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.gmop+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.gtpc": {
            source: "iana"
          },
          "application/vnd.3gpp.interworking-data": {
            source: "iana"
          },
          "application/vnd.3gpp.lpp": {
            source: "iana"
          },
          "application/vnd.3gpp.mc-signalling-ear": {
            source: "iana"
          },
          "application/vnd.3gpp.mcdata-affiliation-command+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcdata-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcdata-payload": {
            source: "iana"
          },
          "application/vnd.3gpp.mcdata-service-config+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcdata-signalling": {
            source: "iana"
          },
          "application/vnd.3gpp.mcdata-ue-config+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcdata-user-profile+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcptt-affiliation-command+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcptt-floor-request+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcptt-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcptt-location-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcptt-service-config+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcptt-signed+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcptt-ue-config+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcptt-ue-init-config+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcptt-user-profile+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcvideo-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcvideo-location-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcvideo-service-config+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcvideo-transmission-request+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcvideo-ue-config+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mcvideo-user-profile+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.mid-call+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.ngap": {
            source: "iana"
          },
          "application/vnd.3gpp.pfcp": {
            source: "iana"
          },
          "application/vnd.3gpp.pic-bw-large": {
            source: "iana",
            extensions: ["plb"]
          },
          "application/vnd.3gpp.pic-bw-small": {
            source: "iana",
            extensions: ["psb"]
          },
          "application/vnd.3gpp.pic-bw-var": {
            source: "iana",
            extensions: ["pvb"]
          },
          "application/vnd.3gpp.s1ap": {
            source: "iana"
          },
          "application/vnd.3gpp.sms": {
            source: "iana"
          },
          "application/vnd.3gpp.sms+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.srvcc-ext+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.srvcc-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.state-and-event-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp.ussd+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp2.bcmcsinfo+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.3gpp2.sms": {
            source: "iana"
          },
          "application/vnd.3gpp2.tcap": {
            source: "iana",
            extensions: ["tcap"]
          },
          "application/vnd.3lightssoftware.imagescal": {
            source: "iana"
          },
          "application/vnd.3m.post-it-notes": {
            source: "iana",
            extensions: ["pwn"]
          },
          "application/vnd.accpac.simply.aso": {
            source: "iana",
            extensions: ["aso"]
          },
          "application/vnd.accpac.simply.imp": {
            source: "iana",
            extensions: ["imp"]
          },
          "application/vnd.acucobol": {
            source: "iana",
            extensions: ["acu"]
          },
          "application/vnd.acucorp": {
            source: "iana",
            extensions: ["atc", "acutc"]
          },
          "application/vnd.adobe.air-application-installer-package+zip": {
            source: "apache",
            compressible: false,
            extensions: ["air"]
          },
          "application/vnd.adobe.flash.movie": {
            source: "iana"
          },
          "application/vnd.adobe.formscentral.fcdt": {
            source: "iana",
            extensions: ["fcdt"]
          },
          "application/vnd.adobe.fxp": {
            source: "iana",
            extensions: ["fxp", "fxpl"]
          },
          "application/vnd.adobe.partial-upload": {
            source: "iana"
          },
          "application/vnd.adobe.xdp+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xdp"]
          },
          "application/vnd.adobe.xfdf": {
            source: "iana",
            extensions: ["xfdf"]
          },
          "application/vnd.aether.imp": {
            source: "iana"
          },
          "application/vnd.afpc.afplinedata": {
            source: "iana"
          },
          "application/vnd.afpc.afplinedata-pagedef": {
            source: "iana"
          },
          "application/vnd.afpc.cmoca-cmresource": {
            source: "iana"
          },
          "application/vnd.afpc.foca-charset": {
            source: "iana"
          },
          "application/vnd.afpc.foca-codedfont": {
            source: "iana"
          },
          "application/vnd.afpc.foca-codepage": {
            source: "iana"
          },
          "application/vnd.afpc.modca": {
            source: "iana"
          },
          "application/vnd.afpc.modca-cmtable": {
            source: "iana"
          },
          "application/vnd.afpc.modca-formdef": {
            source: "iana"
          },
          "application/vnd.afpc.modca-mediummap": {
            source: "iana"
          },
          "application/vnd.afpc.modca-objectcontainer": {
            source: "iana"
          },
          "application/vnd.afpc.modca-overlay": {
            source: "iana"
          },
          "application/vnd.afpc.modca-pagesegment": {
            source: "iana"
          },
          "application/vnd.age": {
            source: "iana",
            extensions: ["age"]
          },
          "application/vnd.ah-barcode": {
            source: "iana"
          },
          "application/vnd.ahead.space": {
            source: "iana",
            extensions: ["ahead"]
          },
          "application/vnd.airzip.filesecure.azf": {
            source: "iana",
            extensions: ["azf"]
          },
          "application/vnd.airzip.filesecure.azs": {
            source: "iana",
            extensions: ["azs"]
          },
          "application/vnd.amadeus+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.amazon.ebook": {
            source: "apache",
            extensions: ["azw"]
          },
          "application/vnd.amazon.mobi8-ebook": {
            source: "iana"
          },
          "application/vnd.americandynamics.acc": {
            source: "iana",
            extensions: ["acc"]
          },
          "application/vnd.amiga.ami": {
            source: "iana",
            extensions: ["ami"]
          },
          "application/vnd.amundsen.maze+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.android.ota": {
            source: "iana"
          },
          "application/vnd.android.package-archive": {
            source: "apache",
            compressible: false,
            extensions: ["apk"]
          },
          "application/vnd.anki": {
            source: "iana"
          },
          "application/vnd.anser-web-certificate-issue-initiation": {
            source: "iana",
            extensions: ["cii"]
          },
          "application/vnd.anser-web-funds-transfer-initiation": {
            source: "apache",
            extensions: ["fti"]
          },
          "application/vnd.antix.game-component": {
            source: "iana",
            extensions: ["atx"]
          },
          "application/vnd.apache.arrow.file": {
            source: "iana"
          },
          "application/vnd.apache.arrow.stream": {
            source: "iana"
          },
          "application/vnd.apache.thrift.binary": {
            source: "iana"
          },
          "application/vnd.apache.thrift.compact": {
            source: "iana"
          },
          "application/vnd.apache.thrift.json": {
            source: "iana"
          },
          "application/vnd.api+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.aplextor.warrp+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.apothekende.reservation+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.apple.installer+xml": {
            source: "iana",
            compressible: true,
            extensions: ["mpkg"]
          },
          "application/vnd.apple.keynote": {
            source: "iana",
            extensions: ["key"]
          },
          "application/vnd.apple.mpegurl": {
            source: "iana",
            extensions: ["m3u8"]
          },
          "application/vnd.apple.numbers": {
            source: "iana",
            extensions: ["numbers"]
          },
          "application/vnd.apple.pages": {
            source: "iana",
            extensions: ["pages"]
          },
          "application/vnd.apple.pkpass": {
            compressible: false,
            extensions: ["pkpass"]
          },
          "application/vnd.arastra.swi": {
            source: "iana"
          },
          "application/vnd.aristanetworks.swi": {
            source: "iana",
            extensions: ["swi"]
          },
          "application/vnd.artisan+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.artsquare": {
            source: "iana"
          },
          "application/vnd.astraea-software.iota": {
            source: "iana",
            extensions: ["iota"]
          },
          "application/vnd.audiograph": {
            source: "iana",
            extensions: ["aep"]
          },
          "application/vnd.autopackage": {
            source: "iana"
          },
          "application/vnd.avalon+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.avistar+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.balsamiq.bmml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["bmml"]
          },
          "application/vnd.balsamiq.bmpr": {
            source: "iana"
          },
          "application/vnd.banana-accounting": {
            source: "iana"
          },
          "application/vnd.bbf.usp.error": {
            source: "iana"
          },
          "application/vnd.bbf.usp.msg": {
            source: "iana"
          },
          "application/vnd.bbf.usp.msg+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.bekitzur-stech+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.bint.med-content": {
            source: "iana"
          },
          "application/vnd.biopax.rdf+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.blink-idb-value-wrapper": {
            source: "iana"
          },
          "application/vnd.blueice.multipass": {
            source: "iana",
            extensions: ["mpm"]
          },
          "application/vnd.bluetooth.ep.oob": {
            source: "iana"
          },
          "application/vnd.bluetooth.le.oob": {
            source: "iana"
          },
          "application/vnd.bmi": {
            source: "iana",
            extensions: ["bmi"]
          },
          "application/vnd.bpf": {
            source: "iana"
          },
          "application/vnd.bpf3": {
            source: "iana"
          },
          "application/vnd.businessobjects": {
            source: "iana",
            extensions: ["rep"]
          },
          "application/vnd.byu.uapi+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.cab-jscript": {
            source: "iana"
          },
          "application/vnd.canon-cpdl": {
            source: "iana"
          },
          "application/vnd.canon-lips": {
            source: "iana"
          },
          "application/vnd.capasystems-pg+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.cendio.thinlinc.clientconf": {
            source: "iana"
          },
          "application/vnd.century-systems.tcp_stream": {
            source: "iana"
          },
          "application/vnd.chemdraw+xml": {
            source: "iana",
            compressible: true,
            extensions: ["cdxml"]
          },
          "application/vnd.chess-pgn": {
            source: "iana"
          },
          "application/vnd.chipnuts.karaoke-mmd": {
            source: "iana",
            extensions: ["mmd"]
          },
          "application/vnd.ciedi": {
            source: "iana"
          },
          "application/vnd.cinderella": {
            source: "iana",
            extensions: ["cdy"]
          },
          "application/vnd.cirpack.isdn-ext": {
            source: "iana"
          },
          "application/vnd.citationstyles.style+xml": {
            source: "iana",
            compressible: true,
            extensions: ["csl"]
          },
          "application/vnd.claymore": {
            source: "iana",
            extensions: ["cla"]
          },
          "application/vnd.cloanto.rp9": {
            source: "iana",
            extensions: ["rp9"]
          },
          "application/vnd.clonk.c4group": {
            source: "iana",
            extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"]
          },
          "application/vnd.cluetrust.cartomobile-config": {
            source: "iana",
            extensions: ["c11amc"]
          },
          "application/vnd.cluetrust.cartomobile-config-pkg": {
            source: "iana",
            extensions: ["c11amz"]
          },
          "application/vnd.coffeescript": {
            source: "iana"
          },
          "application/vnd.collabio.xodocuments.document": {
            source: "iana"
          },
          "application/vnd.collabio.xodocuments.document-template": {
            source: "iana"
          },
          "application/vnd.collabio.xodocuments.presentation": {
            source: "iana"
          },
          "application/vnd.collabio.xodocuments.presentation-template": {
            source: "iana"
          },
          "application/vnd.collabio.xodocuments.spreadsheet": {
            source: "iana"
          },
          "application/vnd.collabio.xodocuments.spreadsheet-template": {
            source: "iana"
          },
          "application/vnd.collection+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.collection.doc+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.collection.next+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.comicbook+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.comicbook-rar": {
            source: "iana"
          },
          "application/vnd.commerce-battelle": {
            source: "iana"
          },
          "application/vnd.commonspace": {
            source: "iana",
            extensions: ["csp"]
          },
          "application/vnd.contact.cmsg": {
            source: "iana",
            extensions: ["cdbcmsg"]
          },
          "application/vnd.coreos.ignition+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.cosmocaller": {
            source: "iana",
            extensions: ["cmc"]
          },
          "application/vnd.crick.clicker": {
            source: "iana",
            extensions: ["clkx"]
          },
          "application/vnd.crick.clicker.keyboard": {
            source: "iana",
            extensions: ["clkk"]
          },
          "application/vnd.crick.clicker.palette": {
            source: "iana",
            extensions: ["clkp"]
          },
          "application/vnd.crick.clicker.template": {
            source: "iana",
            extensions: ["clkt"]
          },
          "application/vnd.crick.clicker.wordbank": {
            source: "iana",
            extensions: ["clkw"]
          },
          "application/vnd.criticaltools.wbs+xml": {
            source: "iana",
            compressible: true,
            extensions: ["wbs"]
          },
          "application/vnd.cryptii.pipe+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.crypto-shade-file": {
            source: "iana"
          },
          "application/vnd.cryptomator.encrypted": {
            source: "iana"
          },
          "application/vnd.cryptomator.vault": {
            source: "iana"
          },
          "application/vnd.ctc-posml": {
            source: "iana",
            extensions: ["pml"]
          },
          "application/vnd.ctct.ws+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.cups-pdf": {
            source: "iana"
          },
          "application/vnd.cups-postscript": {
            source: "iana"
          },
          "application/vnd.cups-ppd": {
            source: "iana",
            extensions: ["ppd"]
          },
          "application/vnd.cups-raster": {
            source: "iana"
          },
          "application/vnd.cups-raw": {
            source: "iana"
          },
          "application/vnd.curl": {
            source: "iana"
          },
          "application/vnd.curl.car": {
            source: "apache",
            extensions: ["car"]
          },
          "application/vnd.curl.pcurl": {
            source: "apache",
            extensions: ["pcurl"]
          },
          "application/vnd.cyan.dean.root+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.cybank": {
            source: "iana"
          },
          "application/vnd.cyclonedx+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.cyclonedx+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.d2l.coursepackage1p0+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.d3m-dataset": {
            source: "iana"
          },
          "application/vnd.d3m-problem": {
            source: "iana"
          },
          "application/vnd.dart": {
            source: "iana",
            compressible: true,
            extensions: ["dart"]
          },
          "application/vnd.data-vision.rdz": {
            source: "iana",
            extensions: ["rdz"]
          },
          "application/vnd.datapackage+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dataresource+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dbf": {
            source: "iana",
            extensions: ["dbf"]
          },
          "application/vnd.debian.binary-package": {
            source: "iana"
          },
          "application/vnd.dece.data": {
            source: "iana",
            extensions: ["uvf", "uvvf", "uvd", "uvvd"]
          },
          "application/vnd.dece.ttml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["uvt", "uvvt"]
          },
          "application/vnd.dece.unspecified": {
            source: "iana",
            extensions: ["uvx", "uvvx"]
          },
          "application/vnd.dece.zip": {
            source: "iana",
            extensions: ["uvz", "uvvz"]
          },
          "application/vnd.denovo.fcselayout-link": {
            source: "iana",
            extensions: ["fe_launch"]
          },
          "application/vnd.desmume.movie": {
            source: "iana"
          },
          "application/vnd.dir-bi.plate-dl-nosuffix": {
            source: "iana"
          },
          "application/vnd.dm.delegation+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dna": {
            source: "iana",
            extensions: ["dna"]
          },
          "application/vnd.document+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dolby.mlp": {
            source: "apache",
            extensions: ["mlp"]
          },
          "application/vnd.dolby.mobile.1": {
            source: "iana"
          },
          "application/vnd.dolby.mobile.2": {
            source: "iana"
          },
          "application/vnd.doremir.scorecloud-binary-document": {
            source: "iana"
          },
          "application/vnd.dpgraph": {
            source: "iana",
            extensions: ["dpg"]
          },
          "application/vnd.dreamfactory": {
            source: "iana",
            extensions: ["dfac"]
          },
          "application/vnd.drive+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ds-keypoint": {
            source: "apache",
            extensions: ["kpxx"]
          },
          "application/vnd.dtg.local": {
            source: "iana"
          },
          "application/vnd.dtg.local.flash": {
            source: "iana"
          },
          "application/vnd.dtg.local.html": {
            source: "iana"
          },
          "application/vnd.dvb.ait": {
            source: "iana",
            extensions: ["ait"]
          },
          "application/vnd.dvb.dvbisl+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dvb.dvbj": {
            source: "iana"
          },
          "application/vnd.dvb.esgcontainer": {
            source: "iana"
          },
          "application/vnd.dvb.ipdcdftnotifaccess": {
            source: "iana"
          },
          "application/vnd.dvb.ipdcesgaccess": {
            source: "iana"
          },
          "application/vnd.dvb.ipdcesgaccess2": {
            source: "iana"
          },
          "application/vnd.dvb.ipdcesgpdd": {
            source: "iana"
          },
          "application/vnd.dvb.ipdcroaming": {
            source: "iana"
          },
          "application/vnd.dvb.iptv.alfec-base": {
            source: "iana"
          },
          "application/vnd.dvb.iptv.alfec-enhancement": {
            source: "iana"
          },
          "application/vnd.dvb.notif-aggregate-root+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dvb.notif-container+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dvb.notif-generic+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dvb.notif-ia-msglist+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dvb.notif-ia-registration-request+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dvb.notif-ia-registration-response+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dvb.notif-init+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.dvb.pfr": {
            source: "iana"
          },
          "application/vnd.dvb.service": {
            source: "iana",
            extensions: ["svc"]
          },
          "application/vnd.dxr": {
            source: "iana"
          },
          "application/vnd.dynageo": {
            source: "iana",
            extensions: ["geo"]
          },
          "application/vnd.dzr": {
            source: "iana"
          },
          "application/vnd.easykaraoke.cdgdownload": {
            source: "iana"
          },
          "application/vnd.ecdis-update": {
            source: "iana"
          },
          "application/vnd.ecip.rlp": {
            source: "iana"
          },
          "application/vnd.eclipse.ditto+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ecowin.chart": {
            source: "iana",
            extensions: ["mag"]
          },
          "application/vnd.ecowin.filerequest": {
            source: "iana"
          },
          "application/vnd.ecowin.fileupdate": {
            source: "iana"
          },
          "application/vnd.ecowin.series": {
            source: "iana"
          },
          "application/vnd.ecowin.seriesrequest": {
            source: "iana"
          },
          "application/vnd.ecowin.seriesupdate": {
            source: "iana"
          },
          "application/vnd.efi.img": {
            source: "iana"
          },
          "application/vnd.efi.iso": {
            source: "iana"
          },
          "application/vnd.emclient.accessrequest+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.enliven": {
            source: "iana",
            extensions: ["nml"]
          },
          "application/vnd.enphase.envoy": {
            source: "iana"
          },
          "application/vnd.eprints.data+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.epson.esf": {
            source: "iana",
            extensions: ["esf"]
          },
          "application/vnd.epson.msf": {
            source: "iana",
            extensions: ["msf"]
          },
          "application/vnd.epson.quickanime": {
            source: "iana",
            extensions: ["qam"]
          },
          "application/vnd.epson.salt": {
            source: "iana",
            extensions: ["slt"]
          },
          "application/vnd.epson.ssf": {
            source: "iana",
            extensions: ["ssf"]
          },
          "application/vnd.ericsson.quickcall": {
            source: "iana"
          },
          "application/vnd.espass-espass+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.eszigno3+xml": {
            source: "iana",
            compressible: true,
            extensions: ["es3", "et3"]
          },
          "application/vnd.etsi.aoc+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.asic-e+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.etsi.asic-s+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.etsi.cug+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.iptvcommand+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.iptvdiscovery+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.iptvprofile+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.iptvsad-bc+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.iptvsad-cod+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.iptvsad-npvr+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.iptvservice+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.iptvsync+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.iptvueprofile+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.mcid+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.mheg5": {
            source: "iana"
          },
          "application/vnd.etsi.overload-control-policy-dataset+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.pstn+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.sci+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.simservs+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.timestamp-token": {
            source: "iana"
          },
          "application/vnd.etsi.tsl+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.etsi.tsl.der": {
            source: "iana"
          },
          "application/vnd.eu.kasparian.car+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.eudora.data": {
            source: "iana"
          },
          "application/vnd.evolv.ecig.profile": {
            source: "iana"
          },
          "application/vnd.evolv.ecig.settings": {
            source: "iana"
          },
          "application/vnd.evolv.ecig.theme": {
            source: "iana"
          },
          "application/vnd.exstream-empower+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.exstream-package": {
            source: "iana"
          },
          "application/vnd.ezpix-album": {
            source: "iana",
            extensions: ["ez2"]
          },
          "application/vnd.ezpix-package": {
            source: "iana",
            extensions: ["ez3"]
          },
          "application/vnd.f-secure.mobile": {
            source: "iana"
          },
          "application/vnd.familysearch.gedcom+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.fastcopy-disk-image": {
            source: "iana"
          },
          "application/vnd.fdf": {
            source: "iana",
            extensions: ["fdf"]
          },
          "application/vnd.fdsn.mseed": {
            source: "iana",
            extensions: ["mseed"]
          },
          "application/vnd.fdsn.seed": {
            source: "iana",
            extensions: ["seed", "dataless"]
          },
          "application/vnd.ffsns": {
            source: "iana"
          },
          "application/vnd.ficlab.flb+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.filmit.zfc": {
            source: "iana"
          },
          "application/vnd.fints": {
            source: "iana"
          },
          "application/vnd.firemonkeys.cloudcell": {
            source: "iana"
          },
          "application/vnd.flographit": {
            source: "iana",
            extensions: ["gph"]
          },
          "application/vnd.fluxtime.clip": {
            source: "iana",
            extensions: ["ftc"]
          },
          "application/vnd.font-fontforge-sfd": {
            source: "iana"
          },
          "application/vnd.framemaker": {
            source: "iana",
            extensions: ["fm", "frame", "maker", "book"]
          },
          "application/vnd.frogans.fnc": {
            source: "iana",
            extensions: ["fnc"]
          },
          "application/vnd.frogans.ltf": {
            source: "iana",
            extensions: ["ltf"]
          },
          "application/vnd.fsc.weblaunch": {
            source: "iana",
            extensions: ["fsc"]
          },
          "application/vnd.fujifilm.fb.docuworks": {
            source: "iana"
          },
          "application/vnd.fujifilm.fb.docuworks.binder": {
            source: "iana"
          },
          "application/vnd.fujifilm.fb.docuworks.container": {
            source: "iana"
          },
          "application/vnd.fujifilm.fb.jfi+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.fujitsu.oasys": {
            source: "iana",
            extensions: ["oas"]
          },
          "application/vnd.fujitsu.oasys2": {
            source: "iana",
            extensions: ["oa2"]
          },
          "application/vnd.fujitsu.oasys3": {
            source: "iana",
            extensions: ["oa3"]
          },
          "application/vnd.fujitsu.oasysgp": {
            source: "iana",
            extensions: ["fg5"]
          },
          "application/vnd.fujitsu.oasysprs": {
            source: "iana",
            extensions: ["bh2"]
          },
          "application/vnd.fujixerox.art-ex": {
            source: "iana"
          },
          "application/vnd.fujixerox.art4": {
            source: "iana"
          },
          "application/vnd.fujixerox.ddd": {
            source: "iana",
            extensions: ["ddd"]
          },
          "application/vnd.fujixerox.docuworks": {
            source: "iana",
            extensions: ["xdw"]
          },
          "application/vnd.fujixerox.docuworks.binder": {
            source: "iana",
            extensions: ["xbd"]
          },
          "application/vnd.fujixerox.docuworks.container": {
            source: "iana"
          },
          "application/vnd.fujixerox.hbpl": {
            source: "iana"
          },
          "application/vnd.fut-misnet": {
            source: "iana"
          },
          "application/vnd.futoin+cbor": {
            source: "iana"
          },
          "application/vnd.futoin+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.fuzzysheet": {
            source: "iana",
            extensions: ["fzs"]
          },
          "application/vnd.genomatix.tuxedo": {
            source: "iana",
            extensions: ["txd"]
          },
          "application/vnd.gentics.grd+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.geo+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.geocube+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.geogebra.file": {
            source: "iana",
            extensions: ["ggb"]
          },
          "application/vnd.geogebra.slides": {
            source: "iana"
          },
          "application/vnd.geogebra.tool": {
            source: "iana",
            extensions: ["ggt"]
          },
          "application/vnd.geometry-explorer": {
            source: "iana",
            extensions: ["gex", "gre"]
          },
          "application/vnd.geonext": {
            source: "iana",
            extensions: ["gxt"]
          },
          "application/vnd.geoplan": {
            source: "iana",
            extensions: ["g2w"]
          },
          "application/vnd.geospace": {
            source: "iana",
            extensions: ["g3w"]
          },
          "application/vnd.gerber": {
            source: "iana"
          },
          "application/vnd.globalplatform.card-content-mgt": {
            source: "iana"
          },
          "application/vnd.globalplatform.card-content-mgt-response": {
            source: "iana"
          },
          "application/vnd.gmx": {
            source: "iana",
            extensions: ["gmx"]
          },
          "application/vnd.google-apps.document": {
            compressible: false,
            extensions: ["gdoc"]
          },
          "application/vnd.google-apps.presentation": {
            compressible: false,
            extensions: ["gslides"]
          },
          "application/vnd.google-apps.spreadsheet": {
            compressible: false,
            extensions: ["gsheet"]
          },
          "application/vnd.google-earth.kml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["kml"]
          },
          "application/vnd.google-earth.kmz": {
            source: "iana",
            compressible: false,
            extensions: ["kmz"]
          },
          "application/vnd.gov.sk.e-form+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.gov.sk.e-form+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.gov.sk.xmldatacontainer+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.grafeq": {
            source: "iana",
            extensions: ["gqf", "gqs"]
          },
          "application/vnd.gridmp": {
            source: "iana"
          },
          "application/vnd.groove-account": {
            source: "iana",
            extensions: ["gac"]
          },
          "application/vnd.groove-help": {
            source: "iana",
            extensions: ["ghf"]
          },
          "application/vnd.groove-identity-message": {
            source: "iana",
            extensions: ["gim"]
          },
          "application/vnd.groove-injector": {
            source: "iana",
            extensions: ["grv"]
          },
          "application/vnd.groove-tool-message": {
            source: "iana",
            extensions: ["gtm"]
          },
          "application/vnd.groove-tool-template": {
            source: "iana",
            extensions: ["tpl"]
          },
          "application/vnd.groove-vcard": {
            source: "iana",
            extensions: ["vcg"]
          },
          "application/vnd.hal+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.hal+xml": {
            source: "iana",
            compressible: true,
            extensions: ["hal"]
          },
          "application/vnd.handheld-entertainment+xml": {
            source: "iana",
            compressible: true,
            extensions: ["zmm"]
          },
          "application/vnd.hbci": {
            source: "iana",
            extensions: ["hbci"]
          },
          "application/vnd.hc+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.hcl-bireports": {
            source: "iana"
          },
          "application/vnd.hdt": {
            source: "iana"
          },
          "application/vnd.heroku+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.hhe.lesson-player": {
            source: "iana",
            extensions: ["les"]
          },
          "application/vnd.hl7cda+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/vnd.hl7v2+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/vnd.hp-hpgl": {
            source: "iana",
            extensions: ["hpgl"]
          },
          "application/vnd.hp-hpid": {
            source: "iana",
            extensions: ["hpid"]
          },
          "application/vnd.hp-hps": {
            source: "iana",
            extensions: ["hps"]
          },
          "application/vnd.hp-jlyt": {
            source: "iana",
            extensions: ["jlt"]
          },
          "application/vnd.hp-pcl": {
            source: "iana",
            extensions: ["pcl"]
          },
          "application/vnd.hp-pclxl": {
            source: "iana",
            extensions: ["pclxl"]
          },
          "application/vnd.httphone": {
            source: "iana"
          },
          "application/vnd.hydrostatix.sof-data": {
            source: "iana",
            extensions: ["sfd-hdstx"]
          },
          "application/vnd.hyper+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.hyper-item+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.hyperdrive+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.hzn-3d-crossword": {
            source: "iana"
          },
          "application/vnd.ibm.afplinedata": {
            source: "iana"
          },
          "application/vnd.ibm.electronic-media": {
            source: "iana"
          },
          "application/vnd.ibm.minipay": {
            source: "iana",
            extensions: ["mpy"]
          },
          "application/vnd.ibm.modcap": {
            source: "iana",
            extensions: ["afp", "listafp", "list3820"]
          },
          "application/vnd.ibm.rights-management": {
            source: "iana",
            extensions: ["irm"]
          },
          "application/vnd.ibm.secure-container": {
            source: "iana",
            extensions: ["sc"]
          },
          "application/vnd.iccprofile": {
            source: "iana",
            extensions: ["icc", "icm"]
          },
          "application/vnd.ieee.1905": {
            source: "iana"
          },
          "application/vnd.igloader": {
            source: "iana",
            extensions: ["igl"]
          },
          "application/vnd.imagemeter.folder+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.imagemeter.image+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.immervision-ivp": {
            source: "iana",
            extensions: ["ivp"]
          },
          "application/vnd.immervision-ivu": {
            source: "iana",
            extensions: ["ivu"]
          },
          "application/vnd.ims.imsccv1p1": {
            source: "iana"
          },
          "application/vnd.ims.imsccv1p2": {
            source: "iana"
          },
          "application/vnd.ims.imsccv1p3": {
            source: "iana"
          },
          "application/vnd.ims.lis.v2.result+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ims.lti.v2.toolproxy+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ims.lti.v2.toolproxy.id+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ims.lti.v2.toolsettings+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ims.lti.v2.toolsettings.simple+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.informedcontrol.rms+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.informix-visionary": {
            source: "iana"
          },
          "application/vnd.infotech.project": {
            source: "iana"
          },
          "application/vnd.infotech.project+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.innopath.wamp.notification": {
            source: "iana"
          },
          "application/vnd.insors.igm": {
            source: "iana",
            extensions: ["igm"]
          },
          "application/vnd.intercon.formnet": {
            source: "iana",
            extensions: ["xpw", "xpx"]
          },
          "application/vnd.intergeo": {
            source: "iana",
            extensions: ["i2g"]
          },
          "application/vnd.intertrust.digibox": {
            source: "iana"
          },
          "application/vnd.intertrust.nncp": {
            source: "iana"
          },
          "application/vnd.intu.qbo": {
            source: "iana",
            extensions: ["qbo"]
          },
          "application/vnd.intu.qfx": {
            source: "iana",
            extensions: ["qfx"]
          },
          "application/vnd.iptc.g2.catalogitem+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.iptc.g2.conceptitem+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.iptc.g2.knowledgeitem+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.iptc.g2.newsitem+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.iptc.g2.newsmessage+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.iptc.g2.packageitem+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.iptc.g2.planningitem+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ipunplugged.rcprofile": {
            source: "iana",
            extensions: ["rcprofile"]
          },
          "application/vnd.irepository.package+xml": {
            source: "iana",
            compressible: true,
            extensions: ["irp"]
          },
          "application/vnd.is-xpr": {
            source: "iana",
            extensions: ["xpr"]
          },
          "application/vnd.isac.fcs": {
            source: "iana",
            extensions: ["fcs"]
          },
          "application/vnd.iso11783-10+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.jam": {
            source: "iana",
            extensions: ["jam"]
          },
          "application/vnd.japannet-directory-service": {
            source: "iana"
          },
          "application/vnd.japannet-jpnstore-wakeup": {
            source: "iana"
          },
          "application/vnd.japannet-payment-wakeup": {
            source: "iana"
          },
          "application/vnd.japannet-registration": {
            source: "iana"
          },
          "application/vnd.japannet-registration-wakeup": {
            source: "iana"
          },
          "application/vnd.japannet-setstore-wakeup": {
            source: "iana"
          },
          "application/vnd.japannet-verification": {
            source: "iana"
          },
          "application/vnd.japannet-verification-wakeup": {
            source: "iana"
          },
          "application/vnd.jcp.javame.midlet-rms": {
            source: "iana",
            extensions: ["rms"]
          },
          "application/vnd.jisp": {
            source: "iana",
            extensions: ["jisp"]
          },
          "application/vnd.joost.joda-archive": {
            source: "iana",
            extensions: ["joda"]
          },
          "application/vnd.jsk.isdn-ngn": {
            source: "iana"
          },
          "application/vnd.kahootz": {
            source: "iana",
            extensions: ["ktz", "ktr"]
          },
          "application/vnd.kde.karbon": {
            source: "iana",
            extensions: ["karbon"]
          },
          "application/vnd.kde.kchart": {
            source: "iana",
            extensions: ["chrt"]
          },
          "application/vnd.kde.kformula": {
            source: "iana",
            extensions: ["kfo"]
          },
          "application/vnd.kde.kivio": {
            source: "iana",
            extensions: ["flw"]
          },
          "application/vnd.kde.kontour": {
            source: "iana",
            extensions: ["kon"]
          },
          "application/vnd.kde.kpresenter": {
            source: "iana",
            extensions: ["kpr", "kpt"]
          },
          "application/vnd.kde.kspread": {
            source: "iana",
            extensions: ["ksp"]
          },
          "application/vnd.kde.kword": {
            source: "iana",
            extensions: ["kwd", "kwt"]
          },
          "application/vnd.kenameaapp": {
            source: "iana",
            extensions: ["htke"]
          },
          "application/vnd.kidspiration": {
            source: "iana",
            extensions: ["kia"]
          },
          "application/vnd.kinar": {
            source: "iana",
            extensions: ["kne", "knp"]
          },
          "application/vnd.koan": {
            source: "iana",
            extensions: ["skp", "skd", "skt", "skm"]
          },
          "application/vnd.kodak-descriptor": {
            source: "iana",
            extensions: ["sse"]
          },
          "application/vnd.las": {
            source: "iana"
          },
          "application/vnd.las.las+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.las.las+xml": {
            source: "iana",
            compressible: true,
            extensions: ["lasxml"]
          },
          "application/vnd.laszip": {
            source: "iana"
          },
          "application/vnd.leap+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.liberty-request+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.llamagraphics.life-balance.desktop": {
            source: "iana",
            extensions: ["lbd"]
          },
          "application/vnd.llamagraphics.life-balance.exchange+xml": {
            source: "iana",
            compressible: true,
            extensions: ["lbe"]
          },
          "application/vnd.logipipe.circuit+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.loom": {
            source: "iana"
          },
          "application/vnd.lotus-1-2-3": {
            source: "iana",
            extensions: ["123"]
          },
          "application/vnd.lotus-approach": {
            source: "iana",
            extensions: ["apr"]
          },
          "application/vnd.lotus-freelance": {
            source: "iana",
            extensions: ["pre"]
          },
          "application/vnd.lotus-notes": {
            source: "iana",
            extensions: ["nsf"]
          },
          "application/vnd.lotus-organizer": {
            source: "iana",
            extensions: ["org"]
          },
          "application/vnd.lotus-screencam": {
            source: "iana",
            extensions: ["scm"]
          },
          "application/vnd.lotus-wordpro": {
            source: "iana",
            extensions: ["lwp"]
          },
          "application/vnd.macports.portpkg": {
            source: "iana",
            extensions: ["portpkg"]
          },
          "application/vnd.mapbox-vector-tile": {
            source: "iana",
            extensions: ["mvt"]
          },
          "application/vnd.marlin.drm.actiontoken+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.marlin.drm.conftoken+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.marlin.drm.license+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.marlin.drm.mdcf": {
            source: "iana"
          },
          "application/vnd.mason+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.maxar.archive.3tz+zip": {
            source: "iana",
            compressible: false
          },
          "application/vnd.maxmind.maxmind-db": {
            source: "iana"
          },
          "application/vnd.mcd": {
            source: "iana",
            extensions: ["mcd"]
          },
          "application/vnd.medcalcdata": {
            source: "iana",
            extensions: ["mc1"]
          },
          "application/vnd.mediastation.cdkey": {
            source: "iana",
            extensions: ["cdkey"]
          },
          "application/vnd.meridian-slingshot": {
            source: "iana"
          },
          "application/vnd.mfer": {
            source: "iana",
            extensions: ["mwf"]
          },
          "application/vnd.mfmp": {
            source: "iana",
            extensions: ["mfm"]
          },
          "application/vnd.micro+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.micrografx.flo": {
            source: "iana",
            extensions: ["flo"]
          },
          "application/vnd.micrografx.igx": {
            source: "iana",
            extensions: ["igx"]
          },
          "application/vnd.microsoft.portable-executable": {
            source: "iana"
          },
          "application/vnd.microsoft.windows.thumbnail-cache": {
            source: "iana"
          },
          "application/vnd.miele+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.mif": {
            source: "iana",
            extensions: ["mif"]
          },
          "application/vnd.minisoft-hp3000-save": {
            source: "iana"
          },
          "application/vnd.mitsubishi.misty-guard.trustweb": {
            source: "iana"
          },
          "application/vnd.mobius.daf": {
            source: "iana",
            extensions: ["daf"]
          },
          "application/vnd.mobius.dis": {
            source: "iana",
            extensions: ["dis"]
          },
          "application/vnd.mobius.mbk": {
            source: "iana",
            extensions: ["mbk"]
          },
          "application/vnd.mobius.mqy": {
            source: "iana",
            extensions: ["mqy"]
          },
          "application/vnd.mobius.msl": {
            source: "iana",
            extensions: ["msl"]
          },
          "application/vnd.mobius.plc": {
            source: "iana",
            extensions: ["plc"]
          },
          "application/vnd.mobius.txf": {
            source: "iana",
            extensions: ["txf"]
          },
          "application/vnd.mophun.application": {
            source: "iana",
            extensions: ["mpn"]
          },
          "application/vnd.mophun.certificate": {
            source: "iana",
            extensions: ["mpc"]
          },
          "application/vnd.motorola.flexsuite": {
            source: "iana"
          },
          "application/vnd.motorola.flexsuite.adsi": {
            source: "iana"
          },
          "application/vnd.motorola.flexsuite.fis": {
            source: "iana"
          },
          "application/vnd.motorola.flexsuite.gotap": {
            source: "iana"
          },
          "application/vnd.motorola.flexsuite.kmr": {
            source: "iana"
          },
          "application/vnd.motorola.flexsuite.ttc": {
            source: "iana"
          },
          "application/vnd.motorola.flexsuite.wem": {
            source: "iana"
          },
          "application/vnd.motorola.iprm": {
            source: "iana"
          },
          "application/vnd.mozilla.xul+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xul"]
          },
          "application/vnd.ms-3mfdocument": {
            source: "iana"
          },
          "application/vnd.ms-artgalry": {
            source: "iana",
            extensions: ["cil"]
          },
          "application/vnd.ms-asf": {
            source: "iana"
          },
          "application/vnd.ms-cab-compressed": {
            source: "iana",
            extensions: ["cab"]
          },
          "application/vnd.ms-color.iccprofile": {
            source: "apache"
          },
          "application/vnd.ms-excel": {
            source: "iana",
            compressible: false,
            extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
          },
          "application/vnd.ms-excel.addin.macroenabled.12": {
            source: "iana",
            extensions: ["xlam"]
          },
          "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
            source: "iana",
            extensions: ["xlsb"]
          },
          "application/vnd.ms-excel.sheet.macroenabled.12": {
            source: "iana",
            extensions: ["xlsm"]
          },
          "application/vnd.ms-excel.template.macroenabled.12": {
            source: "iana",
            extensions: ["xltm"]
          },
          "application/vnd.ms-fontobject": {
            source: "iana",
            compressible: true,
            extensions: ["eot"]
          },
          "application/vnd.ms-htmlhelp": {
            source: "iana",
            extensions: ["chm"]
          },
          "application/vnd.ms-ims": {
            source: "iana",
            extensions: ["ims"]
          },
          "application/vnd.ms-lrm": {
            source: "iana",
            extensions: ["lrm"]
          },
          "application/vnd.ms-office.activex+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ms-officetheme": {
            source: "iana",
            extensions: ["thmx"]
          },
          "application/vnd.ms-opentype": {
            source: "apache",
            compressible: true
          },
          "application/vnd.ms-outlook": {
            compressible: false,
            extensions: ["msg"]
          },
          "application/vnd.ms-package.obfuscated-opentype": {
            source: "apache"
          },
          "application/vnd.ms-pki.seccat": {
            source: "apache",
            extensions: ["cat"]
          },
          "application/vnd.ms-pki.stl": {
            source: "apache",
            extensions: ["stl"]
          },
          "application/vnd.ms-playready.initiator+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ms-powerpoint": {
            source: "iana",
            compressible: false,
            extensions: ["ppt", "pps", "pot"]
          },
          "application/vnd.ms-powerpoint.addin.macroenabled.12": {
            source: "iana",
            extensions: ["ppam"]
          },
          "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
            source: "iana",
            extensions: ["pptm"]
          },
          "application/vnd.ms-powerpoint.slide.macroenabled.12": {
            source: "iana",
            extensions: ["sldm"]
          },
          "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
            source: "iana",
            extensions: ["ppsm"]
          },
          "application/vnd.ms-powerpoint.template.macroenabled.12": {
            source: "iana",
            extensions: ["potm"]
          },
          "application/vnd.ms-printdevicecapabilities+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ms-printing.printticket+xml": {
            source: "apache",
            compressible: true
          },
          "application/vnd.ms-printschematicket+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ms-project": {
            source: "iana",
            extensions: ["mpp", "mpt"]
          },
          "application/vnd.ms-tnef": {
            source: "iana"
          },
          "application/vnd.ms-windows.devicepairing": {
            source: "iana"
          },
          "application/vnd.ms-windows.nwprinting.oob": {
            source: "iana"
          },
          "application/vnd.ms-windows.printerpairing": {
            source: "iana"
          },
          "application/vnd.ms-windows.wsd.oob": {
            source: "iana"
          },
          "application/vnd.ms-wmdrm.lic-chlg-req": {
            source: "iana"
          },
          "application/vnd.ms-wmdrm.lic-resp": {
            source: "iana"
          },
          "application/vnd.ms-wmdrm.meter-chlg-req": {
            source: "iana"
          },
          "application/vnd.ms-wmdrm.meter-resp": {
            source: "iana"
          },
          "application/vnd.ms-word.document.macroenabled.12": {
            source: "iana",
            extensions: ["docm"]
          },
          "application/vnd.ms-word.template.macroenabled.12": {
            source: "iana",
            extensions: ["dotm"]
          },
          "application/vnd.ms-works": {
            source: "iana",
            extensions: ["wps", "wks", "wcm", "wdb"]
          },
          "application/vnd.ms-wpl": {
            source: "iana",
            extensions: ["wpl"]
          },
          "application/vnd.ms-xpsdocument": {
            source: "iana",
            compressible: false,
            extensions: ["xps"]
          },
          "application/vnd.msa-disk-image": {
            source: "iana"
          },
          "application/vnd.mseq": {
            source: "iana",
            extensions: ["mseq"]
          },
          "application/vnd.msign": {
            source: "iana"
          },
          "application/vnd.multiad.creator": {
            source: "iana"
          },
          "application/vnd.multiad.creator.cif": {
            source: "iana"
          },
          "application/vnd.music-niff": {
            source: "iana"
          },
          "application/vnd.musician": {
            source: "iana",
            extensions: ["mus"]
          },
          "application/vnd.muvee.style": {
            source: "iana",
            extensions: ["msty"]
          },
          "application/vnd.mynfc": {
            source: "iana",
            extensions: ["taglet"]
          },
          "application/vnd.nacamar.ybrid+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.ncd.control": {
            source: "iana"
          },
          "application/vnd.ncd.reference": {
            source: "iana"
          },
          "application/vnd.nearst.inv+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.nebumind.line": {
            source: "iana"
          },
          "application/vnd.nervana": {
            source: "iana"
          },
          "application/vnd.netfpx": {
            source: "iana"
          },
          "application/vnd.neurolanguage.nlu": {
            source: "iana",
            extensions: ["nlu"]
          },
          "application/vnd.nimn": {
            source: "iana"
          },
          "application/vnd.nintendo.nitro.rom": {
            source: "iana"
          },
          "application/vnd.nintendo.snes.rom": {
            source: "iana"
          },
          "application/vnd.nitf": {
            source: "iana",
            extensions: ["ntf", "nitf"]
          },
          "application/vnd.noblenet-directory": {
            source: "iana",
            extensions: ["nnd"]
          },
          "application/vnd.noblenet-sealer": {
            source: "iana",
            extensions: ["nns"]
          },
          "application/vnd.noblenet-web": {
            source: "iana",
            extensions: ["nnw"]
          },
          "application/vnd.nokia.catalogs": {
            source: "iana"
          },
          "application/vnd.nokia.conml+wbxml": {
            source: "iana"
          },
          "application/vnd.nokia.conml+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.nokia.iptv.config+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.nokia.isds-radio-presets": {
            source: "iana"
          },
          "application/vnd.nokia.landmark+wbxml": {
            source: "iana"
          },
          "application/vnd.nokia.landmark+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.nokia.landmarkcollection+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.nokia.n-gage.ac+xml": {
            source: "iana",
            compressible: true,
            extensions: ["ac"]
          },
          "application/vnd.nokia.n-gage.data": {
            source: "iana",
            extensions: ["ngdat"]
          },
          "application/vnd.nokia.n-gage.symbian.install": {
            source: "iana",
            extensions: ["n-gage"]
          },
          "application/vnd.nokia.ncd": {
            source: "iana"
          },
          "application/vnd.nokia.pcd+wbxml": {
            source: "iana"
          },
          "application/vnd.nokia.pcd+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.nokia.radio-preset": {
            source: "iana",
            extensions: ["rpst"]
          },
          "application/vnd.nokia.radio-presets": {
            source: "iana",
            extensions: ["rpss"]
          },
          "application/vnd.novadigm.edm": {
            source: "iana",
            extensions: ["edm"]
          },
          "application/vnd.novadigm.edx": {
            source: "iana",
            extensions: ["edx"]
          },
          "application/vnd.novadigm.ext": {
            source: "iana",
            extensions: ["ext"]
          },
          "application/vnd.ntt-local.content-share": {
            source: "iana"
          },
          "application/vnd.ntt-local.file-transfer": {
            source: "iana"
          },
          "application/vnd.ntt-local.ogw_remote-access": {
            source: "iana"
          },
          "application/vnd.ntt-local.sip-ta_remote": {
            source: "iana"
          },
          "application/vnd.ntt-local.sip-ta_tcp_stream": {
            source: "iana"
          },
          "application/vnd.oasis.opendocument.chart": {
            source: "iana",
            extensions: ["odc"]
          },
          "application/vnd.oasis.opendocument.chart-template": {
            source: "iana",
            extensions: ["otc"]
          },
          "application/vnd.oasis.opendocument.database": {
            source: "iana",
            extensions: ["odb"]
          },
          "application/vnd.oasis.opendocument.formula": {
            source: "iana",
            extensions: ["odf"]
          },
          "application/vnd.oasis.opendocument.formula-template": {
            source: "iana",
            extensions: ["odft"]
          },
          "application/vnd.oasis.opendocument.graphics": {
            source: "iana",
            compressible: false,
            extensions: ["odg"]
          },
          "application/vnd.oasis.opendocument.graphics-template": {
            source: "iana",
            extensions: ["otg"]
          },
          "application/vnd.oasis.opendocument.image": {
            source: "iana",
            extensions: ["odi"]
          },
          "application/vnd.oasis.opendocument.image-template": {
            source: "iana",
            extensions: ["oti"]
          },
          "application/vnd.oasis.opendocument.presentation": {
            source: "iana",
            compressible: false,
            extensions: ["odp"]
          },
          "application/vnd.oasis.opendocument.presentation-template": {
            source: "iana",
            extensions: ["otp"]
          },
          "application/vnd.oasis.opendocument.spreadsheet": {
            source: "iana",
            compressible: false,
            extensions: ["ods"]
          },
          "application/vnd.oasis.opendocument.spreadsheet-template": {
            source: "iana",
            extensions: ["ots"]
          },
          "application/vnd.oasis.opendocument.text": {
            source: "iana",
            compressible: false,
            extensions: ["odt"]
          },
          "application/vnd.oasis.opendocument.text-master": {
            source: "iana",
            extensions: ["odm"]
          },
          "application/vnd.oasis.opendocument.text-template": {
            source: "iana",
            extensions: ["ott"]
          },
          "application/vnd.oasis.opendocument.text-web": {
            source: "iana",
            extensions: ["oth"]
          },
          "application/vnd.obn": {
            source: "iana"
          },
          "application/vnd.ocf+cbor": {
            source: "iana"
          },
          "application/vnd.oci.image.manifest.v1+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oftn.l10n+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oipf.contentaccessdownload+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oipf.contentaccessstreaming+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oipf.cspg-hexbinary": {
            source: "iana"
          },
          "application/vnd.oipf.dae.svg+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oipf.dae.xhtml+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oipf.mippvcontrolmessage+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oipf.pae.gem": {
            source: "iana"
          },
          "application/vnd.oipf.spdiscovery+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oipf.spdlist+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oipf.ueprofile+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oipf.userprofile+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.olpc-sugar": {
            source: "iana",
            extensions: ["xo"]
          },
          "application/vnd.oma-scws-config": {
            source: "iana"
          },
          "application/vnd.oma-scws-http-request": {
            source: "iana"
          },
          "application/vnd.oma-scws-http-response": {
            source: "iana"
          },
          "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.bcast.drm-trigger+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.bcast.imd+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.bcast.ltkm": {
            source: "iana"
          },
          "application/vnd.oma.bcast.notification+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.bcast.provisioningtrigger": {
            source: "iana"
          },
          "application/vnd.oma.bcast.sgboot": {
            source: "iana"
          },
          "application/vnd.oma.bcast.sgdd+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.bcast.sgdu": {
            source: "iana"
          },
          "application/vnd.oma.bcast.simple-symbol-container": {
            source: "iana"
          },
          "application/vnd.oma.bcast.smartcard-trigger+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.bcast.sprov+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.bcast.stkm": {
            source: "iana"
          },
          "application/vnd.oma.cab-address-book+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.cab-feature-handler+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.cab-pcc+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.cab-subs-invite+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.cab-user-prefs+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.dcd": {
            source: "iana"
          },
          "application/vnd.oma.dcdc": {
            source: "iana"
          },
          "application/vnd.oma.dd2+xml": {
            source: "iana",
            compressible: true,
            extensions: ["dd2"]
          },
          "application/vnd.oma.drm.risd+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.group-usage-list+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.lwm2m+cbor": {
            source: "iana"
          },
          "application/vnd.oma.lwm2m+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.lwm2m+tlv": {
            source: "iana"
          },
          "application/vnd.oma.pal+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.poc.detailed-progress-report+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.poc.final-report+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.poc.groups+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.poc.invocation-descriptor+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.poc.optimized-progress-report+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.push": {
            source: "iana"
          },
          "application/vnd.oma.scidm.messages+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oma.xcap-directory+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.omads-email+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/vnd.omads-file+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/vnd.omads-folder+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/vnd.omaloc-supl-init": {
            source: "iana"
          },
          "application/vnd.onepager": {
            source: "iana"
          },
          "application/vnd.onepagertamp": {
            source: "iana"
          },
          "application/vnd.onepagertamx": {
            source: "iana"
          },
          "application/vnd.onepagertat": {
            source: "iana"
          },
          "application/vnd.onepagertatp": {
            source: "iana"
          },
          "application/vnd.onepagertatx": {
            source: "iana"
          },
          "application/vnd.openblox.game+xml": {
            source: "iana",
            compressible: true,
            extensions: ["obgx"]
          },
          "application/vnd.openblox.game-binary": {
            source: "iana"
          },
          "application/vnd.openeye.oeb": {
            source: "iana"
          },
          "application/vnd.openofficeorg.extension": {
            source: "apache",
            extensions: ["oxt"]
          },
          "application/vnd.openstreetmap.data+xml": {
            source: "iana",
            compressible: true,
            extensions: ["osm"]
          },
          "application/vnd.opentimestamps.ots": {
            source: "iana"
          },
          "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.drawing+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
            source: "iana",
            compressible: false,
            extensions: ["pptx"]
          },
          "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.slide": {
            source: "iana",
            extensions: ["sldx"]
          },
          "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
            source: "iana",
            extensions: ["ppsx"]
          },
          "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.template": {
            source: "iana",
            extensions: ["potx"]
          },
          "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
            source: "iana",
            compressible: false,
            extensions: ["xlsx"]
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
            source: "iana",
            extensions: ["xltx"]
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.theme+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.vmldrawing": {
            source: "iana"
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
            source: "iana",
            compressible: false,
            extensions: ["docx"]
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
            source: "iana",
            extensions: ["dotx"]
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-package.core-properties+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.openxmlformats-package.relationships+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oracle.resource+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.orange.indata": {
            source: "iana"
          },
          "application/vnd.osa.netdeploy": {
            source: "iana"
          },
          "application/vnd.osgeo.mapguide.package": {
            source: "iana",
            extensions: ["mgp"]
          },
          "application/vnd.osgi.bundle": {
            source: "iana"
          },
          "application/vnd.osgi.dp": {
            source: "iana",
            extensions: ["dp"]
          },
          "application/vnd.osgi.subsystem": {
            source: "iana",
            extensions: ["esa"]
          },
          "application/vnd.otps.ct-kip+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.oxli.countgraph": {
            source: "iana"
          },
          "application/vnd.pagerduty+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.palm": {
            source: "iana",
            extensions: ["pdb", "pqa", "oprc"]
          },
          "application/vnd.panoply": {
            source: "iana"
          },
          "application/vnd.paos.xml": {
            source: "iana"
          },
          "application/vnd.patentdive": {
            source: "iana"
          },
          "application/vnd.patientecommsdoc": {
            source: "iana"
          },
          "application/vnd.pawaafile": {
            source: "iana",
            extensions: ["paw"]
          },
          "application/vnd.pcos": {
            source: "iana"
          },
          "application/vnd.pg.format": {
            source: "iana",
            extensions: ["str"]
          },
          "application/vnd.pg.osasli": {
            source: "iana",
            extensions: ["ei6"]
          },
          "application/vnd.piaccess.application-licence": {
            source: "iana"
          },
          "application/vnd.picsel": {
            source: "iana",
            extensions: ["efif"]
          },
          "application/vnd.pmi.widget": {
            source: "iana",
            extensions: ["wg"]
          },
          "application/vnd.poc.group-advertisement+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.pocketlearn": {
            source: "iana",
            extensions: ["plf"]
          },
          "application/vnd.powerbuilder6": {
            source: "iana",
            extensions: ["pbd"]
          },
          "application/vnd.powerbuilder6-s": {
            source: "iana"
          },
          "application/vnd.powerbuilder7": {
            source: "iana"
          },
          "application/vnd.powerbuilder7-s": {
            source: "iana"
          },
          "application/vnd.powerbuilder75": {
            source: "iana"
          },
          "application/vnd.powerbuilder75-s": {
            source: "iana"
          },
          "application/vnd.preminet": {
            source: "iana"
          },
          "application/vnd.previewsystems.box": {
            source: "iana",
            extensions: ["box"]
          },
          "application/vnd.proteus.magazine": {
            source: "iana",
            extensions: ["mgz"]
          },
          "application/vnd.psfs": {
            source: "iana"
          },
          "application/vnd.publishare-delta-tree": {
            source: "iana",
            extensions: ["qps"]
          },
          "application/vnd.pvi.ptid1": {
            source: "iana",
            extensions: ["ptid"]
          },
          "application/vnd.pwg-multiplexed": {
            source: "iana"
          },
          "application/vnd.pwg-xhtml-print+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.qualcomm.brew-app-res": {
            source: "iana"
          },
          "application/vnd.quarantainenet": {
            source: "iana"
          },
          "application/vnd.quark.quarkxpress": {
            source: "iana",
            extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
          },
          "application/vnd.quobject-quoxdocument": {
            source: "iana"
          },
          "application/vnd.radisys.moml+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-audit+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-audit-conf+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-audit-conn+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-audit-dialog+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-audit-stream+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-conf+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-dialog+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-dialog-base+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-dialog-fax-detect+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-dialog-group+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-dialog-speech+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.radisys.msml-dialog-transform+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.rainstor.data": {
            source: "iana"
          },
          "application/vnd.rapid": {
            source: "iana"
          },
          "application/vnd.rar": {
            source: "iana",
            extensions: ["rar"]
          },
          "application/vnd.realvnc.bed": {
            source: "iana",
            extensions: ["bed"]
          },
          "application/vnd.recordare.musicxml": {
            source: "iana",
            extensions: ["mxl"]
          },
          "application/vnd.recordare.musicxml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["musicxml"]
          },
          "application/vnd.renlearn.rlprint": {
            source: "iana"
          },
          "application/vnd.resilient.logic": {
            source: "iana"
          },
          "application/vnd.restful+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.rig.cryptonote": {
            source: "iana",
            extensions: ["cryptonote"]
          },
          "application/vnd.rim.cod": {
            source: "apache",
            extensions: ["cod"]
          },
          "application/vnd.rn-realmedia": {
            source: "apache",
            extensions: ["rm"]
          },
          "application/vnd.rn-realmedia-vbr": {
            source: "apache",
            extensions: ["rmvb"]
          },
          "application/vnd.route66.link66+xml": {
            source: "iana",
            compressible: true,
            extensions: ["link66"]
          },
          "application/vnd.rs-274x": {
            source: "iana"
          },
          "application/vnd.ruckus.download": {
            source: "iana"
          },
          "application/vnd.s3sms": {
            source: "iana"
          },
          "application/vnd.sailingtracker.track": {
            source: "iana",
            extensions: ["st"]
          },
          "application/vnd.sar": {
            source: "iana"
          },
          "application/vnd.sbm.cid": {
            source: "iana"
          },
          "application/vnd.sbm.mid2": {
            source: "iana"
          },
          "application/vnd.scribus": {
            source: "iana"
          },
          "application/vnd.sealed.3df": {
            source: "iana"
          },
          "application/vnd.sealed.csf": {
            source: "iana"
          },
          "application/vnd.sealed.doc": {
            source: "iana"
          },
          "application/vnd.sealed.eml": {
            source: "iana"
          },
          "application/vnd.sealed.mht": {
            source: "iana"
          },
          "application/vnd.sealed.net": {
            source: "iana"
          },
          "application/vnd.sealed.ppt": {
            source: "iana"
          },
          "application/vnd.sealed.tiff": {
            source: "iana"
          },
          "application/vnd.sealed.xls": {
            source: "iana"
          },
          "application/vnd.sealedmedia.softseal.html": {
            source: "iana"
          },
          "application/vnd.sealedmedia.softseal.pdf": {
            source: "iana"
          },
          "application/vnd.seemail": {
            source: "iana",
            extensions: ["see"]
          },
          "application/vnd.seis+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.sema": {
            source: "iana",
            extensions: ["sema"]
          },
          "application/vnd.semd": {
            source: "iana",
            extensions: ["semd"]
          },
          "application/vnd.semf": {
            source: "iana",
            extensions: ["semf"]
          },
          "application/vnd.shade-save-file": {
            source: "iana"
          },
          "application/vnd.shana.informed.formdata": {
            source: "iana",
            extensions: ["ifm"]
          },
          "application/vnd.shana.informed.formtemplate": {
            source: "iana",
            extensions: ["itp"]
          },
          "application/vnd.shana.informed.interchange": {
            source: "iana",
            extensions: ["iif"]
          },
          "application/vnd.shana.informed.package": {
            source: "iana",
            extensions: ["ipk"]
          },
          "application/vnd.shootproof+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.shopkick+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.shp": {
            source: "iana"
          },
          "application/vnd.shx": {
            source: "iana"
          },
          "application/vnd.sigrok.session": {
            source: "iana"
          },
          "application/vnd.simtech-mindmapper": {
            source: "iana",
            extensions: ["twd", "twds"]
          },
          "application/vnd.siren+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.smaf": {
            source: "iana",
            extensions: ["mmf"]
          },
          "application/vnd.smart.notebook": {
            source: "iana"
          },
          "application/vnd.smart.teacher": {
            source: "iana",
            extensions: ["teacher"]
          },
          "application/vnd.snesdev-page-table": {
            source: "iana"
          },
          "application/vnd.software602.filler.form+xml": {
            source: "iana",
            compressible: true,
            extensions: ["fo"]
          },
          "application/vnd.software602.filler.form-xml-zip": {
            source: "iana"
          },
          "application/vnd.solent.sdkm+xml": {
            source: "iana",
            compressible: true,
            extensions: ["sdkm", "sdkd"]
          },
          "application/vnd.spotfire.dxp": {
            source: "iana",
            extensions: ["dxp"]
          },
          "application/vnd.spotfire.sfs": {
            source: "iana",
            extensions: ["sfs"]
          },
          "application/vnd.sqlite3": {
            source: "iana"
          },
          "application/vnd.sss-cod": {
            source: "iana"
          },
          "application/vnd.sss-dtf": {
            source: "iana"
          },
          "application/vnd.sss-ntf": {
            source: "iana"
          },
          "application/vnd.stardivision.calc": {
            source: "apache",
            extensions: ["sdc"]
          },
          "application/vnd.stardivision.draw": {
            source: "apache",
            extensions: ["sda"]
          },
          "application/vnd.stardivision.impress": {
            source: "apache",
            extensions: ["sdd"]
          },
          "application/vnd.stardivision.math": {
            source: "apache",
            extensions: ["smf"]
          },
          "application/vnd.stardivision.writer": {
            source: "apache",
            extensions: ["sdw", "vor"]
          },
          "application/vnd.stardivision.writer-global": {
            source: "apache",
            extensions: ["sgl"]
          },
          "application/vnd.stepmania.package": {
            source: "iana",
            extensions: ["smzip"]
          },
          "application/vnd.stepmania.stepchart": {
            source: "iana",
            extensions: ["sm"]
          },
          "application/vnd.street-stream": {
            source: "iana"
          },
          "application/vnd.sun.wadl+xml": {
            source: "iana",
            compressible: true,
            extensions: ["wadl"]
          },
          "application/vnd.sun.xml.calc": {
            source: "apache",
            extensions: ["sxc"]
          },
          "application/vnd.sun.xml.calc.template": {
            source: "apache",
            extensions: ["stc"]
          },
          "application/vnd.sun.xml.draw": {
            source: "apache",
            extensions: ["sxd"]
          },
          "application/vnd.sun.xml.draw.template": {
            source: "apache",
            extensions: ["std"]
          },
          "application/vnd.sun.xml.impress": {
            source: "apache",
            extensions: ["sxi"]
          },
          "application/vnd.sun.xml.impress.template": {
            source: "apache",
            extensions: ["sti"]
          },
          "application/vnd.sun.xml.math": {
            source: "apache",
            extensions: ["sxm"]
          },
          "application/vnd.sun.xml.writer": {
            source: "apache",
            extensions: ["sxw"]
          },
          "application/vnd.sun.xml.writer.global": {
            source: "apache",
            extensions: ["sxg"]
          },
          "application/vnd.sun.xml.writer.template": {
            source: "apache",
            extensions: ["stw"]
          },
          "application/vnd.sus-calendar": {
            source: "iana",
            extensions: ["sus", "susp"]
          },
          "application/vnd.svd": {
            source: "iana",
            extensions: ["svd"]
          },
          "application/vnd.swiftview-ics": {
            source: "iana"
          },
          "application/vnd.sycle+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.syft+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.symbian.install": {
            source: "apache",
            extensions: ["sis", "sisx"]
          },
          "application/vnd.syncml+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true,
            extensions: ["xsm"]
          },
          "application/vnd.syncml.dm+wbxml": {
            source: "iana",
            charset: "UTF-8",
            extensions: ["bdm"]
          },
          "application/vnd.syncml.dm+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true,
            extensions: ["xdm"]
          },
          "application/vnd.syncml.dm.notification": {
            source: "iana"
          },
          "application/vnd.syncml.dmddf+wbxml": {
            source: "iana"
          },
          "application/vnd.syncml.dmddf+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true,
            extensions: ["ddf"]
          },
          "application/vnd.syncml.dmtnds+wbxml": {
            source: "iana"
          },
          "application/vnd.syncml.dmtnds+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: true
          },
          "application/vnd.syncml.ds.notification": {
            source: "iana"
          },
          "application/vnd.tableschema+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.tao.intent-module-archive": {
            source: "iana",
            extensions: ["tao"]
          },
          "application/vnd.tcpdump.pcap": {
            source: "iana",
            extensions: ["pcap", "cap", "dmp"]
          },
          "application/vnd.think-cell.ppttc+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.tmd.mediaflex.api+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.tml": {
            source: "iana"
          },
          "application/vnd.tmobile-livetv": {
            source: "iana",
            extensions: ["tmo"]
          },
          "application/vnd.tri.onesource": {
            source: "iana"
          },
          "application/vnd.trid.tpt": {
            source: "iana",
            extensions: ["tpt"]
          },
          "application/vnd.triscape.mxs": {
            source: "iana",
            extensions: ["mxs"]
          },
          "application/vnd.trueapp": {
            source: "iana",
            extensions: ["tra"]
          },
          "application/vnd.truedoc": {
            source: "iana"
          },
          "application/vnd.ubisoft.webplayer": {
            source: "iana"
          },
          "application/vnd.ufdl": {
            source: "iana",
            extensions: ["ufd", "ufdl"]
          },
          "application/vnd.uiq.theme": {
            source: "iana",
            extensions: ["utz"]
          },
          "application/vnd.umajin": {
            source: "iana",
            extensions: ["umj"]
          },
          "application/vnd.unity": {
            source: "iana",
            extensions: ["unityweb"]
          },
          "application/vnd.uoml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["uoml"]
          },
          "application/vnd.uplanet.alert": {
            source: "iana"
          },
          "application/vnd.uplanet.alert-wbxml": {
            source: "iana"
          },
          "application/vnd.uplanet.bearer-choice": {
            source: "iana"
          },
          "application/vnd.uplanet.bearer-choice-wbxml": {
            source: "iana"
          },
          "application/vnd.uplanet.cacheop": {
            source: "iana"
          },
          "application/vnd.uplanet.cacheop-wbxml": {
            source: "iana"
          },
          "application/vnd.uplanet.channel": {
            source: "iana"
          },
          "application/vnd.uplanet.channel-wbxml": {
            source: "iana"
          },
          "application/vnd.uplanet.list": {
            source: "iana"
          },
          "application/vnd.uplanet.list-wbxml": {
            source: "iana"
          },
          "application/vnd.uplanet.listcmd": {
            source: "iana"
          },
          "application/vnd.uplanet.listcmd-wbxml": {
            source: "iana"
          },
          "application/vnd.uplanet.signal": {
            source: "iana"
          },
          "application/vnd.uri-map": {
            source: "iana"
          },
          "application/vnd.valve.source.material": {
            source: "iana"
          },
          "application/vnd.vcx": {
            source: "iana",
            extensions: ["vcx"]
          },
          "application/vnd.vd-study": {
            source: "iana"
          },
          "application/vnd.vectorworks": {
            source: "iana"
          },
          "application/vnd.vel+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.verimatrix.vcas": {
            source: "iana"
          },
          "application/vnd.veritone.aion+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.veryant.thin": {
            source: "iana"
          },
          "application/vnd.ves.encrypted": {
            source: "iana"
          },
          "application/vnd.vidsoft.vidconference": {
            source: "iana"
          },
          "application/vnd.visio": {
            source: "iana",
            extensions: ["vsd", "vst", "vss", "vsw"]
          },
          "application/vnd.visionary": {
            source: "iana",
            extensions: ["vis"]
          },
          "application/vnd.vividence.scriptfile": {
            source: "iana"
          },
          "application/vnd.vsf": {
            source: "iana",
            extensions: ["vsf"]
          },
          "application/vnd.wap.sic": {
            source: "iana"
          },
          "application/vnd.wap.slc": {
            source: "iana"
          },
          "application/vnd.wap.wbxml": {
            source: "iana",
            charset: "UTF-8",
            extensions: ["wbxml"]
          },
          "application/vnd.wap.wmlc": {
            source: "iana",
            extensions: ["wmlc"]
          },
          "application/vnd.wap.wmlscriptc": {
            source: "iana",
            extensions: ["wmlsc"]
          },
          "application/vnd.webturbo": {
            source: "iana",
            extensions: ["wtb"]
          },
          "application/vnd.wfa.dpp": {
            source: "iana"
          },
          "application/vnd.wfa.p2p": {
            source: "iana"
          },
          "application/vnd.wfa.wsc": {
            source: "iana"
          },
          "application/vnd.windows.devicepairing": {
            source: "iana"
          },
          "application/vnd.wmc": {
            source: "iana"
          },
          "application/vnd.wmf.bootstrap": {
            source: "iana"
          },
          "application/vnd.wolfram.mathematica": {
            source: "iana"
          },
          "application/vnd.wolfram.mathematica.package": {
            source: "iana"
          },
          "application/vnd.wolfram.player": {
            source: "iana",
            extensions: ["nbp"]
          },
          "application/vnd.wordperfect": {
            source: "iana",
            extensions: ["wpd"]
          },
          "application/vnd.wqd": {
            source: "iana",
            extensions: ["wqd"]
          },
          "application/vnd.wrq-hp3000-labelled": {
            source: "iana"
          },
          "application/vnd.wt.stf": {
            source: "iana",
            extensions: ["stf"]
          },
          "application/vnd.wv.csp+wbxml": {
            source: "iana"
          },
          "application/vnd.wv.csp+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.wv.ssp+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.xacml+json": {
            source: "iana",
            compressible: true
          },
          "application/vnd.xara": {
            source: "iana",
            extensions: ["xar"]
          },
          "application/vnd.xfdl": {
            source: "iana",
            extensions: ["xfdl"]
          },
          "application/vnd.xfdl.webform": {
            source: "iana"
          },
          "application/vnd.xmi+xml": {
            source: "iana",
            compressible: true
          },
          "application/vnd.xmpie.cpkg": {
            source: "iana"
          },
          "application/vnd.xmpie.dpkg": {
            source: "iana"
          },
          "application/vnd.xmpie.plan": {
            source: "iana"
          },
          "application/vnd.xmpie.ppkg": {
            source: "iana"
          },
          "application/vnd.xmpie.xlim": {
            source: "iana"
          },
          "application/vnd.yamaha.hv-dic": {
            source: "iana",
            extensions: ["hvd"]
          },
          "application/vnd.yamaha.hv-script": {
            source: "iana",
            extensions: ["hvs"]
          },
          "application/vnd.yamaha.hv-voice": {
            source: "iana",
            extensions: ["hvp"]
          },
          "application/vnd.yamaha.openscoreformat": {
            source: "iana",
            extensions: ["osf"]
          },
          "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
            source: "iana",
            compressible: true,
            extensions: ["osfpvg"]
          },
          "application/vnd.yamaha.remote-setup": {
            source: "iana"
          },
          "application/vnd.yamaha.smaf-audio": {
            source: "iana",
            extensions: ["saf"]
          },
          "application/vnd.yamaha.smaf-phrase": {
            source: "iana",
            extensions: ["spf"]
          },
          "application/vnd.yamaha.through-ngn": {
            source: "iana"
          },
          "application/vnd.yamaha.tunnel-udpencap": {
            source: "iana"
          },
          "application/vnd.yaoweme": {
            source: "iana"
          },
          "application/vnd.yellowriver-custom-menu": {
            source: "iana",
            extensions: ["cmp"]
          },
          "application/vnd.youtube.yt": {
            source: "iana"
          },
          "application/vnd.zul": {
            source: "iana",
            extensions: ["zir", "zirz"]
          },
          "application/vnd.zzazz.deck+xml": {
            source: "iana",
            compressible: true,
            extensions: ["zaz"]
          },
          "application/voicexml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["vxml"]
          },
          "application/voucher-cms+json": {
            source: "iana",
            compressible: true
          },
          "application/vq-rtcpxr": {
            source: "iana"
          },
          "application/wasm": {
            source: "iana",
            compressible: true,
            extensions: ["wasm"]
          },
          "application/watcherinfo+xml": {
            source: "iana",
            compressible: true,
            extensions: ["wif"]
          },
          "application/webpush-options+json": {
            source: "iana",
            compressible: true
          },
          "application/whoispp-query": {
            source: "iana"
          },
          "application/whoispp-response": {
            source: "iana"
          },
          "application/widget": {
            source: "iana",
            extensions: ["wgt"]
          },
          "application/winhlp": {
            source: "apache",
            extensions: ["hlp"]
          },
          "application/wita": {
            source: "iana"
          },
          "application/wordperfect5.1": {
            source: "iana"
          },
          "application/wsdl+xml": {
            source: "iana",
            compressible: true,
            extensions: ["wsdl"]
          },
          "application/wspolicy+xml": {
            source: "iana",
            compressible: true,
            extensions: ["wspolicy"]
          },
          "application/x-7z-compressed": {
            source: "apache",
            compressible: false,
            extensions: ["7z"]
          },
          "application/x-abiword": {
            source: "apache",
            extensions: ["abw"]
          },
          "application/x-ace-compressed": {
            source: "apache",
            extensions: ["ace"]
          },
          "application/x-amf": {
            source: "apache"
          },
          "application/x-apple-diskimage": {
            source: "apache",
            extensions: ["dmg"]
          },
          "application/x-arj": {
            compressible: false,
            extensions: ["arj"]
          },
          "application/x-authorware-bin": {
            source: "apache",
            extensions: ["aab", "x32", "u32", "vox"]
          },
          "application/x-authorware-map": {
            source: "apache",
            extensions: ["aam"]
          },
          "application/x-authorware-seg": {
            source: "apache",
            extensions: ["aas"]
          },
          "application/x-bcpio": {
            source: "apache",
            extensions: ["bcpio"]
          },
          "application/x-bdoc": {
            compressible: false,
            extensions: ["bdoc"]
          },
          "application/x-bittorrent": {
            source: "apache",
            extensions: ["torrent"]
          },
          "application/x-blorb": {
            source: "apache",
            extensions: ["blb", "blorb"]
          },
          "application/x-bzip": {
            source: "apache",
            compressible: false,
            extensions: ["bz"]
          },
          "application/x-bzip2": {
            source: "apache",
            compressible: false,
            extensions: ["bz2", "boz"]
          },
          "application/x-cbr": {
            source: "apache",
            extensions: ["cbr", "cba", "cbt", "cbz", "cb7"]
          },
          "application/x-cdlink": {
            source: "apache",
            extensions: ["vcd"]
          },
          "application/x-cfs-compressed": {
            source: "apache",
            extensions: ["cfs"]
          },
          "application/x-chat": {
            source: "apache",
            extensions: ["chat"]
          },
          "application/x-chess-pgn": {
            source: "apache",
            extensions: ["pgn"]
          },
          "application/x-chrome-extension": {
            extensions: ["crx"]
          },
          "application/x-cocoa": {
            source: "nginx",
            extensions: ["cco"]
          },
          "application/x-compress": {
            source: "apache"
          },
          "application/x-conference": {
            source: "apache",
            extensions: ["nsc"]
          },
          "application/x-cpio": {
            source: "apache",
            extensions: ["cpio"]
          },
          "application/x-csh": {
            source: "apache",
            extensions: ["csh"]
          },
          "application/x-deb": {
            compressible: false
          },
          "application/x-debian-package": {
            source: "apache",
            extensions: ["deb", "udeb"]
          },
          "application/x-dgc-compressed": {
            source: "apache",
            extensions: ["dgc"]
          },
          "application/x-director": {
            source: "apache",
            extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"]
          },
          "application/x-doom": {
            source: "apache",
            extensions: ["wad"]
          },
          "application/x-dtbncx+xml": {
            source: "apache",
            compressible: true,
            extensions: ["ncx"]
          },
          "application/x-dtbook+xml": {
            source: "apache",
            compressible: true,
            extensions: ["dtb"]
          },
          "application/x-dtbresource+xml": {
            source: "apache",
            compressible: true,
            extensions: ["res"]
          },
          "application/x-dvi": {
            source: "apache",
            compressible: false,
            extensions: ["dvi"]
          },
          "application/x-envoy": {
            source: "apache",
            extensions: ["evy"]
          },
          "application/x-eva": {
            source: "apache",
            extensions: ["eva"]
          },
          "application/x-font-bdf": {
            source: "apache",
            extensions: ["bdf"]
          },
          "application/x-font-dos": {
            source: "apache"
          },
          "application/x-font-framemaker": {
            source: "apache"
          },
          "application/x-font-ghostscript": {
            source: "apache",
            extensions: ["gsf"]
          },
          "application/x-font-libgrx": {
            source: "apache"
          },
          "application/x-font-linux-psf": {
            source: "apache",
            extensions: ["psf"]
          },
          "application/x-font-pcf": {
            source: "apache",
            extensions: ["pcf"]
          },
          "application/x-font-snf": {
            source: "apache",
            extensions: ["snf"]
          },
          "application/x-font-speedo": {
            source: "apache"
          },
          "application/x-font-sunos-news": {
            source: "apache"
          },
          "application/x-font-type1": {
            source: "apache",
            extensions: ["pfa", "pfb", "pfm", "afm"]
          },
          "application/x-font-vfont": {
            source: "apache"
          },
          "application/x-freearc": {
            source: "apache",
            extensions: ["arc"]
          },
          "application/x-futuresplash": {
            source: "apache",
            extensions: ["spl"]
          },
          "application/x-gca-compressed": {
            source: "apache",
            extensions: ["gca"]
          },
          "application/x-glulx": {
            source: "apache",
            extensions: ["ulx"]
          },
          "application/x-gnumeric": {
            source: "apache",
            extensions: ["gnumeric"]
          },
          "application/x-gramps-xml": {
            source: "apache",
            extensions: ["gramps"]
          },
          "application/x-gtar": {
            source: "apache",
            extensions: ["gtar"]
          },
          "application/x-gzip": {
            source: "apache"
          },
          "application/x-hdf": {
            source: "apache",
            extensions: ["hdf"]
          },
          "application/x-httpd-php": {
            compressible: true,
            extensions: ["php"]
          },
          "application/x-install-instructions": {
            source: "apache",
            extensions: ["install"]
          },
          "application/x-iso9660-image": {
            source: "apache",
            extensions: ["iso"]
          },
          "application/x-iwork-keynote-sffkey": {
            extensions: ["key"]
          },
          "application/x-iwork-numbers-sffnumbers": {
            extensions: ["numbers"]
          },
          "application/x-iwork-pages-sffpages": {
            extensions: ["pages"]
          },
          "application/x-java-archive-diff": {
            source: "nginx",
            extensions: ["jardiff"]
          },
          "application/x-java-jnlp-file": {
            source: "apache",
            compressible: false,
            extensions: ["jnlp"]
          },
          "application/x-javascript": {
            compressible: true
          },
          "application/x-keepass2": {
            extensions: ["kdbx"]
          },
          "application/x-latex": {
            source: "apache",
            compressible: false,
            extensions: ["latex"]
          },
          "application/x-lua-bytecode": {
            extensions: ["luac"]
          },
          "application/x-lzh-compressed": {
            source: "apache",
            extensions: ["lzh", "lha"]
          },
          "application/x-makeself": {
            source: "nginx",
            extensions: ["run"]
          },
          "application/x-mie": {
            source: "apache",
            extensions: ["mie"]
          },
          "application/x-mobipocket-ebook": {
            source: "apache",
            extensions: ["prc", "mobi"]
          },
          "application/x-mpegurl": {
            compressible: false
          },
          "application/x-ms-application": {
            source: "apache",
            extensions: ["application"]
          },
          "application/x-ms-shortcut": {
            source: "apache",
            extensions: ["lnk"]
          },
          "application/x-ms-wmd": {
            source: "apache",
            extensions: ["wmd"]
          },
          "application/x-ms-wmz": {
            source: "apache",
            extensions: ["wmz"]
          },
          "application/x-ms-xbap": {
            source: "apache",
            extensions: ["xbap"]
          },
          "application/x-msaccess": {
            source: "apache",
            extensions: ["mdb"]
          },
          "application/x-msbinder": {
            source: "apache",
            extensions: ["obd"]
          },
          "application/x-mscardfile": {
            source: "apache",
            extensions: ["crd"]
          },
          "application/x-msclip": {
            source: "apache",
            extensions: ["clp"]
          },
          "application/x-msdos-program": {
            extensions: ["exe"]
          },
          "application/x-msdownload": {
            source: "apache",
            extensions: ["exe", "dll", "com", "bat", "msi"]
          },
          "application/x-msmediaview": {
            source: "apache",
            extensions: ["mvb", "m13", "m14"]
          },
          "application/x-msmetafile": {
            source: "apache",
            extensions: ["wmf", "wmz", "emf", "emz"]
          },
          "application/x-msmoney": {
            source: "apache",
            extensions: ["mny"]
          },
          "application/x-mspublisher": {
            source: "apache",
            extensions: ["pub"]
          },
          "application/x-msschedule": {
            source: "apache",
            extensions: ["scd"]
          },
          "application/x-msterminal": {
            source: "apache",
            extensions: ["trm"]
          },
          "application/x-mswrite": {
            source: "apache",
            extensions: ["wri"]
          },
          "application/x-netcdf": {
            source: "apache",
            extensions: ["nc", "cdf"]
          },
          "application/x-ns-proxy-autoconfig": {
            compressible: true,
            extensions: ["pac"]
          },
          "application/x-nzb": {
            source: "apache",
            extensions: ["nzb"]
          },
          "application/x-perl": {
            source: "nginx",
            extensions: ["pl", "pm"]
          },
          "application/x-pilot": {
            source: "nginx",
            extensions: ["prc", "pdb"]
          },
          "application/x-pkcs12": {
            source: "apache",
            compressible: false,
            extensions: ["p12", "pfx"]
          },
          "application/x-pkcs7-certificates": {
            source: "apache",
            extensions: ["p7b", "spc"]
          },
          "application/x-pkcs7-certreqresp": {
            source: "apache",
            extensions: ["p7r"]
          },
          "application/x-pki-message": {
            source: "iana"
          },
          "application/x-rar-compressed": {
            source: "apache",
            compressible: false,
            extensions: ["rar"]
          },
          "application/x-redhat-package-manager": {
            source: "nginx",
            extensions: ["rpm"]
          },
          "application/x-research-info-systems": {
            source: "apache",
            extensions: ["ris"]
          },
          "application/x-sea": {
            source: "nginx",
            extensions: ["sea"]
          },
          "application/x-sh": {
            source: "apache",
            compressible: true,
            extensions: ["sh"]
          },
          "application/x-shar": {
            source: "apache",
            extensions: ["shar"]
          },
          "application/x-shockwave-flash": {
            source: "apache",
            compressible: false,
            extensions: ["swf"]
          },
          "application/x-silverlight-app": {
            source: "apache",
            extensions: ["xap"]
          },
          "application/x-sql": {
            source: "apache",
            extensions: ["sql"]
          },
          "application/x-stuffit": {
            source: "apache",
            compressible: false,
            extensions: ["sit"]
          },
          "application/x-stuffitx": {
            source: "apache",
            extensions: ["sitx"]
          },
          "application/x-subrip": {
            source: "apache",
            extensions: ["srt"]
          },
          "application/x-sv4cpio": {
            source: "apache",
            extensions: ["sv4cpio"]
          },
          "application/x-sv4crc": {
            source: "apache",
            extensions: ["sv4crc"]
          },
          "application/x-t3vm-image": {
            source: "apache",
            extensions: ["t3"]
          },
          "application/x-tads": {
            source: "apache",
            extensions: ["gam"]
          },
          "application/x-tar": {
            source: "apache",
            compressible: true,
            extensions: ["tar"]
          },
          "application/x-tcl": {
            source: "apache",
            extensions: ["tcl", "tk"]
          },
          "application/x-tex": {
            source: "apache",
            extensions: ["tex"]
          },
          "application/x-tex-tfm": {
            source: "apache",
            extensions: ["tfm"]
          },
          "application/x-texinfo": {
            source: "apache",
            extensions: ["texinfo", "texi"]
          },
          "application/x-tgif": {
            source: "apache",
            extensions: ["obj"]
          },
          "application/x-ustar": {
            source: "apache",
            extensions: ["ustar"]
          },
          "application/x-virtualbox-hdd": {
            compressible: true,
            extensions: ["hdd"]
          },
          "application/x-virtualbox-ova": {
            compressible: true,
            extensions: ["ova"]
          },
          "application/x-virtualbox-ovf": {
            compressible: true,
            extensions: ["ovf"]
          },
          "application/x-virtualbox-vbox": {
            compressible: true,
            extensions: ["vbox"]
          },
          "application/x-virtualbox-vbox-extpack": {
            compressible: false,
            extensions: ["vbox-extpack"]
          },
          "application/x-virtualbox-vdi": {
            compressible: true,
            extensions: ["vdi"]
          },
          "application/x-virtualbox-vhd": {
            compressible: true,
            extensions: ["vhd"]
          },
          "application/x-virtualbox-vmdk": {
            compressible: true,
            extensions: ["vmdk"]
          },
          "application/x-wais-source": {
            source: "apache",
            extensions: ["src"]
          },
          "application/x-web-app-manifest+json": {
            compressible: true,
            extensions: ["webapp"]
          },
          "application/x-www-form-urlencoded": {
            source: "iana",
            compressible: true
          },
          "application/x-x509-ca-cert": {
            source: "iana",
            extensions: ["der", "crt", "pem"]
          },
          "application/x-x509-ca-ra-cert": {
            source: "iana"
          },
          "application/x-x509-next-ca-cert": {
            source: "iana"
          },
          "application/x-xfig": {
            source: "apache",
            extensions: ["fig"]
          },
          "application/x-xliff+xml": {
            source: "apache",
            compressible: true,
            extensions: ["xlf"]
          },
          "application/x-xpinstall": {
            source: "apache",
            compressible: false,
            extensions: ["xpi"]
          },
          "application/x-xz": {
            source: "apache",
            extensions: ["xz"]
          },
          "application/x-zmachine": {
            source: "apache",
            extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
          },
          "application/x400-bp": {
            source: "iana"
          },
          "application/xacml+xml": {
            source: "iana",
            compressible: true
          },
          "application/xaml+xml": {
            source: "apache",
            compressible: true,
            extensions: ["xaml"]
          },
          "application/xcap-att+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xav"]
          },
          "application/xcap-caps+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xca"]
          },
          "application/xcap-diff+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xdf"]
          },
          "application/xcap-el+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xel"]
          },
          "application/xcap-error+xml": {
            source: "iana",
            compressible: true
          },
          "application/xcap-ns+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xns"]
          },
          "application/xcon-conference-info+xml": {
            source: "iana",
            compressible: true
          },
          "application/xcon-conference-info-diff+xml": {
            source: "iana",
            compressible: true
          },
          "application/xenc+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xenc"]
          },
          "application/xhtml+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xhtml", "xht"]
          },
          "application/xhtml-voice+xml": {
            source: "apache",
            compressible: true
          },
          "application/xliff+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xlf"]
          },
          "application/xml": {
            source: "iana",
            compressible: true,
            extensions: ["xml", "xsl", "xsd", "rng"]
          },
          "application/xml-dtd": {
            source: "iana",
            compressible: true,
            extensions: ["dtd"]
          },
          "application/xml-external-parsed-entity": {
            source: "iana"
          },
          "application/xml-patch+xml": {
            source: "iana",
            compressible: true
          },
          "application/xmpp+xml": {
            source: "iana",
            compressible: true
          },
          "application/xop+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xop"]
          },
          "application/xproc+xml": {
            source: "apache",
            compressible: true,
            extensions: ["xpl"]
          },
          "application/xslt+xml": {
            source: "iana",
            compressible: true,
            extensions: ["xsl", "xslt"]
          },
          "application/xspf+xml": {
            source: "apache",
            compressible: true,
            extensions: ["xspf"]
          },
          "application/xv+xml": {
            source: "iana",
            compressible: true,
            extensions: ["mxml", "xhvml", "xvml", "xvm"]
          },
          "application/yang": {
            source: "iana",
            extensions: ["yang"]
          },
          "application/yang-data+json": {
            source: "iana",
            compressible: true
          },
          "application/yang-data+xml": {
            source: "iana",
            compressible: true
          },
          "application/yang-patch+json": {
            source: "iana",
            compressible: true
          },
          "application/yang-patch+xml": {
            source: "iana",
            compressible: true
          },
          "application/yin+xml": {
            source: "iana",
            compressible: true,
            extensions: ["yin"]
          },
          "application/zip": {
            source: "iana",
            compressible: false,
            extensions: ["zip"]
          },
          "application/zlib": {
            source: "iana"
          },
          "application/zstd": {
            source: "iana"
          },
          "audio/1d-interleaved-parityfec": {
            source: "iana"
          },
          "audio/32kadpcm": {
            source: "iana"
          },
          "audio/3gpp": {
            source: "iana",
            compressible: false,
            extensions: ["3gpp"]
          },
          "audio/3gpp2": {
            source: "iana"
          },
          "audio/aac": {
            source: "iana"
          },
          "audio/ac3": {
            source: "iana"
          },
          "audio/adpcm": {
            source: "apache",
            extensions: ["adp"]
          },
          "audio/amr": {
            source: "iana",
            extensions: ["amr"]
          },
          "audio/amr-wb": {
            source: "iana"
          },
          "audio/amr-wb+": {
            source: "iana"
          },
          "audio/aptx": {
            source: "iana"
          },
          "audio/asc": {
            source: "iana"
          },
          "audio/atrac-advanced-lossless": {
            source: "iana"
          },
          "audio/atrac-x": {
            source: "iana"
          },
          "audio/atrac3": {
            source: "iana"
          },
          "audio/basic": {
            source: "iana",
            compressible: false,
            extensions: ["au", "snd"]
          },
          "audio/bv16": {
            source: "iana"
          },
          "audio/bv32": {
            source: "iana"
          },
          "audio/clearmode": {
            source: "iana"
          },
          "audio/cn": {
            source: "iana"
          },
          "audio/dat12": {
            source: "iana"
          },
          "audio/dls": {
            source: "iana"
          },
          "audio/dsr-es201108": {
            source: "iana"
          },
          "audio/dsr-es202050": {
            source: "iana"
          },
          "audio/dsr-es202211": {
            source: "iana"
          },
          "audio/dsr-es202212": {
            source: "iana"
          },
          "audio/dv": {
            source: "iana"
          },
          "audio/dvi4": {
            source: "iana"
          },
          "audio/eac3": {
            source: "iana"
          },
          "audio/encaprtp": {
            source: "iana"
          },
          "audio/evrc": {
            source: "iana"
          },
          "audio/evrc-qcp": {
            source: "iana"
          },
          "audio/evrc0": {
            source: "iana"
          },
          "audio/evrc1": {
            source: "iana"
          },
          "audio/evrcb": {
            source: "iana"
          },
          "audio/evrcb0": {
            source: "iana"
          },
          "audio/evrcb1": {
            source: "iana"
          },
          "audio/evrcnw": {
            source: "iana"
          },
          "audio/evrcnw0": {
            source: "iana"
          },
          "audio/evrcnw1": {
            source: "iana"
          },
          "audio/evrcwb": {
            source: "iana"
          },
          "audio/evrcwb0": {
            source: "iana"
          },
          "audio/evrcwb1": {
            source: "iana"
          },
          "audio/evs": {
            source: "iana"
          },
          "audio/flexfec": {
            source: "iana"
          },
          "audio/fwdred": {
            source: "iana"
          },
          "audio/g711-0": {
            source: "iana"
          },
          "audio/g719": {
            source: "iana"
          },
          "audio/g722": {
            source: "iana"
          },
          "audio/g7221": {
            source: "iana"
          },
          "audio/g723": {
            source: "iana"
          },
          "audio/g726-16": {
            source: "iana"
          },
          "audio/g726-24": {
            source: "iana"
          },
          "audio/g726-32": {
            source: "iana"
          },
          "audio/g726-40": {
            source: "iana"
          },
          "audio/g728": {
            source: "iana"
          },
          "audio/g729": {
            source: "iana"
          },
          "audio/g7291": {
            source: "iana"
          },
          "audio/g729d": {
            source: "iana"
          },
          "audio/g729e": {
            source: "iana"
          },
          "audio/gsm": {
            source: "iana"
          },
          "audio/gsm-efr": {
            source: "iana"
          },
          "audio/gsm-hr-08": {
            source: "iana"
          },
          "audio/ilbc": {
            source: "iana"
          },
          "audio/ip-mr_v2.5": {
            source: "iana"
          },
          "audio/isac": {
            source: "apache"
          },
          "audio/l16": {
            source: "iana"
          },
          "audio/l20": {
            source: "iana"
          },
          "audio/l24": {
            source: "iana",
            compressible: false
          },
          "audio/l8": {
            source: "iana"
          },
          "audio/lpc": {
            source: "iana"
          },
          "audio/melp": {
            source: "iana"
          },
          "audio/melp1200": {
            source: "iana"
          },
          "audio/melp2400": {
            source: "iana"
          },
          "audio/melp600": {
            source: "iana"
          },
          "audio/mhas": {
            source: "iana"
          },
          "audio/midi": {
            source: "apache",
            extensions: ["mid", "midi", "kar", "rmi"]
          },
          "audio/mobile-xmf": {
            source: "iana",
            extensions: ["mxmf"]
          },
          "audio/mp3": {
            compressible: false,
            extensions: ["mp3"]
          },
          "audio/mp4": {
            source: "iana",
            compressible: false,
            extensions: ["m4a", "mp4a"]
          },
          "audio/mp4a-latm": {
            source: "iana"
          },
          "audio/mpa": {
            source: "iana"
          },
          "audio/mpa-robust": {
            source: "iana"
          },
          "audio/mpeg": {
            source: "iana",
            compressible: false,
            extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
          },
          "audio/mpeg4-generic": {
            source: "iana"
          },
          "audio/musepack": {
            source: "apache"
          },
          "audio/ogg": {
            source: "iana",
            compressible: false,
            extensions: ["oga", "ogg", "spx", "opus"]
          },
          "audio/opus": {
            source: "iana"
          },
          "audio/parityfec": {
            source: "iana"
          },
          "audio/pcma": {
            source: "iana"
          },
          "audio/pcma-wb": {
            source: "iana"
          },
          "audio/pcmu": {
            source: "iana"
          },
          "audio/pcmu-wb": {
            source: "iana"
          },
          "audio/prs.sid": {
            source: "iana"
          },
          "audio/qcelp": {
            source: "iana"
          },
          "audio/raptorfec": {
            source: "iana"
          },
          "audio/red": {
            source: "iana"
          },
          "audio/rtp-enc-aescm128": {
            source: "iana"
          },
          "audio/rtp-midi": {
            source: "iana"
          },
          "audio/rtploopback": {
            source: "iana"
          },
          "audio/rtx": {
            source: "iana"
          },
          "audio/s3m": {
            source: "apache",
            extensions: ["s3m"]
          },
          "audio/scip": {
            source: "iana"
          },
          "audio/silk": {
            source: "apache",
            extensions: ["sil"]
          },
          "audio/smv": {
            source: "iana"
          },
          "audio/smv-qcp": {
            source: "iana"
          },
          "audio/smv0": {
            source: "iana"
          },
          "audio/sofa": {
            source: "iana"
          },
          "audio/sp-midi": {
            source: "iana"
          },
          "audio/speex": {
            source: "iana"
          },
          "audio/t140c": {
            source: "iana"
          },
          "audio/t38": {
            source: "iana"
          },
          "audio/telephone-event": {
            source: "iana"
          },
          "audio/tetra_acelp": {
            source: "iana"
          },
          "audio/tetra_acelp_bb": {
            source: "iana"
          },
          "audio/tone": {
            source: "iana"
          },
          "audio/tsvcis": {
            source: "iana"
          },
          "audio/uemclip": {
            source: "iana"
          },
          "audio/ulpfec": {
            source: "iana"
          },
          "audio/usac": {
            source: "iana"
          },
          "audio/vdvi": {
            source: "iana"
          },
          "audio/vmr-wb": {
            source: "iana"
          },
          "audio/vnd.3gpp.iufp": {
            source: "iana"
          },
          "audio/vnd.4sb": {
            source: "iana"
          },
          "audio/vnd.audiokoz": {
            source: "iana"
          },
          "audio/vnd.celp": {
            source: "iana"
          },
          "audio/vnd.cisco.nse": {
            source: "iana"
          },
          "audio/vnd.cmles.radio-events": {
            source: "iana"
          },
          "audio/vnd.cns.anp1": {
            source: "iana"
          },
          "audio/vnd.cns.inf1": {
            source: "iana"
          },
          "audio/vnd.dece.audio": {
            source: "iana",
            extensions: ["uva", "uvva"]
          },
          "audio/vnd.digital-winds": {
            source: "iana",
            extensions: ["eol"]
          },
          "audio/vnd.dlna.adts": {
            source: "iana"
          },
          "audio/vnd.dolby.heaac.1": {
            source: "iana"
          },
          "audio/vnd.dolby.heaac.2": {
            source: "iana"
          },
          "audio/vnd.dolby.mlp": {
            source: "iana"
          },
          "audio/vnd.dolby.mps": {
            source: "iana"
          },
          "audio/vnd.dolby.pl2": {
            source: "iana"
          },
          "audio/vnd.dolby.pl2x": {
            source: "iana"
          },
          "audio/vnd.dolby.pl2z": {
            source: "iana"
          },
          "audio/vnd.dolby.pulse.1": {
            source: "iana"
          },
          "audio/vnd.dra": {
            source: "iana",
            extensions: ["dra"]
          },
          "audio/vnd.dts": {
            source: "iana",
            extensions: ["dts"]
          },
          "audio/vnd.dts.hd": {
            source: "iana",
            extensions: ["dtshd"]
          },
          "audio/vnd.dts.uhd": {
            source: "iana"
          },
          "audio/vnd.dvb.file": {
            source: "iana"
          },
          "audio/vnd.everad.plj": {
            source: "iana"
          },
          "audio/vnd.hns.audio": {
            source: "iana"
          },
          "audio/vnd.lucent.voice": {
            source: "iana",
            extensions: ["lvp"]
          },
          "audio/vnd.ms-playready.media.pya": {
            source: "iana",
            extensions: ["pya"]
          },
          "audio/vnd.nokia.mobile-xmf": {
            source: "iana"
          },
          "audio/vnd.nortel.vbk": {
            source: "iana"
          },
          "audio/vnd.nuera.ecelp4800": {
            source: "iana",
            extensions: ["ecelp4800"]
          },
          "audio/vnd.nuera.ecelp7470": {
            source: "iana",
            extensions: ["ecelp7470"]
          },
          "audio/vnd.nuera.ecelp9600": {
            source: "iana",
            extensions: ["ecelp9600"]
          },
          "audio/vnd.octel.sbc": {
            source: "iana"
          },
          "audio/vnd.presonus.multitrack": {
            source: "iana"
          },
          "audio/vnd.qcelp": {
            source: "iana"
          },
          "audio/vnd.rhetorex.32kadpcm": {
            source: "iana"
          },
          "audio/vnd.rip": {
            source: "iana",
            extensions: ["rip"]
          },
          "audio/vnd.rn-realaudio": {
            compressible: false
          },
          "audio/vnd.sealedmedia.softseal.mpeg": {
            source: "iana"
          },
          "audio/vnd.vmx.cvsd": {
            source: "iana"
          },
          "audio/vnd.wave": {
            compressible: false
          },
          "audio/vorbis": {
            source: "iana",
            compressible: false
          },
          "audio/vorbis-config": {
            source: "iana"
          },
          "audio/wav": {
            compressible: false,
            extensions: ["wav"]
          },
          "audio/wave": {
            compressible: false,
            extensions: ["wav"]
          },
          "audio/webm": {
            source: "apache",
            compressible: false,
            extensions: ["weba"]
          },
          "audio/x-aac": {
            source: "apache",
            compressible: false,
            extensions: ["aac"]
          },
          "audio/x-aiff": {
            source: "apache",
            extensions: ["aif", "aiff", "aifc"]
          },
          "audio/x-caf": {
            source: "apache",
            compressible: false,
            extensions: ["caf"]
          },
          "audio/x-flac": {
            source: "apache",
            extensions: ["flac"]
          },
          "audio/x-m4a": {
            source: "nginx",
            extensions: ["m4a"]
          },
          "audio/x-matroska": {
            source: "apache",
            extensions: ["mka"]
          },
          "audio/x-mpegurl": {
            source: "apache",
            extensions: ["m3u"]
          },
          "audio/x-ms-wax": {
            source: "apache",
            extensions: ["wax"]
          },
          "audio/x-ms-wma": {
            source: "apache",
            extensions: ["wma"]
          },
          "audio/x-pn-realaudio": {
            source: "apache",
            extensions: ["ram", "ra"]
          },
          "audio/x-pn-realaudio-plugin": {
            source: "apache",
            extensions: ["rmp"]
          },
          "audio/x-realaudio": {
            source: "nginx",
            extensions: ["ra"]
          },
          "audio/x-tta": {
            source: "apache"
          },
          "audio/x-wav": {
            source: "apache",
            extensions: ["wav"]
          },
          "audio/xm": {
            source: "apache",
            extensions: ["xm"]
          },
          "chemical/x-cdx": {
            source: "apache",
            extensions: ["cdx"]
          },
          "chemical/x-cif": {
            source: "apache",
            extensions: ["cif"]
          },
          "chemical/x-cmdf": {
            source: "apache",
            extensions: ["cmdf"]
          },
          "chemical/x-cml": {
            source: "apache",
            extensions: ["cml"]
          },
          "chemical/x-csml": {
            source: "apache",
            extensions: ["csml"]
          },
          "chemical/x-pdb": {
            source: "apache"
          },
          "chemical/x-xyz": {
            source: "apache",
            extensions: ["xyz"]
          },
          "font/collection": {
            source: "iana",
            extensions: ["ttc"]
          },
          "font/otf": {
            source: "iana",
            compressible: true,
            extensions: ["otf"]
          },
          "font/sfnt": {
            source: "iana"
          },
          "font/ttf": {
            source: "iana",
            compressible: true,
            extensions: ["ttf"]
          },
          "font/woff": {
            source: "iana",
            extensions: ["woff"]
          },
          "font/woff2": {
            source: "iana",
            extensions: ["woff2"]
          },
          "image/aces": {
            source: "iana",
            extensions: ["exr"]
          },
          "image/apng": {
            compressible: false,
            extensions: ["apng"]
          },
          "image/avci": {
            source: "iana",
            extensions: ["avci"]
          },
          "image/avcs": {
            source: "iana",
            extensions: ["avcs"]
          },
          "image/avif": {
            source: "iana",
            compressible: false,
            extensions: ["avif"]
          },
          "image/bmp": {
            source: "iana",
            compressible: true,
            extensions: ["bmp"]
          },
          "image/cgm": {
            source: "iana",
            extensions: ["cgm"]
          },
          "image/dicom-rle": {
            source: "iana",
            extensions: ["drle"]
          },
          "image/emf": {
            source: "iana",
            extensions: ["emf"]
          },
          "image/fits": {
            source: "iana",
            extensions: ["fits"]
          },
          "image/g3fax": {
            source: "iana",
            extensions: ["g3"]
          },
          "image/gif": {
            source: "iana",
            compressible: false,
            extensions: ["gif"]
          },
          "image/heic": {
            source: "iana",
            extensions: ["heic"]
          },
          "image/heic-sequence": {
            source: "iana",
            extensions: ["heics"]
          },
          "image/heif": {
            source: "iana",
            extensions: ["heif"]
          },
          "image/heif-sequence": {
            source: "iana",
            extensions: ["heifs"]
          },
          "image/hej2k": {
            source: "iana",
            extensions: ["hej2"]
          },
          "image/hsj2": {
            source: "iana",
            extensions: ["hsj2"]
          },
          "image/ief": {
            source: "iana",
            extensions: ["ief"]
          },
          "image/jls": {
            source: "iana",
            extensions: ["jls"]
          },
          "image/jp2": {
            source: "iana",
            compressible: false,
            extensions: ["jp2", "jpg2"]
          },
          "image/jpeg": {
            source: "iana",
            compressible: false,
            extensions: ["jpeg", "jpg", "jpe"]
          },
          "image/jph": {
            source: "iana",
            extensions: ["jph"]
          },
          "image/jphc": {
            source: "iana",
            extensions: ["jhc"]
          },
          "image/jpm": {
            source: "iana",
            compressible: false,
            extensions: ["jpm"]
          },
          "image/jpx": {
            source: "iana",
            compressible: false,
            extensions: ["jpx", "jpf"]
          },
          "image/jxr": {
            source: "iana",
            extensions: ["jxr"]
          },
          "image/jxra": {
            source: "iana",
            extensions: ["jxra"]
          },
          "image/jxrs": {
            source: "iana",
            extensions: ["jxrs"]
          },
          "image/jxs": {
            source: "iana",
            extensions: ["jxs"]
          },
          "image/jxsc": {
            source: "iana",
            extensions: ["jxsc"]
          },
          "image/jxsi": {
            source: "iana",
            extensions: ["jxsi"]
          },
          "image/jxss": {
            source: "iana",
            extensions: ["jxss"]
          },
          "image/ktx": {
            source: "iana",
            extensions: ["ktx"]
          },
          "image/ktx2": {
            source: "iana",
            extensions: ["ktx2"]
          },
          "image/naplps": {
            source: "iana"
          },
          "image/pjpeg": {
            compressible: false
          },
          "image/png": {
            source: "iana",
            compressible: false,
            extensions: ["png"]
          },
          "image/prs.btif": {
            source: "iana",
            extensions: ["btif"]
          },
          "image/prs.pti": {
            source: "iana",
            extensions: ["pti"]
          },
          "image/pwg-raster": {
            source: "iana"
          },
          "image/sgi": {
            source: "apache",
            extensions: ["sgi"]
          },
          "image/svg+xml": {
            source: "iana",
            compressible: true,
            extensions: ["svg", "svgz"]
          },
          "image/t38": {
            source: "iana",
            extensions: ["t38"]
          },
          "image/tiff": {
            source: "iana",
            compressible: false,
            extensions: ["tif", "tiff"]
          },
          "image/tiff-fx": {
            source: "iana",
            extensions: ["tfx"]
          },
          "image/vnd.adobe.photoshop": {
            source: "iana",
            compressible: true,
            extensions: ["psd"]
          },
          "image/vnd.airzip.accelerator.azv": {
            source: "iana",
            extensions: ["azv"]
          },
          "image/vnd.cns.inf2": {
            source: "iana"
          },
          "image/vnd.dece.graphic": {
            source: "iana",
            extensions: ["uvi", "uvvi", "uvg", "uvvg"]
          },
          "image/vnd.djvu": {
            source: "iana",
            extensions: ["djvu", "djv"]
          },
          "image/vnd.dvb.subtitle": {
            source: "iana",
            extensions: ["sub"]
          },
          "image/vnd.dwg": {
            source: "iana",
            extensions: ["dwg"]
          },
          "image/vnd.dxf": {
            source: "iana",
            extensions: ["dxf"]
          },
          "image/vnd.fastbidsheet": {
            source: "iana",
            extensions: ["fbs"]
          },
          "image/vnd.fpx": {
            source: "iana",
            extensions: ["fpx"]
          },
          "image/vnd.fst": {
            source: "iana",
            extensions: ["fst"]
          },
          "image/vnd.fujixerox.edmics-mmr": {
            source: "iana",
            extensions: ["mmr"]
          },
          "image/vnd.fujixerox.edmics-rlc": {
            source: "iana",
            extensions: ["rlc"]
          },
          "image/vnd.globalgraphics.pgb": {
            source: "iana"
          },
          "image/vnd.microsoft.icon": {
            source: "iana",
            compressible: true,
            extensions: ["ico"]
          },
          "image/vnd.mix": {
            source: "iana"
          },
          "image/vnd.mozilla.apng": {
            source: "iana"
          },
          "image/vnd.ms-dds": {
            compressible: true,
            extensions: ["dds"]
          },
          "image/vnd.ms-modi": {
            source: "iana",
            extensions: ["mdi"]
          },
          "image/vnd.ms-photo": {
            source: "apache",
            extensions: ["wdp"]
          },
          "image/vnd.net-fpx": {
            source: "iana",
            extensions: ["npx"]
          },
          "image/vnd.pco.b16": {
            source: "iana",
            extensions: ["b16"]
          },
          "image/vnd.radiance": {
            source: "iana"
          },
          "image/vnd.sealed.png": {
            source: "iana"
          },
          "image/vnd.sealedmedia.softseal.gif": {
            source: "iana"
          },
          "image/vnd.sealedmedia.softseal.jpg": {
            source: "iana"
          },
          "image/vnd.svf": {
            source: "iana"
          },
          "image/vnd.tencent.tap": {
            source: "iana",
            extensions: ["tap"]
          },
          "image/vnd.valve.source.texture": {
            source: "iana",
            extensions: ["vtf"]
          },
          "image/vnd.wap.wbmp": {
            source: "iana",
            extensions: ["wbmp"]
          },
          "image/vnd.xiff": {
            source: "iana",
            extensions: ["xif"]
          },
          "image/vnd.zbrush.pcx": {
            source: "iana",
            extensions: ["pcx"]
          },
          "image/webp": {
            source: "apache",
            extensions: ["webp"]
          },
          "image/wmf": {
            source: "iana",
            extensions: ["wmf"]
          },
          "image/x-3ds": {
            source: "apache",
            extensions: ["3ds"]
          },
          "image/x-cmu-raster": {
            source: "apache",
            extensions: ["ras"]
          },
          "image/x-cmx": {
            source: "apache",
            extensions: ["cmx"]
          },
          "image/x-freehand": {
            source: "apache",
            extensions: ["fh", "fhc", "fh4", "fh5", "fh7"]
          },
          "image/x-icon": {
            source: "apache",
            compressible: true,
            extensions: ["ico"]
          },
          "image/x-jng": {
            source: "nginx",
            extensions: ["jng"]
          },
          "image/x-mrsid-image": {
            source: "apache",
            extensions: ["sid"]
          },
          "image/x-ms-bmp": {
            source: "nginx",
            compressible: true,
            extensions: ["bmp"]
          },
          "image/x-pcx": {
            source: "apache",
            extensions: ["pcx"]
          },
          "image/x-pict": {
            source: "apache",
            extensions: ["pic", "pct"]
          },
          "image/x-portable-anymap": {
            source: "apache",
            extensions: ["pnm"]
          },
          "image/x-portable-bitmap": {
            source: "apache",
            extensions: ["pbm"]
          },
          "image/x-portable-graymap": {
            source: "apache",
            extensions: ["pgm"]
          },
          "image/x-portable-pixmap": {
            source: "apache",
            extensions: ["ppm"]
          },
          "image/x-rgb": {
            source: "apache",
            extensions: ["rgb"]
          },
          "image/x-tga": {
            source: "apache",
            extensions: ["tga"]
          },
          "image/x-xbitmap": {
            source: "apache",
            extensions: ["xbm"]
          },
          "image/x-xcf": {
            compressible: false
          },
          "image/x-xpixmap": {
            source: "apache",
            extensions: ["xpm"]
          },
          "image/x-xwindowdump": {
            source: "apache",
            extensions: ["xwd"]
          },
          "message/cpim": {
            source: "iana"
          },
          "message/delivery-status": {
            source: "iana"
          },
          "message/disposition-notification": {
            source: "iana",
            extensions: [
              "disposition-notification"
            ]
          },
          "message/external-body": {
            source: "iana"
          },
          "message/feedback-report": {
            source: "iana"
          },
          "message/global": {
            source: "iana",
            extensions: ["u8msg"]
          },
          "message/global-delivery-status": {
            source: "iana",
            extensions: ["u8dsn"]
          },
          "message/global-disposition-notification": {
            source: "iana",
            extensions: ["u8mdn"]
          },
          "message/global-headers": {
            source: "iana",
            extensions: ["u8hdr"]
          },
          "message/http": {
            source: "iana",
            compressible: false
          },
          "message/imdn+xml": {
            source: "iana",
            compressible: true
          },
          "message/news": {
            source: "iana"
          },
          "message/partial": {
            source: "iana",
            compressible: false
          },
          "message/rfc822": {
            source: "iana",
            compressible: true,
            extensions: ["eml", "mime"]
          },
          "message/s-http": {
            source: "iana"
          },
          "message/sip": {
            source: "iana"
          },
          "message/sipfrag": {
            source: "iana"
          },
          "message/tracking-status": {
            source: "iana"
          },
          "message/vnd.si.simp": {
            source: "iana"
          },
          "message/vnd.wfa.wsc": {
            source: "iana",
            extensions: ["wsc"]
          },
          "model/3mf": {
            source: "iana",
            extensions: ["3mf"]
          },
          "model/e57": {
            source: "iana"
          },
          "model/gltf+json": {
            source: "iana",
            compressible: true,
            extensions: ["gltf"]
          },
          "model/gltf-binary": {
            source: "iana",
            compressible: true,
            extensions: ["glb"]
          },
          "model/iges": {
            source: "iana",
            compressible: false,
            extensions: ["igs", "iges"]
          },
          "model/mesh": {
            source: "iana",
            compressible: false,
            extensions: ["msh", "mesh", "silo"]
          },
          "model/mtl": {
            source: "iana",
            extensions: ["mtl"]
          },
          "model/obj": {
            source: "iana",
            extensions: ["obj"]
          },
          "model/step": {
            source: "iana"
          },
          "model/step+xml": {
            source: "iana",
            compressible: true,
            extensions: ["stpx"]
          },
          "model/step+zip": {
            source: "iana",
            compressible: false,
            extensions: ["stpz"]
          },
          "model/step-xml+zip": {
            source: "iana",
            compressible: false,
            extensions: ["stpxz"]
          },
          "model/stl": {
            source: "iana",
            extensions: ["stl"]
          },
          "model/vnd.collada+xml": {
            source: "iana",
            compressible: true,
            extensions: ["dae"]
          },
          "model/vnd.dwf": {
            source: "iana",
            extensions: ["dwf"]
          },
          "model/vnd.flatland.3dml": {
            source: "iana"
          },
          "model/vnd.gdl": {
            source: "iana",
            extensions: ["gdl"]
          },
          "model/vnd.gs-gdl": {
            source: "apache"
          },
          "model/vnd.gs.gdl": {
            source: "iana"
          },
          "model/vnd.gtw": {
            source: "iana",
            extensions: ["gtw"]
          },
          "model/vnd.moml+xml": {
            source: "iana",
            compressible: true
          },
          "model/vnd.mts": {
            source: "iana",
            extensions: ["mts"]
          },
          "model/vnd.opengex": {
            source: "iana",
            extensions: ["ogex"]
          },
          "model/vnd.parasolid.transmit.binary": {
            source: "iana",
            extensions: ["x_b"]
          },
          "model/vnd.parasolid.transmit.text": {
            source: "iana",
            extensions: ["x_t"]
          },
          "model/vnd.pytha.pyox": {
            source: "iana"
          },
          "model/vnd.rosette.annotated-data-model": {
            source: "iana"
          },
          "model/vnd.sap.vds": {
            source: "iana",
            extensions: ["vds"]
          },
          "model/vnd.usdz+zip": {
            source: "iana",
            compressible: false,
            extensions: ["usdz"]
          },
          "model/vnd.valve.source.compiled-map": {
            source: "iana",
            extensions: ["bsp"]
          },
          "model/vnd.vtu": {
            source: "iana",
            extensions: ["vtu"]
          },
          "model/vrml": {
            source: "iana",
            compressible: false,
            extensions: ["wrl", "vrml"]
          },
          "model/x3d+binary": {
            source: "apache",
            compressible: false,
            extensions: ["x3db", "x3dbz"]
          },
          "model/x3d+fastinfoset": {
            source: "iana",
            extensions: ["x3db"]
          },
          "model/x3d+vrml": {
            source: "apache",
            compressible: false,
            extensions: ["x3dv", "x3dvz"]
          },
          "model/x3d+xml": {
            source: "iana",
            compressible: true,
            extensions: ["x3d", "x3dz"]
          },
          "model/x3d-vrml": {
            source: "iana",
            extensions: ["x3dv"]
          },
          "multipart/alternative": {
            source: "iana",
            compressible: false
          },
          "multipart/appledouble": {
            source: "iana"
          },
          "multipart/byteranges": {
            source: "iana"
          },
          "multipart/digest": {
            source: "iana"
          },
          "multipart/encrypted": {
            source: "iana",
            compressible: false
          },
          "multipart/form-data": {
            source: "iana",
            compressible: false
          },
          "multipart/header-set": {
            source: "iana"
          },
          "multipart/mixed": {
            source: "iana"
          },
          "multipart/multilingual": {
            source: "iana"
          },
          "multipart/parallel": {
            source: "iana"
          },
          "multipart/related": {
            source: "iana",
            compressible: false
          },
          "multipart/report": {
            source: "iana"
          },
          "multipart/signed": {
            source: "iana",
            compressible: false
          },
          "multipart/vnd.bint.med-plus": {
            source: "iana"
          },
          "multipart/voice-message": {
            source: "iana"
          },
          "multipart/x-mixed-replace": {
            source: "iana"
          },
          "text/1d-interleaved-parityfec": {
            source: "iana"
          },
          "text/cache-manifest": {
            source: "iana",
            compressible: true,
            extensions: ["appcache", "manifest"]
          },
          "text/calendar": {
            source: "iana",
            extensions: ["ics", "ifb"]
          },
          "text/calender": {
            compressible: true
          },
          "text/cmd": {
            compressible: true
          },
          "text/coffeescript": {
            extensions: ["coffee", "litcoffee"]
          },
          "text/cql": {
            source: "iana"
          },
          "text/cql-expression": {
            source: "iana"
          },
          "text/cql-identifier": {
            source: "iana"
          },
          "text/css": {
            source: "iana",
            charset: "UTF-8",
            compressible: true,
            extensions: ["css"]
          },
          "text/csv": {
            source: "iana",
            compressible: true,
            extensions: ["csv"]
          },
          "text/csv-schema": {
            source: "iana"
          },
          "text/directory": {
            source: "iana"
          },
          "text/dns": {
            source: "iana"
          },
          "text/ecmascript": {
            source: "iana"
          },
          "text/encaprtp": {
            source: "iana"
          },
          "text/enriched": {
            source: "iana"
          },
          "text/fhirpath": {
            source: "iana"
          },
          "text/flexfec": {
            source: "iana"
          },
          "text/fwdred": {
            source: "iana"
          },
          "text/gff3": {
            source: "iana"
          },
          "text/grammar-ref-list": {
            source: "iana"
          },
          "text/html": {
            source: "iana",
            compressible: true,
            extensions: ["html", "htm", "shtml"]
          },
          "text/jade": {
            extensions: ["jade"]
          },
          "text/javascript": {
            source: "iana",
            compressible: true
          },
          "text/jcr-cnd": {
            source: "iana"
          },
          "text/jsx": {
            compressible: true,
            extensions: ["jsx"]
          },
          "text/less": {
            compressible: true,
            extensions: ["less"]
          },
          "text/markdown": {
            source: "iana",
            compressible: true,
            extensions: ["markdown", "md"]
          },
          "text/mathml": {
            source: "nginx",
            extensions: ["mml"]
          },
          "text/mdx": {
            compressible: true,
            extensions: ["mdx"]
          },
          "text/mizar": {
            source: "iana"
          },
          "text/n3": {
            source: "iana",
            charset: "UTF-8",
            compressible: true,
            extensions: ["n3"]
          },
          "text/parameters": {
            source: "iana",
            charset: "UTF-8"
          },
          "text/parityfec": {
            source: "iana"
          },
          "text/plain": {
            source: "iana",
            compressible: true,
            extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
          },
          "text/provenance-notation": {
            source: "iana",
            charset: "UTF-8"
          },
          "text/prs.fallenstein.rst": {
            source: "iana"
          },
          "text/prs.lines.tag": {
            source: "iana",
            extensions: ["dsc"]
          },
          "text/prs.prop.logic": {
            source: "iana"
          },
          "text/raptorfec": {
            source: "iana"
          },
          "text/red": {
            source: "iana"
          },
          "text/rfc822-headers": {
            source: "iana"
          },
          "text/richtext": {
            source: "iana",
            compressible: true,
            extensions: ["rtx"]
          },
          "text/rtf": {
            source: "iana",
            compressible: true,
            extensions: ["rtf"]
          },
          "text/rtp-enc-aescm128": {
            source: "iana"
          },
          "text/rtploopback": {
            source: "iana"
          },
          "text/rtx": {
            source: "iana"
          },
          "text/sgml": {
            source: "iana",
            extensions: ["sgml", "sgm"]
          },
          "text/shaclc": {
            source: "iana"
          },
          "text/shex": {
            source: "iana",
            extensions: ["shex"]
          },
          "text/slim": {
            extensions: ["slim", "slm"]
          },
          "text/spdx": {
            source: "iana",
            extensions: ["spdx"]
          },
          "text/strings": {
            source: "iana"
          },
          "text/stylus": {
            extensions: ["stylus", "styl"]
          },
          "text/t140": {
            source: "iana"
          },
          "text/tab-separated-values": {
            source: "iana",
            compressible: true,
            extensions: ["tsv"]
          },
          "text/troff": {
            source: "iana",
            extensions: ["t", "tr", "roff", "man", "me", "ms"]
          },
          "text/turtle": {
            source: "iana",
            charset: "UTF-8",
            extensions: ["ttl"]
          },
          "text/ulpfec": {
            source: "iana"
          },
          "text/uri-list": {
            source: "iana",
            compressible: true,
            extensions: ["uri", "uris", "urls"]
          },
          "text/vcard": {
            source: "iana",
            compressible: true,
            extensions: ["vcard"]
          },
          "text/vnd.a": {
            source: "iana"
          },
          "text/vnd.abc": {
            source: "iana"
          },
          "text/vnd.ascii-art": {
            source: "iana"
          },
          "text/vnd.curl": {
            source: "iana",
            extensions: ["curl"]
          },
          "text/vnd.curl.dcurl": {
            source: "apache",
            extensions: ["dcurl"]
          },
          "text/vnd.curl.mcurl": {
            source: "apache",
            extensions: ["mcurl"]
          },
          "text/vnd.curl.scurl": {
            source: "apache",
            extensions: ["scurl"]
          },
          "text/vnd.debian.copyright": {
            source: "iana",
            charset: "UTF-8"
          },
          "text/vnd.dmclientscript": {
            source: "iana"
          },
          "text/vnd.dvb.subtitle": {
            source: "iana",
            extensions: ["sub"]
          },
          "text/vnd.esmertec.theme-descriptor": {
            source: "iana",
            charset: "UTF-8"
          },
          "text/vnd.familysearch.gedcom": {
            source: "iana",
            extensions: ["ged"]
          },
          "text/vnd.ficlab.flt": {
            source: "iana"
          },
          "text/vnd.fly": {
            source: "iana",
            extensions: ["fly"]
          },
          "text/vnd.fmi.flexstor": {
            source: "iana",
            extensions: ["flx"]
          },
          "text/vnd.gml": {
            source: "iana"
          },
          "text/vnd.graphviz": {
            source: "iana",
            extensions: ["gv"]
          },
          "text/vnd.hans": {
            source: "iana"
          },
          "text/vnd.hgl": {
            source: "iana"
          },
          "text/vnd.in3d.3dml": {
            source: "iana",
            extensions: ["3dml"]
          },
          "text/vnd.in3d.spot": {
            source: "iana",
            extensions: ["spot"]
          },
          "text/vnd.iptc.newsml": {
            source: "iana"
          },
          "text/vnd.iptc.nitf": {
            source: "iana"
          },
          "text/vnd.latex-z": {
            source: "iana"
          },
          "text/vnd.motorola.reflex": {
            source: "iana"
          },
          "text/vnd.ms-mediapackage": {
            source: "iana"
          },
          "text/vnd.net2phone.commcenter.command": {
            source: "iana"
          },
          "text/vnd.radisys.msml-basic-layout": {
            source: "iana"
          },
          "text/vnd.senx.warpscript": {
            source: "iana"
          },
          "text/vnd.si.uricatalogue": {
            source: "iana"
          },
          "text/vnd.sosi": {
            source: "iana"
          },
          "text/vnd.sun.j2me.app-descriptor": {
            source: "iana",
            charset: "UTF-8",
            extensions: ["jad"]
          },
          "text/vnd.trolltech.linguist": {
            source: "iana",
            charset: "UTF-8"
          },
          "text/vnd.wap.si": {
            source: "iana"
          },
          "text/vnd.wap.sl": {
            source: "iana"
          },
          "text/vnd.wap.wml": {
            source: "iana",
            extensions: ["wml"]
          },
          "text/vnd.wap.wmlscript": {
            source: "iana",
            extensions: ["wmls"]
          },
          "text/vtt": {
            source: "iana",
            charset: "UTF-8",
            compressible: true,
            extensions: ["vtt"]
          },
          "text/x-asm": {
            source: "apache",
            extensions: ["s", "asm"]
          },
          "text/x-c": {
            source: "apache",
            extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
          },
          "text/x-component": {
            source: "nginx",
            extensions: ["htc"]
          },
          "text/x-fortran": {
            source: "apache",
            extensions: ["f", "for", "f77", "f90"]
          },
          "text/x-gwt-rpc": {
            compressible: true
          },
          "text/x-handlebars-template": {
            extensions: ["hbs"]
          },
          "text/x-java-source": {
            source: "apache",
            extensions: ["java"]
          },
          "text/x-jquery-tmpl": {
            compressible: true
          },
          "text/x-lua": {
            extensions: ["lua"]
          },
          "text/x-markdown": {
            compressible: true,
            extensions: ["mkd"]
          },
          "text/x-nfo": {
            source: "apache",
            extensions: ["nfo"]
          },
          "text/x-opml": {
            source: "apache",
            extensions: ["opml"]
          },
          "text/x-org": {
            compressible: true,
            extensions: ["org"]
          },
          "text/x-pascal": {
            source: "apache",
            extensions: ["p", "pas"]
          },
          "text/x-processing": {
            compressible: true,
            extensions: ["pde"]
          },
          "text/x-sass": {
            extensions: ["sass"]
          },
          "text/x-scss": {
            extensions: ["scss"]
          },
          "text/x-setext": {
            source: "apache",
            extensions: ["etx"]
          },
          "text/x-sfv": {
            source: "apache",
            extensions: ["sfv"]
          },
          "text/x-suse-ymp": {
            compressible: true,
            extensions: ["ymp"]
          },
          "text/x-uuencode": {
            source: "apache",
            extensions: ["uu"]
          },
          "text/x-vcalendar": {
            source: "apache",
            extensions: ["vcs"]
          },
          "text/x-vcard": {
            source: "apache",
            extensions: ["vcf"]
          },
          "text/xml": {
            source: "iana",
            compressible: true,
            extensions: ["xml"]
          },
          "text/xml-external-parsed-entity": {
            source: "iana"
          },
          "text/yaml": {
            compressible: true,
            extensions: ["yaml", "yml"]
          },
          "video/1d-interleaved-parityfec": {
            source: "iana"
          },
          "video/3gpp": {
            source: "iana",
            extensions: ["3gp", "3gpp"]
          },
          "video/3gpp-tt": {
            source: "iana"
          },
          "video/3gpp2": {
            source: "iana",
            extensions: ["3g2"]
          },
          "video/av1": {
            source: "iana"
          },
          "video/bmpeg": {
            source: "iana"
          },
          "video/bt656": {
            source: "iana"
          },
          "video/celb": {
            source: "iana"
          },
          "video/dv": {
            source: "iana"
          },
          "video/encaprtp": {
            source: "iana"
          },
          "video/ffv1": {
            source: "iana"
          },
          "video/flexfec": {
            source: "iana"
          },
          "video/h261": {
            source: "iana",
            extensions: ["h261"]
          },
          "video/h263": {
            source: "iana",
            extensions: ["h263"]
          },
          "video/h263-1998": {
            source: "iana"
          },
          "video/h263-2000": {
            source: "iana"
          },
          "video/h264": {
            source: "iana",
            extensions: ["h264"]
          },
          "video/h264-rcdo": {
            source: "iana"
          },
          "video/h264-svc": {
            source: "iana"
          },
          "video/h265": {
            source: "iana"
          },
          "video/iso.segment": {
            source: "iana",
            extensions: ["m4s"]
          },
          "video/jpeg": {
            source: "iana",
            extensions: ["jpgv"]
          },
          "video/jpeg2000": {
            source: "iana"
          },
          "video/jpm": {
            source: "apache",
            extensions: ["jpm", "jpgm"]
          },
          "video/jxsv": {
            source: "iana"
          },
          "video/mj2": {
            source: "iana",
            extensions: ["mj2", "mjp2"]
          },
          "video/mp1s": {
            source: "iana"
          },
          "video/mp2p": {
            source: "iana"
          },
          "video/mp2t": {
            source: "iana",
            extensions: ["ts"]
          },
          "video/mp4": {
            source: "iana",
            compressible: false,
            extensions: ["mp4", "mp4v", "mpg4"]
          },
          "video/mp4v-es": {
            source: "iana"
          },
          "video/mpeg": {
            source: "iana",
            compressible: false,
            extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]
          },
          "video/mpeg4-generic": {
            source: "iana"
          },
          "video/mpv": {
            source: "iana"
          },
          "video/nv": {
            source: "iana"
          },
          "video/ogg": {
            source: "iana",
            compressible: false,
            extensions: ["ogv"]
          },
          "video/parityfec": {
            source: "iana"
          },
          "video/pointer": {
            source: "iana"
          },
          "video/quicktime": {
            source: "iana",
            compressible: false,
            extensions: ["qt", "mov"]
          },
          "video/raptorfec": {
            source: "iana"
          },
          "video/raw": {
            source: "iana"
          },
          "video/rtp-enc-aescm128": {
            source: "iana"
          },
          "video/rtploopback": {
            source: "iana"
          },
          "video/rtx": {
            source: "iana"
          },
          "video/scip": {
            source: "iana"
          },
          "video/smpte291": {
            source: "iana"
          },
          "video/smpte292m": {
            source: "iana"
          },
          "video/ulpfec": {
            source: "iana"
          },
          "video/vc1": {
            source: "iana"
          },
          "video/vc2": {
            source: "iana"
          },
          "video/vnd.cctv": {
            source: "iana"
          },
          "video/vnd.dece.hd": {
            source: "iana",
            extensions: ["uvh", "uvvh"]
          },
          "video/vnd.dece.mobile": {
            source: "iana",
            extensions: ["uvm", "uvvm"]
          },
          "video/vnd.dece.mp4": {
            source: "iana"
          },
          "video/vnd.dece.pd": {
            source: "iana",
            extensions: ["uvp", "uvvp"]
          },
          "video/vnd.dece.sd": {
            source: "iana",
            extensions: ["uvs", "uvvs"]
          },
          "video/vnd.dece.video": {
            source: "iana",
            extensions: ["uvv", "uvvv"]
          },
          "video/vnd.directv.mpeg": {
            source: "iana"
          },
          "video/vnd.directv.mpeg-tts": {
            source: "iana"
          },
          "video/vnd.dlna.mpeg-tts": {
            source: "iana"
          },
          "video/vnd.dvb.file": {
            source: "iana",
            extensions: ["dvb"]
          },
          "video/vnd.fvt": {
            source: "iana",
            extensions: ["fvt"]
          },
          "video/vnd.hns.video": {
            source: "iana"
          },
          "video/vnd.iptvforum.1dparityfec-1010": {
            source: "iana"
          },
          "video/vnd.iptvforum.1dparityfec-2005": {
            source: "iana"
          },
          "video/vnd.iptvforum.2dparityfec-1010": {
            source: "iana"
          },
          "video/vnd.iptvforum.2dparityfec-2005": {
            source: "iana"
          },
          "video/vnd.iptvforum.ttsavc": {
            source: "iana"
          },
          "video/vnd.iptvforum.ttsmpeg2": {
            source: "iana"
          },
          "video/vnd.motorola.video": {
            source: "iana"
          },
          "video/vnd.motorola.videop": {
            source: "iana"
          },
          "video/vnd.mpegurl": {
            source: "iana",
            extensions: ["mxu", "m4u"]
          },
          "video/vnd.ms-playready.media.pyv": {
            source: "iana",
            extensions: ["pyv"]
          },
          "video/vnd.nokia.interleaved-multimedia": {
            source: "iana"
          },
          "video/vnd.nokia.mp4vr": {
            source: "iana"
          },
          "video/vnd.nokia.videovoip": {
            source: "iana"
          },
          "video/vnd.objectvideo": {
            source: "iana"
          },
          "video/vnd.radgamettools.bink": {
            source: "iana"
          },
          "video/vnd.radgamettools.smacker": {
            source: "iana"
          },
          "video/vnd.sealed.mpeg1": {
            source: "iana"
          },
          "video/vnd.sealed.mpeg4": {
            source: "iana"
          },
          "video/vnd.sealed.swf": {
            source: "iana"
          },
          "video/vnd.sealedmedia.softseal.mov": {
            source: "iana"
          },
          "video/vnd.uvvu.mp4": {
            source: "iana",
            extensions: ["uvu", "uvvu"]
          },
          "video/vnd.vivo": {
            source: "iana",
            extensions: ["viv"]
          },
          "video/vnd.youtube.yt": {
            source: "iana"
          },
          "video/vp8": {
            source: "iana"
          },
          "video/vp9": {
            source: "iana"
          },
          "video/webm": {
            source: "apache",
            compressible: false,
            extensions: ["webm"]
          },
          "video/x-f4v": {
            source: "apache",
            extensions: ["f4v"]
          },
          "video/x-fli": {
            source: "apache",
            extensions: ["fli"]
          },
          "video/x-flv": {
            source: "apache",
            compressible: false,
            extensions: ["flv"]
          },
          "video/x-m4v": {
            source: "apache",
            extensions: ["m4v"]
          },
          "video/x-matroska": {
            source: "apache",
            compressible: false,
            extensions: ["mkv", "mk3d", "mks"]
          },
          "video/x-mng": {
            source: "apache",
            extensions: ["mng"]
          },
          "video/x-ms-asf": {
            source: "apache",
            extensions: ["asf", "asx"]
          },
          "video/x-ms-vob": {
            source: "apache",
            extensions: ["vob"]
          },
          "video/x-ms-wm": {
            source: "apache",
            extensions: ["wm"]
          },
          "video/x-ms-wmv": {
            source: "apache",
            compressible: false,
            extensions: ["wmv"]
          },
          "video/x-ms-wmx": {
            source: "apache",
            extensions: ["wmx"]
          },
          "video/x-ms-wvx": {
            source: "apache",
            extensions: ["wvx"]
          },
          "video/x-msvideo": {
            source: "apache",
            extensions: ["avi"]
          },
          "video/x-sgi-movie": {
            source: "apache",
            extensions: ["movie"]
          },
          "video/x-smv": {
            source: "apache",
            extensions: ["smv"]
          },
          "x-conference/x-cooltalk": {
            source: "apache",
            extensions: ["ice"]
          },
          "x-shader/x-fragment": {
            compressible: true
          },
          "x-shader/x-vertex": {
            compressible: true
          }
        };
      }
    });
    var require_mime_db = __commonJS2({
      "node_modules/mime-db/index.js"(exports2, module22) {
        module22.exports = require_db();
      }
    });
    var require_mime_types = __commonJS2({
      "node_modules/mime-types/index.js"(exports2) {
        "use strict";
        var db = require_mime_db();
        var extname = require("path").extname;
        var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
        var TEXT_TYPE_REGEXP = /^text\//i;
        exports2.charset = charset;
        exports2.charsets = { lookup: charset };
        exports2.contentType = contentType;
        exports2.extension = extension;
        exports2.extensions = /* @__PURE__ */ Object.create(null);
        exports2.lookup = lookup;
        exports2.types = /* @__PURE__ */ Object.create(null);
        populateMaps(exports2.extensions, exports2.types);
        function charset(type) {
          if (!type || typeof type !== "string") {
            return false;
          }
          var match = EXTRACT_TYPE_REGEXP.exec(type);
          var mime = match && db[match[1].toLowerCase()];
          if (mime && mime.charset) {
            return mime.charset;
          }
          if (match && TEXT_TYPE_REGEXP.test(match[1])) {
            return "UTF-8";
          }
          return false;
        }
        function contentType(str) {
          if (!str || typeof str !== "string") {
            return false;
          }
          var mime = str.indexOf("/") === -1 ? exports2.lookup(str) : str;
          if (!mime) {
            return false;
          }
          if (mime.indexOf("charset") === -1) {
            var charset2 = exports2.charset(mime);
            if (charset2)
              mime += "; charset=" + charset2.toLowerCase();
          }
          return mime;
        }
        function extension(type) {
          if (!type || typeof type !== "string") {
            return false;
          }
          var match = EXTRACT_TYPE_REGEXP.exec(type);
          var exts = match && exports2.extensions[match[1].toLowerCase()];
          if (!exts || !exts.length) {
            return false;
          }
          return exts[0];
        }
        function lookup(path) {
          if (!path || typeof path !== "string") {
            return false;
          }
          var extension2 = extname("x." + path).toLowerCase().substr(1);
          if (!extension2) {
            return false;
          }
          return exports2.types[extension2] || false;
        }
        function populateMaps(extensions, types) {
          var preference = ["nginx", "apache", void 0, "iana"];
          Object.keys(db).forEach(function forEachMimeType(type) {
            var mime = db[type];
            var exts = mime.extensions;
            if (!exts || !exts.length) {
              return;
            }
            extensions[type] = exts;
            for (var i = 0; i < exts.length; i++) {
              var extension2 = exts[i];
              if (types[extension2]) {
                var from = preference.indexOf(db[types[extension2]].source);
                var to = preference.indexOf(mime.source);
                if (types[extension2] !== "application/octet-stream" && (from > to || from === to && types[extension2].substr(0, 12) === "application/")) {
                  continue;
                }
              }
              types[extension2] = type;
            }
          });
        }
      }
    });
    var require_defer = __commonJS2({
      "node_modules/asynckit/lib/defer.js"(exports2, module22) {
        module22.exports = defer;
        function defer(fn) {
          var nextTick = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
          if (nextTick) {
            nextTick(fn);
          } else {
            setTimeout(fn, 0);
          }
        }
      }
    });
    var require_async = __commonJS2({
      "node_modules/asynckit/lib/async.js"(exports2, module22) {
        var defer = require_defer();
        module22.exports = async;
        function async(callback) {
          var isAsync = false;
          defer(function() {
            isAsync = true;
          });
          return function async_callback(err, result) {
            if (isAsync) {
              callback(err, result);
            } else {
              defer(function nextTick_callback() {
                callback(err, result);
              });
            }
          };
        }
      }
    });
    var require_abort = __commonJS2({
      "node_modules/asynckit/lib/abort.js"(exports2, module22) {
        module22.exports = abort;
        function abort(state) {
          Object.keys(state.jobs).forEach(clean.bind(state));
          state.jobs = {};
        }
        function clean(key) {
          if (typeof this.jobs[key] == "function") {
            this.jobs[key]();
          }
        }
      }
    });
    var require_iterate = __commonJS2({
      "node_modules/asynckit/lib/iterate.js"(exports2, module22) {
        var async = require_async();
        var abort = require_abort();
        module22.exports = iterate;
        function iterate(list, iterator, state, callback) {
          var key = state["keyedList"] ? state["keyedList"][state.index] : state.index;
          state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
            if (!(key in state.jobs)) {
              return;
            }
            delete state.jobs[key];
            if (error) {
              abort(state);
            } else {
              state.results[key] = output;
            }
            callback(error, state.results);
          });
        }
        function runJob(iterator, key, item, callback) {
          var aborter;
          if (iterator.length == 2) {
            aborter = iterator(item, async(callback));
          } else {
            aborter = iterator(item, key, async(callback));
          }
          return aborter;
        }
      }
    });
    var require_state = __commonJS2({
      "node_modules/asynckit/lib/state.js"(exports2, module22) {
        module22.exports = state;
        function state(list, sortMethod) {
          var isNamedList = !Array.isArray(list), initState = {
            index: 0,
            keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
            jobs: {},
            results: isNamedList ? {} : [],
            size: isNamedList ? Object.keys(list).length : list.length
          };
          if (sortMethod) {
            initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
              return sortMethod(list[a], list[b]);
            });
          }
          return initState;
        }
      }
    });
    var require_terminator = __commonJS2({
      "node_modules/asynckit/lib/terminator.js"(exports2, module22) {
        var abort = require_abort();
        var async = require_async();
        module22.exports = terminator;
        function terminator(callback) {
          if (!Object.keys(this.jobs).length) {
            return;
          }
          this.index = this.size;
          abort(this);
          async(callback)(null, this.results);
        }
      }
    });
    var require_parallel = __commonJS2({
      "node_modules/asynckit/parallel.js"(exports2, module22) {
        var iterate = require_iterate();
        var initState = require_state();
        var terminator = require_terminator();
        module22.exports = parallel;
        function parallel(list, iterator, callback) {
          var state = initState(list);
          while (state.index < (state["keyedList"] || list).length) {
            iterate(list, iterator, state, function(error, result) {
              if (error) {
                callback(error, result);
                return;
              }
              if (Object.keys(state.jobs).length === 0) {
                callback(null, state.results);
                return;
              }
            });
            state.index++;
          }
          return terminator.bind(state, callback);
        }
      }
    });
    var require_serialOrdered = __commonJS2({
      "node_modules/asynckit/serialOrdered.js"(exports2, module22) {
        var iterate = require_iterate();
        var initState = require_state();
        var terminator = require_terminator();
        module22.exports = serialOrdered;
        module22.exports.ascending = ascending;
        module22.exports.descending = descending;
        function serialOrdered(list, iterator, sortMethod, callback) {
          var state = initState(list, sortMethod);
          iterate(list, iterator, state, function iteratorHandler(error, result) {
            if (error) {
              callback(error, result);
              return;
            }
            state.index++;
            if (state.index < (state["keyedList"] || list).length) {
              iterate(list, iterator, state, iteratorHandler);
              return;
            }
            callback(null, state.results);
          });
          return terminator.bind(state, callback);
        }
        function ascending(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        }
        function descending(a, b) {
          return -1 * ascending(a, b);
        }
      }
    });
    var require_serial = __commonJS2({
      "node_modules/asynckit/serial.js"(exports2, module22) {
        var serialOrdered = require_serialOrdered();
        module22.exports = serial;
        function serial(list, iterator, callback) {
          return serialOrdered(list, iterator, null, callback);
        }
      }
    });
    var require_asynckit = __commonJS2({
      "node_modules/asynckit/index.js"(exports2, module22) {
        module22.exports = {
          parallel: require_parallel(),
          serial: require_serial(),
          serialOrdered: require_serialOrdered()
        };
      }
    });
    var require_populate = __commonJS2({
      "node_modules/form-data/lib/populate.js"(exports2, module22) {
        module22.exports = function(dst, src) {
          Object.keys(src).forEach(function(prop) {
            dst[prop] = dst[prop] || src[prop];
          });
          return dst;
        };
      }
    });
    var require_form_data = __commonJS2({
      "node_modules/form-data/lib/form_data.js"(exports2, module22) {
        var CombinedStream = require_combined_stream();
        var util = require("util");
        var path = require("path");
        var http = require("http");
        var https = require("https");
        var parseUrl = require("url").parse;
        var fs = require("fs");
        var mime = require_mime_types();
        var asynckit = require_asynckit();
        var populate = require_populate();
        module22.exports = FormData2;
        util.inherits(FormData2, CombinedStream);
        function FormData2(options) {
          if (!(this instanceof FormData2)) {
            return new FormData2(options);
          }
          this._overheadLength = 0;
          this._valueLength = 0;
          this._valuesToMeasure = [];
          CombinedStream.call(this);
          options = options || {};
          for (var option in options) {
            this[option] = options[option];
          }
        }
        FormData2.LINE_BREAK = "\r\n";
        FormData2.DEFAULT_CONTENT_TYPE = "application/octet-stream";
        FormData2.prototype.append = function(field, value, options) {
          options = options || {};
          if (typeof options == "string") {
            options = { filename: options };
          }
          var append = CombinedStream.prototype.append.bind(this);
          if (typeof value == "number") {
            value = "" + value;
          }
          if (util.isArray(value)) {
            this._error(new Error("Arrays are not supported."));
            return;
          }
          var header = this._multiPartHeader(field, value, options);
          var footer = this._multiPartFooter();
          append(header);
          append(value);
          append(footer);
          this._trackLength(header, value, options);
        };
        FormData2.prototype._trackLength = function(header, value, options) {
          var valueLength = 0;
          if (options.knownLength != null) {
            valueLength += +options.knownLength;
          } else if (Buffer.isBuffer(value)) {
            valueLength = value.length;
          } else if (typeof value === "string") {
            valueLength = Buffer.byteLength(value);
          }
          this._valueLength += valueLength;
          this._overheadLength += Buffer.byteLength(header) + FormData2.LINE_BREAK.length;
          if (!value || !value.path && !(value.readable && value.hasOwnProperty("httpVersion"))) {
            return;
          }
          if (!options.knownLength) {
            this._valuesToMeasure.push(value);
          }
        };
        FormData2.prototype._lengthRetriever = function(value, callback) {
          if (value.hasOwnProperty("fd")) {
            if (value.end != void 0 && value.end != Infinity && value.start != void 0) {
              callback(null, value.end + 1 - (value.start ? value.start : 0));
            } else {
              fs.stat(value.path, function(err, stat) {
                var fileSize;
                if (err) {
                  callback(err);
                  return;
                }
                fileSize = stat.size - (value.start ? value.start : 0);
                callback(null, fileSize);
              });
            }
          } else if (value.hasOwnProperty("httpVersion")) {
            callback(null, +value.headers["content-length"]);
          } else if (value.hasOwnProperty("httpModule")) {
            value.on("response", function(response) {
              value.pause();
              callback(null, +response.headers["content-length"]);
            });
            value.resume();
          } else {
            callback("Unknown stream");
          }
        };
        FormData2.prototype._multiPartHeader = function(field, value, options) {
          if (typeof options.header == "string") {
            return options.header;
          }
          var contentDisposition = this._getContentDisposition(value, options);
          var contentType = this._getContentType(value, options);
          var contents = "";
          var headers = {
            // add custom disposition as third element or keep it two elements if not
            "Content-Disposition": ["form-data", 'name="' + field + '"'].concat(contentDisposition || []),
            // if no content type. allow it to be empty array
            "Content-Type": [].concat(contentType || [])
          };
          if (typeof options.header == "object") {
            populate(headers, options.header);
          }
          var header;
          for (var prop in headers) {
            if (!headers.hasOwnProperty(prop))
              continue;
            header = headers[prop];
            if (header == null) {
              continue;
            }
            if (!Array.isArray(header)) {
              header = [header];
            }
            if (header.length) {
              contents += prop + ": " + header.join("; ") + FormData2.LINE_BREAK;
            }
          }
          return "--" + this.getBoundary() + FormData2.LINE_BREAK + contents + FormData2.LINE_BREAK;
        };
        FormData2.prototype._getContentDisposition = function(value, options) {
          var filename, contentDisposition;
          if (typeof options.filepath === "string") {
            filename = path.normalize(options.filepath).replace(/\\/g, "/");
          } else if (options.filename || value.name || value.path) {
            filename = path.basename(options.filename || value.name || value.path);
          } else if (value.readable && value.hasOwnProperty("httpVersion")) {
            filename = path.basename(value.client._httpMessage.path || "");
          }
          if (filename) {
            contentDisposition = 'filename="' + filename + '"';
          }
          return contentDisposition;
        };
        FormData2.prototype._getContentType = function(value, options) {
          var contentType = options.contentType;
          if (!contentType && value.name) {
            contentType = mime.lookup(value.name);
          }
          if (!contentType && value.path) {
            contentType = mime.lookup(value.path);
          }
          if (!contentType && value.readable && value.hasOwnProperty("httpVersion")) {
            contentType = value.headers["content-type"];
          }
          if (!contentType && (options.filepath || options.filename)) {
            contentType = mime.lookup(options.filepath || options.filename);
          }
          if (!contentType && typeof value == "object") {
            contentType = FormData2.DEFAULT_CONTENT_TYPE;
          }
          return contentType;
        };
        FormData2.prototype._multiPartFooter = function() {
          return function(next) {
            var footer = FormData2.LINE_BREAK;
            var lastPart = this._streams.length === 0;
            if (lastPart) {
              footer += this._lastBoundary();
            }
            next(footer);
          }.bind(this);
        };
        FormData2.prototype._lastBoundary = function() {
          return "--" + this.getBoundary() + "--" + FormData2.LINE_BREAK;
        };
        FormData2.prototype.getHeaders = function(userHeaders) {
          var header;
          var formHeaders = {
            "content-type": "multipart/form-data; boundary=" + this.getBoundary()
          };
          for (header in userHeaders) {
            if (userHeaders.hasOwnProperty(header)) {
              formHeaders[header.toLowerCase()] = userHeaders[header];
            }
          }
          return formHeaders;
        };
        FormData2.prototype.setBoundary = function(boundary) {
          this._boundary = boundary;
        };
        FormData2.prototype.getBoundary = function() {
          if (!this._boundary) {
            this._generateBoundary();
          }
          return this._boundary;
        };
        FormData2.prototype.getBuffer = function() {
          var dataBuffer = new Buffer.alloc(0);
          var boundary = this.getBoundary();
          for (var i = 0, len = this._streams.length; i < len; i++) {
            if (typeof this._streams[i] !== "function") {
              if (Buffer.isBuffer(this._streams[i])) {
                dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
              } else {
                dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
              }
              if (typeof this._streams[i] !== "string" || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
                dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData2.LINE_BREAK)]);
              }
            }
          }
          return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
        };
        FormData2.prototype._generateBoundary = function() {
          var boundary = "--------------------------";
          for (var i = 0; i < 24; i++) {
            boundary += Math.floor(Math.random() * 10).toString(16);
          }
          this._boundary = boundary;
        };
        FormData2.prototype.getLengthSync = function() {
          var knownLength = this._overheadLength + this._valueLength;
          if (this._streams.length) {
            knownLength += this._lastBoundary().length;
          }
          if (!this.hasKnownLength()) {
            this._error(new Error("Cannot calculate proper length in synchronous way."));
          }
          return knownLength;
        };
        FormData2.prototype.hasKnownLength = function() {
          var hasKnownLength = true;
          if (this._valuesToMeasure.length) {
            hasKnownLength = false;
          }
          return hasKnownLength;
        };
        FormData2.prototype.getLength = function(cb) {
          var knownLength = this._overheadLength + this._valueLength;
          if (this._streams.length) {
            knownLength += this._lastBoundary().length;
          }
          if (!this._valuesToMeasure.length) {
            process.nextTick(cb.bind(this, null, knownLength));
            return;
          }
          asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
            if (err) {
              cb(err);
              return;
            }
            values.forEach(function(length) {
              knownLength += length;
            });
            cb(null, knownLength);
          });
        };
        FormData2.prototype.submit = function(params, cb) {
          var request, options, defaults = { method: "post" };
          if (typeof params == "string") {
            params = parseUrl(params);
            options = populate({
              port: params.port,
              path: params.pathname,
              host: params.hostname,
              protocol: params.protocol
            }, defaults);
          } else {
            options = populate(params, defaults);
            if (!options.port) {
              options.port = options.protocol == "https:" ? 443 : 80;
            }
          }
          options.headers = this.getHeaders(params.headers);
          if (options.protocol == "https:") {
            request = https.request(options);
          } else {
            request = http.request(options);
          }
          this.getLength(function(err, length) {
            if (err) {
              this._error(err);
              return;
            }
            request.setHeader("Content-Length", length);
            this.pipe(request);
            if (cb) {
              var onResponse;
              var callback = function(error, responce) {
                request.removeListener("error", callback);
                request.removeListener("response", onResponse);
                return cb.call(this, error, responce);
              };
              onResponse = callback.bind(this, null);
              request.on("error", callback);
              request.on("response", onResponse);
            }
          }.bind(this));
          return request;
        };
        FormData2.prototype._error = function(err) {
          if (!this.error) {
            this.error = err;
            this.pause();
            this.emit("error", err);
          }
        };
        FormData2.prototype.toString = function() {
          return "[object FormData]";
        };
      }
    });
    var require_safe_buffer = __commonJS2({
      "node_modules/safe-buffer/index.js"(exports2, module22) {
        var buffer = require("buffer");
        var Buffer2 = buffer.Buffer;
        function copyProps(src, dst) {
          for (var key in src) {
            dst[key] = src[key];
          }
        }
        if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
          module22.exports = buffer;
        } else {
          copyProps(buffer, exports2);
          exports2.Buffer = SafeBuffer;
        }
        function SafeBuffer(arg, encodingOrOffset, length) {
          return Buffer2(arg, encodingOrOffset, length);
        }
        SafeBuffer.prototype = Object.create(Buffer2.prototype);
        copyProps(Buffer2, SafeBuffer);
        SafeBuffer.from = function(arg, encodingOrOffset, length) {
          if (typeof arg === "number") {
            throw new TypeError("Argument must not be a number");
          }
          return Buffer2(arg, encodingOrOffset, length);
        };
        SafeBuffer.alloc = function(size, fill, encoding) {
          if (typeof size !== "number") {
            throw new TypeError("Argument must be a number");
          }
          var buf = Buffer2(size);
          if (fill !== void 0) {
            if (typeof encoding === "string") {
              buf.fill(fill, encoding);
            } else {
              buf.fill(fill);
            }
          } else {
            buf.fill(0);
          }
          return buf;
        };
        SafeBuffer.allocUnsafe = function(size) {
          if (typeof size !== "number") {
            throw new TypeError("Argument must be a number");
          }
          return Buffer2(size);
        };
        SafeBuffer.allocUnsafeSlow = function(size) {
          if (typeof size !== "number") {
            throw new TypeError("Argument must be a number");
          }
          return buffer.SlowBuffer(size);
        };
      }
    });
    var require_data_stream = __commonJS2({
      "node_modules/jws/lib/data-stream.js"(exports2, module22) {
        var Buffer2 = require_safe_buffer().Buffer;
        var Stream = require("stream");
        var util = require("util");
        function DataStream(data) {
          this.buffer = null;
          this.writable = true;
          this.readable = true;
          if (!data) {
            this.buffer = Buffer2.alloc(0);
            return this;
          }
          if (typeof data.pipe === "function") {
            this.buffer = Buffer2.alloc(0);
            data.pipe(this);
            return this;
          }
          if (data.length || typeof data === "object") {
            this.buffer = data;
            this.writable = false;
            process.nextTick(function() {
              this.emit("end", data);
              this.readable = false;
              this.emit("close");
            }.bind(this));
            return this;
          }
          throw new TypeError("Unexpected data type (" + typeof data + ")");
        }
        util.inherits(DataStream, Stream);
        DataStream.prototype.write = function write(data) {
          this.buffer = Buffer2.concat([this.buffer, Buffer2.from(data)]);
          this.emit("data", data);
        };
        DataStream.prototype.end = function end(data) {
          if (data)
            this.write(data);
          this.emit("end", data);
          this.emit("close");
          this.writable = false;
          this.readable = false;
        };
        module22.exports = DataStream;
      }
    });
    var require_buffer_equal_constant_time = __commonJS2({
      "node_modules/buffer-equal-constant-time/index.js"(exports2, module22) {
        "use strict";
        var Buffer2 = require("buffer").Buffer;
        var SlowBuffer = require("buffer").SlowBuffer;
        module22.exports = bufferEq;
        function bufferEq(a, b) {
          if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
            return false;
          }
          if (a.length !== b.length) {
            return false;
          }
          var c = 0;
          for (var i = 0; i < a.length; i++) {
            c |= a[i] ^ b[i];
          }
          return c === 0;
        }
        bufferEq.install = function() {
          Buffer2.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
            return bufferEq(this, that);
          };
        };
        var origBufEqual = Buffer2.prototype.equal;
        var origSlowBufEqual = SlowBuffer.prototype.equal;
        bufferEq.restore = function() {
          Buffer2.prototype.equal = origBufEqual;
          SlowBuffer.prototype.equal = origSlowBufEqual;
        };
      }
    });
    var require_param_bytes_for_alg = __commonJS2({
      "node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js"(exports2, module22) {
        "use strict";
        function getParamSize(keySize) {
          var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
          return result;
        }
        var paramBytesForAlg = {
          ES256: getParamSize(256),
          ES384: getParamSize(384),
          ES512: getParamSize(521)
        };
        function getParamBytesForAlg(alg) {
          var paramBytes = paramBytesForAlg[alg];
          if (paramBytes) {
            return paramBytes;
          }
          throw new Error('Unknown algorithm "' + alg + '"');
        }
        module22.exports = getParamBytesForAlg;
      }
    });
    var require_ecdsa_sig_formatter = __commonJS2({
      "node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js"(exports2, module22) {
        "use strict";
        var Buffer2 = require_safe_buffer().Buffer;
        var getParamBytesForAlg = require_param_bytes_for_alg();
        var MAX_OCTET = 128;
        var CLASS_UNIVERSAL = 0;
        var PRIMITIVE_BIT = 32;
        var TAG_SEQ = 16;
        var TAG_INT = 2;
        var ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
        var ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
        function base64Url(base64) {
          return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
        }
        function signatureAsBuffer(signature) {
          if (Buffer2.isBuffer(signature)) {
            return signature;
          } else if ("string" === typeof signature) {
            return Buffer2.from(signature, "base64");
          }
          throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
        }
        function derToJose(signature, alg) {
          signature = signatureAsBuffer(signature);
          var paramBytes = getParamBytesForAlg(alg);
          var maxEncodedParamLength = paramBytes + 1;
          var inputLength = signature.length;
          var offset = 0;
          if (signature[offset++] !== ENCODED_TAG_SEQ) {
            throw new Error('Could not find expected "seq"');
          }
          var seqLength = signature[offset++];
          if (seqLength === (MAX_OCTET | 1)) {
            seqLength = signature[offset++];
          }
          if (inputLength - offset < seqLength) {
            throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
          }
          if (signature[offset++] !== ENCODED_TAG_INT) {
            throw new Error('Could not find expected "int" for "r"');
          }
          var rLength = signature[offset++];
          if (inputLength - offset - 2 < rLength) {
            throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
          }
          if (maxEncodedParamLength < rLength) {
            throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
          }
          var rOffset = offset;
          offset += rLength;
          if (signature[offset++] !== ENCODED_TAG_INT) {
            throw new Error('Could not find expected "int" for "s"');
          }
          var sLength = signature[offset++];
          if (inputLength - offset !== sLength) {
            throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
          }
          if (maxEncodedParamLength < sLength) {
            throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
          }
          var sOffset = offset;
          offset += sLength;
          if (offset !== inputLength) {
            throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
          }
          var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
          var dst = Buffer2.allocUnsafe(rPadding + rLength + sPadding + sLength);
          for (offset = 0; offset < rPadding; ++offset) {
            dst[offset] = 0;
          }
          signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
          offset = paramBytes;
          for (var o = offset; offset < o + sPadding; ++offset) {
            dst[offset] = 0;
          }
          signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
          dst = dst.toString("base64");
          dst = base64Url(dst);
          return dst;
        }
        function countPadding(buf, start, stop) {
          var padding = 0;
          while (start + padding < stop && buf[start + padding] === 0) {
            ++padding;
          }
          var needsSign = buf[start + padding] >= MAX_OCTET;
          if (needsSign) {
            --padding;
          }
          return padding;
        }
        function joseToDer(signature, alg) {
          signature = signatureAsBuffer(signature);
          var paramBytes = getParamBytesForAlg(alg);
          var signatureBytes = signature.length;
          if (signatureBytes !== paramBytes * 2) {
            throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
          }
          var rPadding = countPadding(signature, 0, paramBytes);
          var sPadding = countPadding(signature, paramBytes, signature.length);
          var rLength = paramBytes - rPadding;
          var sLength = paramBytes - sPadding;
          var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
          var shortLength = rsBytes < MAX_OCTET;
          var dst = Buffer2.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
          var offset = 0;
          dst[offset++] = ENCODED_TAG_SEQ;
          if (shortLength) {
            dst[offset++] = rsBytes;
          } else {
            dst[offset++] = MAX_OCTET | 1;
            dst[offset++] = rsBytes & 255;
          }
          dst[offset++] = ENCODED_TAG_INT;
          dst[offset++] = rLength;
          if (rPadding < 0) {
            dst[offset++] = 0;
            offset += signature.copy(dst, offset, 0, paramBytes);
          } else {
            offset += signature.copy(dst, offset, rPadding, paramBytes);
          }
          dst[offset++] = ENCODED_TAG_INT;
          dst[offset++] = sLength;
          if (sPadding < 0) {
            dst[offset++] = 0;
            signature.copy(dst, offset, paramBytes);
          } else {
            signature.copy(dst, offset, paramBytes + sPadding);
          }
          return dst;
        }
        module22.exports = {
          derToJose,
          joseToDer
        };
      }
    });
    var require_jwa = __commonJS2({
      "node_modules/jwa/index.js"(exports2, module22) {
        var bufferEqual = require_buffer_equal_constant_time();
        var Buffer2 = require_safe_buffer().Buffer;
        var crypto = require("crypto");
        var formatEcdsa = require_ecdsa_sig_formatter();
        var util = require("util");
        var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
        var MSG_INVALID_SECRET = "secret must be a string or buffer";
        var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
        var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
        var supportsKeyObjects = typeof crypto.createPublicKey === "function";
        if (supportsKeyObjects) {
          MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
          MSG_INVALID_SECRET += "or a KeyObject";
        }
        function checkIsPublicKey(key) {
          if (Buffer2.isBuffer(key)) {
            return;
          }
          if (typeof key === "string") {
            return;
          }
          if (!supportsKeyObjects) {
            throw typeError(MSG_INVALID_VERIFIER_KEY);
          }
          if (typeof key !== "object") {
            throw typeError(MSG_INVALID_VERIFIER_KEY);
          }
          if (typeof key.type !== "string") {
            throw typeError(MSG_INVALID_VERIFIER_KEY);
          }
          if (typeof key.asymmetricKeyType !== "string") {
            throw typeError(MSG_INVALID_VERIFIER_KEY);
          }
          if (typeof key.export !== "function") {
            throw typeError(MSG_INVALID_VERIFIER_KEY);
          }
        }
        function checkIsPrivateKey(key) {
          if (Buffer2.isBuffer(key)) {
            return;
          }
          if (typeof key === "string") {
            return;
          }
          if (typeof key === "object") {
            return;
          }
          throw typeError(MSG_INVALID_SIGNER_KEY);
        }
        function checkIsSecretKey(key) {
          if (Buffer2.isBuffer(key)) {
            return;
          }
          if (typeof key === "string") {
            return key;
          }
          if (!supportsKeyObjects) {
            throw typeError(MSG_INVALID_SECRET);
          }
          if (typeof key !== "object") {
            throw typeError(MSG_INVALID_SECRET);
          }
          if (key.type !== "secret") {
            throw typeError(MSG_INVALID_SECRET);
          }
          if (typeof key.export !== "function") {
            throw typeError(MSG_INVALID_SECRET);
          }
        }
        function fromBase64(base64) {
          return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
        }
        function toBase64(base64url) {
          base64url = base64url.toString();
          var padding = 4 - base64url.length % 4;
          if (padding !== 4) {
            for (var i = 0; i < padding; ++i) {
              base64url += "=";
            }
          }
          return base64url.replace(/\-/g, "+").replace(/_/g, "/");
        }
        function typeError(template) {
          var args = [].slice.call(arguments, 1);
          var errMsg = util.format.bind(util, template).apply(null, args);
          return new TypeError(errMsg);
        }
        function bufferOrString(obj) {
          return Buffer2.isBuffer(obj) || typeof obj === "string";
        }
        function normalizeInput(thing) {
          if (!bufferOrString(thing))
            thing = JSON.stringify(thing);
          return thing;
        }
        function createHmacSigner(bits) {
          return function sign(thing, secret) {
            checkIsSecretKey(secret);
            thing = normalizeInput(thing);
            var hmac = crypto.createHmac("sha" + bits, secret);
            var sig = (hmac.update(thing), hmac.digest("base64"));
            return fromBase64(sig);
          };
        }
        function createHmacVerifier(bits) {
          return function verify(thing, signature, secret) {
            var computedSig = createHmacSigner(bits)(thing, secret);
            return bufferEqual(Buffer2.from(signature), Buffer2.from(computedSig));
          };
        }
        function createKeySigner(bits) {
          return function sign(thing, privateKey) {
            checkIsPrivateKey(privateKey);
            thing = normalizeInput(thing);
            var signer = crypto.createSign("RSA-SHA" + bits);
            var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
            return fromBase64(sig);
          };
        }
        function createKeyVerifier(bits) {
          return function verify(thing, signature, publicKey) {
            checkIsPublicKey(publicKey);
            thing = normalizeInput(thing);
            signature = toBase64(signature);
            var verifier = crypto.createVerify("RSA-SHA" + bits);
            verifier.update(thing);
            return verifier.verify(publicKey, signature, "base64");
          };
        }
        function createPSSKeySigner(bits) {
          return function sign(thing, privateKey) {
            checkIsPrivateKey(privateKey);
            thing = normalizeInput(thing);
            var signer = crypto.createSign("RSA-SHA" + bits);
            var sig = (signer.update(thing), signer.sign({
              key: privateKey,
              padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
              saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
            }, "base64"));
            return fromBase64(sig);
          };
        }
        function createPSSKeyVerifier(bits) {
          return function verify(thing, signature, publicKey) {
            checkIsPublicKey(publicKey);
            thing = normalizeInput(thing);
            signature = toBase64(signature);
            var verifier = crypto.createVerify("RSA-SHA" + bits);
            verifier.update(thing);
            return verifier.verify({
              key: publicKey,
              padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
              saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
            }, signature, "base64");
          };
        }
        function createECDSASigner(bits) {
          var inner = createKeySigner(bits);
          return function sign() {
            var signature = inner.apply(null, arguments);
            signature = formatEcdsa.derToJose(signature, "ES" + bits);
            return signature;
          };
        }
        function createECDSAVerifer(bits) {
          var inner = createKeyVerifier(bits);
          return function verify(thing, signature, publicKey) {
            signature = formatEcdsa.joseToDer(signature, "ES" + bits).toString("base64");
            var result = inner(thing, signature, publicKey);
            return result;
          };
        }
        function createNoneSigner() {
          return function sign() {
            return "";
          };
        }
        function createNoneVerifier() {
          return function verify(thing, signature) {
            return signature === "";
          };
        }
        module22.exports = function jwa(algorithm) {
          var signerFactories = {
            hs: createHmacSigner,
            rs: createKeySigner,
            ps: createPSSKeySigner,
            es: createECDSASigner,
            none: createNoneSigner
          };
          var verifierFactories = {
            hs: createHmacVerifier,
            rs: createKeyVerifier,
            ps: createPSSKeyVerifier,
            es: createECDSAVerifer,
            none: createNoneVerifier
          };
          var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
          if (!match)
            throw typeError(MSG_INVALID_ALGORITHM, algorithm);
          var algo = (match[1] || match[3]).toLowerCase();
          var bits = match[2];
          return {
            sign: signerFactories[algo](bits),
            verify: verifierFactories[algo](bits)
          };
        };
      }
    });
    var require_tostring = __commonJS2({
      "node_modules/jws/lib/tostring.js"(exports2, module22) {
        var Buffer2 = require("buffer").Buffer;
        module22.exports = function toString(obj) {
          if (typeof obj === "string")
            return obj;
          if (typeof obj === "number" || Buffer2.isBuffer(obj))
            return obj.toString();
          return JSON.stringify(obj);
        };
      }
    });
    var require_sign_stream = __commonJS2({
      "node_modules/jws/lib/sign-stream.js"(exports2, module22) {
        var Buffer2 = require_safe_buffer().Buffer;
        var DataStream = require_data_stream();
        var jwa = require_jwa();
        var Stream = require("stream");
        var toString = require_tostring();
        var util = require("util");
        function base64url(string, encoding) {
          return Buffer2.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
        }
        function jwsSecuredInput(header, payload, encoding) {
          encoding = encoding || "utf8";
          var encodedHeader = base64url(toString(header), "binary");
          var encodedPayload = base64url(toString(payload), encoding);
          return util.format("%s.%s", encodedHeader, encodedPayload);
        }
        function jwsSign(opts) {
          var header = opts.header;
          var payload = opts.payload;
          var secretOrKey = opts.secret || opts.privateKey;
          var encoding = opts.encoding;
          var algo = jwa(header.alg);
          var securedInput = jwsSecuredInput(header, payload, encoding);
          var signature = algo.sign(securedInput, secretOrKey);
          return util.format("%s.%s", securedInput, signature);
        }
        function SignStream(opts) {
          var secret = opts.secret || opts.privateKey || opts.key;
          var secretStream = new DataStream(secret);
          this.readable = true;
          this.header = opts.header;
          this.encoding = opts.encoding;
          this.secret = this.privateKey = this.key = secretStream;
          this.payload = new DataStream(opts.payload);
          this.secret.once("close", function() {
            if (!this.payload.writable && this.readable)
              this.sign();
          }.bind(this));
          this.payload.once("close", function() {
            if (!this.secret.writable && this.readable)
              this.sign();
          }.bind(this));
        }
        util.inherits(SignStream, Stream);
        SignStream.prototype.sign = function sign() {
          try {
            var signature = jwsSign({
              header: this.header,
              payload: this.payload.buffer,
              secret: this.secret.buffer,
              encoding: this.encoding
            });
            this.emit("done", signature);
            this.emit("data", signature);
            this.emit("end");
            this.readable = false;
            return signature;
          } catch (e) {
            this.readable = false;
            this.emit("error", e);
            this.emit("close");
          }
        };
        SignStream.sign = jwsSign;
        module22.exports = SignStream;
      }
    });
    var require_verify_stream = __commonJS2({
      "node_modules/jws/lib/verify-stream.js"(exports2, module22) {
        var Buffer2 = require_safe_buffer().Buffer;
        var DataStream = require_data_stream();
        var jwa = require_jwa();
        var Stream = require("stream");
        var toString = require_tostring();
        var util = require("util");
        var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
        function isObject(thing) {
          return Object.prototype.toString.call(thing) === "[object Object]";
        }
        function safeJsonParse(thing) {
          if (isObject(thing))
            return thing;
          try {
            return JSON.parse(thing);
          } catch (e) {
            return void 0;
          }
        }
        function headerFromJWS(jwsSig) {
          var encodedHeader = jwsSig.split(".", 1)[0];
          return safeJsonParse(Buffer2.from(encodedHeader, "base64").toString("binary"));
        }
        function securedInputFromJWS(jwsSig) {
          return jwsSig.split(".", 2).join(".");
        }
        function signatureFromJWS(jwsSig) {
          return jwsSig.split(".")[2];
        }
        function payloadFromJWS(jwsSig, encoding) {
          encoding = encoding || "utf8";
          var payload = jwsSig.split(".")[1];
          return Buffer2.from(payload, "base64").toString(encoding);
        }
        function isValidJws(string) {
          return JWS_REGEX.test(string) && !!headerFromJWS(string);
        }
        function jwsVerify(jwsSig, algorithm, secretOrKey) {
          if (!algorithm) {
            var err = new Error("Missing algorithm parameter for jws.verify");
            err.code = "MISSING_ALGORITHM";
            throw err;
          }
          jwsSig = toString(jwsSig);
          var signature = signatureFromJWS(jwsSig);
          var securedInput = securedInputFromJWS(jwsSig);
          var algo = jwa(algorithm);
          return algo.verify(securedInput, signature, secretOrKey);
        }
        function jwsDecode(jwsSig, opts) {
          opts = opts || {};
          jwsSig = toString(jwsSig);
          if (!isValidJws(jwsSig))
            return null;
          var header = headerFromJWS(jwsSig);
          if (!header)
            return null;
          var payload = payloadFromJWS(jwsSig);
          if (header.typ === "JWT" || opts.json)
            payload = JSON.parse(payload, opts.encoding);
          return {
            header,
            payload,
            signature: signatureFromJWS(jwsSig)
          };
        }
        function VerifyStream(opts) {
          opts = opts || {};
          var secretOrKey = opts.secret || opts.publicKey || opts.key;
          var secretStream = new DataStream(secretOrKey);
          this.readable = true;
          this.algorithm = opts.algorithm;
          this.encoding = opts.encoding;
          this.secret = this.publicKey = this.key = secretStream;
          this.signature = new DataStream(opts.signature);
          this.secret.once("close", function() {
            if (!this.signature.writable && this.readable)
              this.verify();
          }.bind(this));
          this.signature.once("close", function() {
            if (!this.secret.writable && this.readable)
              this.verify();
          }.bind(this));
        }
        util.inherits(VerifyStream, Stream);
        VerifyStream.prototype.verify = function verify() {
          try {
            var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
            var obj = jwsDecode(this.signature.buffer, this.encoding);
            this.emit("done", valid, obj);
            this.emit("data", valid);
            this.emit("end");
            this.readable = false;
            return valid;
          } catch (e) {
            this.readable = false;
            this.emit("error", e);
            this.emit("close");
          }
        };
        VerifyStream.decode = jwsDecode;
        VerifyStream.isValid = isValidJws;
        VerifyStream.verify = jwsVerify;
        module22.exports = VerifyStream;
      }
    });
    var require_jws = __commonJS2({
      "node_modules/jws/index.js"(exports2) {
        var SignStream = require_sign_stream();
        var VerifyStream = require_verify_stream();
        var ALGORITHMS = [
          "HS256",
          "HS384",
          "HS512",
          "RS256",
          "RS384",
          "RS512",
          "PS256",
          "PS384",
          "PS512",
          "ES256",
          "ES384",
          "ES512"
        ];
        exports2.ALGORITHMS = ALGORITHMS;
        exports2.sign = SignStream.sign;
        exports2.verify = VerifyStream.verify;
        exports2.decode = VerifyStream.decode;
        exports2.isValid = VerifyStream.isValid;
        exports2.createSign = function createSign(opts) {
          return new SignStream(opts);
        };
        exports2.createVerify = function createVerify(opts) {
          return new VerifyStream(opts);
        };
      }
    });
    var require_decode = __commonJS2({
      "node_modules/jsonwebtoken/decode.js"(exports2, module22) {
        var jws = require_jws();
        module22.exports = function(jwt2, options) {
          options = options || {};
          var decoded = jws.decode(jwt2, options);
          if (!decoded) {
            return null;
          }
          var payload = decoded.payload;
          if (typeof payload === "string") {
            try {
              var obj = JSON.parse(payload);
              if (obj !== null && typeof obj === "object") {
                payload = obj;
              }
            } catch (e) {
            }
          }
          if (options.complete === true) {
            return {
              header: decoded.header,
              payload,
              signature: decoded.signature
            };
          }
          return payload;
        };
      }
    });
    var require_JsonWebTokenError = __commonJS2({
      "node_modules/jsonwebtoken/lib/JsonWebTokenError.js"(exports2, module22) {
        var JsonWebTokenError = function(message, error) {
          Error.call(this, message);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
          }
          this.name = "JsonWebTokenError";
          this.message = message;
          if (error)
            this.inner = error;
        };
        JsonWebTokenError.prototype = Object.create(Error.prototype);
        JsonWebTokenError.prototype.constructor = JsonWebTokenError;
        module22.exports = JsonWebTokenError;
      }
    });
    var require_NotBeforeError = __commonJS2({
      "node_modules/jsonwebtoken/lib/NotBeforeError.js"(exports2, module22) {
        var JsonWebTokenError = require_JsonWebTokenError();
        var NotBeforeError = function(message, date) {
          JsonWebTokenError.call(this, message);
          this.name = "NotBeforeError";
          this.date = date;
        };
        NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
        NotBeforeError.prototype.constructor = NotBeforeError;
        module22.exports = NotBeforeError;
      }
    });
    var require_TokenExpiredError = __commonJS2({
      "node_modules/jsonwebtoken/lib/TokenExpiredError.js"(exports2, module22) {
        var JsonWebTokenError = require_JsonWebTokenError();
        var TokenExpiredError = function(message, expiredAt) {
          JsonWebTokenError.call(this, message);
          this.name = "TokenExpiredError";
          this.expiredAt = expiredAt;
        };
        TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
        TokenExpiredError.prototype.constructor = TokenExpiredError;
        module22.exports = TokenExpiredError;
      }
    });
    var require_ms = __commonJS2({
      "node_modules/ms/index.js"(exports2, module22) {
        var s = 1e3;
        var m = s * 60;
        var h = m * 60;
        var d = h * 24;
        var w = d * 7;
        var y = d * 365.25;
        module22.exports = function(val, options) {
          options = options || {};
          var type = typeof val;
          if (type === "string" && val.length > 0) {
            return parse(val);
          } else if (type === "number" && isFinite(val)) {
            return options.long ? fmtLong(val) : fmtShort(val);
          }
          throw new Error(
            "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
          );
        };
        function parse(str) {
          str = String(str);
          if (str.length > 100) {
            return;
          }
          var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            str
          );
          if (!match) {
            return;
          }
          var n = parseFloat(match[1]);
          var type = (match[2] || "ms").toLowerCase();
          switch (type) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return n * y;
            case "weeks":
            case "week":
            case "w":
              return n * w;
            case "days":
            case "day":
            case "d":
              return n * d;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return n * h;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return n * m;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return n * s;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return n;
            default:
              return void 0;
          }
        }
        function fmtShort(ms) {
          var msAbs = Math.abs(ms);
          if (msAbs >= d) {
            return Math.round(ms / d) + "d";
          }
          if (msAbs >= h) {
            return Math.round(ms / h) + "h";
          }
          if (msAbs >= m) {
            return Math.round(ms / m) + "m";
          }
          if (msAbs >= s) {
            return Math.round(ms / s) + "s";
          }
          return ms + "ms";
        }
        function fmtLong(ms) {
          var msAbs = Math.abs(ms);
          if (msAbs >= d) {
            return plural(ms, msAbs, d, "day");
          }
          if (msAbs >= h) {
            return plural(ms, msAbs, h, "hour");
          }
          if (msAbs >= m) {
            return plural(ms, msAbs, m, "minute");
          }
          if (msAbs >= s) {
            return plural(ms, msAbs, s, "second");
          }
          return ms + " ms";
        }
        function plural(ms, msAbs, n, name) {
          var isPlural = msAbs >= n * 1.5;
          return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
        }
      }
    });
    var require_timespan = __commonJS2({
      "node_modules/jsonwebtoken/lib/timespan.js"(exports2, module22) {
        var ms = require_ms();
        module22.exports = function(time, iat) {
          var timestamp = iat || Math.floor(Date.now() / 1e3);
          if (typeof time === "string") {
            var milliseconds = ms(time);
            if (typeof milliseconds === "undefined") {
              return;
            }
            return Math.floor(timestamp + milliseconds / 1e3);
          } else if (typeof time === "number") {
            return timestamp + time;
          } else {
            return;
          }
        };
      }
    });
    var require_constants = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/internal/constants.js"(exports2, module22) {
        var SEMVER_SPEC_VERSION = "2.0.0";
        var MAX_LENGTH = 256;
        var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
        9007199254740991;
        var MAX_SAFE_COMPONENT_LENGTH = 16;
        var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
        var RELEASE_TYPES = [
          "major",
          "premajor",
          "minor",
          "preminor",
          "patch",
          "prepatch",
          "prerelease"
        ];
        module22.exports = {
          MAX_LENGTH,
          MAX_SAFE_COMPONENT_LENGTH,
          MAX_SAFE_BUILD_LENGTH,
          MAX_SAFE_INTEGER,
          RELEASE_TYPES,
          SEMVER_SPEC_VERSION,
          FLAG_INCLUDE_PRERELEASE: 1,
          FLAG_LOOSE: 2
        };
      }
    });
    var require_debug = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/internal/debug.js"(exports2, module22) {
        var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
        };
        module22.exports = debug;
      }
    });
    var require_re = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/internal/re.js"(exports2, module22) {
        var {
          MAX_SAFE_COMPONENT_LENGTH,
          MAX_SAFE_BUILD_LENGTH,
          MAX_LENGTH
        } = require_constants();
        var debug = require_debug();
        exports2 = module22.exports = {};
        var re = exports2.re = [];
        var safeRe = exports2.safeRe = [];
        var src = exports2.src = [];
        var t = exports2.t = {};
        var R = 0;
        var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
        var safeRegexReplacements = [
          ["\\s", 1],
          ["\\d", MAX_LENGTH],
          [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
        ];
        var makeSafeRegex = (value) => {
          for (const [token, max] of safeRegexReplacements) {
            value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
          }
          return value;
        };
        var createToken = (name, value, isGlobal) => {
          const safe = makeSafeRegex(value);
          const index = R++;
          debug(name, index, value);
          t[name] = index;
          src[index] = value;
          re[index] = new RegExp(value, isGlobal ? "g" : void 0);
          safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
        };
        createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
        createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
        createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
        createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
        createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
        createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
        createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
        createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
        createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
        createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
        createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
        createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
        createToken("FULL", `^${src[t.FULLPLAIN]}$`);
        createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
        createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
        createToken("GTLT", "((?:<|>)?=?)");
        createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
        createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
        createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
        createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
        createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
        createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
        createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
        createToken("COERCERTL", src[t.COERCE], true);
        createToken("LONETILDE", "(?:~>?)");
        createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
        exports2.tildeTrimReplace = "$1~";
        createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
        createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
        createToken("LONECARET", "(?:\\^)");
        createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
        exports2.caretTrimReplace = "$1^";
        createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
        createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
        createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
        createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
        createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
        exports2.comparatorTrimReplace = "$1$2$3";
        createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
        createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
        createToken("STAR", "(<|>)?=?\\s*\\*");
        createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
        createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      }
    });
    var require_parse_options = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/internal/parse-options.js"(exports2, module22) {
        var looseOption = Object.freeze({ loose: true });
        var emptyOpts = Object.freeze({});
        var parseOptions = (options) => {
          if (!options) {
            return emptyOpts;
          }
          if (typeof options !== "object") {
            return looseOption;
          }
          return options;
        };
        module22.exports = parseOptions;
      }
    });
    var require_identifiers = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/internal/identifiers.js"(exports2, module22) {
        var numeric = /^[0-9]+$/;
        var compareIdentifiers = (a, b) => {
          const anum = numeric.test(a);
          const bnum = numeric.test(b);
          if (anum && bnum) {
            a = +a;
            b = +b;
          }
          return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
        };
        var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
        module22.exports = {
          compareIdentifiers,
          rcompareIdentifiers
        };
      }
    });
    var require_semver = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/classes/semver.js"(exports2, module22) {
        var debug = require_debug();
        var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
        var { safeRe: re, t } = require_re();
        var parseOptions = require_parse_options();
        var { compareIdentifiers } = require_identifiers();
        var SemVer = class _SemVer {
          constructor(version, options) {
            options = parseOptions(options);
            if (version instanceof _SemVer) {
              if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
                return version;
              } else {
                version = version.version;
              }
            } else if (typeof version !== "string") {
              throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
            }
            if (version.length > MAX_LENGTH) {
              throw new TypeError(
                `version is longer than ${MAX_LENGTH} characters`
              );
            }
            debug("SemVer", version, options);
            this.options = options;
            this.loose = !!options.loose;
            this.includePrerelease = !!options.includePrerelease;
            const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
            if (!m) {
              throw new TypeError(`Invalid Version: ${version}`);
            }
            this.raw = version;
            this.major = +m[1];
            this.minor = +m[2];
            this.patch = +m[3];
            if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
              throw new TypeError("Invalid major version");
            }
            if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
              throw new TypeError("Invalid minor version");
            }
            if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
              throw new TypeError("Invalid patch version");
            }
            if (!m[4]) {
              this.prerelease = [];
            } else {
              this.prerelease = m[4].split(".").map((id) => {
                if (/^[0-9]+$/.test(id)) {
                  const num = +id;
                  if (num >= 0 && num < MAX_SAFE_INTEGER) {
                    return num;
                  }
                }
                return id;
              });
            }
            this.build = m[5] ? m[5].split(".") : [];
            this.format();
          }
          format() {
            this.version = `${this.major}.${this.minor}.${this.patch}`;
            if (this.prerelease.length) {
              this.version += `-${this.prerelease.join(".")}`;
            }
            return this.version;
          }
          toString() {
            return this.version;
          }
          compare(other) {
            debug("SemVer.compare", this.version, this.options, other);
            if (!(other instanceof _SemVer)) {
              if (typeof other === "string" && other === this.version) {
                return 0;
              }
              other = new _SemVer(other, this.options);
            }
            if (other.version === this.version) {
              return 0;
            }
            return this.compareMain(other) || this.comparePre(other);
          }
          compareMain(other) {
            if (!(other instanceof _SemVer)) {
              other = new _SemVer(other, this.options);
            }
            return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
          }
          comparePre(other) {
            if (!(other instanceof _SemVer)) {
              other = new _SemVer(other, this.options);
            }
            if (this.prerelease.length && !other.prerelease.length) {
              return -1;
            } else if (!this.prerelease.length && other.prerelease.length) {
              return 1;
            } else if (!this.prerelease.length && !other.prerelease.length) {
              return 0;
            }
            let i = 0;
            do {
              const a = this.prerelease[i];
              const b = other.prerelease[i];
              debug("prerelease compare", i, a, b);
              if (a === void 0 && b === void 0) {
                return 0;
              } else if (b === void 0) {
                return 1;
              } else if (a === void 0) {
                return -1;
              } else if (a === b) {
                continue;
              } else {
                return compareIdentifiers(a, b);
              }
            } while (++i);
          }
          compareBuild(other) {
            if (!(other instanceof _SemVer)) {
              other = new _SemVer(other, this.options);
            }
            let i = 0;
            do {
              const a = this.build[i];
              const b = other.build[i];
              debug("prerelease compare", i, a, b);
              if (a === void 0 && b === void 0) {
                return 0;
              } else if (b === void 0) {
                return 1;
              } else if (a === void 0) {
                return -1;
              } else if (a === b) {
                continue;
              } else {
                return compareIdentifiers(a, b);
              }
            } while (++i);
          }
          // preminor will bump the version up to the next minor release, and immediately
          // down to pre-release. premajor and prepatch work the same way.
          inc(release, identifier, identifierBase) {
            switch (release) {
              case "premajor":
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc("pre", identifier, identifierBase);
                break;
              case "preminor":
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc("pre", identifier, identifierBase);
                break;
              case "prepatch":
                this.prerelease.length = 0;
                this.inc("patch", identifier, identifierBase);
                this.inc("pre", identifier, identifierBase);
                break;
              case "prerelease":
                if (this.prerelease.length === 0) {
                  this.inc("patch", identifier, identifierBase);
                }
                this.inc("pre", identifier, identifierBase);
                break;
              case "major":
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                  this.major++;
                }
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
              case "minor":
                if (this.patch !== 0 || this.prerelease.length === 0) {
                  this.minor++;
                }
                this.patch = 0;
                this.prerelease = [];
                break;
              case "patch":
                if (this.prerelease.length === 0) {
                  this.patch++;
                }
                this.prerelease = [];
                break;
              case "pre": {
                const base = Number(identifierBase) ? 1 : 0;
                if (!identifier && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier is empty");
                }
                if (this.prerelease.length === 0) {
                  this.prerelease = [base];
                } else {
                  let i = this.prerelease.length;
                  while (--i >= 0) {
                    if (typeof this.prerelease[i] === "number") {
                      this.prerelease[i]++;
                      i = -2;
                    }
                  }
                  if (i === -1) {
                    if (identifier === this.prerelease.join(".") && identifierBase === false) {
                      throw new Error("invalid increment argument: identifier already exists");
                    }
                    this.prerelease.push(base);
                  }
                }
                if (identifier) {
                  let prerelease = [identifier, base];
                  if (identifierBase === false) {
                    prerelease = [identifier];
                  }
                  if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                    if (isNaN(this.prerelease[1])) {
                      this.prerelease = prerelease;
                    }
                  } else {
                    this.prerelease = prerelease;
                  }
                }
                break;
              }
              default:
                throw new Error(`invalid increment argument: ${release}`);
            }
            this.raw = this.format();
            if (this.build.length) {
              this.raw += `+${this.build.join(".")}`;
            }
            return this;
          }
        };
        module22.exports = SemVer;
      }
    });
    var require_parse = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/parse.js"(exports2, module22) {
        var SemVer = require_semver();
        var parse = (version, options, throwErrors = false) => {
          if (version instanceof SemVer) {
            return version;
          }
          try {
            return new SemVer(version, options);
          } catch (er) {
            if (!throwErrors) {
              return null;
            }
            throw er;
          }
        };
        module22.exports = parse;
      }
    });
    var require_valid = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/valid.js"(exports2, module22) {
        var parse = require_parse();
        var valid = (version, options) => {
          const v = parse(version, options);
          return v ? v.version : null;
        };
        module22.exports = valid;
      }
    });
    var require_clean = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/clean.js"(exports2, module22) {
        var parse = require_parse();
        var clean = (version, options) => {
          const s = parse(version.trim().replace(/^[=v]+/, ""), options);
          return s ? s.version : null;
        };
        module22.exports = clean;
      }
    });
    var require_inc = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/inc.js"(exports2, module22) {
        var SemVer = require_semver();
        var inc = (version, release, options, identifier, identifierBase) => {
          if (typeof options === "string") {
            identifierBase = identifier;
            identifier = options;
            options = void 0;
          }
          try {
            return new SemVer(
              version instanceof SemVer ? version.version : version,
              options
            ).inc(release, identifier, identifierBase).version;
          } catch (er) {
            return null;
          }
        };
        module22.exports = inc;
      }
    });
    var require_diff = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/diff.js"(exports2, module22) {
        var parse = require_parse();
        var diff = (version1, version2) => {
          const v1 = parse(version1, null, true);
          const v2 = parse(version2, null, true);
          const comparison = v1.compare(v2);
          if (comparison === 0) {
            return null;
          }
          const v1Higher = comparison > 0;
          const highVersion = v1Higher ? v1 : v2;
          const lowVersion = v1Higher ? v2 : v1;
          const highHasPre = !!highVersion.prerelease.length;
          const lowHasPre = !!lowVersion.prerelease.length;
          if (lowHasPre && !highHasPre) {
            if (!lowVersion.patch && !lowVersion.minor) {
              return "major";
            }
            if (highVersion.patch) {
              return "patch";
            }
            if (highVersion.minor) {
              return "minor";
            }
            return "major";
          }
          const prefix = highHasPre ? "pre" : "";
          if (v1.major !== v2.major) {
            return prefix + "major";
          }
          if (v1.minor !== v2.minor) {
            return prefix + "minor";
          }
          if (v1.patch !== v2.patch) {
            return prefix + "patch";
          }
          return "prerelease";
        };
        module22.exports = diff;
      }
    });
    var require_major = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/major.js"(exports2, module22) {
        var SemVer = require_semver();
        var major = (a, loose) => new SemVer(a, loose).major;
        module22.exports = major;
      }
    });
    var require_minor = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/minor.js"(exports2, module22) {
        var SemVer = require_semver();
        var minor = (a, loose) => new SemVer(a, loose).minor;
        module22.exports = minor;
      }
    });
    var require_patch = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/patch.js"(exports2, module22) {
        var SemVer = require_semver();
        var patch = (a, loose) => new SemVer(a, loose).patch;
        module22.exports = patch;
      }
    });
    var require_prerelease = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/prerelease.js"(exports2, module22) {
        var parse = require_parse();
        var prerelease = (version, options) => {
          const parsed = parse(version, options);
          return parsed && parsed.prerelease.length ? parsed.prerelease : null;
        };
        module22.exports = prerelease;
      }
    });
    var require_compare = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/compare.js"(exports2, module22) {
        var SemVer = require_semver();
        var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
        module22.exports = compare;
      }
    });
    var require_rcompare = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/rcompare.js"(exports2, module22) {
        var compare = require_compare();
        var rcompare = (a, b, loose) => compare(b, a, loose);
        module22.exports = rcompare;
      }
    });
    var require_compare_loose = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/compare-loose.js"(exports2, module22) {
        var compare = require_compare();
        var compareLoose = (a, b) => compare(a, b, true);
        module22.exports = compareLoose;
      }
    });
    var require_compare_build = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/compare-build.js"(exports2, module22) {
        var SemVer = require_semver();
        var compareBuild = (a, b, loose) => {
          const versionA = new SemVer(a, loose);
          const versionB = new SemVer(b, loose);
          return versionA.compare(versionB) || versionA.compareBuild(versionB);
        };
        module22.exports = compareBuild;
      }
    });
    var require_sort = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/sort.js"(exports2, module22) {
        var compareBuild = require_compare_build();
        var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
        module22.exports = sort;
      }
    });
    var require_rsort = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/rsort.js"(exports2, module22) {
        var compareBuild = require_compare_build();
        var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
        module22.exports = rsort;
      }
    });
    var require_gt = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/gt.js"(exports2, module22) {
        var compare = require_compare();
        var gt = (a, b, loose) => compare(a, b, loose) > 0;
        module22.exports = gt;
      }
    });
    var require_lt = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/lt.js"(exports2, module22) {
        var compare = require_compare();
        var lt = (a, b, loose) => compare(a, b, loose) < 0;
        module22.exports = lt;
      }
    });
    var require_eq = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/eq.js"(exports2, module22) {
        var compare = require_compare();
        var eq = (a, b, loose) => compare(a, b, loose) === 0;
        module22.exports = eq;
      }
    });
    var require_neq = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/neq.js"(exports2, module22) {
        var compare = require_compare();
        var neq = (a, b, loose) => compare(a, b, loose) !== 0;
        module22.exports = neq;
      }
    });
    var require_gte = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/gte.js"(exports2, module22) {
        var compare = require_compare();
        var gte = (a, b, loose) => compare(a, b, loose) >= 0;
        module22.exports = gte;
      }
    });
    var require_lte = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/lte.js"(exports2, module22) {
        var compare = require_compare();
        var lte = (a, b, loose) => compare(a, b, loose) <= 0;
        module22.exports = lte;
      }
    });
    var require_cmp = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/cmp.js"(exports2, module22) {
        var eq = require_eq();
        var neq = require_neq();
        var gt = require_gt();
        var gte = require_gte();
        var lt = require_lt();
        var lte = require_lte();
        var cmp = (a, op, b, loose) => {
          switch (op) {
            case "===":
              if (typeof a === "object") {
                a = a.version;
              }
              if (typeof b === "object") {
                b = b.version;
              }
              return a === b;
            case "!==":
              if (typeof a === "object") {
                a = a.version;
              }
              if (typeof b === "object") {
                b = b.version;
              }
              return a !== b;
            case "":
            case "=":
            case "==":
              return eq(a, b, loose);
            case "!=":
              return neq(a, b, loose);
            case ">":
              return gt(a, b, loose);
            case ">=":
              return gte(a, b, loose);
            case "<":
              return lt(a, b, loose);
            case "<=":
              return lte(a, b, loose);
            default:
              throw new TypeError(`Invalid operator: ${op}`);
          }
        };
        module22.exports = cmp;
      }
    });
    var require_coerce = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/coerce.js"(exports2, module22) {
        var SemVer = require_semver();
        var parse = require_parse();
        var { safeRe: re, t } = require_re();
        var coerce = (version, options) => {
          if (version instanceof SemVer) {
            return version;
          }
          if (typeof version === "number") {
            version = String(version);
          }
          if (typeof version !== "string") {
            return null;
          }
          options = options || {};
          let match = null;
          if (!options.rtl) {
            match = version.match(re[t.COERCE]);
          } else {
            let next;
            while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
              if (!match || next.index + next[0].length !== match.index + match[0].length) {
                match = next;
              }
              re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
            }
            re[t.COERCERTL].lastIndex = -1;
          }
          if (match === null) {
            return null;
          }
          return parse(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options);
        };
        module22.exports = coerce;
      }
    });
    var require_iterator = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/yallist/iterator.js"(exports2, module22) {
        "use strict";
        module22.exports = function(Yallist) {
          Yallist.prototype[Symbol.iterator] = function* () {
            for (let walker = this.head; walker; walker = walker.next) {
              yield walker.value;
            }
          };
        };
      }
    });
    var require_yallist = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/yallist/yallist.js"(exports2, module22) {
        "use strict";
        module22.exports = Yallist;
        Yallist.Node = Node;
        Yallist.create = Yallist;
        function Yallist(list) {
          var self2 = this;
          if (!(self2 instanceof Yallist)) {
            self2 = new Yallist();
          }
          self2.tail = null;
          self2.head = null;
          self2.length = 0;
          if (list && typeof list.forEach === "function") {
            list.forEach(function(item) {
              self2.push(item);
            });
          } else if (arguments.length > 0) {
            for (var i = 0, l = arguments.length; i < l; i++) {
              self2.push(arguments[i]);
            }
          }
          return self2;
        }
        Yallist.prototype.removeNode = function(node) {
          if (node.list !== this) {
            throw new Error("removing node which does not belong to this list");
          }
          var next = node.next;
          var prev = node.prev;
          if (next) {
            next.prev = prev;
          }
          if (prev) {
            prev.next = next;
          }
          if (node === this.head) {
            this.head = next;
          }
          if (node === this.tail) {
            this.tail = prev;
          }
          node.list.length--;
          node.next = null;
          node.prev = null;
          node.list = null;
          return next;
        };
        Yallist.prototype.unshiftNode = function(node) {
          if (node === this.head) {
            return;
          }
          if (node.list) {
            node.list.removeNode(node);
          }
          var head = this.head;
          node.list = this;
          node.next = head;
          if (head) {
            head.prev = node;
          }
          this.head = node;
          if (!this.tail) {
            this.tail = node;
          }
          this.length++;
        };
        Yallist.prototype.pushNode = function(node) {
          if (node === this.tail) {
            return;
          }
          if (node.list) {
            node.list.removeNode(node);
          }
          var tail = this.tail;
          node.list = this;
          node.prev = tail;
          if (tail) {
            tail.next = node;
          }
          this.tail = node;
          if (!this.head) {
            this.head = node;
          }
          this.length++;
        };
        Yallist.prototype.push = function() {
          for (var i = 0, l = arguments.length; i < l; i++) {
            push(this, arguments[i]);
          }
          return this.length;
        };
        Yallist.prototype.unshift = function() {
          for (var i = 0, l = arguments.length; i < l; i++) {
            unshift(this, arguments[i]);
          }
          return this.length;
        };
        Yallist.prototype.pop = function() {
          if (!this.tail) {
            return void 0;
          }
          var res = this.tail.value;
          this.tail = this.tail.prev;
          if (this.tail) {
            this.tail.next = null;
          } else {
            this.head = null;
          }
          this.length--;
          return res;
        };
        Yallist.prototype.shift = function() {
          if (!this.head) {
            return void 0;
          }
          var res = this.head.value;
          this.head = this.head.next;
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null;
          }
          this.length--;
          return res;
        };
        Yallist.prototype.forEach = function(fn, thisp) {
          thisp = thisp || this;
          for (var walker = this.head, i = 0; walker !== null; i++) {
            fn.call(thisp, walker.value, i, this);
            walker = walker.next;
          }
        };
        Yallist.prototype.forEachReverse = function(fn, thisp) {
          thisp = thisp || this;
          for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
            fn.call(thisp, walker.value, i, this);
            walker = walker.prev;
          }
        };
        Yallist.prototype.get = function(n) {
          for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
            walker = walker.next;
          }
          if (i === n && walker !== null) {
            return walker.value;
          }
        };
        Yallist.prototype.getReverse = function(n) {
          for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
            walker = walker.prev;
          }
          if (i === n && walker !== null) {
            return walker.value;
          }
        };
        Yallist.prototype.map = function(fn, thisp) {
          thisp = thisp || this;
          var res = new Yallist();
          for (var walker = this.head; walker !== null; ) {
            res.push(fn.call(thisp, walker.value, this));
            walker = walker.next;
          }
          return res;
        };
        Yallist.prototype.mapReverse = function(fn, thisp) {
          thisp = thisp || this;
          var res = new Yallist();
          for (var walker = this.tail; walker !== null; ) {
            res.push(fn.call(thisp, walker.value, this));
            walker = walker.prev;
          }
          return res;
        };
        Yallist.prototype.reduce = function(fn, initial) {
          var acc;
          var walker = this.head;
          if (arguments.length > 1) {
            acc = initial;
          } else if (this.head) {
            walker = this.head.next;
            acc = this.head.value;
          } else {
            throw new TypeError("Reduce of empty list with no initial value");
          }
          for (var i = 0; walker !== null; i++) {
            acc = fn(acc, walker.value, i);
            walker = walker.next;
          }
          return acc;
        };
        Yallist.prototype.reduceReverse = function(fn, initial) {
          var acc;
          var walker = this.tail;
          if (arguments.length > 1) {
            acc = initial;
          } else if (this.tail) {
            walker = this.tail.prev;
            acc = this.tail.value;
          } else {
            throw new TypeError("Reduce of empty list with no initial value");
          }
          for (var i = this.length - 1; walker !== null; i--) {
            acc = fn(acc, walker.value, i);
            walker = walker.prev;
          }
          return acc;
        };
        Yallist.prototype.toArray = function() {
          var arr = new Array(this.length);
          for (var i = 0, walker = this.head; walker !== null; i++) {
            arr[i] = walker.value;
            walker = walker.next;
          }
          return arr;
        };
        Yallist.prototype.toArrayReverse = function() {
          var arr = new Array(this.length);
          for (var i = 0, walker = this.tail; walker !== null; i++) {
            arr[i] = walker.value;
            walker = walker.prev;
          }
          return arr;
        };
        Yallist.prototype.slice = function(from, to) {
          to = to || this.length;
          if (to < 0) {
            to += this.length;
          }
          from = from || 0;
          if (from < 0) {
            from += this.length;
          }
          var ret = new Yallist();
          if (to < from || to < 0) {
            return ret;
          }
          if (from < 0) {
            from = 0;
          }
          if (to > this.length) {
            to = this.length;
          }
          for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
            walker = walker.next;
          }
          for (; walker !== null && i < to; i++, walker = walker.next) {
            ret.push(walker.value);
          }
          return ret;
        };
        Yallist.prototype.sliceReverse = function(from, to) {
          to = to || this.length;
          if (to < 0) {
            to += this.length;
          }
          from = from || 0;
          if (from < 0) {
            from += this.length;
          }
          var ret = new Yallist();
          if (to < from || to < 0) {
            return ret;
          }
          if (from < 0) {
            from = 0;
          }
          if (to > this.length) {
            to = this.length;
          }
          for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
            walker = walker.prev;
          }
          for (; walker !== null && i > from; i--, walker = walker.prev) {
            ret.push(walker.value);
          }
          return ret;
        };
        Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
          if (start > this.length) {
            start = this.length - 1;
          }
          if (start < 0) {
            start = this.length + start;
          }
          for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
            walker = walker.next;
          }
          var ret = [];
          for (var i = 0; walker && i < deleteCount; i++) {
            ret.push(walker.value);
            walker = this.removeNode(walker);
          }
          if (walker === null) {
            walker = this.tail;
          }
          if (walker !== this.head && walker !== this.tail) {
            walker = walker.prev;
          }
          for (var i = 0; i < nodes.length; i++) {
            walker = insert(this, walker, nodes[i]);
          }
          return ret;
        };
        Yallist.prototype.reverse = function() {
          var head = this.head;
          var tail = this.tail;
          for (var walker = head; walker !== null; walker = walker.prev) {
            var p = walker.prev;
            walker.prev = walker.next;
            walker.next = p;
          }
          this.head = tail;
          this.tail = head;
          return this;
        };
        function insert(self2, node, value) {
          var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2);
          if (inserted.next === null) {
            self2.tail = inserted;
          }
          if (inserted.prev === null) {
            self2.head = inserted;
          }
          self2.length++;
          return inserted;
        }
        function push(self2, item) {
          self2.tail = new Node(item, self2.tail, null, self2);
          if (!self2.head) {
            self2.head = self2.tail;
          }
          self2.length++;
        }
        function unshift(self2, item) {
          self2.head = new Node(item, null, self2.head, self2);
          if (!self2.tail) {
            self2.tail = self2.head;
          }
          self2.length++;
        }
        function Node(value, prev, next, list) {
          if (!(this instanceof Node)) {
            return new Node(value, prev, next, list);
          }
          this.list = list;
          this.value = value;
          if (prev) {
            prev.next = this;
            this.prev = prev;
          } else {
            this.prev = null;
          }
          if (next) {
            next.prev = this;
            this.next = next;
          } else {
            this.next = null;
          }
        }
        try {
          require_iterator()(Yallist);
        } catch (er) {
        }
      }
    });
    var require_lru_cache = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/lru-cache/index.js"(exports2, module22) {
        "use strict";
        var Yallist = require_yallist();
        var MAX = Symbol("max");
        var LENGTH = Symbol("length");
        var LENGTH_CALCULATOR = Symbol("lengthCalculator");
        var ALLOW_STALE = Symbol("allowStale");
        var MAX_AGE = Symbol("maxAge");
        var DISPOSE = Symbol("dispose");
        var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
        var LRU_LIST = Symbol("lruList");
        var CACHE = Symbol("cache");
        var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
        var naiveLength = () => 1;
        var LRUCache = class {
          constructor(options) {
            if (typeof options === "number")
              options = { max: options };
            if (!options)
              options = {};
            if (options.max && (typeof options.max !== "number" || options.max < 0))
              throw new TypeError("max must be a non-negative number");
            const max = this[MAX] = options.max || Infinity;
            const lc = options.length || naiveLength;
            this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
            this[ALLOW_STALE] = options.stale || false;
            if (options.maxAge && typeof options.maxAge !== "number")
              throw new TypeError("maxAge must be a number");
            this[MAX_AGE] = options.maxAge || 0;
            this[DISPOSE] = options.dispose;
            this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
            this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
            this.reset();
          }
          // resize the cache when the max changes.
          set max(mL) {
            if (typeof mL !== "number" || mL < 0)
              throw new TypeError("max must be a non-negative number");
            this[MAX] = mL || Infinity;
            trim(this);
          }
          get max() {
            return this[MAX];
          }
          set allowStale(allowStale) {
            this[ALLOW_STALE] = !!allowStale;
          }
          get allowStale() {
            return this[ALLOW_STALE];
          }
          set maxAge(mA) {
            if (typeof mA !== "number")
              throw new TypeError("maxAge must be a non-negative number");
            this[MAX_AGE] = mA;
            trim(this);
          }
          get maxAge() {
            return this[MAX_AGE];
          }
          // resize the cache when the lengthCalculator changes.
          set lengthCalculator(lC) {
            if (typeof lC !== "function")
              lC = naiveLength;
            if (lC !== this[LENGTH_CALCULATOR]) {
              this[LENGTH_CALCULATOR] = lC;
              this[LENGTH] = 0;
              this[LRU_LIST].forEach((hit) => {
                hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
                this[LENGTH] += hit.length;
              });
            }
            trim(this);
          }
          get lengthCalculator() {
            return this[LENGTH_CALCULATOR];
          }
          get length() {
            return this[LENGTH];
          }
          get itemCount() {
            return this[LRU_LIST].length;
          }
          rforEach(fn, thisp) {
            thisp = thisp || this;
            for (let walker = this[LRU_LIST].tail; walker !== null; ) {
              const prev = walker.prev;
              forEachStep(this, fn, walker, thisp);
              walker = prev;
            }
          }
          forEach(fn, thisp) {
            thisp = thisp || this;
            for (let walker = this[LRU_LIST].head; walker !== null; ) {
              const next = walker.next;
              forEachStep(this, fn, walker, thisp);
              walker = next;
            }
          }
          keys() {
            return this[LRU_LIST].toArray().map((k) => k.key);
          }
          values() {
            return this[LRU_LIST].toArray().map((k) => k.value);
          }
          reset() {
            if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
              this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
            }
            this[CACHE] = /* @__PURE__ */ new Map();
            this[LRU_LIST] = new Yallist();
            this[LENGTH] = 0;
          }
          dump() {
            return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
              k: hit.key,
              v: hit.value,
              e: hit.now + (hit.maxAge || 0)
            }).toArray().filter((h) => h);
          }
          dumpLru() {
            return this[LRU_LIST];
          }
          set(key, value, maxAge) {
            maxAge = maxAge || this[MAX_AGE];
            if (maxAge && typeof maxAge !== "number")
              throw new TypeError("maxAge must be a number");
            const now = maxAge ? Date.now() : 0;
            const len = this[LENGTH_CALCULATOR](value, key);
            if (this[CACHE].has(key)) {
              if (len > this[MAX]) {
                del(this, this[CACHE].get(key));
                return false;
              }
              const node = this[CACHE].get(key);
              const item = node.value;
              if (this[DISPOSE]) {
                if (!this[NO_DISPOSE_ON_SET])
                  this[DISPOSE](key, item.value);
              }
              item.now = now;
              item.maxAge = maxAge;
              item.value = value;
              this[LENGTH] += len - item.length;
              item.length = len;
              this.get(key);
              trim(this);
              return true;
            }
            const hit = new Entry(key, value, len, now, maxAge);
            if (hit.length > this[MAX]) {
              if (this[DISPOSE])
                this[DISPOSE](key, value);
              return false;
            }
            this[LENGTH] += hit.length;
            this[LRU_LIST].unshift(hit);
            this[CACHE].set(key, this[LRU_LIST].head);
            trim(this);
            return true;
          }
          has(key) {
            if (!this[CACHE].has(key))
              return false;
            const hit = this[CACHE].get(key).value;
            return !isStale(this, hit);
          }
          get(key) {
            return get(this, key, true);
          }
          peek(key) {
            return get(this, key, false);
          }
          pop() {
            const node = this[LRU_LIST].tail;
            if (!node)
              return null;
            del(this, node);
            return node.value;
          }
          del(key) {
            del(this, this[CACHE].get(key));
          }
          load(arr) {
            this.reset();
            const now = Date.now();
            for (let l = arr.length - 1; l >= 0; l--) {
              const hit = arr[l];
              const expiresAt = hit.e || 0;
              if (expiresAt === 0)
                this.set(hit.k, hit.v);
              else {
                const maxAge = expiresAt - now;
                if (maxAge > 0) {
                  this.set(hit.k, hit.v, maxAge);
                }
              }
            }
          }
          prune() {
            this[CACHE].forEach((value, key) => get(this, key, false));
          }
        };
        var get = (self2, key, doUse) => {
          const node = self2[CACHE].get(key);
          if (node) {
            const hit = node.value;
            if (isStale(self2, hit)) {
              del(self2, node);
              if (!self2[ALLOW_STALE])
                return void 0;
            } else {
              if (doUse) {
                if (self2[UPDATE_AGE_ON_GET])
                  node.value.now = Date.now();
                self2[LRU_LIST].unshiftNode(node);
              }
            }
            return hit.value;
          }
        };
        var isStale = (self2, hit) => {
          if (!hit || !hit.maxAge && !self2[MAX_AGE])
            return false;
          const diff = Date.now() - hit.now;
          return hit.maxAge ? diff > hit.maxAge : self2[MAX_AGE] && diff > self2[MAX_AGE];
        };
        var trim = (self2) => {
          if (self2[LENGTH] > self2[MAX]) {
            for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
              const prev = walker.prev;
              del(self2, walker);
              walker = prev;
            }
          }
        };
        var del = (self2, node) => {
          if (node) {
            const hit = node.value;
            if (self2[DISPOSE])
              self2[DISPOSE](hit.key, hit.value);
            self2[LENGTH] -= hit.length;
            self2[CACHE].delete(hit.key);
            self2[LRU_LIST].removeNode(node);
          }
        };
        var Entry = class {
          constructor(key, value, length, now, maxAge) {
            this.key = key;
            this.value = value;
            this.length = length;
            this.now = now;
            this.maxAge = maxAge || 0;
          }
        };
        var forEachStep = (self2, fn, node, thisp) => {
          let hit = node.value;
          if (isStale(self2, hit)) {
            del(self2, node);
            if (!self2[ALLOW_STALE])
              hit = void 0;
          }
          if (hit)
            fn.call(thisp, hit.value, hit.key, self2);
        };
        module22.exports = LRUCache;
      }
    });
    var require_range = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/classes/range.js"(exports2, module22) {
        var Range = class _Range {
          constructor(range, options) {
            options = parseOptions(options);
            if (range instanceof _Range) {
              if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
                return range;
              } else {
                return new _Range(range.raw, options);
              }
            }
            if (range instanceof Comparator) {
              this.raw = range.value;
              this.set = [[range]];
              this.format();
              return this;
            }
            this.options = options;
            this.loose = !!options.loose;
            this.includePrerelease = !!options.includePrerelease;
            this.raw = range.trim().split(/\s+/).join(" ");
            this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
            if (!this.set.length) {
              throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
            }
            if (this.set.length > 1) {
              const first = this.set[0];
              this.set = this.set.filter((c) => !isNullSet(c[0]));
              if (this.set.length === 0) {
                this.set = [first];
              } else if (this.set.length > 1) {
                for (const c of this.set) {
                  if (c.length === 1 && isAny(c[0])) {
                    this.set = [c];
                    break;
                  }
                }
              }
            }
            this.format();
          }
          format() {
            this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
            return this.range;
          }
          toString() {
            return this.range;
          }
          parseRange(range) {
            const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
            const memoKey = memoOpts + ":" + range;
            const cached = cache.get(memoKey);
            if (cached) {
              return cached;
            }
            const loose = this.options.loose;
            const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
            range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
            debug("hyphen replace", range);
            range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
            debug("comparator trim", range);
            range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
            debug("tilde trim", range);
            range = range.replace(re[t.CARETTRIM], caretTrimReplace);
            debug("caret trim", range);
            let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
            if (loose) {
              rangeList = rangeList.filter((comp) => {
                debug("loose invalid filter", comp, this.options);
                return !!comp.match(re[t.COMPARATORLOOSE]);
              });
            }
            debug("range list", rangeList);
            const rangeMap = /* @__PURE__ */ new Map();
            const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
            for (const comp of comparators) {
              if (isNullSet(comp)) {
                return [comp];
              }
              rangeMap.set(comp.value, comp);
            }
            if (rangeMap.size > 1 && rangeMap.has("")) {
              rangeMap.delete("");
            }
            const result = [...rangeMap.values()];
            cache.set(memoKey, result);
            return result;
          }
          intersects(range, options) {
            if (!(range instanceof _Range)) {
              throw new TypeError("a Range is required");
            }
            return this.set.some((thisComparators) => {
              return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
                return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
                  return rangeComparators.every((rangeComparator) => {
                    return thisComparator.intersects(rangeComparator, options);
                  });
                });
              });
            });
          }
          // if ANY of the sets match ALL of its comparators, then pass
          test(version) {
            if (!version) {
              return false;
            }
            if (typeof version === "string") {
              try {
                version = new SemVer(version, this.options);
              } catch (er) {
                return false;
              }
            }
            for (let i = 0; i < this.set.length; i++) {
              if (testSet(this.set[i], version, this.options)) {
                return true;
              }
            }
            return false;
          }
        };
        module22.exports = Range;
        var LRU = require_lru_cache();
        var cache = new LRU({ max: 1e3 });
        var parseOptions = require_parse_options();
        var Comparator = require_comparator();
        var debug = require_debug();
        var SemVer = require_semver();
        var {
          safeRe: re,
          t,
          comparatorTrimReplace,
          tildeTrimReplace,
          caretTrimReplace
        } = require_re();
        var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
        var isNullSet = (c) => c.value === "<0.0.0-0";
        var isAny = (c) => c.value === "";
        var isSatisfiable = (comparators, options) => {
          let result = true;
          const remainingComparators = comparators.slice();
          let testComparator = remainingComparators.pop();
          while (result && remainingComparators.length) {
            result = remainingComparators.every((otherComparator) => {
              return testComparator.intersects(otherComparator, options);
            });
            testComparator = remainingComparators.pop();
          }
          return result;
        };
        var parseComparator = (comp, options) => {
          debug("comp", comp, options);
          comp = replaceCarets(comp, options);
          debug("caret", comp);
          comp = replaceTildes(comp, options);
          debug("tildes", comp);
          comp = replaceXRanges(comp, options);
          debug("xrange", comp);
          comp = replaceStars(comp, options);
          debug("stars", comp);
          return comp;
        };
        var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
        var replaceTildes = (comp, options) => {
          return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
        };
        var replaceTilde = (comp, options) => {
          const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
          return comp.replace(r, (_, M, m, p, pr) => {
            debug("tilde", comp, _, M, m, p, pr);
            let ret;
            if (isX(M)) {
              ret = "";
            } else if (isX(m)) {
              ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
            } else if (isX(p)) {
              ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
            } else if (pr) {
              debug("replaceTilde pr", pr);
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            } else {
              ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
            }
            debug("tilde return", ret);
            return ret;
          });
        };
        var replaceCarets = (comp, options) => {
          return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
        };
        var replaceCaret = (comp, options) => {
          debug("caret", comp, options);
          const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
          const z = options.includePrerelease ? "-0" : "";
          return comp.replace(r, (_, M, m, p, pr) => {
            debug("caret", comp, _, M, m, p, pr);
            let ret;
            if (isX(M)) {
              ret = "";
            } else if (isX(m)) {
              ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
            } else if (isX(p)) {
              if (M === "0") {
                ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
              } else {
                ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
              }
            } else if (pr) {
              debug("replaceCaret pr", pr);
              if (M === "0") {
                if (m === "0") {
                  ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                } else {
                  ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                }
              } else {
                ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
              }
            } else {
              debug("no pr");
              if (M === "0") {
                if (m === "0") {
                  ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                } else {
                  ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
                }
              } else {
                ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
              }
            }
            debug("caret return", ret);
            return ret;
          });
        };
        var replaceXRanges = (comp, options) => {
          debug("replaceXRanges", comp, options);
          return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
        };
        var replaceXRange = (comp, options) => {
          comp = comp.trim();
          const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
          return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
            debug("xRange", comp, ret, gtlt, M, m, p, pr);
            const xM = isX(M);
            const xm = xM || isX(m);
            const xp = xm || isX(p);
            const anyX = xp;
            if (gtlt === "=" && anyX) {
              gtlt = "";
            }
            pr = options.includePrerelease ? "-0" : "";
            if (xM) {
              if (gtlt === ">" || gtlt === "<") {
                ret = "<0.0.0-0";
              } else {
                ret = "*";
              }
            } else if (gtlt && anyX) {
              if (xm) {
                m = 0;
              }
              p = 0;
              if (gtlt === ">") {
                gtlt = ">=";
                if (xm) {
                  M = +M + 1;
                  m = 0;
                  p = 0;
                } else {
                  m = +m + 1;
                  p = 0;
                }
              } else if (gtlt === "<=") {
                gtlt = "<";
                if (xm) {
                  M = +M + 1;
                } else {
                  m = +m + 1;
                }
              }
              if (gtlt === "<") {
                pr = "-0";
              }
              ret = `${gtlt + M}.${m}.${p}${pr}`;
            } else if (xm) {
              ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
            } else if (xp) {
              ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
            }
            debug("xRange return", ret);
            return ret;
          });
        };
        var replaceStars = (comp, options) => {
          debug("replaceStars", comp, options);
          return comp.trim().replace(re[t.STAR], "");
        };
        var replaceGTE0 = (comp, options) => {
          debug("replaceGTE0", comp, options);
          return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
        };
        var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
          if (isX(fM)) {
            from = "";
          } else if (isX(fm)) {
            from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
          } else if (isX(fp)) {
            from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
          } else if (fpr) {
            from = `>=${from}`;
          } else {
            from = `>=${from}${incPr ? "-0" : ""}`;
          }
          if (isX(tM)) {
            to = "";
          } else if (isX(tm)) {
            to = `<${+tM + 1}.0.0-0`;
          } else if (isX(tp)) {
            to = `<${tM}.${+tm + 1}.0-0`;
          } else if (tpr) {
            to = `<=${tM}.${tm}.${tp}-${tpr}`;
          } else if (incPr) {
            to = `<${tM}.${tm}.${+tp + 1}-0`;
          } else {
            to = `<=${to}`;
          }
          return `${from} ${to}`.trim();
        };
        var testSet = (set, version, options) => {
          for (let i = 0; i < set.length; i++) {
            if (!set[i].test(version)) {
              return false;
            }
          }
          if (version.prerelease.length && !options.includePrerelease) {
            for (let i = 0; i < set.length; i++) {
              debug(set[i].semver);
              if (set[i].semver === Comparator.ANY) {
                continue;
              }
              if (set[i].semver.prerelease.length > 0) {
                const allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                  return true;
                }
              }
            }
            return false;
          }
          return true;
        };
      }
    });
    var require_comparator = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/classes/comparator.js"(exports2, module22) {
        var ANY = Symbol("SemVer ANY");
        var Comparator = class _Comparator {
          static get ANY() {
            return ANY;
          }
          constructor(comp, options) {
            options = parseOptions(options);
            if (comp instanceof _Comparator) {
              if (comp.loose === !!options.loose) {
                return comp;
              } else {
                comp = comp.value;
              }
            }
            comp = comp.trim().split(/\s+/).join(" ");
            debug("comparator", comp, options);
            this.options = options;
            this.loose = !!options.loose;
            this.parse(comp);
            if (this.semver === ANY) {
              this.value = "";
            } else {
              this.value = this.operator + this.semver.version;
            }
            debug("comp", this);
          }
          parse(comp) {
            const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
            const m = comp.match(r);
            if (!m) {
              throw new TypeError(`Invalid comparator: ${comp}`);
            }
            this.operator = m[1] !== void 0 ? m[1] : "";
            if (this.operator === "=") {
              this.operator = "";
            }
            if (!m[2]) {
              this.semver = ANY;
            } else {
              this.semver = new SemVer(m[2], this.options.loose);
            }
          }
          toString() {
            return this.value;
          }
          test(version) {
            debug("Comparator.test", version, this.options.loose);
            if (this.semver === ANY || version === ANY) {
              return true;
            }
            if (typeof version === "string") {
              try {
                version = new SemVer(version, this.options);
              } catch (er) {
                return false;
              }
            }
            return cmp(version, this.operator, this.semver, this.options);
          }
          intersects(comp, options) {
            if (!(comp instanceof _Comparator)) {
              throw new TypeError("a Comparator is required");
            }
            if (this.operator === "") {
              if (this.value === "") {
                return true;
              }
              return new Range(comp.value, options).test(this.value);
            } else if (comp.operator === "") {
              if (comp.value === "") {
                return true;
              }
              return new Range(this.value, options).test(comp.semver);
            }
            options = parseOptions(options);
            if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
              return false;
            }
            if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
              return false;
            }
            if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
              return true;
            }
            if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
              return true;
            }
            if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
              return true;
            }
            if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
              return true;
            }
            if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
              return true;
            }
            return false;
          }
        };
        module22.exports = Comparator;
        var parseOptions = require_parse_options();
        var { safeRe: re, t } = require_re();
        var cmp = require_cmp();
        var debug = require_debug();
        var SemVer = require_semver();
        var Range = require_range();
      }
    });
    var require_satisfies = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/functions/satisfies.js"(exports2, module22) {
        var Range = require_range();
        var satisfies = (version, range, options) => {
          try {
            range = new Range(range, options);
          } catch (er) {
            return false;
          }
          return range.test(version);
        };
        module22.exports = satisfies;
      }
    });
    var require_to_comparators = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/ranges/to-comparators.js"(exports2, module22) {
        var Range = require_range();
        var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
        module22.exports = toComparators;
      }
    });
    var require_max_satisfying = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/ranges/max-satisfying.js"(exports2, module22) {
        var SemVer = require_semver();
        var Range = require_range();
        var maxSatisfying = (versions, range, options) => {
          let max = null;
          let maxSV = null;
          let rangeObj = null;
          try {
            rangeObj = new Range(range, options);
          } catch (er) {
            return null;
          }
          versions.forEach((v) => {
            if (rangeObj.test(v)) {
              if (!max || maxSV.compare(v) === -1) {
                max = v;
                maxSV = new SemVer(max, options);
              }
            }
          });
          return max;
        };
        module22.exports = maxSatisfying;
      }
    });
    var require_min_satisfying = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/ranges/min-satisfying.js"(exports2, module22) {
        var SemVer = require_semver();
        var Range = require_range();
        var minSatisfying = (versions, range, options) => {
          let min = null;
          let minSV = null;
          let rangeObj = null;
          try {
            rangeObj = new Range(range, options);
          } catch (er) {
            return null;
          }
          versions.forEach((v) => {
            if (rangeObj.test(v)) {
              if (!min || minSV.compare(v) === 1) {
                min = v;
                minSV = new SemVer(min, options);
              }
            }
          });
          return min;
        };
        module22.exports = minSatisfying;
      }
    });
    var require_min_version = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/ranges/min-version.js"(exports2, module22) {
        var SemVer = require_semver();
        var Range = require_range();
        var gt = require_gt();
        var minVersion = (range, loose) => {
          range = new Range(range, loose);
          let minver = new SemVer("0.0.0");
          if (range.test(minver)) {
            return minver;
          }
          minver = new SemVer("0.0.0-0");
          if (range.test(minver)) {
            return minver;
          }
          minver = null;
          for (let i = 0; i < range.set.length; ++i) {
            const comparators = range.set[i];
            let setMin = null;
            comparators.forEach((comparator) => {
              const compver = new SemVer(comparator.semver.version);
              switch (comparator.operator) {
                case ">":
                  if (compver.prerelease.length === 0) {
                    compver.patch++;
                  } else {
                    compver.prerelease.push(0);
                  }
                  compver.raw = compver.format();
                case "":
                case ">=":
                  if (!setMin || gt(compver, setMin)) {
                    setMin = compver;
                  }
                  break;
                case "<":
                case "<=":
                  break;
                default:
                  throw new Error(`Unexpected operation: ${comparator.operator}`);
              }
            });
            if (setMin && (!minver || gt(minver, setMin))) {
              minver = setMin;
            }
          }
          if (minver && range.test(minver)) {
            return minver;
          }
          return null;
        };
        module22.exports = minVersion;
      }
    });
    var require_valid2 = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/ranges/valid.js"(exports2, module22) {
        var Range = require_range();
        var validRange = (range, options) => {
          try {
            return new Range(range, options).range || "*";
          } catch (er) {
            return null;
          }
        };
        module22.exports = validRange;
      }
    });
    var require_outside = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/ranges/outside.js"(exports2, module22) {
        var SemVer = require_semver();
        var Comparator = require_comparator();
        var { ANY } = Comparator;
        var Range = require_range();
        var satisfies = require_satisfies();
        var gt = require_gt();
        var lt = require_lt();
        var lte = require_lte();
        var gte = require_gte();
        var outside = (version, range, hilo, options) => {
          version = new SemVer(version, options);
          range = new Range(range, options);
          let gtfn, ltefn, ltfn, comp, ecomp;
          switch (hilo) {
            case ">":
              gtfn = gt;
              ltefn = lte;
              ltfn = lt;
              comp = ">";
              ecomp = ">=";
              break;
            case "<":
              gtfn = lt;
              ltefn = gte;
              ltfn = gt;
              comp = "<";
              ecomp = "<=";
              break;
            default:
              throw new TypeError('Must provide a hilo val of "<" or ">"');
          }
          if (satisfies(version, range, options)) {
            return false;
          }
          for (let i = 0; i < range.set.length; ++i) {
            const comparators = range.set[i];
            let high = null;
            let low = null;
            comparators.forEach((comparator) => {
              if (comparator.semver === ANY) {
                comparator = new Comparator(">=0.0.0");
              }
              high = high || comparator;
              low = low || comparator;
              if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
              } else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
              }
            });
            if (high.operator === comp || high.operator === ecomp) {
              return false;
            }
            if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
              return false;
            } else if (low.operator === ecomp && ltfn(version, low.semver)) {
              return false;
            }
          }
          return true;
        };
        module22.exports = outside;
      }
    });
    var require_gtr = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/ranges/gtr.js"(exports2, module22) {
        var outside = require_outside();
        var gtr = (version, range, options) => outside(version, range, ">", options);
        module22.exports = gtr;
      }
    });
    var require_ltr = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/ranges/ltr.js"(exports2, module22) {
        var outside = require_outside();
        var ltr = (version, range, options) => outside(version, range, "<", options);
        module22.exports = ltr;
      }
    });
    var require_intersects = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/ranges/intersects.js"(exports2, module22) {
        var Range = require_range();
        var intersects = (r1, r2, options) => {
          r1 = new Range(r1, options);
          r2 = new Range(r2, options);
          return r1.intersects(r2, options);
        };
        module22.exports = intersects;
      }
    });
    var require_simplify = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/ranges/simplify.js"(exports2, module22) {
        var satisfies = require_satisfies();
        var compare = require_compare();
        module22.exports = (versions, range, options) => {
          const set = [];
          let first = null;
          let prev = null;
          const v = versions.sort((a, b) => compare(a, b, options));
          for (const version of v) {
            const included = satisfies(version, range, options);
            if (included) {
              prev = version;
              if (!first) {
                first = version;
              }
            } else {
              if (prev) {
                set.push([first, prev]);
              }
              prev = null;
              first = null;
            }
          }
          if (first) {
            set.push([first, null]);
          }
          const ranges = [];
          for (const [min, max] of set) {
            if (min === max) {
              ranges.push(min);
            } else if (!max && min === v[0]) {
              ranges.push("*");
            } else if (!max) {
              ranges.push(`>=${min}`);
            } else if (min === v[0]) {
              ranges.push(`<=${max}`);
            } else {
              ranges.push(`${min} - ${max}`);
            }
          }
          const simplified = ranges.join(" || ");
          const original = typeof range.raw === "string" ? range.raw : String(range);
          return simplified.length < original.length ? simplified : range;
        };
      }
    });
    var require_subset = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/ranges/subset.js"(exports2, module22) {
        var Range = require_range();
        var Comparator = require_comparator();
        var { ANY } = Comparator;
        var satisfies = require_satisfies();
        var compare = require_compare();
        var subset = (sub, dom, options = {}) => {
          if (sub === dom) {
            return true;
          }
          sub = new Range(sub, options);
          dom = new Range(dom, options);
          let sawNonNull = false;
          OUTER:
            for (const simpleSub of sub.set) {
              for (const simpleDom of dom.set) {
                const isSub = simpleSubset(simpleSub, simpleDom, options);
                sawNonNull = sawNonNull || isSub !== null;
                if (isSub) {
                  continue OUTER;
                }
              }
              if (sawNonNull) {
                return false;
              }
            }
          return true;
        };
        var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
        var minimumVersion = [new Comparator(">=0.0.0")];
        var simpleSubset = (sub, dom, options) => {
          if (sub === dom) {
            return true;
          }
          if (sub.length === 1 && sub[0].semver === ANY) {
            if (dom.length === 1 && dom[0].semver === ANY) {
              return true;
            } else if (options.includePrerelease) {
              sub = minimumVersionWithPreRelease;
            } else {
              sub = minimumVersion;
            }
          }
          if (dom.length === 1 && dom[0].semver === ANY) {
            if (options.includePrerelease) {
              return true;
            } else {
              dom = minimumVersion;
            }
          }
          const eqSet = /* @__PURE__ */ new Set();
          let gt, lt;
          for (const c of sub) {
            if (c.operator === ">" || c.operator === ">=") {
              gt = higherGT(gt, c, options);
            } else if (c.operator === "<" || c.operator === "<=") {
              lt = lowerLT(lt, c, options);
            } else {
              eqSet.add(c.semver);
            }
          }
          if (eqSet.size > 1) {
            return null;
          }
          let gtltComp;
          if (gt && lt) {
            gtltComp = compare(gt.semver, lt.semver, options);
            if (gtltComp > 0) {
              return null;
            } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
              return null;
            }
          }
          for (const eq of eqSet) {
            if (gt && !satisfies(eq, String(gt), options)) {
              return null;
            }
            if (lt && !satisfies(eq, String(lt), options)) {
              return null;
            }
            for (const c of dom) {
              if (!satisfies(eq, String(c), options)) {
                return false;
              }
            }
            return true;
          }
          let higher, lower;
          let hasDomLT, hasDomGT;
          let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
          let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
          if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
            needDomLTPre = false;
          }
          for (const c of dom) {
            hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
            hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
            if (gt) {
              if (needDomGTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                  needDomGTPre = false;
                }
              }
              if (c.operator === ">" || c.operator === ">=") {
                higher = higherGT(gt, c, options);
                if (higher === c && higher !== gt) {
                  return false;
                }
              } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
                return false;
              }
            }
            if (lt) {
              if (needDomLTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                  needDomLTPre = false;
                }
              }
              if (c.operator === "<" || c.operator === "<=") {
                lower = lowerLT(lt, c, options);
                if (lower === c && lower !== lt) {
                  return false;
                }
              } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
                return false;
              }
            }
            if (!c.operator && (lt || gt) && gtltComp !== 0) {
              return false;
            }
          }
          if (gt && hasDomLT && !lt && gtltComp !== 0) {
            return false;
          }
          if (lt && hasDomGT && !gt && gtltComp !== 0) {
            return false;
          }
          if (needDomGTPre || needDomLTPre) {
            return false;
          }
          return true;
        };
        var higherGT = (a, b, options) => {
          if (!a) {
            return b;
          }
          const comp = compare(a.semver, b.semver, options);
          return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
        };
        var lowerLT = (a, b, options) => {
          if (!a) {
            return b;
          }
          const comp = compare(a.semver, b.semver, options);
          return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
        };
        module22.exports = subset;
      }
    });
    var require_semver2 = __commonJS2({
      "node_modules/jsonwebtoken/node_modules/semver/index.js"(exports2, module22) {
        var internalRe = require_re();
        var constants = require_constants();
        var SemVer = require_semver();
        var identifiers = require_identifiers();
        var parse = require_parse();
        var valid = require_valid();
        var clean = require_clean();
        var inc = require_inc();
        var diff = require_diff();
        var major = require_major();
        var minor = require_minor();
        var patch = require_patch();
        var prerelease = require_prerelease();
        var compare = require_compare();
        var rcompare = require_rcompare();
        var compareLoose = require_compare_loose();
        var compareBuild = require_compare_build();
        var sort = require_sort();
        var rsort = require_rsort();
        var gt = require_gt();
        var lt = require_lt();
        var eq = require_eq();
        var neq = require_neq();
        var gte = require_gte();
        var lte = require_lte();
        var cmp = require_cmp();
        var coerce = require_coerce();
        var Comparator = require_comparator();
        var Range = require_range();
        var satisfies = require_satisfies();
        var toComparators = require_to_comparators();
        var maxSatisfying = require_max_satisfying();
        var minSatisfying = require_min_satisfying();
        var minVersion = require_min_version();
        var validRange = require_valid2();
        var outside = require_outside();
        var gtr = require_gtr();
        var ltr = require_ltr();
        var intersects = require_intersects();
        var simplifyRange = require_simplify();
        var subset = require_subset();
        module22.exports = {
          parse,
          valid,
          clean,
          inc,
          diff,
          major,
          minor,
          patch,
          prerelease,
          compare,
          rcompare,
          compareLoose,
          compareBuild,
          sort,
          rsort,
          gt,
          lt,
          eq,
          neq,
          gte,
          lte,
          cmp,
          coerce,
          Comparator,
          Range,
          satisfies,
          toComparators,
          maxSatisfying,
          minSatisfying,
          minVersion,
          validRange,
          outside,
          gtr,
          ltr,
          intersects,
          simplifyRange,
          subset,
          SemVer,
          re: internalRe.re,
          src: internalRe.src,
          tokens: internalRe.t,
          SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
          RELEASE_TYPES: constants.RELEASE_TYPES,
          compareIdentifiers: identifiers.compareIdentifiers,
          rcompareIdentifiers: identifiers.rcompareIdentifiers
        };
      }
    });
    var require_asymmetricKeyDetailsSupported = __commonJS2({
      "node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js"(exports2, module22) {
        var semver = require_semver2();
        module22.exports = semver.satisfies(process.version, ">=15.7.0");
      }
    });
    var require_rsaPssKeyDetailsSupported = __commonJS2({
      "node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js"(exports2, module22) {
        var semver = require_semver2();
        module22.exports = semver.satisfies(process.version, ">=16.9.0");
      }
    });
    var require_validateAsymmetricKey = __commonJS2({
      "node_modules/jsonwebtoken/lib/validateAsymmetricKey.js"(exports2, module22) {
        var ASYMMETRIC_KEY_DETAILS_SUPPORTED = require_asymmetricKeyDetailsSupported();
        var RSA_PSS_KEY_DETAILS_SUPPORTED = require_rsaPssKeyDetailsSupported();
        var allowedAlgorithmsForKeys = {
          "ec": ["ES256", "ES384", "ES512"],
          "rsa": ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
          "rsa-pss": ["PS256", "PS384", "PS512"]
        };
        var allowedCurves = {
          ES256: "prime256v1",
          ES384: "secp384r1",
          ES512: "secp521r1"
        };
        module22.exports = function(algorithm, key) {
          if (!algorithm || !key)
            return;
          const keyType = key.asymmetricKeyType;
          if (!keyType)
            return;
          const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];
          if (!allowedAlgorithms) {
            throw new Error(`Unknown key type "${keyType}".`);
          }
          if (!allowedAlgorithms.includes(algorithm)) {
            throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(", ")}.`);
          }
          if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
            switch (keyType) {
              case "ec":
                const keyCurve = key.asymmetricKeyDetails.namedCurve;
                const allowedCurve = allowedCurves[algorithm];
                if (keyCurve !== allowedCurve) {
                  throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
                }
                break;
              case "rsa-pss":
                if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
                  const length = parseInt(algorithm.slice(-3), 10);
                  const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
                  if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
                    throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
                  }
                  if (saltLength !== void 0 && saltLength > length >> 3) {
                    throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`);
                  }
                }
                break;
            }
          }
        };
      }
    });
    var require_psSupported = __commonJS2({
      "node_modules/jsonwebtoken/lib/psSupported.js"(exports2, module22) {
        var semver = require_semver2();
        module22.exports = semver.satisfies(process.version, "^6.12.0 || >=8.0.0");
      }
    });
    var require_verify = __commonJS2({
      "node_modules/jsonwebtoken/verify.js"(exports2, module22) {
        var JsonWebTokenError = require_JsonWebTokenError();
        var NotBeforeError = require_NotBeforeError();
        var TokenExpiredError = require_TokenExpiredError();
        var decode = require_decode();
        var timespan = require_timespan();
        var validateAsymmetricKey = require_validateAsymmetricKey();
        var PS_SUPPORTED = require_psSupported();
        var jws = require_jws();
        var { KeyObject, createSecretKey, createPublicKey } = require("crypto");
        var PUB_KEY_ALGS = ["RS256", "RS384", "RS512"];
        var EC_KEY_ALGS = ["ES256", "ES384", "ES512"];
        var RSA_KEY_ALGS = ["RS256", "RS384", "RS512"];
        var HS_ALGS = ["HS256", "HS384", "HS512"];
        if (PS_SUPPORTED) {
          PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
          RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
        }
        module22.exports = function(jwtString, secretOrPublicKey, options, callback) {
          if (typeof options === "function" && !callback) {
            callback = options;
            options = {};
          }
          if (!options) {
            options = {};
          }
          options = Object.assign({}, options);
          let done;
          if (callback) {
            done = callback;
          } else {
            done = function(err, data) {
              if (err)
                throw err;
              return data;
            };
          }
          if (options.clockTimestamp && typeof options.clockTimestamp !== "number") {
            return done(new JsonWebTokenError("clockTimestamp must be a number"));
          }
          if (options.nonce !== void 0 && (typeof options.nonce !== "string" || options.nonce.trim() === "")) {
            return done(new JsonWebTokenError("nonce must be a non-empty string"));
          }
          if (options.allowInvalidAsymmetricKeyTypes !== void 0 && typeof options.allowInvalidAsymmetricKeyTypes !== "boolean") {
            return done(new JsonWebTokenError("allowInvalidAsymmetricKeyTypes must be a boolean"));
          }
          const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1e3);
          if (!jwtString) {
            return done(new JsonWebTokenError("jwt must be provided"));
          }
          if (typeof jwtString !== "string") {
            return done(new JsonWebTokenError("jwt must be a string"));
          }
          const parts = jwtString.split(".");
          if (parts.length !== 3) {
            return done(new JsonWebTokenError("jwt malformed"));
          }
          let decodedToken;
          try {
            decodedToken = decode(jwtString, { complete: true });
          } catch (err) {
            return done(err);
          }
          if (!decodedToken) {
            return done(new JsonWebTokenError("invalid token"));
          }
          const header = decodedToken.header;
          let getSecret;
          if (typeof secretOrPublicKey === "function") {
            if (!callback) {
              return done(new JsonWebTokenError("verify must be called asynchronous if secret or public key is provided as a callback"));
            }
            getSecret = secretOrPublicKey;
          } else {
            getSecret = function(header2, secretCallback) {
              return secretCallback(null, secretOrPublicKey);
            };
          }
          return getSecret(header, function(err, secretOrPublicKey2) {
            if (err) {
              return done(new JsonWebTokenError("error in secret or public key callback: " + err.message));
            }
            const hasSignature = parts[2].trim() !== "";
            if (!hasSignature && secretOrPublicKey2) {
              return done(new JsonWebTokenError("jwt signature is required"));
            }
            if (hasSignature && !secretOrPublicKey2) {
              return done(new JsonWebTokenError("secret or public key must be provided"));
            }
            if (!hasSignature && !options.algorithms) {
              return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
            }
            if (secretOrPublicKey2 != null && !(secretOrPublicKey2 instanceof KeyObject)) {
              try {
                secretOrPublicKey2 = createPublicKey(secretOrPublicKey2);
              } catch (_) {
                try {
                  secretOrPublicKey2 = createSecretKey(typeof secretOrPublicKey2 === "string" ? Buffer.from(secretOrPublicKey2) : secretOrPublicKey2);
                } catch (_2) {
                  return done(new JsonWebTokenError("secretOrPublicKey is not valid key material"));
                }
              }
            }
            if (!options.algorithms) {
              if (secretOrPublicKey2.type === "secret") {
                options.algorithms = HS_ALGS;
              } else if (["rsa", "rsa-pss"].includes(secretOrPublicKey2.asymmetricKeyType)) {
                options.algorithms = RSA_KEY_ALGS;
              } else if (secretOrPublicKey2.asymmetricKeyType === "ec") {
                options.algorithms = EC_KEY_ALGS;
              } else {
                options.algorithms = PUB_KEY_ALGS;
              }
            }
            if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
              return done(new JsonWebTokenError("invalid algorithm"));
            }
            if (header.alg.startsWith("HS") && secretOrPublicKey2.type !== "secret") {
              return done(new JsonWebTokenError(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));
            } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey2.type !== "public") {
              return done(new JsonWebTokenError(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
            }
            if (!options.allowInvalidAsymmetricKeyTypes) {
              try {
                validateAsymmetricKey(header.alg, secretOrPublicKey2);
              } catch (e) {
                return done(e);
              }
            }
            let valid;
            try {
              valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey2);
            } catch (e) {
              return done(e);
            }
            if (!valid) {
              return done(new JsonWebTokenError("invalid signature"));
            }
            const payload = decodedToken.payload;
            if (typeof payload.nbf !== "undefined" && !options.ignoreNotBefore) {
              if (typeof payload.nbf !== "number") {
                return done(new JsonWebTokenError("invalid nbf value"));
              }
              if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
                return done(new NotBeforeError("jwt not active", new Date(payload.nbf * 1e3)));
              }
            }
            if (typeof payload.exp !== "undefined" && !options.ignoreExpiration) {
              if (typeof payload.exp !== "number") {
                return done(new JsonWebTokenError("invalid exp value"));
              }
              if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
                return done(new TokenExpiredError("jwt expired", new Date(payload.exp * 1e3)));
              }
            }
            if (options.audience) {
              const audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
              const target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
              const match = target.some(function(targetAudience) {
                return audiences.some(function(audience) {
                  return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
                });
              });
              if (!match) {
                return done(new JsonWebTokenError("jwt audience invalid. expected: " + audiences.join(" or ")));
              }
            }
            if (options.issuer) {
              const invalid_issuer = typeof options.issuer === "string" && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
              if (invalid_issuer) {
                return done(new JsonWebTokenError("jwt issuer invalid. expected: " + options.issuer));
              }
            }
            if (options.subject) {
              if (payload.sub !== options.subject) {
                return done(new JsonWebTokenError("jwt subject invalid. expected: " + options.subject));
              }
            }
            if (options.jwtid) {
              if (payload.jti !== options.jwtid) {
                return done(new JsonWebTokenError("jwt jwtid invalid. expected: " + options.jwtid));
              }
            }
            if (options.nonce) {
              if (payload.nonce !== options.nonce) {
                return done(new JsonWebTokenError("jwt nonce invalid. expected: " + options.nonce));
              }
            }
            if (options.maxAge) {
              if (typeof payload.iat !== "number") {
                return done(new JsonWebTokenError("iat required when maxAge is specified"));
              }
              const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
              if (typeof maxAgeTimestamp === "undefined") {
                return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
              }
              if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
                return done(new TokenExpiredError("maxAge exceeded", new Date(maxAgeTimestamp * 1e3)));
              }
            }
            if (options.complete === true) {
              const signature = decodedToken.signature;
              return done(null, {
                header,
                payload,
                signature
              });
            }
            return done(null, payload);
          });
        };
      }
    });
    var require_lodash = __commonJS2({
      "node_modules/lodash/lodash.js"(exports2, module22) {
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
          var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
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
            "\xC0": "A",
            "\xC1": "A",
            "\xC2": "A",
            "\xC3": "A",
            "\xC4": "A",
            "\xC5": "A",
            "\xE0": "a",
            "\xE1": "a",
            "\xE2": "a",
            "\xE3": "a",
            "\xE4": "a",
            "\xE5": "a",
            "\xC7": "C",
            "\xE7": "c",
            "\xD0": "D",
            "\xF0": "d",
            "\xC8": "E",
            "\xC9": "E",
            "\xCA": "E",
            "\xCB": "E",
            "\xE8": "e",
            "\xE9": "e",
            "\xEA": "e",
            "\xEB": "e",
            "\xCC": "I",
            "\xCD": "I",
            "\xCE": "I",
            "\xCF": "I",
            "\xEC": "i",
            "\xED": "i",
            "\xEE": "i",
            "\xEF": "i",
            "\xD1": "N",
            "\xF1": "n",
            "\xD2": "O",
            "\xD3": "O",
            "\xD4": "O",
            "\xD5": "O",
            "\xD6": "O",
            "\xD8": "O",
            "\xF2": "o",
            "\xF3": "o",
            "\xF4": "o",
            "\xF5": "o",
            "\xF6": "o",
            "\xF8": "o",
            "\xD9": "U",
            "\xDA": "U",
            "\xDB": "U",
            "\xDC": "U",
            "\xF9": "u",
            "\xFA": "u",
            "\xFB": "u",
            "\xFC": "u",
            "\xDD": "Y",
            "\xFD": "y",
            "\xFF": "y",
            "\xC6": "Ae",
            "\xE6": "ae",
            "\xDE": "Th",
            "\xFE": "th",
            "\xDF": "ss",
            // Latin Extended-A block.
            "\u0100": "A",
            "\u0102": "A",
            "\u0104": "A",
            "\u0101": "a",
            "\u0103": "a",
            "\u0105": "a",
            "\u0106": "C",
            "\u0108": "C",
            "\u010A": "C",
            "\u010C": "C",
            "\u0107": "c",
            "\u0109": "c",
            "\u010B": "c",
            "\u010D": "c",
            "\u010E": "D",
            "\u0110": "D",
            "\u010F": "d",
            "\u0111": "d",
            "\u0112": "E",
            "\u0114": "E",
            "\u0116": "E",
            "\u0118": "E",
            "\u011A": "E",
            "\u0113": "e",
            "\u0115": "e",
            "\u0117": "e",
            "\u0119": "e",
            "\u011B": "e",
            "\u011C": "G",
            "\u011E": "G",
            "\u0120": "G",
            "\u0122": "G",
            "\u011D": "g",
            "\u011F": "g",
            "\u0121": "g",
            "\u0123": "g",
            "\u0124": "H",
            "\u0126": "H",
            "\u0125": "h",
            "\u0127": "h",
            "\u0128": "I",
            "\u012A": "I",
            "\u012C": "I",
            "\u012E": "I",
            "\u0130": "I",
            "\u0129": "i",
            "\u012B": "i",
            "\u012D": "i",
            "\u012F": "i",
            "\u0131": "i",
            "\u0134": "J",
            "\u0135": "j",
            "\u0136": "K",
            "\u0137": "k",
            "\u0138": "k",
            "\u0139": "L",
            "\u013B": "L",
            "\u013D": "L",
            "\u013F": "L",
            "\u0141": "L",
            "\u013A": "l",
            "\u013C": "l",
            "\u013E": "l",
            "\u0140": "l",
            "\u0142": "l",
            "\u0143": "N",
            "\u0145": "N",
            "\u0147": "N",
            "\u014A": "N",
            "\u0144": "n",
            "\u0146": "n",
            "\u0148": "n",
            "\u014B": "n",
            "\u014C": "O",
            "\u014E": "O",
            "\u0150": "O",
            "\u014D": "o",
            "\u014F": "o",
            "\u0151": "o",
            "\u0154": "R",
            "\u0156": "R",
            "\u0158": "R",
            "\u0155": "r",
            "\u0157": "r",
            "\u0159": "r",
            "\u015A": "S",
            "\u015C": "S",
            "\u015E": "S",
            "\u0160": "S",
            "\u015B": "s",
            "\u015D": "s",
            "\u015F": "s",
            "\u0161": "s",
            "\u0162": "T",
            "\u0164": "T",
            "\u0166": "T",
            "\u0163": "t",
            "\u0165": "t",
            "\u0167": "t",
            "\u0168": "U",
            "\u016A": "U",
            "\u016C": "U",
            "\u016E": "U",
            "\u0170": "U",
            "\u0172": "U",
            "\u0169": "u",
            "\u016B": "u",
            "\u016D": "u",
            "\u016F": "u",
            "\u0171": "u",
            "\u0173": "u",
            "\u0174": "W",
            "\u0175": "w",
            "\u0176": "Y",
            "\u0177": "y",
            "\u0178": "Y",
            "\u0179": "Z",
            "\u017B": "Z",
            "\u017D": "Z",
            "\u017A": "z",
            "\u017C": "z",
            "\u017E": "z",
            "\u0132": "IJ",
            "\u0133": "ij",
            "\u0152": "Oe",
            "\u0153": "oe",
            "\u0149": "'n",
            "\u017F": "s"
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
          var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
          var freeModule = freeExports && typeof module22 == "object" && module22 && !module22.nodeType && module22;
          var moduleExports = freeModule && freeModule.exports === freeExports;
          var freeProcess = moduleExports && freeGlobal.process;
          var nodeUtil = function() {
            try {
              var types = freeModule && freeModule.require && freeModule.require("util").types;
              if (types) {
                return types;
              }
              return freeProcess && freeProcess.binding && freeProcess.binding("util");
            } catch (e) {
            }
          }();
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
          function arrayAggregator(array, setter, iteratee, accumulator) {
            var index = -1, length = array == null ? 0 : array.length;
            while (++index < length) {
              var value = array[index];
              setter(accumulator, value, iteratee(value), array);
            }
            return accumulator;
          }
          function arrayEach(array, iteratee) {
            var index = -1, length = array == null ? 0 : array.length;
            while (++index < length) {
              if (iteratee(array[index], index, array) === false) {
                break;
              }
            }
            return array;
          }
          function arrayEachRight(array, iteratee) {
            var length = array == null ? 0 : array.length;
            while (length--) {
              if (iteratee(array[length], length, array) === false) {
                break;
              }
            }
            return array;
          }
          function arrayEvery(array, predicate) {
            var index = -1, length = array == null ? 0 : array.length;
            while (++index < length) {
              if (!predicate(array[index], index, array)) {
                return false;
              }
            }
            return true;
          }
          function arrayFilter(array, predicate) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
            while (++index < length) {
              var value = array[index];
              if (predicate(value, index, array)) {
                result[resIndex++] = value;
              }
            }
            return result;
          }
          function arrayIncludes(array, value) {
            var length = array == null ? 0 : array.length;
            return !!length && baseIndexOf(array, value, 0) > -1;
          }
          function arrayIncludesWith(array, value, comparator) {
            var index = -1, length = array == null ? 0 : array.length;
            while (++index < length) {
              if (comparator(value, array[index])) {
                return true;
              }
            }
            return false;
          }
          function arrayMap(array, iteratee) {
            var index = -1, length = array == null ? 0 : array.length, result = Array(length);
            while (++index < length) {
              result[index] = iteratee(array[index], index, array);
            }
            return result;
          }
          function arrayPush(array, values) {
            var index = -1, length = values.length, offset = array.length;
            while (++index < length) {
              array[offset + index] = values[index];
            }
            return array;
          }
          function arrayReduce(array, iteratee, accumulator, initAccum) {
            var index = -1, length = array == null ? 0 : array.length;
            if (initAccum && length) {
              accumulator = array[++index];
            }
            while (++index < length) {
              accumulator = iteratee(accumulator, array[index], index, array);
            }
            return accumulator;
          }
          function arrayReduceRight(array, iteratee, accumulator, initAccum) {
            var length = array == null ? 0 : array.length;
            if (initAccum && length) {
              accumulator = array[--length];
            }
            while (length--) {
              accumulator = iteratee(accumulator, array[length], length, array);
            }
            return accumulator;
          }
          function arraySome(array, predicate) {
            var index = -1, length = array == null ? 0 : array.length;
            while (++index < length) {
              if (predicate(array[index], index, array)) {
                return true;
              }
            }
            return false;
          }
          var asciiSize = baseProperty("length");
          function asciiToArray(string) {
            return string.split("");
          }
          function asciiWords(string) {
            return string.match(reAsciiWord) || [];
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
          function baseFindIndex(array, predicate, fromIndex, fromRight) {
            var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
            while (fromRight ? index-- : ++index < length) {
              if (predicate(array[index], index, array)) {
                return index;
              }
            }
            return -1;
          }
          function baseIndexOf(array, value, fromIndex) {
            return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
          }
          function baseIndexOfWith(array, value, fromIndex, comparator) {
            var index = fromIndex - 1, length = array.length;
            while (++index < length) {
              if (comparator(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function baseIsNaN(value) {
            return value !== value;
          }
          function baseMean(array, iteratee) {
            var length = array == null ? 0 : array.length;
            return length ? baseSum(array, iteratee) / length : NAN;
          }
          function baseProperty(key) {
            return function(object) {
              return object == null ? undefined2 : object[key];
            };
          }
          function basePropertyOf(object) {
            return function(key) {
              return object == null ? undefined2 : object[key];
            };
          }
          function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
            eachFunc(collection, function(value, index, collection2) {
              accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
            });
            return accumulator;
          }
          function baseSortBy(array, comparer) {
            var length = array.length;
            array.sort(comparer);
            while (length--) {
              array[length] = array[length].value;
            }
            return array;
          }
          function baseSum(array, iteratee) {
            var result, index = -1, length = array.length;
            while (++index < length) {
              var current = iteratee(array[index]);
              if (current !== undefined2) {
                result = result === undefined2 ? current : result + current;
              }
            }
            return result;
          }
          function baseTimes(n, iteratee) {
            var index = -1, result = Array(n);
            while (++index < n) {
              result[index] = iteratee(index);
            }
            return result;
          }
          function baseToPairs(object, props) {
            return arrayMap(props, function(key) {
              return [key, object[key]];
            });
          }
          function baseTrim(string) {
            return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
          }
          function baseUnary(func) {
            return function(value) {
              return func(value);
            };
          }
          function baseValues(object, props) {
            return arrayMap(props, function(key) {
              return object[key];
            });
          }
          function cacheHas(cache, key) {
            return cache.has(key);
          }
          function charsStartIndex(strSymbols, chrSymbols) {
            var index = -1, length = strSymbols.length;
            while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
            }
            return index;
          }
          function charsEndIndex(strSymbols, chrSymbols) {
            var index = strSymbols.length;
            while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
            }
            return index;
          }
          function countHolders(array, placeholder) {
            var length = array.length, result = 0;
            while (length--) {
              if (array[length] === placeholder) {
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
          function getValue(object, key) {
            return object == null ? undefined2 : object[key];
          }
          function hasUnicode(string) {
            return reHasUnicode.test(string);
          }
          function hasUnicodeWord(string) {
            return reHasUnicodeWord.test(string);
          }
          function iteratorToArray(iterator) {
            var data, result = [];
            while (!(data = iterator.next()).done) {
              result.push(data.value);
            }
            return result;
          }
          function mapToArray(map) {
            var index = -1, result = Array(map.size);
            map.forEach(function(value, key) {
              result[++index] = [key, value];
            });
            return result;
          }
          function overArg(func, transform2) {
            return function(arg) {
              return func(transform2(arg));
            };
          }
          function replaceHolders(array, placeholder) {
            var index = -1, length = array.length, resIndex = 0, result = [];
            while (++index < length) {
              var value = array[index];
              if (value === placeholder || value === PLACEHOLDER) {
                array[index] = PLACEHOLDER;
                result[resIndex++] = index;
              }
            }
            return result;
          }
          function setToArray(set) {
            var index = -1, result = Array(set.size);
            set.forEach(function(value) {
              result[++index] = value;
            });
            return result;
          }
          function setToPairs(set) {
            var index = -1, result = Array(set.size);
            set.forEach(function(value) {
              result[++index] = [value, value];
            });
            return result;
          }
          function strictIndexOf(array, value, fromIndex) {
            var index = fromIndex - 1, length = array.length;
            while (++index < length) {
              if (array[index] === value) {
                return index;
              }
            }
            return -1;
          }
          function strictLastIndexOf(array, value, fromIndex) {
            var index = fromIndex + 1;
            while (index--) {
              if (array[index] === value) {
                return index;
              }
            }
            return index;
          }
          function stringSize(string) {
            return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
          }
          function stringToArray(string) {
            return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
          }
          function trimmedEndIndex(string) {
            var index = string.length;
            while (index-- && reWhitespace.test(string.charAt(index))) {
            }
            return index;
          }
          var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
          function unicodeSize(string) {
            var result = reUnicode.lastIndex = 0;
            while (reUnicode.test(string)) {
              ++result;
            }
            return result;
          }
          function unicodeToArray(string) {
            return string.match(reUnicode) || [];
          }
          function unicodeWords(string) {
            return string.match(reUnicodeWord) || [];
          }
          var runInContext = function runInContext2(context) {
            context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
            var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
            var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
            var coreJsData = context["__core-js_shared__"];
            var funcToString = funcProto.toString;
            var hasOwnProperty = objectProto.hasOwnProperty;
            var idCounter = 0;
            var maskSrcKey = function() {
              var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
              return uid ? "Symbol(src)_1." + uid : "";
            }();
            var nativeObjectToString = objectProto.toString;
            var objectCtorString = funcToString.call(Object2);
            var oldDash = root._;
            var reIsNative = RegExp2(
              "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
            );
            var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
            var defineProperty = function() {
              try {
                var func = getNative(Object2, "defineProperty");
                func({}, "", {});
                return func;
              } catch (e) {
              }
            }();
            var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
            var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
            var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
            var metaMap = WeakMap2 && new WeakMap2();
            var realNames = {};
            var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
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
            var baseCreate = function() {
              function object() {
              }
              return function(proto) {
                if (!isObject(proto)) {
                  return {};
                }
                if (objectCreate) {
                  return objectCreate(proto);
                }
                object.prototype = proto;
                var result2 = new object();
                object.prototype = undefined2;
                return result2;
              };
            }();
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
              var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
              if (!isArr || !isRight && arrLength == length && takeCount == length) {
                return baseWrapperValue(array, this.__actions__);
              }
              var result2 = [];
              outer:
                while (length-- && resIndex < takeCount) {
                  index += dir;
                  var iterIndex = -1, value = array[index];
                  while (++iterIndex < iterLength) {
                    var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                    if (type == LAZY_MAP_FLAG) {
                      value = computed;
                    } else if (!computed) {
                      if (type == LAZY_FILTER_FLAG) {
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
              var index = -1, length = entries == null ? 0 : entries.length;
              this.clear();
              while (++index < length) {
                var entry = entries[index];
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
              var index = -1, length = entries == null ? 0 : entries.length;
              this.clear();
              while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
              }
            }
            function listCacheClear() {
              this.__data__ = [];
              this.size = 0;
            }
            function listCacheDelete(key) {
              var data = this.__data__, index = assocIndexOf(data, key);
              if (index < 0) {
                return false;
              }
              var lastIndex = data.length - 1;
              if (index == lastIndex) {
                data.pop();
              } else {
                splice.call(data, index, 1);
              }
              --this.size;
              return true;
            }
            function listCacheGet(key) {
              var data = this.__data__, index = assocIndexOf(data, key);
              return index < 0 ? undefined2 : data[index][1];
            }
            function listCacheHas(key) {
              return assocIndexOf(this.__data__, key) > -1;
            }
            function listCacheSet(key, value) {
              var data = this.__data__, index = assocIndexOf(data, key);
              if (index < 0) {
                ++this.size;
                data.push([key, value]);
              } else {
                data[index][1] = value;
              }
              return this;
            }
            ListCache.prototype.clear = listCacheClear;
            ListCache.prototype["delete"] = listCacheDelete;
            ListCache.prototype.get = listCacheGet;
            ListCache.prototype.has = listCacheHas;
            ListCache.prototype.set = listCacheSet;
            function MapCache(entries) {
              var index = -1, length = entries == null ? 0 : entries.length;
              this.clear();
              while (++index < length) {
                var entry = entries[index];
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
              var data = getMapData(this, key), size2 = data.size;
              data.set(key, value);
              this.size += data.size == size2 ? 0 : 1;
              return this;
            }
            MapCache.prototype.clear = mapCacheClear;
            MapCache.prototype["delete"] = mapCacheDelete;
            MapCache.prototype.get = mapCacheGet;
            MapCache.prototype.has = mapCacheHas;
            MapCache.prototype.set = mapCacheSet;
            function SetCache(values2) {
              var index = -1, length = values2 == null ? 0 : values2.length;
              this.__data__ = new MapCache();
              while (++index < length) {
                this.add(values2[index]);
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
            function arraySample(array) {
              var length = array.length;
              return length ? array[baseRandom(0, length - 1)] : undefined2;
            }
            function arraySampleSize(array, n) {
              return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
            }
            function arrayShuffle(array) {
              return shuffleSelf(copyArray(array));
            }
            function assignMergeValue(object, key, value) {
              if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
                baseAssignValue(object, key, value);
              }
            }
            function assignValue(object, key, value) {
              var objValue = object[key];
              if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
                baseAssignValue(object, key, value);
              }
            }
            function assocIndexOf(array, key) {
              var length = array.length;
              while (length--) {
                if (eq(array[length][0], key)) {
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
            function baseAssign(object, source) {
              return object && copyObject(source, keys(source), object);
            }
            function baseAssignIn(object, source) {
              return object && copyObject(source, keysIn(source), object);
            }
            function baseAssignValue(object, key, value) {
              if (key == "__proto__" && defineProperty) {
                defineProperty(object, key, {
                  "configurable": true,
                  "enumerable": true,
                  "value": value,
                  "writable": true
                });
              } else {
                object[key] = value;
              }
            }
            function baseAt(object, paths) {
              var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
              while (++index < length) {
                result2[index] = skip ? undefined2 : get(object, paths[index]);
              }
              return result2;
            }
            function baseClamp(number, lower, upper) {
              if (number === number) {
                if (upper !== undefined2) {
                  number = number <= upper ? number : upper;
                }
                if (lower !== undefined2) {
                  number = number >= lower ? number : lower;
                }
              }
              return number;
            }
            function baseClone(value, bitmask, customizer, key, object, stack) {
              var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
              if (customizer) {
                result2 = object ? customizer(value, key, object, stack) : customizer(value);
              }
              if (result2 !== undefined2) {
                return result2;
              }
              if (!isObject(value)) {
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
                if (tag == objectTag || tag == argsTag || isFunc && !object) {
                  result2 = isFlat || isFunc ? {} : initCloneObject(value);
                  if (!isDeep) {
                    return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
                  }
                } else {
                  if (!cloneableTags[tag]) {
                    return object ? value : {};
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
              return function(object) {
                return baseConformsTo(object, source, props);
              };
            }
            function baseConformsTo(object, source, props) {
              var length = props.length;
              if (object == null) {
                return !length;
              }
              object = Object2(object);
              while (length--) {
                var key = props[length], predicate = source[key], value = object[key];
                if (value === undefined2 && !(key in object) || !predicate(value)) {
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
            function baseDifference(array, values2, iteratee2, comparator) {
              var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
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
                while (++index < length) {
                  var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
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
              baseEach(collection, function(value, index, collection2) {
                result2 = !!predicate(value, index, collection2);
                return result2;
              });
              return result2;
            }
            function baseExtremum(array, iteratee2, comparator) {
              var index = -1, length = array.length;
              while (++index < length) {
                var value = array[index], current = iteratee2(value);
                if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
                  var computed = current, result2 = value;
                }
              }
              return result2;
            }
            function baseFill(array, value, start, end) {
              var length = array.length;
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
                array[start++] = value;
              }
              return array;
            }
            function baseFilter(collection, predicate) {
              var result2 = [];
              baseEach(collection, function(value, index, collection2) {
                if (predicate(value, index, collection2)) {
                  result2.push(value);
                }
              });
              return result2;
            }
            function baseFlatten(array, depth, predicate, isStrict, result2) {
              var index = -1, length = array.length;
              predicate || (predicate = isFlattenable);
              result2 || (result2 = []);
              while (++index < length) {
                var value = array[index];
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
            function baseForOwn(object, iteratee2) {
              return object && baseFor(object, iteratee2, keys);
            }
            function baseForOwnRight(object, iteratee2) {
              return object && baseForRight(object, iteratee2, keys);
            }
            function baseFunctions(object, props) {
              return arrayFilter(props, function(key) {
                return isFunction(object[key]);
              });
            }
            function baseGet(object, path) {
              path = castPath(path, object);
              var index = 0, length = path.length;
              while (object != null && index < length) {
                object = object[toKey(path[index++])];
              }
              return index && index == length ? object : undefined2;
            }
            function baseGetAllKeys(object, keysFunc, symbolsFunc) {
              var result2 = keysFunc(object);
              return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
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
            function baseHas(object, key) {
              return object != null && hasOwnProperty.call(object, key);
            }
            function baseHasIn(object, key) {
              return object != null && key in Object2(object);
            }
            function baseInRange(number, start, end) {
              return number >= nativeMin(start, end) && number < nativeMax(start, end);
            }
            function baseIntersection(arrays, iteratee2, comparator) {
              var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
              while (othIndex--) {
                var array = arrays[othIndex];
                if (othIndex && iteratee2) {
                  array = arrayMap(array, baseUnary(iteratee2));
                }
                maxLength = nativeMin(array.length, maxLength);
                caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
              }
              array = arrays[0];
              var index = -1, seen = caches[0];
              outer:
                while (++index < length && result2.length < maxLength) {
                  var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
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
            function baseInverter(object, setter, iteratee2, accumulator) {
              baseForOwn(object, function(value, key, object2) {
                setter(accumulator, iteratee2(value), key, object2);
              });
              return accumulator;
            }
            function baseInvoke(object, path, args) {
              path = castPath(path, object);
              object = parent(object, path);
              var func = object == null ? object : object[toKey(last(path))];
              return func == null ? undefined2 : apply(func, object, args);
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
            function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
              var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
              objTag = objTag == argsTag ? objectTag : objTag;
              othTag = othTag == argsTag ? objectTag : othTag;
              var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
              if (isSameTag && isBuffer(object)) {
                if (!isBuffer(other)) {
                  return false;
                }
                objIsArr = true;
                objIsObj = false;
              }
              if (isSameTag && !objIsObj) {
                stack || (stack = new Stack());
                return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
              }
              if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
                if (objIsWrapped || othIsWrapped) {
                  var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                  stack || (stack = new Stack());
                  return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
                }
              }
              if (!isSameTag) {
                return false;
              }
              stack || (stack = new Stack());
              return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
            }
            function baseIsMap(value) {
              return isObjectLike(value) && getTag(value) == mapTag;
            }
            function baseIsMatch(object, source, matchData, customizer) {
              var index = matchData.length, length = index, noCustomizer = !customizer;
              if (object == null) {
                return !length;
              }
              object = Object2(object);
              while (index--) {
                var data = matchData[index];
                if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                  return false;
                }
              }
              while (++index < length) {
                data = matchData[index];
                var key = data[0], objValue = object[key], srcValue = data[1];
                if (noCustomizer && data[2]) {
                  if (objValue === undefined2 && !(key in object)) {
                    return false;
                  }
                } else {
                  var stack = new Stack();
                  if (customizer) {
                    var result2 = customizer(objValue, srcValue, key, object, source, stack);
                  }
                  if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                    return false;
                  }
                }
              }
              return true;
            }
            function baseIsNative(value) {
              if (!isObject(value) || isMasked(value)) {
                return false;
              }
              var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
              return pattern.test(toSource(value));
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
            function baseKeys(object) {
              if (!isPrototype(object)) {
                return nativeKeys(object);
              }
              var result2 = [];
              for (var key in Object2(object)) {
                if (hasOwnProperty.call(object, key) && key != "constructor") {
                  result2.push(key);
                }
              }
              return result2;
            }
            function baseKeysIn(object) {
              if (!isObject(object)) {
                return nativeKeysIn(object);
              }
              var isProto = isPrototype(object), result2 = [];
              for (var key in object) {
                if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
                  result2.push(key);
                }
              }
              return result2;
            }
            function baseLt(value, other) {
              return value < other;
            }
            function baseMap(collection, iteratee2) {
              var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
              baseEach(collection, function(value, key, collection2) {
                result2[++index] = iteratee2(value, key, collection2);
              });
              return result2;
            }
            function baseMatches(source) {
              var matchData = getMatchData(source);
              if (matchData.length == 1 && matchData[0][2]) {
                return matchesStrictComparable(matchData[0][0], matchData[0][1]);
              }
              return function(object) {
                return object === source || baseIsMatch(object, source, matchData);
              };
            }
            function baseMatchesProperty(path, srcValue) {
              if (isKey(path) && isStrictComparable(srcValue)) {
                return matchesStrictComparable(toKey(path), srcValue);
              }
              return function(object) {
                var objValue = get(object, path);
                return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
              };
            }
            function baseMerge(object, source, srcIndex, customizer, stack) {
              if (object === source) {
                return;
              }
              baseFor(source, function(srcValue, key) {
                stack || (stack = new Stack());
                if (isObject(srcValue)) {
                  baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
                } else {
                  var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
                  if (newValue === undefined2) {
                    newValue = srcValue;
                  }
                  assignMergeValue(object, key, newValue);
                }
              }, keysIn);
            }
            function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
              var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
              if (stacked) {
                assignMergeValue(object, key, stacked);
                return;
              }
              var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
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
                } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                  newValue = objValue;
                  if (isArguments(objValue)) {
                    newValue = toPlainObject(objValue);
                  } else if (!isObject(objValue) || isFunction(objValue)) {
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
              assignMergeValue(object, key, newValue);
            }
            function baseNth(array, n) {
              var length = array.length;
              if (!length) {
                return;
              }
              n += n < 0 ? length : 0;
              return isIndex(n, length) ? array[n] : undefined2;
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
              var index = -1;
              iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
              var result2 = baseMap(collection, function(value, key, collection2) {
                var criteria = arrayMap(iteratees, function(iteratee2) {
                  return iteratee2(value);
                });
                return { "criteria": criteria, "index": ++index, "value": value };
              });
              return baseSortBy(result2, function(object, other) {
                return compareMultiple(object, other, orders);
              });
            }
            function basePick(object, paths) {
              return basePickBy(object, paths, function(value, path) {
                return hasIn(object, path);
              });
            }
            function basePickBy(object, paths, predicate) {
              var index = -1, length = paths.length, result2 = {};
              while (++index < length) {
                var path = paths[index], value = baseGet(object, path);
                if (predicate(value, path)) {
                  baseSet(result2, castPath(path, object), value);
                }
              }
              return result2;
            }
            function basePropertyDeep(path) {
              return function(object) {
                return baseGet(object, path);
              };
            }
            function basePullAll(array, values2, iteratee2, comparator) {
              var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
              if (array === values2) {
                values2 = copyArray(values2);
              }
              if (iteratee2) {
                seen = arrayMap(array, baseUnary(iteratee2));
              }
              while (++index < length) {
                var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
                while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
                  if (seen !== array) {
                    splice.call(seen, fromIndex, 1);
                  }
                  splice.call(array, fromIndex, 1);
                }
              }
              return array;
            }
            function basePullAt(array, indexes) {
              var length = array ? indexes.length : 0, lastIndex = length - 1;
              while (length--) {
                var index = indexes[length];
                if (length == lastIndex || index !== previous) {
                  var previous = index;
                  if (isIndex(index)) {
                    splice.call(array, index, 1);
                  } else {
                    baseUnset(array, index);
                  }
                }
              }
              return array;
            }
            function baseRandom(lower, upper) {
              return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
            }
            function baseRange(start, end, step, fromRight) {
              var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
              while (length--) {
                result2[fromRight ? length : ++index] = start;
                start += step;
              }
              return result2;
            }
            function baseRepeat(string, n) {
              var result2 = "";
              if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
                return result2;
              }
              do {
                if (n % 2) {
                  result2 += string;
                }
                n = nativeFloor(n / 2);
                if (n) {
                  string += string;
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
              var array = values(collection);
              return shuffleSelf(array, baseClamp(n, 0, array.length));
            }
            function baseSet(object, path, value, customizer) {
              if (!isObject(object)) {
                return object;
              }
              path = castPath(path, object);
              var index = -1, length = path.length, lastIndex = length - 1, nested = object;
              while (nested != null && ++index < length) {
                var key = toKey(path[index]), newValue = value;
                if (key === "__proto__" || key === "constructor" || key === "prototype") {
                  return object;
                }
                if (index != lastIndex) {
                  var objValue = nested[key];
                  newValue = customizer ? customizer(objValue, key, nested) : undefined2;
                  if (newValue === undefined2) {
                    newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
                  }
                }
                assignValue(nested, key, newValue);
                nested = nested[key];
              }
              return object;
            }
            var baseSetData = !metaMap ? identity : function(func, data) {
              metaMap.set(func, data);
              return func;
            };
            var baseSetToString = !defineProperty ? identity : function(func, string) {
              return defineProperty(func, "toString", {
                "configurable": true,
                "enumerable": false,
                "value": constant(string),
                "writable": true
              });
            };
            function baseShuffle(collection) {
              return shuffleSelf(values(collection));
            }
            function baseSlice(array, start, end) {
              var index = -1, length = array.length;
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
              while (++index < length) {
                result2[index] = array[index + start];
              }
              return result2;
            }
            function baseSome(collection, predicate) {
              var result2;
              baseEach(collection, function(value, index, collection2) {
                result2 = predicate(value, index, collection2);
                return !result2;
              });
              return !!result2;
            }
            function baseSortedIndex(array, value, retHighest) {
              var low = 0, high = array == null ? low : array.length;
              if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                while (low < high) {
                  var mid = low + high >>> 1, computed = array[mid];
                  if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                    low = mid + 1;
                  } else {
                    high = mid;
                  }
                }
                return high;
              }
              return baseSortedIndexBy(array, value, identity, retHighest);
            }
            function baseSortedIndexBy(array, value, iteratee2, retHighest) {
              var low = 0, high = array == null ? 0 : array.length;
              if (high === 0) {
                return 0;
              }
              value = iteratee2(value);
              var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
              while (low < high) {
                var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
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
            function baseSortedUniq(array, iteratee2) {
              var index = -1, length = array.length, resIndex = 0, result2 = [];
              while (++index < length) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                if (!index || !eq(computed, seen)) {
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
            function baseUniq(array, iteratee2, comparator) {
              var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
              if (comparator) {
                isCommon = false;
                includes2 = arrayIncludesWith;
              } else if (length >= LARGE_ARRAY_SIZE) {
                var set2 = iteratee2 ? null : createSet(array);
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
                while (++index < length) {
                  var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
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
            function baseUnset(object, path) {
              path = castPath(path, object);
              object = parent(object, path);
              return object == null || delete object[toKey(last(path))];
            }
            function baseUpdate(object, path, updater, customizer) {
              return baseSet(object, path, updater(baseGet(object, path)), customizer);
            }
            function baseWhile(array, predicate, isDrop, fromRight) {
              var length = array.length, index = fromRight ? length : -1;
              while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
              }
              return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
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
              var index = -1, result2 = Array2(length);
              while (++index < length) {
                var array = arrays[index], othIndex = -1;
                while (++othIndex < length) {
                  if (othIndex != index) {
                    result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
                  }
                }
              }
              return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
            }
            function baseZipObject(props, values2, assignFunc) {
              var index = -1, length = props.length, valsLength = values2.length, result2 = {};
              while (++index < length) {
                var value = index < valsLength ? values2[index] : undefined2;
                assignFunc(result2, props[index], value);
              }
              return result2;
            }
            function castArrayLikeObject(value) {
              return isArrayLikeObject(value) ? value : [];
            }
            function castFunction(value) {
              return typeof value == "function" ? value : identity;
            }
            function castPath(value, object) {
              if (isArray(value)) {
                return value;
              }
              return isKey(value, object) ? [value] : stringToPath(toString(value));
            }
            var castRest = baseRest;
            function castSlice(array, start, end) {
              var length = array.length;
              end = end === undefined2 ? length : end;
              return !start && end >= length ? array : baseSlice(array, start, end);
            }
            var clearTimeout2 = ctxClearTimeout || function(id) {
              return root.clearTimeout(id);
            };
            function cloneBuffer(buffer, isDeep) {
              if (isDeep) {
                return buffer.slice();
              }
              var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
              buffer.copy(result2);
              return result2;
            }
            function cloneArrayBuffer(arrayBuffer) {
              var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
              new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
              return result2;
            }
            function cloneDataView(dataView, isDeep) {
              var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
              return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
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
              var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
              return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
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
            function compareMultiple(object, other, orders) {
              var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
              while (++index < length) {
                var result2 = compareAscending(objCriteria[index], othCriteria[index]);
                if (result2) {
                  if (index >= ordersLength) {
                    return result2;
                  }
                  var order = orders[index];
                  return result2 * (order == "desc" ? -1 : 1);
                }
              }
              return object.index - other.index;
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
            function copyArray(source, array) {
              var index = -1, length = source.length;
              array || (array = Array2(length));
              while (++index < length) {
                array[index] = source[index];
              }
              return array;
            }
            function copyObject(source, props, object, customizer) {
              var isNew = !object;
              object || (object = {});
              var index = -1, length = props.length;
              while (++index < length) {
                var key = props[index];
                var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
                if (newValue === undefined2) {
                  newValue = source[key];
                }
                if (isNew) {
                  baseAssignValue(object, key, newValue);
                } else {
                  assignValue(object, key, newValue);
                }
              }
              return object;
            }
            function copySymbols(source, object) {
              return copyObject(source, getSymbols(source), object);
            }
            function copySymbolsIn(source, object) {
              return copyObject(source, getSymbolsIn(source), object);
            }
            function createAggregator(setter, initializer) {
              return function(collection, iteratee2) {
                var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
                return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
              };
            }
            function createAssigner(assigner) {
              return baseRest(function(object, sources) {
                var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
                customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
                if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                  customizer = length < 3 ? undefined2 : customizer;
                  length = 1;
                }
                object = Object2(object);
                while (++index < length) {
                  var source = sources[index];
                  if (source) {
                    assigner(object, source, index, customizer);
                  }
                }
                return object;
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
                var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
                while (fromRight ? index-- : ++index < length) {
                  if (iteratee2(iterable[index], index, iterable) === false) {
                    break;
                  }
                }
                return collection;
              };
            }
            function createBaseFor(fromRight) {
              return function(object, iteratee2, keysFunc) {
                var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
                while (length--) {
                  var key = props[fromRight ? length : ++index];
                  if (iteratee2(iterable[key], key, iterable) === false) {
                    break;
                  }
                }
                return object;
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
              return function(string) {
                string = toString(string);
                var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
                var chr = strSymbols ? strSymbols[0] : string.charAt(0);
                var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
                return chr[methodName]() + trailing;
              };
            }
            function createCompounder(callback) {
              return function(string) {
                return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
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
                return isObject(result2) ? result2 : thisBinding;
              };
            }
            function createCurry(func, bitmask, arity) {
              var Ctor = createCtor(func);
              function wrapper() {
                var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
                while (index--) {
                  args[index] = arguments[index];
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
                var index = findIndexFunc(collection, predicate, fromIndex);
                return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
              };
            }
            function createFlow(fromRight) {
              return flatRest(function(funcs) {
                var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
                if (fromRight) {
                  funcs.reverse();
                }
                while (index--) {
                  var func = funcs[index];
                  if (typeof func != "function") {
                    throw new TypeError2(FUNC_ERROR_TEXT);
                  }
                  if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                    var wrapper = new LodashWrapper([], true);
                  }
                }
                index = wrapper ? index : length;
                while (++index < length) {
                  func = funcs[index];
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
                  var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
                  while (++index2 < length) {
                    result2 = funcs[index2].call(this, result2);
                  }
                  return result2;
                };
              });
            }
            function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
              var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
              function wrapper() {
                var length = arguments.length, args = Array2(length), index = length;
                while (index--) {
                  args[index] = arguments[index];
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
              return function(object, iteratee2) {
                return baseInverter(object, setter, toIteratee(iteratee2), {});
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
                  value = toNumber(value);
                  other = toNumber(other);
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
              return function(number, precision) {
                number = toNumber(number);
                precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
                if (precision && nativeIsFinite(number)) {
                  var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                  pair = (toString(value) + "e").split("e");
                  return +(pair[0] + "e" + (+pair[1] - precision));
                }
                return func(number);
              };
            }
            var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
              return new Set2(values2);
            };
            function createToPairs(keysFunc) {
              return function(object) {
                var tag = getTag(object);
                if (tag == mapTag) {
                  return mapToArray(object);
                }
                if (tag == setTag) {
                  return setToPairs(object);
                }
                return baseToPairs(object, keysFunc(object));
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
            function customDefaultsAssignIn(objValue, srcValue, key, object) {
              if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                return srcValue;
              }
              return objValue;
            }
            function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
              if (isObject(objValue) && isObject(srcValue)) {
                stack.set(srcValue, objValue);
                baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
                stack["delete"](srcValue);
              }
              return objValue;
            }
            function customOmitClone(value) {
              return isPlainObject(value) ? undefined2 : value;
            }
            function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
              if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
                return false;
              }
              var arrStacked = stack.get(array);
              var othStacked = stack.get(other);
              if (arrStacked && othStacked) {
                return arrStacked == other && othStacked == array;
              }
              var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
              stack.set(array, other);
              stack.set(other, array);
              while (++index < arrLength) {
                var arrValue = array[index], othValue = other[index];
                if (customizer) {
                  var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
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
              stack["delete"](array);
              stack["delete"](other);
              return result2;
            }
            function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
              switch (tag) {
                case dataViewTag:
                  if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                    return false;
                  }
                  object = object.buffer;
                  other = other.buffer;
                case arrayBufferTag:
                  if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                    return false;
                  }
                  return true;
                case boolTag:
                case dateTag:
                case numberTag:
                  return eq(+object, +other);
                case errorTag:
                  return object.name == other.name && object.message == other.message;
                case regexpTag:
                case stringTag:
                  return object == other + "";
                case mapTag:
                  var convert = mapToArray;
                case setTag:
                  var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                  convert || (convert = setToArray);
                  if (object.size != other.size && !isPartial) {
                    return false;
                  }
                  var stacked = stack.get(object);
                  if (stacked) {
                    return stacked == other;
                  }
                  bitmask |= COMPARE_UNORDERED_FLAG;
                  stack.set(object, other);
                  var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                  stack["delete"](object);
                  return result2;
                case symbolTag:
                  if (symbolValueOf) {
                    return symbolValueOf.call(object) == symbolValueOf.call(other);
                  }
              }
              return false;
            }
            function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
              if (objLength != othLength && !isPartial) {
                return false;
              }
              var index = objLength;
              while (index--) {
                var key = objProps[index];
                if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                  return false;
                }
              }
              var objStacked = stack.get(object);
              var othStacked = stack.get(other);
              if (objStacked && othStacked) {
                return objStacked == other && othStacked == object;
              }
              var result2 = true;
              stack.set(object, other);
              stack.set(other, object);
              var skipCtor = isPartial;
              while (++index < objLength) {
                key = objProps[index];
                var objValue = object[key], othValue = other[key];
                if (customizer) {
                  var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                }
                if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                  result2 = false;
                  break;
                }
                skipCtor || (skipCtor = key == "constructor");
              }
              if (result2 && !skipCtor) {
                var objCtor = object.constructor, othCtor = other.constructor;
                if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                  result2 = false;
                }
              }
              stack["delete"](object);
              stack["delete"](other);
              return result2;
            }
            function flatRest(func) {
              return setToString(overRest(func, undefined2, flatten), func + "");
            }
            function getAllKeys(object) {
              return baseGetAllKeys(object, keys, getSymbols);
            }
            function getAllKeysIn(object) {
              return baseGetAllKeys(object, keysIn, getSymbolsIn);
            }
            var getData = !metaMap ? noop : function(func) {
              return metaMap.get(func);
            };
            function getFuncName(func) {
              var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
              while (length--) {
                var data = array[length], otherFunc = data.func;
                if (otherFunc == null || otherFunc == func) {
                  return data.name;
                }
              }
              return result2;
            }
            function getHolder(func) {
              var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
              return object.placeholder;
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
            function getMatchData(object) {
              var result2 = keys(object), length = result2.length;
              while (length--) {
                var key = result2[length], value = object[key];
                result2[length] = [key, value, isStrictComparable(value)];
              }
              return result2;
            }
            function getNative(object, key) {
              var value = getValue(object, key);
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
            var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
              if (object == null) {
                return [];
              }
              object = Object2(object);
              return arrayFilter(nativeGetSymbols(object), function(symbol) {
                return propertyIsEnumerable.call(object, symbol);
              });
            };
            var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
              var result2 = [];
              while (object) {
                arrayPush(result2, getSymbols(object));
                object = getPrototype(object);
              }
              return result2;
            };
            var getTag = baseGetTag;
            if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
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
              var index = -1, length = transforms.length;
              while (++index < length) {
                var data = transforms[index], size2 = data.size;
                switch (data.type) {
                  case "drop":
                    start += size2;
                    break;
                  case "dropRight":
                    end -= size2;
                    break;
                  case "take":
                    end = nativeMin(end, start + size2);
                    break;
                  case "takeRight":
                    start = nativeMax(start, end - size2);
                    break;
                }
              }
              return { "start": start, "end": end };
            }
            function getWrapDetails(source) {
              var match = source.match(reWrapDetails);
              return match ? match[1].split(reSplitDetails) : [];
            }
            function hasPath(object, path, hasFunc) {
              path = castPath(path, object);
              var index = -1, length = path.length, result2 = false;
              while (++index < length) {
                var key = toKey(path[index]);
                if (!(result2 = object != null && hasFunc(object, key))) {
                  break;
                }
                object = object[key];
              }
              if (result2 || ++index != length) {
                return result2;
              }
              length = object == null ? 0 : object.length;
              return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
            }
            function initCloneArray(array) {
              var length = array.length, result2 = new array.constructor(length);
              if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
                result2.index = array.index;
                result2.input = array.input;
              }
              return result2;
            }
            function initCloneObject(object) {
              return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
            }
            function initCloneByTag(object, tag, isDeep) {
              var Ctor = object.constructor;
              switch (tag) {
                case arrayBufferTag:
                  return cloneArrayBuffer(object);
                case boolTag:
                case dateTag:
                  return new Ctor(+object);
                case dataViewTag:
                  return cloneDataView(object, isDeep);
                case float32Tag:
                case float64Tag:
                case int8Tag:
                case int16Tag:
                case int32Tag:
                case uint8Tag:
                case uint8ClampedTag:
                case uint16Tag:
                case uint32Tag:
                  return cloneTypedArray(object, isDeep);
                case mapTag:
                  return new Ctor();
                case numberTag:
                case stringTag:
                  return new Ctor(object);
                case regexpTag:
                  return cloneRegExp(object);
                case setTag:
                  return new Ctor();
                case symbolTag:
                  return cloneSymbol(object);
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
              var type = typeof value;
              length = length == null ? MAX_SAFE_INTEGER : length;
              return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
            }
            function isIterateeCall(value, index, object) {
              if (!isObject(object)) {
                return false;
              }
              var type = typeof index;
              if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
                return eq(object[index], value);
              }
              return false;
            }
            function isKey(value, object) {
              if (isArray(value)) {
                return false;
              }
              var type = typeof value;
              if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
                return true;
              }
              return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
            }
            function isKeyable(value) {
              var type = typeof value;
              return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
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
              return value === value && !isObject(value);
            }
            function matchesStrictComparable(key, srcValue) {
              return function(object) {
                if (object == null) {
                  return false;
                }
                return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
              };
            }
            function memoizeCapped(func) {
              var result2 = memoize(func, function(key) {
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
            function nativeKeysIn(object) {
              var result2 = [];
              if (object != null) {
                for (var key in Object2(object)) {
                  result2.push(key);
                }
              }
              return result2;
            }
            function objectToString(value) {
              return nativeObjectToString.call(value);
            }
            function overRest(func, start, transform3) {
              start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
              return function() {
                var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
                while (++index < length) {
                  array[index] = args[start + index];
                }
                index = -1;
                var otherArgs = Array2(start + 1);
                while (++index < start) {
                  otherArgs[index] = args[index];
                }
                otherArgs[start] = transform3(array);
                return apply(func, this, otherArgs);
              };
            }
            function parent(object, path) {
              return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
            }
            function reorder(array, indexes) {
              var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
              while (length--) {
                var index = indexes[length];
                array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
              }
              return array;
            }
            function safeGet(object, key) {
              if (key === "constructor" && typeof object[key] === "function") {
                return;
              }
              if (key == "__proto__") {
                return;
              }
              return object[key];
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
            function shuffleSelf(array, size2) {
              var index = -1, length = array.length, lastIndex = length - 1;
              size2 = size2 === undefined2 ? length : size2;
              while (++index < size2) {
                var rand = baseRandom(index, lastIndex), value = array[rand];
                array[rand] = array[index];
                array[index] = value;
              }
              array.length = size2;
              return array;
            }
            var stringToPath = memoizeCapped(function(string) {
              var result2 = [];
              if (string.charCodeAt(0) === 46) {
                result2.push("");
              }
              string.replace(rePropName, function(match, number, quote, subString) {
                result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
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
            function chunk(array, size2, guard) {
              if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
                size2 = 1;
              } else {
                size2 = nativeMax(toInteger(size2), 0);
              }
              var length = array == null ? 0 : array.length;
              if (!length || size2 < 1) {
                return [];
              }
              var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
              while (index < length) {
                result2[resIndex++] = baseSlice(array, index, index += size2);
              }
              return result2;
            }
            function compact(array) {
              var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
              while (++index < length) {
                var value = array[index];
                if (value) {
                  result2[resIndex++] = value;
                }
              }
              return result2;
            }
            function concat() {
              var length = arguments.length;
              if (!length) {
                return [];
              }
              var args = Array2(length - 1), array = arguments[0], index = length;
              while (index--) {
                args[index - 1] = arguments[index];
              }
              return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
            }
            var difference = baseRest(function(array, values2) {
              return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
            });
            var differenceBy = baseRest(function(array, values2) {
              var iteratee2 = last(values2);
              if (isArrayLikeObject(iteratee2)) {
                iteratee2 = undefined2;
              }
              return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
            });
            var differenceWith = baseRest(function(array, values2) {
              var comparator = last(values2);
              if (isArrayLikeObject(comparator)) {
                comparator = undefined2;
              }
              return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
            });
            function drop(array, n, guard) {
              var length = array == null ? 0 : array.length;
              if (!length) {
                return [];
              }
              n = guard || n === undefined2 ? 1 : toInteger(n);
              return baseSlice(array, n < 0 ? 0 : n, length);
            }
            function dropRight(array, n, guard) {
              var length = array == null ? 0 : array.length;
              if (!length) {
                return [];
              }
              n = guard || n === undefined2 ? 1 : toInteger(n);
              n = length - n;
              return baseSlice(array, 0, n < 0 ? 0 : n);
            }
            function dropRightWhile(array, predicate) {
              return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
            }
            function dropWhile(array, predicate) {
              return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
            }
            function fill(array, value, start, end) {
              var length = array == null ? 0 : array.length;
              if (!length) {
                return [];
              }
              if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
                start = 0;
                end = length;
              }
              return baseFill(array, value, start, end);
            }
            function findIndex(array, predicate, fromIndex) {
              var length = array == null ? 0 : array.length;
              if (!length) {
                return -1;
              }
              var index = fromIndex == null ? 0 : toInteger(fromIndex);
              if (index < 0) {
                index = nativeMax(length + index, 0);
              }
              return baseFindIndex(array, getIteratee(predicate, 3), index);
            }
            function findLastIndex(array, predicate, fromIndex) {
              var length = array == null ? 0 : array.length;
              if (!length) {
                return -1;
              }
              var index = length - 1;
              if (fromIndex !== undefined2) {
                index = toInteger(fromIndex);
                index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
              }
              return baseFindIndex(array, getIteratee(predicate, 3), index, true);
            }
            function flatten(array) {
              var length = array == null ? 0 : array.length;
              return length ? baseFlatten(array, 1) : [];
            }
            function flattenDeep(array) {
              var length = array == null ? 0 : array.length;
              return length ? baseFlatten(array, INFINITY) : [];
            }
            function flattenDepth(array, depth) {
              var length = array == null ? 0 : array.length;
              if (!length) {
                return [];
              }
              depth = depth === undefined2 ? 1 : toInteger(depth);
              return baseFlatten(array, depth);
            }
            function fromPairs(pairs) {
              var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
              while (++index < length) {
                var pair = pairs[index];
                result2[pair[0]] = pair[1];
              }
              return result2;
            }
            function head(array) {
              return array && array.length ? array[0] : undefined2;
            }
            function indexOf(array, value, fromIndex) {
              var length = array == null ? 0 : array.length;
              if (!length) {
                return -1;
              }
              var index = fromIndex == null ? 0 : toInteger(fromIndex);
              if (index < 0) {
                index = nativeMax(length + index, 0);
              }
              return baseIndexOf(array, value, index);
            }
            function initial(array) {
              var length = array == null ? 0 : array.length;
              return length ? baseSlice(array, 0, -1) : [];
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
            function join(array, separator) {
              return array == null ? "" : nativeJoin.call(array, separator);
            }
            function last(array) {
              var length = array == null ? 0 : array.length;
              return length ? array[length - 1] : undefined2;
            }
            function lastIndexOf(array, value, fromIndex) {
              var length = array == null ? 0 : array.length;
              if (!length) {
                return -1;
              }
              var index = length;
              if (fromIndex !== undefined2) {
                index = toInteger(fromIndex);
                index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
              }
              return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
            }
            function nth(array, n) {
              return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
            }
            var pull = baseRest(pullAll);
            function pullAll(array, values2) {
              return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
            }
            function pullAllBy(array, values2, iteratee2) {
              return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
            }
            function pullAllWith(array, values2, comparator) {
              return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
            }
            var pullAt = flatRest(function(array, indexes) {
              var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
              basePullAt(array, arrayMap(indexes, function(index) {
                return isIndex(index, length) ? +index : index;
              }).sort(compareAscending));
              return result2;
            });
            function remove(array, predicate) {
              var result2 = [];
              if (!(array && array.length)) {
                return result2;
              }
              var index = -1, indexes = [], length = array.length;
              predicate = getIteratee(predicate, 3);
              while (++index < length) {
                var value = array[index];
                if (predicate(value, index, array)) {
                  result2.push(value);
                  indexes.push(index);
                }
              }
              basePullAt(array, indexes);
              return result2;
            }
            function reverse(array) {
              return array == null ? array : nativeReverse.call(array);
            }
            function slice(array, start, end) {
              var length = array == null ? 0 : array.length;
              if (!length) {
                return [];
              }
              if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
                start = 0;
                end = length;
              } else {
                start = start == null ? 0 : toInteger(start);
                end = end === undefined2 ? length : toInteger(end);
              }
              return baseSlice(array, start, end);
            }
            function sortedIndex(array, value) {
              return baseSortedIndex(array, value);
            }
            function sortedIndexBy(array, value, iteratee2) {
              return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
            }
            function sortedIndexOf(array, value) {
              var length = array == null ? 0 : array.length;
              if (length) {
                var index = baseSortedIndex(array, value);
                if (index < length && eq(array[index], value)) {
                  return index;
                }
              }
              return -1;
            }
            function sortedLastIndex(array, value) {
              return baseSortedIndex(array, value, true);
            }
            function sortedLastIndexBy(array, value, iteratee2) {
              return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
            }
            function sortedLastIndexOf(array, value) {
              var length = array == null ? 0 : array.length;
              if (length) {
                var index = baseSortedIndex(array, value, true) - 1;
                if (eq(array[index], value)) {
                  return index;
                }
              }
              return -1;
            }
            function sortedUniq(array) {
              return array && array.length ? baseSortedUniq(array) : [];
            }
            function sortedUniqBy(array, iteratee2) {
              return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
            }
            function tail(array) {
              var length = array == null ? 0 : array.length;
              return length ? baseSlice(array, 1, length) : [];
            }
            function take(array, n, guard) {
              if (!(array && array.length)) {
                return [];
              }
              n = guard || n === undefined2 ? 1 : toInteger(n);
              return baseSlice(array, 0, n < 0 ? 0 : n);
            }
            function takeRight(array, n, guard) {
              var length = array == null ? 0 : array.length;
              if (!length) {
                return [];
              }
              n = guard || n === undefined2 ? 1 : toInteger(n);
              n = length - n;
              return baseSlice(array, n < 0 ? 0 : n, length);
            }
            function takeRightWhile(array, predicate) {
              return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
            }
            function takeWhile(array, predicate) {
              return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
            }
            var union = baseRest(function(arrays) {
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
            function uniq(array) {
              return array && array.length ? baseUniq(array) : [];
            }
            function uniqBy(array, iteratee2) {
              return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
            }
            function uniqWith(array, comparator) {
              comparator = typeof comparator == "function" ? comparator : undefined2;
              return array && array.length ? baseUniq(array, undefined2, comparator) : [];
            }
            function unzip(array) {
              if (!(array && array.length)) {
                return [];
              }
              var length = 0;
              array = arrayFilter(array, function(group) {
                if (isArrayLikeObject(group)) {
                  length = nativeMax(group.length, length);
                  return true;
                }
              });
              return baseTimes(length, function(index) {
                return arrayMap(array, baseProperty(index));
              });
            }
            function unzipWith(array, iteratee2) {
              if (!(array && array.length)) {
                return [];
              }
              var result2 = unzip(array);
              if (iteratee2 == null) {
                return result2;
              }
              return arrayMap(result2, function(group) {
                return apply(iteratee2, undefined2, group);
              });
            }
            var without = baseRest(function(array, values2) {
              return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
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
              var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
                return baseAt(object, paths);
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
              return new LodashWrapper(value, this.__chain__).thru(function(array) {
                if (length && !array.length) {
                  array.push(undefined2);
                }
                return array;
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
              return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
            }
            var invokeMap = baseRest(function(collection, path, args) {
              var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
              baseEach(collection, function(value) {
                result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
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
            function size(collection) {
              if (collection == null) {
                return 0;
              }
              if (isArrayLike(collection)) {
                return isString(collection) ? stringSize(collection) : collection.length;
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
            var bindKey = baseRest(function(object, key, partials) {
              var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
              if (partials.length) {
                var holders = replaceHolders(partials, getHolder(bindKey));
                bitmask |= WRAP_PARTIAL_FLAG;
              }
              return createWrap(key, bitmask, object, partials, holders);
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
              wait = toNumber(wait) || 0;
              if (isObject(options)) {
                leading = !!options.leading;
                maxing = "maxWait" in options;
                maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
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
              return baseDelay(func, toNumber(wait) || 0, args);
            });
            function flip(func) {
              return createWrap(func, WRAP_FLIP_FLAG);
            }
            function memoize(func, resolver) {
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
              memoized.cache = new (memoize.Cache || MapCache)();
              return memoized;
            }
            memoize.Cache = MapCache;
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
                var index = -1, length = nativeMin(args.length, funcsLength);
                while (++index < length) {
                  args[index] = transforms[index].call(this, args[index]);
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
                var array = args[start], otherArgs = castSlice(args, 0, start);
                if (array) {
                  arrayPush(otherArgs, array);
                }
                return apply(func, this, otherArgs);
              });
            }
            function throttle(func, wait, options) {
              var leading = true, trailing = true;
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (isObject(options)) {
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
            function conformsTo(object, source) {
              return source == null || baseConformsTo(object, source, keys(source));
            }
            function eq(value, other) {
              return value === other || value !== value && other !== other;
            }
            var gt = createRelationalOperation(baseGt);
            var gte = createRelationalOperation(function(value, other) {
              return value >= other;
            });
            var isArguments = baseIsArguments(function() {
              return arguments;
            }()) ? baseIsArguments : function(value) {
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
              return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
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
            function isEqual(value, other) {
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
              return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
            }
            function isFinite2(value) {
              return typeof value == "number" && nativeIsFinite(value);
            }
            function isFunction(value) {
              if (!isObject(value)) {
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
            function isObject(value) {
              var type = typeof value;
              return value != null && (type == "object" || type == "function");
            }
            function isObjectLike(value) {
              return value != null && typeof value == "object";
            }
            var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
            function isMatch(object, source) {
              return object === source || baseIsMatch(object, source, getMatchData(source));
            }
            function isMatchWith(object, source, customizer) {
              customizer = typeof customizer == "function" ? customizer : undefined2;
              return baseIsMatch(object, source, getMatchData(source), customizer);
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
            function isPlainObject(value) {
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
            function isString(value) {
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
                return isString(value) ? stringToArray(value) : copyArray(value);
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
              value = toNumber(value);
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
            function toNumber(value) {
              if (typeof value == "number") {
                return value;
              }
              if (isSymbol(value)) {
                return NAN;
              }
              if (isObject(value)) {
                var other = typeof value.valueOf == "function" ? value.valueOf() : value;
                value = isObject(other) ? other + "" : other;
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
            function toString(value) {
              return value == null ? "" : baseToString(value);
            }
            var assign = createAssigner(function(object, source) {
              if (isPrototype(source) || isArrayLike(source)) {
                copyObject(source, keys(source), object);
                return;
              }
              for (var key in source) {
                if (hasOwnProperty.call(source, key)) {
                  assignValue(object, key, source[key]);
                }
              }
            });
            var assignIn = createAssigner(function(object, source) {
              copyObject(source, keysIn(source), object);
            });
            var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
              copyObject(source, keysIn(source), object, customizer);
            });
            var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
              copyObject(source, keys(source), object, customizer);
            });
            var at = flatRest(baseAt);
            function create(prototype, properties) {
              var result2 = baseCreate(prototype);
              return properties == null ? result2 : baseAssign(result2, properties);
            }
            var defaults = baseRest(function(object, sources) {
              object = Object2(object);
              var index = -1;
              var length = sources.length;
              var guard = length > 2 ? sources[2] : undefined2;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                length = 1;
              }
              while (++index < length) {
                var source = sources[index];
                var props = keysIn(source);
                var propsIndex = -1;
                var propsLength = props.length;
                while (++propsIndex < propsLength) {
                  var key = props[propsIndex];
                  var value = object[key];
                  if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                    object[key] = source[key];
                  }
                }
              }
              return object;
            });
            var defaultsDeep = baseRest(function(args) {
              args.push(undefined2, customDefaultsMerge);
              return apply(mergeWith, undefined2, args);
            });
            function findKey(object, predicate) {
              return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
            }
            function findLastKey(object, predicate) {
              return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
            }
            function forIn(object, iteratee2) {
              return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
            }
            function forInRight(object, iteratee2) {
              return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
            }
            function forOwn(object, iteratee2) {
              return object && baseForOwn(object, getIteratee(iteratee2, 3));
            }
            function forOwnRight(object, iteratee2) {
              return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
            }
            function functions(object) {
              return object == null ? [] : baseFunctions(object, keys(object));
            }
            function functionsIn(object) {
              return object == null ? [] : baseFunctions(object, keysIn(object));
            }
            function get(object, path, defaultValue) {
              var result2 = object == null ? undefined2 : baseGet(object, path);
              return result2 === undefined2 ? defaultValue : result2;
            }
            function has(object, path) {
              return object != null && hasPath(object, path, baseHas);
            }
            function hasIn(object, path) {
              return object != null && hasPath(object, path, baseHasIn);
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
            function keys(object) {
              return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
            }
            function keysIn(object) {
              return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
            }
            function mapKeys(object, iteratee2) {
              var result2 = {};
              iteratee2 = getIteratee(iteratee2, 3);
              baseForOwn(object, function(value, key, object2) {
                baseAssignValue(result2, iteratee2(value, key, object2), value);
              });
              return result2;
            }
            function mapValues(object, iteratee2) {
              var result2 = {};
              iteratee2 = getIteratee(iteratee2, 3);
              baseForOwn(object, function(value, key, object2) {
                baseAssignValue(result2, key, iteratee2(value, key, object2));
              });
              return result2;
            }
            var merge = createAssigner(function(object, source, srcIndex) {
              baseMerge(object, source, srcIndex);
            });
            var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
              baseMerge(object, source, srcIndex, customizer);
            });
            var omit = flatRest(function(object, paths) {
              var result2 = {};
              if (object == null) {
                return result2;
              }
              var isDeep = false;
              paths = arrayMap(paths, function(path) {
                path = castPath(path, object);
                isDeep || (isDeep = path.length > 1);
                return path;
              });
              copyObject(object, getAllKeysIn(object), result2);
              if (isDeep) {
                result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
              }
              var length = paths.length;
              while (length--) {
                baseUnset(result2, paths[length]);
              }
              return result2;
            });
            function omitBy(object, predicate) {
              return pickBy(object, negate(getIteratee(predicate)));
            }
            var pick = flatRest(function(object, paths) {
              return object == null ? {} : basePick(object, paths);
            });
            function pickBy(object, predicate) {
              if (object == null) {
                return {};
              }
              var props = arrayMap(getAllKeysIn(object), function(prop) {
                return [prop];
              });
              predicate = getIteratee(predicate);
              return basePickBy(object, props, function(value, path) {
                return predicate(value, path[0]);
              });
            }
            function result(object, path, defaultValue) {
              path = castPath(path, object);
              var index = -1, length = path.length;
              if (!length) {
                length = 1;
                object = undefined2;
              }
              while (++index < length) {
                var value = object == null ? undefined2 : object[toKey(path[index])];
                if (value === undefined2) {
                  index = length;
                  value = defaultValue;
                }
                object = isFunction(value) ? value.call(object) : value;
              }
              return object;
            }
            function set(object, path, value) {
              return object == null ? object : baseSet(object, path, value);
            }
            function setWith(object, path, value, customizer) {
              customizer = typeof customizer == "function" ? customizer : undefined2;
              return object == null ? object : baseSet(object, path, value, customizer);
            }
            var toPairs = createToPairs(keys);
            var toPairsIn = createToPairs(keysIn);
            function transform2(object, iteratee2, accumulator) {
              var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
              iteratee2 = getIteratee(iteratee2, 4);
              if (accumulator == null) {
                var Ctor = object && object.constructor;
                if (isArrLike) {
                  accumulator = isArr ? new Ctor() : [];
                } else if (isObject(object)) {
                  accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
                } else {
                  accumulator = {};
                }
              }
              (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
                return iteratee2(accumulator, value, index, object2);
              });
              return accumulator;
            }
            function unset(object, path) {
              return object == null ? true : baseUnset(object, path);
            }
            function update(object, path, updater) {
              return object == null ? object : baseUpdate(object, path, castFunction(updater));
            }
            function updateWith(object, path, updater, customizer) {
              customizer = typeof customizer == "function" ? customizer : undefined2;
              return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
            }
            function values(object) {
              return object == null ? [] : baseValues(object, keys(object));
            }
            function valuesIn(object) {
              return object == null ? [] : baseValues(object, keysIn(object));
            }
            function clamp(number, lower, upper) {
              if (upper === undefined2) {
                upper = lower;
                lower = undefined2;
              }
              if (upper !== undefined2) {
                upper = toNumber(upper);
                upper = upper === upper ? upper : 0;
              }
              if (lower !== undefined2) {
                lower = toNumber(lower);
                lower = lower === lower ? lower : 0;
              }
              return baseClamp(toNumber(number), lower, upper);
            }
            function inRange(number, start, end) {
              start = toFinite(start);
              if (end === undefined2) {
                end = start;
                start = 0;
              } else {
                end = toFinite(end);
              }
              number = toNumber(number);
              return baseInRange(number, start, end);
            }
            function random(lower, upper, floating) {
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
            var camelCase = createCompounder(function(result2, word, index) {
              word = word.toLowerCase();
              return result2 + (index ? capitalize(word) : word);
            });
            function capitalize(string) {
              return upperFirst(toString(string).toLowerCase());
            }
            function deburr(string) {
              string = toString(string);
              return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
            }
            function endsWith(string, target, position) {
              string = toString(string);
              target = baseToString(target);
              var length = string.length;
              position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
              var end = position;
              position -= target.length;
              return position >= 0 && string.slice(position, end) == target;
            }
            function escape(string) {
              string = toString(string);
              return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
            }
            function escapeRegExp(string) {
              string = toString(string);
              return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
            }
            var kebabCase = createCompounder(function(result2, word, index) {
              return result2 + (index ? "-" : "") + word.toLowerCase();
            });
            var lowerCase = createCompounder(function(result2, word, index) {
              return result2 + (index ? " " : "") + word.toLowerCase();
            });
            var lowerFirst = createCaseFirst("toLowerCase");
            function pad(string, length, chars) {
              string = toString(string);
              length = toInteger(length);
              var strLength = length ? stringSize(string) : 0;
              if (!length || strLength >= length) {
                return string;
              }
              var mid = (length - strLength) / 2;
              return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
            }
            function padEnd(string, length, chars) {
              string = toString(string);
              length = toInteger(length);
              var strLength = length ? stringSize(string) : 0;
              return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
            }
            function padStart(string, length, chars) {
              string = toString(string);
              length = toInteger(length);
              var strLength = length ? stringSize(string) : 0;
              return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
            }
            function parseInt2(string, radix, guard) {
              if (guard || radix == null) {
                radix = 0;
              } else if (radix) {
                radix = +radix;
              }
              return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
            }
            function repeat(string, n, guard) {
              if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
                n = 1;
              } else {
                n = toInteger(n);
              }
              return baseRepeat(toString(string), n);
            }
            function replace() {
              var args = arguments, string = toString(args[0]);
              return args.length < 3 ? string : string.replace(args[1], args[2]);
            }
            var snakeCase = createCompounder(function(result2, word, index) {
              return result2 + (index ? "_" : "") + word.toLowerCase();
            });
            function split(string, separator, limit) {
              if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
                separator = limit = undefined2;
              }
              limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
              if (!limit) {
                return [];
              }
              string = toString(string);
              if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
                separator = baseToString(separator);
                if (!separator && hasUnicode(string)) {
                  return castSlice(stringToArray(string), 0, limit);
                }
              }
              return string.split(separator, limit);
            }
            var startCase = createCompounder(function(result2, word, index) {
              return result2 + (index ? " " : "") + upperFirst(word);
            });
            function startsWith(string, target, position) {
              string = toString(string);
              position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
              target = baseToString(target);
              return string.slice(position, position + target.length) == target;
            }
            function template(string, options, guard) {
              var settings = lodash.templateSettings;
              if (guard && isIterateeCall(string, options, guard)) {
                options = undefined2;
              }
              string = toString(string);
              options = assignInWith({}, options, settings, customDefaultsAssignIn);
              var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
              var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
              var reDelimiters = RegExp2(
                (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
                "g"
              );
              var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
              string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                interpolateValue || (interpolateValue = esTemplateValue);
                source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
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
                index = offset + match.length;
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
              return toString(value).toLowerCase();
            }
            function toUpper(value) {
              return toString(value).toUpperCase();
            }
            function trim(string, chars, guard) {
              string = toString(string);
              if (string && (guard || chars === undefined2)) {
                return baseTrim(string);
              }
              if (!string || !(chars = baseToString(chars))) {
                return string;
              }
              var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
              return castSlice(strSymbols, start, end).join("");
            }
            function trimEnd(string, chars, guard) {
              string = toString(string);
              if (string && (guard || chars === undefined2)) {
                return string.slice(0, trimmedEndIndex(string) + 1);
              }
              if (!string || !(chars = baseToString(chars))) {
                return string;
              }
              var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
              return castSlice(strSymbols, 0, end).join("");
            }
            function trimStart(string, chars, guard) {
              string = toString(string);
              if (string && (guard || chars === undefined2)) {
                return string.replace(reTrimStart, "");
              }
              if (!string || !(chars = baseToString(chars))) {
                return string;
              }
              var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
              return castSlice(strSymbols, start).join("");
            }
            function truncate(string, options) {
              var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
              if (isObject(options)) {
                var separator = "separator" in options ? options.separator : separator;
                length = "length" in options ? toInteger(options.length) : length;
                omission = "omission" in options ? baseToString(options.omission) : omission;
              }
              string = toString(string);
              var strLength = string.length;
              if (hasUnicode(string)) {
                var strSymbols = stringToArray(string);
                strLength = strSymbols.length;
              }
              if (length >= strLength) {
                return string;
              }
              var end = length - stringSize(omission);
              if (end < 1) {
                return omission;
              }
              var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
              if (separator === undefined2) {
                return result2 + omission;
              }
              if (strSymbols) {
                end += result2.length - end;
              }
              if (isRegExp(separator)) {
                if (string.slice(end).search(separator)) {
                  var match, substring = result2;
                  if (!separator.global) {
                    separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
                  }
                  separator.lastIndex = 0;
                  while (match = separator.exec(substring)) {
                    var newEnd = match.index;
                  }
                  result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
                }
              } else if (string.indexOf(baseToString(separator), end) != end) {
                var index = result2.lastIndexOf(separator);
                if (index > -1) {
                  result2 = result2.slice(0, index);
                }
              }
              return result2 + omission;
            }
            function unescape(string) {
              string = toString(string);
              return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
            }
            var upperCase = createCompounder(function(result2, word, index) {
              return result2 + (index ? " " : "") + word.toUpperCase();
            });
            var upperFirst = createCaseFirst("toUpperCase");
            function words(string, pattern, guard) {
              string = toString(string);
              pattern = guard ? undefined2 : pattern;
              if (pattern === undefined2) {
                return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
              }
              return string.match(pattern) || [];
            }
            var attempt = baseRest(function(func, args) {
              try {
                return apply(func, undefined2, args);
              } catch (e) {
                return isError(e) ? e : new Error2(e);
              }
            });
            var bindAll = flatRest(function(object, methodNames) {
              arrayEach(methodNames, function(key) {
                key = toKey(key);
                baseAssignValue(object, key, bind(object[key], object));
              });
              return object;
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
                var index = -1;
                while (++index < length) {
                  var pair = pairs[index];
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
            function matchesProperty(path, srcValue) {
              return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
            }
            var method = baseRest(function(path, args) {
              return function(object) {
                return baseInvoke(object, path, args);
              };
            });
            var methodOf = baseRest(function(object, args) {
              return function(path) {
                return baseInvoke(object, path, args);
              };
            });
            function mixin(object, source, options) {
              var props = keys(source), methodNames = baseFunctions(source, props);
              if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
                options = source;
                source = object;
                object = this;
                methodNames = baseFunctions(source, keys(source));
              }
              var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
              arrayEach(methodNames, function(methodName) {
                var func = source[methodName];
                object[methodName] = func;
                if (isFunc) {
                  object.prototype[methodName] = function() {
                    var chainAll = this.__chain__;
                    if (chain2 || chainAll) {
                      var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                      actions.push({ "func": func, "args": arguments, "thisArg": object });
                      result2.__chain__ = chainAll;
                      return result2;
                    }
                    return func.apply(object, arrayPush([this.value()], arguments));
                  };
                }
              });
              return object;
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
            function property(path) {
              return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
            }
            function propertyOf(object) {
              return function(path) {
                return object == null ? undefined2 : baseGet(object, path);
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
              var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
              iteratee2 = getIteratee(iteratee2);
              n -= MAX_ARRAY_LENGTH;
              var result2 = baseTimes(length, iteratee2);
              while (++index < n) {
                iteratee2(index);
              }
              return result2;
            }
            function toPath(value) {
              if (isArray(value)) {
                return arrayMap(value, toKey);
              }
              return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
            }
            function uniqueId(prefix) {
              var id = ++idCounter;
              return toString(prefix) + id;
            }
            var add = createMathOperation(function(augend, addend) {
              return augend + addend;
            }, 0);
            var ceil = createRound("ceil");
            var divide = createMathOperation(function(dividend, divisor) {
              return dividend / divisor;
            }, 1);
            var floor = createRound("floor");
            function max(array) {
              return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
            }
            function maxBy(array, iteratee2) {
              return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
            }
            function mean(array) {
              return baseMean(array, identity);
            }
            function meanBy(array, iteratee2) {
              return baseMean(array, getIteratee(iteratee2, 2));
            }
            function min(array) {
              return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
            }
            function minBy(array, iteratee2) {
              return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
            }
            var multiply = createMathOperation(function(multiplier, multiplicand) {
              return multiplier * multiplicand;
            }, 1);
            var round = createRound("round");
            var subtract = createMathOperation(function(minuend, subtrahend) {
              return minuend - subtrahend;
            }, 0);
            function sum(array) {
              return array && array.length ? baseSum(array, identity) : 0;
            }
            function sumBy(array, iteratee2) {
              return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
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
            lodash.concat = concat;
            lodash.cond = cond;
            lodash.conforms = conforms;
            lodash.constant = constant;
            lodash.countBy = countBy;
            lodash.create = create;
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
            lodash.memoize = memoize;
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
            lodash.slice = slice;
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
            lodash.transform = transform2;
            lodash.unary = unary;
            lodash.union = union;
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
            lodash.isEqual = isEqual;
            lodash.isEqualWith = isEqualWith;
            lodash.isError = isError;
            lodash.isFinite = isFinite2;
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
            lodash.isObject = isObject;
            lodash.isObjectLike = isObjectLike;
            lodash.isPlainObject = isPlainObject;
            lodash.isRegExp = isRegExp;
            lodash.isSafeInteger = isSafeInteger;
            lodash.isSet = isSet;
            lodash.isString = isString;
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
            lodash.random = random;
            lodash.reduce = reduce;
            lodash.reduceRight = reduceRight;
            lodash.repeat = repeat;
            lodash.replace = replace;
            lodash.result = result;
            lodash.round = round;
            lodash.runInContext = runInContext2;
            lodash.sample = sample;
            lodash.size = size;
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
            lodash.toNumber = toNumber;
            lodash.toSafeInteger = toSafeInteger;
            lodash.toString = toString;
            lodash.toUpper = toUpper;
            lodash.trim = trim;
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
            mixin(lodash, function() {
              var source = {};
              baseForOwn(lodash, function(func, methodName) {
                if (!hasOwnProperty.call(lodash.prototype, methodName)) {
                  source[methodName] = func;
                }
              });
              return source;
            }(), { "chain": false });
            lodash.VERSION = VERSION;
            arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
              lodash[methodName].placeholder = lodash;
            });
            arrayEach(["drop", "take"], function(methodName, index) {
              LazyWrapper.prototype[methodName] = function(n) {
                n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
                var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
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
            arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
              var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
              LazyWrapper.prototype[methodName] = function(iteratee2) {
                var result2 = this.clone();
                result2.__iteratees__.push({
                  "iteratee": getIteratee(iteratee2, 3),
                  "type": type
                });
                result2.__filtered__ = result2.__filtered__ || isFilter;
                return result2;
              };
            });
            arrayEach(["head", "last"], function(methodName, index) {
              var takeName = "take" + (index ? "Right" : "");
              LazyWrapper.prototype[methodName] = function() {
                return this[takeName](1).value()[0];
              };
            });
            arrayEach(["initial", "tail"], function(methodName, index) {
              var dropName = "drop" + (index ? "" : "Right");
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
            LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
              if (typeof path == "function") {
                return new LazyWrapper(this);
              }
              return this.map(function(value) {
                return baseInvoke(value, path, args);
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
          };
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
        }).call(exports2);
      }
    });
    var require_sign = __commonJS2({
      "node_modules/jsonwebtoken/sign.js"(exports2, module22) {
        var timespan = require_timespan();
        var PS_SUPPORTED = require_psSupported();
        var validateAsymmetricKey = require_validateAsymmetricKey();
        var jws = require_jws();
        var { includes, isBoolean, isInteger, isNumber, isPlainObject, isString, once } = require_lodash();
        var { KeyObject, createSecretKey, createPrivateKey } = require("crypto");
        var SUPPORTED_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
        if (PS_SUPPORTED) {
          SUPPORTED_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
        }
        var sign_options_schema = {
          expiresIn: { isValid: function(value) {
            return isInteger(value) || isString(value) && value;
          }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
          notBefore: { isValid: function(value) {
            return isInteger(value) || isString(value) && value;
          }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
          audience: { isValid: function(value) {
            return isString(value) || Array.isArray(value);
          }, message: '"audience" must be a string or array' },
          algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
          header: { isValid: isPlainObject, message: '"header" must be an object' },
          encoding: { isValid: isString, message: '"encoding" must be a string' },
          issuer: { isValid: isString, message: '"issuer" must be a string' },
          subject: { isValid: isString, message: '"subject" must be a string' },
          jwtid: { isValid: isString, message: '"jwtid" must be a string' },
          noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
          keyid: { isValid: isString, message: '"keyid" must be a string' },
          mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' },
          allowInsecureKeySizes: { isValid: isBoolean, message: '"allowInsecureKeySizes" must be a boolean' },
          allowInvalidAsymmetricKeyTypes: { isValid: isBoolean, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' }
        };
        var registered_claims_schema = {
          iat: { isValid: isNumber, message: '"iat" should be a number of seconds' },
          exp: { isValid: isNumber, message: '"exp" should be a number of seconds' },
          nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
        };
        function validate(schema, allowUnknown, object, parameterName) {
          if (!isPlainObject(object)) {
            throw new Error('Expected "' + parameterName + '" to be a plain object.');
          }
          Object.keys(object).forEach(function(key) {
            const validator = schema[key];
            if (!validator) {
              if (!allowUnknown) {
                throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
              }
              return;
            }
            if (!validator.isValid(object[key])) {
              throw new Error(validator.message);
            }
          });
        }
        function validateOptions(options) {
          return validate(sign_options_schema, false, options, "options");
        }
        function validatePayload(payload) {
          return validate(registered_claims_schema, true, payload, "payload");
        }
        var options_to_payload = {
          "audience": "aud",
          "issuer": "iss",
          "subject": "sub",
          "jwtid": "jti"
        };
        var options_for_objects = [
          "expiresIn",
          "notBefore",
          "noTimestamp",
          "audience",
          "issuer",
          "subject",
          "jwtid"
        ];
        module22.exports = function(payload, secretOrPrivateKey, options, callback) {
          if (typeof options === "function") {
            callback = options;
            options = {};
          } else {
            options = options || {};
          }
          const isObjectPayload = typeof payload === "object" && !Buffer.isBuffer(payload);
          const header = Object.assign({
            alg: options.algorithm || "HS256",
            typ: isObjectPayload ? "JWT" : void 0,
            kid: options.keyid
          }, options.header);
          function failure(err) {
            if (callback) {
              return callback(err);
            }
            throw err;
          }
          if (!secretOrPrivateKey && options.algorithm !== "none") {
            return failure(new Error("secretOrPrivateKey must have a value"));
          }
          if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
            try {
              secretOrPrivateKey = createPrivateKey(secretOrPrivateKey);
            } catch (_) {
              try {
                secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === "string" ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey);
              } catch (_2) {
                return failure(new Error("secretOrPrivateKey is not valid key material"));
              }
            }
          }
          if (header.alg.startsWith("HS") && secretOrPrivateKey.type !== "secret") {
            return failure(new Error(`secretOrPrivateKey must be a symmetric key when using ${header.alg}`));
          } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
            if (secretOrPrivateKey.type !== "private") {
              return failure(new Error(`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`));
            }
            if (!options.allowInsecureKeySizes && !header.alg.startsWith("ES") && secretOrPrivateKey.asymmetricKeyDetails !== void 0 && //KeyObject.asymmetricKeyDetails is supported in Node 15+
            secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
              return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
            }
          }
          if (typeof payload === "undefined") {
            return failure(new Error("payload is required"));
          } else if (isObjectPayload) {
            try {
              validatePayload(payload);
            } catch (error) {
              return failure(error);
            }
            if (!options.mutatePayload) {
              payload = Object.assign({}, payload);
            }
          } else {
            const invalid_options = options_for_objects.filter(function(opt) {
              return typeof options[opt] !== "undefined";
            });
            if (invalid_options.length > 0) {
              return failure(new Error("invalid " + invalid_options.join(",") + " option for " + typeof payload + " payload"));
            }
          }
          if (typeof payload.exp !== "undefined" && typeof options.expiresIn !== "undefined") {
            return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
          }
          if (typeof payload.nbf !== "undefined" && typeof options.notBefore !== "undefined") {
            return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
          }
          try {
            validateOptions(options);
          } catch (error) {
            return failure(error);
          }
          if (!options.allowInvalidAsymmetricKeyTypes) {
            try {
              validateAsymmetricKey(header.alg, secretOrPrivateKey);
            } catch (error) {
              return failure(error);
            }
          }
          const timestamp = payload.iat || Math.floor(Date.now() / 1e3);
          if (options.noTimestamp) {
            delete payload.iat;
          } else if (isObjectPayload) {
            payload.iat = timestamp;
          }
          if (typeof options.notBefore !== "undefined") {
            try {
              payload.nbf = timespan(options.notBefore, timestamp);
            } catch (err) {
              return failure(err);
            }
            if (typeof payload.nbf === "undefined") {
              return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
            }
          }
          if (typeof options.expiresIn !== "undefined" && typeof payload === "object") {
            try {
              payload.exp = timespan(options.expiresIn, timestamp);
            } catch (err) {
              return failure(err);
            }
            if (typeof payload.exp === "undefined") {
              return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
            }
          }
          Object.keys(options_to_payload).forEach(function(key) {
            const claim = options_to_payload[key];
            if (typeof options[key] !== "undefined") {
              if (typeof payload[claim] !== "undefined") {
                return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
              }
              payload[claim] = options[key];
            }
          });
          const encoding = options.encoding || "utf8";
          if (typeof callback === "function") {
            callback = callback && once(callback);
            jws.createSign({
              header,
              privateKey: secretOrPrivateKey,
              payload,
              encoding
            }).once("error", callback).once("done", function(signature) {
              if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
                return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
              }
              callback(null, signature);
            });
          } else {
            let signature = jws.sign({ header, payload, secret: secretOrPrivateKey, encoding });
            if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
              throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`);
            }
            return signature;
          }
        };
      }
    });
    var require_jsonwebtoken = __commonJS2({
      "node_modules/jsonwebtoken/index.js"(exports2, module22) {
        module22.exports = {
          decode: require_decode(),
          verify: require_verify(),
          sign: require_sign(),
          JsonWebTokenError: require_JsonWebTokenError(),
          NotBeforeError: require_NotBeforeError(),
          TokenExpiredError: require_TokenExpiredError()
        };
      }
    });
    var require_lib3 = __commonJS2({
      "node_modules/webidl-conversions/lib/index.js"(exports2, module22) {
        "use strict";
        var conversions = {};
        module22.exports = conversions;
        function sign(x) {
          return x < 0 ? -1 : 1;
        }
        function evenRound(x) {
          if (x % 1 === 0.5 && (x & 1) === 0) {
            return Math.floor(x);
          } else {
            return Math.round(x);
          }
        }
        function createNumberConversion(bitLength, typeOpts) {
          if (!typeOpts.unsigned) {
            --bitLength;
          }
          const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
          const upperBound = Math.pow(2, bitLength) - 1;
          const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
          const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
          return function(V, opts) {
            if (!opts)
              opts = {};
            let x = +V;
            if (opts.enforceRange) {
              if (!Number.isFinite(x)) {
                throw new TypeError("Argument is not a finite number");
              }
              x = sign(x) * Math.floor(Math.abs(x));
              if (x < lowerBound || x > upperBound) {
                throw new TypeError("Argument is not in byte range");
              }
              return x;
            }
            if (!isNaN(x) && opts.clamp) {
              x = evenRound(x);
              if (x < lowerBound)
                x = lowerBound;
              if (x > upperBound)
                x = upperBound;
              return x;
            }
            if (!Number.isFinite(x) || x === 0) {
              return 0;
            }
            x = sign(x) * Math.floor(Math.abs(x));
            x = x % moduloVal;
            if (!typeOpts.unsigned && x >= moduloBound) {
              return x - moduloVal;
            } else if (typeOpts.unsigned) {
              if (x < 0) {
                x += moduloVal;
              } else if (x === -0) {
                return 0;
              }
            }
            return x;
          };
        }
        conversions["void"] = function() {
          return void 0;
        };
        conversions["boolean"] = function(val) {
          return !!val;
        };
        conversions["byte"] = createNumberConversion(8, { unsigned: false });
        conversions["octet"] = createNumberConversion(8, { unsigned: true });
        conversions["short"] = createNumberConversion(16, { unsigned: false });
        conversions["unsigned short"] = createNumberConversion(16, { unsigned: true });
        conversions["long"] = createNumberConversion(32, { unsigned: false });
        conversions["unsigned long"] = createNumberConversion(32, { unsigned: true });
        conversions["long long"] = createNumberConversion(32, { unsigned: false, moduloBitLength: 64 });
        conversions["unsigned long long"] = createNumberConversion(32, { unsigned: true, moduloBitLength: 64 });
        conversions["double"] = function(V) {
          const x = +V;
          if (!Number.isFinite(x)) {
            throw new TypeError("Argument is not a finite floating-point value");
          }
          return x;
        };
        conversions["unrestricted double"] = function(V) {
          const x = +V;
          if (isNaN(x)) {
            throw new TypeError("Argument is NaN");
          }
          return x;
        };
        conversions["float"] = conversions["double"];
        conversions["unrestricted float"] = conversions["unrestricted double"];
        conversions["DOMString"] = function(V, opts) {
          if (!opts)
            opts = {};
          if (opts.treatNullAsEmptyString && V === null) {
            return "";
          }
          return String(V);
        };
        conversions["ByteString"] = function(V, opts) {
          const x = String(V);
          let c = void 0;
          for (let i = 0; (c = x.codePointAt(i)) !== void 0; ++i) {
            if (c > 255) {
              throw new TypeError("Argument is not a valid bytestring");
            }
          }
          return x;
        };
        conversions["USVString"] = function(V) {
          const S = String(V);
          const n = S.length;
          const U = [];
          for (let i = 0; i < n; ++i) {
            const c = S.charCodeAt(i);
            if (c < 55296 || c > 57343) {
              U.push(String.fromCodePoint(c));
            } else if (56320 <= c && c <= 57343) {
              U.push(String.fromCodePoint(65533));
            } else {
              if (i === n - 1) {
                U.push(String.fromCodePoint(65533));
              } else {
                const d = S.charCodeAt(i + 1);
                if (56320 <= d && d <= 57343) {
                  const a = c & 1023;
                  const b = d & 1023;
                  U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                  ++i;
                } else {
                  U.push(String.fromCodePoint(65533));
                }
              }
            }
          }
          return U.join("");
        };
        conversions["Date"] = function(V, opts) {
          if (!(V instanceof Date)) {
            throw new TypeError("Argument is not a Date object");
          }
          if (isNaN(V)) {
            return void 0;
          }
          return V;
        };
        conversions["RegExp"] = function(V, opts) {
          if (!(V instanceof RegExp)) {
            V = new RegExp(V);
          }
          return V;
        };
      }
    });
    var require_utils = __commonJS2({
      "node_modules/whatwg-url/lib/utils.js"(exports2, module22) {
        "use strict";
        module22.exports.mixin = function mixin(target, source) {
          const keys = Object.getOwnPropertyNames(source);
          for (let i = 0; i < keys.length; ++i) {
            Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
          }
        };
        module22.exports.wrapperSymbol = Symbol("wrapper");
        module22.exports.implSymbol = Symbol("impl");
        module22.exports.wrapperForImpl = function(impl) {
          return impl[module22.exports.wrapperSymbol];
        };
        module22.exports.implForWrapper = function(wrapper) {
          return wrapper[module22.exports.implSymbol];
        };
      }
    });
    var require_mappingTable = __commonJS2({
      "node_modules/tr46/lib/mappingTable.json"(exports2, module22) {
      }
    });
    var require_tr46 = __commonJS2({
      "node_modules/tr46/index.js"(exports2, module22) {
        "use strict";
        var punycode = require("punycode");
        var mappingTable = require_mappingTable();
        var PROCESSING_OPTIONS = {
          TRANSITIONAL: 0,
          NONTRANSITIONAL: 1
        };
        function normalize(str) {
          return str.split("\0").map(function(s) {
            return s.normalize("NFC");
          }).join("\0");
        }
        function findStatus(val) {
          var start = 0;
          var end = mappingTable.length - 1;
          while (start <= end) {
            var mid = Math.floor((start + end) / 2);
            var target = mappingTable[mid];
            if (target[0][0] <= val && target[0][1] >= val) {
              return target;
            } else if (target[0][0] > val) {
              end = mid - 1;
            } else {
              start = mid + 1;
            }
          }
          return null;
        }
        var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
        function countSymbols(string) {
          return string.replace(regexAstralSymbols, "_").length;
        }
        function mapChars(domain_name, useSTD3, processing_option) {
          var hasError = false;
          var processed = "";
          var len = countSymbols(domain_name);
          for (var i = 0; i < len; ++i) {
            var codePoint = domain_name.codePointAt(i);
            var status = findStatus(codePoint);
            switch (status[1]) {
              case "disallowed":
                hasError = true;
                processed += String.fromCodePoint(codePoint);
                break;
              case "ignored":
                break;
              case "mapped":
                processed += String.fromCodePoint.apply(String, status[2]);
                break;
              case "deviation":
                if (processing_option === PROCESSING_OPTIONS.TRANSITIONAL) {
                  processed += String.fromCodePoint.apply(String, status[2]);
                } else {
                  processed += String.fromCodePoint(codePoint);
                }
                break;
              case "valid":
                processed += String.fromCodePoint(codePoint);
                break;
              case "disallowed_STD3_mapped":
                if (useSTD3) {
                  hasError = true;
                  processed += String.fromCodePoint(codePoint);
                } else {
                  processed += String.fromCodePoint.apply(String, status[2]);
                }
                break;
              case "disallowed_STD3_valid":
                if (useSTD3) {
                  hasError = true;
                }
                processed += String.fromCodePoint(codePoint);
                break;
            }
          }
          return {
            string: processed,
            error: hasError
          };
        }
        var combiningMarksRegex = /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/;
        function validateLabel(label, processing_option) {
          if (label.substr(0, 4) === "xn--") {
            label = punycode.toUnicode(label);
            processing_option = PROCESSING_OPTIONS.NONTRANSITIONAL;
          }
          var error = false;
          if (normalize(label) !== label || label[3] === "-" && label[4] === "-" || label[0] === "-" || label[label.length - 1] === "-" || label.indexOf(".") !== -1 || label.search(combiningMarksRegex) === 0) {
            error = true;
          }
          var len = countSymbols(label);
          for (var i = 0; i < len; ++i) {
            var status = findStatus(label.codePointAt(i));
            if (processing === PROCESSING_OPTIONS.TRANSITIONAL && status[1] !== "valid" || processing === PROCESSING_OPTIONS.NONTRANSITIONAL && status[1] !== "valid" && status[1] !== "deviation") {
              error = true;
              break;
            }
          }
          return {
            label,
            error
          };
        }
        function processing(domain_name, useSTD3, processing_option) {
          var result = mapChars(domain_name, useSTD3, processing_option);
          result.string = normalize(result.string);
          var labels = result.string.split(".");
          for (var i = 0; i < labels.length; ++i) {
            try {
              var validation = validateLabel(labels[i]);
              labels[i] = validation.label;
              result.error = result.error || validation.error;
            } catch (e) {
              result.error = true;
            }
          }
          return {
            string: labels.join("."),
            error: result.error
          };
        }
        module22.exports.toASCII = function(domain_name, useSTD3, processing_option, verifyDnsLength) {
          var result = processing(domain_name, useSTD3, processing_option);
          var labels = result.string.split(".");
          labels = labels.map(function(l) {
            try {
              return punycode.toASCII(l);
            } catch (e) {
              result.error = true;
              return l;
            }
          });
          if (verifyDnsLength) {
            var total = labels.slice(0, labels.length - 1).join(".").length;
            if (total.length > 253 || total.length === 0) {
              result.error = true;
            }
            for (var i = 0; i < labels.length; ++i) {
              if (labels.length > 63 || labels.length === 0) {
                result.error = true;
                break;
              }
            }
          }
          if (result.error)
            return null;
          return labels.join(".");
        };
        module22.exports.toUnicode = function(domain_name, useSTD3) {
          var result = processing(domain_name, useSTD3, PROCESSING_OPTIONS.NONTRANSITIONAL);
          return {
            domain: result.string,
            error: result.error
          };
        };
        module22.exports.PROCESSING_OPTIONS = PROCESSING_OPTIONS;
      }
    });
    var require_url_state_machine = __commonJS2({
      "node_modules/whatwg-url/lib/url-state-machine.js"(exports2, module22) {
        "use strict";
        var punycode = require("punycode");
        var tr46 = require_tr46();
        var specialSchemes = {
          ftp: 21,
          file: null,
          gopher: 70,
          http: 80,
          https: 443,
          ws: 80,
          wss: 443
        };
        var failure = Symbol("failure");
        function countSymbols(str) {
          return punycode.ucs2.decode(str).length;
        }
        function at(input, idx) {
          const c = input[idx];
          return isNaN(c) ? void 0 : String.fromCodePoint(c);
        }
        function isASCIIDigit(c) {
          return c >= 48 && c <= 57;
        }
        function isASCIIAlpha(c) {
          return c >= 65 && c <= 90 || c >= 97 && c <= 122;
        }
        function isASCIIAlphanumeric(c) {
          return isASCIIAlpha(c) || isASCIIDigit(c);
        }
        function isASCIIHex(c) {
          return isASCIIDigit(c) || c >= 65 && c <= 70 || c >= 97 && c <= 102;
        }
        function isSingleDot(buffer) {
          return buffer === "." || buffer.toLowerCase() === "%2e";
        }
        function isDoubleDot(buffer) {
          buffer = buffer.toLowerCase();
          return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
        }
        function isWindowsDriveLetterCodePoints(cp1, cp2) {
          return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
        }
        function isWindowsDriveLetterString(string) {
          return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
        }
        function isNormalizedWindowsDriveLetterString(string) {
          return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
        }
        function containsForbiddenHostCodePoint(string) {
          return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
        }
        function containsForbiddenHostCodePointExcludingPercent(string) {
          return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
        }
        function isSpecialScheme(scheme) {
          return specialSchemes[scheme] !== void 0;
        }
        function isSpecial(url) {
          return isSpecialScheme(url.scheme);
        }
        function defaultPort(scheme) {
          return specialSchemes[scheme];
        }
        function percentEncode(c) {
          let hex = c.toString(16).toUpperCase();
          if (hex.length === 1) {
            hex = "0" + hex;
          }
          return "%" + hex;
        }
        function utf8PercentEncode(c) {
          const buf = new Buffer(c);
          let str = "";
          for (let i = 0; i < buf.length; ++i) {
            str += percentEncode(buf[i]);
          }
          return str;
        }
        function utf8PercentDecode(str) {
          const input = new Buffer(str);
          const output = [];
          for (let i = 0; i < input.length; ++i) {
            if (input[i] !== 37) {
              output.push(input[i]);
            } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
              output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
              i += 2;
            } else {
              output.push(input[i]);
            }
          }
          return new Buffer(output).toString();
        }
        function isC0ControlPercentEncode(c) {
          return c <= 31 || c > 126;
        }
        var extraPathPercentEncodeSet = /* @__PURE__ */ new Set([32, 34, 35, 60, 62, 63, 96, 123, 125]);
        function isPathPercentEncode(c) {
          return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
        }
        var extraUserinfoPercentEncodeSet = /* @__PURE__ */ new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
        function isUserinfoPercentEncode(c) {
          return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
        }
        function percentEncodeChar(c, encodeSetPredicate) {
          const cStr = String.fromCodePoint(c);
          if (encodeSetPredicate(c)) {
            return utf8PercentEncode(cStr);
          }
          return cStr;
        }
        function parseIPv4Number(input) {
          let R = 10;
          if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
            input = input.substring(2);
            R = 16;
          } else if (input.length >= 2 && input.charAt(0) === "0") {
            input = input.substring(1);
            R = 8;
          }
          if (input === "") {
            return 0;
          }
          const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
          if (regex.test(input)) {
            return failure;
          }
          return parseInt(input, R);
        }
        function parseIPv4(input) {
          const parts = input.split(".");
          if (parts[parts.length - 1] === "") {
            if (parts.length > 1) {
              parts.pop();
            }
          }
          if (parts.length > 4) {
            return input;
          }
          const numbers = [];
          for (const part of parts) {
            if (part === "") {
              return input;
            }
            const n = parseIPv4Number(part);
            if (n === failure) {
              return input;
            }
            numbers.push(n);
          }
          for (let i = 0; i < numbers.length - 1; ++i) {
            if (numbers[i] > 255) {
              return failure;
            }
          }
          if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
            return failure;
          }
          let ipv4 = numbers.pop();
          let counter = 0;
          for (const n of numbers) {
            ipv4 += n * Math.pow(256, 3 - counter);
            ++counter;
          }
          return ipv4;
        }
        function serializeIPv4(address) {
          let output = "";
          let n = address;
          for (let i = 1; i <= 4; ++i) {
            output = String(n % 256) + output;
            if (i !== 4) {
              output = "." + output;
            }
            n = Math.floor(n / 256);
          }
          return output;
        }
        function parseIPv6(input) {
          const address = [0, 0, 0, 0, 0, 0, 0, 0];
          let pieceIndex = 0;
          let compress = null;
          let pointer = 0;
          input = punycode.ucs2.decode(input);
          if (input[pointer] === 58) {
            if (input[pointer + 1] !== 58) {
              return failure;
            }
            pointer += 2;
            ++pieceIndex;
            compress = pieceIndex;
          }
          while (pointer < input.length) {
            if (pieceIndex === 8) {
              return failure;
            }
            if (input[pointer] === 58) {
              if (compress !== null) {
                return failure;
              }
              ++pointer;
              ++pieceIndex;
              compress = pieceIndex;
              continue;
            }
            let value = 0;
            let length = 0;
            while (length < 4 && isASCIIHex(input[pointer])) {
              value = value * 16 + parseInt(at(input, pointer), 16);
              ++pointer;
              ++length;
            }
            if (input[pointer] === 46) {
              if (length === 0) {
                return failure;
              }
              pointer -= length;
              if (pieceIndex > 6) {
                return failure;
              }
              let numbersSeen = 0;
              while (input[pointer] !== void 0) {
                let ipv4Piece = null;
                if (numbersSeen > 0) {
                  if (input[pointer] === 46 && numbersSeen < 4) {
                    ++pointer;
                  } else {
                    return failure;
                  }
                }
                if (!isASCIIDigit(input[pointer])) {
                  return failure;
                }
                while (isASCIIDigit(input[pointer])) {
                  const number = parseInt(at(input, pointer));
                  if (ipv4Piece === null) {
                    ipv4Piece = number;
                  } else if (ipv4Piece === 0) {
                    return failure;
                  } else {
                    ipv4Piece = ipv4Piece * 10 + number;
                  }
                  if (ipv4Piece > 255) {
                    return failure;
                  }
                  ++pointer;
                }
                address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
                ++numbersSeen;
                if (numbersSeen === 2 || numbersSeen === 4) {
                  ++pieceIndex;
                }
              }
              if (numbersSeen !== 4) {
                return failure;
              }
              break;
            } else if (input[pointer] === 58) {
              ++pointer;
              if (input[pointer] === void 0) {
                return failure;
              }
            } else if (input[pointer] !== void 0) {
              return failure;
            }
            address[pieceIndex] = value;
            ++pieceIndex;
          }
          if (compress !== null) {
            let swaps = pieceIndex - compress;
            pieceIndex = 7;
            while (pieceIndex !== 0 && swaps > 0) {
              const temp = address[compress + swaps - 1];
              address[compress + swaps - 1] = address[pieceIndex];
              address[pieceIndex] = temp;
              --pieceIndex;
              --swaps;
            }
          } else if (compress === null && pieceIndex !== 8) {
            return failure;
          }
          return address;
        }
        function serializeIPv6(address) {
          let output = "";
          const seqResult = findLongestZeroSequence(address);
          const compress = seqResult.idx;
          let ignore0 = false;
          for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
            if (ignore0 && address[pieceIndex] === 0) {
              continue;
            } else if (ignore0) {
              ignore0 = false;
            }
            if (compress === pieceIndex) {
              const separator = pieceIndex === 0 ? "::" : ":";
              output += separator;
              ignore0 = true;
              continue;
            }
            output += address[pieceIndex].toString(16);
            if (pieceIndex !== 7) {
              output += ":";
            }
          }
          return output;
        }
        function parseHost(input, isSpecialArg) {
          if (input[0] === "[") {
            if (input[input.length - 1] !== "]") {
              return failure;
            }
            return parseIPv6(input.substring(1, input.length - 1));
          }
          if (!isSpecialArg) {
            return parseOpaqueHost(input);
          }
          const domain = utf8PercentDecode(input);
          const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
          if (asciiDomain === null) {
            return failure;
          }
          if (containsForbiddenHostCodePoint(asciiDomain)) {
            return failure;
          }
          const ipv4Host = parseIPv4(asciiDomain);
          if (typeof ipv4Host === "number" || ipv4Host === failure) {
            return ipv4Host;
          }
          return asciiDomain;
        }
        function parseOpaqueHost(input) {
          if (containsForbiddenHostCodePointExcludingPercent(input)) {
            return failure;
          }
          let output = "";
          const decoded = punycode.ucs2.decode(input);
          for (let i = 0; i < decoded.length; ++i) {
            output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
          }
          return output;
        }
        function findLongestZeroSequence(arr) {
          let maxIdx = null;
          let maxLen = 1;
          let currStart = null;
          let currLen = 0;
          for (let i = 0; i < arr.length; ++i) {
            if (arr[i] !== 0) {
              if (currLen > maxLen) {
                maxIdx = currStart;
                maxLen = currLen;
              }
              currStart = null;
              currLen = 0;
            } else {
              if (currStart === null) {
                currStart = i;
              }
              ++currLen;
            }
          }
          if (currLen > maxLen) {
            maxIdx = currStart;
            maxLen = currLen;
          }
          return {
            idx: maxIdx,
            len: maxLen
          };
        }
        function serializeHost(host) {
          if (typeof host === "number") {
            return serializeIPv4(host);
          }
          if (host instanceof Array) {
            return "[" + serializeIPv6(host) + "]";
          }
          return host;
        }
        function trimControlChars(url) {
          return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
        }
        function trimTabAndNewline(url) {
          return url.replace(/\u0009|\u000A|\u000D/g, "");
        }
        function shortenPath(url) {
          const path = url.path;
          if (path.length === 0) {
            return;
          }
          if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
            return;
          }
          path.pop();
        }
        function includesCredentials(url) {
          return url.username !== "" || url.password !== "";
        }
        function cannotHaveAUsernamePasswordPort(url) {
          return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
        }
        function isNormalizedWindowsDriveLetter(string) {
          return /^[A-Za-z]:$/.test(string);
        }
        function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
          this.pointer = 0;
          this.input = input;
          this.base = base || null;
          this.encodingOverride = encodingOverride || "utf-8";
          this.stateOverride = stateOverride;
          this.url = url;
          this.failure = false;
          this.parseError = false;
          if (!this.url) {
            this.url = {
              scheme: "",
              username: "",
              password: "",
              host: null,
              port: null,
              path: [],
              query: null,
              fragment: null,
              cannotBeABaseURL: false
            };
            const res2 = trimControlChars(this.input);
            if (res2 !== this.input) {
              this.parseError = true;
            }
            this.input = res2;
          }
          const res = trimTabAndNewline(this.input);
          if (res !== this.input) {
            this.parseError = true;
          }
          this.input = res;
          this.state = stateOverride || "scheme start";
          this.buffer = "";
          this.atFlag = false;
          this.arrFlag = false;
          this.passwordTokenSeenFlag = false;
          this.input = punycode.ucs2.decode(this.input);
          for (; this.pointer <= this.input.length; ++this.pointer) {
            const c = this.input[this.pointer];
            const cStr = isNaN(c) ? void 0 : String.fromCodePoint(c);
            const ret = this["parse " + this.state](c, cStr);
            if (!ret) {
              break;
            } else if (ret === failure) {
              this.failure = true;
              break;
            }
          }
        }
        URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
          if (isASCIIAlpha(c)) {
            this.buffer += cStr.toLowerCase();
            this.state = "scheme";
          } else if (!this.stateOverride) {
            this.state = "no scheme";
            --this.pointer;
          } else {
            this.parseError = true;
            return failure;
          }
          return true;
        };
        URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
          if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
            this.buffer += cStr.toLowerCase();
          } else if (c === 58) {
            if (this.stateOverride) {
              if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
                return false;
              }
              if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
                return false;
              }
              if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
                return false;
              }
              if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) {
                return false;
              }
            }
            this.url.scheme = this.buffer;
            this.buffer = "";
            if (this.stateOverride) {
              return false;
            }
            if (this.url.scheme === "file") {
              if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
                this.parseError = true;
              }
              this.state = "file";
            } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
              this.state = "special relative or authority";
            } else if (isSpecial(this.url)) {
              this.state = "special authority slashes";
            } else if (this.input[this.pointer + 1] === 47) {
              this.state = "path or authority";
              ++this.pointer;
            } else {
              this.url.cannotBeABaseURL = true;
              this.url.path.push("");
              this.state = "cannot-be-a-base-URL path";
            }
          } else if (!this.stateOverride) {
            this.buffer = "";
            this.state = "no scheme";
            this.pointer = -1;
          } else {
            this.parseError = true;
            return failure;
          }
          return true;
        };
        URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
          if (this.base === null || this.base.cannotBeABaseURL && c !== 35) {
            return failure;
          } else if (this.base.cannotBeABaseURL && c === 35) {
            this.url.scheme = this.base.scheme;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
            this.url.fragment = "";
            this.url.cannotBeABaseURL = true;
            this.state = "fragment";
          } else if (this.base.scheme === "file") {
            this.state = "file";
            --this.pointer;
          } else {
            this.state = "relative";
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
          if (c === 47 && this.input[this.pointer + 1] === 47) {
            this.state = "special authority ignore slashes";
            ++this.pointer;
          } else {
            this.parseError = true;
            this.state = "relative";
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
          if (c === 47) {
            this.state = "authority";
          } else {
            this.state = "path";
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
          this.url.scheme = this.base.scheme;
          if (isNaN(c)) {
            this.url.username = this.base.username;
            this.url.password = this.base.password;
            this.url.host = this.base.host;
            this.url.port = this.base.port;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
          } else if (c === 47) {
            this.state = "relative slash";
          } else if (c === 63) {
            this.url.username = this.base.username;
            this.url.password = this.base.password;
            this.url.host = this.base.host;
            this.url.port = this.base.port;
            this.url.path = this.base.path.slice();
            this.url.query = "";
            this.state = "query";
          } else if (c === 35) {
            this.url.username = this.base.username;
            this.url.password = this.base.password;
            this.url.host = this.base.host;
            this.url.port = this.base.port;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
            this.url.fragment = "";
            this.state = "fragment";
          } else if (isSpecial(this.url) && c === 92) {
            this.parseError = true;
            this.state = "relative slash";
          } else {
            this.url.username = this.base.username;
            this.url.password = this.base.password;
            this.url.host = this.base.host;
            this.url.port = this.base.port;
            this.url.path = this.base.path.slice(0, this.base.path.length - 1);
            this.state = "path";
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
          if (isSpecial(this.url) && (c === 47 || c === 92)) {
            if (c === 92) {
              this.parseError = true;
            }
            this.state = "special authority ignore slashes";
          } else if (c === 47) {
            this.state = "authority";
          } else {
            this.url.username = this.base.username;
            this.url.password = this.base.password;
            this.url.host = this.base.host;
            this.url.port = this.base.port;
            this.state = "path";
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
          if (c === 47 && this.input[this.pointer + 1] === 47) {
            this.state = "special authority ignore slashes";
            ++this.pointer;
          } else {
            this.parseError = true;
            this.state = "special authority ignore slashes";
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
          if (c !== 47 && c !== 92) {
            this.state = "authority";
            --this.pointer;
          } else {
            this.parseError = true;
          }
          return true;
        };
        URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
          if (c === 64) {
            this.parseError = true;
            if (this.atFlag) {
              this.buffer = "%40" + this.buffer;
            }
            this.atFlag = true;
            const len = countSymbols(this.buffer);
            for (let pointer = 0; pointer < len; ++pointer) {
              const codePoint = this.buffer.codePointAt(pointer);
              if (codePoint === 58 && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = true;
                continue;
              }
              const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
              if (this.passwordTokenSeenFlag) {
                this.url.password += encodedCodePoints;
              } else {
                this.url.username += encodedCodePoints;
              }
            }
            this.buffer = "";
          } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
            if (this.atFlag && this.buffer === "") {
              this.parseError = true;
              return failure;
            }
            this.pointer -= countSymbols(this.buffer) + 1;
            this.buffer = "";
            this.state = "host";
          } else {
            this.buffer += cStr;
          }
          return true;
        };
        URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
          if (this.stateOverride && this.url.scheme === "file") {
            --this.pointer;
            this.state = "file host";
          } else if (c === 58 && !this.arrFlag) {
            if (this.buffer === "") {
              this.parseError = true;
              return failure;
            }
            const host = parseHost(this.buffer, isSpecial(this.url));
            if (host === failure) {
              return failure;
            }
            this.url.host = host;
            this.buffer = "";
            this.state = "port";
            if (this.stateOverride === "hostname") {
              return false;
            }
          } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
            --this.pointer;
            if (isSpecial(this.url) && this.buffer === "") {
              this.parseError = true;
              return failure;
            } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
              this.parseError = true;
              return false;
            }
            const host = parseHost(this.buffer, isSpecial(this.url));
            if (host === failure) {
              return failure;
            }
            this.url.host = host;
            this.buffer = "";
            this.state = "path start";
            if (this.stateOverride) {
              return false;
            }
          } else {
            if (c === 91) {
              this.arrFlag = true;
            } else if (c === 93) {
              this.arrFlag = false;
            }
            this.buffer += cStr;
          }
          return true;
        };
        URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
          if (isASCIIDigit(c)) {
            this.buffer += cStr;
          } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92 || this.stateOverride) {
            if (this.buffer !== "") {
              const port = parseInt(this.buffer);
              if (port > Math.pow(2, 16) - 1) {
                this.parseError = true;
                return failure;
              }
              this.url.port = port === defaultPort(this.url.scheme) ? null : port;
              this.buffer = "";
            }
            if (this.stateOverride) {
              return false;
            }
            this.state = "path start";
            --this.pointer;
          } else {
            this.parseError = true;
            return failure;
          }
          return true;
        };
        var fileOtherwiseCodePoints = /* @__PURE__ */ new Set([47, 92, 63, 35]);
        URLStateMachine.prototype["parse file"] = function parseFile(c) {
          this.url.scheme = "file";
          if (c === 47 || c === 92) {
            if (c === 92) {
              this.parseError = true;
            }
            this.state = "file slash";
          } else if (this.base !== null && this.base.scheme === "file") {
            if (isNaN(c)) {
              this.url.host = this.base.host;
              this.url.path = this.base.path.slice();
              this.url.query = this.base.query;
            } else if (c === 63) {
              this.url.host = this.base.host;
              this.url.path = this.base.path.slice();
              this.url.query = "";
              this.state = "query";
            } else if (c === 35) {
              this.url.host = this.base.host;
              this.url.path = this.base.path.slice();
              this.url.query = this.base.query;
              this.url.fragment = "";
              this.state = "fragment";
            } else {
              if (this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
              !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) || this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
              !fileOtherwiseCodePoints.has(this.input[this.pointer + 2])) {
                this.url.host = this.base.host;
                this.url.path = this.base.path.slice();
                shortenPath(this.url);
              } else {
                this.parseError = true;
              }
              this.state = "path";
              --this.pointer;
            }
          } else {
            this.state = "path";
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
          if (c === 47 || c === 92) {
            if (c === 92) {
              this.parseError = true;
            }
            this.state = "file host";
          } else {
            if (this.base !== null && this.base.scheme === "file") {
              if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
                this.url.path.push(this.base.path[0]);
              } else {
                this.url.host = this.base.host;
              }
            }
            this.state = "path";
            --this.pointer;
          }
          return true;
        };
        URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
          if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
            --this.pointer;
            if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
              this.parseError = true;
              this.state = "path";
            } else if (this.buffer === "") {
              this.url.host = "";
              if (this.stateOverride) {
                return false;
              }
              this.state = "path start";
            } else {
              let host = parseHost(this.buffer, isSpecial(this.url));
              if (host === failure) {
                return failure;
              }
              if (host === "localhost") {
                host = "";
              }
              this.url.host = host;
              if (this.stateOverride) {
                return false;
              }
              this.buffer = "";
              this.state = "path start";
            }
          } else {
            this.buffer += cStr;
          }
          return true;
        };
        URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
          if (isSpecial(this.url)) {
            if (c === 92) {
              this.parseError = true;
            }
            this.state = "path";
            if (c !== 47 && c !== 92) {
              --this.pointer;
            }
          } else if (!this.stateOverride && c === 63) {
            this.url.query = "";
            this.state = "query";
          } else if (!this.stateOverride && c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
          } else if (c !== void 0) {
            this.state = "path";
            if (c !== 47) {
              --this.pointer;
            }
          }
          return true;
        };
        URLStateMachine.prototype["parse path"] = function parsePath(c) {
          if (isNaN(c) || c === 47 || isSpecial(this.url) && c === 92 || !this.stateOverride && (c === 63 || c === 35)) {
            if (isSpecial(this.url) && c === 92) {
              this.parseError = true;
            }
            if (isDoubleDot(this.buffer)) {
              shortenPath(this.url);
              if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
                this.url.path.push("");
              }
            } else if (isSingleDot(this.buffer) && c !== 47 && !(isSpecial(this.url) && c === 92)) {
              this.url.path.push("");
            } else if (!isSingleDot(this.buffer)) {
              if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
                if (this.url.host !== "" && this.url.host !== null) {
                  this.parseError = true;
                  this.url.host = "";
                }
                this.buffer = this.buffer[0] + ":";
              }
              this.url.path.push(this.buffer);
            }
            this.buffer = "";
            if (this.url.scheme === "file" && (c === void 0 || c === 63 || c === 35)) {
              while (this.url.path.length > 1 && this.url.path[0] === "") {
                this.parseError = true;
                this.url.path.shift();
              }
            }
            if (c === 63) {
              this.url.query = "";
              this.state = "query";
            }
            if (c === 35) {
              this.url.fragment = "";
              this.state = "fragment";
            }
          } else {
            if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
              this.parseError = true;
            }
            this.buffer += percentEncodeChar(c, isPathPercentEncode);
          }
          return true;
        };
        URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
          if (c === 63) {
            this.url.query = "";
            this.state = "query";
          } else if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
          } else {
            if (!isNaN(c) && c !== 37) {
              this.parseError = true;
            }
            if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
              this.parseError = true;
            }
            if (!isNaN(c)) {
              this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
            }
          }
          return true;
        };
        URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
          if (isNaN(c) || !this.stateOverride && c === 35) {
            if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
              this.encodingOverride = "utf-8";
            }
            const buffer = new Buffer(this.buffer);
            for (let i = 0; i < buffer.length; ++i) {
              if (buffer[i] < 33 || buffer[i] > 126 || buffer[i] === 34 || buffer[i] === 35 || buffer[i] === 60 || buffer[i] === 62) {
                this.url.query += percentEncode(buffer[i]);
              } else {
                this.url.query += String.fromCodePoint(buffer[i]);
              }
            }
            this.buffer = "";
            if (c === 35) {
              this.url.fragment = "";
              this.state = "fragment";
            }
          } else {
            if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
              this.parseError = true;
            }
            this.buffer += cStr;
          }
          return true;
        };
        URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
          if (isNaN(c)) {
          } else if (c === 0) {
            this.parseError = true;
          } else {
            if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
              this.parseError = true;
            }
            this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
          }
          return true;
        };
        function serializeURL(url, excludeFragment) {
          let output = url.scheme + ":";
          if (url.host !== null) {
            output += "//";
            if (url.username !== "" || url.password !== "") {
              output += url.username;
              if (url.password !== "") {
                output += ":" + url.password;
              }
              output += "@";
            }
            output += serializeHost(url.host);
            if (url.port !== null) {
              output += ":" + url.port;
            }
          } else if (url.host === null && url.scheme === "file") {
            output += "//";
          }
          if (url.cannotBeABaseURL) {
            output += url.path[0];
          } else {
            for (const string of url.path) {
              output += "/" + string;
            }
          }
          if (url.query !== null) {
            output += "?" + url.query;
          }
          if (!excludeFragment && url.fragment !== null) {
            output += "#" + url.fragment;
          }
          return output;
        }
        function serializeOrigin(tuple) {
          let result = tuple.scheme + "://";
          result += serializeHost(tuple.host);
          if (tuple.port !== null) {
            result += ":" + tuple.port;
          }
          return result;
        }
        module22.exports.serializeURL = serializeURL;
        module22.exports.serializeURLOrigin = function(url) {
          switch (url.scheme) {
            case "blob":
              try {
                return module22.exports.serializeURLOrigin(module22.exports.parseURL(url.path[0]));
              } catch (e) {
                return "null";
              }
            case "ftp":
            case "gopher":
            case "http":
            case "https":
            case "ws":
            case "wss":
              return serializeOrigin({
                scheme: url.scheme,
                host: url.host,
                port: url.port
              });
            case "file":
              return "file://";
            default:
              return "null";
          }
        };
        module22.exports.basicURLParse = function(input, options) {
          if (options === void 0) {
            options = {};
          }
          const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
          if (usm.failure) {
            return "failure";
          }
          return usm.url;
        };
        module22.exports.setTheUsername = function(url, username) {
          url.username = "";
          const decoded = punycode.ucs2.decode(username);
          for (let i = 0; i < decoded.length; ++i) {
            url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
          }
        };
        module22.exports.setThePassword = function(url, password) {
          url.password = "";
          const decoded = punycode.ucs2.decode(password);
          for (let i = 0; i < decoded.length; ++i) {
            url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
          }
        };
        module22.exports.serializeHost = serializeHost;
        module22.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
        module22.exports.serializeInteger = function(integer) {
          return String(integer);
        };
        module22.exports.parseURL = function(input, options) {
          if (options === void 0) {
            options = {};
          }
          return module22.exports.basicURLParse(input, { baseURL: options.baseURL, encodingOverride: options.encodingOverride });
        };
      }
    });
    var require_URL_impl = __commonJS2({
      "node_modules/whatwg-url/lib/URL-impl.js"(exports2) {
        "use strict";
        var usm = require_url_state_machine();
        exports2.implementation = class URLImpl {
          constructor(constructorArgs) {
            const url = constructorArgs[0];
            const base = constructorArgs[1];
            let parsedBase = null;
            if (base !== void 0) {
              parsedBase = usm.basicURLParse(base);
              if (parsedBase === "failure") {
                throw new TypeError("Invalid base URL");
              }
            }
            const parsedURL = usm.basicURLParse(url, { baseURL: parsedBase });
            if (parsedURL === "failure") {
              throw new TypeError("Invalid URL");
            }
            this._url = parsedURL;
          }
          get href() {
            return usm.serializeURL(this._url);
          }
          set href(v) {
            const parsedURL = usm.basicURLParse(v);
            if (parsedURL === "failure") {
              throw new TypeError("Invalid URL");
            }
            this._url = parsedURL;
          }
          get origin() {
            return usm.serializeURLOrigin(this._url);
          }
          get protocol() {
            return this._url.scheme + ":";
          }
          set protocol(v) {
            usm.basicURLParse(v + ":", { url: this._url, stateOverride: "scheme start" });
          }
          get username() {
            return this._url.username;
          }
          set username(v) {
            if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
              return;
            }
            usm.setTheUsername(this._url, v);
          }
          get password() {
            return this._url.password;
          }
          set password(v) {
            if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
              return;
            }
            usm.setThePassword(this._url, v);
          }
          get host() {
            const url = this._url;
            if (url.host === null) {
              return "";
            }
            if (url.port === null) {
              return usm.serializeHost(url.host);
            }
            return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
          }
          set host(v) {
            if (this._url.cannotBeABaseURL) {
              return;
            }
            usm.basicURLParse(v, { url: this._url, stateOverride: "host" });
          }
          get hostname() {
            if (this._url.host === null) {
              return "";
            }
            return usm.serializeHost(this._url.host);
          }
          set hostname(v) {
            if (this._url.cannotBeABaseURL) {
              return;
            }
            usm.basicURLParse(v, { url: this._url, stateOverride: "hostname" });
          }
          get port() {
            if (this._url.port === null) {
              return "";
            }
            return usm.serializeInteger(this._url.port);
          }
          set port(v) {
            if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
              return;
            }
            if (v === "") {
              this._url.port = null;
            } else {
              usm.basicURLParse(v, { url: this._url, stateOverride: "port" });
            }
          }
          get pathname() {
            if (this._url.cannotBeABaseURL) {
              return this._url.path[0];
            }
            if (this._url.path.length === 0) {
              return "";
            }
            return "/" + this._url.path.join("/");
          }
          set pathname(v) {
            if (this._url.cannotBeABaseURL) {
              return;
            }
            this._url.path = [];
            usm.basicURLParse(v, { url: this._url, stateOverride: "path start" });
          }
          get search() {
            if (this._url.query === null || this._url.query === "") {
              return "";
            }
            return "?" + this._url.query;
          }
          set search(v) {
            const url = this._url;
            if (v === "") {
              url.query = null;
              return;
            }
            const input = v[0] === "?" ? v.substring(1) : v;
            url.query = "";
            usm.basicURLParse(input, { url, stateOverride: "query" });
          }
          get hash() {
            if (this._url.fragment === null || this._url.fragment === "") {
              return "";
            }
            return "#" + this._url.fragment;
          }
          set hash(v) {
            if (v === "") {
              this._url.fragment = null;
              return;
            }
            const input = v[0] === "#" ? v.substring(1) : v;
            this._url.fragment = "";
            usm.basicURLParse(input, { url: this._url, stateOverride: "fragment" });
          }
          toJSON() {
            return this.href;
          }
        };
      }
    });
    var require_URL = __commonJS2({
      "node_modules/whatwg-url/lib/URL.js"(exports2, module22) {
        "use strict";
        var conversions = require_lib3();
        var utils = require_utils();
        var Impl = require_URL_impl();
        var impl = utils.implSymbol;
        function URL2(url) {
          if (!this || this[impl] || !(this instanceof URL2)) {
            throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
          }
          if (arguments.length < 1) {
            throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
          }
          const args = [];
          for (let i = 0; i < arguments.length && i < 2; ++i) {
            args[i] = arguments[i];
          }
          args[0] = conversions["USVString"](args[0]);
          if (args[1] !== void 0) {
            args[1] = conversions["USVString"](args[1]);
          }
          module22.exports.setup(this, args);
        }
        URL2.prototype.toJSON = function toJSON() {
          if (!this || !module22.exports.is(this)) {
            throw new TypeError("Illegal invocation");
          }
          const args = [];
          for (let i = 0; i < arguments.length && i < 0; ++i) {
            args[i] = arguments[i];
          }
          return this[impl].toJSON.apply(this[impl], args);
        };
        Object.defineProperty(URL2.prototype, "href", {
          get() {
            return this[impl].href;
          },
          set(V) {
            V = conversions["USVString"](V);
            this[impl].href = V;
          },
          enumerable: true,
          configurable: true
        });
        URL2.prototype.toString = function() {
          if (!this || !module22.exports.is(this)) {
            throw new TypeError("Illegal invocation");
          }
          return this.href;
        };
        Object.defineProperty(URL2.prototype, "origin", {
          get() {
            return this[impl].origin;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL2.prototype, "protocol", {
          get() {
            return this[impl].protocol;
          },
          set(V) {
            V = conversions["USVString"](V);
            this[impl].protocol = V;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL2.prototype, "username", {
          get() {
            return this[impl].username;
          },
          set(V) {
            V = conversions["USVString"](V);
            this[impl].username = V;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL2.prototype, "password", {
          get() {
            return this[impl].password;
          },
          set(V) {
            V = conversions["USVString"](V);
            this[impl].password = V;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL2.prototype, "host", {
          get() {
            return this[impl].host;
          },
          set(V) {
            V = conversions["USVString"](V);
            this[impl].host = V;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL2.prototype, "hostname", {
          get() {
            return this[impl].hostname;
          },
          set(V) {
            V = conversions["USVString"](V);
            this[impl].hostname = V;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL2.prototype, "port", {
          get() {
            return this[impl].port;
          },
          set(V) {
            V = conversions["USVString"](V);
            this[impl].port = V;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL2.prototype, "pathname", {
          get() {
            return this[impl].pathname;
          },
          set(V) {
            V = conversions["USVString"](V);
            this[impl].pathname = V;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL2.prototype, "search", {
          get() {
            return this[impl].search;
          },
          set(V) {
            V = conversions["USVString"](V);
            this[impl].search = V;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URL2.prototype, "hash", {
          get() {
            return this[impl].hash;
          },
          set(V) {
            V = conversions["USVString"](V);
            this[impl].hash = V;
          },
          enumerable: true,
          configurable: true
        });
        module22.exports = {
          is(obj) {
            return !!obj && obj[impl] instanceof Impl.implementation;
          },
          create(constructorArgs, privateData) {
            let obj = Object.create(URL2.prototype);
            this.setup(obj, constructorArgs, privateData);
            return obj;
          },
          setup(obj, constructorArgs, privateData) {
            if (!privateData)
              privateData = {};
            privateData.wrapper = obj;
            obj[impl] = new Impl.implementation(constructorArgs, privateData);
            obj[impl][utils.wrapperSymbol] = obj;
          },
          interface: URL2,
          expose: {
            Window: { URL: URL2 },
            Worker: { URL: URL2 }
          }
        };
      }
    });
    var require_public_api = __commonJS2({
      "node_modules/whatwg-url/lib/public-api.js"(exports2) {
        "use strict";
        exports2.URL = require_URL().interface;
        exports2.serializeURL = require_url_state_machine().serializeURL;
        exports2.serializeURLOrigin = require_url_state_machine().serializeURLOrigin;
        exports2.basicURLParse = require_url_state_machine().basicURLParse;
        exports2.setTheUsername = require_url_state_machine().setTheUsername;
        exports2.setThePassword = require_url_state_machine().setThePassword;
        exports2.serializeHost = require_url_state_machine().serializeHost;
        exports2.serializeInteger = require_url_state_machine().serializeInteger;
        exports2.parseURL = require_url_state_machine().parseURL;
      }
    });
    var require_lib22 = __commonJS2({
      "node_modules/node-fetch/lib/index.js"(exports2, module22) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", { value: true });
        function _interopDefault(ex) {
          return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
        }
        var Stream = _interopDefault(require("stream"));
        var http = _interopDefault(require("http"));
        var Url = _interopDefault(require("url"));
        var whatwgUrl = _interopDefault(require_public_api());
        var https = _interopDefault(require("https"));
        var zlib = _interopDefault(require("zlib"));
        var Readable = Stream.Readable;
        var BUFFER = Symbol("buffer");
        var TYPE = Symbol("type");
        var Blob = class _Blob {
          constructor() {
            this[TYPE] = "";
            const blobParts = arguments[0];
            const options = arguments[1];
            const buffers = [];
            let size = 0;
            if (blobParts) {
              const a = blobParts;
              const length = Number(a.length);
              for (let i = 0; i < length; i++) {
                const element = a[i];
                let buffer;
                if (element instanceof Buffer) {
                  buffer = element;
                } else if (ArrayBuffer.isView(element)) {
                  buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
                } else if (element instanceof ArrayBuffer) {
                  buffer = Buffer.from(element);
                } else if (element instanceof _Blob) {
                  buffer = element[BUFFER];
                } else {
                  buffer = Buffer.from(typeof element === "string" ? element : String(element));
                }
                size += buffer.length;
                buffers.push(buffer);
              }
            }
            this[BUFFER] = Buffer.concat(buffers);
            let type = options && options.type !== void 0 && String(options.type).toLowerCase();
            if (type && !/[^\u0020-\u007E]/.test(type)) {
              this[TYPE] = type;
            }
          }
          get size() {
            return this[BUFFER].length;
          }
          get type() {
            return this[TYPE];
          }
          text() {
            return Promise.resolve(this[BUFFER].toString());
          }
          arrayBuffer() {
            const buf = this[BUFFER];
            const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
            return Promise.resolve(ab);
          }
          stream() {
            const readable = new Readable();
            readable._read = function() {
            };
            readable.push(this[BUFFER]);
            readable.push(null);
            return readable;
          }
          toString() {
            return "[object Blob]";
          }
          slice() {
            const size = this.size;
            const start = arguments[0];
            const end = arguments[1];
            let relativeStart, relativeEnd;
            if (start === void 0) {
              relativeStart = 0;
            } else if (start < 0) {
              relativeStart = Math.max(size + start, 0);
            } else {
              relativeStart = Math.min(start, size);
            }
            if (end === void 0) {
              relativeEnd = size;
            } else if (end < 0) {
              relativeEnd = Math.max(size + end, 0);
            } else {
              relativeEnd = Math.min(end, size);
            }
            const span = Math.max(relativeEnd - relativeStart, 0);
            const buffer = this[BUFFER];
            const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
            const blob = new _Blob([], { type: arguments[2] });
            blob[BUFFER] = slicedBuffer;
            return blob;
          }
        };
        Object.defineProperties(Blob.prototype, {
          size: { enumerable: true },
          type: { enumerable: true },
          slice: { enumerable: true }
        });
        Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
          value: "Blob",
          writable: false,
          enumerable: false,
          configurable: true
        });
        function FetchError(message, type, systemError) {
          Error.call(this, message);
          this.message = message;
          this.type = type;
          if (systemError) {
            this.code = this.errno = systemError.code;
          }
          Error.captureStackTrace(this, this.constructor);
        }
        FetchError.prototype = Object.create(Error.prototype);
        FetchError.prototype.constructor = FetchError;
        FetchError.prototype.name = "FetchError";
        var convert;
        try {
          convert = require("encoding").convert;
        } catch (e) {
        }
        var INTERNALS = Symbol("Body internals");
        var PassThrough = Stream.PassThrough;
        function Body(body) {
          var _this = this;
          var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$size = _ref.size;
          let size = _ref$size === void 0 ? 0 : _ref$size;
          var _ref$timeout = _ref.timeout;
          let timeout = _ref$timeout === void 0 ? 0 : _ref$timeout;
          if (body == null) {
            body = null;
          } else if (isURLSearchParams(body)) {
            body = Buffer.from(body.toString());
          } else if (isBlob(body))
            ;
          else if (Buffer.isBuffer(body))
            ;
          else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
            body = Buffer.from(body);
          } else if (ArrayBuffer.isView(body)) {
            body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
          } else if (body instanceof Stream)
            ;
          else {
            body = Buffer.from(String(body));
          }
          this[INTERNALS] = {
            body,
            disturbed: false,
            error: null
          };
          this.size = size;
          this.timeout = timeout;
          if (body instanceof Stream) {
            body.on("error", function(err) {
              const error = err.name === "AbortError" ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, "system", err);
              _this[INTERNALS].error = error;
            });
          }
        }
        Body.prototype = {
          get body() {
            return this[INTERNALS].body;
          },
          get bodyUsed() {
            return this[INTERNALS].disturbed;
          },
          /**
           * Decode response as ArrayBuffer
           *
           * @return  Promise
           */
          arrayBuffer() {
            return consumeBody.call(this).then(function(buf) {
              return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
            });
          },
          /**
           * Return raw response as Blob
           *
           * @return Promise
           */
          blob() {
            let ct = this.headers && this.headers.get("content-type") || "";
            return consumeBody.call(this).then(function(buf) {
              return Object.assign(
                // Prevent copying
                new Blob([], {
                  type: ct.toLowerCase()
                }),
                {
                  [BUFFER]: buf
                }
              );
            });
          },
          /**
           * Decode response as json
           *
           * @return  Promise
           */
          json() {
            var _this2 = this;
            return consumeBody.call(this).then(function(buffer) {
              try {
                return JSON.parse(buffer.toString());
              } catch (err) {
                return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, "invalid-json"));
              }
            });
          },
          /**
           * Decode response as text
           *
           * @return  Promise
           */
          text() {
            return consumeBody.call(this).then(function(buffer) {
              return buffer.toString();
            });
          },
          /**
           * Decode response as buffer (non-spec api)
           *
           * @return  Promise
           */
          buffer() {
            return consumeBody.call(this);
          },
          /**
           * Decode response as text, while automatically detecting the encoding and
           * trying to decode to UTF-8 (non-spec api)
           *
           * @return  Promise
           */
          textConverted() {
            var _this3 = this;
            return consumeBody.call(this).then(function(buffer) {
              return convertBody(buffer, _this3.headers);
            });
          }
        };
        Object.defineProperties(Body.prototype, {
          body: { enumerable: true },
          bodyUsed: { enumerable: true },
          arrayBuffer: { enumerable: true },
          blob: { enumerable: true },
          json: { enumerable: true },
          text: { enumerable: true }
        });
        Body.mixIn = function(proto) {
          for (const name of Object.getOwnPropertyNames(Body.prototype)) {
            if (!(name in proto)) {
              const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
              Object.defineProperty(proto, name, desc);
            }
          }
        };
        function consumeBody() {
          var _this4 = this;
          if (this[INTERNALS].disturbed) {
            return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
          }
          this[INTERNALS].disturbed = true;
          if (this[INTERNALS].error) {
            return Body.Promise.reject(this[INTERNALS].error);
          }
          let body = this.body;
          if (body === null) {
            return Body.Promise.resolve(Buffer.alloc(0));
          }
          if (isBlob(body)) {
            body = body.stream();
          }
          if (Buffer.isBuffer(body)) {
            return Body.Promise.resolve(body);
          }
          if (!(body instanceof Stream)) {
            return Body.Promise.resolve(Buffer.alloc(0));
          }
          let accum = [];
          let accumBytes = 0;
          let abort = false;
          return new Body.Promise(function(resolve, reject) {
            let resTimeout;
            if (_this4.timeout) {
              resTimeout = setTimeout(function() {
                abort = true;
                reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, "body-timeout"));
              }, _this4.timeout);
            }
            body.on("error", function(err) {
              if (err.name === "AbortError") {
                abort = true;
                reject(err);
              } else {
                reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, "system", err));
              }
            });
            body.on("data", function(chunk) {
              if (abort || chunk === null) {
                return;
              }
              if (_this4.size && accumBytes + chunk.length > _this4.size) {
                abort = true;
                reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, "max-size"));
                return;
              }
              accumBytes += chunk.length;
              accum.push(chunk);
            });
            body.on("end", function() {
              if (abort) {
                return;
              }
              clearTimeout(resTimeout);
              try {
                resolve(Buffer.concat(accum, accumBytes));
              } catch (err) {
                reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, "system", err));
              }
            });
          });
        }
        function convertBody(buffer, headers) {
          if (typeof convert !== "function") {
            throw new Error("The package `encoding` must be installed to use the textConverted() function");
          }
          const ct = headers.get("content-type");
          let charset = "utf-8";
          let res, str;
          if (ct) {
            res = /charset=([^;]*)/i.exec(ct);
          }
          str = buffer.slice(0, 1024).toString();
          if (!res && str) {
            res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
          }
          if (!res && str) {
            res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
            if (!res) {
              res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
              if (res) {
                res.pop();
              }
            }
            if (res) {
              res = /charset=(.*)/i.exec(res.pop());
            }
          }
          if (!res && str) {
            res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
          }
          if (res) {
            charset = res.pop();
            if (charset === "gb2312" || charset === "gbk") {
              charset = "gb18030";
            }
          }
          return convert(buffer, "UTF-8", charset).toString();
        }
        function isURLSearchParams(obj) {
          if (typeof obj !== "object" || typeof obj.append !== "function" || typeof obj.delete !== "function" || typeof obj.get !== "function" || typeof obj.getAll !== "function" || typeof obj.has !== "function" || typeof obj.set !== "function") {
            return false;
          }
          return obj.constructor.name === "URLSearchParams" || Object.prototype.toString.call(obj) === "[object URLSearchParams]" || typeof obj.sort === "function";
        }
        function isBlob(obj) {
          return typeof obj === "object" && typeof obj.arrayBuffer === "function" && typeof obj.type === "string" && typeof obj.stream === "function" && typeof obj.constructor === "function" && typeof obj.constructor.name === "string" && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
        }
        function clone(instance) {
          let p1, p2;
          let body = instance.body;
          if (instance.bodyUsed) {
            throw new Error("cannot clone body after it is used");
          }
          if (body instanceof Stream && typeof body.getBoundary !== "function") {
            p1 = new PassThrough();
            p2 = new PassThrough();
            body.pipe(p1);
            body.pipe(p2);
            instance[INTERNALS].body = p1;
            body = p2;
          }
          return body;
        }
        function extractContentType(body) {
          if (body === null) {
            return null;
          } else if (typeof body === "string") {
            return "text/plain;charset=UTF-8";
          } else if (isURLSearchParams(body)) {
            return "application/x-www-form-urlencoded;charset=UTF-8";
          } else if (isBlob(body)) {
            return body.type || null;
          } else if (Buffer.isBuffer(body)) {
            return null;
          } else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
            return null;
          } else if (ArrayBuffer.isView(body)) {
            return null;
          } else if (typeof body.getBoundary === "function") {
            return `multipart/form-data;boundary=${body.getBoundary()}`;
          } else if (body instanceof Stream) {
            return null;
          } else {
            return "text/plain;charset=UTF-8";
          }
        }
        function getTotalBytes(instance) {
          const body = instance.body;
          if (body === null) {
            return 0;
          } else if (isBlob(body)) {
            return body.size;
          } else if (Buffer.isBuffer(body)) {
            return body.length;
          } else if (body && typeof body.getLengthSync === "function") {
            if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
            body.hasKnownLength && body.hasKnownLength()) {
              return body.getLengthSync();
            }
            return null;
          } else {
            return null;
          }
        }
        function writeToStream(dest, instance) {
          const body = instance.body;
          if (body === null) {
            dest.end();
          } else if (isBlob(body)) {
            body.stream().pipe(dest);
          } else if (Buffer.isBuffer(body)) {
            dest.write(body);
            dest.end();
          } else {
            body.pipe(dest);
          }
        }
        Body.Promise = global.Promise;
        var invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
        var invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
        function validateName(name) {
          name = `${name}`;
          if (invalidTokenRegex.test(name) || name === "") {
            throw new TypeError(`${name} is not a legal HTTP header name`);
          }
        }
        function validateValue(value) {
          value = `${value}`;
          if (invalidHeaderCharRegex.test(value)) {
            throw new TypeError(`${value} is not a legal HTTP header value`);
          }
        }
        function find(map, name) {
          name = name.toLowerCase();
          for (const key in map) {
            if (key.toLowerCase() === name) {
              return key;
            }
          }
          return void 0;
        }
        var MAP = Symbol("map");
        var Headers2 = class _Headers {
          /**
           * Headers class
           *
           * @param   Object  headers  Response headers
           * @return  Void
           */
          constructor() {
            let init = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
            this[MAP] = /* @__PURE__ */ Object.create(null);
            if (init instanceof _Headers) {
              const rawHeaders = init.raw();
              const headerNames = Object.keys(rawHeaders);
              for (const headerName of headerNames) {
                for (const value of rawHeaders[headerName]) {
                  this.append(headerName, value);
                }
              }
              return;
            }
            if (init == null)
              ;
            else if (typeof init === "object") {
              const method = init[Symbol.iterator];
              if (method != null) {
                if (typeof method !== "function") {
                  throw new TypeError("Header pairs must be iterable");
                }
                const pairs = [];
                for (const pair of init) {
                  if (typeof pair !== "object" || typeof pair[Symbol.iterator] !== "function") {
                    throw new TypeError("Each header pair must be iterable");
                  }
                  pairs.push(Array.from(pair));
                }
                for (const pair of pairs) {
                  if (pair.length !== 2) {
                    throw new TypeError("Each header pair must be a name/value tuple");
                  }
                  this.append(pair[0], pair[1]);
                }
              } else {
                for (const key of Object.keys(init)) {
                  const value = init[key];
                  this.append(key, value);
                }
              }
            } else {
              throw new TypeError("Provided initializer must be an object");
            }
          }
          /**
           * Return combined header value given name
           *
           * @param   String  name  Header name
           * @return  Mixed
           */
          get(name) {
            name = `${name}`;
            validateName(name);
            const key = find(this[MAP], name);
            if (key === void 0) {
              return null;
            }
            return this[MAP][key].join(", ");
          }
          /**
           * Iterate over all headers
           *
           * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
           * @param   Boolean   thisArg   `this` context for callback function
           * @return  Void
           */
          forEach(callback) {
            let thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
            let pairs = getHeaders(this);
            let i = 0;
            while (i < pairs.length) {
              var _pairs$i = pairs[i];
              const name = _pairs$i[0], value = _pairs$i[1];
              callback.call(thisArg, value, name, this);
              pairs = getHeaders(this);
              i++;
            }
          }
          /**
           * Overwrite header values given name
           *
           * @param   String  name   Header name
           * @param   String  value  Header value
           * @return  Void
           */
          set(name, value) {
            name = `${name}`;
            value = `${value}`;
            validateName(name);
            validateValue(value);
            const key = find(this[MAP], name);
            this[MAP][key !== void 0 ? key : name] = [value];
          }
          /**
           * Append a value onto existing header
           *
           * @param   String  name   Header name
           * @param   String  value  Header value
           * @return  Void
           */
          append(name, value) {
            name = `${name}`;
            value = `${value}`;
            validateName(name);
            validateValue(value);
            const key = find(this[MAP], name);
            if (key !== void 0) {
              this[MAP][key].push(value);
            } else {
              this[MAP][name] = [value];
            }
          }
          /**
           * Check for header name existence
           *
           * @param   String   name  Header name
           * @return  Boolean
           */
          has(name) {
            name = `${name}`;
            validateName(name);
            return find(this[MAP], name) !== void 0;
          }
          /**
           * Delete all header values given name
           *
           * @param   String  name  Header name
           * @return  Void
           */
          delete(name) {
            name = `${name}`;
            validateName(name);
            const key = find(this[MAP], name);
            if (key !== void 0) {
              delete this[MAP][key];
            }
          }
          /**
           * Return raw headers (non-spec api)
           *
           * @return  Object
           */
          raw() {
            return this[MAP];
          }
          /**
           * Get an iterator on keys.
           *
           * @return  Iterator
           */
          keys() {
            return createHeadersIterator(this, "key");
          }
          /**
           * Get an iterator on values.
           *
           * @return  Iterator
           */
          values() {
            return createHeadersIterator(this, "value");
          }
          /**
           * Get an iterator on entries.
           *
           * This is the default iterator of the Headers object.
           *
           * @return  Iterator
           */
          [Symbol.iterator]() {
            return createHeadersIterator(this, "key+value");
          }
        };
        Headers2.prototype.entries = Headers2.prototype[Symbol.iterator];
        Object.defineProperty(Headers2.prototype, Symbol.toStringTag, {
          value: "Headers",
          writable: false,
          enumerable: false,
          configurable: true
        });
        Object.defineProperties(Headers2.prototype, {
          get: { enumerable: true },
          forEach: { enumerable: true },
          set: { enumerable: true },
          append: { enumerable: true },
          has: { enumerable: true },
          delete: { enumerable: true },
          keys: { enumerable: true },
          values: { enumerable: true },
          entries: { enumerable: true }
        });
        function getHeaders(headers) {
          let kind = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
          const keys = Object.keys(headers[MAP]).sort();
          return keys.map(kind === "key" ? function(k) {
            return k.toLowerCase();
          } : kind === "value" ? function(k) {
            return headers[MAP][k].join(", ");
          } : function(k) {
            return [k.toLowerCase(), headers[MAP][k].join(", ")];
          });
        }
        var INTERNAL = Symbol("internal");
        function createHeadersIterator(target, kind) {
          const iterator = Object.create(HeadersIteratorPrototype);
          iterator[INTERNAL] = {
            target,
            kind,
            index: 0
          };
          return iterator;
        }
        var HeadersIteratorPrototype = Object.setPrototypeOf({
          next() {
            if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
              throw new TypeError("Value of `this` is not a HeadersIterator");
            }
            var _INTERNAL = this[INTERNAL];
            const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
            const values = getHeaders(target, kind);
            const len = values.length;
            if (index >= len) {
              return {
                value: void 0,
                done: true
              };
            }
            this[INTERNAL].index = index + 1;
            return {
              value: values[index],
              done: false
            };
          }
        }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
        Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
          value: "HeadersIterator",
          writable: false,
          enumerable: false,
          configurable: true
        });
        function exportNodeCompatibleHeaders(headers) {
          const obj = Object.assign({ __proto__: null }, headers[MAP]);
          const hostHeaderKey = find(headers[MAP], "Host");
          if (hostHeaderKey !== void 0) {
            obj[hostHeaderKey] = obj[hostHeaderKey][0];
          }
          return obj;
        }
        function createHeadersLenient(obj) {
          const headers = new Headers2();
          for (const name of Object.keys(obj)) {
            if (invalidTokenRegex.test(name)) {
              continue;
            }
            if (Array.isArray(obj[name])) {
              for (const val of obj[name]) {
                if (invalidHeaderCharRegex.test(val)) {
                  continue;
                }
                if (headers[MAP][name] === void 0) {
                  headers[MAP][name] = [val];
                } else {
                  headers[MAP][name].push(val);
                }
              }
            } else if (!invalidHeaderCharRegex.test(obj[name])) {
              headers[MAP][name] = [obj[name]];
            }
          }
          return headers;
        }
        var INTERNALS$1 = Symbol("Response internals");
        var STATUS_CODES = http.STATUS_CODES;
        var Response2 = class _Response {
          constructor() {
            let body = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            Body.call(this, body, opts);
            const status = opts.status || 200;
            const headers = new Headers2(opts.headers);
            if (body != null && !headers.has("Content-Type")) {
              const contentType = extractContentType(body);
              if (contentType) {
                headers.append("Content-Type", contentType);
              }
            }
            this[INTERNALS$1] = {
              url: opts.url,
              status,
              statusText: opts.statusText || STATUS_CODES[status],
              headers,
              counter: opts.counter
            };
          }
          get url() {
            return this[INTERNALS$1].url || "";
          }
          get status() {
            return this[INTERNALS$1].status;
          }
          /**
           * Convenience property representing if the request ended normally
           */
          get ok() {
            return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
          }
          get redirected() {
            return this[INTERNALS$1].counter > 0;
          }
          get statusText() {
            return this[INTERNALS$1].statusText;
          }
          get headers() {
            return this[INTERNALS$1].headers;
          }
          /**
           * Clone this response
           *
           * @return  Response
           */
          clone() {
            return new _Response(clone(this), {
              url: this.url,
              status: this.status,
              statusText: this.statusText,
              headers: this.headers,
              ok: this.ok,
              redirected: this.redirected
            });
          }
        };
        Body.mixIn(Response2.prototype);
        Object.defineProperties(Response2.prototype, {
          url: { enumerable: true },
          status: { enumerable: true },
          ok: { enumerable: true },
          redirected: { enumerable: true },
          statusText: { enumerable: true },
          headers: { enumerable: true },
          clone: { enumerable: true }
        });
        Object.defineProperty(Response2.prototype, Symbol.toStringTag, {
          value: "Response",
          writable: false,
          enumerable: false,
          configurable: true
        });
        var INTERNALS$2 = Symbol("Request internals");
        var URL2 = Url.URL || whatwgUrl.URL;
        var parse_url = Url.parse;
        var format_url = Url.format;
        function parseURL(urlStr) {
          if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
            urlStr = new URL2(urlStr).toString();
          }
          return parse_url(urlStr);
        }
        var streamDestructionSupported = "destroy" in Stream.Readable.prototype;
        function isRequest(input) {
          return typeof input === "object" && typeof input[INTERNALS$2] === "object";
        }
        function isAbortSignal(signal) {
          const proto = signal && typeof signal === "object" && Object.getPrototypeOf(signal);
          return !!(proto && proto.constructor.name === "AbortSignal");
        }
        var Request = class _Request {
          constructor(input) {
            let init = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            let parsedURL;
            if (!isRequest(input)) {
              if (input && input.href) {
                parsedURL = parseURL(input.href);
              } else {
                parsedURL = parseURL(`${input}`);
              }
              input = {};
            } else {
              parsedURL = parseURL(input.url);
            }
            let method = init.method || input.method || "GET";
            method = method.toUpperCase();
            if ((init.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
              throw new TypeError("Request with GET/HEAD method cannot have body");
            }
            let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
            Body.call(this, inputBody, {
              timeout: init.timeout || input.timeout || 0,
              size: init.size || input.size || 0
            });
            const headers = new Headers2(init.headers || input.headers || {});
            if (inputBody != null && !headers.has("Content-Type")) {
              const contentType = extractContentType(inputBody);
              if (contentType) {
                headers.append("Content-Type", contentType);
              }
            }
            let signal = isRequest(input) ? input.signal : null;
            if ("signal" in init)
              signal = init.signal;
            if (signal != null && !isAbortSignal(signal)) {
              throw new TypeError("Expected signal to be an instanceof AbortSignal");
            }
            this[INTERNALS$2] = {
              method,
              redirect: init.redirect || input.redirect || "follow",
              headers,
              parsedURL,
              signal
            };
            this.follow = init.follow !== void 0 ? init.follow : input.follow !== void 0 ? input.follow : 20;
            this.compress = init.compress !== void 0 ? init.compress : input.compress !== void 0 ? input.compress : true;
            this.counter = init.counter || input.counter || 0;
            this.agent = init.agent || input.agent;
          }
          get method() {
            return this[INTERNALS$2].method;
          }
          get url() {
            return format_url(this[INTERNALS$2].parsedURL);
          }
          get headers() {
            return this[INTERNALS$2].headers;
          }
          get redirect() {
            return this[INTERNALS$2].redirect;
          }
          get signal() {
            return this[INTERNALS$2].signal;
          }
          /**
           * Clone this request
           *
           * @return  Request
           */
          clone() {
            return new _Request(this);
          }
        };
        Body.mixIn(Request.prototype);
        Object.defineProperty(Request.prototype, Symbol.toStringTag, {
          value: "Request",
          writable: false,
          enumerable: false,
          configurable: true
        });
        Object.defineProperties(Request.prototype, {
          method: { enumerable: true },
          url: { enumerable: true },
          headers: { enumerable: true },
          redirect: { enumerable: true },
          clone: { enumerable: true },
          signal: { enumerable: true }
        });
        function getNodeRequestOptions(request) {
          const parsedURL = request[INTERNALS$2].parsedURL;
          const headers = new Headers2(request[INTERNALS$2].headers);
          if (!headers.has("Accept")) {
            headers.set("Accept", "*/*");
          }
          if (!parsedURL.protocol || !parsedURL.hostname) {
            throw new TypeError("Only absolute URLs are supported");
          }
          if (!/^https?:$/.test(parsedURL.protocol)) {
            throw new TypeError("Only HTTP(S) protocols are supported");
          }
          if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
            throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
          }
          let contentLengthValue = null;
          if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
            contentLengthValue = "0";
          }
          if (request.body != null) {
            const totalBytes = getTotalBytes(request);
            if (typeof totalBytes === "number") {
              contentLengthValue = String(totalBytes);
            }
          }
          if (contentLengthValue) {
            headers.set("Content-Length", contentLengthValue);
          }
          if (!headers.has("User-Agent")) {
            headers.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
          }
          if (request.compress && !headers.has("Accept-Encoding")) {
            headers.set("Accept-Encoding", "gzip,deflate");
          }
          let agent = request.agent;
          if (typeof agent === "function") {
            agent = agent(parsedURL);
          }
          if (!headers.has("Connection") && !agent) {
            headers.set("Connection", "close");
          }
          return Object.assign({}, parsedURL, {
            method: request.method,
            headers: exportNodeCompatibleHeaders(headers),
            agent
          });
        }
        function AbortError(message) {
          Error.call(this, message);
          this.type = "aborted";
          this.message = message;
          Error.captureStackTrace(this, this.constructor);
        }
        AbortError.prototype = Object.create(Error.prototype);
        AbortError.prototype.constructor = AbortError;
        AbortError.prototype.name = "AbortError";
        var URL$1 = Url.URL || whatwgUrl.URL;
        var PassThrough$1 = Stream.PassThrough;
        var isDomainOrSubdomain = function isDomainOrSubdomain2(destination, original) {
          const orig = new URL$1(original).hostname;
          const dest = new URL$1(destination).hostname;
          return orig === dest || orig[orig.length - dest.length - 1] === "." && orig.endsWith(dest);
        };
        var isSameProtocol = function isSameProtocol2(destination, original) {
          const orig = new URL$1(original).protocol;
          const dest = new URL$1(destination).protocol;
          return orig === dest;
        };
        function fetch2(url, opts) {
          if (!fetch2.Promise) {
            throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
          }
          Body.Promise = fetch2.Promise;
          return new fetch2.Promise(function(resolve, reject) {
            const request = new Request(url, opts);
            const options = getNodeRequestOptions(request);
            const send = (options.protocol === "https:" ? https : http).request;
            const signal = request.signal;
            let response = null;
            const abort = function abort2() {
              let error = new AbortError("The user aborted a request.");
              reject(error);
              if (request.body && request.body instanceof Stream.Readable) {
                destroyStream(request.body, error);
              }
              if (!response || !response.body)
                return;
              response.body.emit("error", error);
            };
            if (signal && signal.aborted) {
              abort();
              return;
            }
            const abortAndFinalize = function abortAndFinalize2() {
              abort();
              finalize();
            };
            const req = send(options);
            let reqTimeout;
            if (signal) {
              signal.addEventListener("abort", abortAndFinalize);
            }
            function finalize() {
              req.abort();
              if (signal)
                signal.removeEventListener("abort", abortAndFinalize);
              clearTimeout(reqTimeout);
            }
            if (request.timeout) {
              req.once("socket", function(socket) {
                reqTimeout = setTimeout(function() {
                  reject(new FetchError(`network timeout at: ${request.url}`, "request-timeout"));
                  finalize();
                }, request.timeout);
              });
            }
            req.on("error", function(err) {
              reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
              if (response && response.body) {
                destroyStream(response.body, err);
              }
              finalize();
            });
            fixResponseChunkedTransferBadEnding(req, function(err) {
              if (signal && signal.aborted) {
                return;
              }
              if (response && response.body) {
                destroyStream(response.body, err);
              }
            });
            if (parseInt(process.version.substring(1)) < 14) {
              req.on("socket", function(s) {
                s.addListener("close", function(hadError) {
                  const hasDataListener = s.listenerCount("data") > 0;
                  if (response && hasDataListener && !hadError && !(signal && signal.aborted)) {
                    const err = new Error("Premature close");
                    err.code = "ERR_STREAM_PREMATURE_CLOSE";
                    response.body.emit("error", err);
                  }
                });
              });
            }
            req.on("response", function(res) {
              clearTimeout(reqTimeout);
              const headers = createHeadersLenient(res.headers);
              if (fetch2.isRedirect(res.statusCode)) {
                const location = headers.get("Location");
                let locationURL = null;
                try {
                  locationURL = location === null ? null : new URL$1(location, request.url).toString();
                } catch (err) {
                  if (request.redirect !== "manual") {
                    reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, "invalid-redirect"));
                    finalize();
                    return;
                  }
                }
                switch (request.redirect) {
                  case "error":
                    reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
                    finalize();
                    return;
                  case "manual":
                    if (locationURL !== null) {
                      try {
                        headers.set("Location", locationURL);
                      } catch (err) {
                        reject(err);
                      }
                    }
                    break;
                  case "follow":
                    if (locationURL === null) {
                      break;
                    }
                    if (request.counter >= request.follow) {
                      reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
                      finalize();
                      return;
                    }
                    const requestOpts = {
                      headers: new Headers2(request.headers),
                      follow: request.follow,
                      counter: request.counter + 1,
                      agent: request.agent,
                      compress: request.compress,
                      method: request.method,
                      body: request.body,
                      signal: request.signal,
                      timeout: request.timeout,
                      size: request.size
                    };
                    if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
                      for (const name of ["authorization", "www-authenticate", "cookie", "cookie2"]) {
                        requestOpts.headers.delete(name);
                      }
                    }
                    if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                      reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
                      finalize();
                      return;
                    }
                    if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === "POST") {
                      requestOpts.method = "GET";
                      requestOpts.body = void 0;
                      requestOpts.headers.delete("content-length");
                    }
                    resolve(fetch2(new Request(locationURL, requestOpts)));
                    finalize();
                    return;
                }
              }
              res.once("end", function() {
                if (signal)
                  signal.removeEventListener("abort", abortAndFinalize);
              });
              let body = res.pipe(new PassThrough$1());
              const response_options = {
                url: request.url,
                status: res.statusCode,
                statusText: res.statusMessage,
                headers,
                size: request.size,
                timeout: request.timeout,
                counter: request.counter
              };
              const codings = headers.get("Content-Encoding");
              if (!request.compress || request.method === "HEAD" || codings === null || res.statusCode === 204 || res.statusCode === 304) {
                response = new Response2(body, response_options);
                resolve(response);
                return;
              }
              const zlibOptions = {
                flush: zlib.Z_SYNC_FLUSH,
                finishFlush: zlib.Z_SYNC_FLUSH
              };
              if (codings == "gzip" || codings == "x-gzip") {
                body = body.pipe(zlib.createGunzip(zlibOptions));
                response = new Response2(body, response_options);
                resolve(response);
                return;
              }
              if (codings == "deflate" || codings == "x-deflate") {
                const raw = res.pipe(new PassThrough$1());
                raw.once("data", function(chunk) {
                  if ((chunk[0] & 15) === 8) {
                    body = body.pipe(zlib.createInflate());
                  } else {
                    body = body.pipe(zlib.createInflateRaw());
                  }
                  response = new Response2(body, response_options);
                  resolve(response);
                });
                raw.on("end", function() {
                  if (!response) {
                    response = new Response2(body, response_options);
                    resolve(response);
                  }
                });
                return;
              }
              if (codings == "br" && typeof zlib.createBrotliDecompress === "function") {
                body = body.pipe(zlib.createBrotliDecompress());
                response = new Response2(body, response_options);
                resolve(response);
                return;
              }
              response = new Response2(body, response_options);
              resolve(response);
            });
            writeToStream(req, request);
          });
        }
        function fixResponseChunkedTransferBadEnding(request, errorCallback) {
          let socket;
          request.on("socket", function(s) {
            socket = s;
          });
          request.on("response", function(response) {
            const headers = response.headers;
            if (headers["transfer-encoding"] === "chunked" && !headers["content-length"]) {
              response.once("close", function(hadError) {
                const hasDataListener = socket && socket.listenerCount("data") > 0;
                if (hasDataListener && !hadError) {
                  const err = new Error("Premature close");
                  err.code = "ERR_STREAM_PREMATURE_CLOSE";
                  errorCallback(err);
                }
              });
            }
          });
        }
        function destroyStream(stream, err) {
          if (stream.destroy) {
            stream.destroy(err);
          } else {
            stream.emit("error", err);
            stream.end();
          }
        }
        fetch2.isRedirect = function(code) {
          return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
        };
        fetch2.Promise = global.Promise;
        module22.exports = exports2 = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        exports2.default = exports2;
        exports2.Headers = Headers2;
        exports2.Request = Request;
        exports2.Response = Response2;
        exports2.FetchError = FetchError;
      }
    });
    var import_form_data = __toESM2(require_form_data());
    var import_jsonwebtoken = __toESM2(require_jsonwebtoken());
    var FileQuery = class {
      constructor(client) {
        this.client = client;
      }
      findAll = () => {
        return this.client.queryList({
          parent: this.client.getId()
        });
      };
      findByName = (name) => {
        return this.client.queryList({
          parent: this.client.getId(),
          name
        });
      };
      findOneByName = (name) => {
        return this.client.queryOne({
          parent: this.client.getId(),
          name
        });
      };
      findOneById = (id) => {
        return this.client.queryOne({
          parent: this.client.getId(),
          id
        });
      };
    };
    var TableQueryBuilder = class {
      tableQuery;
      table;
      constructor(value) {
        this.tableQuery = {};
        this.table = value;
      }
      size(size) {
        this.tableQuery.size = size;
        return this;
      }
      clearSize() {
        this.tableQuery.size = void 0;
        return this;
      }
      skip(skip) {
        this.tableQuery.skip = skip;
        return this;
      }
      clearSkip() {
        this.tableQuery.skip = void 0;
        return this;
      }
      async query() {
        return this.table.findByQuery(this.tableQuery);
      }
    };
    var parseResponse = async (response, querySkip) => {
      const responseString = await response.text();
      const data = JSON.parse(responseString);
      const rows = data.values || [];
      const value = rows.map((row, index) => {
        const rowIndex = index + querySkip;
        const rowData = row.map((cell) => cell.toString());
        return [rowIndex, rowData];
      });
      return value;
    };
    var import_node_fetch = __toESM2(require_lib22());
    var fetchGoogle = (...args) => {
      return new Promise(async (resolve, reject) => {
        const responsePromise = (0, import_node_fetch.default)(args[0], {
          ...args[1]
        });
        setTimeout(async () => {
          const response = await responsePromise;
          if (response.status !== 200) {
            reject(Error(`${response.status} ${response.statusText}: ${await response.text()}`));
            return;
          }
          resolve(response);
        }, 100);
      });
    };
    var getColumns = async (sheet) => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet.fileData.id}/values/Sheet1!1:1?majorDimension=ROWS`;
      const response = await fetchGoogle(url, {
        headers: {
          Authorization: `Bearer ${sheet.session.token}`
        }
      });
      const body = await parseResponse(response, 0);
      if (body.length === 0) {
        return [];
      }
      const [, column_list] = body.shift() || [];
      if (!column_list) {
        return [];
      }
      return column_list;
    };
    async function newRows(sheet, data) {
      if (data.length > 0) {
        const body = {
          range: "Sheet1",
          majorDimension: "ROWS",
          values: data
        };
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet.fileData.id}/values/Sheet1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS&includeValuesInResponse=false&responseValueRenderOption=UNFORMATTED_VALUE&responseDateTimeRenderOption=FORMATTED_STRING`;
        await fetchGoogle(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${sheet.session.token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        });
      }
    }
    async function newPersistedRows(sheet, data) {
      const persistedData = data.map(([rowNumber, row]) => {
        const range = `Sheet1!${rowNumber + 1}:${rowNumber + 1}`;
        return {
          range,
          majorDimension: "ROWS",
          values: [row]
        };
      });
      const body = {
        valueInputOption: "RAW",
        data: persistedData,
        includeValuesInResponse: false,
        responseValueRenderOption: "UNFORMATTED_VALUE",
        responseDateTimeRenderOption: "FORMATTED_STRING"
      };
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet.fileData.id}/values:batchUpdate`;
      await fetchGoogle(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sheet.session.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
    }
    var getRows = async (sheet, query) => {
      const query_skip = query.skip || 1;
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet.fileData.id}/values`;
      const urlWithSize = `${url}/Sheet1!${query_skip + 1}:${query.size ?? 4e4}`;
      const urlWithDimension = `${urlWithSize}?majorDimension=ROWS`;
      const response = await fetchGoogle(urlWithDimension, {
        headers: {
          Authorization: `Bearer ${sheet.session.token}`
        }
      });
      return parseResponse(response, query_skip);
    };
    var GoogleSheet = class {
      constructor(session, fileData) {
        this.session = session;
        this.fileData = fileData;
      }
      async saveAll(data) {
        console.log(`GoogleSheet[${this.fileData.id}].saveAll(data:${JSON.stringify(data)})`);
        const columns = await getColumns(this);
        let columnMap = columns.reduce((acc, value, index) => {
          acc[value] = index;
          return acc;
        }, {});
        const cleanRows = data.reduce((acc, row) => {
          if (!row.id) {
            const [row_list, new_column_map] = transform(row, columnMap);
            columnMap = new_column_map;
            acc.push(row_list);
          }
          return acc;
        }, []);
        const persistedRows = data.reduce((acc, row) => {
          if (row.id) {
            const [row_list, new_column_map] = transform(row, columnMap);
            columnMap = new_column_map;
            acc.push([row.id, row_list]);
          }
          return acc;
        }, []);
        const columnRow = Object.entries(columnMap).reduce(
          (acc, [key, value]) => {
            acc[value] = key;
            return acc;
          },
          Array(Object.keys(columnMap).length).fill("")
        );
        persistedRows.push([0, columnRow]);
        await newPersistedRows(this, persistedRows);
        await newRows(this, cleanRows);
      }
      async findByQuery(query) {
        console.log(`GoogleSheet[${this.fileData.id}].findByQuery(query:${JSON.stringify(query)})`);
        const columns = await getColumns(this);
        const data = await getRows(this, query);
        return data.map(([id, row]) => {
          const map = row.reduce((acc, value, index) => {
            const key = columns[index];
            if (value) {
              acc[key] = value;
            }
            return acc;
          }, {});
          return {
            id,
            data: map
          };
        });
      }
      findBy() {
        return new TableQueryBuilder(this);
      }
    };
    function transform(row, column_map) {
      const existing_rows_list = Array(column_map.length).fill("");
      const data = { ...row.data };
      for (const [key, value] of Object.entries(data)) {
        if (value === void 0) {
          continue;
        }
        if (column_map[key] === void 0) {
          column_map[key] = Object.keys(column_map).length;
          existing_rows_list.push(value);
        } else {
          existing_rows_list[column_map[key]] = value;
          delete data[key];
        }
      }
      return [existing_rows_list, column_map];
    }
    var GoogleDriveFileUninitialized = class _GoogleDriveFileUninitialized extends FileQuery {
      constructor(googleSession, id) {
        super({
          getId: () => id,
          queryList: (request) => googleQueryList(this.googleSession, request),
          queryOne: (request) => googleQueryOne(this.googleSession, request)
        });
        this.googleSession = googleSession;
        this.id = id;
      }
      load() {
        return this.client.queryOne({
          id: this.id
        });
      }
      findOneByIdLazy = (id) => {
        return new _GoogleDriveFileUninitialized(this.googleSession, id);
      };
    };
    var GoogleDriveFile = class extends GoogleDriveFileUninitialized {
      constructor(googleSession, fileData) {
        super(googleSession, fileData.id);
        this.googleSession = googleSession;
        this.fileData = fileData;
        this.id = fileData.id;
        this.name = fileData.name;
        this.link = `https://drive.google.com/uc?id=${fileData.id}`;
      }
      id;
      link;
      name;
      bodyJson = async () => {
        console.log(`GoogleDriveFile[${this.id}].bodyJson()`);
        const response = await fetchGoogle(`https://www.googleapis.com/drive/v3/files/${this.fileData.id}?alt=media`, {
          headers: {
            "Authorization": `Bearer ${this.googleSession.token}`
          }
        });
        return await response.json();
      };
      bodyString = async () => {
        console.log(`GoogleDriveFile[${this.id}].bodyString()`);
        const response = await fetchGoogle(`https://www.googleapis.com/drive/v3/files/${this.fileData.id}?alt=media`, {
          headers: {
            "Authorization": `Bearer ${this.googleSession.token}`
          }
        });
        return await response.text();
      };
      moveTo = async (fileMetadata) => {
        console.log(`GoogleDriveFile[${this.id}].moveTo(fileMetadata:${fileMetadata.id})`);
        if (!this.fileData.parents) {
          throw "No parents found";
        }
        await fetchGoogle(`https://www.googleapis.com/upload/drive/v3/files/${this.id}?removeParents=${this.fileData.parents[0]}&addParents=${fileMetadata.id}`, {
          method: "PATCH",
          headers: {
            "Authorization": `Bearer ${this.googleSession.token}`
          }
        });
        return;
      };
      rename = async (name) => {
        console.log(`GoogleDriveFile[${this.id}].rename(fileMetadata:${name})`);
        if (!this.fileData.parents) {
          throw "No parents found";
        }
        await fetchGoogle(`https://www.googleapis.com/upload/drive/v3/files/${this.id}}`, {
          method: "PATCH",
          headers: {
            "Authorization": `Bearer ${this.googleSession.token}`
          },
          body: JSON.stringify({
            name
          })
        });
        return;
      };
      createLazy = async (name, contentType, body) => {
        console.log(`GoogleDriveFile[${this.id}].create(name:${name}, contentType:${contentType}`);
        const resumable_req = await fetchGoogle("https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${this.googleSession.token}`,
            "Content-Type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify({
            "name": name,
            "parents": [this.fileData.id],
            "mimeType": contentType
          })
        });
        const location = resumable_req.headers.get("Location");
        const put_req = await fetchGoogle(location, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${this.googleSession.token}`,
            "Content-Type": contentType
          },
          body
        });
        const json = await put_req.json();
        return new GoogleDriveFileUninitialized(this.googleSession, json.id);
      };
      create = async (name, contentType, body) => {
        const fileMetadataUninitialized = await this.createLazy(name, contentType, body);
        return this.findOneById(fileMetadataUninitialized.id);
      };
      intoSheet = () => {
        return new GoogleSheet(this.googleSession, this.fileData);
      };
      load = async () => {
        console.log(`GoogleDriveFile[${this.id}].load()`);
        return this;
      };
    };
    var prepareRequest = async (token, requestList) => {
      let query = [];
      if (requestList.name) {
        query = [...query, `name='${requestList.name}'`];
      }
      if (requestList.parent) {
        query = [...query, `'${requestList.parent}' in parents`];
      }
      const queryString = query.join(" and ");
      let url = new URL("https://www.googleapis.com/drive/v3/files");
      url.searchParams.set("fields", "files(id, name, mimeType, parents)");
      url.searchParams.set("q", queryString);
      const response = await fetchGoogle(url, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      return (await response.json()).files;
    };
    var googleQueryList = async (googleSession, request) => {
      console.log(`googleQueryList(session, request:${JSON.stringify(request)})`);
      return (await prepareRequest(googleSession.token, request)).map((fileData) => new GoogleDriveFile(googleSession, fileData));
    };
    var googleQueryOne = async (googleSession, request) => {
      console.log(`googleQueryOne(session, request:${JSON.stringify(request)})`);
      let fileData;
      if (request.id) {
        const response = await fetchGoogle(`https://www.googleapis.com/drive/v3/files/${request.id}?fields=id, name, mimeType, parents`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${googleSession.token}`
          }
        });
        fileData = await response.json();
      } else {
        const list = await prepareRequest(googleSession.token, {
          name: request.name,
          parent: request.parent,
          size: 1
        });
        if (list?.length !== 1) {
          throw "googleQueryOne returned list length different than 1";
        }
        fileData = list[0];
      }
      if (request.parent && !fileData.parents?.includes(request.parent)) {
        throw new Error(`googleQueryOne returned file has diferent parent than ${request.parent} : ${fileData}`);
      }
      if (request.name && fileData.name !== request.name) {
        throw new Error(`googleQueryOne returned file has diferent name than ${request.name} : ${fileData}`);
      }
      return new GoogleDriveFile(googleSession, fileData);
    };
    var GoogleDrive = class extends FileQuery {
      constructor(googleSession) {
        super({
          getId: () => void 0,
          queryList: (request) => googleQueryList(this.googleSession, request),
          queryOne: (request) => googleQueryOne(this.googleSession, request)
        });
        this.googleSession = googleSession;
      }
      findOneByIdLazy = (id) => {
        console.log(`GoogleDrive.findOneByIdLazy(id:${JSON.stringify(id)})`);
        return new GoogleDriveFileUninitialized(this.googleSession, id);
      };
    };
    var getSession = async () => {
      const privateKey = process.env.PRIVATE_KEY;
      if (!privateKey) {
        throw "PRIVATE_KEY not set";
      }
      const clientEmail = process.env.CLIENT_EMAIL;
      if (!clientEmail) {
        throw "CLIENT_EMAIL not set";
      }
      const expirationDate = /* @__PURE__ */ new Date();
      expirationDate.setSeconds(expirationDate.getSeconds() + 3600);
      const claims = {
        iss: clientEmail,
        scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets",
        aud: "https://oauth2.googleapis.com/token",
        exp: expirationDate.getTime() / 1e3,
        iat: (/* @__PURE__ */ new Date()).getTime() / 1e3
      };
      const token = import_jsonwebtoken.default.sign(claims, privateKey, { algorithm: "RS256" });
      const body = new import_form_data.default();
      body.append("grant_type", "urn:ietf:params:oauth:grant-type:jwt-bearer");
      body.append("assertion", token);
      const response = await fetchGoogle("https://oauth2.googleapis.com/token", {
        method: "POST",
        body
      });
      const responseJson = await response.json();
      const access_token = responseJson.access_token;
      if (!access_token) {
        throw new Error(`Response doesnt contain access token, response: ${JSON.stringify(responseJson, null, 2)}`);
      }
      return {
        token: access_token,
        expirationUnixSeconds: expirationDate
      };
    };
    var newGoogleSession2 = async () => {
      console.log(`newGoogleSession()`);
      const data = await getSession();
      return new class {
        token = data.token;
        expirationUnixSeconds = data.expirationUnixSeconds;
        constructor() {
        }
        intoDrive = () => {
          return new GoogleDrive(this);
        };
      }();
    };
    module2.exports = newGoogleSession2;
  }
});

// job.ts
var job_exports = {};
__export(job_exports, {
  default: () => job_default
});
module.exports = __toCommonJS(job_exports);

// index_add.tsx
var import_react2 = __toESM(require_react());
var import_anud12_github2 = __toESM(require_lib());

// index.tsx
var import_react = __toESM(require_react());
var import_anud12_github = __toESM(require_lib());
var folderId = {
  trash: "1NwJuSyQ4rFoI6I07vAwjmm62X3zuCNxv",
  db: "1BlHXnJJPuWu0_VDe-JAJzZ0XAR_MplEW45TnmdMeKfI",
  images: "1gfpLitPAZtWF5omk97dB3IXbf_leWXPp"
};
var __default = /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Page, { title: "Boxes" }, /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Link, { href: "add" }, "Add"), /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Table, { source: folderId.db }));

// index_add.tsx
var import_anud12_github3 = __toESM(require_lib2());
var createFolderId = "11zqF7BKA-7hvcONuSmbU2RGHrxmLafNl";
var addJob = async () => {
  const globalFs = (await (0, import_anud12_github3.default)()).intoDrive();
  const pending = await globalFs.findOneByIdLazy(createFolderId);
  const fileList = await pending.findByName("form-data.json");
  if (!fileList?.length) {
    return;
  }
  const trash = await globalFs.findOneById(folderId.trash);
  const db = (await globalFs.findOneById(folderId.db)).intoSheet();
  const images = await globalFs.findOneById(folderId.images);
  const rows = await Promise.all(fileList.map(async (file) => {
    const data = await file.bodyJson();
    const imageData = Buffer.from(data.image.data, "base64");
    await file.moveTo(trash);
    return {
      id: void 0,
      data: {
        ...data,
        image: void 0,
        id: file.id,
        imageLink: (await images.create(file.id, data.image.mimeType, imageData)).link
      }
    };
  }));
  await db.saveAll(rows);
};

// job.ts
var job_default = (async () => {
  await addJob();
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

anud12.github.io_job_base/lib/index.js:
  (*! Bundled license information:
  
  mime-db/index.js:
    (*!
     * mime-db
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015-2022 Douglas Christopher Wilson
     * MIT Licensed
     *)
  
  mime-types/index.js:
    (*!
     * mime-types
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     *)
  
  safe-buffer/index.js:
    (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  
  lodash/lodash.js:
    (**
     * @license
     * Lodash <https://lodash.com/>
     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     *)
  *)
*/