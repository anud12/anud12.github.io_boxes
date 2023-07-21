var mainComponent = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
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
        Form: () => Form2,
        Input: () => Input2,
        Link: () => Link2,
        Page: () => Page3,
        Table: () => Table2
      });
      module.exports = __toCommonJS2(src_exports);
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

  // index_add.tsx
  var index_add_exports = {};
  __export(index_add_exports, {
    addJob: () => addJob,
    createFolderId: () => createFolderId,
    default: () => index_add_default
  });
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
  var import_anud12_github3 = __toESM(__require("anud12.github.io_job_base"));
  var createFolderId = "11zqF7BKA-7hvcONuSmbU2RGHrxmLafNl";
  var index_add_default = /* @__PURE__ */ import_react2.default.createElement(import_anud12_github2.Page, { title: "Boxes Add" }, /* @__PURE__ */ import_react2.default.createElement(import_anud12_github2.Form, { folderId: createFolderId }, /* @__PURE__ */ import_react2.default.createElement(import_anud12_github2.Input, { name: "name", type: "text" }), /* @__PURE__ */ import_react2.default.createElement(import_anud12_github2.Input, { name: "image", type: "file", accept: "image/*", capture: "environment" }), /* @__PURE__ */ import_react2.default.createElement(import_anud12_github2.Input, { name: "months", type: "number" })));
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
  return __toCommonJS(index_add_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsLXBsdWdpbjpyZWFjdCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL2xpYi9pbmRleC5qcyIsICJpbmRleF9hZGQudHN4IiwgImluZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLlJlYWN0IiwgInZhciBfX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0VTTSA9IChtb2QsIGlzTm9kZU1vZGUsIHRhcmdldCkgPT4gKHRhcmdldCA9IG1vZCAhPSBudWxsID8gX19jcmVhdGUoX19nZXRQcm90b09mKG1vZCkpIDoge30sIF9fY29weVByb3BzKFxuICAvLyBJZiB0aGUgaW1wb3J0ZXIgaXMgaW4gbm9kZSBjb21wYXRpYmlsaXR5IG1vZGUgb3IgdGhpcyBpcyBub3QgYW4gRVNNXG4gIC8vIGZpbGUgdGhhdCBoYXMgYmVlbiBjb252ZXJ0ZWQgdG8gYSBDb21tb25KUyBmaWxlIHVzaW5nIGEgQmFiZWwtXG4gIC8vIGNvbXBhdGlibGUgdHJhbnNmb3JtIChpLmUuIFwiX19lc01vZHVsZVwiIGhhcyBub3QgYmVlbiBzZXQpLCB0aGVuIHNldFxuICAvLyBcImRlZmF1bHRcIiB0byB0aGUgQ29tbW9uSlMgXCJtb2R1bGUuZXhwb3J0c1wiIGZvciBub2RlIGNvbXBhdGliaWxpdHkuXG4gIGlzTm9kZU1vZGUgfHwgIW1vZCB8fCAhbW9kLl9fZXNNb2R1bGUgPyBfX2RlZlByb3AodGFyZ2V0LCBcImRlZmF1bHRcIiwgeyB2YWx1ZTogbW9kLCBlbnVtZXJhYmxlOiB0cnVlIH0pIDogdGFyZ2V0LFxuICBtb2RcbikpO1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIHNyY19leHBvcnRzID0ge307XG5fX2V4cG9ydChzcmNfZXhwb3J0cywge1xuICBCdXR0b246ICgpID0+IEJ1dHRvbixcbiAgRm9ybTogKCkgPT4gRm9ybSxcbiAgSW5wdXQ6ICgpID0+IElucHV0LFxuICBMaW5rOiAoKSA9PiBMaW5rLFxuICBQYWdlOiAoKSA9PiBQYWdlLFxuICBUYWJsZTogKCkgPT4gVGFibGVcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xuXG4vLyBzcmMvY29tcG9uZW50cy9QYWdlLnRzeFxudmFyIGltcG9ydF9yZWFjdDcgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9jb21wb25lbnRzL0NvbW1lbnQudHN4XG52YXIgaW1wb3J0X3JlYWN0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIENvbW1lbnQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogYDwhLS0gJHtjaGlsZHJlbn0gLS0+YCB9IH0pO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeFxudmFyIGltcG9ydF9yZWFjdDYgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9jb21wb25lbnRzL0NvbnRhaW5lci50c3hcbnZhciBpbXBvcnRfcmVhY3QyID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIENhcmRDb250YWluZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250YWluZXItY29udGFpbmVyXCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgY29udGFpbmVyIGNhcmQtY29udGFpbmVyICR7cHJvcHMuY2xhc3NOYW1lID8/IFwiXCJ9YC50cmltKCkgfSwgcHJvcHMuY2hpbGRyZW4pKTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL2F0b21zL0xpbmsudHN4XG52YXIgaW1wb3J0X3JlYWN0MyA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL2NvbmZpZy50c1xudmFyIGNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUJ0UTJXT3lJVW5hU1dBaGwzczVQQV9MWmtXdHBXejVpQVwiLFxuICBjbGllbnRJZDogXCI5ODUyODA5MDcwMzEtZmZ2Zm5jOHBpMGFuZTk5bHNvOWRibDFtMmw1b2M5bm4uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIixcbiAgc2NvcGU6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZSBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0cyBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLnByb2ZpbGUgXCIsXG4gIGRpc2NvdmVyeURvY3M6IFtcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL2RyaXZlL3YzL3Jlc3RcIl1cbn07XG5cbi8vIHNyYy9zZXJ2aWNlL2dvb2dsZS9sb2FkR29vZ2xlRGVwZW5kZW5jaWVzLnRzXG52YXIgbG9hZFNjcmlwdCA9IChzcmMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgaWYgKCFnbG9iYWxUaGlzLmRvY3VtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlc29sdmUoKTtcbn0pO1xudmFyIGxvYWRHb29nbGVEZXBlbmRlbmNpZXMgPSBQcm9taXNlLmFsbChbXG4gIGxvYWRTY3JpcHQoXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanNcIiksXG4gIGxvYWRTY3JpcHQoXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vZ3NpL2NsaWVudFwiKVxuXSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2dvb2dsZS9nYXBpQ2xpZW50UHJvbWlzZS50c1xudmFyIGdhcGlDbGllbnRQcm9taXNlID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgYXdhaXQgbG9hZEdvb2dsZURlcGVuZGVuY2llcztcbiAgZ2FwaS5sb2FkKFwiY2xpZW50XCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBnYXBpLmNsaWVudC5pbml0KHtcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgIGRpc2NvdmVyeURvY3M6IGNvbmZpZy5kaXNjb3ZlcnlEb2NzXG4gICAgfSk7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUyKSA9PiBnYXBpLmNsaWVudC5sb2FkKFwic2hlZXRzXCIsIFwidjRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICByZXNvbHZlMigpO1xuICAgIH0pKTtcbiAgICByZXNvbHZlKGdhcGkpO1xuICB9KTtcbn0pO1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvZ2V0RXhwaXJhdGlvbkRhdGUudHNcbnZhciBnZXRFeHBpcmF0aW9uRGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZ2FwaTIgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgY29uc3QgdG9rZW4gPSBnYXBpMj8uYXV0aD8uZ2V0VG9rZW4oKTtcbiAgaWYgKCF0b2tlbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiByZXModm9pZCAwKSk7XG4gIH1cbiAgcmV0dXJuIGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvdG9rZW5pbmZvP2FjY2Vzc190b2tlbj0ke3Rva2VuLmFjY2Vzc190b2tlbn1gKS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICB0aHJvdyBFcnJvcihgZ2V0RXhwaXJhdGlvbkRhdGUgc3RhdHVzICR7cmVzLnN0YXR1c31gKTtcbiAgICB9XG4gICAgcmV0dXJuIChhd2FpdCByZXMuanNvbigpKT8uZXhwaXJlc19pbjtcbiAgfSk7XG59O1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvdG9rZW5DbGllbnRQcm9taXNlLnRzXG52YXIgdG9rZW5DbGllbnRQcm9taXNlID0gbmV3IFByb21pc2UoYXN5bmMgKHJlcykgPT4ge1xuICBhd2FpdCBsb2FkR29vZ2xlRGVwZW5kZW5jaWVzO1xuICBjb25zdCB0b2tlbkNsaWVudCA9IGdvb2dsZS5hY2NvdW50cy5vYXV0aDIuaW5pdFRva2VuQ2xpZW50KHtcbiAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRJZCxcbiAgICBzY29wZTogY29uZmlnLnNjb3BlLFxuICAgIHJlZGlyZWN0X3VyaTogXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIixcbiAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgIH1cbiAgfSk7XG4gIHJlcyh0b2tlbkNsaWVudCk7XG59KTtcblxuLy8gc3JjL3NlcnZpY2UvaW1wbC9uZXdBcGkudHNcbmZ1bmN0aW9uIGFkZFF1ZXJ5UGFyYW0odmFsdWUpIHtcbiAgY29uc3QgbmV3VXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIG5ld1VybC5oYXNoID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgbmV3VXJsLmhyZWYpO1xufVxudmFyIG5ld0FwaSA9IHtcbiAgc2Vzc2lvbk5hbWU6ICgpID0+IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgZ2FwaTIgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgICBnYXBpMi5jbGllbnQucmVxdWVzdCh7XG4gICAgICBcInBhdGhcIjogXCJodHRwczovL3Blb3BsZS5nb29nbGVhcGlzLmNvbS92MS9wZW9wbGUvbWU/cGVyc29uRmllbGRzPW5hbWVzXCIsXG4gICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuICAgICAgXCJjYWxsYmFja1wiOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlPy5uYW1lcz8uWzBdPy5kaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pLFxuICBsb2FkRnJvbVVybDogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgY29uc3QgY3JlZGVudGlhbHNGcm9tVXJsID0gZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpKTtcbiAgICBpZiAoY3JlZGVudGlhbHNGcm9tVXJsKSB7XG4gICAgICBjb25zdCBjcmVkZW50aWFscyA9IEpTT04ucGFyc2UoY3JlZGVudGlhbHNGcm9tVXJsKTtcbiAgICAgIGF3YWl0IGdhcGkyLmNsaWVudC5pbml0KHt9KTtcbiAgICAgIGdhcGkyLmNsaWVudC5zZXRUb2tlbihjcmVkZW50aWFscyk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm5ld0FwaS1vbkNoYW5nZVwiKSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgb25DaGFuZ2U6IChjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IGZuID0gKGV2ZW50KSA9PiB7XG4gICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgfTtcbiAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcIm5ld0FwaS1vbkNoYW5nZVwiLCBmbik7XG4gICAgcmV0dXJuICgpID0+IGdsb2JhbFRoaXM/LmRvY3VtZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKFwibmV3QXBpLW9uQ2hhbmdlXCIsIGZuKTtcbiAgfSxcbiAgbG9nb3V0OiBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZ2FwaTIgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgICBnYXBpMi5jbGllbnQuc2V0VG9rZW4obnVsbCk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibmV3QXBpLW9uQ2hhbmdlXCIpKTtcbiAgfSxcbiAgbG9naW46IGFzeW5jICgpID0+IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgdG9rZW5DbGllbnQgPSBhd2FpdCB0b2tlbkNsaWVudFByb21pc2U7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhd2FpdCBuZXdBcGkubG9hZEZyb21VcmwoKSkge1xuICAgICAgICBhd2FpdCBnZXRFeHBpcmF0aW9uRGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgfVxuICAgIHRva2VuQ2xpZW50LmNhbGxiYWNrID0gKGNyZWRlbnRpYWxzUmVzcG9uc2UpID0+IHtcbiAgICAgIGFkZFF1ZXJ5UGFyYW0oY3JlZGVudGlhbHNSZXNwb25zZSk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm5ld0FwaS1vbkNoYW5nZVwiKSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcbiAgICB0b2tlbkNsaWVudC5yZXF1ZXN0QWNjZXNzVG9rZW4oeyBwcm9tcHQ6IFwiY29uc2VudFwiIH0pO1xuICB9KVxufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvYXRvbXMvTGluay50c3hcbnZhciBMaW5rID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSAoMCwgaW1wb3J0X3JlYWN0My51c2VTdGF0ZSkoXCJcIik7XG4gICgwLCBpbXBvcnRfcmVhY3QzLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIHNldFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgY29uc3QgZm4gPSAoKSA9PiB7XG4gICAgICBzZXRTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgIH07XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3QXBpLm9uQ2hhbmdlKCgpID0+IHtcbiAgICAgIGZuKCk7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGZuKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGZuKTtcbiAgICAgIHN1YnNjcmlwdGlvbigpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QzLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgeyBjbGFzc05hbWU6IFwibGlua1wiLCBocmVmOiBwcm9wcy5ocmVmICsgc2VhcmNoUGFyYW1zIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL2FwaS9zaWduSW4udHN4XG52YXIgaW1wb3J0X3JlYWN0NSA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uLnRzeFxudmFyIGltcG9ydF9yZWFjdDQgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgQnV0dG9uID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0NC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyAuLi5wcm9wcywgY2xhc3NOYW1lOiBcImJ1dHRvblwiIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL2FwaS9zaWduSW4udHN4XG52YXIgU2lnbkluID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9ICgwLCBpbXBvcnRfcmVhY3Q1LnVzZVN0YXRlKSh2b2lkIDApO1xuICBjb25zdCBjYWxsYmFjayA9ICgwLCBpbXBvcnRfcmVhY3Q1LnVzZUNhbGxiYWNrKSgoKSA9PiB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBuZXdBcGkubG9nb3V0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5ld0FwaS5sb2dpbigpO1xuICB9LCBbc3RhdGVdKTtcbiAgKDAsIGltcG9ydF9yZWFjdDUudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgbmV3QXBpLnNlc3Npb25OYW1lKCkudGhlbihzZXRTdGF0ZSk7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBuZXdBcGkub25DaGFuZ2UoYXN5bmMgKGUpID0+IHtcbiAgICAgIHNldFN0YXRlKGF3YWl0IG5ld0FwaS5zZXNzaW9uTmFtZSgpKTtcbiAgICB9KTtcbiAgICBuZXdBcGkubG9hZEZyb21VcmwoKTtcbiAgICByZXR1cm4gdW5zdWJzY3JpYmU7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChpbXBvcnRfcmVhY3Q1LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgb25DbGljazogY2FsbGJhY2sgfSwgc3RhdGUgPyBgTG9nb3V0IG9mICR7c3RhdGV9YCA6IFwiTG9naW5cIikpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeFxudmFyIGJ1aWxkQmFjayA9IChpbmRleCkgPT4gbmV3IEFycmF5KGluZGV4ICsgMSkuZmlsbChcIi4uXCIpLmpvaW4oXCIvXCIpO1xudmFyIGJ1aWxkUGF0aCA9ICgpID0+IHtcbiAgY29uc3QgaHJlZiA9IGdsb2JhbFRoaXM/LndpbmRvdz8ubG9jYXRpb24uaHJlZjtcbiAgY29uc3QgdXJsID0gaHJlZiA/IG5ldyBVUkwoaHJlZikgOiB2b2lkIDA7XG4gIGNvbnN0IHBhdGggPSB1cmw/LnBhdGhuYW1lPy5zcGxpdChcIi9cIikuZmlsdGVyKChlKSA9PiBlKSA/PyBbXTtcbiAgcGF0aC5yZXZlcnNlKCk7XG4gIHBhdGguc3BsaWNlKDAsIDEpO1xuICBwYXRoLnJldmVyc2UoKTtcbiAgcmV0dXJuIHBhdGg7XG59O1xudmFyIEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBwYXRoID0gYnVpbGRQYXRoKCk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW1wb3J0X3JlYWN0Ni5GcmFnbWVudCwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250YWluZXIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJoZWFkZXItY29udGVudFwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJoZWFkZXItdGl0bGVcIiB9LCBwcm9wcy5jaGlsZHJlbiksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJoZWFkZXItbG9naW5cIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2lnbkluLCBudWxsKSkpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYm9yZGVyLXRvcCBoZWFkZXItdXJsLWNoaXBzXCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMaW5rLCB7IGhyZWY6IFwiL1wiIH0sIFwiSG9tZVwiKSksIHBhdGgucmV2ZXJzZSgpLm1hcChcbiAgICAoZSwgaW5kZXgpID0+IC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGtleTogZSB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBocmVmOiBidWlsZEJhY2soaW5kZXgpIH0sIGUpKVxuICApLnJldmVyc2UoKSkpKTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL1BhZ2UudHN4XG52YXIgdGltZSA9ICgvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSkudG9JU09TdHJpbmcoKTtcbnZhciBQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gcHJvcHMudGhlbWUgPz8ge307XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhlYWRcIiwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7IGhyZWY6IFwiaHR0cHM6Ly9hbnVkLnJvL3VpX2Jhc2Uvc3JjL21haW4uY3NzXCIsIHR5cGU6IFwidGV4dC9jc3NcIiwgcmVsOiBcInN0eWxlc2hlZXRcIiB9KSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURANDgsMzAwLDAsLTI1XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwgeyBuYW1lOiBcInZpZXdwb3J0XCIsIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiB9KSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHsgc3JjOiBcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qc1wiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwgeyBzcmM6IFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2dzaS9jbGllbnRcIiB9KSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHsgc3JjOiBcImh0dHBzOi8vaXppdG9hc3QubWFyY2Vsb2RvbHphLmNvbS9qcy9pemlUb2FzdC5taW4uanM/dj0xNDBiXCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vaXppdG9hc3QubWFyY2Vsb2RvbHphLmNvbS9jc3MvaXppVG9hc3QubWluLmNzcz92PTE0MGFcIiwgcmVsOiBcInN0eWxlc2hlZXRcIiB9KSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7IGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWpkaGFuaSZkaXNwbGF5PXN3YXBcIiwgcmVsOiBcInN0eWxlc2hlZXRcIiB9KSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7IGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWpkaGFuaTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIiwgcmVsOiBcInN0eWxlc2hlZXRcIiB9KSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJvZHlcIiwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbW1lbnQsIG51bGwsIHRpbWUpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGFnZVwiLCBzdHlsZToge1xuICAgIFwiLS1wcmltYXJ5XCI6IHRoZW1lW1wiLS1wcmltYXJ5XCJdID8/IFwiIzAwNzRjY1wiLFxuICAgIFwiLS1iYWNrZ3JvdW5kLWNvbG9yXCI6IHRoZW1lW1wiLS1iYWNrZ3JvdW5kLWNvbG9yXCJdID8/IFwid2hpdGVcIixcbiAgICBcIi0tYm9yZGVyLWNvbG9yXCI6IHRoZW1lW1wiLS1ib3JkZXItY29sb3JcIl0gPz8gXCIjYzRjNGM0XCJcbiAgfSB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGFnZS1jb250ZW50XCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgbnVsbCwgcHJvcHMudGl0bGUpLCBwcm9wcy5jaGlsZHJlbikpKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9UYWJsZS50c3hcbnZhciBpbXBvcnRfcmVhY3Q4ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvc2VydmljZS9hcnJheVRvT2JqZWN0cy50c1xuZnVuY3Rpb24gYXJyYXlUb09iamVjdChhcnIpIHtcbiAgdmFyIGtleXMgPSBhcnJbMF07XG4gIHJldHVybiBhcnIuc2xpY2UoMSkubWFwKGZ1bmN0aW9uKHJvdykge1xuICAgIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbihvYmosIGtleSwgaSkge1xuICAgICAgb2JqW2tleV0gPSByb3dbaV07XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sIHt9KTtcbiAgfSk7XG59XG5cbi8vIHNyYy9zZXJ2aWNlL2dvb2dsZS9sb2FkRnJvbVNoZWV0LnRzXG52YXIgbG9hZEZyb21TaGVldCA9IChzb3VyY2UpID0+IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgdmFyIHVybCA9IGBodHRwczovL3NoZWV0cy5nb29nbGVhcGlzLmNvbS92NC9zcHJlYWRzaGVldHMvJHtzb3VyY2V9L3ZhbHVlcy9TaGVldDFgO1xuICBjb25zdCBnYXBpMiA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICB2YXIgYWNjZXNzVG9rZW4gPSBnYXBpMi5hdXRoLmdldFRva2VuKCkuYWNjZXNzX3Rva2VuO1xuICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIGFjY2Vzc1Rva2VuKTtcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnNcbiAgfTtcbiAgZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHNwcmVhZHNoZWV0IGRhdGFcIik7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciByYW5nZSA9IGRhdGEudmFsdWVzO1xuICAgIHJlc29sdmUoYXJyYXlUb09iamVjdChyYW5nZSkpO1xuICB9KTtcbn0pLmNhdGNoKChlKSA9PiB7XG4gIHRocm93IGUucmVzdWx0LmVycm9yO1xufSk7XG5cbi8vIHNyYy9jb21wb25lbnRzL1RhYmxlLnRzeFxudmFyIFRhYmxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9ICgwLCBpbXBvcnRfcmVhY3Q4LnVzZVN0YXRlKShbXSk7XG4gIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEyID0gYXdhaXQgbG9hZEZyb21TaGVldChwcm9wcy5zb3VyY2UpO1xuICAgIGNvbnN0IGNoYW5nZWREYXRhID0gZGF0YTIubWFwKChlKSA9PiB7XG4gICAgICBPYmplY3QuZW50cmllcyhwcm9wcy5jZWxsVmFsdWVzID8/IHt9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBmdW5jID0gdmFsdWU7XG4gICAgICAgIGVba2V5XSA9IGZ1bmMoZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBlO1xuICAgIH0pO1xuICAgIHNldERhdGEoY2hhbmdlZERhdGEpO1xuICB9O1xuICAoMCwgaW1wb3J0X3JlYWN0OC51c2VFZmZlY3QpKCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG5ld0FwaS5vbkNoYW5nZShsb2FkRGF0YSk7XG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gIH0sIFtwcm9wcy5zb3VyY2VdKTtcbiAgY29uc3QgY29sdW1ucyA9ICgwLCBpbXBvcnRfcmVhY3Q4LnVzZU1lbW8pKCgpID0+IHtcbiAgICBjb25zdCBjb2x1bW5TZXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgIHByb3BzLmNvbHVtbk9yZGVyPy5tYXAoKGUpID0+IGNvbHVtblNldC5hZGQoZSkpO1xuICAgIE9iamVjdC5rZXlzKGRhdGE/LlswXSA/PyB7fSkubWFwKChlKSA9PiBjb2x1bW5TZXQuYWRkKGUpKTtcbiAgICByZXR1cm4gWy4uLmNvbHVtblNldF07XG4gIH0sIFtkYXRhLCBKU09OLnN0cmluZ2lmeShwcm9wcy5jb2x1bW5PcmRlcildKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChpbXBvcnRfcmVhY3Q4LkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbnRhaW5lciwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRhYmxlLWNvbnRhaW5lclwiIH0sIGRhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiBkYXRhLmxlbmd0aCA+IDAgJiYgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRhYmxlXCIsIHN0eWxlOiB7XG4gICAgXCItLW51bWJlci1vZi1jb2x1bW5zXCI6IGNvbHVtbnMubGVuZ3RoLFxuICAgIFwiLS1udW1iZXItb2Ytcm93c1wiOiBcIjIwXCJcbiAgfSB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicm93XCIgfSwgY29sdW1ucy5tYXAoXG4gICAgKGhlYWRlciwgam5kZXgpID0+IC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGtleTogam5kZXggfSwgaGVhZGVyKVxuICApKSwgZGF0YS5tYXAoXG4gICAgKGUsIGluZGV4KSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwicm93XCIgfSwgY29sdW1ucy5tYXAoXG4gICAgICAoY29sdW1uKSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGNvbHVtbiB9LCBlW2NvbHVtbl0pXG4gICAgKSlcbiAgKSksICEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSAmJiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIiwgeyBzdHlsZTogeyB3aGl0ZVNwYWNlOiBcImJyZWFrLXNwYWNlc1wiIH0gfSwgXCJGYWlsZWQgdG8gbG9hZCB0YWJsZSBcIiwgcHJvcHMuc291cmNlLCBcIiBSZWFzb246XCIsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSkpKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9Gb3JtLnRzeFxudmFyIGltcG9ydF9yZWFjdDEwID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvdXBsb2FkVG9GaWxlLnRzXG52YXIgdXBsb2FkRm9ybURhdGFUb0ZvbGRlciA9IChwYXJlbnRJZCwgZGF0YSkgPT4gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gIGNvbnN0IGlkVG9rZW4gPSBnYXBpMi5jbGllbnQuZ2V0VG9rZW4oKS5hY2Nlc3NfdG9rZW47XG4gIHJldHVybiBmZXRjaChcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3VwbG9hZC9kcml2ZS92My9maWxlcz91cGxvYWRUeXBlPXJlc3VtYWJsZVwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2lkVG9rZW59YCxcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgfSksXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogXCJmb3JtLWRhdGEuanNvblwiLFxuICAgICAgcGFyZW50czogW3BhcmVudElkXVxuICAgIH0pXG4gIH0pLnRoZW4oYXN5bmMgKGFwaVJlc3BvbnNlKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGF3YWl0IGFwaVJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIikgPz8gXCJcIiwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2lkVG9rZW59YCxcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0pLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hdG9tcy9UaXRsZS50c3hcbnZhciBpbXBvcnRfcmVhY3Q5ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIFRpdGxlID0gKHByb3BzKSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidGl0bGVcIiB9LCBwcm9wcy5jaGlsZHJlbik7XG5cbi8vIHNyYy9jb21wb25lbnRzL0Zvcm0udHN4XG52YXIgRm9ybUNvbnRleHQgPSAoMCwgaW1wb3J0X3JlYWN0MTAuY3JlYXRlQ29udGV4dCkoe1xuICBzdGF0ZToge30sXG4gIHNldFN0YXRlOiAoLi4uYXJncykgPT4ge1xuICB9XG59KTtcbnZhciBGb3JtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gKDAsIGltcG9ydF9yZWFjdDEwLnVzZVN0YXRlKSh7fSk7XG4gIGNvbnN0IG9uU3VibWl0ID0gKDAsIGltcG9ydF9yZWFjdDEwLnVzZUNhbGxiYWNrKSgoZXZlbnQpID0+IHtcbiAgICB1cGxvYWRGb3JtRGF0YVRvRm9sZGVyKHByb3BzLmZvbGRlcklkLCBzdGF0ZSkoZXZlbnQpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKCFnbG9iYWxUaGlzLmRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGl6aVRvYXN0LnN1Y2Nlc3Moe1xuICAgICAgICBpY29uOiBcImljb24tcGVyc29uXCIsXG4gICAgICAgIHRpdGxlOiBcIlVwbG9hZCBzdWNjZXNmdWxsXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVJpZ2h0XCJcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBpZiAoIWdsb2JhbFRoaXMuZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgICB0aW1lb3V0OiAyZTQsXG4gICAgICAgIHRpdGxlOiBgJHtlLm5hbWV9OiR7ZS5tZXNzYWdlfWAsXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVJpZ2h0XCJcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbc3RhdGVdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW1wb3J0X3JlYWN0MTAuRnJhZ21lbnQsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZENvbnRhaW5lciwgbnVsbCwgcHJvcHMudGl0bGUgJiYgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUaXRsZSwgbnVsbCwgcHJvcHMudGl0bGUpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGNsYXNzTmFtZTogXCJmb3JtXCIsIG9uU3VibWl0OiAoZSkgPT4gb25TdWJtaXQoZSkgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChGb3JtQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogeyBzdGF0ZSwgc2V0U3RhdGUgfSB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udGVudFwiIH0sIHByb3BzLmNoaWxkcmVuKSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic3VibWl0LWNvbnRhaW5lclwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIlN1Ym1pdFwiKSkpKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hdG9tcy9JbnB1dC50c3hcbnZhciBpbXBvcnRfcmVhY3QxMSA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBrZWJhYlRvU2VudGVuY2UgPSAoc3RyKSA9PiBzdHIuc3BsaXQoXCItXCIpLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpLmpvaW4oXCIgXCIpO1xudmFyIGNhbWVsVG9TZW50ZW5jZSA9IChzdHIpID0+IHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpLnJlcGxhY2UoL14uLywgKHN0cjIpID0+IHN0cjIudG9VcHBlckNhc2UoKSk7XG52YXIgc25ha2VUb1NlbnRlbmNlID0gKHN0cikgPT4gc3RyLnNwbGl0KFwiX1wiKS5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKS5qb2luKFwiIFwiKTtcbnZhciBsb3dlcmNhc2VJZ25vcmluZ0dyb3VwcyA9IChzdHIpID0+IHN0ci5yZXBsYWNlQWxsKC8oW2Etel18XFxzKShbQS1aXSkoW2Etel18XFxzKS9nLCAobWF0Y2gsIHAxLCBwMiwgcDMpID0+IHAxICsgcDIudG9Mb3dlckNhc2UoKSArIHAzKTtcbnZhciBzdHJpbmdUb1NlbnRlbmNlID0gKHN0cikgPT4ge1xuICBpZiAoc3RyLmluY2x1ZGVzKFwiLVwiKSkge1xuICAgIHJldHVybiBrZWJhYlRvU2VudGVuY2Uoc3RyKTtcbiAgfSBlbHNlIGlmIChzdHIuaW5jbHVkZXMoXCJfXCIpKSB7XG4gICAgcmV0dXJuIHNuYWtlVG9TZW50ZW5jZShzdHIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYW1lbFRvU2VudGVuY2Uoc3RyKTtcbiAgfVxufTtcbnZhciBmaWxlVG9CYXNlNjQgPSAoZmlsZSkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShyZWFkZXI/LnJlc3VsdD8uc3BsaXQ/LihcIixcIilbMV0pO1xuICAgIH07XG4gIH0pO1xufTtcbnZhciBJbnB1dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBzZXRTdGF0ZSB9ID0gKDAsIGltcG9ydF9yZWFjdDExLnVzZUNvbnRleHQpKEZvcm1Db250ZXh0KTtcbiAgKDAsIGltcG9ydF9yZWFjdDExLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIHByb3BzLnZhbHVlID8/IHNldFN0YXRlKHByb3BzLnZhbHVlKTtcbiAgfSwgW3Byb3BzLnZhbHVlXSk7XG4gIGNvbnN0IHJlZiA9ICgwLCBpbXBvcnRfcmVhY3QxMS51c2VSZWYpKG51bGwpO1xuICAoMCwgaW1wb3J0X3JlYWN0MTEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnR5cGUgIT09IFwiZmlsZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgcmVmLmN1cnJlbnQudmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfSwgW3Byb3BzLnR5cGUsIHJlZl0pO1xuICBjb25zdCBvbkNoYW5nZSA9ICgwLCBpbXBvcnRfcmVhY3QxMS51c2VDYWxsYmFjaykoKGUpID0+IHtcbiAgICBjb25zdCBmaWxlID0gZT8udGFyZ2V0Py5maWxlcz8uWzBdO1xuICAgIGlmIChwcm9wcy50eXBlID09PSBcImZpbGVcIikge1xuICAgICAgZmlsZVRvQmFzZTY0KGZpbGUpLnRoZW4oKGZpbGVEYXRhKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtwcm9wcy5uYW1lXTogeyBkYXRhOiBmaWxlRGF0YSwgbWltZVR5cGU6IGZpbGUudHlwZSB9IH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtwcm9wcy5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH0sIFtwcm9wcy50eXBlLCBzZXRTdGF0ZSwgc3RhdGVdKTtcbiAgY29uc3QgdmFsdWUgPSAoMCwgaW1wb3J0X3JlYWN0MTEudXNlTWVtbykoKCkgPT4ge1xuICAgIGlmIChwcm9wcy50eXBlID09PSBcImZpbGVcIikge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlW1N0cmluZyhwcm9wcy5uYW1lKV07XG4gIH0sIFtzdGF0ZV0pO1xuICAoMCwgaW1wb3J0X3JlYWN0MTEudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgJiYgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW3Byb3BzLm5hbWVdOiByZWYuY3VycmVudC52YWx1ZSB9KTtcbiAgfSwgW3JlZi5jdXJyZW50XSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBjbGFzc05hbWU6IFwiaW5wdXRcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJpbnB1dC1uYW1lXCIgfSwgbG93ZXJjYXNlSWdub3JpbmdHcm91cHMoc3RyaW5nVG9TZW50ZW5jZShwcm9wcy5uYW1lKSkpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIFwiaW5wdXRcIixcbiAgICB7XG4gICAgICByZWYsXG4gICAgICB0eXBlOiBwcm9wcy50eXBlID8/IFwidGV4dFwiLFxuICAgICAgdmFsdWUsXG4gICAgICByZXF1aXJlZDogcHJvcHMuaXNPcHRpb25hbCAmJiBmYWxzZSB8fCB0cnVlLFxuICAgICAgY2FwdHVyZTogcHJvcHMuY2FwdHVyZSxcbiAgICAgIGFjY2VwdDogcHJvcHMuYWNjZXB0LFxuICAgICAgb25DaGFuZ2VcbiAgICB9XG4gICkpO1xufTtcbi8vIEFubm90YXRlIHRoZSBDb21tb25KUyBleHBvcnQgbmFtZXMgZm9yIEVTTSBpbXBvcnQgaW4gbm9kZTpcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBCdXR0b24sXG4gIEZvcm0sXG4gIElucHV0LFxuICBMaW5rLFxuICBQYWdlLFxuICBUYWJsZVxufSk7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGb3JtLCBJbnB1dCwgUGFnZX0gZnJvbSBcImFudWQxMi5naXRodWIuaW9fdWlfYmFzZVwiO1xuaW1wb3J0IHtmb2xkZXJJZH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBuZXdHb29nbGVTZXNzaW9uIGZyb20gXCJhbnVkMTIuZ2l0aHViLmlvX2pvYl9iYXNlXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGb2xkZXJJZCA9IFwiMTF6cUY3QktBLTdodmNPTnVTbWJVMlJHSHJ4bUxhZk5sXCI7XG50eXBlIERhdGEgPSBSZWNvcmQ8XCJuYW1lXCIgfCBcImltYWdlXCIgfCBcIm1vbnRoc1wiLCBhbnk+XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgPFBhZ2UgdGl0bGU9XCJCb3hlcyBBZGRcIj5cbiAgICA8Rm9ybSBmb2xkZXJJZD17Y3JlYXRlRm9sZGVySWR9PlxuICAgICAgPElucHV0PERhdGE+IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICA8SW5wdXQ8RGF0YT4gbmFtZT1cImltYWdlXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgY2FwdHVyZT1cImVudmlyb25tZW50XCIvPlxuICAgICAgPElucHV0PERhdGE+IG5hbWU9XCJtb250aHNcIiB0eXBlPVwibnVtYmVyXCIvPlxuICAgIDwvRm9ybT5cbiAgPC9QYWdlPlxuKTtcblxuZXhwb3J0IGNvbnN0IGFkZEpvYiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZ2xvYmFsRnMgPSAoYXdhaXQgbmV3R29vZ2xlU2Vzc2lvbigpKS5pbnRvRHJpdmUoKTtcbiAgY29uc3QgcGVuZGluZyA9IGF3YWl0IGdsb2JhbEZzLmZpbmRPbmVCeUlkTGF6eShjcmVhdGVGb2xkZXJJZCk7XG4gIGNvbnN0IGZpbGVMaXN0ID0gYXdhaXQgcGVuZGluZy5maW5kQnlOYW1lKFwiZm9ybS1kYXRhLmpzb25cIik7XG4gIGlmICghZmlsZUxpc3Q/Lmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0cmFzaCA9IGF3YWl0IGdsb2JhbEZzLmZpbmRPbmVCeUlkKGZvbGRlcklkLnRyYXNoKTtcbiAgY29uc3QgZGIgPSAoYXdhaXQgZ2xvYmFsRnMuZmluZE9uZUJ5SWQoZm9sZGVySWQuZGIpKS5pbnRvU2hlZXQoKVxuICBjb25zdCBpbWFnZXMgPSBhd2FpdCBnbG9iYWxGcy5maW5kT25lQnlJZChmb2xkZXJJZC5pbWFnZXMpO1xuXG4gIGNvbnN0IHJvd3MgPSBhd2FpdCBQcm9taXNlLmFsbChmaWxlTGlzdC5tYXAoYXN5bmMgZmlsZSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZpbGUuYm9keUpzb248RGF0YT4oKTtcbiAgICBjb25zdCBpbWFnZURhdGEgPSBCdWZmZXIuZnJvbShkYXRhLmltYWdlLmRhdGEsICdiYXNlNjQnKTtcbiAgICBhd2FpdCBmaWxlLm1vdmVUbyh0cmFzaCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIGltYWdlOiB1bmRlZmluZWQsXG4gICAgICAgIGlkOiBmaWxlLmlkLFxuICAgICAgICBpbWFnZUxpbms6IChhd2FpdCBpbWFnZXMuY3JlYXRlKGZpbGUuaWQsIGRhdGEuaW1hZ2UubWltZVR5cGUsIGltYWdlRGF0YSkpLmxpbmtcbiAgICAgIH1cbiAgICB9XG4gIH0pKTtcbiAgYXdhaXQgZGIuc2F2ZUFsbChyb3dzKTtcbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgUGFnZSwgVGFibGUsIH0gZnJvbSBcImFudWQxMi5naXRodWIuaW9fdWlfYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgZm9sZGVySWQgPSB7XG4gIHRyYXNoOiBcIjFOd0p1U3lRNHJGb0k2STA3dkF3am1tNjJYM3p1Q054dlwiLFxuICBkYjogXCIxQmxIWG5KSlB1V3UwX1ZEZS1KQUp6WjBYQVJfTXBsRVc0NVRubWRNZUtmSVwiLFxuICBpbWFnZXM6IFwiMWdmcExpdFBBWnRXRjVvbWs5N2RCM0lYYmZfbGVXWFBwXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgPFBhZ2UgdGl0bGU9XCJCb3hlc1wiPlxuICAgIDxMaW5rIGhyZWY9e1wiYWRkXCJ9PkFkZDwvTGluaz5cbiAgICA8VGFibGUgc291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QU0sU0FBUyxnQkFBZ0IsY0FBYztBQUM3RCxVQUFNLFdBQVcsTUFBTSxRQUFRLFdBQVcsZ0JBQWdCO0FBQzFELFFBQUksQ0FBQyxVQUFVLFFBQVE7QUFDckI7QUFBQSxJQUNGO0FBQ0EsVUFBTSxRQUFRLE1BQU0sU0FBUyxZQUFZLFNBQVMsS0FBSztBQUN2RCxVQUFNLE1BQU0sTUFBTSxTQUFTLFlBQVksU0FBUyxFQUFFLEdBQUcsVUFBVTtBQUMvRCxVQUFNLFNBQVMsTUFBTSxTQUFTLFlBQVksU0FBUyxNQUFNO0FBRXpELFVBQU0sT0FBTyxNQUFNLFFBQVEsSUFBSSxTQUFTLElBQUksT0FBTSxTQUFRO0FBQ3hELFlBQU0sT0FBTyxNQUFNLEtBQUssU0FBZTtBQUN2QyxZQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxNQUFNLFFBQVE7QUFDdkQsWUFBTSxLQUFLLE9BQU8sS0FBSztBQUN2QixhQUFPO0FBQUEsUUFDTCxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsVUFDSixHQUFHO0FBQUEsVUFDSCxPQUFPO0FBQUEsVUFDUCxJQUFJLEtBQUs7QUFBQSxVQUNULFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxJQUFJLEtBQUssTUFBTSxVQUFVLFNBQVMsR0FBRztBQUFBLFFBQzVFO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQyxDQUFDO0FBQ0YsVUFBTSxHQUFHLFFBQVEsSUFBSTtBQUFBLEVBQ3ZCOyIsCiAgIm5hbWVzIjogWyJfX2NyZWF0ZSIsICJfX2RlZlByb3AiLCAiX19nZXRPd25Qcm9wRGVzYyIsICJfX2dldE93blByb3BOYW1lcyIsICJfX2dldFByb3RvT2YiLCAiX19oYXNPd25Qcm9wIiwgIl9fZXhwb3J0IiwgIl9fY29weVByb3BzIiwgIl9fdG9FU00iLCAiX190b0NvbW1vbkpTIiwgIkZvcm0iLCAiSW5wdXQiLCAiTGluayIsICJQYWdlIiwgIlRhYmxlIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QyIiwgImltcG9ydF9yZWFjdDMiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9hbnVkMTJfZ2l0aHViIiwgIlJlYWN0IiwgImltcG9ydF9hbnVkMTJfZ2l0aHViIiwgIlJlYWN0IiwgIm5ld0dvb2dsZVNlc3Npb24iXQp9Cg==
