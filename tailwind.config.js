import { COLORS } from "./src/components/colors.js";
import generateFontScale from "./src/components/core/utils/generateFontScale.js";

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,ts,tsx,jsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ...COLORS
      },
	  fontSize: {
		...generateFontScale(16, 1.2, 'px') // minor-third
	  }
    },

  },
  plugins: [],
}