import express from "express";
import postsRoutes from "./routes/posts.routes.js"
import {clientDB} from "./db.js"
import {PORT} from "./config.js"
clientDB();

const app=express()

app.use(postsRoutes);

app.listen(PORT)
console.log("server iniciado en puerto", PORT);