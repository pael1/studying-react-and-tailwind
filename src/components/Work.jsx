import React from 'react';
import CeedBS from '../assets/ceedbs.PNG';
import eSMS from '../assets/esms.PNG';
import Ports from '../assets/ports.PNG';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
        </div>



        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-[#040c16] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 duration-300">
            <img className="w-full" src={Ports} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 underline">PORTS</div>
              <p className="text-white text-base">
                Prosecutor Office Records Tracking System is to track the status of the complaint file.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Laravel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REST/SOAP API</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JS</span>
            </div>
            {/* <div className='flex justify-center'>
              <a href='/' rel='noreferrer' target='_blank'>
                <span className="inline-block bg-pink-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-black hover:text-white">
                  Preview
                </span>
              </a>
            </div> */}
          </div>
          {/* 2 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-[#040c16] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 duration-300">
            <img className="w-full" src={eSMS} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 underline">eSMS</div>
              <p className="text-white text-base">
                electronic Stall Management System is to manage the data all stalls in Davao City Markets.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C#</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ASP.NET</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JS</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">jQuery</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REST/SOAP API</span>
            </div>
            <div className='flex justify-center'>
              <a href='https://cee.davaocity.gov.ph/esms' rel='noreferrer' target='_blank'>
                <span className="inline-block bg-pink-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-black hover:text-white">
                  Preview
                </span>
              </a>
            </div>
          </div>
          {/* 3 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-[#040c16] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 duration-300">
            <img className="w-full" src={CeedBS} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 underline">CeedBS</div>
              <p className="text-white text-base">
                City Economic Enterprise Data Banking System is to track the status of the complaint file and validate
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C#</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ASP.NET</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JS</span>
            </div>
            <div className='flex justify-center'>
              <a href='https://cee.davaocity.gov.ph/CEEDBS' rel='noreferrer' target='_blank'>
                <span className="inline-block bg-pink-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-black hover:text-white">
                  Preview
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;