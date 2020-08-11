// importing express package
const express = require('express')

// importing mongoose package
const mongoose = require("mongoose")

const blogController=require("../controller/blogs")
//connect mongoose to database
mongoose
    .connect("mongodb://localhost:27017/theoneste", { useNewUrlParser: true })
    .then(() => {

        // creating express instance with variable app
        // this variable app let us doeverything we need to configure our ReSP API,
        //like registering our routers, installing necessary middlewares
        const app = express();
        app.use(express.json());
        app.get('/blogs', blogController.findBlogs);
        app.get("/blogs/:id", blogController.findBlog);
        app.post("/blogs", blogController.createBlog);
        app.patch("/blogs/:id", blogController.updateBlog);
        app.delete("/blogs/:id", blogController.deleteBlog);



        app.listen(8000, () => {
            console.log("Server has started  at port 8000")
        })

    })
.catch(()=>console.log("database connection failed"))
