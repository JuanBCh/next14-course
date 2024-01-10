import Image from "next/image";

export default function Contact() {
  const styles = {
    main: "flex h-full justify-center lg:justify-between p-9 pt-16 lg:pt-36",
    image: "hidden lg:block",
    form: "w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 flex flex-col flex-wrap justify-between",
    input: "w-full p-7 rounded bg-semi-transparent",
    textarea: "w-full p-7 h-40 rounded bg-semi-transparent",
    button: "bg-blue-500 p-3 rounded",
  };

  return (
    <main className={styles.main}>
      <Image
        className={styles.image}
        src="/contact.png"
        width={500}
        height={500}
        alt="contact image"
      />
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name and Surname"
        />
        <input
          className={styles.input}
          type="mail"
          placeholder="Email adress"
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Phone Number (Optional)"
        />
        <textarea className={styles.textarea} placeholder="Message" />
        <button className={styles.button}>Send</button>
      </form>
    </main>
  );
}
