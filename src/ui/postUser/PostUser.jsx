import Image from "next/image";
import { blog } from "@/lib/data";
import { getAuthor } from "@/lib/actions";

export default async function PostUser({ id }) {
  const author = await getAuthor(id);
  const styles = {
    info: "flex justify-between items-center mb-16 w-4/5 sm:w-3/5 md:w-4/5 lg:w-3/5 xl:w-2/5",
    avatar: "relative w-20 aspect-square rounded-full overflow-hidden",
    individualTitle: "font-bold text-slate-400 mb-1",
    individualInfo: " font-semibold",
  };

  return (
    <div className={styles.info}>
      <div className={styles.avatar}>
        <Image
          src={blog[id].otherInfo.pic}
          alt={`Picture of ${blog[id].otherInfo.author}`}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <p className={styles.individualTitle}>Author</p>
        <p className={styles.individualInfo}>{author.name}</p>
      </div>
      <div>
        <p className={styles.individualTitle}>Published</p>
        <p className={styles.individualInfo}>
          {blog[id].otherInfo.dateOfPublish}
        </p>
      </div>
    </div>
  );
}
