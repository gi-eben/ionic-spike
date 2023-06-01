/** @type { import('tailwindcss').Config } */
const dT = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,ts,vue}'],
  darkMode: 'media', // or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      berry: {
        500: '#553145',
        600: '#381A2A'
      },
      redwood: {
        500: '#A45246',
        600: '#762E23'
      },
      sandstone: {
        50: '#FEFDFA',
        100: '#FDFBF7',
        200: '#FBF9F4',
        300: '#F9F6F0',
        400: '#F3ECE2',
        500: '#DBD0C0',
        600: '#BCA68C',
        700: '#9D7F60',
        800: '#7F5C3D'
      },
      gray: {
        25: '#FDFDFC',
        50: '#FAFAF9',
        100: '#F5F5F4',
        200: '#E7E5E4',
        300: '#D7D3D0',
        400: '#A9A29D',
        500: '#79716B',
        600: '#57534E',
        700: '#44403C',
        800: '#292524',
        900: '#1C1917'
      },
      error: {
        25: '#FFFBFA',
        50: '#FEF3F2',
        100: '#FEE4E2',
        200: '#FECDCA',
        300: '#FDA29B',
        400: '#F97066',
        500: '#F04438',
        600: '#D92D20',
        700: '#B42318',
        800: '#912018',
        900: '#7A271A'
      },
      warning: {
        25: '#FFFCF5',
        50: '#FFFAEB',
        100: '#FEF0C7',
        200: '#FEDF89',
        300: '#FEC84B',
        400: '#FDB022',
        500: '#F79009',
        600: '#DC6803',
        700: '#B54708',
        800: '#93370D',
        900: '#7A2E0E'
      },
      success: {
        50: '#FDFEF7',
        100: '#F7FBE9',
        200: '#EFF8D5',
        300: '#DCEBB9',
        400: '#C4D89E',
        500: '#A4BE7B',
        600: '#83A359',
        700: '#65883D',
        800: '#4A6E27',
        900: '#365B17'
      }
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1024px'
    },
    extend: {
      boxShadow: {
        xs: '0px 1px 2px 0px #1018280D'
      },
      fontFamily: {
        serif: ['IBM Plex Serif', ...dT.fontFamily.serif],
        sans: ['IBM Plex Sans', ...dT.fontFamily.sans]
      }
    }
  }
};
