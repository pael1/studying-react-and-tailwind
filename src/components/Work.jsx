import React from 'react';
import CeedBS from '../assets/ceedbs.PNG';
import eSMS from '../assets/esms.PNG';
import Ports from '../assets/ports.PNG';
import ck from '../assets/ck.PNG';
import ht from '../assets/ht.PNG';
import mh from '../assets/mh.PNG';
import po from '../assets/po.PNG';

const Work = () => {
  return (
    <div name='work' className='w-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
        <div className='pb-8 mt-[100px]'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#f2763a]'>
            Work
          </p>
        </div>



        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-[#040c16] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
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
          </div>
          {/* 2 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-[#040c16] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
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
              <a href='https://cee.davaocity.gov.ph/esms' className='text-white group border-2 px-2 flex items-center hover:bg-[#f2763a] hover:border-[#f2763a]' rel='noreferrer' target='_blank'>
                Preview
              </a>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-[#040c16] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
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
              <a href='https://cee.davaocity.gov.ph/CEEDBS' className='text-white group border-2 px-2 flex items-center hover:bg-[#f2763a] hover:border-[#f2763a]' rel='noreferrer' target='_blank'>
                Preview
              </a>
            </div>
          </div>

          {/* ck */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-[#040c16] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img className="w-full" src={ck} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 underline">CK</div>
              <p className="text-white text-base">
                Corporate Keys based on Australia this is a booking site.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PHP</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REST/SOAP API</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bootstrap</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JS</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JQUERY</span>
            </div>
            <div className='flex justify-center'>
              <a href='https://corporatekeysaustralia.com.au/' className='text-white group border-2 px-2 flex items-center hover:bg-[#f2763a] hover:border-[#f2763a]' rel='noreferrer' target='_blank'>
                Preview
              </a>
            </div>
          </div>

          {/* hamptons */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-[#040c16] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img className="w-full" src={ht} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 underline">Hamptons Apartments</div>
              <p className="text-white text-base">
                Hamptons Apartments based on Australia this is a booking site for apartments.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Laravel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REST/SOAP API</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bootstrap</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JS</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JQUERY</span>
            </div>
            <div className='flex justify-center'>
              <a href='https://www.thehamptonsapartments.com.au/' className='text-white group border-2 px-2 flex items-center hover:bg-[#f2763a] hover:border-[#f2763a]' rel='noreferrer' target='_blank'>
                Preview
              </a>
            </div>
          </div>

          {/* manhattan */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-[#040c16] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img className="w-full" src={mh} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 underline">Manhattan Apartments</div>
              <p className="text-white text-base">
                Manhattan Apartments based on Australia this is a booking site for apartments.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Laravel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REST/SOAP API</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bootstrap</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JS</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JQUERY</span>
            </div>
            <div className='flex justify-center'>
              <a href='https://www.manhattanapartments.com.au/' className='text-white group border-2 px-2 flex items-center hover:bg-[#f2763a] hover:border-[#f2763a]' rel='noreferrer' target='_blank'>
                Preview
              </a>
            </div>
          </div>

          {/* hamptons */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-[#040c16] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img className="w-full" src={po} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 underline">Post Office Apartments</div>
              <p className="text-white text-base">
                  Post Office Apartments based on Australia this is a booking site for apartments.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Laravel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REST/SOAP API</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bootstrap</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JS</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JQUERY</span>
            </div>
            <div className='flex justify-center'>
              <a href='https://www.thepostofficeapartments.com.au/' className='text-white group border-2 px-2 flex items-center hover:bg-[#f2763a] hover:border-[#f2763a]' rel='noreferrer' target='_blank'>
                Preview
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Work;