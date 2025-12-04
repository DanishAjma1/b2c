import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState } from 'react'

export const TechnologiesUsed: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const technologies = [
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Keras', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg' },
        { name: 'Rasa', logo: 'https://avatars.githubusercontent.com/u/21214474?s=200&v=4' },
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'MXNet', logo: 'https://raw.githubusercontent.com/dmlc/web-data/master/mxnet/image/mxnet_logo_2.png' },
        { name: 'NVIDIA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg' },
        { name: 'Caffe', logo: 'https://avatars.githubusercontent.com/u/6392063?s=200&v=4' },
        { name: 'Theano', logo: 'https://avatars.githubusercontent.com/u/10744616?s=200&v=4' },
        { name: 'OpenNN', logo: 'https://www.opennn.net/images/OpenNN.png' },
        { name: 'MLlib', logo: 'https://spark.apache.org/images/spark-logo-trademark.png' },
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'MXNet', logo: 'https://raw.githubusercontent.com/dmlc/web-data/master/mxnet/image/mxnet_logo_2.png' },
        { name: 'NVIDIA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg' },
        { name: 'Caffe', logo: 'https://avatars.githubusercontent.com/u/6392063?s=200&v=4' },
        { name: 'Theano', logo: 'https://avatars.githubusercontent.com/u/10744616?s=200&v=4' },
        { name: 'OpenNN', logo: 'https://www.opennn.net/images/OpenNN.png' },
    ]
    const totalSlides = technologies.length;

    const scroll =(direction:"left"|"right")=>{
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = Math.round(container.offsetWidth /12)
        if (direction === "left" && currentSlide !== 0)
      setCurrentSlide((prev) => prev - 1)
    else if(direction==="right" && currentSlide !== totalSlides/2)
      setCurrentSlide((prev) => prev + 1 )

    container.scrollBy({
        left:direction==="left"? -scrollAmount: scrollAmount,
        behavior:'smooth'
    })
    }
    return (
        <div className='w-10/12 ml-auto font-pt py-16'>
            <div className='flex flex-col gap-3 py-10'>
                <h5 className='text-sm font-semibold tracking-wider uppercase '>TECH STACK</h5>
                <h2 className='text-4xl font-bold'>Industries we develop for</h2>
            </div>
            <div
                ref={scrollRef}
                className="flex overflow-x-hidden snap-x snap-mandatory py-16"
            >
                {technologies.map((value, idx) => (
                    <div
                        key={idx}
                        className="rounded-lg flex-shrink-0 justify-center items-center cursor-pointer hover:bg-gray-50 p-5 pb-0"
                    >
                        <img
                            src={value.logo}
                            alt={value.name}
                            className="w-24 h-24 object-cover flex grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-between w-2/3'>
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
              onClick={() => scroll('left')}
              // disabled={currentSlide <=4 }
              className="p-2 rounded-full hover:bg-gray-200 transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => scroll('right')}
              // disabled={currentSlide === totalSlides - 1}
              className="p-2 rounded-full hover:bg-gray-200 transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
            </div>
            

        </div>
    )
}
