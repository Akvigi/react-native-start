import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useColors from './hooks/useColors';
import { Navigation } from './navigation/base.ts';

function App() {
  const colors = useColors();

  const styles = { flex: 1, backgroundColor: colors.background };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles}>
        <Navigation />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
