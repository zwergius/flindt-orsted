const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: [
    sveltePreprocess({
      defaults: {
        style: 'postcss'
      },
      postcss: true
    })
  ],
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {})
      }
    }
  }
};
