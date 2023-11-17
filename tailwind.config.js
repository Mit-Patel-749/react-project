/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
				'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
			  }
		},
		colors: {
			current : "currentColor",
			textColor : "#192434",
			textColorGray : "#5A5A5A",
			textColorSecondary : "#18273A" ,
			textPera : "rgba(27, 43, 65, 0.72)" ,
			textWhite : "#fff" ,
			textLightblack : "#1A293D" ,
			themeRed : '#E12929',
			themeGray : '#F6FAFC',
			themeWhite : '#fff',
			themeWhitelight : 'rgba(255, 255, 255, 0.80)',
		},
		fontFamily: {
			barlow: ["'Barlow'"],
			raleway: ['"Raleway"'],
		},
		
		container: {
			center: true,
			padding: {
				DEFAULT: "15px",
			},
			screens: {
				sm: "576px",
				md: "768px",
				lg: "1024px",
				// xl: "1025px",
			},
		},
	},
	plugins: [],
}
