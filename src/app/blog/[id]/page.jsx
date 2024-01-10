"use client";

import { useParams } from "next/navigation";
import { blog } from "@/lib/data";
import { getPosts } from "@/lib/actions";
import Image from "next/image";

export default async function SinglePostPage() {
  const params = useParams();
  const posts = await getPosts();
  const thisPost = posts.filter((post) => post.id == params.id)[0];
  const styles = {
    main: "flex flex-col md:flex-row md:h-full justify-between p-9",
    image: "relative md:w-1/3 h-96 md:h-full",
    aside: "md:w-7/12",
    title: "text-6xl font-bold mt-8 md:mt-0 mb-8 md:mb-16",
    info: "flex justify-between items-center mb-16 w-4/5 sm:w-3/5 md:w-4/5 lg:w-3/5 xl:w-2/5",
    avatar: "relative w-20 aspect-square rounded-full overflow-hidden",
    individualTitle: "font-bold text-slate-400 mb-1",
    individualInfo: " font-semibold",
    description:
      "text-center md:text-left text-2xl md:text-lg leading-10 indent-10",
  };

  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image
          src={blog[thisPost.id].hrefImg}
          alt={`Image of ${thisPost.title}`}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <aside className={styles.aside}>
        <h1 className={styles.title}>{thisPost.title}</h1>
        <div className={styles.info}>
          <div className={styles.avatar}>
            <Image
              src={blog[thisPost.id].otherInfo.pic}
              alt={`Picture of ${blog[thisPost.id].otherInfo.author}`}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className={styles.individualTitle}>Author</p>
            <p className={styles.individualInfo}>
              {blog[thisPost.id].otherInfo.author}
            </p>
          </div>
          <div>
            <p className={styles.individualTitle}>Published</p>
            <p className={styles.individualInfo}>
              {blog[thisPost.id].otherInfo.dateOfPublish}
            </p>
          </div>
        </div>
        <p className={styles.description}>{thisPost.body}</p>
      </aside>
    </div>
  );
}
