
const BREAKPOINTS = require('./config/breakpoints.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content:[
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      fontWeight: {
        light:300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        dark: {
          primary: {
            background: "#09090b",
          },
          secondary: {
            background: "#18181b",
          },
          text: {
            primary: "#e5e7eb",
            secondary: "#88888"
          }
        },
        light: {
          primary: {
            background: "#fff"
          },
          secondary: {
            background: "#e5e5e5",
          },
          text: {
            primary: "#111827",
            secondary: "#666"
          }
        },
        neutral: {
          bluedark: "#0891b2",
          blue: "#06b6d4",
          bluelight: "#a5f3fc",
          bluelight2: "#cffafe",
          white: "#FFFFFF",
          overlay: "#171717",
          gray: "#4b5563",
          graylight: "#d1d5db",
          red: "#dc2626",
          redlight: "#fecaca",
          green: "#16a34a",
          greenlight: "#dcfce7"

        },
      },
      screens: {
        sm: { max: `${BREAKPOINTS.SM.MAX}px` },
        lg: `${BREAKPOINTS.LG.MIN}px`,
      },
      container: {
        screens: {
          sm: { max: `${BREAKPOINTS.SM.MAX}px` },
          lg: `${BREAKPOINTS.LG.MIN}px`,
          xl: "1550px"
        },
      },
      extend: {
        fontFamily: {
          sans: ['var(--font-inter)'],
        },
        fontSize: {
          small: '0.95rem',
          base: '1.125rem', 
          h4: '1.25rem', 
          h3: '1.5rem', 
          h2: '1.875rem', 
          h1: '2.25rem',
          headerMobile: "3rem",
          header: "4rem"
        },
        height: {
          heroBanner: '450px',
          articleBannerMobile: '176px',
          articleBanner: '232px',
        },
        boxShadow: {
          image: '0px 8px 24px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  plugins: [require('@tailwindcss/typography')],
}

