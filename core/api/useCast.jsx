import {useQuery} from '@tanstack/react-query'
import { getCastAction } from '../actions/cast/get-movie-cast-actions'

export const useCast = ({id}) => {

  const castQuery = useQuery({
  queryKey: ['cast', id],
  queryFn: () => getCastAction(id),
  staleTime: 1000 * 60 * 60 * 24,
  enabled: !!id,
})
  return {castQuery}
}
