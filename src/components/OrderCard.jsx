export default function OrderCard({ isOpen, setCloseOrderCard }) {
    if (isOpen) {
      return (
        <div class="fixed justify-center flex z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-4xl max-h-full">
                <div class="relative bg-white rounded-lg shadow">
                    <div class="flex items-center justify-between p-5 border-b rounded-t">
                        <h3 class="text-xl font-medium">
                            Currently Order:
                        </h3>
                        <button
                            onClick={setCloseOrderCard}
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-hide="large-modal"
                            >
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="flex justify-center p-6 border-t border-gray-200 rounded-b">
                        <button className="py-2 px-4 text-2xl rounded-lg bg-papasred text-papaswhite">Add</button>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  
    return null;
  }