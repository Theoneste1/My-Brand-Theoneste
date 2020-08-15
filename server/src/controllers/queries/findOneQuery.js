import querymodel from "./../../models/query"

const findOneQuery = (req, res, next) => {
    querymodel.findById({
        _id: req.params.id
    }).then(
        (blog) => {
            res.status(200).json(blog);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};


export default findOneQuery