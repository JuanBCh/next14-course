import Image from "next/image";
import Link from "next/link";

export default function PostCard({ nonFetchedData, post, key }) {
  const styles = {
    card: "relative w-5/6 sm:h-3/6 sm:w-3/6 lg:w-2/6 mb-10",
    header: "flex justify-between items-center",
    imgDiv: "relative w-full h-96",
    img: "overflow-hidden",
    date: "text-md text-slate-300 font-semibold -ml-5 mr-5 w-32 transform -rotate-90",
    body: "flex flex-col w-11/12",
    title: "text-2xl h- font-bold my-3 truncate",
    description: "text-sm text-gray-400 mb-3",
    link: "sm:absolute bottom-0 underline underline-offset-2",
  };

  return (
    <section className={styles.card} key={key}>
      <header className={styles.header}>
        <div className={styles.imgDiv}>
          <Image
            className={styles.img}
            src={nonFetchedData.hrefImg}
            fill
            priority
            alt={`Image of ${nonFetchedData.title}`}
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className={styles.date}>{nonFetchedData.date}</span>
      </header>
      <div className={styles.body}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.description}>{post.body}</p>
      </div>
      <Link className={styles.link} href={`/blog/${post.id}`}>
        Read More
      </Link>
    </section>
  );
}
