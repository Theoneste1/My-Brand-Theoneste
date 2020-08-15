// importing runtime to support async in es6
import 'regenerator-runtime/runtime'
import querymodel from "./../../models/query"

const deleteQuery = async (req, res, next) => {
    try {
        await querymodel.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch{
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    }
}
export default deleteQuery
