/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "night"],
  },

  plugins: [require("daisyui")],
};

// color1: "#efcf4f", // yellow color
// color2: "#c25934", // red color
// accent: "#0c4b65", // blue color
