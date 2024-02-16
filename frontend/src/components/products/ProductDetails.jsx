"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Roboto_Slab, PT_Serif } from "next/font/google";

const roboto_slab = Roboto_Slab({
  weight: ["500"],
  style: ["normal"],
  preload: false,
});

const pt_serif = PT_Serif({
  weight: ["400"],
  style: ["normal"],
  preload: false,
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const hideQuickview = () => {
  const box = document.getElementById("box");
  const boxContainer = document.getElementById("box-container");

  boxContainer.classList.add("invisible");
  box.classList.remove(
    "opacity-100",
    "2xl:w-[1000px]",
    "w-11/12",
    "2md:w-10/12",
    "lg:w-9/12",
    "max-sm:max-h-[750px]",
    "max-sm:max-w-[400px]"
  );
  box.classList.add("opacity-0", "w-0");
};
export const quickview = () => {
  const box = document.getElementById("box");
  const boxContainer = document.getElementById("box-container");

  boxContainer.classList.remove("invisible");
  box.classList.add(
    "opacity-100",
    "2xl:w-[1000px]",
    "w-11/12",
    "2md:w-10/12",
    "lg:w-9/12",
    "max-sm:max-h-[750px]",
    "max-sm:max-w-[400px]"
  );
  box.classList.remove("opacity-0", "w-0");
};


export default function ProductDetails({ productdata }) {
  // This data will fatch from server by product ID and SKU id
  // const productdata = {
  //   id: "FS001",
  //   price: 1000,
  //   discount_price: 800,
  //   name: "Summer Special Play Quality Half Sleeve Jersey by NOGOR",
  //   title: "NOGOR Special Hoodie and Joggers Set.",
  //   category: "Classic Hoodie",
  //   category_type: "hoodie",
  //   SKU: "PDDR-32",
  //   reviewCount: 1117,
  //   tag_names: ["Casual", "Men's Fashion", "hoodie"],
  //   rating: 2.9,
  //   colors: [
  //     { name: "Black", img_src: "/resources/products/1.jpg", stock_size: 10 },
  //     { name: "White", img_src: "/resources/products/21.jpg", stock_size: 20 },
  //     { name: "Blue", img_src: "/resources/products/21.jpg", stock_size: 0 },
  //     { name: "Red", img_src: "/resources/products/21.jpg", stock_size: 20 },
  //     { name: "Pink", img_src: "/resources/products/21.jpg", stock_size: 50 },
  //   ],
  //   sizes: [
  //     { name: "XXS", stock_size: 23 },
  //     { name: "XS", stock_size: 10 },
  //     { name: "S", stock_size: 0 },
  //     { name: "M", stock_size: 23 },
  //     { name: "L", stock_size: 30 },
  //     { name: "XL", stock_size: 0 },
  //     { name: "XXL", stock_size: 27 },
  //     { name: "XXXL", stock_size: 10 },
  //   ],
  //   point_description: [
  //     "The perfect piece, made from our customer’s voice.",
  //     "Relaxed Fit",
  //     "Comfortable full sleeve Unisex T-shirt.",
  //     "Fabric: Stretch China Polyester",
  //     "GSM: 230-290",
  //   ],
  // };

  const [item_count, setItem_count] = useState(0);
  const [selectedColor, setSelectedColor] = useState(productdata.colors[0].img_src);
  const [selectedSize, setSelectedSize] = useState(productdata.sizes[0].name);
  const stockSize = useRef(0);

  useEffect(() => {
    setSelectedColor(productdata.colors[0].img_src);
    setSelectedSize(productdata.sizes[0].name);
    stockSize.current = (productdata.colors[0].stock_size > productdata.sizes[0].stock_size) ? productdata.sizes[0].stock_size : productdata.colors[0].stock_size;
  }, [productdata]);

  useEffect(() => {
    const color = productdata.colors.find(color => color.img_src === selectedColor);
    const size = productdata.sizes.find(size => size.name === selectedSize);
    
    stockSize.current = (color.stock_size > size.stock_size) ? size.stock_size : size.stock_size;
  }, [selectedColor, selectedSize]);

  
  return (
    <>
      {/* Popup View Start*/}
      {productdata ? (
        <div
          onClick={hideQuickview}
          id="box-container"
          className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-slate-200 bg-opacity-60 invisible"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            id="box"
            className="relative opacity-0 w-0 flex-row sm:flex p-1.5 md:p-2.5 aspect-[1/2] sm:aspect-[8/5] bg-white transition-all duration-500 z-50 rounded-xl"
          >
            <button
              className="absolute top-2.5 right-2.5 w-7 h-7 2md:w-9 2md:h-9 z-30"
              onClick={hideQuickview}
            >
              <div className="relative w-5 h-5 md:w-7 md:h-7">
                <span className="custom-bold-cross"></span>
              </div>
            </button>

            <div className="relative w-full aspect-square sm:w-5/12 sm:h-full sm:mr-4 max-sm:mb-4 rounded-xl overflow-hidden">
              <Image
                src={selectedColor}
                alt="Product 1"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              <button className="absolute bottom-0 w-full h-12 2md:h-16 bg-gray-200 font-semibold font-serif text-base md:text-lg lg:text-xl">
                View Details
              </button>
            </div>

            <div className="w-full aspect-square sm:w-7/12 sm:h-full overflow-y-auto pr-7 sm:pt-2 max-sm:p-3">
              {/* Title, Review, Price Start*/}
              <div className="max-sm:text-xl text-lg md:text-xl 2md:text-2xl xl:text-3xl sm:pr-3">
                <div className={`${roboto_slab.className} font-serif`}>
                  {productdata.name}
                </div>

                {/* Reviews */}
                <div className="mt-6">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            productdata.rating > rating
                              ? "text-black"
                              : "text-gray-400",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{productdata.rating} out of 5 stars</p>
                    <a
                      href="#"
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {productdata.reviewCount} reviews
                    </a>
                  </div>
                </div>
                {/* Reviews end */}

                <div className="mt-3 mb-8 font-medium">
                  {
                    (productdata.price > productdata.discount_price && productdata.discount_price > 0) ?
                      (<><span className="text-gray-400 max-sm:text-xl text-base md:text-lg 2md:text-xl xl:text-2xl pr-3">
                        <del>
                          <span className="font-serif">৳</span>
                          {productdata.price}
                        </del>
                      </span>
                        <span className="">
                          <span className="font-serif">৳</span>
                          {productdata.discount_price}
                        </span>
                      </>) :
                      (<>
                        <span className="">
                          <span className="font-serif">৳</span>
                          {productdata.price}
                        </span>
                      </>)
                  }
                </div>
              </div>
              {/* Title, Review, Price End*/}

              {/* Sizes Start*/}
              <div className="flex max-sm:text-base text-sm 2md:text-base text-center">
                <span className="flex justify-center items-center p-1.5 sm:p-1 2md:p-1.5 pr-6 2md:pr-6 sm:pr-5 ">
                  Size:
                </span>

                <div className="overflow-x-auto ml-4 p-1">
                  <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                    {/* <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label> */}
                    <div className="flex gap-x-2 lg:gap-x-3.5 whitespace-nowrap pb-2">
                      {productdata.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size.name}
                          disabled={!(size.stock_size > 0)}
                          className={({ active }) =>
                            classNames(
                              size.stock_size > 0
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-2 lg:py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 min-w-[55px]"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.stock_size > 0 ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
              {/* Size End */}

              {/* Color Start */}
              <div className="flex max-sm:text-base text-sm 2md:text-base text-center mt-4">
                <span className="flex justify-center items-center p-1.5 sm:p-1 2md:p-1.5 pr-6 2md:pr-6 sm:pr-5 ">
                  Colors:
                </span>

                <div className="flex overflow-x-auto ml-4 p-1">
                  <RadioGroup value={selectedColor} onChange={setSelectedColor}>
                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                    <div className="flex gap-x-2 lg:gap-x-3.5 whitespace-nowrap">
                      {productdata.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.img_src}
                          value={color.img_src}
                          disabled={!(color.stock_size > 0)}
                          className={({ active }) =>
                            classNames(
                              color.stock_size > 0
                                ? "cursor-pointer"
                                : "cursor-not-allowed",
                              active ? "ring-2 ring-indigo-500" : "",
                              "relative rounded-md w-[55px] xl:w-16 aspect-square"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                <Image
                                  src={color.img_src}
                                  alt="Product 1"
                                  layout="fill"
                                  objectFit="cover"
                                  // className="absolute inset-0"
                                  className={classNames(
                                    "absolute inset-0 rounded-md",
                                    color.stock_size > 0
                                      ? "opacity-100"
                                      : "opacity-40"
                                  )}
                                />
                              </RadioGroup.Label>
                              {color.stock_size > 0 ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
              {/* Color End */}

              {/* Add to chart- buy now start*/}
              <div className="grid grid-cols-7 h-12 w-full px-4 gap-4 mt-8">
                <div className="w-full h-full col-span-3">
                  <div className="grid grid-cols-7 w-full h-full">
                    <div className="w-full h-full col-span-2 border-2 hover:border-0 flex justify-center items-center hover:text-white hover:bg-black text-2xl 2md:text-4xl rounded-l-xl">
                      <button
                        className="w-full h-full"
                        onClick={() => {
                          if (item_count < stockSize.current) {
                            setItem_count(item_count + 1);
                          }
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="w-full h-full col-span-3 border-y-2 flex justify-center items-center text-lg 2md:text-2xl">
                      {item_count}
                    </div>
                    <div className="w-full h-full col-span-2 border-2 hover:border-0 flex justify-center items-center hover:text-white hover:bg-black text-2xl 2md:text-4xl rounded-r-xl">
                      <button
                        className="w-full h-full"
                        onClick={() => {
                          if (item_count > 0) setItem_count(item_count - 1);
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full col-span-2 text-center bg-gray-200 hover:text-white hover:bg-black text-sm 2md:text-base font-semibold flex justify-center items-center rounded-lg">
                  Add to Cart
                </div>
                <div className="w-full h-full col-span-2 text-center text-white bg-black text-sm 2md:text-base font-semibold flex justify-center items-center rounded-lg hover:scale-105">
                  Buy Now
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-400 mt-8"></div>
              {/* Add to chart- buy now end*/}

              <div className={`${roboto_slab.className} my-6 font-serif`}>
                <p className={`text-xl`}>{productdata.title}</p>
                <p className="text-base text-gray-500 mt-1">
                  SKU: N/A <br /> Category: {productdata.category}
                </p>
                <div className={`${pt_serif.className} text-base`}>
                  <ul className="list-disc pl-7 pt-4 font-lighter">
                    {productdata.point_description.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                  <p className="text-gray-800 mt-5">
                    {" "}
                    <strong>
                      <big className="pr-2">Tags:</big>
                    </strong>
                    {productdata.tag_names.map((tag, index) => (
                      <span key={index}>{tag}, </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (<></>)}
      {/* Popup View End*/}
    </>
  );
}
