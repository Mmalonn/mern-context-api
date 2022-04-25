import { useContext } from "react"
import { context } from "../context/postContext"


export function NotFoundPage() {
    const { posts } = useContext(context);
    console.log(posts);
    return (
        <div>Page Not Found</div>
    )
}
