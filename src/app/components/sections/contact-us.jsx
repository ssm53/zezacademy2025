"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default marker icon issue in Leaflet + React
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ContactUs = () => {
  return (
    <section className="max-w-[1300px] mx-auto py-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Email, call or complete the form to learn how{" "}
            <strong>HeyLearn2code</strong> can solve your messaging problem.
          </p>
          <div>
            <p className="text-lg font-medium">shaun@heylearn2code.com</p>
            <p className="text-lg font-medium mb-2">+6 012 339 7028</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Expected Study Hours
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <h3 className="text-xl font-semibold text-primary">
                Full-Time Students
              </h3>
              <p className="text-primary">7 hours per day</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <h3 className="text-xl font-semibold text-primary">
                Part-Time Students
              </h3>
              <p>7 hours per day</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Further Details of Bootcamp
          </h2>
          <ul className="list-disc ml-6 text-gray-600">
            <li>There are full-time and part-time options</li>
            <li>There are on-site and remote options</li>
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold">Availability hours:</h3>
            <p>Mon-Fri 11:30 am - 11:30 pm (UTC + 8)</p>
            <p>
              For onsite location: Bandar Kinrara 5, Puchong, Selangor,
              Malaysia.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Location Map</h2>
          <MapContainer
            center={[3.0468, 101.6932]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[3.0468, 101.6932]}>
              <Popup>
                HeyLearn2code Bootcamp Location: Bandar Kinrara 5, Puchong,
                Selangor, Malaysia.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
