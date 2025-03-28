import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="lg:p-4 p-3 border-b border-gray-200 sticky top-0">
      <div className="flex justify-between items-center lg:mx-28 ">
        {/* logo */}
        <Image
          className="h-18 w-auto"
          src="/img/logo.png"
          alt="logo"
          width={1000}
          height={1000}
        />
        {/* navigation */}
        <nav className="text-gray-800 hidden lg:block">
          <ul className="flex space-x-6 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/price">Price</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          {/* start button*/}
          <button className="bg-gradient-to-r from-orange-400 to-blue-400 hover:scale-95 transition-all ease-in-out cursor-pointer px-4 py-2 rounded-full text-white">
            Start a project
          </button>
          {/* hamburger menu */}
          <i className="ri-menu-3-line ri-xl lg:hidden"></i>
        </div>
      </div>
    </header>
  );
}
