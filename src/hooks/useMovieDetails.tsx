import { useEffect, useState } from "react"
import movieDB from "../api/MovieDB"
import { MovieFull } from "../interfaces/movieInterface"

interface MovieDetails {
    isLoading: boolean;
    cast: any[];
    //movieFull: ??
}

export const useMovieDetails = (movieId: number) => {

    const [state, setstate] = useState<MovieDetails>()

    const getMovieDetails = async () => {
        const response = await movieDB.get<MovieFull>(`/${movieId}`);
        console.log(response.data.overview)
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        state
    }
}
