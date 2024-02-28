"use client"
import React, { createContext, useRef, useState } from 'react';
// import ProductGrid from "@/components/products/ProductGrid";
import ProductGrid from "../components/products/ProductGrid";
import data from "../../data/productdata.json";
import Titlebar from './Titlebar';

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

      <Titlebar link={""} title={"Optimized Experience"} discription={"Setup your site and ready to witness your store’s conversion boosted by 120% a day."}/>
      <ProductGrid productsdata={newarrivalProducts}/>
      <div className="my-10"></div>

      <Titlebar link={""} title={"Tranding Products"} discription={"Setup your site and ready to witness your store’s conversion boosted by 120% a day."}/>

      <ProductGrid productsdata={trandingProducts}/>
      <div className="my-10"></div>

      <Titlebar link={""} title={"Most Selling"} discription={"Setup your site and ready to witness your store’s conversion boosted by 120% a day."}/>
      <ProductGrid productsdata={mostsellingProducts}/>
      <div className="my-10"></div>
    </ProductDetailsContext.Provider>
    </>
  );
}
