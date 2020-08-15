import blogmodel from "./../../models/blog"

const findOneBlog = (req, res, next) => {
    blogmodel.findById({
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


export default findOneBlog
