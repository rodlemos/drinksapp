import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppRoutes from './AppRoutes'


export default function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}
