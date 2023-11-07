const {
  blurs,
  boxShadows,
  colors,
  fontSizes,
  textVariables,
  borderVariables,
  foregroundVariables,
  backgroundVariables,
  buttonPrimaryVariables,
  buttonSecondaryVariables,
  buttonSecondaryColorVariables,
  buttonTertiary,
  buttonTertiaryColor,
  buttonPrimaryErrorVariables,
  buttonSecondaryErrorVariables,
  buttonTertiaryErrorVariables,
} = require('./untitled-ui')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.astro',
    './src/layouts/**/*.astro',
    './src/pages/**/*.astro',
    './src/snippets/**/*.astro',
    './src/scripts/**/*.js',
  ],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
  },
  theme: {
    blur: { ...blurs },
    boxShadow: { ...boxShadows },
    colors: { ...colors },
    fontSize: { ...fontSizes },

    extend: {
      colors: {
        ...textVariables,
        ...borderVariables,
        ...foregroundVariables,
        ...backgroundVariables,

        ...buttonPrimaryVariables,
        ...buttonSecondaryVariables,
        ...buttonSecondaryColorVariables,
        ...buttonTertiary,
        ...buttonTertiaryColor,
        ...buttonPrimaryErrorVariables,
        ...buttonSecondaryErrorVariables,
        ...buttonTertiaryErrorVariables,
      },
    },
  },

  plugins: [],
}
