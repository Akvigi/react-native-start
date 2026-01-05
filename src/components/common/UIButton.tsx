import { Button, ButtonProps } from 'react-native';
import useColors from '@/hooks/useColors.ts';

const UIButton = (props: ButtonProps) => {
  const colors = useColors();

  return <Button color={colors.text} {...props} />;
};

export default UIButton;
