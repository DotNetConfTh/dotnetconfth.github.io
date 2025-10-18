const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        'dotnet-purple': {
          DEFAULT: '#583586',
          light: '#7c4dae',
          dark: '#3d2660',
        },
        'dotnet-blue': {
          DEFAULT: '#1C9BD6',
          light: '#3bb0e3',
          dark: '#157aa8',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '2xl': '40rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'submarine-float': 'submarine-float 8s ease-in-out infinite',
        'submarine-float-fast': 'submarine-float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translate(0px, 0px) rotate(0deg)',
          },
          '25%': {
            transform: 'translate(-30px, -20px) rotate(-2deg)',
          },
          '50%': {
            transform: 'translate(-50px, 15px) rotate(1deg)',
          },
          '75%': {
            transform: 'translate(-20px, 30px) rotate(-1deg)',
          },
          '100%': {
            transform: 'translate(0px, 0px) rotate(0deg)',
          },
        },
        'submarine-float': {
          '0%': {
            transform: 'translateX(0px) translateY(0px)',
          },
          '50%': {
            transform: 'translateX(-40px) translateY(-15px)',
          },
          '100%': {
            transform: 'translateX(0px) translateY(0px)',
          },
        },
      },
    },
  },
  plugins: [],
}
