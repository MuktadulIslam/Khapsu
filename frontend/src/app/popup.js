"use client";
import { useState, useRef } from "react";

function PopUp() {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="fixed  top-0 left-0 w-full h-full z-50">
        <div className="fixed bottom-0 w-full flex justify-center items-center px-4 py-2 bg-white shadow-md">
          <button
            onClick={toggleVisibility}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isVisible ? "Hide Box" : "Show Box"}
          </button>
        </div>
        <div className="flex justify-center items-center h-screen">
          <div
            ref={boxRef}
            className={`${isVisible ? "w-[1000px] aspect-[7/4] opacity-100" : "w-0 h-0 opacity-0"} absolute bg-gray-300 transition-all duration-1000 `}
          ></div>
        </div>
      </div>
    </>
  );
}

export default PopUp;
