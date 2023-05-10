import React from 'react'
import Footer from '../components/Footer'

import pepperoniPizzaImg from '../assets/imgs/pizzabg.jpg';
import StonePizzaOven from '../assets/imgs/StonePizzaOver.png'

const order = () => {
  return (
    <div>
      <nav className="z-40 hidden md:block fixed inset-y-0 right-0 w-[450px] float-right bg-papaslightred border-l border-l-papasred">
        <h2 className='flex justify-center mt-16 text-5xl font-bold'>
            Your Order
        </h2>
        <img className='z-50 items-center flex justify-center mt-52 translate-x-2' src={StonePizzaOven} alt="Stone Oven" />
      </nav>
      <main className="flex-1 pr-[450px]">
        <div className='absolute h-full w-full text-papaswhite max-h-60 bg-papasblack/70 flex flex-col justify-center'>
            <h1 className='px-8 text-7xl title-font font-bold tracking-wide'>Papa's Pizza Delivery</h1>
        </div>
        <img className='w-full max-h-60 object-cover' src={pepperoniPizzaImg} alt="Pepporini pizza" />
        <nav className='flex justify-center'>
            <ul className='px-20 pt-2 text-xl border-b border-b-papasligthred flex'>
                <li className='px-6 hover:underline focus:underline pb-1 flex-row'>
                <a href="">Savoury Pizza</a>
                </li>
                <li className='px-6 hover:underline focus:underline pb-1 flex-row'>
                <a href="">Sweet Pizza</a>
                </li>
                <li className='px-6 hover:underline focus:underline pb-1 flex-row'>
                <a href="">Soda</a>
                </li>
            </ul>
        </nav>
        <Footer />
      </main>
    </div>
  )
}

export default order