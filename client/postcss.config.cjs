module.exports = {
  plugins: [
    require("@tailwindcss/postcss"),
    require("autoprefixer"),

    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow: "0px 0px 15px rgba(255, 255, 255, 1)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    require("tailwindcss-animate"),
  ],
};

 
