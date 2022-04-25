import { usePosts } from "../context/postContext"
import { Link } from "react-router-dom";

export function HomePage() {
    const { setPosts } = usePosts();
    return (
        <div>
            Home Page
            <br/>
            <Link className="bg-blue-100" to="/new">
                go to new
            </Link>
            <br/>
            <button className="bg-red-100" onClick={() => setPosts([1, 2, 3])}>
                add
            </button>
        </div>

    )
}

