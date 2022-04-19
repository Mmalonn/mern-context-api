import express from "express";
import postsRoutes from "./routes/posts.routes.js"
import {clientDB} from "./db.js"
clientDB();

const app=express()

app.use(postsRoutes);

app.listen(3000)
console.log("server iniciado en puerto", 3000);