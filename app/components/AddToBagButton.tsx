"use client";
import React, { useState } from "react";
import { PiBagDuotone } from "react-icons/pi";
import { FaX, FaPlus, FaMinus, FaRegTrashCan } from "react-icons/fa6";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type AddToBagButtonProps = {
  imageSrc: string;
  title: string | undefined;
  price: string | undefined;
  color: string | undefined;
};

const AddToBagButton = ({
  imageSrc,
  title,
  price,
  color,
}: AddToBagButtonProps) => {
  const [cart, setCart] = useState(false);
  const [size, setSize] = useState(false);

  const searchParams = useSearchParams();
  const isSize = searchParams.get("size");

  const handleClick = () => {
    if (!isSize) {
      setSize(true);
    } else {
      setSize(false);
      setCart((prev) => !prev);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex w-full py-3 justify-center space-x-2 items-center bg-emerald-900 text-white"
      >
        <PiBagDuotone className="text-3xl " />
        <h1 className="font-semibold">ADD TO BAG</h1>
      </button>
      {size && <h1 className="text-red-500">Please select a size.</h1>}

      <div
        className={`fixed top-0 right-0 h-screen w-1/3 bg-zinc-200 flex flex-col p-4 transform transition-transform duration-700 ease-in-out ${
          cart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Your cart</h1>
          <button
            onClick={() => setCart((prev) => !prev)}
            className="text-emerald-400 text-xl rounded-lg"
          >
            <FaX />
          </button>
        </div>
        <h1>ANIMATION</h1>
        <div className="flex justify-between border-b mb-5">
          <h1 className="text-xs pb-5">PRODUCT</h1>
          <h1 className="text-xs pb-5">TOTAL</h1>
        </div>
        <div className="flex w-full h-52">
          <div className="relative w-1/3 h-full">
            <Image src={imageSrc!} alt={title!} fill className="object-cover" />
          </div>
          <div className="w-2/3 h-full pl-2">
            <div className="flex w-full h-4/5">
              <div className="w-2/3 h-full flex flex-col justify-between pb-2">
                <p className="font-semibold">{title}</p>
                <p>$: {price}</p>
                <p className="text-sm">
                  Color:{" "}
                  {color
                    ? color.charAt(0).toUpperCase() + color.slice(1)
                    : "N/A"}
                </p>
                <p className="text-sm">Size: {isSize}</p>
              </div>
              <div className="w-1/3 h-full">
                <p className="font-semibold">$: TOTAL</p>
              </div>
            </div>
            <div className="flex w-full h-1/5 items-center space-x-2">
              <div className="border w-2/3 h-full px-2 justify-between items-center boder-black flex ">
                <button>
                  <FaMinus />
                </button>
                <p>Number</p>
                <button onClick={() => console.log("Plus")}>
                  <FaPlus className="" />
                </button>
              </div>
              <div>
                <button onClick={() => console.log("Trash")}>
                  <FaRegTrashCan />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToBagButton;
