import React, { useState } from "react";
import { motion } from "framer-motion"; 
import { TbBuildingStore } from 'react-icons/tb';
import "../index.css";

export default function DeliveryModal({ isOpen, setCloseModal }) {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    document.body.style.overflow = 'hidden';
    
    if (isOpen) {
        const DeliveryPickUp = isOn ? "Pick Up" : "Delivery";
        return (
            <div>
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-80">
                    <div className="justify-center flex z-50 relative w-full max-w-md overflow-x-hidden overflow-y-auto inset-0 max-h-full mb-4 mt-4 mx-4s">
                        <div className="relative bg-gray-50 rounded-lg shadow">
                            <div className="flex bg-gray-100 border border-gray-300 items-center justify-between p-5 border-b rounded-t">
                                <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                                    <motion.div className="handle flex" layout transition={spring} >
                                        <p className="text-papaswhite text-lg font-bold">{DeliveryPickUp}</p>
                                    </motion.div>
                                </div>
                                <button type="button" onClick={setCloseModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="small-modal">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="w-96 h-[60vh] text-papasblack">
                                    {isOn && 
                                    <div>
                                        <p className="text-xl leading-relaxed font-bold">
                                            Where you can Find us:
                                        </p>
                                        <div className="items-center flex mt-4 text-gray-700 border border-gray-300 rounded-2xl bg-gray-100 p-2">
                                        <TbBuildingStore size={50} />
                                        <p className="text-gray-700 text-md ml-4">
                                            New York <br />
                                            <span className="text-gray-600 text-sm">
                                                89-35 Fairview, NYC
                                            </span>
                                        </p>
                                        </div>
                                    </div>
                                    }
                                    {!isOn && 
                                    <div>
                                        <p className="text-xl leading-relaxed text-papasblack font-bold">
                                            Enter your delivery address:
                                        </p>
                                        <form>   
                                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div class="relative">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                </div>
                                                <input 
                                                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 mt-4" 
                                                placeholder="Search locations ..." required />
                                                <button type="submit" class="text-papaswhite absolute right-2.5 bottom-2.5 bg-papasred hover:bg-papasred focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                                            </div>
                                        </form>    
                                    </div>
                                    }
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-4 space-x-2 border-t border-gray-300 bg-gray-100 rounded-b">
                                <button className="py-2 px-4 mx-8 text-lg rounded-lg bg-papasred text-papaswhite hover:bg-papasdarkred font-bold">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    document.body.style.overflow = '';
  return null;
}
