"use client"
import { Black_Ops_One } from "next/font/google";
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const blackOpsOne = Black_Ops_One({
    weight: ["400"],
    style: ["normal"],
    preload: false,
});

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const navigation = {
    categories: [
        {
            id: 'women',
            name: "Women's",
            featured: [
                {
                    name: 'New Arrivals',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'New Arrivals',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ]
        },
        {
            id: 'men',
            name: "Men's",
            featured: [
                {
                    name: 'New Arrivals',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ]
        },
        {
            id: 'wall-art',
            name: 'Wall Art',
            featured: [
                {
                    name: 'New Arrivals',
                    short_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    short_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
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
        navbarItems.classList.remove('w-full', 'px-1','sm:px-3')
        navbarItems.classList.add('w-0')
        mobileSearchMenu.classList.remove('w-0')
        mobileSearchMenu.classList.add('w-full', 'px-1','sm:px-3','*:h-10')
    };

    const closeMobileSearchMenu = () => {
        const navbarItems = document.getElementById("navbar-items");
        const mobileSearchMenu = document.getElementById("mobile-search-menu");
        navbarItems.classList.remove('w-0')
        navbarItems.classList.add('w-full', 'px-1','sm:px-3')
        mobileSearchMenu.classList.remove('w-full', 'px-1','sm:px-3','*:h-10')
        mobileSearchMenu.classList.add('w-0')
    };
    const [openMenu, setOpenMenu] = useState(false)

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
                <div id="navbar-items" className="px-1 sm:px-3 w-full h-full flex justify-between max-sm:justify-start items-center transition-all duration-500 ease-in-out">
                    <div className="md:hidden bg-gray-600 w-10 h-10 mr-2 sm:mr-4 aspect-square">
                        <button className="w-full h-full" onClick={()=>setOpenMenu(true)}>m</button>
                    </div>
                    <div className="flex justify-start items-center bg-yellow-400 h-full w-full gap-5 2md:gap-8 lg:gap-12 max-md:w-auto">
                        <div className="w-40 max-md:w-48 2md:w-48 lg:w-64 bg-slate-600">
                            Khapsu
                        </div>
                        <div className="bg-green-400 2md:pr-6 h-full max-md:hidden">
                            <ul className="flex gap-2.5 2md:gap-6 h-full">
                                <li className="bg-red-100 h-full max-2md:w-16 flex flex-col justify-center items-center overflow-hidden group">
                                    <div className="2md:whitespace-nowrap overflow-hidden">
                                        Womens Fashion
                                    </div>
                                    <div className="fixed group-hover:w-1/2 group-hover:p-2 group-hover:md:top-[68px] group-hover:2md:top-[85px] p-0 top-8 2md:top-10 w-0 max-w-[700px] bg-black grid grid-cols-2 gap-2 transition-all duration-700 ease-in-out">
                                        <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                    </div>
                                </li>
                                <li className="bg-red-100 h-full max-2md:w-16 flex flex-col justify-center items-center overflow-hidden group">
                                    <div className="2md:whitespace-nowrap overflow-hidden">
                                        Mens Fashion
                                    </div>
                                    <div className="fixed group-hover:w-1/2 group-hover:p-2 group-hover:md:top-[68px] group-hover:2md:top-[85px] p-0 top-8 2md:top-10 w-0 max-w-[700px] bg-black grid grid-cols-2 gap-2 transition-all duration-700 ease-in-out">
                                        <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-300 w-full aspect-[5/2]"></div>
                                        <div className="bg-gray-700 w-full aspect-[5/2]"></div>
                                    </div>
                                </li>
                                <li className="bg-red-100 h-full max-2md:w-16 flex flex-col justify-center items-center overflow-hidden group">
                                    <div className="2md:whitespace-nowrap overflow-hidden">
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

                <div id="mobile-search-menu" className="w-0 flex-none h-full bg-blue-600 flex justify-between items-center gap-3 sm:hidden transition-all duration-500 ease-in-out">
                    <div className="flex justify-center items-center h-0 aspect-square bg-slate-400 flex-none overflow-hidden">
                        <button className="w-full h-full" onClick={closeMobileSearchMenu}>M</button>
                    </div>
                    <div className="flex justify-center items-center bg-black w-full grow h-10">
                    </div>
                </div>
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

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
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
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                                <div className="grid grid-cols-2 gap-x-4">
                                                    {category.featured.map((item) => (
                                                        <a href={item.href} className="group relative text-sm pb-6">
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
