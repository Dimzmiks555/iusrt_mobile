import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'


const Auth = () => {


  const [inn, setInn] = useState('')
  const [password, setPassword] = useState('')

  const navigator = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View className="p-5 items-center justify-center bg-white h-full" >
          <Image className="w-30 h-36 object-contain mb-10" source={require("../../../../assets/images/LOGO.png")} style={styles.ImageBackground}/>
          {/* <View>
            <Text className="text-center text-gray-700 text-3xl font-bold mb-4">БУХГАЛТЕРИЯ</Text>
          </View> */}
          <TextInput onChangeText={setInn} keyboardType="phone-pad" className="text-gray-800 border-gray-400 bg-gray-100 border py-2 px-4 rounded-lg w-60 mb-3 text-md" placeholder='ИНН'/>
          <TextInput onChangeText={setPassword} secureTextEntry={true} className="border-gray-400 bg-gray-100 border py-2 px-4 rounded-lg w-60 mb-4 text-md" placeholder='Пароль'/>
          <TouchableOpacity disabled={!inn  || !password } className={`w-60 mb-4 justify-center text-center ${!!inn && !!password ? 'bg-violet-700' : 'bg-gray-500'} p-2 rounded-lg`}>
            <Text className="text-center text-white text-lg">Войти</Text>
          </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    ImageBackground: {
        resizeMode: "contain",
    },
});


export default Auth