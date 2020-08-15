import blogmodel from "./../../models/blog"

const createBlog = (req, res, next) => {
    const newBlog = new blogmodel({
        topic: req.body.topic,
        content: req.body.content
    });
    newBlog.save().then(
        () => {
            res.status(201).json({
                message: 'Blog saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                message: 'Blog not saved!',
            });
            console.log("THis sis errot:", error);
        });

};

export default createBlog
