/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        heytheandrew: "url('/public/images/Group.png')",
        callus: "url('/public/images/CALLUS.png')",
        callus2: "url('/public/images/CALLUS2.png')",
        callus3: "url('/public/images/CALLUS3.png')",
        apArt: "url('/public/images/ApArt.png')",
        apArt2: "url('/public/images/ApArt2.png')",
        cbs: "url('/public/images/Cbs.png')",
        wader: "url('/public/images/WADER.png')",
        graphicDesign: "url('/public/images/GraphicDesign.png')",
        graphicDesign2: "url('/public/images/GraphicDesign2.png')"
      }
    }
  },
  plugins: []
}
