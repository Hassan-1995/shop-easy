import CheckBoxFilter from "../components/common/CheckBoxFilter";
import ProductCard from "../components/ProductCard";
// import FilterToggleClient from "./FilterToggleClient";
import FilterToggleClientMobile from "../components/FIlterToggleClientMobile";

const filterValues = [
  "Basic & Solid Tees",
  "Graphic & Printed Tees",
  "Oversized & Drop Should",
  "Polo & Collar Tees",
];
const collection = [
  {
    id: "1",
    type: "Basic & Solid Tees",
    imageSrc: "/images/basic_solid_tees.png",
    description: "Solid color basic tee for everyday wear",
    price: 18.49,
    detail: "Comfortable and minimal for daily use",
    color: "navy",
    stock: 33,
  },
  {
    id: "2",
    type: "Graphic & Printed Tees",
    imageSrc: "/images/graphic_printed_tees.png",
    description: "Printed graphic tee with trendy visuals",
    price: 26.99,
    detail: "Bold and expressive statement tee",
    color: "black",
    stock: 59,
  },
  {
    id: "3",
    type: "Oversized & Drop Shoulder",
    imageSrc: "/images/oversized_drop_shoulder_tees.png",
    description: "Relaxed fit drop shoulder tee",
    price: 32.5,
    detail: "Laid-back oversized look for all-day ease",
    color: "beige",
    stock: 45,
  },
  {
    id: "4",
    type: "Polo & Collar Tees",
    imageSrc: "/images/polo_collar_tees.png",
    description: "Classic polo shirt with collar design",
    price: 16.75,
    detail: "Timeless smart-casual polo for outings",
    color: "navy",
    stock: 37,
  },
  {
    id: "5",
    type: "Polo & Collar Tees",
    imageSrc: "/images/polo_collar_teesA01.png",
    description: "Soft-collar tee ideal for any season",
    price: 19.49,
    detail: "Blends comfort and formality in one",
    color: "black",
    stock: 51,
  },
  {
    id: "6",
    type: "Basic & Solid Tees",
    imageSrc: "/images/basic_solid_teesA01.png",
    description: "Essential solid tee in a fresh tone",
    price: 20.99,
    detail: "Simple and sleek essential wear",
    color: "red",
    stock: 55,
  },
  {
    id: "7",
    type: "Basic & Solid Tees",
    imageSrc: "/images/basic_solid_teesB01.png",
    description: "Everyday basic tee with a smooth touch",
    price: 19.25,
    detail: "Clean and comfortable regular fit",
    color: "red",
    stock: 35,
  },
  {
    id: "8",
    type: "Basic & Solid Tees",
    imageSrc: "/images/basic_solid_teesC01.png",
    description: "Clean cut basic tee for versatile styling",
    price: 21.49,
    detail: "Wear-anywhere solid color tee",
    color: "navy",
    stock: 43,
  },
  {
    id: "9",
    type: "Basic & Solid Tees",
    imageSrc: "/images/basic_solid_teesD01.png",
    description: "Lightweight solid tee for warm days",
    price: 20.0,
    detail: "Soft-touch fabric in solid hue",
    color: "blue",
    stock: 47,
  },
  {
    id: "10",
    type: "Basic & Solid Tees",
    imageSrc: "/images/basic_solid_teesE01.png",
    description: "Minimalist tee for casual occasions",
    price: 18.99,
    detail: "Everyday favorite with solid appeal",
    color: "purple",
    stock: 29,
  },
  {
    id: "11",
    type: "Polo & Collar Tees",
    imageSrc: "/images/polo_collar_teesB01.png",
    description: "Collar tee with subtle detailing",
    price: 18.5,
    detail: "Soft stretch fabric polo",
    color: "black",
    stock: 53,
  },
  {
    id: "12",
    type: "Polo & Collar Tees",
    imageSrc: "/images/polo_collar_teesC01.png",
    description: "Refined polo for smart styling",
    price: 20.25,
    detail: "Breathable cotton with formal touch",
    color: "green",
    stock: 39,
  },
  {
    id: "13",
    type: "Polo & Collar Tees",
    imageSrc: "/images/polo_collar_teesD01.png",
    description: "Easygoing polo tee with neat collar",
    price: 17.99,
    detail: "Versatile pick for all seasons",
    color: "olive",
    stock: 31,
  },
  {
    id: "14",
    type: "Polo & Collar Tees",
    imageSrc: "/images/polo_collar_teesE01.png",
    description: "Classic fit polo in soft fabric",
    price: 19.75,
    detail: "Polished look for casual settings",
    color: "maroon",
    stock: 57,
  },
  {
    id: "15",
    type: "Oversized & Drop Shoulder",
    imageSrc: "/images/oversized_drop_shoulder_teesA01.png",
    description: "Oversized tee with dropped shoulders",
    price: 30.0,
    detail: "Cozy fit with modern edge",
    color: "black",
    stock: 41,
  },
  {
    id: "16",
    type: "Oversized & Drop Shoulder",
    imageSrc: "/images/oversized_drop_shoulder_teesB01.png",
    description: "Laid-back oversized cotton tee",
    price: 28.99,
    detail: "Ultimate comfort with relaxed cut",
    color: "black",
    stock: 35,
  },
  {
    id: "17",
    type: "Oversized & Drop Shoulder",
    imageSrc: "/images/oversized_drop_shoulder_teesC01.png",
    description: "Stylish oversized tee with flair",
    price: 31.5,
    detail: "Trendy design, super roomy",
    color: "blue",
    stock: 55,
  },
  {
    id: "18",
    type: "Oversized & Drop Shoulder",
    imageSrc: "/images/oversized_drop_shoulder_teesD01.png",
    description: "Relax fit tee for streetwear looks",
    price: 29.75,
    detail: "Urban comfort with oversized style",
    color: "navy",
    stock: 43,
  },
  {
    id: "19",
    type: "Oversized & Drop Shoulder",
    imageSrc: "/images/oversized_drop_shoulder_teesE01.png",
    description: "Wide-cut shoulder tee for modern vibes",
    price: 32.0,
    detail: "Breezy feel and bold cut",
    color: "brown",
    stock: 59,
  },
  {
    id: "20",
    type: "Graphic & Printed Tees",
    imageSrc: "/images/graphic_printed_teesA01.png",
    description: "Graphic tee with bold prints",
    price: 25.25,
    detail: "Eye-catching graphics for bold style",
    color: "beige",
    stock: 37,
  },
  {
    id: "21",
    type: "Graphic & Printed Tees",
    imageSrc: "/images/graphic_printed_teesB01.png",
    description: "Fun and artsy printed tee",
    price: 23.99,
    detail: "Trendy and creative designs",
    color: "black",
    stock: 39,
  },
  {
    id: "22",
    type: "Graphic & Printed Tees",
    imageSrc: "/images/graphic_printed_teesC01.png",
    description: "Stylish graphic tee for youth",
    price: 27.49,
    detail: "Bold artwork with comfy fit",
    color: "brown",
    stock: 47,
  },
  {
    id: "23",
    type: "Graphic & Printed Tees",
    imageSrc: "/images/graphic_printed_teesD01.png",
    description: "Printed tee to express yourself",
    price: 24.25,
    detail: "Chic and cool statement piece",
    color: "blue",
    stock: 57,
  },
  {
    id: "24",
    type: "Graphic & Printed Tees",
    imageSrc: "/images/graphic_printed_teesE01.png",
    description: "Trendy printed tee with unique art",
    price: 26.0,
    detail: "Stand out with vivid visuals",
    color: "navy",
    stock: 49,
  },
];

// type PageProps = {
//   searchParams: { [key: string]: string };
// };
type ShoesPageProps = {
  searchParams: {
    type?: string | undefined;
  };
};

const ShoesPage = async ({ searchParams }: ShoesPageProps) => {
  const selectedType = searchParams?.type || "";
  // const selectedType = (await searchParams).type || "";

  let filteredCollection = collection;

  if (selectedType) {
    filteredCollection = collection.filter(
      (item) => item.type === selectedType
    );
  }

  console.log("Selected Type: ", selectedType);
  return (
    <div className="w-full px-3 md:px-5">
      <div className="flex w-full h-10 mb-4">
        <h1 className="hidden md:block md:text-base lg:text-lg font-bold p-2 w-1/6">
          Filters
        </h1>
        <div className="md:hidden w-1/6 z-10">
          <FilterToggleClientMobile filterValues={filterValues} />
        </div>
        <h1 className="lg:text-lg font-bold p-2 text-emerald-900 w-5/6">
          {selectedType}
        </h1>
      </div>

      <div className="flex">
        <div className="hidden md:block w-1/6">
          {filterValues.map((filterValue) => (
            <CheckBoxFilter key={filterValue} filter={filterValue} />
          ))}
        </div>

        <div className="w-full md:w-5/6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around mb-12">
          {filteredCollection.map((item) => (
            <ProductCard
              key={item.id}
              href={`/shirts/${item.id}`}
              imageSrc={item.imageSrc}
              title={item.description}
              price={item.price}
              subTitle={item.detail}
              color={item.color}
              availStock={item.stock}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoesPage;
