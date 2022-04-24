import { PostForm, HomePage, NotFoundPage } from "./pages/index";
import { Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 bg-red-100 m-auto">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/new" element={<PostForm />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;