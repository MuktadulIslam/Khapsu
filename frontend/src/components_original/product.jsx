import Image from "next/image";
import SearchSVG from "./searchSVG";
import LoveSVG from "./loveSVG";

export default function Product({ quickview, image_url }) {
  return (
    <>
      <div className="w-full aspect-[2/3] p-1 bg-slate-50 rounded-xl hover:scale-[1.04] transition-all md:[&_div.items-view-favourite]:hover:flex shadow-item-shadow hover:shadow-item-hover-shadow">
        <div className="relative">
          <div className="absolute top-3 left-[-8px] text-white bg-black z-10 px-2 md:px-4 rounded-2xl text-xs md:text-sm rotate-[-45deg]">
            -25%
          </div>

          {/* Product Details + Add to favourit on hover */}
          {/* <div className="items-view-favourite hidden absolute top-6 right-2 z-10 bg-white h-24 w-1/6 items-center justify-center rounded-lg">
            <div className="grid place-items-center gap-6">
              <button className="w-full aspect-square" onClick={quickview}>
                <div className="w-5 h-5 object-fill">
                  <SearchSVG />
                </div>
              </button>
              <button className="w-full aspect-square">
                <div className="w-6 h-6 object-fill">
                  <LoveSVG />
                </div>
              </button>
            </div>
          </div> */}

          {/* Product Add to favourit */}
          <div className="w-1/6 aspect-square  absolute bg-white rounded-full bg-opacity-0 top-1 right-1 grid place-items-center">
            <button className="w-6 md:w-7 aspect-square">
              <LoveSVG />
            </button>
          </div>

          <div>
            {/* For Out of Stock */}
            {/* <div className="absolute w-full aspect-[3/1] bottom-16 bg-slate-100 bg-opacity-70 grid place-items-center">
              <p className="text-lg lg:text-xl font-outofstock">
                <b>OUT OF STOCK</b>
              </p>
            </div> */}

            <Image
              sizes="(min-width: 800px) 50vw, 30vw"
              src={image_url}
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
            <p className="text-sm lg:text-lg font-medium mt-1">
              Summer Special Play Quality Half Sleeve Jersey by NOGOR
            </p>
            <p className="font-medium text-xs lg:text-sm text-gray-500 mt-[-4px]">
              Jersey
            </p>
            <p className="text-sm lg:text-lg 2xl:text-xl font-semibold align-baseline mt-1">
              <span className="text-gray-400">
                <del>
                  <span className="text-xs sm:text-sm lg:text-base 2xl:text-lg font-serif">
                    ৳
                  </span>
                  600
                </del>
              </span>
              <span className="pl-2.5">
                <span className="text-xs sm:text-sm lg:text-base 2xl:text-lg font-serif">
                  ৳
                </span>
                500
              </span>
            </p>
          </div>
        </div>

        <div className="mt-2 mx-1">
          <button
            className="w-full h-8 md:h-10 relative bg-gray-200 rounded-lg hover:scale-[1.06]"
            onClick={quickview}
          >
            <div className="w-full h-7 md:h-8 relative">
              <Image
                src="/shopping-cart.svg"
                fill
                className="object-contain"
                alt="Order Now"
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
