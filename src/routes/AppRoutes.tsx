import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Drink from '../screens/Drink';
import theme from '../styles/theme';

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secundary
                }
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="Drink"
                component={Drink}
            />
        </Navigator>
    )
}
