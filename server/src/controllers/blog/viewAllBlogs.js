import blogmodel from "./../../models/blog"

const findAllBlogs = (req, res, next) => {
    blogmodel.find().then(
        (blogs) => {
            res.status(200).json(blogs)
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

export default findAllBlogs