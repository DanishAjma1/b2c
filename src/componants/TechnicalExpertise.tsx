import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <section className="h-screen">
      <img
        src="https://www.effectivesoft.com/wp/wp-content/uploads/ESThumbnails/78651/330.awards.png"
        alt="bg award image"
        className="w-full h-full absolute"
      />
      {/* Section Heading */}
      <div className=""></div>
    </section>
  );
};

export default TechnicalExpertise;
