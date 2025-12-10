<<<<<<< Updated upstream
import React from 'react';
import { Text, View } from 'react-native';


import CustomButton from '@/components/shared/CustomButton';
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

=======
import React from 'react';

import { Redirect } from 'expo-router';
import "./global.css";

const App = () => {
  return <Redirect href="/home" />
  // return (
  //   <View className='mt-5 mx-5'>
  //     <Text className='workSans-black text-3xl text-primary'>App</Text>
  //     <Text className='text-secondary-100'>Variante 100 del color secondary</Text>
  //     <Link href="/products">ENLACE A PRODUCTOS</Link>
  //   </View>)
}

>>>>>>> Stashed changes
export default App