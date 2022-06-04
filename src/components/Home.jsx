import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typed from 'react-typed';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
        {/* <p className='text-pink-600'>Hi, my name is</p> */}
        <h1 className="flex font-semibold text-pink-600 text-2xl">
          Hi  <span className='animate-waving-hand'>👋🏻</span> my name is
        </h1>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Rafael Fernandez
        </h1>
        <div className='flex items-center'>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a
          </h2>
          <Typed
            className='text-4xl sm:text-7xl font-bold text-pink-600 pl-3'
            // strings={['Full Stack Developer.', 'BTC', 'SASS']}
            strings={['Full Stack Developer.']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View my works
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;