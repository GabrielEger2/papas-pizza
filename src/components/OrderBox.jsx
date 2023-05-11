import React from 'react';

const OrderBox = (props) => {
  return (
    <div>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 shadow-lg">
            <img className="object-cover h-28 rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.image} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-600">{props.description}</p>
                <p className="mb-3 font-normal text-papasred">{props.price}</p>
            </div>
        </a>
    </div>
  )
}

export default OrderBox;