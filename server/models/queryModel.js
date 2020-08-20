//schema.js

import mongoose from"mongoose"
const schema = new mongoose.Schema({
    firstName: String, 
    lastName: String,
    email: String,
    message: String,
});
module.exports = mongoose.model("Query", schema);
