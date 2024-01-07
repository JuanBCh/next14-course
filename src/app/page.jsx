import Image from "next/image";

const Home = () => {
  const styles = {
    main: "w-full flex flex-col lg:flex-row items-center lg:justify-between p-9",
    title:
      "text-7xl lg:text-8xl font-bold max-w-full lg:max-w-md leading-tight tracking-wide",
    description: "max-w-xl text-lg py-16 lg:py-10",
    buttons: "flex w-full items-center flex-col md:flex-row",
    button1:
      "shadow-inner bg-blue-500 rounded-md w-44 h-12 py-1 hover:font-bold hover:px-5 mb-5 md:mb-0 md:mr-7",
    button2:
      "text-dark-blue shadow-inner bg-white rounded-md w-44 h-12 py-1 hover:font-bold hover:px-5",
    brands: "pt-12 hidden lg:block",
    image: "hidden lg:block",
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
        <div className={styles.buttons}>
          <button className={styles.button1}>Learn More</button>
          <button className={styles.button2}>Contact</button>
        </div>
        <Image
          className={styles.brands}
          src="/brands.png"
          width={500}
          height={500}
        />
      </aside>
      <Image
        className={styles.image}
        src="/hero.gif"
        width={700}
        height={700}
      />
    </main>
  );
};

export default Home;
