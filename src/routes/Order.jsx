import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

import pepperoniPizzaImg from '../assets/imgs/pizzabg.jpg';
import StonePizzaOven from '../assets/imgs/StonePizzaOver.png';
import OrderBox from '../components/OrderBox';

const Order = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nav, setNav] = useState(false);  // Setting up a state variable for the navigation menu

  const handleNav = () => {
    setNav(!nav);  // Toggling the value of the navigation menu state variable
  };

  useEffect(() => {
    const handleLinkClick = (event) => {  // Defining a function to handle click events on the navigation menu links
      event.preventDefault();
      const target = event.target.hash;
      const element = document.querySelector(target);
      if (element) {
        const topOffset = element.offsetTop;
        window.scrollTo({  // Scrolling the window to the target element
          top: topOffset,
          behavior: 'smooth',
        });
      }
    };
    const links = document.querySelectorAll('a[href^="#"]');  // Selecting all the navigation menu links with the href attribute starting with "#"
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);  // Adding the event listener to each link
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);  // Removing the event listener from each link on component unmount
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 240) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = `z-50 flex justify-center ${
    isScrolled ? 'bg-gray-50 fixed top-0 w-full z-30 shadow-lg pr-[450px]' : ''
  }`;

  return (
    <div>
      <nav className="z-40 hidden md:block fixed inset-y-0 right-0 w-[450px] float-right bg-gray-50 border-l border-l-gray-300">
        <div className='px-20'>
          <h2 className='flex justify-center mt-16 text-5xl pb-2 font-bold border-b-2 border-b-black'>
            Your Order
          </h2>
          <button className='flex justify-center w-full mt-12 text-2xl border-2 border-black rounded-md p-1 hover:text-3xl hover:p-2 ease-in-out duration-500'>
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
        <nav className={navbarClass}>
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
              image="https://img.freepik.com/vetores-gratis/modelo-de-banner-de-vendas_1176-108.jpg?w=2000"
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

export default Order