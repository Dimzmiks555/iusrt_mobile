import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 



const ServiceItem = () => {
  return (
    <View className="border border-gray-300 py-3 px-4 mb-2 rounded-lg">
        <View className="flex-row justify-between">
            <Text className="font-semibold">Пакет услуг № 123</Text>
            <Text className="text-gray-500">22.11.2022</Text>
        </View>
        <View className="flex-row justify-between items-center mb-1">
            <Text className="text-violet-500 text-sm font-bold">Оформление НДФЛ</Text>
        </View>
        <View className="flex-row justify-between items-center mb-2">
            <View className="rounded-md bg-emerald-500 px-3 py-1">
                <Text className="text-white text-xs">Оплачено</Text>
            </View>
            <Text className="text-emerald-500 text-xl font-bold">500,00₽</Text>
        </View>
        <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity className="bg-violet-600 px-3 py-1 rounded-md flex-row items-center">
                <FontAwesome5 name="bars" size={16} color="white" />
                <Text className="text-white ml-2">Подробнее</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-gray-300 px-3 py-1 rounded-md flex-row items-center">
                <Ionicons name="attach" size={20} color="gray" />
                <Text className="text-gray-700 ml-1">Прикрепить</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


export default ServiceItem