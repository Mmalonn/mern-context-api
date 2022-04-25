import { usePosts } from "../context/postContext"
import {VscEmptyWindow} from "react-icons/vsc"

export function HomePage() {

    const { posts } = usePosts()

    if(posts.length===0)return(
        <div className="flex flex-col justify-center items-center">
            <VscEmptyWindow className="w-48 h-48 text-white"/>
            <h1 className="text-white">no hay publicaciones aun</h1>
        </div>
    )

    return (
        <div>
            <div>
                Inicio
            </div>
            {posts.map(post => (
                <div key={post._id}>
                    {`title: ${post.title}`}
                    <br/>
                    {`descripcion: ${post.description}`}
                </div>
            ))}
        </div>
    )
}

