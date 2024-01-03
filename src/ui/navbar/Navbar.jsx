import Link from "next/link";
import NavLinks from "./links/Links";

export default function Navbar() {
  return (
    <nav>
      <div>Logo</div>
      <aside>
        <NavLinks />
      </aside>
    </nav>
  );
}
