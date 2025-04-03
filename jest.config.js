module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Add this line to transform .ts and .tsx files
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust based on your folder structure
  },
};