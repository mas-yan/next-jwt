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
    extend: {
      "colors": {
        "primary": {
          50: "#EEEDFC",
          100: "#DDDBFA",
          200: "#B6B3F4",
          300: "#948FEF",
          400: "#726BEA",
          500: "#4F46E5",
          600: "#271DD2",
          700: "#1D169D",
          800: "#130E67",
          900: "#0A0836"
        }
      }
    }
  },
  plugins: [],
}