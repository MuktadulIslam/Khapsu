import Image from "next/image";

export default function Header() {
    return (<>
        {/* <div className="max-md:hidden"> */}
        <div className="max-md:hidden w-full sm:h-7 lg:h-8 xl:h-9 2xl:h-10 bg-gray-100 text-stone-800 flex items-center justify-center mb-4 text-xs lg:text-sm xl:text-base font-medium overflow-hidden">
            <button className="h-full w-1/6 -skew-x-[20deg] border-r-2 border-solid border-gray-500 hover:scale-110 transition-all duration-200 ease-in hover:font-semibold">
                <div className="w-full h-full skew-x-[20deg] flex items-center justify-center">
                <div className="relative h-4/6 aspect-square mr-4">
                    <Image
                        src="/icons/icon1.png"
                        fill="cover"
                        alt=""
                        className="w-full h-full absolute object-cover"
                    />
                </div>
                <p>Jersey</p>
                </div>
            </button>

            <button className="h-full w-1/6 -skew-x-[20deg] border-r-2 border-solid border-gray-500 hover:scale-110 transition-all duration-200 ease-in hover:font-semibold">
                <div className="w-full h-full skew-x-[20deg] flex items-center justify-center">
                <div className="relative h-4/6 aspect-square mr-4">
                    <Image
                        src="/icons/icon2.png"
                        fill="cover"
                        alt=""
                        className="w-full h-full absolute object-cover"
                    />
                </div>
                <p>Tshirt</p>
                </div>
            </button>


            <button className="h-full w-1/6 -skew-x-[20deg] border-r-2 border-solid border-gray-500 hover:scale-110 transition-all duration-200 ease-in hover:font-semibold">
                <div className="w-full h-full skew-x-[20deg] flex items-center justify-center">
                <div className="relative h-4/6 aspect-square mr-4">
                    <Image
                        src="/icons/icon3.png"
                        fill="cover"
                        alt=""
                        className="w-full h-full absolute object-cover"
                    />
                </div>
                <p>Shorts</p>
                </div>
            </button>

            <button className="h-full w-1/6 -skew-x-[20deg] border-r-2 border-solid border-gray-500 hover:scale-110 transition-all duration-200 ease-in hover:font-semibold">
                <div className="w-full h-full skew-x-[20deg] flex items-center justify-center">
                <div className="relative h-4/6 aspect-square mr-4">
                    <Image
                        src="/icons/icon4.png"
                        fill="cover"
                        alt=""
                        className="w-full h-full absolute object-cover"
                    />
                </div>
                <p>Panjabi</p>
                </div>
            </button>


            <button className="h-full w-1/6 -skew-x-[20deg] border-r-2 border-solid border-gray-500 hover:scale-110 transition-all duration-200 ease-in hover:font-semibold">
                <div className="w-full h-full skew-x-[20deg] flex items-center justify-center">
                <div className="relative h-4/6 aspect-square mr-4">
                    <Image
                        src="/icons/icon5.png"
                        fill="cover"
                        alt=""
                        className="w-full h-full absolute object-cover"
                    />
                </div>
                <p>Joggers</p>
                </div>
            </button>

            <button className="h-full w-1/6 -skew-x-[20deg] border-r-2 border-solid border-gray-500 hover:scale-110 transition-all duration-200 ease-in hover:font-semibold">
                <div className="w-full h-full skew-x-[20deg] flex items-center justify-center">
                <div className="relative h-4/6 aspect-square mr-4">
                    <Image
                        src="/icons/icon6.png"
                        fill="cover"
                        alt=""
                        className="w-full h-full absolute object-cover"
                    />
                </div>
                <p>Socks</p>
                </div>
            </button>


            <button className="h-full w-1/6 -skew-x-[20deg] hover:scale-125 transition-all duration-200 ease-in hover:font-semibold">
                <div className="w-full h-full skew-x-[20deg] flex items-center justify-center">
                <div className="relative h-4/6 aspect-square mr-4">
                    <Image
                        src="/icons/icon3.png"
                        fill="cover"
                        alt=""
                        className="w-full h-full absolute object-cover"
                    />
                </div>
                <p>Hoodie</p>
                </div>
            </button>
        </div>
        <div className="w-full h-56 sm:h-72 2md:h-80 lg:h-[430px] xl:h-[500px] bg-black relative">
            <Image
                src="/main_banner.jpg"
                alt="Main Banner of the website"
                fill="cover"
                className="absolute w-full h-full object-cover"
            />
        </div>
        <div className="md:hidden flex items-center justify-center">
            <div className="w-[95vw] h-7 px-3 my-1.5 rounded-xl bg-gray-200">
                <div className="w-full h-full text-stone-800 flex items-center justify-center text-sm font-semibold">
                    <button className="h-full w-2/6 -skew-x-[20deg] border-r border-solid border-gray-500"><p className="skew-x-[20deg]">New Arrival</p></button>
                    <button className="h-full w-2/6 -skew-x-[20deg] border-r border-solid border-gray-500"><p className="skew-x-[20deg]">Tranding</p></button>
                    <button className="h-full w-2/6 -skew-x-[20deg]"><p className="skew-x-[20deg]">Most Selling</p></button>
                </div>
            </div>
        </div>
    </>)
}