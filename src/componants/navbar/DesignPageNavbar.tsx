import React, { useEffect, useState } from "react";

export const DesignPageNavbar: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 4 && currentScroll > lastScrollY) {
      setScroll(true);
    } else if (currentScroll < lastScrollY) {
      setScroll(false);
    }

    if (currentScroll > 200) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }

    setLastScrollY(currentScroll);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);
  
  return (
    <div className={`flex fixed w-full z-30 justify-center  text-white transition${
          scroll && "bg-black/70" 
        }  ${hideNav &&  "bg-transparent"}`}>
      <div
        className={`flex flex-col transition-all w-10/12 duration-500 ${hideNav ? '-translate-y-full pointer-events-none':'translate-y-0 pointer-events-auto mt-4'}`}
      >
        <div className="transition-all duration-500 p-2 flex bg-transparent items-center justify-between w-full">
            <h1>EffectiveSoft.design</h1>
          <div className="flex justify-center relative">
            <ul className="flex gap-5"> 
             {["service", "our works", "about us", "contacts"].map((value, idx) => (
                    <div className="relative" key={idx}>
                        {/* NAV LIST */}
                        <li
                        className="flex items-center gap-1 hover:cursor-pointer hover:text-gray-600 transition-all duration-300"
                        >
                        {value}
                        </li>
                  </div>
                )
              )}
            </ul>
          </div>
          <div className=" flex justify-center">
            <button
              className={`px-5 py-2 bg-transparent outline outline-1 hover:bg-blue-800 transition duration-500 rounded-full ${
                scroll && "py-1 px-2"
              }`}
            >let's talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
