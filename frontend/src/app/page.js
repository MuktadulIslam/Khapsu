import ProductGrid from "../components/productGrid";
import Image from "next/image";
import PopUp from "../components/popup";
// import ProductDetails from "@/components/products/ProductGrid";
import ProductDetails from "../components/products/ProductDetails";
export default function Home() {
  return (
    <>
      <div className="max-w-screen-maxW m-auto box-border bg-white">
        <div className="w-full h-20 bg-black"></div>
        {/* <ProductGrid /> */}
        <ProductDetails/>
      </div>
    </>
  );
}
