import Image from "next/image";

export default function Contact() {
  const styles = {
    main: "flex justify-between p-9 pt-36",
    form: "w-6/12 flex flex-col flex-wrap justify-between",
    input: "w-full p-7 rounded bg-semi-transparent",
    textarea: "w-full p-7 h-40 rounded bg-semi-transparent",
    button: "bg-blue-500 p-3 rounded",
  };

  return (
    <div className={styles.main}>
      <Image src="/contact.png" width={500} height={500} />
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
    </div>
  );
}
