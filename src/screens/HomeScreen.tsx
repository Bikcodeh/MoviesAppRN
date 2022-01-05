import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';

import { useMovies } from './../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviesCarousel } from './../components/MoviesCarousel';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()
    const { moviesCurrently, isLoading } = useMovies()

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                <View style={{ height: 440 }}>
                    <Carousel
                        data={moviesCurrently}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                    />
                </View>
                { /* Favorite movies */}
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Top movies</Text>
                <MoviesCarousel movies={ moviesCurrently } />
            </View>
        </ScrollView>
    )
}
