import React from 'react';

const SavedOrder = ({ orderArray }) => {
  const transformSelectedPizzas = (pizzas) => {
    const pizzaCount = {};
    const transformedPizzas = [];

    pizzas.forEach((pizza) => {
      if (pizzaCount[pizza]) {
        pizzaCount[pizza]++;
      } else {
        pizzaCount[pizza] = 1;
      }
    });

    for (const [pizza, count] of Object.entries(pizzaCount)) {
      const ratio = count === pizzas.length ? '1x' : `${count}/${pizzas.length}`;
      transformedPizzas.push(`${ratio} ${pizza}`);
    }

    return transformedPizzas.join(', ');
  };

  const transformSelectedSodas = (sodas) => {
    const sodaCount = {};
    const transformedSodas = [];

    sodas.forEach((soda) => {
      if (sodaCount[soda]) {
        sodaCount[soda]++;
      } else {
        sodaCount[soda] = 1;
      }
    });

    for (const [soda, count] of Object.entries(sodaCount)) {
      transformedSodas.push(`${count}x ${soda}`);
    }

    return transformedSodas.join(', ');
  };

  const transformSelectedDeals = (deals) => {
    const dealCount = {};
    const transformedDeals = [];

    deals.forEach((deal) => {
      if (dealCount[deal]) {
        dealCount[deal]++;
      } else {
        dealCount[deal] = 1;
      }
    });

    for (const [deal, count] of Object.entries(dealCount)) {
      transformedDeals.push(`${count}x ${deal}`);
    }

    return transformedDeals.join(', ');
  };

  return (
    <div>
      {orderArray.map((order, index) => (
        <div className='mt-2 h-full' key={index}>
          <div className='flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg md:flex-row md:max-w-xl'>
            <div className='flex flex-col justify-between leading-normal pl-2 pr-2'>
              <h5 className='mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900'>
                {order.type === 'deal' ? order.title : order.description}
              </h5>
              <p className='mb-2 font-normal text-sm text-gray-700 overflow-hidden'>
                {transformSelectedPizzas(order.selectedPizzas)}
                {transformSelectedDeals(order.selectedDeals)}
                {transformSelectedSodas(order.selectedSodas)}
              </p>
              <p className='mb-2 font-normal text-papasred'>${order.totalPrice.toFixed(2)}</p>
            </div>
            <button
              type='button'
              className='text-gray-400 px-4 hover:text-gray-800 justify-center flex items-center ml-auto flex-shrink-0'
              data-modal-hide='large-modal'
            >
              <svg
                aria-hidden='true'
                className='w-8 h-8'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedOrder;