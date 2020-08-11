const mongoose = require("mongoose")

// constructing schema with mongoose.Schema //rules
const schema = mongoose.Schema({
    topic: String,
    content: String
})
// create new model by using schema we have just created
module.exports = mongoose.model("Blog", schema)