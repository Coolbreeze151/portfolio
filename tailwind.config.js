const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        fancy: ['Dancing Script'],
      },
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
        slowBounce: 'slowBounce 3s infinite',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '5%, 10%': { transform: 'translateX(1ch)' },
          '15%, 20%': { transform: 'translateX(2ch)' },
          '25%, 30%': { transform: 'translateX(3ch)' },
          '35%, 40%': { transform: 'translateX(4ch)' },
          '45%, 50%': { transform: 'translateX(5ch)' },
          '55%, 60%': { transform: 'translateX(6ch)' },
          '65%, 70%': { transform: 'translateX(7ch)' },
          '75%, 80%': { transform: 'translateX(8ch)' },
          '85%, 90%': { transform: 'translateX(9ch)' },
          '95%, 100%': { transform: 'translateX(11ch)' },
        },
        slowBounce: {
          '0%, 100%': {
            transform: 'translateY(-2%)',
            AnimationTimeline: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            AnimationTimeline: 'cubic-bezier(0.8, 0, 1, 1)',
          }
        }
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: 'daisyui-',
  },
}
