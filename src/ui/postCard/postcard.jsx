import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  const styles = {
    card: "w-3/12 mx-1",
    header: "flex justify-between items-center",
    imgDiv: "relative w-full h-96",
    img: "overflow-hidden",
    date: "text-md text-gray-400 font-semibold -mx-2 transform -rotate-90",
    title: "",
    description: "",
    link: "",
  };

  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <div className={styles.imgDiv}>
          <Image
            className={styles.img}
            src={post.hrefImg}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className={styles.date}>{post.date}</span>
      </header>
      <div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.description}>{post.description}</p>
        <Link className={styles.link} href={`/blog/${""}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}
