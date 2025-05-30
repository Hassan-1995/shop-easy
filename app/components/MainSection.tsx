import Image from "next/image";
import { FaCircle } from "react-icons/fa6";
import AddToBagButton from "./AddToBagButton";
import SizeChartModal from "./SizeChartModal";
import SizesButton from "./SizesButton";

type MainSectionProps = {
  imageSrc: string | "";
  title?: string;
  subTitle?: string;
  price?: string;
  stock?: string;
  color?: string;
};

const sizeChartModalData = [
  ["Size", "S", "M", "L", "XL"],
  ["Length", "38", "41", "44", "47.5"],
  ["Waist", "29.5", "32.5", "35.5", "39"],
];

const MainSection = ({
  imageSrc,
  title,
  subTitle,
  price,
  stock,
  color,
}: MainSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden shadow-lg border border-gray-200 my-5 p-10">
      {/* Image section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-screen">
        <Image src={imageSrc} alt={title!} fill className="object-contain" />
      </div>

      {/* Text section */}
      <div className="w-full space-y-3 md:w-1/2 p-4 flex flex-col gap-2 items-start">
        <h1 className="md:text-xl font-bold italic text-amber-400 truncate inline">
          Gravitee MEN
        </h1>
        <h1 className="text-xl md:text-4xl text-gray-800 inline">{title}</h1>
        <p className="md:text-lg text-green-700">$ {price}</p>

        <SizeChartModal sizes={sizeChartModalData} />
        <div className="flex justify-center items-center">
          <div className="flex w-5 h-5 rounded-full border-2 border-zinc-400 justify-center items-center mr-2">
            <FaCircle className="text-sm text-green-500 animate-pulse" />
          </div>
          <p className="text-gray-500 text-xs">{stock} IN STOCK</p>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <div className="border-2 border-zinc-400 rounded-full w-10 h-10 flex justify-center items-center ">
            <div
              style={{ backgroundColor: color }}
              className=" rounded-full w-8 h-8"
            />
          </div>
          <h1 className="font-semibold text-zinc-600">Color</h1>
        </div>
        <SizesButton />
        <p>{subTitle}</p>
        <AddToBagButton
          imageSrc={imageSrc}
          title={title}
          price={price}
          color={color}
        />
      </div>
    </div>
  );
};

export default MainSection;
