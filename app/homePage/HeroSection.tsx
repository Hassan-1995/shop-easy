import Image from "next/image";
import { LuChevronDown } from "react-icons/lu";

import AppLink from "../components/common/AppLink";

const HeroSection = () => {
  return (
    <div className="bg-zinc-50 w-screen h-screen ">
      <div className="bg-emerald-900 z-20 w-screen rounded-b-4xl h-3/4  relative flex">
        <div className="pl-20 w-2/4 h-full flex flex-col justify-center space-y-2">
          <h1 className="text-7xl font-extrabold text-amber-300">CASUAL</h1>
          <h1 className="text-7xl font-extrabold text-white">COLLECTION</h1>
          <p className="text-white">
            Slide into comfort, stand out in style. Our casual tees are made to
            move with you — perfect fits, bold vibes, and everyday looks that
            never try too hard.
          </p>
          <div className="w-1/3">
            <AppLink title="Shop Now" href="/shop" />
          </div>
        </div>
        <div className="absolute bottom-0 right-24 w-[37%] h-11/12 ">
          <Image
            src="/images/hero_model.png"
            alt="Description of image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="absolute bg-emerald-900 w-[200px] h-[200px] 
               -bottom-[80px] left-1/2 transform -translate-x-1/2 
               rounded-full flex items-end-safe justify-center"
        >
          <LuChevronDown className="text-8xl text-white animate-bounce" />
        </div>
      </div>
      <div className="bg-zinc-400 z-10 w-screen rounded-b-4xl h-[70px] -mt-10 relative flex justify-center">
        <div
          className="absolute bg-zinc-400 w-[200px] h-[200px] 
               -bottom-[80px] left-1/2 transform -translate-x-1/2 
               rounded-full flex items-end-safe justify-center"
        />
      </div>
      <div className="bg-zinc-200 w-screen rounded-b-4xl h-[70px] -mt-10 relative flex justify-center">
        <div
          className="absolute bg-zinc-200 w-[200px] h-[200px] 
               -bottom-[80px] left-1/2 transform -translate-x-1/2 
               rounded-full flex items-end-safe justify-center"
        />
      </div>
    </div>
  );
};

export default HeroSection;
