import { createStaticNavigation } from '@react-navigation/native';
import { StaticParamList } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen.tsx';
import ProfileScreen from '@/screens/ProfileScreen.tsx';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});

// bun add/npm i @react-navigation/bottom-tabs
// const BottomRootStack = createBottomTabNavigator({
//   screens: {
//     Home: HomeScreen,
//     Profile: ProfileScreen,
//   },
// });

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Navigation = createStaticNavigation(RootStack);

export { Navigation };
