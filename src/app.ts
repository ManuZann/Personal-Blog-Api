import Express from "express"
import { config } from "dotenv"
config()
import postsRouter from "./routes/posts.routes"

const app = Express()

app.use(Express.json())
app.use("/posts", postsRouter)

export default app