"use strict";

webpackJsonp([7], { DmF5: function DmF5(t, s) {}, II6v: function II6v(t, s, e) {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });var i = { components: { Dynamic: e("v8Ke").a }, data: function data() {
        return { mulList: [{ mul: "/static/images/user.jpg", mulGator: "全球精选音乐", proTime: "2分钟前", mulContent: "饿货，来条士力架吧！", mulPic: [{ src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }], like: 998, comment: 348, transpond: 54 }, { mul: "/static/images/user.jpg", mulGator: "全球精选音乐", proTime: "2分钟前", mulContent: "饿货，来条士力架吧！", mulPic: [{ src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }], like: 998, comment: 348, transpond: 54 }, { mul: "/static/images/user.jpg", mulGator: "全球精选音乐", proTime: "2分钟前", mulContent: "饿货，来条士力架吧！", mulPic: [{ src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }, { src: "/static/images/user.jpg" }], like: 998, comment: 348, transpond: 54 }] };
      } },
        c = { render: function render() {
        var t = this.$createElement,
            s = this._self._c || t;return s("div", this._l(this.mulList, function (t, e) {
          return s("dynamic", { key: e, attrs: { mul: t.mul, mulGator: t.mulGator, proTime: t.proTime, mulContent: t.mulContent, mulPic: t.mulPic, like: t.like, comment: t.comment, transpond: t.transpond } });
        }));
      }, staticRenderFns: [] };var r = e("VU/8")(i, c, !1, function (t) {
      e("DmF5");
    }, "data-v-dcf7bcde", null);s.default = r.exports;
  }, "MQR+": function MQR(t, s) {}, v8Ke: function v8Ke(t, s, e) {
    "use strict";
    var i = e("YxJB"),
        c = e("3Lt7"),
        r = { components: { Flexbox: i.a, FlexboxItem: c.a }, props: ["mul", "mulGator", "proTime", "mulPic", "like", "mulContent", "comment", "transpond"], methods: { collect: function collect(t) {
          this.$vux.toast.show({ type: "text", position: "center", text: t });
        } } },
        n = { render: function render() {
        var t = this,
            s = t.$createElement,
            e = t._self._c || s;return e("div", { staticStyle: { padding: "1.5rem 1.5rem .8rem", "border-bottom": "1px solid #eee" } }, [e("div", { staticClass: "promulgator" }, [e("img", { attrs: { src: t.mul } }), t._v(" "), e("div", { staticClass: "mul-title" }, [e("h1", [t._v(t._s(t.mulGator))]), t._v(" "), e("p", [t._v(t._s(t.proTime))])])]), t._v(" "), e("div", { staticClass: "mul-content" }, [e("p", [t._v(t._s(t.mulContent))]), t._v(" "), e("flexbox", { attrs: { gutter: 0, align: "start", wrap: "wrap", justify: "space-between" } }, t._l(t.mulPic, function (t) {
          return e("flexbox-item", { key: t.id, attrs: { span: .95 / 3 } }, [e("img", { attrs: { src: t.src } })]);
        })), t._v(" "), e("ul", [e("li", { on: { click: function click(s) {
              t.collect("已点赞");
            } } }, [e("i", { staticClass: "iconfont icon-iclikenormal" }), t._v(t._s(t.like))]), t._v(" "), e("li", { on: { click: function click(s) {
              t.collect("评论暂未开放");
            } } }, [e("i", { staticClass: "iconfont icon-dyncomments" }), t._v(t._s(t.comment))]), t._v(" "), e("li", { on: { click: function click(s) {
              t.collect("转发");
            } } }, [e("i", { staticClass: "iconfont icon-Share" }), t._v(t._s(t.transpond))])])], 1)]);
      }, staticRenderFns: [] };var a = e("VU/8")(r, n, !1, function (t) {
      e("MQR+");
    }, "data-v-28227130", null);s.a = a.exports;
  } });
//# sourceMappingURL=7.9f3b1738306da8ba02b6.js.map
//# sourceMappingURL=7.9f3b1738306da8ba02b6.js.map