"use client"
import Link from "next/link";
import { Black_Ops_One } from "next/font/google";
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";

const blackOpsOne = Black_Ops_One({
    weight: ["400"],
    style: ["normal"],
    preload: false,
});

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


export const openCart = () => {
    const box = document.getElementById("cartbox");
    boxContainer.classList.add("w-screen");
    box.classList.remove("w-0");
};
export const quickview = () => {
    const box = document.getElementById("box");
    const boxContainer = document.getElementById("box-container");

    boxContainer.classList.remove("invisible");
    box.classList.add(
        "opacity-100",
        "2xl:w-[1000px]",
        "w-11/12",
        "2md:w-10/12",
        "lg:w-9/12",
        "max-sm:max-h-[750px]",
        "max-sm:max-w-[400px]"
    );
    box.classList.remove("opacity-0", "w-0");
};


const navigation = {
    categories: [
        {
            id: 'women',
            name: "Women's",
            name2nd: " Fashion",
            featured: [
                {
                    name: 'New Arrivals',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: './newarrival.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: '/sales.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'New Arrivals',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: '/tranding.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: '/mostselling.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ]
        },
        {
            id: 'men',
            name: "Men's",
            name2nd: " Fashion",
            featured: [
                {
                    name: 'New Arrivals',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: '/mostselling.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: '/mostselling.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ]
        },
        {
            id: 'wall-art',
            name: 'Wall Art',
            name2nd: "",
            featured: [
                {
                    name: 'New Arrivals',
                    short_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    href: '#',
                    imageSrc: '/tranding.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: '/sales.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ]
        },
    ]
}


export default function Navbar() {
    const openMobileSearchMenu = () => {
        const navbarItems = document.getElementById("navbar-items");
        const mobileSearchMenu = document.getElementById("mobile-search-menu");
        navbarItems.classList.remove('w-full', 'px-1', 'sm:px-3')
        navbarItems.classList.add('w-0')
        mobileSearchMenu.classList.remove('w-0')
        mobileSearchMenu.classList.add('w-full', 'px-1', 'sm:px-3', '*:h-10')
    };

    const closeMobileSearchMenu = () => {
        const navbarItems = document.getElementById("navbar-items");
        const mobileSearchMenu = document.getElementById("mobile-search-menu");
        navbarItems.classList.remove('w-0')
        navbarItems.classList.add('w-full', 'px-1', 'sm:px-3')
        mobileSearchMenu.classList.remove('w-full', 'px-1', 'sm:px-3', '*:h-10')
        mobileSearchMenu.classList.add('w-0')
    };

    const openCart = () => {
        const cart = document.getElementById("cart");
        cart.classList.remove('w-0')
        cart.classList.add('w-11/12', 'sm:w-4/6', 'md:w-3/6', '2md:w-2/5', 'xl:w-2/6')
        const cartbox = document.getElementById("cartbox");
        cartbox.classList.remove("invisible");
    };

    const closeCart = () => {
        const cart = document.getElementById("cart");
        cart.classList.add('w-0')
        cart.classList.remove('w-11/12', 'sm:w-4/6', 'md:w-3/6', '2md:w-2/5', 'xl:w-2/6')
        const cartbox = document.getElementById("cartbox");
        cartbox.classList.add("invisible");
    };
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            {/* Cart */}
            <div id="cartbox" onClick={closeCart} className="fixed w-screen h-screen overflow-hidden bg-gray-200 bg-opacity-60 left-0 right-0 top-0 bottom-0 z-50 invisible">
                <div onClick={(e) => e.stopPropagation()} id="cart" className="absolute top-0 right-0 bottom-0 w-0 max-w-[530px] h-full px-2 bg-white transition-all duration-700 ease-in-out">
                    <div className="flex h-dvh w-full flex-col justify-center items-center">
                        <div className="h-16 2md:h-20 w-full flex-none">
                            <div className="h-12 2md:h-16 text-black flex items-center justify-between px-2">
                                <h1 className="text-xl 2md:text-2xl font-semibold">Shopping cart</h1>
                                <button onClick={closeCart} className="w-7 h-7 2md:w-8 2md:h-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-full h-0.5 mr-2 bg-gray-500"></div>
                        </div>
                        <div className="w-full grow overflow-y-auto">
                            <div className="flex flex-col overflow-y-auto gap-4 lg:gap-5">
                                <div className="h-36 w-full bg-slate-500">
                                    <div className="flex gap-3 h-36 w-full bg-white overflow-hidden">
                                        <div className="h-full aspect-[3/4] flex-none">
                                            <Image
                                                src={"/resources/products/1.jpg"}
                                                alt="cart product image 1"
                                                width={500}
                                                height={500}
                                                className="inset-0 relative w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="h-full grow whitespace-nowrap relative">
                                            <div className="overflow-hidden">
                                                <h1 className="text-sm font-semibold lg:text-sm whitespace-normal">Summer Special Play Quality Half Sleeve Jersey by NOGOR</h1>
                                                <h2 className="text-xs lg:text-sm text-gray-700 font-medium">
                                                    Category: <span>Classic Hoodie</span>
                                                </h2>
                                                <p className="text-xs lg:text-sm text-stone-700 font-medium">
                                                    <span>Size: M</span>
                                                    <span className="ml-8">Color: Black</span>
                                                </p>
                                            </div>
                                            <div className="h-9 w-full mt-2 absolute bottom-0 pb-2 bg-white">
                                                <div className="grid grid-cols-7 gap-2 h-7 w-full">
                                                    <div className="col-span-2 w-full h-full flex items-center justify-center text-sm font-semibold text-gray-700"> <span className="font-serif text-xs ">৳</span>480</div>
                                                    <div className="col-span-3 w-full h-full grid grid-cols-3 rounded-lg border border-black">
                                                        <div className="w-full h-full flex justify-center items-center text-center rounded-l-lg text-lg">+</div>
                                                        <div className="w-full h-full flex justify-center items-center border-x border-solid border-black">2</div>
                                                        <div className="w-full h-full flex justify-center items-center rounded-r-lg text-xl">-</div>
                                                    </div>
                                                    <div className="col-span-2 w-full h-full flex items-center justify-center text-base font-semibold text-gray-900"> <span className="font-serif text-sm">৳</span>960
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="h-36 w-full bg-slate-500">
                                    <div className="flex gap-3 h-36 w-full bg-white overflow-hidden">
                                        <div className="h-full aspect-[3/4] flex-none">
                                            <Image
                                                src={"/resources/products/1.jpg"}
                                                alt="cart product image 1"
                                                width={500}
                                                height={500}
                                                className="inset-0 relative w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="h-full grow whitespace-nowrap relative">
                                            <div className="overflow-hidden">
                                                <h1 className="text-sm font-semibold lg:text-sm whitespace-normal">Summer Special Play Quality Half Sleeve Jersey by NOGOR</h1>
                                                <h2 className="text-xs lg:text-sm text-gray-700 font-medium">
                                                    Category: <span>Classic Hoodie</span>
                                                </h2>
                                                <p className="text-xs lg:text-sm text-stone-700 font-medium">
                                                    <span>Size: M</span>
                                                    <span className="ml-8">Color: Black</span>
                                                </p>
                                            </div>
                                            <div className="h-9 w-full mt-2 absolute bottom-0 pb-2 bg-white">
                                                <div className="grid grid-cols-7 gap-2 h-7 w-full">
                                                    <div className="col-span-2 w-full h-full flex items-center justify-center text-sm font-semibold text-gray-700"> <span className="font-serif text-xs ">৳</span>480</div>
                                                    <div className="col-span-3 w-full h-full grid grid-cols-3 rounded-lg border border-black">
                                                        <div className="w-full h-full flex justify-center items-center text-center rounded-l-lg text-lg">+</div>
                                                        <div className="w-full h-full flex justify-center items-center border-x border-solid border-black">2</div>
                                                        <div className="w-full h-full flex justify-center items-center rounded-r-lg text-xl">-</div>
                                                    </div>
                                                    <div className="col-span-2 w-full h-full flex items-center justify-center text-base font-semibold text-gray-900"> <span className="font-serif text-sm">৳</span>960
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="h-36 w-full bg-slate-500">
                                    <div className="flex gap-3 h-36 w-full bg-white overflow-hidden">
                                        <div className="h-full aspect-[3/4] flex-none">
                                            <Image
                                                src={"/resources/products/1.jpg"}
                                                alt="cart product image 1"
                                                width={500}
                                                height={500}
                                                className="inset-0 relative w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="h-full grow whitespace-nowrap relative">
                                            <div className="overflow-hidden">
                                                <h1 className="text-sm font-semibold lg:text-sm whitespace-normal">Summer Special Play Quality Half Sleeve Jersey by NOGOR</h1>
                                                <h2 className="text-xs lg:text-sm text-gray-700 font-medium">
                                                    Category: <span>Classic Hoodie</span>
                                                </h2>
                                                <p className="text-xs lg:text-sm text-stone-700 font-medium">
                                                    <span>Size: M</span>
                                                    <span className="ml-8">Color: Black</span>
                                                </p>
                                            </div>
                                            <div className="h-9 w-full mt-2 absolute bottom-0 pb-2 bg-white">
                                                <div className="grid grid-cols-7 gap-2 h-7 w-full">
                                                    <div className="col-span-2 w-full h-full flex items-center justify-center text-sm font-semibold text-gray-700"> <span className="font-serif text-xs ">৳</span>480</div>
                                                    <div className="col-span-3 w-full h-full grid grid-cols-3 rounded-lg border border-black">
                                                        <div className="w-full h-full flex justify-center items-center text-center rounded-l-lg text-lg">+</div>
                                                        <div className="w-full h-full flex justify-center items-center border-x border-solid border-black">2</div>
                                                        <div className="w-full h-full flex justify-center items-center rounded-r-lg text-xl">-</div>
                                                    </div>
                                                    <div className="col-span-2 w-full h-full flex items-center justify-center text-base font-semibold text-gray-900"> <span className="font-serif text-sm">৳</span>960
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-full h-28 flex-none px-4 lg:px-8">
                            <div className="flex justify-between items-center text-lg lg:text-xl font-semibold my-3">
                                <p>Subtotal:</p>
                                <p><span className="text-lg lg:text-xl">৳</span>14,200<span>.00</span></p>
                            </div>
                            <button className="h-12 w-full bg-black rounded-lg text-white">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Navbar */}
            <div className="bg-black text-white h-[3.5rem] md:h-16 lg:h-20 flex z-40">
                <div id="navbar-items" className="px-1 sm:px-3 w-full h-full flex justify-between max-sm:justify-start items-center transition-all duration-500 ease-in-out">
                    <div className="md:hidden w-9 h-9 mr-2 sm:mr-4 aspect-square">
                        <button className="w-full h-full" onClick={() => setOpenMenu(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>

                        </button>
                    </div>
                    <div className="flex justify-start items-center h-full w-full  max-md:w-auto">
                        <div className={`${blackOpsOne.className} text-4xl max-sm:text-5xl 2md:text-6xl lg:text-7xl font-extrabold mr-3 2md:mr-7`}>
                            <Link href="./">Khapsu</Link>
                        </div>
                        <div className="2md:pr-6 h-full max-md:hidden ">
                            <ul className="flex gap-5 md:gap-4 lg:gap-7 h-full">
                                {navigation.categories.map((category, index) => (
                                    <li key={index} className="h-full flex flex-col justify-center items-center overflow-hidden group font-medium text-base lg:text-lg">
                                        <div className="2md:whitespace-nowrap overflow-hidden">
                                            {category.name} <span className="max-2md:hidden">{category.name2nd}</span>
                                        </div>
                                        <div className="absolute group-hover:w-1/2 group-hover:p-2 group-hover:md:top-[68px] group-hover:2md:top-[85px] p-0 top-8 2md:top-10 w-0 max-w-[700px] bg-black grid grid-cols-2 gap-2 transition-all duration-700 ease-in-out z-40">
                                            <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                            <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                            <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                            <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-end items-center h-full w-full max-md:grow max-sm:hidden">
                        <div className="relative bg-transparent mx-2 2md:mx-0 lg:mx-6 h-8 xl:h-9 w-full text-white" data-te-input-wrapper-init>
                            <input
                                type="search"
                                className="peer text-base 2md:text-lg px-5 font-normal block h-8 xl:h-9 w-full rounded-full border-solid border bg-transparent leading-[2.2] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non border-blue-500 shadow-search-hover-shadow placeholder-shown:border-white placeholder-shown:shadow-none focus:border-blue-500 focus:shadow-search-hover-shadow"
                                placeholder=""
                                id="exampleSearch2"
                            />
                            <label
                                htmlFor="exampleSearch2"
                                className="pointer-events-none inline-block absolute left-6 top-0 mb-0 origin-[0_0] truncate pt-[0.1rem] xl:pt-[0.3rem] text-base 2md:text-lg peer-focus:font-medium transition-all duration-200 ease-out peer-focus:-translate-y-[1.2rem] peer-focus:scale-[0.8] peer-focus:text-gray-300 peer-focus:bg-black peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-[0rem] peer-placeholder-shown:scale-[1] peer-placeholder-shown:text-gray-400 -translate-y-[1.2rem] scale-[0.8] text-gray-300 bg-black"
                            >
                                <p className="">Search</p>
                            </label>
                        </div>
                        <div className="w-6 h-6 aspect-square 2md:w-7 2md:h-7 2xl:w-8 2xl:h-8 max-md:hidden m-2">
                            <Link href="/login">
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-full h-full text-white hover:text-gray-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>
                            </Link>
                        </div>
                        {/* <div className="w-7 h-7 aspect-square lg:w-8 lg:h-8 xl:w-9 xl:h-9 max-md:hidden m-2">
                            <Image className="rounded-full" src={'/profile.jpg'} width={50} height={50} />
                        </div> */}
                        <div className="w-5 h-5 aspect-square 2md:w-6 2md:h-6 2xl:w-7 2xl:h-7 max-md:hidden m-2">
                            <button onClick={openCart} className="group flex items-center">
                                <svg className="h-full w-full flex-shrink-0 text-white hover:text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <span className="absolute text-sm font-semibold rounded-full bg-gray-200 -translate-y-3 translate-x-4 w-5 h-5 text-black text-center flex items-center justify-center">9</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end items-center w-full sm:hidden">
                        <div className="absulate right-0 w-7 h-7 mr-3">
                            <button className="w-full h-full" onClick={openMobileSearchMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>

                <div id="mobile-search-menu" className="w-0 group flex-none h-full bg-black flex justify-between items-center sm:hidden transition-all duration-500 ease-in-out overflow-hidden">
                    <div className="flex justify-center items-center h-full aspect-square flex-none overflow-hidden">
                        <button className="w-full h-full flex justify-center items-center" onClick={closeMobileSearchMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>

                        </button>
                    </div>
                    <div className="flex justify-center items-center w-full grow h-10">
                        <input
                            type="search"
                            className="group-[.w-0]:px-0 px-4 text-base font-normal block h-9 w-full rounded-full border-solid group-[.w-full]:border bg-transparent leading-[2.2] outline-none border-blue-500 shadow-search-hover-shadow placeholder-shown:border-white placeholder-shown:shadow-none focus:border-blue-500 focus:shadow-search-hover-shadow"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>


            {/* Mobile Bottom Menu */}
            <div className="fixed bottom-0 w-full h-[3.5rem] bg-black z-40 grid grid-cols-4 md:hidden gap-0 text-white">
                <button className="flex flex-col justify-center items-center w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                    <p className="text-xs">Home</p>
                </button>
                <button className="flex flex-col justify-center items-center w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs">Categories</p>
                </button>
                <button className="flex flex-col justify-center items-center w-full h-full" onClick={openCart}>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                        <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 rounded-full translate-x-5 flex items-center justify-center text-sm">9</span>
                    </div>
                    <p className="text-xs">Cart</p>
                </button>
                <Link href="./login" className="flex flex-col justify-center items-center w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>
                    {/* <Image
                        src={"/profile.jpg"}
                        alt="profile"
                        width={500}
                        height={500}
                        className="inset-0 relative h-7 w-7 object-cover rounded-full"
                    /> */}
                    <p className="text-xs">Account</p>
                </Link>
            </div>

            {/* Mobile menu */}
            <Transition.Root show={openMenu} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpenMenu}>
                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pt-3">
                                    <button
                                        type="button"
                                        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category, index) => (
                                                <Tab
                                                    key={index}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                                            'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium '
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category, index) => (
                                            <Tab.Panel key={index} className="space-y-10 px-4 pb-8 pt-10">
                                                <div className="grid grid-cols-2 gap-x-4">
                                                    {category.featured.map((item, index) => (
                                                        <a href={item.href} key={index} className="group relative text-sm pb-6">
                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 shadow-item-shadow">
                                                                <img src={item.imageSrc} alt={item.imageAlt} className="object-center aspect-square object-cover" />
                                                            </div>
                                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                            <div className='mt-2 block font-medium text-gray-900'>
                                                                <h1 className="text-base font-semibold">
                                                                    {item.name}
                                                                </h1>
                                                                <p className="text-sm">
                                                                    {item.short_description}
                                                                </p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
