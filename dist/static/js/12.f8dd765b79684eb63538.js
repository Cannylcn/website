"use strict";

webpackJsonp([12], { "2TZ6": function TZ6(t, i) {}, QI5V: function QI5V(t, i, s) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });var n = s("wUnb"),
        o = s("uqwL"),
        e = s("/kga"),
        c = s("63CM"),
        a = { directives: { TransferDom: s.n(c).a }, components: { Blur: o.a, XDialog: e.a }, props: ["listUrl", "listener", "description", "creator", "collects", "comment", "forward"], data: function data() {
        return { showHideOnBlur: !1 };
      }, methods: { collect: function collect(t) {
          this.$vux.toast.show({ type: "text", position: "center", text: t });
        }, showInfo: function showInfo() {
          this.showHideOnBlur = !0;
        } } },
        r = { render: function render() {
        var t = this,
            i = t.$createElement,
            s = t._self._c || i;return s("div", [s("div", { staticClass: "song-list-cover" }, [s("blur", { staticStyle: { background: "rgba(0,0,0,.2)", height: "210px" }, attrs: { "blur-amount": 40, url: t.listUrl } }, [s("div", { staticClass: "cover" }, [s("div", { staticStyle: { position: "relative", float: "left" } }, [s("img", { attrs: { src: t.listUrl } }), t._v(" "), s("div", { staticClass: "listener" }, [s("i", { staticClass: "iconfont icon-icon_headset" }), s("span", [t._v(t._s(t.listener))])]), t._v(" "), s("div", { staticClass: "cover-info" }, [s("i", { staticClass: "iconfont icon-i-info", staticStyle: { "font-size": "1.3rem" }, on: { click: t.showInfo } })])]), t._v(" "), s("div", { staticClass: "cover-description" }, [s("h1", [t._v(t._s(t.description))]), t._v(" "), s("h2", [s("span", [t._v(t._s(t.creator))]), s("i", { staticClass: "iconfont icon-right", staticStyle: { "font-size": ".8rem", position: "relative", top: "-1px" } })])])]), t._v(" "), s("ul", { staticClass: "cover-count" }, [s("li", { on: { click: function click(i) {
              t.collect("歌单已收藏");
            } } }, [s("i", { staticClass: "iconfont icon-tianjia2" }), s("p", [t._v(t._s(t.collects))])]), t._v(" "), s("li", { on: { click: function click(i) {
              t.collect("评论暂未开放");
            } } }, [s("i", { staticClass: "iconfont icon-dyncomments" }), s("p", [t._v(t._s(t.comment))])]), t._v(" "), s("li", { on: { click: function click(i) {
              t.collect("分享");
            } } }, [s("i", { staticClass: "iconfont icon-Share" }), s("p", [t._v(t._s(t.forward))])]), t._v(" "), s("li", { on: { click: function click(i) {
              t.collect("下载");
            } } }, [s("i", { staticClass: "iconfont icon-xiazai" }), s("p", [t._v("下载")])])])])], 1), t._v(" "), s("div", { directives: [{ name: "transfer-dom", rawName: "v-transfer-dom" }] }, [s("x-dialog", { attrs: { "hide-on-blur": "" }, model: { value: t.showHideOnBlur, callback: function callback(i) {
              t.showHideOnBlur = i;
            }, expression: "showHideOnBlur" } }, [s("div", { on: { click: function click(i) {
              t.showHideOnBlur = !1;
            } } }, [s("div", { staticClass: "cover-title" }, [s("i", { staticClass: "iconfont icon-icon_close" })]), t._v(" "), s("div", { staticClass: "cover-dialog" }, [s("img", { staticStyle: { "max-width": "100%" }, attrs: { src: t.listUrl } }), t._v(" "), s("p", { staticStyle: { "line-height": "2rem", "border-bottom": "0.5px solid #eee" } }, [t._v("2018年一月最热新歌TOP50")]), t._v(" "), s("p", { staticStyle: { padding: "1rem 0" } }, [t._v("\n            2018年一月全站热度最高的50首新歌，歌单数据综合参考了2018年1月云音乐所有最新上架歌曲在全站的平均播放及收藏排行。（注：曲目均为1月第一次上架新歌，已排除新发行正式专辑中收录的部分1月前已上线歌曲）\n          ")])])])])], 1)]);
      }, staticRenderFns: [] };var l = s("VU/8")(a, r, !1, function (t) {
      s("xxS1");
    }, "data-v-498bab4f", null).exports,
        d = { components: { Song: n.a, SongListCover: l }, data: function data() {
        return { songlist: [] };
      }, mounted: function mounted() {
        var t = this;this.$http({ method: "GET", url: "./static/data/songlist.json" }).then(function (i) {
          t.songlist = i.data;
        });
      }, methods: { updateTitle: function updateTitle(t) {
          this.$store.dispatch("updateTitle", t);
        } } },
        u = { render: function render() {
        var t = this,
            i = t.$createElement,
            s = t._self._c || i;return s("div", [s("song-list-cover", { attrs: { listUrl: this.$route.params.listUrl, listener: this.$route.params.listener, description: this.$route.params.description, collects: this.$route.params.collects, comment: this.$route.params.comment, forward: this.$route.params.forward, creator: this.$route.params.creator } }), t._v(" "), t._l(t.songlist, function (i, n) {
          return s("song", { key: i.id, attrs: { songIndex: n + 1, songName: i.name, songSinger: i.singer, link: { name: "songplay", params: { src: i.src, playlist: t.songlist, index: n } } }, nativeOn: { click: function click(s) {
                t.updateTitle(i.name);
              } } });
        })], 2);
      }, staticRenderFns: [] };var v = s("VU/8")(d, u, !1, function (t) {
      s("2TZ6");
    }, "data-v-67e0169d", null);i.default = v.exports;
  }, xxS1: function xxS1(t, i) {} });
//# sourceMappingURL=12.f8dd765b79684eb63538.js.map
//# sourceMappingURL=12.f8dd765b79684eb63538.js.map