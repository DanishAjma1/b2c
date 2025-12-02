import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCard {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export const OurProjects:React.FC=()=> {
    const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects: ProjectCard[] = [
    {
      id: 1,
      title: 'AI-powered credit scoring system',
      description: 'Advanced AI annotations allowed us to map complex financial data and the customer...',
      tags: ['Trading & Financial services', 'Data services', 'Data related', 'Power BI'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
    },
    {
      id: 2,
      title: 'AI-powered online tool to prepare for job interviews',
      description: 'The solution we developed analyzes the user\'s test interview and provides comprehensive feedback.',
      tags: ['AI/ML', 'NLP', 'Interview Prep'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80'
    },
    {
      id: 3,
      title: 'Smart healthcare diagnosis platform',
      description: 'Machine learning models help doctors make faster and more accurate diagnoses using patient data.',
      tags: ['Healthcare', 'AI/ML', 'Data Analytics'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80'
    },
    {
      id: 4,
      title: 'Retail inventory optimization',
      description: 'Predictive analytics system that optimizes inventory management and reduces waste.',
      tags: ['Retail', 'Supply Chain', 'Predictive AI'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
    },
    {
      id: 5,
      title: 'Autonomous vehicle detection',
      description: 'Computer vision system for real-time object detection and classification in autonomous driving.',
      tags: ['Computer Vision', 'Automotive', 'Deep Learning'],
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollRef.current) return;

      const container = containerRef.current;
      const scrollContainer = scrollRef.current;
      const rect = container.getBoundingClientRect();
      
      // Check if container is in viewport
      if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        // Calculate scroll progress through the container
        const containerHeight = container.offsetHeight;
        const scrollProgress = -rect.top / (containerHeight - window.innerHeight);
        
        // Calculate horizontal scroll amount
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const scrollAmount = scrollProgress * maxScrollLeft;
        
        // Apply horizontal scroll
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">

      {/* Sticky horizontal scroll container */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: '300vh' }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="h-full flex items-center">
            <div
              ref={scrollRef}
              className="flex gap-8 px-8 overflow-x-hidden"
              style={{ 
                width: '100%',
                scrollBehavior: 'auto'
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative flex-shrink-0 w-screen h-screen rounded-lg overflow-hidden group cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Tags */}
                  <div className="absolute top-8 left-8 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-200 mb-6">{project.description}</p>
                    
                    {/* View Project Button */}
                    <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition group/btn">
                      <span>View project</span>
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}