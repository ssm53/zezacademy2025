// import {
//   FaLinkedin,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
//   FaWhatsapp,
//   FaEnvelope,
// } from "react-icons/fa";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <div className="bg-primary">
//       <footer className=" text-white py-8 mx-auto sm:px-4 px-0   max-w-[1300px]">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//           {/* Logo and Contact Information */}

//           <div className="flex flex-col items-center text-center mx-auto">
//   <a className="text-2xl font-bold inline-block">
//     <span className="text-secondary">Zez</span>
//     <span className="text-white">Academy</span>
//   </a>

//   <a
//     href="https://wa.me/60123397028"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="mt-4 flex items-center justify-center"
//   >
//     <FaWhatsapp className="text-xl mr-3" />
//     <p>+6 012 339 7028</p>
//   </a>

//   <a
//     href="mailto:shaun@zezacademy.com"
//     className="mt-2 flex items-center justify-center"
//   >
//     <FaEnvelope className="text-xl mr-3" />
//     <p>shaun@zezacademy.com</p>
//   </a>
// </div>


//           {/* Site Map */}
//           {/* <div className="hidden md:block">
//             <h3 className="text-lg font-semibold">Site Map</h3>
//             <ul className="mt-4 space-y-2">
//               <li>
//                 <a href="#" className="hover:text-secondary">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-secondary">
//                   Why Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-secondary">
//                   Curriculum
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-secondary">
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-secondary">
//                   Student
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-secondary">
//                   FAQs
//                 </a>
//               </li>
//             </ul>
//           </div> */}

//           {/* Social Media */}
//           {/* <div>
//             <h3 className="text-lg font-semibold">Social Media</h3>
//             <div className="mt-4 flex items-center justify-center md:justify-start space-x-4">
//               <a href="#" className="hover:text-secondary">
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/zezacademy/"
//                 className="hover:text-secondary"
//               >
//                 <FaInstagram size={24} />
//               </a>
//               <a href="#" className="hover:text-secondary">
//                 <FaTwitter size={24} />
//               </a>
//               <a href="#" className="hover:text-secondary">
//                 <FaYoutube size={24} />
//               </a>
//             </div>
//           </div> */}
//         </div>

//         {/* Copyright */}
//         <div className="text-center text-sm mt-8 text-gray-400">
//           © 2024 Zez Academy. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-primary">
      <footer className="text-white py-8 mx-auto sm:px-4 px-0 max-w-[1300px]">
        {/* Make 3 cols on md, and center items in the grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:place-items-center text-center">
          {/* Center this block by placing it in the middle column on md+ */}
          <div className="flex flex-col items-center text-center mx-auto md:col-start-2">
            <a className="text-2xl font-bold inline-block">
              <span className="text-secondary">Zez</span>
              <span className="text-white">Academy</span>
            </a>

            <a
              href="https://wa.me/60123397028"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center"
            >
              <FaWhatsapp className="text-xl mr-3" />
              <p>+6 012 339 7028</p>
            </a>

            {/* <a
              href="mailto:shaun@zezacademy.com"
              className="mt-2 flex items-center justify-center"
            >
              <FaEnvelope className="text-xl mr-3" />
              <p>shaun@zezacademy.com</p>
            </a> */}
          </div>

          {/* Future columns can go here if you re-enable Site Map / Social */}
        </div>

        <div className="text-center text-sm mt-8 text-gray-400">
          © 2025 Zez Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
