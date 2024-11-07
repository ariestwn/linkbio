import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	extensions: ['.svelte'],
	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src',
			$lib: 'src/lib',
			$components: 'src/lib/components',
			$routes: 'src/routes'
		}
	},
	preprocess: [vitePreprocess()]
};
export default config;
