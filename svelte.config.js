import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapt: adapter({ out: 'my-output-directory' }),
		target: '#svelte'
	}
};

export default config;
