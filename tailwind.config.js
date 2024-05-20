/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./build/*.html",
    "./build/assets/css/*.css", // Add this line to include your custom CSS file
    "./build/*.html",
    "./build/assets/js/*.js", // Add this line to include your custom CSS file
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        primaryColor: colors.violet,
      },
      keyframes: {
        MenuSlideIn: {
          '0%': {
            transform: 'translatey(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translatey(0)',
            opacity: '1',
          },
        },
        FadeOnAnim: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        InsideMenuSizingIn: {
          '0%': {
            height: '0vh',
          },
          '100%': {
            height: '100vh',
          },
        },

      },
      animation: {
        'menu-slide-in': 'MenuSlideIn 1s ease-out',
        'Inside-menu-sizingIn': 'InsideMenuSizingIn 1s ease-out',
        'Fade-on-anim': 'FadeOnAnim 1s ease-out',
      },
      transitionProperty: {
        'height': 'height'
      }

    },
  },
  plugins: [],
}
