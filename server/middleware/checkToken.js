'use strict';

/**
 *Created by admin on 2018/1/15
 */
var jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
  var token = req.header['authorization'].split(' ')[1];
  var decoded = jwt.decode(token, 'secret');
  if (token && decoded.exp <= Date.now() / 1000) {
    return res.json({
      code: 401,
      message: 'token过期，请重新登录'
    });
  }
  next();
};
//# sourceMappingURL=checkToken.js.map