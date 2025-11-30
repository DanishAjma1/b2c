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
  const solutions = [
    "Salesforce",
    "AWS",
    "Power BI",
    "SAP",
    "ServiceNow",
    "Shopify",
    "MuleSoft",
    "Azure",
  ];
  const expertises = [
    "UX Design",
    "RPA",
    "DevOps",
    "IoT",
    "Blockchain",
    "AR/VR/MR",
    "Cybersecurity",
    "Data Science",
  ];
  const marketingServices = [
    "Media Buying",
    "SEO",
    "SMM",
    "ORM",
    "Email Marketing",
    "Content Strategy",
  ];
  const commercialServices = [
    "2D Animation",
    "3D Animation",
    "Video Ads",
    "Motion Graphics",
    "Video Editing",
    "CGI Ads",
  ];
  const webDevServices = [
    "WordPress",
    "Shopify",
    "Custom Code",
    "Landing Pages",
  ];
  const GraphicsServices = [
    "UI/UX Design",
    "Brand Identity",
    "Content Design",
    "Logo Design",
    "Banners/Flyers",
    "Packaging",
  ];
  const consultingServices = [
    "Digital Transformation",
    "Cloud Solutions",
    "IT Strategy",
    "System Integration",
  ];
  return (
    <div className="flex fixed w-full z-30 justify-center text-white mt-2">
      <div
        className={`${
          strecth ? "w-6/12" : "w-10/12"
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
              {["what we do", "who we are", "Insights", "Case Studies"].map(
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
                      {navHover && index === idx ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
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
          className={`absolute top-full mt-1 flex overflow-y-scroll scroll-smooth ${
            strecth ? "flex-col" : "flex-row"
          } gap-2 justify-center ${
            strecth ? "w-6/12" : "w-10/12"
          }  transition-opacity duration-500 ${
            selectedNav === "what we do" && navHover && index === 0
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`bg-black/80 p-6 shadow flex text-xs font-pt ${
              strecth ? "w-full" : "w-8/12"
            }`}
          >
            <div>
              <div className="flex flex-row bg-gray-600 rounded-md">
                <div className="flex flex-col md:w-1/2 px-5 py-2">
                  <h4 className="border-b-2 border-blue-500 py-3 text-sm font-medium">
                    Solutions
                  </h4>
                  <div className="flex gap-2 py-3 flex-wrap">
                    {solutions.map((v, idx) => (
                      <p
                        key={idx}
                        className="px-2 py-0.5 hover:cursor-pointer transition-all duration-100 hover:bg-blue-500 hover:text-white flex items-center rounded-full bg-black"
                      >
                        {v}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:w-1/2 px-5 py-2">
                  <h4 className="border-b-2 border-blue-500 py-3 text-sm font-medium">
                    Expertises
                  </h4>
                  <div className="flex gap-2 py-3 flex-wrap">
                    {expertises.map((v, idx) => (
                      <p
                        key={idx}
                        className="px-2 py-0.5 hover:cursor-pointer hover:bg-blue-500 transition-all duration-100 hover:text-white flex items-center rounded-full bg-black"
                      >
                        {v}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {/* services */}
              <div
                className={`text-white py-6 grid grid-flow-col ${
                  strecth
                    ? "grid-cols-3 grid-rows-2 gap-5"
                    : "grid-cols-5 grid-rows-1 gap-2"
                } flex-wrap`}
              >
                <div className="flex flex-col">
                  <h3 className="pb-2 text-sm font-medium border-b">
                    Digital Marketing
                  </h3>
                  <div className="flex flex-col gap-1 py-3">
                    {marketingServices.map((value, idx) => (
                      <p
                        className="hover:cursor-pointer hover:text-blue-500"
                        key={idx}
                      >
                        <span className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3" />
                          {value}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="pb-2 text-sm font-medium border-b">
                    Commercial Production
                  </h3>
                  <div className="flex flex-col gap-1 py-3">
                    {commercialServices.map((value, idx) => (
                      <p
                        className="hover:cursor-pointer hover:text-blue-500"
                        key={idx}
                      >
                        <span className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3" />
                          {value}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="pb-2 text-sm font-medium border-b">
                    Web Development
                  </h3>
                  <div className="flex flex-col gap-1 py-3">
                    {webDevServices.map((value, idx) => (
                      <p
                        className="hover:cursor-pointer hover:text-blue-500"
                        key={idx}
                      >
                        <span className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3" />
                          {value}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="pb-2 text-sm font-medium border-b">
                    Graphic Design
                  </h3>
                  <div className="flex flex-col gap-1 py-3">
                    {GraphicsServices.map((value, idx) => (
                      <p
                        className="hover:cursor-pointer hover:text-blue-500"
                        key={idx}
                      >
                        <span className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3" />
                          {value}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="pb-2 text-sm font-medium border-b">
                    IT Consulting
                  </h3>
                  <div className="flex flex-col gap-1 py-3">
                    {consultingServices.map((value, idx) => (
                      <p
                        className="hover:cursor-pointer hover:text-blue-500"
                        key={idx}
                      >
                        <span className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3" />
                          {value}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* news letter */}
          <div className="bg-white text-black font-pt text-sm flex flex-col gap-2 p-5 ">
            <h4 className="text-blue-500 font-bold">What's New?</h4>
            <div className="p-3 gap-2 flex bg-black/70 rounded-md">
              <img src="/zero.png" alt="news" className="w-14 h-12" />
              <div className="flex flex-col">
                <h6>AI FOR BUSINESS IMPACT</h6>
                <p className="text-blue-500">Roadmap for SMEs & SMBs</p>
              </div>
            </div>
            <h4 className="text-md text-blue-500 font-bold">Quick Contact</h4>
            <p className="flex gap-2">
              <span>
                <Phone className="w-4 h-4 text-blue-500" />
              </span>
              +44 7380 594504
            </p>
            <p className="flex gap-2">
              <span>
                <Mail className="w-4 h-4 text-blue-500" />
              </span>
              hello@abcdmedia.com
            </p>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};
