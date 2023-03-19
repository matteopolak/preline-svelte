const colors = require('tailwindcss/colors');

const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"node_modules/preline/dist/*.js"
	],
	theme: {
		extend: {
			colors: {
				primary: {
					'100': 'rgb(var(--color-primary-100) / <alpha-value>)',
					'200': 'rgb(var(--color-primary-200) / <alpha-value>)',
					'300': 'rgb(var(--color-primary-300) / <alpha-value>)',
					'400': 'rgb(var(--color-primary-400) / <alpha-value>)',
					'500': 'rgb(var(--color-primary-500) / <alpha-value>)',
					'600': 'rgb(var(--color-primary-600) / <alpha-value>)',
					'700': 'rgb(var(--color-primary-700) / <alpha-value>)',
					'800': 'rgb(var(--color-primary-800) / <alpha-value>)',
					'900': 'rgb(var(--color-primary-900) / <alpha-value>)',
				},
				secondary: {
					'100': 'rgb(var(--color-secondary-100) / <alpha-value>)',
					'200': 'rgb(var(--color-secondary-200) / <alpha-value>)',
					'300': 'rgb(var(--color-secondary-300) / <alpha-value>)',
					'400': 'rgb(var(--color-secondary-400) / <alpha-value>)',
					'500': 'rgb(var(--color-secondary-500) / <alpha-value>)',
					'600': 'rgb(var(--color-secondary-600) / <alpha-value>)',
					'700': 'rgb(var(--color-secondary-700) / <alpha-value>)',
					'800': 'rgb(var(--color-secondary-800) / <alpha-value>)',
					'900': 'rgb(var(--color-secondary-900) / <alpha-value>)',
				},
				neutral: {
					'100': 'rgb(var(--color-neutral-100) / <alpha-value>)',
					'200': 'rgb(var(--color-neutral-200) / <alpha-value>)',
					'300': 'rgb(var(--color-neutral-300) / <alpha-value>)',
					'400': 'rgb(var(--color-neutral-400) / <alpha-value>)',
					'500': 'rgb(var(--color-neutral-500) / <alpha-value>)',
					'600': 'rgb(var(--color-neutral-600) / <alpha-value>)',
					'700': 'rgb(var(--color-neutral-700) / <alpha-value>)',
					'800': 'rgb(var(--color-neutral-800) / <alpha-value>)',
					'900': 'rgb(var(--color-neutral-900) / <alpha-value>)',
				},
			},
		},
	},
	plugins: [
		require('preline/plugin'),
	],
};

module.exports = config;
