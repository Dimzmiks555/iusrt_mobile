import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import Auth from '../components/screens/Auth/Auth'
import { useAuth } from '../hooks/useAuth'
import { routes } from './routes'


const Stack = createNativeStackNavigator()

const PrivateNavigation = () => {

    const {user} = useAuth()


  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle: {
            backgroundColor: 'white'
        },
        animation: 'fade'
    }}>
        {user ? (
            routes.map(route => <Stack.Screen key={route.name} {...route}/>)
        ) : (
            <Stack.Screen name="Auth" component={Auth}/>
        )}
    </Stack.Navigator>
  )
}

export default PrivateNavigation