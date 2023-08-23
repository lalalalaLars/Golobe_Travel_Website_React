/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Franklin"'],
        montserrat: ['"Montserrat"'],
      },
      colors: {
        mint: "#8dd3bb",
        salmon: "#ff8682",
        blackgreen: "#112211",
      },
    },
  },
  plugins: [],
};
