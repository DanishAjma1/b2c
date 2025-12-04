import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface Location {
  city: string;
  address: string;
  phone: string;
}

interface RegionLocations {
  [key: string]: Location[];
}

export const LocationsSection:React.FC=()=> {
  const [activeTab, setActiveTab] = useState<string>('America');
  const [email, setEmail] = useState<string>('');

  const locations: RegionLocations = {
    America: [
      {
        city: 'Cheyenne, WY 82002, US',
        address: 'Herschler Building East, 122 W 25th St, Suites 100 & 101',
        phone: '+130 74 41 3171'
      },
    
    ],
    UAE: [
      {
        city: 'Al Nahda 1, Dubai, UAE',
        address: 'Office 318,  3rd Floor, Al Noor Building 1,',
        phone: '+971 (0) 50 328 2209'
      },
    ],
    'Middle East': [
      {
        city: 'Dubai, UAE',
        address: 'Dubai Silicon Oasis\nDubai',
        phone: '+971 4 123 4567'
      }
    ]
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="bg-white py-16 px-8 font-pt">
        <div className='max-w-7xl mx-auto'>
      <div className="flex">
        {/* Header Section */}
        <div className="mb-12 w-1/2">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our locations</h2>
              <p className="text-gray-600 mb-6">
                Say hello to our friendly team at one<br />of these locations.
              </p>
              <a 
                href="mailto:rfq@effectivesoft.com" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
              >
                <Mail className="w-5 h-5" />
                <span>rfq@effectivesoft.com</span>
              </a>
            </div>

          </div>
        </div>

        {/* Locations Grid */}
        <div className='flex flex-col w-1/2'>
            
            {/* Tabs */}
            <div className="flex gap-2 pb-8">
              {Object.keys(locations).map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveTab(region)}
                  className={`px-6 py-2 font-medium transition ${
                    activeTab === region
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-20">
          {locations[activeTab].map((location, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-2">
                {location.city}
              </h3>
              <p className="text-gray-600 whitespace-pre-line mb-1">
                {location.address}
              </p>
              <p className="text-gray-600">{location.phone}</p>
            </div>
          ))}
        </div>
        </div>
      </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 bg-gray-200 p-12">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Join our newsletter
              </h3>
              <p className="text-gray-600">
                Stay up to date with the latest news, announcements, and articles.
              </p>
            </div>
            
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-80 px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-600 transition"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}