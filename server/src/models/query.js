const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email_address: String,
    message:String
});
module.exports = mongoose.model("Query", schema);
