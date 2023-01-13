/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		fontFamily: {
			'poppins': ['Poppins']
		},
    extend: {
			colors: {
				lightgreen: "#AFFF8D"
			},
			visibility: ["group-hover"],
			fontFamily: {
				'poppins': ['Poppins']
			}
		},
  },
  plugins: [],
}