"use client"
import { Black_Ops_One } from "next/font/google";
import { useState } from "react";
const blackOpsOne = Black_Ops_One({
  weight: ["400"],
  style: ["normal"],
  preload: false,
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const openMobileSearchMenu = () => {
    const navbarItems = document.getElementById("navbar-items");
    const mobileSearchMenu = document.getElementById("mobile-search-menu");
    navbarItems.classList.add('-ml-[100vw]')
    mobileSearchMenu.classList.remove('-mr-[100vw]')
  };

  const closeMobileSearchMenu = () => {
    const navbarItems = document.getElementById("navbar-items");
    const mobileSearchMenu = document.getElementById("mobile-search-menu");
    navbarItems.classList.remove('-ml-[100vw]')
    mobileSearchMenu.classList.add('-mr-[100vw]')
  };

  return (
    <>
      <div className="bg-gray-200 h-12 md:h-16 2md:h-20 flex">
        {/* <div className="w-full h-full flex justify-between max-sm:justify-start items-center">
          <div className="md:hidden bg-black w-10 h-10 mr-2 sm:mr-4 aspect-square"></div>
          <div className="flex justify-start items-center bg-yellow-400 h-full w-full gap-5 2md:gap-8 lg:gap-12 max-md:w-auto">
            <div className="w-40 max-md:w-48 2md:w-48 lg:w-64 bg-slate-600">
              Khapsu
            </div>
            <div className="bg-green-400 2md:pr-6 max-md:hidden">
              <ul className="flex gap-2.5 2md:gap-4">
                <li className="bg-red-100 whitespace-nowrap overflow-hidden">
                  Women's Fashion
                </li>
                <li className="bg-red-100 whitespace-nowrap overflow-hidden">
                  Men's Fashion
                </li>
                <li className="bg-red-100 whitespace-nowrap overflow-hidden">
                  Wall Art
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end items-center bg-red-600 h-full w-full max-md:grow max-sm:hidden">
            <div className="bg-green-400 mx-4 2md:mx-6 lg:mx-8 h-10 w-full"></div>
            <div className="w-32 bg-yellow-400 aspect-[7/4] max-md:hidden"></div>
            <div className="w-8 h-8 2md:w-9 2md:h-9 bg-black aspect-square max-md:hidden m-2"></div>
          </div>
          <div className="flex justify-end items-center w-full sm:hidden">
            <div className="absulate right-0 w-8 h-8 bg-black"></div>
          </div>
        </div> */}

        <div id="navbar-items" className="w-full h-full flex justify-between max-sm:justify-start items-center px-1 sm:px-3 transition-all duration-500 ease-in-out">
          <div className="md:hidden bg-black w-10 h-10 mr-2 sm:mr-4 aspect-square"></div>
          <div className="flex justify-start items-center bg-yellow-400 h-full w-full gap-5 2md:gap-8 lg:gap-12 max-md:w-auto">
            <div className="w-40 max-md:w-48 2md:w-48 lg:w-64 bg-slate-600">
              Khapsu
            </div>
            <div className="bg-green-400 2md:pr-6 max-md:hidden">
              <ul className="flex gap-2.5 2md:gap-4">
                <li className="bg-red-100 whitespace-nowrap overflow-hidden">
                  Women's Fashion
                </li>
                <li className="bg-red-100 whitespace-nowrap overflow-hidden">
                  Men's Fashion
                </li>
                <li className="bg-red-100 whitespace-nowrap overflow-hidden">
                  Wall Art
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end items-center bg-red-600 h-full w-full max-md:grow max-sm:hidden">
            <div className="bg-green-400 mx-4 2md:mx-6 lg:mx-8 h-10 w-full"></div>
            <div className="w-32 bg-yellow-400 aspect-[7/4] max-md:hidden"></div>
            <div className="w-8 h-8 2md:w-9 2md:h-9 bg-black aspect-square max-md:hidden m-2"></div>
          </div>
          <div className="flex justify-end items-center w-full sm:hidden">
            <div className="absulate right-0 w-8 h-8 bg-gray-300">
            <button className="w-full h-full" onClick={openMobileSearchMenu}>M</button>
            </div>
          </div>
        </div>

        <div id="mobile-search-menu" className="-mr-[100vw] flex-none w-full h-full bg-blue-600 flex justify-between items-center gap-3 px-1 sm:px-3 sm:hidden transition-all duration-500 ease-in-out">
          <div className="flex justify-center items-center max-w-10 h-10 aspect-square bg-slate-400 flex-none">
            <button className="w-full h-full" onClick={closeMobileSearchMenu}>M</button>
          </div>
          <div className="flex justify-center items-center bg-black w-full grow h-10">
          </div>
        </div>
      </div>
    </>
  );
}
