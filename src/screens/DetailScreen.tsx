import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { RootStackParamList } from '../navigation/Navigation'

interface Props extends StackScreenProps<RootStackParamList, 'Detail'> {};

export const DetailScreen = ({route}: Props) => {
    
    const movie = route.params;

    return (
        <View>
            <Text> {movie.title} </Text>
        </View>
    )
}
