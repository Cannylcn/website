'use strict';

/**
 *Created by admin on 2018/1/15
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var routes = require('./server/routes/user.js');
var config = require('config-lite')(__dirname);
var compression = require('compression');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(compression({ threshold: 0 }));
app.use('/api', routes);

app.use(function (req, res, next) {
  var err = new Error('This page not found');
  err.status = 404;
  next(err);
});

app.listen(3000, function () {
  console.log('Server running in port ' + config.port);
});
//# sourceMappingURL=app.js.map