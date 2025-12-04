import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  moreTagsCount?: number;
}

export const FeaturedProjects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-powered online tool to prepare for job interviews',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
      tags: ['Data related', 'Development'],
      moreTagsCount: 6
    },
    {
      id: 2,
      title: 'Big data analytics for gaming company',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80',
      tags: ['Media & Entertainment', 'Data services'],
      moreTagsCount: 4
    },
    {
      id: 3,
      title: 'Improved data management and data analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      tags: ['Data services', 'MS SQL Server'],
      moreTagsCount: 3
    },
    {
      id: 4,
      title: 'Healthcare data warehouse integrated with Power BI',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      tags: ['Microsoft Azure', 'Data services'],
      moreTagsCount: 5
    },
    {
      id: 5,
      title: 'Machine learning model for predictive maintenance',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
      tags: ['AI/ML', 'IoT'],
      moreTagsCount: 4
    },
    {
      id: 6,
      title: 'Improved data management and data analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      tags: ['Data services', 'MS SQL Server'],
      moreTagsCount: 3
    },
    {
      id: 7,
      title: 'Healthcare data warehouse integrated with Power BI',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      tags: ['Microsoft Azure', 'Data services'],
      moreTagsCount: 5
    },
    {
      id: 8,
      title: 'Machine learning model for predictive maintenance',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
      tags: ['AI/ML', 'IoT'],
      moreTagsCount: 4
    }
  ];

  const totalSlides = projects.length;

  const scroll = (direction: 'prev' | 'next') => {
    const current = scrollRef.current;
    if (!current) return;

    const scrollAmount = Math.round(current.offsetWidth / 4);
    if (direction === "prev" && currentSlide !== 0)
      setCurrentSlide((prev) => prev - 1)
    else if(direction==="next" && currentSlide !== totalSlides/2)
      setCurrentSlide((prev) => prev + 1 )
    current.scrollBy({
      left: direction === "prev" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="w-10/12 ml-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">PORTFOLIO</p>
          <h2 className="text-4xl font-bold text-gray-900">Featured projects</h2>
        </div>

        {/* Projects Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden snap-x snap-mandatory pb-4"
          style={{
            scrollBehavior: 'smooth',
            scrollbarWidth: 'thin',
            scrollbarColor: '#3B82F6 #E5E7EB'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 max-w-[40vh] snap-start group"
            >
              <div className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ">
                {/* Project Image */}
                <div className="relative h-full overflow-hidden ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:opacity-100 transition duration-400 opacity-0">
                      <div className="flex items-center gap-3">
                        <span className="text-white text-3xl font-bold">{project.tags[0]}</span>
                      </div>
                    </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-4 ${project.id === 2 ? 'text-blue-600' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.moreTagsCount && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        +{project.moreTagsCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex  items-center justify-between mt-8">
          <div className="flex items-center gap-4">
            <span className="text-gray-600 font-medium">
              {String(currentSlide).padStart(2, '0')}
            </span>
            <div className="w-[500px] h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${((currentSlide) / (totalSlides/2)) * 100}%` }}
              />
            </div>
            <span className="text-gray-600 font-medium">
              {String(totalSlides / 2).padStart(2, '0')}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll('prev')}
              // disabled={currentSlide <=4 }
              className="p-2 rounded-full hover:bg-gray-200 transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => scroll('next')}
              // disabled={currentSlide === totalSlides - 1}
              className="p-2 rounded-full hover:bg-gray-200 transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition">
            View more
          </button>
        </div>
      </div>
    </div>
  );
}