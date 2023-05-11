module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    darkMode: 'media',
    extend: {},
  },
  presets: [require('./theme-presets.js')],
};
