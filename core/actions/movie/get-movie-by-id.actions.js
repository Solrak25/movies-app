import { moviesApi } from "../../api/movieApi";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const getMovieByIdAction = async(id) => {
      try {
        const {data} = await moviesApi(`/${id}`)
        const mapMovie = (movie) => ({
            id: movie.id,
            title: movie.title,
            originalTitle: movie.original_title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            homepage: movie.homepage,
            poster: BASE_IMAGE_URL + movie.poster_path,
            backdrop: BASE_IMAGE_URL + movie.backdrop_path,
            budget: movie.budget,
            revenue: movie.revenue,
            runtime: movie.runtime,
            rating: movie.vote_average,
            votes: movie.vote_count,
            genres: movie.genres?.map(g => g.name) ?? [],
            languages: movie.spoken_languages?.map(l => l.english_name) ?? [],
            productionCompanies: movie.production_companies?.map(c => c.name) ?? [],
            productionCountries: movie.production_countries?.map(c => c.name) ?? [],
        });

        const mapped = mapMovie(data); 
        return mapped
    } catch (error) {
        console.log(error);
        throw 'No se han podido cargar las peliculas';
    }
}