import Link from "next/link";
import NavLinks from "./links/Links";
import Image from "next/image";

export default function Navbar() {
  const styles = {
    nav: "mx-auto flex items-center justify-between p-6 lg:px-8",
    links: "-m-1.5 p-1.5",
    logo: "text-3xl font-bold",
  };
  return (
    <header>
      <nav className={styles.nav} aria-label="Global">
        <div className={styles.links}>
          <Link href="/" className={styles.logo}>
            Lama
          </Link>
        </div>
        <NavLinks />
      </nav>
    </header>
  );
}
