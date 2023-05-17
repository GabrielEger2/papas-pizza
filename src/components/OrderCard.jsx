import { data } from "../data/PizzaData";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function OrderCard({ isOpen, setCloseOrderCard, type, size }) {
  let sliceNumber;

  if (size === "small") {
    sliceNumber = 2;
  } else if (size === "medium") {
    sliceNumber = 3;
  } else if (size === "large") {
    sliceNumber = 4;
  }

  if (isOpen) {
    document.body.style.overflow = 'hidden';
    const filteredData = data.filter(
      (pizza) => pizza.type === type && pizza.price[size] !== undefined
    );

    const pizzas = (
      <div className="mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 mb-8">
          {filteredData.map((pizza) => (
            <div key={pizza.id}>
              <div className="bg-gray-100 border border-gray-300 rounded-lg">
                <img className="h-40 w-full object-cover rounded-lg" src={pizza.image} alt={pizza.name} />
                <div className="px-4 py-2">
                  <h3 className="text-xl font-medium">{pizza.name}</h3>
                  <div className="text-xl flex justify-between">
                    <p className="text-papasred mt-1">{`$${(pizza.price[size] / sliceNumber).toFixed(2)}`}</p>
                    <div className="items-center flex justify-between space-x-4 p-2 cursor-pointer bg-papasred text-papaswhite rounded-full">
                      <AiOutlinePlus size={20} />
                      <AiOutlineMinus size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mx-6 mb-4 text-2xl font-bold">NOTES FOR THE KITCHEN: </h2>
        <textarea 
        className="mx-6 block px-4 py-2 w-full max-w-4xl text-lg text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-papasred focus:border-papasred h-24 mb-20" 
        placeholder="Ex: Remove onion, mayonnaise on the top, etc...">
        </textarea>
      </div>
    );
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-80">
        <div className="fixed justify-center flex z-50 w-full overflow-x-hidden overflow-y-auto inset-0 max-h-full mb-4 mt-4 mx-4s">
          <div className="w-full max-w-4xl max-h-full">
            <div className="bg-gray-50 rounded-lg shadow">
              <div className="fixed z-50 w-full max-w-4xl bg-gray-100 border border-gray-300 flex items-center p-5 border-b shadow-lg">
                <h3 className="text-3xl font-bold">Currently Order: <br />
                {type === "savoury" || type === "sweet" ? (
                    <p className="text-gray-700 text-xl mt-3 font-medium">
                    select up to {sliceNumber} flavours:&nbsp;&nbsp;(0/{sliceNumber})
                    </p>
                ) : null}
                </h3>
                <button
                    onClick={setCloseOrderCard}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-hide="large-modal"
                >
                    <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                </div>
                <div className="p-6 space-y-6 mb-8">
                {pizzas}
                </div>
                <div className="fixed bottom-4 z-50 w-full max-w-4xl bg-gray-100 border border-gray-300 flex justify-end md:justify-between items-center p-5 border-t">
                  <div className="hidden md:block">
                    <h3 className="py-2 px-8 mx-8 text-2xl rounded-lg text-papasred flex items-center">
                      <AiOutlineMinus size={22} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      1
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <AiOutlinePlus size={22} />
                    </h3>
                  </div>
                <button className="py-2 px-8 mx-8 text-2xl rounded-lg bg-papasred text-papaswhite">
                    Add to order $0.00
                </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }

  document.body.style.overflow = '';
  return null;
}