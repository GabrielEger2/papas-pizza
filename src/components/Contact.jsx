import React from "react";
import { MdOutlineBeenhere } from 'react-icons/md'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAPS_API}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={19}
    defaultCenter={{ lat: 40.856744, lng: -73.931606}}
  >
    {props.isMarkerShown && <Marker position={{ lat: 40.856829, lng: -73.931875 }} />}
  </GoogleMap>
)



export default function Contact(){

  return (
    <section id="contact">
        <div className="pt-4 p-4 max-w-[1640px] mx-auto">
        <div className="relative flex items-center" style={{ height: '80vh', width: '100%' }}>
            <div className="absolute inset-0 z-10 hidden lg:block">
            <MyMapComponent isMarkerShown />
            </div>

            <div className="lg:absolute lg:top-20 lg:left-20 justify-center mx-auto z-20 w-full max-w-sm space-x-3 bg-white bg-opacity-75">
                <div className="w-full max-w-2xl px-1 py-2 m-auto bg-papasivory rounded-lg shadow">
                <div className="text-2xl font-bold text-center text-papasred rounded-lg">
                89-35 Fairview, NYC 
                </div>
                </div>
            </div>

            <form className=" lg:absolute lg:right-20 right-0 justify-center mx-auto z-20 w-full max-w-sm space-x-3 bg-opacity-75"> 
            <div className="w-full max-w-2xl px-5 py-10 m-auto bg-papasivory rounded-lg shadow-lg">
                <div className="mb-6 text-5xl font-bold text-center text-papasred title-font">
                Contact us !
                </div>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 lg:col-span-1">
                    <div className="relative">
                    <input type="text" id="contact-form-name" className="rounded-lg border-transparent flex-1 appearance-none border border-papasred w-full py-2 px-4 bg-white text-papasblack placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-papaslightred focus:border-transparent" placeholder="Name"/>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <div className="relative">
                    <input type="text" id="contact-form-email" className="rounded-lg border-transparent flex-1 appearance-none border border-papasred w-full py-2 px-4 bg-white text-papasblack placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-papaslightred focus:border-transparent" placeholder="email/phone"/>
                    </div>
                </div>
                <div className="col-span-2">
                    <label className="text-papasblack" htmlFor="name">
                    <textarea className="flex-1 w-full px-4 py-2 text-base text-papasblack placeholder-gray-400 bg-white border border-papasred rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-papaslightred focus:border-transparent" id="order" placeholder="Enter your order" name="order" rows="5" cols="40">
                    </textarea>
                    </label>
                </div>
                <div className="col-span-2 text-right">
                            <button type="submit" class="py-2 px-4  bg-papaslightred hover:bg-papasred focus:ring-papasred focus:ring-offset-papaslightred text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:text-papaswhite focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </section>
  );
}