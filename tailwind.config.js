/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.{html,js}", "index.html", "main.html"],
  theme: {
    extend: {
      animation: {
        wiggle: "heartbeat 1s ease infinite",
      },
      keyframes: {
        heartbeat: {
          "0%": {
            transform: "scale(1)",
          },
         "20%": {
            transform: "scale(1.1)",
          },
         "40%": {
            transform: "scale(1.2)",
          },
         "60%": {
            transform: "scale(1.2)",
          },
          "80%": {
            transform: "scale(1.1)",
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
