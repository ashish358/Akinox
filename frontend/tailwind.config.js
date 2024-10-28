/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/**/*.{jpg,png,svg,gif}" // Add image path for Tailwind to include
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-logo': "url('./assets/navlogo.jpg')", // Example of adding a custom background image
        'slider1': "url('C:/Users/Ashish/Desktop/Akinox/frontend/src/assets/slider1.jpg')", // Example of adding a custom background image
      },
      filter: {
        'md': 'blur(4px)',
      },
    },
  },
  plugins: [],
}
