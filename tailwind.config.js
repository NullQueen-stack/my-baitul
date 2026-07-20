/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f6',
          100: '#d3dae8',
          200: '#a7b5d1',
          300: '#7b90ba',
          400: '#4f6ba3',
          500: '#2f4a82',
          600: '#1c3466',
          700: '#132750',
          800: '#0d1c3c',
          900: '#0a1530',
          950: '#060d1f',
        },
        gold: {
          50: '#faf6ea',
          100: '#f2e7c4',
          200: '#e6d093',
          300: '#d9b862',
          400: '#cda43e',
          500: '#b8902d',
          600: '#9a7523',
          700: '#7a5b1c',
          800: '#5c4315',
          900: '#3e2d0e',
        },
        skyline: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#b3e3ff',
          300: '#7cceff',
          400: '#4fb0e8',
          500: '#2b8fcc',
          600: '#1c70a6',
          700: '#175a84',
          800: '#154a6b',
          900: '#153f59',
        },
        ink: '#20242c',
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(10, 21, 48, 0.18)',
        card: '0 8px 30px -10px rgba(10, 21, 48, 0.25)',
        glow: '0 0 0 1px rgba(79,176,232,0.25), 0 8px 30px -8px rgba(79,176,232,0.35)',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(180deg, rgba(10,21,48,0.94) 0%, rgba(10,21,48,0.75) 55%, rgba(10,21,48,0.92) 100%)',
      },
      animation: {
        'drift': 'drift 18s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '120px 120px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
