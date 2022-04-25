import { PostForm, HomePage, NotFoundPage } from "./pages/index";
import { Routes, Route } from "react-router-dom"
import { PostProvider } from "./context/postContext";

function App() {
  return (
    <div className="bg-neutral-400 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/new" element={<PostForm />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </PostProvider>
      </div>
    </div>
  )
}

export default App;