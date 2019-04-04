module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "@client/(.*)": "<rootDir>/src/client/$1"
  },
};