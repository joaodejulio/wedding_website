const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/wedding';

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});

module.exports = mongoose;