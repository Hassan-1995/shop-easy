import React from "react";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex items-center justify-center mt-10">
      <hr className="w-1/3 border-t-2 border-gray-300" />
      <h1 className="mx-4 text-3xl text-gray-600 font-semibold">{title}</h1>
      <hr className="w-1/3 border-t-2 border-gray-300" />
    </div>
  );
};

export default Header;
