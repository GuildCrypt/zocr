module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    library: 'bundle',
    libraryTarget: 'window',
  },
  optimization: {
    minimize: false
  },
  node: { fs: 'empty' }
};
