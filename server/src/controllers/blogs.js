const blogmodel = require("../models/blog")

exports.findBlogs=async (req, res) => {
    const blogs = await blogmodel.find();
    res.send({ data: blogs });
}

exports.createBlog = async (req, res) => {
    const newBlog = new blogmodel(req.body)
    await newBlog.save();
    res.send({ data: newBlog })
}

exports.findBlog = async (req, res) => {
    try {
        const blog = await blogmodel.findById(req.params.id)
        res.send({ data: blog })
    } catch{
        res.status(404).send({ error: "Blog does not exist" })
    }

}

exports.updateBlog = async (req, res) => {
    try {
        const blog = await blogmodel.findById(req.params.id)
        Object.assign(blog, req.body)
        blog.save();
        res.send({ data: blog })
    } catch{
        res.status(404).send({ error: "Blog does not exist" })
    }

}
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await blogmodel.findById(req.params.id)
        await blog.remove();
        res.send({ data: true })
    } catch{
        res.status(404).send({ error: "Blog does not exist" })
    }

}
