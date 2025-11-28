import React from 'react'
import { getMovieByIdAction } from '../actions/movie/get-movie-by-id.actions'
import {useQuery} from '@tanstack/react-query'

export const useMovie = ({id}) => {

  const movieQuery = useQuery({
  queryKey: ['movie', id],
  queryFn: () => getMovieByIdAction(id),
  staleTime: 1000 * 60 * 60 * 24,
  enabled: !!id,
})


  return {movieQuery}
}
