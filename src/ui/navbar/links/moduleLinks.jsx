"use client";

import Image from "next/image";
import NavLink from "./navLink/navLink";
import { navLinks as links } from "@/lib/data";
import { useState } from "react";

export default function ModuleNavLinks() {
  const styles = {
    main: "md:hidden py-2 px-5",
    image: "cursor-pointer",
    module:
      "z-10 h-2/3 w-2/3 sm:w-3/6 flex flex-col items-end justify-between absolute top-4 right-5 px-6 pt-4 pb-20 bg-blue-transparent rounded-md",
    logout:
      "shadow-inner bg-blue-500 rounded-md px-6 md:px-4 py-2 md:py-1 text-xl md:text-md hover:font-bold hover:px-5",
  };
  const [show, setShow] = useState(false);

  //Temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.main}>
      <Image
        src="/menu.png"
        width={40}
        height={40}
        className={styles.image}
        onClick={() => setShow(!show)}
      />
      {show && (
        <aside className={styles.module} onClick={() => setShow(!show)}>
          <Image
            src="/menu.png"
            width={40}
            height={40}
            className={styles.image}
            onClick={() => setShow(!show)}
          />
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
      )}
    </div>
  );
}
