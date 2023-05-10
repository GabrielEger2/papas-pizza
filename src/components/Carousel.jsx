import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { data } from '../data/PizzaData';

const lastSixElements = data.slice(-10).reverse();

const Carousel = () => {
    const constraintsRef = useRef();
    
  return (
    <div className='w-full max-h-72 flex px-4'>
        <div ref={constraintsRef} className='overflow-hidden flex max-h-72' style={{ margin: '0 5%' }}>
            <div ref={constraintsRef} className="flex" style={{width: '100%'}}>
                <motion.div drag='x' dragConstraints={constraintsRef} className='flex gap-4 md:gap-8'>
                    {lastSixElements.map((element) => {
                        return (
                            <motion.div key={element.id} className='w-40 md:w-60 p-2 bg-papaslightred rounded-lg cursor-grab overflow-hidden h-52 md:h-60'>
                                <img className='h-28 md:h-40 object-cover rounded-xl pointer-events-none' src={element.image} alt='New pizza flavor'/>
                                <h1 className='p-1 text-base md:text-2xl text-center'>New Flavor:</h1>
                                <h1 className='text-center'>{element.name}</h1>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default Carousel;