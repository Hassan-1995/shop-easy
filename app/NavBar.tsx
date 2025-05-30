"use client";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { PiShirtFoldedDuotone } from "react-icons/pi";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const item = cartItems?.reduce((sum, item) => sum + item.quantity, 0);

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Shirts", href: "/shirts" },
    { label: "Trousers", href: "/trousers" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-emerald-900 w-full">
      {/* Top Navbar */}
      <div className="flex h-16 mx-auto px-6 items-center justify-between lg:px-10">
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

        <Link
          href={"/cart"}
          className="hidden md:flex text-white w-min relative"
        >
          <FiShoppingBag size={24} />
          {item > 0 && (
            <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-red-500" />
          )}
        </Link>

        <button
          className="text-white md:hidden"
          onClick={() => setMenu((prev) => !prev)}
        >
          {menu ? <LuChevronUp size={30} /> : <LuChevronDown size={30} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menu ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col pl-5 gap-4">
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
          <Link href={"/cart"} className="text-white w-min relative">
            <FiShoppingBag size={24} />
            {item > 0 && (
              <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-red-500" />
            )}
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
