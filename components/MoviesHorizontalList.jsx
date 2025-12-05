import { useEffect, useRef } from 'react';
import { FlatList, StyleSheet, Text, View, useColorScheme } from 'react-native';
import MoviePoster from './MoviePoster';

const MoviesHorizontalList = ({ movies, titulo, loadNextPage }) => {

  const isLoading = useRef(false)
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    const timer = setTimeout(() => {
      isLoading.current = false
    }, 200)

    return () => clearTimeout(timer)
  }, [movies])

  const onScroll = (event) => {
    if (isLoading.current) return;
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    if (loadNextPage != null) loadNextPage();
  }
  return (
    <View style={{ width: '100%' }}>
      <Text style={[styles.titulo, { color: isDark ? '#e0e0e0' : 'black' }]}>{titulo}</Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        onScroll={onScroll}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
});

export default MoviesHorizontalList