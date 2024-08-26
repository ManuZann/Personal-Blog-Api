import Express from "express"
import { createPost, deletePost, getAllPosts, getPost, updatePost } from "../controllers/posts.controller"

const postsRouter = Express.Router()

postsRouter.post("/", createPost)
postsRouter.put("/:id", updatePost)
postsRouter.delete("/:id", deletePost)
postsRouter.get("/:id", getPost)
postsRouter.get("/", getAllPosts)

export default postsRouter