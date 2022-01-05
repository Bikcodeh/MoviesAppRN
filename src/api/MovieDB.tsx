import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '4662e7a7fe13c9d91c80552e10a09dc1',
        language: 'en-EN'
    }
});

export default movieDB;