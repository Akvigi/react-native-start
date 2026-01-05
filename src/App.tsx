import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from '@/navigation/base.ts';
import useColors from '@/hooks/useColors.ts';
import { appStyles } from '@/App.styles.ts';

function App() {
  const colors = useColors();

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <View style={appStyles(colors).viewContainer}>
        <Navigation />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
