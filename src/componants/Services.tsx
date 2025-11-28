import  { useRef } from "react";
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

export const Services = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardStyles = [
    "bg-gradient-to-br from-blue-500 to-blue-700 text-white",
    "bg-gradient-to-br from-slate-700 to-slate-900 text-white",
    "bg-gradient-to-br from-indigo-900 to-black text-white",
    "bg-white/10 backdrop-blur-lg border border-white/20 text-white",
    "bg-gradient-to-br from-gray-900 to-gray-700 text-white",
    "bg-white border border-gray-200 text-gray-900",
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] w-full flex justify-center items-start py-10"
    >
      <div className="sticky top-10 w-full flex justify-center">
        <div className="relative w-full flex justify-center items-center h-[700px] md:h-[600px]">
          {services.map((service, index) => {
            const total = services.length;

            const start = index / total;
            const end = (index + 1) / total;

            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.1, end - 0.1, end],
              [1, 1, 0, 0]
            );

            const y = useTransform(
              scrollYProgress,
              [start, end],
              ["0%", "-20%"]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity, y, zIndex: total - index }}
                className={`
                  absolute w-[90%] max-w-4xl h-[450px] md:h-[400px] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden transition-all duration-300 ${cardStyles[index]}
                `}
              >
                {/* Left part: Icon + Title */}
                <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-6 md:p-8 bg-black/20">
                  <div className="text-6xl md:text-8xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-center">
                    {service.title}
                  </h3>
                </div>

                {/* Right part: Details */}
                <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <p className="text-base md:text-lg mb-4 md:mb-6 opacity-90">
                    {service.description}
                  </p>

                  <a
                    href={service.link}
                    className="font-semibold text-base md:text-lg underline underline-offset-4 self-start"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
