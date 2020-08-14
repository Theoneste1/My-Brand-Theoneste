

import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blogRouter";



const app = express()
app.use(express.json());

// calling the routes of blogs
app.use("/", blogRouter)

mongoose.connect("mongodb://localhost:27017/theoneste", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("db connect successfully")

}).catch((error) => {
    console.log("Data base connection failed", error)
})


// app.get("/blogs", blogController.findBlogs)

// app.get("/blogs/:id", blogController.findBlog)
// app.patch("/blogs/:id", blogController.updateBlog)
// app.delete("/blogs/:id", blogController.deleteBlog)


// calling the routes for queries
// app.get("/queries", queryController.findQueries)
// app.post("/queries", queryController.createQueries)

// calling the routes for sign up
// app.post("/signUp", signUpValidate, (req,res)=>res.send("A @hapi/joi validation"))

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`server has started ${PORT}`)
});
