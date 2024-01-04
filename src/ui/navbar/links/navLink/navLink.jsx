"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link, key }) {
  const pathName = usePathname();
  const style = {
    active: "bg-white text-gray-900 rounded-full px-5 py-2 font-bold",
    notActive:
      "text-sm font-semibold leading-6 justify-between hover:underline hover:underline-offset-4",
  };

  return (
    <Link
      key={key}
      href={link.href}
      className={pathName === link.href ? style.active : style.notActive}
    >
      {link.title}
    </Link>
  );
}
