import PostCard from "@/ui/postCard/postcard";
import { blog } from "@/lib/data.js";
import { getPosts } from "@/lib/actions";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="w-full flex justify-center md:justify-between flex-wrap p-9">
      {blog.map((card, k) => (
        <PostCard nonFetchedData={card} post={posts[k]} key={k} />
      ))}
    </main>
  );
}
