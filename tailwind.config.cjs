const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["roca", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        purpleBg: "url('/purple-bg.png')",
        btn: "linear-gradient(to right,#F8BA1C,#DFA103)",
      },
      boxShadow: {
        box: "0px 0px 99.8919px 29.9676px rgba(0, 0, 0, 0.08)",
        purple:
          "inset 0px -4.42394px 2.21197px rgba(0, 0, 0, 0.5), inset 0px 4.42394px 2.21197px rgba(255, 255, 255, 0.5)",
        btn: "inset 0px -2.30856px 1.15428px rgba(0, 0, 0, 0.5), inset 0px 2.30856px 1.15428px rgba(255, 255, 255, 0.5)",
      },
      colors: {
        yellow: "#E9B123",
        lightYellow: "#FFEDC3",
        dark: "#222222",
        gray: "#959191",
      },
    },
  },
  plugins: [],
};
