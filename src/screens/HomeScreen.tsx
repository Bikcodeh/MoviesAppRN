import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';
import movieDB from '../api/MovieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

export const HomeScreen = () => {

    useEffect(() => {
        movieDB.get<MovieDBNowPlaying>('/now_playing')
            .then( resp => console.log(resp.data.results[0].title))
    }, [])

    const navigation = useNavigation<homeScreenProp>()

    return (
        <View>
            <Text>Home screen</Text>
            <Button title='ir detalle' onPress={() => navigation.navigate('Detail')} />
        </View>
    )
}
