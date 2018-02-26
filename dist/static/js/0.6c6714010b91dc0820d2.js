"use strict";

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

webpackJsonp([0], { "2LX0": function LX0(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t, e) {
      if ((0, r.default)(t), (e = (0, n.default)(e, l)).require_display_name || e.allow_display_name) {
        var i = t.match(u);if (i) t = i[1];else if (e.require_display_name) return !1;
      }var o = t.split("@"),
          p = o.pop(),
          v = o.join("@"),
          m = p.toLowerCase();"gmail.com" !== m && "googlemail.com" !== m || (v = v.replace(/\./g, "").toLowerCase());if (!(0, a.default)(v, { max: 64 }) || !(0, a.default)(p, { max: 256 })) return !1;if (!(0, s.default)(p, { require_tld: e.require_tld })) return !1;if ('"' === v[0]) return v = v.slice(1, v.length - 1), e.allow_utf8_local_part ? f.test(v) : h.test(v);for (var g = e.allow_utf8_local_part ? d : c, y = v.split("."), x = 0; x < y.length; x++) {
        if (!g.test(y[x])) return !1;
      }return !0;
    };var r = o(i("fcJk")),
        n = o(i("LLCR")),
        a = o(i("CFqi")),
        s = o(i("cddD"));function o(t) {
      return t && t.__esModule ? t : { default: t };
    }var l = { allow_display_name: !1, require_display_name: !1, allow_utf8_local_part: !0, require_tld: !0 },
        u = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,
        c = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
        h = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
        d = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
        f = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports = e.default;
  }, "3Lt7": function Lt7(t, e, i) {
    "use strict";
    var r = ["-moz-box-", "-webkit-box-", ""],
        n = { name: "flexbox-item", props: { span: [Number, String], order: [Number, String] }, beforeMount: function beforeMount() {
        this.bodyWidth = document.documentElement.offsetWidth;
      }, methods: { buildWidth: function buildWidth(t) {
          return "number" == typeof t ? t < 1 ? t : t / 12 : "string" == typeof t ? t.replace("px", "") / this.bodyWidth : void 0;
        } }, computed: { style: function style() {
          var t = {},
              e = "horizontal" === this.$parent.orient ? "marginLeft" : "marginTop";if (1 * this.$parent.gutter != 0 && (t[e] = this.$parent.gutter + "px"), this.span) for (var i = 0; i < r.length; i++) {
            t[r[i] + "flex"] = "0 0 " + 100 * this.buildWidth(this.span) + "%";
          }return void 0 !== this.order && (t.order = this.order), t;
        } }, data: function data() {
        return { bodyWidth: 0 };
      } },
        a = { render: function render() {
        var t = this.$createElement;return (this._self._c || t)("div", { staticClass: "vux-flexbox-item", style: this.style }, [this._t("default")], 2);
      }, staticRenderFns: [] },
        s = i("VU/8")(n, a, !1, null, null, null);e.a = s.exports;
  }, CFqi: function CFqi(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = "function" == typeof _symbol2.default && "symbol" == (0, _typeof3.default)(_iterator2.default) ? function (t) {
      return typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t);
    } : function (t) {
      return t && "function" == typeof _symbol2.default && t.constructor === _symbol2.default && t !== _symbol2.default.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t);
    };e.default = function (t, e) {
      (0, s.default)(t);var i = void 0,
          n = void 0;"object" === (void 0 === e ? "undefined" : r(e)) ? (i = e.min || 0, n = e.max) : (i = arguments[1], n = arguments[2]);var a = encodeURI(t).split(/%..|./).length - 1;return a >= i && (void 0 === n || a <= n);
    };var n,
        a = i("fcJk"),
        s = (n = a) && n.__esModule ? n : { default: n };t.exports = e.default;
  }, "Ewe+": function Ewe(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t, e) {
      if ((0, a.default)(t), e in s) return s[e].test(t);return !1;
    };var r,
        n = i("fcJk"),
        a = (r = n) && r.__esModule ? r : { default: r };var s = { "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/, "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/, "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/, "en-US": /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/, "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/, "de-DE": /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/, "da-DK": /^(\+?45)?(\d{8})$/, "el-GR": /^(\+?30)?(69\d{8})$/, "en-AU": /^(\+?61|0)4\d{8}$/, "en-GB": /^(\+?44|0)7\d{9}$/, "en-HK": /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/, "en-IN": /^(\+?91|0)?[789]\d{9}$/, "en-NG": /^(\+?234|0)?[789]\d{9}$/, "en-NZ": /^(\+?64|0)2\d{7,9}$/, "en-ZA": /^(\+?27|0)\d{9}$/, "en-ZM": /^(\+?26)?09[567]\d{7}$/, "es-ES": /^(\+?34)?(6\d{1}|7[1234])\d{7}$/, "fi-FI": /^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/, "fr-FR": /^(\+?33|0)[67]\d{8}$/, "he-IL": /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/, "hu-HU": /^(\+?36)(20|30|70)\d{7}$/, "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/, "ja-JP": /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/, "ms-MY": /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/, "nb-NO": /^(\+?47)?[49]\d{7}$/, "nl-BE": /^(\+?32|0)4?\d{8}$/, "nn-NO": /^(\+?47)?[49]\d{7}$/, "pl-PL": /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/, "pt-BR": /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/, "pt-PT": /^(\+?351)?9[1236]\d{7}$/, "ro-RO": /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/, "en-PK": /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/, "ru-RU": /^(\+?7|8)?9\d{9}$/, "sr-RS": /^(\+3816|06)[- \d]{5,9}$/, "tr-TR": /^(\+?90|0)?5\d{9}$/, "vi-VN": /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/, "zh-CN": /^(\+?0?86\-?)?1[345789]\d{9}$/, "zh-TW": /^(\+?886\-?|0)?9\d{8}$/ };s["en-CA"] = s["en-US"], s["fr-BE"] = s["nl-BE"], s["zh-HK"] = s["en-HK"], t.exports = e.default;
  }, LLCR: function LLCR(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments[1];for (var i in e) {
        void 0 === t[i] && (t[i] = e[i]);
      }return t;
    }, t.exports = e.default;
  }, OFgA: function OFgA(t, e, i) {
    "use strict";
    function r() {
      return Math.random().toString(36).substring(3, 8);
    }e.a = { mounted: function mounted() {
        0;
      }, data: function data() {
        return { uuid: r() };
      } };
  }, YxJB: function YxJB(t, e, i) {
    "use strict";
    var r = { name: "flexbox", props: { gutter: { type: Number, default: 8 }, orient: { type: String, default: "horizontal" }, justify: String, align: String, wrap: String, direction: String }, computed: { styles: function styles() {
          var t = { "justify-content": this.justify, "-webkit-justify-content": this.justify, "align-items": this.align, "-webkit-align-items": this.align, "flex-wrap": this.wrap, "-webkit-flex-wrap": this.wrap, "flex-direction": this.direction, "-webkit-flex-direction": this.direction };return t;
        } } },
        n = { render: function render() {
        var t = this.$createElement;return (this._self._c || t)("div", { staticClass: "vux-flexbox", class: { "vux-flex-col": "vertical" === this.orient, "vux-flex-row": "horizontal" === this.orient }, style: this.styles }, [this._t("default")], 2);
      }, staticRenderFns: [] };var a = i("VU/8")(r, n, !1, function (t) {
      i("m7v5");
    }, null, null);e.a = a.exports;
  }, cddD: function cddD(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t, e) {
      (0, r.default)(t), (e = (0, n.default)(e, s)).allow_trailing_dot && "." === t[t.length - 1] && (t = t.substring(0, t.length - 1));var i = t.split(".");if (e.require_tld) {
        var a = i.pop();if (!i.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(a)) return !1;
      }for (var o, l = 0; l < i.length; l++) {
        if (o = i[l], e.allow_underscores && (o = o.replace(/_/g, "")), !/^[a-z\u00a1-\uffff0-9-]+$/i.test(o)) return !1;if (/[\uff01-\uff5e]/.test(o)) return !1;if ("-" === o[0] || "-" === o[o.length - 1]) return !1;
      }return !0;
    };var r = a(i("fcJk")),
        n = a(i("LLCR"));function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = { require_tld: !0, allow_underscores: !1, allow_trailing_dot: !1 };t.exports = e.default;
  }, f6Hi: function f6Hi(t, e, i) {
    "use strict";
    var r = i("OFgA");e.a = { mixins: [r.a], props: { required: { type: Boolean, default: !1 } }, created: function created() {
        this.handleChangeEvent = !1;
      }, computed: { dirty: { get: function get() {
            return !this.pristine;
          }, set: function set(t) {
            this.pristine = !t;
          } }, invalid: function invalid() {
          return !this.valid;
        } }, methods: { setTouched: function setTouched() {
          this.touched = !0;
        } }, watch: { value: function value(t) {
          !0 === this.pristine && (this.pristine = !1), this.handleChangeEvent || (this.$emit("on-change", t), this.$emit("input", t));
        } }, data: function data() {
        return { errors: {}, pristine: !0, touched: !1 };
      } };
  }, fcJk: function fcJk(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) {
      if ("string" != typeof t) throw new TypeError("This library (validator.js) validates strings only");
    }, t.exports = e.default;
  }, lFEC: function lFEC(t, e, i) {
    var r, n;void 0 === (n = "function" == typeof (r = function r() {
      var t = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93],
          e = function e(t) {
        return (t = { delimiter: (t = t || {}).delimiter || ".", lastOutput: t.lastOutput, precision: t.hasOwnProperty("precision") ? t.precision : 2, separator: t.separator || ",", showSignal: t.showSignal, suffixUnit: t.suffixUnit && " " + t.suffixUnit.replace(/[\s]/g, "") || "", unit: t.unit && t.unit.replace(/[\s]/g, "") + " " || "", zeroCents: t.zeroCents }).moneyPrecision = t.zeroCents ? 0 : t.precision, t;
      },
          i = function i(t, e, _i) {
        for (; e < t.length; e++) {
          "9" !== t[e] && "A" !== t[e] && "S" !== t[e] || (t[e] = _i);
        }return t;
      },
          r = function r(t) {
        this.elements = t;
      };r.prototype.unbindElementToMask = function () {
        for (var t = 0, e = this.elements.length; t < e; t++) {
          this.elements[t].lastOutput = "", this.elements[t].onkeyup = !1, this.elements[t].onkeydown = !1, this.elements[t].value.length && (this.elements[t].value = this.elements[t].value.replace(/\D/g, ""));
        }
      }, r.prototype.bindElementToMask = function (e) {
        for (var i = this, r = function r(_r) {
          var a = (_r = _r || window.event).target || _r.srcElement;(function (e) {
            for (var i = 0, r = t.length; i < r; i++) {
              if (e == t[i]) return !1;
            }return !0;
          })(_r.keyCode) && setTimeout(function () {
            i.opts.lastOutput = a.lastOutput, a.value = n[e](a.value, i.opts), a.lastOutput = a.value, a.setSelectionRange && i.opts.suffixUnit && a.setSelectionRange(a.value.length, a.value.length - i.opts.suffixUnit.length);
          }, 0);
        }, a = 0, s = this.elements.length; a < s; a++) {
          this.elements[a].lastOutput = "", this.elements[a].onkeyup = r, this.elements[a].value.length && (this.elements[a].value = n[e](this.elements[a].value, this.opts));
        }
      }, r.prototype.maskMoney = function (t) {
        this.opts = e(t), this.bindElementToMask("toMoney");
      }, r.prototype.maskNumber = function () {
        this.opts = {}, this.bindElementToMask("toNumber");
      }, r.prototype.maskAlphaNum = function () {
        this.opts = {}, this.bindElementToMask("toAlphaNumeric");
      }, r.prototype.maskPattern = function (t) {
        this.opts = { pattern: t }, this.bindElementToMask("toPattern");
      }, r.prototype.unMask = function () {
        this.unbindElementToMask();
      };var n = function n(t) {
        if (!t) throw new Error("VanillaMasker: There is no element to bind.");var e = "length" in t ? t.length ? t : [] : [t];return new r(e);
      };return n.toMoney = function (t, i) {
        if ((i = e(i)).zeroCents) {
          i.lastOutput = i.lastOutput || "";var r = "(" + i.separator + "[0]{0," + i.precision + "})",
              n = new RegExp(r, "g"),
              a = t.toString().replace(/[\D]/g, "").length || 0,
              s = i.lastOutput.toString().replace(/[\D]/g, "").length || 0;t = t.toString().replace(n, ""), a < s && (t = t.slice(0, t.length - 1));
        }for (var o = t.toString().replace(/[\D]/g, ""), l = new RegExp("^(0|\\" + i.delimiter + ")"), u = new RegExp("(\\" + i.separator + ")$"), c = o.substr(0, o.length - i.moneyPrecision), h = c.substr(0, c.length % 3), d = new Array(i.precision + 1).join("0"), f = 0, p = (c = c.substr(c.length % 3, c.length)).length; f < p; f++) {
          f % 3 == 0 && (h += i.delimiter), h += c[f];
        }h = (h = h.replace(l, "")).length ? h : "0";var v = "";if (!0 === i.showSignal && (v = t < 0 || t.startsWith && t.startsWith("-") ? "-" : ""), !i.zeroCents) {
          var m = o.length - i.precision,
              g = o.substr(m, i.precision),
              y = g.length,
              x = i.precision > y ? i.precision : y;d = (d + g).slice(-x);
        }return (i.unit + v + h + i.separator + d).replace(u, "") + i.suffixUnit;
      }, n.toPattern = function (t, e) {
        var r,
            n = "object" == (typeof e === "undefined" ? "undefined" : (0, _typeof3.default)(e)) ? e.pattern : e,
            a = n.replace(/\W/g, ""),
            s = n.split(""),
            o = t.toString().replace(/\W/g, ""),
            l = o.replace(/\W/g, ""),
            u = 0,
            c = s.length,
            h = "object" == (typeof e === "undefined" ? "undefined" : (0, _typeof3.default)(e)) ? e.placeholder : void 0;for (r = 0; r < c; r++) {
          if (u >= o.length) {
            if (a.length == l.length) return s.join("");if (void 0 !== h && a.length > l.length) return i(s, r, h).join("");break;
          }if ("9" === s[r] && o[u].match(/[0-9]/) || "A" === s[r] && o[u].match(/[a-zA-Z]/) || "S" === s[r] && o[u].match(/[0-9a-zA-Z]/)) s[r] = o[u++];else if ("9" === s[r] || "A" === s[r] || "S" === s[r]) return void 0 !== h ? i(s, r, h).join("") : s.slice(0, r).join("");
        }return s.join("").substr(0, r);
      }, n.toNumber = function (t) {
        return t.toString().replace(/(?!^-)[^0-9]/g, "");
      }, n.toAlphaNumeric = function (t) {
        return t.toString().replace(/[^a-z0-9 ]+/i, "");
      }, n;
    }) ? r.call(e, i, e, t) : r) || (t.exports = n);
  }, m7v5: function m7v5(t, e) {}, neUY: function neUY(t, e) {}, oWtu: function oWtu(t, e, i) {
    "use strict";
    var r = { name: "icon", props: { type: String, isMsg: Boolean }, computed: { className: function className() {
          return "weui-icon weui_icon_" + this.type + " weui-icon-" + this.type.replace(/_/g, "-");
        } } },
        n = { render: function render() {
        var t = this.$createElement;return (this._self._c || t)("i", { class: [this.className, this.isMsg ? "weui-icon_msg" : ""] });
      }, staticRenderFns: [] };var a = i("VU/8")(r, n, !1, function (t) {
      i("qKOS");
    }, null, null);e.a = a.exports;
  }, pDNl: function pDNl(t, e, i) {
    "use strict";
    var r = i("fZjL"),
        n = i.n(r),
        a = i("f6Hi"),
        s = i("oWtu"),
        o = i("rLAy"),
        l = i("kbG3"),
        u = i("2LX0"),
        c = i.n(u),
        h = i("Ewe+"),
        d = i.n(h),
        f = i("y1vT"),
        p = i.n(f).a,
        v = i("lFEC"),
        m = i.n(v),
        g = { email: { fn: c.a, msg: "邮箱格式" }, "china-mobile": { fn: function fn(t) {
          return d()(t, "zh-CN");
        }, msg: "手机号码" }, "china-name": { fn: function fn(t) {
          return t.length >= 2 && t.length <= 6;
        }, msg: "中文姓名" } },
        y = { name: "x-input", created: function created() {
        var t = this;this.currentValue = void 0 === this.value || null === this.value ? "" : this.mask ? this.maskValue(this.value) : this.value, this.required && void 0 === this.currentValue && (this.valid = !1), this.handleChangeEvent = !0, this.debounce && (this._debounce = p(function () {
          t.$emit("on-change", t.currentValue);
        }, this.debounce));
      }, beforeMount: function beforeMount() {
        this.$slots && this.$slots["restricted-label"] && (this.hasRestrictedLabel = !0);
      }, beforeDestroy: function beforeDestroy() {
        this._debounce && this._debounce.cancel();
      }, mixins: [a.a], components: { Icon: s.a, InlineDesc: l.a, Toast: o.a }, props: { title: { type: String, default: "" }, type: { type: String, default: "text" }, placeholder: String, value: [String, Number], name: String, readonly: Boolean, disabled: Boolean, keyboard: String, inlineDesc: String, isType: [String, Function], min: Number, max: Number, showClear: { type: Boolean, default: !0 }, equalWith: String, textAlign: String, autocomplete: { type: String, default: "off" }, autocapitalize: { type: String, default: "off" }, autocorrect: { type: String, default: "off" }, spellcheck: { type: String, default: "false" }, novalidate: { type: Boolean, default: !1 }, iconType: String, debounce: Number, placeholderAlign: String, labelWidth: String, mask: String, shouldToastError: { type: Boolean, default: !0 } }, computed: { labelStyles: function labelStyles() {
          return { width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed, textAlign: this.$parent.labelAlign, marginRight: this.$parent.labelMarginRight };
        }, labelClass: function labelClass() {
          return { "vux-cell-justify": "justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign };
        }, pattern: function pattern() {
          if ("number" === this.keyboard || "china-mobile" === this.isType) return "[0-9]*";
        }, labelWidthComputed: function labelWidthComputed() {
          var t = this.title.replace(/[^x00-xff]/g, "00").length / 2 + 1;if (t < 10) return t + "em";
        }, hasErrors: function hasErrors() {
          return n()(this.errors).length > 0;
        }, inputStyle: function inputStyle() {
          if (this.textAlign) return { textAlign: this.textAlign };
        }, showWarn: function showWarn() {
          return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
        } }, methods: { onClickErrorIcon: function onClickErrorIcon() {
          this.shouldToastError && this.firstError && (this.showErrorToast = !0), this.$emit("on-click-error-icon", this.firstError);
        }, maskValue: function maskValue(t) {
          return this.mask ? m.a.toPattern(t, this.mask) : t;
        }, reset: function reset() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";this.dirty = !1, this.currentValue = t, this.firstError = "", this.valid = !0;
        }, clear: function clear() {
          this.currentValue = "", this.focus();
        }, focus: function focus() {
          this.$refs.input.focus();
        }, blur: function blur() {
          this.$refs.input.blur();
        }, focusHandler: function focusHandler(t) {
          this.$emit("on-focus", this.currentValue, t);
        }, onBlur: function onBlur(t) {
          this.setTouched(), this.validate(), this.$emit("on-blur", this.currentValue, t);
        }, onKeyUp: function onKeyUp(t) {
          "Enter" === t.key && (t.target.blur(), this.$emit("on-enter", this.currentValue, t));
        }, getError: function getError() {
          var t = n()(this.errors)[0];this.firstError = this.errors[t];
        }, validate: function validate() {
          if (void 0 === this.equalWith) {
            if (this.errors = {}, this.currentValue || this.required) {
              if (!this.currentValue && this.required) return this.valid = !1, this.errors.required = "必填哦", void this.getError();if ("string" == typeof this.isType) {
                var t = g[this.isType];if (t) {
                  var e = this.currentValue;if ("china-mobile" === this.isType && "999 9999 9999" === this.mask && (e = this.currentValue.replace(/\s+/g, "")), this.valid = t.fn(e), !this.valid) return this.forceShowError = !0, this.errors.format = t.msg + "格式不对哦~", void this.getError();delete this.errors.format;
                }
              }if ("function" == typeof this.isType) {
                var i = this.isType(this.currentValue);if (this.valid = i.valid, !this.valid) return this.errors.format = i.msg, this.forceShowError = !0, void this.getError();delete this.errors.format;
              }if (this.min) {
                if (this.currentValue.length < this.min) return this.errors.min = "最少应该输入" + this.min + "个字符哦", this.valid = !1, void this.getError();delete this.errors.min;
              }if (this.max) {
                if (this.currentValue.length > this.max) return this.errors.max = "最多可以输入" + this.max + "个字符哦", this.valid = !1, void (this.forceShowError = !0);this.forceShowError = !1, delete this.errors.max;
              }this.valid = !0;
            } else this.valid = !0;
          } else this.validateEqual();
        }, validateEqual: function validateEqual() {
          return !this.equalWith && this.currentValue ? (this.valid = !1, void (this.errors.equal = "输入不一致")) : (this.dirty || this.currentValue.length >= this.equalWith.length) && this.currentValue !== this.equalWith ? (this.valid = !1, void (this.errors.equal = "输入不一致")) : void (!this.currentValue && this.required ? this.valid = !1 : (this.valid = !0, delete this.errors.equal));
        } }, data: function data() {
        return { hasRestrictedLabel: !1, firstError: "", forceShowError: !1, hasLengthEqual: !1, valid: !0, currentValue: "", showErrorToast: !1 };
      }, watch: { mask: function mask(t) {
          t && this.currentValue && (this.currentValue = this.maskValue(this.currentValue));
        }, valid: function valid() {
          this.getError();
        }, value: function value(t) {
          this.currentValue = t;
        }, equalWith: function equalWith(t) {
          t && this.equalWith ? (t.length === this.equalWith.length && (this.hasLengthEqual = !0), this.validateEqual()) : this.validate();
        }, currentValue: function currentValue(t) {
          !this.equalWith && t && this.validateEqual(), t && this.equalWith ? (t.length === this.equalWith.length && (this.hasLengthEqual = !0), this.validateEqual()) : this.validate(), this.$emit("input", this.maskValue(t)), this._debounce ? this._debounce() : this.$emit("on-change", t);
        } } },
        x = { render: function render() {
        var t = this,
            e = t.$createElement,
            i = t._self._c || e;return i("div", { staticClass: "vux-x-input weui-cell", class: { "weui-cell_warn": t.showWarn, disabled: t.disabled } }, [i("div", { staticClass: "weui-cell__hd" }, [t.hasRestrictedLabel ? i("div", { style: t.labelStyles }, [t._t("restricted-label")], 2) : t._e(), t._v(" "), t._t("label", [t.title ? i("label", { staticClass: "weui-label", class: t.labelClass, style: { width: t.labelWidth || t.$parent.labelWidth || t.labelWidthComputed, textAlign: t.$parent.labelAlign, marginRight: t.$parent.labelMarginRight }, attrs: { for: "vux-x-input-" + t.uuid }, domProps: { innerHTML: t._s(t.title) } }) : t._e(), t._v(" "), t.inlineDesc ? i("inline-desc", [t._v(t._s(t.inlineDesc))]) : t._e()])], 2), t._v(" "), i("div", { staticClass: "weui-cell__bd weui-cell__primary", class: t.placeholderAlign ? "vux-x-input-placeholder-" + t.placeholderAlign : "" }, [t.type && "text" !== t.type ? t._e() : i("input", { directives: [{ name: "model", rawName: "v-model", value: t.currentValue, expression: "currentValue" }], ref: "input", staticClass: "weui-input", style: t.inputStyle, attrs: { id: "vux-x-input-" + t.uuid, maxlength: t.max, autocomplete: t.autocomplete, autocapitalize: t.autocapitalize, autocorrect: t.autocorrect, spellcheck: t.spellcheck, type: "text", name: t.name, pattern: t.pattern, placeholder: t.placeholder, readonly: t.readonly, disabled: t.disabled }, domProps: { value: t.currentValue }, on: { focus: t.focusHandler, blur: t.onBlur, keyup: t.onKeyUp, input: function input(e) {
              e.target.composing || (t.currentValue = e.target.value);
            } } }), t._v(" "), "number" === t.type ? i("input", { directives: [{ name: "model", rawName: "v-model", value: t.currentValue, expression: "currentValue" }], ref: "input", staticClass: "weui-input", style: t.inputStyle, attrs: { id: "vux-x-input-" + t.uuid, maxlength: t.max, autocomplete: t.autocomplete, autocapitalize: t.autocapitalize, autocorrect: t.autocorrect, spellcheck: t.spellcheck, type: "number", name: t.name, pattern: t.pattern, placeholder: t.placeholder, readonly: t.readonly, disabled: t.disabled }, domProps: { value: t.currentValue }, on: { focus: t.focusHandler, blur: t.onBlur, keyup: t.onKeyUp, input: function input(e) {
              e.target.composing || (t.currentValue = e.target.value);
            } } }) : t._e(), t._v(" "), "email" === t.type ? i("input", { directives: [{ name: "model", rawName: "v-model", value: t.currentValue, expression: "currentValue" }], ref: "input", staticClass: "weui-input", style: t.inputStyle, attrs: { id: "vux-x-input-" + t.uuid, maxlength: t.max, autocomplete: t.autocomplete, autocapitalize: t.autocapitalize, autocorrect: t.autocorrect, spellcheck: t.spellcheck, type: "email", name: t.name, pattern: t.pattern, placeholder: t.placeholder, readonly: t.readonly, disabled: t.disabled }, domProps: { value: t.currentValue }, on: { focus: t.focusHandler, blur: t.onBlur, keyup: t.onKeyUp, input: function input(e) {
              e.target.composing || (t.currentValue = e.target.value);
            } } }) : t._e(), t._v(" "), "password" === t.type ? i("input", { directives: [{ name: "model", rawName: "v-model", value: t.currentValue, expression: "currentValue" }], ref: "input", staticClass: "weui-input", style: t.inputStyle, attrs: { id: "vux-x-input-" + t.uuid, maxlength: t.max, autocomplete: t.autocomplete, autocapitalize: t.autocapitalize, autocorrect: t.autocorrect, spellcheck: t.spellcheck, type: "password", name: t.name, pattern: t.pattern, placeholder: t.placeholder, readonly: t.readonly, disabled: t.disabled }, domProps: { value: t.currentValue }, on: { focus: t.focusHandler, blur: t.onBlur, keyup: t.onKeyUp, input: function input(e) {
              e.target.composing || (t.currentValue = e.target.value);
            } } }) : t._e(), t._v(" "), "tel" === t.type ? i("input", { directives: [{ name: "model", rawName: "v-model", value: t.currentValue, expression: "currentValue" }], ref: "input", staticClass: "weui-input", style: t.inputStyle, attrs: { id: "vux-x-input-" + t.uuid, maxlength: t.max, autocomplete: t.autocomplete, autocapitalize: t.autocapitalize, autocorrect: t.autocorrect, spellcheck: t.spellcheck, type: "tel", name: t.name, pattern: t.pattern, placeholder: t.placeholder, readonly: t.readonly, disabled: t.disabled }, domProps: { value: t.currentValue }, on: { focus: t.focusHandler, blur: t.onBlur, keyup: t.onKeyUp, input: function input(e) {
              e.target.composing || (t.currentValue = e.target.value);
            } } }) : t._e()]), t._v(" "), i("div", { staticClass: "weui-cell__ft" }, [i("icon", { directives: [{ name: "show", rawName: "v-show", value: !t.equalWith && t.showClear && t.currentValue && !t.readonly && !t.disabled, expression: "!equalWith && showClear && currentValue && !readonly && !disabled" }], attrs: { type: "clear" }, nativeOn: { click: function click(e) {
              t.clear(e);
            } } }), t._v(" "), i("icon", { directives: [{ name: "show", rawName: "v-show", value: t.showWarn, expression: "showWarn" }], staticClass: "vux-input-icon", attrs: { type: "warn", title: t.valid ? "" : t.firstError }, nativeOn: { click: function click(e) {
              t.onClickErrorIcon(e);
            } } }), t._v(" "), !t.novalidate && t.hasLengthEqual && t.dirty && t.equalWith && !t.valid ? i("icon", { staticClass: "vux-input-icon", attrs: { type: "warn" }, nativeOn: { click: function click(e) {
              t.onClickErrorIcon(e);
            } } }) : t._e(), t._v(" "), i("icon", { directives: [{ name: "show", rawName: "v-show", value: !t.novalidate && t.equalWith && t.equalWith === t.currentValue && t.valid, expression: "!novalidate && equalWith && equalWith === currentValue && valid" }], attrs: { type: "success" } }), t._v(" "), i("icon", { directives: [{ name: "show", rawName: "v-show", value: t.novalidate && "success" === t.iconType, expression: "novalidate && iconType === 'success'" }], staticClass: "vux-input-icon", attrs: { type: "success" } }), t._v(" "), i("icon", { directives: [{ name: "show", rawName: "v-show", value: t.novalidate && "error" === t.iconType, expression: "novalidate && iconType === 'error'" }], staticClass: "vux-input-icon", attrs: { type: "warn" } }), t._v(" "), t._t("right")], 2), t._v(" "), i("toast", { attrs: { type: "text", width: "auto", time: 600 }, model: { value: t.showErrorToast, callback: function callback(e) {
              t.showErrorToast = e;
            }, expression: "showErrorToast" } }, [t._v(t._s(t.firstError))])], 1);
      }, staticRenderFns: [] };var b = i("VU/8")(y, x, !1, function (t) {
      i("rgCu");
    }, null, null);e.a = b.exports;
  }, qKOS: function qKOS(t, e) {}, rgCu: function rgCu(t, e) {}, wUnb: function wUnb(t, e, i) {
    "use strict";
    var r = { render: function render() {
        var t = this.$createElement,
            e = this._self._c || t;return e("div", { staticClass: "song" }, [e("router-link", { attrs: { to: this.link } }, [e("div", { staticClass: "song-index" }, [e("span", { directives: [{ name: "show", rawName: "v-show", value: !this.showCover, expression: "!showCover" }] }, [this._v(this._s(this.songIndex))]), e("img", { directives: [{ name: "show", rawName: "v-show", value: this.showCover, expression: "showCover" }], attrs: { src: this.coverSrc } })]), this._v(" "), e("div", { staticClass: "song-info" }, [e("div", { staticClass: "song-title" }, [e("p", { staticClass: "song-name" }, [this._v(this._s(this.songName))]), this._v(" "), e("p", { staticClass: "song-singer" }, [this._v(this._s(this.songSinger))])]), this._v(" "), e("i", { directives: [{ name: "show", rawName: "v-show", value: !this.showCover, expression: "!showCover" }], staticClass: "iconfont icon-MV" }), this._v(" "), e("i", { staticClass: "iconfont icon-more" })])])], 1);
      }, staticRenderFns: [] };var n = i("VU/8")({ props: ["songName", "songSinger", "songIndex", "link", "showCover", "coverSrc"] }, r, !1, function (t) {
      i("neUY");
    }, "data-v-6de71f38", null);e.a = n.exports;
  }, y1vT: function y1vT(t, e, i) {
    (function (e) {
      var i = "Expected a function",
          r = NaN,
          n = "[object Symbol]",
          a = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          u = parseInt,
          c = "object" == (typeof e === "undefined" ? "undefined" : (0, _typeof3.default)(e)) && e && e.Object === Object && e,
          h = "object" == (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) && self && self.Object === Object && self,
          d = c || h || Function("return this")(),
          f = Object.prototype.toString,
          p = Math.max,
          v = Math.min,
          m = function m() {
        return d.Date.now();
      };function g(t) {
        var e = typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t);return !!t && ("object" == e || "function" == e);
      }function y(t) {
        if ("number" == typeof t) return t;if ("symbol" == (0, _typeof3.default)(e = t) || (i = e) && "object" == (typeof i === "undefined" ? "undefined" : (0, _typeof3.default)(i)) && f.call(e) == n) return r;var e, i;if (g(t)) {
          var c = "function" == typeof t.valueOf ? t.valueOf() : t;t = g(c) ? c + "" : c;
        }if ("string" != typeof t) return 0 === t ? t : +t;t = t.replace(a, "");var h = o.test(t);return h || l.test(t) ? u(t.slice(2), h ? 2 : 8) : s.test(t) ? r : +t;
      }t.exports = function (t, e, r) {
        var n,
            a,
            s,
            o,
            l,
            u,
            c = 0,
            h = !1,
            d = !1,
            f = !0;if ("function" != typeof t) throw new TypeError(i);function x(e) {
          var i = n,
              r = a;return n = a = void 0, c = e, o = t.apply(r, i);
        }function b(t) {
          var i = t - u;return void 0 === u || i >= e || i < 0 || d && t - c >= s;
        }function _() {
          var t,
              i,
              r = m();if (b(r)) return w(r);l = setTimeout(_, (i = e - ((t = r) - u), d ? v(i, s - (t - c)) : i));
        }function w(t) {
          return l = void 0, f && n ? x(t) : (n = a = void 0, o);
        }function $() {
          var t,
              i = m(),
              r = b(i);if (n = arguments, a = this, u = i, r) {
            if (void 0 === l) return c = t = u, l = setTimeout(_, e), h ? x(t) : o;if (d) return l = setTimeout(_, e), x(u);
          }return void 0 === l && (l = setTimeout(_, e)), o;
        }return e = y(e) || 0, g(r) && (h = !!r.leading, s = (d = "maxWait" in r) ? p(y(r.maxWait) || 0, e) : s, f = "trailing" in r ? !!r.trailing : f), $.cancel = function () {
          void 0 !== l && clearTimeout(l), c = 0, n = u = a = l = void 0;
        }, $.flush = function () {
          return void 0 === l ? o : w(m());
        }, $;
      };
    }).call(e, i("DuR2"));
  } });
//# sourceMappingURL=0.6c6714010b91dc0820d2.js.map
//# sourceMappingURL=0.6c6714010b91dc0820d2.js.map