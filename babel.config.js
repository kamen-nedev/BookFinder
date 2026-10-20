module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@ui': './src/ui/components/index.ts',
          '@src': './src',
        },
      },
    ],
  ],
};
