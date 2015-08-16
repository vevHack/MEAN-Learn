/**
 * Created by Zen on 2015/8/16.
 */
var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);
    require('../app/models/user.server.model.js');
    return db;
};
