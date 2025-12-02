import { LocationEdit, Mail, Phone, X } from 'lucide-react'
import React from 'react'

export const DesignPageFooter: React.FC = () => {
  const skills = [
    "Artificial intelligence",
    "Cloud technologies",
    "Mobile App Development",
    "Web Development",
    "Desktop App Development",
    "Machine Learning",
    "Data Analytics",
    "Data Visualization",
    "Software Testing and QA",
  ];

  return (
    <div>
      <footer className="relative text-gray-300 pt-16">

        <div className="absolute left-0 top-10 w-[400px] h-[400px] 
              bg-blue-700/40 blur-[160px] rounded-full"></div>

        <div className="absolute right-0 top-20 w-[400px] h-[400px] 
              bg-blue-500/40 blur-[160px] rounded-full"></div>

        <div className="relative z-10 w-10/12 mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 border-y py-10">
          <div className='flex w-full'><h3 className='w-full text-lg leading-tight'>B2C.design Incorporation <br /><span className='text-xs'>Powered by B2C </span> </h3></div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg  text-gray-300 mb-4">B2C services</h3>
            <div className='flex flex-col gap-2'>
              {skills.map((v, idx) => (
                <p key={idx} className='hover:text-blue-500 transition hover:cursor-pointer'>
                  {v}
                </p>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg  text-gray-300 mb-4">B2C industries</h3>
            <div className='flex flex-col gap-2'>
              {["Fintech",
                "Trading",
                "Healthcare"].map((v, idx) => (
                  <p key={idx} className='hover:text-blue-500 transition hover:cursor-pointer'>
                    {v}
                  </p>
                ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex gap-3 flex-col">
              <a href="#" className="hover:text-blue-500 transition">
                <span className='flex gap-2'><LocationEdit size={20} />CA, San Diego, 92121 4445 Eastgate Mall, Suite 200</span>
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <span className='flex gap-2'><Phone size={20} />+92 213 231 321</span>
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <span className='flex gap-2'><Mail size={20} />+b2cincorporation.com</span>
              </a>
            </div>
          </div>

        </div>
        <div className='w-10/12 mx-auto text-gray-400 flex justify-between py-7'>

          <p className="text-lg ">
            &copy; {new Date().getFullYear()} Effectivesoft. All rights
            reserved.
          </p>
          <div className='flex gap-2'>
            <X className='h-5 w-5' />
            <X className='h-5 w-5' />
            <X className='h-5 w-5' />
          </div>
        </div>
      </footer>
    </div>
  )
}
