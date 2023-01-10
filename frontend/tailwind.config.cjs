/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				lightgreen: "#AFFF8D"
			}
		},
  },
  plugins: [],
}