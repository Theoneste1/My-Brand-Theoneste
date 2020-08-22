// controllers
// importing runtime to support async in es6
import 'regenerator-runtime/runtime'
import blogmodel from "../models/blogModel"

//add comment on blog
const addComment = async (req, res) => {
    try {
        const { name, comment } = req.body;
        const blog = await blogmodel.findOne({ _id: req.params.id });
        if (!blog) return res.status(404).send({ status: 404, error: "blog not found" });
        await blogmodel.updateOne({ _id: req.params.id },
            { $push: { comments: { name: name, comment: comment } } })
        return res.status(200).send({ status: 200, message: "comment, posted" })

    } catch (error) {
        console.log(error)
        return res.status(400).send({ status: 400, error: "blog is not exit!" })
    }
}

// like the  blog
const likeBlog = async (req, res) => {
    try {
        const blog = await blogmodel.findOne({ _id: req.params.id });
        if (!blog) return res.status(404).send({ status: 404, error: "blog not found!" });
        await blogmodel.updateOne({ _id: req.params.id }, { $inc: { likes: 1 } });
        return res.status(200).send({ status: 200, message: "Liked!!!" });
    } catch (error) {res.status(400).send({ status: 400, error: "blog doesn't exist!" });
    }
}

const dislikeBlog = async (req, res) => {
    try {
        const blog = await blogmodel.findOne({ _id: req.params.id });
        if (!blog) return res.status(404).send({ status: 404, error: "blog not found!" });
        await blogmodel.updateOne({ _id: req.params.id }, { $inc: { dislikes: 1 } });
        return res.status(200).send({ status: 200, message: "disliked!!!" });
    } catch (error) {
        return res.status(400).send({ status: 400, error: "blog doesn't exist!" });
    }
}

export { addComment, likeBlog, dislikeBlog }
