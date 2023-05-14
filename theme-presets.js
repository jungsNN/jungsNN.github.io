/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    fontFamily: {
      body: ['yrsa', ...fontFamily.serif],
      'body-bold': ['yrsa-bold', ...fontFamily.serif],
      doc: ['source-sans-pro', ...fontFamily.sans],
      sofachrome: ['sofachrome', ...fontFamily.sans]
    },
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        rect: '3 / 2',
        video: '16 / 9',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      colors: {
        body: {
          DEFAULT: 'var(--base-body)',
          100: 'var(--body-100)',
          200: 'var(--body-200)',
          300: 'var(--body-300)',
        },
        'btn-color': 'var(--btn-color)',
        'btn-focus': 'var(--btn-focus)',
        black: '#000000',
        white: '#ffffff',
        gray: '#cdcdcd',
        red: '#ff0000',
      },
      flexGrow: {
        2: '2',
        3: '3',
      },
      rounded: {
        0: '0',
        2: '2',
        4: '4',
        8: '8',
        16: '16',
        24: '24',
        32: '32',
      },
      zIndex: {
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      screens: {
        xs: '320px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }),
        },
        { values: theme('translate'), supportsNegativeValues: true }
      );
    }),
  ],
};
