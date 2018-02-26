'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations; /**
                 *Created by admin on 2018/1/31
                 */


var _shop = require('../../api/shop');

var _shop2 = _interopRequireDefault(_shop);

var _types = require('../types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  all: []

  // getters
};var getters = {
  allProducts: function allProducts(state) {
    return state.all;
  }

  // actions
};var actions = {
  getAllProducts: function getAllProducts(_ref) {
    var commit = _ref.commit;

    _shop2.default.getProduct(function (products) {
      commit(types.RECEIVE_PRODUCTS, { products: products });
    });
  }
};

// mutations
var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.RECEIVE_PRODUCTS, function (state, _ref2) {
  var products = _ref2.products;

  state.all = products;
}), (0, _defineProperty3.default)(_mutations, types.ADD_TO_CART, function (state, _ref3) {
  var id = _ref3.id;

  state.all.find(function (product) {
    return product.id === id;
  }).inventory--;
}), _mutations);

exports.default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
//# sourceMappingURL=products.js.map