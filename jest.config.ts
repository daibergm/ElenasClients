export default {
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
    'png',
    'jpg',
    'html',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.{js,ts,tsx}',
    '!**/node_modules/*',
    '!__tests/*',
    '!src/**/*{styles,i18n}.{js,ts}',
    '!src/**/config/*.{js,ts}',
    '!src/**/constants/*.{js,ts}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
  setupFilesAfterEnv: [
    '<rootDir>/setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '@testing-library/jest-native/extend-expect',
  ],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.history/',
    '/__tests__/utils/*',
  ],
};
