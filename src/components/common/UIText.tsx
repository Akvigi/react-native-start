import { Text, TextProps } from 'react-native';
import useColors from '@/hooks/useColors.ts';
import { commonComponentsStyles } from '@/components/common/common.styles.ts';

const UIText = (props: TextProps) => {
  const colors = useColors();

  return <Text style={commonComponentsStyles(colors).text} {...props} />;
};

export default UIText;
