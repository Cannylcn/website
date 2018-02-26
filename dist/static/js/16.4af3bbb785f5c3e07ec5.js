"use strict";

webpackJsonp([16], { TVgR: function TVgR(t, n) {}, jx6B: function jx6B(t, n, i) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var o = i("1DHf"),
        e = i("rHil"),
        s = i("wUnb"),
        c = { components: { Group: e.a, Cell: o.a, Song: s.a }, data: function data() {
        return { showContent: !1, collect: !1, recommendList: [] };
      }, mounted: function mounted() {
        var t = this;this.$http({ method: "GET", url: "./static/data/recommend.json" }).then(function (n) {
          t.recommendList = n.data;
        });
      }, methods: { updateTitle: function updateTitle(t) {
          this.$store.dispatch("updateTitle", t);
        } } },
        a = { render: function render() {
        var t = this,
            n = t.$createElement,
            i = t._self._c || n;return i("div", { staticClass: "mymusic" }, [i("group", [i("cell", { attrs: { title: "本地音乐", link: { path: "/songplay" } } }, [i("i", { staticClass: "iconfont icon-music margin-right", attrs: { slot: "icon" }, slot: "icon" })]), t._v(" "), i("cell", { attrs: { title: "最近播放", link: { path: "/songplay" } } }, [i("i", { staticClass: "iconfont icon-nc-test-outline-px_player margin-right", attrs: { slot: "icon" }, slot: "icon" })]), t._v(" "), i("cell", { attrs: { title: "我的电台", link: { path: "/songplay" } } }, [i("i", { staticClass: "iconfont icon-music_radio_portable margin-right", attrs: { slot: "icon" }, slot: "icon" })]), t._v(" "), i("cell", { attrs: { title: "我的收藏", link: { path: "/songplay" } } }, [i("i", { staticClass: "iconfont icon-collect margin-right", attrs: { slot: "icon" }, slot: "icon" })])], 1), t._v(" "), i("group", [i("cell", { attrs: { title: "我创建的歌单", "arrow-direction": t.showContent ? "up" : "down", "is-link": "" }, nativeOn: { click: function click(n) {
              t.showContent = !t.showContent;
            } } }), t._v(" "), i("div", { staticClass: "slide", class: t.showContent ? "animate" : "" }, t._l(t.recommendList, function (n, o) {
          return i("song", { key: n.id, attrs: { songIndex: o + 1, songName: n.name, songSinger: n.singer, showCover: !0, coverSrc: n.coverSrc, link: { name: "songplay", params: { src: n.src } } }, nativeOn: { click: function click(i) {
                t.updateTitle(n.name);
              } } });
        }))], 1), t._v(" "), i("group", [i("cell", { attrs: { title: "我收藏的歌单", "arrow-direction": t.collect ? "up" : "down", "is-link": "" }, nativeOn: { click: function click(n) {
              t.collect = !t.collect;
            } } }), t._v(" "), i("div", { staticClass: "slide", class: t.collect ? "animate" : "" }, t._l(t.recommendList, function (n, o) {
          return i("song", { key: n.id, attrs: { songIndex: o + 1, songName: n.name, songSinger: n.singer, showCover: !0, coverSrc: n.coverSrc, link: { name: "songplay", params: { src: n.src } } }, nativeOn: { click: function click(i) {
                t.updateTitle(n.name);
              } } });
        }))], 1)], 1);
      }, staticRenderFns: [] };var l = i("VU/8")(c, a, !1, function (t) {
      i("TVgR");
    }, "data-v-c10c5cf0", null);n.default = l.exports;
  } });
//# sourceMappingURL=16.4af3bbb785f5c3e07ec5.js.map
//# sourceMappingURL=16.4af3bbb785f5c3e07ec5.js.map