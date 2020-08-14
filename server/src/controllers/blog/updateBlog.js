import blogmodel from "./../../models/blog"

const upDateBlog = (req, res, next) => {
    const blog = new blogmodel.findById({
        _id: req.params.id,
        image: req.body.title,
        topic: req.body.topic,
        content: req.body.content
    });
    blogmodel.updateOne(
        { _id: req.params.id }, blog).then(
            () => {
                res.status(201).json({
                    message: "blog updated successfully!"
                });
            }).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );
}


export  default upDateBlog 