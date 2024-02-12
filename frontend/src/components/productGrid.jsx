"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Product from "./product";
import data from "../../data/productdata.json";
function productGrid() {
  // let numbersArray = Array.from({ length: 30 }, (_, i) => i + 1);
  const productdata = data.products;
  const [isVisible, setIsVisible] = useState(false);

  const hideQuickview = () => {
    const box = document.getElementById("box");
    const boxContainer = document.getElementById("box-container");

    // boxContainer.classList.add("invisible");
    // box.classList.remove(
    //   "opacity-100",
    //   "2xl:w-[1000px]",
    //   "w-11/12",
    //   "sm:w-10/12",
    //   "2md:w-9/12",
    //   "lg:w-8/12"
    // );
    // box.classList.add("opacity-0", "w-0");
  };
  const quickview = () => {
    const box = document.getElementById("box");
    const boxContainer = document.getElementById("box-container");

    // boxContainer.classList.remove("invisible");
    // box.classList.add(
    // "opacity-100",
    // "2xl:w-[1000px]",
    // "w-11/12",
    // "sm:w-10/12",
    // "2md:w-9/12",
    // "lg:w-8/12"
    // );
    // box.classList.remove("opacity-0", "w-0");
  };

  return (
    <>
      {/* Popup View Start*/}
      <div
        onClick={hideQuickview}
        id="box-container"
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-slate-200 bg-opacity-60" //invisible
      >
        <div
          onClick={(e) => e.stopPropagation()}
          id="box"
          // className="w-0 relative flex-row sm:flex p-1.5 md:p-2.5 aspect-[1/2] sm:aspect-[7/4] bg-white transition-all duration-700 opacity-0 z-50 rounded-xl"
          className="relative flex-row sm:flex p-1.5 md:p-2.5 aspect-[1/2] sm:aspect-[7/4] bg-white transition-all duration-700 z-50 rounded-xl opacity-100 2xl:w-[1000px] w-11/12 sm:w-10/12 2md:w-9/12 lg:w-8/12"
        >
          <button className="absolute top-1.5 right-1.5 w-7 h-7 2md:w-9 2md:h-9 z-30 ">
            <svg
              className="2md:w-6 2md:h-6 w-5 h-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.707 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div className="relative bg-red-400 w-full aspect-square sm:w-5/12 sm:h-full sm:mr-4 max-sm:mb-4 rounded-xl overflow-hidden">
            <Image
              src={"/resources/products/21.jpg"}
              alt="Product 1"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <button className="absolute bottom-0 w-full h-12 2md:h-16 bg-gray-200 font-semibold font-serif text-xl sm:text-lg md:xl">
              View Details
            </button>
          </div>

          <div className="w-full aspect-square sm:w-7/12 sm:h-full overflow-y-auto pr-7 sm:pt-2 max-sm:p-3">
            <div className="max-sm:text-xl text-lg md:text-xl 2md:text-2xl xl:text-3xl font-semibold">
              <div className="font-serif">
                Summer Special Play Quality Half Sleeve Jersey by NOGOR –
                NS0302015
              </div>
              <div className="mt-2 2md:mt-3">
                <span className="text-gray-400">
                  <del>
                    <span className="font-serif">৳</span>
                    600
                  </del>
                </span>
                <span className="pl-4">
                  <span className="font-serif">৳</span>
                  500
                </span>
              </div>
            </div>

            <div className="overflow-x-auto mt-8 flex ">
              <span className="text-lg inline-block">Size:</span>
              <ul className="custom-scroll ml-4 flex gap-x-2 whitespace-nowrap">
                <li className="border border-gray-300 p-2 flex-none min-w-[50px]">
                  S
                </li>
                <li className="border border-gray-300 p-2 flex-none min-w-[50px]">
                  M
                </li>
                <li className="border border-gray-300 p-2 flex-none min-w-[50px]">
                  L
                </li>
                <li className="border border-gray-300 p-2 flex-none min-w-[50px]">
                  XL
                </li>
                <li className="border border-gray-300 p-2 flex-none min-w-[50px]">
                  XXL
                </li>
                {/* Add more items here */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Popup View End*/}

      <div className="mx-1 md:mx-2">
        <div className="grid grid-cols-2 gap-2 md:gap-4 content-normal sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 font-sans">
          {productdata.map((product) => (
            <Product
              key={product.id}
              quickview={quickview}
              image_url={product.image_url}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default productGrid;
