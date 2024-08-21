/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1440px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "480px" },
      xxs: { max: "300px" },
    },
    extend: {
      keyframes: {
        ripple: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(10)", opacity: 0.5 },
          "100%": { transform: "scale(40)", opacity: 0 },
        },
        bounced: {
          "0%": { opacity: 0, height: 0 },
          "100%": { opacity: "100%", height: "100%" },
        },
      },
      animation: {
        "ripple-animation": "ripple 1s ease 1 forwards",
      },
      colors: {
        gray: "#3E3D40",
      },
    },
  },
  plugins: [],
};
