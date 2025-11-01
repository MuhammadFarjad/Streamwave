import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';

const Stack = createStackNavigator();

export default function RadiotStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={NavigationStrings.HOME}
        >
            <Stack.Screen name={NavigationStrings.RADIO} component={Screens.Radio} />
        </Stack.Navigator>
    );
}
