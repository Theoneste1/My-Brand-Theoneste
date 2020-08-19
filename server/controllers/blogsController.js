// controllers
// importing runtime to support async in es6
import 'regenerator-runtime/runtime'
import blogmodel from "../models/blogModel"

// find all blogs
const findAllBlogs = (req, res, next) => {
    blogmodel.find().then(
        (blogs) => {
            res.status(200)
                .send({ status: 200, blogs: blogs })
        }
    ).catch(
        (error)=> {
            res.status(400).
            send({status:400, error: error
            });
        }
    );
}

    // controller, create one blog
const createBlog = (req, res, next) => {
    const newBlog = new blogmodel({
        imageLink: req.body.imageLink,
        topic: req.body.topic,
        content: req.body.content
    });
    newBlog.save().then(
        () => {
            res.status(201).send({status:201, message:"blog created successfully"
            });
        }
    ).catch(
        (error) => {
            res.status(400).send({status:400, error:error
            });
        });
};

// find only one blog
const findOneBlog = (req, res, next) => {
    blogmodel.findById({
        _id: req.params.id
    }).then(
        (blog) => {
            res.status(200).send({ status:200, foundBlog:blog});
        }
    ).catch(
        (error) => {
            res.status(404).send({status:404,
                error: error
            });
        }
    );
};

// update one blog
const upDateBlog = (req, res, next) => {
    blogmodel.findById({ _id: req.params.id }).then(
        (blog) => {
            if (req.body.imageLink) {
                blog.imageLink = req.body.imageLink
            }
            if (req.body.topic) {
                blog.topic = req.body.topic
            }
            if (req.body.content) {
                blog.content = req.body.content
            }
            blog.save()
            res.send({status:200, message:"blog updated successfully"})
        }).catch(
            (error) => {
                res.status(404).send({ status:404,
                    error: error
                });
            }
        )
}

    // dele one blog
const deleteBlog = async (req, res, next) => {
    try {
        await blogmodel.deleteOne({ _id: req.params.id })
        res.status(204).send({status:204, message:"blog deleted"} )
    } catch{
        (error) => {
            res.status(404).send({status:404,
                error: "blog deleted",

            });
        }
    }
}

export {createBlog, deleteBlog, findAllBlogs,findOneBlog, upDateBlog }
