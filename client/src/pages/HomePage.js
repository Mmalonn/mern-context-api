import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white">no hay publicaciones aun</h1>
      </div>
    );

  return (
    <div className="text-white">
      <Link to="/new" className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm">Create new Post</Link>
      <div className="grid grid-cols-3 gap-2 my-7">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
