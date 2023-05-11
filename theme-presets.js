const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Fahkwong', 'sans-serif'],
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
        'soft-blue': '#cdebeb',
        'royal-blue': '#0115a8',
        background: {
          light: '#cdebeb',
          DEFAULT: '#cdebeb',
          dark: '#000000',
        },
        blue: {
          light: '#cdebeb',
          DEFAULT: '#cdebeb',
          dark: '#0115a8',
        },
        info: {
          light: '#0115a8',
          DEFAULT: '#0115a8',
          dark: '#fbe95e',
        },
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
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      screens: {
        sm: '480px',
        md: '768px',
      },
    },
  },
  // corePlugins: {
  //   aspectRatio: false,
  // },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
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
