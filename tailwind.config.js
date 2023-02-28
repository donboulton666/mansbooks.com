/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const plugin = require('tailwindcss/plugin')
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  theme: {
    extend: {
      screens: {
        narrow: { raw: '(max-aspect-ratio: 3 / 2)' },
        wide: { raw: '(min-aspect-ratio: 3 / 2)' },
        'taller-than-854': { raw: '(min-height: 854px)' },
      },
      boxShadow: {
        highlight: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      colors: {
        foreground: "var(--foreground)",
        gray: {
          100: "var(--accents-1)",
          200: "var(--accents-2)",
          300: "var(--accents-3)",
          400: "var(--accents-4)",
          500: "var(--accents-5)",
          600: "var(--accents-6)",
          700: "var(--accents-7)",
          800: "var(--accents-8)",
        },
        "gray-main": "var(--gray)",
        "gray-base": "var(--gray1)",
        wine: {
          100: "#7e002f",
          200: "#70002a",
          300: "#620024",
          400: "#54001f",
          500: "#46001a",
          600: "#380015",
          700: "#2a0010",
          800: "#1c000a",
          900: "#0e0005",
        },
        "wine-main": "var(--wine)",
        "wine-base": "var(--wine1)",
        secondary: "var(--secondary-color)",
        sidebar: "var(--sidebar)",
        brand: {
          100: "var(--brand-lighter)",
          200: "var(--brand-light)",
          300: "var(--brand)",
          400: "var(--brand-dark)",
        },
      },
      fontSize: {
        xxs: "10px",
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
      },
      minWidth: {
        btn: "160px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
