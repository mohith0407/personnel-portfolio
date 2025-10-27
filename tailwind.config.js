/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandYellow: "#FACC15"
      },
      borderRadius: {
        'xl-3': '2rem'
      }
    }
  },
  plugins: []
};
