import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Contact Information */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-secondary">Hey</span>
            <span className="">
              Learn <span className="text-secondary">2</span> Code
            </span>
          </h2>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet lorem consectetur pretium neque l
          </p>
          <p className="mt-4 flex items-center justify-center md:justify-start">
            <img src="/mailbox.svg" alt="mail icon" className="w-6 h-6 mr-2" />
            shaun@heylearn2code.com
          </p>
          <p className="mt-2 flex items-center justify-center md:justify-start">
            <img src="/phone.svg" alt="phone icon" className="w-6 h-6 mr-2" />
            +6 012 339 7028
          </p>
        </div>

        {/* Site Map */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold">Site Map</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Why Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Curriculum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Student
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Social Media</h3>
          <div className="mt-4 flex items-center justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-secondary">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-secondary">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-secondary">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-secondary">
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
