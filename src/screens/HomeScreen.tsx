import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useMovies } from './../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()
    const { moviesCurrently, isLoading } = useMovies()

    if(isLoading) {
        return (
            <View style= {{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }

    return (
        <View style={{ marginTop: top + 20}}>
            <MoviePoster movie={ moviesCurrently[0] } />
        </View>
    )
}
