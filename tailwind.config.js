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
      height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
      colors: {
        papasdarkred: "#a61626",
        papasred: "#d01b30",
        papasred400: "#cc858e",
        papaslightred: "#fae8ea",
        papaswhite: "#fff",
        papasblack: "#181818"
      },
    }, 
  },
  plugins: [],
}
