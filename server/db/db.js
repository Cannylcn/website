'use strict';

/**
 *Created by admin on 2018/1/15
 */
var mongoose = require('mongoose');
var config = require('config-lite')(__dirname);

mongoose.connect(config.mongodb, { useMongoClient: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connect error'));
db.once('open', function () {
  console.log('Mongodb started successfully');
});

var userSchema = mongoose.Schema({
  phone: String,
  password: String,
  recheck: String,
  token: String,
  create_time: Date
});

var model = {
  User: mongoose.model('User', userSchema)
};

module.exports = model;
//# sourceMappingURL=db.js.map