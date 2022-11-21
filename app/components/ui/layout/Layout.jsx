import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout = ({children}) => {

  return (
    <SafeAreaView className="flex-1">
        <View 
            className="flex-1 px-6"
            style={{
                paddingTop: 20
            }}
        >
            {children}
        </View>
    </SafeAreaView>
  )
}

export default Layout