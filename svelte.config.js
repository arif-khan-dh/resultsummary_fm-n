import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess';

const { sass } = preprocess;

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
    preprocess: vitePreprocess(),
    // preprocess: preprocess(),
    // preprocess: [vitePreprocess(), sass],
    // preprocess: [sass],
}
