import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';
import movieDB from '../api/MovieDB';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

export const HomeScreen = () => {

    useEffect(() => {
        movieDB.get('/now_playing')
            .then( resp => console.log(resp.data))
    }, [])

    const navigation = useNavigation<homeScreenProp>()

    return (
        <View>
            <Text>Home screen</Text>
            <Button title='ir detalle' onPress={() => navigation.navigate('Detail')} />
        </View>
    )
}
