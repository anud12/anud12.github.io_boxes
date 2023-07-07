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

  // node_modules/anud12.github.io_ui_base/src/service/arrayToObjects.ts
  function arrayToObject(arr) {
    var keys = arr[0];
    return arr.slice(1).map(function(row) {
      return keys.reduce(function(obj, key, i) {
        obj[key] = row[i];
        return obj;
      }, {});
    });
  }
  var init_arrayToObjects = __esm({
    "node_modules/anud12.github.io_ui_base/src/service/arrayToObjects.ts"() {
    }
  });

  // node_modules/anud12.github.io_ui_base/src/service/google/loadFromSheet.ts
  var loadFromSheet;
  var init_loadFromSheet = __esm({
    "node_modules/anud12.github.io_ui_base/src/service/google/loadFromSheet.ts"() {
      init_arrayToObjects();
      init_gapiClientPromise();
      loadFromSheet = (source) => new Promise(async (resolve, reject) => {
        const gapi2 = await gapiClientPromise;
        return gapi2.client.sheets.spreadsheets.values.get({
          spreadsheetId: source,
          range: "Sheet1"
        }).then(function(response) {
          var range = response.result;
          resolve(arrayToObject(range.values));
        }, function(response) {
          reject(response);
        }).catch((response) => {
          reject(response);
        });
      }).catch((e) => {
        throw e.result.error;
      });
    }
  });

  // node_modules/anud12.github.io_ui_base/src/components/Table.tsx
  var import_react8, Table;
  var init_Table = __esm({
    "node_modules/anud12.github.io_ui_base/src/components/Table.tsx"() {
      import_react8 = __toESM(require_react());
      init_loadFromSheet();
      init_newApi();
      init_Container();
      Table = (props) => {
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
    }
  });

  // index.tsx
  var require_ui = __commonJS({
    "index.tsx"(exports, module) {
      var import_react9 = __toESM(require_react());
      init_Page();
      init_Table();
      init_Link();
      module.exports = /* @__PURE__ */ import_react9.default.createElement(Page, { title: "anud12.github.io" }, /* @__PURE__ */ import_react9.default.createElement(Table, { source: "1DwTbUSWf5kzNq84Kc08bJ9Wyw9ijfBuS", title: /* @__PURE__ */ import_react9.default.createElement(Link, { href: "add" }, "Add") }));
    }
  });
  return require_ui();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsLXBsdWdpbjpyZWFjdCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL0NvbW1lbnQudHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLnRzeCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL2F0b21zL0xpbmsudHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL3NlcnZpY2UvZ29vZ2xlL2NvbmZpZy50cyIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9zZXJ2aWNlL2dvb2dsZS9sb2FkR29vZ2xlRGVwZW5kZW5jaWVzLnRzIiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL3NlcnZpY2UvZ29vZ2xlL2dhcGlDbGllbnRQcm9taXNlLnRzIiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL3NlcnZpY2UvZ29vZ2xlL2dldEV4cGlyYXRpb25EYXRlLnRzIiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL3NlcnZpY2UvZ29vZ2xlL3Rva2VuQ2xpZW50UHJvbWlzZS50cyIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9zZXJ2aWNlL2ltcGwvbmV3QXBpLnRzIiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uLnRzeCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL2FwaS9zaWduSW4udHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL1BhZ2UudHN4IiwgIm5vZGVfbW9kdWxlcy9hbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL3NlcnZpY2UvYXJyYXlUb09iamVjdHMudHMiLCAibm9kZV9tb2R1bGVzL2FudWQxMi5naXRodWIuaW9fdWlfYmFzZS9zcmMvc2VydmljZS9nb29nbGUvbG9hZEZyb21TaGVldC50cyIsICJub2RlX21vZHVsZXMvYW51ZDEyLmdpdGh1Yi5pb191aV9iYXNlL3NyYy9jb21wb25lbnRzL1RhYmxlLnRzeCIsICJpbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5SZWFjdCIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDb21tZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYDwhLS0gJHtjaGlsZHJlbn0gLS0+YCB9fSAvPlxufSIsICJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbnR5cGUgUHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7fT4gJiB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5leHBvcnQgY29uc3QgQ2FyZENvbnRhaW5lciA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyIGNhcmQtY29udGFpbmVyICR7cHJvcHMuY2xhc3NOYW1lID8/IFwiXCJ9YC50cmltKCl9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW4pID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyYH0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufSIsICJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbnR5cGUgUHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7fT4gJiB7XG4gICAgaHJlZjogc3RyaW5nLFxufVxuXG5leHBvcnQgY29uc3QgTGluayA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmbik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZuKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e3Byb3BzLmhyZWYgKyBzZWFyY2hQYXJhbXN9PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9hPlxufSIsICJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lCdFEyV095SVVuYVNXQWhsM3M1UEFfTFprV3RwV3o1aUFcIixcbiAgICBjbGllbnRJZDogXCI5ODUyODA5MDcwMzEtZmZ2Zm5jOHBpMGFuZTk5bHNvOWRibDFtMmw1b2M5bm4uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIixcbiAgICBzY29wZTogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvdXNlcmluZm8ucHJvZmlsZSBcIixcbiAgICBkaXNjb3ZlcnlEb2NzOiBbJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL2RyaXZlL3YzL3Jlc3QnXSxcbn0iLCAiY29uc3QgbG9hZFNjcmlwdCA9IChzcmM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT5cbiAgICBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5kb2N1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pXG5cbmV4cG9ydCBjb25zdCBsb2FkR29vZ2xlRGVwZW5kZW5jaWVzID0gUHJvbWlzZS5hbGwoW1xuICAgIGxvYWRTY3JpcHQoJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcycpLFxuICAgIGxvYWRTY3JpcHQoJ2h0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9nc2kvY2xpZW50JyksXG5dKSIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IGxvYWRHb29nbGVEZXBlbmRlbmNpZXMgfSBmcm9tIFwiLi9sb2FkR29vZ2xlRGVwZW5kZW5jaWVzXCI7XG5cbmV4cG9ydCBjb25zdCBnYXBpQ2xpZW50UHJvbWlzZSA9IG5ldyBQcm9taXNlPGFueT4oYXN5bmMgcmVzb2x2ZSA9PiB7XG4gICAgYXdhaXQgbG9hZEdvb2dsZURlcGVuZGVuY2llcztcbiAgICBnYXBpLmxvYWQoJ2NsaWVudCcsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgZ2FwaS5jbGllbnQuaW5pdCh7XG4gICAgICAgICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICAgICAgICBkaXNjb3ZlcnlEb2NzOiBjb25maWcuZGlzY292ZXJ5RG9jcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4gZ2FwaS5jbGllbnQubG9hZCgnc2hlZXRzJywgJ3Y0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJlc29sdmUoZ2FwaSk7XG4gICAgfSk7XG59KSIsICJpbXBvcnQgeyBnYXBpQ2xpZW50UHJvbWlzZSB9IGZyb20gXCIuL2dhcGlDbGllbnRQcm9taXNlXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRFeHBpcmF0aW9uRGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnYXBpID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgY29uc3QgdG9rZW4gPSBnYXBpPy5hdXRoPy5nZXRUb2tlbigpO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlcyA9PiByZXModW5kZWZpbmVkKSk7XG4gICAgfVxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3Rva2VuaW5mbz9hY2Nlc3NfdG9rZW49JHt0b2tlbi5hY2Nlc3NfdG9rZW59YClcbiAgICAgICAgLnRoZW4oYXN5bmMgcmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgZ2V0RXhwaXJhdGlvbkRhdGUgc3RhdHVzICR7cmVzLnN0YXR1c31gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCByZXMuanNvbigpKT8uZXhwaXJlc19pbjtcbiAgICAgICAgfSk7XG59OyIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IGxvYWRHb29nbGVEZXBlbmRlbmNpZXMgfSBmcm9tIFwiLi9sb2FkR29vZ2xlRGVwZW5kZW5jaWVzXCI7XG5cbmV4cG9ydCBjb25zdCB0b2tlbkNsaWVudFByb21pc2UgPSBuZXcgUHJvbWlzZTxhbnk+KGFzeW5jIHJlcyA9PiB7XG4gICAgYXdhaXQgbG9hZEdvb2dsZURlcGVuZGVuY2llcztcbiAgICBjb25zdCB0b2tlbkNsaWVudCA9IGdvb2dsZS5hY2NvdW50cy5vYXV0aDIuaW5pdFRva2VuQ2xpZW50KHtcbiAgICAgICAgY2xpZW50X2lkOiBjb25maWcuY2xpZW50SWQsXG4gICAgICAgIHNjb3BlOiBjb25maWcuc2NvcGUsXG4gICAgICAgIHJlZGlyZWN0X3VyaTogXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIixcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzKHRva2VuQ2xpZW50KTtcbn0pIiwgImltcG9ydCB7IHJlamVjdHMgfSBmcm9tIFwiYXNzZXJ0XCI7XG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi4vYXBpXCI7XG5pbXBvcnQgeyBnYXBpQ2xpZW50UHJvbWlzZSB9IGZyb20gXCIuLi9nb29nbGUvZ2FwaUNsaWVudFByb21pc2VcIjtcbmltcG9ydCB7IGdldEV4cGlyYXRpb25EYXRlIH0gZnJvbSBcIi4uL2dvb2dsZS9nZXRFeHBpcmF0aW9uRGF0ZVwiO1xuaW1wb3J0IHsgdG9rZW5DbGllbnRQcm9taXNlIH0gZnJvbSBcIi4uL2dvb2dsZS90b2tlbkNsaWVudFByb21pc2VcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgdXJsIH0gZnJvbSBcImluc3BlY3RvclwiO1xuZnVuY3Rpb24gYWRkUXVlcnlQYXJhbSh2YWx1ZSkge1xuICAgIGNvbnN0IG5ld1VybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIG5ld1VybC5oYXNoID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBuZXdVcmwuaHJlZik7XG59XG5cbmV4cG9ydCBjb25zdCBuZXdBcGk6IEFwaSA9IHtcbiAgICBzZXNzaW9uTmFtZTogKCkgPT4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XG4gICAgICAgIGNvbnN0IGdhcGkgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgICAgICAgZ2FwaS5jbGllbnQucmVxdWVzdCh7XG4gICAgICAgICAgICAncGF0aCc6ICdodHRwczovL3Blb3BsZS5nb29nbGVhcGlzLmNvbS92MS9wZW9wbGUvbWU/cGVyc29uRmllbGRzPW5hbWVzJyxcbiAgICAgICAgICAgICdtZXRob2QnOiAnR0VUJyxcbiAgICAgICAgICAgICdjYWxsYmFjayc6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2U/Lm5hbWVzPy5bMF0/LmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSksXG4gICAgbG9hZEZyb21Vcmw6IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZ2FwaSA9IGF3YWl0IGdhcGlDbGllbnRQcm9taXNlO1xuICAgICAgICBjb25zdCBjcmVkZW50aWFsc0Zyb21VcmwgPSBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIikpO1xuICAgICAgICBpZiAoY3JlZGVudGlhbHNGcm9tVXJsKSB7XG4gICAgICAgICAgICBjb25zdCBjcmVkZW50aWFscyA9IEpTT04ucGFyc2UoY3JlZGVudGlhbHNGcm9tVXJsKTtcbiAgICAgICAgICAgIGF3YWl0IGdhcGkuY2xpZW50LmluaXQoe30pO1xuICAgICAgICAgICAgZ2FwaS5jbGllbnQuc2V0VG9rZW4oY3JlZGVudGlhbHMpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ25ld0FwaS1vbkNoYW5nZScpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBvbkNoYW5nZTogKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGZuID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJuZXdBcGktb25DaGFuZ2VcIiwgZm4pO1xuICAgICAgICByZXR1cm4gKCkgPT4gZ2xvYmFsVGhpcz8uZG9jdW1lbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJuZXdBcGktb25DaGFuZ2VcIiwgZm4pO1xuICAgIH0sXG4gICAgbG9nb3V0OiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdhcGkgPSBhd2FpdCBnYXBpQ2xpZW50UHJvbWlzZTtcbiAgICAgICAgZ2FwaS5jbGllbnQuc2V0VG9rZW4obnVsbClcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3QXBpLW9uQ2hhbmdlJykpXG4gICAgfSxcbiAgICBsb2dpbjogYXN5bmMgKCkgPT4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5DbGllbnQgPSBhd2FpdCB0b2tlbkNsaWVudFByb21pc2U7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChhd2FpdCBuZXdBcGkubG9hZEZyb21VcmwoKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGdldEV4cGlyYXRpb25EYXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcblxuICAgICAgICB9XG4gICAgICAgIHRva2VuQ2xpZW50LmNhbGxiYWNrID0gKGNyZWRlbnRpYWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGFkZFF1ZXJ5UGFyYW0oY3JlZGVudGlhbHNSZXNwb25zZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3QXBpLW9uQ2hhbmdlJykpXG4gICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRva2VuQ2xpZW50LnJlcXVlc3RBY2Nlc3NUb2tlbih7IHByb21wdDogJ2NvbnNlbnQnIH0pO1xuICAgIH0pXG59IiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG50eXBlIFByb3BzID0gUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8UmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+LCBIVE1MQnV0dG9uRWxlbWVudD5cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICByZXR1cm4gPGJ1dHRvbiB7Li4ucHJvcHN9IGNsYXNzTmFtZT1cImJ1dHRvblwiPntwcm9wcy5jaGlsZHJlbn08L2J1dHRvbj5cbn0iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnYXBpQ2xpZW50UHJvbWlzZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2dvb2dsZS9nYXBpQ2xpZW50UHJvbWlzZVwiO1xuaW1wb3J0IHsgbmV3QXBpIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvaW1wbC9uZXdBcGlcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9hdG9tcy9CdXR0b25cIjtcblxuZXhwb3J0IGNvbnN0IFNpZ25JbiA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgICBjb25zdCBjYWxsYmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBuZXdBcGkubG9nb3V0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbmV3QXBpLmxvZ2luKCk7XG4gICAgfSwgW3N0YXRlXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuZXdBcGkuc2Vzc2lvbk5hbWUoKS50aGVuKHNldFN0YXRlKTtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBuZXdBcGkub25DaGFuZ2UoYXN5bmMgZSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0ZShhd2FpdCBuZXdBcGkuc2Vzc2lvbk5hbWUoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXdBcGkubG9hZEZyb21VcmwoKTtcbiAgICAgICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjYWxsYmFja30+XG4gICAgICAgICAgICB7c3RhdGUgPyBgTG9nb3V0IG9mICR7c3RhdGV9YCA6IFwiTG9naW5cIn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgPC8+XG59IiwgImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmRDb250YWluZXIgfSBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi9hdG9tcy9MaW5rXCI7XG5pbXBvcnQgeyBEaXZpZGVySCB9IGZyb20gXCIuL0RpdmlkZXJIXCI7XG5pbXBvcnQgeyBTaWduSW4gfSBmcm9tIFwiLi9hcGkvc2lnbkluXCI7XG50eXBlIFByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e30+O1xuXG5jb25zdCBidWlsZEJhY2sgPSBpbmRleCA9PiBuZXcgQXJyYXkoaW5kZXggKyAxKS5maWxsKFwiLi5cIikuam9pbihcIi9cIilcbmNvbnN0IGJ1aWxkUGF0aCA9ICgpID0+IHtcbiAgICBjb25zdCBocmVmID0gZ2xvYmFsVGhpcz8ud2luZG93Py5sb2NhdGlvbi5ocmVmXG4gICAgY29uc3QgdXJsOiBVUkwgfCB1bmRlZmluZWQgPSBocmVmID8gbmV3IFVSTChocmVmKSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwYXRoID0gdXJsPy5wYXRobmFtZT8uc3BsaXQoXCIvXCIpLmZpbHRlcihlID0+IGUpID8/IFtdO1xuICAgIHBhdGgucmV2ZXJzZSgpO1xuICAgIHBhdGguc3BsaWNlKDAsIDEpO1xuICAgIHBhdGgucmV2ZXJzZSgpO1xuICAgIHJldHVybiBwYXRoO1xufVxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCBwYXRoID0gYnVpbGRQYXRoKCk7XG4gICAgcmV0dXJuIDxGcmFnbWVudD5cbiAgICAgICAgPENhcmRDb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJoZWFkZXItY29udGVudFwifT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZ25JbiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgaGVhZGVyLXVybC1jaGlwc1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7cGF0aC5yZXZlcnNlKCkubWFwKChlLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YnVpbGRCYWNrKGluZGV4KX0+e2V9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApLnJldmVyc2UoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRDb250YWluZXI+XG4gICAgPC9GcmFnbWVudD5cbn0iLCAiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIFByb3BzV2l0aENoaWxkcmVuLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLi9Db21tZW50XCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcblxudHlwZSBQcm9wcyA9IFByb3BzV2l0aENoaWxkcmVuPHtcbiAgICB0aXRsZT86IFJlYWN0Tm9kZSxcbiAgICB0aGVtZT86IHtcbiAgICAgICAgXCItLXByaW1hcnlcIj86IHN0cmluZyxcbiAgICAgICAgXCItLWJhY2tncm91bmQtY29sb3JcIj86IHN0cmluZyxcbiAgICAgICAgXCItLWJvcmRlci1jb2xvclwiPzogc3RyaW5nLFxuICAgIH1cbn0+O1xuY29uc3QgdGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbmV4cG9ydCBjb25zdCBQYWdlID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHRoZW1lID0gcHJvcHMudGhlbWUgPz8ge307XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGh0bWw+XG4gICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPXtcImh0dHBzOi8vYW51ZC5yby91aV9iYXNlL3NyYy9tYWluLmNzc1wifSB0eXBlPVwidGV4dC9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDQ4LDMwMCwwLC0yNVwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhamRoYW5pJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhamRoYW5pOndnaHRANTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8Q29tbWVudD57dGltZX08L0NvbW1lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgXCItLXByaW1hcnlcIjogdGhlbWVbXCItLXByaW1hcnlcIl0gPz8gXCIjMDA3NGNjXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiLS1iYWNrZ3JvdW5kLWNvbG9yXCI6IHRoZW1lW1wiLS1iYWNrZ3JvdW5kLWNvbG9yXCJdID8/IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCItLWJvcmRlci1jb2xvclwiOiB0aGVtZVsnLS1ib3JkZXItY29sb3InXSA/PyBcIiNjNGM0YzRcIixcbiAgICAgICAgICAgICAgICB9IGFzIENTU1Byb3BlcnRpZXN9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlcj57cHJvcHMudGl0bGV9PC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+XG5cbiAgICApXG59IiwgImV4cG9ydCBmdW5jdGlvbiBhcnJheVRvT2JqZWN0PFQ+KGFycjogQXJyYXk8QXJyYXk8c3RyaW5nPj4pOiBBcnJheTxUPiB7XG4gICAgdmFyIGtleXMgPSBhcnJbMF07XG4gICAgcmV0dXJuIGFyci5zbGljZSgxKS5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5LCBpKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHJvd1tpXTtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9IGFzIFQpO1xuICAgIH0pO1xufSIsICJpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGFycmF5VG9PYmplY3QgfSBmcm9tIFwiLi4vYXJyYXlUb09iamVjdHNcIjtcbmltcG9ydCB7IGdhcGlDbGllbnRQcm9taXNlIH0gZnJvbSBcIi4vZ2FwaUNsaWVudFByb21pc2VcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRGcm9tU2hlZXQgPSAoc291cmNlOiBzdHJpbmcpID0+IG5ldyBQcm9taXNlPEFycmF5PGFueT4+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBnYXBpID0gYXdhaXQgZ2FwaUNsaWVudFByb21pc2U7XG4gICAgcmV0dXJuIGdhcGkuY2xpZW50LnNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmdldCh7XG4gICAgICAgIHNwcmVhZHNoZWV0SWQ6IHNvdXJjZSxcbiAgICAgICAgcmFuZ2U6ICdTaGVldDEnLFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciByYW5nZSA9IHJlc3BvbnNlLnJlc3VsdDtcbiAgICAgICAgcmVzb2x2ZShhcnJheVRvT2JqZWN0KHJhbmdlLnZhbHVlcykpXG4gICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJlamVjdChyZXNwb25zZSlcbiAgICB9KS5jYXRjaChyZXNwb25zZSA9PiB7XG4gICAgICAgIHJlamVjdChyZXNwb25zZSlcbiAgICB9KTtcbn0pLmNhdGNoKGUgPT4ge1xuICAgIHRocm93IGUucmVzdWx0LmVycm9yO1xufSkiLCAiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIEZyYWdtZW50LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbG9hZEZyb21TaGVldCB9IGZyb20gXCIuLi9zZXJ2aWNlL2dvb2dsZS9sb2FkRnJvbVNoZWV0XCJcbmltcG9ydCB7IG5ld0FwaSB9IGZyb20gXCIuLi9zZXJ2aWNlL2ltcGwvbmV3QXBpXCJcbmltcG9ydCB7IENhcmRDb250YWluZXIgfSBmcm9tIFwiLi9Db250YWluZXJcIlxuXG50eXBlIFByb3BzID0ge1xuICAgIHRpdGxlPzogUmVhY3ROb2RlXG4gICAgc291cmNlOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBjb25zdCBUYWJsZSA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxBcnJheTxhbnk+IHwgc3RyaW5nPihbXSk7XG4gICAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRnJvbVNoZWV0KHByb3BzLnNvdXJjZSlcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGUpO1xuICAgICAgICBzZXREYXRhKGRhdGEpXG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gbmV3QXBpLm9uQ2hhbmdlKGxvYWREYXRhKVxuICAgICAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgICB9LCBbcHJvcHMuc291cmNlXSlcbiAgICByZXR1cm4gPEZyYWdtZW50PlxuICAgICAgICA8Q2FyZENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2RhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlXCIgc3R5bGU9e3sgXCItLW51bWJlci1vZi1jb2x1bW5zXCI6IE9iamVjdC5rZXlzKGRhdGE/LlswXSA/PyB7fSkubGVuZ3RoLCBcIi0tbnVtYmVyLW9mLXJvd3NcIjogXCIyMFwiIH0gYXMgQ1NTUHJvcGVydGllc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YT8uWzBdID8/IHt9KS5tYXAoKGhlYWRlciwgam5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtqbmRleH0+e2hlYWRlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGUsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZSkubWFwKChjb2x1bW4sIGpuZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2puZGV4fT57U3RyaW5nKGNvbHVtbil9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSAmJiA8cHJlIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwiYnJlYWstc3BhY2VzXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIEZhaWxlZCB0byBsb2FkIHRhYmxlIHtwcm9wcy5zb3VyY2V9IFJlYXNvbjpcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKX1cbiAgICAgICAgICAgICAgICA8L3ByZT59XG4gICAgICAgICAgICA8L2RpdiA+XG5cbiAgICAgICAgPC9DYXJkQ29udGFpbmVyPlxuXG4gICAgPC9GcmFnbWVudD5cbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJhbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvUGFnZVwiXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJhbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvVGFibGVcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJhbnVkMTIuZ2l0aHViLmlvX3VpX2Jhc2Uvc3JjL2NvbXBvbmVudHMvYXRvbXMvTGlua1wiO1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICAgPFBhZ2UgdGl0bGU9XCJhbnVkMTIuZ2l0aHViLmlvXCI+XG4gICAgICAgIDxUYWJsZSBzb3VyY2U9XCIxRHdUYlVTV2Y1a3pOcTg0S2MwOGJKOVd5dzlpamZCdVNcIiB0aXRsZT17XG4gICAgICAgICAgICA8TGluayBocmVmPXtcImFkZFwifT5BZGQ8L0xpbms+XG4gICAgICAgIH0gLz5cbiAgICA8L1BhZ2UgPlxuKSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsYUFBTyxVQUFVLFdBQVc7QUFBQTtBQUFBOzs7QUNBNUIsb0JBRWE7QUFGYjtBQUFBO0FBQUEscUJBQWtCO0FBRVgsTUFBTSxVQUFVLENBQUMsRUFBRSxTQUFTLE1BQU07QUFD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QUFRLE9BQU8sRUFBRSx1QkFBdUIsT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsb0JBQW9CLEtBQUssS0FDM0ksOEJBQUFBLFFBQUEsY0FBQyxTQUFJLFdBQVUsU0FFUCxPQUFPLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFBQSxVQUFJLENBQUMsUUFBUSxVQUN0Qyw4QkFBQUEsUUFBQSxjQUFDLFNBQUksS0FBSyxTQUFRLE1BQU87QUFBQSxRQUM3QixDQUVSLEdBQ0MsS0FBSztBQUFBLFVBQUksQ0FBQyxHQUFHLFVBQ1YsOEJBQUFBLFFBQUEsY0FBQyxTQUFJLEtBQUssT0FBTyxXQUFVLFNBRW5CLE9BQU8sT0FBTyxDQUFDLEVBQUU7QUFBQSxZQUFJLENBQUMsUUFBUSxVQUMxQiw4QkFBQUEsUUFBQSxjQUFDLFNBQUksS0FBSyxTQUFRLE9BQU8sTUFBTSxDQUFFO0FBQUEsVUFDckMsQ0FFUjtBQUFBLFFBQ0osQ0FDSixHQUVDLEVBQUUsZ0JBQWdCLFVBQVUsOEJBQUFBLFFBQUEsY0FBQyxTQUFJLE9BQU8sRUFBRSxZQUFZLGVBQWUsS0FBRyx5QkFDL0MsTUFBTSxRQUFPLFlBQ25DLDhCQUFBQSxRQUFBLGNBQUMsVUFBRyxHQUNILEtBQUssVUFBVSxNQUFNLE1BQU0sQ0FBQyxDQUNqQyxDQUNKLENBRUosQ0FFSjtBQUFBLE1BQ0o7QUFBQTtBQUFBOzs7QUNyREE7QUFBQTtBQUFBLFVBQUFDLGdCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxhQUFPLFVBQ0gsOEJBQUFDLFFBQUEsY0FBQyxRQUFLLE9BQU0sc0JBQ1IsOEJBQUFBLFFBQUEsY0FBQyxTQUFNLFFBQU8scUNBQW9DLE9BQzlDLDhCQUFBQSxRQUFBLGNBQUMsUUFBSyxNQUFNLFNBQU8sS0FBRyxHQUN4QixDQUNOO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiUmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgIlJlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJyZXNvbHZlIiwgImdhcGkiLCAiZ2FwaSIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgIlJlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiLCAiZ2FwaSIsICJpbXBvcnRfcmVhY3QiLCAiZGF0YSIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiXQp9Cg==
