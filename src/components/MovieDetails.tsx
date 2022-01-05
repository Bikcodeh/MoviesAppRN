import React from 'react'
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { CastIem } from './CastIem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            { /* Details */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name='star-outline'
                        color="grey"
                        size={16} />
                    <Text style={{ marginLeft: 5 }}>{movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>- {movieFull.genres.map(genre => genre.name).join(',')}</Text>
                </View>

                {/* History */}
                <Text style={{ fontSize: 24, marginTop: 10, fontWeight: 'bold' }}>
                    History
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {movieFull.overview}
                </Text>
                <Text style={{ fontSize: 24, marginTop: 10, fontWeight: 'bold' }}>
                    Budget
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>

            </View>
            { /* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 24, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Cast
                </Text>
                <FlatList 
                    data={cast}
                    keyExtractor={ (item) => item.id.toString() }
                    renderItem={ ({ item }) => <CastIem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginTop: 10, 
                        height: 70
                    }}
                />
            </View>
        </>
    )
}
