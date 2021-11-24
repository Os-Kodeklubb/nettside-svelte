import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: adapter(), // currently the adapter does not take any options
        target: '#svelte',
    },
};

export default config;
