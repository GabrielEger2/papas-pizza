import React, { useState } from 'react'
import { MdOutlineRestaurantMenu, MdClose } from 'react-icons/md'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='bg-papaslightred'>
      <div className='flex justify-between items-center h-20 max-w-[1200px] mx-auto px-6'>
        <h1 className='w-full text-4xl font-bold text-papasred title-font'>Papa's Pizza</h1>
        <ul className='md:flex hidden'>
            <li className='px-4 py-2 text-2xl text-papasred'>Home</li>
            <li className='px-4 py-2 text-2xl text-papasred'>Menu</li>
            <li className='px-4 py-2 text-2xl text-papasred'>Location</li>
            <li>
                <button className='bg-papasred text-papaswhite p-2 text-2xl rounded-lg'>Contact</button>
            </li>
        </ul>
        <div className='text-papasred block md:hidden' onClick={handleNav}>
          {!nav ? <MdOutlineRestaurantMenu size={30} />: <MdClose size={36} />}
        </div>
        <div
          className={
            !nav
              ? 'ease-in-out duration-100 fixed left-[-100%]'
              : 'fixed left-0 top-0 w-[50%] h-full border-r border-r-papasred bg-papaslightred ease-in-out duration-500'
          }
        >
          <h1 className='w-full text-4xl font-bold text-papasred m-4 title-font'>Papa's Pizza</h1>
          <ul className='text-papasred'>
            <li className='p-4 text-2xl border-b border-gray-100'>Home</li>
            <li className='p-4 text-2xl border-b border-gray-100'>Menu</li>
            <li className='p-4 text-2xl border-b border-gray-100'>Location</li>
            <li className='p-4 text-2xl border-b border-gray-100'>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar