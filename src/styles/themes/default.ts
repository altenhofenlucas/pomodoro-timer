const gray100Color = '#E1E1E6'
const gray800Color = '#202024'
const green500Color = '#00875F'
const yellow500Color = '#FBA94C'
const red500Color = '#AB222E'

export const StatusColors = {
  green: green500Color,
  yellow: yellow500Color,
  red: red500Color,
}

export const defaultTheme = {
  colors: {
    primary: '#000',
    secondary: '#fff',
    'gray-100': gray100Color,
    'gray-300': '#C4C4CC',
    'gray-400': '#8D8D99',
    'gray-500': '#7C7C8A',
    'gray-600': '#323238',
    'gray-700': '#29292E',
    'gray-800': gray800Color,
    'gray-900': '#121214',
    'green-300': '#00B37E',
    'green-500': green500Color,
    'green-700': '#015F43',
    'red-500': red500Color,
    'red-700': '#7A1921',
    'yellow-500': yellow500Color,
    background: gray800Color,
  },
  status: {
    green: green500Color,
    red: red500Color,
    yellow: yellow500Color,
  },
  button: {
    variants: {
      primary: {
        backgroundColor: green500Color,
        color: gray100Color,
      },
      secondary: {
        backgroundColor: 'white',
        color: 'blue',
      },
    },
  },
}
