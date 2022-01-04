import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

export const HomeScreen = () => {

    const navigation = useNavigation<homeScreenProp>()

    return (
        <View>
            <Text>Home screen</Text>
            <Button title='ir detalle' onPress={() => navigation.navigate('Detail')} />
        </View>
    )
}
