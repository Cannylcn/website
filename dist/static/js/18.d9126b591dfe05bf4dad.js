"use strict";

webpackJsonp([18], { NA7U: function NA7U(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var i = { components: { Song: e("wUnb").a }, data: function data() {
        return { recommendList: [] };
      }, mounted: function mounted() {
        var t = this;this.$http({ method: "GET", url: "./static/data/songlist.json" }).then(function (n) {
          t.recommendList = n.data;
        });
      }, methods: { updateTitle: function updateTitle(t) {
          this.$store.dispatch("updateTitle", t);
        } } },
        s = { render: function render() {
        var t = this,
            n = t.$createElement,
            e = t._self._c || n;return e("div", [t._m(0), t._v(" "), t._l(t.recommendList, function (n, i) {
          return e("song", { key: n.id, attrs: { songIndex: i + 1, songName: n.name, songSinger: n.singer, showCover: !0, coverSrc: n.coverUrl, link: { name: "songplay", params: { src: n.src, playlist: t.recommendList, index: i } } }, nativeOn: { click: function click(e) {
                t.updateTitle(n.name);
              } } });
        })], 2);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            n = this._self._c || t;return n("div", { staticClass: "adv" }, [n("img", { attrs: { src: "/static/images/ritui.jpg" } }), this._v(" "), n("p", [n("i", { staticClass: "iconfont icon-bulb" }), this._v("根据你的音乐口味生成，每天6:00更新")])]);
      }] };var a = e("VU/8")(i, s, !1, function (t) {
      e("hJ7b");
    }, "data-v-65293026", null);n.default = a.exports;
  }, hJ7b: function hJ7b(t, n) {} });
//# sourceMappingURL=18.d9126b591dfe05bf4dad.js.map
//# sourceMappingURL=18.d9126b591dfe05bf4dad.js.map