import PostCard from "@/ui/postCard/postcard";
import { blog } from "@/lib/data.js";

export default function BlogPage() {
  return (
    <main className="w-full flex justify-center md:justify-between flex-wrap p-9">
      {blog.map((card) => (
        <PostCard postCard={card} />
      ))}
    </main>
  );
}
