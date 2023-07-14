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

  // index.tsx
  var require_ui = __commonJS({
    "index.tsx"(exports, module) {
      var import_react = __toESM(require_react());
      var import_anud12_github = __toESM(require_lib());
      module.exports = /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Page, { title: "Boxes" }, /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Link, { href: "add" }, "Add"), /* @__PURE__ */ import_react.default.createElement(import_anud12_github.Table, { source: "1BlHXnJJPuWu0_VDe-JAJzZ0XAR_MplEW45TnmdMeKfI" }));
    }
  });
  return require_ui();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsLXBsdWdpbjpyZWFjdCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL2xpYi9pbmRleC5qcyIsICJpbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5SZWFjdCIsICJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgQnV0dG9uOiAoKSA9PiBCdXR0b24sXG4gIEZvcm06ICgpID0+IEZvcm0sXG4gIElucHV0OiAoKSA9PiBJbnB1dCxcbiAgTGluazogKCkgPT4gTGluayxcbiAgUGFnZTogKCkgPT4gUGFnZSxcbiAgVGFibGU6ICgpID0+IFRhYmxlXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvUGFnZS50c3hcbnZhciBpbXBvcnRfcmVhY3Q3ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db21tZW50LnRzeFxudmFyIGltcG9ydF9yZWFjdCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBDb21tZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGA8IS0tICR7Y2hpbGRyZW59IC0tPmAgfSB9KTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci50c3hcbnZhciBpbXBvcnRfcmVhY3Q2ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db250YWluZXIudHN4XG52YXIgaW1wb3J0X3JlYWN0MiA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBDYXJkQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyLWNvbnRhaW5lclwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGNvbnRhaW5lciBjYXJkLWNvbnRhaW5lciAke3Byb3BzLmNsYXNzTmFtZSA/PyBcIlwifWAudHJpbSgpIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hdG9tcy9MaW5rLnRzeFxudmFyIGltcG9ydF9yZWFjdDMgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2dvb2dsZS9jb25maWcudHNcbnZhciBjb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCdFEyV095SVVuYVNXQWhsM3M1UEFfTFprV3RwV3o1aUFcIixcbiAgY2xpZW50SWQ6IFwiOTg1MjgwOTA3MDMxLWZmdmZuYzhwaTBhbmU5OWxzbzlkYmwxbTJsNW9jOW5uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXG4gIHNjb3BlOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHMgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5wcm9maWxlIFwiLFxuICBkaXNjb3ZlcnlEb2NzOiBbXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy9kcml2ZS92My9yZXN0XCJdXG59O1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvbG9hZEdvb2dsZURlcGVuZGVuY2llcy50c1xudmFyIGxvYWRTY3JpcHQgPSAoc3JjKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGlmICghZ2xvYmFsVGhpcy5kb2N1bWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXNvbHZlKCk7XG59KTtcbnZhciBsb2FkR29vZ2xlRGVwZW5kZW5jaWVzID0gUHJvbWlzZS5hbGwoW1xuICBsb2FkU2NyaXB0KFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzXCIpLFxuICBsb2FkU2NyaXB0KFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2dzaS9jbGllbnRcIilcbl0pO1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvZ2FwaUNsaWVudFByb21pc2UudHNcbnZhciBnYXBpQ2xpZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gIGF3YWl0IGxvYWRHb29nbGVEZXBlbmRlbmNpZXM7XG4gIGdhcGkubG9hZChcImNsaWVudFwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgZ2FwaS5jbGllbnQuaW5pdCh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBkaXNjb3ZlcnlEb2NzOiBjb25maWcuZGlzY292ZXJ5RG9jc1xuICAgIH0pO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlMikgPT4gZ2FwaS5jbGllbnQubG9hZChcInNoZWV0c1wiLCBcInY0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgcmVzb2x2ZTIoKTtcbiAgICB9KSk7XG4gICAgcmVzb2x2ZShnYXBpKTtcbiAgfSk7XG59KTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL2dldEV4cGlyYXRpb25EYXRlLnRzXG52YXIgZ2V0RXhwaXJhdGlvbkRhdGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gIGNvbnN0IHRva2VuID0gZ2FwaTI/LmF1dGg/LmdldFRva2VuKCk7XG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gcmVzKHZvaWQgMCkpO1xuICB9XG4gIHJldHVybiBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3Rva2VuaW5mbz9hY2Nlc3NfdG9rZW49JHt0b2tlbi5hY2Nlc3NfdG9rZW59YCkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgRXJyb3IoYGdldEV4cGlyYXRpb25EYXRlIHN0YXR1cyAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfVxuICAgIHJldHVybiAoYXdhaXQgcmVzLmpzb24oKSk/LmV4cGlyZXNfaW47XG4gIH0pO1xufTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL3Rva2VuQ2xpZW50UHJvbWlzZS50c1xudmFyIHRva2VuQ2xpZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXMpID0+IHtcbiAgYXdhaXQgbG9hZEdvb2dsZURlcGVuZGVuY2llcztcbiAgY29uc3QgdG9rZW5DbGllbnQgPSBnb29nbGUuYWNjb3VudHMub2F1dGgyLmluaXRUb2tlbkNsaWVudCh7XG4gICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50SWQsXG4gICAgc2NvcGU6IGNvbmZpZy5zY29wZSxcbiAgICByZWRpcmVjdF91cmk6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsXG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICB9XG4gIH0pO1xuICByZXModG9rZW5DbGllbnQpO1xufSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2ltcGwvbmV3QXBpLnRzXG5mdW5jdGlvbiBhZGRRdWVyeVBhcmFtKHZhbHVlKSB7XG4gIGNvbnN0IG5ld1VybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICBuZXdVcmwuaGFzaCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybC5ocmVmKTtcbn1cbnZhciBuZXdBcGkgPSB7XG4gIHNlc3Npb25OYW1lOiAoKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgZ2FwaTIuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgXCJwYXRoXCI6IFwiaHR0cHM6Ly9wZW9wbGUuZ29vZ2xlYXBpcy5jb20vdjEvcGVvcGxlL21lP3BlcnNvbkZpZWxkcz1uYW1lc1wiLFxuICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgIFwiY2FsbGJhY2tcIjogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZT8ubmFtZXM/LlswXT8uZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSxcbiAgbG9hZEZyb21Vcmw6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnYXBpMiA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzRnJvbVVybCA9IGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKSk7XG4gICAgaWYgKGNyZWRlbnRpYWxzRnJvbVVybCkge1xuICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBKU09OLnBhcnNlKGNyZWRlbnRpYWxzRnJvbVVybCk7XG4gICAgICBhd2FpdCBnYXBpMi5jbGllbnQuaW5pdCh7fSk7XG4gICAgICBnYXBpMi5jbGllbnQuc2V0VG9rZW4oY3JlZGVudGlhbHMpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuZXdBcGktb25DaGFuZ2VcIikpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIG9uQ2hhbmdlOiAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBmbiA9IChldmVudCkgPT4ge1xuICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH07XG4gICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJuZXdBcGktb25DaGFuZ2VcIiwgZm4pO1xuICAgIHJldHVybiAoKSA9PiBnbG9iYWxUaGlzPy5kb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm5ld0FwaS1vbkNoYW5nZVwiLCBmbik7XG4gIH0sXG4gIGxvZ291dDogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgZ2FwaTIuY2xpZW50LnNldFRva2VuKG51bGwpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm5ld0FwaS1vbkNoYW5nZVwiKSk7XG4gIH0sXG4gIGxvZ2luOiBhc3luYyAoKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHRva2VuQ2xpZW50ID0gYXdhaXQgdG9rZW5DbGllbnRQcm9taXNlO1xuICAgIHRyeSB7XG4gICAgICBpZiAoYXdhaXQgbmV3QXBpLmxvYWRGcm9tVXJsKCkpIHtcbiAgICAgICAgYXdhaXQgZ2V0RXhwaXJhdGlvbkRhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgICB0b2tlbkNsaWVudC5jYWxsYmFjayA9IChjcmVkZW50aWFsc1Jlc3BvbnNlKSA9PiB7XG4gICAgICBhZGRRdWVyeVBhcmFtKGNyZWRlbnRpYWxzUmVzcG9uc2UpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuZXdBcGktb25DaGFuZ2VcIikpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG4gICAgdG9rZW5DbGllbnQucmVxdWVzdEFjY2Vzc1Rva2VuKHsgcHJvbXB0OiBcImNvbnNlbnRcIiB9KTtcbiAgfSlcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL2F0b21zL0xpbmsudHN4XG52YXIgTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gKDAsIGltcG9ydF9yZWFjdDMudXNlU3RhdGUpKFwiXCIpO1xuICAoMCwgaW1wb3J0X3JlYWN0My51c2VFZmZlY3QpKCgpID0+IHtcbiAgICBzZXRTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgc2V0U2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICB9O1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ld0FwaS5vbkNoYW5nZSgoKSA9PiB7XG4gICAgICBmbigpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmbik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmbik7XG4gICAgICBzdWJzY3JpcHRpb24oKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0My5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImxpbmtcIiwgaHJlZjogcHJvcHMuaHJlZiArIHNlYXJjaFBhcmFtcyB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hcGkvc2lnbkluLnRzeFxudmFyIGltcG9ydF9yZWFjdDUgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9jb21wb25lbnRzL2F0b21zL0J1dHRvbi50c3hcbnZhciBpbXBvcnRfcmVhY3Q0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIEJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDQuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgLi4ucHJvcHMsIGNsYXNzTmFtZTogXCJidXR0b25cIiB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hcGkvc2lnbkluLnRzeFxudmFyIFNpZ25JbiA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSAoMCwgaW1wb3J0X3JlYWN0NS51c2VTdGF0ZSkodm9pZCAwKTtcbiAgY29uc3QgY2FsbGJhY2sgPSAoMCwgaW1wb3J0X3JlYWN0NS51c2VDYWxsYmFjaykoKCkgPT4ge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgbmV3QXBpLmxvZ291dCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXdBcGkubG9naW4oKTtcbiAgfSwgW3N0YXRlXSk7XG4gICgwLCBpbXBvcnRfcmVhY3Q1LnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIG5ld0FwaS5zZXNzaW9uTmFtZSgpLnRoZW4oc2V0U3RhdGUpO1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gbmV3QXBpLm9uQ2hhbmdlKGFzeW5jIChlKSA9PiB7XG4gICAgICBzZXRTdGF0ZShhd2FpdCBuZXdBcGkuc2Vzc2lvbk5hbWUoKSk7XG4gICAgfSk7XG4gICAgbmV3QXBpLmxvYWRGcm9tVXJsKCk7XG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0NS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW1wb3J0X3JlYWN0NS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0NS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IG9uQ2xpY2s6IGNhbGxiYWNrIH0sIHN0YXRlID8gYExvZ291dCBvZiAke3N0YXRlfWAgOiBcIkxvZ2luXCIpKTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci50c3hcbnZhciBidWlsZEJhY2sgPSAoaW5kZXgpID0+IG5ldyBBcnJheShpbmRleCArIDEpLmZpbGwoXCIuLlwiKS5qb2luKFwiL1wiKTtcbnZhciBidWlsZFBhdGggPSAoKSA9PiB7XG4gIGNvbnN0IGhyZWYgPSBnbG9iYWxUaGlzPy53aW5kb3c/LmxvY2F0aW9uLmhyZWY7XG4gIGNvbnN0IHVybCA9IGhyZWYgPyBuZXcgVVJMKGhyZWYpIDogdm9pZCAwO1xuICBjb25zdCBwYXRoID0gdXJsPy5wYXRobmFtZT8uc3BsaXQoXCIvXCIpLmZpbHRlcigoZSkgPT4gZSkgPz8gW107XG4gIHBhdGgucmV2ZXJzZSgpO1xuICBwYXRoLnNwbGljZSgwLCAxKTtcbiAgcGF0aC5yZXZlcnNlKCk7XG4gIHJldHVybiBwYXRoO1xufTtcbnZhciBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgcGF0aCA9IGJ1aWxkUGF0aCgpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGltcG9ydF9yZWFjdDYuRnJhZ21lbnQsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkQ29udGFpbmVyLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLWNvbnRlbnRcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLXRpdGxlXCIgfSwgcHJvcHMuY2hpbGRyZW4pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLWxvZ2luXCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNpZ25JbiwgbnVsbCkpKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJvcmRlci10b3AgaGVhZGVyLXVybC1jaGlwc1wiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBocmVmOiBcIi9cIiB9LCBcIkhvbWVcIikpLCBwYXRoLnJldmVyc2UoKS5tYXAoXG4gICAgKGUsIGluZGV4KSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGUgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExpbmssIHsgaHJlZjogYnVpbGRCYWNrKGluZGV4KSB9LCBlKSlcbiAgKS5yZXZlcnNlKCkpKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9QYWdlLnRzeFxudmFyIHRpbWUgPSAoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCk7XG52YXIgUGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHByb3BzLnRoZW1lID8/IHt9O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vYW51ZC5yby91aV9iYXNlL3NyYy9tYWluLmNzc1wiLCB0eXBlOiBcInRleHQvY3NzXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDQ4LDMwMCwwLC0yNVwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHsgbmFtZTogXCJ2aWV3cG9ydFwiLCBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7IHNyYzogXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanNcIiB9KSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHsgc3JjOiBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9nc2kvY2xpZW50XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7IHNyYzogXCJodHRwczovL2l6aXRvYXN0Lm1hcmNlbG9kb2x6YS5jb20vanMvaXppVG9hc3QubWluLmpzP3Y9MTQwYlwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHsgaHJlZjogXCJodHRwczovL2l6aXRvYXN0Lm1hcmNlbG9kb2x6YS5jb20vY3NzL2l6aVRvYXN0Lm1pbi5jc3M/dj0xNDBhXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFqZGhhbmkmZGlzcGxheT1zd2FwXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFqZGhhbmk6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSkpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21tZW50LCBudWxsLCB0aW1lKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2VcIiwgc3R5bGU6IHtcbiAgICBcIi0tcHJpbWFyeVwiOiB0aGVtZVtcIi0tcHJpbWFyeVwiXSA/PyBcIiMwMDc0Y2NcIixcbiAgICBcIi0tYmFja2dyb3VuZC1jb2xvclwiOiB0aGVtZVtcIi0tYmFja2dyb3VuZC1jb2xvclwiXSA/PyBcIndoaXRlXCIsXG4gICAgXCItLWJvcmRlci1jb2xvclwiOiB0aGVtZVtcIi0tYm9yZGVyLWNvbG9yXCJdID8/IFwiI2M0YzRjNFwiXG4gIH0gfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2UtY29udGVudFwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwsIHByb3BzLnRpdGxlKSwgcHJvcHMuY2hpbGRyZW4pKSkpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvVGFibGUudHN4XG52YXIgaW1wb3J0X3JlYWN0OCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcblxuLy8gc3JjL3NlcnZpY2UvYXJyYXlUb09iamVjdHMudHNcbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XG4gIHZhciBrZXlzID0gYXJyWzBdO1xuICByZXR1cm4gYXJyLnNsaWNlKDEpLm1hcChmdW5jdGlvbihyb3cpIHtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24ob2JqLCBrZXksIGkpIHtcbiAgICAgIG9ialtrZXldID0gcm93W2ldO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gIH0pO1xufVxuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvbG9hZEZyb21TaGVldC50c1xudmFyIGxvYWRGcm9tU2hlZXQgPSAoc291cmNlKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHZhciB1cmwgPSBgaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vdjQvc3ByZWFkc2hlZXRzLyR7c291cmNlfS92YWx1ZXMvU2hlZXQxYDtcbiAgY29uc3QgZ2FwaTIgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgdmFyIGFjY2Vzc1Rva2VuID0gZ2FwaTIuYXV0aC5nZXRUb2tlbigpLmFjY2Vzc190b2tlbjtcbiAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBhY2Nlc3NUb2tlbik7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzXG4gIH07XG4gIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBzcHJlYWRzaGVldCBkYXRhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgcmFuZ2UgPSBkYXRhLnZhbHVlcztcbiAgICByZXNvbHZlKGFycmF5VG9PYmplY3QocmFuZ2UpKTtcbiAgfSk7XG59KS5jYXRjaCgoZSkgPT4ge1xuICB0aHJvdyBlLnJlc3VsdC5lcnJvcjtcbn0pO1xuXG4vLyBzcmMvY29tcG9uZW50cy9UYWJsZS50c3hcbnZhciBUYWJsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSAoMCwgaW1wb3J0X3JlYWN0OC51c2VTdGF0ZSkoW10pO1xuICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhMiA9IGF3YWl0IGxvYWRGcm9tU2hlZXQocHJvcHMuc291cmNlKS5jYXRjaCgoZSkgPT4gZSk7XG4gICAgc2V0RGF0YShkYXRhMik7XG4gIH07XG4gICgwLCBpbXBvcnRfcmVhY3Q4LnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gbmV3QXBpLm9uQ2hhbmdlKGxvYWREYXRhKTtcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgfSwgW3Byb3BzLnNvdXJjZV0pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KGltcG9ydF9yZWFjdDguRnJhZ21lbnQsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkQ29udGFpbmVyLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidGFibGUtY29udGFpbmVyXCIgfSwgZGF0YSBpbnN0YW5jZW9mIEFycmF5ICYmIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0YWJsZVwiLCBzdHlsZTogeyBcIi0tbnVtYmVyLW9mLWNvbHVtbnNcIjogT2JqZWN0LmtleXMoZGF0YT8uWzBdID8/IHt9KS5sZW5ndGgsIFwiLS1udW1iZXItb2Ytcm93c1wiOiBcIjIwXCIgfSB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicm93XCIgfSwgT2JqZWN0LmtleXMoZGF0YT8uWzBdID8/IHt9KS5tYXAoXG4gICAgKGhlYWRlciwgam5kZXgpID0+IC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGtleTogam5kZXggfSwgaGVhZGVyKVxuICApKSwgZGF0YS5tYXAoXG4gICAgKGUsIGluZGV4KSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwicm93XCIgfSwgT2JqZWN0LnZhbHVlcyhlKS5tYXAoXG4gICAgICAoY29sdW1uLCBqbmRleCkgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBqbmRleCB9LCBTdHJpbmcoY29sdW1uKSlcbiAgICApKVxuICApKSwgIShkYXRhIGluc3RhbmNlb2YgQXJyYXkpICYmIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInByZVwiLCB7IHN0eWxlOiB7IHdoaXRlU3BhY2U6IFwiYnJlYWstc3BhY2VzXCIgfSB9LCBcIkZhaWxlZCB0byBsb2FkIHRhYmxlIFwiLCBwcm9wcy5zb3VyY2UsIFwiIFJlYXNvbjpcIiwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKSkpKTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL0Zvcm0udHN4XG52YXIgaW1wb3J0X3JlYWN0MTAgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2dvb2dsZS91cGxvYWRUb0ZpbGUudHNcbnZhciB1cGxvYWRGb3JtRGF0YVRvRm9sZGVyID0gKHBhcmVudElkLCBkYXRhKSA9PiBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZ2FwaTIgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgY29uc3QgaWRUb2tlbiA9IGdhcGkyLmNsaWVudC5nZXRUb2tlbigpLmFjY2Vzc190b2tlbjtcbiAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXBsb2FkL2RyaXZlL3YzL2ZpbGVzP3VwbG9hZFR5cGU9cmVzdW1hYmxlXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7aWRUb2tlbn1gLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICB9KSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuYW1lOiBcImZvcm0tZGF0YS5qc29uXCIsXG4gICAgICBwYXJlbnRzOiBbcGFyZW50SWRdXG4gICAgfSlcbiAgfSkudGhlbihhc3luYyAoYXBpUmVzcG9uc2UpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goYXdhaXQgYXBpUmVzcG9uc2UuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKSA/PyBcIlwiLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7aWRUb2tlbn1gLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSksXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL2F0b21zL1RpdGxlLnRzeFxudmFyIGltcG9ydF9yZWFjdDkgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgVGl0bGUgPSAocHJvcHMpID0+IC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q5LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0aXRsZVwiIH0sIHByb3BzLmNoaWxkcmVuKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvRm9ybS50c3hcbnZhciBGb3JtQ29udGV4dCA9ICgwLCBpbXBvcnRfcmVhY3QxMC5jcmVhdGVDb250ZXh0KSh7XG4gIHN0YXRlOiB7fSxcbiAgc2V0U3RhdGU6ICguLi5hcmdzKSA9PiB7XG4gIH1cbn0pO1xudmFyIEZvcm0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSAoMCwgaW1wb3J0X3JlYWN0MTAudXNlU3RhdGUpKHt9KTtcbiAgY29uc3Qgb25TdWJtaXQgPSAoMCwgaW1wb3J0X3JlYWN0MTAudXNlQ2FsbGJhY2spKChldmVudCkgPT4ge1xuICAgIHVwbG9hZEZvcm1EYXRhVG9Gb2xkZXIocHJvcHMuZm9sZGVySWQsIHN0YXRlKShldmVudCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoIWdsb2JhbFRoaXMuZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgIGljb246IFwiaWNvbi1wZXJzb25cIixcbiAgICAgICAgdGl0bGU6IFwiVXBsb2FkIHN1Y2Nlc2Z1bGxcIixcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tUmlnaHRcIlxuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIGlmICghZ2xvYmFsVGhpcy5kb2N1bWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgIHRpbWVvdXQ6IDJlNCxcbiAgICAgICAgdGl0bGU6IGAke2UubmFtZX06JHtlLm1lc3NhZ2V9YCxcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tUmlnaHRcIlxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtzdGF0ZV0pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChpbXBvcnRfcmVhY3QxMC5GcmFnbWVudCwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkQ29udGFpbmVyLCBudWxsLCBwcm9wcy50aXRsZSAmJiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRpdGxlLCBudWxsLCBwcm9wcy50aXRsZSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgY2xhc3NOYW1lOiBcImZvcm1cIiwgb25TdWJtaXQ6IChlKSA9PiBvblN1Ym1pdChlKSB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEZvcm1Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7IHN0YXRlLCBzZXRTdGF0ZSB9IH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250ZW50XCIgfSwgcHJvcHMuY2hpbGRyZW4pKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzdWJtaXQtY29udGFpbmVyXCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCdXR0b24sIG51bGwsIFwiU3VibWl0XCIpKSkpKTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL2F0b21zL0lucHV0LnRzeFxudmFyIGltcG9ydF9yZWFjdDExID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGtlYmFiVG9TZW50ZW5jZSA9IChzdHIpID0+IHN0ci5zcGxpdChcIi1cIikubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSkuam9pbihcIiBcIik7XG52YXIgY2FtZWxUb1NlbnRlbmNlID0gKHN0cikgPT4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIikucmVwbGFjZSgvXi4vLCAoc3RyMikgPT4gc3RyMi50b1VwcGVyQ2FzZSgpKTtcbnZhciBzbmFrZVRvU2VudGVuY2UgPSAoc3RyKSA9PiBzdHIuc3BsaXQoXCJfXCIpLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpLmpvaW4oXCIgXCIpO1xudmFyIGxvd2VyY2FzZUlnbm9yaW5nR3JvdXBzID0gKHN0cikgPT4gc3RyLnJlcGxhY2VBbGwoLyhbYS16XXxcXHMpKFtBLVpdKShbYS16XXxcXHMpL2csIChtYXRjaCwgcDEsIHAyLCBwMykgPT4gcDEgKyBwMi50b0xvd2VyQ2FzZSgpICsgcDMpO1xudmFyIHN0cmluZ1RvU2VudGVuY2UgPSAoc3RyKSA9PiB7XG4gIGlmIChzdHIuaW5jbHVkZXMoXCItXCIpKSB7XG4gICAgcmV0dXJuIGtlYmFiVG9TZW50ZW5jZShzdHIpO1xuICB9IGVsc2UgaWYgKHN0ci5pbmNsdWRlcyhcIl9cIikpIHtcbiAgICByZXR1cm4gc25ha2VUb1NlbnRlbmNlKHN0cik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNhbWVsVG9TZW50ZW5jZShzdHIpO1xuICB9XG59O1xudmFyIGZpbGVUb0Jhc2U2NCA9IChmaWxlKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGlmICghZmlsZSkge1xuICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHJlYWRlcj8ucmVzdWx0Py5zcGxpdD8uKFwiLFwiKVsxXSk7XG4gICAgfTtcbiAgfSk7XG59O1xudmFyIElucHV0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIHNldFN0YXRlIH0gPSAoMCwgaW1wb3J0X3JlYWN0MTEudXNlQ29udGV4dCkoRm9ybUNvbnRleHQpO1xuICBjb25zdCByZWYgPSAoMCwgaW1wb3J0X3JlYWN0MTEudXNlUmVmKShudWxsKTtcbiAgKDAsIGltcG9ydF9yZWFjdDExLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIGlmIChwcm9wcy50eXBlICE9PSBcImZpbGVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIHJlZi5jdXJyZW50LnZhbHVlID0gbnVsbDtcbiAgICB9XG4gIH0sIFtwcm9wcy50eXBlLCByZWZdKTtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoMCwgaW1wb3J0X3JlYWN0MTEudXNlQ2FsbGJhY2spKChlKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGU/LnRhcmdldD8uZmlsZXM/LlswXTtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJmaWxlXCIpIHtcbiAgICAgIGZpbGVUb0Jhc2U2NChmaWxlKS50aGVuKChmaWxlRGF0YSkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbcHJvcHMubmFtZV06IHsgZGF0YTogZmlsZURhdGEsIG1pbWVUeXBlOiBmaWxlLnR5cGUgfSB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbcHJvcHMubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9LCBbcHJvcHMudHlwZSwgc2V0U3RhdGUsIHN0YXRlXSk7XG4gIGNvbnN0IHZhbHVlID0gKDAsIGltcG9ydF9yZWFjdDExLnVzZU1lbW8pKCgpID0+IHtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJmaWxlXCIpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZVtwcm9wcy5uYW1lXTtcbiAgfSwgW3N0YXRlXSk7XG4gICgwLCBpbXBvcnRfcmVhY3QxMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICByZWYuY3VycmVudCAmJiBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbcHJvcHMubmFtZV06IHJlZi5jdXJyZW50LnZhbHVlIH0pO1xuICB9LCBbcmVmLmN1cnJlbnRdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGNsYXNzTmFtZTogXCJpbnB1dFwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImlucHV0LW5hbWVcIiB9LCBsb3dlcmNhc2VJZ25vcmluZ0dyb3VwcyhzdHJpbmdUb1NlbnRlbmNlKHByb3BzLm5hbWUpKSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJpbnB1dFwiLFxuICAgIHtcbiAgICAgIHJlZixcbiAgICAgIHR5cGU6IHByb3BzLnR5cGUgPz8gXCJ0ZXh0XCIsXG4gICAgICB2YWx1ZSxcbiAgICAgIHJlcXVpcmVkOiBwcm9wcy5pc09wdGlvbmFsICYmIGZhbHNlIHx8IHRydWUsXG4gICAgICBjYXB0dXJlOiBwcm9wcy5jYXB0dXJlLFxuICAgICAgYWNjZXB0OiBwcm9wcy5hY2NlcHQsXG4gICAgICBvbkNoYW5nZVxuICAgIH1cbiAgKSk7XG59O1xuLy8gQW5ub3RhdGUgdGhlIENvbW1vbkpTIGV4cG9ydCBuYW1lcyBmb3IgRVNNIGltcG9ydCBpbiBub2RlOlxuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJ1dHRvbixcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIExpbmssXG4gIFBhZ2UsXG4gIFRhYmxlXG59KTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmssIFBhZ2UsIFRhYmxlLH0gZnJvbSBcImFudWQxMi5naXRodWIuaW9fdWlfYmFzZVwiO1xuXG5leHBvcnQgPSAoXG4gIDxQYWdlIHRpdGxlPVwiQm94ZXNcIj5cbiAgICA8TGluayBocmVmPXtcImFkZFwifT5BZGQ8L0xpbms+XG4gICAgPFRhYmxlIHNvdXJjZT1cIjFCbEhYbkpKUHVXdTBfVkRlLUpBSnpaMFhBUl9NcGxFVzQ1VG5tZE1lS2ZJXCIvPlxuICA8L1BhZ2U+XG4pIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxhQUFPLFVBQVUsV0FBVztBQUFBO0FBQUE7OztBQ0E1QjtBQUFBO0FBQUEsVUFBSUEsWUFBVyxPQUFPO0FBQ3RCLFVBQUlDLGFBQVksT0FBTztBQUN2QixVQUFJQyxvQkFBbUIsT0FBTztBQUM5QixVQUFJQyxxQkFBb0IsT0FBTztBQUMvQixVQUFJQyxnQkFBZSxPQUFPO0FBQzFCLFVBQUlDLGdCQUFlLE9BQU8sVUFBVTtBQUNwQyxVQUFJLFdBQVcsQ0FBQyxRQUFRLFFBQVE7QUFDOUIsaUJBQVMsUUFBUTtBQUNmLFVBQUFKLFdBQVUsUUFBUSxNQUFNLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxZQUFZLEtBQUssQ0FBQztBQUFBLE1BQ2hFO0FBQ0EsVUFBSUssZUFBYyxDQUFDLElBQUksTUFBTSxRQUFRLFNBQVM7QUFDNUMsWUFBSSxRQUFRLE9BQU8sU0FBUyxZQUFZLE9BQU8sU0FBUyxZQUFZO0FBQ2xFLG1CQUFTLE9BQU9ILG1CQUFrQixJQUFJO0FBQ3BDLGdCQUFJLENBQUNF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akMsY0FBSSxNQUFNLFNBQVMsUUFBUTtBQUN6Qix5QkFBYSxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWE7QUFDcEMsdUJBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxFQUFFLENBQUM7QUFBQSxZQUM5RSxDQUFDO0FBQ0Q7QUFBQSxVQUNGO0FBQ0EsbUJBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUEsUUFDckQsR0FBRyxDQUFDLE1BQU0sTUFBTSxVQUFVLEtBQUssQ0FBQztBQUNoQyxjQUFNLFNBQVMsR0FBRyxlQUFlLFNBQVMsTUFBTTtBQUM5QyxjQUFJLE1BQU0sU0FBUyxRQUFRO0FBQ3pCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPLE1BQU0sTUFBTSxJQUFJO0FBQUEsUUFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUNWLFNBQUMsR0FBRyxlQUFlLFdBQVcsTUFBTTtBQUNsQyxjQUFJLFdBQVcsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksUUFBUSxNQUFNLENBQUM7QUFBQSxRQUN2RSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUM7QUFDaEIsZUFBdUIsK0JBQWUsUUFBUSxjQUFjLFNBQVMsRUFBRSxXQUFXLFFBQVEsR0FBbUIsK0JBQWUsUUFBUSxjQUFjLFFBQVEsRUFBRSxXQUFXLGFBQWEsR0FBRyx3QkFBd0IsaUJBQWlCLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBbUIsK0JBQWUsUUFBUTtBQUFBLFVBQ3BSO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBLE1BQU0sTUFBTSxRQUFRO0FBQUEsWUFDcEI7QUFBQSxZQUNBLFVBQVUsTUFBTSxjQUFjLFNBQVM7QUFBQSxZQUN2QyxTQUFTLE1BQU07QUFBQSxZQUNmLFFBQVEsTUFBTTtBQUFBLFlBQ2Q7QUFBQSxVQUNGO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUFBO0FBQUE7OztBQ3hjQTtBQUFBO0FBQUEseUJBQWtCO0FBQ2xCLGlDQUFpQztBQUVqQyx1QkFDRSw2QkFBQUMsUUFBQSxjQUFDLDZCQUFLLE9BQU0sV0FDViw2QkFBQUEsUUFBQSxjQUFDLDZCQUFLLE1BQU0sU0FBTyxLQUFHLEdBQ3RCLDZCQUFBQSxRQUFBLGNBQUMsOEJBQU0sUUFBTyxnREFBOEMsQ0FDOUQ7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJfX2NyZWF0ZSIsICJfX2RlZlByb3AiLCAiX19nZXRPd25Qcm9wRGVzYyIsICJfX2dldE93blByb3BOYW1lcyIsICJfX2dldFByb3RvT2YiLCAiX19oYXNPd25Qcm9wIiwgIl9fY29weVByb3BzIiwgIl9fdG9FU00iLCAiUmVhY3QiXQp9Cg==
