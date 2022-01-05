import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParamList } from '../navigation/Navigation'
import { useMovieDetails } from './../hooks/useMovieDetails';
import { MovieDetails } from './../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParamList, 'Detail'> { };

const screenHeight = Dimensions.get('screen').height

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params;
    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.posterImage}
                />
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{movie.original_title}</Text>
                <Text style={styles.title} >{movie.title}</Text>
            </View>
            {
                isLoading
                    ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 0 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    posterImage: {
        flex: 1
    },
    imageContainer: {
        overflow: 'hidden',
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subtitle: {
        fontSize: 18,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
