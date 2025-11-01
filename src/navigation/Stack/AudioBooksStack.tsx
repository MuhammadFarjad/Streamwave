import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';

const Stack = createStackNavigator();

export default function AudioBooksStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={NavigationStrings.HOME}
        >
            <Stack.Screen name={NavigationStrings.AUDIO_BOOKS} component={Screens.AudioBooks} />
        </Stack.Navigator>
    );
}
