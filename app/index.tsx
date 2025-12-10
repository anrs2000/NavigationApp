import React from 'react';
import { Text, View } from 'react-native';


import CustomButton from '@/components/shared/customButton';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import "./global.css";

const App = () => {
  return (<>
    <SafeAreaView></SafeAreaView>
    <View>
      <Text className='font-workSans-black'>Ejemplo de texto utilizando la fuente con className (NativeWind)</Text>
      <CustomButton color='primary'
      onPress={()=>router.push('./products')}
      >PRODUCTOS</CustomButton>
    </View>
    </>
  )
}


export default App