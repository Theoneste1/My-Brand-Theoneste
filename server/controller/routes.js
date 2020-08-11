//importing model blog
const blogModel = require('../models/blog');

exports.findBlogs = async (req, res) => {
    const blogs = await blogModel.find();
    res.send({ data: blogs });

}
exports.createBlog = async (req, res) => {
    const newBlog = new blogModel({
        topic: req.body.topic,
        content: req.body.content

    })
    await newBlog.save();
    res.send({data:newBlog})
}

exports.findBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id)
        res.send({ data: blog })
    } catch{
        res.status(404).send({ error: "This blog does not exist!" })
    }
}
exports.updateBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id)
        if (req.body.topic) {
            blog.topic=req.body.topic
        }
        if (req.body.content) {
            blog.content=req.body.content
        }

        await blog.save();
        res.send({data:blog})
    } catch{
        res.status(404).send({ error: "This blog does not exist!" })
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id)
        await blog.remove();
        res.status(204).send()
    } catch{
        res.status(404).send({ error: "This blog does not exist!" })
    }

}
