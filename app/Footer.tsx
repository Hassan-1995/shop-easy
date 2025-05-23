import Link from "next/link";
import React from "react";
import { LuMapPin, LuPhone, LuMail } from "react-icons/lu";
import { PiShirtFoldedDuotone } from "react-icons/pi";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "New Collection", href: "/new-collection" },
    { label: "Sale", href: "/sale" },
    { label: "About Us", href: "/about" },
  ];
  const productLinks = [
    { label: "Basic & Solid Tees", href: "#" },
    { label: "Graphic & Printed Tees", href: "/shop" },
    { label: "Oversized & Drop Shoulder", href: "/productsGallery" },
    { label: "Polo & Collar Tees", href: "/contactUs" },
  ];
  const contactLinks = [
    {
      label: "Azeem Chambers, Hasan Ali Efandi Road, Karachi, Pakistan",
      icon: LuMapPin,
    },
    { label: "+92 21 1234567", icon: LuPhone },
    { label: "info@gravitee.pk", icon: LuMail },
  ];
  return (
    <footer className="border-t bg-slate-50 flex justify-center">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PiShirtFoldedDuotone className="h-6 w-6 text-green-600" />
              <span className="text-xl italic font-bold">Gravitee</span>
            </div>
            <p className="text-sm text-zinc-500">
              Pakistan&apos;s premier shirt manufacturer since 2015. Quality,
              craftsmanship and pride in every stitch.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 font-medium hover:text-zinc-800 hover:underline underline-offset-4 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 font-medium hover:text-zinc-800 hover:underline underline-offset-4 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              {contactLinks.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex gap-2 text-sm space-x-2 space-y-4 text-zinc-500 font-medium"
                >
                  <Icon className="w-5 h-5 text-zinc-500" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gravitee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
