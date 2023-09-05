/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const plugin = require('tailwindcss/plugin')
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const svgToDataUri = require('mini-svg-data-uri')

module.exports = {
  content: [
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
      extend: {
        colors: {
          code: {
            highlight: 'rgb(125 211 252 / 0.1)',
          },
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              maxWidth: 'none',
              color: theme('colors.slate.700'),
              hr: {
                borderColor: theme('colors.slate.100'),
                marginTop: '3em',
                marginBottom: '3em',
              },
              'h1, h2, h3': {
                letterSpacing: '-0.025em',
              },
              h2: {
                marginBottom: `${16 / 24}em`,
              },
              h3: {
                marginTop: '2.4em',
                lineHeight: '1.4',
              },
              h4: {
                marginTop: '2em',
                fontSize: '1.125em',
              },
              'h2 small, h3 small, h4 small': {
                fontFamily: theme('fontFamily.mono').join(', '),
                color: theme('colors.slate.500'),
                fontWeight: 500,
              },
              'h2 small': {
                fontSize: theme('fontSize.lg')[0],
                ...theme('fontSize.lg')[1],
              },
              'h3 small': {
                fontSize: theme('fontSize.base')[0],
                ...theme('fontSize.base')[1],
              },
              'h4 small': {
                fontSize: theme('fontSize.sm')[0],
                ...theme('fontSize.sm')[1],
              },
              'h2, h3, h4': {
                'scroll-margin-top': 'var(--scroll-mt)',
              },
              ul: {
                listStyleType: 'none',
                paddingLeft: 0,
              },
              'ul > li': {
                position: 'relative',
                paddingLeft: '1.75em',
              },
              'ul > li::before': {
                content: '""',
                width: '0.75em',
                height: '0.125em',
                position: 'absolute',
                top: 'calc(0.875em - 0.0625em)',
                left: 0,
                borderRadius: '999px',
                backgroundColor: theme('colors.slate.300'),
              },
              a: {
                fontWeight: theme('fontWeight.semibold'),
                textDecoration: 'none',
                borderBottom: `1px solid ${theme('colors.sky.300')}`,
              },
              'a:hover': {
                borderBottomWidth: '2px',
              },
              'a code': {
                color: 'inherit',
                fontWeight: 'inherit',
              },
              strong: {
                color: theme('colors.slate.900'),
                fontWeight: theme('fontWeight.semibold'),
              },
              'a strong': {
                color: 'inherit',
                fontWeight: 'inherit',
              },
              kbd: {
                background: theme('colors.slate.100'),
                borderWidth: '1px',
                borderColor: theme('colors.slate.200'),
                padding: '0.125em 0.25em',
                color: theme('colors.slate.700'),
                fontWeight: 500,
                fontSize: '0.875em',
                fontVariantLigatures: 'none',
                borderRadius: '4px',
                margin: '0 1px',
              },
              code: {
                fontWeight: theme('fontWeight.medium'),
                fontVariantLigatures: 'none',
              },
              pre: {
                color: theme('colors.slate.50'),
                borderRadius: theme('borderRadius.xl'),
                padding: theme('padding.5'),
                boxShadow: theme('boxShadow.md'),
                display: 'flex',
                marginTop: `${20 / 14}em`,
                marginBottom: `${32 / 14}em`,
              },
              'p + pre': {
                marginTop: `${-4 / 14}em`,
              },
              'pre + pre': {
                marginTop: `${-16 / 14}em`,
              },
              'pre code': {
                flex: 'none',
                minWidth: '100%',
              },
              table: {
                fontSize: theme('fontSize.sm')[0],
                lineHeight: theme('fontSize.sm')[1].lineHeight,
              },
              thead: {
                color: theme('colors.slate.700'),
                borderBottomColor: theme('colors.slate.200'),
              },
              'thead th': {
                paddingTop: 0,
                fontWeight: theme('fontWeight.semibold'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.slate.100'),
              },
              'tbody tr:last-child': {
                borderBottomWidth: '1px',
              },
              'tbody code': {
                fontSize: theme('fontSize.xs')[0],
              },
              'figure figcaption': {
                textAlign: 'center',
                fontStyle: 'italic',
              },
              'figure > figcaption': {
                marginTop: `${12 / 14}em`,
              },
            },
          },
          dark: {
            css: {
              color: theme('colors.slate.400'),
              'h2, h3, h4, thead th': {
                color: theme('colors.slate.200'),
              },
              'h2 small, h3 small, h4 small': {
                color: theme('colors.slate.400'),
              },
              kbd: {
                background: theme('colors.slate.700'),
                borderColor: theme('colors.slate.600'),
                color: theme('colors.slate.200'),
              },
              code: {
                color: theme('colors.slate.200'),
              },
              hr: {
                borderColor: theme('colors.slate.200'),
                opacity: '0.05',
              },
              pre: {
                boxShadow: 'inset 0 0 0 1px rgb(255 255 255 / 0.1)',
              },
              a: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.sky.400'),
              },
              strong: {
                color: theme('colors.slate.200'),
              },
              thead: {
                color: theme('colors.slate.300'),
                borderBottomColor: 'rgb(148 163 184 / 0.2)',
              },
              'tbody tr': {
                borderBottomColor: 'rgb(148 163 184 / 0.1)',
              },
              'code::before': null,
              'code::after': null,
              'blockquote p:first-of-type::before': null,
              'blockquote p:last-of-type::after': null,              
            },
          },
        }),
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
          mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
          source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
          'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
        },
        spacing: {
          18: '4.5rem',
          full: '100%',
        },
        maxWidth: {
          '8xl': '90rem',
        },
        keyframes: {
          'flash-code': {
            '0%': { backgroundColor: 'rgb(125 211 252 / 0.1)' },
            '100%': { backgroundColor: 'transparent' },
          },
        },
        animation: {
          'flash-code': 'flash-code 1s forwards',
          'flash-code-slow': 'flash-code 2s forwards',
        },
        backgroundImage: (theme) => ({
          squiggle: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
              'colors.yellow.400'
            )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`
          )}")`,
        }),
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
        socialBg:'#F5F7FB',
        socialBlue: '#218DFA',
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
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
