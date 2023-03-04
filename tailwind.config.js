/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        smallLaptop: { 'max': '1248px' },
        // => @media (max-width: 1248px) { ... }

        verySmallLaptop: { 'max': '1024px' },
        // => @media (max-width: 1024px) { ... }
        largeTablet: { 'max': '992px' },
        // => @media (max-width: 992px) { ... }
        tablet: { 'max': '800px' },
        // => @media (max-width: 800px) { ... }

        smallTablet: { 'max': '600px' },
        // => @media (max-width: 600px) { ... }

        phone: { 'max': '450px' },
        // => @media (max-width: 350px) { ... }
      },
      colors: {
        secondary: "#FDF8F1",
        primary: "#FFA21D"
      }
    },
  },
  plugins: [],
}
