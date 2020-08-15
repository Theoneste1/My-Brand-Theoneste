// importing runtime to support async in es6
import 'regenerator-runtime/runtime'
import blogmodel from "./../../models/blog"

const deleteBlog =async (req, res, next) => {
    try {
        await blogmodel.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch{
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    }
}
export default deleteBlog
