// tailwind.config.js
module.exports = {
  darkMode: "class", // Ensures dark mode based on a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        custom: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue",
      },
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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow: "2px 0px 25px rgba(255, 255, 255, 1)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
