import useAppStore from '../store/appStore.ts';
import { View } from 'react-native';
import UIText from '@/components/common/UIText.tsx';

const ProfileScreen = () => {
  useAppStore(); // const appStore = useAppStore();

  return (
    <View>
      <UIText>12312312</UIText>
    </View>
  );
};

export default ProfileScreen;
