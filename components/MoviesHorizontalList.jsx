import { StyleSheet, View, Text, FlatList} from 'react-native'
import React, { useEffect, useRef } from 'react'
import MoviePoster from './MoviePoster';

const MoviesHorizontalList = ({movies, titulo, loadNextPage}) => {

  const isLoading  = useRef(false)

    useEffect(() => {
    const timer = setTimeout(() => {
      isLoading.current = false
    }, 200)

    return () => clearTimeout(timer)
  }, [movies])

  const onScroll = (event) => {
    if(isLoading.current) return;
    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if(!isEndReached) return;

    isLoading.current = true;

    if(loadNextPage != null) loadNextPage();
  }
  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.titulo}>{titulo}</Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster/>}
        onScroll={onScroll}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  },
});

export default MoviesHorizontalList