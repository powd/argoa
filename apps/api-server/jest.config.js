module.exports = {
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/../../../$1',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.[tj]sx?'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
