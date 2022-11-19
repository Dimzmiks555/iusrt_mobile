import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider } from 'tailwind-rn';
import Auth from './app/components/screens/Auth/Auth';
import utilities from './tailwind.json';
export default function App() {

  const [fontsLoaded] = useFonts({
    'PTSans': require('./assets/fonts/PTSans-Regular.ttf'),
  });


  return (
      <TailwindProvider utilities={utilities}>
        <Auth/>
      </TailwindProvider>
  );
}

