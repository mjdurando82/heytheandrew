/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        heytheandrew: "url('/public/images/Group.png')",
        callus: "url('/public/images/CALLUS.png')"
      }
    }
  },
  plugins: []
}
