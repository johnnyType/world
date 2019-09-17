const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const historySchema = new Schema({
    year: String,
    china: Array
});
module.exports = mongoose.model('historys',historySchema);