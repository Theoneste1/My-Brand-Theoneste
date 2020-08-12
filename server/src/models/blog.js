const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    topic: String,
    content: String
});
module.exports = mongoose.model("Blog", schema);
