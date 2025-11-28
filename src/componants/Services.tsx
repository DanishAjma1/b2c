import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Services data
const services = [
  {
    title: "Web Design",
    description: "Get stunning responsive websites crafted with modern UI/UX.",
    icon: "💻",
    link: "/web-design",
  },
  {
    title: "App Development",
    description: "Build powerful mobile apps for Android and iOS.",
    icon: "📱",
    link: "/app-development",
  },
  {
    title: "AI Integration",
    description: "Automate your business with cutting-edge AI solutions.",
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
    description: "Protect your business with industry-standard security.",
    icon: "🛡️",
    link: "/cybersecurity",
  },
];

const cardStyles = [
  "bg-gradient-to-br from-blue-500 to-blue-700",
  "bg-gradient-to-br from-purple-500 to-purple-700",
  "bg-gradient-to-br from-indigo-500 to-indigo-700",
  "bg-gradient-to-br from-pink-500 to-pink-700",
  "bg-gradient-to-br from-orange-500 to-orange-700",
  "bg-gradient-to-br from-teal-500 to-teal-700",
];

export const Services: React.FC = () =>  {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative w-full h-screen">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {services.map((service, index) => {
          const start = index / services.length;
          const end = (index + 1) / services.length;
          
          // Card slides up from bottom, attached like a tail
          const y = useTransform(
            scrollYProgress,
            [start, end],
            ["100vh", "20vh"]
          );
          
          return (
            <motion.div
              key={index}
              style={{
                y,
                zIndex: index,
              }}
              className={`absolute inset-0 w-full h-[80vh] shadow-2xl overflow-hidden ${cardStyles[index]} text-white`}
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
                  <div className="text-7xl mb-6">{service.icon}</div>
                  <h2 className="text-5xl font-bold mb-6">{service.title}</h2>
                  <p className="text-xl leading-relaxed opacity-90">
                    {service.description}
                  </p>
                  <button className="mt-8 px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors w-fit">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}