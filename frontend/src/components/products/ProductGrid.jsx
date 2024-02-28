"use client"
import React, { useState } from 'react';
import ProductDetails from "./ProductDetails";
import Image from "next/image";
import LoveSVG from "./LoveSVG";
import { quickview } from "./ProductDetails";

export default function ProductGrid({ productsdata }) {
  const [selectedProduct, setSelectedProduct] = useState({
    id: "", price: 0, discount_price: 0,
    name: "",
    title: "",
    category: "",
    category_type: "",
    SKU: "",
    reviewCount: 0,
    stock_size: 0,
    sizes: [{ name: "", stock_size: 0, }],
    size_guide: [{ size: "", chest: 0, length: 0 }],
    tag_names: [""],
    rating: 0,
    ratings: { level1: 0, level2: 0, level3: 0, level4: 0, level5: 0 },
    total_sell: 0,
    total_sell_threshold: 1,
    image_url: "",
    more_image_url: [""],
    colors: [{ name: "", img_src: "/productdemo.png", stock_size: 0 }],
    description: "",
    point_description: [""]
  });

  return (
    <>
      <ProductDetails productdata={selectedProduct} />
      <div className="mx-1 md:mx-2">
        <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-4 content-normal sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 font-sans">
          {productsdata.map((productdata, index) => (
            <div key={index}>
              <div className="w-full aspect-[2/3] minmax-lg:aspect-[4/3] p-1 bg-slate-50 rounded-lg md:rounded-xl hover:scale-[1.04] transition-all md:[&_div.items-view-favourite]:hover:flex shadow-item-shadow hover:shadow-item-hover-shadow">
                <div className="relative">
                  {productdata.price > productdata.discount_price &&
                    productdata.discount_price > 0 ? (
                    <div className="absolute top-3 left-[-8px] text-white bg-black z-10 px-2 md:px-4 rounded-2xl text-xs md:text-sm rotate-[-45deg]">
                      -
                      {Math.ceil(
                        ((productdata.price - productdata.discount_price) * 100) /
                        productdata.price
                      )}
                      %
                    </div>
                  ) : (
                    <></>
                  )}

                  {/* Product Add to favourit */}
                  <div className="w-1/6 aspect-square  absolute bg-white rounded-full bg-opacity-0 top-1 right-1 grid place-items-center">
                    <button className="w-6 md:w-7 aspect-square">
                      <LoveSVG />
                    </button>
                  </div>

                  <div>
                    {/* For Out of Stock */}
                    {productdata.stock_size > 0 ? (
                      <></>
                    ) : (
                      <div className="absolute w-full aspect-[3/1] bottom-16 bg-slate-100 bg-opacity-80 grid place-items-center">
                        <p className="text-lg lg:text-xl font-outofstock">
                          <b>OUT OF STOCK</b>
                        </p>
                      </div>
                    )}

                    <Image
                      sizes="(min-width: 800px) 50vw, 30vw"
                      src={productdata.image_url}
                      alt="Product 1"
                      layout="responsive"
                      width={1}
                      height={1}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>
                <div className="relative px-1">
                  <div className="overflow-hidden whitespace-nowrap px-1 sm:px-2">
                    <p className="text-sm lg:text-base xl:text-lg font-medium mt-1">
                      {productdata.name}
                    </p>
                    <p className="font-medium text-xs lg:text-sm text-gray-500">
                      {productdata.category}
                    </p>
                    <p className="text-sm lg:text-base 2xl:text-lg font-semibold align-baseline mt-1">
                      {productdata.price > productdata.discount_price &&
                        productdata.discount_price > 0 ? (
                        <>
                          <span className="text-gray-400">
                            <del>
                              <span className="text-xs lg:text-sm 2xl:text-base font-serif">
                                ৳
                              </span>
                              {productdata.price}
                            </del>
                          </span>
                          <span className="pl-2.5">
                            <span className="text-xs lg:text-sm 2xl:text-base font-serif">
                              ৳
                            </span>
                            {productdata.discount_price}
                          </span>
                        </>
                      ) : (
                        <span className="pl-2.5">
                          <span className="text-xs lg:text-sm 2xl:text-base font-serif">
                            ৳
                          </span>
                          {productdata.price}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="mt-2 mx-1">
                  <button
                    className="w-full h-8 md:h-10 relative bg-[#06070B] rounded-md hover:scale-[1.06]"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedProduct(productdata);
                      quickview();
                    }}
                  >
                    <div className="w-full h-7 md:h-8 relative text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5/6 h-5/6">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                      </svg>

                      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5/6 h-5/6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg> */}


                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
