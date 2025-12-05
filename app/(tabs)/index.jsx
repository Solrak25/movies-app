
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainSlideShow from '../../components/MainSlideShow';
import MoviesHorizontalList from '../../components/MoviesHorizontalList';
import { useMovies } from '../../core/api/useMovies';

export default function HomeScreen() {
  const { nowPlayingQuery, popularQuery, topQuery, upcomingQuery } = useMovies();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  if (nowPlayingQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isDark ? '#111' : '#fff' }}>
        <ActivityIndicator size={40} color={isDark ? "#fff" : "#000"} />
      </View>
    );
  }

  const BackgroundComponent = isDark ? LinearGradient : View;
  const backgroundProps = isDark ? { colors: ['#1e1e24', '#111'], style: styles.container } : { style: [styles.container, { backgroundColor: '#fff' }] };

  return (
    <BackgroundComponent
      {...backgroundProps}
    >
      <StatusBar style={isDark ? "light" : "dark"} />
      <ScrollView>
        <SafeAreaView style={styles.safeArea}>
          <Text style={[styles.titulo, { color: isDark ? '#fff' : '#000' }]}>Movies App</Text>
          <MainSlideShow movies={nowPlayingQuery.data ?? []} />
          <MoviesHorizontalList titulo="Populares" movies={popularQuery.data ?? []} />
          <MoviesHorizontalList titulo="Mejor calificadas" movies={topQuery.data?.pages.flat() ?? []} loadNextPage={topQuery.fetchNextPage} />
          <MoviesHorizontalList titulo="Proximamente en cines" movies={upcomingQuery.data ?? []} />
        </SafeAreaView>
      </ScrollView>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingBottom: 20
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
