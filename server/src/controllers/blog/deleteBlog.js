import blogmodel from "./../../models/blog"

const deleteBlog = (re, res, next) => {
    blogmodel.deleteOne({
        _id: req.params.id

    }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

export default deleteBlog