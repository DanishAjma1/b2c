import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Services data
const services = [
  {
    title: "Web Design",
    description:
      "Our AI services empower businesses to overcome challenges and create a new revolutionary user experiences through advanced digital solutions.",
    icon: "/lecture.jpeg",
    link: "/web-design",
  },
  {
    title: "App Development",
    description:
      "Our AI services empower businesses to overcome challenges and create revolutionary user experiences through advanced digital solutions.",
    icon: "📱",
    link: "/app-development",
  },
  {
    title: "AI Integration",
    description:
      "Our AI services empower businesses to overcome challenges and create revolutionary user experiences through advanced digital solutions.",
    icon: "🤖",
    link: "/ai-integration",
  },
  {
    title: "Brand Identity",
    description:
      "Create a unique brand identity with logos, colors, and guidelines.",
    icon: "🎨",
    link: "/branding",
  },
  {
    title: "Marketing Strategy",
    description:
      "Boost your online presence with expert digital marketing strategies.",
    icon: "🚀",
    link: "/marketing",
  },
  {
    title: "Cybersecurity",
    description:
      "Our AI services empower businesses to overcome challenges and create revolutionary user experiences through advanced digital solutions.",
    icon: "🛡️",
    link: "/cybersecurity",
  },
];
const Expertise = [
  "Cloud Solutions",
  "AI & Machine Learning",
  "Blockchain Technology",
  "Internet of Things (IoT)",
  "Big Data & Analytics",
  "DevOps & Automation",
];

export const Services = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${(services.length - 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-[100vh] flex items-start overflow-hidden">
        {services.map((service, index) => {
          const start = index / services.length;
          const end = (index + 1) / services.length;

          // Each card slides up to cover the previous one
          const y = useTransform(
            scrollYProgress,
            [start, end],
            [index === 0 ? "0vh" : "100vh", "0vh"]
          );

          return (
            <motion.div
              key={index}
              style={{
                y,
                zIndex: index,
              }}
              className={`absolute inset-0 w-full h-[100vh] overflow-hidden bg-white text-black border-t-2`}
            >
              <div className="flex flex-col md:flex-row h-full font-pt">
                {/* Image Section */}
                <div className="w-full md:w-5/12 h-1/2 bg-black/90 md:h-full relative overflow-hidden">
                  <div className="absolute inset-0 " />
                  <div className="h-full w-full flex items-center justify-center text-9xl">
                    <img src={service.icon} alt="web dev" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-7/12 flex justify-end items-center font-pt ">
                <div className="flex flex-col w-4/5 justify-start">
                <div className="w-4/5">
                <div className="flex justify-between">
                  <h3 className="text-3xl font-bold font-pt mb-6 hover:text-blue-500 hover:cursor-pointer">{service.title}</h3>
                  <ArrowUpRight className="w-7 h-7" />
                </div>
                  <p className="text-xl leading-relaxed opacity-90">
                    {service.description}
                  </p>
                  <div className="flex gap-5 underline-offset-8 underline hover:cursor-pointer mb-5">
                    <p className="underline underline-offset-8 text-blue-500 active:text-blue-500">
                      Exper areas
                    </p>
                    <p>Top Cases</p>
                  </div>
                  <div className="flex flex-col list-inside">
                    {Expertise.map((item, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm md:text-lg hover:text-blue-500 hover:cursor-pointer mr-2 bg-blend-color-dodge"
                      >
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
                </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
