/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f5f0',
          100: '#dce8dc',
          200: '#b8d1b8',
          300: '#8fb58f',
          400: '#689668',
          500: '#4a7c4a',
          600: '#2d5f2d',
          700: '#1f4a1f',
          800: '#163616',
          900: '#0d220d',
        },
        sand: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ebe1d1',
          300: '#dccbb3',
          400: '#c9b090',
          500: '#b89670',
          600: '#a37d54',
          700: '#826442',
          800: '#6b5237',
          900: '#5a4530',
        },
        earth: {
          50: '#f7f4f0',
          100: '#ede6dc',
          200: '#d9ccb8',
          300: '#c2ab8f',
          400: '#ab8a68',
          500: '#96714d',
          600: '#7d5c3f',
          700: '#664a35',
          800: '#563e2f',
          900: '#4a362a',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
