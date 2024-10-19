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
        footerbg: 'var(--footer-bg)',
        skyblue: 'var(--bg-sky-blue)',
        textskyblue: 'var(--text-color-light-blue)',

      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 30s linear infinite',
      }
    },
  },
  plugins: [],
}
