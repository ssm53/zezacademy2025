// src/app/layout.js (Server Component)
import { Inter } from "next/font/google";
import "./globals.css"; // Import global styles
import LenisScroll from "../lenis-scroll"; // Import the Lenis scroll client component

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// export const metadata = {
//   title: "Zez Academy",
//   description: "Full-Stack Coding & AI Bootcamp",
// };
export const metadata = {
  title: "Zez Academy",
  description: "Full-Stack Coding & AI Bootcamp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <LenisScroll /> {/* Include the Lenis smooth scroll */}
        {children}
      </body>
    </html>
  );
}
//
