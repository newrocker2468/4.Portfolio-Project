const { default: react } = require("@vitejs/plugin-react-swc");

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
        paragrey: "#a7a7a7",
        lightblack: "#424242",
        lightyellow: "#393015",
        darkyellow: "#ffc400",
        actgrey: "#1f2020",
        completed: "#87ffb4",
        darkgreen1: "#184217e6",
        darkgreen2: "#023900e6",
        completedtext: "#04ff00",
        darkwhite: "#e3e3e3",
        reactbg: "#cdf4ff",
        reactbgdark: "#013e4f",
        reacttext: "#04879c",
        reacttextdark: "#67eaff",
        tailwindbg: "#c7eeff",
        tailwindbgdark: "#003547",
        tailwindtext: "#006f9f",
        tailwindtextdark: "#43d7ff",
        jwtbgdark: "#460066",
        jwtbg: "#f1d1ff",
        jwttext: "#b100ff",
        jwttextdark: "#f1c3ff",
        nodejsbg: "#dcfce7",
        nodejsbgdark: "#003f19",
        nodejstextdark: "#86ffb0",
        nodejstext: "#00762d",
        expressjsbg: "#e6e6e6",
        expressjstext: "#000000",
        expressjsbgdark: "#9b9b9b",
        expressjstextdark: "#00000",
        mongodbbg: "#beffbe",
        mongodbtext: "#007c00",
        mongodbbgdark: "#004700",
        mongodbtextdark: "#6dff6d",
        passportjsbg: "#8c8c8c",
        bootstrapbg: "#d6c3ff",
        bootstraptext: "#5405ff",
        bootstrapbgdark: "#7857bc",
        bootstraptextdark: "#ebe2ff",
        ejsbgdark: "#465a00",
        ejstextdark: "#c6ff00",
        ejsbg: "#f0ffcc",
        ejstext: "#648100",
        mapboxbg: "#e8e8e8",
        mapboxtext: "#000000",
        maoboxbgdark: "#ffffff",
        mapboxtextdark: "#000000",
        cloudinarybgdark: "#0d0d54",
        cloudinarytextdark: "#a8cfff",
        cloudinarybg: "#bfdcff",
        cloudinarytext: "#0074ff",
        shadcnbg: "#d9d9d9",
        shadcnbgdark: "#3a3a3a",
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
