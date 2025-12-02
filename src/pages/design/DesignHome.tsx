import React, { useEffect, useRef, useState } from 'react'
import { DesignPageNavbar } from '../../componants/navbar/DesignPageNavbar'
import { ArrowLeft, ArrowRight, CaseUpper, Snowflake, Volleyball } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BorderAnimation } from '../../componants/BorderAnimation';
import { ButtonsWithArcs } from '../../componants/ButtonsWithArcs';
import { DesignPageFooter } from '../../componants/DesignPageFooter';

interface Props {
  image: string;
  heading: string;
  position: "start" | "end";
  listOfFeatures: string[];
}
const ImageDiv = (props: Props) => {
  const { image, heading, position, listOfFeatures } = props;
  return (
    <div className={`flex justify-${position} relative`}>
      <aside className="flex flex-col max-w-5xl text-sm py-10">

        <div className="group relative w-full">
          <img
            src={image}
            alt="laptop"
            className="w-full h-auto object-cover"
          />

          {/* hover overlay */}
          <div
            className="
          absolute inset-0 
          bg-black/20 backdrop-blur-sm 
          opacity-0 group-hover:opacity-100 
          transition-all duration-300 
          flex items-center justify-center 
          z-10
        "
          >
            {heading}
          </div>
        </div>

        <div className="flex gap-3 py-7">
          {listOfFeatures.map((value, idx) => (
            <h4 key={idx} className="px-3 py-1 border rounded-full hover:bg-blue-800 transition">{value}</h4>
          ))}
        </div>

      </aside>
    </div>
  )
}
export const DesignHome: React.FC = () => {
  const texts: string[] = [
    "We design.",
    "We research.",
    "We care about your users.",
    "We scale."
  ];

  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scroll = (direction: "left" | "right") => {
    const current = scrollRef.current;
    if (!current) return;

    const scrollAmount = Math.round(current.offsetWidth / 2);

    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

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
    <div className='w-full  bg-black'>
      <DesignPageNavbar />
      <section className="relative bg-black h-screen ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-95"
        >
          <source src="/main-video-mp4.mp4" type="video/mp4" />
        </video>

        <div className="relative flex justify-center items-center text-white h-5/6">
          <div className="gap-6 flex flex-col justify-center items-center text-center">
            {/* Center CONTENT */}
            <h1 className="font-pt text-4xl lg:text-7xl font-medium text-white mb-6">
              Hello, we are <span className='text-blue-500'>UX design studio.</span>
              <span
                className={`block transition-all duration-500 ${fade ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
                  }`}
              >
                {texts[index]}
              </span>
            </h1>
            <button className='px-8 py-2 rounded-full outline'>craft a UX that converts</button>
          </div>
        </div>
      </section>
      <main className='w-10/12 mx-auto'>
        <section className='min-h-screen text-white'>
          <div className='text-4xl w-full flex justify-center pt-16'>
            <div className='flex w-full'><h3 className='w-1/5'>We focus on  the <span className='text-blue-700'>outcome</span> not only the output</h3></div>
          </div>
          <div className='flex flex-row  gap-10 w-full mt-16 p-3'>
            <BorderAnimation className='flex flex-col w-1/3 justify-between h-[50vh] p-8 '>
              <div className='flex flex-col'>
                <Snowflake className='w-12 h-12 text-blue-800' />
                <h3 className='my-8 text-2xl'>Strategize</h3>
                <div className='flex flex-col text-lg gap-2'>
                  {["Product discovery", "Proof of concept design", "MVP design"].map((value, idx) => (
                    <li key={idx} className='list-inside'>{value}</li>
                  ))}
                </div>

              </div><Link to={"#"} className='flex gap-2 items-center'>Explore <span><ArrowRight className='w-4 h-4' /></span></Link></BorderAnimation>
            <BorderAnimation className='flex flex-col w-1/3 justify-between h-[50vh] p-8 '>
              <div className='flex flex-col'>
                <Snowflake className='w-12 h-12 text-blue-800' />
                <h3 className='my-8 text-2xl'>Strategize</h3>
                <div className='flex flex-col text-lg gap-2'>
                  {["Product discovery", "Proof of concept design", "MVP design"].map((value, idx) => (
                    <li key={idx} className='list-inside'>{value}</li>
                  ))}
                </div>

              </div><Link to={"#"} className='flex gap-2 items-center'>Explore <span><ArrowRight className='w-4 h-4' /></span></Link></BorderAnimation>
            <BorderAnimation className='flex flex-col w-1/3 justify-between h-[50vh] p-8 '>
              <div className='flex flex-col'>
                <Snowflake className='w-12 h-12 text-blue-800' />
                <h3 className='my-8 text-2xl'>Strategize</h3>
                <div className='flex flex-col text-lg gap-2'>
                  {["Product discovery", "Proof of concept design", "MVP design"].map((value, idx) => (
                    <li key={idx} className='list-inside'>{value}</li>
                  ))}
                </div>

              </div><Link to={"#"} className='flex gap-2 items-center'>Explore <span><ArrowRight className='w-4 h-4' /></span></Link></BorderAnimation>
          </div>

        </section>

        <section className='min-h-screen text-white'>
          <div className='flex items-center flex-col'>
            <h2 className="font-pt text-2xl lg:text-5xl text-center font-medium text-white mb-6">
              Our design process is well-troddon <br /> path to <span className='text-blue-500'>your success</span>
            </h2>
            <p className='py-16'>
              <BorderAnimation className='w-fit flex items-center hover:cursor-pointer group '><button className='pl-8 pr-2 py-2'>Our design process in details</button><span className='pr-6'><ArrowRight className='w-4 h-4 group-hover:translate-x-2 transition duration-300' /></span></BorderAnimation>
            </p>
          </div>
          <ButtonsWithArcs />
        </section>
        <section className='min-h-screen text-white'>
          <div className='w-full gap-10'>
            <div className='flex justify-between items-center'>
              <h2 className="font-pt text-2xl lg:text-5xl text-center font-medium text-white py-10">
                Our work speak louder than words
              </h2>
              <p className='w-fit flex items-center hover:cursor-pointer border group rounded-full'><button className='pl-4 pr-2 py-2'>see all cases</button><span className='pr-4'><ArrowRight className='w-4 h-4 group-hover:translate-x-2 transition duration-300' /></span></p>
            </div>
            <ImageDiv image='/lecture.jpeg' heading='nothing' position='start' listOfFeatures={["UX Audit", "Web application"]} />
            <ImageDiv image='/lecture.jpeg' heading='nothing' position='end' listOfFeatures={["UX Audit", "Web application"]} />
            <ImageDiv image='/lecture.jpeg' heading='nothing' position='start' listOfFeatures={["UX Audit", "Web application"]} />
            <ImageDiv image='/lecture.jpeg' heading='nothing' position='end' listOfFeatures={["UX Audit", "Web application"]} />


          </div>
        </section>
      </main>
      <section className='flex flex-col py-15 bg-black min-h-screen justify-center items-center'>

        <div className="relative w-full min-h-[200px] bg-blue-950 p-8 border-y-2 group flex items-center">

          <button
            onClick={() => scroll("left")}
            className="absolute z-10 left-10 font-bold
          opacity-0 -translate-x-6 transition-all duration-300 ease-in-out
          group-hover:opacity-100 group-hover:translate-x-0
          pointer-events-none group-hover:pointer-events-auto"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute z-10 right-40 font-bold
          opacity-0 translate-x-6 transition-all duration-300 ease-in-out
          group-hover:opacity-100 group-hover:translate-x-0
          pointer-events-none group-hover:pointer-events-auto"
          >
            <ArrowRight className="w-8 h-8" />
          </button>

          {/* scroll container */}
          <div
            ref={scrollRef}
            className="flex flex-row overflow-x-hidden snap-both snap-mandatory scroll-smooth no-scrollbar w-full"

          /* remove onTouchMove preventDefault — that blocks natural touch scroll */
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div className='flex flex-col min-w-[50%] items-center text-center'>
                <h4 className='py-5 text-2xl text-white/70'>Keith Nolan <span className='text-gray-700'>Head of R&D, NDA</span></h4>

                <p
                  key={i}
                  className="
              flex snap-center px-6 py-10 text-white/90 font-thin w-4/5 text-3xl"
                >
                  From the very beginning of our collaboration, it became evident that we had
                  found a team that consistently performs above expectations, pushing the
                  limits of creativity and consistently delivering industry-leading design
                  concepts. Each member of your design team demonstrates a passion for their
                  craft, bringing a level of enthusiasm and expertise that is truly remarkable.
                  It is evident that they genuinely care about the work they produce and take
                  great pride in delivering outstanding results.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='min-h-screen text-white flex flex-col  justify-between'>
        <div className='text-4xl flex w-10/12 mx-auto  justify-center'>
          <div className='flex w-full'><h3 className='w-2/5 leading-tight'>We are <span className='text-blue-700'>flexible <br /> 2 ways </span> to work with us </h3></div>
        </div>
        <div className='flex flex-row  gap-10 w-10/12 mx-auto my-16'>
          <BorderAnimation className='flex flex-col w-1/2 justify-between h-[25vh] p-8 '>
            <div className='flex flex-col gap-5'><h3 className='text-2xl'>Project Based</h3>
              <p className='text-base'>If you have a need for a high-quality product delivered within a set time frame, the traditional project-based model is your best choice. We will work on the project design from A to Z and ensure it's done in time and on budget.</p>
            </div>
            <Link to={"#"} className='flex gap-2 items-center'>Explore <span><ArrowRight className='w-4 h-4' /></span></Link></BorderAnimation>

          <BorderAnimation className='flex flex-col w-1/2 justify-between h-[25vh] p-8 '>
            <div className='flex flex-col gap-5'><h3 className='text-2xl'>Project Based</h3>
              <p className='text-base'>If you have a need for a high-quality product delivered within a set time frame, the traditional project-based model is your best choice. We will work on the project design from A to Z and ensure it's done in time and on budget.</p>
            </div>
            <Link to={"#"} className='flex gap-2 items-center'>Explore <span><ArrowRight className='w-4 h-4' /></span></Link></BorderAnimation>

        </div>
        <section className='flex w-10/12 mx-auto my-16'>
          <div className='flex flex-col w-full'>
            <h3 className='w-4/5 text-4xl leading-tight'>Let's make something <br /><span className='text-blue-700'>awesome together!</span></h3>
            <div className='flex gap-4 my-10'>
              <button className='px-8 py-2 rounded-full w-fit outline outline-1'>drop a line.!</button>
              <button className='px-3 py-3 rounded-full w-fit outline outline-1'><Volleyball className='w-5 h-5' /></button>
              <button className='px-3 py-3 rounded-full w-fit outline outline-1'><Volleyball className='w-5 h-5' /></button>
            </div>
          </div>

          <aside className=''>
            <img src="/image.png" alt="image" className="w-64 [transform-style:preserve-3d] animate-spin3d" />
          </aside>
        </section>
        <div className='absolute -z-10 inset-0 flex justify-end' >
          <div>
            <div className=''></div>
            <div></div>
          </div>
        </div>
      </section>
      <footer>
        <DesignPageFooter />
      </footer>
    </div>
  )
}
