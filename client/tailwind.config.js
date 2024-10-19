/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Ensures dark mode based on a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#e8e8e8",
        lightblack: "#424242",
        darkwhite: "#e3e3e3",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"], // Enable bg color change in dark mode
      textColor: ["dark"],
      borderColor: ["dark"],
    },
  },
  plugins: [],
};
