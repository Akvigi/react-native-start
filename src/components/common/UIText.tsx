import { Text, TextProps } from 'react-native';
import useColors from '@/hooks/useColors.ts';

const UIText = ({ style, ...props }: TextProps) => {
  const colors = useColors();

  return (
    <Text
      style={[
        {
          color: colors.text,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default UIText;
