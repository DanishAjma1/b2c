import React from "react";


const TechnicalExpertise: React.FC = () => {
  return (
    <section className="">
      <section className="flex items-center bg-[#00091f] h-80">
        <div className="flex flex-row  text-white">
          <div className="w-1/3 font-sans font-medium flex justify-center">
            <h4>TECNICAL EPERTISES</h4>
          </div>
          <div className="w-3/4 flex justify-center">
            <p className="w-8/12 text-2xl font-sans">
              We specialize in AI, cloud engineering, blockchain, IoT, data analytics, and automation—building scalable, secure, and high-performance digital systems. Our expertise helps businesses accelerate innovation, optimize operations, and stay competitive in a rapidly evolving technological landscape.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <img
          src="award__2.png"
          alt="bg award image"
          className="w-full h-full bg-cover"
        />
        {/* Section Heading */}
        <div className="absolute text-white bg-blue-800 rounded-full px-6 py-7">
          hello
        </div>
      </section>
      <section className="relative flex flex-col bg-[#00091f] py-20 font-sans text-white">
        <div className="flex flex-col justify-center items-center">
          <div className="font-sans flex justify-start font-medium text-4xl my-20 w-9/12 px-5">
            <h4 className="captalize">B2C INC. SUCCESS STATS</h4>
          </div>
          <div className="grid grid-cols-4 w-9/12 px-5">
            {[
              { header: "WE WORK SINCE", value: "2024" },
              { header: "LOCATION WORLDWIDE", value: "02" },
              { header: "ON-GOING CLIENTS", value: "200+" },
              { header: "SERVED-CLIENTS", value: "1000+" },
            ].map((v, idx) => (
              <div
                key={idx}
                className="px-5 flex flex-col justify-around h-52 border-2 border-white hover:bg-blue-800 transition-colors duration-150 ease-in-out"
              >
                <p className="py-2 font-medium">{v.header}</p>
                <h1 className="text-[80px] font-sans font-bold">{v.value}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechnicalExpertise;
