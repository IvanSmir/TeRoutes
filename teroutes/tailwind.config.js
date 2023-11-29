/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tiber: {
          '50': '#effefc',
          '100': '#c9fefa',
          '200': '#94fbf6',
          '300': '#56f2f0',
          '400': '#24d9dd',
          '500': '#0bbac1',
          '600': '#06929b',
          '700': '#09747c',
          '800': '#0d5b62',
          '900': '#104c51',
          '950': '#02343b',
        },
      },
    },
  },
  plugins: [],
}