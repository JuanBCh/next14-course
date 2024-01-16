import { blog } from "@/lib/data";
import { getOnePost } from "@/lib/actions";
import Image from "next/image";
import PostUser from "@/ui/postUser/PostUser";
import { Suspense } from "react";

export default async function SinglePostPage({ params }) {
  const id = params.id - 1;
  const post = await getOnePost(params.id);
  const styles = {
    main: "flex flex-col md:flex-row md:h-full justify-between p-9",
    image: "relative md:w-1/3 h-96 md:h-full",
    aside: "md:w-7/12",
    title: "text-6xl font-bold mt-8 md:mt-0 mb-8 md:mb-16",
    description:
      "text-center md:text-left text-2xl md:text-lg leading-10 indent-10",
  };

  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image
          src={blog[id].hrefImg}
          alt={`Image of ${post.title}`}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <aside className={styles.aside}>
        <h1 className={styles.title}>{post.title}</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <PostUser id={id} />
        </Suspense>
        <p className={styles.description}>{post.body}</p>
      </aside>
    </div>
  );
}
