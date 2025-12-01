import React from 'react';
import { Text, View } from 'react-native';


import CustomButton from '@/components/shared/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import "./global.css";

const App = () => {
  return (<>
    <SafeAreaView></SafeAreaView>
    <View>
      <Text className='font-workSans-black'>Ejemplo de texto utilizando la fuente con className (NativeWind)</Text>
      <CustomButton color='primary'>PRODUCTOS</CustomButton>
    </View>
    </>
  )
}

export default App