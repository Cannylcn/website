"use strict";

webpackJsonp([20], { "6PqL": function PqL(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var s = { components: { Song: t("wUnb").a }, data: function data() {
        return { recommendList: [{ id: 1, name: "雾与晨的杂货店", singer: "胡椒粉（微博：雾与晨的杂货店）", src: "./static/music/music.mp3", coverSrc: "./static/images/cover.jpg" }] };
      }, mounted: function mounted() {}, methods: {} },
        r = { render: function render() {
        var e = this.$createElement,
            n = this._self._c || e;return n("div", this._l(this.recommendList, function (e, t) {
          return n("song", { key: e.id, staticClass: "dynamic", attrs: { songIndex: t + 1, songName: e.name, songSinger: e.singer, showCover: !0, coverSrc: e.coverSrc, link: { name: "songplay", params: { src: e.src } } } });
        }));
      }, staticRenderFns: [] };var c = t("VU/8")(s, r, !1, function (e) {
      t("SjjB");
    }, "data-v-4b9ead61", null);n.default = c.exports;
  }, SjjB: function SjjB(e, n) {} });
//# sourceMappingURL=20.580ef1f95ad37cef13ef.js.map
//# sourceMappingURL=20.580ef1f95ad37cef13ef.js.map