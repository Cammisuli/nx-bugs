module.exports = {
  name: 'lib9',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': [ 'babel-jest',
    { cwd: __dirname, configFile: './babel-jest.config.json' }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/lib9'
};
