"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link, key }) {
  const pathName = usePathname();
  const style = {
    active:
      "bg-white text-gray-900 rounded-full text-3xl px-6 py-3 md:text-base md:px-5 md:py-2 font-bold",
    notActive:
      "text-sm font-semibold leading-6 justify-between text-xl md:text-base hover:underline hover:underline-offset-4",
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
