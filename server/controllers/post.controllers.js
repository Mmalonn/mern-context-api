import Post from "../models/Post.js";


export const getPosts = async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
};

export const createPost = async (req, res) => {
    const { title, description } = req.body
    const newPost = new Post({ title, description })
    console.log(newPost);
    await newPost.save();

    return res.json(newPost);
};

export const updatePost = async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log(post)
    return res.send("recibido");
};

export const deletePost = async (req, res) => {
    const postRemoved = await Post.findByIdAndDelete(req.params.id)
    console.log(postRemoved)
    if (!postRemoved) {
        return res.sendStatus(404);
    } else {
        return res.sendStatus(204);
    }
}

export const getPost =async (req, res) =>{
    const post = await Post.findById(req.params.id);
    if (!post) {
        return res.sendStatus(404);
    } else {
        return res.json(post);
    }
} 