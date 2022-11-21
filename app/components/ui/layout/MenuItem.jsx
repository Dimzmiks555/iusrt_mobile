import React from 'react'
import { Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const MenuItem = ({item, currentRoute, nav}) => {

    const isActive = currentRoute === item.path

  return (
    <Pressable className={`w-[24%] items-center ${currentRoute == 'Logout' && 'rounded-lg'}`} onPress={() => nav(item.path)}>
        <AntDesign name={item.iconName} size={30} color={isActive ? '#a0a' : '#333'}/>
    </Pressable>
  )
}

export default MenuItem