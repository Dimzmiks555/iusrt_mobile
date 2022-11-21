import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import Menu from '../components/ui/layout/Menu'
import { useAuth } from '../hooks/useAuth'
import PrivateNavigation from './PrivateNavigation'

const Navigation = () => {

    const {user} = useAuth()

    const navRef = useNavigationContainerRef()

    const [currentRoute, setCurrentRoute] = useState(undefined)

    useEffect(() => {
        setCurrentRoute(navRef.getCurrentRoute()?.name)

        const listener = navRef.addListener('state', () => setCurrentRoute(navRef?.getCurrentRoute()?.name))

        return () => {
            navRef.removeListener('state', listener)
        }


    }, [])


  return (
    <>
    <NavigationContainer ref={navRef}>
        <PrivateNavigation/>
    </NavigationContainer>
    {user && currentRoute && (
        <Menu nav={navRef.navigate} currentRoute={currentRoute}/>
    )}
    </>
  )
}

export default Navigation