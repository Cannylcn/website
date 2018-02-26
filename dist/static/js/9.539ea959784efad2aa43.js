"use strict";

webpackJsonp([9], { "4/gn": function gn(t, e) {}, Dcal: function Dcal(t, e, c) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = c("Dd8w"),
        r = c.n(n),
        o = c("2sLL"),
        s = c("NYxO"),
        a = { computed: Object(s.c)({ products: "allProducts" }), methods: Object(s.b)(["addToCart"]), created: function created() {
        this.$store.dispatch("getAllProducts");
      } },
        u = { render: function render() {
        var t = this,
            e = t.$createElement,
            c = t._self._c || e;return c("div", [c("ul", t._l(t.products, function (e) {
          return c("li", [t._v("\n      " + t._s(e.title) + " -" + t._s(t._f("currency")(e.price)) + "\n      "), c("br"), t._v(" "), c("button", { attrs: { disabled: !e.inventory }, on: { click: function click(c) {
                t.addToCart(e);
              } } }, [t._v("Add to cart")])]);
        }))]);
      }, staticRenderFns: [] };var i = c("VU/8")(a, u, !1, function (t) {
      c("4/gn");
    }, "data-v-28038f28", null).exports,
        d = { computed: r()({}, Object(s.c)({ products: "cartProducts", checkoutStatus: "checkoutStatus", total: "cartTotalPrice" })), methods: { checkout: function checkout(t) {
          this.$store.dispatch("checkout", t);
        } } },
        l = { render: function render() {
        var t = this,
            e = t.$createElement,
            c = t._self._c || e;return c("div", { staticClass: "cart" }, [c("h2", [t._v("Your Cart")]), t._v(" "), c("p", { directives: [{ name: "show", rawName: "v-show", value: !t.products.length, expression: "!products.length" }] }, [c("i", [t._v("Please add some products to cart.")])]), t._v(" "), c("ul", t._l(t.products, function (e) {
          return c("li", [t._v("\n      " + t._s(e.title) + " - " + t._s(t._f("currency")(e.price)) + " x " + t._s(e.quantity) + "\n    ")]);
        })), t._v(" "), c("p", [t._v("Total: " + t._s(t._f("currency")(t.total)))]), t._v(" "), c("p", [c("button", { attrs: { disabled: !t.products.length }, on: { click: function click(e) {
              t.checkout(t.products);
            } } }, [t._v("Checkout")])]), t._v(" "), c("p", { directives: [{ name: "show", rawName: "v-show", value: t.checkoutStatus, expression: "checkoutStatus" }] }, [t._v("Checkout " + t._s(t.checkoutStatus) + ".")])]);
      }, staticRenderFns: [] };var v = c("VU/8")(d, l, !1, function (t) {
      c("g+at");
    }, "data-v-01400036", null).exports,
        _ = { components: { XButton: o.a, ProductList: i, ShoppingCart: v }, data: function data() {
        return { username: localStorage.getItem("username") };
      }, computed: r()({}, Object(s.d)(["showMenu"])) },
        p = { render: function render() {
        var t = this,
            e = t.$createElement,
            c = t._self._c || e;return c("div", { staticClass: "popular" }, [c("h1", [t._v("welcome " + t._s(t.username))]), t._v(" "), c("product-list"), t._v(" "), c("hr"), t._v(" "), c("shopping-cart"), t._v(" "), c("x-button", { attrs: { type: "primary", link: "/" }, nativeOn: { click: function click(e) {
              t.iconType = "error";
            } } }, [t._v("返回首页")])], 1);
      }, staticRenderFns: [] };var h = c("VU/8")(_, p, !1, function (t) {
      c("Gc0s");
    }, "data-v-22849789", null);e.default = h.exports;
  }, Gc0s: function Gc0s(t, e) {}, "g+at": function gAt(t, e) {} });
//# sourceMappingURL=9.539ea959784efad2aa43.js.map
//# sourceMappingURL=9.539ea959784efad2aa43.js.map