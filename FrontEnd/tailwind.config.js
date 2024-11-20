const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include the `src` directory
  ],
  darkMode: "class", // Enables dark mode using class strategy
  theme: {
    extend: {}, // Customizations to extend the default theme
  },
  plugins: [addVariablesForColors], // Adding the plugin to the plugins array
};

/**
 * This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200).
 * @param {import('tailwindcss/types/config').PluginAPI} helpers - Plugin API provided by Tailwind CSS
 */
function addVariablesForColors({ addBase, theme }) {
  // Flatten the color palette to handle nested colors (e.g., gray.200)
  const allColors = flattenColorPalette(theme("colors"));

  // Convert the colors into CSS variables
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  // Add the variables to the root element
  addBase({
    ":root": newVars,
  });
}
