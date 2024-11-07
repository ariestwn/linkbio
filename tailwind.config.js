const colors = require('tailwindcss/colors');

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#fee000',
					hover: '#eac800',
					active: '#ceb000'
				},
				dark: {
					DEFAULT: '#101113'
				},
				light: {
					DEFAULT: '#fff'
				}
			},
			fontFamily: {
				sans: ['system-ui', 'sans-serif', 'Helvetica', 'Arial', 'sans-serif']
			},
			fontSize: {
				xs: ['0.75rem', { lineHeight: '1.5' }],
				sm: ['0.875rem', { lineHeight: '1.5' }],
				base: ['1rem', { lineHeight: '1.5' }],
				lg: ['1.125rem', { lineHeight: '1.5' }],
				xl: ['1.25rem', { lineHeight: '1.5' }],
				'2xl': ['1.5rem', { lineHeight: '1.5' }],
				'3xl': ['1.875rem', { lineHeight: '1.5' }],
				'4xl': ['2.25rem', { lineHeight: '1.5' }],
				'5xl': ['3rem', { lineHeight: '1.5' }],
				'6xl': ['3.75rem', { lineHeight: '1.5' }],
				'7xl': ['4.5rem', { lineHeight: '1.5' }],
				'8xl': ['6rem', { lineHeight: '1.5' }],
				'9xl': ['8rem', { lineHeight: '1.5' }]
			}
		}
	}
};
