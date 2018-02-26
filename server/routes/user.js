'use strict';

/**
 *Created by admin on 2018/1/15
 */
var express = require('express');
var UserController = require('../controller/user.js');
var router = express.Router();

UserController(router);

module.exports = router;
//# sourceMappingURL=user.js.map