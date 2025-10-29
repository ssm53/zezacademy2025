// // src/app/layout.js (Server Component)
// import { Inter } from "next/font/google";
// import "./globals.css"; // Import global styles
// import LenisScroll from "../lenis-scroll"; // Import the Lenis scroll client component
// import dynamic from "next/dynamic";
// const MetaPixel = dynamic(import("./components/sections/metapixel-za-testing-1")) // meta pixel


// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// export const metadata = {
//   title: "Zez Academy",
//   description: "Full-Stack Coding & AI Bootcamp",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} font-sans`}>
//         <LenisScroll /> {/* Include the Lenis smooth scroll */}
//         {/* meta pixel */}
//         <MetaPixel/> 
//         {children}
//       </body>
//     </html>
//   );
// }


// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import LenisScroll from "../lenis-scroll";
import dynamic from "next/dynamic";

// ✅ correct casing + correct dynamic signature + no SSR
const MetaPixel = dynamic(
  () => import("./components/sections/metapixel-za-testing-1"),
  { ssr: false }
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Zez Academy",
  description: "Full-Stack Coding & AI Bootcamp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <LenisScroll />
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}




// example code below. dont delete


// za-testing-1 pixel code
// <!-- Meta Pixel Code -->
// <script>
// !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '829840750216936');
// fbq('track', 'PageView');
// </script>
// <noscript><img height="1" width="1" style="display:none"
// src="https://www.facebook.com/tr?id=829840750216936&ev=PageView&noscript=1"
// /></noscript>
// <!-- End Meta Pixel Code -->
