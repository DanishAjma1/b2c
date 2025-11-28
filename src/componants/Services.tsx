import  { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Services data
const services = [
  {
    title: "Web Design",
    description:
      "Our AI services empower businesses to overcome challenges and create revolutionary user experiences through advanced digital solutions.",
    icon: "💻",
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

const cardStyles = [
  "bg-gradient-to-br from-white to-blue-700",
  "bg-gradient-to-br from-white to-purple-700",
  "bg-gradient-to-br from-white to-indigo-700",
  "bg-gradient-to-br from-white to-pink-700",
  "bg-gradient-to-br from-white to-orange-700",
  "bg-gradient-to-br from-white to-teal-700",
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
      <div className="sticky top-0 h-screen flex items-start overflow-hidden">
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
              className={`absolute inset-0 w-full h-[80vh] overflow-hidden ${cardStyles[index]} text-white`}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                  <div className="h-full w-full flex items-center justify-center text-9xl">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-5xl font-bold mb-6">{service.title}</h2>
                  <p className="text-xl leading-relaxed opacity-90">
                    {service.description}
                  </p>
                  <div className="flex gap-5 underline-offset-8 underline hover:cursor-pointer mb-5">
                    <p className="underline underline-offset-8 text-blue-500 active:text-blue-500">
                      Exper areas
                    </p>
                    <p>Exper areas</p>
                  </div>
                  <ul className="flex flex-col">
                    {Expertise.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-block  text-white px-4 py-2 rounded-full text-sm md:text-base mr-2 mb-2"
                      >
                        {item}
                      </span>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
