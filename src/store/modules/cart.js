'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _mutations; /**
                 *Created by admin on 2018/1/31
                 */


var _shop = require('../../api/shop');

var _shop2 = _interopRequireDefault(_shop);

var _types = require('../types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initial state
// shape: [{ id, quantity }]
var state = {
  added: [],
  checkoutStatus: null

  // getters
};var getters = {
  checkoutStatus: function checkoutStatus(state) {
    return state.checkoutStatus;
  },

  cartProducts: function cartProducts(state, getters, rootState) {
    return state.added.map(function (_ref) {
      var id = _ref.id,
          quantity = _ref.quantity;

      var product = rootState.products.all.find(function (product) {
        return product.id === id;
      });
      return {
        title: product.title,
        price: product.price,
        quantity: quantity
      };
    });
  },

  cartTotalPrice: function cartTotalPrice(state, getters) {
    return getters.cartProducts.reduce(function (total, product) {
      return total + product.price * product.quantity;
    }, 0);
  }

  // actions
};var actions = {
  checkout: function checkout(_ref2, products) {
    var commit = _ref2.commit,
        state = _ref2.state;

    var savedCartItems = [].concat((0, _toConsumableArray3.default)(state.added));
    commit(types.SET_CHECKOUT_STATUS, null);
    // empty cart
    commit(types.SET_CART_ITEMS, { items: [] });
    _shop2.default.buyProducts(products, function () {
      return commit(types.SET_CHECKOUT_STATUS, 'successful');
    }, function () {
      commit(types.SET_CHECKOUT_STATUS, 'failed');
      // rollback to the cart saved before sending the request
      commit(types.SET_CART_ITEMS, { items: savedCartItems });
    });
  }
};

// mutations
var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.ADD_TO_CART, function (state, _ref3) {
  var id = _ref3.id;

  state.checkoutStatus = null;
  var record = state.added.find(function (product) {
    return product.id === id;
  });
  if (!record) {
    state.added.push({
      id: id,
      quantity: 1
    });
  } else {
    record.quantity++;
  }
}), (0, _defineProperty3.default)(_mutations, types.SET_CART_ITEMS, function (state, _ref4) {
  var items = _ref4.items;

  state.added = items;
}), (0, _defineProperty3.default)(_mutations, types.SET_CHECKOUT_STATUS, function (state, status) {
  state.checkoutStatus = status;
}), _mutations);

exports.default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
//# sourceMappingURL=cart.js.map