import Image from "next/image";
import { LuChevronDown } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="mb-[20vh]">
      <div className="w-[100%] h-screen bg-white">
        <div className="w-[100%] h-[90vh] bg-zinc-300 rounded-b-4xl">
          <div className="w-[100%] h-[80vh] bg-zinc-400 rounded-b-4xl">
            <div className="w-[100%] h-[70vh] bg-emerald-900 overflow-hidden rounded-b-4xl md:px-10 flex justify-center lg:flex-row-reverse lg:justify-between">
              <div className="relative w-full md:w-3/5 lg:w-2/5 h-full">
                <Image
                  src="/images/hero_model.png"
                  alt="Description of image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute lg:static mt-[40vh] lg:mt-0 lg:h-full space-y-5 flex flex-col justify-center">
                <h1 className="text-5xl md:text-7xl font-extrabold text-amber-300">
                  CASUAL
                </h1>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white">
                  COLLECTION
                </h1>
                <p className="text-white hidden lg:block">
                  Slide into comfort, stand out in style. <br />
                  Our casual tees are made to move with you — <br />
                  perfect fits, bold vibes, and everyday looks that never try
                  too hard.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[140px] h-[70px] md:w-[200px] md:h-[100px] bg-zinc-300 rounded-b-full mx-auto mt-[10vh] flex items-end justify-center">
            <LuChevronDown className="text-5xl lg:text-6xl  text-white animate-bounce " />
          </div>
        </div>
        <div className="w-[140px] h-[70px] md:w-[200px] md:h-[100px] bg-zinc-400 rounded-b-full mx-auto -mt-[10vh] flex items-end justify-center">
          <LuChevronDown className="text-5xl lg:text-6xl  text-white animate-bounce " />
        </div>
      </div>
      <div className="relative w-[140px] h-[70px] md:w-[200px] md:h-[100px] bg-emerald-900 rounded-b-full mx-auto -mt-[30vh] flex items-end justify-center">
        <LuChevronDown className="text-5xl lg:text-6xl text-white animate-bounce " />
      </div>
    </div>
  );
};

export default HeroSection;
