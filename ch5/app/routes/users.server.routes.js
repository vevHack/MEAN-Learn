/**
 * Created by Zen on 2015/8/16.
 */
var users = require('../../app/controller/user.server.controller');

//创建的Express应用主要是为AngularJS应用提供REST风格的API，因此在创建路由时尽量遵循REST的理念
module.exports = function (app) {
    app.route('/users').post(users.create).get(users.list);
    app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);
    app.param('userId', users.userByID);
};