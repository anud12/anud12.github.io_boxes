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

  // node_modules/anud12.github.io_ui_base/src/components/atoms/Link.tsx
  var import_react3, Link;
  var init_Link = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/atoms/Link.tsx"() {
      import_react3 = __toESM(require_react());
      Link = (props) => {
        const [searchParams, setSearchParams] = (0, import_react3.useState)("");
        (0, import_react3.useEffect)(() => {
          setSearchParams(window.location.hash);
          const fn = () => {
            setSearchParams(window.location.hash);
          };
          window.addEventListener("hashchange", fn);
          return () => {
            window.removeEventListener("hashchange", fn);
          };
        }, []);
        return /* @__PURE__ */ import_react3.default.createElement("a", { className: "link", href: props.href + searchParams }, props.children);
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
        const script = document.createElement("script");
        script.async = true;
        script.defer = true;
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
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
        return /* @__PURE__ */ import_react7.default.createElement("html", null, /* @__PURE__ */ import_react7.default.createElement("head", null, /* @__PURE__ */ import_react7.default.createElement("link", { href: "https://anud.ro/ui_base/src/main.css", type: "text/css", rel: "stylesheet" }), /* @__PURE__ */ import_react7.default.createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,-25" }), /* @__PURE__ */ import_react7.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), /* @__PURE__ */ import_react7.default.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Rajdhani&display=swap", rel: "stylesheet" }), /* @__PURE__ */ import_react7.default.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap", rel: "stylesheet" })), /* @__PURE__ */ import_react7.default.createElement("body", null, /* @__PURE__ */ import_react7.default.createElement(Comment, null, time), /* @__PURE__ */ import_react7.default.createElement("div", { className: "page", style: {
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
        const formData = JSON.stringify(data);
        const gapi2 = await gapiClientPromise;
        const idToken = gapi2.client.getToken().access_token;
        fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable", {
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
          return await apiResponse.headers.get("Location");
        }).then(async (id) => {
          fetch(id ?? "", {
            method: "PUT",
            headers: new Headers({
              "Authorization": `Bearer ${idToken}`,
              "Content-Type": "application/json"
            }),
            body: formData
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
        return /* @__PURE__ */ import_react9.default.createElement(import_react9.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(CardContainer, null, props.title && /* @__PURE__ */ import_react9.default.createElement(Title, null, props.title), /* @__PURE__ */ import_react9.default.createElement("form", { className: "form", onSubmit: uploadFormDataToFolder(props.folderId, state) }, /* @__PURE__ */ import_react9.default.createElement(FormContext.Provider, { value: { state, setState } }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "form-content" }, props.children)), /* @__PURE__ */ import_react9.default.createElement("div", { className: "submit-container" }, /* @__PURE__ */ import_react9.default.createElement(Button, null, "Submit")))));
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
            console.log("onLoad");
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
              console.log("then");
              setState({ ...state, [props.name]: fileData });
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
        return /* @__PURE__ */ import_react10.default.createElement("label", { className: "input" }, /* @__PURE__ */ import_react10.default.createElement("span", { className: "input-name" }, lowercaseIgnoringGroups(stringToSentence(props.name))), /* @__PURE__ */ import_react10.default.createElement(
          "input",
          {
            ref,
            type: props.type ?? "text",
            value,
            capture: props.capture,
            accept: props.accept,
            onChange
          }
        ));
      };
    }
  });

  // index.tsx
  var require_src = __commonJS({
    "index.tsx"(exports, module) {
      var import_react11 = __toESM(require_react());
      init_Page();
      init_Form();
      init_Input();
      module.exports = /* @__PURE__ */ import_react11.default.createElement(Page, { title: "anud12.github.io" }, /* @__PURE__ */ import_react11.default.createElement(Form, { folderId: "1DwTbUSWf5kzNq84Kc08bJ9Wyw9ijfBuS" }, /* @__PURE__ */ import_react11.default.createElement(Input, { name: "name", type: "text" }), /* @__PURE__ */ import_react11.default.createElement(Input, { name: "image", type: "file", accept: "image/*", capture: "camera" }), /* @__PURE__ */ import_react11.default.createElement(Input, { name: "months", type: "number" })));
    }
  });
  return require_src();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsLXBsdWdpbjpyZWFjdCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL0NvbW1lbnQudHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLnRzeCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL2F0b21zL0xpbmsudHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL3NlcnZpY2UvZ29vZ2xlL2NvbmZpZy50cyIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9zZXJ2aWNlL2dvb2dsZS9sb2FkR29vZ2xlRGVwZW5kZW5jaWVzLnRzIiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL3NlcnZpY2UvZ29vZ2xlL2dhcGlDbGllbnRQcm9taXNlLnRzIiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL3NlcnZpY2UvZ29vZ2xlL2dldEV4cGlyYXRpb25EYXRlLnRzIiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL3NlcnZpY2UvZ29vZ2xlL3Rva2VuQ2xpZW50UHJvbWlzZS50cyIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9zZXJ2aWNlL2ltcGwvbmV3QXBpLnRzIiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uLnRzeCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL2FwaS9zaWduSW4udHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL1BhZ2UudHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL3NlcnZpY2UvZ29vZ2xlL3VwbG9hZFRvRmlsZS50cyIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL2F0b21zL1RpdGxlLnRzeCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL0Zvcm0udHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvYXRvbXMvSW5wdXQudHN4IiwgImluZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLlJlYWN0IiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IENvbW1lbnQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBgPCEtLSAke2NoaWxkcmVufSAtLT5gIH19IC8+XG59IiwgImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xudHlwZSBQcm9wcyA9IFByb3BzV2l0aENoaWxkcmVuPHt9PiAmIHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBDYXJkQ29udGFpbmVyID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXIgY2FyZC1jb250YWluZXIgJHtwcm9wcy5jbGFzc05hbWUgPz8gXCJcIn1gLnRyaW0oKX0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufVxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gKHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbikgPT4ge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXJgfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59IiwgImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xudHlwZSBQcm9wcyA9IFByb3BzV2l0aENoaWxkcmVuPHt9PiAmIHtcbiAgICBocmVmOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0U2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZuKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZm4pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj17cHJvcHMuaHJlZiArIHNlYXJjaFBhcmFtc30+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2E+XG59IiwgImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUJ0UTJXT3lJVW5hU1dBaGwzczVQQV9MWmtXdHBXejVpQVwiLFxuICAgIGNsaWVudElkOiBcIjk4NTI4MDkwNzAzMS1mZnZmbmM4cGkwYW5lOTlsc285ZGJsMW0ybDVvYzlubi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiLFxuICAgIHNjb3BlOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHMgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5wcm9maWxlIFwiLFxuICAgIGRpc2NvdmVyeURvY3M6IFsnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZGlzY292ZXJ5L3YxL2FwaXMvZHJpdmUvdjMvcmVzdCddLFxufSIsICJjb25zdCBsb2FkU2NyaXB0ID0gKHNyYzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PlxuICAgIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLmRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSlcblxuZXhwb3J0IGNvbnN0IGxvYWRHb29nbGVEZXBlbmRlbmNpZXMgPSBQcm9taXNlLmFsbChbXG4gICAgbG9hZFNjcmlwdCgnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpLmpzJyksXG4gICAgbG9hZFNjcmlwdCgnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2dzaS9jbGllbnQnKSxcbl0pIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgbG9hZEdvb2dsZURlcGVuZGVuY2llcyB9IGZyb20gXCIuL2xvYWRHb29nbGVEZXBlbmRlbmNpZXNcIjtcblxuZXhwb3J0IGNvbnN0IGdhcGlDbGllbnRQcm9taXNlID0gbmV3IFByb21pc2U8YW55Pihhc3luYyByZXNvbHZlID0+IHtcbiAgICBhd2FpdCBsb2FkR29vZ2xlRGVwZW5kZW5jaWVzO1xuICAgIGdhcGkubG9hZCgnY2xpZW50JywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBnYXBpLmNsaWVudC5pbml0KHtcbiAgICAgICAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgICAgICAgIGRpc2NvdmVyeURvY3M6IGNvbmZpZy5kaXNjb3ZlcnlEb2NzLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiBnYXBpLmNsaWVudC5sb2FkKCdzaGVldHMnLCAndjQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmVzb2x2ZShnYXBpKTtcbiAgICB9KTtcbn0pIiwgImltcG9ydCB7IGdhcGlDbGllbnRQcm9taXNlIH0gZnJvbSBcIi4vZ2FwaUNsaWVudFByb21pc2VcIjtcblxuZXhwb3J0IGNvbnN0IGdldEV4cGlyYXRpb25EYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGdhcGkgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgICBjb25zdCB0b2tlbiA9IGdhcGk/LmF1dGg/LmdldFRva2VuKCk7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHJlcyh1bmRlZmluZWQpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvdG9rZW5pbmZvP2FjY2Vzc190b2tlbj0ke3Rva2VuLmFjY2Vzc190b2tlbn1gKVxuICAgICAgICAudGhlbihhc3luYyByZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBnZXRFeHBpcmF0aW9uRGF0ZSBzdGF0dXMgJHtyZXMuc3RhdHVzfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IHJlcy5qc29uKCkpPy5leHBpcmVzX2luO1xuICAgICAgICB9KTtcbn07IiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgbG9hZEdvb2dsZURlcGVuZGVuY2llcyB9IGZyb20gXCIuL2xvYWRHb29nbGVEZXBlbmRlbmNpZXNcIjtcblxuZXhwb3J0IGNvbnN0IHRva2VuQ2xpZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlPGFueT4oYXN5bmMgcmVzID0+IHtcbiAgICBhd2FpdCBsb2FkR29vZ2xlRGVwZW5kZW5jaWVzO1xuICAgIGNvbnN0IHRva2VuQ2xpZW50ID0gZ29vZ2xlLmFjY291bnRzLm9hdXRoMi5pbml0VG9rZW5DbGllbnQoe1xuICAgICAgICBjbGllbnRfaWQ6IGNvbmZpZy5jbGllbnRJZCxcbiAgICAgICAgc2NvcGU6IGNvbmZpZy5zY29wZSxcbiAgICAgICAgcmVkaXJlY3RfdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiLFxuICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXModG9rZW5DbGllbnQpO1xufSkiLCAiaW1wb3J0IHsgcmVqZWN0cyB9IGZyb20gXCJhc3NlcnRcIjtcbmltcG9ydCB7IEFwaSB9IGZyb20gXCIuLi9hcGlcIjtcbmltcG9ydCB7IGdhcGlDbGllbnRQcm9taXNlIH0gZnJvbSBcIi4uL2dvb2dsZS9nYXBpQ2xpZW50UHJvbWlzZVwiO1xuaW1wb3J0IHsgZ2V0RXhwaXJhdGlvbkRhdGUgfSBmcm9tIFwiLi4vZ29vZ2xlL2dldEV4cGlyYXRpb25EYXRlXCI7XG5pbXBvcnQgeyB0b2tlbkNsaWVudFByb21pc2UgfSBmcm9tIFwiLi4vZ29vZ2xlL3Rva2VuQ2xpZW50UHJvbWlzZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBhc3luYyB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB1cmwgfSBmcm9tIFwiaW5zcGVjdG9yXCI7XG5mdW5jdGlvbiBhZGRRdWVyeVBhcmFtKHZhbHVlKSB7XG4gICAgY29uc3QgbmV3VXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgbmV3VXJsLmhhc2ggPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG5ld1VybC5ocmVmKTtcbn1cblxuZXhwb3J0IGNvbnN0IG5ld0FwaTogQXBpID0ge1xuICAgIHNlc3Npb25OYW1lOiAoKSA9PiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgZ2FwaSA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICAgICAgICBnYXBpLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICdwYXRoJzogJ2h0dHBzOi8vcGVvcGxlLmdvb2dsZWFwaXMuY29tL3YxL3Blb3BsZS9tZT9wZXJzb25GaWVsZHM9bmFtZXMnLFxuICAgICAgICAgICAgJ21ldGhvZCc6ICdHRVQnLFxuICAgICAgICAgICAgJ2NhbGxiYWNrJzogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZT8ubmFtZXM/LlswXT8uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSxcbiAgICBsb2FkRnJvbVVybDogYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBnYXBpID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzRnJvbVVybCA9IGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKSk7XG4gICAgICAgIGlmIChjcmVkZW50aWFsc0Zyb21VcmwpIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gSlNPTi5wYXJzZShjcmVkZW50aWFsc0Zyb21VcmwpO1xuICAgICAgICAgICAgYXdhaXQgZ2FwaS5jbGllbnQuaW5pdCh7fSk7XG4gICAgICAgICAgICBnYXBpLmNsaWVudC5zZXRUb2tlbihjcmVkZW50aWFscyk7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3QXBpLW9uQ2hhbmdlJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlOiAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgZm4gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxUaGlzPy5kb2N1bWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcIm5ld0FwaS1vbkNoYW5nZVwiLCBmbik7XG4gICAgICAgIHJldHVybiAoKSA9PiBnbG9iYWxUaGlzPy5kb2N1bWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm5ld0FwaS1vbkNoYW5nZVwiLCBmbik7XG4gICAgfSxcbiAgICBsb2dvdXQ6IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZ2FwaSA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICAgICAgICBnYXBpLmNsaWVudC5zZXRUb2tlbihudWxsKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdBcGktb25DaGFuZ2UnKSlcbiAgICB9LFxuICAgIGxvZ2luOiBhc3luYyAoKSA9PiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbkNsaWVudCA9IGF3YWl0IHRva2VuQ2xpZW50UHJvbWlzZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGF3YWl0IG5ld0FwaS5sb2FkRnJvbVVybCgpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZ2V0RXhwaXJhdGlvbkRhdGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuXG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5DbGllbnQuY2FsbGJhY2sgPSAoY3JlZGVudGlhbHNSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgYWRkUXVlcnlQYXJhbShjcmVkZW50aWFsc1Jlc3BvbnNlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdBcGktb25DaGFuZ2UnKSlcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdG9rZW5DbGllbnQucmVxdWVzdEFjY2Vzc1Rva2VuKHsgcHJvbXB0OiAnY29uc2VudCcgfSk7XG4gICAgfSlcbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbnR5cGUgUHJvcHMgPSBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4sIEhUTUxCdXR0b25FbGVtZW50PlxuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIHJldHVybiA8YnV0dG9uIHsuLi5wcm9wc30gY2xhc3NOYW1lPVwiYnV0dG9uXCI+e3Byb3BzLmNoaWxkcmVufTwvYnV0dG9uPlxufSIsICJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdhcGlDbGllbnRQcm9taXNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvZ29vZ2xlL2dhcGlDbGllbnRQcm9taXNlXCI7XG5pbXBvcnQgeyBuZXdBcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9pbXBsL25ld0FwaVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL2F0b21zL0J1dHRvblwiO1xuXG5leHBvcnQgY29uc3QgU2lnbkluID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIG5ld0FwaS5sb2dvdXQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBuZXdBcGkubG9naW4oKTtcbiAgICB9LCBbc3RhdGVdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG5ld0FwaS5zZXNzaW9uTmFtZSgpLnRoZW4oc2V0U3RhdGUpO1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG5ld0FwaS5vbkNoYW5nZShhc3luYyBlID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKGF3YWl0IG5ld0FwaS5zZXNzaW9uTmFtZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld0FwaS5sb2FkRnJvbVVybCgpO1xuICAgICAgICByZXR1cm4gdW5zdWJzY3JpYmU7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiA8PlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NhbGxiYWNrfT5cbiAgICAgICAgICAgIHtzdGF0ZSA/IGBMb2dvdXQgb2YgJHtzdGF0ZX1gIDogXCJMb2dpblwifVxuICAgICAgICA8L0J1dHRvbj5cbiAgICA8Lz5cbn0iLCAiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZENvbnRhaW5lciB9IGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuL2F0b21zL0xpbmtcIjtcbmltcG9ydCB7IERpdmlkZXJIIH0gZnJvbSBcIi4vRGl2aWRlckhcIjtcbmltcG9ydCB7IFNpZ25JbiB9IGZyb20gXCIuL2FwaS9zaWduSW5cIjtcbnR5cGUgUHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7fT47XG5cbmNvbnN0IGJ1aWxkQmFjayA9IGluZGV4ID0+IG5ldyBBcnJheShpbmRleCArIDEpLmZpbGwoXCIuLlwiKS5qb2luKFwiL1wiKVxuY29uc3QgYnVpbGRQYXRoID0gKCkgPT4ge1xuICAgIGNvbnN0IGhyZWYgPSBnbG9iYWxUaGlzPy53aW5kb3c/LmxvY2F0aW9uLmhyZWZcbiAgICBjb25zdCB1cmw6IFVSTCB8IHVuZGVmaW5lZCA9IGhyZWYgPyBuZXcgVVJMKGhyZWYpIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHBhdGggPSB1cmw/LnBhdGhuYW1lPy5zcGxpdChcIi9cIikuZmlsdGVyKGUgPT4gZSkgPz8gW107XG4gICAgcGF0aC5yZXZlcnNlKCk7XG4gICAgcGF0aC5zcGxpY2UoMCwgMSk7XG4gICAgcGF0aC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBidWlsZFBhdGgoKTtcbiAgICByZXR1cm4gPEZyYWdtZW50PlxuICAgICAgICA8Q2FyZENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImhlYWRlci1jb250ZW50XCJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICA8U2lnbkluIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBoZWFkZXItdXJsLWNoaXBzXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtwYXRoLnJldmVyc2UoKS5tYXAoKGUsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtidWlsZEJhY2soaW5kZXgpfT57ZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkucmV2ZXJzZSgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICA8L0ZyYWdtZW50PlxufSIsICJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcywgUHJvcHNXaXRoQ2hpbGRyZW4sIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIuL0NvbW1lbnRcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL0hlYWRlclwiO1xuXG50eXBlIFByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e1xuICAgIHRpdGxlPzogUmVhY3ROb2RlLFxuICAgIHRoZW1lPzoge1xuICAgICAgICBcIi0tcHJpbWFyeVwiPzogc3RyaW5nLFxuICAgICAgICBcIi0tYmFja2dyb3VuZC1jb2xvclwiPzogc3RyaW5nLFxuICAgICAgICBcIi0tYm9yZGVyLWNvbG9yXCI/OiBzdHJpbmcsXG4gICAgfVxufT47XG5jb25zdCB0aW1lID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuZXhwb3J0IGNvbnN0IFBhZ2UgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgdGhlbWUgPSBwcm9wcy50aGVtZSA/PyB7fTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aHRtbD5cbiAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9e1wiaHR0cHM6Ly9hbnVkLnJvL3VpX2Jhc2Uvc3JjL21haW4uY3NzXCJ9IHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURANDgsMzAwLDAsLTI1XCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFqZGhhbmkmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFqZGhhbmk6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cbiAgICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgIDxDb21tZW50Pnt0aW1lfTwvQ29tbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBcIi0tcHJpbWFyeVwiOiB0aGVtZVtcIi0tcHJpbWFyeVwiXSA/PyBcIiMwMDc0Y2NcIixcbiAgICAgICAgICAgICAgICAgICAgXCItLWJhY2tncm91bmQtY29sb3JcIjogdGhlbWVbXCItLWJhY2tncm91bmQtY29sb3JcIl0gPz8gXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIi0tYm9yZGVyLWNvbG9yXCI6IHRoZW1lWyctLWJvcmRlci1jb2xvciddID8/IFwiI2M0YzRjNFwiLFxuICAgICAgICAgICAgICAgIH0gYXMgQ1NTUHJvcGVydGllc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyPntwcm9wcy50aXRsZX08L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5cblxuICAgIClcbn0iLCAiaW1wb3J0IHsgZ2FwaUNsaWVudFByb21pc2UgfSBmcm9tIFwiLi9nYXBpQ2xpZW50UHJvbWlzZVwiO1xuXG5jb25zdCBmaWxlVG9CYXNlNjQgPSAoZmlsZTogRmlsZSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKChyZWFkZXI/LnJlc3VsdCBhcyBzdHJpbmcpPy5zcGxpdD8uKCcsJylbMV0pO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZm9ybURhdGFUb0pzb24oZm9ybURhdGEpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBhd2FpdCBmaWxlVG9CYXNlNjQodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IHVwbG9hZEZvcm1EYXRhVG9Gb2xkZXIgPSAocGFyZW50SWQ6IHN0cmluZywgZGF0YSkgPT4gYXN5bmMgKGV2ZW50OiBTdWJtaXRFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBjb25zdCBnYXBpID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgY29uc3QgaWRUb2tlbiA9IGdhcGkuY2xpZW50LmdldFRva2VuKCkuYWNjZXNzX3Rva2VuXG4gICAgZmV0Y2goXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91cGxvYWQvZHJpdmUvdjMvZmlsZXM/dXBsb2FkVHlwZT1yZXN1bWFibGVcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtpZFRva2VufWAsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnXG4gICAgICAgIH0pLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lOiAnZm9ybS1kYXRhLmpzb24nLFxuICAgICAgICAgICAgcGFyZW50czogW3BhcmVudElkXVxuICAgICAgICB9KVxuICAgIH0pLnRoZW4oYXN5bmMgYXBpUmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gKGF3YWl0IGFwaVJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpKVxuICAgIH0pLnRoZW4oYXN5bmMgaWQgPT4ge1xuICAgICAgICBmZXRjaChpZCA/PyBcIlwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2lkVG9rZW59YCxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pXG4gICAgICAgIC8vIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgIH0pXG59IiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48e30+KSA9PiA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PiIsICJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIFByb3BzV2l0aENoaWxkcmVuLCBSZWFjdE5vZGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1cGxvYWRGb3JtRGF0YVRvRm9sZGVyIH0gZnJvbSBcIi4uL3NlcnZpY2UvZ29vZ2xlL3VwbG9hZFRvRmlsZVwiXG5pbXBvcnQgeyBDYXJkQ29udGFpbmVyIH0gZnJvbSBcIi4vQ29udGFpbmVyXCJcbmltcG9ydCB7IERpdmlkZXJIIH0gZnJvbSBcIi4vRGl2aWRlckhcIlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYXRvbXMvQnV0dG9uXCJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSBcIi4vYXRvbXMvVGl0bGVcIlxuXG50eXBlIFByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW4gJiB7XG4gICAgdGl0bGU/OiBSZWFjdE5vZGVcbiAgICBmb2xkZXJJZDogc3RyaW5nXG59XG5leHBvcnQgY29uc3QgRm9ybUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICBzdGF0ZToge30gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgRmlsZT4sXG4gICAgc2V0U3RhdGU6ICguLi5hcmdzKSA9PiB7IH1cbn0pO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIHJldHVybiA8RnJhZ21lbnQ+XG4gICAgICAgIDxDYXJkQ29udGFpbmVyPlxuICAgICAgICAgICAge3Byb3BzLnRpdGxlICYmXG4gICAgICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UaXRsZT59XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgb25TdWJtaXQ9e3VwbG9hZEZvcm1EYXRhVG9Gb2xkZXIocHJvcHMuZm9sZGVySWQsIHN0YXRlKSBhcyBhbnl9PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgc2V0U3RhdGUgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+U3VibWl0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICA8L0ZyYWdtZW50PlxufSIsICJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vRm9ybVwiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICB0eXBlPzogSFRNTElucHV0RWxlbWVudFsndHlwZSddLFxuICAgIGFjY2VwdD86IHN0cmluZyxcbiAgICBjYXB0dXJlPzogXCJjYW1lcmFcIiB8IFwidXNlclwiO1xufVxuXG5jb25zdCBrZWJhYlRvU2VudGVuY2UgPSAoc3RyOiBzdHJpbmcpID0+IHN0ci5zcGxpdCgnLScpLm1hcCh3b3JkID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKS5qb2luKCcgJyk7XG5cbmNvbnN0IGNhbWVsVG9TZW50ZW5jZSA9IChzdHI6IHN0cmluZykgPT4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgJyAkMScpLnJlcGxhY2UoL14uLywgc3RyID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcblxuY29uc3Qgc25ha2VUb1NlbnRlbmNlID0gKHN0cjogc3RyaW5nKSA9PiBzdHIuc3BsaXQoJ18nKS5tYXAod29yZCA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSkuam9pbignICcpO1xuXG5jb25zdCBsb3dlcmNhc2VJZ25vcmluZ0dyb3VwcyA9IChzdHI6IHN0cmluZykgPT4gc3RyLnJlcGxhY2VBbGwoLyhbYS16XXxcXHMpKFtBLVpdKShbYS16XXxcXHMpL2csIChtYXRjaCwgcDEsIHAyLCBwMykgPT4gcDEgKyBwMi50b0xvd2VyQ2FzZSgpICsgcDMpO1xuXG5jb25zdCBzdHJpbmdUb1NlbnRlbmNlID0gc3RyID0+IHtcbiAgICBpZiAoc3RyLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgcmV0dXJuIGtlYmFiVG9TZW50ZW5jZShzdHIpO1xuICAgIH0gZWxzZSBpZiAoc3RyLmluY2x1ZGVzKCdfJykpIHtcbiAgICAgICAgcmV0dXJuIHNuYWtlVG9TZW50ZW5jZShzdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjYW1lbFRvU2VudGVuY2Uoc3RyKTtcbiAgICB9XG59O1xuY29uc3QgZmlsZVRvQmFzZTY0ID0gKGZpbGU6IEZpbGUgfCB1bmRlZmluZWQpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPihyZXNvbHZlID0+IHtcbiAgICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uTG9hZFwiKTtcbiAgICAgICAgICAgIHJlc29sdmUoKHJlYWRlcj8ucmVzdWx0IGFzIHN0cmluZyk/LnNwbGl0Py4oJywnKVsxXSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuZXhwb3J0IGNvbnN0IElucHV0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgc3RhdGUsIHNldFN0YXRlIH0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudCB8IG51bGw+KG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy50eXBlICE9PSBcImZpbGVcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQudmFsdWUgPSBudWxsIGFzIGFueTtcbiAgICAgICAgfVxuXG4gICAgfSwgW3Byb3BzLnR5cGUsIHJlZl0pXG4gICAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGU/LnRhcmdldD8uZmlsZXM/LlswXTtcbiAgICAgICAgaWYgKHByb3BzLnR5cGUgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgICAgICBmaWxlVG9CYXNlNjQoZmlsZSkudGhlbihmaWxlRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGVuXCIpO1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtwcm9wcy5uYW1lXTogZmlsZURhdGEgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW3Byb3BzLm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH0sIFtwcm9wcy50eXBlLCBzZXRTdGF0ZSwgc3RhdGVdKVxuICAgIGNvbnN0IHZhbHVlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy50eXBlID09PSBcImZpbGVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGVbcHJvcHMubmFtZV07XG4gICAgfSwgW3N0YXRlXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJlZi5jdXJyZW50ICYmIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtwcm9wcy5uYW1lXTogcmVmLmN1cnJlbnQudmFsdWUgfSk7XG4gICAgfSwgW3JlZi5jdXJyZW50XSk7XG5cbiAgICByZXR1cm4gPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LW5hbWVcIj57bG93ZXJjYXNlSWdub3JpbmdHcm91cHMoc3RyaW5nVG9TZW50ZW5jZShwcm9wcy5uYW1lKSl9PC9zcGFuPlxuICAgICAgICA8aW5wdXQgcmVmPXtyZWZ9IHR5cGU9e3Byb3BzLnR5cGUgPz8gXCJ0ZXh0XCJ9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjYXB0dXJlPXtwcm9wcy5jYXB0dXJlfVxuICAgICAgICAgICAgYWNjZXB0PXtwcm9wcy5hY2NlcHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgPC9sYWJlbD5cbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdCA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48eyBuYW1lOiBzdHJpbmcgfT4pID0+IHtcbiAgICBjb25zdCB7IHN0YXRlLCBzZXRTdGF0ZSB9ID0gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQgJiYgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW3Byb3BzLm5hbWVdOiByZWYuY3VycmVudC52YWx1ZSB9KTtcbiAgICB9LCBbcmVmLmN1cnJlbnRdKVxuICAgIHJldHVybiA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtbmFtZVwiPntsb3dlcmNhc2VJZ25vcmluZ0dyb3VwcyhzdHJpbmdUb1NlbnRlbmNlKHByb3BzLm5hbWUpKX08L3NwYW4+XG4gICAgICAgIDxzZWxlY3QgcmVmPXtyZWZ9IG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICAgICAgICB2YWx1ZT17c3RhdGVbcHJvcHMubmFtZV0gYXMgc3RyaW5nID8/IFwiXCJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXRlKHsgLi4uc3RhdGUsIFtwcm9wcy5uYW1lXTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgPC9sYWJlbCA+XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJhbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvUGFnZVwiXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcImFudWQxMi5naXRodWIuaW9fdWlfYmFzZS9zcmMvY29tcG9uZW50cy9Gb3JtXCJcbmltcG9ydCB7IElucHV0LCBTZWxlY3QgfSBmcm9tIFwiYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL2F0b21zL0lucHV0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgICA8UGFnZSB0aXRsZT1cImFudWQxMi5naXRodWIuaW9cIj5cbiAgICAgICAgPEZvcm0gZm9sZGVySWQ9XCIxRHdUYlVTV2Y1a3pOcTg0S2MwOGJKOVd5dzlpamZCdVNcIj5cbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwiaW1hZ2VcIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBjYXB0dXJlPVwiY2FtZXJhXCIgLz5cbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwibW9udGhzXCIgdHlwZT1cIm51bWJlclwiIC8+XG4gICAgICAgIDwvRm9ybT5cbiAgICA8L1BhZ2U+XG4pIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxhQUFPLFVBQVUsV0FBVztBQUFBO0FBQUE7OztBQ0E1QixvQkFFYTtBQUZiO0FBQUE7QUFBQSxxQkFBa0I7QUFFWCxNQUFNLFVBQVUsQ0FBQyxFQUFFLFNBQVMsTUFBTTtBQUNyQyxlQUFPLDZCQUFBQSxRQUFBLGNBQUMsU0FBSSx5QkFBeUIsRUFBRSxRQUFRLFFBQVEsZUFBZSxHQUFHO0FBQUEsTUFDN0U7QUFBQTtBQUFBOzs7QUNKQSxNQUFBQyxlQUlhO0FBSmI7QUFBQTtBQUFBLE1BQUFBLGdCQUF5QztBQUlsQyxNQUFNLGdCQUFnQixDQUFDLFVBQWlCO0FBQzNDLGVBQU8sOEJBQUFDLFFBQUEsY0FBQyxTQUFJLFdBQVUseUJBQ2xCLDhCQUFBQSxRQUFBLGNBQUMsU0FBSSxXQUFXLDRCQUE0QixNQUFNLGFBQWEsS0FBSyxLQUFLLEtBQ3BFLE1BQU0sUUFDWCxD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RyxDQUFDLElBQUksT0FBTyxDQUFDO0FBRWhCLGVBQU8sK0JBQUFDLFFBQUEsY0FBQyxXQUFNLFdBQVUsV0FDcEIsK0JBQUFBLFFBQUEsY0FBQyxVQUFLLFdBQVUsZ0JBQWMsd0JBQXdCLGlCQUFpQixNQUFNLElBQUksQ0FBQyxDQUFFLEdBQ3BGLCtCQUFBQSxRQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFBTTtBQUFBLFlBQVUsTUFBTSxNQUFNLFFBQVE7QUFBQSxZQUNqQztBQUFBLFlBQ0EsU0FBUyxNQUFNO0FBQUEsWUFDZixRQUFRLE1BQU07QUFBQSxZQUNkO0FBQUE7QUFBQSxRQUNKLENBQ0o7QUFBQSxNQUNKO0FBQUE7QUFBQTs7O0FDcEZBO0FBQUE7QUFBQSxVQUFBQyxpQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsYUFBTyxVQUNILCtCQUFBQyxRQUFBLGNBQUMsUUFBSyxPQUFNLHNCQUNSLCtCQUFBQSxRQUFBLGNBQUMsUUFBSyxVQUFTLHVDQUNYLCtCQUFBQSxRQUFBLGNBQUMsU0FBTSxNQUFLLFFBQU8sTUFBSyxRQUFPLEdBQy9CLCtCQUFBQSxRQUFBLGNBQUMsU0FBTSxNQUFLLFNBQVEsTUFBSyxRQUFPLFFBQU8sV0FBVSxTQUFRLFVBQVMsR0FDbEUsK0JBQUFBLFFBQUEsY0FBQyxTQUFNLE1BQUssVUFBUyxNQUFLLFVBQVMsQ0FDdkMsQ0FDSjtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbIlJlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiLCAicmVzb2x2ZSIsICJnYXBpIiwgImdhcGkiLCAiaW1wb3J0X3JlYWN0IiwgIlJlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgIlJlYWN0IiwgImdhcGkiLCAiaW1wb3J0X3JlYWN0IiwgIlJlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAic3RyIiwgIlJlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCJdCn0K
