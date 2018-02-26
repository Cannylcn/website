'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

var _cart = require('./modules/cart');

var _cart2 = _interopRequireDefault(_cart);

var _products = require('./modules/products');

var _products2 = _interopRequireDefault(_products);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default); /**
                                         *Created by admin on 2018/1/15
                                         */

_vue2.default.use(_vuex2.default);

var state = {
  token: null,
  activeName: 'first',
  username: '',
  direction: 'forward',
  title: ''
};

exports.default = new _vuex2.default.Store({
  state: state,
  mutations: _mutations2.default,
  modules: {
    cart: _cart2.default,
    products: _products2.default
  },
  actions: _actions2.default
});
//# sourceMappingURL=index.js.map