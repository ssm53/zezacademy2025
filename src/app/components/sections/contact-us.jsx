"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default marker icon issue in Leaflet + React
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Import your custom icons
import Image from "next/image";
import instagramIcon from "/public/instagram.svg";
import mailIcon from "/public/mail.svg";
import linkedInIcon from "/public/linkedin.svg";
import phoneIcon from "/public/phonegraycolor.svg";
import youtubeIcon from "/public/youtube.svg";
import twittericon from "/public/twitter.svg";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="max-w-[1300px] mx-auto py-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Us Section */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#0F243DCC]">
              Contact Us
            </h2>
            <p className="text-[#0F243DCC] mb-4">
              Email, call or complete the form to learn how <br />
              <strong>HeyLearn2code</strong> can solve your messaging problem.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Image
                  src={mailIcon}
                  alt="Mail"
                  width={20}
                  height={20}
                  className="mr-3"
                />
                <p className="text-lg font-medium text-[#0F243DCC]">
                  shaun@heylearn2code.com
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src={phoneIcon}
                  alt="Phone"
                  width={20}
                  height={20}
                  className="mr-3"
                />
                <p className="text-lg font-medium text-[#0F243DCC]">
                  +6 012 339 7028
                </p>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-gray-600 hover:text-primary">
              <Image src={linkedInIcon} alt="LinkedIn" width={20} height={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <Image src={twittericon} alt="YouTube" width={20} height={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <Image
                src={instagramIcon}
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <Image src={youtubeIcon} alt="YouTube" width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Expected Study Hours Section */}
        <div className="bg-[#F7F8F9] p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#0F243DCC]">
            Expected Study Hours
          </h2>
          <div className="grid grid-cols-2 gap-4 bg-white rounded-lg p-4">
            <div className="border-r text-center">
              <h3 className="text-lg font-semibold text-[#0F243DCC]">
                Full-Time Students
              </h3>
              <p className="text-gray-600">7 hours per day</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#0F243DCC]">
                Part-Time Students
              </h3>
              <p className="text-gray-600">7 hours per day</p>
            </div>
          </div>
        </div>

        {/* Further Details of Bootcamp Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[#0F243DCC]">
            Further Details of Bootcamp
          </h2>
          <ul className="list-disc ml-6 text-gray-600">
            <li>There are full-time and part-time options</li>
            <li>There are on-site and remote options</li>
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold text-[#0F243DCC]">
              Availability hours:
            </h3>
            <p className="text-gray-600">
              Mon-Fri 11:30 am - 11:30 pm (UTC + 8)
            </p>
            <p className="text-gray-600">
              For onsite location: Bandar Kinrara 5, Puchong, Selangor,
              Malaysia.
            </p>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[#0F243DCC]">
            Location Map
          </h2>
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
