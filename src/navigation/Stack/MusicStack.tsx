import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';

const Stack = createStackNavigator();

export default function MusicStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={NavigationStrings.HOME}
    >
      <Stack.Screen name={NavigationStrings.HOME} component={Screens.Home} />
      <Stack.Screen
        name={NavigationStrings.PLAYER}
        component={Screens.Player}
      />
      <Stack.Screen
        name={NavigationStrings.PLAYER_LYRICS}
        component={Screens.PlayerLyrics}
      />
    </Stack.Navigator>
  );
}
