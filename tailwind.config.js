/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        heytheandrew: "url('/public/images/Group.png')",
        callus: "url('/public/images/CALLUS.png')",
        callus2: "url('/public/images/CALLUS2.png')",
        apArt: "url('/public/images/ApArt.png')",
        apArt2: "url('/public/images/ApArt2.png')"
      }
    }
  },
  plugins: []
}
