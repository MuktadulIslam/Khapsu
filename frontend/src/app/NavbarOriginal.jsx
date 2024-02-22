"use client"
import { Black_Ops_One } from "next/font/google";
import { useState } from "react";
import React from "react";
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
            {/* <div className="flex justify-between items-center px-7 w-full h-20 bg-black text-white">
        <div className="relative flex min-w-[700px]">
          <div className={`${blackOpsOne.className} text-7xl w-48 font-extrabold mr-32`}>
            Khapsu
          </div>
          <ul className="flex justify-between items-center gap-5 bg-black">
            <li className="text-lg text-white">Women's Fashion</li>
            <li className="text-lg text-white">Men's Fashion</li>
            <li className="text-lg text-white">Wall Art</li>
          </ul>
        </div>
        <div className="flex items-center justify-end w-full pl-20">
        <div
            className="relative bg-transparent grow"
            data-te-input-wrapper-init
          >
            <input
              type="search"
              className="peer text-xl px-5 font-normal block h-10 w-full rounded-full border-solid border bg-transparent leading-[2.2] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non border-blue-500 shadow-search-hover-shadow placeholder-shown:border-white placeholder-shown:shadow-none focus:border-blue-500 focus:shadow-search-hover-shadow"
              placeholder=""
              id="exampleSearch2"
            />
            <label
              htmlFor="exampleSearch2"
              className="pointer-events-none inline-block absolute left-6 top-0 mb-0 origin-[0_0] truncate pt-[0.4rem] text-lg peer-focus:font-medium transition-all duration-200 ease-out peer-focus:-translate-y-[1.2rem] peer-focus:scale-[0.8] peer-focus:text-white peer-focus:bg-black peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-[0rem] peer-placeholder-shown:scale-[1] peer-placeholder-shown:text-gray-400 -translate-y-[1.2rem] scale-[0.8] text-white bg-black"
            >
              <p className="">Search</p>
            </label>
          </div>
          <div className="flex justify-end items-center gap-6 w-36 flex-none">
            <div className="border hover:bg-green-400 px-4 py-1.5 rounded-lg font-serif text-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-user-plus"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
              <h1 className="pl-2">Sign In</h1>
            </div>
          </div>
        </div>
      </div> */}
            {/* <div className="bg-gray-200 h-12 md:h-16 2md:h-20 flex">
        <div id="navbar-items" className="w-full h-full flex justify-between max-sm:justify-start items-center px-1 sm:px-3 transition-all duration-500 ease-in-out">
          <div className="md:hidden bg-gray-400 w-10 h-10 mr-2 sm:mr-4 aspect-square">
            <button className="w-full h-full">M</button>
          </div>
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
      </div> */}

            <div className="bg-gray-200 h-12 md:h-16 2md:h-20 flex">
                <div id="navbar-items" className="w-full h-full flex justify-between max-sm:justify-start items-center px-1 sm:px-3 transition-all duration-500 ease-in-out">
                    <div className="md:hidden bg-gray-400 w-10 h-10 mr-2 sm:mr-4 aspect-square">
                        <button className="w-full h-full">M</button>
                    </div>
                    <div className="flex justify-start items-center bg-yellow-400 h-full w-full gap-5 2md:gap-8 lg:gap-12 max-md:w-auto">
                        <div className="w-40 max-md:w-48 2md:w-48 lg:w-64 bg-slate-600">
                            Khapsu
                        </div>
                        <div className="bg-green-400 2md:pr-6 max-md:hidden h-full">
                            <ul className="flex gap-2.5 2md:gap-6 h-full">
                                <li className="bg-red-100 h-full flex flex-col justify-center items-center overflow-hidden group">
                                    <div className="whitespace-nowrap overflow-hidden">
                                        Womens Fashion
                                    </div>
                                    <div className="fixed group-hover:w-1/2 group-hover:p-2 group-hover:md:top-[68px] group-hover:2md:top-[85px] p-0 top-8 2md:top-10 w-0 max-w-[700px] bg-black grid grid-cols-2 gap-2 transition-all duration-700 ease-in-out">
                                        <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                    </div>
                                </li>
                                <li className="bg-red-100 h-full flex flex-col justify-center items-center overflow-hidden group">
                                    <div className="whitespace-nowrap overflow-hidden">
                                        Mens Fashion
                                    </div>
                                    <div className="fixed group-hover:w-1/2 group-hover:p-2 group-hover:md:top-[68px] group-hover:2md:top-[85px] p-0 top-8 2md:top-10 w-0 max-w-[700px] bg-black grid grid-cols-2 gap-2 transition-all duration-700 ease-in-out">
                                        <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                    </div>
                                </li>
                                <li className="bg-red-100 h-full flex flex-col justify-center items-center overflow-hidden group">
                                    <div className="whitespace-nowrap overflow-hidden">
                                        Wall Art
                                    </div>
                                    <div className="fixed group-hover:w-1/2 group-hover:p-2 group-hover:md:top-[68px] group-hover:2md:top-[85px] p-0 top-8 2md:top-10 w-0 max-w-[700px] bg-black grid grid-cols-2 gap-2 transition-all duration-700 ease-in-out">
                                        <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                    </div>
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

            {/* <div class="parent border-dashed border-gray-400 p-2 group h-[700px] w-[700px]">
                <div class="child border-solid border-brown-400 m-4 p-2 transition-all duration-500 group-hover:bg-green-200 group-hover:transform group-hover:scale-150 group-hover:rotate-3 group-hover:border-5 group-hover:border-inset w-32 h-32">

                </div>
            </div> */}


            {/* <div className="w-[800px] h-[800px] bg-black group">
                <div className="w-[400px] h-[400px] bg-green-600 group-hover:bg-red-600"></div>

            </div>
            <div className="w-[800px] h-[800px] bg-gray-400 group">
                <div className="w-[400px] h-[400px] bg-red-600 group-hover:bg-green-600"></div>

            </div> */}

            {/* <div class="flex flex-col items-center h-screen">
                <div class="w-20 h-20 bg-blue-500"></div>
                <div class="w-96 h-40 bg-red-500"></div>
            </div> */}

        </>
    );
}
