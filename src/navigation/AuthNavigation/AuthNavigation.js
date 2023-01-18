// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../container/Screens/Login';


const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashbord" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigation;