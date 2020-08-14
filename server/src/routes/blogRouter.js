import express from "express"
import createBlog from "../controllers/blog/createBlog"
import upDateBlog from "../controllers/blog/updateBlog"
import deleteBlog from "./../controllers/blog/deleteBlog"
import blogValidator from "./../validators/blog"

const router = express.Router();

router.post("/api/blogs", blogValidator, createBlog)
router.patch("/api/blogs",upDateBlog)
export default router;
