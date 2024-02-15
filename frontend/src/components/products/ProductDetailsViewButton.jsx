import { quickview } from "./ProductDetails"
import Image from "next/image";

export default function ProductDetailsViewButton({productdata, setSelectedProduct}) {
    return(
        <button
        className="w-full h-8 md:h-10 relative bg-gray-200 rounded-lg hover:scale-[1.06]"
        onClick={() => {
          quickview();
          setSelectedProduct(productdata)
        }}
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
    )
}