import {Router} from "express";
const router = Router();

router.get("/posts" , (req,res)=> [])
router.post("/posts" , (req,res)=> res.send("new post created"))
router.put("/posts" , (req,res)=> res.send("post updated"))
router.delete("/posts" , (req,res)=> res.send("post deleted"))
router.get("/posts/:id" , (req,res)=> res.send("getting post"))


export default router;