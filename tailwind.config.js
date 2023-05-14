module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    darkMode: false,
    extend: {},
  },
  presets: [require('./theme-presets.js')],
};
