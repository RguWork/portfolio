module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-gray": "#27272a", // for webpage
        "darker-gray": "#232226", // for navbar
      },
      fontFamily: {
        quattrocento: ['"Quattrocento Sans"', "sans-serif"],
        courier: ['"Courier New"', "Courier", "monospace"],
        mulish: ['"Mulish"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
