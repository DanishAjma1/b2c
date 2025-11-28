import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import { Navbar } from "./componants/navbar/Navbar.tsx";
import { Hero } from "./componants/Hero.tsx";
import { Services } from "./componants/Services.tsx";
import WhyChooseUs from "./componants/whychoose.tsx";
import Footer from "./componants/Footer.tsx";
import TechnicalExpertise from "./componants/TechnicalExpertise.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <WhyChooseUs />
    <TechnicalExpertise />

    <Services />
    <Footer />
  </StrictMode>
);
