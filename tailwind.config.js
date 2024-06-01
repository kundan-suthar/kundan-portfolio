/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // 'xs': '1.6rem',
        // 'sm': '1.8rem',
        // 'md': '2.2rem',
        // 'lg': '3.6rem',
        // 'xl': '5.6rem',
        // '2xl': '9.6rem',
      },
      colors: {
        'background': '#111',
        'bg-opaque': 'hsla(0,0%,7%,.25)',
        'background-light': '#232323',
        'background-dark': '#080808',
        'text': '#ebecf3',
        'brand': '#0aff9d',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

