import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";
import BigCards from "../Skeletons/bigCards";

export default function Blogs() {
  const { loading, blogs } = useBlogs();


  if (loading) {
    return <>
      <div className="mt-0 sm:mt-24 flex flex-col gap-3 justify-center items-center">
        <BigCards />
        <BigCards />
        <BigCards />
        <BigCards />
      </div>
    </>
  }

  return <>
    <div className="mt-0 sm:mt-20">
      <div>
        {
          blogs.map((blog) => <BlogCard key={blog.id} id={blog.id} username={blog.author.name} title={blog.title} date="Dec. 14, 2023" content={blog.content} />)
        }
      </div>
    </div>
  </>
}
