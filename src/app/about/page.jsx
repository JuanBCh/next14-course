import Image from "next/image";

export default function About() {
  const styles = {
    main: "flex justify-between p-9 lg:pt-28",
    aside: "max-w-2xl",
    section1: "pb-12",
    subtitle: "text-blue-500 text-2xl font-bold pb-12",
    title: "text-6xl font-bold leading-tight pb-12",
    section2: "flex flex-col items-center sm:flex-row justify-between",
    section2Item: "flex flex-col items-center mb-6 sm:block",
    h3: "text-3xl text-blue-500 font-bold",
    p: "text-sm pt-2",
    image: "h-auto m-auto hidden lg:block",
  };

  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <section className={styles.section1}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p>
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission We’re world’s
            Our Special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </p>
        </section>
        <section className={styles.section2}>
          <div className={styles.section2Item}>
            <h3 className={styles.h3}>10 K+</h3>
            <p className={styles.p}>Years of experience</p>
          </div>
          <div className={styles.section2Item}>
            <h3 className={styles.h3}>234 K+</h3>
            <p className={styles.p}>People reached</p>
          </div>
          <div className={styles.section2Item}>
            <h3 className={styles.h3}>5 K+</h3>
            <p className={styles.p}>Services and plugins</p>
          </div>
        </section>
      </aside>
      <Image
        className={styles.image}
        src="/about.png"
        width={550}
        height={550}
      />
    </main>
  );
}
