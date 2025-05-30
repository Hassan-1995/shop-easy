"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus, FaRegTrashCan, FaTruckFast } from "react-icons/fa6";
import { RootState } from "../store/store";
import { increment, decrement, removeItem } from "../store/slices/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="text-sm mb-6">
        {totalItems === 0 && <p>Your cart is empty.</p>}
        {totalItems === 1 && <p>Add 2 more items to get Free Delivery!</p>}
        {totalItems === 2 && <p>Add 1 more item to get Free Delivery!</p>}
        {totalItems >= 3 && <p>You have Free Delivery!!!</p>}
      </div>

      <div className="relative flex w-full h-4 rounded-full bg-zinc-200 mb-10">
        <div
          className={`h-3 rounded-full bg-emerald-600 transition-all duration-700 ${
            totalItems === 1
              ? "w-1/3"
              : totalItems === 2
              ? "w-2/3"
              : totalItems >= 3
              ? "w-full"
              : "w-0"
          }`}
        />
        <div
          className={`absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex justify-center items-center rounded-full text-2xl shadow transition-all duration-700 ${
            totalItems >= 3
              ? "bg-emerald-600 text-white"
              : "bg-zinc-200 text-emerald-600"
          }`}
        >
          <FaTruckFast />
        </div>
      </div>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex w-full h-52 border-b border-zinc-300 pb-4 mb-4"
        >
          <div className="relative w-1/3 h-full">
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-contain rounded"
            />
          </div>
          <div className="w-2/3 pl-4 flex flex-col justify-between">
            <div>
              <p className="font-semibold text-base">{item.title}</p>
              <p className="text-sm">Price: ${item.price}</p>
              <p className="text-sm">
                Color:{" "}
                {item.color.charAt(0).toUpperCase() + item.color.slice(1)}
              </p>
              <p className="text-sm">Size: {item.size}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="border w-2/3 px-2 py-1 flex justify-between items-center rounded">
                <button onClick={() => dispatch(decrement(item.id))}>
                  <FaMinus />
                </button>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch(increment(item.id))}>
                  <FaPlus />
                </button>
              </div>
              <button
                className="text-red-500"
                onClick={() => dispatch(removeItem(item.id))}
              >
                <FaRegTrashCan />
              </button>
            </div>
            <p className="text-sm font-semibold mt-1">
              Total: ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      {totalItems > 0 && (
        <div className="mt-10 flex flex-col gap-4">
          <p className="text-lg font-semibold">
            Subtotal: ${totalAmount.toFixed(2)}
          </p>
          <Link href="/">
            <button className="w-full py-3 bg-emerald-900 text-white font-semibold rounded">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}

      {totalItems === 0 && (
        <Link href="/">
          <button className="w-full py-3 bg-emerald-900 text-white font-semibold rounded">
            Continue Shopping
          </button>
        </Link>
      )}
    </>
  );
};

export default CartItems;
