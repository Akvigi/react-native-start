import { ColorValue } from 'react-native';

export type ColorThemeKeys = 'background' | 'text';

export type AppColorTheme = Record<ColorThemeKeys, ColorValue>;

export const commonColors: AppColorTheme = {
  background: '#FFFFFF',
  text: '#000000',
};

// const darkTheme: ColorTheme = {
//   background: '#000000',
//   text: '#FFFFFF',
//   ...commonColors,
// };
//
// const lightTheme: ColorTheme = {
//   background: '#FFFFFF',
//   text: '#000000',
//   ...commonColors,
// };
