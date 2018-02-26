"use strict";

webpackJsonp([5, 19], { "1jgN": function jgN(t, i) {}, "9w24": function w24(t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });var s = e("pDNl"),
        a = e("rHil"),
        n = e("2sLL"),
        o = e("62KO"),
        r = e("63CM"),
        l = e.n(r),
        c = e("I4Fq"),
        d = { directives: { TransferDom: l.a }, components: { XInput: s.a, XButton: n.a, Group: a.a, Confirm: o.a }, mounted: function mounted() {
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
          var t = this;if (this.phoneValid || this.passwordValid) return console.log("Error Submit"), !1;var i = { phone: this.phone, password: this.password };c.a.userRegister(i).then(function (i) {
            i.data.success ? t.showAlertAuto() : t.$vux.confirm.show({ title: "错误警告", content: "此账户已存在" });
          }).catch(function (t) {
            console.log(t);
          });
        } } },
        u = { render: function render() {
        var t = this,
            i = t.$createElement,
            e = t._self._c || i;return e("div", [e("group", { attrs: { title: "" } }, [e("x-input", { ref: "phoneValid", attrs: { required: "", "is-type": "china-mobile", placeholder: "输入手机号" }, on: { "on-change": t.checkValid }, model: { value: t.phone, callback: function callback(i) {
              t.phone = i;
            }, expression: "phone" } }, [e("span", { attrs: { slot: "label" }, slot: "label" }, [e("i", { staticClass: "iconfont icon-shouji", staticStyle: { "font-size": "1.5rem", "margin-right": ".5rem" } })])])], 1), t._v(" "), e("group", { attrs: { title: "" } }, [e("x-input", { ref: "passwordValid", attrs: { type: "password", min: t.min, max: t.max, required: "", "is-type": t.checkPasswordValid, placeholder: "设置登录密码，不少于6位" }, on: { "on-change": t.checkValid }, model: { value: t.password, callback: function callback(i) {
              t.password = i;
            }, expression: "password" } }, [e("span", { attrs: { slot: "label" }, slot: "label" }, [e("i", { staticClass: "iconfont icon-mima", staticStyle: { "font-size": "1.5rem", "margin-right": ".5rem" } })])])], 1), t._v(" "), e("div", { staticStyle: { padding: "15px" } }, [e("x-button", { staticStyle: { "border-radius": "99px", "background-color": "#d43c33" }, attrs: { disabled: t.phoneValid || t.passwordValid, type: "primary" }, nativeOn: { click: function click(i) {
              t.submit(i);
            } } }, [t._v("注册")])], 1)], 1);
      }, staticRenderFns: [] };var h = e("VU/8")(d, u, !1, function (t) {
      e("jhry");
    }, "data-v-5fe05398", null);i.default = h.exports;
  }, VYHB: function VYHB(t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });var s = e("2sLL"),
        a = e("YxJB"),
        n = e("3Lt7"),
        o = { render: function render() {
        var t = this.$createElement;return (this._self._c || t)("p", { staticClass: "vux-divider" }, [this._t("default")], 2);
      }, staticRenderFns: [] };var r = e("VU/8")({ name: "divider" }, o, !1, function (t) {
      e("aK9X");
    }, null, null).exports,
        l = e("9w24"),
        c = e("I4Fq"),
        d = { components: { XButton: s.a, Register: l.default, Flexbox: a.a, FlexboxItem: n.a, Divider: r }, data: function data() {
        return { email: "934007168@qq.com", password: "123456", dynamicValidateForm: { email: "", password: "" }, activeName: this.$store.state.activeName };
      }, methods: { submitForm: function submitForm() {
          var t = this;if (!this.$refs.emailValid.valid) return console.log("Error Submit"), !1;var i = { email: this.email, password: this.password };c.a.UserLogin(i).then(function (i) {
            var e = i.data;if (e.success) {
              t.$store.dispatch("UserLogin", e.token), t.$store.dispatch("UserName", e.email);var s = decodeURIComponent(t.$route.query.redirect || "/");t.$router.push({ path: s });
            }
          });
        } } },
        u = { render: function render() {
        var t = this.$createElement,
            i = this._self._c || t;return i("div", { staticClass: "login" }, [i("img", { attrs: { src: "/static/images/login_bg.jpg" } }), this._v(" "), i("div", { staticStyle: { padding: "0 3rem" } }, [i("x-button", { staticStyle: { "border-radius": "99px", "font-size": "1.15rem", "margin-top": "2rem" }, attrs: { plain: "", type: "primary", link: "/logintype" } }, [this._v("手机号登录")]), this._v(" "), i("x-button", { staticStyle: { "border-radius": "99px", "font-size": "1.15rem" }, attrs: { plain: "", type: "primary", link: "/register" } }, [this._v("注册")])], 1), this._v(" "), i("div", { staticClass: "login-type" }, [i("divider", { staticStyle: { margin: "5rem 15% 0" } }, [this._v("其他方式登录")]), this._v(" "), i("flexbox", { staticStyle: { "text-align": "center" } }, [i("flexbox-item", [i("i", { staticClass: "iconfont icon-weixin" }), i("p", [this._v("微信")])]), this._v(" "), i("flexbox-item", [i("i", { staticClass: "iconfont icon-qq" }), i("p", [this._v("QQ")])]), this._v(" "), i("flexbox-item", [i("i", { staticClass: "iconfont icon-weibo" }), i("p", [this._v("微博")])]), this._v(" "), i("flexbox-item", [i("i", { staticClass: "iconfont icon-weixin" }), i("p", [this._v("微信")])])], 1)], 1)]);
      }, staticRenderFns: [] };var h = e("VU/8")(d, u, !1, function (t) {
      e("1jgN");
    }, "data-v-f562f69e", null);i.default = h.exports;
  }, aK9X: function aK9X(t, i) {}, jhry: function jhry(t, i) {} });
//# sourceMappingURL=5.5db11539390ec07f2977.js.map
//# sourceMappingURL=5.5db11539390ec07f2977.js.map