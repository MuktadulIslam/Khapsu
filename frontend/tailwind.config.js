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
      'md': '800px',
      'lg': '1200px',
      'xl': '1400px',
      '2xl': '1650px',
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
        'item-shadow': '0px 8px 45px -5px rgba(0,0,0,0.79)',
        'item-hover-shadow': '0px 8px 45px 11px rgba(0,0,0,0.79)'
      },
      // aspectRatio: {
      //   // '3/4': '3 / 4',
      // },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
