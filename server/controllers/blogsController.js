// controllers
// importing runtime to support async in es6
import 'regenerator-runtime/runtime'
import blogmodel from "../models/blogModel"

// find all blogs
const findAllBlogs = (req, res, next) => {
    blogmodel.find().then((blogs) => {
           return res.status(200).send({ status: 200, data: blogs })
        }).catch((error)=> {
            return res.status(404).send({status:404, error: error });
        });
}

    // controller, create one blog
const createBlog = (req, res) => {
    const newBlog = new blogmodel(req.body)
    newBlog.save().then(() => {
        return res.status(201).send({ data: newBlog});
        }).catch((error) => {
          return  res.status(400).send({status:400, error:error});
        });
};

// find only one blog
const findOneBlog = (req, res, next) => {
    blogmodel.findById({ _id: req.params.id}).then((blog) => {
           return res.status(200).send({ status:200, data:blog});
        }).catch((error) => {
          return res.status(404).send({status:404,error: error});
        });
}

// update one blog
const upDateBlog = (req, res, next) => {
    blogmodel.findById({ _id: req.params.id }).then((blog) => {
            if (req.body.imageLink) {blog.imageLink = req.body.imageLink}
            if (req.body.topic) {blog.topic = req.body.topic}
            if (req.body.content) {blog.content = req.body.content}
            blog.save()
           return res.send({status:200, message:"blog updated successfully"})
        }).catch((error) => {
               return res.status(404).send({ status:404, error: error});
            })
}

    // dele one blog
const deleteBlog = async (req, res, next) => {
    try {
        await blogmodel.deleteOne({ _id: req.params.id })
        return res.status(204).send({status:204, message:"blog deleted"} )
    } catch{(error) => {
           return res.status(404).send({status:404,error: "blog deleted"});
        }}
}

export {createBlog, deleteBlog, findAllBlogs,findOneBlog, upDateBlog }
