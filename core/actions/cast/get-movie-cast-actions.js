import { moviesApi } from "../../api/movieApi";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const getCastAction = async(movieId) => {
      try {
        const {data} = await moviesApi(`/${movieId}/credits`)
        const actores = data.cast.map(actor => ({
            id: actor.id,
            name: actor.name,
            character: actor.character,
            originalName: actor.original_name,
            profile: actor.profile_path ? BASE_IMAGE_URL + actor.profile_path : null,
            popularity: actor.popularity,
            gender: actor.gender,
            order: actor.order
            }));
        return actores
    } catch (error) {
        console.log(error);
        throw 'No se han podido cargar las peliculas';
    }
}