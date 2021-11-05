module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    require.resolve('@babel/preset-typescript'),
  ],
  plugins: [],
};
