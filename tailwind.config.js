/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    data: {
      disabled: 'disabled~="true"'
    },
    extend: {},
  },
  plugins: [],
}
