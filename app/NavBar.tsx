"use client";
import Link from "next/link";
import { PiShirtFoldedDuotone } from "react-icons/pi";
import AppLink from "./components/common/AppLink";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "New Collection", href: "/new-collection" },
    { label: "Sale", href: "/sale" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contactUs" },
  ];

  return (
    <nav className="absolute bg-emerald-900 items-center w-full">
      <div className="flex h-16 mx-auto z-50 px-6 items-center justify-between lg:px-10">
        <Link
          href="/"
          className="text-2xl flex gap-3 items-center font-bold italic text-amber-400 hover:text-amber-600"
        >
          <PiShirtFoldedDuotone className="h-10 w-10 text-white" />
          Gravitee
        </Link>

        <ul className="hidden space-x-6 md:flex">
          {mainLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-white font-semibold hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-[120px] hidden lg:block">
          <AppLink title="Sign Up" href="/" />
        </div>
        <button
          className="text-white md:hidden "
          onClick={() => setMenu((prev) => !prev)}
        >
          {menu ? <LuChevronUp size={"30"} /> : <LuChevronDown size={"30"} />}
        </button>
      </div>
      <div
        className={`lg:hidden bg-emerald-900 fixed -z-10 top-0 right-0 h-screen w-screen py-5 px-6 transform transition-transform duration-700 ease-in-out ${
          menu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="space-x-6 mt-16">
          {mainLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-white font-semibold hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
