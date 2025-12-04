import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}

export const FAQAccordion:React.FC=()=> {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      number: '01',
      question: 'How is AI used in software development?',
      answer: 'AI is used in software development to automate repetitive tasks, improve code quality through intelligent suggestions, detect bugs and vulnerabilities, optimize performance, and enhance user experiences through personalized features. AI-powered tools can assist with code completion, automated testing, continuous integration, and predictive analytics to make development faster and more efficient.'
    },
    {
      id: 2,
      number: '02',
      question: 'What are the trends in AI software development?',
      answer: 'Current trends include the rise of Large Language Models (LLMs) for code generation, AutoML for automated machine learning workflows, edge AI for processing data locally on devices, explainable AI (XAI) for transparency, AI-powered DevOps, low-code/no-code AI platforms, and increased focus on responsible AI development with emphasis on ethics, fairness, and privacy.'
    },
    {
      id: 3,
      number: '03',
      question: 'How can AI help a business?',
      answer: 'AI helps businesses by automating routine tasks, providing data-driven insights for better decision-making, personalizing customer experiences, improving operational efficiency, reducing costs, predicting market trends, enhancing product recommendations, optimizing supply chains, detecting fraud, and enabling 24/7 customer support through chatbots and virtual assistants.'
    },
    {
      id: 4,
      number: '04',
      question: 'Are there any potential drawbacks to using AI solutions?',
      answer: 'Potential drawbacks include high initial implementation costs, data privacy and security concerns, the need for large amounts of quality data, risk of algorithmic bias, lack of transparency in decision-making processes, potential job displacement, dependence on technology, maintenance requirements, and the challenge of integrating AI systems with existing infrastructure.'
    },
    {
      id: 5,
      number: '05',
      question: 'How long does it take to implement AI development solutions?',
      answer: 'Implementation time varies significantly based on project complexity, ranging from a few weeks for simple chatbots or basic automation to 6-12 months or more for complex enterprise AI systems. Factors affecting timeline include data availability and quality, infrastructure readiness, team expertise, integration requirements, and the scope of AI features being developed.'
    },
    {
      id: 6,
      number: '06',
      question: 'What is included in your AI software development lifecycle?',
      answer: 'Our AI software development lifecycle includes: 1) Problem definition and feasibility analysis, 2) Data collection and preparation, 3) Model selection and development, 4) Training and validation, 5) Testing and quality assurance, 6) Deployment and integration, 7) Monitoring and maintenance, 8) Continuous improvement and retraining. We follow agile methodologies with regular stakeholder communication throughout the process.'
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="bg-white py-10 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header with Icon */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center transform rotate-12">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500 rounded-full opacity-80"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-indigo-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            F.A.Q. about AI software development
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-start justify-between py-4 text-left hover:opacity-70 transition group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-blue-600 font-semibold text-lg">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-normal text-gray-900 flex-1 group-hover:translate-x-2 transition-transform duration-400">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ml-4 group-hover:-translate-x-2 duration-400 ${
                    openItem === item.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItem === item.id && (
                <div className="ml-12 mt-2 pr-10">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}