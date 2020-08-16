
import express from "express"
import blogValidator from "./../validators/blog"
import { verfyingToken, assigningToken }  from "./../middlewares/verfyingToken"
import { createBlog, findAllBlogs, findOneBlog,upDateBlog,deleteBlog } from "./../controllers/blogsController"
import { userLogin, logout}from "../controllers/userController"

const router = express.Router();

router.post('/api/user/login', userLogin)
router.post("/api/user/logout", logout)
router.get("/api/user/blogs", findAllBlogs)
router.get("/api/user/blogs/:id", findOneBlog)
router.patch("/api/user/blogs/:id", verfyingToken, blogValidator, upDateBlog)
router.delete("/api/user/blogs/:id", verfyingToken, deleteBlog)
router.post("/api/user/blogs", verfyingToken, blogValidator, createBlog)



export default router
