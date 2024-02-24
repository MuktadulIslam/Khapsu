/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '560px',
      '2sm': '680px',
      'md': '800px',
      '2md': '1000px',
      'lg': '1200px',
      'xl': '1400px',
      '2xl': '1600px',
      'maxW': '1650px',
      'max-2md': { 'max': '999px' },
      'max-md': { 'max': '799px' },
      'max-sm': { 'max': '559px' },
      'minmax-lg': { 'min': '1000px', 'max': '1200px' },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'item-shadow': "0px 0px 10px 0px rgba(190,193,194,0.75)",
        'item-hover-shadow': '0px 0px 15px 3px rgba(123,136,140,1)',
        'search-hover-shadow': '0px 0px 1px 1px rgba(41,87,255,1) inset, 0px 0px 1px 1px rgba(41,87,255,1)',
        'menu-item-image-shadow': '0px 5px 10px 0px rgba(0,0,0,0.75)'
      },
      height: {
        'responsive-full': 'calc(100vh - 8rem)',
        'responsive-full-md': 'calc(100vh - 5rem)',
      }
    },
    fontFamily: {
      'popup-product-name': ['Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
