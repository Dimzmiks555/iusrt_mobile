import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


const ReceiptItem = ({showMore}) => {
  return (
    <View className="border border-gray-300 py-3 px-4 mb-2 rounded-lg">
        <View className="flex-row justify-between">
            <Text className="font-semibold">Пакет квитанций № 123</Text>
            <Text className="text-gray-500">22.11.2022</Text>
        </View>
        <View className="flex-row justify-between items-center mb-1">
            <Text className="text-violet-500 text-sm font-bold">Налоги</Text>
        </View>
        <View className="flex-row justify-between items-center mb-2">
            <View className="rounded-md bg-red-500 px-3 py-1">
                <Text className="text-white text-xs">Требуется оплата</Text>
            </View>
            <Text className="text-red-500 text-xl font-bold">12 654,32₽</Text>
        </View>
        <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity className="bg-violet-600 px-3 py-1 rounded-md flex-row items-center">
                <Feather name="download-cloud" size={18} color="white" />
                <Text className="text-white ml-2">Скачать</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-gray-300 px-3 py-1 rounded-md flex-row items-center">
                <Ionicons name="attach" size={20} color="gray" />
                <Text className="text-gray-700 ml-1">Прикрепить</Text>
            </TouchableOpacity>
        </View>
        {showMore && (
            <View className="mt-3">
                <View className="flex-row items-center mb-3 w-full">
                    <Ionicons name="document-text-outline" size={24} color="#909" />
                    <Text className="ml-3 text-xs w-[70%] text-ellipsis">Чек об оплате № 543290581-е432-643225</Text>
                    <TouchableOpacity className="bg-violet-600 ml-auto rounded-xl px-3 py-2 flex-row items-center">
                        <Feather name="eye" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center mb-3 w-full">
                    <Ionicons name="image" size={24} color="#909" />
                    <Text className="ml-3 text-xs w-[70%] text-ellipsis">92a3598c-790b-43c2-a57b-8f32d2d05ae0.jpg</Text>
                    <TouchableOpacity className="bg-violet-600 ml-auto rounded-xl px-3 py-2 flex-row items-center">
                        <Feather name="eye" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </View>
  )
}

export default ReceiptItem