import React, { useState } from 'react';
import OrderCard from './OrderCard';

const OrderBox = ({ updateOrder, ...props }) => {
  const [openOrderCard, setOpenOrderCard] = useState(false);

  const handleUpdateOrder = (order) => {
    updateOrder(order);
  };

  return (
    <div>
      <OrderCard
        {...props}
        isOpen={openOrderCard}
        setCloseOrderCard={() => setOpenOrderCard(!openOrderCard)}
        updateOrder={handleUpdateOrder}
      />
      <div onClick={() => setOpenOrderCard(true)}>
        <div className="flex items-center bg-white border border-gray-200 rounded-lg flex-row max-w-xl hover:bg-gray-100 shadow-lg cursor-pointer">
          <img className="object-cover h-36 w-32 rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.image} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h5>
            <p className="mb-3 font-normal text-gray-600">{props.description}</p>
            <p className="mb-3 font-normal text-papasred">{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBox;