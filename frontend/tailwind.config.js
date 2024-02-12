/** @type {import('tailwindcss').Config} */
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
      'max-md': {'max': '800px'},
      'max-sm': {'max': '560px'},
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'item-shadow': "0px 0px 10px 0px rgba(190,193,194,0.75);",
        'item-hover-shadow': ' 0px 0px 15px 3px rgba(123,136,140,1)'
      },
    },
    theme: {
      fontFamily: {
        'popup-product-name': ['Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
