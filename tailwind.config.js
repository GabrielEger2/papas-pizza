/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'gray-100': '#fff',
        'gray-900': '#212121'
      },
    }, 
    colors: {
      papasred: "#AD192A",
      papaslightred: "#F1E8EA",
      papaswhite: "#fff",
      papasblack: "#181818",
      gray900: "#212121",
      papasivory: "#FFFFF0"
    },
  },
  plugins: [],
}
