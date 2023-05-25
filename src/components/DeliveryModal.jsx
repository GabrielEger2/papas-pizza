import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { motion } from "framer-motion";
import { TbBuildingStore } from "react-icons/tb";
import "../index.css";

export default function DeliveryModal({ isOpen, setCloseModal, onSave }) {
  const [isOn, setIsOn] = useState(false);
  const [address, setAddress] = useState("");
  const [finalAdress, setFinalAdress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(ll);
    var finalAdress = value;
    setFinalAdress(finalAdress);
  };

  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  document.body.style.overflow = "hidden";

  const [isWithinRange, setIsWithinRange] = useState(false);
  const [completeAddress, setCompleteAddress] = useState(""); // Define completeAddress state variable
  const [residenceDetails, setResidenceDetails] = useState(""); // Define residenceDetails state variable

  useEffect(() => {
    // Check if coordinates are within the range when they change
    if (coordinates.lat && coordinates.lng) {
      const targetCoordinates = { lat: 40.856829, lng: -73.931875 };
      const distance = calculateDistance(coordinates, targetCoordinates);
      setIsWithinRange(distance <= 20);
    }
  }, [coordinates]);

  const calculateDistance = (coord1, coord2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(coord2.lat - coord1.lat);
    const dLng = deg2rad(coord2.lng - coord1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(coord1.lat)) *
        Math.cos(deg2rad(coord2.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const handleSave = () => {
    if (isOn) {
      const pickupInfo = "New York, 89-35 Fairview, NYC";
      setCloseModal();
      // Pass the pickupInfo to the callback function
      onSave(pickupInfo);
    } else {
      setCloseModal();
      // Pass the delivery address and residence details to the callback function
      onSave(completeAddress, residenceDetails);
    }
  };

  if (isOpen) {
    const DeliveryPickUp = isOn ? "Pick Up" : "Delivery";

        return (
            <div>
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                    <div className="justify-center flex z-50 relative w-full max-w-md overflow-x-hidden overflow-y-auto inset-0 max-h-full mb-4 mt-4 mx-4s">
                        <div className="relative bg-gray-50 rounded-lg shadow">
                            <div className="flex bg-gray-100 border border-gray-300 items-center justify-between p-5 border-b rounded-t">
                                <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                                    <motion.div className="handle flex select-none" layout transition={spring} >
                                        <p className="text-papaswhite text-lg font-bold">{DeliveryPickUp}</p>
                                    </motion.div>
                                </div>
                                <button type="button" onClick={setCloseModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="small-modal">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="w-96 h-[60vh] text-papasblack">
                                    {isOn && 
                                    <div>
                                        <p className="text-xl leading-relaxed font-bold">
                                            Where you can find us:
                                        </p>
                                        <div className="items-center flex mt-4 text-gray-700 border border-gray-300 rounded-2xl bg-gray-50 p-2">
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
                                        <div className=" relative w-full justify-center flex mt-4">
                                            
                                            <PlacesAutocomplete
                                                value={address}
                                                onChange={setAddress}
                                                onSelect={handleSelect}
                                            >
                                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                <div>
                                                    <input
                                                    {...getInputProps({
                                                        placeholder: 'Search for your location...',
                                                        className: 'location-search-input w-96 text-lg border border-gray-300 rounded-xl bg-gray-50 px-4 py-2 text-gray-800',
                                                    })}
                                                    />
                                                    <div className="autocomplete-dropdown-container justify-center text-center absolute w-full py-1 border-gray-300">
                                                    {loading && <div>Loading...</div>}
                                                    {suggestions.map(suggestion => {
                                                        const className = suggestion.active
                                                        ? 'suggestion-item--active'
                                                        : 'suggestion-item';
                                                        // inline style for demonstration purpose
                                                        const style = suggestion.active
                                                        ? { backgroundColor: '#D1D5DB', cursor: 'pointer' }
                                                        : { backgroundColor: '#edf2f7', cursor: 'pointer' };
                                                        return (
                                                        <div
                                                            {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                            })}
                                                        >
                                                            <span>{suggestion.description}</span>
                                                        </div>
                                                        );
                                                    })}
                                                    </div>
                                                </div>
                                                )}
                                            </PlacesAutocomplete>
                                        </div>
                                        {isWithinRange ? (
                                            <form>
                                                <div>
                                                    <p className="text-xl leading-relaxed font-bold mt-4">
                                                        Set your location:
                                                    </p>
                                                    <div className="items-center mt-4 text-gray-700 border border-gray-300 rounded-2xl bg-gray-50 p-2 flex justify-center">
                                                    <p className="text-gray-700 text-lg mt-6 text-center">
                                                        {finalAdress} <br />
                                                        <span className="text-gray-600 text-md">
                                                            Please fill all the fields below:
                                                        </span>
                                                        <div class="relative z-0 w-full mb-6 group mt-8 text-left">
                                                            <input
                                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-papasred peer"
                                                                placeholder=" "
                                                                required
                                                                value={completeAddress}
                                                                onChange={(e) => setCompleteAddress(e.target.value)}
                                                            />
                                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-papasred peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Complete Adress</label>
                                                        </div>
                                                        <div class="relative z-0 w-full mb-6 group mt-4 text-left">
                                                            <input
                                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-papasred peer"
                                                                placeholder=" "
                                                                required
                                                                value={residenceDetails}
                                                                onChange={(e) => setResidenceDetails(e.target.value)}
                                                            />
                                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-papasred peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Residence number/Details</label>
                                                        </div>
                                                    </p>
                                                    </div>
                                                </div>
                                            </form>
                                             ) : !isWithinRange && coordinates.lat && coordinates.lng ? (
                                                <div className=" justify-center text-center mt-8">
                                                    <p className="text-2xl mb-2 font-bold">We can't deliver to you, yet.</p>
                                                    <p className="text-lg text-papasred">Please select a location that is no more than 20 km away from our restaurant.</p>
                                                </div>
                                            ) : (
                                                <div>

                                                </div>
                                            )} 
                                    </div>
                                    }
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-4 space-x-2 border-t border-gray-300 bg-gray-100 rounded-b">
                            <button
                                onClick={handleSave}
                                type="button"
                                className={`py-2 px-4 mx-8 text-lg rounded-lg bg-papasred text-papaswhite hover:bg-papasdarkred font-bold ${
                                    !isWithinRange && !isOn ? 'cursor-not-allowed bg-papasred400 hover:bg-papasred400' : 'cursor-pointer'
                                }`}
                                disabled={!isWithinRange && !isOn}
                            >
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
