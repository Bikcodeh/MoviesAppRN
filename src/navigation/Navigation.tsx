import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './../screens/HomeScreen';
import { DetailScreen } from './../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParamList = {
    Home: undefined;
    Detail: Movie;
}

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}