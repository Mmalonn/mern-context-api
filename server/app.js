import express from "express";
import postsRoutes from "./routes/posts.routes.js";
import fileUpload from "express-fileupload";

const app=express()

app.use(express.json())
app.use(postsRoutes);
app.use(fileUpload({
    useTempfiles:true
}))

export default app