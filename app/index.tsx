import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router';

const App = () => {

  return <Redirect href='/tabs/home'/>
  // return <Redirect href='/(stack)/home'/>

  // return (
  //   <SafeAreaView>
  //     <View className='mt-10'>
  //       <Text className='text-4xl font-work-black'>Hola planeta tierra</Text>
  //       <Text className='text-3xl color-primary font-work-medium'>Hola planeta tierra</Text>
  //       <Text className='text-2xl color-secondary font-work-light'>Hola planeta tierra</Text>
  //       <Text className='text-xl color-secondary-100 font-work-light'>Hola planeta tierra</Text>
  //       <Text className='text-xl color-secondary-200 font-work-light'>Hola planeta tierra</Text>
  //       <Text className='text-base color-tertiary font-work-light'>Hola planeta tierra</Text>
  //     </View>
  //   </SafeAreaView>

  // )
}

export default App;