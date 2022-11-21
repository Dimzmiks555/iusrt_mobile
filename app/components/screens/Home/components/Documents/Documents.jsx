import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 



const Documents = () => {
  return (
    <View
        className="py-5 px-6 my-2 rounded-xl border border-gray-300"
    >
        <Text className="text-lg font-semibold mb-3">Мои документы</Text>
        <View>
            <View className="flex-row items-center mb-3">
                <Ionicons name="document-text-outline" size={24} color="#909" />
                <Text className="ml-1">Копия ИНН</Text>
                <TouchableOpacity className="bg-violet-600 ml-auto rounded-xl px-3 py-2 flex-row items-center">
                    <Feather name="download-cloud" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View className="flex-row items-center mb-3">
                <Ionicons name="document-text-outline" size={24} color="#909" />
                <Text className="ml-1">Копия ОГРН</Text>
                <TouchableOpacity className="bg-violet-600 ml-auto rounded-xl px-3 py-2 flex-row items-center">
                    <Feather name="download-cloud" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Documents