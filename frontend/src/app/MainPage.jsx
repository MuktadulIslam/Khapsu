"use client"
import { createContext, useRef, useState } from 'react';
import ProductGrid from "@/components/products/ProductGrid";
import data from "../../data/productdata.json";
import ProductDetails from "@/components/products/ProductDetails";
import InitialProductData from '@/components/products/InitialProductData';

export default function MainPage() {
  const productsdata = data.products;

  const newarrivalProducts = productsdata.slice(0, 18);
  const trandingProducts = productsdata.slice(0, 18);
  const mostsellingProducts = productsdata.slice(0, 18);

  const ProductDetailsContext = createContext();
  const [selectedProduct,setSelectedProduct] = useState(InitialProductData);
//   const selectedProduct = useRef(InitialProductData)

  return (
    <>
      <ProductDetailsContext.Provider value={{ selectedProduct, setSelectedProduct }}>

      <div className="w-full h-20 bg-black text-2xl text-white text-center"> New Arrival</div>
      <ProductGrid productsdata={newarrivalProducts}/>
      <div className="m-10"></div>

      <div className="w-full h-20 bg-black text-2xl text-white text-center">Tranding Products</div>
      <ProductGrid productsdata={trandingProducts}/>
      <div className="m-10"></div>

      <div className="w-full h-20 bg-black text-2xl text-white text-center"> Most Selling</div>
      <ProductGrid productsdata={mostsellingProducts}/>
      <div className="m-10"></div>
    </ProductDetailsContext.Provider>

      {/* <ProductDetailsContext.Provider value={{ selectedProduct}}>
        <ProductDetails productdata2={selectedProduct} />

        <div className="w-full h-20 bg-black text-2xl text-white text-center"> New Arrival</div>
        <ProductGrid productsdata={newarrivalProducts} setSelectedProduct={selectedProduct} />
        <div className="m-10"></div>

        <div className="w-full h-20 bg-black text-2xl text-white text-center">Tranding Products</div>
        <ProductGrid productsdata={trandingProducts} setSelectedProduct={selectedProduct} />
        <div className="m-10"></div>

        <div className="w-full h-20 bg-black text-2xl text-white text-center"> Most Selling</div>
        <ProductGrid productsdata={mostsellingProducts} setSelectedProduct={selectedProduct} />
        <div className="m-10"></div>
      </ProductDetailsContext.Provider> */}
    </>
  );
}
