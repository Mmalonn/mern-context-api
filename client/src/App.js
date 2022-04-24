import { PostForm, HomePage, NotFoundPage } from "./pages/index";
import {Routes, Route} from "react-router-dom"



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/new" element={<PostForm />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  )
}

export default App;