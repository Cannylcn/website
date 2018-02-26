"use strict";

webpackJsonp([13], { "5aIk": function aIk(t, e) {}, FqfN: function FqfN(t, e) {}, ituy: function ituy(t, e, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var a = l("kbG3"),
        n = l("wmxo"),
        i = l.n(n),
        s = { name: "x-switch", components: { InlineDesc: a.a }, computed: { labelStyle: function labelStyle() {
          var t = /<\/?[^>]*>/.test(this.title),
              e = Math.min(t ? 5 : this.title.length + 1, 14) + "em";return i()({ display: "block", width: this.$parent.labelWidth || e, textAlign: this.$parent.labelAlign });
        }, labelClass: function labelClass() {
          return { "vux-cell-justify": this.$parent && "justify" === this.$parent.labelAlign };
        } }, methods: { onClick: function onClick() {
          this.$emit("on-click", !this.currentValue, this.currentValue);
        }, toBoolean: function toBoolean(t) {
          return this.valueMap ? 1 === this.valueMap.indexOf(t) : t;
        }, toRaw: function toRaw(t) {
          return this.valueMap ? this.valueMap[t ? 1 : 0] : t;
        } }, props: { title: { type: String, required: !0 }, disabled: Boolean, value: { type: [Boolean, String, Number], default: !1 }, inlineDesc: [String, Boolean, Number], preventDefault: Boolean, valueMap: { type: Array, default: function _default() {
            return [!1, !0];
          } } }, data: function data() {
        return { currentValue: this.toBoolean(this.value) };
      }, watch: { currentValue: function currentValue(t) {
          var e = this.toRaw(t);this.$emit("input", e), this.$emit("on-change", e);
        }, value: function value(t) {
          this.currentValue = this.toBoolean(t);
        } } },
        c = { render: function render() {
        var t = this,
            e = t.$createElement,
            l = t._self._c || e;return l("div", { staticClass: "vux-x-switch weui-cell weui-cell_switch" }, [l("div", { staticClass: "weui-cell__bd" }, [l("label", { staticClass: "weui-label", class: t.labelClass, style: t.labelStyle, domProps: { innerHTML: t._s(t.title) } }), t._v(" "), t.inlineDesc ? l("inline-desc", [t._v(t._s(t.inlineDesc))]) : t._e()], 1), t._v(" "), l("div", { staticClass: "weui-cell__ft" }, [l("input", { directives: [{ name: "model", rawName: "v-model", value: t.currentValue, expression: "currentValue" }], staticClass: "weui-switch", attrs: { type: "checkbox", disabled: t.disabled }, domProps: { checked: Array.isArray(t.currentValue) ? t._i(t.currentValue, null) > -1 : t.currentValue }, on: { change: function change(e) {
              var l = t.currentValue,
                  a = e.target,
                  n = !!a.checked;if (Array.isArray(l)) {
                var i = t._i(l, null);a.checked ? i < 0 && (t.currentValue = l.concat([null])) : i > -1 && (t.currentValue = l.slice(0, i).concat(l.slice(i + 1)));
              } else t.currentValue = n;
            } } }), t._v(" "), t.preventDefault ? l("div", { staticClass: "vux-x-switch-overlay", on: { click: t.onClick } }) : t._e()])]);
      }, staticRenderFns: [] };var u = l("VU/8")(s, c, !1, function (t) {
      l("FqfN");
    }, null, null).exports,
        r = l("1DHf"),
        o = l("rHil"),
        v = { components: { Cell: r.a, Group: o.a, XSwitch: u }, data: function data() {
        return { setting: !0, value1: !0, value2: !0, value3: !0, value4: !0, value5: !0, value6: !0 };
      } },
        p = { render: function render() {
        var t = this,
            e = t.$createElement,
            l = t._self._c || e;return l("div", [l("group", [l("cell", { attrs: { "is-link": "" } }, [l("span", { attrs: { slot: "icon" }, slot: "icon" }, [t._v("在线播放音质")]), t._v(" "), l("span", [t._v("自动")])]), t._v(" "), l("cell", { attrs: { "is-link": "" } }, [l("span", { attrs: { slot: "icon" }, slot: "icon" }, [t._v("下载音质")]), t._v(" "), l("span", [t._v("极高")])]), t._v(" "), l("cell", { attrs: { "is-link": "" } }, [l("span", { attrs: { slot: "icon" }, slot: "icon" }, [t._v("边听边存")]), t._v(" "), l("span", [t._v("未开启")])])], 1), t._v(" "), l("group", [l("x-switch", { attrs: { title: "使用2G/3G/4G网络播放" }, model: { value: t.setting, callback: function callback(e) {
              t.setting = e;
            }, expression: "setting" } }), t._v(" "), l("x-switch", { attrs: { title: "使用2G/3G/4G网络下载" }, model: { value: t.value1, callback: function callback(e) {
              t.value1 = e;
            }, expression: "value1" } }), t._v(" "), l("x-switch", { attrs: { title: "动态页中WiFi下自动播放视频" }, model: { value: t.value2, callback: function callback(e) {
              t.value2 = e;
            }, expression: "value2" } }), t._v(" "), l("x-switch", { attrs: { title: "视频页中WiFi下连续播放" }, model: { value: t.value3, callback: function callback(e) {
              t.value3 = e;
            }, expression: "value3" } })], 1), t._v(" "), l("group", [l("cell", { attrs: { "is-link": "" } }, [l("span", { attrs: { slot: "icon" }, slot: "icon" }, [t._v("账户与绑定设置")])]), t._v(" "), l("cell", { attrs: { "is-link": "" } }, [l("span", { attrs: { slot: "icon" }, slot: "icon" }, [t._v("寻找并邀请好友")])]), t._v(" "), l("cell", { attrs: { "is-link": "" } }, [l("span", { attrs: { slot: "icon" }, slot: "icon" }, [t._v("消息与隐私设置")])])], 1), t._v(" "), l("group", [l("cell", { attrs: { "is-link": "" } }, [l("span", { attrs: { slot: "icon" }, slot: "icon" }, [t._v("均衡器")]), t._v(" "), l("span", [t._v("已关闭")])]), t._v(" "), l("x-switch", { attrs: { title: "经典播放界面", value: !1 }, model: { value: t.value4, callback: function callback(e) {
              t.value4 = e;
            }, expression: "value4" } }), t._v(" "), l("x-switch", { attrs: { title: "锁屏歌词" }, model: { value: t.value5, callback: function callback(e) {
              t.value5 = e;
            }, expression: "value5" } }), t._v(" "), l("x-switch", { attrs: { title: "歌词翻译" }, model: { value: t.value6, callback: function callback(e) {
              t.value6 = e;
            }, expression: "value6" } })], 1), t._v(" "), l("group", [l("cell", { attrs: { "is-link": "" } }, [l("span", { attrs: { slot: "icon" }, slot: "icon" }, [t._v("清除缓存")])])], 1)], 1);
      }, staticRenderFns: [] };var _ = l("VU/8")(v, p, !1, function (t) {
      l("5aIk");
    }, "data-v-cb4759f8", null);e.default = _.exports;
  } });
//# sourceMappingURL=13.e9a02708551e83264ae6.js.map
//# sourceMappingURL=13.e9a02708551e83264ae6.js.map