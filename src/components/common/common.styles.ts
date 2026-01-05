import { AppColorTheme } from '@/styles/colors.ts';
import { StyleSheet } from 'react-native';

export const commonComponentsStyles = (theme: AppColorTheme) =>
  StyleSheet.create({ text: { color: theme.text } });
