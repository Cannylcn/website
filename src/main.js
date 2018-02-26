'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _vux = require('vux');

var _axios = require('./axios');

var _axios2 = _interopRequireDefault(_axios);

var _index = require('./store/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.config.productionTip = false;

_vue2.default.use(_vux.AlertPlugin);
_vue2.default.use(_vux.ToastPlugin);
_vue2.default.use(_vux.ConfirmPlugin);
_vue2.default.use(_vux.AjaxPlugin);

/* eslint-disable no-new */
new _vue2.default({
  axios: _axios2.default,
  store: _index2.default,
  router: _router2.default,
  render: function render(h) {
    return h(_App2.default);
  }
}).$mount('#app');
//# sourceMappingURL=main.js.map