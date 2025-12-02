import React from 'react'
import { AIServicesSection } from '../../componants/AiServices'
import { OurProjects } from '../../componants/OurProjects'

export const AIDevelopementServices: React.FC = () => {
  return (
    <div>
      <div className='w-8/12 mx-auto min-h-screen flex flex-col mt-28 items-center'>
      <div className='flex py-16 h-5/6'>
        <div className='flex flex-col w-1/2 h-3/4 gap-3 '>
          <h2 className='text-5xl font-medium'>AI Development Services</h2>
          <p className='text-2xl py-8 w-4/5'>Team up with EffectiveSoft to explore the limitless potential of artificial intelligence (AI)! From AI strategy building and data analysis to AI integration and deployment, our comprehensive artificial intelligence development services are tailored to address challenges across domains.</p>
          <div className='flex gap-5'>
            <button className='bg-blue-700 px-8 py-2 hover:bg-transparent text-white hover:text-black transition'>Let's talk</button>
            <button className='bg-transparent border-2 border-blue-700 font-bold px-8 py-2 hover:bg-blue-700 transition hover:text-whi'>View Portfolio</button>
          </div>
        </div>
        <div className='w-1/2'>
          <img src="/image.png" alt="image" className='max-h-[60vh] object-contain' />
        </div>
      </div>
      <div className='flex my-28 bg-blue-700 p-5'>
        <div className='flex flex-col w-1/2 h-3/4 gap-3 text-white'>
          <h2 className='text-2xl font-medium'>AI Development Services</h2>
          <p className='text-lg pt-6 pb-8'>Team up with EffectiveSoft to explore the limitless potential of artificial intelligence (AI)! From AI strategy building and data analysis to AI integration and deployment, our comprehensive artificial intelligence development services are tailored to address challenges across domains.</p>
        </div>
        <div className='w-1/2 flex justify-center'>
          <img src="/image.png" alt="image"  className='w-40 object-contain' />
        </div>
      </div>
      </div>
      <div>
        <AIServicesSection/>
      </div>
      <div>
        <OurProjects/>
      </div>
    </div>
  )
}
