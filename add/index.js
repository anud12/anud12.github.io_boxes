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

  // external-global-plugin:anud12.github.io_job_base
  var require_anud12_github = __commonJS({
    "external-global-plugin:anud12.github.io_job_base"(exports, module) {
      module.exports = {};
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
  var import_anud12_github3 = __toESM(require_anud12_github());
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsLXBsdWdpbjpyZWFjdCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL2xpYi9pbmRleC5qcyIsICJleHRlcm5hbC1nbG9iYWwtcGx1Z2luOmFudWQxMi5naXRodWIuaW9fam9iX2Jhc2UiLCAiaW5kZXhfYWRkLnRzeCIsICJpbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5SZWFjdCIsICJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgQnV0dG9uOiAoKSA9PiBCdXR0b24sXG4gIEZvcm06ICgpID0+IEZvcm0sXG4gIElucHV0OiAoKSA9PiBJbnB1dCxcbiAgTGluazogKCkgPT4gTGluayxcbiAgUGFnZTogKCkgPT4gUGFnZSxcbiAgVGFibGU6ICgpID0+IFRhYmxlXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvUGFnZS50c3hcbnZhciBpbXBvcnRfcmVhY3Q3ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db21tZW50LnRzeFxudmFyIGltcG9ydF9yZWFjdCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBDb21tZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGA8IS0tICR7Y2hpbGRyZW59IC0tPmAgfSB9KTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci50c3hcbnZhciBpbXBvcnRfcmVhY3Q2ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db250YWluZXIudHN4XG52YXIgaW1wb3J0X3JlYWN0MiA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBDYXJkQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyLWNvbnRhaW5lclwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGNvbnRhaW5lciBjYXJkLWNvbnRhaW5lciAke3Byb3BzLmNsYXNzTmFtZSA/PyBcIlwifWAudHJpbSgpIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hdG9tcy9MaW5rLnRzeFxudmFyIGltcG9ydF9yZWFjdDMgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2dvb2dsZS9jb25maWcudHNcbnZhciBjb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCdFEyV095SVVuYVNXQWhsM3M1UEFfTFprV3RwV3o1aUFcIixcbiAgY2xpZW50SWQ6IFwiOTg1MjgwOTA3MDMxLWZmdmZuYzhwaTBhbmU5OWxzbzlkYmwxbTJsNW9jOW5uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXG4gIHNjb3BlOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHMgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5wcm9maWxlIFwiLFxuICBkaXNjb3ZlcnlEb2NzOiBbXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy9kcml2ZS92My9yZXN0XCJdXG59O1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvbG9hZEdvb2dsZURlcGVuZGVuY2llcy50c1xudmFyIGxvYWRTY3JpcHQgPSAoc3JjKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGlmICghZ2xvYmFsVGhpcy5kb2N1bWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXNvbHZlKCk7XG59KTtcbnZhciBsb2FkR29vZ2xlRGVwZW5kZW5jaWVzID0gUHJvbWlzZS5hbGwoW1xuICBsb2FkU2NyaXB0KFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzXCIpLFxuICBsb2FkU2NyaXB0KFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2dzaS9jbGllbnRcIilcbl0pO1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvZ2FwaUNsaWVudFByb21pc2UudHNcbnZhciBnYXBpQ2xpZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gIGF3YWl0IGxvYWRHb29nbGVEZXBlbmRlbmNpZXM7XG4gIGdhcGkubG9hZChcImNsaWVudFwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgZ2FwaS5jbGllbnQuaW5pdCh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBkaXNjb3ZlcnlEb2NzOiBjb25maWcuZGlzY292ZXJ5RG9jc1xuICAgIH0pO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlMikgPT4gZ2FwaS5jbGllbnQubG9hZChcInNoZWV0c1wiLCBcInY0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgcmVzb2x2ZTIoKTtcbiAgICB9KSk7XG4gICAgcmVzb2x2ZShnYXBpKTtcbiAgfSk7XG59KTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL2dldEV4cGlyYXRpb25EYXRlLnRzXG52YXIgZ2V0RXhwaXJhdGlvbkRhdGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gIGNvbnN0IHRva2VuID0gZ2FwaTI/LmF1dGg/LmdldFRva2VuKCk7XG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gcmVzKHZvaWQgMCkpO1xuICB9XG4gIHJldHVybiBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3Rva2VuaW5mbz9hY2Nlc3NfdG9rZW49JHt0b2tlbi5hY2Nlc3NfdG9rZW59YCkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgRXJyb3IoYGdldEV4cGlyYXRpb25EYXRlIHN0YXR1cyAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfVxuICAgIHJldHVybiAoYXdhaXQgcmVzLmpzb24oKSk/LmV4cGlyZXNfaW47XG4gIH0pO1xufTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL3Rva2VuQ2xpZW50UHJvbWlzZS50c1xudmFyIHRva2VuQ2xpZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXMpID0+IHtcbiAgYXdhaXQgbG9hZEdvb2dsZURlcGVuZGVuY2llcztcbiAgY29uc3QgdG9rZW5DbGllbnQgPSBnb29nbGUuYWNjb3VudHMub2F1dGgyLmluaXRUb2tlbkNsaWVudCh7XG4gICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50SWQsXG4gICAgc2NvcGU6IGNvbmZpZy5zY29wZSxcbiAgICByZWRpcmVjdF91cmk6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsXG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICB9XG4gIH0pO1xuICByZXModG9rZW5DbGllbnQpO1xufSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2ltcGwvbmV3QXBpLnRzXG5mdW5jdGlvbiBhZGRRdWVyeVBhcmFtKHZhbHVlKSB7XG4gIGNvbnN0IG5ld1VybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICBuZXdVcmwuaGFzaCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybC5ocmVmKTtcbn1cbnZhciBuZXdBcGkgPSB7XG4gIHNlc3Npb25OYW1lOiAoKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgZ2FwaTIuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgXCJwYXRoXCI6IFwiaHR0cHM6Ly9wZW9wbGUuZ29vZ2xlYXBpcy5jb20vdjEvcGVvcGxlL21lP3BlcnNvbkZpZWxkcz1uYW1lc1wiLFxuICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgIFwiY2FsbGJhY2tcIjogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZT8ubmFtZXM/LlswXT8uZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSxcbiAgbG9hZEZyb21Vcmw6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnYXBpMiA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzRnJvbVVybCA9IGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKSk7XG4gICAgaWYgKGNyZWRlbnRpYWxzRnJvbVVybCkge1xuICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBKU09OLnBhcnNlKGNyZWRlbnRpYWxzRnJvbVVybCk7XG4gICAgICBhd2FpdCBnYXBpMi5jbGllbnQuaW5pdCh7fSk7XG4gICAgICBnYXBpMi5jbGllbnQuc2V0VG9rZW4oY3JlZGVudGlhbHMpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuZXdBcGktb25DaGFuZ2VcIikpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIG9uQ2hhbmdlOiAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBmbiA9IChldmVudCkgPT4ge1xuICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH07XG4gICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJuZXdBcGktb25DaGFuZ2VcIiwgZm4pO1xuICAgIHJldHVybiAoKSA9PiBnbG9iYWxUaGlzPy5kb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm5ld0FwaS1vbkNoYW5nZVwiLCBmbik7XG4gIH0sXG4gIGxvZ291dDogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgZ2FwaTIuY2xpZW50LnNldFRva2VuKG51bGwpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm5ld0FwaS1vbkNoYW5nZVwiKSk7XG4gIH0sXG4gIGxvZ2luOiBhc3luYyAoKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHRva2VuQ2xpZW50ID0gYXdhaXQgdG9rZW5DbGllbnRQcm9taXNlO1xuICAgIHRyeSB7XG4gICAgICBpZiAoYXdhaXQgbmV3QXBpLmxvYWRGcm9tVXJsKCkpIHtcbiAgICAgICAgYXdhaXQgZ2V0RXhwaXJhdGlvbkRhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgICB0b2tlbkNsaWVudC5jYWxsYmFjayA9IChjcmVkZW50aWFsc1Jlc3BvbnNlKSA9PiB7XG4gICAgICBhZGRRdWVyeVBhcmFtKGNyZWRlbnRpYWxzUmVzcG9uc2UpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuZXdBcGktb25DaGFuZ2VcIikpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG4gICAgdG9rZW5DbGllbnQucmVxdWVzdEFjY2Vzc1Rva2VuKHsgcHJvbXB0OiBcImNvbnNlbnRcIiB9KTtcbiAgfSlcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL2F0b21zL0xpbmsudHN4XG52YXIgTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gKDAsIGltcG9ydF9yZWFjdDMudXNlU3RhdGUpKFwiXCIpO1xuICAoMCwgaW1wb3J0X3JlYWN0My51c2VFZmZlY3QpKCgpID0+IHtcbiAgICBzZXRTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgc2V0U2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICB9O1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ld0FwaS5vbkNoYW5nZSgoKSA9PiB7XG4gICAgICBmbigpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmbik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmbik7XG4gICAgICBzdWJzY3JpcHRpb24oKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0My5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImxpbmtcIiwgaHJlZjogcHJvcHMuaHJlZiArIHNlYXJjaFBhcmFtcyB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hcGkvc2lnbkluLnRzeFxudmFyIGltcG9ydF9yZWFjdDUgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9jb21wb25lbnRzL2F0b21zL0J1dHRvbi50c3hcbnZhciBpbXBvcnRfcmVhY3Q0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIEJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDQuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgLi4ucHJvcHMsIGNsYXNzTmFtZTogXCJidXR0b25cIiB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hcGkvc2lnbkluLnRzeFxudmFyIFNpZ25JbiA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSAoMCwgaW1wb3J0X3JlYWN0NS51c2VTdGF0ZSkodm9pZCAwKTtcbiAgY29uc3QgY2FsbGJhY2sgPSAoMCwgaW1wb3J0X3JlYWN0NS51c2VDYWxsYmFjaykoKCkgPT4ge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgbmV3QXBpLmxvZ291dCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXdBcGkubG9naW4oKTtcbiAgfSwgW3N0YXRlXSk7XG4gICgwLCBpbXBvcnRfcmVhY3Q1LnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIG5ld0FwaS5zZXNzaW9uTmFtZSgpLnRoZW4oc2V0U3RhdGUpO1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gbmV3QXBpLm9uQ2hhbmdlKGFzeW5jIChlKSA9PiB7XG4gICAgICBzZXRTdGF0ZShhd2FpdCBuZXdBcGkuc2Vzc2lvbk5hbWUoKSk7XG4gICAgfSk7XG4gICAgbmV3QXBpLmxvYWRGcm9tVXJsKCk7XG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0NS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW1wb3J0X3JlYWN0NS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0NS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IG9uQ2xpY2s6IGNhbGxiYWNrIH0sIHN0YXRlID8gYExvZ291dCBvZiAke3N0YXRlfWAgOiBcIkxvZ2luXCIpKTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci50c3hcbnZhciBidWlsZEJhY2sgPSAoaW5kZXgpID0+IG5ldyBBcnJheShpbmRleCArIDEpLmZpbGwoXCIuLlwiKS5qb2luKFwiL1wiKTtcbnZhciBidWlsZFBhdGggPSAoKSA9PiB7XG4gIGNvbnN0IGhyZWYgPSBnbG9iYWxUaGlzPy53aW5kb3c/LmxvY2F0aW9uLmhyZWY7XG4gIGNvbnN0IHVybCA9IGhyZWYgPyBuZXcgVVJMKGhyZWYpIDogdm9pZCAwO1xuICBjb25zdCBwYXRoID0gdXJsPy5wYXRobmFtZT8uc3BsaXQoXCIvXCIpLmZpbHRlcigoZSkgPT4gZSkgPz8gW107XG4gIHBhdGgucmV2ZXJzZSgpO1xuICBwYXRoLnNwbGljZSgwLCAxKTtcbiAgcGF0aC5yZXZlcnNlKCk7XG4gIHJldHVybiBwYXRoO1xufTtcbnZhciBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgcGF0aCA9IGJ1aWxkUGF0aCgpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGltcG9ydF9yZWFjdDYuRnJhZ21lbnQsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkQ29udGFpbmVyLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLWNvbnRlbnRcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLXRpdGxlXCIgfSwgcHJvcHMuY2hpbGRyZW4pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLWxvZ2luXCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNpZ25JbiwgbnVsbCkpKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJvcmRlci10b3AgaGVhZGVyLXVybC1jaGlwc1wiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBocmVmOiBcIi9cIiB9LCBcIkhvbWVcIikpLCBwYXRoLnJldmVyc2UoKS5tYXAoXG4gICAgKGUsIGluZGV4KSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGUgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExpbmssIHsgaHJlZjogYnVpbGRCYWNrKGluZGV4KSB9LCBlKSlcbiAgKS5yZXZlcnNlKCkpKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9QYWdlLnRzeFxudmFyIHRpbWUgPSAoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCk7XG52YXIgUGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHByb3BzLnRoZW1lID8/IHt9O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vYW51ZC5yby91aV9iYXNlL3NyYy9tYWluLmNzc1wiLCB0eXBlOiBcInRleHQvY3NzXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDQ4LDMwMCwwLC0yNVwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHsgbmFtZTogXCJ2aWV3cG9ydFwiLCBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7IHNyYzogXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanNcIiB9KSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHsgc3JjOiBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9nc2kvY2xpZW50XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7IHNyYzogXCJodHRwczovL2l6aXRvYXN0Lm1hcmNlbG9kb2x6YS5jb20vanMvaXppVG9hc3QubWluLmpzP3Y9MTQwYlwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHsgaHJlZjogXCJodHRwczovL2l6aXRvYXN0Lm1hcmNlbG9kb2x6YS5jb20vY3NzL2l6aVRvYXN0Lm1pbi5jc3M/dj0xNDBhXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFqZGhhbmkmZGlzcGxheT1zd2FwXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFqZGhhbmk6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSkpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21tZW50LCBudWxsLCB0aW1lKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2VcIiwgc3R5bGU6IHtcbiAgICBcIi0tcHJpbWFyeVwiOiB0aGVtZVtcIi0tcHJpbWFyeVwiXSA/PyBcIiMwMDc0Y2NcIixcbiAgICBcIi0tYmFja2dyb3VuZC1jb2xvclwiOiB0aGVtZVtcIi0tYmFja2dyb3VuZC1jb2xvclwiXSA/PyBcIndoaXRlXCIsXG4gICAgXCItLWJvcmRlci1jb2xvclwiOiB0aGVtZVtcIi0tYm9yZGVyLWNvbG9yXCJdID8/IFwiI2M0YzRjNFwiXG4gIH0gfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2UtY29udGVudFwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwsIHByb3BzLnRpdGxlKSwgcHJvcHMuY2hpbGRyZW4pKSkpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvVGFibGUudHN4XG52YXIgaW1wb3J0X3JlYWN0OCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcblxuLy8gc3JjL3NlcnZpY2UvYXJyYXlUb09iamVjdHMudHNcbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XG4gIHZhciBrZXlzID0gYXJyWzBdO1xuICByZXR1cm4gYXJyLnNsaWNlKDEpLm1hcChmdW5jdGlvbihyb3cpIHtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24ob2JqLCBrZXksIGkpIHtcbiAgICAgIG9ialtrZXldID0gcm93W2ldO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gIH0pO1xufVxuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvbG9hZEZyb21TaGVldC50c1xudmFyIGxvYWRGcm9tU2hlZXQgPSAoc291cmNlKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHZhciB1cmwgPSBgaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vdjQvc3ByZWFkc2hlZXRzLyR7c291cmNlfS92YWx1ZXMvU2hlZXQxYDtcbiAgY29uc3QgZ2FwaTIgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgdmFyIGFjY2Vzc1Rva2VuID0gZ2FwaTIuYXV0aC5nZXRUb2tlbigpLmFjY2Vzc190b2tlbjtcbiAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBhY2Nlc3NUb2tlbik7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzXG4gIH07XG4gIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBzcHJlYWRzaGVldCBkYXRhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgcmFuZ2UgPSBkYXRhLnZhbHVlcztcbiAgICByZXNvbHZlKGFycmF5VG9PYmplY3QocmFuZ2UpKTtcbiAgfSk7XG59KS5jYXRjaCgoZSkgPT4ge1xuICB0aHJvdyBlLnJlc3VsdC5lcnJvcjtcbn0pO1xuXG4vLyBzcmMvY29tcG9uZW50cy9UYWJsZS50c3hcbnZhciBUYWJsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSAoMCwgaW1wb3J0X3JlYWN0OC51c2VTdGF0ZSkoW10pO1xuICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhMiA9IGF3YWl0IGxvYWRGcm9tU2hlZXQocHJvcHMuc291cmNlKTtcbiAgICBjb25zdCBjaGFuZ2VkRGF0YSA9IGRhdGEyLm1hcCgoZSkgPT4ge1xuICAgICAgT2JqZWN0LmVudHJpZXMocHJvcHMuY2VsbFZhbHVlcyA/PyB7fSkubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgZnVuYyA9IHZhbHVlO1xuICAgICAgICBlW2tleV0gPSBmdW5jKGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgICBzZXREYXRhKGNoYW5nZWREYXRhKTtcbiAgfTtcbiAgKDAsIGltcG9ydF9yZWFjdDgudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBuZXdBcGkub25DaGFuZ2UobG9hZERhdGEpO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbcHJvcHMuc291cmNlXSk7XG4gIGNvbnN0IGNvbHVtbnMgPSAoMCwgaW1wb3J0X3JlYWN0OC51c2VNZW1vKSgoKSA9PiB7XG4gICAgY29uc3QgY29sdW1uU2V0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICBwcm9wcy5jb2x1bW5PcmRlcj8ubWFwKChlKSA9PiBjb2x1bW5TZXQuYWRkKGUpKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhPy5bMF0gPz8ge30pLm1hcCgoZSkgPT4gY29sdW1uU2V0LmFkZChlKSk7XG4gICAgcmV0dXJuIFsuLi5jb2x1bW5TZXRdO1xuICB9LCBbZGF0YSwgSlNPTi5zdHJpbmdpZnkocHJvcHMuY29sdW1uT3JkZXIpXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW1wb3J0X3JlYWN0OC5GcmFnbWVudCwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250YWluZXIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0YWJsZS1jb250YWluZXJcIiB9LCBkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5sZW5ndGggPiAwICYmIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0YWJsZVwiLCBzdHlsZToge1xuICAgIFwiLS1udW1iZXItb2YtY29sdW1uc1wiOiBjb2x1bW5zLmxlbmd0aCxcbiAgICBcIi0tbnVtYmVyLW9mLXJvd3NcIjogXCIyMFwiXG4gIH0gfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIGNvbHVtbnMubWFwKFxuICAgIChoZWFkZXIsIGpuZGV4KSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGpuZGV4IH0sIGhlYWRlcilcbiAgKSksIGRhdGEubWFwKFxuICAgIChlLCBpbmRleCkgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBpbmRleCwgY2xhc3NOYW1lOiBcInJvd1wiIH0sIGNvbHVtbnMubWFwKFxuICAgICAgKGNvbHVtbikgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBjb2x1bW4gfSwgZVtjb2x1bW5dKVxuICAgICkpXG4gICkpLCAhKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkgJiYgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIHsgc3R5bGU6IHsgd2hpdGVTcGFjZTogXCJicmVhay1zcGFjZXNcIiB9IH0sIFwiRmFpbGVkIHRvIGxvYWQgdGFibGUgXCIsIHByb3BzLnNvdXJjZSwgXCIgUmVhc29uOlwiLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpKSkpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvRm9ybS50c3hcbnZhciBpbXBvcnRfcmVhY3QxMCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL3VwbG9hZFRvRmlsZS50c1xudmFyIHVwbG9hZEZvcm1EYXRhVG9Gb2xkZXIgPSAocGFyZW50SWQsIGRhdGEpID0+IGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBnYXBpMiA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICBjb25zdCBpZFRva2VuID0gZ2FwaTIuY2xpZW50LmdldFRva2VuKCkuYWNjZXNzX3Rva2VuO1xuICByZXR1cm4gZmV0Y2goXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91cGxvYWQvZHJpdmUvdjMvZmlsZXM/dXBsb2FkVHlwZT1yZXN1bWFibGVcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtpZFRva2VufWAsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgIH0pLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6IFwiZm9ybS1kYXRhLmpzb25cIixcbiAgICAgIHBhcmVudHM6IFtwYXJlbnRJZF1cbiAgICB9KVxuICB9KS50aGVuKGFzeW5jIChhcGlSZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiBmZXRjaChhd2FpdCBhcGlSZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpID8/IFwiXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtpZFRva2VufWAsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9KSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvYXRvbXMvVGl0bGUudHN4XG52YXIgaW1wb3J0X3JlYWN0OSA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBUaXRsZSA9IChwcm9wcykgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRpdGxlXCIgfSwgcHJvcHMuY2hpbGRyZW4pO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Gb3JtLnRzeFxudmFyIEZvcm1Db250ZXh0ID0gKDAsIGltcG9ydF9yZWFjdDEwLmNyZWF0ZUNvbnRleHQpKHtcbiAgc3RhdGU6IHt9LFxuICBzZXRTdGF0ZTogKC4uLmFyZ3MpID0+IHtcbiAgfVxufSk7XG52YXIgRm9ybSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9ICgwLCBpbXBvcnRfcmVhY3QxMC51c2VTdGF0ZSkoe30pO1xuICBjb25zdCBvblN1Ym1pdCA9ICgwLCBpbXBvcnRfcmVhY3QxMC51c2VDYWxsYmFjaykoKGV2ZW50KSA9PiB7XG4gICAgdXBsb2FkRm9ybURhdGFUb0ZvbGRlcihwcm9wcy5mb2xkZXJJZCwgc3RhdGUpKGV2ZW50KS50aGVuKCgpID0+IHtcbiAgICAgIGlmICghZ2xvYmFsVGhpcy5kb2N1bWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpemlUb2FzdC5zdWNjZXNzKHtcbiAgICAgICAgaWNvbjogXCJpY29uLXBlcnNvblwiLFxuICAgICAgICB0aXRsZTogXCJVcGxvYWQgc3VjY2VzZnVsbFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b21SaWdodFwiXG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgaWYgKCFnbG9iYWxUaGlzLmRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgdGltZW91dDogMmU0LFxuICAgICAgICB0aXRsZTogYCR7ZS5uYW1lfToke2UubWVzc2FnZX1gLFxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b21SaWdodFwiXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW3N0YXRlXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGltcG9ydF9yZWFjdDEwLkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250YWluZXIsIG51bGwsIHByb3BzLnRpdGxlICYmIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIG51bGwsIHByb3BzLnRpdGxlKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBjbGFzc05hbWU6IFwiZm9ybVwiLCBvblN1Ym1pdDogKGUpID0+IG9uU3VibWl0KGUpIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHsgc3RhdGUsIHNldFN0YXRlIH0gfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRlbnRcIiB9LCBwcm9wcy5jaGlsZHJlbikpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInN1Ym1pdC1jb250YWluZXJcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgbnVsbCwgXCJTdWJtaXRcIikpKSkpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvYXRvbXMvSW5wdXQudHN4XG52YXIgaW1wb3J0X3JlYWN0MTEgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIga2ViYWJUb1NlbnRlbmNlID0gKHN0cikgPT4gc3RyLnNwbGl0KFwiLVwiKS5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKS5qb2luKFwiIFwiKTtcbnZhciBjYW1lbFRvU2VudGVuY2UgPSAoc3RyKSA9PiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKS5yZXBsYWNlKC9eLi8sIChzdHIyKSA9PiBzdHIyLnRvVXBwZXJDYXNlKCkpO1xudmFyIHNuYWtlVG9TZW50ZW5jZSA9IChzdHIpID0+IHN0ci5zcGxpdChcIl9cIikubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSkuam9pbihcIiBcIik7XG52YXIgbG93ZXJjYXNlSWdub3JpbmdHcm91cHMgPSAoc3RyKSA9PiBzdHIucmVwbGFjZUFsbCgvKFthLXpdfFxccykoW0EtWl0pKFthLXpdfFxccykvZywgKG1hdGNoLCBwMSwgcDIsIHAzKSA9PiBwMSArIHAyLnRvTG93ZXJDYXNlKCkgKyBwMyk7XG52YXIgc3RyaW5nVG9TZW50ZW5jZSA9IChzdHIpID0+IHtcbiAgaWYgKHN0ci5pbmNsdWRlcyhcIi1cIikpIHtcbiAgICByZXR1cm4ga2ViYWJUb1NlbnRlbmNlKHN0cik7XG4gIH0gZWxzZSBpZiAoc3RyLmluY2x1ZGVzKFwiX1wiKSkge1xuICAgIHJldHVybiBzbmFrZVRvU2VudGVuY2Uoc3RyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2FtZWxUb1NlbnRlbmNlKHN0cik7XG4gIH1cbn07XG52YXIgZmlsZVRvQmFzZTY0ID0gKGZpbGUpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUocmVhZGVyPy5yZXN1bHQ/LnNwbGl0Py4oXCIsXCIpWzFdKTtcbiAgICB9O1xuICB9KTtcbn07XG52YXIgSW5wdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgc2V0U3RhdGUgfSA9ICgwLCBpbXBvcnRfcmVhY3QxMS51c2VDb250ZXh0KShGb3JtQ29udGV4dCk7XG4gICgwLCBpbXBvcnRfcmVhY3QxMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICBwcm9wcy52YWx1ZSA/PyBzZXRTdGF0ZShwcm9wcy52YWx1ZSk7XG4gIH0sIFtwcm9wcy52YWx1ZV0pO1xuICBjb25zdCByZWYgPSAoMCwgaW1wb3J0X3JlYWN0MTEudXNlUmVmKShudWxsKTtcbiAgKDAsIGltcG9ydF9yZWFjdDExLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIGlmIChwcm9wcy50eXBlICE9PSBcImZpbGVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIHJlZi5jdXJyZW50LnZhbHVlID0gbnVsbDtcbiAgICB9XG4gIH0sIFtwcm9wcy50eXBlLCByZWZdKTtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoMCwgaW1wb3J0X3JlYWN0MTEudXNlQ2FsbGJhY2spKChlKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGU/LnRhcmdldD8uZmlsZXM/LlswXTtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJmaWxlXCIpIHtcbiAgICAgIGZpbGVUb0Jhc2U2NChmaWxlKS50aGVuKChmaWxlRGF0YSkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbcHJvcHMubmFtZV06IHsgZGF0YTogZmlsZURhdGEsIG1pbWVUeXBlOiBmaWxlLnR5cGUgfSB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbcHJvcHMubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9LCBbcHJvcHMudHlwZSwgc2V0U3RhdGUsIHN0YXRlXSk7XG4gIGNvbnN0IHZhbHVlID0gKDAsIGltcG9ydF9yZWFjdDExLnVzZU1lbW8pKCgpID0+IHtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJmaWxlXCIpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZVtTdHJpbmcocHJvcHMubmFtZSldO1xuICB9LCBbc3RhdGVdKTtcbiAgKDAsIGltcG9ydF9yZWFjdDExLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50ICYmIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtwcm9wcy5uYW1lXTogcmVmLmN1cnJlbnQudmFsdWUgfSk7XG4gIH0sIFtyZWYuY3VycmVudF0pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDExLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgY2xhc3NOYW1lOiBcImlucHV0XCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDExLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiaW5wdXQtbmFtZVwiIH0sIGxvd2VyY2FzZUlnbm9yaW5nR3JvdXBzKHN0cmluZ1RvU2VudGVuY2UocHJvcHMubmFtZSkpKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDExLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBcImlucHV0XCIsXG4gICAge1xuICAgICAgcmVmLFxuICAgICAgdHlwZTogcHJvcHMudHlwZSA/PyBcInRleHRcIixcbiAgICAgIHZhbHVlLFxuICAgICAgcmVxdWlyZWQ6IHByb3BzLmlzT3B0aW9uYWwgJiYgZmFsc2UgfHwgdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IHByb3BzLmNhcHR1cmUsXG4gICAgICBhY2NlcHQ6IHByb3BzLmFjY2VwdCxcbiAgICAgIG9uQ2hhbmdlXG4gICAgfVxuICApKTtcbn07XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBJbnB1dCxcbiAgTGluayxcbiAgUGFnZSxcbiAgVGFibGVcbn0pO1xuIiwgIm1vZHVsZS5leHBvcnRzID0ge30iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGb3JtLCBJbnB1dCwgUGFnZX0gZnJvbSBcImFudWQxMi5naXRodWIuaW9fdWlfYmFzZVwiO1xuaW1wb3J0IHtmb2xkZXJJZH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBuZXdHb29nbGVTZXNzaW9uIGZyb20gXCJhbnVkMTIuZ2l0aHViLmlvX2pvYl9iYXNlXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGb2xkZXJJZCA9IFwiMTF6cUY3QktBLTdodmNPTnVTbWJVMlJHSHJ4bUxhZk5sXCI7XG50eXBlIERhdGEgPSBSZWNvcmQ8XCJuYW1lXCIgfCBcImltYWdlXCIgfCBcIm1vbnRoc1wiLCBhbnk+XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgPFBhZ2UgdGl0bGU9XCJCb3hlcyBBZGRcIj5cbiAgICA8Rm9ybSBmb2xkZXJJZD17Y3JlYXRlRm9sZGVySWR9PlxuICAgICAgPElucHV0PERhdGE+IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICA8SW5wdXQ8RGF0YT4gbmFtZT1cImltYWdlXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgY2FwdHVyZT1cImVudmlyb25tZW50XCIvPlxuICAgICAgPElucHV0PERhdGE+IG5hbWU9XCJtb250aHNcIiB0eXBlPVwibnVtYmVyXCIvPlxuICAgIDwvRm9ybT5cbiAgPC9QYWdlPlxuKTtcblxuZXhwb3J0IGNvbnN0IGFkZEpvYiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZ2xvYmFsRnMgPSAoYXdhaXQgbmV3R29vZ2xlU2Vzc2lvbigpKS5pbnRvRHJpdmUoKTtcbiAgY29uc3QgcGVuZGluZyA9IGF3YWl0IGdsb2JhbEZzLmZpbmRPbmVCeUlkTGF6eShjcmVhdGVGb2xkZXJJZCk7XG4gIGNvbnN0IGZpbGVMaXN0ID0gYXdhaXQgcGVuZGluZy5maW5kQnlOYW1lKFwiZm9ybS1kYXRhLmpzb25cIik7XG4gIGlmICghZmlsZUxpc3Q/Lmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0cmFzaCA9IGF3YWl0IGdsb2JhbEZzLmZpbmRPbmVCeUlkKGZvbGRlcklkLnRyYXNoKTtcbiAgY29uc3QgZGIgPSAoYXdhaXQgZ2xvYmFsRnMuZmluZE9uZUJ5SWQoZm9sZGVySWQuZGIpKS5pbnRvU2hlZXQoKVxuICBjb25zdCBpbWFnZXMgPSBhd2FpdCBnbG9iYWxGcy5maW5kT25lQnlJZChmb2xkZXJJZC5pbWFnZXMpO1xuXG4gIGNvbnN0IHJvd3MgPSBhd2FpdCBQcm9taXNlLmFsbChmaWxlTGlzdC5tYXAoYXN5bmMgZmlsZSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZpbGUuYm9keUpzb248RGF0YT4oKTtcbiAgICBjb25zdCBpbWFnZURhdGEgPSBCdWZmZXIuZnJvbShkYXRhLmltYWdlLmRhdGEsICdiYXNlNjQnKTtcbiAgICBhd2FpdCBmaWxlLm1vdmVUbyh0cmFzaCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB1bmRlZmluZWQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIGltYWdlOiB1bmRlZmluZWQsXG4gICAgICAgIGlkOiBmaWxlLmlkLFxuICAgICAgICBpbWFnZUxpbms6IChhd2FpdCBpbWFnZXMuY3JlYXRlKGZpbGUuaWQsIGRhdGEuaW1hZ2UubWltZVR5cGUsIGltYWdlRGF0YSkpLmxpbmtcbiAgICAgIH1cbiAgICB9XG4gIH0pKTtcbiAgYXdhaXQgZGIuc2F2ZUFsbChyb3dzKTtcbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgUGFnZSwgVGFibGUsIH0gZnJvbSBcImFudWQxMi5naXRodWIuaW9fdWlfYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgZm9sZGVySWQgPSB7XG4gIHRyYXNoOiBcIjFOd0p1U3lRNHJGb0k2STA3dkF3am1tNjJYM3p1Q054dlwiLFxuICBkYjogXCIxQmxIWG5KSlB1V3UwX1ZEZS1KQUp6WjBYQVJfTXBsRVc0NVRubWRNZUtmSVwiLFxuICBpbWFnZXM6IFwiMWdmcExpdFBBWnRXRjVvbWs5N2RCM0lYYmZfbGVXWFBwXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgPFBhZ2UgdGl0bGU9XCJCb3hlc1wiPlxuICAgIDxMaW5rIGhyZWY9e1wiYWRkXCJ9PkFkZDwvTGluaz5cbiAgICA8VGFibGUgc291cmNlPXtmb2xkZXJJZC5kYn0gLz5cbiAgPC9QYWdlPlxuKSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxhQUFPLFVBQVUsV0FBVztBQUFBO0FBQUE7OztBQ0E1QjtBQUFBO0FBQUEsVUFBSUEsWUFBVyxPQUFPO0FBQ3RCLFVBQUlDLGFBQVksT0FBTztBQUN2QixVQUFJQyxvQkFBbUIsT0FBTztBQUM5QixVQUFJQyxxQkFBb0IsT0FBTztBQUMvQixVQUFJQyxnQkFBZSxPQUFPO0FBQzFCLFVBQUlDLGdCQUFlLE9BQU8sVUFBVTtBQUNwQyxVQUFJQyxZQUFXLENBQUMsUUFBUSxRQUFRO0FBQzlCLGlCQUFTLFFBQVE7QUFDZixVQUFBTCxXQUFVLFFBQVEsTUFBTSxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsWUFBWSxLQUFLLENBQUM7QUFBQSxNQUNoRTtBQUNBLFVBQUlNLGVBQWMsQ0FBQyxJQUFJLE1BQU0sUUFBUSxTQUFTO0FBQzVDLFlBQUksUUFBUSxPQUFPLFNBQVMsWUFBWSxPQUFPLFNBQVMsWUFBWTtBQUNsRSxtQkFBUyxPQUFPSixtQkFBa0IsSUFBSTtBQUNwQyxnQkFBSSxDQUFDRSxjQUFhLEtBQUssSUFBSSxHQUFHLEtBQUssUUFBUTtBQUN6QyxjQUFBSixXQUFVLElBQUksS0FBSyxFQUFFLEtBQUssTUFBTSxLQUFLLEdBQUcsR0FBRyxZQUFZLEVBQUUsT0FBT0Msa0JBQWlCLE1BQU0sR0FBRyxNQUFNLEtBQUssV0FBVyxDQUFDO0FBQUEsUUFDdkg7QUFDQSxlQUFPO0FBQUEsTUFDVDtBQUNBLFVBQUlNLFdBQVUsQ0FBQyxLQUFLLFlBQVksWUFBWSxTQUFTLE9BQU8sT0FBT1IsVUFBU0ksY0FBYSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUssVUFBUyxNQUFLLFVBQVEsQ0FDMUMsQ0FDRjtBQUdLLE1BQU0sU0FBUyxZQUFZO0FBQ2hDLFVBQU0sWUFBWSxVQUFNLHNCQUFBQyxTQUFpQixHQUFHLFVBQVU7QUFDdEQsVUFBTSxVQUFVLE1BQU0sU0FBUyxnQkFBZ0IsY0FBYztBQUM3RCxVQUFNLFdBQVcsTUFBTSxRQUFRLFdBQVcsZ0JBQWdCO0FBQzFELFFBQUksQ0FBQyxVQUFVLFFBQVE7QUFDckI7QUFBQSxJQUNGO0FBQ0EsVUFBTSxRQUFRLE1BQU0sU0FBUyxZQUFZLFNBQVMsS0FBSztBQUN2RCxVQUFNLE1BQU0sTUFBTSxTQUFTLFlBQVksU0FBUyxFQUFFLEdBQUcsVUFBVTtBQUMvRCxVQUFNLFNBQVMsTUFBTSxTQUFTLFlBQVksU0FBUyxNQUFNO0FBRXpELFVBQU0sT0FBTyxNQUFNLFFBQVEsSUFBSSxTQUFTLElBQUksT0FBTSxTQUFRO0FBQ3hELFlBQU0sT0FBTyxNQUFNLEtBQUssU0FBZTtBQUN2QyxZQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxNQUFNLFFBQVE7QUFDdkQsWUFBTSxLQUFLLE9BQU8sS0FBSztBQUN2QixhQUFPO0FBQUEsUUFDTCxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsVUFDSixHQUFHO0FBQUEsVUFDSCxPQUFPO0FBQUEsVUFDUCxJQUFJLEtBQUs7QUFBQSxVQUNULFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxJQUFJLEtBQUssTUFBTSxVQUFVLFNBQVMsR0FBRztBQUFBLFFBQzVFO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQyxDQUFDO0FBQ0YsVUFBTSxHQUFHLFFBQVEsSUFBSTtBQUFBLEVBQ3ZCOyIsCiAgIm5hbWVzIjogWyJfX2NyZWF0ZSIsICJfX2RlZlByb3AiLCAiX19nZXRPd25Qcm9wRGVzYyIsICJfX2dldE93blByb3BOYW1lcyIsICJfX2dldFByb3RvT2YiLCAiX19oYXNPd25Qcm9wIiwgIl9fZXhwb3J0IiwgIl9fY29weVByb3BzIiwgIl9fdG9FU00iLCAiX190b0NvbW1vbkpTIiwgIkZvcm0iLCAiSW5wdXQiLCAiTGluayIsICJQYWdlIiwgIlRhYmxlIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QyIiwgImltcG9ydF9yZWFjdDMiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9hbnVkMTJfZ2l0aHViIiwgIlJlYWN0IiwgImltcG9ydF9hbnVkMTJfZ2l0aHViIiwgIlJlYWN0IiwgIm5ld0dvb2dsZVNlc3Npb24iXQp9Cg==
