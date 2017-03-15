"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var gapi = window.gapi = window.gapi || {};gapi._bs = new Date().getTime();(function () {
  /*
  gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
  var g = window,
      h = document,
      m = g.location,
      n = function n() {},
      q = /\[native code\]/,
      u = function u(a, b, c) {
    return a[b] = a[b] || c;
  },
      aa = function aa(a) {
    for (var b = 0; b < this.length; b++) {
      if (this[b] === a) return b;
    }return -1;
  },
      ba = function ba(a) {
    a = a.sort();for (var b = [], c = void 0, d = 0; d < a.length; d++) {
      var e = a[d];e != c && b.push(e);c = e;
    }return b;
  },
      w = function w() {
    var a;if ((a = Object.create) && q.test(a)) a = a(null);else {
      a = {};for (var b in a) {
        a[b] = void 0;
      }
    }return a;
  },
      x = u(g, "gapi", {});var A;A = u(g, "___jsl", w());u(A, "I", 0);u(A, "hel", 10);var B = function B() {
    var a = m.href,
        b;if (A.dpo) b = A.h;else {
      b = A.h;var c = /([#].*&|[#])jsh=([^&#]*)/g,
          d = /([?#].*&|[?#])jsh=([^&#]*)/g;if (a = a && (c.exec(a) || d.exec(a))) try {
        b = decodeURIComponent(a[2]);
      } catch (e) {}
    }return b;
  },
      ca = function ca(a) {
    var b = u(A, "PQ", []);A.PQ = [];var c = b.length;if (0 === c) a();else for (var d = 0, e = function e() {
      ++d === c && a();
    }, f = 0; f < c; f++) {
      b[f](e);
    }
  },
      C = function C(a) {
    return u(u(A, "H", w()), a, w());
  };var D = u(A, "perf", w()),
      F = u(D, "g", w()),
      da = u(D, "i", w());u(D, "r", []);w();w();var G = function G(a, b, c) {
    var d = D.r;"function" === typeof d ? d(a, b, c) : d.push([a, b, c]);
  },
      K = function K(a, b, c) {
    b && 0 < b.length && (b = J(b), c && 0 < c.length && (b += "___" + J(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = u(da, "_p", w()), u(b, c, w())[a] = new Date().getTime(), G(a, "_p", c));
  },
      J = function J(a) {
    return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_");
  };var L = w(),
      M = [],
      N = function N(a) {
    throw Error("Bad hint" + (a ? ": " + a : ""));
  };M.push(["jsl", function (a) {
    for (var b in a) {
      if (Object.prototype.hasOwnProperty.call(a, b)) {
        var c = a[b];"object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? A[b] = u(A, b, []).concat(c) : u(A, b, c);
      }
    }if (b = a.u) a = u(A, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1]);
  }]);var ea = /^(\/[a-zA-Z0-9_\-]+)+$/,
      O = [/\/amp\//, /\/amp$/, /^\/amp$/],
      fa = /^[a-zA-Z0-9\-_\.,!]+$/,
      ga = /^gapi\.loaded_[0-9]+$/,
      ha = /^[a-zA-Z0-9,._-]+$/,
      la = function la(a, b, c, d) {
    var e = a.split(";"),
        f = e.shift(),
        l = L[f],
        k = null;l ? k = l(e, b, c, d) : N("no hint processor for: " + f);k || N("failed to generate load url");b = k;c = b.match(ia);(d = b.match(ja)) && 1 === d.length && ka.test(b) && c && 1 === c.length || N("failed sanity: " + a);return k;
  },
      na = function na(a, b, c, d) {
    a = ma(a);ga.test(c) || N("invalid_callback");b = P(b);d = d && d.length ? P(d) : null;var e = function e(a) {
      return encodeURIComponent(a).replace(/%2C/g, ",");
    };return [encodeURIComponent(a.g).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.a ? "/am=" + e(a.a) : "", a.c ? "/rs=" + e(a.c) : "", a.f ? "/t=" + e(a.f) : "", "/cb=", e(c)].join("");
  },
      ma = function ma(a) {
    "/" !== a.charAt(0) && N("relative path");for (var b = a.substring(1).split("/"), c = []; b.length;) {
      a = b.shift();if (!a.length || 0 == a.indexOf(".")) N("empty/relative directory");else if (0 < a.indexOf("=")) {
        b.unshift(a);
        break;
      }c.push(a);
    }a = {};for (var d = 0, e = b.length; d < e; ++d) {
      var f = b[d].split("="),
          l = decodeURIComponent(f[0]),
          k = decodeURIComponent(f[1]);2 == f.length && l && k && (a[l] = a[l] || k);
    }b = "/" + c.join("/");ea.test(b) || N("invalid_prefix");c = 0;for (d = O.length; c < d; ++c) {
      O[c].test(b) && N("invalid_prefix");
    }c = Q(a, "k", !0);d = Q(a, "am");e = Q(a, "rs");a = Q(a, "t");return { g: b, version: c, a: d, c: e, f: a };
  },
      P = function P(a) {
    for (var b = [], c = 0, d = a.length; c < d; ++c) {
      var e = a[c].replace(/\./g, "_").replace(/-/g, "_");ha.test(e) && b.push(e);
    }return b.join(",");
  },
      Q = function Q(a, b, c) {
    a = a[b];!a && c && N("missing: " + b);if (a) {
      if (fa.test(a)) return a;N("invalid: " + b);
    }return null;
  },
      ka = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
      ja = /\/cb=/g,
      ia = /\/\//g,
      oa = function oa() {
    var a = B();if (!a) throw Error("Bad hint");return a;
  };L.m = function (a, b, c, d) {
    (a = a[0]) || N("missing_hint");return "https://apis.google.com" + na(a, b, c, d);
  };var R = decodeURI("%73cript"),
      S = /^[-+_0-9\/A-Za-z]+={0,2}$/,
      T = function T(a, b) {
    for (var c = [], d = 0; d < a.length; ++d) {
      var e = a[d];e && 0 > aa.call(b, e) && c.push(e);
    }return c;
  },
      U = function U() {
    var a = A.nonce;if (void 0 !== a) return a && a === String(a) && a.match(S) ? a : A.nonce = null;var b = u(A, "us", []);if (!b || !b.length) return A.nonce = null;for (var c = h.getElementsByTagName(R), d = 0, e = c.length; d < e; ++d) {
      var f = c[d];if (f.src && (a = String(f.nonce || f.getAttribute("nonce") || "") || null)) {
        for (var l = 0, k = b.length; l < k && b[l] !== f.src; ++l) {}if (l !== k && a && a === String(a) && a.match(S)) return A.nonce = a;
      }
    }return null;
  },
      pa = function pa(a) {
    if ("loading" != h.readyState) V(a);else {
      var b = U(),
          c = "";null !== b && (c = ' nonce="' + b + '"');h.write("<" + R + ' src="' + encodeURI(a) + '"' + c + "></" + R + ">");
    }
  },
      V = function V(a) {
    var b = h.createElement(R);b.setAttribute("src", a);a = U();null !== a && b.setAttribute("nonce", a);b.async = "true";(a = h.getElementsByTagName(R)[0]) ? a.parentNode.insertBefore(b, a) : (h.head || h.body || h.documentElement).appendChild(b);
  },
      qa = function qa(a, b) {
    var c = b && b._c;if (c) for (var d = 0; d < M.length; d++) {
      var e = M[d][0],
          f = M[d][1];f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b);
    }
  },
      ra = function ra(a, b, c) {
    X(function () {
      var c;c = b === B() ? u(x, "_", w()) : w();c = u(C(b), "_", c);a(c);
    }, c);
  },
      Z = function Z(a, b) {
    var c = b || {};"function" == typeof b && (c = {}, c.callback = b);qa(a, c);b = a ? a.split(":") : [];var d = c.h || oa(),
        e = u(A, "ah", w());if (e["::"] && b.length) {
      a = [];for (var f = null; f = b.shift();) {
        var l = f.split("."),
            l = e[f] || e[l[1] && "ns:" + l[0] || ""] || d,
            k = a.length && a[a.length - 1] || null,
            v = k;k && k.hint == l || (v = { hint: l, b: [] }, a.push(v));v.b.push(f);
      }var y = a.length;if (1 < y) {
        var z = c.callback;z && (c.callback = function () {
          0 == --y && z();
        });
      }for (; b = a.shift();) {
        Y(b.b, c, b.hint);
      }
    } else Y(b || [], c, d);
  },
      Y = function Y(a, b, c) {
    a = ba(a) || [];var d = b.callback,
        e = b.config,
        f = b.timeout,
        l = b.ontimeout,
        k = b.onerror,
        v = void 0;"function" == typeof k && (v = k);var y = null,
        z = !1;if (f && !l || !f && l) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";var k = u(C(c), "r", []).sort(),
        H = u(C(c), "L", []).sort(),
        E = [].concat(k),
        W = function W(a, b) {
      if (z) return 0;g.clearTimeout(y);H.push.apply(H, p);var d = ((x || {}).config || {}).update;d ? d(e) : e && u(A, "cu", []).push(e);if (b) {
        K("me0", a, E);try {
          ra(b, c, v);
        } finally {
          K("me1", a, E);
        }
      }return 1;
    };0 < f && (y = g.setTimeout(function () {
      z = !0;l();
    }, f));var p = T(a, H);if (p.length) {
      var p = T(a, k),
          r = u(A, "CP", []),
          t = r.length;r[t] = function (a) {
        if (!a) return 0;K("ml1", p, E);var b = function b(_b) {
          r[t] = null;W(p, a) && ca(function () {
            d && d();_b();
          });
        },
            c = function c() {
          var a = r[t + 1];a && a();
        };0 < t && r[t - 1] ? r[t] = function () {
          b(c);
        } : b(c);
      };if (p.length) {
        var I = "loaded_" + A.I++;x[I] = function (a) {
          r[t](a);x[I] = null;
        };a = la(c, p, "gapi." + I, k);k.push.apply(k, p);K("ml0", p, E);b.sync || g.___gapisync ? pa(a) : V(a);
      } else r[t](n);
    } else W(p) && d && d();
  };var X = function X(a, b) {
    if (A.hee && 0 < A.hel) try {
      return a();
    } catch (c) {
      b && b(c), A.hel--, Z("debug_error", function () {
        try {
          window.___jsl.hefn(c);
        } catch (d) {
          throw c;
        }
      });
    } else try {
      return a();
    } catch (c) {
      throw b && b(c), c;
    }
  };x.load = function (a, b) {
    return X(function () {
      return Z(a, b);
    });
  };F.bs0 = window.gapi._bs || new Date().getTime();G("bs0");F.bs1 = new Date().getTime();G("bs1");delete window.gapi._bs;
}).call(undefined);
gapi.load("rpc:shindig_random", { callback: window["init"], _c: { "jsl": { "ci": { "deviceType": "desktop", "oauth-flow": { "authUrl": "https://accounts.google.com/o/oauth2/auth", "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay", "disableOpt": true, "idpIframeUrl": "https://accounts.google.com/o/oauth2/iframe", "usegapi": false }, "debug": { "reportExceptionRate": 0.05, "forceIm": false, "rethrowException": false, "host": "https://apis.google.com" }, "enableMultilogin": true, "googleapis.config": { "auth": { "useFirstPartyAuthV2": false } }, "isPlusUser": false, "inline": { "css": 1 }, "disableRealtimeCallback": false, "drive_share": { "skipInitCommand": true }, "csi": { "rate": 0.01 }, "client": { "perApiBatch": false, "rms": "migrated", "cors": false }, "isLoggedIn": false, "signInDeprecation": { "rate": 0.0 }, "include_granted_scopes": true, "llang": "en", "iframes": { "youtube": { "params": { "location": ["search", "hash"] }, "url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1", "methods": ["scroll", "openwindow"] }, "ytsubscribe": { "url": "https://www.youtube.com/subscribe_embed?usegapi=1" }, "plus_circle": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1" }, "plus_share": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1" }, "rbr_s": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller" }, "udc_webconsentflow": { "params": { "url": "" }, "url": "https://myaccount.google.com/webconsent?usegapi=1" }, ":source:": "3p", "playemm": { "url": "https://play.google.com/work/embedded/search?usegapi=1&usegapi=1" }, "savetoandroidpay": { "url": "https://androidpay.google.com/a/widget/save" }, "blogger": { "params": { "location": ["search", "hash"] }, "url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1", "methods": ["scroll", "openwindow"] }, "evwidget": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/events/widget?usegapi=1" }, "partnersbadge": { "url": "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1" }, "surveyoptin": { "url": "https://www.google.com/shopping/customerreviews/optin?usegapi=1" }, ":socialhost:": "https://apis.google.com", "shortlists": { "url": "" }, "hangout": { "url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget" }, "plus_followers": { "params": { "url": "" }, "url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1" }, "post": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1" }, ":gplus_url:": "https://plus.google.com", "signin": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1", "methods": ["onauth"] }, "rbr_i": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation" }, "donation": { "url": "https://onetoday.google.com/home/donationWidget?usegapi=1" }, "share": { "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1" }, "plusone": { "params": { "count": "", "size": "", "url": "" }, "url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1" }, "comments": { "params": { "location": ["search", "hash"] }, "url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1", "methods": ["scroll", "openwindow"] }, ":im_socialhost:": "https://plus.googleapis.com", "backdrop": { "url": "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1" }, "visibility": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1" }, "autocomplete": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete" }, "additnow": { "url": "https://apis.google.com/additnow/additnow.html?usegapi=1", "methods": ["launchurl"] }, ":signuphost:": "https://plus.google.com", "ratingbadge": { "url": "https://www.google.com/shopping/customerreviews/badge?usegapi=1" }, "appcirclepicker": { "url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker" }, "follow": { "url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1" }, "community": { "url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1" }, "sharetoclassroom": { "url": "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi=1" }, "ytshare": { "params": { "url": "" }, "url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1" }, "plus": { "url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1" }, "family_creation": { "params": { "url": "" }, "url": "https://families.google.com/webcreation?usegapi=1&usegapi=1" }, "commentcount": { "url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1" }, "configurator": { "url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1" }, "zoomableimage": { "url": "https://ssl.gstatic.com/microscope/embed/" }, "savetowallet": { "url": "https://androidpay.google.com/a/widget/save" }, "person": { "url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1" }, "savetodrive": { "url": "https://drive.google.com/savetodrivebutton?usegapi=1", "methods": ["save"] }, "page": { "url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1" }, "card": { "url": ":socialhost:/:session_prefix:_/hovercard/card" } } }, "h": "m;/_/scs/apps-static/_/js/k=oz.gapi.en_US.RXRVSiEephc.O/m=__features__/am=AQ/rt=j/d=1/rs=AGLTcCPTZzf9mr1YQ-utgDZPP73qkpmOQQ", "u": "https://apis.google.com/js/rpc:shindig_random.js?onload=init", "hee": true, "fp": "67e2c0dec393312e9256c4a9be56e10162600b7f", "dpo": false }, "fp": "67e2c0dec393312e9256c4a9be56e10162600b7f", "annotation": ["interactivepost", "recobar", "signin2", "autocomplete", "profile"], "bimodal": ["signin", "share"] } });