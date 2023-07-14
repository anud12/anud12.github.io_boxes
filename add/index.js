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
      var __export = (target, all) => {
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
      var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
      var src_exports = {};
      __export(src_exports, {
        Button: () => Button,
        Form: () => Form,
        Input: () => Input,
        Link: () => Link,
        Page: () => Page,
        Table: () => Table
      });
      module.exports = __toCommonJS(src_exports);
      var import_react7 = __toESM2(require_react());
      var import_react = __toESM2(require_react());
      var Comment = ({ children }) => {
        return /* @__PURE__ */ import_react.default.createElement("div", { dangerouslySetInnerHTML: { __html: `<!-- ${children} -->` } });
      };
      var import_react6 = __toESM2(require_react());
      var import_react2 = __toESM2(require_react());
      var CardContainer = (props) => {
        return /* @__PURE__ */ import_react2.default.createElement("div", { className: "container-container" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: `container card-container ${props.className ?? ""}`.trim() }, props.children));
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
      var Link = (props) => {
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
        return /* @__PURE__ */ import_react6.default.createElement(import_react6.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(CardContainer, null, /* @__PURE__ */ import_react6.default.createElement("div", { className: "header-content" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "header-title" }, props.children), /* @__PURE__ */ import_react6.default.createElement("div", { className: "header-login" }, /* @__PURE__ */ import_react6.default.createElement(SignIn, null))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "border-top header-url-chips" }, /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement(Link, { href: "/" }, "Home")), path.reverse().map(
          (e, index) => /* @__PURE__ */ import_react6.default.createElement("div", { key: e }, /* @__PURE__ */ import_react6.default.createElement(Link, { href: buildBack(index) }, e))
        ).reverse())));
      };
      var time = (/* @__PURE__ */ new Date()).toISOString();
      var Page = (props) => {
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
      var Table = (props) => {
        const [data, setData] = (0, import_react8.useState)([]);
        const loadData = async () => {
          const data2 = await loadFromSheet(props.source).catch((e) => e);
          setData(data2);
        };
        (0, import_react8.useEffect)(() => {
          const unsubscribe = newApi.onChange(loadData);
          return () => unsubscribe();
        }, [props.source]);
        return /* @__PURE__ */ import_react8.default.createElement(import_react8.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(CardContainer, null, /* @__PURE__ */ import_react8.default.createElement("div", { className: "table-container" }, data instanceof Array && /* @__PURE__ */ import_react8.default.createElement("div", { className: "table", style: { "--number-of-columns": Object.keys(data?.[0] ?? {}).length, "--number-of-rows": "20" } }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "row" }, Object.keys(data?.[0] ?? {}).map(
          (header, jndex) => /* @__PURE__ */ import_react8.default.createElement("div", { key: jndex }, header)
        )), data.map(
          (e, index) => /* @__PURE__ */ import_react8.default.createElement("div", { key: index, className: "row" }, Object.values(e).map(
            (column, jndex) => /* @__PURE__ */ import_react8.default.createElement("div", { key: jndex }, String(column))
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
          return state[props.name];
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

  // index_add.tsx
  var require_index_add = __commonJS({
    "index_add.tsx"(exports, module) {
      var import_react = __toESM(require_react());
      var import_anud12_github = __toESM(require_lib());
      module.exports = /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Page, { title: "Boxes Add" }, /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Form, { folderId: "11zqF7BKA-7hvcONuSmbU2RGHrxmLafNl" }, /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Input, { name: "name", type: "text" }), /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Input, { name: "image", type: "file", accept: "image/*", capture: "environment" }), /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Input, { name: "months", type: "number" })));
    }
  });
  return require_index_add();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsLXBsdWdpbjpyZWFjdCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL2xpYi9pbmRleC5qcyIsICJpbmRleF9hZGQudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuUmVhY3QiLCAidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gIEJ1dHRvbjogKCkgPT4gQnV0dG9uLFxuICBGb3JtOiAoKSA9PiBGb3JtLFxuICBJbnB1dDogKCkgPT4gSW5wdXQsXG4gIExpbms6ICgpID0+IExpbmssXG4gIFBhZ2U6ICgpID0+IFBhZ2UsXG4gIFRhYmxlOiAoKSA9PiBUYWJsZVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhzcmNfZXhwb3J0cyk7XG5cbi8vIHNyYy9jb21wb25lbnRzL1BhZ2UudHN4XG52YXIgaW1wb3J0X3JlYWN0NyA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvQ29tbWVudC50c3hcbnZhciBpbXBvcnRfcmVhY3QgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgQ29tbWVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBgPCEtLSAke2NoaWxkcmVufSAtLT5gIH0gfSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9IZWFkZXIudHN4XG52YXIgaW1wb3J0X3JlYWN0NiA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLnRzeFxudmFyIGltcG9ydF9yZWFjdDIgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgQ2FyZENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lci1jb250YWluZXJcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBjb250YWluZXIgY2FyZC1jb250YWluZXIgJHtwcm9wcy5jbGFzc05hbWUgPz8gXCJcIn1gLnRyaW0oKSB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvYXRvbXMvTGluay50c3hcbnZhciBpbXBvcnRfcmVhY3QzID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvY29uZmlnLnRzXG52YXIgY29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QnRRMldPeUlVbmFTV0FobDNzNVBBX0xaa1d0cFd6NWlBXCIsXG4gIGNsaWVudElkOiBcIjk4NTI4MDkwNzAzMS1mZnZmbmM4cGkwYW5lOTlsc285ZGJsMW0ybDVvYzlubi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiLFxuICBzY29wZTogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvdXNlcmluZm8ucHJvZmlsZSBcIixcbiAgZGlzY292ZXJ5RG9jczogW1wiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZGlzY292ZXJ5L3YxL2FwaXMvZHJpdmUvdjMvcmVzdFwiXVxufTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL2xvYWRHb29nbGVEZXBlbmRlbmNpZXMudHNcbnZhciBsb2FkU2NyaXB0ID0gKHNyYykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBpZiAoIWdsb2JhbFRoaXMuZG9jdW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVzb2x2ZSgpO1xufSk7XG52YXIgbG9hZEdvb2dsZURlcGVuZGVuY2llcyA9IFByb21pc2UuYWxsKFtcbiAgbG9hZFNjcmlwdChcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qc1wiKSxcbiAgbG9hZFNjcmlwdChcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9nc2kvY2xpZW50XCIpXG5dKTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL2dhcGlDbGllbnRQcm9taXNlLnRzXG52YXIgZ2FwaUNsaWVudFByb21pc2UgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICBhd2FpdCBsb2FkR29vZ2xlRGVwZW5kZW5jaWVzO1xuICBnYXBpLmxvYWQoXCJjbGllbnRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGdhcGkuY2xpZW50LmluaXQoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgZGlzY292ZXJ5RG9jczogY29uZmlnLmRpc2NvdmVyeURvY3NcbiAgICB9KTtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZTIpID0+IGdhcGkuY2xpZW50LmxvYWQoXCJzaGVldHNcIiwgXCJ2NFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHJlc29sdmUyKCk7XG4gICAgfSkpO1xuICAgIHJlc29sdmUoZ2FwaSk7XG4gIH0pO1xufSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2dvb2dsZS9nZXRFeHBpcmF0aW9uRGF0ZS50c1xudmFyIGdldEV4cGlyYXRpb25EYXRlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBnYXBpMiA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICBjb25zdCB0b2tlbiA9IGdhcGkyPy5hdXRoPy5nZXRUb2tlbigpO1xuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHJlcyh2b2lkIDApKTtcbiAgfVxuICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS90b2tlbmluZm8/YWNjZXNzX3Rva2VuPSR7dG9rZW4uYWNjZXNzX3Rva2VufWApLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IEVycm9yKGBnZXRFeHBpcmF0aW9uRGF0ZSBzdGF0dXMgJHtyZXMuc3RhdHVzfWApO1xuICAgIH1cbiAgICByZXR1cm4gKGF3YWl0IHJlcy5qc29uKCkpPy5leHBpcmVzX2luO1xuICB9KTtcbn07XG5cbi8vIHNyYy9zZXJ2aWNlL2dvb2dsZS90b2tlbkNsaWVudFByb21pc2UudHNcbnZhciB0b2tlbkNsaWVudFByb21pc2UgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzKSA9PiB7XG4gIGF3YWl0IGxvYWRHb29nbGVEZXBlbmRlbmNpZXM7XG4gIGNvbnN0IHRva2VuQ2xpZW50ID0gZ29vZ2xlLmFjY291bnRzLm9hdXRoMi5pbml0VG9rZW5DbGllbnQoe1xuICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudElkLFxuICAgIHNjb3BlOiBjb25maWcuc2NvcGUsXG4gICAgcmVkaXJlY3RfdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiLFxuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgfVxuICB9KTtcbiAgcmVzKHRva2VuQ2xpZW50KTtcbn0pO1xuXG4vLyBzcmMvc2VydmljZS9pbXBsL25ld0FwaS50c1xuZnVuY3Rpb24gYWRkUXVlcnlQYXJhbSh2YWx1ZSkge1xuICBjb25zdCBuZXdVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgbmV3VXJsLmhhc2ggPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBuZXdVcmwuaHJlZik7XG59XG52YXIgbmV3QXBpID0ge1xuICBzZXNzaW9uTmFtZTogKCkgPT4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBnYXBpMiA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICAgIGdhcGkyLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIFwicGF0aFwiOiBcImh0dHBzOi8vcGVvcGxlLmdvb2dsZWFwaXMuY29tL3YxL3Blb3BsZS9tZT9wZXJzb25GaWVsZHM9bmFtZXNcIixcbiAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICBcImNhbGxiYWNrXCI6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2U/Lm5hbWVzPy5bMF0/LmRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSksXG4gIGxvYWRGcm9tVXJsOiBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZ2FwaTIgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgICBjb25zdCBjcmVkZW50aWFsc0Zyb21VcmwgPSBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIikpO1xuICAgIGlmIChjcmVkZW50aWFsc0Zyb21VcmwpIHtcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gSlNPTi5wYXJzZShjcmVkZW50aWFsc0Zyb21VcmwpO1xuICAgICAgYXdhaXQgZ2FwaTIuY2xpZW50LmluaXQoe30pO1xuICAgICAgZ2FwaTIuY2xpZW50LnNldFRva2VuKGNyZWRlbnRpYWxzKTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibmV3QXBpLW9uQ2hhbmdlXCIpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBvbkNoYW5nZTogKGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3QgZm4gPSAoZXZlbnQpID0+IHtcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9O1xuICAgIGdsb2JhbFRoaXM/LmRvY3VtZW50Py5hZGRFdmVudExpc3RlbmVyKFwibmV3QXBpLW9uQ2hhbmdlXCIsIGZuKTtcbiAgICByZXR1cm4gKCkgPT4gZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJuZXdBcGktb25DaGFuZ2VcIiwgZm4pO1xuICB9LFxuICBsb2dvdXQ6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnYXBpMiA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICAgIGdhcGkyLmNsaWVudC5zZXRUb2tlbihudWxsKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuZXdBcGktb25DaGFuZ2VcIikpO1xuICB9LFxuICBsb2dpbjogYXN5bmMgKCkgPT4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCB0b2tlbkNsaWVudCA9IGF3YWl0IHRva2VuQ2xpZW50UHJvbWlzZTtcbiAgICB0cnkge1xuICAgICAgaWYgKGF3YWl0IG5ld0FwaS5sb2FkRnJvbVVybCgpKSB7XG4gICAgICAgIGF3YWl0IGdldEV4cGlyYXRpb25EYXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICB9XG4gICAgdG9rZW5DbGllbnQuY2FsbGJhY2sgPSAoY3JlZGVudGlhbHNSZXNwb25zZSkgPT4ge1xuICAgICAgYWRkUXVlcnlQYXJhbShjcmVkZW50aWFsc1Jlc3BvbnNlKTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibmV3QXBpLW9uQ2hhbmdlXCIpKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuICAgIHRva2VuQ2xpZW50LnJlcXVlc3RBY2Nlc3NUb2tlbih7IHByb21wdDogXCJjb25zZW50XCIgfSk7XG4gIH0pXG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hdG9tcy9MaW5rLnRzeFxudmFyIExpbmsgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXSA9ICgwLCBpbXBvcnRfcmVhY3QzLnVzZVN0YXRlKShcIlwiKTtcbiAgKDAsIGltcG9ydF9yZWFjdDMudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgc2V0U2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgIHNldFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgfTtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBuZXdBcGkub25DaGFuZ2UoKCkgPT4ge1xuICAgICAgZm4oKTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgZm4pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgZm4pO1xuICAgICAgc3Vic2NyaXB0aW9uKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDMuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGNsYXNzTmFtZTogXCJsaW5rXCIsIGhyZWY6IHByb3BzLmhyZWYgKyBzZWFyY2hQYXJhbXMgfSwgcHJvcHMuY2hpbGRyZW4pO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvYXBpL3NpZ25Jbi50c3hcbnZhciBpbXBvcnRfcmVhY3Q1ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvY29tcG9uZW50cy9hdG9tcy9CdXR0b24udHN4XG52YXIgaW1wb3J0X3JlYWN0NCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBCdXR0b24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IC4uLnByb3BzLCBjbGFzc05hbWU6IFwiYnV0dG9uXCIgfSwgcHJvcHMuY2hpbGRyZW4pO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvYXBpL3NpZ25Jbi50c3hcbnZhciBTaWduSW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gKDAsIGltcG9ydF9yZWFjdDUudXNlU3RhdGUpKHZvaWQgMCk7XG4gIGNvbnN0IGNhbGxiYWNrID0gKDAsIGltcG9ydF9yZWFjdDUudXNlQ2FsbGJhY2spKCgpID0+IHtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIG5ld0FwaS5sb2dvdXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3QXBpLmxvZ2luKCk7XG4gIH0sIFtzdGF0ZV0pO1xuICAoMCwgaW1wb3J0X3JlYWN0NS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICBuZXdBcGkuc2Vzc2lvbk5hbWUoKS50aGVuKHNldFN0YXRlKTtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG5ld0FwaS5vbkNoYW5nZShhc3luYyAoZSkgPT4ge1xuICAgICAgc2V0U3RhdGUoYXdhaXQgbmV3QXBpLnNlc3Npb25OYW1lKCkpO1xuICAgIH0pO1xuICAgIG5ld0FwaS5sb2FkRnJvbVVybCgpO1xuICAgIHJldHVybiB1bnN1YnNjcmliZTtcbiAgfSwgW10pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGltcG9ydF9yZWFjdDUuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBvbkNsaWNrOiBjYWxsYmFjayB9LCBzdGF0ZSA/IGBMb2dvdXQgb2YgJHtzdGF0ZX1gIDogXCJMb2dpblwiKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9IZWFkZXIudHN4XG52YXIgYnVpbGRCYWNrID0gKGluZGV4KSA9PiBuZXcgQXJyYXkoaW5kZXggKyAxKS5maWxsKFwiLi5cIikuam9pbihcIi9cIik7XG52YXIgYnVpbGRQYXRoID0gKCkgPT4ge1xuICBjb25zdCBocmVmID0gZ2xvYmFsVGhpcz8ud2luZG93Py5sb2NhdGlvbi5ocmVmO1xuICBjb25zdCB1cmwgPSBocmVmID8gbmV3IFVSTChocmVmKSA6IHZvaWQgMDtcbiAgY29uc3QgcGF0aCA9IHVybD8ucGF0aG5hbWU/LnNwbGl0KFwiL1wiKS5maWx0ZXIoKGUpID0+IGUpID8/IFtdO1xuICBwYXRoLnJldmVyc2UoKTtcbiAgcGF0aC5zcGxpY2UoMCwgMSk7XG4gIHBhdGgucmV2ZXJzZSgpO1xuICByZXR1cm4gcGF0aDtcbn07XG52YXIgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHBhdGggPSBidWlsZFBhdGgoKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChpbXBvcnRfcmVhY3Q2LkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbnRhaW5lciwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImhlYWRlci1jb250ZW50XCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImhlYWRlci10aXRsZVwiIH0sIHByb3BzLmNoaWxkcmVuKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImhlYWRlci1sb2dpblwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChTaWduSW4sIG51bGwpKSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJib3JkZXItdG9wIGhlYWRlci11cmwtY2hpcHNcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExpbmssIHsgaHJlZjogXCIvXCIgfSwgXCJIb21lXCIpKSwgcGF0aC5yZXZlcnNlKCkubWFwKFxuICAgIChlLCBpbmRleCkgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBlIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMaW5rLCB7IGhyZWY6IGJ1aWxkQmFjayhpbmRleCkgfSwgZSkpXG4gICkucmV2ZXJzZSgpKSkpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvUGFnZS50c3hcbnZhciB0aW1lID0gKC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpO1xudmFyIFBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSBwcm9wcy50aGVtZSA/PyB7fTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImh0bWxcIiwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaGVhZFwiLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHsgaHJlZjogXCJodHRwczovL2FudWQucm8vdWlfYmFzZS9zcmMvbWFpbi5jc3NcIiwgdHlwZTogXCJ0ZXh0L2Nzc1wiLCByZWw6IFwic3R5bGVzaGVldFwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREA0OCwzMDAsMCwtMjVcIiB9KSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7IG5hbWU6IFwidmlld3BvcnRcIiwgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwgeyBzcmM6IFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzXCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7IHNyYzogXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vZ3NpL2NsaWVudFwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwgeyBzcmM6IFwiaHR0cHM6Ly9peml0b2FzdC5tYXJjZWxvZG9semEuY29tL2pzL2l6aVRvYXN0Lm1pbi5qcz92PTE0MGJcIiB9KSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7IGhyZWY6IFwiaHR0cHM6Ly9peml0b2FzdC5tYXJjZWxvZG9semEuY29tL2Nzcy9pemlUb2FzdC5taW4uY3NzP3Y9MTQwYVwiLCByZWw6IFwic3R5bGVzaGVldFwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHsgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhamRoYW5pJmRpc3BsYXk9c3dhcFwiLCByZWw6IFwic3R5bGVzaGVldFwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHsgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhamRoYW5pOndnaHRANTAwJmRpc3BsYXk9c3dhcFwiLCByZWw6IFwic3R5bGVzaGVldFwiIH0pKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tbWVudCwgbnVsbCwgdGltZSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwYWdlXCIsIHN0eWxlOiB7XG4gICAgXCItLXByaW1hcnlcIjogdGhlbWVbXCItLXByaW1hcnlcIl0gPz8gXCIjMDA3NGNjXCIsXG4gICAgXCItLWJhY2tncm91bmQtY29sb3JcIjogdGhlbWVbXCItLWJhY2tncm91bmQtY29sb3JcIl0gPz8gXCJ3aGl0ZVwiLFxuICAgIFwiLS1ib3JkZXItY29sb3JcIjogdGhlbWVbXCItLWJvcmRlci1jb2xvclwiXSA/PyBcIiNjNGM0YzRcIlxuICB9IH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwYWdlLWNvbnRlbnRcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsLCBwcm9wcy50aXRsZSksIHByb3BzLmNoaWxkcmVuKSkpKTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL1RhYmxlLnRzeFxudmFyIGltcG9ydF9yZWFjdDggPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2FycmF5VG9PYmplY3RzLnRzXG5mdW5jdGlvbiBhcnJheVRvT2JqZWN0KGFycikge1xuICB2YXIga2V5cyA9IGFyclswXTtcbiAgcmV0dXJuIGFyci5zbGljZSgxKS5tYXAoZnVuY3Rpb24ocm93KSB7XG4gICAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uKG9iaiwga2V5LCBpKSB7XG4gICAgICBvYmpba2V5XSA9IHJvd1tpXTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSwge30pO1xuICB9KTtcbn1cblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL2xvYWRGcm9tU2hlZXQudHNcbnZhciBsb2FkRnJvbVNoZWV0ID0gKHNvdXJjZSkgPT4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICB2YXIgdXJsID0gYGh0dHBzOi8vc2hlZXRzLmdvb2dsZWFwaXMuY29tL3Y0L3NwcmVhZHNoZWV0cy8ke3NvdXJjZX0vdmFsdWVzL1NoZWV0MWA7XG4gIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gIHZhciBhY2Nlc3NUb2tlbiA9IGdhcGkyLmF1dGguZ2V0VG9rZW4oKS5hY2Nlc3NfdG9rZW47XG4gIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgYWNjZXNzVG9rZW4pO1xuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyc1xuICB9O1xuICBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggc3ByZWFkc2hlZXQgZGF0YVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIHJhbmdlID0gZGF0YS52YWx1ZXM7XG4gICAgcmVzb2x2ZShhcnJheVRvT2JqZWN0KHJhbmdlKSk7XG4gIH0pO1xufSkuY2F0Y2goKGUpID0+IHtcbiAgdGhyb3cgZS5yZXN1bHQuZXJyb3I7XG59KTtcblxuLy8gc3JjL2NvbXBvbmVudHMvVGFibGUudHN4XG52YXIgVGFibGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gKDAsIGltcG9ydF9yZWFjdDgudXNlU3RhdGUpKFtdKTtcbiAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YTIgPSBhd2FpdCBsb2FkRnJvbVNoZWV0KHByb3BzLnNvdXJjZSkuY2F0Y2goKGUpID0+IGUpO1xuICAgIHNldERhdGEoZGF0YTIpO1xuICB9O1xuICAoMCwgaW1wb3J0X3JlYWN0OC51c2VFZmZlY3QpKCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG5ld0FwaS5vbkNoYW5nZShsb2FkRGF0YSk7XG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gIH0sIFtwcm9wcy5zb3VyY2VdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChpbXBvcnRfcmVhY3Q4LkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbnRhaW5lciwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRhYmxlLWNvbnRhaW5lclwiIH0sIGRhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidGFibGVcIiwgc3R5bGU6IHsgXCItLW51bWJlci1vZi1jb2x1bW5zXCI6IE9iamVjdC5rZXlzKGRhdGE/LlswXSA/PyB7fSkubGVuZ3RoLCBcIi0tbnVtYmVyLW9mLXJvd3NcIjogXCIyMFwiIH0gfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIE9iamVjdC5rZXlzKGRhdGE/LlswXSA/PyB7fSkubWFwKFxuICAgIChoZWFkZXIsIGpuZGV4KSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGpuZGV4IH0sIGhlYWRlcilcbiAgKSksIGRhdGEubWFwKFxuICAgIChlLCBpbmRleCkgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBpbmRleCwgY2xhc3NOYW1lOiBcInJvd1wiIH0sIE9iamVjdC52YWx1ZXMoZSkubWFwKFxuICAgICAgKGNvbHVtbiwgam5kZXgpID0+IC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGtleTogam5kZXggfSwgU3RyaW5nKGNvbHVtbikpXG4gICAgKSlcbiAgKSksICEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSAmJiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIiwgeyBzdHlsZTogeyB3aGl0ZVNwYWNlOiBcImJyZWFrLXNwYWNlc1wiIH0gfSwgXCJGYWlsZWQgdG8gbG9hZCB0YWJsZSBcIiwgcHJvcHMuc291cmNlLCBcIiBSZWFzb246XCIsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSkpKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9Gb3JtLnRzeFxudmFyIGltcG9ydF9yZWFjdDEwID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvdXBsb2FkVG9GaWxlLnRzXG52YXIgdXBsb2FkRm9ybURhdGFUb0ZvbGRlciA9IChwYXJlbnRJZCwgZGF0YSkgPT4gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gIGNvbnN0IGlkVG9rZW4gPSBnYXBpMi5jbGllbnQuZ2V0VG9rZW4oKS5hY2Nlc3NfdG9rZW47XG4gIHJldHVybiBmZXRjaChcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3VwbG9hZC9kcml2ZS92My9maWxlcz91cGxvYWRUeXBlPXJlc3VtYWJsZVwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2lkVG9rZW59YCxcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgfSksXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogXCJmb3JtLWRhdGEuanNvblwiLFxuICAgICAgcGFyZW50czogW3BhcmVudElkXVxuICAgIH0pXG4gIH0pLnRoZW4oYXN5bmMgKGFwaVJlc3BvbnNlKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGF3YWl0IGFwaVJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIikgPz8gXCJcIiwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2lkVG9rZW59YCxcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0pLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hdG9tcy9UaXRsZS50c3hcbnZhciBpbXBvcnRfcmVhY3Q5ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIFRpdGxlID0gKHByb3BzKSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidGl0bGVcIiB9LCBwcm9wcy5jaGlsZHJlbik7XG5cbi8vIHNyYy9jb21wb25lbnRzL0Zvcm0udHN4XG52YXIgRm9ybUNvbnRleHQgPSAoMCwgaW1wb3J0X3JlYWN0MTAuY3JlYXRlQ29udGV4dCkoe1xuICBzdGF0ZToge30sXG4gIHNldFN0YXRlOiAoLi4uYXJncykgPT4ge1xuICB9XG59KTtcbnZhciBGb3JtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gKDAsIGltcG9ydF9yZWFjdDEwLnVzZVN0YXRlKSh7fSk7XG4gIGNvbnN0IG9uU3VibWl0ID0gKDAsIGltcG9ydF9yZWFjdDEwLnVzZUNhbGxiYWNrKSgoZXZlbnQpID0+IHtcbiAgICB1cGxvYWRGb3JtRGF0YVRvRm9sZGVyKHByb3BzLmZvbGRlcklkLCBzdGF0ZSkoZXZlbnQpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKCFnbG9iYWxUaGlzLmRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICBpY29uOiBcImljb24tcGVyc29uXCIsXG4gICAgICAgIHRpdGxlOiBcIlVwbG9hZCBzdWNjZXNmdWxsXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVJpZ2h0XCJcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBpZiAoIWdsb2JhbFRoaXMuZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICB0aW1lb3V0OiAyZTQsXG4gICAgICAgIHRpdGxlOiBgJHtlLm5hbWV9OiR7ZS5tZXNzYWdlfWAsXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVJpZ2h0XCJcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbc3RhdGVdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW1wb3J0X3JlYWN0MTAuRnJhZ21lbnQsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbnRhaW5lciwgbnVsbCwgcHJvcHMudGl0bGUgJiYgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUaXRsZSwgbnVsbCwgcHJvcHMudGl0bGUpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGNsYXNzTmFtZTogXCJmb3JtXCIsIG9uU3VibWl0OiAoZSkgPT4gb25TdWJtaXQoZSkgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGb3JtQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogeyBzdGF0ZSwgc2V0U3RhdGUgfSB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udGVudFwiIH0sIHByb3BzLmNoaWxkcmVuKSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic3VibWl0LWNvbnRhaW5lclwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIlN1Ym1pdFwiKSkpKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hdG9tcy9JbnB1dC50c3hcbnZhciBpbXBvcnRfcmVhY3QxMSA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBrZWJhYlRvU2VudGVuY2UgPSAoc3RyKSA9PiBzdHIuc3BsaXQoXCItXCIpLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpLmpvaW4oXCIgXCIpO1xudmFyIGNhbWVsVG9TZW50ZW5jZSA9IChzdHIpID0+IHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpLnJlcGxhY2UoL14uLywgKHN0cjIpID0+IHN0cjIudG9VcHBlckNhc2UoKSk7XG52YXIgc25ha2VUb1NlbnRlbmNlID0gKHN0cikgPT4gc3RyLnNwbGl0KFwiX1wiKS5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKS5qb2luKFwiIFwiKTtcbnZhciBsb3dlcmNhc2VJZ25vcmluZ0dyb3VwcyA9IChzdHIpID0+IHN0ci5yZXBsYWNlQWxsKC8oW2Etel18XFxzKShbQS1aXSkoW2Etel18XFxzKS9nLCAobWF0Y2gsIHAxLCBwMiwgcDMpID0+IHAxICsgcDIudG9Mb3dlckNhc2UoKSArIHAzKTtcbnZhciBzdHJpbmdUb1NlbnRlbmNlID0gKHN0cikgPT4ge1xuICBpZiAoc3RyLmluY2x1ZGVzKFwiLVwiKSkge1xuICAgIHJldHVybiBrZWJhYlRvU2VudGVuY2Uoc3RyKTtcbiAgfSBlbHNlIGlmIChzdHIuaW5jbHVkZXMoXCJfXCIpKSB7XG4gICAgcmV0dXJuIHNuYWtlVG9TZW50ZW5jZShzdHIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYW1lbFRvU2VudGVuY2Uoc3RyKTtcbiAgfVxufTtcbnZhciBmaWxlVG9CYXNlNjQgPSAoZmlsZSkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShyZWFkZXI/LnJlc3VsdD8uc3BsaXQ/LihcIixcIilbMV0pO1xuICAgIH07XG4gIH0pO1xufTtcbnZhciBJbnB1dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBzZXRTdGF0ZSB9ID0gKDAsIGltcG9ydF9yZWFjdDExLnVzZUNvbnRleHQpKEZvcm1Db250ZXh0KTtcbiAgY29uc3QgcmVmID0gKDAsIGltcG9ydF9yZWFjdDExLnVzZVJlZikobnVsbCk7XG4gICgwLCBpbXBvcnRfcmVhY3QxMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICBpZiAocHJvcHMudHlwZSAhPT0gXCJmaWxlXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICByZWYuY3VycmVudC52YWx1ZSA9IG51bGw7XG4gICAgfVxuICB9LCBbcHJvcHMudHlwZSwgcmVmXSk7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKDAsIGltcG9ydF9yZWFjdDExLnVzZUNhbGxiYWNrKSgoZSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlPy50YXJnZXQ/LmZpbGVzPy5bMF07XG4gICAgaWYgKHByb3BzLnR5cGUgPT09IFwiZmlsZVwiKSB7XG4gICAgICBmaWxlVG9CYXNlNjQoZmlsZSkudGhlbigoZmlsZURhdGEpID0+IHtcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW3Byb3BzLm5hbWVdOiB7IGRhdGE6IGZpbGVEYXRhLCBtaW1lVHlwZTogZmlsZS50eXBlIH0gfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW3Byb3BzLm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfSwgW3Byb3BzLnR5cGUsIHNldFN0YXRlLCBzdGF0ZV0pO1xuICBjb25zdCB2YWx1ZSA9ICgwLCBpbXBvcnRfcmVhY3QxMS51c2VNZW1vKSgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnR5cGUgPT09IFwiZmlsZVwiKSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVbcHJvcHMubmFtZV07XG4gIH0sIFtzdGF0ZV0pO1xuICAoMCwgaW1wb3J0X3JlYWN0MTEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgJiYgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW3Byb3BzLm5hbWVdOiByZWYuY3VycmVudC52YWx1ZSB9KTtcbiAgfSwgW3JlZi5jdXJyZW50XSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBjbGFzc05hbWU6IFwiaW5wdXRcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJpbnB1dC1uYW1lXCIgfSwgbG93ZXJjYXNlSWdub3JpbmdHcm91cHMoc3RyaW5nVG9TZW50ZW5jZShwcm9wcy5uYW1lKSkpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIFwiaW5wdXRcIixcbiAgICB7XG4gICAgICByZWYsXG4gICAgICB0eXBlOiBwcm9wcy50eXBlID8/IFwidGV4dFwiLFxuICAgICAgdmFsdWUsXG4gICAgICByZXF1aXJlZDogcHJvcHMuaXNPcHRpb25hbCAmJiBmYWxzZSB8fCB0cnVlLFxuICAgICAgY2FwdHVyZTogcHJvcHMuY2FwdHVyZSxcbiAgICAgIGFjY2VwdDogcHJvcHMuYWNjZXB0LFxuICAgICAgb25DaGFuZ2VcbiAgICB9XG4gICkpO1xufTtcbi8vIEFubm90YXRlIHRoZSBDb21tb25KUyBleHBvcnQgbmFtZXMgZm9yIEVTTSBpbXBvcnQgaW4gbm9kZTpcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBCdXR0b24sXG4gIEZvcm0sXG4gIElucHV0LFxuICBMaW5rLFxuICBQYWdlLFxuICBUYWJsZVxufSk7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGb3JtLCBJbnB1dCwgUGFnZX0gZnJvbSBcImFudWQxMi5naXRodWIuaW9fdWlfYmFzZVwiO1xuXG5leHBvcnQgPSAoXG4gIDxQYWdlIHRpdGxlPVwiQm94ZXMgQWRkXCI+XG4gICAgPEZvcm0gZm9sZGVySWQ9XCIxMXpxRjdCS0EtN2h2Y09OdVNtYlUyUkdIcnhtTGFmTmxcIj5cbiAgICAgIDxJbnB1dCBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgPElucHV0IG5hbWU9XCJpbWFnZVwiIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIGNhcHR1cmU9XCJlbnZpcm9ubWVudFwiLz5cbiAgICAgIDxJbnB1dCBuYW1lPVwibW9udGhzXCIgdHlwZT1cIm51bWJlclwiLz5cbiAgICA8L0Zvcm0+XG4gIDwvUGFnZT5cbikiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLGFBQU8sVUFBVSxXQUFXO0FBQUE7QUFBQTs7O0FDQTVCO0FBQUE7QUFBQSxVQUFJQSxZQUFXLE9BQU87QUFDdEIsVUFBSUMsYUFBWSxPQUFPO0FBQ3ZCLFVBQUlDLG9CQUFtQixPQUFPO0FBQzlCLFVBQUlDLHFCQUFvQixPQUFPO0FBQy9CLFVBQUlDLGdCQUFlLE9BQU87QUFDMUIsVUFBSUMsZ0JBQWUsT0FBTyxVQUFVO0FBQ3BDLFVBQUksV0FBVyxDQUFDLFFBQVEsUUFBUTtBQUM5QixpQkFBUyxRQUFRO0FBQ2YsVUFBQUosV0FBVSxRQUFRLE1BQU0sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLFlBQVksS0FB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RTtBQUFBLFlBQ0EsTUFBTSxNQUFNLFFBQVE7QUFBQSxZQUNwQjtBQUFBLFlBQ0EsVUFBVSxNQUFNLGNBQWMsU0FBUztBQUFBLFlBQ3ZDLFNBQVMsTUFBTTtBQUFBLFlBQ2YsUUFBUSxNQUFNO0FBQUEsWUFDZDtBQUFBLFVBQ0Y7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUE7QUFBQTs7O0FDeGNBO0FBQUE7QUFBQSx5QkFBa0I7QUFDbEIsaUNBQWdDO0FBRWhDLHVCQUNFLDZCQUFBQyxRQUFBLGNBQUMsNkJBQUssT0FBTSxlQUNWLDZCQUFBQSxRQUFBLGNBQUMsNkJBQUssVUFBUyx1Q0FDYiw2QkFBQUEsUUFBQSxjQUFDLDhCQUFNLE1BQUssUUFBTyxNQUFLLFFBQU0sR0FDOUIsNkJBQUFBLFFBQUEsY0FBQyw4QkFBTSxNQUFLLFNBQVEsTUFBSyxRQUFPLFFBQU8sV0FBVSxTQUFRLGVBQWEsR0FDdEUsNkJBQUFBLFFBQUEsY0FBQyw4QkFBTSxNQUFLLFVBQVMsTUFBSyxVQUFRLENBQ3BDLENBQ0Y7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJfX2NyZWF0ZSIsICJfX2RlZlByb3AiLCAiX19nZXRPd25Qcm9wRGVzYyIsICJfX2dldE93blByb3BOYW1lcyIsICJfX2dldFByb3RvT2YiLCAiX19oYXNPd25Qcm9wIiwgIl9fY29weVByb3BzIiwgIl9fdG9FU00iLCAiUmVhY3QiXQp9Cg==
