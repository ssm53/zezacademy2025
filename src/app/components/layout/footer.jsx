import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 px-4 md:px-16">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Contact Information */}
        <div>
          <h2 className="text-2xl font-bold ">
            <span className="text-secondary"> Hey</span>
            <span className="">
              Learn <span className="text-secondary">2</span> Code
            </span>
          </h2>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet lorem consectetur pretium neque l
          </p>
          <p className="mt-4 flex items-center justify-center md:justify-start">
            <span className="mr-2">✉️</span> shaun@heylearn2code.com
          </p>
          <p className="mt-2 flex items-center justify-center md:justify-start">
            <span className="mr-2">📞</span> +6 012 339 7028
          </p>
        </div>

        {/* Sit Map */}
        <div>
          <h3 className="text-lg font-semibold">Sit Map</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Why Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Curriculum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Student
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Social Media</h3>
          <div className="mt-4 flex items-center justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 text-gray-400">
        © 2024 HeyLearn2Code. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
