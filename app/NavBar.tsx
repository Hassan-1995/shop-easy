import Link from "next/link";
import React from "react";
import AppLink from "./components/common/AppLink";

const NavBar = () => {
  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "New Collection", href: "/new-collection" },
    { label: "Sale", href: "/sale" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contactUs" },
  ];

  return (
    <div className="absolute z-50 flex items-center justify-around w-full h-16">
      <Link href="/" className="text-2xl font-bold italic text-white">
        Gravitee
      </Link>
      <ul className="flex space-x-6 justify-center">
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
      <div className="w-1/12">
        <AppLink href="/cart" title="SIGN IN" color="primary" />
      </div>
    </div>
  );
};

export default NavBar;
