/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"selector",
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      //   strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
    
  ],
}

