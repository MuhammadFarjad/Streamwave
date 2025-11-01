import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationStrings from '../NavigationStrings';
import { RootStackParamList } from '../types/RootStackParamList';
import { useAuthState } from '../../redux/Hook/authHooks';
import { navigationRef } from './NavigationRef';
import AuthStack from './AuthStack';
import MusicStack from './MusicStack';
import PreferenceStack from './PreferenceStack';
import PodcastStack from './PodcastStack';
import RadiotStack from './RadioStack';
import AudioBooksStack from './AudioBooksStack';
import NewsStack from './NewsStack';
import BottomStack from './BottomStack';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator: React.FC = () => {
  const { isAuthenticated } = useAuthState();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* {isAuthenticated ? (
        ) : ( */}
        <Stack.Screen
          name={NavigationStrings.AUTH_STACK as keyof RootStackParamList}
          component={AuthStack}
        />
        <Stack.Screen
          name={NavigationStrings.PREFERENCE_STACK as keyof RootStackParamList}
          component={PreferenceStack}
        />
        <Stack.Screen
          name={NavigationStrings.BOTTOM_STACK as keyof RootStackParamList}
          component={BottomStack}
        />
        <Stack.Screen
          name={NavigationStrings.MUSIC_STACK as keyof RootStackParamList}
          component={MusicStack}
        /><Stack.Screen
          name={NavigationStrings.PODCAST_STACK as keyof RootStackParamList}
          component={PodcastStack}
        />
        <Stack.Screen
          name={NavigationStrings.RADIO_STACK as keyof RootStackParamList}
          component={RadiotStack}
        />
        <Stack.Screen
          name={NavigationStrings.AUDIO_BOOKS_STACK as keyof RootStackParamList}
          component={AudioBooksStack}
        />
        <Stack.Screen
          name={NavigationStrings.NEWS as keyof RootStackParamList}
          component={NewsStack}
        />
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
