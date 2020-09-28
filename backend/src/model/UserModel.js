const mongoose = require('../config/database')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, lowercase: true, required: true, match: [/^[a-zA-Z0-9]+$/, 'Inválido'], index: true},
    pw: {type: String, required: true},
    email: {type: String, lowercase: true, required: true, match: [/\S+@\S+\.\S+/, 'Inválido'], index: true},
    active: {type: Boolean, default:true},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('User', UserSchema);