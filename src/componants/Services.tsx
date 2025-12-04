import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Services data
export const allServices = [
  
  // ---------------- SPECIALIZATION: REAL ESTATE ----------------
  {
    title: "Our Strategic Expertise",
    image: "/stretgy.png",
    description:
      "We empower real estate businesses with modern digital solutions—automation, analytics, and immersive experiences to maximize ROI.",
    services: [
      "Operations & Process Management (OPM)",
      "Real Estate CRM Development",
      "Blockchain Development & Web3 Engineering",
      "Trading Platforms & Fintech Engineering",
      "AI Automation & Intelligent Systems",
    ]
  },

  // ---------------- APP DEVELOPMENT ----------------
  {
    title: "Mobile App Development",
    image: "/phone.png",
    description:
      "We develop robust iOS and Android applications that combine intuitive design with powerful functionality and scalable architecture.",
    services: [
      "iOS & Android App Development",
      "Cross-Platform Development (React Native, Flutter)",
      "Backend API & Cloud Integration",
      "App UI/UX Design",
      "Real-Time App Features & Notifications",
      "App Store Optimization (ASO)",
      "App Maintenance & Feature Upgrades"
    ]
  },

  // ---------------- WEB DEVELOPMENT ----------------
  {
    title: "Web Design & Development",
    image: "/webDesign.png",
    description:
      "We build modern, responsive websites engineered for performance, scalability, and exceptional user experience.",
    services: [
      "Custom Website Development",
      "UI/UX Design for Websites",
      "Corporate & Portfolio Websites",
      "E-commerce Development",
      "CMS Development (WordPress, Headless CMS)",
      "Landing Page Development",
      "Website Optimization & Maintenance"
    ]
  },
  // ---------------- DESIGN ----------------
  {
    title: "Brand Identity & Strategy",
    image: "/brancIdentity.png",
    description:
      "We create strong brand identities and strategic frameworks that position your business for long-term market impact.",
    services: [
      "Complete Brand Identity Systems",
      "Logo & Visual Design",
      "Brand Strategy Development",
      "Typography & Color Systems",
      "Brand Guidelines Creation",
      "Rebranding & Refresh Projects",
      "Messaging & Positioning Frameworks"
    ]
  },

  // ---------------- MARKETING ----------------
  {
    title: "Digital Marketing & Growth",
    image: "/marketing.png",
    description:
      "We drive measurable growth using data-driven marketing strategies designed to increase visibility, engagement, and revenue.",
    services: [
      "Social Media Management (SMM)",
      "Paid Ads (Facebook, Google, LinkedIn)",
      "SEO & Content Strategy",
      "Email Marketing & Automation",
      "Influencer & Community Marketing",
      "Funnel Building & Conversion Optimization",
      "Performance Analytics & Reporting"
    ]
  },
  // ---------------- AI ENGINEERING ----------------
  {
    title: "AI Engineering & Automation",
    image: "/AI.png",
    description:
      "We engineer intelligent AI systems tailored to automate workflows, enhance operational efficiency, and improve business decision-making.",
    services: [
      "Custom AI Agent Development",
      "Machine Learning Model Development",
      "Business Process Automation",
      "AI Chatbots & Virtual Assistants",
      "Data Engineering & Pipelines",
      "Predictive Analytics Models",
      "AI Integration with Existing Systems"
    ]
  }
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
      style={{ height: `${(allServices.length - 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-[100vh] flex items-start overflow-hidden">
        {allServices.map((service, index) => {
          const start = index / allServices.length;
          const end = (index + 1) / allServices.length;

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
                  <div className="h-full w-full flex items-center justify-center text-9xl object-cover">
                    <img src={service.image} alt="web dev" className="w-full h-full" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-7/12 flex justify-end items-center font-pt">
                <div className="flex flex-col h-3/5 w-4/5 justify-start">
                <div className="w-3/5">
                <div className="flex justify-between group">
                  <h3 className="text-3xl font-bold font-pt mb-6 hover:text-blue-800 hover:cursor-pointer">{service.title}</h3>
                  <ArrowUpRight className="w-7 h-7 group-hover:text-blue-800 group-hover:cursor-pointer group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>
                  <p className="text-xl leading-relaxed opacity-90">
                    {service.description}
                  </p>
                  <div className="flex gap-5 hover:cursor-pointer  mt-5 pb-5 border-b-2 ">
                    <p className="text-xs font-bold font-sans bg-blue-800 w-fit text-white px-2 py-1 rounded-r-xl">
                      Specialized Solutions We Offer
                    </p>
                  </div>
                  <div className="flex flex-col list-inside mt-5">
                    {service.services.map((item, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm md:text-lg hover:text-blue-800 hover:cursor-pointer mr-2 bg-blend-color-dodge hover:translate-x-1 transition"
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
