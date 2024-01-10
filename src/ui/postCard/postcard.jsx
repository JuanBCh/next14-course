import Image from "next/image";
import Link from "next/link";

export default function PostCard({ postCard, key }) {
  const styles = {
    card: "w-5/6 sm:w-3/6 lg:w-2/6 mb-10",
    header: "flex justify-between items-center",
    imgDiv: "relative w-full h-96",
    img: "overflow-hidden",
    date: "text-md text-slate-300 font-semibold -ml-5 mr-5 w-32 transform -rotate-90",
    title: "text-2xl font-bold my-3",
    description: "text-sm text-gray-400 mb-3",
    link: "underline underline-offset-2",
  };

  return (
    <section className={styles.card} key={key}>
      <header className={styles.header}>
        <div className={styles.imgDiv}>
          <Image
            className={styles.img}
            src={postCard.hrefImg}
            fill
            priority
            alt={`Image of ${postCard.title}`}
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className={styles.date}>{postCard.date}</span>
      </header>
      <div>
        <h3 className={styles.title}>{postCard.title}</h3>
        <p className={styles.description}>{postCard.shortDescription}</p>
        <Link
          className={styles.link}
          href={`/blog/${postCard.title.toLowerCase()}`}
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
