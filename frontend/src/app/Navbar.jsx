import { Black_Ops_One } from "next/font/google";
const blackOpsOne = Black_Ops_One({
  weight: ["400"],
  style: ["normal"],
  preload: false,
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center px-7 w-full h-20 bg-black text-white">
        <div className="relative flex min-w-[700px]">
          <div
            className={`${blackOpsOne.className} text-7xl w-48 font-extrabold mr-32`}
          >
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
            className="relative bg-transparent rounded-full grow pr-12"
            data-te-input-wrapper-init
          >
            <input
              type="search"
              className="peer text-xl px-5 font-normal block min-h-[auto] w-full rounded-full border-solid border bg-transparent leading-[2.2] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-non border-blue-500 shadow-search-hover-shadow placeholder-shown:border-white placeholder-shown:shadow-none" placeholder=""
              id="exampleSearch2"
            />
            <label
              htmlFor="exampleSearch2"
              className="pointer-events-none inline-block absolute left-6 top-0 mb-0 origin-[0_0] truncate pt-[0.7rem] text-lg peer-focus:font-medium transition-all duration-200 ease-out peer-focus:-translate-y-[1.2rem] peer-focus:scale-[0.8] peer-focus:text-white peer-focus:bg-black peer-placeholder-shown:bg-transparent peer-placeholder-shown:-translate-y-[0rem] peer-placeholder-shown:scale-[1] peer-placeholder-shown:text-gray-400 -translate-y-[1.2rem] scale-[0.8] text-white bg-black"
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
      </div>
    </>
  );
}
