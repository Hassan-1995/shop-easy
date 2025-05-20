import React from "react";
import Image from "next/image";
import Link from "next/link";

type ImageContentProps = {
  imageSrc: string;
  description: string;
};

const ImageContent = ({ imageSrc, description }: ImageContentProps) => {
  return (
    <Link
      href="/"
      className="w-auto h-auto relative overflow-visible group flex justify-center"
    >
      <Image
        src={imageSrc}
        alt={description}
        width={200}
        height={200}
        className="transition-transform object-cover duration-300 ease-in-out group-hover:scale-110"
      />
    </Link>
  );
};

export default ImageContent;
