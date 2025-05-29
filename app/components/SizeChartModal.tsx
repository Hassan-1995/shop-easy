"use client";
import React, { useState } from "react";
import { FaX } from "react-icons/fa6";

type SizeChartModalProps = {
  sizes: string[][];
};

const SizeChartModal = ({ sizes }: SizeChartModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-3 py-2 bg-emerald-300 font-semibold rounded-lg"
      >
        SIZE CHART
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center h-screen w-screen z-50">
          <div className="bg-white px-3 py-3 w-full md:w-3/5 rounded">
            <div className="flex justify-end items-center mb-4">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-emerald-400 text-xl rounded-lg"
              >
                <FaX />
              </button>
            </div>
            <div className="flex justify-center my-2">
              <h2 className="text-lg font-bold">Size Guidelines</h2>
            </div>

            <div className="text-sm w-full text-gray-800 rounded overflow-hidden inline-block">
              {sizes.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-5">
                  {row.map((cell, cellIndex) => (
                    <div
                      key={cellIndex}
                      className="w-auto px-2 border ml-1 mb-1 border-emerald-500 text-xs md:text-sm font-medium"
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SizeChartModal;
