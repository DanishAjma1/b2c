import React, { useEffect, useState } from 'react'
import { DesignPageNavbar } from '../../componants/navbar/DesignPageNavbar'
import { ArrowRight, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DesignHome:React.FC =()=> {
      const texts: string[] = [
        "We design.",
        "We research.",
        "We care about your users.",
        "We scale."
      ];
    
      const [index, setIndex] = useState<number>(0);
      const [fade, setFade] = useState<boolean>(true);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setFade(false);
          setTimeout(() => {
            setIndex((prev) => (prev + 1) % texts.length);
            setFade(true);
          }, 400);
        }, 2500);
    
        return () => clearInterval(interval);
      }, [texts.length]);

  return (
    <div className='w-full'>
        <DesignPageNavbar/>
        <section className="relative pt-32 pb-20 bg-black h-screen ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      >
        <source src="/main-video-mp4.mp4" type="video/mp4" />
      </video>

      <div className="relative flex justify-center items-center h-4/6">
        <div className="gap-6 flex justify-center items-center text-center">
          {/* Center CONTENT */}
            <h1 className="font-pt text-4xl lg:text-7xl font-medium text-white mb-6">
                Hello, we are <span className='text-blue-500'>UX design studio.</span>
              <span
                className={`block transition-all duration-500 ${
                  fade ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
                }`}
              >
                {texts[index]}
              </span>
            </h1>
      </div>
      </div>
    </section>
    <section className='min-h-screen bg-black text-white'>
        <div className='flex text-4xl  w-1/5'><h3>We focus on  the <span className='text-blue-700'>outcome</span> not only the output</h3></div>
        <div className='flex flex-col w-10/12 mt-16'>
        <div className='flex flex-col w-1/3 border rounded-xl justify-between h-[45vh] p-8'>
        <div className='flex flex-col'>
            <Snowflake className='w-12 h-12 text-blue-800' />
            <h3 className='my-8 text-2xl'>Strategize</h3>
            <div className='flex flex-col text-lg gap-2'>
            {["Product discovery","Proof of concept design","MVP design"].map((value,idx)=>(
                <li key={idx} className='list-inside'>{value}</li>
            ))}

            </div>
            
            </div><Link to={"#"} className='flex gap-2 items-center'>Explore <span><ArrowRight className='w-4 h-4' /></span></Link></div></div>
    </section>
    </div>
  )
}
