import React from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';
import { useMovies } from './../hooks/useMovies';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

export const HomeScreen = () => {

    const { moviesCurrently, isLoading } = useMovies()
    const navigation = useNavigation<homeScreenProp>()

    if(isLoading) {
        return (
            <View style= {{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }

    return (
        <View>
            <Text>Home screen</Text>
            <Button title='ir detalle' onPress={() => navigation.navigate('Detail')} />
        </View>
    )
}
