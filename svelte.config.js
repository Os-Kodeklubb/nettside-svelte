import path from 'path';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: adapter(), // currently the adapter does not take any options
        target: '#svelte',
        vite: {
            resolve: {
                alias: {
                    // these are the aliases and paths to them
                    $lib: path.resolve('./src/lib'),
                    $static: path.resolve('./static'),
                },
            },
        },
        prerender: {
            crawl: true,
            enabled: true,
            onError: 'continue',
            entries: ['*'],
        },
    },
};

export default config;
