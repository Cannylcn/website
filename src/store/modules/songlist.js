'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shop = require('../../api/shop');

var _shop2 = _interopRequireDefault(_shop);

var _types = require('../types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *Created by admin on 2018/2/1
 */
var state = {
  all: []

  // getters
};var getters = {
  recommendSongList: function recommendSongList(state) {
    return state.all;
  }
};

exports.default = {
  state: state,
  getters: getters
};
//# sourceMappingURL=songlist.js.map