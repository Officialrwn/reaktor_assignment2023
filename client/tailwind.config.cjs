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
				lightgreen: "#AFFF8D",
				coppercrayola: "#C57B57",
				tumbleweed: "#F1AB86",
				navajowhite: "#F7DBA7",
				charlestongreen: "#1E2D2F",
				darkjunglegreen: "#041F1E"
			},
			visibility: ["group-hover"],
			fontFamily: {
				'poppins': ['Poppins']
			}
		},
  },
  plugins: [],
}