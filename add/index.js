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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsLXBsdWdpbjpyZWFjdCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL2xpYi9pbmRleC5qcyIsICJleHRlcm5hbC1nbG9iYWwtcGx1Z2luOmFudWQxMi5naXRodWIuaW9fam9iX2Jhc2UiLCAiaW5kZXhfYWRkLnRzeCIsICJpbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5SZWFjdCIsICJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBzcmNfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoc3JjX2V4cG9ydHMsIHtcbiAgQnV0dG9uOiAoKSA9PiBCdXR0b24sXG4gIEZvcm06ICgpID0+IEZvcm0sXG4gIElucHV0OiAoKSA9PiBJbnB1dCxcbiAgTGluazogKCkgPT4gTGluayxcbiAgUGFnZTogKCkgPT4gUGFnZSxcbiAgVGFibGU6ICgpID0+IFRhYmxlXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcblxuLy8gc3JjL2NvbXBvbmVudHMvUGFnZS50c3hcbnZhciBpbXBvcnRfcmVhY3Q3ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db21tZW50LnRzeFxudmFyIGltcG9ydF9yZWFjdCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBDb21tZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGA8IS0tICR7Y2hpbGRyZW59IC0tPmAgfSB9KTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci50c3hcbnZhciBpbXBvcnRfcmVhY3Q2ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Db250YWluZXIudHN4XG52YXIgaW1wb3J0X3JlYWN0MiA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBDYXJkQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyLWNvbnRhaW5lclwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGNvbnRhaW5lciBjYXJkLWNvbnRhaW5lciAke3Byb3BzLmNsYXNzTmFtZSA/PyBcIlwifWAudHJpbSgpIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hdG9tcy9MaW5rLnRzeFxudmFyIGltcG9ydF9yZWFjdDMgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2dvb2dsZS9jb25maWcudHNcbnZhciBjb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCdFEyV095SVVuYVNXQWhsM3M1UEFfTFprV3RwV3o1aUFcIixcbiAgY2xpZW50SWQ6IFwiOTg1MjgwOTA3MDMxLWZmdmZuYzhwaTBhbmU5OWxzbzlkYmwxbTJsNW9jOW5uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXG4gIHNjb3BlOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHMgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5wcm9maWxlIFwiLFxuICBkaXNjb3ZlcnlEb2NzOiBbXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy9kcml2ZS92My9yZXN0XCJdXG59O1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvbG9hZEdvb2dsZURlcGVuZGVuY2llcy50c1xudmFyIGxvYWRTY3JpcHQgPSAoc3JjKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGlmICghZ2xvYmFsVGhpcy5kb2N1bWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXNvbHZlKCk7XG59KTtcbnZhciBsb2FkR29vZ2xlRGVwZW5kZW5jaWVzID0gUHJvbWlzZS5hbGwoW1xuICBsb2FkU2NyaXB0KFwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzXCIpLFxuICBsb2FkU2NyaXB0KFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2dzaS9jbGllbnRcIilcbl0pO1xuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvZ2FwaUNsaWVudFByb21pc2UudHNcbnZhciBnYXBpQ2xpZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gIGF3YWl0IGxvYWRHb29nbGVEZXBlbmRlbmNpZXM7XG4gIGdhcGkubG9hZChcImNsaWVudFwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgZ2FwaS5jbGllbnQuaW5pdCh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBkaXNjb3ZlcnlEb2NzOiBjb25maWcuZGlzY292ZXJ5RG9jc1xuICAgIH0pO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlMikgPT4gZ2FwaS5jbGllbnQubG9hZChcInNoZWV0c1wiLCBcInY0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgcmVzb2x2ZTIoKTtcbiAgICB9KSk7XG4gICAgcmVzb2x2ZShnYXBpKTtcbiAgfSk7XG59KTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL2dldEV4cGlyYXRpb25EYXRlLnRzXG52YXIgZ2V0RXhwaXJhdGlvbkRhdGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gIGNvbnN0IHRva2VuID0gZ2FwaTI/LmF1dGg/LmdldFRva2VuKCk7XG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gcmVzKHZvaWQgMCkpO1xuICB9XG4gIHJldHVybiBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3Rva2VuaW5mbz9hY2Nlc3NfdG9rZW49JHt0b2tlbi5hY2Nlc3NfdG9rZW59YCkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgRXJyb3IoYGdldEV4cGlyYXRpb25EYXRlIHN0YXR1cyAke3Jlcy5zdGF0dXN9YCk7XG4gICAgfVxuICAgIHJldHVybiAoYXdhaXQgcmVzLmpzb24oKSk/LmV4cGlyZXNfaW47XG4gIH0pO1xufTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL3Rva2VuQ2xpZW50UHJvbWlzZS50c1xudmFyIHRva2VuQ2xpZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXMpID0+IHtcbiAgYXdhaXQgbG9hZEdvb2dsZURlcGVuZGVuY2llcztcbiAgY29uc3QgdG9rZW5DbGllbnQgPSBnb29nbGUuYWNjb3VudHMub2F1dGgyLmluaXRUb2tlbkNsaWVudCh7XG4gICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50SWQsXG4gICAgc2NvcGU6IGNvbmZpZy5zY29wZSxcbiAgICByZWRpcmVjdF91cmk6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsXG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICB9XG4gIH0pO1xuICByZXModG9rZW5DbGllbnQpO1xufSk7XG5cbi8vIHNyYy9zZXJ2aWNlL2ltcGwvbmV3QXBpLnRzXG5mdW5jdGlvbiBhZGRRdWVyeVBhcmFtKHZhbHVlKSB7XG4gIGNvbnN0IG5ld1VybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICBuZXdVcmwuaGFzaCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybC5ocmVmKTtcbn1cbnZhciBuZXdBcGkgPSB7XG4gIHNlc3Npb25OYW1lOiAoKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgZ2FwaTIuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgXCJwYXRoXCI6IFwiaHR0cHM6Ly9wZW9wbGUuZ29vZ2xlYXBpcy5jb20vdjEvcGVvcGxlL21lP3BlcnNvbkZpZWxkcz1uYW1lc1wiLFxuICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgIFwiY2FsbGJhY2tcIjogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZT8ubmFtZXM/LlswXT8uZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSxcbiAgbG9hZEZyb21Vcmw6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnYXBpMiA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzRnJvbVVybCA9IGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKSk7XG4gICAgaWYgKGNyZWRlbnRpYWxzRnJvbVVybCkge1xuICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBKU09OLnBhcnNlKGNyZWRlbnRpYWxzRnJvbVVybCk7XG4gICAgICBhd2FpdCBnYXBpMi5jbGllbnQuaW5pdCh7fSk7XG4gICAgICBnYXBpMi5jbGllbnQuc2V0VG9rZW4oY3JlZGVudGlhbHMpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuZXdBcGktb25DaGFuZ2VcIikpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIG9uQ2hhbmdlOiAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBmbiA9IChldmVudCkgPT4ge1xuICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH07XG4gICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJuZXdBcGktb25DaGFuZ2VcIiwgZm4pO1xuICAgIHJldHVybiAoKSA9PiBnbG9iYWxUaGlzPy5kb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm5ld0FwaS1vbkNoYW5nZVwiLCBmbik7XG4gIH0sXG4gIGxvZ291dDogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGdhcGkyID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgZ2FwaTIuY2xpZW50LnNldFRva2VuKG51bGwpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm5ld0FwaS1vbkNoYW5nZVwiKSk7XG4gIH0sXG4gIGxvZ2luOiBhc3luYyAoKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHRva2VuQ2xpZW50ID0gYXdhaXQgdG9rZW5DbGllbnRQcm9taXNlO1xuICAgIHRyeSB7XG4gICAgICBpZiAoYXdhaXQgbmV3QXBpLmxvYWRGcm9tVXJsKCkpIHtcbiAgICAgICAgYXdhaXQgZ2V0RXhwaXJhdGlvbkRhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgICB0b2tlbkNsaWVudC5jYWxsYmFjayA9IChjcmVkZW50aWFsc1Jlc3BvbnNlKSA9PiB7XG4gICAgICBhZGRRdWVyeVBhcmFtKGNyZWRlbnRpYWxzUmVzcG9uc2UpO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuZXdBcGktb25DaGFuZ2VcIikpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG4gICAgdG9rZW5DbGllbnQucmVxdWVzdEFjY2Vzc1Rva2VuKHsgcHJvbXB0OiBcImNvbnNlbnRcIiB9KTtcbiAgfSlcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL2F0b21zL0xpbmsudHN4XG52YXIgTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gKDAsIGltcG9ydF9yZWFjdDMudXNlU3RhdGUpKFwiXCIpO1xuICAoMCwgaW1wb3J0X3JlYWN0My51c2VFZmZlY3QpKCgpID0+IHtcbiAgICBzZXRTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgc2V0U2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICB9O1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ld0FwaS5vbkNoYW5nZSgoKSA9PiB7XG4gICAgICBmbigpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmbik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmbik7XG4gICAgICBzdWJzY3JpcHRpb24oKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0My5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImxpbmtcIiwgaHJlZjogcHJvcHMuaHJlZiArIHNlYXJjaFBhcmFtcyB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hcGkvc2lnbkluLnRzeFxudmFyIGltcG9ydF9yZWFjdDUgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8vIHNyYy9jb21wb25lbnRzL2F0b21zL0J1dHRvbi50c3hcbnZhciBpbXBvcnRfcmVhY3Q0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIEJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDQuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgLi4ucHJvcHMsIGNsYXNzTmFtZTogXCJidXR0b25cIiB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9hcGkvc2lnbkluLnRzeFxudmFyIFNpZ25JbiA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSAoMCwgaW1wb3J0X3JlYWN0NS51c2VTdGF0ZSkodm9pZCAwKTtcbiAgY29uc3QgY2FsbGJhY2sgPSAoMCwgaW1wb3J0X3JlYWN0NS51c2VDYWxsYmFjaykoKCkgPT4ge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgbmV3QXBpLmxvZ291dCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXdBcGkubG9naW4oKTtcbiAgfSwgW3N0YXRlXSk7XG4gICgwLCBpbXBvcnRfcmVhY3Q1LnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIG5ld0FwaS5zZXNzaW9uTmFtZSgpLnRoZW4oc2V0U3RhdGUpO1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gbmV3QXBpLm9uQ2hhbmdlKGFzeW5jIChlKSA9PiB7XG4gICAgICBzZXRTdGF0ZShhd2FpdCBuZXdBcGkuc2Vzc2lvbk5hbWUoKSk7XG4gICAgfSk7XG4gICAgbmV3QXBpLmxvYWRGcm9tVXJsKCk7XG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0NS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW1wb3J0X3JlYWN0NS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0NS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IG9uQ2xpY2s6IGNhbGxiYWNrIH0sIHN0YXRlID8gYExvZ291dCBvZiAke3N0YXRlfWAgOiBcIkxvZ2luXCIpKTtcbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci50c3hcbnZhciBidWlsZEJhY2sgPSAoaW5kZXgpID0+IG5ldyBBcnJheShpbmRleCArIDEpLmZpbGwoXCIuLlwiKS5qb2luKFwiL1wiKTtcbnZhciBidWlsZFBhdGggPSAoKSA9PiB7XG4gIGNvbnN0IGhyZWYgPSBnbG9iYWxUaGlzPy53aW5kb3c/LmxvY2F0aW9uLmhyZWY7XG4gIGNvbnN0IHVybCA9IGhyZWYgPyBuZXcgVVJMKGhyZWYpIDogdm9pZCAwO1xuICBjb25zdCBwYXRoID0gdXJsPy5wYXRobmFtZT8uc3BsaXQoXCIvXCIpLmZpbHRlcigoZSkgPT4gZSkgPz8gW107XG4gIHBhdGgucmV2ZXJzZSgpO1xuICBwYXRoLnNwbGljZSgwLCAxKTtcbiAgcGF0aC5yZXZlcnNlKCk7XG4gIHJldHVybiBwYXRoO1xufTtcbnZhciBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgcGF0aCA9IGJ1aWxkUGF0aCgpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGltcG9ydF9yZWFjdDYuRnJhZ21lbnQsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDYXJkQ29udGFpbmVyLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLWNvbnRlbnRcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLXRpdGxlXCIgfSwgcHJvcHMuY2hpbGRyZW4pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGVyLWxvZ2luXCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNpZ25JbiwgbnVsbCkpKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJvcmRlci10b3AgaGVhZGVyLXVybC1jaGlwc1wiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q2LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBocmVmOiBcIi9cIiB9LCBcIkhvbWVcIikpLCBwYXRoLnJldmVyc2UoKS5tYXAoXG4gICAgKGUsIGluZGV4KSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ni5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGUgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDYuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExpbmssIHsgaHJlZjogYnVpbGRCYWNrKGluZGV4KSB9LCBlKSlcbiAgKS5yZXZlcnNlKCkpKSk7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9QYWdlLnRzeFxudmFyIHRpbWUgPSAoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCk7XG52YXIgUGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHByb3BzLnRoZW1lID8/IHt9O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vYW51ZC5yby91aV9iYXNlL3NyYy9tYWluLmNzc1wiLCB0eXBlOiBcInRleHQvY3NzXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDQ4LDMwMCwwLC0yNVwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHsgbmFtZTogXCJ2aWV3cG9ydFwiLCBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7IHNyYzogXCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanNcIiB9KSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHsgc3JjOiBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9nc2kvY2xpZW50XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7IHNyYzogXCJodHRwczovL2l6aXRvYXN0Lm1hcmNlbG9kb2x6YS5jb20vanMvaXppVG9hc3QubWluLmpzP3Y9MTQwYlwiIH0pLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHsgaHJlZjogXCJodHRwczovL2l6aXRvYXN0Lm1hcmNlbG9kb2x6YS5jb20vY3NzL2l6aVRvYXN0Lm1pbi5jc3M/dj0xNDBhXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFqZGhhbmkmZGlzcGxheT1zd2FwXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSksIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgeyBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFqZGhhbmk6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIsIHJlbDogXCJzdHlsZXNoZWV0XCIgfSkpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0Ny5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21tZW50LCBudWxsLCB0aW1lKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2VcIiwgc3R5bGU6IHtcbiAgICBcIi0tcHJpbWFyeVwiOiB0aGVtZVtcIi0tcHJpbWFyeVwiXSA/PyBcIiMwMDc0Y2NcIixcbiAgICBcIi0tYmFja2dyb3VuZC1jb2xvclwiOiB0aGVtZVtcIi0tYmFja2dyb3VuZC1jb2xvclwiXSA/PyBcIndoaXRlXCIsXG4gICAgXCItLWJvcmRlci1jb2xvclwiOiB0aGVtZVtcIi0tYm9yZGVyLWNvbG9yXCJdID8/IFwiI2M0YzRjNFwiXG4gIH0gfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDcuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2UtY29udGVudFwiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q3LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwsIHByb3BzLnRpdGxlKSwgcHJvcHMuY2hpbGRyZW4pKSkpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvVGFibGUudHN4XG52YXIgaW1wb3J0X3JlYWN0OCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcblxuLy8gc3JjL3NlcnZpY2UvYXJyYXlUb09iamVjdHMudHNcbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XG4gIHZhciBrZXlzID0gYXJyWzBdO1xuICByZXR1cm4gYXJyLnNsaWNlKDEpLm1hcChmdW5jdGlvbihyb3cpIHtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24ob2JqLCBrZXksIGkpIHtcbiAgICAgIG9ialtrZXldID0gcm93W2ldO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gIH0pO1xufVxuXG4vLyBzcmMvc2VydmljZS9nb29nbGUvbG9hZEZyb21TaGVldC50c1xudmFyIGxvYWRGcm9tU2hlZXQgPSAoc291cmNlKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHZhciB1cmwgPSBgaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vdjQvc3ByZWFkc2hlZXRzLyR7c291cmNlfS92YWx1ZXMvU2hlZXQxYDtcbiAgY29uc3QgZ2FwaTIgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgdmFyIGFjY2Vzc1Rva2VuID0gZ2FwaTIuYXV0aC5nZXRUb2tlbigpLmFjY2Vzc190b2tlbjtcbiAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBhY2Nlc3NUb2tlbik7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzXG4gIH07XG4gIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBzcHJlYWRzaGVldCBkYXRhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgcmFuZ2UgPSBkYXRhLnZhbHVlcztcbiAgICByZXNvbHZlKGFycmF5VG9PYmplY3QocmFuZ2UpKTtcbiAgfSk7XG59KS5jYXRjaCgoZSkgPT4ge1xuICB0aHJvdyBlLnJlc3VsdC5lcnJvcjtcbn0pO1xuXG4vLyBzcmMvY29tcG9uZW50cy9UYWJsZS50c3hcbnZhciBUYWJsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSAoMCwgaW1wb3J0X3JlYWN0OC51c2VTdGF0ZSkoW10pO1xuICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhMiA9IGF3YWl0IGxvYWRGcm9tU2hlZXQocHJvcHMuc291cmNlKTtcbiAgICBjb25zdCBjaGFuZ2VkRGF0YSA9IGRhdGEyLm1hcCgoZSkgPT4ge1xuICAgICAgT2JqZWN0LmVudHJpZXMocHJvcHMuY2VsbFZhbHVlcyA/PyB7fSkubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgZnVuYyA9IHZhbHVlO1xuICAgICAgICBlW2tleV0gPSBmdW5jKGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgICBzZXREYXRhKGNoYW5nZWREYXRhKTtcbiAgfTtcbiAgKDAsIGltcG9ydF9yZWFjdDgudXNlRWZmZWN0KSgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBuZXdBcGkub25DaGFuZ2UobG9hZERhdGEpO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbcHJvcHMuc291cmNlXSk7XG4gIGNvbnN0IGNvbHVtbnMgPSAoMCwgaW1wb3J0X3JlYWN0OC51c2VNZW1vKSgoKSA9PiB7XG4gICAgY29uc3QgY29sdW1uU2V0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgICBwcm9wcy5jb2x1bW5PcmRlcj8ubWFwKChlKSA9PiBjb2x1bW5TZXQuYWRkKGUpKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhPy5bMF0gPz8ge30pLm1hcCgoZSkgPT4gY29sdW1uU2V0LmFkZChlKSk7XG4gICAgcmV0dXJuIFsuLi5jb2x1bW5TZXRdO1xuICB9LCBbZGF0YSwgSlNPTi5zdHJpbmdpZnkocHJvcHMuY29sdW1uT3JkZXIpXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaW1wb3J0X3JlYWN0OC5GcmFnbWVudCwgbnVsbCwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250YWluZXIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0YWJsZS1jb250YWluZXJcIiB9LCBkYXRhIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5sZW5ndGggPiAwICYmIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3Q4LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ0YWJsZVwiLCBzdHlsZToge1xuICAgIFwiLS1udW1iZXItb2YtY29sdW1uc1wiOiBjb2x1bW5zLmxlbmd0aCxcbiAgICBcIi0tbnVtYmVyLW9mLXJvd3NcIjogXCIyMFwiXG4gIH0gfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sIGNvbHVtbnMubWFwKFxuICAgIChoZWFkZXIsIGpuZGV4KSA9PiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGpuZGV4IH0sIGhlYWRlcilcbiAgKSksIGRhdGEubWFwKFxuICAgIChlLCBpbmRleCkgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBpbmRleCwgY2xhc3NOYW1lOiBcInJvd1wiIH0sIGNvbHVtbnMubWFwKFxuICAgICAgKGNvbHVtbikgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBjb2x1bW4gfSwgZVtjb2x1bW5dKVxuICAgICkpXG4gICkpLCAhKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkgJiYgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDguZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIHsgc3R5bGU6IHsgd2hpdGVTcGFjZTogXCJicmVhay1zcGFjZXNcIiB9IH0sIFwiRmFpbGVkIHRvIGxvYWQgdGFibGUgXCIsIHByb3BzLnNvdXJjZSwgXCIgUmVhc29uOlwiLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0OC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpKSkpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvRm9ybS50c3hcbnZhciBpbXBvcnRfcmVhY3QxMCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcblxuLy8gc3JjL3NlcnZpY2UvZ29vZ2xlL3VwbG9hZFRvRmlsZS50c1xudmFyIHVwbG9hZEZvcm1EYXRhVG9Gb2xkZXIgPSAocGFyZW50SWQsIGRhdGEpID0+IGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBnYXBpMiA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICBjb25zdCBpZFRva2VuID0gZ2FwaTIuY2xpZW50LmdldFRva2VuKCkuYWNjZXNzX3Rva2VuO1xuICByZXR1cm4gZmV0Y2goXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91cGxvYWQvZHJpdmUvdjMvZmlsZXM/dXBsb2FkVHlwZT1yZXN1bWFibGVcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtpZFRva2VufWAsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgIH0pLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6IFwiZm9ybS1kYXRhLmpzb25cIixcbiAgICAgIHBhcmVudHM6IFtwYXJlbnRJZF1cbiAgICB9KVxuICB9KS50aGVuKGFzeW5jIChhcGlSZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiBmZXRjaChhd2FpdCBhcGlSZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpID8/IFwiXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtpZFRva2VufWAsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9KSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvYXRvbXMvVGl0bGUudHN4XG52YXIgaW1wb3J0X3JlYWN0OSA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBUaXRsZSA9IChwcm9wcykgPT4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRpdGxlXCIgfSwgcHJvcHMuY2hpbGRyZW4pO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Gb3JtLnRzeFxudmFyIEZvcm1Db250ZXh0ID0gKDAsIGltcG9ydF9yZWFjdDEwLmNyZWF0ZUNvbnRleHQpKHtcbiAgc3RhdGU6IHt9LFxuICBzZXRTdGF0ZTogKC4uLmFyZ3MpID0+IHtcbiAgfVxufSk7XG52YXIgRm9ybSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9ICgwLCBpbXBvcnRfcmVhY3QxMC51c2VTdGF0ZSkoe30pO1xuICBjb25zdCBvblN1Ym1pdCA9ICgwLCBpbXBvcnRfcmVhY3QxMC51c2VDYWxsYmFjaykoKGV2ZW50KSA9PiB7XG4gICAgdXBsb2FkRm9ybURhdGFUb0ZvbGRlcihwcm9wcy5mb2xkZXJJZCwgc3RhdGUpKGV2ZW50KS50aGVuKCgpID0+IHtcbiAgICAgIGlmICghZ2xvYmFsVGhpcy5kb2N1bWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpemlUb2FzdC5zdWNjZXNzKHtcbiAgICAgICAgaWNvbjogXCJpY29uLXBlcnNvblwiLFxuICAgICAgICB0aXRsZTogXCJVcGxvYWQgc3VjY2VzZnVsbFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b21SaWdodFwiXG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgaWYgKCFnbG9iYWxUaGlzLmRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGl6aVRvYXN0LmVycm9yKHtcbiAgICAgICAgdGltZW91dDogMmU0LFxuICAgICAgICB0aXRsZTogYCR7ZS5uYW1lfToke2UubWVzc2FnZX1gLFxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b21SaWdodFwiXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW3N0YXRlXSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGltcG9ydF9yZWFjdDEwLkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcmRDb250YWluZXIsIG51bGwsIHByb3BzLnRpdGxlICYmIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIG51bGwsIHByb3BzLnRpdGxlKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBjbGFzc05hbWU6IFwiZm9ybVwiLCBvblN1Ym1pdDogKGUpID0+IG9uU3VibWl0KGUpIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QxMC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHsgc3RhdGUsIHNldFN0YXRlIH0gfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDEwLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRlbnRcIiB9LCBwcm9wcy5jaGlsZHJlbikpLCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInN1Ym1pdC1jb250YWluZXJcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0MTAuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgbnVsbCwgXCJTdWJtaXRcIikpKSkpO1xufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvYXRvbXMvSW5wdXQudHN4XG52YXIgaW1wb3J0X3JlYWN0MTEgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIga2ViYWJUb1NlbnRlbmNlID0gKHN0cikgPT4gc3RyLnNwbGl0KFwiLVwiKS5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKS5qb2luKFwiIFwiKTtcbnZhciBjYW1lbFRvU2VudGVuY2UgPSAoc3RyKSA9PiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKS5yZXBsYWNlKC9eLi8sIChzdHIyKSA9PiBzdHIyLnRvVXBwZXJDYXNlKCkpO1xudmFyIHNuYWtlVG9TZW50ZW5jZSA9IChzdHIpID0+IHN0ci5zcGxpdChcIl9cIikubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSkuam9pbihcIiBcIik7XG52YXIgbG93ZXJjYXNlSWdub3JpbmdHcm91cHMgPSAoc3RyKSA9PiBzdHIucmVwbGFjZUFsbCgvKFthLXpdfFxccykoW0EtWl0pKFthLXpdfFxccykvZywgKG1hdGNoLCBwMSwgcDIsIHAzKSA9PiBwMSArIHAyLnRvTG93ZXJDYXNlKCkgKyBwMyk7XG52YXIgc3RyaW5nVG9TZW50ZW5jZSA9IChzdHIpID0+IHtcbiAgaWYgKHN0ci5pbmNsdWRlcyhcIi1cIikpIHtcbiAgICByZXR1cm4ga2ViYWJUb1NlbnRlbmNlKHN0cik7XG4gIH0gZWxzZSBpZiAoc3RyLmluY2x1ZGVzKFwiX1wiKSkge1xuICAgIHJldHVybiBzbmFrZVRvU2VudGVuY2Uoc3RyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2FtZWxUb1NlbnRlbmNlKHN0cik7XG4gIH1cbn07XG52YXIgZmlsZVRvQmFzZTY0ID0gKGZpbGUpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUocmVhZGVyPy5yZXN1bHQ/LnNwbGl0Py4oXCIsXCIpWzFdKTtcbiAgICB9O1xuICB9KTtcbn07XG52YXIgSW5wdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgc2V0U3RhdGUgfSA9ICgwLCBpbXBvcnRfcmVhY3QxMS51c2VDb250ZXh0KShGb3JtQ29udGV4dCk7XG4gICgwLCBpbXBvcnRfcmVhY3QxMS51c2VFZmZlY3QpKCgpID0+IHtcbiAgICBwcm9wcy52YWx1ZSA/PyBzZXRTdGF0ZShwcm9wcy52YWx1ZSk7XG4gIH0sIFtwcm9wcy52YWx1ZV0pO1xuICBjb25zdCByZWYgPSAoMCwgaW1wb3J0X3JlYWN0MTEudXNlUmVmKShudWxsKTtcbiAgKDAsIGltcG9ydF9yZWFjdDExLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIGlmIChwcm9wcy50eXBlICE9PSBcImZpbGVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIHJlZi5jdXJyZW50LnZhbHVlID0gbnVsbDtcbiAgICB9XG4gIH0sIFtwcm9wcy50eXBlLCByZWZdKTtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoMCwgaW1wb3J0X3JlYWN0MTEudXNlQ2FsbGJhY2spKChlKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGU/LnRhcmdldD8uZmlsZXM/LlswXTtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJmaWxlXCIpIHtcbiAgICAgIGZpbGVUb0Jhc2U2NChmaWxlKS50aGVuKChmaWxlRGF0YSkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbcHJvcHMubmFtZV06IHsgZGF0YTogZmlsZURhdGEsIG1pbWVUeXBlOiBmaWxlLnR5cGUgfSB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbcHJvcHMubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9LCBbcHJvcHMudHlwZSwgc2V0U3RhdGUsIHN0YXRlXSk7XG4gIGNvbnN0IHZhbHVlID0gKDAsIGltcG9ydF9yZWFjdDExLnVzZU1lbW8pKCgpID0+IHtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gXCJmaWxlXCIpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZVtTdHJpbmcocHJvcHMubmFtZSldO1xuICB9LCBbc3RhdGVdKTtcbiAgKDAsIGltcG9ydF9yZWFjdDExLnVzZUVmZmVjdCkoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50ICYmIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtwcm9wcy5uYW1lXTogcmVmLmN1cnJlbnQudmFsdWUgfSk7XG4gIH0sIFtyZWYuY3VycmVudF0pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDExLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgY2xhc3NOYW1lOiBcImlucHV0XCIgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDExLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiaW5wdXQtbmFtZVwiIH0sIGxvd2VyY2FzZUlnbm9yaW5nR3JvdXBzKHN0cmluZ1RvU2VudGVuY2UocHJvcHMubmFtZSkpKSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdDExLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBcImlucHV0XCIsXG4gICAge1xuICAgICAgcmVmLFxuICAgICAgdHlwZTogcHJvcHMudHlwZSA/PyBcInRleHRcIixcbiAgICAgIHZhbHVlLFxuICAgICAgcmVxdWlyZWQ6IHByb3BzLmlzT3B0aW9uYWwgJiYgZmFsc2UgfHwgdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IHByb3BzLmNhcHR1cmUsXG4gICAgICBhY2NlcHQ6IHByb3BzLmFjY2VwdCxcbiAgICAgIG9uQ2hhbmdlXG4gICAgfVxuICApKTtcbn07XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBJbnB1dCxcbiAgTGluayxcbiAgUGFnZSxcbiAgVGFibGVcbn0pO1xuIiwgIm1vZHVsZS5leHBvcnRzID0ge30iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIFBhZ2UgfSBmcm9tIFwiYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlXCI7XG5pbXBvcnQgeyBmb2xkZXJJZCB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgbmV3R29vZ2xlU2Vzc2lvbiBmcm9tIFwiYW51ZDEyLmdpdGh1Yi5pb19qb2JfYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRm9sZGVySWQgPSBcIjExenFGN0JLQS03aHZjT051U21iVTJSR0hyeG1MYWZObFwiO1xudHlwZSBEYXRhID0gUmVjb3JkPFwibmFtZVwiIHwgXCJpbWFnZVwiIHwgXCJtb250aHNcIiwgYW55PlxuXG5leHBvcnQgZGVmYXVsdCAoXG4gIDxQYWdlIHRpdGxlPVwiQm94ZXMgQWRkXCI+XG4gICAgPEZvcm0gZm9sZGVySWQ9e2NyZWF0ZUZvbGRlcklkfT5cbiAgICAgIDxJbnB1dDxEYXRhPiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgIDxJbnB1dDxEYXRhPiBuYW1lPVwiaW1hZ2VcIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBjYXB0dXJlPVwiZW52aXJvbm1lbnRcIiAvPlxuICAgICAgPElucHV0PERhdGE+IG5hbWU9XCJtb250aHNcIiB0eXBlPVwibnVtYmVyXCIgLz5cbiAgICA8L0Zvcm0+XG4gIDwvUGFnZT5cbik7XG5cbmV4cG9ydCBjb25zdCBhZGRKb2IgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGdsb2JhbEZzID0gKGF3YWl0IG5ld0dvb2dsZVNlc3Npb24oKSkuaW50b0RyaXZlKCk7XG4gIGNvbnN0IHBlbmRpbmcgPSBhd2FpdCBnbG9iYWxGcy5maW5kT25lQnlJZExhenkoY3JlYXRlRm9sZGVySWQpO1xuICBjb25zdCBmaWxlTGlzdCA9IGF3YWl0IHBlbmRpbmcuZmluZEJ5TmFtZShcImZvcm0tZGF0YS5qc29uXCIpO1xuICBpZiAoIWZpbGVMaXN0Py5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdHJhc2ggPSBhd2FpdCBnbG9iYWxGcy5maW5kT25lQnlJZChmb2xkZXJJZC50cmFzaCk7XG4gIGNvbnN0IGRiID0gKGF3YWl0IGdsb2JhbEZzLmZpbmRPbmVCeUlkKGZvbGRlcklkLmRiKSkuaW50b1NoZWV0KClcbiAgY29uc3QgaW1hZ2VzID0gYXdhaXQgZ2xvYmFsRnMuZmluZE9uZUJ5SWQoZm9sZGVySWQuaW1hZ2VzKTtcblxuICBjb25zdCByb3dzID0gYXdhaXQgUHJvbWlzZS5hbGwoZmlsZUxpc3QubWFwKGFzeW5jIGZpbGUgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmaWxlLmJvZHlKc29uPERhdGE+KCk7XG4gICAgY29uc3QgaW1hZ2VEYXRhID0gQnVmZmVyLmZyb20oZGF0YS5pbWFnZS5kYXRhLCAnYmFzZTY0Jyk7XG4gICAgYXdhaXQgZmlsZS5tb3ZlVG8odHJhc2gpO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdW5kZWZpbmVkLFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICBpbWFnZTogdW5kZWZpbmVkLFxuICAgICAgICBpZDogZmlsZS5pZCxcbiAgICAgICAgaW1hZ2VMaW5rOiAoYXdhaXQgaW1hZ2VzLmNyZWF0ZShmaWxlLmlkLCBkYXRhLmltYWdlLm1pbWVUeXBlLCBpbWFnZURhdGEpKS5saW5rXG4gICAgICB9XG4gICAgfVxuICB9KSk7XG4gIGF3YWl0IGRiLnNhdmVBbGwocm93cyk7XG59IiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIFBhZ2UsIFRhYmxlLCB9IGZyb20gXCJhbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2VcIjtcblxuZXhwb3J0IGNvbnN0IGZvbGRlcklkID0ge1xuICB0cmFzaDogXCIxTndKdVN5UTRyRm9JNkkwN3ZBd2ptbTYyWDN6dUNOeHZcIixcbiAgZGI6IFwiMUJsSFhuSkpQdVd1MF9WRGUtSkFKelowWEFSX01wbEVXNDVUbm1kTWVLZklcIixcbiAgaW1hZ2VzOiBcIjFnZnBMaXRQQVp0V0Y1b21rOTdkQjNJWGJmX2xlV1hQcFwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoXG4gIDxQYWdlIHRpdGxlPVwiQm94ZXNcIj5cbiAgICA8TGluayBocmVmPXtcImFkZFwifT5BZGQ8L0xpbms+XG4gICAgPFRhYmxlIHNvdXJjZT17Zm9sZGVySWQuZGJ9IC8+XG4gIDwvUGFnZT5cbikiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsYUFBTyxVQUFVLFdBQVc7QUFBQTtBQUFBOzs7QUNBNUI7QUFBQTtBQUFBLFVBQUlBLFlBQVcsT0FBTztBQUN0QixVQUFJQyxhQUFZLE9BQU87QUFDdkIsVUFBSUMsb0JBQW1CLE9BQU87QUFDOUIsVUFBSUMscUJBQW9CLE9BQU87QUFDL0IsVUFBSUMsZ0JBQWUsT0FBTztBQUMxQixVQUFJQyxnQkFBZSxPQUFPLFVBQVU7QUFDcEMsVUFBSUMsWUFBVyxDQUFDLFFBQVEsUUFBUTtBQUM5QixpQkFBUyxRQUFRO0FBQ2YsVUFBQUwsV0FBVSxRQUFRLE1BQU0sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLFlBQVksS0FBSyxDQUFDO0FBQUEsTUFDaEU7QUFDQSxVQUFJTSxlQUFjLENBQUMsSUFBSSxNQUFNLFFBQVEsU0FBUztBQUM1QyxZQUFJLFFBQVEsT0FBTyxTQUFTLFlBQVksT0FBTyxTQUFTLFlBQVk7QUFDbEUsbUJBQVMsT0FBT0osbUJBQWtCLElBQUk7QUFDcEMsZ0JBQUksQ0FBQ0UsY0FBYSxLQUFLLElBQUksR0FBRyxLQUFLLFFBQVE7QUFDekMsY0FBQUosV0FBVSxJQUFJLEtBQUssRUFBRSxLQUFLLE1BQU0sS0FBSyxHQUFHLEdBQUcsWUFBWSxFQUFFLE9BQU9DLGtCQUFpQixNQUFNLEdBQUcsTUFBTSxLQUFLLFdBQVcsQ0FBQztBQUFBLFFBQ3ZIO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFDQSxVQUFJTSxXQUFVLENBQUMsS0FBSyxZQUFZLFlBQVksU0FBUyxPQUFPLE9BQU9SLFVBQVNJLGNBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHRztBQUFBO0FBQUE7QUFBQTtB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QkFBWSxNQUFLLFVBQVMsTUFBSyxVQUFTLENBQzNDLENBQ0Y7QUFHSyxNQUFNLFNBQVMsWUFBWTtBQUNoQyxVQUFNLFlBQVksVUFBTSxzQkFBQUMsU0FBaUIsR0FBRyxVQUFVO0FBQ3RELFVBQU0sVUFBVSxNQUFNLFNBQVMsZ0JBQWdCLGNBQWM7QUFDN0QsVUFBTSxXQUFXLE1BQU0sUUFBUSxXQUFXLGdCQUFnQjtBQUMxRCxRQUFJLENBQUMsVUFBVSxRQUFRO0FBQ3JCO0FBQUEsSUFDRjtBQUNBLFVBQU0sUUFBUSxNQUFNLFNBQVMsWUFBWSxTQUFTLEtBQUs7QUFDdkQsVUFBTSxNQUFNLE1BQU0sU0FBUyxZQUFZLFNBQVMsRUFBRSxHQUFHLFVBQVU7QUFDL0QsVUFBTSxTQUFTLE1BQU0sU0FBUyxZQUFZLFNBQVMsTUFBTTtBQUV6RCxVQUFNLE9BQU8sTUFBTSxRQUFRLElBQUksU0FBUyxJQUFJLE9BQU0sU0FBUTtBQUN4RCxZQUFNLE9BQU8sTUFBTSxLQUFLLFNBQWU7QUFDdkMsWUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sTUFBTSxRQUFRO0FBQ3ZELFlBQU0sS0FBSyxPQUFPLEtBQUs7QUFDdkIsYUFBTztBQUFBLFFBQ0wsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFVBQ0osR0FBRztBQUFBLFVBQ0gsT0FBTztBQUFBLFVBQ1AsSUFBSSxLQUFLO0FBQUEsVUFDVCxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssSUFBSSxLQUFLLE1BQU0sVUFBVSxTQUFTLEdBQUc7QUFBQSxRQUM1RTtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUMsQ0FBQztBQUNGLFVBQU0sR0FBRyxRQUFRLElBQUk7QUFBQSxFQUN2QjsiLAogICJuYW1lcyI6IFsiX19jcmVhdGUiLCAiX19kZWZQcm9wIiwgIl9fZ2V0T3duUHJvcERlc2MiLCAiX19nZXRPd25Qcm9wTmFtZXMiLCAiX19nZXRQcm90b09mIiwgIl9faGFzT3duUHJvcCIsICJfX2V4cG9ydCIsICJfX2NvcHlQcm9wcyIsICJfX3RvRVNNIiwgIl9fdG9Db21tb25KUyIsICJGb3JtIiwgIklucHV0IiwgIkxpbmsiLCAiUGFnZSIsICJUYWJsZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0MiIsICJpbXBvcnRfcmVhY3QzIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfYW51ZDEyX2dpdGh1YiIsICJSZWFjdCIsICJpbXBvcnRfYW51ZDEyX2dpdGh1YiIsICJSZWFjdCIsICJuZXdHb29nbGVTZXNzaW9uIl0KfQo=
