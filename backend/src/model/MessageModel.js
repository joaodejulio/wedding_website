const mongoose = require('../config/database')

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    macaddress: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    active: {type: Boolean, default:true},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Message', MessageSchema);