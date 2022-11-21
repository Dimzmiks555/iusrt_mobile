import React, { createContext, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { Text, View } from 'react-native'

// let ignore = SplashScreen.preventAutoHideAsync()

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})

  return (
    <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider