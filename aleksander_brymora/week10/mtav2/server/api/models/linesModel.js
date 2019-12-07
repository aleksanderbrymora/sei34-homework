const mongoose = require('mongoose');
const { Schema } = mongoose;

const LineSchema = new Schema({
    name: String,
    stops: Array
});

module.exports = mongoose.model('Lines', LineSchema);