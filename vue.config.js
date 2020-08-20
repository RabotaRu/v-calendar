const path = require('path');

module.exports = {
  css: {
    extract: false,
  },
  runtimeCompiler: true,
  outputDir: 'lib',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
  },
  lintOnSave: undefined,
};
