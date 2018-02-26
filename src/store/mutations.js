'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations; /**
                 *Created by admin on 2018/1/15
                 */


var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.LOGIN, function (state, data) {
  localStorage.setItem('token', data);
  state.token = data;
}), (0, _defineProperty3.default)(_mutations, types.LOGOUT, function (state) {
  localStorage.removeItem('token');
  state.token = null;
}), (0, _defineProperty3.default)(_mutations, types.USERNAME, function (state, data) {
  localStorage.setItem('username', data);
  state.username = data;
}), (0, _defineProperty3.default)(_mutations, types.TEST, function (state, data) {
  state.test = data;
}), (0, _defineProperty3.default)(_mutations, types.DIRECTION, function (state, data) {
  state.direction = data;
}), (0, _defineProperty3.default)(_mutations, types.SET_TITLE, function (state, data) {
  state.title = data;
}), _mutations);

exports.default = mutations;
//# sourceMappingURL=mutations.js.map