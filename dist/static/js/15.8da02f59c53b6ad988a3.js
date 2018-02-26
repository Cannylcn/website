"use strict";

webpackJsonp([15], { "x+Q2": function xQ2(t, e) {}, xPHn: function xPHn(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var i = { components: { Song: n("wUnb").a }, data: function data() {
        return { recommendList: [] };
      }, mounted: function mounted() {
        var t = this;this.$http({ method: "GET", url: "./static/data/songlist.json" }).then(function (e) {
          t.recommendList = e.data;
        });
      }, methods: { updateTitle: function updateTitle(t) {
          this.$store.dispatch("updateTitle", t);
        } } },
        s = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", [t._m(0), t._v(" "), t._l(t.recommendList, function (e, i) {
          return n("song", { key: e.id, attrs: { songIndex: i + 1, songName: e.name, songSinger: e.singer, coverSrc: e.coverSrc, link: { name: "songplay", params: { src: e.src, playlist: t.recommendList, index: i } } }, nativeOn: { click: function click(n) {
                t.updateTitle(e.name);
              } } });
        })], 2);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            e = this._self._c || t;return e("div", { staticClass: "adv" }, [e("img", { attrs: { src: "/static/images/ritui.jpg" } })]);
      }] };var a = n("VU/8")(i, s, !1, function (t) {
      n("x+Q2");
    }, "data-v-d056caca", null);e.default = a.exports;
  } });
//# sourceMappingURL=15.8da02f59c53b6ad988a3.js.map
//# sourceMappingURL=15.8da02f59c53b6ad988a3.js.map