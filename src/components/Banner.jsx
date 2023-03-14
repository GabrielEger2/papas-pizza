import React from 'react';
import ReactTyped from 'react-typed';
import pepperoniPizzaImg from '../assets/imgs/pizzabg.jpg';

const Banner = () => {
  return (
    <div className='p-4 max-w-[1640px] mx-auto'>
      <div className='max-h-[600px] relative'>
        <div className='absolute w-full h-full text-papaswhite max-h-[600px] bg-papasblack/70 flex flex-col justify-center'>
          <h1 className='p-8 px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Looking for a<ReactTyped className='p-8 px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' strings={['Pizza?', 'Sensation?', 'Flavor?']} typeSpeed={80} backSpeed={100} loop/></h1>
          <h1 className='px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Come to</h1>
          <h1 className='px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>&nbsp;&nbsp;the right <span className='text-papasred'>Place!</span></h1>
        </div>
      <img className='w-full max-h-[600px] object-cover' src={pepperoniPizzaImg} alt="Image of a pepporini pizza" />
      </div>
    </div>
  );
};

export default Banner;