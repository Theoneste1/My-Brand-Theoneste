import mongoose from "mongoose"
const schema = new mongoose.Schema({
    image: String,
    topic: String,
    content: String,
});
module.exports = mongoose.model("Blog", schema);
