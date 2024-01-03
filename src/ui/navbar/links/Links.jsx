import Link from "next/link";

export default function NavLinks() {
  const links = [
    { title: "Homepage", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
    { title: "Login", href: "/login" },
  ];
  return (
    <div>
      {links.map((link, k) => {
        return (
          <Link key={k} href={link.href}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}
