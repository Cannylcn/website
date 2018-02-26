"use strict";

webpackJsonp([19], { "9w24": function w24(t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });var s = e("pDNl"),
        o = e("rHil"),
        a = e("2sLL"),
        n = e("62KO"),
        r = e("63CM"),
        l = e.n(r),
        d = e("I4Fq"),
        c = { directives: { TransferDom: l.a }, components: { XInput: s.a, XButton: a.a, Group: o.a, Confirm: n.a }, mounted: function mounted() {
        this.phoneValid = this.$refs.phoneValid.valid, this.passwordValid = this.$refs.passwordValid.valid;
      }, data: function data() {
        return { phone: "13877907810", password: "123456", min: 6, max: 26, phoneValid: !0, passwordValid: !0, checkPasswordValid: function checkPasswordValid(t) {
            return { valid: t.length >= this.min };
          } };
      }, methods: { checkValid: function checkValid() {
          this.phoneValid = !this.$refs.phoneValid.valid, this.passwordValid = !this.$refs.passwordValid.valid;
        }, showAlert: function showAlert() {
          var t = this;this.$vux.alert.show({ title: "注册成功！", content: "将在1秒后跳转至登录页面...", buttonText: "立即前往", onHide: function onHide() {
              t.$router.push("/login");
            } });
        }, showAlertAuto: function showAlertAuto() {
          var t = this;this.showAlert(), setTimeout(function () {
            t.$vux.alert.hide(), t.$router.push("/login");
          }, 1e3);
        }, submit: function submit() {
          var t = this;if (this.phoneValid || this.passwordValid) return console.log("Error Submit"), !1;var i = { phone: this.phone, password: this.password };d.a.userRegister(i).then(function (i) {
            i.data.success ? t.showAlertAuto() : t.$vux.confirm.show({ title: "错误警告", content: "此账户已存在" });
          }).catch(function (t) {
            console.log(t);
          });
        } } },
        h = { render: function render() {
        var t = this,
            i = t.$createElement,
            e = t._self._c || i;return e("div", [e("group", { attrs: { title: "" } }, [e("x-input", { ref: "phoneValid", attrs: { required: "", "is-type": "china-mobile", placeholder: "输入手机号" }, on: { "on-change": t.checkValid }, model: { value: t.phone, callback: function callback(i) {
              t.phone = i;
            }, expression: "phone" } }, [e("span", { attrs: { slot: "label" }, slot: "label" }, [e("i", { staticClass: "iconfont icon-shouji", staticStyle: { "font-size": "1.5rem", "margin-right": ".5rem" } })])])], 1), t._v(" "), e("group", { attrs: { title: "" } }, [e("x-input", { ref: "passwordValid", attrs: { type: "password", min: t.min, max: t.max, required: "", "is-type": t.checkPasswordValid, placeholder: "设置登录密码，不少于6位" }, on: { "on-change": t.checkValid }, model: { value: t.password, callback: function callback(i) {
              t.password = i;
            }, expression: "password" } }, [e("span", { attrs: { slot: "label" }, slot: "label" }, [e("i", { staticClass: "iconfont icon-mima", staticStyle: { "font-size": "1.5rem", "margin-right": ".5rem" } })])])], 1), t._v(" "), e("div", { staticStyle: { padding: "15px" } }, [e("x-button", { staticStyle: { "border-radius": "99px", "background-color": "#d43c33" }, attrs: { disabled: t.phoneValid || t.passwordValid, type: "primary" }, nativeOn: { click: function click(i) {
              t.submit(i);
            } } }, [t._v("注册")])], 1)], 1);
      }, staticRenderFns: [] };var u = e("VU/8")(c, h, !1, function (t) {
      e("jhry");
    }, "data-v-5fe05398", null);i.default = u.exports;
  }, jhry: function jhry(t, i) {} });
//# sourceMappingURL=19.25fc6752372e5bfaa6d0.js.map
//# sourceMappingURL=19.25fc6752372e5bfaa6d0.js.map