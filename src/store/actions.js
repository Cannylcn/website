'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  UserLogin: function UserLogin(_ref, data) {
    var commit = _ref.commit;

    commit(types.LOGIN, data);
  },
  UserLogout: function UserLogout(_ref2) {
    var commit = _ref2.commit;

    commit(types.LOGOUT);
  },
  UserName: function UserName(_ref3, data) {
    var commit = _ref3.commit;

    commit(types.USERNAME, data);
  },
  changeTest: function changeTest(_ref4, data) {
    var commit = _ref4.commit;

    commit(types.TEST, data);
  },
  updateDirection: function updateDirection(_ref5, data) {
    var commit = _ref5.commit;

    commit(types.DIRECTION, data);
  },
  addToCart: function addToCart(_ref6, product) {
    var commit = _ref6.commit;

    if (product.inventory > 0) {
      commit(types.ADD_TO_CART, {
        id: product.id
      });
    }
  },
  updateTitle: function updateTitle(_ref7, data) {
    var commit = _ref7.commit;

    commit(types.SET_TITLE, data);
  }
}; /**
    *Created by admin on 2018/1/15
    */
// import api from '../axios'
// import Vue from 'vue'
// import router from '../router/index'
//# sourceMappingURL=actions.js.map