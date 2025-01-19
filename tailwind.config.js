/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'comic':['Carter One', 'system-ui'],
        'sacramento':['Sacramento', 'system-ui'],
      },
      colors: {
        'primary': '#00dc64',
      },
      animation: {
        'marquee-right': 'marquee-right 30s linear infinite',
        'marquee-left': 'marquee-left 30s linear infinite',
      },
      keyframes: {
        'marquee-right': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-left': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    },
  },
  plugins: [],
}