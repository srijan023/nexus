import BlogContainer from "../components/BlogContainer";
import useBlog from "../hooks/useBlog";
import BlogContent from "../Skeletons/BlogContent";
import ImageContainer from "../Skeletons/ImageContainer";

export default function Blog() {

  const url = window.location.href;
  const id = url.split('/')[url.split('/').length - 1];

  const { blog, loading } = useBlog({ id: id });

  if (loading) {
    return <div className="mt-0 sm:mt-24 mx-auto sm:max-w-2xl flex flex-col gap-1">
      <ImageContainer />
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
    </div>
  }

  if (!blog) {
    return <div>404 Not found</div>
  }

  return <>
    <div className="mt-0 sm:mt-20">
      <BlogContainer blog={blog} />
    </div>
  </>
}
