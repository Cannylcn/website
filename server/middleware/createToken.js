'use strict';

/**
 *Created by admin on 2018/1/15
 */
var jwt = require('jsonwebtoken');

module.exports = function (name) {
  var token = jwt.sign({
    name: name
  }, 'secret', { expiresIn: '10s' });
  return token;
};
//# sourceMappingURL=createToken.js.map