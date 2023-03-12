/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'brk': '640px'
    },
    fontFamily: {
      'base': ["Segoe UI Variable", "Trebuchet MS", "Arial", "Helvetica", "sans-serif", "Times New Roman"]
    },
    extend: {
      transitionProperty: {
        'spacing': 'margin'
      }
    },
  },
  plugins: [],
}