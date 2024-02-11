"use client";
import { useState, useRef } from "react";
import Product from "./product";
function productGrid() {
  let numbersArray = Array.from({ length: 30 }, (_, i) => i + 1);
  const [isVisible, setIsVisible] = useState(false);

  const hideQuickview = () => {
    const box = document.getElementById("box");
    const boxContainer = document.getElementById("box-container");

    boxContainer.classList.add("invisible");
    box.classList.remove("opacity-100", "2xl:w-[1000px]", "w-11/12", "sm:w-9/12", "2md:w-8/12", "lg:w-7/12");
    box.classList.add("opacity-0", "w-0");
  };
  const quickview = () => {
    const box = document.getElementById("box");
    const boxContainer = document.getElementById("box-container");

    boxContainer.classList.remove("invisible");
    box.classList.add("opacity-100", "2xl:w-[1000px]", "w-11/12", "sm:w-9/12", "2md:w-8/12", "lg:w-7/12");
    box.classList.remove("opacity-0", "w-0");
  };

  return (
    <>
      {/* Popup View Start*/}
      <div
        onClick={hideQuickview}
        id="box-container"
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-slate-200 bg-opacity-60 invisible"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          id="box"
          className="w-0 absolute aspect-[1/2] sm:aspect-[7/4] bg-gray-600 transition-all duration-700 opacity-0 z-50 rounded-2xl"
        ></div>
      </div>
      {/* Popup View End*/}

      <div className="mx-1 md:mx-2">
        <div className="grid grid-cols-2 gap-2 md:gap-4 content-normal sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 font-sans">
          {numbersArray.map((number) => (
            <Product key={number} quickview={quickview}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default productGrid;
