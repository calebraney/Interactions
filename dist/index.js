(() => {
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

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      new EventSource(`http://localhost:3000/esbuild`).addEventListener(
        "change",
        () => location.reload()
      );
    }
  });

  // node_modules/plyr/dist/plyr.min.js
  var require_plyr_min = __commonJS({
    "node_modules/plyr/dist/plyr.min.js"(exports, module) {
      init_live_reload();
      "object" == typeof navigator && function(e, t2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define("Plyr", t2) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t2();
      }(exports, function() {
        "use strict";
        function e(e2, t3, i3) {
          return (t3 = function(e3) {
            var t4 = function(e4, t5) {
              if ("object" != typeof e4 || null === e4) return e4;
              var i4 = e4[Symbol.toPrimitive];
              if (void 0 !== i4) {
                var s2 = i4.call(e4, t5 || "default");
                if ("object" != typeof s2) return s2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t5 ? String : Number)(e4);
            }(e3, "string");
            return "symbol" == typeof t4 ? t4 : String(t4);
          }(t3)) in e2 ? Object.defineProperty(e2, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e2[t3] = i3, e2;
        }
        function t2(e2, t3) {
          for (var i3 = 0; i3 < t3.length; i3++) {
            var s2 = t3[i3];
            s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(e2, s2.key, s2);
          }
        }
        function i2(e2, t3, i3) {
          return t3 in e2 ? Object.defineProperty(e2, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e2[t3] = i3, e2;
        }
        function s(e2, t3) {
          var i3 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var s2 = Object.getOwnPropertySymbols(e2);
            t3 && (s2 = s2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
            })), i3.push.apply(i3, s2);
          }
          return i3;
        }
        function n(e2) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n2 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? s(Object(n2), true).forEach(function(t4) {
              i2(e2, t4, n2[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : s(Object(n2)).forEach(function(t4) {
              Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n2, t4));
            });
          }
          return e2;
        }
        var a = { addCSS: true, thumbWidth: 15, watch: true };
        var l = function(e2) {
          return null != e2 ? e2.constructor : null;
        }, r = function(e2, t3) {
          return !!(e2 && t3 && e2 instanceof t3);
        }, o = function(e2) {
          return null == e2;
        }, c = function(e2) {
          return l(e2) === Object;
        }, u = function(e2) {
          return l(e2) === String;
        }, h = function(e2) {
          return Array.isArray(e2);
        }, d = function(e2) {
          return r(e2, NodeList);
        }, m = { nullOrUndefined: o, object: c, number: function(e2) {
          return l(e2) === Number && !Number.isNaN(e2);
        }, string: u, boolean: function(e2) {
          return l(e2) === Boolean;
        }, function: function(e2) {
          return l(e2) === Function;
        }, array: h, nodeList: d, element: function(e2) {
          return r(e2, Element);
        }, event: function(e2) {
          return r(e2, Event);
        }, empty: function(e2) {
          return o(e2) || (u(e2) || h(e2) || d(e2)) && !e2.length || c(e2) && !Object.keys(e2).length;
        } };
        function p(e2, t3) {
          if (1 > t3) {
            var i3 = function(e3) {
              var t4 = "".concat(e3).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t4 ? Math.max(0, (t4[1] ? t4[1].length : 0) - (t4[2] ? +t4[2] : 0)) : 0;
            }(t3);
            return parseFloat(e2.toFixed(i3));
          }
          return Math.round(e2 / t3) * t3;
        }
        var g = function() {
          function e2(t3, i3) {
            (function(e3, t4) {
              if (!(e3 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            })(this, e2), m.element(t3) ? this.element = t3 : m.string(t3) && (this.element = document.querySelector(t3)), m.element(this.element) && m.empty(this.element.rangeTouch) && (this.config = n({}, a, {}, i3), this.init());
          }
          return function(e3, i3, s2) {
            i3 && t2(e3.prototype, i3), s2 && t2(e3, s2);
          }(e2, [{ key: "init", value: function() {
            e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
          } }, { key: "destroy", value: function() {
            e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
          } }, { key: "listeners", value: function(e3) {
            var t3 = this, i3 = e3 ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function(e4) {
              t3.element[i3](e4, function(e5) {
                return t3.set(e5);
              }, false);
            });
          } }, { key: "get", value: function(t3) {
            if (!e2.enabled || !m.event(t3)) return null;
            var i3, s2 = t3.target, n2 = t3.changedTouches[0], a2 = parseFloat(s2.getAttribute("min")) || 0, l2 = parseFloat(s2.getAttribute("max")) || 100, r2 = parseFloat(s2.getAttribute("step")) || 1, o2 = s2.getBoundingClientRect(), c2 = 100 / o2.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (i3 = 100 / o2.width * (n2.clientX - o2.left)) ? i3 = 0 : 100 < i3 && (i3 = 100), 50 > i3 ? i3 -= (100 - 2 * i3) * c2 : 50 < i3 && (i3 += 2 * (i3 - 50) * c2), a2 + p(i3 / 100 * (l2 - a2), r2);
          } }, { key: "set", value: function(t3) {
            e2.enabled && m.event(t3) && !t3.target.disabled && (t3.preventDefault(), t3.target.value = this.get(t3), function(e3, t4) {
              if (e3 && t4) {
                var i3 = new Event(t4, { bubbles: true });
                e3.dispatchEvent(i3);
              }
            }(t3.target, "touchend" === t3.type ? "change" : "input"));
          } }], [{ key: "setup", value: function(t3) {
            var i3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s2 = null;
            if (m.empty(t3) || m.string(t3) ? s2 = Array.from(document.querySelectorAll(m.string(t3) ? t3 : 'input[type="range"]')) : m.element(t3) ? s2 = [t3] : m.nodeList(t3) ? s2 = Array.from(t3) : m.array(t3) && (s2 = t3.filter(m.element)), m.empty(s2)) return null;
            var l2 = n({}, a, {}, i3);
            if (m.string(t3) && l2.watch) {
              var r2 = new MutationObserver(function(i4) {
                Array.from(i4).forEach(function(i5) {
                  Array.from(i5.addedNodes).forEach(function(i6) {
                    m.element(i6) && function(e3, t4) {
                      return function() {
                        return Array.from(document.querySelectorAll(t4)).includes(this);
                      }.call(e3, t4);
                    }(i6, t3) && new e2(i6, l2);
                  });
                });
              });
              r2.observe(document.body, { childList: true, subtree: true });
            }
            return s2.map(function(t4) {
              return new e2(t4, i3);
            });
          } }, { key: "enabled", get: function() {
            return "ontouchstart" in document.documentElement;
          } }]), e2;
        }();
        const f = (e2) => null != e2 ? e2.constructor : null, y = (e2, t3) => Boolean(e2 && t3 && e2 instanceof t3), b = (e2) => null == e2, v = (e2) => f(e2) === Object, w = (e2) => f(e2) === String, T = (e2) => "function" == typeof e2, k = (e2) => Array.isArray(e2), C = (e2) => y(e2, NodeList), A = (e2) => b(e2) || (w(e2) || k(e2) || C(e2)) && !e2.length || v(e2) && !Object.keys(e2).length;
        var S = { nullOrUndefined: b, object: v, number: (e2) => f(e2) === Number && !Number.isNaN(e2), string: w, boolean: (e2) => f(e2) === Boolean, function: T, array: k, weakMap: (e2) => y(e2, WeakMap), nodeList: C, element: (e2) => null !== e2 && "object" == typeof e2 && 1 === e2.nodeType && "object" == typeof e2.style && "object" == typeof e2.ownerDocument, textNode: (e2) => f(e2) === Text, event: (e2) => y(e2, Event), keyboardEvent: (e2) => y(e2, KeyboardEvent), cue: (e2) => y(e2, window.TextTrackCue) || y(e2, window.VTTCue), track: (e2) => y(e2, TextTrack) || !b(e2) && w(e2.kind), promise: (e2) => y(e2, Promise) && T(e2.then), url: (e2) => {
          if (y(e2, window.URL)) return true;
          if (!w(e2)) return false;
          let t3 = e2;
          e2.startsWith("http://") && e2.startsWith("https://") || (t3 = `http://${e2}`);
          try {
            return !A(new URL(t3).hostname);
          } catch (e3) {
            return false;
          }
        }, empty: A };
        const E = (() => {
          const e2 = document.createElement("span"), t3 = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, i3 = Object.keys(t3).find((t4) => void 0 !== e2.style[t4]);
          return !!S.string(i3) && t3[i3];
        })();
        function P(e2, t3) {
          setTimeout(() => {
            try {
              e2.hidden = true, e2.offsetHeight, e2.hidden = false;
            } catch (e3) {
            }
          }, t3);
        }
        var M = { isIE: Boolean(window.document.documentMode), isEdge: /Edge/g.test(navigator.userAgent), isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent), isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1, isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1 };
        function N(e2, t3) {
          return t3.split(".").reduce((e3, t4) => e3 && e3[t4], e2);
        }
        function x(e2 = {}, ...t3) {
          if (!t3.length) return e2;
          const i3 = t3.shift();
          return S.object(i3) ? (Object.keys(i3).forEach((t4) => {
            S.object(i3[t4]) ? (Object.keys(e2).includes(t4) || Object.assign(e2, { [t4]: {} }), x(e2[t4], i3[t4])) : Object.assign(e2, { [t4]: i3[t4] });
          }), x(e2, ...t3)) : e2;
        }
        function L(e2, t3) {
          const i3 = e2.length ? e2 : [e2];
          Array.from(i3).reverse().forEach((e3, i4) => {
            const s2 = i4 > 0 ? t3.cloneNode(true) : t3, n2 = e3.parentNode, a2 = e3.nextSibling;
            s2.appendChild(e3), a2 ? n2.insertBefore(s2, a2) : n2.appendChild(s2);
          });
        }
        function I(e2, t3) {
          S.element(e2) && !S.empty(t3) && Object.entries(t3).filter(([, e3]) => !S.nullOrUndefined(e3)).forEach(([t4, i3]) => e2.setAttribute(t4, i3));
        }
        function $(e2, t3, i3) {
          const s2 = document.createElement(e2);
          return S.object(t3) && I(s2, t3), S.string(i3) && (s2.innerText = i3), s2;
        }
        function _(e2, t3, i3, s2) {
          S.element(t3) && t3.appendChild($(e2, i3, s2));
        }
        function O(e2) {
          S.nodeList(e2) || S.array(e2) ? Array.from(e2).forEach(O) : S.element(e2) && S.element(e2.parentNode) && e2.parentNode.removeChild(e2);
        }
        function j(e2) {
          if (!S.element(e2)) return;
          let { length: t3 } = e2.childNodes;
          for (; t3 > 0; ) e2.removeChild(e2.lastChild), t3 -= 1;
        }
        function q(e2, t3) {
          return S.element(t3) && S.element(t3.parentNode) && S.element(e2) ? (t3.parentNode.replaceChild(e2, t3), e2) : null;
        }
        function D(e2, t3) {
          if (!S.string(e2) || S.empty(e2)) return {};
          const i3 = {}, s2 = x({}, t3);
          return e2.split(",").forEach((e3) => {
            const t4 = e3.trim(), n2 = t4.replace(".", ""), a2 = t4.replace(/[[\]]/g, "").split("="), [l2] = a2, r2 = a2.length > 1 ? a2[1].replace(/["']/g, "") : "";
            switch (t4.charAt(0)) {
              case ".":
                S.string(s2.class) ? i3.class = `${s2.class} ${n2}` : i3.class = n2;
                break;
              case "#":
                i3.id = t4.replace("#", "");
                break;
              case "[":
                i3[l2] = r2;
            }
          }), x(s2, i3);
        }
        function H(e2, t3) {
          if (!S.element(e2)) return;
          let i3 = t3;
          S.boolean(i3) || (i3 = !e2.hidden), e2.hidden = i3;
        }
        function R(e2, t3, i3) {
          if (S.nodeList(e2)) return Array.from(e2).map((e3) => R(e3, t3, i3));
          if (S.element(e2)) {
            let s2 = "toggle";
            return void 0 !== i3 && (s2 = i3 ? "add" : "remove"), e2.classList[s2](t3), e2.classList.contains(t3);
          }
          return false;
        }
        function F(e2, t3) {
          return S.element(e2) && e2.classList.contains(t3);
        }
        function V(e2, t3) {
          const { prototype: i3 } = Element;
          return (i3.matches || i3.webkitMatchesSelector || i3.mozMatchesSelector || i3.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t3)).includes(this);
          }).call(e2, t3);
        }
        function U(e2) {
          return this.elements.container.querySelectorAll(e2);
        }
        function B(e2) {
          return this.elements.container.querySelector(e2);
        }
        function W(e2 = null, t3 = false) {
          S.element(e2) && e2.focus({ preventScroll: true, focusVisible: t3 });
        }
        const z = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" }, K = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check(e2, t3) {
          const i3 = K[e2] || "html5" !== t3;
          return { api: i3, ui: i3 && K.rangeInput };
        }, pip: !(M.isIPhone || !S.function($("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $("video").disablePictureInPicture)), airplay: S.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime(e2) {
          if (S.empty(e2)) return false;
          const [t3] = e2.split("/");
          let i3 = e2;
          if (!this.isHTML5 || t3 !== this.type) return false;
          Object.keys(z).includes(i3) && (i3 += `; codecs="${z[e2]}"`);
          try {
            return Boolean(i3 && this.media.canPlayType(i3).replace(/no/, ""));
          } catch (e3) {
            return false;
          }
        }, textTracks: "textTracks" in document.createElement("video"), rangeInput: (() => {
          const e2 = document.createElement("input");
          return e2.type = "range", "range" === e2.type;
        })(), touch: "ontouchstart" in document.documentElement, transitions: false !== E, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches }, Y = (() => {
          let e2 = false;
          try {
            const t3 = Object.defineProperty({}, "passive", { get: () => (e2 = true, null) });
            window.addEventListener("test", null, t3), window.removeEventListener("test", null, t3);
          } catch (e3) {
          }
          return e2;
        })();
        function Q(e2, t3, i3, s2 = false, n2 = true, a2 = false) {
          if (!e2 || !("addEventListener" in e2) || S.empty(t3) || !S.function(i3)) return;
          const l2 = t3.split(" ");
          let r2 = a2;
          Y && (r2 = { passive: n2, capture: a2 }), l2.forEach((t4) => {
            this && this.eventListeners && s2 && this.eventListeners.push({ element: e2, type: t4, callback: i3, options: r2 }), e2[s2 ? "addEventListener" : "removeEventListener"](t4, i3, r2);
          });
        }
        function X(e2, t3 = "", i3, s2 = true, n2 = false) {
          Q.call(this, e2, t3, i3, true, s2, n2);
        }
        function J(e2, t3 = "", i3, s2 = true, n2 = false) {
          Q.call(this, e2, t3, i3, false, s2, n2);
        }
        function G(e2, t3 = "", i3, s2 = true, n2 = false) {
          const a2 = (...l2) => {
            J(e2, t3, a2, s2, n2), i3.apply(this, l2);
          };
          Q.call(this, e2, t3, a2, true, s2, n2);
        }
        function Z(e2, t3 = "", i3 = false, s2 = {}) {
          if (!S.element(e2) || S.empty(t3)) return;
          const n2 = new CustomEvent(t3, { bubbles: i3, detail: { ...s2, plyr: this } });
          e2.dispatchEvent(n2);
        }
        function ee() {
          this && this.eventListeners && (this.eventListeners.forEach((e2) => {
            const { element: t3, type: i3, callback: s2, options: n2 } = e2;
            t3.removeEventListener(i3, s2, n2);
          }), this.eventListeners = []);
        }
        function te() {
          return new Promise((e2) => this.ready ? setTimeout(e2, 0) : X.call(this, this.elements.container, "ready", e2)).then(() => {
          });
        }
        function ie(e2) {
          S.promise(e2) && e2.then(null, () => {
          });
        }
        function se(e2) {
          return S.array(e2) ? e2.filter((t3, i3) => e2.indexOf(t3) === i3) : e2;
        }
        function ne(e2, t3) {
          return S.array(e2) && e2.length ? e2.reduce((e3, i3) => Math.abs(i3 - t3) < Math.abs(e3 - t3) ? i3 : e3) : null;
        }
        function ae(e2) {
          return !(!window || !window.CSS) && window.CSS.supports(e2);
        }
        const le = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e2, [t3, i3]) => ({ ...e2, [t3 / i3]: [t3, i3] }), {});
        function re(e2) {
          if (!(S.array(e2) || S.string(e2) && e2.includes(":"))) return false;
          return (S.array(e2) ? e2 : e2.split(":")).map(Number).every(S.number);
        }
        function oe(e2) {
          if (!S.array(e2) || !e2.every(S.number)) return null;
          const [t3, i3] = e2, s2 = (e3, t4) => 0 === t4 ? e3 : s2(t4, e3 % t4), n2 = s2(t3, i3);
          return [t3 / n2, i3 / n2];
        }
        function ce(e2) {
          const t3 = (e3) => re(e3) ? e3.split(":").map(Number) : null;
          let i3 = t3(e2);
          if (null === i3 && (i3 = t3(this.config.ratio)), null === i3 && !S.empty(this.embed) && S.array(this.embed.ratio) && ({ ratio: i3 } = this.embed), null === i3 && this.isHTML5) {
            const { videoWidth: e3, videoHeight: t4 } = this.media;
            i3 = [e3, t4];
          }
          return oe(i3);
        }
        function ue(e2) {
          if (!this.isVideo) return {};
          const { wrapper: t3 } = this.elements, i3 = ce.call(this, e2);
          if (!S.array(i3)) return {};
          const [s2, n2] = oe(i3), a2 = 100 / s2 * n2;
          if (ae(`aspect-ratio: ${s2}/${n2}`) ? t3.style.aspectRatio = `${s2}/${n2}` : t3.style.paddingBottom = `${a2}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e3 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i4 = (e3 - a2) / (e3 / 50);
            this.fullscreen.active ? t3.style.paddingBottom = null : this.media.style.transform = `translateY(-${i4}%)`;
          } else this.isHTML5 && t3.classList.add(this.config.classNames.videoFixedRatio);
          return { padding: a2, ratio: i3 };
        }
        function he(e2, t3, i3 = 0.05) {
          const s2 = e2 / t3, n2 = ne(Object.keys(le), s2);
          return Math.abs(n2 - s2) <= i3 ? le[n2] : [e2, t3];
        }
        const de = { getSources() {
          if (!this.isHTML5) return [];
          return Array.from(this.media.querySelectorAll("source")).filter((e2) => {
            const t3 = e2.getAttribute("type");
            return !!S.empty(t3) || K.mime.call(this, t3);
          });
        }, getQualityOptions() {
          return this.config.quality.forced ? this.config.quality.options : de.getSources.call(this).map((e2) => Number(e2.getAttribute("size"))).filter(Boolean);
        }, setup() {
          if (!this.isHTML5) return;
          const e2 = this;
          e2.options.speed = e2.config.speed.options, S.empty(this.config.ratio) || ue.call(e2), Object.defineProperty(e2.media, "quality", { get() {
            const t3 = de.getSources.call(e2).find((t4) => t4.getAttribute("src") === e2.source);
            return t3 && Number(t3.getAttribute("size"));
          }, set(t3) {
            if (e2.quality !== t3) {
              if (e2.config.quality.forced && S.function(e2.config.quality.onChange)) e2.config.quality.onChange(t3);
              else {
                const i3 = de.getSources.call(e2).find((e3) => Number(e3.getAttribute("size")) === t3);
                if (!i3) return;
                const { currentTime: s2, paused: n2, preload: a2, readyState: l2, playbackRate: r2 } = e2.media;
                e2.media.src = i3.getAttribute("src"), ("none" !== a2 || l2) && (e2.once("loadedmetadata", () => {
                  e2.speed = r2, e2.currentTime = s2, n2 || ie(e2.play());
                }), e2.media.load());
              }
              Z.call(e2, e2.media, "qualitychange", false, { quality: t3 });
            }
          } });
        }, cancelRequests() {
          this.isHTML5 && (O(de.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        } };
        function me(e2, ...t3) {
          return S.empty(e2) ? e2 : e2.toString().replace(/{(\d+)}/g, (e3, i3) => t3[i3].toString());
        }
        const pe = (e2 = "", t3 = "", i3 = "") => e2.replace(new RegExp(t3.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i3.toString()), ge = (e2 = "") => e2.toString().replace(/\w\S*/g, (e3) => e3.charAt(0).toUpperCase() + e3.slice(1).toLowerCase());
        function fe(e2 = "") {
          let t3 = e2.toString();
          return t3 = function(e3 = "") {
            let t4 = e3.toString();
            return t4 = pe(t4, "-", " "), t4 = pe(t4, "_", " "), t4 = ge(t4), pe(t4, " ", "");
          }(t3), t3.charAt(0).toLowerCase() + t3.slice(1);
        }
        function ye(e2) {
          const t3 = document.createElement("div");
          return t3.appendChild(e2), t3.innerHTML;
        }
        const be = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" }, ve = { get(e2 = "", t3 = {}) {
          if (S.empty(e2) || S.empty(t3)) return "";
          let i3 = N(t3.i18n, e2);
          if (S.empty(i3)) return Object.keys(be).includes(e2) ? be[e2] : "";
          const s2 = { "{seektime}": t3.seekTime, "{title}": t3.title };
          return Object.entries(s2).forEach(([e3, t4]) => {
            i3 = pe(i3, e3, t4);
          }), i3;
        } };
        class we {
          constructor(t3) {
            e(this, "get", (e2) => {
              if (!we.supported || !this.enabled) return null;
              const t4 = window.localStorage.getItem(this.key);
              if (S.empty(t4)) return null;
              const i3 = JSON.parse(t4);
              return S.string(e2) && e2.length ? i3[e2] : i3;
            }), e(this, "set", (e2) => {
              if (!we.supported || !this.enabled) return;
              if (!S.object(e2)) return;
              let t4 = this.get();
              S.empty(t4) && (t4 = {}), x(t4, e2);
              try {
                window.localStorage.setItem(this.key, JSON.stringify(t4));
              } catch (e3) {
              }
            }), this.enabled = t3.config.storage.enabled, this.key = t3.config.storage.key;
          }
          static get supported() {
            try {
              if (!("localStorage" in window)) return false;
              const e2 = "___test";
              return window.localStorage.setItem(e2, e2), window.localStorage.removeItem(e2), true;
            } catch (e2) {
              return false;
            }
          }
        }
        function Te(e2, t3 = "text") {
          return new Promise((i3, s2) => {
            try {
              const s3 = new XMLHttpRequest();
              if (!("withCredentials" in s3)) return;
              s3.addEventListener("load", () => {
                if ("text" === t3) try {
                  i3(JSON.parse(s3.responseText));
                } catch (e3) {
                  i3(s3.responseText);
                }
                else i3(s3.response);
              }), s3.addEventListener("error", () => {
                throw new Error(s3.status);
              }), s3.open("GET", e2, true), s3.responseType = t3, s3.send();
            } catch (e3) {
              s2(e3);
            }
          });
        }
        function ke(e2, t3) {
          if (!S.string(e2)) return;
          const i3 = "cache", s2 = S.string(t3);
          let n2 = false;
          const a2 = () => null !== document.getElementById(t3), l2 = (e3, t4) => {
            e3.innerHTML = t4, s2 && a2() || document.body.insertAdjacentElement("afterbegin", e3);
          };
          if (!s2 || !a2()) {
            const a3 = we.supported, r2 = document.createElement("div");
            if (r2.setAttribute("hidden", ""), s2 && r2.setAttribute("id", t3), a3) {
              const e3 = window.localStorage.getItem(`${i3}-${t3}`);
              if (n2 = null !== e3, n2) {
                const t4 = JSON.parse(e3);
                l2(r2, t4.content);
              }
            }
            Te(e2).then((e3) => {
              if (!S.empty(e3)) {
                if (a3) try {
                  window.localStorage.setItem(`${i3}-${t3}`, JSON.stringify({ content: e3 }));
                } catch (e4) {
                }
                l2(r2, e3);
              }
            }).catch(() => {
            });
          }
        }
        const Ce = (e2) => Math.trunc(e2 / 60 / 60 % 60, 10), Ae = (e2) => Math.trunc(e2 / 60 % 60, 10), Se = (e2) => Math.trunc(e2 % 60, 10);
        function Ee(e2 = 0, t3 = false, i3 = false) {
          if (!S.number(e2)) return Ee(void 0, t3, i3);
          const s2 = (e3) => `0${e3}`.slice(-2);
          let n2 = Ce(e2);
          const a2 = Ae(e2), l2 = Se(e2);
          return n2 = t3 || n2 > 0 ? `${n2}:` : "", `${i3 && e2 > 0 ? "-" : ""}${n2}${s2(a2)}:${s2(l2)}`;
        }
        const Pe = { getIconUrl() {
          const e2 = new URL(this.config.iconUrl, window.location), t3 = window.location.host ? window.location.host : window.top.location.host, i3 = e2.host !== t3 || M.isIE && !window.svg4everybody;
          return { url: this.config.iconUrl, cors: i3 };
        }, findElements() {
          try {
            return this.elements.controls = B.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: U.call(this, this.config.selectors.buttons.play), pause: B.call(this, this.config.selectors.buttons.pause), restart: B.call(this, this.config.selectors.buttons.restart), rewind: B.call(this, this.config.selectors.buttons.rewind), fastForward: B.call(this, this.config.selectors.buttons.fastForward), mute: B.call(this, this.config.selectors.buttons.mute), pip: B.call(this, this.config.selectors.buttons.pip), airplay: B.call(this, this.config.selectors.buttons.airplay), settings: B.call(this, this.config.selectors.buttons.settings), captions: B.call(this, this.config.selectors.buttons.captions), fullscreen: B.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = B.call(this, this.config.selectors.progress), this.elements.inputs = { seek: B.call(this, this.config.selectors.inputs.seek), volume: B.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: B.call(this, this.config.selectors.display.buffer), currentTime: B.call(this, this.config.selectors.display.currentTime), duration: B.call(this, this.config.selectors.display.duration) }, S.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), true;
          } catch (e2) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e2), this.toggleNativeControls(true), false;
          }
        }, createIcon(e2, t3) {
          const i3 = "http://www.w3.org/2000/svg", s2 = Pe.getIconUrl.call(this), n2 = `${s2.cors ? "" : s2.url}#${this.config.iconPrefix}`, a2 = document.createElementNS(i3, "svg");
          I(a2, x(t3, { "aria-hidden": "true", focusable: "false" }));
          const l2 = document.createElementNS(i3, "use"), r2 = `${n2}-${e2}`;
          return "href" in l2 && l2.setAttributeNS("http://www.w3.org/1999/xlink", "href", r2), l2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r2), a2.appendChild(l2), a2;
        }, createLabel(e2, t3 = {}) {
          const i3 = ve.get(e2, this.config);
          return $("span", { ...t3, class: [t3.class, this.config.classNames.hidden].filter(Boolean).join(" ") }, i3);
        }, createBadge(e2) {
          if (S.empty(e2)) return null;
          const t3 = $("span", { class: this.config.classNames.menu.value });
          return t3.appendChild($("span", { class: this.config.classNames.menu.badge }, e2)), t3;
        }, createButton(e2, t3) {
          const i3 = x({}, t3);
          let s2 = fe(e2);
          const n2 = { element: "button", toggle: false, label: null, icon: null, labelPressed: null, iconPressed: null };
          switch (["element", "icon", "label"].forEach((e3) => {
            Object.keys(i3).includes(e3) && (n2[e3] = i3[e3], delete i3[e3]);
          }), "button" !== n2.element || Object.keys(i3).includes("type") || (i3.type = "button"), Object.keys(i3).includes("class") ? i3.class.split(" ").some((e3) => e3 === this.config.classNames.control) || x(i3, { class: `${i3.class} ${this.config.classNames.control}` }) : i3.class = this.config.classNames.control, e2) {
            case "play":
              n2.toggle = true, n2.label = "play", n2.labelPressed = "pause", n2.icon = "play", n2.iconPressed = "pause";
              break;
            case "mute":
              n2.toggle = true, n2.label = "mute", n2.labelPressed = "unmute", n2.icon = "volume", n2.iconPressed = "muted";
              break;
            case "captions":
              n2.toggle = true, n2.label = "enableCaptions", n2.labelPressed = "disableCaptions", n2.icon = "captions-off", n2.iconPressed = "captions-on";
              break;
            case "fullscreen":
              n2.toggle = true, n2.label = "enterFullscreen", n2.labelPressed = "exitFullscreen", n2.icon = "enter-fullscreen", n2.iconPressed = "exit-fullscreen";
              break;
            case "play-large":
              i3.class += ` ${this.config.classNames.control}--overlaid`, s2 = "play", n2.label = "play", n2.icon = "play";
              break;
            default:
              S.empty(n2.label) && (n2.label = s2), S.empty(n2.icon) && (n2.icon = e2);
          }
          const a2 = $(n2.element);
          return n2.toggle ? (a2.appendChild(Pe.createIcon.call(this, n2.iconPressed, { class: "icon--pressed" })), a2.appendChild(Pe.createIcon.call(this, n2.icon, { class: "icon--not-pressed" })), a2.appendChild(Pe.createLabel.call(this, n2.labelPressed, { class: "label--pressed" })), a2.appendChild(Pe.createLabel.call(this, n2.label, { class: "label--not-pressed" }))) : (a2.appendChild(Pe.createIcon.call(this, n2.icon)), a2.appendChild(Pe.createLabel.call(this, n2.label))), x(i3, D(this.config.selectors.buttons[s2], i3)), I(a2, i3), "play" === s2 ? (S.array(this.elements.buttons[s2]) || (this.elements.buttons[s2] = []), this.elements.buttons[s2].push(a2)) : this.elements.buttons[s2] = a2, a2;
        }, createRange(e2, t3) {
          const i3 = $("input", x(D(this.config.selectors.inputs[e2]), { type: "range", min: 0, max: 100, step: 0.01, value: 0, autocomplete: "off", role: "slider", "aria-label": ve.get(e2, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t3));
          return this.elements.inputs[e2] = i3, Pe.updateRangeFill.call(this, i3), g.setup(i3), i3;
        }, createProgress(e2, t3) {
          const i3 = $("progress", x(D(this.config.selectors.display[e2]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": true }, t3));
          if ("volume" !== e2) {
            i3.appendChild($("span", null, "0"));
            const t4 = { played: "played", buffer: "buffered" }[e2], s2 = t4 ? ve.get(t4, this.config) : "";
            i3.innerText = `% ${s2.toLowerCase()}`;
          }
          return this.elements.display[e2] = i3, i3;
        }, createTime(e2, t3) {
          const i3 = D(this.config.selectors.display[e2], t3), s2 = $("div", x(i3, { class: `${i3.class ? i3.class : ""} ${this.config.classNames.display.time} `.trim(), "aria-label": ve.get(e2, this.config), role: "timer" }), "00:00");
          return this.elements.display[e2] = s2, s2;
        }, bindMenuItemShortcuts(e2, t3) {
          X.call(this, e2, "keydown keyup", (i3) => {
            if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i3.key)) return;
            if (i3.preventDefault(), i3.stopPropagation(), "keydown" === i3.type) return;
            const s2 = V(e2, '[role="menuitemradio"]');
            if (!s2 && [" ", "ArrowRight"].includes(i3.key)) Pe.showMenuPanel.call(this, t3, true);
            else {
              let t4;
              " " !== i3.key && ("ArrowDown" === i3.key || s2 && "ArrowRight" === i3.key ? (t4 = e2.nextElementSibling, S.element(t4) || (t4 = e2.parentNode.firstElementChild)) : (t4 = e2.previousElementSibling, S.element(t4) || (t4 = e2.parentNode.lastElementChild)), W.call(this, t4, true));
            }
          }, false), X.call(this, e2, "keyup", (e3) => {
            "Return" === e3.key && Pe.focusFirstMenuItem.call(this, null, true);
          });
        }, createMenuItem({ value: e2, list: t3, type: i3, title: s2, badge: n2 = null, checked: a2 = false }) {
          const l2 = D(this.config.selectors.inputs[i3]), r2 = $("button", x(l2, { type: "button", role: "menuitemradio", class: `${this.config.classNames.control} ${l2.class ? l2.class : ""}`.trim(), "aria-checked": a2, value: e2 })), o2 = $("span");
          o2.innerHTML = s2, S.element(n2) && o2.appendChild(n2), r2.appendChild(o2), Object.defineProperty(r2, "checked", { enumerable: true, get: () => "true" === r2.getAttribute("aria-checked"), set(e3) {
            e3 && Array.from(r2.parentNode.children).filter((e4) => V(e4, '[role="menuitemradio"]')).forEach((e4) => e4.setAttribute("aria-checked", "false")), r2.setAttribute("aria-checked", e3 ? "true" : "false");
          } }), this.listeners.bind(r2, "click keyup", (t4) => {
            if (!S.keyboardEvent(t4) || " " === t4.key) {
              switch (t4.preventDefault(), t4.stopPropagation(), r2.checked = true, i3) {
                case "language":
                  this.currentTrack = Number(e2);
                  break;
                case "quality":
                  this.quality = e2;
                  break;
                case "speed":
                  this.speed = parseFloat(e2);
              }
              Pe.showMenuPanel.call(this, "home", S.keyboardEvent(t4));
            }
          }, i3, false), Pe.bindMenuItemShortcuts.call(this, r2, i3), t3.appendChild(r2);
        }, formatTime(e2 = 0, t3 = false) {
          if (!S.number(e2)) return e2;
          return Ee(e2, Ce(this.duration) > 0, t3);
        }, updateTimeDisplay(e2 = null, t3 = 0, i3 = false) {
          S.element(e2) && S.number(t3) && (e2.innerText = Pe.formatTime(t3, i3));
        }, updateVolume() {
          this.supported.ui && (S.element(this.elements.inputs.volume) && Pe.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), S.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
        }, setRange(e2, t3 = 0) {
          S.element(e2) && (e2.value = t3, Pe.updateRangeFill.call(this, e2));
        }, updateProgress(e2) {
          if (!this.supported.ui || !S.event(e2)) return;
          let t3 = 0;
          const i3 = (e3, t4) => {
            const i4 = S.number(t4) ? t4 : 0, s3 = S.element(e3) ? e3 : this.elements.display.buffer;
            if (S.element(s3)) {
              s3.value = i4;
              const e4 = s3.getElementsByTagName("span")[0];
              S.element(e4) && (e4.childNodes[0].nodeValue = i4);
            }
          };
          if (e2) switch (e2.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
              s2 = this.currentTime, n2 = this.duration, t3 = 0 === s2 || 0 === n2 || Number.isNaN(s2) || Number.isNaN(n2) ? 0 : (s2 / n2 * 100).toFixed(2), "timeupdate" === e2.type && Pe.setRange.call(this, this.elements.inputs.seek, t3);
              break;
            case "playing":
            case "progress":
              i3(this.elements.display.buffer, 100 * this.buffered);
          }
          var s2, n2;
        }, updateRangeFill(e2) {
          const t3 = S.event(e2) ? e2.target : e2;
          if (S.element(t3) && "range" === t3.getAttribute("type")) {
            if (V(t3, this.config.selectors.inputs.seek)) {
              t3.setAttribute("aria-valuenow", this.currentTime);
              const e3 = Pe.formatTime(this.currentTime), i3 = Pe.formatTime(this.duration), s2 = ve.get("seekLabel", this.config);
              t3.setAttribute("aria-valuetext", s2.replace("{currentTime}", e3).replace("{duration}", i3));
            } else if (V(t3, this.config.selectors.inputs.volume)) {
              const e3 = 100 * t3.value;
              t3.setAttribute("aria-valuenow", e3), t3.setAttribute("aria-valuetext", `${e3.toFixed(1)}%`);
            } else t3.setAttribute("aria-valuenow", t3.value);
            (M.isWebKit || M.isIPadOS) && t3.style.setProperty("--value", t3.value / t3.max * 100 + "%");
          }
        }, updateSeekTooltip(e2) {
          var t3, i3;
          if (!this.config.tooltips.seek || !S.element(this.elements.inputs.seek) || !S.element(this.elements.display.seekTooltip) || 0 === this.duration) return;
          const s2 = this.elements.display.seekTooltip, n2 = `${this.config.classNames.tooltip}--visible`, a2 = (e3) => R(s2, n2, e3);
          if (this.touch) return void a2(false);
          let l2 = 0;
          const r2 = this.elements.progress.getBoundingClientRect();
          if (S.event(e2)) l2 = 100 / r2.width * (e2.pageX - r2.left);
          else {
            if (!F(s2, n2)) return;
            l2 = parseFloat(s2.style.left, 10);
          }
          l2 < 0 ? l2 = 0 : l2 > 100 && (l2 = 100);
          const o2 = this.duration / 100 * l2;
          s2.innerText = Pe.formatTime(o2);
          const c2 = null === (t3 = this.config.markers) || void 0 === t3 || null === (i3 = t3.points) || void 0 === i3 ? void 0 : i3.find(({ time: e3 }) => e3 === Math.round(o2));
          c2 && s2.insertAdjacentHTML("afterbegin", `${c2.label}<br>`), s2.style.left = `${l2}%`, S.event(e2) && ["mouseenter", "mouseleave"].includes(e2.type) && a2("mouseenter" === e2.type);
        }, timeUpdate(e2) {
          const t3 = !S.element(this.elements.display.duration) && this.config.invertTime;
          Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, t3 ? this.duration - this.currentTime : this.currentTime, t3), e2 && "timeupdate" === e2.type && this.media.seeking || Pe.updateProgress.call(this, e2);
        }, durationUpdate() {
          if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
          if (this.duration >= 2 ** 32) return H(this.elements.display.currentTime, true), void H(this.elements.progress, true);
          S.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
          const e2 = S.element(this.elements.display.duration);
          !e2 && this.config.displayDuration && this.paused && Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e2 && Pe.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Pe.setMarkers.call(this), Pe.updateSeekTooltip.call(this);
        }, toggleMenuButton(e2, t3) {
          H(this.elements.settings.buttons[e2], !t3);
        }, updateSetting(e2, t3, i3) {
          const s2 = this.elements.settings.panels[e2];
          let n2 = null, a2 = t3;
          if ("captions" === e2) n2 = this.currentTrack;
          else {
            if (n2 = S.empty(i3) ? this[e2] : i3, S.empty(n2) && (n2 = this.config[e2].default), !S.empty(this.options[e2]) && !this.options[e2].includes(n2)) return void this.debug.warn(`Unsupported value of '${n2}' for ${e2}`);
            if (!this.config[e2].options.includes(n2)) return void this.debug.warn(`Disabled value of '${n2}' for ${e2}`);
          }
          if (S.element(a2) || (a2 = s2 && s2.querySelector('[role="menu"]')), !S.element(a2)) return;
          this.elements.settings.buttons[e2].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = Pe.getLabel.call(this, e2, n2);
          const l2 = a2 && a2.querySelector(`[value="${n2}"]`);
          S.element(l2) && (l2.checked = true);
        }, getLabel(e2, t3) {
          switch (e2) {
            case "speed":
              return 1 === t3 ? ve.get("normal", this.config) : `${t3}&times;`;
            case "quality":
              if (S.number(t3)) {
                const e3 = ve.get(`qualityLabel.${t3}`, this.config);
                return e3.length ? e3 : `${t3}p`;
              }
              return ge(t3);
            case "captions":
              return xe.getLabel.call(this);
            default:
              return null;
          }
        }, setQualityMenu(e2) {
          if (!S.element(this.elements.settings.panels.quality)) return;
          const t3 = "quality", i3 = this.elements.settings.panels.quality.querySelector('[role="menu"]');
          S.array(e2) && (this.options.quality = se(e2).filter((e3) => this.config.quality.options.includes(e3)));
          const s2 = !S.empty(this.options.quality) && this.options.quality.length > 1;
          if (Pe.toggleMenuButton.call(this, t3, s2), j(i3), Pe.checkMenu.call(this), !s2) return;
          const n2 = (e3) => {
            const t4 = ve.get(`qualityBadge.${e3}`, this.config);
            return t4.length ? Pe.createBadge.call(this, t4) : null;
          };
          this.options.quality.sort((e3, t4) => {
            const i4 = this.config.quality.options;
            return i4.indexOf(e3) > i4.indexOf(t4) ? 1 : -1;
          }).forEach((e3) => {
            Pe.createMenuItem.call(this, { value: e3, list: i3, type: t3, title: Pe.getLabel.call(this, "quality", e3), badge: n2(e3) });
          }), Pe.updateSetting.call(this, t3, i3);
        }, setCaptionsMenu() {
          if (!S.element(this.elements.settings.panels.captions)) return;
          const e2 = "captions", t3 = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i3 = xe.getTracks.call(this), s2 = Boolean(i3.length);
          if (Pe.toggleMenuButton.call(this, e2, s2), j(t3), Pe.checkMenu.call(this), !s2) return;
          const n2 = i3.map((e3, i4) => ({ value: i4, checked: this.captions.toggled && this.currentTrack === i4, title: xe.getLabel.call(this, e3), badge: e3.language && Pe.createBadge.call(this, e3.language.toUpperCase()), list: t3, type: "language" }));
          n2.unshift({ value: -1, checked: !this.captions.toggled, title: ve.get("disabled", this.config), list: t3, type: "language" }), n2.forEach(Pe.createMenuItem.bind(this)), Pe.updateSetting.call(this, e2, t3);
        }, setSpeedMenu() {
          if (!S.element(this.elements.settings.panels.speed)) return;
          const e2 = "speed", t3 = this.elements.settings.panels.speed.querySelector('[role="menu"]');
          this.options.speed = this.options.speed.filter((e3) => e3 >= this.minimumSpeed && e3 <= this.maximumSpeed);
          const i3 = !S.empty(this.options.speed) && this.options.speed.length > 1;
          Pe.toggleMenuButton.call(this, e2, i3), j(t3), Pe.checkMenu.call(this), i3 && (this.options.speed.forEach((i4) => {
            Pe.createMenuItem.call(this, { value: i4, list: t3, type: e2, title: Pe.getLabel.call(this, "speed", i4) });
          }), Pe.updateSetting.call(this, e2, t3));
        }, checkMenu() {
          const { buttons: e2 } = this.elements.settings, t3 = !S.empty(e2) && Object.values(e2).some((e3) => !e3.hidden);
          H(this.elements.settings.menu, !t3);
        }, focusFirstMenuItem(e2, t3 = false) {
          if (this.elements.settings.popup.hidden) return;
          let i3 = e2;
          S.element(i3) || (i3 = Object.values(this.elements.settings.panels).find((e3) => !e3.hidden));
          const s2 = i3.querySelector('[role^="menuitem"]');
          W.call(this, s2, t3);
        }, toggleMenu(e2) {
          const { popup: t3 } = this.elements.settings, i3 = this.elements.buttons.settings;
          if (!S.element(t3) || !S.element(i3)) return;
          const { hidden: s2 } = t3;
          let n2 = s2;
          if (S.boolean(e2)) n2 = e2;
          else if (S.keyboardEvent(e2) && "Escape" === e2.key) n2 = false;
          else if (S.event(e2)) {
            const s3 = S.function(e2.composedPath) ? e2.composedPath()[0] : e2.target, a2 = t3.contains(s3);
            if (a2 || !a2 && e2.target !== i3 && n2) return;
          }
          i3.setAttribute("aria-expanded", n2), H(t3, !n2), R(this.elements.container, this.config.classNames.menu.open, n2), n2 && S.keyboardEvent(e2) ? Pe.focusFirstMenuItem.call(this, null, true) : n2 || s2 || W.call(this, i3, S.keyboardEvent(e2));
        }, getMenuSize(e2) {
          const t3 = e2.cloneNode(true);
          t3.style.position = "absolute", t3.style.opacity = 0, t3.removeAttribute("hidden"), e2.parentNode.appendChild(t3);
          const i3 = t3.scrollWidth, s2 = t3.scrollHeight;
          return O(t3), { width: i3, height: s2 };
        }, showMenuPanel(e2 = "", t3 = false) {
          const i3 = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e2}`);
          if (!S.element(i3)) return;
          const s2 = i3.parentNode, n2 = Array.from(s2.children).find((e3) => !e3.hidden);
          if (K.transitions && !K.reducedMotion) {
            s2.style.width = `${n2.scrollWidth}px`, s2.style.height = `${n2.scrollHeight}px`;
            const e3 = Pe.getMenuSize.call(this, i3), t4 = (e4) => {
              e4.target === s2 && ["width", "height"].includes(e4.propertyName) && (s2.style.width = "", s2.style.height = "", J.call(this, s2, E, t4));
            };
            X.call(this, s2, E, t4), s2.style.width = `${e3.width}px`, s2.style.height = `${e3.height}px`;
          }
          H(n2, true), H(i3, false), Pe.focusFirstMenuItem.call(this, i3, t3);
        }, setDownloadUrl() {
          const e2 = this.elements.buttons.download;
          S.element(e2) && e2.setAttribute("href", this.download);
        }, create(e2) {
          const { bindMenuItemShortcuts: t3, createButton: i3, createProgress: s2, createRange: n2, createTime: a2, setQualityMenu: l2, setSpeedMenu: r2, showMenuPanel: o2 } = Pe;
          this.elements.controls = null, S.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i3.call(this, "play-large"));
          const c2 = $("div", D(this.config.selectors.controls.wrapper));
          this.elements.controls = c2;
          const u2 = { class: "plyr__controls__item" };
          return se(S.array(this.config.controls) ? this.config.controls : []).forEach((l3) => {
            if ("restart" === l3 && c2.appendChild(i3.call(this, "restart", u2)), "rewind" === l3 && c2.appendChild(i3.call(this, "rewind", u2)), "play" === l3 && c2.appendChild(i3.call(this, "play", u2)), "fast-forward" === l3 && c2.appendChild(i3.call(this, "fast-forward", u2)), "progress" === l3) {
              const t4 = $("div", { class: `${u2.class} plyr__progress__container` }), i4 = $("div", D(this.config.selectors.progress));
              if (i4.appendChild(n2.call(this, "seek", { id: `plyr-seek-${e2.id}` })), i4.appendChild(s2.call(this, "buffer")), this.config.tooltips.seek) {
                const e3 = $("span", { class: this.config.classNames.tooltip }, "00:00");
                i4.appendChild(e3), this.elements.display.seekTooltip = e3;
              }
              this.elements.progress = i4, t4.appendChild(this.elements.progress), c2.appendChild(t4);
            }
            if ("current-time" === l3 && c2.appendChild(a2.call(this, "currentTime", u2)), "duration" === l3 && c2.appendChild(a2.call(this, "duration", u2)), "mute" === l3 || "volume" === l3) {
              let { volume: t4 } = this.elements;
              if (S.element(t4) && c2.contains(t4) || (t4 = $("div", x({}, u2, { class: `${u2.class} plyr__volume`.trim() })), this.elements.volume = t4, c2.appendChild(t4)), "mute" === l3 && t4.appendChild(i3.call(this, "mute")), "volume" === l3 && !M.isIos && !M.isIPadOS) {
                const i4 = { max: 1, step: 0.05, value: this.config.volume };
                t4.appendChild(n2.call(this, "volume", x(i4, { id: `plyr-volume-${e2.id}` })));
              }
            }
            if ("captions" === l3 && c2.appendChild(i3.call(this, "captions", u2)), "settings" === l3 && !S.empty(this.config.settings)) {
              const s3 = $("div", x({}, u2, { class: `${u2.class} plyr__menu`.trim(), hidden: "" }));
              s3.appendChild(i3.call(this, "settings", { "aria-haspopup": true, "aria-controls": `plyr-settings-${e2.id}`, "aria-expanded": false }));
              const n3 = $("div", { class: "plyr__menu__container", id: `plyr-settings-${e2.id}`, hidden: "" }), a3 = $("div"), l4 = $("div", { id: `plyr-settings-${e2.id}-home` }), r3 = $("div", { role: "menu" });
              l4.appendChild(r3), a3.appendChild(l4), this.elements.settings.panels.home = l4, this.config.settings.forEach((i4) => {
                const s4 = $("button", x(D(this.config.selectors.buttons.settings), { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`, role: "menuitem", "aria-haspopup": true, hidden: "" }));
                t3.call(this, s4, i4), X.call(this, s4, "click", () => {
                  o2.call(this, i4, false);
                });
                const n4 = $("span", null, ve.get(i4, this.config)), l5 = $("span", { class: this.config.classNames.menu.value });
                l5.innerHTML = e2[i4], n4.appendChild(l5), s4.appendChild(n4), r3.appendChild(s4);
                const c3 = $("div", { id: `plyr-settings-${e2.id}-${i4}`, hidden: "" }), u3 = $("button", { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--back` });
                u3.appendChild($("span", { "aria-hidden": true }, ve.get(i4, this.config))), u3.appendChild($("span", { class: this.config.classNames.hidden }, ve.get("menuBack", this.config))), X.call(this, c3, "keydown", (e3) => {
                  "ArrowLeft" === e3.key && (e3.preventDefault(), e3.stopPropagation(), o2.call(this, "home", true));
                }, false), X.call(this, u3, "click", () => {
                  o2.call(this, "home", false);
                }), c3.appendChild(u3), c3.appendChild($("div", { role: "menu" })), a3.appendChild(c3), this.elements.settings.buttons[i4] = s4, this.elements.settings.panels[i4] = c3;
              }), n3.appendChild(a3), s3.appendChild(n3), c2.appendChild(s3), this.elements.settings.popup = n3, this.elements.settings.menu = s3;
            }
            if ("pip" === l3 && K.pip && c2.appendChild(i3.call(this, "pip", u2)), "airplay" === l3 && K.airplay && c2.appendChild(i3.call(this, "airplay", u2)), "download" === l3) {
              const e3 = x({}, u2, { element: "a", href: this.download, target: "_blank" });
              this.isHTML5 && (e3.download = "");
              const { download: t4 } = this.config.urls;
              !S.url(t4) && this.isEmbed && x(e3, { icon: `logo-${this.provider}`, label: this.provider }), c2.appendChild(i3.call(this, "download", e3));
            }
            "fullscreen" === l3 && c2.appendChild(i3.call(this, "fullscreen", u2));
          }), this.isHTML5 && l2.call(this, de.getQualityOptions.call(this)), r2.call(this), c2;
        }, inject() {
          if (this.config.loadSprite) {
            const e3 = Pe.getIconUrl.call(this);
            e3.cors && ke(e3.url, "sprite-plyr");
          }
          this.id = Math.floor(1e4 * Math.random());
          let e2 = null;
          this.elements.controls = null;
          const t3 = { id: this.id, seektime: this.config.seekTime, title: this.config.title };
          let i3 = true;
          S.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t3)), this.config.controls || (this.config.controls = []), S.element(this.config.controls) || S.string(this.config.controls) ? e2 = this.config.controls : (e2 = Pe.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: xe.getLabel.call(this) }), i3 = false);
          let s2;
          i3 && S.string(this.config.controls) && (e2 = ((e3) => {
            let i4 = e3;
            return Object.entries(t3).forEach(([e4, t4]) => {
              i4 = pe(i4, `{${e4}}`, t4);
            }), i4;
          })(e2)), S.string(this.config.selectors.controls.container) && (s2 = document.querySelector(this.config.selectors.controls.container)), S.element(s2) || (s2 = this.elements.container);
          if (s2[S.element(e2) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e2), S.element(this.elements.controls) || Pe.findElements.call(this), !S.empty(this.elements.buttons)) {
            const e3 = (e4) => {
              const t4 = this.config.classNames.controlPressed;
              e4.setAttribute("aria-pressed", "false"), Object.defineProperty(e4, "pressed", { configurable: true, enumerable: true, get: () => F(e4, t4), set(i4 = false) {
                R(e4, t4, i4), e4.setAttribute("aria-pressed", i4 ? "true" : "false");
              } });
            };
            Object.values(this.elements.buttons).filter(Boolean).forEach((t4) => {
              S.array(t4) || S.nodeList(t4) ? Array.from(t4).filter(Boolean).forEach(e3) : e3(t4);
            });
          }
          if (M.isEdge && P(s2), this.config.tooltips.controls) {
            const { classNames: e3, selectors: t4 } = this.config, i4 = `${t4.controls.wrapper} ${t4.labels} .${e3.hidden}`, s3 = U.call(this, i4);
            Array.from(s3).forEach((e4) => {
              R(e4, this.config.classNames.hidden, false), R(e4, this.config.classNames.tooltip, true);
            });
          }
        }, setMediaMetadata() {
          try {
            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({ title: this.config.mediaMetadata.title, artist: this.config.mediaMetadata.artist, album: this.config.mediaMetadata.album, artwork: this.config.mediaMetadata.artwork }));
          } catch (e2) {
          }
        }, setMarkers() {
          var e2, t3;
          if (!this.duration || this.elements.markers) return;
          const i3 = null === (e2 = this.config.markers) || void 0 === e2 || null === (t3 = e2.points) || void 0 === t3 ? void 0 : t3.filter(({ time: e3 }) => e3 > 0 && e3 < this.duration);
          if (null == i3 || !i3.length) return;
          const s2 = document.createDocumentFragment(), n2 = document.createDocumentFragment();
          let a2 = null;
          const l2 = `${this.config.classNames.tooltip}--visible`, r2 = (e3) => R(a2, l2, e3);
          i3.forEach((e3) => {
            const t4 = $("span", { class: this.config.classNames.marker }, ""), i4 = e3.time / this.duration * 100 + "%";
            a2 && (t4.addEventListener("mouseenter", () => {
              e3.label || (a2.style.left = i4, a2.innerHTML = e3.label, r2(true));
            }), t4.addEventListener("mouseleave", () => {
              r2(false);
            })), t4.addEventListener("click", () => {
              this.currentTime = e3.time;
            }), t4.style.left = i4, n2.appendChild(t4);
          }), s2.appendChild(n2), this.config.tooltips.seek || (a2 = $("span", { class: this.config.classNames.tooltip }, ""), s2.appendChild(a2)), this.elements.markers = { points: n2, tip: a2 }, this.elements.progress.appendChild(s2);
        } };
        function Me(e2, t3 = true) {
          let i3 = e2;
          if (t3) {
            const e3 = document.createElement("a");
            e3.href = i3, i3 = e3.href;
          }
          try {
            return new URL(i3);
          } catch (e3) {
            return null;
          }
        }
        function Ne(e2) {
          const t3 = new URLSearchParams();
          return S.object(e2) && Object.entries(e2).forEach(([e3, i3]) => {
            t3.set(e3, i3);
          }), t3;
        }
        const xe = { setup() {
          if (!this.supported.ui) return;
          if (!this.isVideo || this.isYouTube || this.isHTML5 && !K.textTracks) return void (S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this));
          var e2, t3;
          if (S.element(this.elements.captions) || (this.elements.captions = $("div", D(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), e2 = this.elements.captions, t3 = this.elements.wrapper, S.element(e2) && S.element(t3) && t3.parentNode.insertBefore(e2, t3.nextSibling)), M.isIE && window.URL) {
            const e3 = this.media.querySelectorAll("track");
            Array.from(e3).forEach((e4) => {
              const t4 = e4.getAttribute("src"), i4 = Me(t4);
              null !== i4 && i4.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i4.protocol) && Te(t4, "blob").then((t5) => {
                e4.setAttribute("src", window.URL.createObjectURL(t5));
              }).catch(() => {
                O(e4);
              });
            });
          }
          const i3 = se((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((e3) => e3.split("-")[0]));
          let s2 = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
          "auto" === s2 && ([s2] = i3);
          let n2 = this.storage.get("captions");
          if (S.boolean(n2) || ({ active: n2 } = this.config.captions), Object.assign(this.captions, { toggled: false, active: n2, language: s2, languages: i3 }), this.isHTML5) {
            const e3 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
            X.call(this, this.media.textTracks, e3, xe.update.bind(this));
          }
          setTimeout(xe.update.bind(this), 0);
        }, update() {
          const e2 = xe.getTracks.call(this, true), { active: t3, language: i3, meta: s2, currentTrackNode: n2 } = this.captions, a2 = Boolean(e2.find((e3) => e3.language === i3));
          this.isHTML5 && this.isVideo && e2.filter((e3) => !s2.get(e3)).forEach((e3) => {
            this.debug.log("Track added", e3), s2.set(e3, { default: "showing" === e3.mode }), "showing" === e3.mode && (e3.mode = "hidden"), X.call(this, e3, "cuechange", () => xe.updateCues.call(this));
          }), (a2 && this.language !== i3 || !e2.includes(n2)) && (xe.setLanguage.call(this, i3), xe.toggle.call(this, t3 && a2)), this.elements && R(this.elements.container, this.config.classNames.captions.enabled, !S.empty(e2)), S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this);
        }, toggle(e2, t3 = true) {
          if (!this.supported.ui) return;
          const { toggled: i3 } = this.captions, s2 = this.config.classNames.captions.active, n2 = S.nullOrUndefined(e2) ? !i3 : e2;
          if (n2 !== i3) {
            if (t3 || (this.captions.active = n2, this.storage.set({ captions: n2 })), !this.language && n2 && !t3) {
              const e3 = xe.getTracks.call(this), t4 = xe.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
              return this.captions.language = t4.language, void xe.set.call(this, e3.indexOf(t4));
            }
            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n2), R(this.elements.container, s2, n2), this.captions.toggled = n2, Pe.updateSetting.call(this, "captions"), Z.call(this, this.media, n2 ? "captionsenabled" : "captionsdisabled");
          }
          setTimeout(() => {
            n2 && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
          });
        }, set(e2, t3 = true) {
          const i3 = xe.getTracks.call(this);
          if (-1 !== e2) if (S.number(e2)) if (e2 in i3) {
            if (this.captions.currentTrack !== e2) {
              this.captions.currentTrack = e2;
              const s2 = i3[e2], { language: n2 } = s2 || {};
              this.captions.currentTrackNode = s2, Pe.updateSetting.call(this, "captions"), t3 || (this.captions.language = n2, this.storage.set({ language: n2 })), this.isVimeo && this.embed.enableTextTrack(n2), Z.call(this, this.media, "languagechange");
            }
            xe.toggle.call(this, true, t3), this.isHTML5 && this.isVideo && xe.updateCues.call(this);
          } else this.debug.warn("Track not found", e2);
          else this.debug.warn("Invalid caption argument", e2);
          else xe.toggle.call(this, false, t3);
        }, setLanguage(e2, t3 = true) {
          if (!S.string(e2)) return void this.debug.warn("Invalid language argument", e2);
          const i3 = e2.toLowerCase();
          this.captions.language = i3;
          const s2 = xe.getTracks.call(this), n2 = xe.findTrack.call(this, [i3]);
          xe.set.call(this, s2.indexOf(n2), t3);
        }, getTracks(e2 = false) {
          return Array.from((this.media || {}).textTracks || []).filter((t3) => !this.isHTML5 || e2 || this.captions.meta.has(t3)).filter((e3) => ["captions", "subtitles"].includes(e3.kind));
        }, findTrack(e2, t3 = false) {
          const i3 = xe.getTracks.call(this), s2 = (e3) => Number((this.captions.meta.get(e3) || {}).default), n2 = Array.from(i3).sort((e3, t4) => s2(t4) - s2(e3));
          let a2;
          return e2.every((e3) => (a2 = n2.find((t4) => t4.language === e3), !a2)), a2 || (t3 ? n2[0] : void 0);
        }, getCurrentTrack() {
          return xe.getTracks.call(this)[this.currentTrack];
        }, getLabel(e2) {
          let t3 = e2;
          return !S.track(t3) && K.textTracks && this.captions.toggled && (t3 = xe.getCurrentTrack.call(this)), S.track(t3) ? S.empty(t3.label) ? S.empty(t3.language) ? ve.get("enabled", this.config) : e2.language.toUpperCase() : t3.label : ve.get("disabled", this.config);
        }, updateCues(e2) {
          if (!this.supported.ui) return;
          if (!S.element(this.elements.captions)) return void this.debug.warn("No captions element to render to");
          if (!S.nullOrUndefined(e2) && !Array.isArray(e2)) return void this.debug.warn("updateCues: Invalid input", e2);
          let t3 = e2;
          if (!t3) {
            const e3 = xe.getCurrentTrack.call(this);
            t3 = Array.from((e3 || {}).activeCues || []).map((e4) => e4.getCueAsHTML()).map(ye);
          }
          const i3 = t3.map((e3) => e3.trim()).join("\n");
          if (i3 !== this.elements.captions.innerHTML) {
            j(this.elements.captions);
            const e3 = $("span", D(this.config.selectors.caption));
            e3.innerHTML = i3, this.elements.captions.appendChild(e3), Z.call(this, this.media, "cuechange");
          }
        } }, Le = { enabled: true, title: "", debug: false, autoplay: false, autopause: true, playsinline: true, seekTime: 10, volume: 1, muted: false, duration: null, displayDuration: true, invertTime: true, toggleInvert: true, ratio: null, clickToPlay: true, hideControls: true, resetOnEnd: false, disableContextMenu: true, loadSprite: true, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240], forced: false, onChange: null }, loop: { active: false }, speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }, keyboard: { focused: true, global: false }, tooltips: { controls: false, seek: true }, captions: { active: false, language: "auto", update: false }, fullscreen: { enabled: true, fallback: true, iosNative: false }, storage: { enabled: true, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", pip: "PIP", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/oembed.json?url={0}" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", marker: "plyr__progress__marker", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id", hash: "data-plyr-embed-hash" } }, ads: { enabled: false, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: false, src: "" }, vimeo: { byline: false, portrait: false, title: false, speed: true, transparent: false, customControls: true, referrerPolicy: null, premium: false }, youtube: { rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, customControls: true, noCookie: false }, mediaMetadata: { title: "", artist: "", album: "", artwork: [] }, markers: { enabled: false, points: [] } }, Ie = "picture-in-picture", $e = "inline", _e = { html5: "html5", youtube: "youtube", vimeo: "vimeo" }, Oe = "audio", je = "video";
        const qe = () => {
        };
        class De {
          constructor(e2 = false) {
            this.enabled = window.console && e2, this.enabled && this.log("Debugging enabled");
          }
          get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : qe;
          }
          get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : qe;
          }
          get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : qe;
          }
        }
        class He {
          constructor(t3) {
            e(this, "onChange", () => {
              if (!this.supported) return;
              const e2 = this.player.elements.buttons.fullscreen;
              S.element(e2) && (e2.pressed = this.active);
              const t4 = this.target === this.player.media ? this.target : this.player.elements.container;
              Z.call(this.player, t4, this.active ? "enterfullscreen" : "exitfullscreen", true);
            }), e(this, "toggleFallback", (e2 = false) => {
              if (e2 ? this.scrollPosition = { x: window.scrollX ?? 0, y: window.scrollY ?? 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e2 ? "hidden" : "", R(this.target, this.player.config.classNames.fullscreen.fallback, e2), M.isIos) {
                let t4 = document.head.querySelector('meta[name="viewport"]');
                const i3 = "viewport-fit=cover";
                t4 || (t4 = document.createElement("meta"), t4.setAttribute("name", "viewport"));
                const s2 = S.string(t4.content) && t4.content.includes(i3);
                e2 ? (this.cleanupViewport = !s2, s2 || (t4.content += `,${i3}`)) : this.cleanupViewport && (t4.content = t4.content.split(",").filter((e3) => e3.trim() !== i3).join(","));
              }
              this.onChange();
            }), e(this, "trapFocus", (e2) => {
              if (M.isIos || M.isIPadOS || !this.active || "Tab" !== e2.key) return;
              const t4 = document.activeElement, i3 = U.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s2] = i3, n2 = i3[i3.length - 1];
              t4 !== n2 || e2.shiftKey ? t4 === s2 && e2.shiftKey && (n2.focus(), e2.preventDefault()) : (s2.focus(), e2.preventDefault());
            }), e(this, "update", () => {
              if (this.supported) {
                let e2;
                e2 = this.forceFallback ? "Fallback (forced)" : He.nativeSupported ? "Native" : "Fallback", this.player.debug.log(`${e2} fullscreen enabled`);
              } else this.player.debug.log("Fullscreen not supported and fallback disabled");
              R(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
            }), e(this, "enter", () => {
              this.supported && (M.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !He.nativeSupported || this.forceFallback ? this.toggleFallback(true) : this.prefix ? S.empty(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({ navigationUI: "hide" }));
            }), e(this, "exit", () => {
              if (this.supported) if (M.isIos && this.player.config.fullscreen.iosNative) this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), ie(this.player.play());
              else if (!He.nativeSupported || this.forceFallback) this.toggleFallback(false);
              else if (this.prefix) {
                if (!S.empty(this.prefix)) {
                  const e2 = "moz" === this.prefix ? "Cancel" : "Exit";
                  document[`${this.prefix}${e2}${this.property}`]();
                }
              } else (document.cancelFullScreen || document.exitFullscreen).call(document);
            }), e(this, "toggle", () => {
              this.active ? this.exit() : this.enter();
            }), this.player = t3, this.prefix = He.prefix, this.property = He.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = "force" === t3.config.fullscreen.fallback, this.player.elements.fullscreen = t3.config.fullscreen.container && function(e2, t4) {
              const { prototype: i3 } = Element;
              return (i3.closest || function() {
                let e3 = this;
                do {
                  if (V.matches(e3, t4)) return e3;
                  e3 = e3.parentElement || e3.parentNode;
                } while (null !== e3 && 1 === e3.nodeType);
                return null;
              }).call(e2, t4);
            }(this.player.elements.container, t3.config.fullscreen.container), X.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
              this.onChange();
            }), X.call(this.player, this.player.elements.container, "dblclick", (e2) => {
              S.element(this.player.elements.controls) && this.player.elements.controls.contains(e2.target) || this.player.listeners.proxy(e2, this.toggle, "fullscreen");
            }), X.call(this, this.player.elements.container, "keydown", (e2) => this.trapFocus(e2)), this.update();
          }
          static get nativeSupported() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
          }
          get useNative() {
            return He.nativeSupported && !this.forceFallback;
          }
          static get prefix() {
            if (S.function(document.exitFullscreen)) return "";
            let e2 = "";
            return ["webkit", "moz", "ms"].some((t3) => !(!S.function(document[`${t3}ExitFullscreen`]) && !S.function(document[`${t3}CancelFullScreen`])) && (e2 = t3, true)), e2;
          }
          static get property() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
          }
          get supported() {
            return [this.player.config.fullscreen.enabled, this.player.isVideo, He.nativeSupported || this.player.config.fullscreen.fallback, !this.player.isYouTube || He.nativeSupported || !M.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative].every(Boolean);
          }
          get active() {
            if (!this.supported) return false;
            if (!He.nativeSupported || this.forceFallback) return F(this.target, this.player.config.classNames.fullscreen.fallback);
            const e2 = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
            return e2 && e2.shadowRoot ? e2 === this.target.getRootNode().host : e2 === this.target;
          }
          get target() {
            return M.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen ?? this.player.elements.container;
          }
        }
        function Re(e2, t3 = 1) {
          return new Promise((i3, s2) => {
            const n2 = new Image(), a2 = () => {
              delete n2.onload, delete n2.onerror, (n2.naturalWidth >= t3 ? i3 : s2)(n2);
            };
            Object.assign(n2, { onload: a2, onerror: a2, src: e2 });
          });
        }
        const Fe = { addStyleHook() {
          R(this.elements.container, this.config.selectors.container.replace(".", ""), true), R(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        }, toggleNativeControls(e2 = false) {
          e2 && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        }, build() {
          if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void Fe.toggleNativeControls.call(this, true);
          S.element(this.elements.controls) || (Pe.inject.call(this), this.listeners.controls()), Fe.toggleNativeControls.call(this), this.isHTML5 && xe.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pe.updateVolume.call(this), Pe.timeUpdate.call(this), Pe.durationUpdate.call(this), Fe.checkPlaying.call(this), R(this.elements.container, this.config.classNames.pip.supported, K.pip && this.isHTML5 && this.isVideo), R(this.elements.container, this.config.classNames.airplay.supported, K.airplay && this.isHTML5), R(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = true, setTimeout(() => {
            Z.call(this, this.media, "ready");
          }, 0), Fe.setTitle.call(this), this.poster && Fe.setPoster.call(this, this.poster, false).catch(() => {
          }), this.config.duration && Pe.durationUpdate.call(this), this.config.mediaMetadata && Pe.setMediaMetadata.call(this);
        }, setTitle() {
          let e2 = ve.get("play", this.config);
          if (S.string(this.config.title) && !S.empty(this.config.title) && (e2 += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((t3) => {
            t3.setAttribute("aria-label", e2);
          }), this.isEmbed) {
            const e3 = B.call(this, "iframe");
            if (!S.element(e3)) return;
            const t3 = S.empty(this.config.title) ? "video" : this.config.title, i3 = ve.get("frameTitle", this.config);
            e3.setAttribute("title", i3.replace("{title}", t3));
          }
        }, togglePoster(e2) {
          R(this.elements.container, this.config.classNames.posterEnabled, e2);
        }, setPoster(e2, t3 = true) {
          return t3 && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e2), this.elements.poster.removeAttribute("hidden"), te.call(this).then(() => Re(e2)).catch((t4) => {
            throw e2 === this.poster && Fe.togglePoster.call(this, false), t4;
          }).then(() => {
            if (e2 !== this.poster) throw new Error("setPoster cancelled by later call to setPoster");
          }).then(() => (Object.assign(this.elements.poster.style, { backgroundImage: `url('${e2}')`, backgroundSize: "" }), Fe.togglePoster.call(this, true), e2)));
        }, checkPlaying(e2) {
          R(this.elements.container, this.config.classNames.playing, this.playing), R(this.elements.container, this.config.classNames.paused, this.paused), R(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e3) => {
            Object.assign(e3, { pressed: this.playing }), e3.setAttribute("aria-label", ve.get(this.playing ? "pause" : "play", this.config));
          }), S.event(e2) && "timeupdate" === e2.type || Fe.toggleControls.call(this);
        }, checkLoading(e2) {
          this.loading = ["stalled", "waiting"].includes(e2.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
            R(this.elements.container, this.config.classNames.loading, this.loading), Fe.toggleControls.call(this);
          }, this.loading ? 250 : 0);
        }, toggleControls(e2) {
          const { controls: t3 } = this.elements;
          if (t3 && this.config.hideControls) {
            const i3 = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(Boolean(e2 || this.loading || this.paused || t3.pressed || t3.hover || i3));
          }
        }, migrateStyles() {
          Object.values({ ...this.media.style }).filter((e2) => !S.empty(e2) && S.string(e2) && e2.startsWith("--plyr")).forEach((e2) => {
            this.elements.container.style.setProperty(e2, this.media.style.getPropertyValue(e2)), this.media.style.removeProperty(e2);
          }), S.empty(this.media.style) && this.media.removeAttribute("style");
        } };
        class Ve {
          constructor(t3) {
            e(this, "firstTouch", () => {
              const { player: e2 } = this, { elements: t4 } = e2;
              e2.touch = true, R(t4.container, e2.config.classNames.isTouch, true);
            }), e(this, "global", (e2 = true) => {
              const { player: t4 } = this;
              t4.config.keyboard.global && Q.call(t4, window, "keydown keyup", this.handleKey, e2, false), Q.call(t4, document.body, "click", this.toggleMenu, e2), G.call(t4, document.body, "touchstart", this.firstTouch);
            }), e(this, "container", () => {
              const { player: e2 } = this, { config: t4, elements: i3, timers: s2 } = e2;
              !t4.keyboard.global && t4.keyboard.focused && X.call(e2, i3.container, "keydown keyup", this.handleKey, false), X.call(e2, i3.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t5) => {
                const { controls: n3 } = i3;
                n3 && "enterfullscreen" === t5.type && (n3.pressed = false, n3.hover = false);
                let a3 = 0;
                ["touchstart", "touchmove", "mousemove"].includes(t5.type) && (Fe.toggleControls.call(e2, true), a3 = e2.touch ? 3e3 : 2e3), clearTimeout(s2.controls), s2.controls = setTimeout(() => Fe.toggleControls.call(e2, false), a3);
              });
              const n2 = () => {
                if (!e2.isVimeo || e2.config.vimeo.premium) return;
                const t5 = i3.wrapper, { active: s3 } = e2.fullscreen, [n3, a3] = ce.call(e2), l2 = ae(`aspect-ratio: ${n3} / ${a3}`);
                if (!s3) return void (l2 ? (t5.style.width = null, t5.style.height = null) : (t5.style.maxWidth = null, t5.style.margin = null));
                const [r2, o2] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], c2 = r2 / o2 > n3 / a3;
                l2 ? (t5.style.width = c2 ? "auto" : "100%", t5.style.height = c2 ? "100%" : "auto") : (t5.style.maxWidth = c2 ? o2 / a3 * n3 + "px" : null, t5.style.margin = c2 ? "0 auto" : null);
              }, a2 = () => {
                clearTimeout(s2.resized), s2.resized = setTimeout(n2, 50);
              };
              X.call(e2, i3.container, "enterfullscreen exitfullscreen", (t5) => {
                const { target: s3 } = e2.fullscreen;
                if (s3 !== i3.container) return;
                if (!e2.isEmbed && S.empty(e2.config.ratio)) return;
                n2();
                ("enterfullscreen" === t5.type ? X : J).call(e2, window, "resize", a2);
              });
            }), e(this, "media", () => {
              const { player: e2 } = this, { elements: t4 } = e2;
              if (X.call(e2, e2.media, "timeupdate seeking seeked", (t5) => Pe.timeUpdate.call(e2, t5)), X.call(e2, e2.media, "durationchange loadeddata loadedmetadata", (t5) => Pe.durationUpdate.call(e2, t5)), X.call(e2, e2.media, "ended", () => {
                e2.isHTML5 && e2.isVideo && e2.config.resetOnEnd && (e2.restart(), e2.pause());
              }), X.call(e2, e2.media, "progress playing seeking seeked", (t5) => Pe.updateProgress.call(e2, t5)), X.call(e2, e2.media, "volumechange", (t5) => Pe.updateVolume.call(e2, t5)), X.call(e2, e2.media, "playing play pause ended emptied timeupdate", (t5) => Fe.checkPlaying.call(e2, t5)), X.call(e2, e2.media, "waiting canplay seeked playing", (t5) => Fe.checkLoading.call(e2, t5)), e2.supported.ui && e2.config.clickToPlay && !e2.isAudio) {
                const i4 = B.call(e2, `.${e2.config.classNames.video}`);
                if (!S.element(i4)) return;
                X.call(e2, t4.container, "click", (s2) => {
                  ([t4.container, i4].includes(s2.target) || i4.contains(s2.target)) && (e2.touch && e2.config.hideControls || (e2.ended ? (this.proxy(s2, e2.restart, "restart"), this.proxy(s2, () => {
                    ie(e2.play());
                  }, "play")) : this.proxy(s2, () => {
                    ie(e2.togglePlay());
                  }, "play")));
                });
              }
              e2.supported.ui && e2.config.disableContextMenu && X.call(e2, t4.wrapper, "contextmenu", (e3) => {
                e3.preventDefault();
              }, false), X.call(e2, e2.media, "volumechange", () => {
                e2.storage.set({ volume: e2.volume, muted: e2.muted });
              }), X.call(e2, e2.media, "ratechange", () => {
                Pe.updateSetting.call(e2, "speed"), e2.storage.set({ speed: e2.speed });
              }), X.call(e2, e2.media, "qualitychange", (t5) => {
                Pe.updateSetting.call(e2, "quality", null, t5.detail.quality);
              }), X.call(e2, e2.media, "ready qualitychange", () => {
                Pe.setDownloadUrl.call(e2);
              });
              const i3 = e2.config.events.concat(["keyup", "keydown"]).join(" ");
              X.call(e2, e2.media, i3, (i4) => {
                let { detail: s2 = {} } = i4;
                "error" === i4.type && (s2 = e2.media.error), Z.call(e2, t4.container, i4.type, true, s2);
              });
            }), e(this, "proxy", (e2, t4, i3) => {
              const { player: s2 } = this, n2 = s2.config.listeners[i3];
              let a2 = true;
              S.function(n2) && (a2 = n2.call(s2, e2)), false !== a2 && S.function(t4) && t4.call(s2, e2);
            }), e(this, "bind", (e2, t4, i3, s2, n2 = true) => {
              const { player: a2 } = this, l2 = a2.config.listeners[s2], r2 = S.function(l2);
              X.call(a2, e2, t4, (e3) => this.proxy(e3, i3, s2), n2 && !r2);
            }), e(this, "controls", () => {
              const { player: e2 } = this, { elements: t4 } = e2, i3 = M.isIE ? "change" : "input";
              if (t4.buttons.play && Array.from(t4.buttons.play).forEach((t5) => {
                this.bind(t5, "click", () => {
                  ie(e2.togglePlay());
                }, "play");
              }), this.bind(t4.buttons.restart, "click", e2.restart, "restart"), this.bind(t4.buttons.rewind, "click", () => {
                e2.lastSeekTime = Date.now(), e2.rewind();
              }, "rewind"), this.bind(t4.buttons.fastForward, "click", () => {
                e2.lastSeekTime = Date.now(), e2.forward();
              }, "fastForward"), this.bind(t4.buttons.mute, "click", () => {
                e2.muted = !e2.muted;
              }, "mute"), this.bind(t4.buttons.captions, "click", () => e2.toggleCaptions()), this.bind(t4.buttons.download, "click", () => {
                Z.call(e2, e2.media, "download");
              }, "download"), this.bind(t4.buttons.fullscreen, "click", () => {
                e2.fullscreen.toggle();
              }, "fullscreen"), this.bind(t4.buttons.pip, "click", () => {
                e2.pip = "toggle";
              }, "pip"), this.bind(t4.buttons.airplay, "click", e2.airplay, "airplay"), this.bind(t4.buttons.settings, "click", (t5) => {
                t5.stopPropagation(), t5.preventDefault(), Pe.toggleMenu.call(e2, t5);
              }, null, false), this.bind(t4.buttons.settings, "keyup", (t5) => {
                [" ", "Enter"].includes(t5.key) && ("Enter" !== t5.key ? (t5.preventDefault(), t5.stopPropagation(), Pe.toggleMenu.call(e2, t5)) : Pe.focusFirstMenuItem.call(e2, null, true));
              }, null, false), this.bind(t4.settings.menu, "keydown", (t5) => {
                "Escape" === t5.key && Pe.toggleMenu.call(e2, t5);
              }), this.bind(t4.inputs.seek, "mousedown mousemove", (e3) => {
                const i4 = t4.progress.getBoundingClientRect(), s2 = 100 / i4.width * (e3.pageX - i4.left);
                e3.currentTarget.setAttribute("seek-value", s2);
              }), this.bind(t4.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t5) => {
                const i4 = t5.currentTarget, s2 = "play-on-seeked";
                if (S.keyboardEvent(t5) && !["ArrowLeft", "ArrowRight"].includes(t5.key)) return;
                e2.lastSeekTime = Date.now();
                const n2 = i4.hasAttribute(s2), a2 = ["mouseup", "touchend", "keyup"].includes(t5.type);
                n2 && a2 ? (i4.removeAttribute(s2), ie(e2.play())) : !a2 && e2.playing && (i4.setAttribute(s2, ""), e2.pause());
              }), M.isIos) {
                const t5 = U.call(e2, 'input[type="range"]');
                Array.from(t5).forEach((e3) => this.bind(e3, i3, (e4) => P(e4.target)));
              }
              this.bind(t4.inputs.seek, i3, (t5) => {
                const i4 = t5.currentTarget;
                let s2 = i4.getAttribute("seek-value");
                S.empty(s2) && (s2 = i4.value), i4.removeAttribute("seek-value"), e2.currentTime = s2 / i4.max * e2.duration;
              }, "seek"), this.bind(t4.progress, "mouseenter mouseleave mousemove", (t5) => Pe.updateSeekTooltip.call(e2, t5)), this.bind(t4.progress, "mousemove touchmove", (t5) => {
                const { previewThumbnails: i4 } = e2;
                i4 && i4.loaded && i4.startMove(t5);
              }), this.bind(t4.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t5 } = e2;
                t5 && t5.loaded && t5.endMove(false, true);
              }), this.bind(t4.progress, "mousedown touchstart", (t5) => {
                const { previewThumbnails: i4 } = e2;
                i4 && i4.loaded && i4.startScrubbing(t5);
              }), this.bind(t4.progress, "mouseup touchend", (t5) => {
                const { previewThumbnails: i4 } = e2;
                i4 && i4.loaded && i4.endScrubbing(t5);
              }), M.isWebKit && Array.from(U.call(e2, 'input[type="range"]')).forEach((t5) => {
                this.bind(t5, "input", (t6) => Pe.updateRangeFill.call(e2, t6.target));
              }), e2.config.toggleInvert && !S.element(t4.display.duration) && this.bind(t4.display.currentTime, "click", () => {
                0 !== e2.currentTime && (e2.config.invertTime = !e2.config.invertTime, Pe.timeUpdate.call(e2));
              }), this.bind(t4.inputs.volume, i3, (t5) => {
                e2.volume = t5.target.value;
              }, "volume"), this.bind(t4.controls, "mouseenter mouseleave", (i4) => {
                t4.controls.hover = !e2.touch && "mouseenter" === i4.type;
              }), t4.fullscreen && Array.from(t4.fullscreen.children).filter((e3) => !e3.contains(t4.container)).forEach((i4) => {
                this.bind(i4, "mouseenter mouseleave", (i5) => {
                  t4.controls && (t4.controls.hover = !e2.touch && "mouseenter" === i5.type);
                });
              }), this.bind(t4.controls, "mousedown mouseup touchstart touchend touchcancel", (e3) => {
                t4.controls.pressed = ["mousedown", "touchstart"].includes(e3.type);
              }), this.bind(t4.controls, "focusin", () => {
                const { config: i4, timers: s2 } = e2;
                R(t4.controls, i4.classNames.noTransition, true), Fe.toggleControls.call(e2, true), setTimeout(() => {
                  R(t4.controls, i4.classNames.noTransition, false);
                }, 0);
                const n2 = this.touch ? 3e3 : 4e3;
                clearTimeout(s2.controls), s2.controls = setTimeout(() => Fe.toggleControls.call(e2, false), n2);
              }), this.bind(t4.inputs.volume, "wheel", (t5) => {
                const i4 = t5.webkitDirectionInvertedFromDevice, [s2, n2] = [t5.deltaX, -t5.deltaY].map((e3) => i4 ? -e3 : e3), a2 = Math.sign(Math.abs(s2) > Math.abs(n2) ? s2 : n2);
                e2.increaseVolume(a2 / 50);
                const { volume: l2 } = e2.media;
                (1 === a2 && l2 < 1 || -1 === a2 && l2 > 0) && t5.preventDefault();
              }, "volume", false);
            }), this.player = t3, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
          }
          handleKey(e2) {
            const { player: t3 } = this, { elements: i3 } = t3, { key: s2, type: n2, altKey: a2, ctrlKey: l2, metaKey: r2, shiftKey: o2 } = e2, c2 = "keydown" === n2, u2 = c2 && s2 === this.lastKey;
            if (a2 || l2 || r2 || o2) return;
            if (!s2) return;
            if (c2) {
              const n3 = document.activeElement;
              if (S.element(n3)) {
                const { editable: s3 } = t3.config.selectors, { seek: a3 } = i3.inputs;
                if (n3 !== a3 && V(n3, s3)) return;
                if (" " === e2.key && V(n3, 'button, [role^="menuitem"]')) return;
              }
              switch ([" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s2) && (e2.preventDefault(), e2.stopPropagation()), s2) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  u2 || (h2 = parseInt(s2, 10), t3.currentTime = t3.duration / 10 * h2);
                  break;
                case " ":
                case "k":
                  u2 || ie(t3.togglePlay());
                  break;
                case "ArrowUp":
                  t3.increaseVolume(0.1);
                  break;
                case "ArrowDown":
                  t3.decreaseVolume(0.1);
                  break;
                case "m":
                  u2 || (t3.muted = !t3.muted);
                  break;
                case "ArrowRight":
                  t3.forward();
                  break;
                case "ArrowLeft":
                  t3.rewind();
                  break;
                case "f":
                  t3.fullscreen.toggle();
                  break;
                case "c":
                  u2 || t3.toggleCaptions();
                  break;
                case "l":
                  t3.loop = !t3.loop;
              }
              "Escape" === s2 && !t3.fullscreen.usingNative && t3.fullscreen.active && t3.fullscreen.toggle(), this.lastKey = s2;
            } else this.lastKey = null;
            var h2;
          }
          toggleMenu(e2) {
            Pe.toggleMenu.call(this.player, e2);
          }
        }
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
        var Ue = function(e2, t3) {
          return e2(t3 = { exports: {} }, t3.exports), t3.exports;
        }(function(e2, t3) {
          e2.exports = function() {
            var e3 = function() {
            }, t4 = {}, i3 = {}, s2 = {};
            function n2(e4, t5) {
              e4 = e4.push ? e4 : [e4];
              var n3, a3, l3, r3 = [], o3 = e4.length, c3 = o3;
              for (n3 = function(e5, i4) {
                i4.length && r3.push(e5), --c3 || t5(r3);
              }; o3--; ) a3 = e4[o3], (l3 = i3[a3]) ? n3(a3, l3) : (s2[a3] = s2[a3] || []).push(n3);
            }
            function a2(e4, t5) {
              if (e4) {
                var n3 = s2[e4];
                if (i3[e4] = t5, n3) for (; n3.length; ) n3[0](e4, t5), n3.splice(0, 1);
              }
            }
            function l2(t5, i4) {
              t5.call && (t5 = { success: t5 }), i4.length ? (t5.error || e3)(i4) : (t5.success || e3)(t5);
            }
            function r2(t5, i4, s3, n3) {
              var a3, l3, o3 = document, c3 = s3.async, u2 = (s3.numRetries || 0) + 1, h2 = s3.before || e3, d2 = t5.replace(/[\?|#].*$/, ""), m2 = t5.replace(/^(css|img)!/, "");
              n3 = n3 || 0, /(^css!|\.css$)/.test(d2) ? ((l3 = o3.createElement("link")).rel = "stylesheet", l3.href = m2, (a3 = "hideFocus" in l3) && l3.relList && (a3 = 0, l3.rel = "preload", l3.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d2) ? (l3 = o3.createElement("img")).src = m2 : ((l3 = o3.createElement("script")).src = t5, l3.async = void 0 === c3 || c3), l3.onload = l3.onerror = l3.onbeforeload = function(e4) {
                var o4 = e4.type[0];
                if (a3) try {
                  l3.sheet.cssText.length || (o4 = "e");
                } catch (e5) {
                  18 != e5.code && (o4 = "e");
                }
                if ("e" == o4) {
                  if ((n3 += 1) < u2) return r2(t5, i4, s3, n3);
                } else if ("preload" == l3.rel && "style" == l3.as) return l3.rel = "stylesheet";
                i4(t5, o4, e4.defaultPrevented);
              }, false !== h2(t5, l3) && o3.head.appendChild(l3);
            }
            function o2(e4, t5, i4) {
              var s3, n3, a3 = (e4 = e4.push ? e4 : [e4]).length, l3 = a3, o3 = [];
              for (s3 = function(e5, i5, s4) {
                if ("e" == i5 && o3.push(e5), "b" == i5) {
                  if (!s4) return;
                  o3.push(e5);
                }
                --a3 || t5(o3);
              }, n3 = 0; n3 < l3; n3++) r2(e4[n3], s3, i4);
            }
            function c2(e4, i4, s3) {
              var n3, r3;
              if (i4 && i4.trim && (n3 = i4), r3 = (n3 ? s3 : i4) || {}, n3) {
                if (n3 in t4) throw "LoadJS";
                t4[n3] = true;
              }
              function c3(t5, i5) {
                o2(e4, function(e5) {
                  l2(r3, e5), t5 && l2({ success: t5, error: i5 }, e5), a2(n3, e5);
                }, r3);
              }
              if (r3.returnPromise) return new Promise(c3);
              c3();
            }
            return c2.ready = function(e4, t5) {
              return n2(e4, function(e5) {
                l2(t5, e5);
              }), c2;
            }, c2.done = function(e4) {
              a2(e4, []);
            }, c2.reset = function() {
              t4 = {}, i3 = {}, s2 = {};
            }, c2.isDefined = function(e4) {
              return e4 in t4;
            }, c2;
          }();
        });
        function Be(e2) {
          return new Promise((t3, i3) => {
            Ue(e2, { success: t3, error: i3 });
          });
        }
        function We(e2) {
          e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, Z.call(this, this.media, e2 ? "play" : "pause"));
        }
        const ze = { setup() {
          const e2 = this;
          R(e2.elements.wrapper, e2.config.classNames.embed, true), e2.options.speed = e2.config.speed.options, ue.call(e2), S.object(window.Vimeo) ? ze.ready.call(e2) : Be(e2.config.urls.vimeo.sdk).then(() => {
            ze.ready.call(e2);
          }).catch((t3) => {
            e2.debug.warn("Vimeo SDK (player.js) failed to load", t3);
          });
        }, ready() {
          const e2 = this, t3 = e2.config.vimeo, { premium: i3, referrerPolicy: s2, ...n2 } = t3;
          let a2 = e2.media.getAttribute("src"), l2 = "";
          S.empty(a2) ? (a2 = e2.media.getAttribute(e2.config.attributes.embed.id), l2 = e2.media.getAttribute(e2.config.attributes.embed.hash)) : l2 = function(e3) {
            const t4 = e3.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
            return t4 && 5 === t4.length ? t4[4] : null;
          }(a2);
          const r2 = l2 ? { h: l2 } : {};
          i3 && Object.assign(n2, { controls: false, sidedock: false });
          const o2 = Ne({ loop: e2.config.loop.active, autoplay: e2.autoplay, muted: e2.muted, gesture: "media", playsinline: e2.config.playsinline, ...r2, ...n2 }), c2 = (u2 = a2, S.empty(u2) ? null : S.number(Number(u2)) ? u2 : u2.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u2);
          var u2;
          const h2 = $("iframe"), d2 = me(e2.config.urls.vimeo.iframe, c2, o2);
          if (h2.setAttribute("src", d2), h2.setAttribute("allowfullscreen", ""), h2.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), S.empty(s2) || h2.setAttribute("referrerPolicy", s2), i3 || !t3.customControls) h2.setAttribute("data-poster", e2.poster), e2.media = q(h2, e2.media);
          else {
            const t4 = $("div", { class: e2.config.classNames.embedContainer, "data-poster": e2.poster });
            t4.appendChild(h2), e2.media = q(t4, e2.media);
          }
          t3.customControls || Te(me(e2.config.urls.vimeo.api, d2)).then((t4) => {
            !S.empty(t4) && t4.thumbnail_url && Fe.setPoster.call(e2, t4.thumbnail_url).catch(() => {
            });
          }), e2.embed = new window.Vimeo.Player(h2, { autopause: e2.config.autopause, muted: e2.muted }), e2.media.paused = true, e2.media.currentTime = 0, e2.supported.ui && e2.embed.disableTextTrack(), e2.media.play = () => (We.call(e2, true), e2.embed.play()), e2.media.pause = () => (We.call(e2, false), e2.embed.pause()), e2.media.stop = () => {
            e2.pause(), e2.currentTime = 0;
          };
          let { currentTime: m2 } = e2.media;
          Object.defineProperty(e2.media, "currentTime", { get: () => m2, set(t4) {
            const { embed: i4, media: s3, paused: n3, volume: a3 } = e2, l3 = n3 && !i4.hasPlayed;
            s3.seeking = true, Z.call(e2, s3, "seeking"), Promise.resolve(l3 && i4.setVolume(0)).then(() => i4.setCurrentTime(t4)).then(() => l3 && i4.pause()).then(() => l3 && i4.setVolume(a3)).catch(() => {
            });
          } });
          let p2 = e2.config.speed.selected;
          Object.defineProperty(e2.media, "playbackRate", { get: () => p2, set(t4) {
            e2.embed.setPlaybackRate(t4).then(() => {
              p2 = t4, Z.call(e2, e2.media, "ratechange");
            }).catch(() => {
              e2.options.speed = [1];
            });
          } });
          let { volume: g2 } = e2.config;
          Object.defineProperty(e2.media, "volume", { get: () => g2, set(t4) {
            e2.embed.setVolume(t4).then(() => {
              g2 = t4, Z.call(e2, e2.media, "volumechange");
            });
          } });
          let { muted: f2 } = e2.config;
          Object.defineProperty(e2.media, "muted", { get: () => f2, set(t4) {
            const i4 = !!S.boolean(t4) && t4;
            e2.embed.setMuted(!!i4 || e2.config.muted).then(() => {
              f2 = i4, Z.call(e2, e2.media, "volumechange");
            });
          } });
          let y2, { loop: b2 } = e2.config;
          Object.defineProperty(e2.media, "loop", { get: () => b2, set(t4) {
            const i4 = S.boolean(t4) ? t4 : e2.config.loop.active;
            e2.embed.setLoop(i4).then(() => {
              b2 = i4;
            });
          } }), e2.embed.getVideoUrl().then((t4) => {
            y2 = t4, Pe.setDownloadUrl.call(e2);
          }).catch((e3) => {
            this.debug.warn(e3);
          }), Object.defineProperty(e2.media, "currentSrc", { get: () => y2 }), Object.defineProperty(e2.media, "ended", { get: () => e2.currentTime === e2.duration }), Promise.all([e2.embed.getVideoWidth(), e2.embed.getVideoHeight()]).then((t4) => {
            const [i4, s3] = t4;
            e2.embed.ratio = he(i4, s3), ue.call(this);
          }), e2.embed.setAutopause(e2.config.autopause).then((t4) => {
            e2.config.autopause = t4;
          }), e2.embed.getVideoTitle().then((t4) => {
            e2.config.title = t4, Fe.setTitle.call(this);
          }), e2.embed.getCurrentTime().then((t4) => {
            m2 = t4, Z.call(e2, e2.media, "timeupdate");
          }), e2.embed.getDuration().then((t4) => {
            e2.media.duration = t4, Z.call(e2, e2.media, "durationchange");
          }), e2.embed.getTextTracks().then((t4) => {
            e2.media.textTracks = t4, xe.setup.call(e2);
          }), e2.embed.on("cuechange", ({ cues: t4 = [] }) => {
            const i4 = t4.map((e3) => function(e4) {
              const t5 = document.createDocumentFragment(), i5 = document.createElement("div");
              return t5.appendChild(i5), i5.innerHTML = e4, t5.firstChild.innerText;
            }(e3.text));
            xe.updateCues.call(e2, i4);
          }), e2.embed.on("loaded", () => {
            if (e2.embed.getPaused().then((t4) => {
              We.call(e2, !t4), t4 || Z.call(e2, e2.media, "playing");
            }), S.element(e2.embed.element) && e2.supported.ui) {
              e2.embed.element.setAttribute("tabindex", -1);
            }
          }), e2.embed.on("bufferstart", () => {
            Z.call(e2, e2.media, "waiting");
          }), e2.embed.on("bufferend", () => {
            Z.call(e2, e2.media, "playing");
          }), e2.embed.on("play", () => {
            We.call(e2, true), Z.call(e2, e2.media, "playing");
          }), e2.embed.on("pause", () => {
            We.call(e2, false);
          }), e2.embed.on("timeupdate", (t4) => {
            e2.media.seeking = false, m2 = t4.seconds, Z.call(e2, e2.media, "timeupdate");
          }), e2.embed.on("progress", (t4) => {
            e2.media.buffered = t4.percent, Z.call(e2, e2.media, "progress"), 1 === parseInt(t4.percent, 10) && Z.call(e2, e2.media, "canplaythrough"), e2.embed.getDuration().then((t5) => {
              t5 !== e2.media.duration && (e2.media.duration = t5, Z.call(e2, e2.media, "durationchange"));
            });
          }), e2.embed.on("seeked", () => {
            e2.media.seeking = false, Z.call(e2, e2.media, "seeked");
          }), e2.embed.on("ended", () => {
            e2.media.paused = true, Z.call(e2, e2.media, "ended");
          }), e2.embed.on("error", (t4) => {
            e2.media.error = t4, Z.call(e2, e2.media, "error");
          }), t3.customControls && setTimeout(() => Fe.build.call(e2), 0);
        } };
        function Ke(e2) {
          e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, Z.call(this, this.media, e2 ? "play" : "pause"));
        }
        function Ye(e2) {
          return e2.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
        }
        const Qe = { setup() {
          if (R(this.elements.wrapper, this.config.classNames.embed, true), S.object(window.YT) && S.function(window.YT.Player)) Qe.ready.call(this);
          else {
            const e2 = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
              S.function(e2) && e2(), Qe.ready.call(this);
            }, Be(this.config.urls.youtube.sdk).catch((e3) => {
              this.debug.warn("YouTube API failed to load", e3);
            });
          }
        }, getTitle(e2) {
          Te(me(this.config.urls.youtube.api, e2)).then((e3) => {
            if (S.object(e3)) {
              const { title: t3, height: i3, width: s2 } = e3;
              this.config.title = t3, Fe.setTitle.call(this), this.embed.ratio = he(s2, i3);
            }
            ue.call(this);
          }).catch(() => {
            ue.call(this);
          });
        }, ready() {
          const e2 = this, t3 = e2.config.youtube, i3 = e2.media && e2.media.getAttribute("id");
          if (!S.empty(i3) && i3.startsWith("youtube-")) return;
          let s2 = e2.media.getAttribute("src");
          S.empty(s2) && (s2 = e2.media.getAttribute(this.config.attributes.embed.id));
          const n2 = (a2 = s2, S.empty(a2) ? null : a2.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a2);
          var a2;
          const l2 = $("div", { id: `${e2.provider}-${Math.floor(1e4 * Math.random())}`, "data-poster": t3.customControls ? e2.poster : void 0 });
          if (e2.media = q(l2, e2.media), t3.customControls) {
            const t4 = (e3) => `https://i.ytimg.com/vi/${n2}/${e3}default.jpg`;
            Re(t4("maxres"), 121).catch(() => Re(t4("sd"), 121)).catch(() => Re(t4("hq"))).then((t5) => Fe.setPoster.call(e2, t5.src)).then((t5) => {
              t5.includes("maxres") || (e2.elements.poster.style.backgroundSize = "cover");
            }).catch(() => {
            });
          }
          e2.embed = new window.YT.Player(e2.media, { videoId: n2, host: Ye(t3), playerVars: x({}, { autoplay: e2.config.autoplay ? 1 : 0, hl: e2.config.hl, controls: e2.supported.ui && t3.customControls ? 0 : 1, disablekb: 1, playsinline: e2.config.playsinline && !e2.config.fullscreen.iosNative ? 1 : 0, cc_load_policy: e2.captions.active ? 1 : 0, cc_lang_pref: e2.config.captions.language, widget_referrer: window ? window.location.href : null }, t3), events: { onError(t4) {
            if (!e2.media.error) {
              const i4 = t4.data, s3 = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[i4] || "An unknown error occurred";
              e2.media.error = { code: i4, message: s3 }, Z.call(e2, e2.media, "error");
            }
          }, onPlaybackRateChange(t4) {
            const i4 = t4.target;
            e2.media.playbackRate = i4.getPlaybackRate(), Z.call(e2, e2.media, "ratechange");
          }, onReady(i4) {
            if (S.function(e2.media.play)) return;
            const s3 = i4.target;
            Qe.getTitle.call(e2, n2), e2.media.play = () => {
              Ke.call(e2, true), s3.playVideo();
            }, e2.media.pause = () => {
              Ke.call(e2, false), s3.pauseVideo();
            }, e2.media.stop = () => {
              s3.stopVideo();
            }, e2.media.duration = s3.getDuration(), e2.media.paused = true, e2.media.currentTime = 0, Object.defineProperty(e2.media, "currentTime", { get: () => Number(s3.getCurrentTime()), set(t4) {
              e2.paused && !e2.embed.hasPlayed && e2.embed.mute(), e2.media.seeking = true, Z.call(e2, e2.media, "seeking"), s3.seekTo(t4);
            } }), Object.defineProperty(e2.media, "playbackRate", { get: () => s3.getPlaybackRate(), set(e3) {
              s3.setPlaybackRate(e3);
            } });
            let { volume: a3 } = e2.config;
            Object.defineProperty(e2.media, "volume", { get: () => a3, set(t4) {
              a3 = t4, s3.setVolume(100 * a3), Z.call(e2, e2.media, "volumechange");
            } });
            let { muted: l3 } = e2.config;
            Object.defineProperty(e2.media, "muted", { get: () => l3, set(t4) {
              const i5 = S.boolean(t4) ? t4 : l3;
              l3 = i5, s3[i5 ? "mute" : "unMute"](), s3.setVolume(100 * a3), Z.call(e2, e2.media, "volumechange");
            } }), Object.defineProperty(e2.media, "currentSrc", { get: () => s3.getVideoUrl() }), Object.defineProperty(e2.media, "ended", { get: () => e2.currentTime === e2.duration });
            const r2 = s3.getAvailablePlaybackRates();
            e2.options.speed = r2.filter((t4) => e2.config.speed.options.includes(t4)), e2.supported.ui && t3.customControls && e2.media.setAttribute("tabindex", -1), Z.call(e2, e2.media, "timeupdate"), Z.call(e2, e2.media, "durationchange"), clearInterval(e2.timers.buffering), e2.timers.buffering = setInterval(() => {
              e2.media.buffered = s3.getVideoLoadedFraction(), (null === e2.media.lastBuffered || e2.media.lastBuffered < e2.media.buffered) && Z.call(e2, e2.media, "progress"), e2.media.lastBuffered = e2.media.buffered, 1 === e2.media.buffered && (clearInterval(e2.timers.buffering), Z.call(e2, e2.media, "canplaythrough"));
            }, 200), t3.customControls && setTimeout(() => Fe.build.call(e2), 50);
          }, onStateChange(i4) {
            const s3 = i4.target;
            clearInterval(e2.timers.playing);
            switch (e2.media.seeking && [1, 2].includes(i4.data) && (e2.media.seeking = false, Z.call(e2, e2.media, "seeked")), i4.data) {
              case -1:
                Z.call(e2, e2.media, "timeupdate"), e2.media.buffered = s3.getVideoLoadedFraction(), Z.call(e2, e2.media, "progress");
                break;
              case 0:
                Ke.call(e2, false), e2.media.loop ? (s3.stopVideo(), s3.playVideo()) : Z.call(e2, e2.media, "ended");
                break;
              case 1:
                t3.customControls && !e2.config.autoplay && e2.media.paused && !e2.embed.hasPlayed ? e2.media.pause() : (Ke.call(e2, true), Z.call(e2, e2.media, "playing"), e2.timers.playing = setInterval(() => {
                  Z.call(e2, e2.media, "timeupdate");
                }, 50), e2.media.duration !== s3.getDuration() && (e2.media.duration = s3.getDuration(), Z.call(e2, e2.media, "durationchange")));
                break;
              case 2:
                e2.muted || e2.embed.unMute(), Ke.call(e2, false);
                break;
              case 3:
                Z.call(e2, e2.media, "waiting");
            }
            Z.call(e2, e2.elements.container, "statechange", false, { code: i4.data });
          } } });
        } }, Xe = { setup() {
          this.media ? (R(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), R(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && R(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.isVideo && (this.elements.wrapper = $("div", { class: this.config.classNames.video }), L(this.media, this.elements.wrapper), this.elements.poster = $("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? de.setup.call(this) : this.isYouTube ? Qe.setup.call(this) : this.isVimeo && ze.setup.call(this)) : this.debug.warn("No media element found!");
        } };
        class Je {
          constructor(t3) {
            e(this, "load", () => {
              this.enabled && (S.object(window.google) && S.object(window.google.ima) ? this.ready() : Be(this.player.config.urls.googleIMA.sdk).then(() => {
                this.ready();
              }).catch(() => {
                this.trigger("error", new Error("Google IMA SDK failed to load"));
              }));
            }), e(this, "ready", () => {
              var e2;
              this.enabled || ((e2 = this).manager && e2.manager.destroy(), e2.elements.displayContainer && e2.elements.displayContainer.destroy(), e2.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }), this.listeners(), this.setupIMA();
            }), e(this, "setupIMA", () => {
              this.elements.container = $("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e2) => this.onAdsManagerLoaded(e2), false), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e2) => this.onAdError(e2), false), this.requestAds();
            }), e(this, "requestAds", () => {
              const { container: e2 } = this.player.elements;
              try {
                const t4 = new google.ima.AdsRequest();
                t4.adTagUrl = this.tagUrl, t4.linearAdSlotWidth = e2.offsetWidth, t4.linearAdSlotHeight = e2.offsetHeight, t4.nonLinearAdSlotWidth = e2.offsetWidth, t4.nonLinearAdSlotHeight = e2.offsetHeight, t4.forceNonLinearFullSlot = false, t4.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t4);
              } catch (e3) {
                this.onAdError(e3);
              }
            }), e(this, "pollCountdown", (e2 = false) => {
              if (!e2) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
              this.countdownTimer = setInterval(() => {
                const e3 = Ee(Math.max(this.manager.getRemainingTime(), 0)), t4 = `${ve.get("advertisement", this.player.config)} - ${e3}`;
                this.elements.container.setAttribute("data-badge-text", t4);
              }, 100);
            }), e(this, "onAdsManagerLoaded", (e2) => {
              if (!this.enabled) return;
              const t4 = new google.ima.AdsRenderingSettings();
              t4.restoreCustomPlaybackStateOnAdBreakComplete = true, t4.enablePreloading = true, this.manager = e2.getAdsManager(this.player, t4), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e3) => this.onAdError(e3)), Object.keys(google.ima.AdEvent.Type).forEach((e3) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e3], (e4) => this.onAdEvent(e4));
              }), this.trigger("loaded");
            }), e(this, "addCuePoints", () => {
              S.empty(this.cuePoints) || this.cuePoints.forEach((e2) => {
                if (0 !== e2 && -1 !== e2 && e2 < this.player.duration) {
                  const t4 = this.player.elements.progress;
                  if (S.element(t4)) {
                    const i3 = 100 / this.player.duration * e2, s2 = $("span", { class: this.player.config.classNames.cues });
                    s2.style.left = `${i3.toString()}%`, t4.appendChild(s2);
                  }
                }
              });
            }), e(this, "onAdEvent", (e2) => {
              const { container: t4 } = this.player.elements, i3 = e2.getAd(), s2 = e2.getAdData();
              switch (((e3) => {
                Z.call(this.player, this.player.media, `ads${e3.replace(/_/g, "").toLowerCase()}`);
              })(e2.type), e2.type) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"), this.pollCountdown(true), i3.isLinear() || (i3.width = t4.offsetWidth, i3.height = t4.offsetHeight);
                  break;
                case google.ima.AdEvent.Type.STARTED:
                  this.manager.setVolume(this.player.volume);
                  break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  this.player.ended ? this.loadAds() : this.loader.contentComplete();
                  break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  this.pauseContent();
                  break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  this.pollCountdown(), this.resumeContent();
                  break;
                case google.ima.AdEvent.Type.LOG:
                  s2.adError && this.player.debug.warn(`Non-fatal ad error: ${s2.adError.getMessage()}`);
              }
            }), e(this, "onAdError", (e2) => {
              this.cancel(), this.player.debug.warn("Ads error", e2);
            }), e(this, "listeners", () => {
              const { container: e2 } = this.player.elements;
              let t4;
              this.player.on("canplay", () => {
                this.addCuePoints();
              }), this.player.on("ended", () => {
                this.loader.contentComplete();
              }), this.player.on("timeupdate", () => {
                t4 = this.player.currentTime;
              }), this.player.on("seeked", () => {
                const e3 = this.player.currentTime;
                S.empty(this.cuePoints) || this.cuePoints.forEach((i3, s2) => {
                  t4 < i3 && i3 < e3 && (this.manager.discardAdBreak(), this.cuePoints.splice(s2, 1));
                });
              }), window.addEventListener("resize", () => {
                this.manager && this.manager.resize(e2.offsetWidth, e2.offsetHeight, google.ima.ViewMode.NORMAL);
              });
            }), e(this, "play", () => {
              const { container: e2 } = this.player.elements;
              this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                try {
                  this.initialized || (this.manager.init(e2.offsetWidth, e2.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = true;
                } catch (e3) {
                  this.onAdError(e3);
                }
              }).catch(() => {
              });
            }), e(this, "resumeContent", () => {
              this.elements.container.style.zIndex = "", this.playing = false, ie(this.player.media.play());
            }), e(this, "pauseContent", () => {
              this.elements.container.style.zIndex = 3, this.playing = true, this.player.media.pause();
            }), e(this, "cancel", () => {
              this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
            }), e(this, "loadAds", () => {
              this.managerPromise.then(() => {
                this.manager && this.manager.destroy(), this.managerPromise = new Promise((e2) => {
                  this.on("loaded", e2), this.player.debug.log(this.manager);
                }), this.initialized = false, this.requestAds();
              }).catch(() => {
              });
            }), e(this, "trigger", (e2, ...t4) => {
              const i3 = this.events[e2];
              S.array(i3) && i3.forEach((e3) => {
                S.function(e3) && e3.apply(this, t4);
              });
            }), e(this, "on", (e2, t4) => (S.array(this.events[e2]) || (this.events[e2] = []), this.events[e2].push(t4), this)), e(this, "startSafetyTimer", (e2, t4) => {
              this.player.debug.log(`Safety timer invoked from: ${t4}`), this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e2);
            }), e(this, "clearSafetyTimer", (e2) => {
              S.nullOrUndefined(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e2}`), clearTimeout(this.safetyTimer), this.safetyTimer = null);
            }), this.player = t3, this.config = t3.config.ads, this.playing = false, this.initialized = false, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e2, t4) => {
              this.on("loaded", e2), this.on("error", t4);
            }), this.load();
          }
          get enabled() {
            const { config: e2 } = this;
            return this.player.isHTML5 && this.player.isVideo && e2.enabled && (!S.empty(e2.publisherId) || S.url(e2.tagUrl));
          }
          get tagUrl() {
            const { config: e2 } = this;
            if (S.url(e2.tagUrl)) return e2.tagUrl;
            return `https://go.aniview.com/api/adserver6/vast/?${Ne({ AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: e2.publisherId })}`;
          }
        }
        function Ge(e2 = 0, t3 = 0, i3 = 255) {
          return Math.min(Math.max(e2, t3), i3);
        }
        const Ze = (e2) => {
          const t3 = [];
          return e2.split(/\r\n\r\n|\n\n|\r\r/).forEach((e3) => {
            const i3 = {};
            e3.split(/\r\n|\n|\r/).forEach((e4) => {
              if (S.number(i3.startTime)) {
                if (!S.empty(e4.trim()) && S.empty(i3.text)) {
                  const t4 = e4.trim().split("#xywh=");
                  [i3.text] = t4, t4[1] && ([i3.x, i3.y, i3.w, i3.h] = t4[1].split(","));
                }
              } else {
                const t4 = e4.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                t4 && (i3.startTime = 60 * Number(t4[1] || 0) * 60 + 60 * Number(t4[2]) + Number(t4[3]) + Number(`0.${t4[4]}`), i3.endTime = 60 * Number(t4[6] || 0) * 60 + 60 * Number(t4[7]) + Number(t4[8]) + Number(`0.${t4[9]}`));
              }
            }), i3.text && t3.push(i3);
          }), t3;
        }, et = (e2, t3) => {
          const i3 = {};
          return e2 > t3.width / t3.height ? (i3.width = t3.width, i3.height = 1 / e2 * t3.width) : (i3.height = t3.height, i3.width = e2 * t3.height), i3;
        };
        class tt {
          constructor(t3) {
            e(this, "load", () => {
              this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), this.loaded = true);
              });
            }), e(this, "getThumbnails", () => new Promise((e2) => {
              const { src: t4 } = this.player.config.previewThumbnails;
              if (S.empty(t4)) throw new Error("Missing previewThumbnails.src config attribute");
              const i3 = () => {
                this.thumbnails.sort((e3, t5) => e3.height - t5.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e2();
              };
              if (S.function(t4)) t4((e3) => {
                this.thumbnails = e3, i3();
              });
              else {
                const e3 = (S.string(t4) ? [t4] : t4).map((e4) => this.getThumbnail(e4));
                Promise.all(e3).then(i3);
              }
            })), e(this, "getThumbnail", (e2) => new Promise((t4) => {
              Te(e2).then((i3) => {
                const s2 = { frames: Ze(i3), height: null, urlPrefix: "" };
                s2.frames[0].text.startsWith("/") || s2.frames[0].text.startsWith("http://") || s2.frames[0].text.startsWith("https://") || (s2.urlPrefix = e2.substring(0, e2.lastIndexOf("/") + 1));
                const n2 = new Image();
                n2.onload = () => {
                  s2.height = n2.naturalHeight, s2.width = n2.naturalWidth, this.thumbnails.push(s2), t4();
                }, n2.src = s2.urlPrefix + s2.frames[0].text;
              });
            })), e(this, "startMove", (e2) => {
              if (this.loaded && S.event(e2) && ["touchmove", "mousemove"].includes(e2.type) && this.player.media.duration) {
                if ("touchmove" === e2.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                else {
                  var t4, i3;
                  const s2 = this.player.elements.progress.getBoundingClientRect(), n2 = 100 / s2.width * (e2.pageX - s2.left);
                  this.seekTime = this.player.media.duration * (n2 / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e2.pageX, this.elements.thumb.time.innerText = Ee(this.seekTime);
                  const a2 = null === (t4 = this.player.config.markers) || void 0 === t4 || null === (i3 = t4.points) || void 0 === i3 ? void 0 : i3.find(({ time: e3 }) => e3 === Math.round(this.seekTime));
                  a2 && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${a2.label}<br>`);
                }
                this.showImageAtCurrentTime();
              }
            }), e(this, "endMove", () => {
              this.toggleThumbContainer(false, true);
            }), e(this, "startScrubbing", (e2) => {
              (S.nullOrUndefined(e2.button) || false === e2.button || 0 === e2.button) && (this.mouseDown = true, this.player.media.duration && (this.toggleScrubbingContainer(true), this.toggleThumbContainer(false, true), this.showImageAtCurrentTime()));
            }), e(this, "endScrubbing", () => {
              this.mouseDown = false, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(false) : G.call(this.player, this.player.media, "timeupdate", () => {
                this.mouseDown || this.toggleScrubbingContainer(false);
              });
            }), e(this, "listeners", () => {
              this.player.on("play", () => {
                this.toggleThumbContainer(false, true);
              }), this.player.on("seeked", () => {
                this.toggleThumbContainer(false);
              }), this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
            }), e(this, "render", () => {
              this.elements.thumb.container = $("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = $("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
              const e2 = $("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
              this.elements.thumb.time = $("span", {}, "00:00"), e2.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e2), S.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = $("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            }), e(this, "destroy", () => {
              this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
            }), e(this, "showImageAtCurrentTime", () => {
              this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
              const e2 = this.thumbnails[0].frames.findIndex((e3) => this.seekTime >= e3.startTime && this.seekTime <= e3.endTime), t4 = e2 >= 0;
              let i3 = 0;
              this.mouseDown || this.toggleThumbContainer(t4), t4 && (this.thumbnails.forEach((t5, s2) => {
                this.loadedImages.includes(t5.frames[e2].text) && (i3 = s2);
              }), e2 !== this.showingThumb && (this.showingThumb = e2, this.loadImage(i3)));
            }), e(this, "loadImage", (e2 = 0) => {
              const t4 = this.showingThumb, i3 = this.thumbnails[e2], { urlPrefix: s2 } = i3, n2 = i3.frames[t4], a2 = i3.frames[t4].text, l2 = s2 + a2;
              if (this.currentImageElement && this.currentImageElement.dataset.filename === a2) this.showImage(this.currentImageElement, n2, e2, t4, a2, false), this.currentImageElement.dataset.index = t4, this.removeOldImages(this.currentImageElement);
              else {
                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                const i4 = new Image();
                i4.src = l2, i4.dataset.index = t4, i4.dataset.filename = a2, this.showingThumbFilename = a2, this.player.debug.log(`Loading image: ${l2}`), i4.onload = () => this.showImage(i4, n2, e2, t4, a2, true), this.loadingImage = i4, this.removeOldImages(i4);
              }
            }), e(this, "showImage", (e2, t4, i3, s2, n2, a2 = true) => {
              this.player.debug.log(`Showing thumb: ${n2}. num: ${s2}. qual: ${i3}. newimg: ${a2}`), this.setImageSizeAndOffset(e2, t4), a2 && (this.currentImageContainer.appendChild(e2), this.currentImageElement = e2, this.loadedImages.includes(n2) || this.loadedImages.push(n2)), this.preloadNearby(s2, true).then(this.preloadNearby(s2, false)).then(this.getHigherQuality(i3, e2, t4, n2));
            }), e(this, "removeOldImages", (e2) => {
              Array.from(this.currentImageContainer.children).forEach((t4) => {
                if ("img" !== t4.tagName.toLowerCase()) return;
                const i3 = this.usingSprites ? 500 : 1e3;
                if (t4.dataset.index !== e2.dataset.index && !t4.dataset.deleting) {
                  t4.dataset.deleting = true;
                  const { currentImageContainer: e3 } = this;
                  setTimeout(() => {
                    e3.removeChild(t4), this.player.debug.log(`Removing thumb: ${t4.dataset.filename}`);
                  }, i3);
                }
              });
            }), e(this, "preloadNearby", (e2, t4 = true) => new Promise((i3) => {
              setTimeout(() => {
                const s2 = this.thumbnails[0].frames[e2].text;
                if (this.showingThumbFilename === s2) {
                  let n2;
                  n2 = t4 ? this.thumbnails[0].frames.slice(e2) : this.thumbnails[0].frames.slice(0, e2).reverse();
                  let a2 = false;
                  n2.forEach((e3) => {
                    const t5 = e3.text;
                    if (t5 !== s2 && !this.loadedImages.includes(t5)) {
                      a2 = true, this.player.debug.log(`Preloading thumb filename: ${t5}`);
                      const { urlPrefix: e4 } = this.thumbnails[0], s3 = e4 + t5, n3 = new Image();
                      n3.src = s3, n3.onload = () => {
                        this.player.debug.log(`Preloaded thumb filename: ${t5}`), this.loadedImages.includes(t5) || this.loadedImages.push(t5), i3();
                      };
                    }
                  }), a2 || i3();
                }
              }, 300);
            })), e(this, "getHigherQuality", (e2, t4, i3, s2) => {
              if (e2 < this.thumbnails.length - 1) {
                let n2 = t4.naturalHeight;
                this.usingSprites && (n2 = i3.h), n2 < this.thumbContainerHeight && setTimeout(() => {
                  this.showingThumbFilename === s2 && (this.player.debug.log(`Showing higher quality thumb for: ${s2}`), this.loadImage(e2 + 1));
                }, 300);
              }
            }), e(this, "toggleThumbContainer", (e2 = false, t4 = false) => {
              const i3 = this.player.config.classNames.previewThumbnails.thumbContainerShown;
              this.elements.thumb.container.classList.toggle(i3, e2), !e2 && t4 && (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "toggleScrubbingContainer", (e2 = false) => {
              const t4 = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t4, e2), e2 || (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "determineContainerAutoSizing", () => {
              (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = true);
            }), e(this, "setThumbContainerSizeAndPos", () => {
              const { imageContainer: e2 } = this.elements.thumb;
              if (this.sizeSpecifiedInCSS) {
                if (e2.clientHeight > 20 && e2.clientWidth < 20) {
                  const t4 = Math.floor(e2.clientHeight * this.thumbAspectRatio);
                  e2.style.width = `${t4}px`;
                } else if (e2.clientHeight < 20 && e2.clientWidth > 20) {
                  const t4 = Math.floor(e2.clientWidth / this.thumbAspectRatio);
                  e2.style.height = `${t4}px`;
                }
              } else {
                const t4 = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                e2.style.height = `${this.thumbContainerHeight}px`, e2.style.width = `${t4}px`;
              }
              this.setThumbContainerPos();
            }), e(this, "setThumbContainerPos", () => {
              const e2 = this.player.elements.progress.getBoundingClientRect(), t4 = this.player.elements.container.getBoundingClientRect(), { container: i3 } = this.elements.thumb, s2 = t4.left - e2.left + 10, n2 = t4.right - e2.left - i3.clientWidth - 10, a2 = this.mousePosX - e2.left - i3.clientWidth / 2, l2 = Ge(a2, s2, n2);
              i3.style.left = `${l2}px`, i3.style.setProperty("--preview-arrow-offset", a2 - l2 + "px");
            }), e(this, "setScrubbingContainerSize", () => {
              const { width: e2, height: t4 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              this.elements.scrubbing.container.style.width = `${e2}px`, this.elements.scrubbing.container.style.height = `${t4}px`;
            }), e(this, "setImageSizeAndOffset", (e2, t4) => {
              if (!this.usingSprites) return;
              const i3 = this.thumbContainerHeight / t4.h;
              e2.style.height = e2.naturalHeight * i3 + "px", e2.style.width = e2.naturalWidth * i3 + "px", e2.style.left = `-${t4.x * i3}px`, e2.style.top = `-${t4.y * i3}px`;
            }), this.player = t3, this.thumbnails = [], this.loaded = false, this.lastMouseMoveTime = Date.now(), this.mouseDown = false, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load();
          }
          get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
          }
          get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
          }
          get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w");
          }
          get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
          }
          get thumbContainerHeight() {
            if (this.mouseDown) {
              const { height: e2 } = et(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
              return e2;
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
          }
          get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
          }
          set currentImageElement(e2) {
            this.mouseDown ? this.currentScrubbingImageElement = e2 : this.currentThumbnailImageElement = e2;
          }
        }
        const it = { insertElements(e2, t3) {
          S.string(t3) ? _(e2, this.media, { src: t3 }) : S.array(t3) && t3.forEach((t4) => {
            _(e2, this.media, t4);
          });
        }, change(e2) {
          N(e2, "sources.length") ? (de.cancelRequests.call(this), this.destroy.call(this, () => {
            this.options.quality = [], O(this.media), this.media = null, S.element(this.elements.container) && this.elements.container.removeAttribute("class");
            const { sources: t3, type: i3 } = e2, [{ provider: s2 = _e.html5, src: n2 }] = t3, a2 = "html5" === s2 ? i3 : "div", l2 = "html5" === s2 ? {} : { src: n2 };
            Object.assign(this, { provider: s2, type: i3, supported: K.check(i3, s2, this.config.playsinline), media: $(a2, l2) }), this.elements.container.appendChild(this.media), S.boolean(e2.autoplay) && (this.config.autoplay = e2.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), S.empty(e2.poster) || (this.poster = e2.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), Fe.addStyleHook.call(this), this.isHTML5 && it.insertElements.call(this, "source", t3), this.config.title = e2.title, Xe.setup.call(this), this.isHTML5 && Object.keys(e2).includes("tracks") && it.insertElements.call(this, "track", e2.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.isHTML5 && this.media.load(), S.empty(e2.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e2.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))), this.fullscreen.update();
          }, true)) : this.debug.warn("Invalid source format");
        } };
        class st {
          constructor(t3, i3) {
            if (e(this, "play", () => S.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => ie(this.media.play())), this.media.play()) : null), e(this, "pause", () => this.playing && S.function(this.media.pause) ? this.media.pause() : null), e(this, "togglePlay", (e2) => (S.boolean(e2) ? e2 : !this.playing) ? this.play() : this.pause()), e(this, "stop", () => {
              this.isHTML5 ? (this.pause(), this.restart()) : S.function(this.media.stop) && this.media.stop();
            }), e(this, "restart", () => {
              this.currentTime = 0;
            }), e(this, "rewind", (e2) => {
              this.currentTime -= S.number(e2) ? e2 : this.config.seekTime;
            }), e(this, "forward", (e2) => {
              this.currentTime += S.number(e2) ? e2 : this.config.seekTime;
            }), e(this, "increaseVolume", (e2) => {
              const t4 = this.media.muted ? 0 : this.volume;
              this.volume = t4 + (S.number(e2) ? e2 : 0);
            }), e(this, "decreaseVolume", (e2) => {
              this.increaseVolume(-e2);
            }), e(this, "airplay", () => {
              K.airplay && this.media.webkitShowPlaybackTargetPicker();
            }), e(this, "toggleControls", (e2) => {
              if (this.supported.ui && !this.isAudio) {
                const t4 = F(this.elements.container, this.config.classNames.hideControls), i4 = void 0 === e2 ? void 0 : !e2, s3 = R(this.elements.container, this.config.classNames.hideControls, i4);
                if (s3 && S.array(this.config.controls) && this.config.controls.includes("settings") && !S.empty(this.config.settings) && Pe.toggleMenu.call(this, false), s3 !== t4) {
                  const e3 = s3 ? "controlshidden" : "controlsshown";
                  Z.call(this, this.media, e3);
                }
                return !s3;
              }
              return false;
            }), e(this, "on", (e2, t4) => {
              X.call(this, this.elements.container, e2, t4);
            }), e(this, "once", (e2, t4) => {
              G.call(this, this.elements.container, e2, t4);
            }), e(this, "off", (e2, t4) => {
              J(this.elements.container, e2, t4);
            }), e(this, "destroy", (e2, t4 = false) => {
              if (!this.ready) return;
              const i4 = () => {
                document.body.style.overflow = "", this.embed = null, t4 ? (Object.keys(this.elements).length && (O(this.elements.buttons.play), O(this.elements.captions), O(this.elements.controls), O(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), S.function(e2) && e2()) : (ee.call(this), de.cancelRequests.call(this), q(this.elements.original, this.elements.container), Z.call(this, this.elements.original, "destroyed", true), S.function(e2) && e2.call(this.elements.original), this.ready = false, setTimeout(() => {
                  this.elements = null, this.media = null;
                }, 200));
              };
              this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (Fe.toggleNativeControls.call(this, true), i4()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && S.function(this.embed.destroy) && this.embed.destroy(), i4()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i4), setTimeout(i4, 200));
            }), e(this, "supports", (e2) => K.mime.call(this, e2)), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = K.touch, this.media = t3, S.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || S.nodeList(this.media) || S.array(this.media)) && (this.media = this.media[0]), this.config = x({}, Le, st.defaults, i3 || {}, (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e2) {
                return {};
              }
            })()), this.elements = { container: null, fullscreen: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: /* @__PURE__ */ new WeakMap() }, this.fullscreen = { active: false }, this.options = { speed: [], quality: [] }, this.debug = new De(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", K), S.nullOrUndefined(this.media) || !S.element(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr) return void this.debug.warn("Target already setup");
            if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
            if (!K.check().api) return void this.debug.error("Setup failed: no support");
            const s2 = this.media.cloneNode(true);
            s2.autoplay = false, this.elements.original = s2;
            const n2 = this.media.tagName.toLowerCase();
            let a2 = null, l2 = null;
            switch (n2) {
              case "div":
                if (a2 = this.media.querySelector("iframe"), S.element(a2)) {
                  if (l2 = Me(a2.getAttribute("src")), this.provider = function(e2) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e2) ? _e.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e2) ? _e.vimeo : null;
                  }(l2.toString()), this.elements.container = this.media, this.media = a2, this.elements.container.className = "", l2.search.length) {
                    const e2 = ["1", "true"];
                    e2.includes(l2.searchParams.get("autoplay")) && (this.config.autoplay = true), e2.includes(l2.searchParams.get("loop")) && (this.config.loop.active = true), this.isYouTube ? (this.config.playsinline = e2.includes(l2.searchParams.get("playsinline")), this.config.youtube.hl = l2.searchParams.get("hl")) : this.config.playsinline = true;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                if (S.empty(this.provider) || !Object.values(_e).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                this.type = je;
                break;
              case "video":
              case "audio":
                this.type = n2, this.provider = _e.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = true), this.media.hasAttribute("autoplay") && (this.config.autoplay = true), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = true), this.media.hasAttribute("muted") && (this.config.muted = true), this.media.hasAttribute("loop") && (this.config.loop.active = true);
                break;
              default:
                return void this.debug.error("Setup failed: unsupported type");
            }
            this.supported = K.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new Ve(this), this.storage = new we(this), this.media.plyr = this, S.element(this.elements.container) || (this.elements.container = $("div"), L(this.media, this.elements.container)), Fe.migrateStyles.call(this), Fe.addStyleHook.call(this), Xe.setup.call(this), this.config.debug && X.call(this, this.elements.container, this.config.events.join(" "), (e2) => {
              this.debug.log(`event: ${e2.type}`);
            }), this.fullscreen = new He(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Je(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => ie(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))) : this.debug.error("Setup failed: no support");
          }
          get isHTML5() {
            return this.provider === _e.html5;
          }
          get isEmbed() {
            return this.isYouTube || this.isVimeo;
          }
          get isYouTube() {
            return this.provider === _e.youtube;
          }
          get isVimeo() {
            return this.provider === _e.vimeo;
          }
          get isVideo() {
            return this.type === je;
          }
          get isAudio() {
            return this.type === Oe;
          }
          get playing() {
            return Boolean(this.ready && !this.paused && !this.ended);
          }
          get paused() {
            return Boolean(this.media.paused);
          }
          get stopped() {
            return Boolean(this.paused && 0 === this.currentTime);
          }
          get ended() {
            return Boolean(this.media.ended);
          }
          set currentTime(e2) {
            if (!this.duration) return;
            const t3 = S.number(e2) && e2 > 0;
            this.media.currentTime = t3 ? Math.min(e2, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
          }
          get currentTime() {
            return Number(this.media.currentTime);
          }
          get buffered() {
            const { buffered: e2 } = this.media;
            return S.number(e2) ? e2 : e2 && e2.length && this.duration > 0 ? e2.end(0) / this.duration : 0;
          }
          get seeking() {
            return Boolean(this.media.seeking);
          }
          get duration() {
            const e2 = parseFloat(this.config.duration), t3 = (this.media || {}).duration, i3 = S.number(t3) && t3 !== 1 / 0 ? t3 : 0;
            return e2 || i3;
          }
          set volume(e2) {
            let t3 = e2;
            S.string(t3) && (t3 = Number(t3)), S.number(t3) || (t3 = this.storage.get("volume")), S.number(t3) || ({ volume: t3 } = this.config), t3 > 1 && (t3 = 1), t3 < 0 && (t3 = 0), this.config.volume = t3, this.media.volume = t3, !S.empty(e2) && this.muted && t3 > 0 && (this.muted = false);
          }
          get volume() {
            return Number(this.media.volume);
          }
          set muted(e2) {
            let t3 = e2;
            S.boolean(t3) || (t3 = this.storage.get("muted")), S.boolean(t3) || (t3 = this.config.muted), this.config.muted = t3, this.media.muted = t3;
          }
          get muted() {
            return Boolean(this.media.muted);
          }
          get hasAudio() {
            return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)));
          }
          set speed(e2) {
            let t3 = null;
            S.number(e2) && (t3 = e2), S.number(t3) || (t3 = this.storage.get("speed")), S.number(t3) || (t3 = this.config.speed.selected);
            const { minimumSpeed: i3, maximumSpeed: s2 } = this;
            t3 = Ge(t3, i3, s2), this.config.speed.selected = t3, setTimeout(() => {
              this.media && (this.media.playbackRate = t3);
            }, 0);
          }
          get speed() {
            return Number(this.media.playbackRate);
          }
          get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? 0.5 : 0.0625;
          }
          get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
          }
          set quality(e2) {
            const t3 = this.config.quality, i3 = this.options.quality;
            if (!i3.length) return;
            let s2 = [!S.empty(e2) && Number(e2), this.storage.get("quality"), t3.selected, t3.default].find(S.number), n2 = true;
            if (!i3.includes(s2)) {
              const e3 = ne(i3, s2);
              this.debug.warn(`Unsupported quality option: ${s2}, using ${e3} instead`), s2 = e3, n2 = false;
            }
            t3.selected = s2, this.media.quality = s2, n2 && this.storage.set({ quality: s2 });
          }
          get quality() {
            return this.media.quality;
          }
          set loop(e2) {
            const t3 = S.boolean(e2) ? e2 : this.config.loop.active;
            this.config.loop.active = t3, this.media.loop = t3;
          }
          get loop() {
            return Boolean(this.media.loop);
          }
          set source(e2) {
            it.change.call(this, e2);
          }
          get source() {
            return this.media.currentSrc;
          }
          get download() {
            const { download: e2 } = this.config.urls;
            return S.url(e2) ? e2 : this.source;
          }
          set download(e2) {
            S.url(e2) && (this.config.urls.download = e2, Pe.setDownloadUrl.call(this));
          }
          set poster(e2) {
            this.isVideo ? Fe.setPoster.call(this, e2, false).catch(() => {
            }) : this.debug.warn("Poster can only be set for video");
          }
          get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
          }
          get ratio() {
            if (!this.isVideo) return null;
            const e2 = oe(ce.call(this));
            return S.array(e2) ? e2.join(":") : e2;
          }
          set ratio(e2) {
            this.isVideo ? S.string(e2) && re(e2) ? (this.config.ratio = oe(e2), ue.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e2})`) : this.debug.warn("Aspect ratio can only be set for video");
          }
          set autoplay(e2) {
            this.config.autoplay = S.boolean(e2) ? e2 : this.config.autoplay;
          }
          get autoplay() {
            return Boolean(this.config.autoplay);
          }
          toggleCaptions(e2) {
            xe.toggle.call(this, e2, false);
          }
          set currentTrack(e2) {
            xe.set.call(this, e2, false), xe.setup.call(this);
          }
          get currentTrack() {
            const { toggled: e2, currentTrack: t3 } = this.captions;
            return e2 ? t3 : -1;
          }
          set language(e2) {
            xe.setLanguage.call(this, e2, false);
          }
          get language() {
            return (xe.getCurrentTrack.call(this) || {}).language;
          }
          set pip(e2) {
            if (!K.pip) return;
            const t3 = S.boolean(e2) ? e2 : !this.pip;
            S.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t3 ? Ie : $e), S.function(this.media.requestPictureInPicture) && (!this.pip && t3 ? this.media.requestPictureInPicture() : this.pip && !t3 && document.exitPictureInPicture());
          }
          get pip() {
            return K.pip ? S.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ie : null;
          }
          setPreviewThumbnails(e2) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e2), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this));
          }
          static supported(e2, t3) {
            return K.check(e2, t3);
          }
          static loadSprite(e2, t3) {
            return ke(e2, t3);
          }
          static setup(e2, t3 = {}) {
            let i3 = null;
            return S.string(e2) ? i3 = Array.from(document.querySelectorAll(e2)) : S.nodeList(e2) ? i3 = Array.from(e2) : S.array(e2) && (i3 = e2.filter(S.element)), S.empty(i3) ? null : i3.map((e3) => new st(e3, t3));
          }
        }
        var nt;
        return st.defaults = (nt = Le, JSON.parse(JSON.stringify(nt))), st;
      });
    }
  });

  // src/index.js
  init_live_reload();

  // src/utilities.js
  init_live_reload();

  // node_modules/split-type/dist/index.js
  init_live_reload();
  (function() {
    function append() {
      var length = arguments.length;
      for (var i2 = 0; i2 < length; i2++) {
        var node = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
        if (node.nodeType === 1 || node.nodeType === 11) this.appendChild(node);
        else this.appendChild(document.createTextNode(String(node)));
      }
    }
    function replaceChildren() {
      while (this.lastChild) {
        this.removeChild(this.lastChild);
      }
      if (arguments.length) this.append.apply(this, arguments);
    }
    function replaceWith() {
      var parent = this.parentNode;
      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }
      var i2 = nodes.length;
      if (!parent) return;
      if (!i2) parent.removeChild(this);
      while (i2--) {
        var node = nodes[i2];
        if (typeof node !== "object") {
          node = this.ownerDocument.createTextNode(node);
        } else if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
        if (!i2) {
          parent.replaceChild(node, this);
        } else {
          parent.insertBefore(this.previousSibling, node);
        }
      }
    }
    if (typeof Element !== "undefined") {
      if (!Element.prototype.append) {
        Element.prototype.append = append;
        DocumentFragment.prototype.append = append;
      }
      if (!Element.prototype.replaceChildren) {
        Element.prototype.replaceChildren = replaceChildren;
        DocumentFragment.prototype.replaceChildren = replaceChildren;
      }
      if (!Element.prototype.replaceWith) {
        Element.prototype.replaceWith = replaceWith;
        DocumentFragment.prototype.replaceWith = replaceWith;
      }
    }
  })();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i2) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function extend(target, object) {
    return Object.getOwnPropertyNames(Object(target)).reduce(function(extended, key) {
      var currentValue = Object.getOwnPropertyDescriptor(Object(target), key);
      var newValue = Object.getOwnPropertyDescriptor(Object(object), key);
      return Object.defineProperty(extended, key, newValue || currentValue);
    }, {});
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isArray(value) {
    return Array.isArray(value);
  }
  function parseSettings() {
    var settings = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var object = extend(settings);
    var types;
    if (object.types !== void 0) {
      types = object.types;
    } else if (object.split !== void 0) {
      types = object.split;
    }
    if (types !== void 0) {
      object.types = (isString(types) || isArray(types) ? String(types) : "").split(",").map(function(type) {
        return String(type).trim();
      }).filter(function(type) {
        return /((line)|(word)|(char))/i.test(type);
      });
    }
    if (object.absolute || object.position) {
      object.absolute = object.absolute || /absolute/.test(settings.position);
    }
    return object;
  }
  function parseTypes(value) {
    var types = isString(value) || isArray(value) ? String(value) : "";
    return {
      none: !types,
      lines: /line/i.test(types),
      words: /word/i.test(types),
      chars: /char/i.test(types)
    };
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isNode(input) {
    return isObject(input) && /^(1|3|11)$/.test(input.nodeType);
  }
  function isLength(value) {
    return typeof value === "number" && value > -1 && value % 1 === 0;
  }
  function isArrayLike(value) {
    return isObject(value) && isLength(value.length);
  }
  function toArray(value) {
    if (isArray(value)) return value;
    if (value == null) return [];
    return isArrayLike(value) ? Array.prototype.slice.call(value) : [value];
  }
  function getTargetElements(target) {
    var elements = target;
    if (isString(target)) {
      if (/^(#[a-z]\w+)$/.test(target.trim())) {
        elements = document.getElementById(target.trim().slice(1));
      } else {
        elements = document.querySelectorAll(target);
      }
    }
    return toArray(elements).reduce(function(result, element) {
      return [].concat(_toConsumableArray(result), _toConsumableArray(toArray(element).filter(isNode)));
    }, []);
  }
  var entries = Object.entries;
  var expando = "_splittype";
  var cache = {};
  var uid = 0;
  function set(owner, key, value) {
    if (!isObject(owner)) {
      console.warn("[data.set] owner is not an object");
      return null;
    }
    var id = owner[expando] || (owner[expando] = ++uid);
    var data = cache[id] || (cache[id] = {});
    if (value === void 0) {
      if (!!key && Object.getPrototypeOf(key) === Object.prototype) {
        cache[id] = _objectSpread2(_objectSpread2({}, data), key);
      }
    } else if (key !== void 0) {
      data[key] = value;
    }
    return value;
  }
  function get(owner, key) {
    var id = isObject(owner) ? owner[expando] : null;
    var data = id && cache[id] || {};
    if (key === void 0) {
      return data;
    }
    return data[key];
  }
  function remove(element) {
    var id = element && element[expando];
    if (id) {
      delete element[id];
      delete cache[id];
    }
  }
  function clear() {
    Object.keys(cache).forEach(function(key) {
      delete cache[key];
    });
  }
  function cleanup() {
    entries(cache).forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], _ref2$ = _ref2[1], isRoot = _ref2$.isRoot, isSplit = _ref2$.isSplit;
      if (!isRoot || !isSplit) {
        cache[id] = null;
        delete cache[id];
      }
    });
  }
  function toWords(value) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ";
    var string = value ? String(value) : "";
    return string.trim().replace(/\s+/g, " ").split(separator);
  }
  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
  var rsComboSymbolsRange = "\\u20d0-\\u20f0";
  var rsVarRange = "\\ufe0e\\ufe0f";
  var rsAstral = "[".concat(rsAstralRange, "]");
  var rsCombo = "[".concat(rsComboMarksRange).concat(rsComboSymbolsRange, "]");
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
  var rsNonAstral = "[^".concat(rsAstralRange, "]");
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  var rsZWJ = "\\u200d";
  var reOptMod = "".concat(rsModifier, "?");
  var rsOptVar = "[".concat(rsVarRange, "]?");
  var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsSymbol = "(?:".concat(["".concat(rsNonAstral).concat(rsCombo, "?"), rsCombo, rsRegional, rsSurrPair, rsAstral].join("|"), "\n)");
  var reUnicode = RegExp("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol).concat(rsSeq), "g");
  var unicodeRange = [rsZWJ, rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange];
  var reHasUnicode = RegExp("[".concat(unicodeRange.join(""), "]"));
  function asciiToArray(string) {
    return string.split("");
  }
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function toString(value) {
    return value == null ? "" : String(value);
  }
  function toChars(string) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    string = toString(string);
    if (string && isString(string)) {
      if (!separator && hasUnicode(string)) {
        return stringToArray(string);
      }
    }
    return string.split(separator);
  }
  function createElement(name, attributes) {
    var element = document.createElement(name);
    if (!attributes) {
      return element;
    }
    Object.keys(attributes).forEach(function(attribute) {
      var rawValue = attributes[attribute];
      var value = isString(rawValue) ? rawValue.trim() : rawValue;
      if (value === null || value === "") return;
      if (attribute === "children") {
        element.append.apply(element, _toConsumableArray(toArray(value)));
      } else {
        element.setAttribute(attribute, value);
      }
    });
    return element;
  }
  var defaults = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: false,
    tagName: "div"
  };
  function splitWordsAndChars(textNode, settings) {
    settings = extend(defaults, settings);
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var VALUE = textNode.nodeValue;
    var splitText = document.createDocumentFragment();
    var words = [];
    var chars = [];
    if (/^\s/.test(VALUE)) {
      splitText.append(" ");
    }
    words = toWords(VALUE).reduce(function(result, WORD, idx, arr) {
      var wordElement;
      var characterElementsForCurrentWord;
      if (types.chars) {
        characterElementsForCurrentWord = toChars(WORD).map(function(CHAR) {
          var characterElement = createElement(TAG_NAME, {
            "class": "".concat(settings.splitClass, " ").concat(settings.charClass),
            style: "display: inline-block;",
            children: CHAR
          });
          set(characterElement, "isChar", true);
          chars = [].concat(_toConsumableArray(chars), [characterElement]);
          return characterElement;
        });
      }
      if (types.words || types.lines) {
        wordElement = createElement(TAG_NAME, {
          "class": "".concat(settings.wordClass, " ").concat(settings.splitClass),
          style: "display: inline-block; ".concat(types.words && settings.absolute ? "position: relative;" : ""),
          children: types.chars ? characterElementsForCurrentWord : WORD
        });
        set(wordElement, {
          isWord: true,
          isWordStart: true,
          isWordEnd: true
        });
        splitText.appendChild(wordElement);
      } else {
        characterElementsForCurrentWord.forEach(function(characterElement) {
          splitText.appendChild(characterElement);
        });
      }
      if (idx < arr.length - 1) {
        splitText.append(" ");
      }
      return types.words ? result.concat(wordElement) : result;
    }, []);
    if (/\s$/.test(VALUE)) {
      splitText.append(" ");
    }
    textNode.replaceWith(splitText);
    return {
      words,
      chars
    };
  }
  function split(node, settings) {
    var type = node.nodeType;
    var wordsAndChars = {
      words: [],
      chars: []
    };
    if (!/(1|3|11)/.test(type)) {
      return wordsAndChars;
    }
    if (type === 3 && /\S/.test(node.nodeValue)) {
      return splitWordsAndChars(node, settings);
    }
    var childNodes = toArray(node.childNodes);
    if (childNodes.length) {
      set(node, "isSplit", true);
      if (!get(node).isRoot) {
        node.style.display = "inline-block";
        node.style.position = "relative";
        var nextSibling = node.nextSibling;
        var prevSibling = node.previousSibling;
        var text = node.textContent || "";
        var textAfter = nextSibling ? nextSibling.textContent : " ";
        var textBefore = prevSibling ? prevSibling.textContent : " ";
        set(node, {
          isWordEnd: /\s$/.test(text) || /^\s/.test(textAfter),
          isWordStart: /^\s/.test(text) || /\s$/.test(textBefore)
        });
      }
    }
    return childNodes.reduce(function(result, child) {
      var _split = split(child, settings), words = _split.words, chars = _split.chars;
      return {
        words: [].concat(_toConsumableArray(result.words), _toConsumableArray(words)),
        chars: [].concat(_toConsumableArray(result.chars), _toConsumableArray(chars))
      };
    }, wordsAndChars);
  }
  function getPosition(node, isWord, settings, scrollPos) {
    if (!settings.absolute) {
      return {
        top: isWord ? node.offsetTop : null
      };
    }
    var parent = node.offsetParent;
    var _scrollPos = _slicedToArray(scrollPos, 2), scrollX = _scrollPos[0], scrollY = _scrollPos[1];
    var parentX = 0;
    var parentY = 0;
    if (parent && parent !== document.body) {
      var parentRect = parent.getBoundingClientRect();
      parentX = parentRect.x + scrollX;
      parentY = parentRect.y + scrollY;
    }
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height, x = _node$getBoundingClie.x, y = _node$getBoundingClie.y;
    var top = y + scrollY - parentY;
    var left = x + scrollX - parentX;
    return {
      width,
      height,
      top,
      left
    };
  }
  function unSplitWords(element) {
    if (!get(element).isWord) {
      toArray(element.children).forEach(function(child) {
        return unSplitWords(child);
      });
    } else {
      remove(element);
      element.replaceWith.apply(element, _toConsumableArray(element.childNodes));
    }
  }
  var createFragment = function createFragment2() {
    return document.createDocumentFragment();
  };
  function repositionAfterSplit(element, settings, scrollPos) {
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var nodes = element.getElementsByTagName("*");
    var wordsInEachLine = [];
    var wordsInCurrentLine = [];
    var lineOffsetY = null;
    var elementHeight;
    var elementWidth;
    var contentBox;
    var lines = [];
    var parent = element.parentElement;
    var nextSibling = element.nextElementSibling;
    var splitText = createFragment();
    var cs = window.getComputedStyle(element);
    var align = cs.textAlign;
    var fontSize = parseFloat(cs.fontSize);
    var lineThreshold = fontSize * 0.2;
    if (settings.absolute) {
      contentBox = {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth
      };
      elementWidth = element.offsetWidth;
      elementHeight = element.offsetHeight;
      set(element, {
        cssWidth: element.style.width,
        cssHeight: element.style.height
      });
    }
    toArray(nodes).forEach(function(node) {
      var isWordLike = node.parentElement === element;
      var _getPosition = getPosition(node, isWordLike, settings, scrollPos), width = _getPosition.width, height = _getPosition.height, top = _getPosition.top, left = _getPosition.left;
      if (/^br$/i.test(node.nodeName)) return;
      if (types.lines && isWordLike) {
        if (lineOffsetY === null || top - lineOffsetY >= lineThreshold) {
          lineOffsetY = top;
          wordsInEachLine.push(wordsInCurrentLine = []);
        }
        wordsInCurrentLine.push(node);
      }
      if (settings.absolute) {
        set(node, {
          top,
          left,
          width,
          height
        });
      }
    });
    if (parent) {
      parent.removeChild(element);
    }
    if (types.lines) {
      lines = wordsInEachLine.map(function(wordsInThisLine) {
        var lineElement = createElement(TAG_NAME, {
          "class": "".concat(settings.splitClass, " ").concat(settings.lineClass),
          style: "display: block; text-align: ".concat(align, "; width: 100%;")
        });
        set(lineElement, "isLine", true);
        var lineDimensions = {
          height: 0,
          top: 1e4
        };
        splitText.appendChild(lineElement);
        wordsInThisLine.forEach(function(wordOrElement, idx, arr) {
          var _data$get = get(wordOrElement), isWordEnd = _data$get.isWordEnd, top = _data$get.top, height = _data$get.height;
          var next = arr[idx + 1];
          lineDimensions.height = Math.max(lineDimensions.height, height);
          lineDimensions.top = Math.min(lineDimensions.top, top);
          lineElement.appendChild(wordOrElement);
          if (isWordEnd && get(next).isWordStart) {
            lineElement.append(" ");
          }
        });
        if (settings.absolute) {
          set(lineElement, {
            height: lineDimensions.height,
            top: lineDimensions.top
          });
        }
        return lineElement;
      });
      if (!types.words) {
        unSplitWords(splitText);
      }
      element.replaceChildren(splitText);
    }
    if (settings.absolute) {
      element.style.width = "".concat(element.style.width || elementWidth, "px");
      element.style.height = "".concat(elementHeight, "px");
      toArray(nodes).forEach(function(node) {
        var _data$get2 = get(node), isLine = _data$get2.isLine, top = _data$get2.top, left = _data$get2.left, width = _data$get2.width, height = _data$get2.height;
        var parentData = get(node.parentElement);
        var isChildOfLineNode = !isLine && parentData.isLine;
        node.style.top = "".concat(isChildOfLineNode ? top - parentData.top : top, "px");
        node.style.left = isLine ? "".concat(contentBox.left, "px") : "".concat(left - (isChildOfLineNode ? contentBox.left : 0), "px");
        node.style.height = "".concat(height, "px");
        node.style.width = isLine ? "".concat(contentBox.width, "px") : "".concat(width, "px");
        node.style.position = "absolute";
      });
    }
    if (parent) {
      if (nextSibling) parent.insertBefore(element, nextSibling);
      else parent.appendChild(element);
    }
    return lines;
  }
  var _defaults = extend(defaults, {});
  var SplitType = /* @__PURE__ */ function() {
    _createClass(SplitType2, null, [{
      key: "clearData",
      /**
       * CLears all data
       */
      value: function clearData() {
        clear();
      }
      /**
       * The default settings for all splitType instances
       * @static
       */
    }, {
      key: "setDefaults",
      /**
       * Sets the default settings for all SplitType instances.
       * The provided object will be merged with the existing defaults objects.
       *
       * @param {Object} settings an object containing the settings to override
       * @returns {Object} the new default settings
       * @public
       * @static
       * @example
       * SplitType.setDefaults({ "position": "absolute" })
       */
      value: function setDefaults(options) {
        _defaults = extend(_defaults, parseSettings(options));
        return defaults;
      }
      /**
       * Revert target elements to their original html content
       * Has no effect on that
       *
       * @param {any} elements The target elements to revert. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @static
       */
    }, {
      key: "revert",
      value: function revert(elements) {
        getTargetElements(elements).forEach(function(element) {
          var _data$get = get(element), isSplit = _data$get.isSplit, html = _data$get.html, cssWidth = _data$get.cssWidth, cssHeight = _data$get.cssHeight;
          if (isSplit) {
            element.innerHTML = html;
            element.style.width = cssWidth || "";
            element.style.height = cssHeight || "";
            remove(element);
          }
        });
      }
      /**
       * Creates a new SplitType instance
       * This static method provides a way to create a `SplitType` instance without
       * using the `new` keyword.
       *
       * @param {any} target The target elements to split. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @param {Object} [options] Settings for the SplitType instance
       * @return {SplitType} the SplitType instance
       * @static
       */
    }, {
      key: "create",
      value: function create(target, options) {
        return new SplitType2(target, options);
      }
      /**
       * Creates a new `SplitType` instance
       *
       * @param {any} elements The target elements to split. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @param {Object} [options] Settings for the SplitType instance
       */
    }, {
      key: "data",
      /**
       * The internal data store
       */
      get: function get2() {
        return cache;
      }
    }, {
      key: "defaults",
      get: function get2() {
        return _defaults;
      },
      set: function set2(options) {
        _defaults = extend(_defaults, parseSettings(options));
      }
    }]);
    function SplitType2(elements, options) {
      _classCallCheck(this, SplitType2);
      this.isSplit = false;
      this.settings = extend(_defaults, parseSettings(options));
      this.elements = getTargetElements(elements);
      this.split();
    }
    _createClass(SplitType2, [{
      key: "split",
      value: function split$1(options) {
        var _this = this;
        this.revert();
        this.elements.forEach(function(element) {
          set(element, "html", element.innerHTML);
        });
        this.lines = [];
        this.words = [];
        this.chars = [];
        var scrollPos = [window.pageXOffset, window.pageYOffset];
        if (options !== void 0) {
          this.settings = extend(this.settings, parseSettings(options));
        }
        var types = parseTypes(this.settings.types);
        if (types.none) {
          return;
        }
        this.elements.forEach(function(element) {
          set(element, "isRoot", true);
          var _split2 = split(element, _this.settings), words = _split2.words, chars = _split2.chars;
          _this.words = [].concat(_toConsumableArray(_this.words), _toConsumableArray(words));
          _this.chars = [].concat(_toConsumableArray(_this.chars), _toConsumableArray(chars));
        });
        this.elements.forEach(function(element) {
          if (types.lines || _this.settings.absolute) {
            var lines = repositionAfterSplit(element, _this.settings, scrollPos);
            _this.lines = [].concat(_toConsumableArray(_this.lines), _toConsumableArray(lines));
          }
        });
        this.isSplit = true;
        window.scrollTo(scrollPos[0], scrollPos[1]);
        cleanup();
      }
      /**
       * Reverts target element(s) back to their original html content
       * Deletes all stored data associated with the target elements
       * Resets the properties on the splitType instance
       *
       * @public
       */
    }, {
      key: "revert",
      value: function revert() {
        if (this.isSplit) {
          this.lines = null;
          this.words = null;
          this.chars = null;
          this.isSplit = false;
        }
        SplitType2.revert(this.elements);
      }
    }]);
    return SplitType2;
  }();

  // src/utilities.js
  var stopScroll = function(lenis) {
    if (lenis) {
      lenis.stop();
    } else {
      const body = document.querySelector("body");
      const NO_SCROLL_CLASS = "no-scroll";
      body.classList.add(NO_SCROLL_CLASS);
    }
  };
  var startScroll = function(lenis) {
    if (lenis) {
      lenis.start();
    } else {
      const body = document.querySelector("body");
      const NO_SCROLL_CLASS = "no-scroll";
      body.classList.remove(NO_SCROLL_CLASS);
    }
  };
  var attr = function(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  };
  var attrIfSet = function(item2, attributeName, defaultValue) {
    const hasAttribute = item2.hasAttribute(attributeName);
    const attributeValue = attr(defaultValue, item2.getAttribute(attributeName));
    if (hasAttribute) {
      return attributeValue;
    } else {
      return;
    }
  };
  var runSplit = function(text, types = "lines, words") {
    if (!text) return;
    typeSplit = new SplitType(text, {
      types
    });
    return typeSplit;
  };
  var checkBreakpoints = function(item2, animationID, gsapContext) {
    if (!item2 || !animationID || !gsapContext) {
      console.error(`GSAP checkBreakpoints Error in ${animationID}`);
      return;
    }
    let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
    if (isMobile === void 0 || isTablet === void 0 || isDesktop === void 0) {
      console.error(`GSAP Match Media Conditions Not Defined`);
      return;
    }
    const RUN_DESKTOP = `data-ix-${animationID}-desktop`;
    const RUN_TABLET = `data-ix-${animationID}-tablet`;
    const RUN_MOBILE = `data-ix-${animationID}-mobile`;
    const RUN_ALL = `data-ix-${animationID}-run`;
    runAll = attr(true, item2.getAttribute(RUN_ALL));
    runMobile = attr(true, item2.getAttribute(RUN_MOBILE));
    runTablet = attr(true, item2.getAttribute(RUN_TABLET));
    runDesktop = attr(true, item2.getAttribute(RUN_DESKTOP));
    if (runAll === false) return false;
    if (runMobile === false && isMobile) return false;
    if (runTablet === false && isTablet) return false;
    if (runDesktop === false && isDesktop) return false;
    return true;
  };
  var getClipDirection = function(attributeValue) {
    let clipMask = attributeValue;
    const clipDirections = {
      left: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      right: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      top: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      bottom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      full: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    };
    if (attributeValue === "left") {
      clipMask = clipDirections.left;
    }
    if (attributeValue === "right") {
      clipMask = clipDirections.right;
    }
    if (attributeValue === "top") {
      clipMask = clipDirections.top;
    }
    if (attributeValue === "bottom") {
      clipMask = clipDirections.bottom;
    }
    if (attributeValue === "full") {
      clipMask = clipDirections.full;
    }
    return clipMask;
  };

  // src/interactions/accordion.js
  init_live_reload();
  var accordion = function(gsapContext) {
    const ANIMATION_ID = "accordion";
    const WRAP = '[data-ix-accordion="wrap"]';
    const ITEM = '[data-ix-accordion="item"]';
    const TOP = '[data-ix-accordion="top"]';
    const OPTION_FIRST_OPEN = "data-ix-accordion-first-open";
    const OPTION_ONE_ACTIVE = "data-ix-accordion-one-active";
    const OPTION_KEEP_ONE_OPEN = "data-ix-accordion-keep-one-open";
    const OPTION_HOVER_OPEN = "data-ix-accordion-hover";
    const ACTIVE_CLASS = "is-active";
    const accordionLists = gsap.utils.toArray(WRAP);
    const openAccordion = function(item2, open = true) {
      if (open === true) {
        item2.classList.add(ACTIVE_CLASS);
      } else {
        item2.classList.remove(ACTIVE_CLASS);
      }
    };
    if (accordionLists.length === 0 || accordionLists === void 0) return;
    accordionLists.forEach((list) => {
      let runOnBreakpoint = checkBreakpoints(list, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      let firstOpen = attr(false, list.getAttribute(OPTION_FIRST_OPEN));
      let oneActive = attr(false, list.getAttribute(OPTION_ONE_ACTIVE));
      let keepOneOpen = attr(false, list.getAttribute(OPTION_KEEP_ONE_OPEN));
      let hoverOnly = attr(false, list.getAttribute(OPTION_HOVER_OPEN));
      const accordionItems = Array.from(list.querySelectorAll(ITEM));
      if (accordionItems.length === 0) return;
      const firstItem = list.firstElementChild;
      if (firstOpen) {
        openAccordion(firstItem);
      }
      if (!hoverOnly) {
        list.addEventListener("click", function(e) {
          const clickedEl = e.target.closest(TOP);
          if (!clickedEl) return;
          const clickedItem = clickedEl.closest(ITEM);
          let clickedItemAlreadyActive = clickedItem.classList.contains(ACTIVE_CLASS);
          if (!clickedItemAlreadyActive) {
            if (oneActive) {
              accordionItems.forEach((item2) => {
                if (item2 === clickedItem) {
                  openAccordion(item2);
                } else {
                  openAccordion(item2, false);
                }
              });
            }
            if (!oneActive) {
              openAccordion(clickedItem);
            }
          }
          if (clickedItemAlreadyActive && !keepOneOpen) {
            openAccordion(clickedItem, false);
          }
          if (clickedItemAlreadyActive && keepOneActive) {
            const activeItems = accordionItems.filter(function(item2) {
              return item2.classList.contains(activeClass);
            });
            if (activeItems.length > 1) {
              openAccordion(item, false);
            }
          }
        });
      }
      if (hoverOnly) {
        accordionItems.forEach((item2) => {
          item2.addEventListener("mouseover", function() {
            openAccordion(item2);
          });
          item2.addEventListener("mouseout", function() {
            openAccordion(item2, false);
          });
        });
      }
    });
  };

  // src/interactions/click-active.js
  init_live_reload();
  var clickActive = function(gsapContext) {
    const ANIMATION_ID = "clickactive";
    const WRAP = '[data-ix-clickactive="wrap"]';
    const TRIGGER = '[data-ix-clickactive="trigger"]';
    const TARGET = '[data-ix-clickactive="target"]';
    const ID = "data-ix-clickactive-id";
    const OPTION_ACTIVE_CLASS = "data-ix-clickactive-class";
    const OPTION_START_ACTIVE = "data-ix-clickactive-start-active";
    const OPTION_FIRST_ACTIVE = "data-ix-clickactive-first-active";
    const OPTION_ONE_ACTIVE = "data-ix-clickactive-one-active";
    const OPTION_KEEP_ONE_ACTIVE = "data-ix-clickactive-keep-one-active";
    const INTERACTION_DURATION = 800;
    const ACTIVE_CLASS = "is-active";
    const clickActiveList = function(rootElement) {
      const triggers = Array.from(rootElement.querySelectorAll(TRIGGER));
      let activeClass2 = ACTIVE_CLASS;
      let firstOpen = false;
      let oneActive = false;
      let keepOneActive2 = false;
      if (rootElement !== document) {
        activeClass2 = attr(ACTIVE_CLASS, rootElement.getAttribute(OPTION_ACTIVE_CLASS));
        firstOpen = attr(false, rootElement.getAttribute(OPTION_FIRST_ACTIVE));
        oneActive = attr(false, rootElement.getAttribute(OPTION_ONE_ACTIVE));
        keepOneActive2 = attr(false, rootElement.getAttribute(OPTION_KEEP_ONE_ACTIVE));
        let runOnBreakpoint = checkBreakpoints(rootElement, ANIMATION_ID, gsapContext);
        if (runOnBreakpoint === false) return;
      } else {
      }
      const activateItems = function(item2, makeActive = true) {
        if (!item2) return;
        let hasTarget = true;
        const itemID = item2.getAttribute(ID);
        const targetEl = rootElement.querySelector(`${TARGET}[${ID}="${itemID}"]`);
        if (!itemID || !targetEl) {
          hasTarget = false;
        }
        if (makeActive) {
          item2.classList.add(activeClass2);
          if (hasTarget) {
            targetEl.classList.add(activeClass2);
          }
        } else {
          item2.classList.remove(activeClass2);
          if (hasTarget) {
            targetEl.classList.remove(activeClass2);
          }
        }
      };
      triggers.forEach((item2) => {
        if (!item2) return;
        let startActive = attr(false, item2.getAttribute(OPTION_START_ACTIVE));
        if (startActive) {
          activateItems(item2);
        } else {
          activateItems(item2, false);
        }
        item2.addEventListener("click", function(e) {
          let itemIsActive = item2.classList.contains(ACTIVE_CLASS);
          if (!itemIsActive) {
            if (oneActive) {
              triggers.forEach((itemElement) => {
                if (itemElement === item2) {
                  activateItems(itemElement);
                } else {
                  activateItems(itemElement, false);
                }
              });
            }
            if (!oneActive) {
              activateItems(item2);
            }
          }
          if (itemIsActive && !keepOneActive2) {
            activateItems(item2, false);
          }
          if (itemIsActive && keepOneActive2) {
            const activeItems = triggers.filter(function(item3) {
              return item3.classList.contains(activeClass2);
            });
            if (activeItems.length > 1) {
              activateItems(item2, false);
            }
          }
          if (gsap.ScrollTrigger !== void 0) {
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, INTERACTION_DURATION);
          }
        });
      });
      const firstItem = triggers[0];
      if (firstOpen) {
        activateItems(firstItem);
      }
    };
    const clickWraps = gsap.utils.toArray(WRAP);
    if (clickWraps.length === 0 || clickWraps === void 0) {
      clickActiveList(document);
    } else {
      clickWraps.forEach((wrap) => {
        clickActiveList(wrap);
      });
    }
  };

  // src/interactions/count-up.js
  init_live_reload();

  // node_modules/countup.js/dist/countUp.min.js
  init_live_reload();
  var t = function() {
    return t = Object.assign || function(t2) {
      for (var i2, n = 1, s = arguments.length; n < s; n++) for (var a in i2 = arguments[n]) Object.prototype.hasOwnProperty.call(i2, a) && (t2[a] = i2[a]);
      return t2;
    }, t.apply(this, arguments);
  };
  var i = function() {
    function i2(i3, n, s) {
      var a = this;
      this.endVal = n, this.options = s, this.version = "2.8.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t2) {
        a.startTime || (a.startTime = t2);
        var i4 = t2 - a.startTime;
        a.remaining = a.duration - i4, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i4, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i4, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i4 / a.duration);
        var n2 = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
        a.frameVal = n2 ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i4 < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
      }, this.formatNumber = function(t2) {
        var i4, n2, s2, e, o = t2 < 0 ? "-" : "";
        i4 = Math.abs(t2).toFixed(a.options.decimalPlaces);
        var r = (i4 += "").split(".");
        if (n2 = r[0], s2 = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
          e = "";
          for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u) a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = a.options.separator + e), h++, e = n2[p - u - 1] + e;
          n2 = e;
        }
        return a.options.numerals && a.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t3) {
          return a.options.numerals[+t3];
        }), s2 = s2.replace(/[0-9]/g, function(t3) {
          return a.options.numerals[+t3];
        })), o + a.options.prefix + n2 + s2 + a.options.suffix;
      }, this.easeOutExpo = function(t2, i4, n2, s2) {
        return n2 * (1 - Math.pow(2, -10 * t2 / s2)) * 1024 / 1023 + i4;
      }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el = "string" == typeof i3 ? document.getElementById(i3) : i3, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, i3) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
        return a.handleScroll(a);
      }), window.onscroll = function() {
        window.onScrollFns.forEach(function(t2) {
          return t2();
        });
      }, this.handleScroll(this)));
    }
    return i2.prototype.handleScroll = function(t2) {
      if (t2 && window && !t2.once) {
        var i3 = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
        a < i3 && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
          return t2.start();
        }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i3) && !t2.paused && t2.reset();
      }
    }, i2.prototype.determineDirectionAndSmartEasing = function() {
      var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
      this.countDown = this.startVal > t2;
      var i3 = t2 - this.startVal;
      if (Math.abs(i3) > this.options.smartEasingThreshold && this.options.useEasing) {
        this.finalEndVal = t2;
        var n = this.countDown ? 1 : -1;
        this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
      } else this.endVal = t2, this.finalEndVal = null;
      null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
    }, i2.prototype.start = function(t2) {
      this.error || (this.options.onStartCallback && this.options.onStartCallback(), t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
    }, i2.prototype.pauseResume = function() {
      this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
    }, i2.prototype.reset = function() {
      cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
    }, i2.prototype.update = function(t2) {
      cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
    }, i2.prototype.printValue = function(t2) {
      var i3;
      if (this.el) {
        var n = this.formattingFn(t2);
        if (null === (i3 = this.options.plugin) || void 0 === i3 ? void 0 : i3.render) this.options.plugin.render(this.el, n);
        else if ("INPUT" === this.el.tagName) this.el.value = n;
        else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
      }
    }, i2.prototype.ensureNumber = function(t2) {
      return "number" == typeof t2 && !isNaN(t2);
    }, i2.prototype.validateValue = function(t2) {
      var i3 = Number(t2);
      return this.ensureNumber(i3) ? i3 : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
    }, i2.prototype.resetDuration = function() {
      this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
    }, i2;
  }();

  // src/interactions/count-up.js
  var countUp = function(gsapContext) {
    const ANIMATION_ID = "countup";
    const ITEM = '[data-ix-countup="item"]';
    const OPTION_START = "data-ix-countup-start";
    const OPTION_DURATION = "data-ix-countup-duration";
    const OPTION_ACTIVE_CLASS = "data-ix-countup-active";
    const ACTIVE_CLASS = "is-active";
    const items = document.querySelectorAll(ITEM);
    items.forEach((item2) => {
      const parent = item2.parentElement;
      let runOnBreakpoint = checkBreakpoints(item2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const number = +item2.textContent;
      if (!number || Number.isNaN(number)) return;
      decimalPoints = countDecimalPoints(number);
      let duration = attr(2.5, item2.getAttribute(OPTION_DURATION));
      let start = attr("top bottom", item2.getAttribute(OPTION_START));
      let activeClass2 = attr(ACTIVE_CLASS, item2.getAttribute(OPTION_ACTIVE_CLASS));
      const countUp2 = new i(item2, number, {
        useGrouping: false,
        decimalPlaces: decimalPoints,
        duration
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item2,
          start,
          end: "top 10%",
          scrub: true,
          onEnter: () => {
            countUp2.start();
            parent.classList.add(activeClass2);
            setTimeout(() => {
              parent.classList.remove(activeClass2);
            }, duration * 1e3);
          }
        }
      });
    });
  };
  function countDecimalPoints(number) {
    const numberString = number.toString();
    const parts = numberString.split(".");
    if (parts.length === 1) {
      return 0;
    }
    return parts[1].length;
  }

  // src/interactions/cursor.js
  init_live_reload();
  var cursor = function(gsapContext) {
    const ANIMATION_ID = "cursor";
    const WRAP = '[data-ix-cursor="wrap"]';
    const INNER = '[data-ix-cursor="inner"]';
    const OUTER = '[data-ix-cursor="outer"]';
    const DOT = '[data-ix-cursor="dot"]';
    const HOVER = '[data-ix-cursor="hover"]';
    const NO_HOVER = '[data-ix-cursor="no-hover"]';
    const INNER_DELAY = 0.01;
    const OUTER_DELAY = 0.4;
    const HOVER_CLASS = "is-hover";
    const cursorWrap = document.querySelector(WRAP);
    const cursorInner = document.querySelector(INNER);
    const cursorOuter = document.querySelector(OUTER);
    if (!cursorWrap || !cursorInner) return;
    if ("ontouchstart" in window || navigator.maxTouchPoints) return;
    let runOnBreakpoint = checkBreakpoints(cursorWrap, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;
    const cursorHover = function() {
      const hoverElements = gsap.utils.toArray(`${HOVER}, :is(a, button):not(${NO_HOVER})`);
      hoverElements.forEach((item2) => {
        if (!item2 || !cursorInner) return;
        item2.addEventListener("mouseover", function(e) {
          cursorInner.classList.add(HOVER_CLASS);
        });
        item2.addEventListener("mouseleave", function(e) {
          cursorInner.classList.remove(HOVER_CLASS);
        });
      });
    };
    cursorHover();
    const cursorClick = function() {
    };
    cursorClick();
    const cursorMove = function() {
      gsap.set(cursorInner, { xPercent: -50, yPercent: -50 });
      gsap.set(cursorOuter, { xPercent: -50, yPercent: -50 });
      let innerX = gsap.quickTo(cursorInner, "x", { duration: INNER_DELAY, ease: "non" });
      let innerY = gsap.quickTo(cursorInner, "y", { duration: INNER_DELAY, ease: "non" });
      let outerX = gsap.quickTo(cursorOuter, "x", { duration: OUTER_DELAY, ease: "power3" });
      let outerY = gsap.quickTo(cursorOuter, "y", { duration: OUTER_DELAY, ease: "power3" });
      window.addEventListener("mousemove", (e) => {
        innerX(e.clientX);
        innerY(e.clientY);
        outerX(e.clientX);
        outerY(e.clientY);
      });
    };
    cursorMove();
  };

  // src/interactions/hover-active.js
  init_live_reload();
  var hoverActive = function(gsapContext) {
    const ANIMATION_ID = "hoveractive";
    const WRAP = '[data-ix-hoveractive="wrap"]';
    const ITEM = '[data-ix-hoveractive="item"]';
    const TARGET = '[data-ix-hoveractive="target"]';
    const ID = "data-ix-hoveractive-id";
    const OPTION_ACTIVE_CLASS = "data-ix-hoveractive-class";
    const OPTION_KEEP_ACTIVE = "data-ix-hoveractive-keep-active";
    const ACTIVE_CLASS = "is-active";
    const hoverActiveList = function(listElement) {
      const children = [...listElement.querySelectorAll(ITEM)];
      let activeClass2 = attr(ACTIVE_CLASS, listElement.getAttribute(OPTION_ACTIVE_CLASS));
      let keepActive = attr(false, listElement.getAttribute(OPTION_KEEP_ACTIVE));
      function activateItem(item2, activate = true) {
        let hasTarget = true;
        const itemID = item2.getAttribute(ID);
        const targetEl = listElement.querySelector(`${TARGET}[${ID}="${itemID}"]`);
        if (!itemID || !targetEl) {
          hasTarget = false;
        }
        if (activate) {
          item2.classList.add(activeClass2);
          if (hasTarget) {
            targetEl.classList.add(activeClass2);
          }
        } else {
          item2.classList.remove(activeClass2);
          if (hasTarget) {
            targetEl.classList.remove(activeClass2);
          }
        }
      }
      children.forEach((currentItem) => {
        currentItem.addEventListener("mouseover", function(e) {
          children.forEach((child) => {
            if (child === currentItem) {
              activateItem(currentItem, true);
            } else {
              activateItem(child, false);
            }
          });
        });
        currentItem.addEventListener("mouseleave", function(e) {
          if (!keepActive) {
            activateItem(currentItem, false);
          }
        });
      });
    };
    const wraps = [...document.querySelectorAll(WRAP)];
    if (wraps.length >= 0) {
      wraps.forEach((wrap) => {
        let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
        if (runOnBreakpoint === false) return;
        hoverActiveList(wrap);
      });
    } else {
      const body = document.querySelector("body");
      hoverActiveList(body);
    }
  };

  // src/interactions/lenis.js
  init_live_reload();

  // src/interactions/lightbox.js
  init_live_reload();
  var lightbox = function(gsapContext, pagePlayers, pagePlayerComponents, lenis) {
    const ANIMATION_ID = "lightbox";
    const LIGHTBOX_WRAP = '[data-ix-lightbox="wrap"]';
    const LIGHTBOX_COMPONENT = '[data-ix-lightbox="component"]';
    const LIGHTBOX_TRIGGER = '[data-ix-lightbox="trigger"]';
    const LIGHTBOX_CLOSE_BTN = '[data-ix-lightbox="close"]';
    const LIGHTBOX_NEXT_BTN = '[data-ix-lightbox="next"]';
    const LIGHTBOX_PREVIOUS_BTN = '[data-ix-lightbox="previous"]';
    const VIDEO_CLASS = ".plyr_component";
    const NO_SCROLL = "no-scroll";
    let activeLightbox = false;
    const activateLightboxes = function(listElement) {
      const filterPlayers = function(pagePlayers2, pagePlayerComponents2) {
        if (!pagePlayerComponents2 || pagePlayerComponents2.length === 0) return;
        pagePlayerComponents2.forEach((component, index) => {
          const matchingPlayer = pagePlayers2[index];
          if (Boolean(component.closest(LIGHTBOX_COMPONENT))) {
            players.push(pagePlayers2[index]);
            plyrComponents.push(pagePlayerComponents2[index]);
          }
        });
      };
      const findPlayer = function(lightbox2) {
        if (!plyrComponents || plyrComponents.length === 0) return;
        function findMatchingVideo(plyrComponents2, videoEl2) {
          return plyrComponents2.findIndex((videoElement) => videoElement === videoEl2);
        }
        const videoEl = lightbox2.querySelector(VIDEO_CLASS);
        if (!videoEl) return false;
        let playerIndex = findMatchingVideo(plyrComponents, videoEl);
        player = players[playerIndex];
        return player;
      };
      const lightboxTriggers = [...listElement.querySelectorAll(LIGHTBOX_TRIGGER)];
      const lightboxElements = [];
      const players = [];
      const plyrComponents = [];
      filterPlayers(pagePlayers, pagePlayerComponents);
      if (lightboxTriggers.length === 0) return;
      lightboxTriggers.forEach((trigger, index) => {
        const parent = trigger.parentElement;
        const lightbox2 = parent.querySelector(LIGHTBOX_COMPONENT);
        lightboxElements.push(lightbox2);
        if (!lightbox2) return;
        let player2 = false;
        player2 = findPlayer(lightbox2);
        parent.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && e.target === trigger) {
            openModal(lightbox2);
          }
          if (e.key === "Escape" && activeLightbox !== false) {
            closeModal(lightbox2);
          }
        });
        parent.addEventListener("click", (e) => {
          if (e.target.closest(LIGHTBOX_TRIGGER) !== null) {
            openModal(lightbox2);
          } else if (e.target.closest(LIGHTBOX_CLOSE_BTN) !== null) {
            closeModal(lightbox2);
            if (player2) {
              player2.pause();
            }
          } else if (e.target.closest(LIGHTBOX_NEXT_BTN) !== null) {
            let nextLightbox = lightboxElements[index + 1];
            if (index === lightboxElements.length - 1) {
              nextLightbox = lightboxElements[0];
            }
            closeModal(lightbox2);
            openModal(nextLightbox);
          } else if (e.target.closest(LIGHTBOX_PREVIOUS_BTN) !== null) {
            let previousLightbox = lightboxElements[index - 1];
            if (index === 0) {
              previousLightbox = lightboxElements[lightboxElements.length - 1];
            }
            closeModal(lightbox2);
            openModal(previousLightbox);
          }
        });
      });
      const openModal = function(lightbox2) {
        if (!lightbox2) return;
        lightbox2.showModal();
        startScroll(lenis);
        activeLightbox = lightbox2;
      };
      const closeModal = function(lightbox2) {
        if (!lightbox2) return;
        player = findPlayer(lightbox2);
        if (player) {
          player.pause();
        }
        lightbox2.close();
        stopScroll(lenis);
        activeLightbox = false;
      };
    };
    const body = document.querySelector("body");
    const wraps = [...document.querySelectorAll(LIGHTBOX_WRAP)];
    if (wraps.length > 0) {
      wraps.forEach((wrap) => {
        let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
        if (runOnBreakpoint === false) return;
        activateLightboxes(wrap);
      });
    } else {
      activateLightboxes(body);
    }
  };

  // src/interactions/load.js
  init_live_reload();
  var load = function(gsapContext) {
    const ANIMATION_ID = "load";
    const ATTRIBUTE = "data-ix-load";
    const HEADING = "heading";
    const ITEM = "item";
    const IMAGE = "image";
    const STAGGER = "stagger";
    const POSITION = "data-ix-load-position";
    const DEFAULT_STAGGER = "<0.2";
    const items = gsap.utils.toArray(`[${ATTRIBUTE}]`);
    if (items.length === 0) return;
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power1.out",
        duration: 0.8
      }
    });
    const loadHeading = function(item2) {
      if (item2.classList.contains("w-richtext")) {
        item2.style.opacity = "1";
        item2 = item2.firstChild;
      }
      const splitText = runSplit(item2);
      if (!splitText) return;
      const position = attr("<", item2.getAttribute(POSITION));
      tl.set(item2, { opacity: 1 });
      tl.fromTo(
        splitText.words,
        { opacity: 0, y: "50%", rotateX: 45 },
        { opacity: 1, y: "0%", rotateX: 0, stagger: { each: 0.1, from: "left" } },
        position
      );
    };
    const loadImage = function(item2) {
      const position = attr(DEFAULT_STAGGER, item2.getAttribute(POSITION));
      tl.fromTo(item2, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1 }, position);
    };
    const loadItem = function(item2) {
      const position = attr(DEFAULT_STAGGER, item2.getAttribute(POSITION));
      tl.fromTo(item2, { opacity: 0, y: "2rem" }, { opacity: 1, y: "0rem" }, position);
    };
    const loadStagger = function(item2) {
      if (!item2) return;
      const children = gsap.utils.toArray(item2.children);
      if (children.length === 0) return;
      children.forEach((child, index) => {
        if (index === 0) {
          item2.style.opacity = 1;
        }
        loadItem(child);
      });
    };
    items.forEach((item2) => {
      if (!item2) return;
      let runOnBreakpoint = checkBreakpoints(item2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const loadType = item2.getAttribute(ATTRIBUTE);
      if (loadType === HEADING) {
        loadHeading(item2);
      }
      if (loadType === IMAGE) {
        loadImage(item2);
      }
      if (loadType === ITEM) {
        loadItem(item2);
      }
      if (loadType === STAGGER) {
        loadStagger(item2);
      }
    });
    tl.play(0);
    return tl;
  };

  // src/interactions/marquee.js
  init_live_reload();
  var marquee = function(gsapContext) {
    const ANIMATION_ID = "marquee";
    const WRAP = '[data-ix-marquee="wrap"]';
    const LIST = '[data-ix-marquee="list"]';
    const REVERSE = "data-ix-marquee-reverse";
    const DURATION = "data-ix-marquee-duration";
    const DYNAMIC_DURATION = "data-ix-marquee-duration-dynamic";
    const DURATION_PER_ITEM = "data-ix-marquee-duration-per-item";
    const HOVER_EFFECT = "data-ix-marquee-hover";
    const ACCELERATE_ON_HOVER = "decelerate";
    const DECELERATE_ON_HOVER = "decelerate";
    const PAUSE_ON_HOVER = "pause";
    const DEFAULT_DURATION = 30;
    const DEFAULT_DYNAMIC_DURATION = 5;
    const wraps = document.querySelectorAll(WRAP);
    if (wraps.length === 0) return;
    wraps.forEach((wrap) => {
      let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const lists = [...wrap.querySelectorAll(LIST)];
      let reverse = attr(false, wrap.getAttribute(REVERSE));
      let duration = attr(DEFAULT_DURATION, wrap.getAttribute(DURATION));
      let durationDynamic = attr(false, wrap.getAttribute(DYNAMIC_DURATION));
      let durationPerItem = attr(DEFAULT_DYNAMIC_DURATION, wrap.getAttribute(DURATION_PER_ITEM));
      let itemCount = lists[0].childElementCount;
      if (itemCount === 1) {
        itemCount = lists[0].firstElementChild.childElementCount;
      }
      if (durationDynamic) {
        duration = itemCount * durationPerItem;
      }
      let hoverEffect = attr("none", wrap.getAttribute(HOVER_EFFECT));
      let direction = 1;
      if (reverse) {
        direction = -1;
      }
      let tl = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "none"
        }
      });
      tl.fromTo(
        lists,
        {
          xPercent: 0
        },
        {
          xPercent: -100 * direction,
          duration
        }
      );
      if (hoverEffect === ACCELERATE_ON_HOVER) {
        wrap.addEventListener("mouseenter", (event) => {
          tl.timeScale(2);
        });
        wrap.addEventListener("mouseleave", (event) => {
          tl.timeScale(1);
        });
      }
      if (hoverEffect === DECELERATE_ON_HOVER) {
        wrap.addEventListener("mouseenter", (event) => {
          tl.timeScale(0.5);
        });
        wrap.addEventListener("mouseleave", (event) => {
          tl.timeScale(1);
        });
      }
      if (hoverEffect === PAUSE_ON_HOVER) {
        wrap.addEventListener("mouseenter", (event) => {
          tl.pause();
        });
        wrap.addEventListener("mouseleave", (event) => {
          tl.play();
        });
      }
    });
  };

  // src/interactions/mouse-over.js
  init_live_reload();
  var mouseOver = function(gsapContext) {
    const ANIMATION_ID = "mouseover";
    const WRAP = '[data-ix-mouseover="wrap"]';
    const LAYER = '[data-ix-mouseover="layer"]';
    const TARGET = '[data-ix-mouseover="target"]';
    const DURATION = "data-ix-mouseover-duration";
    const EASE = "data-ix-mouseover-ease";
    const MOVE_X = "data-ix-mouseover-move-x";
    const MOVE_Y = "data-ix-mouseover-move-y";
    const ROTATE_Z = "data-ix-mouseover-rotate-z";
    const mouseOverItems = document.querySelectorAll(WRAP);
    mouseOverItems.forEach((mouseOverItem) => {
      const layers = mouseOverItem.querySelectorAll(LAYER);
      if (layers.length === 0) return;
      let runOnBreakpoint = checkBreakpoints(mouseOverItem, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      let target = mouseOverItem.querySelector(TARGET);
      if (!target) {
        target = mouseOverItem;
      }
      const mouseMove = function() {
        let initialProgress = { x: 0.5, y: 0.5 };
        let progressObject = { x: initialProgress.x, y: initialProgress.y };
        let duration = attr(0.5, mouseOverItem.getAttribute(DURATION));
        let ease = attr("power1.out", mouseOverItem.getAttribute(EASE));
        let cursorXTimeline = gsap.timeline({ paused: true, defaults: { ease: "none" } });
        let cursorYTimeline = gsap.timeline({ paused: true, defaults: { ease: "none" } });
        layers.forEach((layer) => {
          let moveX = attr(10, layer.getAttribute(MOVE_X));
          let moveY = attr(10, layer.getAttribute(MOVE_Y));
          let rotateZ = attr(0, layer.getAttribute(ROTATE_Z));
          cursorXTimeline.fromTo(
            layer,
            { xPercent: moveX * -1, rotateZ: rotateZ * -1 },
            { xPercent: moveX, rotateZ },
            0
          );
          cursorYTimeline.fromTo(layer, { yPercent: moveY * -1 }, { yPercent: moveY }, 0);
        });
        function setTimelineProgress(xValue, yValue) {
          gsap.to(progressObject, {
            x: xValue,
            y: yValue,
            ease,
            duration,
            onUpdate: () => {
              cursorXTimeline.progress(progressObject.x);
              cursorYTimeline.progress(progressObject.y);
            }
          });
        }
        setTimelineProgress(initialProgress.x, initialProgress.y);
        target.addEventListener("mousemove", function(e) {
          const rect = target.getBoundingClientRect();
          let mousePercentX = gsap.utils.clamp(
            0,
            1,
            gsap.utils.normalize(0, rect.width, e.clientX - rect.left)
          );
          let mousePercentY = gsap.utils.clamp(
            0,
            1,
            gsap.utils.normalize(0, rect.height, e.clientY - rect.top)
          );
          setTimelineProgress(mousePercentX, mousePercentY);
        });
        target.addEventListener("mouseleave", function(e) {
          setTimelineProgress(initialProgress.x, initialProgress.y);
        });
      };
      mouseMove();
    });
  };

  // src/interactions/page-transition.js
  init_live_reload();
  var pageTransition = function(lenis) {
    const ANIMATION_ID = "pagetransition";
    const WRAP = '[data-ix-pagetransition="wrap"]';
    const COLUMN = '[data-ix-pagetransition="column"]';
    const EXCLUDE = "data-ix-pagetransition";
    const transitionWrap = document.querySelector(WRAP);
    const transitionColumns = document.querySelectorAll(COLUMN);
    if (!transitionWrap || transitionColumns.length === 0) return;
    const tlLoad = gsap.timeline();
    tlLoad.to(COLUMN, { yPercent: -100, stagger: 0.2 });
    tlLoad.set(WRAP, { display: "none" });
    const checkLink = function(link) {
      if (!link || link.tagName !== "A") {
        return false;
      }
      const hostname = link.hostname;
      const target = link.target;
      const href = link.getAttribute("href");
      const playTransition = attr(true, link.getAttribute(EXCLUDE));
      if (!hostname || hostname !== window.location.hostname || target && target === "_blank" || !href || href.includes("#") || !playTransition) {
        return false;
      } else {
        return true;
      }
    };
    document.querySelectorAll("a").forEach((link) => {
      const linkURL = link.getAttribute("href");
      const playTransition = checkLink(link);
      if (playTransition) {
        link.addEventListener("click", function(e) {
          e.preventDefault();
          const tlClick = gsap.timeline({
            onStart: () => {
              stopScroll(lenis);
            },
            onComplete: () => setTimeout(() => {
              window.location.href = linkURL;
            }, 100)
          });
          tlClick.set(WRAP, { display: "flex" });
          tlClick.fromTo(COLUMN, { yPercent: 100 }, { yPercent: 0, stagger: 0.2 });
        });
      }
    });
    window.onpageshow = function(event) {
      if (event.persisted) window.location.reload();
    };
  };

  // src/interactions/parallax.js
  init_live_reload();
  var parallax = function(gsapContext) {
    const ANIMATION_ID = "parallax";
    const WRAP = `[data-ix-parallax="wrap"]`;
    const SECTION = `[data-ix-parallax="section"]`;
    const TRIGGER = `[data-ix-parallax="trigger"]`;
    const TYPE = "data-ix-parallax-type";
    const AMOUNT = "data-ix-parallax-amount";
    const parallaxItems = gsap.utils.toArray(WRAP);
    parallaxItems.forEach((parallaxItem) => {
      const section = parallaxItem.querySelector(SECTION);
      const trigger = parallaxItem.querySelector(TRIGGER);
      if (!parallaxItem || !section || !trigger) return;
      let animationType = "uncover";
      animationType = attr("uncover", parallaxItem.getAttribute(TYPE));
      moveAmount = attr(50, parallaxItem.getAttribute(AMOUNT));
      let runOnBreakpoint = checkBreakpoints(parallaxItem, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const settings = {
        scrub: true,
        start: "top bottom",
        end: "top top",
        moveStart: "-100vh",
        moveEnd: "0vh"
      };
      if (animationType === "cover") {
        settings.start = "bottom bottom";
        settings.end = "bottom top";
        settings.moveStart = "0vh";
        settings.moveEnd = "100vh";
      }
      if (animationType === "parallax") {
        settings.moveStart = `-${moveAmount}vh`;
        settings.moveEnd = "0vh";
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          markers: false,
          start: settings.start,
          end: settings.end,
          scrub: settings.scrub
        },
        defaults: {
          duration: 1,
          ease: "none"
        },
        onStart: () => {
          ScrollTrigger.refresh();
        }
      });
      tl.fromTo(
        section,
        {
          y: settings.moveStart
        },
        {
          y: settings.moveEnd
        }
      );
    });
  };

  // src/interactions/scroll-in.js
  init_live_reload();
  var scrollIn = function(gsapContext) {
    const ANIMATION_ID = "scrollin";
    const ELEMENT = "data-ix-scrollin";
    const HEADING = "heading";
    const ITEM = "item";
    const CONTAINER = "container";
    const STAGGER = "stagger";
    const RICH_TEXT = "rich-text";
    const IMAGE_WRAP = "image-wrap";
    const IMAGE = "image";
    const LINE = "line";
    const SCROLL_TOGGLE_ACTIONS = "data-ix-scrollin-toggle-actions";
    const SCROLL_SCRUB = "data-ix-scrollin-scrub";
    const SCROLL_START = "data-ix-scrollin-start";
    const SCROLL_END = "data-ix-scrollin-end";
    const CLIP_DIRECTION = "data-ix-scrollin-direction";
    const SCROLL_STAGGER = "data-ix-scrollin-stagger";
    const EASE_SMALL = 0.1;
    const EASE_LARGE = 0.3;
    const DURATION = 0.6;
    const EASE = "power1.out";
    const scrollInTL = function(item2) {
      const settings = {
        scrub: false,
        toggleActions: "play none none none",
        start: "top 90%",
        end: "top 75%"
      };
      settings.toggleActions = attr(settings.toggleActions, item2.getAttribute(SCROLL_TOGGLE_ACTIONS));
      settings.scrub = attr(settings.scrub, item2.getAttribute(SCROLL_SCRUB));
      settings.start = attr(settings.start, item2.getAttribute(SCROLL_START));
      settings.end = attr(settings.end, item2.getAttribute(SCROLL_END));
      const tl = gsap.timeline({
        defaults: {
          duration: DURATION,
          ease: EASE
        },
        scrollTrigger: {
          trigger: item2,
          start: settings.start,
          end: settings.end,
          toggleActions: settings.toggleActions,
          scrub: settings.scrub
        }
      });
      return tl;
    };
    const defaultTween = function(item2, tl, options = {}) {
      const varsFrom = {
        opacity: 0,
        y: "2rem"
      };
      const varsTo = {
        opacity: 1,
        y: "0rem"
      };
      if (options.stagger) {
        varsTo.stagger = { each: options.stagger, from: "start" };
      }
      if (options.stagger === "small") {
        varsTo.stagger = { each: EASE_SMALL, from: "start" };
      }
      if (options.stagger === "large") {
        varsTo.stagger = { each: EASE_LARGE, from: "start" };
      }
      const tween = tl.fromTo(item2, varsFrom, varsTo);
      return tween;
    };
    const scrollInHeading = function(item2) {
      if (item2.classList.contains("w-richtext")) {
        item2 = item2.firstChild;
      }
      const splitText = runSplit(item2);
      if (!splitText) return;
      const tl = scrollInTL(item2);
      const tween = defaultTween(splitText.words, tl, { stagger: "small" });
      ScrollTrigger.create({
        trigger: item2,
        start: "top bottom",
        end: "bottom top",
        onLeave: (self2) => splitText.revert()
      });
    };
    const scrollInItem = function(item2) {
      if (!item2) return;
      if (item2.classList.contains("w-richtext")) {
        const children = gsap.utils.toArray(item2.children);
        if (children.length === 0) return;
        children.forEach((child) => {
          const tl = scrollInTL(child);
          const tween = defaultTween(child, tl);
        });
      } else {
        const tl = scrollInTL(item2);
        const tween = defaultTween(item2, tl);
      }
    };
    const scrollInImage = function(item2) {
      if (!item2) return;
      const child = item2.firstChild;
      const tl = scrollInTL(item2);
      tl.fromTo(
        child,
        {
          scale: 1.2
        },
        {
          scale: 1,
          duration: 1
        }
      );
      tl.fromTo(
        item2,
        {
          scale: 0.9
        },
        {
          scale: 1,
          duration: 1
        },
        "<"
      );
    };
    const scrollInLine = function(item2) {
      if (!item2) return;
      const clipAttr = attr("left", item2.getAttribute(CLIP_DIRECTION));
      const clipStart = getClipDirection(clipAttr);
      const clipEnd = getClipDirection("full");
      const tl = scrollInTL(item2);
      tl.fromTo(
        item2,
        {
          clipPath: clipStart
        },
        {
          clipPath: clipEnd
        }
      );
    };
    const scrollInContainer = function(item2) {
      if (!item2) return;
      const children = gsap.utils.toArray(item2.children);
      if (children.length === 0) return;
      children.forEach((child) => {
        const tl = scrollInTL(child);
        const tween = defaultTween(child, tl);
      });
    };
    const scrollInStagger = function(item2) {
      if (!item2) return;
      const staggerAmount = attr(EASE_LARGE, item2.getAttribute(SCROLL_STAGGER));
      const children = gsap.utils.toArray(item2.children);
      if (children.length === 0) return;
      const tl = scrollInTL(item2);
      const tween = defaultTween(children, tl, { stagger: staggerAmount });
    };
    const scrollInRichText = function(item2) {
      if (!item2) return;
      const children = gsap.utils.toArray(item2.children);
      if (children.length === 0) return;
      children.forEach((child) => {
        const childTag = child.tagName;
        if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(childTag)) {
          scrollInHeading(child);
        }
        if (childTag === "FIGURE") {
          scrollInImage(child);
        } else {
          scrollInItem(child);
        }
      });
    };
    const items = gsap.utils.toArray(`[${ELEMENT}]`);
    items.forEach((item2) => {
      if (!item2) return;
      let runOnBreakpoint = checkBreakpoints(item2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const scrollInType = item2.getAttribute(ELEMENT);
      if (scrollInType === HEADING) {
        scrollInHeading(item2);
      }
      if (scrollInType === ITEM) {
        scrollInItem(item2);
      }
      if (scrollInType === IMAGE) {
        scrollInImage(item2);
      }
      if (scrollInType === LINE) {
        scrollInLine(item2);
      }
      if (scrollInType === CONTAINER) {
        scrollInContainer(item2);
      }
      if (scrollInType === STAGGER) {
        scrollInStagger(item2);
      }
      if (scrollInType === RICH_TEXT) {
        scrollInRichText(item2);
      }
    });
  };

  // src/interactions/scrolling.js
  init_live_reload();
  var scrolling = function(gsapContext) {
    const ANIMATION_ID = "scrolling";
    const WRAP = `[data-ix-scrolling="wrap"]`;
    const TRIGGER = `[data-ix-scrolling="trigger"]`;
    const LAYER = '[data-ix-scrolling="layer"]';
    const START = "data-ix-scrolling-start";
    const END = "data-ix-scrolling-end";
    const TABLET_START = "data-ix-scrolling-start-tablet";
    const TABLET_END = "data-ix-scrolling-end-tablet";
    const MOBILE_START = "data-ix-scrolling-start-mobile";
    const MOBILE_END = "data-ix-scrolling-end-mobile";
    const SCRUB = "data-ix-scrolling-scrub";
    const POSITION = "data-ix-scrolling-position";
    const EASE = "data-ix-scrolling-ease";
    const X_START = "data-ix-scrolling-x-start";
    const X_END = "data-ix-scrolling-x-end";
    const Y_START = "data-ix-scrolling-y-start";
    const Y_END = "data-ix-scrolling-y-end";
    const SCALE_START = "data-ix-scrolling-scale-start";
    const SCALE_END = "data-ix-scrolling-scale-end";
    const SCALE_X_START = "data-ix-scrolling-scale-x-start";
    const SCALE_X_END = "data-ix-scrolling-scale-x-end";
    const SCALE_Y_START = "data-ix-scrolling-scale-y-start";
    const SCALE_Y_END = "data-ix-scrolling-scale-y-end";
    const WIDTH_START = "data-ix-scrolling-width-start";
    const WIDTH_END = "data-ix-scrolling-width-end";
    const HEIGHT_START = "data-ix-scrolling-height-start";
    const HEIGHT_END = "data-ix-scrolling-height-end";
    const ROTATE_X_START = "data-ix-scrolling-rotate-x-start";
    const ROTATE_X_END = "data-ix-scrolling-rotate-x-end";
    const ROTATE_Y_START = "data-ix-scrolling-rotate-y-start";
    const ROTATE_Y_END = "data-ix-scrolling-rotate-y-end";
    const ROTATE_Z_START = "data-ix-scrolling-rotate-z-start";
    const ROTATE_Z_END = "data-ix-scrolling-rotate-z-end";
    const OPACITY_START = "data-ix-scrolling-opacity-start";
    const OPACITY_END = "data-ix-scrolling-opacity-end";
    const RADIUS_START = "data-ix-scrolling-radius-start";
    const RADIUS_END = "data-ix-scrolling-radius-end";
    const CLIP_START = "data-ix-scrolling-clip-start";
    const CLIP_END = "data-ix-scrolling-clip-end";
    const scrollingItems = gsap.utils.toArray(WRAP);
    scrollingItems.forEach((scrollingItem) => {
      const layers = scrollingItem.querySelectorAll(LAYER);
      if (!scrollingItem || layers.length === 0) return;
      let trigger = scrollingItem.querySelector(TRIGGER);
      if (!trigger) {
        trigger = scrollingItem;
      }
      let runOnBreakpoint = checkBreakpoints(scrollingItem, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
      const tlSettings = {
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        ease: "none"
      };
      tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(START));
      tlSettings.end = attr(tlSettings.end, scrollingItem.getAttribute(END));
      tlSettings.scrub = attr(tlSettings.scrub, scrollingItem.getAttribute(SCRUB));
      tlSettings.ease = attr(tlSettings.ease, scrollingItem.getAttribute(EASE));
      if (isTablet && scrollingItem.getAttribute(TABLET_START)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(TABLET_START));
      }
      if (isTablet && scrollingItem.getAttribute(TABLET_END)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(TABLET_END));
      }
      if (isMobile && scrollingItem.getAttribute(MOBILE_START)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(MOBILE_START));
      }
      if (isMobile && scrollingItem.getAttribute(MOBILE_END)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(MOBILE_END));
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: tlSettings.start,
          end: tlSettings.end,
          scrub: tlSettings.scrub,
          markers: false
        },
        defaults: {
          duration: 1,
          ease: tlSettings.ease
        }
      });
      layers.forEach((layer) => {
        if (!layer) return;
        const varsFrom = {};
        const varsTo = {};
        varsFrom.x = attrIfSet(layer, X_START, "0%");
        varsTo.x = attrIfSet(layer, X_END, "0%");
        varsFrom.y = attrIfSet(layer, Y_START, "0%");
        varsTo.y = attrIfSet(layer, Y_END, "0%");
        varsFrom.scale = attrIfSet(layer, SCALE_START, 1);
        varsTo.scale = attrIfSet(layer, SCALE_END, 1);
        varsFrom.scaleX = attrIfSet(layer, SCALE_X_START, 1);
        varsTo.scaleX = attrIfSet(layer, SCALE_X_END, 1);
        varsFrom.scaleY = attrIfSet(layer, SCALE_Y_START, 1);
        varsTo.scaleY = attrIfSet(layer, SCALE_Y_END, 1);
        varsFrom.width = attrIfSet(layer, WIDTH_START, "0%");
        varsTo.width = attrIfSet(layer, WIDTH_END, "0%");
        varsFrom.height = attrIfSet(layer, HEIGHT_START, "0%");
        varsTo.height = attrIfSet(layer, HEIGHT_END, "0%");
        varsFrom.rotateX = attrIfSet(layer, ROTATE_X_START, 0);
        varsTo.rotateX = attrIfSet(layer, ROTATE_X_END, 0);
        varsFrom.rotateY = attrIfSet(layer, ROTATE_Y_START, 0);
        varsTo.rotateY = attrIfSet(layer, ROTATE_Y_END, 0);
        varsFrom.rotateZ = attrIfSet(layer, ROTATE_Z_START, 0);
        varsTo.rotateZ = attrIfSet(layer, ROTATE_Z_END, 0);
        varsFrom.opacity = attrIfSet(layer, OPACITY_START, 0);
        varsTo.opacity = attrIfSet(layer, OPACITY_END, 0);
        varsFrom.borderRadius = attrIfSet(layer, RADIUS_START, "string");
        varsTo.borderRadius = attrIfSet(layer, RADIUS_END, "string");
        const clipStart = attrIfSet(layer, CLIP_START, "left");
        const clipEnd = attrIfSet(layer, CLIP_END, "full");
        varsFrom.clipPath = getClipDirection(clipStart);
        varsTo.clipPath = getClipDirection(clipEnd);
        const position = attr("<", layer.getAttribute(POSITION));
        varsTo.ease = attr(layer, EASE, "none");
        let tween = tl.fromTo(layer, varsFrom, varsTo, position);
      });
    });
  };

  // src/interactions/slider.js
  init_live_reload();
  var createSlider = function(components, options, modules) {
    const SLIDER = ".swiper";
    const NEXT_BUTTON = ".swiper-next";
    const PREVIOUS_BUTTON = ".swiper-prev";
    const BULLET_WRAP = ".swiper-bullet-wrapper";
    const SCROLLBAR = ".swiper-scrollbar";
    const SCROLLBAR_DRAG = ".swiper-scrollbar-drag";
    const ACTIVE_CLASS = "is-active";
    const DISABLED_CLASS = "is-disabled";
    const swipersArray = [];
    components.forEach(function(component) {
      if (!component) return;
      const slider = component.querySelector(SLIDER);
      if (!slider) return;
      const defaultSettings = {
        speed: 800,
        spaceBetween: 16,
        loop: false,
        centeredSlides: false,
        allowTouchMove: true,
        slideActiveClass: ACTIVE_CLASS,
        slideDuplicateActiveClass: ACTIVE_CLASS
      };
      let finalModules = {};
      if (modules.navigation === true) {
        const nextButtonEl = component.querySelector(NEXT_BUTTON);
        const previousButtonEl = component.querySelector(PREVIOUS_BUTTON);
        const navigationSettings = {
          navigation: {
            nextEl: nextButtonEl,
            prevEl: previousButtonEl,
            disabledClass: DISABLED_CLASS
          }
        };
        finalModules = { ...finalModules, ...navigationSettings };
      }
      if (modules.pagination === true) {
        const bulletsEl = component.querySelector(BULLET_WRAP);
        const paginationSettings = {
          pagination: {
            type: "bullets",
            el: bulletsEl,
            bulletActiveClass: ACTIVE_CLASS,
            bulletClass: "swiper-bullet",
            bulletElement: "button",
            clickable: true
          }
        };
        finalModules = { ...finalModules, ...paginationSettings };
      }
      if (modules.scrollbar === true) {
        const scrollbarEl = component.querySelector(SCROLLBAR);
        const scrollbarSettings = {
          scrollbar: {
            el: scrollbarEl,
            dragClass: SCROLLBAR_DRAG,
            draggable: true,
            dragSize: "auto",
            //or set in number of pixels
            snapOnRelease: false
          }
        };
        finalModules = { ...finalModules, ...scrollbarSettings };
      }
      if (modules.autoplay === true) {
        const autoplaySettings = {
          autoplay: {
            delay: 3e3,
            disableOnInteraction: true,
            pauseOnMouseEnter: false,
            stopOnLastSlide: true
          }
        };
        finalModules = { ...finalModules, ...autoplaySettings };
      }
      const swiperSettings = { ...defaultSettings, ...finalModules, ...options };
      const swiper = new Swiper(slider, swiperSettings);
      swipersArray.push(swiper);
    });
    return swipersArray;
  };

  // src/interactions/text-scrub.js
  init_live_reload();
  var textScrub = function(gsapContext) {
    const ANIMATION_ID = "textscrub";
    const ITEM = '[data-ix-textscrub="item"]';
    const LINE_CLASS = "line-mask";
    const items = gsap.utils.toArray(ITEM);
    items.forEach((item2) => {
      if (!item2) return;
      let runOnBreakpoint = checkBreakpoints(item2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      let splitText;
      function createAnimation() {
        const splitText2 = runSplit(item2, "lines");
        if (!splitText2) return;
        splitText2.lines.forEach((line) => {
          const lineMask = document.createElement("div");
          lineMask.classList.add(LINE_CLASS);
          line.appendChild(lineMask);
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: line,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 1.5
            }
          });
          tl.fromTo(
            lineMask,
            {
              width: "100%"
            },
            {
              width: "0%",
              ease: "power1.out",
              duration: 1
            }
          );
        });
        return splitText2;
      }
      splitText = createAnimation();
      const resetAnimation = function() {
        splitText.revert();
        splitText = createAnimation();
      };
      let windowWidth = window.innerWidth;
      window.addEventListener("resize", function() {
        if (window.innerWidth !== windowWidth) {
          windowWidth = window.innerWidth;
          resetAnimation();
        }
      });
    });
  };

  // src/interactions/text-links.js
  init_live_reload();
  var textLinks = function(gsapContext) {
    const ANIMATION_ID = "textlink";
    const WRAP = '[data-ix-textlink="wrap"]';
    const FRONT = '[data-ix-textlink="front"]';
    const BACK = '[data-ix-textlink="back"]';
    const items = gsap.utils.toArray(WRAP);
    items.forEach((item2) => {
      if (!item2) return;
      let runOnBreakpoint = checkBreakpoints(item2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const front = item2.querySelector(FRONT);
      const back = item2.querySelector(BACK);
      if (!front || !back) return;
      const tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.4,
          ease: "power1.out"
        }
      });
      tl.fromTo(
        front,
        {
          y: "200%",
          rotateZ: 6
        },
        {
          y: "0%",
          rotateZ: 0
        }
      );
      tl.fromTo(
        back,
        {
          y: "0%",
          rotateZ: 0
        },
        {
          y: "-200%",
          rotateZ: -6
        },
        0
      );
      item2.addEventListener("mouseover", function() {
        tl.play();
      });
      item2.addEventListener("mouseleave", function() {
        tl.reverse();
      });
    });
  };

  // src/interactions/video-plyr.js
  init_live_reload();
  var import_plyr = __toESM(require_plyr_min(), 1);
  var videoPlyr = function() {
    const COMPONENT = ".plyr_component";
    const VIDEO_CLASS = ".plyr_video";
    const COVER_CLASS = ".plyr_cover";
    const HIDE_COVER_CLASS = "hide-cover";
    const PAUSE_TRIGGER_CLASS = ".plyr_pause-trigger";
    const CONTAIN_CLASS = "contain-video";
    const settings = {
      autoplay: false,
      loop: false,
      mute: false,
      hideControls: true
    };
    const PLAYING_CLASS = ".plyr--playing";
    const players = [];
    const components = [...document.querySelectorAll(COMPONENT)];
    if (components.length === 0) return;
    components.forEach((component, index) => {
      const video = component.querySelector(VIDEO_CLASS);
      const cover = component.querySelector(COVER_CLASS);
      const pauseTrigger = component.querySelector(PAUSE_TRIGGER_CLASS);
      const loopSetting = attr(settings.loop, component.getAttribute("data-player-loop"));
      let muteSetting = attr(settings.mute, component.getAttribute("data-player-mute"));
      const showCoverOnPause = attr(false, component.getAttribute("data-player-show-cover-on-pause"));
      let player2 = new import_plyr.default(video, {
        controls: ["play", "progress", "current-time", "mute", "fullscreen"],
        hideControls: settings.hideControls,
        loop: { active: loopSetting },
        resetOnEnd: true
      });
      players.push(player2);
      if (cover) {
        cover.addEventListener("click", () => {
          player2.play();
        });
      }
      player2.on("ended", (event) => {
        component.classList.remove(HIDE_COVER_CLASS);
      });
      if (showCoverOnPause) {
        player2.on("pause", (event) => {
          component.classList.remove(HIDE_COVER_CLASS);
        });
      }
      player2.on("play", (event) => {
        components.forEach((item2, index2) => {
          item2.classList.remove(HIDE_COVER_CLASS);
          if (item2 !== component) {
            const player3 = players[index2];
            player3.pause();
          }
        });
        component.classList.add(HIDE_COVER_CLASS);
        let prevPlayingComponent = document.querySelector(PLAYING_CLASS).closest(COMPONENT);
        if (prevPlayingComponent && prevPlayingComponent !== component) {
          prevPlayingComponent.find(PAUSE_TRIGGER_CLASS)[0].click();
        }
      });
      pauseTrigger.addEventListener("click", () => {
        player2.pause();
      });
      player2.on("ended", (event) => {
        if (player2.fullscreen.active) {
          player2.fullscreen.exit();
        }
      });
      player2.on("enterfullscreen", (event) => {
        component.classList.add(CONTAIN_CLASS);
      });
      player2.on("exitfullscreen", (event) => {
        component.classList.remove(CONTAIN_CLASS);
      });
    });
    return [players, components];
  };

  // src/index.js
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Local Script Loaded");
    if (gsap.ScrollTrigger !== void 0) {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (gsap.Flip !== void 0) {
      gsap.registerPlugin(Flip);
    }
    let lenis;
    const caseGallerySlider = function() {
      const COMPONENT = ".case-gallery-slider_component";
      const components = [...document.querySelectorAll(COMPONENT)];
      const options = {
        slidesPerView: "auto",
        loop: true
      };
      const modules = {
        navigation: true,
        pagination: false,
        scrollbar: false,
        autoplay: false
      };
      const sliders = createSlider(components, options, modules);
    };
    const gsapInit = function() {
      let mm = gsap.matchMedia();
      mm.add(
        {
          //This is the conditions object
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px)  and (max-width: 991px)",
          isDesktop: "(min-width: 992px)",
          reduceMotion: "(prefers-reduced-motion: reduce)"
        },
        (gsapContext) => {
          let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
          accordion(gsapContext);
          countUp(gsapContext);
          cursor(gsapContext);
          clickActive(gsapContext);
          hoverActive(gsapContext);
          mouseOver(gsapContext);
          pageTransition();
          parallax(gsapContext);
          scrollIn(gsapContext);
          scrolling(gsapContext);
          textScrub(gsapContext);
          load(gsapContext);
          marquee(gsapContext);
          textLinks(gsapContext);
          const [players, components] = [videoPlyr()];
          lightbox(gsapContext, players, components);
          if (isDesktop || isTablet) {
            cursor();
          }
        }
      );
    };
    gsapInit();
  });
})();
