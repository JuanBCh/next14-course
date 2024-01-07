export default function Footer() {
  const styles = {
    footer:
      "flex justify-between mt-auto h-auto items-center py-5 px-9 text-slate-500 w-auto",
    name: "font-bold",
    rights: "text-sm",
  };
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>JuanBCh</p>
      <p className={styles.rights}>All rights reserved</p>
    </footer>
  );
}
