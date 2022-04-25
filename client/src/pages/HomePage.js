import { useContext } from "react"
import { context } from "../context/postContext"

export function HomePage() {

    const myContext = useContext(context);
    console.log(myContext);

    return (
        <div>
            Home Page
            <button>
                add
            </button>
        </div>

    )
}

