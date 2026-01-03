import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { StaticParamList } from '@react-navigation/core';
import ProfileScreen from './screens/ProfileScreen.tsx';
import HomeScreen from './screens/HomeScreen.tsx';

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

function App() {
  // const colors = useColors();

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
