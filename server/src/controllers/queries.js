const querymodel = require("../models/query")

// display all queries
exports.findQueries = async (req, res) => {
    const queries = await querymodel.find();
    res.send({ data: queries })
}
// create queries
exports.createQueries = async (req, res) => {
    const newQuery = new querymodel(req.body)
    await newQuery.save();
    res.send({data:newQuery})
}

//delete Queries
exports.deleteQuery = async (req, res) => {
    try {
        const query = await querymodel.findById(req.params.id)
        await query.remove();
        res.send({ data: true })
    } catch{
        res.status(404).send({ error: "query does not exist" })
    }

}
