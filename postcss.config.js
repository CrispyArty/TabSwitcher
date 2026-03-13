module.exports = {
  plugins: {
    // 'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace',
      },
      stage: false,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true,
        'image-set-function': true,
      },
      // importFrom: ['./src/styles/vars.css', './src/styles/media.css'],
    },
  },
};
