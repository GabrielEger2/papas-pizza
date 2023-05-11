import React from 'react'
import { Link } from 'react-router-dom';

import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

import pepperoniPizzaImg from '../assets/imgs/pizzabg.jpg';
import StonePizzaOven from '../assets/imgs/StonePizzaOver.png'
import OrderBox from '../components/OrderBox';

const order = () => {
  return (
    <div>
      <nav className="z-40 hidden md:block fixed inset-y-0 right-0 w-[450px] float-right bg-papaslightred border-l border-l-gray-300">
        <div className='px-20'>
          <h2 className='flex justify-center mt-16 text-5xl pb-2 font-bold border-b-2 border-b-black'>
            Your Order
          </h2>
          <button className='flex justify-center w-full mt-12 text-2xl border-2 border-black rounded-md p-1'>
            Delivery Location
          </button>
        </div>
        <img className='z-50 items-center flex justify-center mt-40 translate-x-2' src={StonePizzaOven} alt="Stone Oven" />
      </nav>
      <main className="flex-1 pr-[450px]">
        <div className='absolute h-full w-full text-papaswhite max-h-60 bg-papasblack/70 flex flex-col justify-center'>
            <Link to="/" className='pl-16 text-7xl title-font font-bold tracking-wide'>Papa's Pizza</Link>
        </div>
        <img className='w-full max-h-60 object-cover' src={pepperoniPizzaImg} alt="Pepporini pizza" />
        <nav className='flex justify-center'>
            <ul className='px-20 pt-2 text-xl border-b border-b-papasligthred flex'>
                <li className='px-6 hover:underline focus:underline pb-1 flex-row'>
                  <a href="#deals">Deals and Discounts</a>
                </li>
                <li className='px-6 hover:underline focus:underline pb-1 flex-row'>
                  <a href="#savoury">Savoury Pizza</a>
                </li>
                <li className='px-6 hover:underline focus:underline pb-1 flex-row'>
                  <a href="#sweet">Sweet Pizza</a>
                </li>
                <li className='px-6 hover:underline focus:underline pb-1 flex-row'>
                  <a href="#soda">Soda</a>
                </li>
            </ul>
        </nav>
        <div className='mt-10'>
        <Carousel />
        </div>
        <div className='px-20 mt-10 mb-10'>
          <section id='deals' className='mb-10'>
            <h2 className='text-2xl font-bold'>
              Deals and Discounts:
            </h2>
            <div className='flex pt-10 space-x-4'> 
            <OrderBox
              image="https://cdn-icons-png.flaticon.com/512/2615/2615079.png"
              title="Large Pepperoni Pizza"
              description="Large Pepperoni Pizza with $3 dollars off"
              price="$10"
            />
            </div>
          </section>
          <section id='savoury' className='mb-10'>
            <h2 className='text-2xl font-bold'>
              Savoury Pizza:
            </h2>
            <div className='flex pt-10 space-x-4'> 
              <OrderBox
                image="https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg"
                title="Small"
                description="Small Savoury Pizza"
                price="$10"
              />
              <OrderBox
              image="https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg"
              title="Medium"
              description="Medium Savoury Pizza"
              price="$10"
              />
              <OrderBox
              image="https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg"
              title="Large"
              description="Large Savoury Pizza"
              price="$10"
              />
            </div>
          </section>
          <section id='sweet' className='mb-10'>
            <h2 className='text-2xl font-bold'>
              Sweet Pizza:
            </h2>
            <div className='flex pt-10 space-x-4'> 
              <OrderBox
              image="https://img.taste.com.au/FHsG8Xut/w643-h428-cfill-q90/taste/2016/11/nutty-choc-pizza-with-fresh-berries-92045-1.jpeg"
              title="Small"
              description="Small Sweet Pizza"
              price="$10"
              />
              <OrderBox
              image="https://img.taste.com.au/FHsG8Xut/w643-h428-cfill-q90/taste/2016/11/nutty-choc-pizza-with-fresh-berries-92045-1.jpeg"
              title="Medium"
              description="Medium Sweet Pizza"
              price="$10"
              />
              <OrderBox
              image="https://img.taste.com.au/FHsG8Xut/w643-h428-cfill-q90/taste/2016/11/nutty-choc-pizza-with-fresh-berries-92045-1.jpeg"
              title="Large"
              description="Large Sweet Pizza"
              price="$10"
              />
            </div>
          </section>
          <section id='soda' className='mb-10'>
            <h2 className='text-2xl font-bold'>
              Soda:
            </h2>
            <div className='flex pt-10 space-x-4'> 
              <OrderBox
              image="https://logowik.com/content/uploads/images/coca-cola-red-circle1983.logowik.com.webp"
              title="1L"
              description="1 Litre Soda"
              price="$1.5"
              />
              <OrderBox
              image="https://logowik.com/content/uploads/images/coca-cola-red-circle1983.logowik.com.webp"
              title="2L"
              description="2 Litre Soda"
              price="$2.5"
              />
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default order