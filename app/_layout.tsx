import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.tlf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.tlf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.tlf'),
  });

  useEffect(() => {
    if (error) throw error;


  }, [fontsLoaded, error])



  return <Slot />;
}

export default RootLayout