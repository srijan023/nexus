import { useState, useEffect } from "react";
import EditorContainer from "../components/EditorContainer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";

export default function Compose() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
  }, [])

  const [content, setContent] = useState<string>('');
  const handleContentChange = (changedContent: string) => {
    setContent(changedContent);
  }

  const [title, setTitle] = useState("");

  const handlePost = () => {
    try {
      axios.post(`${BACKEND_URL}/api/v1/blog`, {
        title: title,
        content: content
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }
      ).then(res => {
        if (res.status == 201) {
          toast.success("New post created succeessfully");
          navigate("/blogs");
        }
      })
    } catch (e) {
      toast.error("Could not create a new post");
    }
  }

  return <>
    <div className="mt-0 w-full sm:mt-20 font-roboto">
      <div className="px-3 sm:px-0 sm:max-w-2xl pt-4 flex flex-col mx-auto">
        <div>
          <textarea onChange={(e) => { setTitle(e.target.value) }} placeholder="Title...." className="overflow-hidden resize-none text-3xl font-bold text-gray-700 outline-0 border-gray-400 border-b-2 px-3 py-2 w-full" />
        </div>
        <div>
          <EditorContainer handlePost={handlePost} content={content} onChange={handleContentChange} />
        </div>
      </div>
    </div>
  </>
}

