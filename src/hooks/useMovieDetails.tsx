import { useEffect, useState } from "react"
import movieDB from "../api/MovieDB"
import { Cast, CreditsResponse } from "../interfaces/creditsInterface"
import { MovieFull } from "../interfaces/movieInterface"

interface MovieDetails {
    isLoading: boolean;
    cast: Cast[];
    movieFull?: MovieFull;
}

export const useMovieDetails = (movieId: number) => {

    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })

    const getMovieDetails = async () => {
        const movieDetailPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
        
        const [ movieDetailResponse, castResponse ] = await Promise.all([movieDetailPromise, castPromise]);
        setstate({
            isLoading: false,
            movieFull: movieDetailResponse.data,
            cast: castResponse.data.cast
        })

    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...state
    }
}
