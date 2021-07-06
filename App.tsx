import { Dosis_400Regular, Dosis_500Medium, Dosis_700Bold } from '@expo-google-fonts/dosis';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import Background from './src/components/Background';
import Routes from './src/routes';


export default function App() {
  const [fonstsLoaded] = useFonts({
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_700Bold
  })

  if (!fonstsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      
        <Routes />
     
    </Background>
  );
}
