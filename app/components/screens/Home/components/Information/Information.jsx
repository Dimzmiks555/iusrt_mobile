import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text } from 'react-native'

const Information = () => {
  return (
    <View className="">
         <LinearGradient
            end={{ x: 0.1, y: 1.0 }}
            className="py-5 px-6 my-1 rounded-xl"
            colors={['#8B00FF', '#CE00BA']}
        >
            <Text className="text-white text-lg font-extrabold mb-3">ИП Афанасьев Николай Дмитриевич</Text>
            <Text className="text-white text-md mb-1">ИНН 365232150403 </Text>
            <Text className="text-white text-md mb-1">ОГРН 306365201400042  </Text>
            <Text className="text-white text-md mb-1">Система НО: Патент</Text>
        </LinearGradient>
    </View>
  )
}

export default Information