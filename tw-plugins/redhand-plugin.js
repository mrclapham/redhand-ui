const plugin = require('tailwindcss/plugin');
const { defaultTheme } = require('../tailwindConfig/tailwind.theme.config');

const myComponentLibraryConfig = {
  theme: {
    ...defaultTheme
  }
}

module.exports = plugin(({ addUtilities, addComponents, e, config }) => {
  // Add your custom styles here
}, myComponentLibraryConfig)