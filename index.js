var mainComponent = (() => {
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

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = globalThis.React;
    }
  });

  // node_modules/anud12.github.io_ui_base/lib/index.js
  var require_lib = __commonJS({
    "node_modules/anud12.github.io_ui_base/lib/index.js"(exports, module) {
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
        Form: () => Form,
        Input: () => Input,
        Link: () => Link2,
        Page: () => Page2,
        Table: () => Table2
      });
      module.exports = __toCommonJS2(src_exports);
      var import_react7 = __toESM2(require_react());
      var import_react2 = __toESM2(require_react());
      var Comment = ({ children }) => {
        return /* @__PURE__ */ import_react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: `<!-- ${children} -->` } });
      };
      var import_react6 = __toESM2(require_react());
      var import_react22 = __toESM2(require_react());
      var CardContainer = (props) => {
        return /* @__PURE__ */ import_react22.default.createElement("div", { className: "container-container" }, /* @__PURE__ */ import_react22.default.createElement("div", { className: `container card-container ${props.className ?? ""}`.trim() }, props.children));
      };
      var import_react3 = __toESM2(require_react());
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
        const [searchParams, setSearchParams] = (0, import_react3.useState)("");
        (0, import_react3.useEffect)(() => {
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
        return /* @__PURE__ */ import_react3.default.createElement("a", { className: "link", href: props.href + searchParams }, props.children);
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
      var Page2 = (props) => {
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
      var Form = (props) => {
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
      var Input = (props) => {
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

  // index.tsx
  var __exports = {};
  __export(__exports, {
    default: () => __default,
    folderId: () => folderId
  });
  var import_react = __toESM(require_react());
  var import_anud12_github = __toESM(require_lib());
  var folderId = {
    trash: "1NwJuSyQ4rFoI6I07vAwjmm62X3zuCNxv",
    db: "1BlHXnJJPuWu0_VDe-JAJzZ0XAR_MplEW45TnmdMeKfI",
    images: "1gfpLitPAZtWF5omk97dB3IXbf_leWXPp"
  };
  var __default = /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Page, { title: "Boxes" }, /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Link, { href: "add" }, "Add"), /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Table, { source: folderId.db }));
  return __toCommonJS(__exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsLXBsdWdpbjpyZWFjdCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL2xpYi9pbmRleC5qcyIsICJpbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5SZWFjdCIsICJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgQnV0dG9uOiAoKSA9PiBCdXR0b24sXG4gIEZvcm06ICgpID0+IEZvcm0sXG4gIElucHV0OiAoKSA9PiBJbnB1dCxcbiAgTGluazogKCkgPT4gTGluayxcbiAgUGFnZTogKCkgPT4gUGFnZSxcbiAgVGFibGU6ICgpID0+IFRhYmxlXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvUGFnZS50c3hcbnZhciBpbXBvcnRfcmVhY3Q3ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db21tZW50LnRzeFxudmFyIGltcG9ydF9yZWFjdCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBDb21tZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGA8IS0tICR7Y2hpbGRyZW59IC0tPmAgfSB9KTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci50c3hcbnZhciBpbXBvcnRfcmVhY3Q2ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db250YWluZXIudHN4XG52YXIgaW1wb3J0X3JlYWN0MiA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBDYXJkQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyLWNvbnRhaW5lclwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGNvbnRhaW5lciBjYXJkLWNvbnRhaW5lciAke3Byb3BzLmNsYXNzTmFtZSA/PyBcIlwifWAudHJpbSgpIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hdG9tcy9MaW5rLnRzeFxudmFyIGltcG9ydF9yZWFjdDMgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2dvb2dsZS9jb25maWcudHNcbnZhciBjb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCdFEyV095SVVuYVNXQWhsM3M1UEFfTFprV3RwV3o1aUFcIixcbiAgY2xpZW50SWQ6IFwiOTg1MjgwOTA3MDMxLWZmdmZuYzhwaTBhbmU5OWxzbzlkYmwxbTJsNW9jOW5uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXG4gIHNjb3BlOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHMgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5wcm9maWxlIFwiLFxuICBkaXNjb3ZlcnlEb2NzOiBbXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy9kcml2ZS92My9yZXN0XCJdXG59O1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvbG9hZEdvb2dsZURlcGVuZGVuY2llcy50c1xudmFyIGxvYWRTY3JpcHQgPSAoc3JjKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGlmICghZ2xvYmFsVGhpcy5kb2N1bWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXNvbHZlKCk7XG59KTtcbnZhciBsb2FkR29vZ2xlRGVwZW5kZW5jaWVzID0gUHJvbWlzZS5hbGwoW1xuICBsb2FkU2NyaXB0KFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzXCIpLFxuICBsb2FkU2NyaXB0KFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2dzaS9jbGllbnRcIilcbl0pO1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvZ2FwaUNsaWVudFByb21pc2UudHNcbnZhciBnYXBpQ2xpZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gIGF3YWl0IGxvYWRHb29nbGVEZXBlbmRlbmNpZXM7XG4gIGdhcGkubG9hZChcImNsaWVudFwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgZ2FwaS5jbGllbnQuaW5pdCh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBkaXNjb3ZlcnlEb2NzOiBjb25maWcuZGlzY292ZXJ5RG9jc1xuICAgIH0pO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlMikgPT4gZ2FwaS5jbGllbnQubG9hZChcInNoZWV0c1wiLCBcInY0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgcmVzb2x2ZTIoKTtcbiAgICB9KSk7XG4gICAgcmVzb2x2ZShnYXBpKTtcbiAgfSk7XG59KTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL2dldEV4cGlyYXRpb25EYXRlLnRzXG52YXIgZ2V0RXhwaXJhdGlvbkRhdGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gIGNvbnN0IHRva2VuID0gZ2FwaTI/LmF1dGg/LmdldFRva2VuKCk7XG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gcmVzKHZvaWQgMCkpO1xuICB9XG4gIHJldHVybiBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3Rva2VuaW5mbz9hY2Nlc3NfdG9rZW49JHt0b2tlbi5hY2Nlc3NfdG9rZW59YCkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgRXJyb3IoYGdldEV4cGlyYXRpb25EYXRlIHN0YXR1cyAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfVxuICAgIHJldHVybiAoYXdhaXQgcmVzLmpzb24oKSk/LmV4cGlyZXNfaW47XG4gIH0pO1xufTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL3Rva2VuQ2xpZW50UHJvbWlzZS50c1xudmFyIHRva2VuQ2xpZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXMpID0+IHtcbiAgYXdhaXQgbG9hZEdvb2dsZURlcGVuZGVuY2llcztcbiAgY29uc3QgdG9rZW5DbGllbnQgPSBnb29nbGUuYWNjb3VudHMub2F1dGgyLmluaXRUb2tlbkNsaWVudCh7XG4gICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50SWQsXG4gICAgc2NvcGU6IGNvbmZpZy5zY29wZSxcbiAgICByZWRpcmVjdF91cmk6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsXG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICB9XG4gIH0pO1xuICByZXModG9rZW5DbGllbnQpO1xufSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2ltcGwvbmV3QXBpLnRzXG5mdW5jdGlvbiBhZGRRdWVyeVBhcmFtKHZhbHVlKSB7XG4gIGNvbnN0IG5ld1VybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICBuZXdVcmwuaGFzaCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybC5ocmVmKTtcbn1cbnZhciBuZXdBcGkgPSB7XG4gIHNlc3Npb25OYW1lOiAoKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgZ2FwaTIuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgXCJwYXRoXCI6IFwiaHR0cHM6Ly9wZW9wbGUuZ29vZ2xlYXBpcy5jb20vdjEvcGVvcGxlL21lP3BlcnNvbkZpZWxkcz1uYW1lc1wiLFxuICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgIFwiY2FsbGJhY2tcIjogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZT8ubmFtZXM/LlswXT8uZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSxcbiAgbG9hZEZyb21Vcmw6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnYXBpMiA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzRnJvbVVybCA9IGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKSk7XG4gICAgaWYgKGNyZWRlbnRpYWxzRnJvbVVybCkge1xuICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBKU09OLnBhcnNlKGNyZWRlbnRpYWxzRnJvbVVybCk7XG4gICAgICBhd2FpdCBnYXBpMi5jbGllbnQuaW5pdCh7fSk7XG4gICAgICBnYXBpMi5jbGllbnQuc2V0VG9rZW4oY3JlZGVudGlhbHMpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuZXdBcGktb25DaGFuZ2VcIikpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIG9uQ2hhbmdlOiAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBmbiA9IChldmVudCkgPT4ge1xuICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH07XG4gICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJuZXdBcGktb25DaGFuZ2VcIiwgZm4pO1xuICAgIHJldHVybiAoKSA9PiBnbG9iYWxUaGlzPy5kb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm5ld0FwaS1vbkNoYW5nZVwiLCBmbik7XG4gIH0sXG4gIGxvZ291dDogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgZ2FwaTIuY2xpZW50LnNldFRva2VuKG51bGwpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm5ld0FwaS1vbkNoYW5nZVwiKSk7XG4gIH0sXG4gIGxvZ2luOiBhc3luYyAoKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHRva2VuQ2xpZW50ID0gYXdhaXQgdG9rZW5DbGllbnRQcm9taXNlO1xuICAgIHRyeSB7XG4gICAgICBpZiAoYXdhaXQgbmV3QXBpLmxvYWRGcm9tVXJsKCkpIHtcbiAgICAgICAgYXdhaXQgZ2V0RXhwaXJhdGlvbkRhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgICB0b2tlbkNsaWVudC5jYWxsYmFjayA9IChjcmVkZW50aWFsc1Jlc3BvbnNlKSA9PiB7XG4gICAgICBhZGRRdWVyeVBhcmFtKGNyZWRlbnRpYWxzUmVzcG9uc2UpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuZXdBcGktb25DaGFuZ2VcIikpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG4gICAgdG9rZW5DbGllbnQucmVxdWVzdEFjY2Vzc1Rva2VuKHsgcHJvbXB0OiBcImNvbnNlbnRcIiB9KTtcbiAgfSlcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL2F0b21zL0xpbmsudHN4XG52YXIgTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gKDAsIGltcG9ydF9yZWFjdDMudXNlU3RhdGUpKFwiXCIpO1xuICAoMCwgaW1wb3J0X3JlYWN0My51c2VFZmZlY3QpKCgpID0+IHtcbiAgICBzZXRTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgc2V0U2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICB9O1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ld0FwaS5vbkNoYW5nZSgoKSA9PiB7XG4gICAgICBmbigpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmbik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmbik7XG4gICAgICBzdWJzY3JpcHRpb24oKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0My5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImxpbmtcIiwgaHJlZjogcHJvcHMuaHJlZiArIHNlYXJjaFBhcmFtcyB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hcGkvc2lnbkluLnRzeFxudmFyIGltcG9ydF9yZWFjdDUgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9jb21wb25lbnRzL2F0b21zL0J1dHRvbi50c3hcbnZhciBpbXBvcnRfcmVhY3Q0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIEJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDQuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgLi4ucHJvcHMsIGNsYXNzTmFtZTogXCJidXR0b25cIiB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hcGkvc2lnbkluLnRzeFxudmFyIFNpZ25JbiA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSAoMCwgaW1wb3J0X3JlYWN0NS51c2VTdGF0ZSkodm9pZCAwKTtcbiAgY29uc3QgY2FsbGJhY2sgPSAoMCwgaW1wb3J0X3JlYWN0NS51c2VDYWxsYmFjaykoKCkgPT4ge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgbmV3QXBpLmxvZ291dCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXdBcGkubG9naW4oKTtcbiAgfSwgW3N0YXRlXSk7XG4gICgwLCBpbXBvcnRfcmVhY3Q1LnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIG5ld0FwaS5zZXNzaW9uTmFtZSgpLnRoZW4oc2V0U3RhdGUpO1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gbmV3QXBpLm9uQ2hhbmdlKGFzeW5jIChlKSA9PiB7XG4gICAgICBzZXRTdGF0ZShhd2FpdCBuZXdBcGkuc2Vzc2lvbk5hbWUoKSk7XG4gICAgfSk7XG4gICAgbmV3QXBpLmxvYWRGcm9tVXJsKCk7XG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0NS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW1wb3J0X3JlYWN0NS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0NS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IG9uQ2xpY2s6IGNhbGxiYWNrIH0sIHN0YXRlID8gYExvZ291dCBvZiAke3N0YXRlfWAgOiBcIkxvZ2luXCIpKTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci50c3hcbnZhciBidWlsZEJhY2sgPSAoaW5kZXgpID0+IG5ldyBBcnJheShpbmRleCArIDEpLmZpbGwoXCIuLlwiKS5qb2luKFwiL1wiKTtcbnZhciBidWlsZFBhdGggPSAoKSA9PiB7XG4gIGNvbnN0IGhyZWYgPSBnbG9iYWxUaGlzPy53aW5kb3c/LmxvY2F0aW9uLmhyZWY7XG4gIGNvbnN0IHVybCA9IGhyZWYgPyBuZXcgVVJMKGhyZWYpIDogdm9pZCAwO1xuICBjb25zdCBwYXRoID0gdXJsPy5wYXRobmFtZT8uc3BsaXQoXCIvXCIpLmZpbHRlcigoZSkgPT4gZSkgPz8gW107XG4gIHBhdGgucmV2ZXJzZSgpO1xuICBwYXRoLnNwbGljZSgwLCAxKTtcbiAgcGF0aC5yZXZlcnNlKCk7XG4gIHJldHVybiBwYXRoO1xufTtcbnZhciBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgcGF0aCA9IGJ1aWxkUGF0aCgpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGltcG9ydF9yZWFjdDYuRnJhZ21lbnQsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkQ29udGFpbmVyLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLWNvbnRlbnRcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLXRpdGxlXCIgfSwgcHJvcHMuY2hpbGRyZW4pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLWxvZ2luXCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNpZ25JbiwgbnVsbCkpKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJvcmRlci10b3AgaGVhZGVyLXVybC1jaGlwc1wiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBocmVmOiBcIi9cIiB9LCBcIkhvbWVcIikpLCBwYXRoLnJldmVyc2UoKS5tYXAoXG4gICAgKGUsIGluZGV4KSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGUgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExpbmssIHsgaHJlZjogYnVpbGRCYWNrKGluZGV4KSB9LCBlKSlcbiAgKS5yZXZlcnNlKCkpKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9QYWdlLnRzeFxudmFyIHRpbWUgPSAoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCk7XG52YXIgUGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHByb3BzLnRoZW1lID8/IHt9O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vYW51ZC5yby91aV9iYXNlL3NyYy9tYWluLmNzc1wiLCB0eXBlOiBcInRleHQvY3NzXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDQ4LDMwMCwwLC0yNVwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHsgbmFtZTogXCJ2aWV3cG9ydFwiLCBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7IHNyYzogXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanNcIiB9KSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHsgc3JjOiBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9nc2kvY2xpZW50XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7IHNyYzogXCJodHRwczovL2l6aXRvYXN0Lm1hcmNlbG9kb2x6YS5jb20vanMvaXppVG9hc3QubWluLmpzP3Y9MTQwYlwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHsgaHJlZjogXCJodHRwczovL2l6aXRvYXN0Lm1hcmNlbG9kb2x6YS5jb20vY3NzL2l6aVRvYXN0Lm1pbi5jc3M/dj0xNDBhXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFqZGhhbmkmZGlzcGxheT1zd2FwXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFqZGhhbmk6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSkpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21tZW50LCBudWxsLCB0aW1lKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2VcIiwgc3R5bGU6IHtcbiAgICBcIi0tcHJpbWFyeVwiOiB0aGVtZVtcIi0tcHJpbWFyeVwiXSA/PyBcIiMwMDc0Y2NcIixcbiAgICBcIi0tYmFja2dyb3VuZC1jb2xvclwiOiB0aGVtZVtcIi0tYmFja2dyb3VuZC1jb2xvclwiXSA/PyBcIndoaXRlXCIsXG4gICAgXCItLWJvcmRlci1jb2xvclwiOiB0aGVtZVtcIi0tYm9yZGVyLWNvbG9yXCJdID8/IFwiI2M0YzRjNFwiXG4gIH0gfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2UtY29udGVudFwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwsIHByb3BzLnRpdGxlKSwgcHJvcHMuY2hpbGRyZW4pKSkpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvVGFibGUudHN4XG52YXIgaW1wb3J0X3JlYWN0OCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcblxuLy8gc3JjL3NlcnZpY2UvYXJyYXlUb09iamVjdHMudHNcbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XG4gIHZhciBrZXlzID0gYXJyWzBdO1xuICByZXR1cm4gYXJyLnNsaWNlKDEpLm1hcChmdW5jdGlvbihyb3cpIHtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24ob2JqLCBrZXksIGkpIHtcbiAgICAgIG9ialtrZXldID0gcm93W2ldO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gIH0pO1xufVxuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvbG9hZEZyb21TaGVldC50c1xudmFyIGxvYWRGcm9tU2hlZXQgPSAoc291cmNlKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHZhciB1cmwgPSBgaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vdjQvc3ByZWFkc2hlZXRzLyR7c291cmNlfS92YWx1ZXMvU2hlZXQxYDtcbiAgY29uc3QgZ2FwaTIgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgdmFyIGFjY2Vzc1Rva2VuID0gZ2FwaTIuYXV0aC5nZXRUb2tlbigpLmFjY2Vzc190b2tlbjtcbiAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBhY2Nlc3NUb2tlbik7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzXG4gIH07XG4gIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBzcHJlYWRzaGVldCBkYXRhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgcmFuZ2UgPSBkYXRhLnZhbHVlcztcbiAgICByZXNvbHZlKGFycmF5VG9PYmplY3QocmFuZ2UpKTtcbiAgfSk7XG59KS5jYXRjaCgoZSkgPT4ge1xuICB0aHJvdyBlLnJlc3VsdC5lcnJvcjtcbn0pO1xuXG4vLyBzcmMvY29tcG9uZW50cy9UYWJsZS50c3hcbnZhciBUYWJsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSAoMCwgaW1wb3J0X3JlYWN0OC51c2VTdGF0ZSkoW10pO1xuICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhMiA9IGF3YWl0IGxvYWRGcm9tU2hlZXQocHJvcHMuc291cmNlKTtcbiAgICBjb25zdCBjaGFuZ2VkRGF0YSA9IGRhdGEyLm1hcCgoZSkgPT4ge1xuICAgICAgT2JqZWN0LmVudHJpZXMocHJvcHMuY2VsbFZhbHVlcyA/PyB7fSkubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgZnVuYyA9IHZhbHVlO1xuICAgICAgICBlW2tleV0gPSBmdW5jKGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgICBzZXREYXRhKGNoYW5nZWREYXRhKTtcbiAgfTtcbiAgKDAsIGltcG9ydF9yZWFjdDgudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBuZXdBcGkub25DaGFuZ2UobG9hZERhdGEpO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbcHJvcHMuc291cmNlXSk7XG4gIGNvbnN0IGNvbHVtbnMgPSAoMCwgaW1wb3J0X3JlYWN0OC51c2VNZW1vKSgoKSA9PiB7XG4gICAgY29uc3QgY29sdW1uU2V0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICBwcm9wcy5jb2x1bW5PcmRlcj8ubWFwKChlKSA9PiBjb2x1bW5TZXQuYWRkKGUpKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhPy5bMF0gPz8ge30pLm1hcCgoZSkgPT4gY29sdW1uU2V0LmFkZChlKSk7XG4gICAgcmV0dXJuIFsuLi5jb2x1bW5TZXRdO1xuICB9LCBbZGF0YSwgSlNPTi5zdHJpbmdpZnkocHJvcHMuY29sdW1uT3JkZXIpXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW1wb3J0X3JlYWN0OC5GcmFnbWVudCwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250YWluZXIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0YWJsZS1jb250YWluZXJcIiB9LCBkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5sZW5ndGggPiAwICYmIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0YWJsZVwiLCBzdHlsZToge1xuICAgIFwiLS1udW1iZXItb2YtY29sdW1uc1wiOiBjb2x1bW5zLmxlbmd0aCxcbiAgICBcIi0tbnVtYmVyLW9mLXJvd3NcIjogXCIyMFwiXG4gIH0gfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIGNvbHVtbnMubWFwKFxuICAgIChoZWFkZXIsIGpuZGV4KSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGpuZGV4IH0sIGhlYWRlcilcbiAgKSksIGRhdGEubWFwKFxuICAgIChlLCBpbmRleCkgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBpbmRleCwgY2xhc3NOYW1lOiBcInJvd1wiIH0sIGNvbHVtbnMubWFwKFxuICAgICAgKGNvbHVtbikgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBjb2x1bW4gfSwgZVtjb2x1bW5dKVxuICAgICkpXG4gICkpLCAhKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkgJiYgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIHsgc3R5bGU6IHsgd2hpdGVTcGFjZTogXCJicmVhay1zcGFjZXNcIiB9IH0sIFwiRmFpbGVkIHRvIGxvYWQgdGFibGUgXCIsIHByb3BzLnNvdXJjZSwgXCIgUmVhc29uOlwiLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpKSkpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvRm9ybS50c3hcbnZhciBpbXBvcnRfcmVhY3QxMCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL3VwbG9hZFRvRmlsZS50c1xudmFyIHVwbG9hZEZvcm1EYXRhVG9Gb2xkZXIgPSAocGFyZW50SWQsIGRhdGEpID0+IGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBnYXBpMiA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICBjb25zdCBpZFRva2VuID0gZ2FwaTIuY2xpZW50LmdldFRva2VuKCkuYWNjZXNzX3Rva2VuO1xuICByZXR1cm4gZmV0Y2goXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91cGxvYWQvZHJpdmUvdjMvZmlsZXM/dXBsb2FkVHlwZT1yZXN1bWFibGVcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtpZFRva2VufWAsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgIH0pLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6IFwiZm9ybS1kYXRhLmpzb25cIixcbiAgICAgIHBhcmVudHM6IFtwYXJlbnRJZF1cbiAgICB9KVxuICB9KS50aGVuKGFzeW5jIChhcGlSZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiBmZXRjaChhd2FpdCBhcGlSZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpID8/IFwiXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtpZFRva2VufWAsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9KSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvYXRvbXMvVGl0bGUudHN4XG52YXIgaW1wb3J0X3JlYWN0OSA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBUaXRsZSA9IChwcm9wcykgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRpdGxlXCIgfSwgcHJvcHMuY2hpbGRyZW4pO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Gb3JtLnRzeFxudmFyIEZvcm1Db250ZXh0ID0gKDAsIGltcG9ydF9yZWFjdDEwLmNyZWF0ZUNvbnRleHQpKHtcbiAgc3RhdGU6IHt9LFxuICBzZXRTdGF0ZTogKC4uLmFyZ3MpID0+IHtcbiAgfVxufSk7XG52YXIgRm9ybSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9ICgwLCBpbXBvcnRfcmVhY3QxMC51c2VTdGF0ZSkoe30pO1xuICBjb25zdCBvblN1Ym1pdCA9ICgwLCBpbXBvcnRfcmVhY3QxMC51c2VDYWxsYmFjaykoKGV2ZW50KSA9PiB7XG4gICAgdXBsb2FkRm9ybURhdGFUb0ZvbGRlcihwcm9wcy5mb2xkZXJJZCwgc3RhdGUpKGV2ZW50KS50aGVuKCgpID0+IHtcbiAgICAgIGlmICghZ2xvYmFsVGhpcy5kb2N1bWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpemlUb2FzdC5zdWNjZXNzKHtcbiAgICAgICAgaWNvbjogXCJpY29uLXBlcnNvblwiLFxuICAgICAgICB0aXRsZTogXCJVcGxvYWQgc3VjY2VzZnVsbFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b21SaWdodFwiXG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgaWYgKCFnbG9iYWxUaGlzLmRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgdGltZW91dDogMmU0LFxuICAgICAgICB0aXRsZTogYCR7ZS5uYW1lfToke2UubWVzc2FnZX1gLFxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b21SaWdodFwiXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW3N0YXRlXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGltcG9ydF9yZWFjdDEwLkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250YWluZXIsIG51bGwsIHByb3BzLnRpdGxlICYmIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIG51bGwsIHByb3BzLnRpdGxlKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBjbGFzc05hbWU6IFwiZm9ybVwiLCBvblN1Ym1pdDogKGUpID0+IG9uU3VibWl0KGUpIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHsgc3RhdGUsIHNldFN0YXRlIH0gfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRlbnRcIiB9LCBwcm9wcy5jaGlsZHJlbikpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInN1Ym1pdC1jb250YWluZXJcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgbnVsbCwgXCJTdWJtaXRcIikpKSkpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvYXRvbXMvSW5wdXQudHN4XG52YXIgaW1wb3J0X3JlYWN0MTEgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIga2ViYWJUb1NlbnRlbmNlID0gKHN0cikgPT4gc3RyLnNwbGl0KFwiLVwiKS5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKS5qb2luKFwiIFwiKTtcbnZhciBjYW1lbFRvU2VudGVuY2UgPSAoc3RyKSA9PiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKS5yZXBsYWNlKC9eLi8sIChzdHIyKSA9PiBzdHIyLnRvVXBwZXJDYXNlKCkpO1xudmFyIHNuYWtlVG9TZW50ZW5jZSA9IChzdHIpID0+IHN0ci5zcGxpdChcIl9cIikubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSkuam9pbihcIiBcIik7XG52YXIgbG93ZXJjYXNlSWdub3JpbmdHcm91cHMgPSAoc3RyKSA9PiBzdHIucmVwbGFjZUFsbCgvKFthLXpdfFxccykoW0EtWl0pKFthLXpdfFxccykvZywgKG1hdGNoLCBwMSwgcDIsIHAzKSA9PiBwMSArIHAyLnRvTG93ZXJDYXNlKCkgKyBwMyk7XG52YXIgc3RyaW5nVG9TZW50ZW5jZSA9IChzdHIpID0+IHtcbiAgaWYgKHN0ci5pbmNsdWRlcyhcIi1cIikpIHtcbiAgICByZXR1cm4ga2ViYWJUb1NlbnRlbmNlKHN0cik7XG4gIH0gZWxzZSBpZiAoc3RyLmluY2x1ZGVzKFwiX1wiKSkge1xuICAgIHJldHVybiBzbmFrZVRvU2VudGVuY2Uoc3RyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2FtZWxUb1NlbnRlbmNlKHN0cik7XG4gIH1cbn07XG52YXIgZmlsZVRvQmFzZTY0ID0gKGZpbGUpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUocmVhZGVyPy5yZXN1bHQ/LnNwbGl0Py4oXCIsXCIpWzFdKTtcbiAgICB9O1xuICB9KTtcbn07XG52YXIgSW5wdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgc2V0U3RhdGUgfSA9ICgwLCBpbXBvcnRfcmVhY3QxMS51c2VDb250ZXh0KShGb3JtQ29udGV4dCk7XG4gICgwLCBpbXBvcnRfcmVhY3QxMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICBwcm9wcy52YWx1ZSA/PyBzZXRTdGF0ZShwcm9wcy52YWx1ZSk7XG4gIH0sIFtwcm9wcy52YWx1ZV0pO1xuICBjb25zdCByZWYgPSAoMCwgaW1wb3J0X3JlYWN0MTEudXNlUmVmKShudWxsKTtcbiAgKDAsIGltcG9ydF9yZWFjdDExLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIGlmIChwcm9wcy50eXBlICE9PSBcImZpbGVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIHJlZi5jdXJyZW50LnZhbHVlID0gbnVsbDtcbiAgICB9XG4gIH0sIFtwcm9wcy50eXBlLCByZWZdKTtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoMCwgaW1wb3J0X3JlYWN0MTEudXNlQ2FsbGJhY2spKChlKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGU/LnRhcmdldD8uZmlsZXM/LlswXTtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJmaWxlXCIpIHtcbiAgICAgIGZpbGVUb0Jhc2U2NChmaWxlKS50aGVuKChmaWxlRGF0YSkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbcHJvcHMubmFtZV06IHsgZGF0YTogZmlsZURhdGEsIG1pbWVUeXBlOiBmaWxlLnR5cGUgfSB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbcHJvcHMubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9LCBbcHJvcHMudHlwZSwgc2V0U3RhdGUsIHN0YXRlXSk7XG4gIGNvbnN0IHZhbHVlID0gKDAsIGltcG9ydF9yZWFjdDExLnVzZU1lbW8pKCgpID0+IHtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJmaWxlXCIpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZVtTdHJpbmcocHJvcHMubmFtZSldO1xuICB9LCBbc3RhdGVdKTtcbiAgKDAsIGltcG9ydF9yZWFjdDExLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50ICYmIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtwcm9wcy5uYW1lXTogcmVmLmN1cnJlbnQudmFsdWUgfSk7XG4gIH0sIFtyZWYuY3VycmVudF0pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDExLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgY2xhc3NOYW1lOiBcImlucHV0XCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDExLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiaW5wdXQtbmFtZVwiIH0sIGxvd2VyY2FzZUlnbm9yaW5nR3JvdXBzKHN0cmluZ1RvU2VudGVuY2UocHJvcHMubmFtZSkpKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDExLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBcImlucHV0XCIsXG4gICAge1xuICAgICAgcmVmLFxuICAgICAgdHlwZTogcHJvcHMudHlwZSA/PyBcInRleHRcIixcbiAgICAgIHZhbHVlLFxuICAgICAgcmVxdWlyZWQ6IHByb3BzLmlzT3B0aW9uYWwgJiYgZmFsc2UgfHwgdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IHByb3BzLmNhcHR1cmUsXG4gICAgICBhY2NlcHQ6IHByb3BzLmFjY2VwdCxcbiAgICAgIG9uQ2hhbmdlXG4gICAgfVxuICApKTtcbn07XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBJbnB1dCxcbiAgTGluayxcbiAgUGFnZSxcbiAgVGFibGVcbn0pO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIFBhZ2UsIFRhYmxlLCB9IGZyb20gXCJhbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2VcIjtcblxuZXhwb3J0IGNvbnN0IGZvbGRlcklkID0ge1xuICB0cmFzaDogXCIxTndKdVN5UTRyRm9JNkkwN3ZBd2ptbTYyWDN6dUNOeHZcIixcbiAgZGI6IFwiMUJsSFhuSkpQdVd1MF9WRGUtSkFKelowWEFSX01wbEVXNDVUbm1kTWVLZklcIixcbiAgaW1hZ2VzOiBcIjFnZnBMaXRQQVp0V0Y1b21rOTdkQjNJWGJmX2xlV1hQcFwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoXG4gIDxQYWdlIHRpdGxlPVwiQm94ZXNcIj5cbiAgICA8TGluayBocmVmPXtcImFkZFwifT5BZGQ8L0xpbms+XG4gICAgPFRhYmxlIHNvdXJjZT17Zm9sZGVySWQuZGJ9IC8+XG4gIDwvUGFnZT5cbikiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsYUFBTyxVQUFVLFdBQVc7QUFBQTtBQUFBOzs7QUNBNUI7QUFBQTtBQUFBLFVBQUlBLFlBQVcsT0FBTztBQUN0QixVQUFJQyxhQUFZLE9BQU87QUFDdkIsVUFBSUMsb0JBQW1CLE9BQU87QUFDOUIsVUFBSUMscUJBQW9CLE9BQU87QUFDL0IsVUFBSUMsZ0JBQWUsT0FBTztBQUMxQixVQUFJQyxnQkFBZSxPQUFPLFVBQVU7QUFDcEMsVUFBSUMsWUFBVyxDQUFDLFFBQVEsUUFBUTtBQUM5QixpQkFBUyxRQUFRO0FBQ2YsVUFBQUwsV0FBVSxRQUFRLE1BQU0sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLFlBQVksS0FBSyxDQUFDO0FBQUEsTUFDaEU7QUFDQSxVQUFJTSxlQUFjLENBQUMsSUFBSSxNQUFNLFFBQVEsU0FBUztBQUM1QyxZQUFJLFFBQVEsT0FBTyxTQUFTLFlBQVksT0FBTyxTQUFTLFlBQVk7QUFDbEUsbUJBQVMsT0FBT0osbUJBQWtCLElBQUk7QUFDcEMsZ0JBQUksQ0FBQ0UsY0FBYSxLQUFLLElBQUksR0FBRyxLQUFLLFFBQVE7QUFDekMsY0FBQUosV0FBVSxJQUFJLEtBQUssRUFBRSxLQUFLLE1BQU0sS0FBSyxHQUFHLEdBQUcsWUFBWSxFQUFFLE9BQU9DLGtCQUFpQixNQUFNLEdBQUcsTUFBTSxLQUFLLFdBQVcsQ0FBQztBQUFBLFFBQ3ZI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LElBQUksR0FBRyxJQUFJLFFBQVEsTUFBTSxDQUFDO0FBQUEsUUFDdkUsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDO0FBQ2hCLGVBQXVCLCtCQUFlLFFBQVEsY0FBYyxTQUFTLEVBQUUsV0FBVyxRQUFRLEdBQW1CLCtCQUFlLFFBQVEsY0FBYyxRQUFRLEVBQUUsV0FBVyxhQUFhLEdBQUcsd0JBQXdCLGlCQUFpQixNQUFNLElBQUksQ0FBQyxDQUFDLEdBQW1CLCtCQUFlLFFBQVE7QUFBQSxVQUNwUjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQSxNQUFNLE1BQU0sUUFBUTtBQUFBLFlBQ3BCO0FBQUEsWUFDQSxVQUFVLE1BQU0sY0FBYyxTQUFTO0FBQUEsWUFDdkMsU0FBUyxNQUFNO0FBQUEsWUFDZixRQUFRLE1BQU07QUFBQSxZQUNkO0FBQUEsVUFDRjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQTtBQUFBOzs7QUMzZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFrQjtBQUNsQiw2QkFBbUM7QUFFNUIsTUFBTSxXQUFXO0FBQUEsSUFDdEIsT0FBTztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osUUFBUTtBQUFBLEVBQ1Y7QUFFQSxNQUFPLFlBQ0wsNkJBQUFPLFFBQUEsY0FBQyw2QkFBSyxPQUFNLFdBQ1YsNkJBQUFBLFFBQUEsY0FBQyw2QkFBSyxNQUFNLFNBQU8sS0FBRyxHQUN0Qiw2QkFBQUEsUUFBQSxjQUFDLDhCQUFNLFFBQVEsU0FBUyxJQUFJLENBQzlCOyIsCiAgIm5hbWVzIjogWyJfX2NyZWF0ZSIsICJfX2RlZlByb3AiLCAiX19nZXRPd25Qcm9wRGVzYyIsICJfX2dldE93blByb3BOYW1lcyIsICJfX2dldFByb3RvT2YiLCAiX19oYXNPd25Qcm9wIiwgIl9fZXhwb3J0IiwgIl9fY29weVByb3BzIiwgIl9fdG9FU00iLCAiX190b0NvbW1vbkpTIiwgIkxpbmsiLCAiUGFnZSIsICJUYWJsZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0MiIsICJSZWFjdCJdCn0K
