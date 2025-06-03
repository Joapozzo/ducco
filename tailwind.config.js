/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        // Colores corporativos de Duccó
        ducco: {
          orange: "#F24026",
          brown: "#28110E",
          gray: "#3B3B3B",
          beige: "#E4DAAE",
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
