import { useState, createContext, useContext, useEffect } from "react";
import {
  createPostRequests,
  deletePostRequests,
  getPostRequests,
} from "../api/posts";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostRequests();
    setPosts(res.data);
  };

  const createPost = async (post) => {
    const res = await createPostRequests(post);
    setPosts([...posts, res.data]);
  };

  const deletePost = async (id) => {
    await deletePostRequests(id);
    console.log(id+" eliminado");
    setPosts(posts.filter((post) => post._id !== id));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
        createPost,
        deletePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
