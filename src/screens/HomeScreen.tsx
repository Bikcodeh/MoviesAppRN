import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';

import { useMovies } from './../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviesCarousel } from './../components/MoviesCarousel';
import { GradientBackground } from '../components/GradientBackground';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()
    const { nowPlaying, topRated, popular, upcoming, isLoading } = useMovies()

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                        />
                    </View>
                    { /* Favorite movies */}
                    <MoviesCarousel movies={popular} title='Top movies' />
                    <MoviesCarousel movies={topRated} title='Top rated' />
                    <MoviesCarousel movies={upcoming} title='Upcoming' />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}
