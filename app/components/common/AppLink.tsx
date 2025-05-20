"use client";
import React, { useState } from "react";
import colors from "./colors";
import Link from "next/link";

type ColorType = keyof typeof colors;

type AppLinkProps = {
  title: string;
  href: string;
  color?: ColorType;
};

const AppLink = ({ title, href, color = "primary" }: AppLinkProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const currentColor = colors[color];

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundColor: isHovering ? currentColor.hover : currentColor.base,
        transition: "background-color 0.1s",
      }}
      className="flex justify-center items-center w-full rounded-xl text-white"
    >
      <h1 className="font-bold p-2">{title}</h1>
    </Link>
  );
};

export default AppLink;
