import Product from "./Product";
import data from "../../../data/productdata.json";
import ProductDetails from "./ProductDetails";
import Image from "next/image";
import LoveSVG from "./LoveSVG";
import { quickview } from "./ProductDetails";
import ProductDetailsViewButton from "./ProductDetailsViewButton";

export default function ProductGrid({productsdata, setSelectedProduct}) {
    // console.log(setSelectedProduct)
  return (
    <>
      <div className="mx-1 md:mx-2">
        <div className="grid grid-cols-2 gap-2 md:gap-4 content-normal sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 font-sans">
          {productsdata.map((productdata, index) => (
            <div key={index}>
            <div className="w-full aspect-[2/3] minmax-lg:aspect-[4/3] p-1 bg-slate-50 rounded-xl hover:scale-[1.04] transition-all md:[&_div.items-view-favourite]:hover:flex shadow-item-shadow hover:shadow-item-hover-shadow">
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
                  <p className="text-sm lg:text-lg 2xl:text-xl font-semibold align-baseline mt-1">
                    {productdata.price > productdata.discount_price &&
                    productdata.discount_price > 0 ? (
                      <>
                        <span className="text-gray-400">
                          <del>
                            <span className="text-xs sm:text-sm lg:text-base 2xl:text-lg font-serif">
                              ৳
                            </span>
                            {productdata.price}
                          </del>
                        </span>
                        <span className="pl-2.5">
                          <span className="text-xs sm:text-sm lg:text-base 2xl:text-lg font-serif">
                            ৳
                          </span>
                          {productdata.discount_price}
                        </span>
                      </>
                    ) : (
                      <span className="pl-2.5">
                        <span className="text-xs sm:text-sm lg:text-base 2xl:text-lg font-serif">
                          ৳
                        </span>
                        {productdata.price}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div className="mt-2 mx-1">
                        <ProductDetailsViewButton productdata= {productdata} setSelectedProduct={setSelectedProduct}/>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}