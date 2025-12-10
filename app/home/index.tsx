import CustomButton from '@/components/shared/CustomButton'
import React from 'react'
import { View } from 'react-native'

const HomeScreen = () => {
    return (

        <View className='px-10'>
            <CustomButton color='primary'>Productos</CustomButton>
            <CustomButton color='secondary'>Profile</CustomButton>
            <CustomButton color='tertiary'>Ajustes</CustomButton>
            {/* //     <Text>HOME</Text>
        //     <Link href='/products' className='mb-5'>PRODUCTOS {' '}</Link>
        //     <Link href='/profile' className='mb-5'>PERFIL {' '}</Link>
        //     <Link href='/settings' className='mb-5'>AJUSTES {' '}</Link> */}
        </View>
    )
}

export default HomeScreen