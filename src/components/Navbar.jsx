import React, { useState, useEffect } from 'react';
import { MdOutlineRestaurantMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
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
  
  return (
    <div className="bg-gray-50 fixed top-0 w-full z-50 shadow-lg">
      <div className="flex justify-between items-center h-20 max-w-[1200px] mx-auto px-6">
        <h1 className="w-full text-4xl font-bold text-papasred title-font">
          <a href="#home">Papa's Pizza</a>
        </h1>
        <ul className="md:flex hidden justify-center items-center">
          <li className="px-4 py-2 text-2xl text-papasred hover:underline">
            <a href="#home">Home</a>
          </li>
          <li className="px-4 py-2 text-2xl text-papasred hover:underline">
            <a href="#menu">Menu</a>
          </li>
          <li className="px-4 py-2 text-2xl text-papasred hover:underline">
            <a href="#contact">Contact</a>
          </li>
          <li className="flex justify-center items-center pl-4">
            <a href="#" className=" bg-papasred text-papaswhite px-4 py-2 text-2xl rounded-lg hover:px-6 hover:py-3 ease-in-out duration-500">
              Order
            </a>
          </li>
        </ul>
        <div className="text-papaswhite bg-papasred p-1 rounded-full block md:hidden cursor-pointer" onClick={handleNav}>
          {!nav ? <MdOutlineRestaurantMenu size={32} /> : <MdClose size={32} />}
        </div>
        <div className="z-50 block md:hidden">
          <div
            className={
              !nav
                ? 'ease-in-out duration-100 fixed left-[-100%]'
                : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-papasred bg-gray-50 ease-in-out duration-500'
            }
          >
            <h1 className="w-full text-4xl font-bold text-papasred m-5 title-font">
              Papa's Pizza
            </h1>
            <ul className="text-papasred">
              <li className="p-4 text-2xl border-b border-papasred">
                <a href="#home">Home</a>
              </li>
              <li className="p-4 text-2xl border-b border-papasred">
                <a href="#menu">Menu</a>
              </li>
              <li className="p-4 text-2xl border-b border-papasred">
                <a href="#contact">Contact</a>
              </li>
              <li className="p-4 text-2xl border-b border-papasred">
                <a href="">Order</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar