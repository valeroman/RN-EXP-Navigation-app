import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
      <View className='mt-10'>
        <Text className='text-4xl font-work-black'>Hola planeta tierra</Text>
        <Text className='text-3xl font-work-medium'>Hola planeta tierra</Text>
        <Text className='text-2xl font-work-light'>Hola planeta tierra</Text>
      </View>
    </SafeAreaView>

  )
}

export default App;