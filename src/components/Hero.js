import React from 'react';

import heroVid from '../assets/video.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1>We Are Leet Data</h1>
        <h1 className='py-2'>
          Your <span className='blue'>Software</span> Boutique
        </h1>
        <p className='text-xl py-4'>
           We have several functional web applications in production and also significantly improve your software quality and productivity.
        </p>
        <div>
          <button className='m-2 hover:bg-violet-600'>Get Started</button>
          <button className='m-2'>FAQ</button>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;