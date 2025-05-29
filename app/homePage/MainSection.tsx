import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import ImageContent from "../components/ImageContent";
import InputEmail from "../components/InputEmail";

const collection = [
  {
    category: "1",
    imageSrc: "/images/basic_solid_tees.png",
    description: "Basic and Solid Tees",
    href: "/shirts?type=Basic+%26+Solid+Tees",
  },
  {
    category: "2",
    imageSrc: "/images/graphic_printed_tees.png",
    description: "Graphic and Printed Tees",
    href: "/shirts?type=Graphic+%26+Printed+Tees",
  },
  {
    category: "3",
    imageSrc: "/images/oversized_drop_shoulder_tees.png",
    description: "Oversized and Shoulder Tees",
    href: "/shirts?type=Oversized+%26+Drop+Shoulder",
  },
  {
    category: "4",
    imageSrc: "/images/polo_collar_tees.png",
    description: "Polo and Collar Tees",
    href: "/shirts?type=Polo+%26+Collar+Tees",
  },
  {
    category: "5",
    imageSrc: "/images/chinos_casual_trousers.png",
    description: "Chinos and Casual Trousers",
    href: "/trousers?type=Chinos+%26+Casual+Trousers",
  },
  {
    category: "6",
    imageSrc: "/images/formal_slim_fit_trousers.png",
    description: "Formal and Slim Fit Trousers",
    href: "/trousers?type=Formal+%26+Slim+Fit+Trousers",
  },
  {
    category: "7",
    imageSrc: "/images/cargo_utility_trousers.png",
    description: "Cargo and Utility Trousers",
    href: "/trousers?type=Cargo+%26+Utility+Trousers",
  },
  {
    category: "8",
    imageSrc: "/images/joggers_relaxed_fit_trousers.png",
    description: "Joggers and Relaxed Fit Pants",
    href: "/trousers?type=Joggers+%26+Relaxed+Fit+Pants",
  },
];

const MainSection = () => {
  return (
    <div className="px-3 md:px-10">
      <Header title="COLLECTION" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
        {collection.map((item) => (
          <ImageContent
            key={item.category}
            imageSrc={item.imageSrc}
            description={item.description}
            href={item.href}
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
            <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
              <p className="text-white text-center font-extrabold text-lg md:text-2xl md:border-8 p-10 transition-transform duration-300 ease-in-out group-hover:scale-130">
                SUMMER COLLECTION
              </p>
            </div>
          </Link>
          <Link href="/" className="relative w-2/5 h-auto group">
            <Image
              src="/images/custom_print.png"
              alt="summer"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <p className="text-white text-center px-4 font-extrabold text-sm md:text-2xl transition-transform duration-300 ease-in-out group-hover:scale-130">
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
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <p className="text-white text-center px-4 font-extrabold text-sm md:text-2xl transition-transform duration-300 ease-in-out group-hover:scale-130">
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
              <p className="text-white text-center font-extrabold text-lg md:text-2xl md:border-8 p-10 transition-transform duration-300 ease-in-out group-hover:scale-130">
                WINTER COLLECTION
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-red-100 w-full h-[25vh] md:h-[40vh] lg:h-[60vh] my-10 flex ">
        <div className="w-1/5 flex justify-end ">
          <div className="relative w-full flex justify-end ">
            <Image
              src={"/images/model_03.png"}
              alt="hkj"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-4/5 bg-emerald-900 h-full flex flex-col justify-center items-center">
          <h1 className="text-white md:text-2xl lg:text-5xl text-center font-bold">
            GET A <span className="text-yellow-500">20%</span> OFF ON YOUR FIRST
            ORDER
          </h1>
          <p className="text-xs md:text-lg lg:text-3xl text-gray-200 text-center mt-2">
            Use your <span className="font-semibold text-white">EMAIL</span> at
            checkout to avail your discount!
          </p>
          <div className="w-11/12">
            <InputEmail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
