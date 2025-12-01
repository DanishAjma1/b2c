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
  const [activeTab, setActiveTab] = useState<string>('Americas');
  const [email, setEmail] = useState<string>('');

  const locations: RegionLocations = {
    Americas: [
      {
        city: 'San Diego, California',
        address: '4445 Eastgate Mall, Suite 200\n92121',
        phone: '1-800-288-9659'
      },
      {
        city: 'San Francisco, California',
        address: '50 California St #1500\n94111',
        phone: '1-800-288-9659'
      },
      {
        city: 'Pittsburgh, Pennsylvania',
        address: 'One Oxford Centre, 500 Grant St Suite 2900\n15219',
        phone: '1-800-288-9659'
      },
      {
        city: 'Durham, North Carolina',
        address: 'RTP Meridian, 2530 Meridian Pkwy Suite 300\n27713',
        phone: '1-800-288-9659'
      },
      {
        city: 'San Jose, Costa Rica',
        address: 'Escazú Corporate Centre, Piso 6\n40602',
        phone: '1-800-288-9659'
      }
    ],
    Europe: [
      {
        city: 'London, United Kingdom',
        address: '1 Knightsbridge Green\nSW1X 7QA',
        phone: '+44 20 7123 4567'
      },
      {
        city: 'Berlin, Germany',
        address: 'Friedrichstrasse 95\n10117',
        phone: '+49 30 1234 5678'
      },
      {
        city: 'Paris, France',
        address: '75 Avenue des Champs-Élysées\n75008',
        phone: '+33 1 23 45 67 89'
      }
    ],
    'Middle East': [
      {
        city: 'Dubai, UAE',
        address: 'Dubai Silicon Oasis\nDubai',
        phone: '+971 4 123 4567'
      },
      {
        city: 'Tel Aviv, Israel',
        address: 'Rothschild Boulevard 45\n6578403',
        phone: '+972 3 123 4567'
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