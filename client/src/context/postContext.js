import { useState, createContext, useContext, useEffect } from "react"
import { createPostRequests, getPostRequests } from "../api/posts";

const postContext = createContext();

export const usePosts = () => {
    const context = useContext(postContext)
    return context
}

export const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await getPostRequests()
        setPosts(res.data);
    };

    const createPost = async (post) => {
        const res= await createPostRequests(post)
        setPosts([...posts, res.data]);

        
    }

    useEffect(() => {
        getPosts()
    }, [])

    return <postContext.Provider value={{
        posts,
        getPosts,
        createPost
    }}>
        {children}
    </postContext.Provider>
}