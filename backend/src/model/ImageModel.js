const mongoose = require('../config/database')

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {Type: String, data: Buffer},
    active: {type: Boolean, default:true},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Image', ImageSchema);