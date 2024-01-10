import NavLink from "./navLink/navLink";
import { navLinks as links } from "@/lib/data";

export default function NavLinks() {
  const styles = {
    main: "hidden md:flex md:w-3/5 lg:w-2/4 justify-between items-center",
    logout:
      "shadow-inner bg-blue-500 rounded-md px-4 py-1 hover:font-bold hover:px-5",
  };

  return (
    <aside className={styles.main}>
      {links.map((link, k) => {
        return <NavLink link={link} key={k} />;
      })}
      {session ? (
        <>
          {isAdmin && <NavLink link={{ title: "Admin", href: "/admin" }} />}
          <button className={styles.logout}>LogOut</button>
        </>
      ) : (
        <NavLink link={{ title: "LogIn", href: "/login" }} />
      )}
    </aside>
  );
}
