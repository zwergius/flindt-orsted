const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
  plugins: [
    autoprefixer,
    require('postcss-nested'),

    !dev &&
      cssnano({
        preset: 'default'
      })
  ]
};
