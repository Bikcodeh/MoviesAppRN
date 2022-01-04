import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './../screens/HomeScreen';
import { DetailScreen } from './../screens/DetailScreen';

export type RootStackParamList = {
    Home: undefined;
    Detail: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor: 'white'
        }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}