/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      /**#DC4492
       * bg-gradient-to-r from-green-300 to-purple-400
       * linear-gradient(to right, rgb(134, 239, 172), rgb(192, 132, 252))
       * linear-gradient(to right, rgb(234, 88, 12), rgb(249, 115, 22))
       * linear-gradient(to right, rgb(202, 138, 4), rgb(220, 38, 38))
       * linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))
       * linear-gradient(rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237))
       * linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))
       * linear-gradient(to right, rgb(100, 116, 139), rgb(254, 249, 195))
       */
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg,#008080 7.21%, rgb(134, 239, 172) 45.05%, rgb(192, 132, 252) 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
