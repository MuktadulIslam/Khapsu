"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Product from "../product";
import data from "../../../data/productdata.json";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { Roboto_Slab, PT_Serif } from 'next/font/google';

const roboto_slab = Roboto_Slab({
    weight: ['500'],
    style: ['normal'],
    preload: false
})

const pt_serif = PT_Serif({
    weight: ['400'],
    style: ['normal'],
    preload: false
})

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const product = {
    name: "Basic Tee 6-Pack ",
    price: "$192",
    rating: 3.9,
    reviewCount: 117,
    href: "#",
    imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
    imageAlt: "Two each of gray, white, and black shirts arranged on table.",
    colors: [
        { name: "Black", img_src: "/resources/products/21.jpg", inStock: true },
        { name: "White", img_src: "/resources/products/21.jpg", inStock: true },
        { name: "Blue", img_src: "/resources/products/21.jpg", inStock: false },
        { name: "Red", img_src: "/resources/products/21.jpg", inStock: true },
        { name: "Pink", img_src: "/resources/products/21.jpg", inStock: true },
        // { name: "Black", img_src: "/resources/products/21.jpg", inStock: true },
        // { name: "Black", img_src: "/resources/products/21.jpg", inStock: true },
        // { name: "Black", img_src: "/resources/products/21.jpg", inStock: false },
        // { name: "Black", img_src: "/resources/products/21.jpg", inStock: true },
        // { name: "Black", img_src: "/resources/products/21.jpg", inStock: true },
    ],
    sizes: [
        // { name: "XXS", inStock: true },
        // { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        // { name: "XXL", inStock: false },
        // { name: "XXXL", inStock: false },
    ],
};

export default function ProductGrid() {
    const [open, setOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [item_count, setItem_count] = useState(0);
    const stock_number = 100;
    console.log(selectedSize);

    // let numbersArray = Array.from({ length: 30 }, (_, i) => i + 1);
    const productdata = data.products;
    const [isVisible, setIsVisible] = useState(false);

    const hideQuickview = () => {
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
    const quickview = () => {
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
    return (
        <>
            {/* Popup View Start*/}
            <div
                onClick={hideQuickview}
                id="box-container"
                className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-slate-200 bg-opacity-60 invisible" //invisible
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    id="box"
                    // className="w-0 relative flex-row sm:flex p-1.5 md:p-2.5 aspect-[1/2] sm:aspect-[7/4] bg-white transition-all duration-700 opacity-0 z-50 rounded-xl"
                    // className="relative max-sm:max-h-[750px] max-sm:max-w-[400px] flex-row sm:flex p-1.5 md:p-2.5 aspect-[1/2] sm:aspect-[8/5] bg-white transition-all duration-700 z-50 rounded-xl opacity-100 2xl:w-[1000px] w-11/12 2md:w-10/12 lg:w-9/12"
                    className="relative opacity-0 w-0 flex-row sm:flex p-1.5 md:p-2.5 aspect-[1/2] sm:aspect-[8/5] bg-white transition-all duration-700 z-50 rounded-xl"
                >
                    <button className="absolute top-2.5 right-2.5 w-7 h-7 2md:w-9 2md:h-9 z-30" onClick={hideQuickview}>
                        <div className="relative w-5 h-5 md:w-7 md:h-7">
                            <span className="custom-bold-cross"></span>
                        </div>
                    </button>

                    <div className="relative w-full aspect-square sm:w-5/12 sm:h-full sm:mr-4 max-sm:mb-4 rounded-xl overflow-hidden">
                        <Image
                            src={"/resources/products/21.jpg"}
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
                                Summer Special Play Quality Half Sleeve Jersey by NOGOR
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
                                                    product.rating > rating
                                                        ? "text-black"
                                                        : "text-gray-400",
                                                    "h-5 w-5 flex-shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                    <a
                                        href="#"
                                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        {product.reviewCount} reviews
                                    </a>
                                </div>
                            </div>
                            {/* Reviews end */}

                            <div className="mt-3 mb-8">
                                <span className="text-gray-400 max-sm:text-xl text-base md:text-lg 2md:text-xl xl:text-2xl pr-3">
                                    <del>
                                        <span className="font-serif">৳</span>
                                        600
                                    </del>
                                </span>
                                <span className="">
                                    <span className="font-serif">৳</span>
                                    500
                                </span>
                            </div>
                        </div>
                        {/* Title, Review, Price End*/}

                        {/* Size Start*/}
                        {/* <div className="flex max-sm:text-base text-sm 2md:text-base text-center">
              <span className="inline-block p-1.5 sm:p-1 2md:p-1.5 pr-6 2md:pr-6 sm:pr-5 ">
                Size:
              </span>
              <div className="overflow-x-auto ml-4">
                <ul className="flex gap-x-2 lg:gap-x-3.5 whitespace-nowrap pb-2">
                  <li className="border border-gray-300 p-1.5 sm:p-1 2md:p-1.5 min-w-[50px] relative bg-gray-200">
                    <span className="custom-cross"></span>
                    <button>S</button>
                  </li>
                  <li className="border border-gray-300 p-1.5 sm:p-1 2md:p-1.5 min-w-[50px] relative hover:bg-black hover:text-white">
                    <button>M</button>
                  </li>
                  <li className="border border-gray-300 p-1.5 sm:p-1 2md:p-1.5 min-w-[50px] relative hover:bg-black hover:text-white">
                    <button>L</button>
                  </li>
                  <li className="border border-gray-300 p-1.5 sm:p-1 2md:p-1.5 min-w-[50px] relative hover:bg-black hover:text-white">
                    <button>XL</button>
                  </li>
                  <li className="border border-gray-300 p-1.5 sm:p-1 2md:p-1.5 min-w-[50px] relative hover:bg-black hover:text-white">
                    <button>XXL</button>
                  </li>
                </ul>
              </div>
            </div> */}
                        {/* Size End */}

                        {/* Size2 Start */}
                        {/* Sizes */}
                        <div className="flex max-sm:text-base text-sm 2md:text-base text-center">
                            <span className="flex justify-center items-center p-1.5 sm:p-1 2md:p-1.5 pr-6 2md:pr-6 sm:pr-5 ">
                                Size:
                            </span>

                            <div className="overflow-x-auto ml-4 p-1">
                                <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                    <div className="flex gap-x-2 lg:gap-x-3.5 whitespace-nowrap pb-2">
                                        {product.sizes.map((size) => (
                                            <RadioGroup.Option
                                                key={size.name}
                                                value={size}
                                                disabled={!size.inStock}
                                                className={({ active }) =>
                                                    classNames(
                                                        size.inStock
                                                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                        active ? 'ring-2 ring-indigo-500' : '',
                                                        'group relative flex items-center justify-center rounded-md border py-2 lg:py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 min-w-[55px]'
                                                    )
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                        {size.inStock ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'border' : 'border-2',
                                                                    checked ? 'border-indigo-500' : 'border-transparent',
                                                                    'pointer-events-none absolute -inset-px rounded-md'
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
                                                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
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
                        {/* Size2 End */}

                        {/* Color Start */}
                        {/* <div className="mt-3 xl:mt-4 flex max-sm:text-base text-sm 2md:text-base text-center">
              <div className="flex items-center justify-center h-16">
                <span className="inline-block p-1.5 sm:p-1 2md:p-1.5">
                  Colors:
                </span>
              </div>
              <div className="overflow-x-auto ml-4 h-16">
                <ul className="flex gap-x-2 lg:gap-x-3.5 whitespace-nowrap pb-2 h-full">
                  <li className="border border-gray-300 p-1.5 sm:p-1 2md:p-1.5 aspect-square h-full relative hover:h-[110%]">
                    <button>
                      <Image
                        src={"/resources/products/21.jpg"}
                        alt="Product 1"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                      />
                    </button>
                  </li>
                  <li className="border border-gray-300 p-1.5 sm:p-1 2md:p-1.5 aspect-square h-full relative hover:h-[110%]">
                    <button>
                      <Image
                        src={"/resources/products/21.jpg"}
                        alt="Product 1"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                      />
                    </button>
                  </li>
                  <li className="border border-gray-300 p-1.5 sm:p-1 2md:p-1.5 aspect-square h-full relative">
                    <span className="custom-bold-cross"></span>
                    <button>
                      <Image
                        src={"/resources/products/21.jpg"}
                        alt="Product 1"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0  opacity-50"
                      />
                    </button>
                  </li>
                  <li className="border border-gray-300 p-1.5 sm:p-1 2md:p-1.5 aspect-square h-full relative hover:h-[110%]">
                    <button>
                      <Image
                        src={"/resources/products/21.jpg"}
                        alt="Product 1"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                      />
                    </button>
                  </li>
                  <li className="border border-gray-300 p-1.5 sm:p-1 2md:p-1.5 aspect-square h-full relative hover:h-[110%]">
                    <button>
                      <Image
                        src={"/resources/products/21.jpg"}
                        alt="Product 1"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div> */}
                        {/* Color End */}

                        {/* Color2 Start */}
                        <div className="flex max-sm:text-base text-sm 2md:text-base text-center mt-4">
                            <span className="flex justify-center items-center p-1.5 sm:p-1 2md:p-1.5 pr-6 2md:pr-6 sm:pr-5 ">
                                Colors:
                            </span>

                            <div className="flex overflow-x-auto ml-4 p-1">
                                <RadioGroup value={selectedColor} onChange={setSelectedColor}>
                                    <div className="flex gap-x-2 lg:gap-x-3.5 whitespace-nowrap">
                                        {product.colors.map((color) => (
                                            <RadioGroup.Option
                                                key={color.name}
                                                value={color}
                                                disabled={!color.inStock}
                                                className={({ active }) =>
                                                    classNames(
                                                        color.inStock
                                                            ? 'cursor-pointer'
                                                            : 'cursor-not-allowed',
                                                        active ? 'ring-2 ring-indigo-500' : '',
                                                        'relative rounded-md w-[55px] xl:w-16 aspect-square'
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
                                                                className={classNames('absolute inset-0 rounded-md',
                                                                    color.inStock ? 'opacity-100' : 'opacity-30'
                                                                )}
                                                            />
                                                        </RadioGroup.Label>
                                                        {color.inStock ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'border' : 'border-2',
                                                                    checked ? 'border-indigo-500' : 'border-transparent',
                                                                    'pointer-events-none absolute -inset-px rounded-md'
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
                                                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
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
                        {/* Color2 End */}

                        {/* Add to chart- buy now start*/}
                        <div className="grid grid-cols-7 h-12 w-full px-4 gap-4 mt-8">
                            <div className="w-full h-full col-span-3">
                                <div className="grid grid-cols-7 w-full h-full">
                                    <div className="w-full h-full col-span-2 border-2 hover:border-0 flex justify-center items-center hover:text-white hover:bg-black text-2xl 2md:text-4xl rounded-l-xl">
                                        <button
                                            className="w-full h-full"
                                            onClick={() => {
                                                if (item_count < stock_number)
                                                    setItem_count(item_count + 1);
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
                            <p className={`text-xl`}>
                                NOGOR Special Hoodie and Joggers Set.
                            </p>
                            <p className="text-base text-gray-500 mt-1">
                                SKU: N/A <br /> Category: Jersey
                            </p>
                            <div className={`${pt_serif.className} text-base`}>
                                <ul className="list-disc pl-7 pt-4 font-lighter">
                                    <li className="font-[100]">The perfect piece, made from our customer’s voice.</li>
                                    <li>Relaxed Fit</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>
                                <p className="text-gray-800 mt-5"> <strong><big className="pr-2">Tags:</big></strong>Classic Turtle Neck T-shirt - Unisex, full sleeve Unisex T-shirt, High Neck T-shirt, Turtle Neck T-shirt</p>
                            </div>
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
