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
        },
        "muted": {
          50: "#EBEDF0",
          100: "#D9DDE2",
          200: "#B4BBC6",
          300: "#8B97A7",
          400: "#677588",
          500: "#4B5563",
          600: "#3B434E",
          700: "#2C323A",
          800: "#1F2329",
          900: "#0F1114"
        }
      }
    }
  },
  plugins: [],
}