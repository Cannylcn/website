"use strict";

webpackJsonp([6], { "0gJq": function gJq(t, e) {}, Y52p: function Y52p(t, e, o) {
    "use strict";
    var s = o("iRq5"),
        n = o.n(s),
        i = o("pFYg"),
        r = o.n(i),
        a = "can_use_webp";function c() {
      if ("undefined" != typeof window && window.localStorage && "object" === ("undefined" == typeof localStorage ? "undefined" : r()(localStorage)) && (!localStorage.getItem(a) || "available" !== localStorage.getItem(a) && "disable" !== localStorage.getItem(a))) {
        var t = document.createElement("img");t.onload = function () {
          try {
            localStorage.setItem(a, "available");
          } catch (t) {}
        }, t.onerror = function () {
          try {
            localStorage.setItem(a, "disable");
          } catch (t) {}
        }, t.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA==";
      }
    }c();var l = { name: "x-img", mixins: [o("OFgA").a], created: function created() {
        this.$vux && this.$vux.bus && this.$vux.bus.$on("vux:after-view-enter", this.init);
      }, methods: { init: function init() {
          var t = this;this.blazy && this.blazy.destroy(), this.$el.src = this.defaultSrc, this.$el.className = this.$el.className.replace("b-loaded", ""), this.blazy = new n.a({ scroller: this.scroller, container: this.container, selector: "#vux-ximg-" + this.uuid, offset: t.offset, errorClass: t.errorClass, successClass: t.successClass, success: function success(e) {
              t.$emit("on-success", t.src, e);
            }, error: function error(e, o) {
              t.$emit("on-error", t.src, e, o);
            } });
        } }, mounted: function mounted() {
        var t = this;this.$el.setAttribute("id", "vux-ximg-" + this.uuid), this.$nextTick(function () {
          setTimeout(function () {
            t.init();
          }, t.delay);
        }), c();
      }, computed: { currentSrc: function currentSrc() {
          return function () {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && c(), "undefined" != typeof window && !!window.localStorage && "available" === window.localStorage.getItem(a);
          }() && this.webpSrc ? this.webpSrc : this.src;
        } }, props: { src: String, webpSrc: String, defaultSrc: { type: String, default: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" }, errorClass: String, successClass: String, offset: { type: Number, default: 100 }, scroller: Object, container: String, delay: { type: Number, default: 0 } }, watch: { src: function src(t) {
          this.init();
        } }, beforeDestroy: function beforeDestroy() {
        this.blazy && this.blazy.destroy(), this.blazy = null, this.$vux && this.$vux.bus && this.$vux.bus.$off("vux:after-view-enter", this.init);
      } },
        u = { render: function render() {
        var t = this.$createElement;return (this._self._c || t)("img", { staticClass: "vux-x-img", attrs: { src: this.defaultSrc, "data-src": this.currentSrc } });
      }, staticRenderFns: [] };var f = o("VU/8")(l, u, !1, function (t) {
      o("fZR+");
    }, null, null);e.a = f.exports;
  }, "fZR+": function fZR(t, e) {}, iRq5: function iRq5(t, e, o) {
    var s, n;void 0 === (n = "function" == typeof (s = function s() {
      "use strict";
      var t,
          e,
          o,
          s = "src",
          n = "srcset";return function (s) {
        if (!document.querySelectorAll) {
          var n = document.createStyleSheet();document.querySelectorAll = function (t, e, o, s, i) {
            for (i = document.all, e = [], o = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; o--;) {
              for (n.addRule(t[o], "k:v"), s = i.length; s--;) {
                i[s].currentStyle.k && e.push(i[s]);
              }n.removeRule(0);
            }return e;
          };
        }var c = this,
            l = c._util = {};l.elements = [], l.destroyed = !0, c.options = s || {}, c.options.error = c.options.error || !1, c.options.offset = c.options.offset || 100, c.options.success = c.options.success || !1, c.options.selector = c.options.selector || ".b-lazy", c.options.separator = c.options.separator || "|", c.options.container = !!c.options.container && document.querySelectorAll(c.options.container), c.options.errorClass = c.options.errorClass || "b-error", c.options.breakpoints = c.options.breakpoints || !1, c.options.loadInvisible = c.options.loadInvisible || !1, c.options.successClass = c.options.successClass || "b-loaded", c.options.validateDelay = c.options.validateDelay || 25, c.options.saveViewportOffsetDelay = c.options.saveViewportOffsetDelay || 50, c.options.srcset = c.options.srcset || "data-srcset", c.options.src = t = c.options.src || "data-src", o = window.devicePixelRatio > 1, (e = {}).top = 0 - c.options.offset, e.left = 0 - c.options.offset, c.revalidate = function () {
          i(this);
        }, c.load = function (t, e) {
          var o = this.options;void 0 === t.length ? a(t, e, o) : h(t, function (t) {
            a(t, e, o);
          });
        }, c.destroy = function () {
          var t = this._util;this.options.container && h(this.options.container, function (e) {
            m(e, "scroll", t.validateT);
          }), m(window, "scroll", t.validateT), m(window, "resize", t.validateT), m(window, "resize", t.saveViewportOffsetT), this.scroller && this.scroller._xscroll && this.scroller._xscroll.off("scroll scrollend afterrender", t.validateT, this.scroller._xscroll), t.count = 0, t.elements.length = 0, t.destroyed = !0;
        }, l.validateT = A(function () {
          r(c);
        }, c.options.validateDelay, c), l.saveViewportOffsetT = A(function () {
          v(c.options.offset);
        }, c.options.saveViewportOffsetDelay, c), v(c.options.offset), h(c.options.breakpoints, function (e) {
          if (e.width >= window.screen.width) return t = e.src, !1;
        }), setTimeout(function () {
          i(c);
        });
      };function i(t) {
        var e = t._util;if (e.elements = function (t) {
          for (var e = [], o = document.querySelectorAll(t), s = o.length; s--; e.unshift(o[s])) {}return e;
        }(t.options.selector), e.count = e.elements.length, e.destroyed && (e.destroyed = !1, t.options.container && h(t.options.container, function (t) {
          g(t, "scroll", e.validateT);
        }), g(window, "resize", e.saveViewportOffsetT), g(window, "resize", e.validateT), g(window, "scroll", e.validateT), t.options.scroller)) {
          var o = t.options.scroller._xscroll,
              s = o.userConfig.useOriginScroll ? "scroll" : "scrollend";o.on("afterrender", e.validateT, t), o.on(s, e.validateT, t);
        }r(t);
      }function r(t) {
        for (var o, s = t._util, n = 0; n < s.count; n++) {
          var i = s.elements[n];void 0, ((o = i.getBoundingClientRect()).right >= e.left && o.bottom >= e.top && o.left <= e.right && o.top <= e.bottom || d(i, t.options.successClass)) && (t.load(i), s.elements.splice(n, 1), s.count--, n--);
        }0 === s.count && t.destroy();
      }function a(e, i, r) {
        if (!d(e, r.successClass) && (i || r.loadInvisible || e.offsetWidth > 0 && e.offsetHeight > 0)) {
          var a = e.getAttribute(t) || e.getAttribute(r.src);if (a) {
            var v = a.split(r.separator),
                A = v[o && v.length > 1 ? 1 : 0],
                b = f(e, "img");if (b || void 0 === e.src) {
              var w = new Image(),
                  y = function y() {
                r.error && r.error(e, "invalid"), p(e, r.errorClass), m(w, "error", y), m(w, "load", x);
              },
                  x = function x() {
                if (b) {
                  l(e, A), u(e, n, r.srcset);var t = e.parentNode;t && f(t, "picture") && h(t.getElementsByTagName("source"), function (t) {
                    u(t, n, r.srcset);
                  }), r.scroller && r.scroller.reset();
                } else e.style.backgroundImage = 'url("' + A + '")';c(e, r), m(w, "load", x), m(w, "error", y);
              };g(w, "error", y), g(w, "load", x), l(w, A);
            } else l(e, A), c(e, r);
          } else f(e, "video") ? (h(e.getElementsByTagName("source"), function (t) {
            u(t, s, r.src);
          }), e.load(), c(e, r)) : (r.error && r.error(e, "missing"), p(e, r.errorClass));
        }
      }function c(t, e) {
        p(t, e.successClass), e.success && e.success(t), t.removeAttribute(e.src), h(e.breakpoints, function (e) {
          t.removeAttribute(e.src);
        });
      }function l(t, e) {
        t[s] = e;
      }function u(t, e, o) {
        var s = t.getAttribute(o);s && (t[e] = s, t.removeAttribute(o));
      }function f(t, e) {
        return t.nodeName.toLowerCase() === e;
      }function d(t, e) {
        return -1 !== (" " + t.className + " ").indexOf(" " + e + " ");
      }function p(t, e) {
        d(t, e) || (t.className += " " + e);
      }function v(t) {
        e.bottom = (window.innerHeight || document.documentElement.clientHeight) + t, e.right = (window.innerWidth || document.documentElement.clientWidth) + t;
      }function g(t, e, o) {
        t.attachEvent ? t.attachEvent && t.attachEvent("on" + e, o) : t.addEventListener(e, o, !1);
      }function m(t, e, o) {
        t.detachEvent ? t.detachEvent && t.detachEvent("on" + e, o) : t.removeEventListener(e, o, !1);
      }function h(t, e) {
        if (t && e) for (var o = t.length, s = 0; s < o && !1 !== e(t[s], s); s++) {}
      }function A(t, e, o) {
        var s = 0;return function () {
          var n = +new Date();n - s < e || (s = n, t.apply(o, arguments));
        };
      }
    }) ? s.call(e, o, e, t) : s) || (t.exports = n);
  }, mrhq: function mrhq(t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var s = o("YxJB"),
        n = o("3Lt7"),
        i = o("Y52p"),
        r = { components: { Flexbox: s.a, FlexboxItem: n.a, XImg: i.a }, data: function data() {
        return { skinList: [{ src: "./static/images/cover.jpg", name: "官方红" }, { src: "./static/images/cover.jpg", name: "官方白" }, { src: "./static/images/cover.jpg", name: "自选颜色" }, { src: "./static/images/cover.jpg", name: "自定义皮肤" }] };
      } },
        a = { render: function render() {
        var t = this,
            e = t.$createElement,
            o = t._self._c || e;return o("div", { staticStyle: { padding: "1rem 0" } }, [o("p", { staticClass: "title" }, [t._v("官方推荐")]), t._v(" "), o("flexbox", { staticStyle: { "text-align": "center" }, attrs: { gutter: 3, align: "start", wrap: "wrap", justify: "space-between" } }, t._l(t.skinList, function (e) {
          return o("flexbox-item", { key: e.id }, [o("x-img", { attrs: { src: e.src, offset: "0" } }), t._v(" "), o("p", [t._v(t._s(e.name))])], 1);
        })), t._v(" "), o("p", { staticClass: "title" }, [t._v("会员专属")]), t._v(" "), o("flexbox", { staticStyle: { "text-align": "center" }, attrs: { gutter: 3, align: "start", wrap: "wrap", justify: "space-between" } }, t._l(t.skinList, function (e) {
          return o("flexbox-item", { key: e.id }, [o("x-img", { attrs: { src: e.src, offset: "0" } }), t._v(" "), o("p", [t._v(t._s(e.name))])], 1);
        }))], 1);
      }, staticRenderFns: [] };var c = o("VU/8")(r, a, !1, function (t) {
      o("0gJq");
    }, "data-v-7dd4acf4", null);e.default = c.exports;
  } });
//# sourceMappingURL=6.76094121848c0c76c7c7.js.map
//# sourceMappingURL=6.76094121848c0c76c7c7.js.map