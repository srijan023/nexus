import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { Blog } from "../Utils";

export default function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`).then(res => {
      setBlogs(res.data.posts);
      setLoading(false);
    })
  }, [])

  return {
    loading,
    blogs
  }
}