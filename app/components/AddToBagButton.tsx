// "use client";
// import React, { useState } from "react";
// import { PiBagDuotone } from "react-icons/pi";
// import { FaX, FaPlus, FaMinus, FaRegTrashCan } from "react-icons/fa6";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";

// type AddToBagButtonProps = {
//   imageSrc: string;
//   title: string | undefined;
//   price: string | undefined;
//   color: string | undefined;
// };

// const AddToBagButton = ({
//   imageSrc,
//   title,
//   price,
//   color,
// }: AddToBagButtonProps) => {
//   const [cart, setCart] = useState(false);
//   const [size, setSize] = useState(false);

//   const searchParams = useSearchParams();
//   const isSize = searchParams.get("size");

//   const handleClick = () => {
//     if (!isSize) {
//       setSize(true);
//     } else {
//       setSize(false);
//       setCart((prev) => !prev);
//     }
//   };

//   return (
//     <>
//       <button
//         onClick={handleClick}
//         className="flex w-full py-3 justify-center space-x-2 items-center bg-emerald-900 text-white"
//       >
//         <PiBagDuotone className="text-3xl " />
//         <h1 className="font-semibold">ADD TO BAG</h1>
//       </button>
//       {size && <h1 className="text-red-500">Please select a size.</h1>}

//       <div
//         className={`fixed top-0 right-0 h-screen w-1/3 bg-zinc-200 flex flex-col p-4 transform transition-transform duration-700 ease-in-out ${
//           cart ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-xl font-semibold">Your cart</h1>
//           <button
//             onClick={() => setCart((prev) => !prev)}
//             className="text-emerald-400 text-xl rounded-lg"
//           >
//             <FaX />
//           </button>
//         </div>
//         <h1>ANIMATION</h1>
//         <div className="flex justify-between border-b mb-5">
//           <h1 className="text-xs pb-5">PRODUCT</h1>
//           <h1 className="text-xs pb-5">TOTAL</h1>
//         </div>
//         <div className="flex w-full h-52">
//           <div className="relative w-1/3 h-full">
//             <Image src={imageSrc!} alt={title!} fill className="object-cover" />
//           </div>
//           <div className="w-2/3 h-full pl-2">
//             <div className="flex w-full h-4/5">
//               <div className="w-2/3 h-full flex flex-col justify-between pb-2">
//                 <p className="font-semibold">{title}</p>
//                 <p>$: {price}</p>
//                 <p className="text-sm">
//                   Color:{" "}
//                   {color
//                     ? color.charAt(0).toUpperCase() + color.slice(1)
//                     : "N/A"}
//                 </p>
//                 <p className="text-sm">Size: {isSize}</p>
//               </div>
//               <div className="w-1/3 h-full">
//                 <p className="font-semibold">$: TOTAL</p>
//               </div>
//             </div>
//             <div className="flex w-full h-1/5 items-center space-x-2">
//               <div className="border w-2/3 h-full px-2 justify-between items-center boder-black flex ">
//                 <button>
//                   <FaMinus />
//                 </button>
//                 <p>Number</p>
//                 <button onClick={() => console.log("Plus")}>
//                   <FaPlus className="" />
//                 </button>
//               </div>
//               <div>
//                 <button onClick={() => console.log("Trash")}>
//                   <FaRegTrashCan />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddToBagButton;

"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

import {
  addItem,
  removeItem,
  increment,
  decrement,
} from "../store/slices/cartSlice";
import {
  FaX,
  FaPlus,
  FaMinus,
  FaRegTrashCan,
  FaTruckFast,
} from "react-icons/fa6";
import { PiBagDuotone } from "react-icons/pi";
import Image from "next/image";

type AddToBagButtonProps = {
  imageSrc: string;
  title: string | undefined;
  price: string | undefined;
  color: string | undefined;
};

const AddToBagButton = ({
  imageSrc,
  title,
  price,
  color,
}: AddToBagButtonProps) => {
  const searchParams = useSearchParams();
  const isSize = searchParams.get("size");
  const [cartOpen, setCartOpen] = useState(false);
  const [showSizeWarning, setShowSizeWarning] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const id = `${title}-${isSize}`; // i can use actual id aswell

  const handleClick = () => {
    if (!isSize) {
      setShowSizeWarning(true);
      return;
    }

    setShowSizeWarning(false);
    setCartOpen(true);

    dispatch(
      addItem({
        id,
        title: title!,
        imageSrc,
        price: Number(price),
        color: color || "N/A",
        size: isSize,
        quantity: 1,
      })
    );
  };

  const item = cartItems?.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <button
        onClick={handleClick}
        className="flex w-full py-3 justify-center space-x-2 items-center bg-emerald-900 text-white"
      >
        <PiBagDuotone className="text-3xl" />
        <h1 className="font-semibold">ADD TO BAG</h1>
      </button>

      {showSizeWarning && <p className="text-red-500">Please select a size.</p>}

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 min-h-screen max-h-screen w-full md:w-1/2 lg:w-1/3 bg-zinc-100 p-4 overflow-y-auto transition-transform duration-700 ease-in-out ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Your cart</h1>
          <button
            onClick={() => setCartOpen(false)}
            className="text-emerald-400 text-xl"
          >
            <FaX />
          </button>
        </div>

        <div className="flex flex-col w-full items-center my-10">
          {/* Animation: {item} */}
          <div className="mb-10 text-sm">
            {item === 1 ? (
              <h1>Add 2 more items to get Free Delivery!</h1>
            ) : item === 2 ? (
              <h1>Add 1 more items to get Free Delivery!</h1>
            ) : item >= 3 ? (
              <h1>You have Free Delivery!!!</h1>
            ) : (
              <h1>Add 3 or more items to get Free Delivery!</h1>
            )}
          </div>
          <div className="relative flex w-4/5 items-center h-4 rounded-full bg-zinc-200">
            {/* Progress bar */}
            <div
              className={`h-3 rounded-full bg-emerald-600 transition-all duration-700 ${
                item === 1
                  ? "w-1/3"
                  : item === 2
                  ? "w-2/3"
                  : item >= 3
                  ? "w-full"
                  : "w-0"
              }`}
            />

            {/* Fixed-position icon */}
            <div
              className={`
              absolute -right-6 top-1/2 -translate-y-1/2 
              w-12 h-12 flex justify-center items-center rounded-full 
              text-2xl shadow 
              transition-all duration-700
              ${
                item >= 3
                  ? "bg-emerald-600 text-white"
                  : "bg-zinc-200 text-emerald-600"
              }`}
            >
              <FaTruckFast />
            </div>
          </div>
        </div>

        {!item && (
          <div className="flex flex-col w-full space-y-10">
            <p className="text-xl">Your cart is empty.</p>
            <button onClick={() => setCartOpen(false)}>
              <p className="bg-emerald-900 p-3 text-lg font-semibold text-white">
                Continue Shopping
              </p>
            </button>
          </div>
        )}

        {cartItems.map((item) => (
          <div key={item.id} className="flex w-full h-52 border-b pb-4 mb-4">
            <div className="relative w-1/3 h-full">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-2/3 pl-2 flex flex-col justify-between">
              <div>
                <p className="font-semibold">{item.title}</p>
                <p>Price: ${item.price}</p>
                <p>Color: {item.color}</p>
                <p>Size: {item.size}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="border w-2/3 px-2 flex justify-between items-center">
                  <button onClick={() => dispatch(decrement(item.id))}>
                    <FaMinus />
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => dispatch(increment(item.id))}>
                    <FaPlus />
                  </button>
                </div>
                <button onClick={() => dispatch(removeItem(item.id))}>
                  <FaRegTrashCan />
                </button>
              </div>
              <p className="text-sm font-semibold mt-1">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddToBagButton;
