import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { MoviePoster } from './MoviePoster'

interface Props {
    movies: Movie[]
}

export const MoviesCarousel = ( { movies }: Props) => {
    return (
        <View style={{ height: 250 }}>
            <FlatList
                data={movies}
                renderItem={({ item }: any) => <MoviePoster movie={item} width={140} height={200} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
