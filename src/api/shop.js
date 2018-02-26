'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *Created by admin on 2018/1/31
 */
var _product = [{ 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 }, { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 }, { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }];

exports.default = {
  getProduct: function getProduct(cb) {
    setTimeout(function () {
      return cb(_product);
    }, 100);
  },
  buyProducts: function buyProducts(products, cb, errorCb) {
    setTimeout(function () {
      Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1 ? cb() : errorCb();
    }, 100);
  }
};
//# sourceMappingURL=shop.js.map