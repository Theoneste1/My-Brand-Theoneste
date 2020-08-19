import express from "express"
import { addComment, likeBlog, dislikeBlog } from "../controllers/actionOnBlog"
const router = express.Router();

router.post("/api/user/blogs/comment/:id",  addComment)
router.post("/api/user/blogs/like/:id", likeBlog)
router.post("/api/user/blogs/dislike/:id", dislikeBlog)

export default router;
