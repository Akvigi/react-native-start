import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import UIButton from '@/components/common/UIButton.tsx';

const HomeScreen = () => {
  const nav = useNavigation();
  return (
    <View>
      <UIButton
        title={'Go to profile'}
        onPress={() => nav.navigate('Profile')}
      />
    </View>
  );
};

export default HomeScreen;
