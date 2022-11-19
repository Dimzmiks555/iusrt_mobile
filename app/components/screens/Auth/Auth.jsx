import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'


const Auth = () => {

  const tailwind = useTailwind()

  return (
    <View style={styles.container}>
        {/* <Image source={require("../../../assets/images/LOGO.png")} style={styles.ImageBackground}/> */}
        <View>
          <Text style={tailwind('text-center text-gray-800 text-2xl font-bold mb-2')}>Вход</Text>
        </View>
        <View></View>
        <TextInput style={styles.input} placeholder='ИНН'/>
        <TextInput style={styles.input} placeholder='Пароль'/>
        <Button title="Войти" style={styles.button}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    },
    ImageBackground: {
        resizeMode: "contain",
        width: 200,
        height: 200,
    },
});


export default Auth