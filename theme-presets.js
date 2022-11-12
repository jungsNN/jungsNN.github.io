// Example preset
module.exports = {
    theme: {
      colors: {
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
      },
      fontFamily: {
        sans: ['Fahkwong', 'sans-serif'],
      },
      extend: {
        flexGrow: {
          2: '2',
          3: '3',
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
