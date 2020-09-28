const mongoose = require('../config/database')

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    qtty: {type: Number, min: 0},
    active: {type: Boolean, default:true},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Product', ProductSchema);