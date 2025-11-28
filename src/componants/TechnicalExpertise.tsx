import React from "react";

interface Award {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const awards: Award[] = [
  {
    title: "Best Innovative Software 2024",
    description: "Awarded for delivering cutting-edge software solutions.",
    icon: "🏆",
    link: "/awards/innovative-software",
  },
  {
    title: "Top Cloud Solutions Provider",
    description: "Recognized for excellence in cloud integration and services.",
    icon: "☁️",
    link: "/awards/cloud-solutions",
  },
  {
    title: "AI Excellence Award",
    description:
      "Awarded for outstanding achievements in AI and Machine Learning.",
    icon: "🤖",
    link: "/awards/ai-excellence",
  },
];

const TechnicalExpertise: React.FC = () => {
  return (
    <section className="">
      <section className="flex items-center bg-indigo-950 h-80">
        <div className="flex flex-row  text-white">
          <div className="w-1/3 font-sans font-medium flex justify-center">
            <h4>TECNICAL EPERTISES</h4>
          </div>
          <div className="w-3/4 flex justify-center">
            <p className="w-8/12 text-2xl font-sans">
              Maintaining the highest security standards in compliance with
              ISO/IEC 27001:2022, we develop reliable solutions backed by our
              proven expertise. Our engineers—certified by Microsoft, Oracle,
              Azure, and AWS—excel in cloud technologies, artificial
              intelligence, and custom software development.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <img
          src="https://www.effectivesoft.com/wp/wp-content/uploads/ESThumbnails/78651/330.awards.png"
          alt="bg award image"
          className="w-full h-full bg-cover"
        />
        {/* Section Heading */}
        <div className="absolute text-white bg-blue-800 rounded-full px-6 py-7">
          hello
        </div>
      </section>
      <section className="relative flex flex-col bg-indigo-950 py-20 font-sans text-white">
        <div className="flex flex-col justify-center items-center">
          <div className="font-sans flex justify-start font-medium text-4xl my-20 w-5/6 px-5">
            <h4 className="">NUMBERS</h4>
          </div>
          <div className="grid grid-cols-4 w-5/6 px-5">
            {[
              { header: "WE WORK SINCE", value: "2003" },
              { header: "LOCATION WORLDWIDE", value: "9" },
              { header: "LONG-TERM CLIENTS", value: "52%" },
              { header: "AVERAGE CLIENT RETENTION IN YEARS", value: "4" },
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
