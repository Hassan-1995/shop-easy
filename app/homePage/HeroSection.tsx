import Image from "next/image";
import { LuChevronDown } from "react-icons/lu";

import AppLink from "../components/common/AppLink";

const Round = () => {
  return (
    <div
      className="border-2 border-white bg-emerald-900 rounded-full flex items-end justify-center
               w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]
               absolute 
               bottom-[-40px] md:bottom-[-60px] lg:bottom-[-80px] left-[50%] transform -translate-x-1/2"
    >
      <LuChevronDown className="text-3xl md:text-5xl lg:text-7xl text-white animate-bounce " />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-zinc-50 w-full h-screen">
      <div className="bg-zinc-400 h-5/6 w-full rounded-b-4xl relative">
        <div className="bg-emerald-900 rounded-b-4xl h-5/6 flex  relative">
          <div
            className="border-2 border-black bg-yellow-400 rounded-b-full flex items-end justify-center
               w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[100px]
               absolute 
               bottom-[-40px] md:bottom-[-60px] lg:bottom-[-80px] left-[50%] transform -translate-x-1/2"
          />
        </div>
        <div
          className="border-2 border-black bg-zinc-400 rounded-b-full flex items-end justify-center
               w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[100px]
               absolute 
               bottom-[-40px] md:bottom-[-60px] lg:bottom-[-80px] left-[50%] transform -translate-x-1/2"
        />
      </div>

      {/* <div className="bg-emerald-900 rounded-b-4xl h-3/4 flex  relative">
        <Round />
        <div className="h-full w-screen flex justify-center lg:justify-end overflow-hidden rounded-b-4xl">
          <div className="w-screen h-full md:w-4/5 lg:w-2/5 relative">
            <Image
              src="/images/hero_model.png"
              alt="Fashionable Tees"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute pl-20 inset-0 flex flex-col justify-center space-y-2 bg-black/0">
            <h1 className="text-3xl md:text-7xl font-extrabold text-amber-300">
              CASUAL
            </h1>
            <h1 className="text-3xl md:text-7xl font-extrabold text-white">
              COLLECTION
            </h1>
            <p className="text-white hidden lg:block">
              Slide into comfort, stand out in style. <br />
              Our casual tees are made to move with you — <br />
              perfect fits, bold vibes, and everyday looks that never try too
              hard.
            </p>
            <div className="w-1/3">
              <AppLink title="Shop Now" href="/shop" />
            </div>
          </div>
        </div>
      </div> */}
    </div>

    // <div className="bg-zinc-50 w-full h-screen pt-16">
    //   <div className="bg-emerald-900 rounded-b-4xl h-3/4 relative flex">
    //     <div className="pl-20 w-2/4 h-full flex flex-col justify-center space-y-2">
    //       <h1 className="text-7xl font-extrabold text-amber-300">CASUAL</h1>
    //       <h1 className="text-7xl font-extrabold text-white">COLLECTION</h1>
    //       <p className="text-white">
    //         Slide into comfort, stand out in style. Our casual tees are made to
    //         move with you — perfect fits, bold vibes, and everyday looks that
    //         never try too hard.
    //       </p>
    //       <div className="w-full sm:w-2/3 md:w-1/3">
    //         <AppLink title="Shop Now" href="/shop" />
    //       </div>
    //     </div>
    //     <div className="absolute bottom-0 right-24 w-[35%] h-11/12 ">
    //       <Image
    //         src="/images/hero_model.png"
    //         alt="Description of image"
    //         fill
    //         className="object-cover"
    //       />
    //     </div>
    //     <div
    //       className="absolute bg-emerald-900 w-[200px] h-[200px]
    //            -bottom-[80px] left-1/2 transform -translate-x-1/2
    //            rounded-full flex items-end justify-center"
    //     >
    //       <LuChevronDown className="text-8xl text-white animate-bounce" />
    //     </div>
    //   </div>
    //   <div className="bg-zinc-400 z-10  rounded-b-4xl h-[70px] -mt-10 relative flex justify-center">
    //     <div
    //       className="absolute bg-zinc-400 w-[200px] h-[200px]
    //            -bottom-[80px] left-1/2 transform -translate-x-1/2
    //            rounded-full flex items-end-safe justify-center"
    //     />
    //   </div>
    //   <div className="bg-zinc-200  rounded-b-4xl h-[70px] -mt-10 relative flex justify-center">
    //     <div
    //       className="absolute bg-zinc-200 w-[200px] h-[200px]
    //            -bottom-[80px] left-1/2 transform -translate-x-1/2
    //            rounded-full flex items-end-safe justify-center"
    //     />
    //   </div>
    // </div>
  );
};

export default HeroSection;
