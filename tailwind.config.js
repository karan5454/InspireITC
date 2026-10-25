
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: "#050505",
        amethyst: "#8B2CF5",
        cyan: "#00E5FF",
      },
      fontFamily: {
        instrument: ["Instrument Serif", "serif"],
      },
    },
  },
  plugins: [],
};
