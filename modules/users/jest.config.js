module.exports = {
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/../../$1',
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'jsx'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.[tj]sx?'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
