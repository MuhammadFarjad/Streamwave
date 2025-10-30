import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationStrings from '../NavigationStrings';
import { RootStackParamList } from '../types/RootStackParamList';
import AuthStack from './AuthStack';
import { useAuthState } from '../../redux/Hook/authHooks';
import { navigationRef } from './NavigationRef';

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
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
