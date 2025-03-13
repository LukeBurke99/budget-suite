/* eslint-disable @typescript-eslint/typedef */
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		alias: {
			'$shared': path.resolve('./node_modules/$shared')
		}
	}
};

export default config;
// "@shared": "workspace:@budget-suite/shared@*"