import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { menuData } from './Menu.data'
import MenuItem from './MenuItem'

const Menu = ({nav, currentRoute}) => {

    const {bottom} = useSafeAreaInsets()


  return (  
    <View
        className="pt-5 px-3 flex-row justify-between items-center w-full"
        paddingBottom={bottom + 20}
    >
        {menuData.map(item => <MenuItem currentRoute={currentRoute} nav={nav} item={item}/>)}
    </View>
  )
}

export default Menu