module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      screens: {
        sm: "480px",
        md: "547px",
        lg: "768px",
        xl: "1024px",
        xxl: "1280px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
