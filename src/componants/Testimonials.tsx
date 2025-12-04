import React, { useState, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  logo: string;
  logoColor: string;
  text: string;
  author: string;
  position: string;
}

const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      logo: "TruBridge",
      logoColor: "text-green-600",
      text: "We have been partnering with EffectiveSoft since 2006, so we've had time to become familiar with their professionalism and the quality of service they provide. I would highlight the great responsibility which my company assumes when solving critical tasks.",
      author: "Thomas Golden",
      position: "USA, TruBridge (formerly TruCode)"
    },
    {
      logo: "plato",
      logoColor: "text-blue-500",
      text: "Since working with EffectiveSoft, we've grown our company from the building phase to the profitability phase. We've continued expanding upon their responsibilities, and they've continued to accept challenges and integrate with our team. They've become mission-critical resources for us.",
      author: "Jesse MacNish",
      position: "CTO USA, Plato"
    },
    {
      logo: "CNote",
      logoColor: "text-teal-600",
      text: "We want to say big and fat thank you from the bottom of our hearts for all your hard work. Because of you, CNote was able to create this innovative financial product and change the way money gets distributed and invested. You are a critical part of our team!",
      author: "Yuliya Tarasava",
      position: "COO USA"
    },
    {
      logo: "CITYINDEX",
      logoColor: "text-yellow-500",
      text: "Since our first engagement, we have been impressed not only by the quality of work that EffectiveSoft delivers to City Index but also their attention to detail and reliability on delivery.",
      author: "Arthur Grimley",
      position: "CIO UK, CityIndex Group"
    },
    {
      logo: "ACME Corp",
      logoColor: "text-purple-600",
      text: "EffectiveSoft has been instrumental in helping us scale our operations. Their technical expertise and dedication to our success has been remarkable. We couldn't have asked for a better partner.",
      author: "Sarah Johnson",
      position: "VP Engineering, ACME Corp"
    },
    {
      logo: "TechFlow",
      logoColor: "text-indigo-600",
      text: "The team at EffectiveSoft consistently delivers high-quality solutions on time and within budget. Their communication and project management skills are top-notch.",
      author: "Michael Chen",
      position: "CTO, TechFlow Solutions"
    }
  ];

  const handleScroll = (): void => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = 'grabbing';
  };

  const handleMouseLeave = (): void => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging) return;
    e.preventDefault();
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    container.scrollLeft = scrollLeft - walk;
  };

  const getProgressPercentage = (): number => {
    const container = scrollContainerRef.current;
    if (!container) return 0;
    
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll === 0) return 0;
    
    return Math.min(100, (scrollPosition / maxScroll) * 100);
  };

  return (
    <div className="bg-gray-50 px-8 h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold text-gray-900 hover:text-blue-500">Our clients say it best</h2>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Left Arrow */}
          {/* <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2  -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button> */}

          {/* Scrollable Testimonials */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-hidden px-12 pb-4 cursor-grab"
            
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[350px] bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition flex-shrink-0"
              >
                {/* Logo */}
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold ${testimonial.logoColor}`}>
                    {testimonial.logo}
                  </h3>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-8 min-h-[160px] max-w-[40vh]">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {/* <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button> */}
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="text-sm text-gray-500">01</span>
          <div className="w-80 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
          <span className="text-sm text-gray-500">
            {testimonials.length.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #2563eb;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #1d4ed8;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;