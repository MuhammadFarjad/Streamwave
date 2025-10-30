import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={NavigationStrings.GET_STARTED}
    >
      <Stack.Screen
        name={NavigationStrings.GET_STARTED}
        component={Screens.GetStarted}
      />
      <Stack.Screen
        name={NavigationStrings.SIGN_IN}
        component={Screens.SignIn}
      />
      <Stack.Screen
        name={NavigationStrings.SIGN_UP}
        component={Screens.SignUp}
      />
      <Stack.Screen
        name={NavigationStrings.FORGOT_PASSWORD}
        component={Screens.ForgotPassword}
      />
      <Stack.Screen name={NavigationStrings.OTP} component={Screens.Otp} />
      <Stack.Screen
        name={NavigationStrings.NEW_PASSWORD}
        component={Screens.NewPassword}
      />
      <Stack.Screen
        name={NavigationStrings.CHANGE_PASSWORD}
        component={Screens.ChangePassword}
      />
    </Stack.Navigator>
  );
}
