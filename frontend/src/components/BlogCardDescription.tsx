import DOMPurify from "dompurify"

export default function BlogCardDescription({ content }: { content: string }) {
  const purifiedContet = DOMPurify.sanitize(content.slice(0, 200) + "<span> ...<span>");
  return <div className="text-gray-700  text-lg font-serif" dangerouslySetInnerHTML={{ __html: purifiedContet }}>
  </div>
}
