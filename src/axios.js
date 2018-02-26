'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import router from './router/index'
// import store from './store/types'
// import * as types from './store/types'

_axios2.default.default.timeout = 500; /**
                                        *Created by admin on 2018/1/15
                                        */

_axios2.default.defaults.headers.post['Content-Type'] = 'application/json';

var instance = _axios2.default.create();
instance.defaults.headers.post['Content-Type'] = 'application/json';

_axios2.default.interceptors.request.use = instance.interceptors.request.use;
instance.interceptors.request.use(function (config) {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = 'token ' + localStorage.getItem('token');
    // .replace(/(^\")|(\"$)/g, '')
  }
  return config;
}, function (err) {
  return _promise2.default.reject(err);
});

// axios拦截响应
instance.interceptors.response.use(function (response) {
  return response;
}, function (err) {
  return _promise2.default.reject(err);
});

exports.default = {
  userRegister: function userRegister(data) {
    return instance.post('/api/register', data);
  },
  UserLogin: function UserLogin(data) {
    return instance.post('/api/login', data);
  },
  getUser: function getUser() {
    return instance.get('/api/user');
  },
  delUser: function delUser(data) {
    return instance.post('/api/delUser', data);
  }
};
//# sourceMappingURL=axios.js.map