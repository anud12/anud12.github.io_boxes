var mainComponent = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
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

  // node_modules/anud12.github.io_ui_base/src/components/Comment.tsx
  var import_react, Comment;
  var init_Comment = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/Comment.tsx"() {
      import_react = __toESM(require_react());
      Comment = ({ children }) => {
        return /* @__PURE__ */ import_react.default.createElement("div", { dangerouslySetInnerHTML: { __html: `<!-- ${children} -->` } });
      };
    }
  });

  // node_modules/anud12.github.io_ui_base/src/components/Container.tsx
  var import_react2, CardContainer;
  var init_Container = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/Container.tsx"() {
      import_react2 = __toESM(require_react());
      CardContainer = (props) => {
        return /* @__PURE__ */ import_react2.default.createElement("div", { className: "container-container" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: `container card-container ${props.className ?? ""}`.trim() }, props.children));
      };
    }
  });

  // node_modules/anud12.github.io_ui_base/src/service/google/config.ts
  var config;
  var init_config = __esm({
    "node_modules/anud12.github.io_ui_base/src/service/google/config.ts"() {
      config = {
        apiKey: "AIzaSyBtQ2WOyIUnaSWAhl3s5PA_LZkWtpWz5iA",
        clientId: "985280907031-ffvfnc8pi0ane99lso9dbl1m2l5oc9nn.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/userinfo.profile ",
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]
      };
    }
  });

  // node_modules/anud12.github.io_ui_base/src/service/google/loadGoogleDependencies.ts
  var loadScript, loadGoogleDependencies;
  var init_loadGoogleDependencies = __esm({
    "node_modules/anud12.github.io_ui_base/src/service/google/loadGoogleDependencies.ts"() {
      loadScript = (src) => new Promise((resolve, reject) => {
        if (!globalThis.document) {
          return;
        }
        resolve();
      });
      loadGoogleDependencies = Promise.all([
        loadScript("https://apis.google.com/js/api.js"),
        loadScript("https://accounts.google.com/gsi/client")
      ]);
    }
  });

  // node_modules/anud12.github.io_ui_base/src/service/google/gapiClientPromise.ts
  var gapiClientPromise;
  var init_gapiClientPromise = __esm({
    "node_modules/anud12.github.io_ui_base/src/service/google/gapiClientPromise.ts"() {
      init_config();
      init_loadGoogleDependencies();
      gapiClientPromise = new Promise(async (resolve) => {
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
    }
  });

  // node_modules/anud12.github.io_ui_base/src/service/google/getExpirationDate.ts
  var getExpirationDate;
  var init_getExpirationDate = __esm({
    "node_modules/anud12.github.io_ui_base/src/service/google/getExpirationDate.ts"() {
      init_gapiClientPromise();
      getExpirationDate = async () => {
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
    }
  });

  // node_modules/anud12.github.io_ui_base/src/service/google/tokenClientPromise.ts
  var tokenClientPromise;
  var init_tokenClientPromise = __esm({
    "node_modules/anud12.github.io_ui_base/src/service/google/tokenClientPromise.ts"() {
      init_config();
      init_loadGoogleDependencies();
      tokenClientPromise = new Promise(async (res) => {
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
    }
  });

  // node_modules/anud12.github.io_ui_base/src/service/impl/newApi.ts
  function addQueryParam(value) {
    const newUrl = new URL(window.location.href);
    newUrl.hash = JSON.stringify(value);
    window.history.replaceState(null, "", newUrl.href);
  }
  var newApi;
  var init_newApi = __esm({
    "node_modules/anud12.github.io_ui_base/src/service/impl/newApi.ts"() {
      init_gapiClientPromise();
      init_getExpirationDate();
      init_tokenClientPromise();
      newApi = {
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
    }
  });

  // node_modules/anud12.github.io_ui_base/src/components/atoms/Link.tsx
  var import_react3, Link;
  var init_Link = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/atoms/Link.tsx"() {
      import_react3 = __toESM(require_react());
      init_newApi();
      Link = (props) => {
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
    }
  });

  // node_modules/anud12.github.io_ui_base/src/components/atoms/Button.tsx
  var import_react4, Button;
  var init_Button = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/atoms/Button.tsx"() {
      import_react4 = __toESM(require_react());
      Button = (props) => {
        return /* @__PURE__ */ import_react4.default.createElement("button", { ...props, className: "button" }, props.children);
      };
    }
  });

  // node_modules/anud12.github.io_ui_base/src/components/api/signIn.tsx
  var import_react5, SignIn;
  var init_signIn = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/api/signIn.tsx"() {
      import_react5 = __toESM(require_react());
      init_newApi();
      init_Button();
      SignIn = () => {
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
    }
  });

  // node_modules/anud12.github.io_ui_base/src/components/Header.tsx
  var import_react6, buildBack, buildPath, Header;
  var init_Header = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/Header.tsx"() {
      import_react6 = __toESM(require_react());
      init_Container();
      init_Link();
      init_signIn();
      buildBack = (index) => new Array(index + 1).fill("..").join("/");
      buildPath = () => {
        const href = globalThis?.window?.location.href;
        const url = href ? new URL(href) : void 0;
        const path = url?.pathname?.split("/").filter((e) => e) ?? [];
        path.reverse();
        path.splice(0, 1);
        path.reverse();
        return path;
      };
      Header = (props) => {
        const path = buildPath();
        return /* @__PURE__ */ import_react6.default.createElement(import_react6.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(CardContainer, null, /* @__PURE__ */ import_react6.default.createElement("div", { className: "header-content" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "header-title" }, props.children), /* @__PURE__ */ import_react6.default.createElement("div", { className: "header-login" }, /* @__PURE__ */ import_react6.default.createElement(SignIn, null))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "border-top header-url-chips" }, /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement(Link, { href: "/" }, "Home")), path.reverse().map(
          (e, index) => /* @__PURE__ */ import_react6.default.createElement("div", { key: e }, /* @__PURE__ */ import_react6.default.createElement(Link, { href: buildBack(index) }, e))
        ).reverse())));
      };
    }
  });

  // node_modules/anud12.github.io_ui_base/src/components/Page.tsx
  var import_react7, time, Page;
  var init_Page = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/Page.tsx"() {
      import_react7 = __toESM(require_react());
      init_Comment();
      init_Header();
      time = (/* @__PURE__ */ new Date()).toISOString();
      Page = (props) => {
        const theme = props.theme ?? {};
        return /* @__PURE__ */ import_react7.default.createElement("html", null, /* @__PURE__ */ import_react7.default.createElement("head", null, /* @__PURE__ */ import_react7.default.createElement("link", { href: "https://anud.ro/ui_base/src/main.css", type: "text/css", rel: "stylesheet" }), /* @__PURE__ */ import_react7.default.createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,-25" }), /* @__PURE__ */ import_react7.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), /* @__PURE__ */ import_react7.default.createElement("script", { src: "https://apis.google.com/js/api.js" }), /* @__PURE__ */ import_react7.default.createElement("script", { src: "https://accounts.google.com/gsi/client" }), /* @__PURE__ */ import_react7.default.createElement("script", { src: "https://izitoast.marcelodolza.com/js/iziToast.min.js?v=140b" }), /* @__PURE__ */ import_react7.default.createElement("link", { href: "https://izitoast.marcelodolza.com/css/iziToast.min.css?v=140a", rel: "stylesheet" }), /* @__PURE__ */ import_react7.default.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Rajdhani&display=swap", rel: "stylesheet" }), /* @__PURE__ */ import_react7.default.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap", rel: "stylesheet" })), /* @__PURE__ */ import_react7.default.createElement("body", null, /* @__PURE__ */ import_react7.default.createElement(Comment, null, time), /* @__PURE__ */ import_react7.default.createElement("div", { className: "page", style: {
          "--primary": theme["--primary"] ?? "#0074cc",
          "--background-color": theme["--background-color"] ?? "white",
          "--border-color": theme["--border-color"] ?? "#c4c4c4"
        } }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "page-content" }, /* @__PURE__ */ import_react7.default.createElement(Header, null, props.title), props.children))));
      };
    }
  });

  // node_modules/anud12.github.io_ui_base/src/service/google/uploadToFile.ts
  var uploadFormDataToFolder;
  var init_uploadToFile = __esm({
    "node_modules/anud12.github.io_ui_base/src/service/google/uploadToFile.ts"() {
      init_gapiClientPromise();
      uploadFormDataToFolder = (parentId, data) => async (event) => {
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
    }
  });

  // node_modules/anud12.github.io_ui_base/src/components/atoms/Title.tsx
  var import_react8, Title;
  var init_Title = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/atoms/Title.tsx"() {
      import_react8 = __toESM(require_react());
      Title = (props) => /* @__PURE__ */ import_react8.default.createElement("div", { className: "title" }, props.children);
    }
  });

  // node_modules/anud12.github.io_ui_base/src/components/Form.tsx
  var import_react9, FormContext, Form;
  var init_Form = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/Form.tsx"() {
      import_react9 = __toESM(require_react());
      init_uploadToFile();
      init_Container();
      init_Button();
      init_Title();
      FormContext = (0, import_react9.createContext)({
        state: {},
        setState: (...args) => {
        }
      });
      Form = (props) => {
        const [state, setState] = (0, import_react9.useState)({});
        const onSubmit = (0, import_react9.useCallback)((event) => {
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
        return /* @__PURE__ */ import_react9.default.createElement(import_react9.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(CardContainer, null, props.title && /* @__PURE__ */ import_react9.default.createElement(Title, null, props.title), /* @__PURE__ */ import_react9.default.createElement("form", { className: "form", onSubmit: (e) => onSubmit(e) }, /* @__PURE__ */ import_react9.default.createElement(FormContext.Provider, { value: { state, setState } }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "form-content" }, props.children)), /* @__PURE__ */ import_react9.default.createElement("div", { className: "submit-container" }, /* @__PURE__ */ import_react9.default.createElement(Button, null, "Submit")))));
      };
    }
  });

  // node_modules/anud12.github.io_ui_base/src/components/atoms/Input.tsx
  var import_react10, kebabToSentence, camelToSentence, snakeToSentence, lowercaseIgnoringGroups, stringToSentence, fileToBase64, Input;
  var init_Input = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/atoms/Input.tsx"() {
      import_react10 = __toESM(require_react());
      init_Form();
      kebabToSentence = (str) => str.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      camelToSentence = (str) => str.replace(/([A-Z])/g, " $1").replace(/^./, (str2) => str2.toUpperCase());
      snakeToSentence = (str) => str.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      lowercaseIgnoringGroups = (str) => str.replaceAll(/([a-z]|\s)([A-Z])([a-z]|\s)/g, (match, p1, p2, p3) => p1 + p2.toLowerCase() + p3);
      stringToSentence = (str) => {
        if (str.includes("-")) {
          return kebabToSentence(str);
        } else if (str.includes("_")) {
          return snakeToSentence(str);
        } else {
          return camelToSentence(str);
        }
      };
      fileToBase64 = (file) => {
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
      Input = (props) => {
        const { state, setState } = (0, import_react10.useContext)(FormContext);
        const ref = (0, import_react10.useRef)(null);
        (0, import_react10.useEffect)(() => {
          if (props.type !== "file") {
            return;
          }
          if (ref.current) {
            ref.current.value = null;
          }
        }, [props.type, ref]);
        const onChange = (0, import_react10.useCallback)((e) => {
          const file = e?.target?.files?.[0];
          if (props.type === "file") {
            fileToBase64(file).then((fileData) => {
              setState({ ...state, [props.name]: { data: fileData, mimeType: file.type } });
            });
            return;
          }
          setState({ ...state, [props.name]: e.target.value });
        }, [props.type, setState, state]);
        const value = (0, import_react10.useMemo)(() => {
          if (props.type === "file") {
            return void 0;
          }
          return state[props.name];
        }, [state]);
        (0, import_react10.useEffect)(() => {
          ref.current && setState({ ...state, [props.name]: ref.current.value });
        }, [ref.current]);
        return /* @__PURE__ */ import_react10.default.createElement("label", { className: "input" }, /* @__PURE__ */ import_react10.default.createElement("span", { className: "input-name" }, lowercaseIgnoringGroups(stringToSentence(props.name)), !props.isOptional && "*"), /* @__PURE__ */ import_react10.default.createElement(
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
      var import_react11 = __toESM(require_react());
      init_Page();
      init_Form();
      init_Input();
      module.exports = /* @__PURE__ */ import_react11.default.createElement(Page, { title: "Boxes Add" }, /* @__PURE__ */ import_react11.default.createElement(Form, { folderId: "11zqF7BKA-7hvcONuSmbU2RGHrxmLafNl" }, /* @__PURE__ */ import_react11.default.createElement(Input, { name: "name", type: "text" }), /* @__PURE__ */ import_react11.default.createElement(Input, { name: "image", type: "file", accept: "image/*", capture: "camera" }), /* @__PURE__ */ import_react11.default.createElement(Input, { name: "months", type: "number" })));
    }
  });
  return require_index_add();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsLXBsdWdpbjpyZWFjdCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL0NvbW1lbnQudHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLnRzeCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9zZXJ2aWNlL2dvb2dsZS9jb25maWcudHMiLCAibm9kZV9tb2R1bGVzL2FudWQxMi5naXRodWIuaW9fdWlfYmFzZS9zcmMvc2VydmljZS9nb29nbGUvbG9hZEdvb2dsZURlcGVuZGVuY2llcy50cyIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9zZXJ2aWNlL2dvb2dsZS9nYXBpQ2xpZW50UHJvbWlzZS50cyIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9zZXJ2aWNlL2dvb2dsZS9nZXRFeHBpcmF0aW9uRGF0ZS50cyIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9zZXJ2aWNlL2dvb2dsZS90b2tlbkNsaWVudFByb21pc2UudHMiLCAibm9kZV9tb2R1bGVzL2FudWQxMi5naXRodWIuaW9fdWlfYmFzZS9zcmMvc2VydmljZS9pbXBsL25ld0FwaS50cyIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL2F0b21zL0xpbmsudHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uLnRzeCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL2FwaS9zaWduSW4udHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL1BhZ2UudHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL3NlcnZpY2UvZ29vZ2xlL3VwbG9hZFRvRmlsZS50cyIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL2F0b21zL1RpdGxlLnRzeCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL0Zvcm0udHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvYXRvbXMvSW5wdXQudHN4IiwgImluZGV4X2FkZC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5SZWFjdCIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDb21tZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYDwhLS0gJHtjaGlsZHJlbn0gLS0+YCB9fSAvPlxufSIsICJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbnR5cGUgUHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7fT4gJiB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5leHBvcnQgY29uc3QgQ2FyZENvbnRhaW5lciA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyIGNhcmQtY29udGFpbmVyICR7cHJvcHMuY2xhc3NOYW1lID8/IFwiXCJ9YC50cmltKCl9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW4pID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyYH0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufSIsICJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lCdFEyV095SVVuYVNXQWhsM3M1UEFfTFprV3RwV3o1aUFcIixcbiAgICBjbGllbnRJZDogXCI5ODUyODA5MDcwMzEtZmZ2Zm5jOHBpMGFuZTk5bHNvOWRibDFtMmw1b2M5bm4uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIixcbiAgICBzY29wZTogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvdXNlcmluZm8ucHJvZmlsZSBcIixcbiAgICBkaXNjb3ZlcnlEb2NzOiBbJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL2RyaXZlL3YzL3Jlc3QnXSxcbn0iLCAiY29uc3QgbG9hZFNjcmlwdCA9IChzcmM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT5cbiAgICBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5kb2N1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgLy8gY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIC8vIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgICAgIC8vIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIC8vIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgICAgIC8vIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAvLyBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSlcblxuZXhwb3J0IGNvbnN0IGxvYWRHb29nbGVEZXBlbmRlbmNpZXMgPSBQcm9taXNlLmFsbChbXG4gICAgbG9hZFNjcmlwdCgnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzJyksXG4gICAgbG9hZFNjcmlwdCgnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2dzaS9jbGllbnQnKSxcbl0pIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgbG9hZEdvb2dsZURlcGVuZGVuY2llcyB9IGZyb20gXCIuL2xvYWRHb29nbGVEZXBlbmRlbmNpZXNcIjtcblxuZXhwb3J0IGNvbnN0IGdhcGlDbGllbnRQcm9taXNlID0gbmV3IFByb21pc2U8YW55Pihhc3luYyByZXNvbHZlID0+IHtcbiAgICBhd2FpdCBsb2FkR29vZ2xlRGVwZW5kZW5jaWVzO1xuICAgIGdhcGkubG9hZCgnY2xpZW50JywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBnYXBpLmNsaWVudC5pbml0KHtcbiAgICAgICAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IGNvbmZpZy5kaXNjb3ZlcnlEb2NzLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiBnYXBpLmNsaWVudC5sb2FkKCdzaGVldHMnLCAndjQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmVzb2x2ZShnYXBpKTtcbiAgICB9KTtcbn0pIiwgImltcG9ydCB7IGdhcGlDbGllbnRQcm9taXNlIH0gZnJvbSBcIi4vZ2FwaUNsaWVudFByb21pc2VcIjtcblxuZXhwb3J0IGNvbnN0IGdldEV4cGlyYXRpb25EYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGdhcGkgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgICBjb25zdCB0b2tlbiA9IGdhcGk/LmF1dGg/LmdldFRva2VuKCk7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHJlcyh1bmRlZmluZWQpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvdG9rZW5pbmZvP2FjY2Vzc190b2tlbj0ke3Rva2VuLmFjY2Vzc190b2tlbn1gKVxuICAgICAgICAudGhlbihhc3luYyByZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBnZXRFeHBpcmF0aW9uRGF0ZSBzdGF0dXMgJHtyZXMuc3RhdHVzfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHJlcy5qc29uKCkpPy5leHBpcmVzX2luO1xuICAgICAgICB9KTtcbn07IiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgbG9hZEdvb2dsZURlcGVuZGVuY2llcyB9IGZyb20gXCIuL2xvYWRHb29nbGVEZXBlbmRlbmNpZXNcIjtcblxuZXhwb3J0IGNvbnN0IHRva2VuQ2xpZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlPGFueT4oYXN5bmMgcmVzID0+IHtcbiAgICBhd2FpdCBsb2FkR29vZ2xlRGVwZW5kZW5jaWVzO1xuICAgIGNvbnN0IHRva2VuQ2xpZW50ID0gZ29vZ2xlLmFjY291bnRzLm9hdXRoMi5pbml0VG9rZW5DbGllbnQoe1xuICAgICAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRJZCxcbiAgICAgICAgc2NvcGU6IGNvbmZpZy5zY29wZSxcbiAgICAgICAgcmVkaXJlY3RfdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiLFxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXModG9rZW5DbGllbnQpO1xufSkiLCAiaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xuaW1wb3J0IHsgZ2FwaUNsaWVudFByb21pc2UgfSBmcm9tIFwiLi4vZ29vZ2xlL2dhcGlDbGllbnRQcm9taXNlXCI7XG5pbXBvcnQgeyBnZXRFeHBpcmF0aW9uRGF0ZSB9IGZyb20gXCIuLi9nb29nbGUvZ2V0RXhwaXJhdGlvbkRhdGVcIjtcbmltcG9ydCB7IHRva2VuQ2xpZW50UHJvbWlzZSB9IGZyb20gXCIuLi9nb29nbGUvdG9rZW5DbGllbnRQcm9taXNlXCI7XG5mdW5jdGlvbiBhZGRRdWVyeVBhcmFtKHZhbHVlKSB7XG4gICAgY29uc3QgbmV3VXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgbmV3VXJsLmhhc2ggPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybC5ocmVmKTtcbn1cblxuZXhwb3J0IGNvbnN0IG5ld0FwaTogQXBpID0ge1xuICAgIHNlc3Npb25OYW1lOiAoKSA9PiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgZ2FwaSA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICAgICAgICBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICdwYXRoJzogJ2h0dHBzOi8vcGVvcGxlLmdvb2dsZWFwaXMuY29tL3YxL3Blb3BsZS9tZT9wZXJzb25GaWVsZHM9bmFtZXMnLFxuICAgICAgICAgICAgJ21ldGhvZCc6ICdHRVQnLFxuICAgICAgICAgICAgJ2NhbGxiYWNrJzogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZT8ubmFtZXM/LlswXT8uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSxcbiAgICBsb2FkRnJvbVVybDogYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBnYXBpID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzRnJvbVVybCA9IGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKSk7XG4gICAgICAgIGlmIChjcmVkZW50aWFsc0Zyb21VcmwpIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gSlNPTi5wYXJzZShjcmVkZW50aWFsc0Zyb21VcmwpO1xuICAgICAgICAgICAgYXdhaXQgZ2FwaS5jbGllbnQuaW5pdCh7fSk7XG4gICAgICAgICAgICBnYXBpLmNsaWVudC5zZXRUb2tlbihjcmVkZW50aWFscyk7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3QXBpLW9uQ2hhbmdlJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlOiAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgZm4gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcIm5ld0FwaS1vbkNoYW5nZVwiLCBmbik7XG4gICAgICAgIHJldHVybiAoKSA9PiBnbG9iYWxUaGlzPy5kb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm5ld0FwaS1vbkNoYW5nZVwiLCBmbik7XG4gICAgfSxcbiAgICBsb2dvdXQ6IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZ2FwaSA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICAgICAgICBnYXBpLmNsaWVudC5zZXRUb2tlbihudWxsKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdBcGktb25DaGFuZ2UnKSlcbiAgICB9LFxuICAgIGxvZ2luOiBhc3luYyAoKSA9PiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbkNsaWVudCA9IGF3YWl0IHRva2VuQ2xpZW50UHJvbWlzZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGF3YWl0IG5ld0FwaS5sb2FkRnJvbVVybCgpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZ2V0RXhwaXJhdGlvbkRhdGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuXG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5DbGllbnQuY2FsbGJhY2sgPSAoY3JlZGVudGlhbHNSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgYWRkUXVlcnlQYXJhbShjcmVkZW50aWFsc1Jlc3BvbnNlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdBcGktb25DaGFuZ2UnKSlcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdG9rZW5DbGllbnQucmVxdWVzdEFjY2Vzc1Rva2VuKHsgcHJvbXB0OiAnY29uc2VudCcgfSk7XG4gICAgfSlcbn0iLCAiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge25ld0FwaX0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvaW1wbC9uZXdBcGlcIjtcbnR5cGUgUHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7fT4gJiB7XG4gICAgaHJlZjogc3RyaW5nLFxufVxuXG5leHBvcnQgY29uc3QgTGluayA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3QXBpLm9uQ2hhbmdlKCgpID0+IHtcbiAgICAgICAgICAgIGZuKClcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmbik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZuKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj17cHJvcHMuaHJlZiArIHNlYXJjaFBhcmFtc30+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2E+XG59IiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG50eXBlIFByb3BzID0gUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8UmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+LCBIVE1MQnV0dG9uRWxlbWVudD5cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICByZXR1cm4gPGJ1dHRvbiB7Li4ucHJvcHN9IGNsYXNzTmFtZT1cImJ1dHRvblwiPntwcm9wcy5jaGlsZHJlbn08L2J1dHRvbj5cbn0iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnYXBpQ2xpZW50UHJvbWlzZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2dvb2dsZS9nYXBpQ2xpZW50UHJvbWlzZVwiO1xuaW1wb3J0IHsgbmV3QXBpIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvaW1wbC9uZXdBcGlcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9hdG9tcy9CdXR0b25cIjtcblxuZXhwb3J0IGNvbnN0IFNpZ25JbiA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgICBjb25zdCBjYWxsYmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBuZXdBcGkubG9nb3V0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbmV3QXBpLmxvZ2luKCk7XG4gICAgfSwgW3N0YXRlXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuZXdBcGkuc2Vzc2lvbk5hbWUoKS50aGVuKHNldFN0YXRlKTtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBuZXdBcGkub25DaGFuZ2UoYXN5bmMgZSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0ZShhd2FpdCBuZXdBcGkuc2Vzc2lvbk5hbWUoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdBcGkubG9hZEZyb21VcmwoKTtcbiAgICAgICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjYWxsYmFja30+XG4gICAgICAgICAgICB7c3RhdGUgPyBgTG9nb3V0IG9mICR7c3RhdGV9YCA6IFwiTG9naW5cIn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgPC8+XG59IiwgImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmRDb250YWluZXIgfSBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi9hdG9tcy9MaW5rXCI7XG5pbXBvcnQgeyBEaXZpZGVySCB9IGZyb20gXCIuL0RpdmlkZXJIXCI7XG5pbXBvcnQgeyBTaWduSW4gfSBmcm9tIFwiLi9hcGkvc2lnbkluXCI7XG50eXBlIFByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e30+O1xuXG5jb25zdCBidWlsZEJhY2sgPSBpbmRleCA9PiBuZXcgQXJyYXkoaW5kZXggKyAxKS5maWxsKFwiLi5cIikuam9pbihcIi9cIilcbmNvbnN0IGJ1aWxkUGF0aCA9ICgpID0+IHtcbiAgICBjb25zdCBocmVmID0gZ2xvYmFsVGhpcz8ud2luZG93Py5sb2NhdGlvbi5ocmVmXG4gICAgY29uc3QgdXJsOiBVUkwgfCB1bmRlZmluZWQgPSBocmVmID8gbmV3IFVSTChocmVmKSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwYXRoID0gdXJsPy5wYXRobmFtZT8uc3BsaXQoXCIvXCIpLmZpbHRlcihlID0+IGUpID8/IFtdO1xuICAgIHBhdGgucmV2ZXJzZSgpO1xuICAgIHBhdGguc3BsaWNlKDAsIDEpO1xuICAgIHBhdGgucmV2ZXJzZSgpO1xuICAgIHJldHVybiBwYXRoO1xufVxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCBwYXRoID0gYnVpbGRQYXRoKCk7XG4gICAgcmV0dXJuIDxGcmFnbWVudD5cbiAgICAgICAgPENhcmRDb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJoZWFkZXItY29udGVudFwifT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZ25JbiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgaGVhZGVyLXVybC1jaGlwc1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7cGF0aC5yZXZlcnNlKCkubWFwKChlLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YnVpbGRCYWNrKGluZGV4KX0+e2V9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApLnJldmVyc2UoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRDb250YWluZXI+XG4gICAgPC9GcmFnbWVudD5cbn0iLCAiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIFByb3BzV2l0aENoaWxkcmVuLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLi9Db21tZW50XCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcblxudHlwZSBQcm9wcyA9IFByb3BzV2l0aENoaWxkcmVuPHtcbiAgICB0aXRsZT86IFJlYWN0Tm9kZSxcbiAgICB0aGVtZT86IHtcbiAgICAgICAgXCItLXByaW1hcnlcIj86IHN0cmluZyxcbiAgICAgICAgXCItLWJhY2tncm91bmQtY29sb3JcIj86IHN0cmluZyxcbiAgICAgICAgXCItLWJvcmRlci1jb2xvclwiPzogc3RyaW5nLFxuICAgIH1cbn0+O1xuY29uc3QgdGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbmV4cG9ydCBjb25zdCBQYWdlID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHRoZW1lID0gcHJvcHMudGhlbWUgPz8ge307XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGh0bWw+XG4gICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPXtcImh0dHBzOi8vYW51ZC5yby91aV9iYXNlL3NyYy9tYWluLmNzc1wifSB0eXBlPVwidGV4dC9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDQ4LDMwMCwwLC0yNVwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vZ3NpL2NsaWVudFwiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9peml0b2FzdC5tYXJjZWxvZG9semEuY29tL2pzL2l6aVRvYXN0Lm1pbi5qcz92PTE0MGJcIiAvPlxuXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vaXppdG9hc3QubWFyY2Vsb2RvbHphLmNvbS9jc3MvaXppVG9hc3QubWluLmNzcz92PTE0MGFcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWpkaGFuaSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWpkaGFuaTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cblxuICAgICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgPENvbW1lbnQ+e3RpbWV9PC9Db21tZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIFwiLS1wcmltYXJ5XCI6IHRoZW1lW1wiLS1wcmltYXJ5XCJdID8/IFwiIzAwNzRjY1wiLFxuICAgICAgICAgICAgICAgICAgICBcIi0tYmFja2dyb3VuZC1jb2xvclwiOiB0aGVtZVtcIi0tYmFja2dyb3VuZC1jb2xvclwiXSA/PyBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiLS1ib3JkZXItY29sb3JcIjogdGhlbWVbJy0tYm9yZGVyLWNvbG9yJ10gPz8gXCIjYzRjNGM0XCIsXG4gICAgICAgICAgICAgICAgfSBhcyBDU1NQcm9wZXJ0aWVzfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXI+e3Byb3BzLnRpdGxlfTwvSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuXG4gICAgKVxufSIsICJpbXBvcnQgeyBnYXBpQ2xpZW50UHJvbWlzZSB9IGZyb20gXCIuL2dhcGlDbGllbnRQcm9taXNlXCI7XG5cbmNvbnN0IGZpbGVUb0Jhc2U2NCA9IChmaWxlOiBGaWxlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKHJlYWRlcj8ucmVzdWx0IGFzIHN0cmluZyk/LnNwbGl0Py4oJywnKVsxXSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBmb3JtRGF0YVRvSnNvbihmb3JtRGF0YSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGF3YWl0IGZpbGVUb0Jhc2U2NCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xufVxuXG5leHBvcnQgY29uc3QgdXBsb2FkRm9ybURhdGFUb0ZvbGRlciA9IChwYXJlbnRJZDogc3RyaW5nLCBkYXRhKSA9PiBhc3luYyAoZXZlbnQ6IFN1Ym1pdEV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50KTtcbiAgICBjb25zdCBnYXBpID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgY29uc3QgaWRUb2tlbiA9IGdhcGkuY2xpZW50LmdldFRva2VuKCkuYWNjZXNzX3Rva2VuO1xuXG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXBsb2FkL2RyaXZlL3YzL2ZpbGVzP3VwbG9hZFR5cGU9cmVzdW1hYmxlXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7aWRUb2tlbn1gLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04J1xuICAgICAgICB9KSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbmFtZTogJ2Zvcm0tZGF0YS5qc29uJyxcbiAgICAgICAgICAgIHBhcmVudHM6IFtwYXJlbnRJZF1cbiAgICAgICAgfSlcbiAgICB9KS50aGVuKGFzeW5jIGFwaVJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGF3YWl0IGFwaVJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpID8/IFwiXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7aWRUb2tlbn1gLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgfSlcbiAgICB9KVxufSIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSAocHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPHt9PikgPT4gPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj4iLCAiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBQcm9wc1dpdGhDaGlsZHJlbiwgUmVhY3ROb2RlLCBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXBsb2FkRm9ybURhdGFUb0ZvbGRlciB9IGZyb20gXCIuLi9zZXJ2aWNlL2dvb2dsZS91cGxvYWRUb0ZpbGVcIlxuaW1wb3J0IHsgQ2FyZENvbnRhaW5lciB9IGZyb20gXCIuL0NvbnRhaW5lclwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9hdG9tcy9CdXR0b25cIlxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi9hdG9tcy9UaXRsZVwiXG50eXBlIFByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW4gJiB7XG4gICAgdGl0bGU/OiBSZWFjdE5vZGVcbiAgICBmb2xkZXJJZDogc3RyaW5nXG59XG5leHBvcnQgY29uc3QgRm9ybUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICBzdGF0ZToge30gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgRmlsZT4sXG4gICAgc2V0U3RhdGU6ICguLi5hcmdzKSA9PiB7IH1cbn0pO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgICB1cGxvYWRGb3JtRGF0YVRvRm9sZGVyKHByb3BzLmZvbGRlcklkLCBzdGF0ZSkoZXZlbnQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLmRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2ljb24tcGVyc29uJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1VwbG9hZCBzdWNjZXNmdWxsJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbVJpZ2h0J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkuY2F0Y2goKGU6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpemlUb2FzdC5lcnJvcih7XG4gICAgICAgICAgICAgICAgdGltZW91dDogMjAwMDAsXG4gICAgICAgICAgICAgICAgdGl0bGU6IGAke2UubmFtZX06JHtlLm1lc3NhZ2V9YCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbVJpZ2h0J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LCBbc3RhdGVdKVxuICAgIHJldHVybiA8RnJhZ21lbnQ+XG4gICAgICAgIDxDYXJkQ29udGFpbmVyPlxuICAgICAgICAgICAge3Byb3BzLnRpdGxlICYmXG4gICAgICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UaXRsZT59XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX0+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBzZXRTdGF0ZSB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvRnJhZ21lbnQ+XG59IiwgImltcG9ydCBSZWFjdCwge1Byb3BzV2l0aENoaWxkcmVuLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGb3JtQ29udGV4dH0gZnJvbSBcIi4uL0Zvcm1cIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICB0eXBlPzogSFRNTElucHV0RWxlbWVudFsndHlwZSddLFxuICBhY2NlcHQ/OiBzdHJpbmcsXG4gIGlzT3B0aW9uYWw/OiBib29sZWFuXG4gIGNhcHR1cmU/OiBcImNhbWVyYVwiIHwgXCJ1c2VyXCI7XG59XG5cbmNvbnN0IGtlYmFiVG9TZW50ZW5jZSA9IChzdHI6IHN0cmluZykgPT4gc3RyLnNwbGl0KCctJykubWFwKHdvcmQgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpLmpvaW4oJyAnKTtcblxuY29uc3QgY2FtZWxUb1NlbnRlbmNlID0gKHN0cjogc3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAnICQxJykucmVwbGFjZSgvXi4vLCBzdHIgPT4gc3RyLnRvVXBwZXJDYXNlKCkpO1xuXG5jb25zdCBzbmFrZVRvU2VudGVuY2UgPSAoc3RyOiBzdHJpbmcpID0+IHN0ci5zcGxpdCgnXycpLm1hcCh3b3JkID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKS5qb2luKCcgJyk7XG5cbmNvbnN0IGxvd2VyY2FzZUlnbm9yaW5nR3JvdXBzID0gKHN0cjogc3RyaW5nKSA9PiBzdHIucmVwbGFjZUFsbCgvKFthLXpdfFxccykoW0EtWl0pKFthLXpdfFxccykvZywgKG1hdGNoLCBwMSwgcDIsIHAzKSA9PiBwMSArIHAyLnRvTG93ZXJDYXNlKCkgKyBwMyk7XG5cbmNvbnN0IHN0cmluZ1RvU2VudGVuY2UgPSBzdHIgPT4ge1xuICBpZiAoc3RyLmluY2x1ZGVzKCctJykpIHtcbiAgICByZXR1cm4ga2ViYWJUb1NlbnRlbmNlKHN0cik7XG4gIH0gZWxzZSBpZiAoc3RyLmluY2x1ZGVzKCdfJykpIHtcbiAgICByZXR1cm4gc25ha2VUb1NlbnRlbmNlKHN0cik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNhbWVsVG9TZW50ZW5jZShzdHIpO1xuICB9XG59O1xuY29uc3QgZmlsZVRvQmFzZTY0ID0gKGZpbGU6IEZpbGUgfCB1bmRlZmluZWQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4ocmVzb2x2ZSA9PiB7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoKHJlYWRlcj8ucmVzdWx0IGFzIHN0cmluZyk/LnNwbGl0Py4oJywnKVsxXSk7XG4gICAgfVxuICB9KVxufVxuZXhwb3J0IGNvbnN0IElucHV0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7c3RhdGUsIHNldFN0YXRlfSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudCB8IG51bGw+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy50eXBlICE9PSBcImZpbGVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIHJlZi5jdXJyZW50LnZhbHVlID0gbnVsbCBhcyBhbnk7XG4gICAgfVxuXG4gIH0sIFtwcm9wcy50eXBlLCByZWZdKVxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlPy50YXJnZXQ/LmZpbGVzPy5bMF07XG4gICAgaWYgKHByb3BzLnR5cGUgPT09IFwiZmlsZVwiKSB7XG4gICAgICBmaWxlVG9CYXNlNjQoZmlsZSkudGhlbihmaWxlRGF0YSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgW3Byb3BzLm5hbWVdOiB7ZGF0YTpmaWxlRGF0YSwgbWltZVR5cGU6IGZpbGUudHlwZX19KVxuICAgICAgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0U3RhdGUoey4uLnN0YXRlLCBbcHJvcHMubmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcbiAgfSwgW3Byb3BzLnR5cGUsIHNldFN0YXRlLCBzdGF0ZV0pXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKHByb3BzLnR5cGUgPT09IFwiZmlsZVwiKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVbcHJvcHMubmFtZV07XG4gIH0sIFtzdGF0ZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudCAmJiBzZXRTdGF0ZSh7Li4uc3RhdGUsIFtwcm9wcy5uYW1lXTogcmVmLmN1cnJlbnQudmFsdWV9KTtcbiAgfSwgW3JlZi5jdXJyZW50XSk7XG5cbiAgcmV0dXJuIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LW5hbWVcIj57bG93ZXJjYXNlSWdub3JpbmdHcm91cHMoc3RyaW5nVG9TZW50ZW5jZShwcm9wcy5uYW1lKSl9eyFwcm9wcy5pc09wdGlvbmFsICYmIFwiKlwifTwvc3Bhbj5cbiAgICA8aW5wdXQgcmVmPXtyZWZ9IHR5cGU9e3Byb3BzLnR5cGUgPz8gXCJ0ZXh0XCJ9XG4gICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgcmVxdWlyZWQ9e3Byb3BzLmlzT3B0aW9uYWwgJiYgZmFsc2UgfHwgdHJ1ZX1cbiAgICAgICAgICAgY2FwdHVyZT17cHJvcHMuY2FwdHVyZX1cbiAgICAgICAgICAgYWNjZXB0PXtwcm9wcy5hY2NlcHR9XG4gICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAvPlxuICA8L2xhYmVsPlxufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0ID0gKHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbjx7IG5hbWU6IHN0cmluZywgaXNPcHRpb25hbDogYm9vbGVhbiB9PikgPT4ge1xuICBjb25zdCB7c3RhdGUsIHNldFN0YXRlfSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTFNlbGVjdEVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudCAmJiBzZXRTdGF0ZSh7Li4uc3RhdGUsIFtwcm9wcy5uYW1lXTogcmVmLmN1cnJlbnQudmFsdWV9KTtcbiAgfSwgW3JlZi5jdXJyZW50XSlcbiAgcmV0dXJuIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LW5hbWVcIj57bG93ZXJjYXNlSWdub3JpbmdHcm91cHMoc3RyaW5nVG9TZW50ZW5jZShwcm9wcy5uYW1lKSl9eyFwcm9wcy5pc09wdGlvbmFsICYmIFwiKlwifTwvc3Bhbj5cbiAgICA8c2VsZWN0IHJlZj17cmVmfVxuICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZVtwcm9wcy5uYW1lXSBhcyBzdHJpbmcgPz8gXCJcIn1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtwcm9wcy5pc09wdGlvbmFsICYmIGZhbHNlIHx8IHRydWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXRlKHsuLi5zdGF0ZSwgW3Byb3BzLm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3NlbGVjdD5cbiAgPC9sYWJlbD5cbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcImFudWQxMi5naXRodWIuaW9fdWlfYmFzZS9zcmMvY29tcG9uZW50cy9QYWdlXCJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL0Zvcm1cIlxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL2F0b21zL0lucHV0XCI7XG5leHBvcnQgPSAoXG4gICAgPFBhZ2UgdGl0bGU9XCJCb3hlcyBBZGRcIj5cbiAgICAgICAgPEZvcm0gZm9sZGVySWQ9XCIxMXpxRjdCS0EtN2h2Y09OdVNtYlUyUkdIcnhtTGFmTmxcIj5cbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwiaW1hZ2VcIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBjYXB0dXJlPVwiY2FtZXJhXCIgLz5cbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwibW9udGhzXCIgdHlwZT1cIm51bWJlclwiIC8+XG4gICAgICAgIDwvRm9ybT5cbiAgICA8L1BhZ2U+XG4pIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxhQUFPLFVBQVUsV0FBVztBQUFBO0FBQUE7OztBQ0E1QixvQkFFYTtBQUZiO0FBQUE7QUFBQSxxQkFBa0I7QUFFWCxNQUFNLFVBQVUsQ0FBQyxFQUFFLFNBQVMsTUFBTTtBQUNyQyxlQUFPLDZCQUFBQSxRQUFBLGNBQUMsU0FBSSx5QkFBeUIsRUFBRSxRQUFRLFFBQVEsZUFBZSxHQUFHO0FBQUEsTUFDN0U7QUFBQTtBQUFBOzs7QUNKQSxNQUFBQyxlQUlhO0FBSmI7QUFBQTtBQUFBLE1BQUFBLGdCQUF5QztBQUlsQyxNQUFNLGdCQUFnQixDQUFDLFVBQWlCO0FBQzNDLGVBQU8sOEJBQUFDLFFBQUEsY0FBQyxTQUFJLFdBQVUseUJBQ2xCLDhCQUFBQSxRQUFBLGNBQUMsU0FBSSxXQUFXLDRCQUE0QixNQUFNLGFBQWEsS0FBSyxLQUFLLEtBQ3BFLE1BQU0sUUFDWCxDQUNKO0FBQUEsTUFDSjtBQUFBO0FBQUE7OztBQ1ZBLE1BQWE7QUFBYjtBQUFBO0FBQU8sTUFBTSxTQUFTO0FBQUEsUUFDbEIsUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1AsZUFBZSxDQUFDLDREQUE0RDtBQUFBLE1BQ2hGO0FBQUE7QUFBQTs7O0FDTEEsTUFBTSxZQWVPO0FBZmI7QUFBQTtBQUFBLE1BQU0sYUFBYSxDQUFDLFFBQ2hCLElBQUksUUFBYyxDQUFDLFNBQVMsV0FBVztBQUNuQyxZQUFJLENBQUMsV0FBVyxVQUFVO0FBQ3RCO0FBQUEsUUFDSjtBQUNBLGdCQUFRO0FBQUEsTUFRWixDQUFDO0FBRUUsTUFBTSx5QkFBeUIsUUFBUSxJQUFJO0FBQUEsUUFDOUMsV0FBVyxtQ0FBbUM7QUFBQSxRQUM5QyxXQUFXLHdDQUF3QztBQUFBLE1BQ3ZELENBQUM7QUFBQTtBQUFBOzs7QUNsQkQsTUFHYTtBQUhiO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTSxvQkFBb0IsSUFBSSxRQUFhLE9BQU0sWUFBVztBQUMvRCxjQUFNO0FBQ04sYUFBSyxLQUFLLFVBQVUsWUFBWTtBQUM1QixnQkFBTSxTQUFTLE1BQU0sS0FBSyxPQUFPLEtBQUs7QUFBQSxZQUNsQyxRQUFRLE9BQU87QUFBQSxZQUNmLGVBQWUsT0FBTztBQUFBLFVBQzFCLENBQUM7QUFDRCxnQkFBTSxJQUFJLFFBQWMsQ0FBQUMsYUFBVyxLQUFLLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBWTtBQUM1RSxZQUFBQSxTQUFRO0FBQUEsVUFDWixDQUFDLENBQUM7QUFDRixrQkFBUSxJQUFJO0FBQUEsUUFDaEIsQ0FBQztBQUFBLE1BQ0wsQ0FBQztBQUFBO0FBQUE7OztBQ2ZELE1BRWE7QUFGYjtBQUFBO0FBQUE7QUFFTyxNQUFNLG9CQUFvQixZQUFZO0FBQ3pDLGNBQU1DLFFBQU8sTUFBTTtBQUNuQixjQUFNLFFBQVFBLE9BQU0sTUFBTSxTQUFTO0FBQ25DLFlBQUksQ0FBQyxPQUFPO0FBQ1IsaUJBQU8sSUFBSSxRQUFRLFNBQU8sSUFBSSxNQUFTLENBQUM7QUFBQSxRQUM1QztBQUNBLGVBQU8sTUFBTSwrREFBK0QsTUFBTSxjQUFjLEVBQzNGLEtBQUssT0FBTSxRQUFPO0FBQ2YsY0FBSSxJQUFJLFdBQVcsS0FBSztBQUNwQixrQkFBTSxNQUFNLDRCQUE0QixJQUFJLFFBQVE7QUFBQSxVQUN4RDtBQUNBLGtCQUFRLE1BQU0sSUFBSSxLQUFLLElBQUk7QUFBQSxRQUMvQixDQUFDO0FBQUEsTUFDVDtBQUFBO0FBQUE7OztBQ2ZBLE1BR2E7QUFIYjtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU0scUJBQXFCLElBQUksUUFBYSxPQUFNLFFBQU87QUFDNUQsY0FBTTtBQUNOLGNBQU0sY0FBYyxPQUFPLFNBQVMsT0FBTyxnQkFBZ0I7QUFBQSxVQUN2RCxXQUFXLE9BQU87QUFBQSxVQUNsQixPQUFPLE9BQU87QUFBQSxVQUNkLGNBQWM7QUFBQSxVQUNkLFVBQVUsTUFBTTtBQUFBLFVBQ2hCO0FBQUEsUUFDSixDQUFDO0FBRUQsWUFBSSxXQUFXO0FBQUEsTUFDbkIsQ0FBQztBQUFBO0FBQUE7OztBQ1ZELFdBQVMsY0FBYyxPQUFPO0FBQzFCLFVBQU0sU0FBUyxJQUFJLElBQUksT0FBTyxTQUFTLElBQUk7QUFDM0MsV0FBTyxPQUFPLEtBQUssVUFBVSxLQUFLO0FBQ2xDLFdBQU8sUUFBUSxhQUFhLE1BQU0sSUFBSSxPQUFPLElBQUk7QUFBQSxFQUNyRDtBQVJBLE1BVWE7QUFWYjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT08sTUFBTSxTQUFjO0FBQUEsUUFDdkIsYUFBYSxNQUFNLElBQUksUUFBUSxPQUFNLFlBQVc7QUFDNUMsZ0JBQU1DLFFBQU8sTUFBTTtBQUNuQixVQUFBQSxNQUFLLE9BQU8sUUFBUTtBQUFBLFlBQ2hCLFFBQVE7QUFBQSxZQUNSLFVBQVU7QUFBQSxZQUNWLFlBQVksU0FBVSxVQUFVO0FBQzVCLHNCQUFRLFVBQVUsUUFBUSxDQUFDLEdBQUcsV0FBVztBQUFBLFlBQzdDO0FBQUEsVUFDSixDQUFDO0FBQUEsUUFDTCxDQUFDO0FBQUEsUUFDRCxhQUFhLFlBQVk7QUFDckIsZ0JBQU1BLFFBQU8sTUFBTTtBQUNuQixnQkFBTSxxQkFBcUIsVUFBVSxPQUFPLFNBQVMsS0FBSyxRQUFRLEtBQUssRUFBRSxDQUFDO0FBQzFFLGNBQUksb0JBQW9CO0FBQ3BCLGtCQUFNLGNBQWMsS0FBSyxNQUFNLGtCQUFrQjtBQUNqRCxrQkFBTUEsTUFBSyxPQUFPLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLFlBQUFBLE1BQUssT0FBTyxTQUFTLFdBQVc7QUFDaEMscUJBQVMsY0FBYyxJQUFJLFlBQVksaUJBQWlCLENBQUM7QUFBQSxVQUM3RDtBQUNBLGlCQUFPO0FBQUEsUUFDWDtBQUFBLFFBQ0EsVUFBVSxDQUFDLGFBQWE7QUFDcEIsZ0JBQU0sS0FBSyxDQUFDLFVBQVU7QUFDbEIscUJBQVMsS0FBSztBQUFBLFVBQ2xCO0FBQ0Esc0JBQVksVUFBVSxpQkFBaUIsbUJBQW1CLEVBQUU7QUFDNUQsaUJBQU8sTUFBTSxZQUFZLFVBQVUsb0JBQW9CLG1CQUFtQixFQUFFO0FBQUEsUUFDaEY7QUFBQSxRQUNBLFFBQVEsWUFBWTtBQUNoQixnQkFBTUEsUUFBTyxNQUFNO0FBQ25CLFVBQUFBLE1BQUssT0FBTyxTQUFTLElBQUk7QUFDekIsaUJBQU8sU0FBUyxPQUFPO0FBQ3ZCLG1CQUFTLGNBQWMsSUFBSSxZQUFZLGlCQUFpQixDQUFDO0FBQUEsUUFDN0Q7QUFBQSxRQUNBLE9BQU8sWUFBWSxJQUFJLFFBQWMsT0FBTyxZQUFZO0FBQ3BELGdCQUFNLGNBQWMsTUFBTTtBQUUxQixjQUFJO0FBQ0EsZ0JBQUksTUFBTSxPQUFPLFlBQVksR0FBRztBQUM1QixvQkFBTSxrQkFBa0I7QUFDeEI7QUFBQSxZQUNKO0FBQUEsVUFDSixRQUFFO0FBQUEsVUFFRjtBQUNBLHNCQUFZLFdBQVcsQ0FBQyx3QkFBd0I7QUFDNUMsMEJBQWMsbUJBQW1CO0FBQ2pDLHFCQUFTLGNBQWMsSUFBSSxZQUFZLGlCQUFpQixDQUFDO0FBQ3pELG9CQUFRO0FBQUEsVUFDWjtBQUVBLHNCQUFZLG1CQUFtQixFQUFFLFFBQVEsVUFBVSxDQUFDO0FBQUEsUUFDeEQsQ0FBQztBQUFBLE1BQ0w7QUFBQTtBQUFBOzs7QUNoRUEsTUFBQUMsZUFNYTtBQU5iO0FBQUE7QUFBQSxNQUFBQSxnQkFBOEQ7QUFDOUQ7QUFLTyxNQUFNLE9BQU8sQ0FBQyxVQUFpQjtBQUNsQyxjQUFNLENBQUMsY0FBYyxlQUFlLFFBQUksd0JBQWlCLEVBQUU7QUFDM0QscUNBQVUsTUFBTTtBQUNaLDBCQUFnQixPQUFPLFNBQVMsSUFBSTtBQUNwQyxnQkFBTSxLQUFLLE1BQU07QUFDYiw0QkFBZ0IsT0FBTyxTQUFTLElBQUk7QUFBQSxVQUN4QztBQUNBLGdCQUFNLGVBQWUsT0FBTyxTQUFTLE1BQU07QUFDdkMsZUFBRztBQUFBLFVBQ1AsQ0FBQztBQUNELGlCQUFPLGlCQUFpQixjQUFjLEVBQUU7QUFDeEMsaUJBQU8sTUFBTTtBQUNULG1CQUFPLG9CQUFvQixjQUFjLEVBQUU7QUFDM0MseUJBQWE7QUFBQSxVQUNqQjtBQUFBLFFBQ0osR0FBRyxDQUFDLENBQUM7QUFDTCxlQUFPLDhCQUFBQyxRQUFBLGNBQUMsT0FBRSxXQUFVLFFBQU8sTUFBTSxNQUFNLE9BQU8sZ0JBQ3pDLE1BQU0sUUFDWDtBQUFBLE1BQ0o7QUFBQTtBQUFBOzs7QUN6QkEsTUFBQUMsZUFJYTtBQUpiO0FBQUE7QUFBQSxNQUFBQSxnQkFBa0I7QUFJWCxNQUFNLFNBQVMsQ0FBQyxVQUFpQjtBQUNwQyxlQUFPLDhCQUFBQyxRQUFBLGNBQUMsWUFBUSxHQUFHLE9BQU8sV0FBVSxZQUFVLE1BQU0sUUFBUztBQUFBLE1BQ2pFO0FBQUE7QUFBQTs7O0FDTkEsTUFBQUMsZUFLYTtBQUxiO0FBQUE7QUFBQSxNQUFBQSxnQkFBd0Q7QUFFeEQ7QUFDQTtBQUVPLE1BQU0sU0FBUyxNQUFNO0FBQ3hCLGNBQU0sQ0FBQyxPQUFPLFFBQVEsUUFBSSx3QkFBNkIsTUFBUztBQUNoRSxjQUFNLGVBQVcsMkJBQVksTUFBTTtBQUMvQixjQUFJLE9BQU87QUFDUCxtQkFBTyxPQUFPO0FBQ2Q7QUFBQSxVQUNKO0FBQ0EsaUJBQU8sTUFBTTtBQUFBLFFBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFDVixxQ0FBVSxNQUFNO0FBQ1osaUJBQU8sWUFBWSxFQUFFLEtBQUssUUFBUTtBQUNsQyxnQkFBTSxjQUFjLE9BQU8sU0FBUyxPQUFNLE1BQUs7QUFDM0MscUJBQVMsTUFBTSxPQUFPLFlBQVksQ0FBQztBQUFBLFVBQ3ZDLENBQUM7QUFDRCxpQkFBTyxZQUFZO0FBQ25CLGlCQUFPO0FBQUEsUUFDWCxHQUFHLENBQUMsQ0FBQztBQUNMLGVBQU8sOEJBQUFDLFFBQUEsNEJBQUFBLFFBQUEsZ0JBQ0gsOEJBQUFBLFFBQUEsY0FBQyxVQUFPLFNBQVMsWUFDWixRQUFRLGFBQWEsVUFBVSxPQUNwQyxDQUNKO0FBQUEsTUFDSjtBQUFBO0FBQUE7OztBQzNCQSxNQUFBQyxlQU9NLFdBQ0EsV0FTTztBQWpCYjtBQUFBO0FBQUEsTUFBQUEsZ0JBQW1EO0FBQ25EO0FBQ0E7QUFFQTtBQUdBLE1BQU0sWUFBWSxXQUFTLElBQUksTUFBTSxRQUFRLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxLQUFLLEdBQUc7QUFDbkUsTUFBTSxZQUFZLE1BQU07QUFDcEIsY0FBTSxPQUFPLFlBQVksUUFBUSxTQUFTO0FBQzFDLGNBQU0sTUFBdUIsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3BELGNBQU0sT0FBTyxLQUFLLFVBQVUsTUFBTSxHQUFHLEVBQUUsT0FBTyxPQUFLLENBQUMsS0FBSyxDQUFDO0FBQzFELGFBQUssUUFBUTtBQUNiLGFBQUssT0FBTyxHQUFHLENBQUM7QUFDaEIsYUFBSyxRQUFRO0FBQ2IsZUFBTztBQUFBLE1BQ1g7QUFDTyxNQUFNLFNBQVMsQ0FBQyxVQUFpQjtBQUNwQyxjQUFNLE9BQU8sVUFBVTtBQUN2QixlQUFPLDhCQUFBQyxRQUFBLGNBQUMsOEJBQ0osOEJBQUFBLFFBQUEsY0FBQyxxQkFDRyw4QkFBQUEsUUFBQSxjQUFDLFNBQUksV0FBVyxvQkFDWiw4QkFBQUEsUUFBQSxjQUFDLFNBQUksV0FBVSxrQkFDVixNQUFNLFFBQ1gsR0FDQSw4QkFBQUEsUUFBQSxjQUFDLFNBQUksV0FBVSxrQkFDWCw4QkFBQUEsUUFBQSxjQUFDLFlBQU8sQ0FDWixDQUNKLEdBQ0EsOEJBQUFBLFFBQUEsY0FBQyxTQUFJLFdBQVUsaUNBQ1gsOEJBQUFBLFFBQUEsY0FBQyxhQUNHLDhCQUFBQSxRQUFBLGNBQUMsUUFBSyxNQUFLLE9BQUksTUFFZixDQUNKLEdBQ0MsS0FBSyxRQUFRLEVBQUU7QUFBQSxVQUFJLENBQUMsR0FBRyxVQUNwQiw4QkFBQUEsUUFBQSxjQUFDLFNBQUksS0FBSyxLQUNOLDhCQUFBQSxRQUFBLGNBQUMsUUFBSyxNQUFNLFVBQVUsS0FBSyxLQUFJLENBQUUsQ0FDckM7QUFBQSxRQUNKLEVBQUUsUUFBUSxDQUNkLENBQ0osQ0FDSjtBQUFBLE1BQ0o7QUFBQTtBQUFBOzs7QUMzQ0EsTUFBQUMsZUFZTSxNQUNPO0FBYmI7QUFBQTtBQUFBLE1BQUFBLGdCQUFtRTtBQUNuRTtBQUNBO0FBVUEsTUFBTSxRQUFPLG9CQUFJLEtBQUssR0FBRSxZQUFZO0FBQzdCLE1BQU0sT0FBTyxDQUFDLFVBQWlCO0FBQ2xDLGNBQU0sUUFBUSxNQUFNLFNBQVMsQ0FBQztBQUM5QixlQUNJLDhCQUFBQyxRQUFBLGNBQUMsY0FDRyw4QkFBQUEsUUFBQSxjQUFDLGNBQ0csOEJBQUFBLFFBQUEsY0FBQyxVQUFLLE1BQU0sd0NBQXdDLE1BQUssWUFBVyxLQUFJLGNBQWEsR0FDckYsOEJBQUFBLFFBQUEsY0FBQyxVQUFLLEtBQUksY0FBYSxNQUFLLHVHQUFzRyxHQUNsSSw4QkFBQUEsUUFBQSxjQUFDLFVBQUssTUFBSyxZQUFXLFNBQVEsdUNBQXNDLEdBRXBFLDhCQUFBQSxRQUFBLGNBQUMsWUFBTyxLQUFJLHFDQUFvQyxHQUNoRCw4QkFBQUEsUUFBQSxjQUFDLFlBQU8sS0FBSSwwQ0FBeUMsR0FDckQsOEJBQUFBLFFBQUEsY0FBQyxZQUFPLEtBQUksK0RBQThELEdBRTFFLDhCQUFBQSxRQUFBLGNBQUMsVUFBSyxNQUFLLGlFQUFnRSxLQUFJLGNBQWEsR0FDNUYsOEJBQUFBLFFBQUEsY0FBQyxVQUFLLE1BQUssa0VBQWlFLEtBQUksY0FBYSxHQUM3Riw4QkFBQUEsUUFBQSxjQUFDLFVBQUssTUFBSywyRUFBMEUsS0FBSSxjQUFhLENBRTFHLEdBQ0EsOEJBQUFBLFFBQUEsY0FBQyxjQUNHLDhCQUFBQSxRQUFBLGNBQUMsZUFBUyxJQUFLLEdBQ2YsOEJBQUFBLFFBQUEsY0FBQyxTQUFJLFdBQVUsUUFBTyxPQUFPO0FBQUEsVUFDekIsYUFBYSxNQUFNLFdBQVcsS0FBSztBQUFBLFVBQ25DLHNCQUFzQixNQUFNLG9CQUFvQixLQUFLO0FBQUEsVUFDckQsa0JBQWtCLE1BQU0sZ0JBQWdCLEtBQUs7QUFBQSxRQUNqRCxLQUNJLDhCQUFBQSxRQUFBLGNBQUMsU0FBSSxXQUFVLGtCQUNYLDhCQUFBQSxRQUFBLGNBQUMsY0FBUSxNQUFNLEtBQU0sR0FDcEIsTUFBTSxRQUNYLENBQ0osQ0FDSixDQUNKO0FBQUEsTUFHUjtBQUFBO0FBQUE7OztBQy9DQSxNQXdCYTtBQXhCYjtBQUFBO0FBQUE7QUF3Qk8sTUFBTSx5QkFBeUIsQ0FBQyxVQUFrQixTQUFTLE9BQU8sVUFBdUI7QUFDNUYsY0FBTSxlQUFlO0FBRXJCLGNBQU1DLFFBQU8sTUFBTTtBQUNuQixjQUFNLFVBQVVBLE1BQUssT0FBTyxTQUFTLEVBQUU7QUFFdkMsZUFBTyxNQUFNLHlFQUF5RTtBQUFBLFVBQ2xGLFFBQVE7QUFBQSxVQUNSLFNBQVMsSUFBSSxRQUFRO0FBQUEsWUFDakIsaUJBQWlCLFVBQVU7QUFBQSxZQUMzQixnQkFBZ0I7QUFBQSxVQUNwQixDQUFDO0FBQUEsVUFDRCxNQUFNLEtBQUssVUFBVTtBQUFBLFlBQ2pCLE1BQU07QUFBQSxZQUNOLFNBQVMsQ0FBQyxRQUFRO0FBQUEsVUFDdEIsQ0FBQztBQUFBLFFBQ0wsQ0FBQyxFQUFFLEtBQUssT0FBTSxnQkFBZTtBQUN6QixpQkFBTyxNQUFNLE1BQU0sWUFBWSxRQUFRLElBQUksVUFBVSxLQUFLLElBQUk7QUFBQSxZQUMxRCxRQUFRO0FBQUEsWUFDUixTQUFTLElBQUksUUFBUTtBQUFBLGNBQ2pCLGlCQUFpQixVQUFVO0FBQUEsY0FDM0IsZ0JBQWdCO0FBQUEsWUFDcEIsQ0FBQztBQUFBLFlBQ0QsTUFBTSxLQUFLLFVBQVUsSUFBSTtBQUFBLFVBQzdCLENBQUM7QUFBQSxRQUNMLENBQUM7QUFBQSxNQUNMO0FBQUE7QUFBQTs7O0FDbERBLE1BQUFDLGVBR2E7QUFIYjtBQUFBO0FBQUEsTUFBQUEsZ0JBQWtCO0FBR1gsTUFBTSxRQUFRLENBQUMsVUFBaUMsOEJBQUFDLFFBQUEsY0FBQyxTQUFJLFdBQVUsV0FBUyxNQUFNLFFBQVM7QUFBQTtBQUFBOzs7QUNIOUYsTUFBQUMsZUFTYSxhQUtBO0FBZGI7QUFBQTtBQUFBLE1BQUFBLGdCQUFvRztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUtPLE1BQU0sa0JBQWMsNkJBQWM7QUFBQSxRQUNyQyxPQUFPLENBQUM7QUFBQSxRQUNSLFVBQVUsSUFBSSxTQUFTO0FBQUEsUUFBRTtBQUFBLE1BQzdCLENBQUM7QUFFTSxNQUFNLE9BQU8sQ0FBQyxVQUFpQjtBQUNsQyxjQUFNLENBQUMsT0FBTyxRQUFRLFFBQUksd0JBQVMsQ0FBQyxDQUFDO0FBRXJDLGNBQU0sZUFBVywyQkFBWSxDQUFDLFVBQTRDO0FBQ3RFLGlDQUF1QixNQUFNLFVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLE1BQU07QUFDNUQsZ0JBQUksQ0FBQyxXQUFXLFVBQVU7QUFDdEI7QUFBQSxZQUNKO0FBQ0EscUJBQVMsUUFBUTtBQUFBLGNBQ2IsTUFBTTtBQUFBLGNBQ04sT0FBTztBQUFBLGNBQ1AsVUFBVTtBQUFBLFlBQ2QsQ0FBQztBQUFBLFVBQ0wsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFhO0FBQ25CLGdCQUFJLENBQUMsV0FBVyxVQUFVO0FBQ3RCO0FBQUEsWUFDSjtBQUNBLHFCQUFTLE1BQU07QUFBQSxjQUNYLFNBQVM7QUFBQSxjQUNULE9BQU8sR0FBRyxFQUFFLFFBQVEsRUFBRTtBQUFBLGNBQ3RCLFVBQVU7QUFBQSxZQUNkLENBQUM7QUFBQSxVQUNMLENBQUM7QUFBQSxRQUNMLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFDVixlQUFPLDhCQUFBQyxRQUFBLGNBQUMsOEJBQ0osOEJBQUFBLFFBQUEsY0FBQyxxQkFDSSxNQUFNLFNBQ0gsOEJBQUFBLFFBQUEsY0FBQyxhQUNJLE1BQU0sS0FDWCxHQUNKLDhCQUFBQSxRQUFBLGNBQUMsVUFBSyxXQUFVLFFBQU8sVUFBVSxDQUFDLE1BQU0sU0FBUyxDQUFDLEtBQzlDLDhCQUFBQSxRQUFBLGNBQUMsWUFBWSxVQUFaLEVBQXFCLE9BQU8sRUFBRSxPQUFPLFNBQVMsS0FDM0MsOEJBQUFBLFFBQUEsY0FBQyxTQUFJLFdBQVUsa0JBQ1YsTUFBTSxRQUNYLENBQ0osR0FDQSw4QkFBQUEsUUFBQSxjQUFDLFNBQUksV0FBVSxzQkFDWCw4QkFBQUEsUUFBQSxjQUFDLGNBQU8sUUFBTSxDQUNsQixDQUNKLENBQ0osQ0FDSjtBQUFBLE1BQ0o7QUFBQTtBQUFBOzs7QUN4REEsTUFBQUMsZ0JBV00saUJBRUEsaUJBRUEsaUJBRUEseUJBRUEsa0JBU0EsY0FhTztBQXpDYjtBQUFBO0FBQUEsTUFBQUEsaUJBQTRGO0FBQzVGO0FBVUEsTUFBTSxrQkFBa0IsQ0FBQyxRQUFnQixJQUFJLE1BQU0sR0FBRyxFQUFFLElBQUksVUFBUSxLQUFLLE9BQU8sQ0FBQyxFQUFFLFlBQVksSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHO0FBRTFILE1BQU0sa0JBQWtCLENBQUMsUUFBZ0IsSUFBSSxRQUFRLFlBQVksS0FBSyxFQUFFLFFBQVEsTUFBTSxDQUFBQyxTQUFPQSxLQUFJLFlBQVksQ0FBQztBQUU5RyxNQUFNLGtCQUFrQixDQUFDLFFBQWdCLElBQUksTUFBTSxHQUFHLEVBQUUsSUFBSSxVQUFRLEtBQUssT0FBTyxDQUFDLEVBQUUsWUFBWSxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUc7QUFFMUgsTUFBTSwwQkFBMEIsQ0FBQyxRQUFnQixJQUFJLFdBQVcsZ0NBQWdDLENBQUMsT0FBTyxJQUFJLElBQUksT0FBTyxLQUFLLEdBQUcsWUFBWSxJQUFJLEVBQUU7QUFFakosTUFBTSxtQkFBbUIsU0FBTztBQUM5QixZQUFJLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDckIsaUJBQU8sZ0JBQWdCLEdBQUc7QUFBQSxRQUM1QixXQUFXLElBQUksU0FBUyxHQUFHLEdBQUc7QUFDNUIsaUJBQU8sZ0JBQWdCLEdBQUc7QUFBQSxRQUM1QixPQUFPO0FBQ0wsaUJBQU8sZ0JBQWdCLEdBQUc7QUFBQSxRQUM1QjtBQUFBLE1BQ0Y7QUFDQSxNQUFNLGVBQWUsQ0FBQyxTQUEyQjtBQUMvQyxlQUFPLElBQUksUUFBNEIsYUFBVztBQUNoRCxjQUFJLENBQUMsTUFBTTtBQUNULG9CQUFRLE1BQVM7QUFDakI7QUFBQSxVQUNGO0FBQ0EsZ0JBQU0sU0FBUyxJQUFJLFdBQVc7QUFDOUIsaUJBQU8sY0FBYyxJQUFJO0FBQ3pCLGlCQUFPLFNBQVMsTUFBTTtBQUNwQixvQkFBUyxRQUFRLFFBQW1CLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUFBLFVBQ3JEO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUNPLE1BQU0sUUFBUSxDQUFDLFVBQWlCO0FBQ3JDLGNBQU0sRUFBQyxPQUFPLFNBQVEsUUFBSSwyQkFBVyxXQUFXO0FBQ2hELGNBQU0sVUFBTSx1QkFBZ0MsSUFBSTtBQUNoRCxzQ0FBVSxNQUFNO0FBQ2QsY0FBSSxNQUFNLFNBQVMsUUFBUTtBQUN6QjtBQUFBLFVBQ0Y7QUFDQSxjQUFJLElBQUksU0FBUztBQUNmLGdCQUFJLFFBQVEsUUFBUTtBQUFBLFVBQ3RCO0FBQUEsUUFFRixHQUFHLENBQUMsTUFBTSxNQUFNLEdBQUcsQ0FBQztBQUNwQixjQUFNLGVBQVcsNEJBQVksQ0FBQyxNQUEyQztBQUN2RSxnQkFBTSxPQUFPLEdBQUcsUUFBUSxRQUFRLENBQUM7QUFDakMsY0FBSSxNQUFNLFNBQVMsUUFBUTtBQUN6Qix5QkFBYSxJQUFJLEVBQUUsS0FBSyxjQUFZO0FBQ2xDLHVCQUFTLEVBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBQyxNQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUksRUFBQyxDQUFDO0FBQUEsWUFDekUsQ0FBQztBQUNEO0FBQUEsVUFDRjtBQUNBLG1CQUFTLEVBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRSxPQUFPLE1BQUssQ0FBQztBQUFBLFFBQ25ELEdBQUcsQ0FBQyxNQUFNLE1BQU0sVUFBVSxLQUFLLENBQUM7QUFDaEMsY0FBTSxZQUFRLHdCQUFRLE1BQU07QUFDMUIsY0FBSSxNQUFNLFNBQVMsUUFBUTtBQUN6QixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTyxNQUFNLE1BQU0sSUFBSTtBQUFBLFFBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFFVixzQ0FBVSxNQUFNO0FBQ2QsY0FBSSxXQUFXLFNBQVMsRUFBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsTUFBSyxDQUFDO0FBQUEsUUFDckUsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDO0FBRWhCLGVBQU8sK0JBQUFDLFFBQUEsY0FBQyxXQUFNLFdBQVUsV0FDdEIsK0JBQUFBLFFBQUEsY0FBQyxVQUFLLFdBQVUsZ0JBQWMsd0JBQXdCLGlCQUFpQixNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxjQUFjLEdBQUksR0FDOUcsK0JBQUFBLFFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUFNO0FBQUEsWUFBVSxNQUFNLE1BQU0sUUFBUTtBQUFBLFlBQzlCO0FBQUEsWUFDQSxVQUFVLE1BQU0sY0FBYyxTQUFTO0FBQUEsWUFDdkMsU0FBUyxNQUFNO0FBQUEsWUFDZixRQUFRLE1BQU07QUFBQSxZQUNkO0FBQUE7QUFBQSxRQUNQLENBQ0Y7QUFBQSxNQUNGO0FBQUE7QUFBQTs7O0FDcEZBO0FBQUE7QUFBQSxVQUFBQyxpQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsdUJBQ0ksK0JBQUFDLFFBQUEsY0FBQyxRQUFLLE9BQU0sZUFDUiwrQkFBQUEsUUFBQSxjQUFDLFFBQUssVUFBUyx1Q0FDWCwrQkFBQUEsUUFBQSxjQUFDLFNBQU0sTUFBSyxRQUFPLE1BQUssUUFBTyxHQUMvQiwrQkFBQUEsUUFBQSxjQUFDLFNBQU0sTUFBSyxTQUFRLE1BQUssUUFBTyxRQUFPLFdBQVUsU0FBUSxVQUFTLEdBQ2xFLCtCQUFBQSxRQUFBLGNBQUMsU0FBTSxNQUFLLFVBQVMsTUFBSyxVQUFTLENBQ3ZDLENBQ0o7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiLCAicmVzb2x2ZSIsICJnYXBpIiwgImdhcGkiLCAiaW1wb3J0X3JlYWN0IiwgIlJlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgIlJlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJnYXBpIiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgInN0ciIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiXQp9Cg==
