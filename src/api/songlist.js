'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *Created by admin on 2018/2/1
 */
var _songlist = [{ 'id': 1, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万' }, { 'id': 2, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万' }, { 'id': 3, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万' }, { 'id': 4, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万' }, { 'id': 5, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万' }, { 'id': 6, 'description': '沈以诚 焦迈奇 徐秉龙', 'listUrl': './static/images/cover.jpg', 'listener': '208万' }];

exports.default = {
  getSongList: function getSongList(cb) {
    setTimeout(function () {
      return cb(_songlist);
    }, 100);
  },
  buyProducts: function buyProducts(products, cb, errorCb) {
    setTimeout(function () {
      Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1 ? cb() : errorCb();
    }, 100);
  }
};
//# sourceMappingURL=songlist.js.map