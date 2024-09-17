/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0F243D", // dark blue
        secondary: "#4183F5", // light blue
        primaryTransparent: "#0F243DCC", // dark blue with transparency
        accent: "#3C82F6", // accent blue
        lightGray: "#1C324D",
        lightBlue: "#0C6FE0",
      },
    },
  },
  plugins: [],
};
