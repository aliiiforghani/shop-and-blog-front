import Link from "next/link";
import React from "react";
import "./globals.css";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-center gap-x-8 bg-violet-600 text-white font-bold h-12">
          <li>
            <Link className="py-2 block hover:text-black " href={"/#"}>
              خانه
            </Link>
          </li>
          <li>
            <Link className="py-2 block hover:text-black" href={"/blogs"}>
              بلاگ ها
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
