const express = require("express")
const mongoose = require("mongoose")
const blogController=require("./controllers/blogs")


mongoose.connect("mongodb://localhost:27017/theonesteData", {
    useNewUrlParser: true
}).then(() => {
    const app = express()
    app.use(express.json());
    app.get("/blogs", blogController.findBlogs)
    app.post("/blogs", blogController.createBlog)
    app.get("/blogs/:id", blogController.findBlog)
    app.patch("/blogs/:id", blogController.updateBlog)
    app.delete("/blogs/:id", blogController.deleteBlog)

    app.get("/blogs")
    app.listen(8000, () => {
        console.log("server has started")
    });

}).catch(() => {
    console.log("Data base connection failed")
})
