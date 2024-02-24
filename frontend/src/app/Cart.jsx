export default function Cart() {
    return (<>
        <div id="cartbox" onClick={closeCart} className="fixed w-screen h-screen overflow-hidden bg-gray-200 bg-opacity-60 transition-all duration-500 ease-in-out left-0 right-0 top-0 bottom-0 z-50 invisible">
            <div onClick={(e) => e.stopPropagation()} id="cart" className="absolute top-0 right-0 bottom-0 w-0 max-w-[530px] h-full px-2 bg-white transition-all duration-700 ease-in-out">
                <div className="flex h-full w-full flex-col justify-center items-center">
                    <div className="h-16 2md:h-20 w-full flex-none">
                        <div className="h-12 2md:h-16 text-black flex items-center justify-between px-2">
                            <h1 className="text-2xl font-semibold">Shopping cart</h1>
                            <button onClick={closeCart} className="w-7 h-7 2md:w-8 2md:h-8">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full h-0.5 bg-black mr-2 mt-2"></div>
                    </div>
                    <div className="w-full bg-green-500 grow overflow-y-auto">
                        <div className="flex flex-col overflow-y-auto gap-3">
                            <div className="h-40 2md:h-48 w-full bg-slate-500"></div>
                            <div className="h-40 2md:h-48 w-full bg-slate-500"></div>
                            <div className="h-40 2md:h-48 w-full bg-slate-500"></div>
                            <div className="h-40 2md:h-48 w-full bg-slate-500"></div>
                            <div className="h-40 2md:h-48 w-full bg-slate-500"></div>
                            <div className="h-40 2md:h-48 w-full bg-slate-500"></div>
                            <div className="h-40 2md:h-48 w-full bg-slate-500"></div>
                            <div className="h-40 2md:h-48 w-full bg-slate-500"></div>
                        </div>
                    </div>
                    <div className="w-full h-32 flex-none bg-slate-700"></div>
                </div>
            </div>
        </div>
    </>)
}