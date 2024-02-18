export default function Navbar() {
    return (<>
        <div className="flex justify-between items-center px-7 w-full h-20">
            <div className="relative flex min-w-[700px]">
                <div className="text-7xl w-48 font-extrabold mr-32">Khapsu</div>
                <ul className="flex justify-between items-center gap-5 bg-black">
                    <li className="text-lg text-white">Women's Fashion</li>
                    <li className="text-lg text-white">Men's Fashion</li>
                    <li className="text-lg text-white">Wall Art</li>
                </ul>
            </div>
            <div className="flex justify-end w-full pl-20">
                <div className="relative bg-transparent rounded-full grow" data-te-input-wrapper-init>
                    <input
                        type="search"
                        className="peer text-xl font-normal block min-h-[auto] w-full rounded-full border-solid border-black border-2 bg-transparent leading-[2.2] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non focus:border-blue-500 focus:shadow-search-hover-shadow"
                        id="exampleSearch2" />
                    <label
                        htmlFor="exampleSearch2"
                        className="pointer-events-none inline-block absolute left-6 top-0 mb-0 origin-[0_0] truncate pt-[0.7rem] text-black text-lg peer-focus:font-medium transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[1.2]"
                    ><p className="bg-white flex">Search</p></label>
                </div>
                <div className="flex justify-end items-center gap-6 w-36 flex-none">
                    <div>
                        Sign In
                    </div>
                    <div>
                        W
                    </div>
                </div>
            </div>
        </div>
    </>)
}