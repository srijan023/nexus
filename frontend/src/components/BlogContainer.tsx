import DOMPurify from "dompurify";
import { Blog } from "../Utils";

export default function BlogContainer({ blog }: { blog: Blog }) {
  const content = DOMPurify.sanitize(blog.content.replace(/\n/g, '<br>'));
  return <>
    <div className='sm:py-5 sm:max-w-3xl px-9 mx-auto font-roboto'>
      <div className="my-4 pb-3 border-b-2 border-gray-300">
        <h1 className="text-3xl text-gray-900 py-3 ">{blog.title}</h1>
        <div className="flex gap-3 justify-start items-center">
          <div className="text-gray-800 font-semibold">{blog.author.name}</div>
          <div className="bg-gray-300 text-gray-600 px-3 py-1 rounded-full">Custom Tag</div>
          <div className="text-gray-500">Dec. 14, 2023</div>
        </div>
      </div>
      <div className="text-white flex justify-center items-center h-[400px] w-full bg-gray-600 rounded-md">
        Image soon...
      </div>
      <div className="text-gray-800 pt-5 flex flex-col gap-2" style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  </>
}
