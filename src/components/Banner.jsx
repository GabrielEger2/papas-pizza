import React from 'react';
import ReactTyped from 'react-typed';
import pepperoniPizzaImg from '../assets/imgs/pizzabg.jpg';

const Banner = () => {
  return (
    <div className=' pt-24 p-4 max-w-[1640px] mx-auto'>
      <div className='max-h-[600px] relative'>
        <div className='absolute w-full h-full text-papaswhite max-h-[600px] bg-papasblack/70 flex flex-col justify-center'>
          <h1 className='p-8 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold'>Looking for a<ReactTyped className=' text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold' strings={['&nbsp;Pizza?', '&nbsp;Sensation?', '&nbsp;Flavor?', 'n Experience?']} typeSpeed={80} backSpeed={100} loop/></h1>
          <h1 className='px-8 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold'>You've come to</h1>
          <h1 className='px-8 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold'>&nbsp;&nbsp;the right <span className='text-papasred title-font'>Place!</span></h1>
        </div>
      <img className='w-full max-h-[600px] object-cover' src={pepperoniPizzaImg} alt="Image of a pepporini pizza" />
      </div>
    </div>
  );
};

export default Banner;