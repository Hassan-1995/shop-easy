"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SizesButton = () => {
  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("size")) {
      handleClick(searchParams.get("size")!);
    }
  }, []);

  const handleClick = (size: string) => {
    setSelectedSize(size);
    const params = new URLSearchParams(searchParams);
    params.set("size", size);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <p className="text-gray-500 -mb-1 text-xs">AVAILABLE SIZES</p>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleClick(size)}
            className={`px-6 py-2 border font-bold rounded-full transition-colors ${
              selectedSize === size
                ? "bg-emerald-900 text-white"
                : "bg-white text-emerald-900"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </>
  );
};

export default SizesButton;
