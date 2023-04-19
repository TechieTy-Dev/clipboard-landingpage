/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: 'hsl(171, 66%, 44%)',
        secondary: 'hsl(233, 100%, 69%)',
        heading: 'hsl(210, 10%, 33%)',
        text:'hsl(201, 11%, 66%)'
      }
    },
  },
  variants:{
    fill: ['hover']
  },
  plugins: [],
}

