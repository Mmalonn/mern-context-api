import { usePosts } from "../context/postContext";

export function PostForm(){
    const myContext= usePosts();
    console.log(myContext)
    return(
        <div>Forms</div>
    )
}
