import blogmodel from "./../../models/blog"

const updateBlog = (req, res, next) => {
     blogmodel.findById({ _id: req.params.id }).then(
            (blog)=>{
        if (req.body.topic) {
            blog.topic = req.body.topic
        }
        if (req.body.content) {
            blog.content = req.body.content
        }
        blog.save()
        res.send(blog)
    } ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    )

    }


export  default updateBlog
