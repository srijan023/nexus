import { useNavigate } from "react-router-dom";
import BlogCardDescription from "./BlogCardDescription";
import BlogCardFooter from "./BlogCardFooter";
import BlogCardHeader from "./BlogCardHeader";
import BlogCardTitle from "./BlogCardTitle";

interface BlogCardProps {
  username: string,
  title: string,
  date: string,
  content: string
  id: string
}

export default function BlogCard(blogInfo: BlogCardProps) {
  const navigate = useNavigate();
  return <>
    <div className="font-roboto px-2 sm:px-4 grid grid-cols-5 gird-rows-3 sm:grid-cols-4 sm:grid-rows-5 py-4 sm:py-8 border-b-gray-200 border-b sm:max-w-3xl mx-auto h-fit gap-x-3 ">
      <div className="row-start-3 col-start-3 sm:row-start-1 sm:col-start-1 col-span-3">
        <BlogCardHeader date={blogInfo.date} username={blogInfo.username} />
      </div>
      <div onClick={() => { navigate(`/blog/${blogInfo.id}`) }} className="cursor-pointer row-start-2 col-start-3 sm:col-start-1 sm:row-span-4 sm:row-start-2 col-span-3 py-2 sm:py-0">
        <div>
          <BlogCardTitle title={blogInfo.title} />
        </div>
        <div className="hidden sm:block">
          <BlogCardDescription content={blogInfo.content} />
        </div>
      </div>
      <div className="row-start-1 col-start-1 col-span-2 sm:col-span-1 sm:row-start-2 flex justify-center items-center rounded-md bg-gray-600 text-white sm:col-start-4 row-span-3">
        Image soon..
      </div>
      <div className="row-start-1 col-start-3 sm:row-start-5 sm:col-start-1 col-span-3">
        <BlogCardFooter time={Math.ceil(blogInfo.content.length / 900)} />
      </div>
    </div>
  </>
}
