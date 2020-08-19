import mongoose from "mongoose"
const schema = new mongoose.Schema({
    topic: {type: String,required: true},
    imageLink: { type: String,required: true},
    content: {type: String,required: true},
    comments: { type:Array},
    likes:{ type: Number, default: 0},
    dislikes: { type: Number, default: 0}
});
module.exports = mongoose.model("Blog", schema);
