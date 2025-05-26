// tailwind.config.js
import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@heroui/theme/dist/components/modal.js"],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "600px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "1023px" },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
