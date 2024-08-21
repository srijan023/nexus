import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Blog from "./Blog";
import Blogs from "./Blogs";
import Compose from "./Compose";

export default function Content() {
  return <>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/blogs" replace />} />
        <Route path="blog/:id" element={<Blog />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="compose" element={<Compose />} />
      </Routes>
    </div>
  </>
}
