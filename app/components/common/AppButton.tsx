"use client";
import React, { useState } from "react";
import colors from "./colors";

type ColorType = keyof typeof colors;

type AppButtonProps = {
  title: string;
  onPress: () => void;
  color?: ColorType;
};

const AppButton = ({ title, onPress, color = "primary" }: AppButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const currentColor = colors[color];

  return (
    <button
      onClick={onPress}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundColor: isHovering ? currentColor.hover : currentColor.base,
        transition: "background-color 0.1s",
      }}
      className="flex justify-center items-center w-full rounded-xl text-white"
    >
      <h1 className="font-bold p-2">{title}</h1>
    </button>
  );
};

export default AppButton;
