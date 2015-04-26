var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Checkin = new Schema({
    username: { type: String },
    bathroom: { type: String },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Checkin', Checkin);
