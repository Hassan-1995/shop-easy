import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductCardProps = {
  href?: string;
  imageSrc?: string;
  title?: string;
  subTitle?: string;
  price?: number;
  color?: string;
  availStock?: number;
  priority?: boolean;
};

const ProductCard = ({
  href,
  imageSrc,
  title,
  subTitle,
  price,
  color,
  availStock,
  priority,
}: ProductCardProps) => {
  return (
    <div className="mx-2 md:mx-3 my-2 md:my-4 ">
      <Link
        href={{
          pathname: href,
          query: {
            picture: imageSrc,
            price: price,
            heading: title,
            subHeading: subTitle,
            stock: availStock,
            color: color,
          },
        }}
        className="w-auto h-[300px] flex items-center justify-center relative overflow-hidden group"
      >
        <Image
          src={imageSrc!}
          alt={title!}
          width={200}
          height={250}
          priority={priority}
          className="transition-transform object-cover duration-300 ease-in-out group-hover:scale-110"
        />
      </Link>
      <div className="w-full bg-emerald-800 p-2 rounded-b-lg">
        <h1 className="text-amber-400 font-semibold truncate">{title}</h1>
        <h1 className="text-white font-semibold">$ {price}</h1>
      </div>
    </div>
  );
};

export default ProductCard;
