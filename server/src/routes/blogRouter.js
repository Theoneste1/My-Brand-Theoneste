import express from "express"
import createBlog from "../controllers/blog/createBlog"
import  findAllBlogs from "../controllers/blog/findAllBlogs"
import updateBlog from "../controllers/blog/updateBlog"
import deleteBlog from "../controllers/blog/deleteBlog"
import findOneBlog from '../controllers/blog/findOneBlog'
import blogValidator from "./../validators/blog"

const router = express.Router();

router.post("/api/blogs/", blogValidator, createBlog)
router.get("/api/blogs/", findAllBlogs)
router.get("/api/blogs/:id", findOneBlog)
router.patch("/api/blogs/:id", blogValidator, updateBlog)
router.delete("/api/blogs/:id/", deleteBlog)

export default router;
