"use strict";

webpackJsonp([4], { "2r/4": function r4(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var s = i("YxJB"),
        o = i("3Lt7"),
        r = { components: { XImg: i("Y52p").a }, props: ["defaultSrc", "src", "title", "price"] },
        a = { render: function render() {
        var t = this.$createElement,
            e = this._self._c || t;return e("div", { staticClass: "goods" }, [e("x-img", { attrs: { "default-src": this.defaultSrc, src: this.src, offset: "100" } }), this._v(" "), e("p", { staticClass: "title" }, [this._v(this._s(this.title))]), this._v(" "), e("p", { staticClass: "price" }, [this._v("￥" + this._s(this.price))])], 1);
      }, staticRenderFns: [] };var n = i("VU/8")(r, a, !1, function (t) {
      i("kCma");
    }, "data-v-5257def8", null).exports,
        c = { components: { Flexbox: s.a, FlexboxItem: o.a, Goods: n }, data: function data() {
        return { goodsList: [{ src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "./static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "./static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "./static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }, { src: "/static/images/sony.jpg", title: "网易云音乐索尼蓝牙耳机", price: 119, defaultSrc: "./static/images/loading.gif" }] };
      } },
        l = { render: function render() {
        var t = this.$createElement,
            e = this._self._c || t;return e("div", { staticStyle: { padding: "1rem 0" } }, [e("flexbox", { attrs: { gutter: 0, align: "start", wrap: "wrap", justify: "space-between" } }, this._l(this.goodsList, function (t, i) {
          return e("flexbox-item", { key: t.id, attrs: { span: .5 } }, [e("goods", { attrs: { src: t.src, title: t.title, price: t.price, defaultSrc: t.defaultSrc } })], 1);
        }))], 1);
      }, staticRenderFns: [] };var u = i("VU/8")(c, l, !1, function (t) {
      i("f0eE");
    }, "data-v-266674b4", null);e.default = u.exports;
  }, Y52p: function Y52p(t, e, i) {
    "use strict";
    var s = i("iRq5"),
        o = i.n(s),
        r = i("pFYg"),
        a = i.n(r),
        n = "can_use_webp";function c() {
      if ("undefined" != typeof window && window.localStorage && "object" === ("undefined" == typeof localStorage ? "undefined" : a()(localStorage)) && (!localStorage.getItem(n) || "available" !== localStorage.getItem(n) && "disable" !== localStorage.getItem(n))) {
        var t = document.createElement("img");t.onload = function () {
          try {
            localStorage.setItem(n, "available");
          } catch (t) {}
        }, t.onerror = function () {
          try {
            localStorage.setItem(n, "disable");
          } catch (t) {}
        }, t.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA==";
      }
    }c();var l = { name: "x-img", mixins: [i("OFgA").a], created: function created() {
        this.$vux && this.$vux.bus && this.$vux.bus.$on("vux:after-view-enter", this.init);
      }, methods: { init: function init() {
          var t = this;this.blazy && this.blazy.destroy(), this.$el.src = this.defaultSrc, this.$el.className = this.$el.className.replace("b-loaded", ""), this.blazy = new o.a({ scroller: this.scroller, container: this.container, selector: "#vux-ximg-" + this.uuid, offset: t.offset, errorClass: t.errorClass, successClass: t.successClass, success: function success(e) {
              t.$emit("on-success", t.src, e);
            }, error: function error(e, i) {
              t.$emit("on-error", t.src, e, i);
            } });
        } }, mounted: function mounted() {
        var t = this;this.$el.setAttribute("id", "vux-ximg-" + this.uuid), this.$nextTick(function () {
          setTimeout(function () {
            t.init();
          }, t.delay);
        }), c();
      }, computed: { currentSrc: function currentSrc() {
          return function () {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && c(), "undefined" != typeof window && !!window.localStorage && "available" === window.localStorage.getItem(n);
          }() && this.webpSrc ? this.webpSrc : this.src;
        } }, props: { src: String, webpSrc: String, defaultSrc: { type: String, default: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" }, errorClass: String, successClass: String, offset: { type: Number, default: 100 }, scroller: Object, container: String, delay: { type: Number, default: 0 } }, watch: { src: function src(t) {
          this.init();
        } }, beforeDestroy: function beforeDestroy() {
        this.blazy && this.blazy.destroy(), this.blazy = null, this.$vux && this.$vux.bus && this.$vux.bus.$off("vux:after-view-enter", this.init);
      } },
        u = { render: function render() {
        var t = this.$createElement;return (this._self._c || t)("img", { staticClass: "vux-x-img", attrs: { src: this.defaultSrc, "data-src": this.currentSrc } });
      }, staticRenderFns: [] };var f = i("VU/8")(l, u, !1, function (t) {
      i("fZR+");
    }, null, null);e.a = f.exports;
  }, f0eE: function f0eE(t, e) {}, "fZR+": function fZR(t, e) {}, iRq5: function iRq5(t, e, i) {
    var s, o;void 0 === (o = "function" == typeof (s = function s() {
      "use strict";
      var t,
          e,
          i,
          s = "src",
          o = "srcset";return function (s) {
        if (!document.querySelectorAll) {
          var o = document.createStyleSheet();document.querySelectorAll = function (t, e, i, s, r) {
            for (r = document.all, e = [], i = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; i--;) {
              for (o.addRule(t[i], "k:v"), s = r.length; s--;) {
                r[s].currentStyle.k && e.push(r[s]);
              }o.removeRule(0);
            }return e;
          };
        }var c = this,
            l = c._util = {};l.elements = [], l.destroyed = !0, c.options = s || {}, c.options.error = c.options.error || !1, c.options.offset = c.options.offset || 100, c.options.success = c.options.success || !1, c.options.selector = c.options.selector || ".b-lazy", c.options.separator = c.options.separator || "|", c.options.container = !!c.options.container && document.querySelectorAll(c.options.container), c.options.errorClass = c.options.errorClass || "b-error", c.options.breakpoints = c.options.breakpoints || !1, c.options.loadInvisible = c.options.loadInvisible || !1, c.options.successClass = c.options.successClass || "b-loaded", c.options.validateDelay = c.options.validateDelay || 25, c.options.saveViewportOffsetDelay = c.options.saveViewportOffsetDelay || 50, c.options.srcset = c.options.srcset || "data-srcset", c.options.src = t = c.options.src || "data-src", i = window.devicePixelRatio > 1, (e = {}).top = 0 - c.options.offset, e.left = 0 - c.options.offset, c.revalidate = function () {
          r(this);
        }, c.load = function (t, e) {
          var i = this.options;void 0 === t.length ? n(t, e, i) : h(t, function (t) {
            n(t, e, i);
          });
        }, c.destroy = function () {
          var t = this._util;this.options.container && h(this.options.container, function (e) {
            v(e, "scroll", t.validateT);
          }), v(window, "scroll", t.validateT), v(window, "resize", t.validateT), v(window, "resize", t.saveViewportOffsetT), this.scroller && this.scroller._xscroll && this.scroller._xscroll.off("scroll scrollend afterrender", t.validateT, this.scroller._xscroll), t.count = 0, t.elements.length = 0, t.destroyed = !0;
        }, l.validateT = A(function () {
          a(c);
        }, c.options.validateDelay, c), l.saveViewportOffsetT = A(function () {
          p(c.options.offset);
        }, c.options.saveViewportOffsetDelay, c), p(c.options.offset), h(c.options.breakpoints, function (e) {
          if (e.width >= window.screen.width) return t = e.src, !1;
        }), setTimeout(function () {
          r(c);
        });
      };function r(t) {
        var e = t._util;if (e.elements = function (t) {
          for (var e = [], i = document.querySelectorAll(t), s = i.length; s--; e.unshift(i[s])) {}return e;
        }(t.options.selector), e.count = e.elements.length, e.destroyed && (e.destroyed = !1, t.options.container && h(t.options.container, function (t) {
          m(t, "scroll", e.validateT);
        }), m(window, "resize", e.saveViewportOffsetT), m(window, "resize", e.validateT), m(window, "scroll", e.validateT), t.options.scroller)) {
          var i = t.options.scroller._xscroll,
              s = i.userConfig.useOriginScroll ? "scroll" : "scrollend";i.on("afterrender", e.validateT, t), i.on(s, e.validateT, t);
        }a(t);
      }function a(t) {
        for (var i, s = t._util, o = 0; o < s.count; o++) {
          var r = s.elements[o];void 0, ((i = r.getBoundingClientRect()).right >= e.left && i.bottom >= e.top && i.left <= e.right && i.top <= e.bottom || g(r, t.options.successClass)) && (t.load(r), s.elements.splice(o, 1), s.count--, o--);
        }0 === s.count && t.destroy();
      }function n(e, r, a) {
        if (!g(e, a.successClass) && (r || a.loadInvisible || e.offsetWidth > 0 && e.offsetHeight > 0)) {
          var n = e.getAttribute(t) || e.getAttribute(a.src);if (n) {
            var p = n.split(a.separator),
                A = p[i && p.length > 1 ? 1 : 0],
                y = f(e, "img");if (y || void 0 === e.src) {
              var S = new Image(),
                  b = function b() {
                a.error && a.error(e, "invalid"), d(e, a.errorClass), v(S, "error", b), v(S, "load", w);
              },
                  w = function w() {
                if (y) {
                  l(e, A), u(e, o, a.srcset);var t = e.parentNode;t && f(t, "picture") && h(t.getElementsByTagName("source"), function (t) {
                    u(t, o, a.srcset);
                  }), a.scroller && a.scroller.reset();
                } else e.style.backgroundImage = 'url("' + A + '")';c(e, a), v(S, "load", w), v(S, "error", b);
              };m(S, "error", b), m(S, "load", w), l(S, A);
            } else l(e, A), c(e, a);
          } else f(e, "video") ? (h(e.getElementsByTagName("source"), function (t) {
            u(t, s, a.src);
          }), e.load(), c(e, a)) : (a.error && a.error(e, "missing"), d(e, a.errorClass));
        }
      }function c(t, e) {
        d(t, e.successClass), e.success && e.success(t), t.removeAttribute(e.src), h(e.breakpoints, function (e) {
          t.removeAttribute(e.src);
        });
      }function l(t, e) {
        t[s] = e;
      }function u(t, e, i) {
        var s = t.getAttribute(i);s && (t[e] = s, t.removeAttribute(i));
      }function f(t, e) {
        return t.nodeName.toLowerCase() === e;
      }function g(t, e) {
        return -1 !== (" " + t.className + " ").indexOf(" " + e + " ");
      }function d(t, e) {
        g(t, e) || (t.className += " " + e);
      }function p(t) {
        e.bottom = (window.innerHeight || document.documentElement.clientHeight) + t, e.right = (window.innerWidth || document.documentElement.clientWidth) + t;
      }function m(t, e, i) {
        t.attachEvent ? t.attachEvent && t.attachEvent("on" + e, i) : t.addEventListener(e, i, !1);
      }function v(t, e, i) {
        t.detachEvent ? t.detachEvent && t.detachEvent("on" + e, i) : t.removeEventListener(e, i, !1);
      }function h(t, e) {
        if (t && e) for (var i = t.length, s = 0; s < i && !1 !== e(t[s], s); s++) {}
      }function A(t, e, i) {
        var s = 0;return function () {
          var o = +new Date();o - s < e || (s = o, t.apply(i, arguments));
        };
      }
    }) ? s.call(e, i, e, t) : s) || (t.exports = o);
  }, kCma: function kCma(t, e) {} });
//# sourceMappingURL=4.0d030ee4f0eaf19fe4eb.js.map
//# sourceMappingURL=4.0d030ee4f0eaf19fe4eb.js.map