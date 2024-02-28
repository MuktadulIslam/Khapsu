// import ProductGrid from "../components/productGrid";
// import Image from "next/image";
// import PopUp from "../components/popup";
// import ProductGrid from "@/components/products/ProductGrid";
// // import ProductDetails from "@/components/products/ProductGrid";
// import ProductDetails from "../components/products/ProductDetails";
import Header from "./Header";
import MainPage from "./MainPage";
import Titlebar from "./Titlebar";

export default function Home() {
  return (
    <>
      <div>
        {/* <div className="w-full h-20 bg-black"></div>
        <ProductDetailsContext.Provider>
        <ProductGrid />
        </ProductDetailsContext.Provider> */}
        {/* <ProductDetails/> */}
        <Header/>
        <MainPage/>
        {/* <Titlebar/> */}
      </div>
    </>
  );
}
