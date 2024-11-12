/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        background: "var(--background-color)",
        productbackground: "var(--product-bg)",
        textBlack: "var(--text-color-black)",
        textGray: 'var(--text-color-gray)',
        textWhite: "var(--text-color-white)",
        footerbg: "var(--footer-bg)",
        skyblue: "var(--bg-sky-blue)",
        textskyblue: "var(--text-color-light-blue)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(91.45deg, rgba(40, 70, 148, 0.14) -1.47%, rgba(255, 255, 255, 0.14) 23.84%, rgba(40, 70, 148, 0.14) 49.14%, rgba(255, 255, 255, 0.14) 74.45%, rgba(40, 70, 148, 0.14) 99.76%)',
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slide: "slide 20s linear infinite",
      },
    },
  },
  plugins: [],
};
