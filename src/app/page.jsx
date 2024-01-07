import Image from "next/image";

const Home = () => {
  const styles = {
    main: "flex justify-between p-9",
    title: "text-8xl font-bold max-w-xs leading-tight tracking-wide",
    description: "max-w-xl text-lg py-10",
    button1:
      "shadow-inner bg-blue-500 rounded-md w-44 h-12 py-1 hover:font-bold hover:px-5 mr-7",
    button2:
      "text-dark-blue shadow-inner bg-white rounded-md w-44 h-12 py-1 hover:font-bold hover:px-5",
    image: "pt-12",
  };

  return (
    <main className={styles.main}>
      <aside>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus animi architecto, quam asperiores dignissimos aperiam
          impedit molestiae odit nam.
        </p>
        <div>
          <button className={styles.button1}>Learn More</button>
          <button className={styles.button2}>Contact</button>
        </div>
        <Image
          className={styles.image}
          src="/brands.png"
          width={500}
          height={500}
        />
      </aside>
      <Image src="/hero.gif" width={700} height={700} />
    </main>
  );
};

export default Home;
