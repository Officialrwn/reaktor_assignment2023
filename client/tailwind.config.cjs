/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				lightgreen: "#AFFF8D"
			},
			visibility: ["group-hover"],
		},
  },
  plugins: [],
}