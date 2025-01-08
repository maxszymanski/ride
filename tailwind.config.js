/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				open: 'Open Sans Variable, sans-serif',
			},
			colors: {
				first: '#FFFFFF',
				second: '#292929',
				third: '#F1F1F1',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
