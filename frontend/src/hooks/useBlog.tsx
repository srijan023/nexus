import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { Blog } from "../Utils";

export default function useBlog({ id }: { id: string }) {
  const [blog, setBlog] = useState<Blog>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/${id}`).then(res => {
      setBlog(res.data.post);
      setLoading(false);
    })
  }, [])

  return {
    blog,
    loading
  }
}
