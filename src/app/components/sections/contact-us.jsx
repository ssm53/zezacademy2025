

"use client";
import { useEffect } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="max-w-[1300px] mx-auto py-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Us Section */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#0F243DCC]">
              Contact Us
            </h2>
            {/* <p className="text-[#0F243DCC] mb-4">
              Whatsapp our founder, Shaun to get the fastest replies.
            </p> */}
            <div className="space-y-4">
              <div className="flex items-center">
                <a
                  href="https://wa.me/60123397028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaWhatsapp className="text-xl mr-3" />
                  <p className="text-lg font-medium text-[#0F243DCC]">
                    +6 012 339 7028 (Shaun Menezes)
                  </p>
                </a>
              </div>
              {/* <div className="flex items-center">
                <a
                  href="mailto:shaun@zezacademy.com"
                  className="flex items-center"
                >
                  <FaEnvelope className="text-xl mr-3" />
                  <p className="text-lg font-medium text-[#0F243DCC]">
                    shaun@zezacademy.com
                  </p>
                </a>
              </div> */}
            </div>
          </div>
          {/* <div className="flex space-x-3 mt-4">
            <a
              href="https://www.linkedin.com/in/shaun-shanil-menezes/"
              className="text-gray-600 hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://twitter.com/"
              className="text-gray-600 hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/zezacademy/"
              className="text-gray-600 hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="text-gray-600 hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-xl" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
