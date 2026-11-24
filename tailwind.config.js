/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spring: '#F3F3E9',
        cream: '#F6F6ED',
        cinnabar: {
          DEFAULT: '#E33529',
          dark: '#B9261C',
          deep: '#A02B22',
        },
        cherub: {
          DEFAULT: '#F4CED3',
          stage: '#F3C3CB',
          deep: '#F0B5BE',
          soft: '#F6D2D8',
        },
        sail: '#AFD8FB',
        cerulean: {
          DEFAULT: '#2B6786',
          dark: '#124E6D',
          light: '#5B93B0',
        },
        sun: {
          DEFAULT: '#FFF500',
          dark: '#DCC060',
        },
        paper: '#F3F3F3',
        brownInk: {
          DEFAULT: '#693413',
          mid: '#854720',
          light: '#925026',
        },
        lilac: {
          1: '#E6DFE7',
          2: '#EAD9EC',
          3: '#EACDEF',
          4: '#D8B3DF',
        },
        ink: '#1E1B18',
      },
      fontFamily: {
        display: ['"Bayon"', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '-3px 4px 18px 0 rgba(221, 198, 202, 0.45)',
        soft: '0 14px 40px -12px rgba(30, 27, 24, 0.12)',
      },
      transitionTimingFunction: {
        expressive: 'cubic-bezier(0.24, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
