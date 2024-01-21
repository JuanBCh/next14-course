import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const styles = {
    main: "w-full overflow-hidden flex flex-col lg:flex-row items-center lg:justify-between p-9",
    title:
      "text-7xl lg:text-8xl font-bold max-w-full lg:max-w-md leading-tight tracking-wide",
    description: "max-w-xl text-lg py-16 lg:py-10",
    buttons: "flex w-full items-center flex-col sm:flex-row",
    button1:
      "shadow-inner bg-blue-500 rounded-md w-44 h-12 py-1 hover:font-bold hover:px-5 mb-5 sm:mb-0 sm:mr-7",
    button2:
      "text-dark-blue shadow-inner bg-white rounded-md w-44 h-12 py-1 hover:font-bold hover:px-5",
    brands:
      "flex justify-around sm:justify-start pt-12 -mt-3 mx-auto w-4/6 sm:w-full",
    icons: "w-1/6 sm:w-1/12 sm:mr-9 hover:text-blue-500",
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
        <div className={styles.brands}>
          <Link
            href="https://wa.me/+59899933342"
            target="_blank"
            className={styles.icons}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
          <Link
            href="https://github.com/JuanBCh"
            target="_blank"
            className={styles.icons}
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/juanbagnasco/"
            target="_blank"
            className={styles.icons}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
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
