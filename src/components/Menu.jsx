import React, { useState } from 'react'
import { data } from '../data/PizzaData'

const Menu = () => {
  const [foods, setFoods] = useState(data);
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeSize, setActiveSize] = useState('medium');

  const filterType = (type) => {
    if (type === activeFilter) {
      // If the same button is clicked twice, remove the filter
      setFoods(data);
      setActiveFilter(null);
    } else {
      // Otherwise, filter the data based on the selected type
      setFoods(
        data.filter((item) => {
          return item.type === type;
        })
      );
      setActiveFilter(type);
    }
  };

  const buttonClass = 'm-1 bg-transparent hover:bg-papasred text-papasblack font-semibold hover:text-papaswhite py-2 px-4 border border-papasred hover:border-transparent rounded';
  const activeButtonClass = 'm-1 bg-papasred text-papaswhite font-semibold py-2 px-4 border border-papasred rounded';

  return (
    <section id='menu'>
        <div className='max-w-[1640px] m-auto px-4 py-20'>
        <h1 className='text-papasred font-bold text-6xl text-center title-font'>Best Pizzas in Town:</h1>
        <div className='flex flex-col lg:flex-row justify-between py-8'>
            <div>
            <p className='m-4 text-2xl font-bold text-papasblack'>Choose a size:</p>
            <div className=' py-2 m-4 flex justify-center flex-wrap'>
                <button onClick={() => setActiveSize('small')} className={activeSize === 'small' ? activeButtonClass : buttonClass}>Small</button>
                <button onClick={() => setActiveSize('medium')} className={activeSize === 'medium' ? activeButtonClass : buttonClass}>Medium</button>
                <button onClick={() => setActiveSize('large')} className={activeSize === 'large' ? activeButtonClass : buttonClass}>Large</button>
            </div>
            </div>

            <div className=' justify-center'>
            <p className='m-4 text-2xl font-bold text-papasblack'>Choose a type:</p>
            <div className=' py-2 flex justify-center flex-wrap'>
                <button onClick={() => filterType('savoury')} className={activeFilter === 'savoury' ? activeButtonClass : buttonClass}>Savoury</button>
                <button onClick={() => filterType('sweet')} className={activeFilter === 'sweet' ? activeButtonClass : buttonClass}>Sweet</button>
            </div>
            </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index) => (
            <div key={index} className='border border-papasred shadow-lg bg-papaslightred hover:scale-105 duration-500 rounded-lg'>
                <img src={item.image} alt={item.name} className='w-full h-[300px] object-cover rounded-t-lg' />
                <div className='flex justify-between px-2 py-4 flex-col md:flex-row'>
                <p className='font-bold text text-lg'>{item.name}</p>
                <p className='pt-4 md:pt-0'>
                <span className='bg-papasred font-bold text-papaswhite p-2 rounded-lg text-lg'>${item.price[activeSize]}</span>
                </p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default Menu
