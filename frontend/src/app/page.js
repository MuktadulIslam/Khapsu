import ProductGrid from "../components/productGrid";
import Image from "next/image";
import PopUp from "./popup";
export default function Home() {
  return (
    <>
      <div className="max-w-screen-maxW m-auto box-border bg-white">
        <div className="w-full h-20 bg-black"></div>
        <ProductGrid />
        <PopUp />
      </div>
    </>
  );
}
