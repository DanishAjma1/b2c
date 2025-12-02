import React from 'react';
import { Navbar } from '../../componants/navbar/Navbar';
import { Hero } from '../../componants/Hero';
import WhyChooseUs from '../../componants/whychoose';
import { Services } from '../../componants/Services';
import TechnicalExpertise from '../../componants/TechnicalExpertise';
import TestimonialsSection from '../../componants/Testimonials';
import Footer from '../../componants/Footer';
export const Home:React.FC=()=> {
  return (
    <div>        
        <Navbar />
        <Hero />
        <WhyChooseUs />
        <Services />
        <TechnicalExpertise />
        <TestimonialsSection/>
        <Footer />  
    </div>
  )
}
