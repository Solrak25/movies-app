import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { nowPlayingActions } from '../actions/movies/now-playing.actions';
import { PopularMoviesActions } from '../actions/movies/popular';
import { TopMoviesActions } from '../actions/movies/topPelis';
import { UpComingMoviesActions } from '../actions/movies/upComing';

export const useMovies = () => {
  const nowPlayingQuery =  useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingActions,
    staleTime: 1000 * 60 * 60 * 24
  });

  const popularQuery =  useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: PopularMoviesActions,
    staleTime: 1000 * 60 * 60 * 24
  });

  const topQuery =  useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'top'],
    queryFn: ({pageParam}) => {return TopMoviesActions({ page: pageParam })},
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPages, pages) => pages.length + 1,
  });

  const upcomingQuery =  useQuery({
    queryKey: ['movies', 'upComing'],
    queryFn: UpComingMoviesActions,
    staleTime: 1000 * 60 * 60 * 24
  });

  return {nowPlayingQuery, popularQuery, topQuery, upcomingQuery}
};
