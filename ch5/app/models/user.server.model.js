/**
 * Created by Zen on 2015/8/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//使用模式构造器定义了UserSchema对象
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true,
        match: /.+\@.+\..+/
    },
    website: {
        type: String,
        set: function (url) {
            if (!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
                    url = 'http://' + url;
                }
            }
            return url;
        },
        get: function (url) {
            if (!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
                    url = 'http://' + url;
                }
            }
            return url;
        }
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Owner', 'User']
    },
    password: {
        type: String,
        validate: [
            function (password) {
                return password.length > 6;
            },
            'Password should be longer'
        ]
    },
    created: {
        type: Date,
        default: Date.now
    }
});
UserSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function (fullName) {
    var splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});
UserSchema.set('toJSON', {getters: true, virtuals: true});

//自定义静态方法
UserSchema.statics.findOneByUsername = function (username, callback) {
    this.findOne({username: new RegExp(username, 'i')}, callback)
};

//自定义实例方法
UserSchema.methods.authenticate = function (password) {
    return this.password === password;
};

//前置处理中间件，在保存之前进行某些处理,多用于实现复杂的验证其和默认值初始化功能
UserSchema.pre('save', function (next) {
    if (true) {
        next();
    } else {
        next(new Error('An Error Occured'));
    }
});
//后置处理中间件，再保存之后进行某些处理，比如日志功能
UserSchema.post('save', function (next) {
    if (this.isNew) {
        console.log('A new user was created.');
    } else {
        console.log('A user updated is details.');
    }
});
//使用模式实例定义User模型
mongoose.model('User', UserSchema);