var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, require: true },
    gender: String,
    age: Number
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
