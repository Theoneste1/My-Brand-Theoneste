import mongoose from "mongoose"
const schema = new mongoose.Schema({
    topic: { type: String, required: true },
    content: {type:String, required:true}
});
module.exports = mongoose.model("Blog", schema);
