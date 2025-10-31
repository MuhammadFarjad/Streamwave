import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';

const Stack = createStackNavigator();

export default function PreferenceStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NavigationStrings.GENRE_PREFERENCE}
        component={Screens.GenrePreference}
      />
      <Stack.Screen
        name={NavigationStrings.ARTIST_PREFERENCE}
        component={Screens.ArtistPreference}
      />
      <Stack.Screen
        name={NavigationStrings.PODCAST_PREFERENCE}
        component={Screens.PodcastPreference}
      />
    </Stack.Navigator>
  );
}
