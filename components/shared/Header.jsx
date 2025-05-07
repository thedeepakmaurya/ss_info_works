"use client";
import Image from "next/image";
import Link from "next/link";
import data from "../../public/db/data.json";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import Button from "../ui/Button";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const { navigation } = data;
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  // Function to toggle the visibility of the submenu
  const toggleSubMenu = (index) => {
    setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const menuItems = useMemo(() => {
    return navigation.map((item, index) => {
      const isActive = path === item.route;
      const isSubMenuVisible = openSubMenuIndex === index;

      return (
        <div key={index} className="relative">
          <li
            onMouseEnter={() => {
              if (item.subMenu) {
                toggleSubMenu(index);
              } else {
                setOpenSubMenuIndex(null);
              }
            }}
            onClick={() => {
              if (item.subMenu) {
                toggleSubMenu(index);
              } else {
                setIsMenuOpen(false);
                setOpenSubMenuIndex(null);
              }
            }}
            className="relative"
          >
            <Link
              href={item.route}
              className={`flex items-center capitalize hover:border-b hover:border-blue-400 ${
                isActive ? "border-b border-orange-400" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>

          {/* Submenu visibility */}
          {item.subMenu && (
            <ul
              onMouseLeave={() => {
                setOpenSubMenuIndex(null);
              }}
              className={`absolute z-10 w-fit rounded-xl border border-orange-200 bg-orange-50 p-3 shadow ${
                isSubMenuVisible ? "block" : "hidden"
              }`}
            >
              {item.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.route}
                    className="mb-2 block text-nowrap capitalize hover:border-b hover:border-blue-400"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setOpenSubMenuIndex(null);
                    }}
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    });
  }, [navigation, path, openSubMenuIndex]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="flex h-20 items-center justify-between border-b border-gray-100 px-3 lg:px-20">
        <Link href="/">
          <Image
            className="h-16 w-auto"
            src="/img/logo.png"
            alt="logo"
            width={100}
            height={60}
          />
        </Link>
        <nav className="hidden text-gray-700 lg:block">
          <ul className="flex flex-col gap-3 lg:flex-row lg:gap-6">
            {menuItems}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Button text="Start Project" url="/contact" style="" />
          <button
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
              setOpenSubMenuIndex(null);
            }}
            aria-expanded={isMenuOpen}
            className="lg:hidden"
          >
            {isMenuOpen ? (
              <IoCloseOutline size={28} />
            ) : (
              <IoIosMenu size={28} />
            )}
          </button>
        </div>
      </div>

      <nav
        className={`fixed inset-y-0 top-20 w-full transform bg-white px-2 py-4 transition-transform lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-3">{menuItems}</ul>
      </nav>
    </header>
  );
}
