/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.{html,js}", "index.html", "main.html"],
  theme: {
    extend: {
      animation: {
        wiggle: "heartbeat 0.7s ease infinite",
      },
      keyframes: {
        heartbeat: {
          "0%": {
            transform: "scale(1)",
          },
         "25%": {
            transform: "scale(1.2)",
          },
          "50%": {
            transform: "scale(1.5)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },

  plugins: [],
};
