/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom utility to remove the number input spinners
      input: {
        'number': {
          '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            'appearance': 'none',
            'margin': '0',
          },
          '&': {
            '-moz-appearance': 'textfield',
          },
        },
      },
    },
  },
  plugins: [],
}
