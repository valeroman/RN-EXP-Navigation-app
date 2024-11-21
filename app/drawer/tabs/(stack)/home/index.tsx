import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';
import CustomButton from '@/components/shared/CustomButton';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>
        
        <CustomButton
          color='primary'
          className='mb-2'
          onPress={() => router.push('/drawer/tabs/products')}
        >
          Productos
        </CustomButton>

        <CustomButton
          className='mb-2'
          onPress={() => router.push('/drawer/tabs/profile')}
          color='secondary'
        >
          Profile
        </CustomButton>

        <CustomButton
          className='mb-2'
          onPress={() => router.push('/drawer/tabs/settings')}
          color='tertiary'
        >
          Settings
        </CustomButton>

        <Link href='/drawer/tabs/products' asChild>
          <CustomButton variant='text-only' className='mb-10' color='primary'>Productos</CustomButton>
        </Link>

        {/* <Link className='mb-5' href='/products'>
          Productos{' '}
        </Link>
        <Link className='mb-5' href='/profile'>
          Perfil{' '}
        </Link>
        <Link className='mb-5' href='/settings'>
          Ajustes{' '}
        </Link> */}
      </View>
    </SafeAreaView>

  )
}

export default HomeScreen;