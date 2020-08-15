//schema.js

import mongoose from"mongoose"
const schema = new mongoose.Schema({
    firstName: { type:String, required:true},
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});
module.exports = mongoose.model("Query", schema);
