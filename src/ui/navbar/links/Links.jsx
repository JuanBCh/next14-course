import NavLink from "./navLink/navLink";

export default function NavLinks() {
  const links = [
    { title: "Homepage", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];
  const styles = {
    main: "flex w-2/4 justify-between items-center",
    logout:
      "shadow-inner bg-blue-500 rounded-md px-4 py-1 hover:font-bold hover:px-5",
  };

  //Temporary
  const session = true;
  const isAdmin = true;

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
