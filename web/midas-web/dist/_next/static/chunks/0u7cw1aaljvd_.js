!(function () {
  try {
    var e =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof self
                ? self
                : {},
      n = new e.Error().stack;
    n &&
      ((e._debugIds || (e._debugIds = {}))[n] =
        "b65f5e03-d559-a974-2996-f6d0ef9fa3c5");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  618566,
  (e, r, t) => {
    r.exports = e.r(976562);
  },
  728317,
  (e) => {
    "use strict";
    var r = e.i(266073);
    e.s([
      "clearPendingAuth",
      0,
      function () {
        sessionStorage.removeItem(r.PENDING_AUTH_KEY);
      },
      "getPendingAuth",
      0,
      function () {
        let e = sessionStorage.getItem(r.PENDING_AUTH_KEY);
        if (!e) return null;
        try {
          return JSON.parse(e);
        } catch {
          return (sessionStorage.removeItem(r.PENDING_AUTH_KEY), null);
        }
      },
      "setPendingAuth",
      0,
      function (e) {
        sessionStorage.setItem(r.PENDING_AUTH_KEY, JSON.stringify(e));
      },
    ]);
  },
  361653,
  (e) => {
    "use strict";
    let r = (0, e.i(475254).default)("circle-alert", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
    ]);
    e.s(["default", 0, r]);
  },
  707621,
  (e) => {
    "use strict";
    var r = e.i(361653);
    e.s(["CircleAlert", () => r.default]);
  },
  664779,
  (e) => {
    "use strict";
    var r = e.i(843476),
      t = e.i(257067),
      i = e.i(662537),
      a = e.i(707621),
      n = e.i(271645),
      s = e.i(519455);
    e.s([
      "ErrorScreen",
      0,
      function ({
        title: e,
        message: l,
        onRetry: o,
        retryLabel: c = "Tekrar dene",
        error: u,
        errorRef: d,
      }) {
        return (
          (0, n.useEffect)(() => {
            u &&
              !d &&
              (0, i.captureException)(u, { tags: { source: "error-screen" } });
          }, [u, d]),
          (0, r.jsx)(t.SplashSurface, {
            tone: "error",
            showLogo: !1,
            children: (0, r.jsxs)("div", {
              className: "flex flex-col z-10000 items-center gap-2.5",
              children: [
                (0, r.jsx)(a.CircleAlert, { className: "size-6" }),
                (0, r.jsxs)("div", {
                  className: "text-sm text-center max-w-xs",
                  children: [
                    e &&
                      (0, r.jsxs)("div", {
                        className: "mb-1",
                        children: [
                          (0, r.jsx)("span", {
                            className: "font-semibold",
                            children: e,
                          }),
                          (0, r.jsx)("br", {}),
                        ],
                      }),
                    (0, r.jsx)("span", {
                      className: "text-secondary",
                      children: l,
                    }),
                  ],
                }),
                (0, r.jsx)(s.Button, {
                  variant: "primary",
                  className: "mt-2.5",
                  onClick: o ?? (() => window.location.reload()),
                  children: c,
                }),
              ],
            }),
          })
        );
      },
    ]);
  },
  705219,
  (e) =>
    e.a(async (r, t) => {
      try {
        var i = e.i(843476),
          a = e.i(664779),
          n = e.i(123341),
          s = r([n]);
        [n] = s.then ? (await s)() : s;
        let l = (e) =>
          (0, i.jsxs)(i.Fragment, {
            children: [
              429 == e
                ? (0, i.jsx)(i.Fragment, {
                    children:
                      "Üst üste çok fazla deneme yaptığın için güvenlik nedeniyle erişimin geçici olarak kısıtlandı. Lütfen birkaç dakika sonra tekrar dene. Eğer sorun devam ederse VPN kullanmadığından emin olup farklı bir ağdan bağlanmayı deneyebilirsin.",
                  })
                : (0, i.jsx)(i.Fragment, {
                    children:
                      "IP adresinden olağan dışı trafik tespit edildiği için güvenlik nedeniyle erişimin geçici olarak kısıtlandı. Lütfen birkaç dakika sonra tekrar dene. Eğer sorun devam ederse VPN kullanmadığından emin olup farklı bir ağdan bağlanmayı deneyebilirsin.",
                  }),
              (0, i.jsx)("br", {}),
              (0, i.jsx)("br", {}),
              (0, i.jsx)("span", {
                children:
                  "Destek Merkezi ile destek@midasyatırım.com üzerinden iletişime geçebilirsin.",
              }),
            ],
          });
        (e.s([
          "CriticalErrorScreen",
          0,
          ({ code: e, error: r, onRetry: t, title: s, errorRef: o }) =>
            e && [403, 429].includes(e)
              ? o
                ? (0, i.jsx)(a.ErrorScreen, {
                    errorRef: o,
                    title: "Bağlantın geçici olarak kısıtlandı",
                    message: l(e),
                    onRetry: () =>
                      (0, n.logoutAndRedirect)("rate-limit-user-initiated", {
                        source: "rate-limit-dialog",
                        status: e,
                      }),
                    retryLabel: "Çıkış yap",
                  })
                : (0, i.jsx)(a.ErrorScreen, {
                    error: r,
                    title: "Bağlantın geçici olarak kısıtlandı",
                    message: l(e),
                    onRetry: () =>
                      (0, n.logoutAndRedirect)("rate-limit-user-initiated", {
                        source: "rate-limit-dialog",
                        status: e,
                      }),
                    retryLabel: "Çıkış yap",
                  })
              : o
                ? (0, i.jsx)(a.ErrorScreen, {
                    errorRef: o,
                    title: s ?? "Uygulama verileri yüklenirken bir hata oluştu",
                    onRetry: t,
                  })
                : (0, i.jsx)(a.ErrorScreen, {
                    error: r,
                    title: s ?? "Uygulama verileri yüklenirken bir hata oluştu",
                    onRetry: t,
                  }),
        ]),
          t());
      } catch (e) {
        t(e);
      }
    }, !1),
  552270,
  (e) => {
    "use strict";
    function r(e = 43) {
      let t = new Uint8Array(e);
      crypto.getRandomValues(t);
      let i =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
        a = "";
      for (let e of t) a += i[e % i.length];
      return a;
    }
    async function t(e) {
      let r = new TextEncoder().encode(e),
        t = new Uint8Array(await crypto.subtle.digest("SHA-256", r)),
        i = "";
      for (let e = 0; e < t.byteLength; e += 1) i += String.fromCodePoint(t[e]);
      return btoa(i)
        .replaceAll("+", "-")
        .replaceAll("/", "_")
        .replaceAll(/=+$/g, "");
    }
    async function i() {
      let e = r(64),
        i = await t(e);
      return { verifier: e, challenge: i };
    }
    e.s(["createPkcePair", 0, i, "randomString", 0, r]);
  },
  367059,
  (e) => {
    "use strict";
    e.s([
      "buildAuthorizeUrl",
      0,
      function (e) {
        let {
          ssoUrl: r,
          clientId: t,
          appUrl: i,
          state: a,
          codeChallenge: n,
          initiatedAt: s,
        } = e;
        if (!r || !t || !i)
          throw Error("Missing required SSO environment variables");
        let l = new URLSearchParams({
          response_type: "code",
          client_id: t,
          scope: "openid",
          redirect_uri: `${i}/auth/callback`,
          state: a,
          code_challenge: n,
          code_challenge_method: "S256",
          ts: String(s),
        });
        return `${r}/giris?${l.toString()}`;
      },
    ]);
  },
  36994,
  (e) =>
    e.a(async (r, t) => {
      try {
        var i = e.i(843476),
          a = e.i(705219),
          n = e.i(353867),
          s = e.i(728317),
          l = e.i(552270),
          o = e.i(548498),
          c = e.i(367059),
          u = e.i(799585),
          d = e.i(890265),
          m = e.i(618566),
          g = e.i(271645),
          f = r([a, u]);
        [a, u] = f.then ? (await f)() : f;
        let p = "Bir hata oluştu. Lütfen tekrar deneyin.";
        async function y(e, r) {
          let { verifier: t, challenge: i } = await (0, l.createPkcePair)(),
            a = (0, l.randomString)(32);
          ((0, s.setPendingAuth)({
            state: a,
            codeVerifier: t,
            redirectTo: "/dashboard",
          }),
            window.location.replace(
              (0, c.buildAuthorizeUrl)({
                ssoUrl: e.url,
                clientId: e.clientId,
                appUrl: r,
                state: a,
                codeChallenge: i,
                initiatedAt: Date.now(),
              }),
            ));
        }
        (e.s([
          "default",
          0,
          function () {
            let [e, r] = (0, g.useState)({
                error: null,
                status: null,
                errorRef: null,
              }),
              t = (0, m.useSearchParams)(),
              s = (0, m.useRouter)(),
              l = (0, u.useConfig)();
            async function c() {
              r({ error: null, status: null, errorRef: null });
              let [, e] = await (0, d.default)(y(l.sso, l.app.url));
              e && r((e) => ({ ...e, error: p }));
            }
            return ((0, g.useEffect)(() => {
              if (l.app.auth.localBypass) return;
              let e = (0, o.getAuthState)();
              if (e && e.refreshExpiry > Date.now())
                return void s.replace("/dashboard");
              if (t.get("error")) {
                let e = t.get("error_status");
                r((r) => ({
                  ...r,
                  error:
                    t.get("error_description") ??
                    "SSO girişi sırasında hata oluştu",
                  errorRef: t.get("error_ref") ?? null,
                  ...(e &&
                    Number.isInteger(Number.parseInt(e)) && {
                      status: Number.parseInt(e),
                    }),
                }));
                return;
              }
              async function i() {
                let [, e] = await (0, d.default)(y(l.sso, l.app.url));
                e && r((e) => ({ ...e, error: p }));
              }
              let a = setTimeout(i, 500);
              return () => clearTimeout(a);
            }, [l.app.auth.localBypass, l.sso, l.app.url, s, t]),
            (0, g.useEffect)(() => {
              function e(e) {
                e.persisted && window.location.reload();
              }
              return (
                window.addEventListener("pageshow", e),
                () => window.removeEventListener("pageshow", e)
              );
            }, []),
            e.error)
              ? e.errorRef
                ? (0, i.jsx)(a.CriticalErrorScreen, {
                    title: e.error,
                    onRetry: c,
                    code: e.status,
                    errorRef: e.errorRef,
                  })
                : (0, i.jsx)(a.CriticalErrorScreen, {
                    title: e.error,
                    onRetry: c,
                    code: e.status,
                    error: e.error,
                  })
              : (0, i.jsx)(n.AppSplash, {});
          },
        ]),
          t());
      } catch (e) {
        t(e);
      }
    }, !1),
]);

//# debugId=b65f5e03-d559-a974-2996-f6d0ef9fa3c5
