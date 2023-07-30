import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

import pepperoniPizzaImg from '../assets/imgs/pizzabg.jpg';
import StonePizzaOven from '../assets/imgs/StonePizzaOver.png';
import OrderBox from '../components/OrderBox';
import DeliveryModal from '../components/DeliveryModal';
import SavedOrder from '../components/SavedOrder';

const Order = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nav, setNav] = useState(false);  // Setting up a state variable for the navigation menu
  const [openModal, setOpenModal] = useState(false);
  const [orderArray, setOrderArray] = useState([]);
  const [orderFinalPrice, setOrderFinalPrice] = useState(0);
  const [pickupInfo, setPickupInfo] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [residenceDetails, setResidenceDetails] = useState(null);

  const handleNav = () => {
    setNav(!nav);  // Toggling the value of the navigation menu state variable
  };

  useEffect(() => {
    // Calculate the final price whenever orderArray changes
    const finalPrice = orderArray.reduce((total, order) => total + order.totalPrice, 0);
    setOrderFinalPrice(finalPrice);
  }, [orderArray]);

  const updateOrder = (order) => {
    setOrderArray((prevOrderArray) => [...prevOrderArray, order]);
  };

  const removeOrder = (index) => {
    // Create a copy of the orderArray
    const updatedOrderArray = [...orderArray];
    // Remove the order at the specified index
    updatedOrderArray.splice(index, 1);
    // Update the orderArray state
    setOrderArray(updatedOrderArray);
  };


  useEffect(() => {
    const handleLinkClick = (event) => {  // Defining a function to handle click events on the navigation menu links
      event.preventDefault();
      const target = event.target.hash;
      const element = document.querySelector(target);
      if (element) {
        const topOffset = element.offsetTop;
        window.scrollTo({  // Scrolling the window to the target element
          top: topOffset -60,
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

  const navbarClass = `z-20 flex justify-center ${
    isScrolled ? 'bg-gray-50 fixed top-0 w-full z-20 shadow-lg md:pr-[450px]' : ''
  }`;

  const handleSaveModal = (pickupInfo, deliveryAddress, residenceDetails) => {
    // Handle the saved information from the DeliveryModal
    setPickupInfo(null);
    setDeliveryAddress(null);
    setResidenceDetails(null);

    setPickupInfo(pickupInfo);
    setDeliveryAddress(deliveryAddress);
    setResidenceDetails(residenceDetails);
  };

  // Function to save orderArray to localStorage
  const saveOrderToLocalStorage = () => {
    localStorage.setItem('userSelectedOrder', JSON.stringify(orderArray));
  };

  // Load orderArray from localStorage on component mount
  useEffect(() => {
    const storedOrder = localStorage.getItem('userSelectedOrder');
    if (storedOrder) {
      setOrderArray(JSON.parse(storedOrder));
    }
  }, []);

  // Update localStorage whenever orderArray changes
  useEffect(() => {
    saveOrderToLocalStorage();
  }, [orderArray]);

  const notify = () => {
    toast.success("Thank you, your order has been heard loud and clear!");
    setOrderArray([]); // Clearing the orderArray
  };

  return (
    <div>
      <DeliveryModal isOpen={openModal} setCloseModal={() => setOpenModal(!DeliveryModal)} onSave={handleSaveModal} />
      <nav 
      className={
        !nav
          ? 'z-40 fixed right-[-100%] lg:inset-y-0 lg:right-0 lg:w-[450px] lg:float-right bg-gray-50 lg:border-l lg:border-l-gray-300 hidden lg:block ease-in-out duration-500'
          : 'z-40 fixed right-0 top-0 w-[100%] h-full border-r lg:w-[450px] lg:float-right bg-gray-50 lg:border-l lg:border-l-gray-300 ease-in-out duration-500'
      }>
        <div className="z-50 text-papaswhite text-3xl text-center p-1 lg:hidden cursor-pointer flex justify-center" onClick={handleNav}>
          {nav ? (
            <p className="bg-papasred rounded-xl px-16 py-2 fixed top-6 hover:bg-papasdarkred">
              Close Order
            </p>
          ) : (
            <div>
            </div>
          )}
        </div>
        <div className='px-20'>
          <h2 className='flex justify-center mt-24 text-5xl pb-2 font-bold border-b-2 border-b-black lg:mt-16'>
            Your Order
          </h2>
          <button
            onClick={() => setOpenModal(true)}
            className='flex justify-center w-full mt-12 text-2xl border-2 border-black rounded-md p-1 hover:bg-gray-200 ease-in-out duration-500'
          >
            {pickupInfo && !deliveryAddress ? (
              <div>
                Pickup: <br /> {pickupInfo}
              </div>
            ) : (
              deliveryAddress ? (
                <div>
                  Delivery: <br /> {pickupInfo}
                </div>
              ) : (
                <div>
                  Delivery Location
                </div>
              )
            )}
          </button>
          <div className='fixed bottom-0 right-0 z-50 w-full lg:w-[450px] justify-center flex mb-6'>
          <button
            onClick={notify}
            className={`px-4 py-4 text-2xl font-bold rounded-xl text-papaswhite bg-papasred hover:bg-papasdarkred ease-in-out duration-500 ${
              (!pickupInfo && !deliveryAddress) || orderFinalPrice.toFixed(2) < 1 ? 'cursor-not-allowed bg-papasred400 hover:bg-papasred400' : 'cursor-pointer'
            }`}
            disabled={(!pickupInfo && !deliveryAddress) || orderFinalPrice.toFixed(2) < 1}
          >
            Order ${orderFinalPrice.toFixed(2)}
          </button>
          </div>
        </div>
        <div className='px-4 mt-6 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 360px)' }}>
          <div className='px-4'>
            <SavedOrder orderArray={orderArray} removeOrder={removeOrder} />
          </div>
        </div>
        <img className='z-40 absolute hidden mt-16 2xl:mt-36 translate-x-2' src={StonePizzaOven} alt="Stone Oven" />
      </nav>
      <main className="flex-1 pr-0 lg:pr-[450px]">
        <div className='absolute h-full w-full text-papaswhite max-h-60 bg-papasblack/70 flex flex-col justify-center'>
            <Link to="/" className='pl-4 md:pl-8 lg:pl-12 xl:pl-16 text-5xl lg:text-6xl xl:text-7xl title-font font-bold tracking-wide'>Papa's Pizza</Link>
        </div>
        <img className='w-full max-h-60 object-cover' src={pepperoniPizzaImg} alt="Pepporini pizza" />
        <nav className={navbarClass}>
            <ul className='lg:px-20 pt-2 text-xl border-b border-b-gray-300 flex'>
                <li className='px-3 md:px-6 hover:underline focus:underline pb-1 flex-row'>
                  <a href="#deals">Discounts</a>
                </li>
                <li className='px-3 md:px-6 hover:underline focus:underline pb-1 flex-row'>
                  <a href="#savoury">Savoury</a>
                </li>
                <li className='px-3 md:px-6 hover:underline focus:underline pb-1 flex-row'>
                  <a href="#sweet">Sweet</a>
                </li>
                <li className='px-3 md:px-6 hover:underline focus:underline pb-1 flex-row'>
                  <a href="#soda">Soda</a>
                </li>
            </ul>
        </nav>
        <div className='mt-10'>
        <Carousel />
        </div>
        <div className='px-4 lg:pl-20 mt-10 mb-10'>
          <section id='deals' className='mb-10'>
            <h2 className='text-2xl font-bold'>
              Deals and Discounts:
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 pt-10'>   
            <OrderBox
              image="https://cdn-icons-png.flaticon.com/512/600/600219.png"
              title="Large Classic Pizza"
              description="Large Classic Pizzas for $10 dollars" 
              type="deal"
              deal="classic"
              updateOrder={updateOrder}
            />
            </div>
          </section>
          <section id='savoury' className='mb-10'>
            <h2 className='text-2xl font-bold'>
              Savoury Pizza:
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 pt-10'> 
              <OrderBox
                image="https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg"
                title="Small"
                description="Small Savoury Pizza"
                price="$7.99 - $12.99"
                type="savoury"
                size="small"
                updateOrder={updateOrder}
              />
              <OrderBox
                image="https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg"
                title="Medium"
                description="Medium Savoury Pizza"
                price="$9.99 - $14.99"
                type="savoury"
                size="medium"
                updateOrder={updateOrder}
              />
              <OrderBox
                image="https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg"
                title="Large"
                description="Large Savoury Pizza"
                price="$11.99 - $16.99"
                type="savoury"
                size="large"
                updateOrder={updateOrder}
              />
            </div>
          </section>
          <section id='sweet' className='mb-10'>
            <h2 className='text-2xl font-bold'>
              Sweet Pizza:
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 pt-10'> 
              <OrderBox
              image="https://static.itdg.com.br/images/1200-630/ab93c09d82d7004b7c440fe5d3d734ad/131483-original.jpg"
              title="Small"
              description="Small Sweet Pizza"
              price="$7.99 - $9.99"
              type="sweet"
              size="small"
              updateOrder={updateOrder}
              />
              <OrderBox
              image="https://static.itdg.com.br/images/1200-630/ab93c09d82d7004b7c440fe5d3d734ad/131483-original.jpg"
              title="Medium"
              description="Medium Sweet Pizza"
              price="$9.99 - $11.99"
              type="sweet"
              size="medium"
              updateOrder={updateOrder}
              />
              <OrderBox
              image="https://static.itdg.com.br/images/1200-630/ab93c09d82d7004b7c440fe5d3d734ad/131483-original.jpg"
              title="Large"
              description="Large Sweet Pizza"
              price="$11.99 - $13.99"
              type="sweet"
              size="large"
              updateOrder={updateOrder}
              />
            </div>
          </section>
          <section id='soda' className='mb-10'>
            <h2 className='text-2xl font-bold'>
              Soda:
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 pt-10'>   
              <OrderBox
              image="https://logowik.com/content/uploads/images/coca-cola-red-circle1983.logowik.com.webp"
              title="1L"
              description="1 Litre Soda"
              price="$1.49 - $2.99"
              type="soda"
              size="1L"
              updateOrder={updateOrder}
              />
              <OrderBox
              image="https://logowik.com/content/uploads/images/coca-cola-red-circle1983.logowik.com.webp"
              title="2L"
              description="2 Litre Soda"
              price="$2.49 - $3.99"
              type="soda"
              size="2L"
              updateOrder={updateOrder}
              />
            </div>
          </section>
        </div>
        <div className="z-50 text-papaswhite text-3xl text-center p-1 lg:hidden cursor-pointer flex justify-center" onClick={handleNav}>
          {!nav ? (
            <p className="bg-papasred rounded-xl px-16 fixed bottom-4 py-2 hover:bg-papasdarkred">
              Open Order
            </p>
          ) : (
            <div>  
            </div>
          )}
        </div>
        <Footer />
      </main>
      <ToastContainer />
    </div>
  )
}

export default Order