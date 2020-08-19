import mongoose from "mongoose"
const schema = new mongoose.Schema({
    picture: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    skills: {
        type: Array
    }
});
module.exports = mongoose.model("Profile", schema);
