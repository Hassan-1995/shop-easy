import CheckBoxFilter from "../components/common/CheckBoxFilter";
import ProductCard from "../components/ProductCard";
// import FilterToggleClient from "./FilterToggleClient";
import FilterToggleClientMobile from "../components/FIlterToggleClientMobile";

const filterValues = [
  "Chinos & Casual Trousers",
  "Formal & Slim Fit Trousers",
  "Cargo & Utility Trousers",
  "Joggers & Relaxed Fit Pants",
];
const collection = [
  {
    id: "1",
    type: "Chinos & Casual Trousers",
    imageSrc: "/images/chinos_casual_trousers.png",
    description: "Solid-color chinos for effortless everyday wear",
    price: 19.99,
    detail: "Minimalist and comfortable fit ideal for daily styling",
    color: "beige",
    stock: 33,
  },
  {
    id: "2",
    type: "Formal & Slim Fit Trousers",
    imageSrc: "/images/formal_slim_fit_trousers.png",
    description: "Tailored slim-fit trousers for a polished look",
    price: 27.49,
    detail: "Sharp silhouette and versatile for office wear",
    color: "black",
    stock: 59,
  },
  {
    id: "3",
    type: "Cargo & Utility Trousers",
    imageSrc: "/images/cargo_utility_trousers.png",
    description: "Multi-pocket utility trousers with relaxed fit",
    price: 33.0,
    detail: "Function meets comfort with spacious design",
    color: "olive",
    stock: 45,
  },
  {
    id: "4",
    type: "Joggers & Relaxed Fit Pants",
    imageSrc: "/images/joggers_relaxed_fit_trousers.png",
    description: "Everyday joggers for relaxed movement",
    price: 17.5,
    detail: "Easygoing design with breathable fabric",
    color: "gray",
    stock: 37,
  },
  {
    id: "5",
    type: "Joggers & Relaxed Fit Pants",
    imageSrc: "/images/joggers_relaxed_fit_trousersA01.png",
    description: "Lounge-ready joggers with stretch comfort",
    price: 20.0,
    detail: "Perfect blend of flexibility and ease",
    color: "brown",
    stock: 51,
  },
  {
    id: "6",
    type: "Chinos & Casual Trousers",
    imageSrc: "/images/chinos_casual_trousersA01.png",
    description: "Modern fit chinos for versatile styling",
    price: 41.5,
    detail: "Elevate your essentials with sleek chinos",
    color: "black",
    stock: 55,
  },
  {
    id: "7",
    type: "Chinos & Casual Trousers",
    imageSrc: "/images/chinos_casual_trousersB01.png",
    description: "Everyday chino with regular fit design",
    price: 20.0,
    detail: "Balanced blend of form and function",
    color: "navy",
    stock: 35,
  },
  {
    id: "8",
    type: "Chinos & Casual Trousers",
    imageSrc: "/images/chinos_casual_trousersC01.png",
    description: "Slim casual chinos for sharp style",
    price: 22.0,
    detail: "Clean lines and lightweight feel",
    color: "white",
    stock: 43,
  },
  {
    id: "9",
    type: "Chinos & Casual Trousers",
    imageSrc: "/images/chinos_casual_trousersD01.png",
    description: "Light cotton chinos for summer days",
    price: 21.0,
    detail: "Breezy fit and classic silhouette",
    color: "brown",
    stock: 47,
  },
  {
    id: "10",
    type: "Chinos & Casual Trousers",
    imageSrc: "/images/chinos_casual_trousersE01.png",
    description: "Minimal chinos perfect for casual use",
    price: 19.5,
    detail: "Crisp, solid design ideal for relaxed wear",
    color: "white",
    stock: 29,
  },
  {
    id: "11",
    type: "Joggers & Relaxed Fit Pants",
    imageSrc: "/images/joggers_relaxed_fit_trousersB01.png",
    description: "Comfort-first joggers for any activity",
    price: 19.0,
    detail: "Soft-touch fabric for easy movement",
    color: "gray",
    stock: 53,
  },
  {
    id: "12",
    type: "Joggers & Relaxed Fit Pants",
    imageSrc: "/images/joggers_relaxed_fit_trousersC01.png",
    description: "Laid-back joggers with clean design",
    price: 21.0,
    detail: "Relaxed tailoring with premium cotton",
    color: "olive",
    stock: 39,
  },
  {
    id: "13",
    type: "Joggers & Relaxed Fit Pants",
    imageSrc: "/images/joggers_relaxed_fit_trousersD01.png",
    description: "Easy joggers for casual lounging",
    price: 18.75,
    detail: "Relaxed waistband and all-day comfort",
    color: "red",
    stock: 31,
  },
  {
    id: "14",
    type: "Joggers & Relaxed Fit Pants",
    imageSrc: "/images/joggers_relaxed_fit_trousersE01.png",
    description: "Versatile joggers with classic fit",
    price: 20.0,
    detail: "Refined comfort for indoor and outdoor use",
    color: "white",
    stock: 57,
  },
  {
    id: "15",
    type: "Cargo & Utility Trousers",
    imageSrc: "/images/cargo_utility_trousersA01.png",
    description: "Heavy-duty cargo pants with modern cut",
    price: 31.0,
    detail: "Stylish and rugged for daily wear",
    color: "blue",
    stock: 41,
  },
  {
    id: "16",
    type: "Cargo & Utility Trousers",
    imageSrc: "/images/cargo_utility_trousersB01.png",
    description: "Relaxed-fit cargos with deep pockets",
    price: 29.49,
    detail: "Built for comfort and everyday utility",
    color: "brown",
    stock: 35,
  },
  {
    id: "17",
    type: "Cargo & Utility Trousers",
    imageSrc: "/images/cargo_utility_trousersC01.png",
    description: "Roomy fit utility trousers with flair",
    price: 32.25,
    detail: "Street-inspired design with functional edge",
    color: "white",
    stock: 55,
  },
  {
    id: "18",
    type: "Cargo & Utility Trousers",
    imageSrc: "/images/cargo_utility_trousersD01.png",
    description: "Urban cargo pants with easy fit",
    price: 30.0,
    detail: "Lightweight design with rugged style",
    color: "green",
    stock: 43,
  },
  {
    id: "19",
    type: "Cargo & Utility Trousers",
    imageSrc: "/images/cargo_utility_trousersE01.png",
    description: "Functional cargos with wide leg cut",
    price: 33.0,
    detail: "Airy comfort with utility style",
    color: "gray",
    stock: 59,
  },
  {
    id: "20",
    type: "Formal & Slim Fit Trousers",
    imageSrc: "/images/formal_slim_fit_trousersA01.png",
    description: "Crisp slim trousers for a formal outfit",
    price: 26.25,
    detail: "Modern styling for business or events",
    color: "beige",
    stock: 37,
  },
  {
    id: "21",
    type: "Formal & Slim Fit Trousers",
    imageSrc: "/images/formal_slim_fit_trousersB01.png",
    description: "Elegant slim-fit trousers with fine detail",
    price: 24.5,
    detail: "Perfect for work or special occasions",
    color: "black",
    stock: 39,
  },
  {
    id: "22",
    type: "Formal & Slim Fit Trousers",
    imageSrc: "/images/formal_slim_fit_trousersC01.png",
    description: "Stylish and fitted formal trousers",
    price: 28.0,
    detail: "Tailored look for elevated fashion",
    color: "olive",
    stock: 47,
  },
  {
    id: "23",
    type: "Formal & Slim Fit Trousers",
    imageSrc: "/images/formal_slim_fit_trousersD01.png",
    description: "Office-ready trousers with clean lines",
    price: 25.5,
    detail: "Structured form with premium feel",
    color: "brown",
    stock: 57,
  },
  {
    id: "24",
    type: "Formal & Slim Fit Trousers",
    imageSrc: "/images/formal_slim_fit_trousersE01.png",
    description: "Tailored fit trousers with refined edge",
    price: 27.0,
    detail: "Perfect mix of comfort and smart appeal",
    color: "beige",
    stock: 49,
  },
];

type TrousersPageProps = {
  searchParams: Promise<{
    type?: string | undefined;
  }>;
};

const TrousersPage = async ({ searchParams }: TrousersPageProps) => {
  // const selectedType = searchParams?.type || "";
  // const selectedType = (await searchParams).type || "";
  const { type } = await searchParams;

  let filteredCollection = collection;

  if (type) {
    filteredCollection = collection.filter((item) => item.type === type);
  }

  console.log("Selected Type: ", type);
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
          {type}
        </h1>
      </div>

      <div className="flex">
        <div className="hidden md:block w-1/6">
          {filterValues.map((filterValue) => (
            <CheckBoxFilter key={filterValue} filter={filterValue} />
          ))}
        </div>

        <div className="w-full md:w-5/6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around mb-12">
          {filteredCollection.map((item, index) => (
            <ProductCard
              key={item.id}
              href={`/trousers/${item.id}`}
              imageSrc={item.imageSrc}
              title={item.description}
              price={item.price}
              subTitle={item.detail}
              color={item.color}
              availStock={item.stock}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrousersPage;
