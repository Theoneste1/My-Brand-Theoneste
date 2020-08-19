import express from "express"
import { createBlog, deleteBlog, findAllBlogs, findOneBlog, upDateBlog } from "../controllers/blogsController"
import { verfyingToken, assigningToken } from "../middlewares/verfyingToken"
import blogValidator from "../validators/blog"

const router = express.Router();

router.post("/api/blogs/", verfyingToken, blogValidator, createBlog)
router.get("/api/blogs/", findAllBlogs)
router.get("/api/blogs/:id", findOneBlog)
router.patch("/api/blogs/:id", verfyingToken, blogValidator, upDateBlog)
router.delete("/api/blogs/:id/", verfyingToken, deleteBlog)

export default router;
