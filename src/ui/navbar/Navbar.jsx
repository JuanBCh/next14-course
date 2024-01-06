import Link from "next/link";
import NavLinks from "./links/Links";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="-m-1.5 p-1.5">
          {/* <Image className="h-8 w-auto" /> */}
          <Link href="/" className="text-3xl font-bold">
            Lama
          </Link>
        </div>
        <NavLinks />
      </nav>
    </header>
  );
}
