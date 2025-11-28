import { moviesApi } from "../../api/movieApi";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";


export const UpComingMoviesActions = async() => {
    try {
        const {data} = await moviesApi('/upcoming')
        const movies = data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: BASE_IMAGE_URL + movie.poster_path,
            backdrop: BASE_IMAGE_URL + movie.backdrop_path,
            rating: movie.vote_average,
        }))
        return movies
    } catch (error) {
        console.log(error);
        throw 'No se han podido cargar las peliculas';
    }
}