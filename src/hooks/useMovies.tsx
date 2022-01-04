import { useEffect, useState } from "react"
import movieDB from "../api/MovieDB"
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface"

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesCurrently, setMoviesCurrently] = useState<Movie[]>([])

    const getMovies = async () => {
        const response = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        setMoviesCurrently(response.data.results)
        setIsLoading(false)
    }

    useEffect(() => {
        //now playing
        getMovies()
    }, [])

    return {
        moviesCurrently,
        isLoading
    }
}
