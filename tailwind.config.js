/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'gray-100': '#fff',
      },
    }, 
    colors: {
      papasred: "#AD192A",
      papaslightred: "#F1E8EA",
      papaswhite: "#fff",
      papasblack: "#181818",
    },
  },
  plugins: [],
}
