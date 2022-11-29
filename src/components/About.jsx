import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-[200px]'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-3xl font-bold inline border-b-4 border-[#f2763a]'>
                Who am I?
              </p>
            </div>
            <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Pael, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Innovative, task-driven with 3 years of experience in web development across diverse industries. Proficient in developing databases, creating user interfaces, writing and testing codes, troubleshooting simple/complex issues, and implementing new features based on user feedback.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;