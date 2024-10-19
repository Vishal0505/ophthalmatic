/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       primary: 'var(--primary-color)',             
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        textBlack: 'var(--text-color-black)',
        textWhite: 'var(--text-color-white)',  
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 30s linear infinite',
      },
      colors: {
        'sky-blue': '#EFF8FF',
        'primary-blue' : '#284694'
      },
    },
  },
  plugins: [],
}
