/**
 * Created by Zen on 2015/8/16.
 */
module.exports = function (app) {
    var index = require('../../app/controller/index.server.controller');
    app.get('/', index.render);
};