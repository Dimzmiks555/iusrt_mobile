import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Auth from './app/components/screens/Auth/Auth';
import Navigation from './app/navigation/Navigation';
import AuthProvider from './app/providers/AuthProvider';
export default function App() {

  const [fontsLoaded] = useFonts({
    'PTSans': require('./assets/fonts/PTSans-Regular.ttf'),
  });


  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Navigation/>
      </SafeAreaProvider>
    </AuthProvider>
    // <View></View>
  );
}

