"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const isSelected = (path: string) => {
  const pathname = usePathname();
  return pathname === path;
};

const toggleTheme = () => {
  const html = document.documentElement;
  html.classList.toggle("dark");
};

export default function Navbar() {
  return (
    <div className="flex items-center dark:bg-gray-800 shadow-md justify-between h-14 px-16 text-black dark:text-white sticky top-0 z-50">
      <div>
        <Link href="/">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400 italic">
            MyFantaTool
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/">
          <div
            className={`flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gradient-to-r from-purple-100 to-blue-100 dark:hover:bg-gradient-to-r dark:from-purple-900 dark:to-blue-900 ${isSelected("/") ? "bg-gradient-to-r from-purple-100 to-blue-100 dark:bg-gradient-to-r dark:from-purple-900 dark:to-blue-900" : ""}`}
          >
            <Image
              className="dark:invert"
              src="/Home.svg"
              alt="Home"
              width={18}
              height={18}
            />
            Home
          </div>
        </Link>
        <Link href="/goasta">
          <div
            className={`flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gradient-to-r from-purple-100 to-blue-100 dark:hover:bg-gradient-to-r dark:from-purple-900 dark:to-blue-900 ${isSelected("/goasta") ? "bg-gradient-to-r from-purple-100 to-blue-100 dark:bg-gradient-to-r dark:from-purple-900 dark:to-blue-900" : ""}`}
          >
            Goasta
          </div>
        </Link>
        <Link href="/squadre">
          <div
            className={`flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gradient-to-r from-purple-100 to-blue-100 dark:hover:bg-gradient-to-r dark:from-purple-900 dark:to-blue-900 ${isSelected("/squadre") ? "bg-gradient-to-r from-purple-100 to-blue-100 dark:bg-gradient-to-r dark:from-purple-900 dark:to-blue-900" : ""}`}
          >
            <Image
              className="dark:invert"
              src="/Users.svg"
              alt="Squadre"
              width={18}
              height={18}
            />
            Squadre
          </div>
        </Link>
        <div className="w-[0.8px] h-10 bg-gray-300 dark:bg-gray-600"></div>
        <Button
          onClick={toggleTheme}
          className="bg-gradient-to-r from-purple-300 to-blue-200 cursor-pointer hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-300 dark:bg-gradient-to-r dark:from-purple-900 dark:to-blue-900 dark:hover:bg-gradient-to-r dark:hover:from-purple-800 dark:hover:to-blue-800"
          size="icon"
        >
          <Image
            className="dark:hidden dark:invert"
            src="/dark_mode.svg"
            alt="Dark Mode"
            width={24}
            height={24}
          />
          <Image
            className="hidden dark:block dark:invert"
            src="/light_mode.svg"
            alt="Light Mode"
            width={24}
            height={24}
          />
        </Button>
      </div>
    </div>
  );
}
