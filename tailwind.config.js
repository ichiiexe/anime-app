/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./random/index.html",
    "./random/random.js",
    "./home/index.html",
    "./home/home.js",
    "./watch/watch.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        animebg: "url('/public/bg.jpg')",
      },
      keyframes: {
        loginOpen: {
          "0%": { opacity: "0", transform: "translateY(-80px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        loginClose: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-80px)" },
        },
      },
      animation: {
        loginOpen: "loginOpen 300ms ease-in",
        loginClose: "loginClose 300ms ease-out",
      },
    },
  },
  plugins: [],
};
