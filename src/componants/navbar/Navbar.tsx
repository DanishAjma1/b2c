import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ListMinus,
  Mail,
  Phone,
} from "lucide-react";
import React, { useEffect, useState } from "react";

export const Navbar: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [index, setIndex] = useState<number | null>(null);
  const [strecth, setStrech] = useState(false);
  const [navHover, setNavHover] = useState(false);
  const [selectedNav, setSelectedNav] = useState<string | null>(null);

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
    <div className="flex fixed w-full z-30 justify-center text-white mt-2">
      <div
        className={`${
          strecth ? "w-6/12" : "w-8/12"
        } bg-black bg-opacity-90 flex flex-col transition-all duration-500`}
      >
        <div className="transition-all duration-500 p-2 flex items-center justify-between h-fit">
          <div className="gap-2 flex justify-center items-center">
            <span className={`ml-2 ${strecth && "bg-blue-500 p-1"}`}>
              <ListMinus className={`w-6 h-6 `} />
            </span>
            <h1>{strecth ? "" : "EffectiveSoft"}</h1>
          </div>
          <div className="flex justify-center relative">
            <ul className="flex gap-5">
              {["What we do", "Who we are", "Insights", "Case Studies"].map(
                (value, idx) => (
                  <div className="relative bg-black">
                    {/* NAV LIST */}
                    <li
                      key={idx}
                      onMouseEnter={() => {
                        setNavHover(true);
                        setIndex(idx);
                        setSelectedNav(value);
                      }}
                      className="flex items-center gap-1 hover:cursor-pointer hover:text-gray-600 transition-all duration-300"
                    >
                      {value}
                      {value!=="Case Studies"?
                      (navHover && index === idx ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )):(<></>)
                    }
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
          <div className=" flex justify-center">
            <button
              className={`px-4 py-2 bg-blue-500 hover:bg-blue-800 transition-all duration-500 ${
                strecth && "py-1 px-2"
              }`}
            >
              {strecth ? <Mail className="h-6 w-6" /> : "Send request"}
            </button>
          </div>
        </div>
        {/* MODAL */}
        {/* {selectedNav === "what we do" && navHover && index === 0 && ( */}
        <div
          onMouseLeave={() => {
            setSelectedNav(null);
            setNavHover(false);
            setIndex(null);
          }}
          className={`absolute top-full mt-1 flex ${
            strecth ? "flex-col" : "flex-row"
          } gap-2 justify-center ${
            strecth ? "w-6/12" : "w-8/12"
          }  transition-all duration-500 ${
            navHover
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-1"
          }`}
        >
          {selectedNav === "What we do" && (
             <div
            className={`bg-black/80 p-6 shadow flex justify-center text-xs font-pt ${
              strecth ? "w-full" : "w-8/12"
            }`}
          >
              <div className="grid grid-flow-col text-base">
                <div className="flex flex-col gap-2 pr-20 border-r border-gray-700">
                  <span className="text-gray-500 text-xs font-bold mb-1">Our Expertise</span>
                  {["Design",
                  "Product engineering",
                  "Cloud",
                  "Data services",
                  "AI solutions"].map((value,idx)=>(
                  <p key={idx} className="hover:text-blue-500 transition hover:cursor-pointer">{value}</p>
                  ))}
                  
                </div>
                <div className="flex flex-col gap-2 px-20 border-r  border-gray-700">
                  <span className="text-gray-500 text-xs font-bold mb-1">Fintech specialization</span>
                  {["Trading plateform"].map((value,idx)=>(
                  <p key={idx} className="hover:text-blue-500 hover:cursor-pointer transition ">{value}</p>
                  ))}
                </div>
                <div className="flex flex-col gap-2 pl-20">
                  <span className="text-gray-500 text-xs font-bold mb-1">Healthcare specialization</span>
                  {["Custom RCM solutions",
                  "AI solutions for healthcare",
                  "Custom healthcare software",
                  ].map((value,idx)=>(
                  <p key={idx} className="hover:text-blue-500 transition  hover:cursor-pointer">{value}</p>
                  ))}
                </div>
            </div>
          </div>
)}
         {selectedNav === "Who we are" && (
          <div
            className={`bg-black/80 p-6 shadow flex text-xs font-pt ${
              strecth ? "w-full" : "w-8/12"
            }`}
          >
            <div>
              <div className="flex flex-row text-base px-5">
                <div className="flex flex-col gap-3 w-1/3 border-r-2  border-gray-700">{["About us","Leadership","Experts","Careers","Certifications"].map((value,idx)=>(
                  <p key={idx}>{value}</p>
                ))}</div>
                <div className="flex flex-col w-2/3 pl-10">
                <div className="flex justify-end">
                  <h4 className="text-blue-500 font-bold pb-2">B2C Incorporation</h4>
                  </div>
                  <p className="">We are extremely satisfied with our collaboration with EffectiveSoft. We engaged them for business analysis, UI/UX design, web development, and testing. The results were visually stunning designs and wireframes, remarkable UX suggestions, and an app fully aligned with our requirements. The team quickly understood our needs, worked flexibly within tight deadlines, and consistently delivered exceptional work.</p>
                  <div className="flex flex-col justify-start pt-5">
                  <h4>Gulfam .......</h4>
                  <h5 className="text-gray-500">CEO</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
          {/* Insights */}
            {selectedNav === "Insights" && (
          <div
            className={`bg-black/80 p-6 shadow flex text-xs font-pt ${
              strecth ? "w-full" : "w-8/12"
            }`}
          >
            <div>
              <div className="grid grid-flow-col grid-cols-3 text-base px-5">
               <div className="flex flex-col  gap-3 border-r  border-gray-700"><h4 className="hover:text-blue-500">Blog</h4>
               <h4 className="hover:text-blue-500">Company updates</h4></div>
               <div className="grid col-span-2 grid-flow-col">
              <div className="flex flex-col border-r px-10  border-gray-700">
                <img src="/workflow.jpeg" alt="workflow" className="w-full h-32" />
                <h5 className="mt-4">Architecture review: a strategic investment in sustainable growth</h5>
              </div>
              <div className="flex flex-col items-center pl-10">
                <img src="/lecture.jpeg" alt="lecture" className="w-full h-32" />
                <h5 className="mt-4">Architecture review: a strategic investment in sustainable growth</h5>
              </div>
              </div>
              </div>
            </div>
          </div>
          )}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};
