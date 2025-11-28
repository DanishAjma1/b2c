import { Mail } from "lucide-react";
import React, { useEffect, useState } from "react";

export const Navbar: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [strecth, setStrech] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 4 && currentScroll > lastScrollY) {
        setStrech(true);
      } else if (currentScroll < lastScrollY) {
        setStrech(false);
      }
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="flex fixed w-full z-50 justify-center text-white mt-2">
      <div
        className={`${
          strecth ? "w-6/12" : "w-10/12"  
        } bg-black bg-opacity-90 transition-all duration-500 p-2 flex items-center justify-between h-fit`}
      >
        <div className="gap-2 flex justify-center items-center">
          <span>
            <img src="/icon.png" alt="icon" className="p-2 h-8 w-8 bg-white" />
          </span>
          <h1>{strecth ? "" : "EffectiveSoft"}</h1>
        </div>
        <div className="flex justify-center">
          <ul className="flex gap-5">
            {["what we do", "who we are", "Insights", "Case Studies"].map(
              (value, idx) => (
                <li
                  key={idx}
                  className="hover:cursor-pointer hover:text-gray-600 transition-all duration-300"
                >
                  {value}
                </li>
              )
            )}
          </ul>
        </div>
        <div className=" flex justify-center">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-800 transition-all duration-500">
            {strecth ? (
              <Mail className="h-8 w-7" />
            ) : (
              "Send request"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
