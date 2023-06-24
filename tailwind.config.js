module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        red: {
          500: '#FD2831'
        },
        green: {
          500: '#23A858',
          400: '#EFFDF4'
        },
        pink: {
          300: '#FFEEF4',
          200: ' #FFFBEA'
        },
        white: {
          500: '#ffff'
        },
        sky: {
          500: '#CDE7E9',
          400: '#EFFDF4'
        },
        'orange': '#FFB565',
        'salt': '#7E84FF',
        'water': '#32CAFA',
        'oil': '#7373E1',
        'protein': '#F07AAC',
        'carousel-bg': '#CDE7E9',
        'gray': '#EBEFF9',
        'footer-bg-color': '#FFEEF4',
        'border-bottom': '#DABFC8',

      },
      backgroundImage: {
        'bg_image' : "url('/public/images/footer1.jpg')"
      },
      lineHeight: {
        hero: '4.5rem',
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'],
        'lobster': ["Lobster", 'sans-serif']
      }
    },
  },
  plugins: [],
};
