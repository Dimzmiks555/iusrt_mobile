import React from 'react'
import { ImageBackground, Text, Touchable, TouchableOpacity, View } from 'react-native'
import Layout from '../../ui/layout/Layout'


const image = require("../../../../assets/images/logout.jpg");
// const image = { uri: "https://reactjs.org/logo-og.png" };

const Logout = () => {
  return (
    <ImageBackground className="flex-1" source={image} resizeMode="cover">
        <Layout>
            <View className="items-center h-full justify-center">
                <View className="bg-white p-4 w-[70%] rounded-lg">
                    <Text className="text-2xl mb-2 font-extrabold">Выход</Text>
                    <Text className="text-md mb-3">Вы действительно хотите выйти?</Text>
                    <TouchableOpacity className="w-full bg-violet-700 py-3 rounded-lg">
                        <Text className="text-white text-center font-bold">Выйти</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    </ImageBackground>
  )
}

export default Logout