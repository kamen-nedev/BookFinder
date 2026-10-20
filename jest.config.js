module.exports = {
  preset: '@react-native/jest-preset',
  moduleNameMapper: {
    '^@ui$': '<rootDir>/src/ui/components/index.ts',
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
};
