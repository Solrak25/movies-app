import { StyleSheet, View, ActivityIndicator, Text, ScrollView} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { useMovies } from '../../core/api/useMovies';
import MainSlideShow from '../../components/MainSlideShow';
import MoviesHorizontalList from '../../components/MoviesHorizontalList';

export default function HomeScreen() {
  const { nowPlayingQuery, popularQuery, topQuery, upcomingQuery } = useMovies();
  if (nowPlayingQuery.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={40} />
      </View>
    );
  }else

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titulo}>Movies App</Text>
        <MainSlideShow movies={nowPlayingQuery.data ?? []}/>
        <MoviesHorizontalList titulo="Populares" movies={popularQuery.data ?? [] }/>
        <MoviesHorizontalList titulo="Mejor calificadas" movies={topQuery.data?.pages.flat() ?? [] } loadNextPage={topQuery.fetchNextPage}/>
        <MoviesHorizontalList titulo="Proximamente en cines" movies={upcomingQuery.data ?? [] }/>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex:1,
    backgroundColor: '#fff', 
    alignItems: 'flex-start',   
    justifyContent: 'flex-start',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  },
});
