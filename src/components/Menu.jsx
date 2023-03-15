import React, { useState } from 'react'
import { data } from '../data/PizzaData'

const Menu = () => {

const [foods, setFoods] = useState(data)

  return (
    <div className='max-w-[1640px] m-auto px-4 py-20'>
        <h1 className='text-papasred font-bold text-6xl text-center'>Best Pizzas in Town:</h1>
        <div className='flex flex-col lg:flex-row justify-between py-8'>
            <div>
                <p className='m-4 text-2xl font-bold text-papasblack'>Choose a size:</p>
                <div className=' py-2 m-4 flex justify-center flex-wrap'>
                    <button className='m-1 bg-transparent hover:bg-papasred text-papasblack font-semibold hover:text-papaswhite py-2 px-4 border border-papasred hover:border-transparent rounded'>Small</button>
                    <button className='m-1 bg-transparent hover:bg-papasred text-papasblack font-semibold hover:text-papaswhite py-2 px-4 border border-papasred hover:border-transparent rounded'>Medium</button>
                    <button className='m-1 bg-transparent hover:bg-papasred text-papasblack font-semibold hover:text-papaswhite py-2 px-4 border border-papasred hover:border-transparent rounded'>Large</button>
                </div>
            </div>

            <div className=' justify-center'>
                <p className='m-4 text-2xl font-bold text-papasblack'>Choose a type:</p>
                <div className=' py-2 flex justify-center flex-wrap'>
                    <button className='m-1 bg-transparent hover:bg-papasred text-papasblack font-semibold hover:text-papaswhite py-2 px-4 border border-papasred hover:border-transparent rounded'>Savoury</button>
                    <button className='m-1 bg-transparent hover:bg-papasred text-papasblack font-semibold hover:text-papaswhite py-2 px-4 border border-papasred hover:border-transparent rounded'>Sweet</button>
                </div>
            </div>


        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index)=> (
                <div key={index} className='border border-papasred shadow-lg bg-papaslightred hover:scale-105 duration-500 rounded-lg'>
                    <img src={item.image} alt={item.name} className='w-full h-[300px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold text text-lg'>{item.name}</p>
                        <p>
                            <span className='bg-papasred font-bold text-papaswhite p-2 rounded-lg text-lg'>${item.price.medium}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div> 
    </div>
  )
}

export default Menu