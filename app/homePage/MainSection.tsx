import React from "react";
import ImageContent from "../components/ImageContent";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

const collection = [
  {
    category: "1",
    imageSrc: "/images/basic_solid_tees.png",
    description: "Basic and Solid Tees",
  },
  {
    category: "2",
    imageSrc: "/images/graphic_printed_tees.png",
    description: "Graphic and Printed Tees",
  },
  {
    category: "3",
    imageSrc: "/images/oversized_drop_shoulder_tees.png",
    description: "Oversized and Shoulder Tees",
  },
  {
    category: "4",
    imageSrc: "/images/polo_collar_tees.png",
    description: "Polo and Collar Tees",
  },
];

const MainSection = () => {
  return (
    <div className="px-10">
      <Header title="COLLECTION" />
      <div className="flex justify-between items-center my-12">
        {collection.map((item) => (
          <ImageContent
            key={item.category}
            imageSrc={item.imageSrc}
            description={item.description}
          />
        ))}
      </div>

      <div className="w-full h-[600px] space-y-3 my-10">
        <div className="w-full h-1/2 flex space-x-3">
          <Link href={"/"} className="relative w-3/5 h-full group">
            <Image
              src={"/images/summer.png"}
              alt="summer"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <p className="text-white font-extrabold text-2xl border-8 p-10 transition-transform duration-300 ease-in-out group-hover:scale-130">
                SUMMER COLLECTION
              </p>
            </div>
          </Link>
          <Link href="/" className="relative w-2/5 h-full group">
            <Image
              src="/images/custom_print.png"
              alt="summer"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <p className="text-white font-extrabold text-2xl transition-transform duration-300 ease-in-out group-hover:scale-130">
                CUSTOM PRINTED TEES
              </p>
            </div>
          </Link>
        </div>
        <div className="w-full h-1/2 flex space-x-3">
          <Link href={"/"} className="relative w-2/5 h-full group">
            <Image
              src={"/images/casual_wear_FS.png"}
              alt="summer"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <p className="text-white font-extrabold text-2xl transition-transform duration-300 ease-in-out group-hover:scale-130">
                FORMAL/CASUAL TEES
              </p>
            </div>
          </Link>
          <Link href={"/"} className="relative w-3/5 h-full group">
            <Image
              src={"/images/winter.png"}
              alt="summer"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <p className="text-white font-extrabold text-2xl border-8 p-10 transition-transform duration-300 ease-in-out group-hover:scale-130">
                WINTER COLLECTION
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-red-100 w-full h-100 my-10 flex">
        <div className="w-1/5 flex justify-end bg-amber-400">
          <div className="relative w-full flex justify-end bg-amber-400">
            <Image
              src={"/images/model_03.png"}
              alt="hkj"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-4/5 bg-emerald-900 h-full flex flex-col justify-center items-center">
          <h1 className="text-3xl text-white font-bold">
            GET A <span className="text-yellow-500">20%</span> OFF ON YOUR FIRST
            ORDER
          </h1>
          <p className="text-lg text-gray-200 mt-2">
            Use your <span className="font-semibold text-white">EMAIL</span> at
            checkout to avail your discount!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
