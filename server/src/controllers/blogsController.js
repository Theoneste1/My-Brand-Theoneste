// controllers
// importing runtime to support async in es6
import 'regenerator-runtime/runtime'
import blogmodel from "./../models/blogModel"

// find all blogs
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

    // controller, create one blog
const createBlog = (req, res, next) => {
    const newBlog = new blogmodel({
        image: req.body.image,
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

// find only one blog
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

// update one blog
const upDateBlog = (req, res, next) => {
    blogmodel.findById({ _id: req.params.id }).then(
        (blog) => {
            if (req.body.image) {
                blog.image = req.body.image
            }
            if (req.body.topic) {
                blog.topic = req.body.topic
            }
            if (req.body.content) {
                blog.content = req.body.content
            }
            blog.save()
            res.send(blog)
        }).catch(
            (error) => {
                res.status(404).json({
                    error: error
                });
            }
        )
}

    // dele one blog
const deleteBlog = async (req, res, next) => {
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

export {createBlog, deleteBlog, findAllBlogs,findOneBlog, upDateBlog }