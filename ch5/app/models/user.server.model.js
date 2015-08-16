/**
 * Created by Zen on 2015/8/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//使用模式构造器定义了UserSchema对象
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    created: {
        type: Date,
        default: Date.now
    }
});

//使用模式实例定义User模型
mongoose.model('User', UserSchema);