import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 


const Bills = () => {
  return (
    <View
        className="py-5 px-6 my-3 rounded-xl border border-gray-300"
    >
        <Text className="text-lg font-semibold">Требуется оплата</Text>
        <View className="flex-row justify-between">
            <View className="w-[48%]">
                <Text className="text-lg font-regular">Бухгалтеру</Text>
                <Text className="text-2xl text-red-600 font-extrabold">500,00₽ </Text>
                <Text className="text-md font-light mb-2">по 1 пакету услуг</Text>
                <TouchableOpacity className="bg-violet-600 rounded-xl px-3 py-2 flex-row items-center">
                    <FontAwesome5 name="bars" size={20} color="white" />
                    <Text className="text-white font-semibold ml-2">Подробнее</Text>
                </TouchableOpacity>
            </View>
            <View className="w-[48%]">
                <Text className="text-lg font-regular">Государству</Text>
                <Text className="text-2xl text-red-600 font-extrabold">12 654,32₽ </Text>
                <Text className="text-md font-light mb-2">по 4 квитанциям</Text>
                <TouchableOpacity className="bg-violet-600 rounded-xl px-3 py-2 flex-row items-center">
                    <FontAwesome5 name="bars" size={20} color="white" />
                    <Text className="text-white font-semibold ml-2">Подробнее</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Bills