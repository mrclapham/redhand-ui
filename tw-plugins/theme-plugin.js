const plugin = require('tailwindcss/plugin');
const defaultTheme = require('../tailwindConfig/tailwind.plugin.dark.config');

module.exports = plugin(function ({ addComponents }) {
  addComponents(
    defaultTheme
    );
  addComponents({
    '.btn': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
    },
    '.btn-blue': {
      backgroundColor: '#3490dc',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2779bd'
      },
    },
    '.btn-red': {
      backgroundColor: '#e3342f',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#cc1f1a'
      },
    },
  });


  addComponents({
    '.btn2': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
    },
    '.btn-blue2': {
      backgroundColor: '#3490dc',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2779bd'
      },
    },
    '.btn-red2': {
      backgroundColor: '#e3342f',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#cc1f1a'
      },
    },
  });
});