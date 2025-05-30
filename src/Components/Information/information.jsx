import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Information = () => {
  const informationData = [
    {
      id: 1,
      icon: <Mail className="w-10 h-10 text-cta" />,
      title: 'Newsletter',
      comment: 'Weekly curated insights and updates delivered to your inbox',
    },
    {
      id: 2,
      icon: <Mail className="w-10 h-10 text-cta" />,
      title: 'Alerts',
      comment: 'Real-time notifications for important industry developments',
    },
    {
      id: 3,
      icon: <Mail className="w-10 h-10 text-cta" />,
      title: 'Reports',
      comment: 'Access to exclusive industry reports and analysis',
    },
  ];

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your subscription logic here
  };

  return (
    <div className='flex flex-col min-h-[70vh] w-full bg-gradient-to-t from-[#E0F7FA] from-10% via-[#ffffff] via-50% via-transparent via-69% p-6 md:p-8 relative'>
      <div className='flex flex-col justify-center items-center z-1 relative p-4 md:p-5'>
        <h2 className='basic-font text-gray-900 font-bold text-[1.25rem] md:text-[1.45rem] text-center'>Stay Informed with Lancer</h2>
        <p className='basic-font text-[#6B7280] font-normal text-[0.9rem] md:text-[1rem] mt-2 md:mt-3 text-center'>
          Subscribe to our newsletter for the latest updates, industry trends, and expert analysis.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 p-6 md:p-8 w-full max-w-7xl mx-auto'>
        {informationData.map((info) => (
          <div
            key={info.id}
            className='w-full bg-white rounded-lg py-10 md:py-14 px-4 md:px-5 flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
          >
            <div className='w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6'>
              {info.icon}
            </div>
            <h3 className="text-lg md:text-xl basic-font font-semibold text-gray-900 mb-1 md:mb-2 text-center">{info.title}</h3>
            <p className="text-gray-700 basic-font text-sm md:text-base text-center w-3/4">{info.comment}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col mt-8 md:mt-10 justify-center items-center w-full'>
        <div className='flex flex-col lg:flex-row gap-3 md:gap-4 justify-center items-center w-full lg:w-3/5 mx-auto px-3 md:px-4'>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email address'
            className="px-6 py-4 md:px-8 md:py-5 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-cta basic-font w-full text-gray-700 text-sm md:text-base"
          />
          <button
            onClick={handleSubmit}
            className="px-8 py-4 md:px-10 md:py-5 bg-cta hover:bg-[#00b5b5] text-white font-medium rounded-lg transition-all duration-300 w-full lg:w-auto whitespace-nowrap shadow-md hover:shadow-lg basic-font text-sm md:text-base mt-2 lg:mt-0"
          >
            Subscribe Now
          </button>
        </div>
        <p className="text-xs md:text-sm mt-3 md:mt-4 text-center text-gray-600 font-normal">By subscribing, you agree to our Privacy Policy and Terms of Service</p>
      </div>
    </div>
  );
};

export default Information;