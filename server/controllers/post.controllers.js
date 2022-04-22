import Post from "../models/Post.js";


export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const { title, description } = req.body
        const newPost = new Post({ title, description })
        console.log(newPost);
        await newPost.save();
        return res.json(newPost);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    try {
        console.log(req.params);
        console.log(req.body);
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(post)
        return res.send(post);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        const postRemoved = await Post.findByIdAndDelete(req.params.id)
        console.log(postRemoved)
        if (!postRemoved) {
            return res.sendStatus(404);
        } else {
            return res.sendStatus(204);
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.sendStatus(404);
        } else {
            return res.json(post);
        }
    }catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
} 