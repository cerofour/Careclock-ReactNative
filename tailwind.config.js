import { COLORS } from "./src/components/colors.js";
import generateFontScale from "./src/components/core/utils/generateFontScale.js";

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
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