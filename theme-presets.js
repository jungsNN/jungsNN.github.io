// Example preset
module.exports = {
    theme: {
      fontFamily: {
        sans: ['Fahkwong', 'sans-serif'],
      },
      extend: {
        colors: {
          'soft-blue': '#cdebeb',
          'royal-blue': '#0115a8',
          'background': {
            light: '#cdebeb',
            DEFAULT: '#cdebeb',
            dark: '#000000',
          },
          'blue': {
            light: '#cdebeb',
            DEFAULT: '#cdebeb',
            dark: '#0115a8',
          },
          'info': {
            light: '#0115a8',
            DEFAULT: '#0115a8',
            dark: '#fbe95e',
          },
          'white': '#ffffff',
          'gray': '#cdcdcd',
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
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
