"use client";
import Image from "next/image";
import Link from "next/link";
import data from "../../public/db/data.json";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const { navigation } = data;
  const path = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const fetchMenu = () => {
    return (
      <ul className="flex flex-col gap-3 lg:flex-row lg:gap-6">
        {navigation.map((item, index) => {
          const isActive = path === item.route;
          return (
            <li
              key={index}
              className={`capitalize hover:border-b hover:border-blue-400 ${isActive && "border-b border-orange-400"}`}
            >
              <Link href={item.route}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <header className="sticky top-0 h-20 w-full bg-white">
      <div className="flex h-full items-center justify-between border-b border-gray-100 px-2 lg:px-20">
        <Image
          className="h-16 w-auto"
          src="/img/logo.png"
          alt="logo"
          width={100}
          height={100}
        />
        <nav className="hidden text-gray-700 lg:block">{fetchMenu()}</nav>
        <div className="flex items-center gap-3">
          {/* start button*/}
          <button className="cursor-pointer rounded-sm bg-gradient-to-r from-orange-400 to-blue-400 to-50% px-4 py-1.5 text-white transition-all duration-300 ease-in-out hover:scale-105">
            Start a project
          </button>
          <i
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`ri-xl text-gray-700 lg:hidden ${isMenuOpen ? "ri-close-large-line" : "ri-menu-3-line"}`}
          ></i>
        </div>
      </div>
      <nav
        className={`fixed inset-y-0 top-20 w-full transform bg-white px-2 py-4 transition-transform delay-300 lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {fetchMenu()}
      </nav>
    </header>
  );
}
