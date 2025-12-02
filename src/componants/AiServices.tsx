import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const  AIServicesSection:React.FC=()=> {
  const [expandedItem, setExpandedItem] = useState<number>(1);

  const services = [
    {
      id: 1,
      number: '01',
      title: 'Machine learning (ML)',
      description: 'Using massive amounts of data and complex algorithms, ML solutions enable computers to learn patterns and extract insights, improving decision-making, business processes, and profitability. Applying our vast experience in end-to-end ML development services, we create intelligent systems that gather and analyze data from previous experiences and transform it into valuable insights.'
    },
    {
      id: 2,
      number: '02',
      title: 'Natural language processing (NLP)',
      description: 'NLP enables machines to understand, interpret, and generate human language. Our NLP solutions help businesses automate customer service, analyze sentiment, extract information from documents, and create intelligent chatbots that enhance user experience.'
    },
    {
      id: 3,
      number: '03',
      title: 'Generative AI',
      description: 'Leverage cutting-edge generative AI technologies to create new content, designs, and solutions. From text generation to image synthesis, our generative AI services help you innovate faster and explore new possibilities in content creation and product development.'
    },
    {
      id: 4,
      number: '04',
      title: 'Neural network',
      description: 'Deep neural networks power the most sophisticated AI applications. Our expertise in designing and training neural networks enables us to build complex systems for pattern recognition, predictive analytics, and autonomous decision-making across various industries.'
    },
    {
      id: 5,
      number: '05',
      title: 'Computer vision',
      description: 'Transform visual data into actionable insights with our computer vision solutions. From object detection and facial recognition to quality inspection and autonomous vehicles, we help you unlock the potential of visual intelligence in your business operations.'
    },
    {
      id: 2,
      number: '02',
      title: 'Natural language processing (NLP)',
      description: 'NLP enables machines to understand, interpret, and generate human language. Our NLP solutions help businesses automate customer service, analyze sentiment, extract information from documents, and create intelligent chatbots that enhance user experience.'
    },
    {
      id: 3,
      number: '03',
      title: 'Generative AI',
      description: 'Leverage cutting-edge generative AI technologies to create new content, designs, and solutions. From text generation to image synthesis, our generative AI services help you innovate faster and explore new possibilities in content creation and product development.'
    },
    {
      id: 4,
      number: '04',
      title: 'Neural network',
      description: 'Deep neural networks power the most sophisticated AI applications. Our expertise in designing and training neural networks enables us to build complex systems for pattern recognition, predictive analytics, and autonomous decision-making across various industries.'
    },
    {
      id: 5,
      number: '05',
      title: 'Computer vision',
      description: 'Transform visual data into actionable insights with our computer vision solutions. From object detection and facial recognition to quality inspection and autonomous vehicles, we help you unlock the potential of visual intelligence in your business operations.'
    },{
      id: 2,
      number: '02',
      title: 'Natural language processing (NLP)',
      description: 'NLP enables machines to understand, interpret, and generate human language. Our NLP solutions help businesses automate customer service, analyze sentiment, extract information from documents, and create intelligent chatbots that enhance user experience.'
    },
    {
      id: 3,
      number: '03',
      title: 'Generative AI',
      description: 'Leverage cutting-edge generative AI technologies to create new content, designs, and solutions. From text generation to image synthesis, our generative AI services help you innovate faster and explore new possibilities in content creation and product development.'
    },
    {
      id: 4,
      number: '04',
      title: 'Neural network',
      description: 'Deep neural networks power the most sophisticated AI applications. Our expertise in designing and training neural networks enables us to build complex systems for pattern recognition, predictive analytics, and autonomous decision-making across various industries.'
    },
    {
      id: 5,
      number: '05',
      title: 'Computer vision',
      description: 'Transform visual data into actionable insights with our computer vision solutions. From object detection and facial recognition to quality inspection and autonomous vehicles, we help you unlock the potential of visual intelligence in your business operations.'
    },
    {
      id: 2,
      number: '02',
      title: 'Natural language processing (NLP)',
      description: 'NLP enables machines to understand, interpret, and generate human language. Our NLP solutions help businesses automate customer service, analyze sentiment, extract information from documents, and create intelligent chatbots that enhance user experience.'
    },
    {
      id: 3,
      number: '03',
      title: 'Generative AI',
      description: 'Leverage cutting-edge generative AI technologies to create new content, designs, and solutions. From text generation to image synthesis, our generative AI services help you innovate faster and explore new possibilities in content creation and product development.'
    },
    {
      id: 4,
      number: '04',
      title: 'Neural network',
      description: 'Deep neural networks power the most sophisticated AI applications. Our expertise in designing and training neural networks enables us to build complex systems for pattern recognition, predictive analytics, and autonomous decision-making across various industries.'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">SERVICES</p>
          <div className="grid grid-cols-2 gap-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Our AI software development services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our services encompass the full spectrum of artificial intelligence app development services, from data preparation to deployment, emphasizing security, performance, and ethics, all tailored to meet your business goals.
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Column - Services List */}
          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="border-t border-gray-200 pt-6 cursor-pointer group"
                onClick={() => setExpandedItem(service.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <span className="text-blue-600 font-semibold text-lg">
                      {service.number}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition" />
                </div>
                
                {expandedItem === service.id && (
                  <div className="ml-12">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Sticky Image */}
          <div className="sticky top-0">
            <div className="relative w-full h-screen rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                alt="AI Technology"
                className="w-full h-full object-cover"
              />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}