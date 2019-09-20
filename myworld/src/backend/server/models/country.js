const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const historySchema = new Schema({
    id: String,
    name: String,
    intl: String
});
module.exports = mongoose.model('historys',historySchema);