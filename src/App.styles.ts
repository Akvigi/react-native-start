import { AppColorTheme } from '@/styles/colors.ts';
import { StyleSheet } from 'react-native';

export const appStyles = (theme: AppColorTheme) =>
  StyleSheet.create({
    viewContainer: { flex: 1, backgroundColor: theme.background },
  });
