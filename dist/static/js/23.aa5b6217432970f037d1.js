"use strict";

webpackJsonp([23], { "67mD": function mD(t, e, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = s("YxJB"),
        i = s("3Lt7"),
        a = { components: { Flexbox: n.a, FlexboxItem: i.a }, data: function data() {
        return { songmenu: [] };
      }, mounted: function mounted() {
        var t = this;this.$http({ method: "GET", url: "./static/data/songmenu.json" }).then(function (e) {
          t.songmenu = e.data;
        });
      }, methods: { updateTitle: function updateTitle(t) {
          this.$store.dispatch("updateTitle", t);
        } } },
        r = { render: function render() {
        var t = this,
            e = t.$createElement,
            s = t._self._c || e;return s("div", [t._m(0), t._v(" "), s("div", [s("flexbox", { staticClass: "song-list", attrs: { gutter: 0, align: "start", wrap: "wrap", justify: "space-between" } }, t._l(t.songmenu, function (e) {
          return s("flexbox-item", { key: e.id, attrs: { span: .98 / 3 } }, [s("router-link", { attrs: { to: { name: "songList", params: { listUrl: e.listUrl, listener: e.listener, description: e.description, collects: e.collects, comment: e.comment, forward: e.forward, creator: e.creator } } } }, [s("div", { staticClass: "song-list" }, [s("img", { attrs: { src: e.listUrl } }), t._v(" "), s("p", [t._v(t._s(e.description))]), t._v(" "), s("div", { staticClass: "listener" }, [s("i", { staticClass: "iconfont icon-icon_headset" }), s("span", [t._v(t._s(e.listener))])])])])], 1);
        }))], 1)]);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            e = this._self._c || t;return e("div", { staticClass: "adv" }, [e("img", { attrs: { src: "/static/images/gedan-menu.jpg" } })]);
      }] };var o = s("VU/8")(a, r, !1, function (t) {
      s("YrvH");
    }, "data-v-01065056", null);e.default = o.exports;
  }, YrvH: function YrvH(t, e) {} });
//# sourceMappingURL=23.aa5b6217432970f037d1.js.map
//# sourceMappingURL=23.aa5b6217432970f037d1.js.map