"use client"
import React, { createContext, useRef, useState } from 'react';
// import ProductGrid from "@/components/products/ProductGrid";
import ProductGrid from "../components/products/ProductGrid";
import data from "../../data/productdata.json";

export default function MainPage() {
  const productsdata = data.products;

  const newarrivalProducts = productsdata.slice(0, 18);
  const trandingProducts = productsdata.slice(0, 18);
  const mostsellingProducts = productsdata.slice(0, 18);

  const ProductDetailsContext = createContext();
  const [selectedProduct,setSelectedProduct] = useState();

  return (
    <>
      <ProductDetailsContext.Provider value={{ selectedProduct, setSelectedProduct }}>

      <div className="w-full h-20 bg-gray-400 text-2xl text-white text-center"> New Arrival</div>
      <ProductGrid productsdata={newarrivalProducts}/>
      <div className="my-10"></div>

      <div className="w-full h-20 bg-gray-400 text-2xl text-white text-center">Tranding Products</div>
      <ProductGrid productsdata={trandingProducts}/>
      <div className="my-10"></div>

      <div className="w-full h-20 bg-gray-400 text-2xl text-white text-center"> Most Selling</div>
      <ProductGrid productsdata={mostsellingProducts}/>
      <div className="my-10"></div>
    </ProductDetailsContext.Provider>
    </>
  );
}
