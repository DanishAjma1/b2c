import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const textColor = useTransform(scrollYProgress, [0, 1], ["#1f2937", "#ffffff"]);

  const bgColor = useTransform(scrollYProgress, [0, 1], ["#456882", "#234C6A"]);

  const brands: string[] = [
    "/ters.png",
    "/D&J.png",
    "/ellis&cco.png",
    "/goodies.png",
    "/outfiters.png",
    "/lvi-info.png",
    "/mpower.png",
    "/NERF.png",
    "/Rising phoenix.png",
    "/rye-assic.png",
    "/saya.png",
    "/sirona.png",
    "/WealthWise.png",
    "/zero.png",
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="py-32 transition-colors duration-300 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          style={{ color: textColor }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          WHAT MAKES EFFECTIVESOFT THE RIGHT CHOICE FOR YOUR BUSINESS?
        </motion.h2>

        <motion.p
          style={{ color: textColor }}
          className="text-xl max-w-3xl mx-auto leading-relaxed mb-16"
        >
          We deliver effective digital solutions by uncovering deep-root
          business needs through a blend of human insights and advanced
          technology.
        </motion.p>
      </div>

      {/* Brand Marquee */}
      <div className="overflow-hidden w-full py-5 bg-black/60">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        > 
          {[...brands,...brands].map((logo, idx) => (
            <Link to={"/design"} className="">
              <div
                key={idx}
                className="flex-shrink-0 w-32 h-16 flex items-center  grayscale hover:grayscale-0 justify-center group relative"
              >
                <img
                  src={logo}
                  alt={`Brand ${idx % brands.length}`}
                  className={`max-h-20 object-contain ${idx=== 11 || idx=== 14 || idx === 0 || idx ===1 ? 'bg-white': 'bg-transparent'}`}
                />
                <div className="absolute inset-0" />
              </div>
            </Link>

          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;