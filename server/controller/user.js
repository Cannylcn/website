'use strict';

/**
 *Created by admin on 2018/1/15
 */
var express = require('express');
var model = require('../db/db.js');
var router = express.Router();
var moment = require('moment');
var objectIdToTimestamp = require('objectid-to-timestamp');
var createToken = require('../middleware/createToken.js');
var sha1 = require('sha1');
var checkToken = require('../middleware/checkToken.js');

// 注册
var Register = function Register(req, res) {
  var userRegister = new model.User({
    phone: req.body.phone,
    password: sha1(req.body.password),
    recheck: req.body.recheck,
    token: createToken(undefined.phone)
  });

  userRegister.create_time = moment(objectIdToTimestamp(userRegister._id)).format('YYYY-MM-DD HH:mm:ss');

  model.User.findOne({
    phone: userRegister.phone
  }, function (err, doc) {
    if (err) console.log(err);
    if (doc) {
      res.json({
        success: false
      });
    } else {
      userRegister.save(function (err) {
        if (err) console.log(err);
        console.log('register success');
        res.json({
          success: true
        });
      });
    }
  });
};

// 登录
var Login = function Login(req, res) {
  var userLogin = new model.User({
    phone: req.body.phone,
    password: sha1(req.body.password),
    token: createToken(undefined.phone)
  });
  model.User.findOne({ phone: userLogin.phone }, function (err, doc) {
    if (err) console.log(err);
    if (!doc) {
      console.log('账号不存在');
      res.json({
        info: false
      });
    } else if (userLogin.password === doc.password) {
      console.log('登录成功');
      var name = req.body.phone;
      res.json({
        success: true,
        phone: doc.phone,
        time: moment(objectIdToTimestamp(doc._id)).format('YYYY-MM-DD HH:mm:ss'),
        token: createToken(name)
      });
    } else {
      console.log('密码错误');
      res.json({
        success: false
      });
    }
  });
};

// 所有用户打印
var User = function User(req, res) {
  model.User.find({}, function (err, doc) {
    if (err) console.log(err);
    res.send(doc);
  });
};

// 删除用户
var delUser = function delUser(req, res) {
  model.User.findOneAndDelete({ _id: req.body._id }, function (err) {
    if (err) console.log(err);
    console.log('删除用户成功');
    res.json({
      success: true
    });
  });
};

module.exports = function (router) {
  router.post('/register', Register);
  router.post('/login', Login);
  router.get('/user', checkToken, User);
  router.post('delUser', checkToken, delUser);
};
//# sourceMappingURL=user.js.map