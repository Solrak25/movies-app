import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import CastHorizontalList from '../../components/CastHorizontalList';
import MovieDescription from '../../components/movie/MovieDescription';
import MovieHeater from '../../components/movie/MovieHeater';
import { useCast } from '../../core/api/useCast';
import { useMovie } from '../../core/api/useMovie';

export default function MovieScreen() {

  const { id } = useLocalSearchParams();
  const { movieQuery } = useMovie({ id });
  const { castQuery } = useCast({ id })
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View style={[styles.viewCarga, { backgroundColor: isDark ? '#111' : '#fff' }]}>
        <Text style={[styles.texto, { color: isDark ? '#fff' : '#000' }]} >Espere por favor</Text>
        <ActivityIndicator size={40} color={isDark ? "#fff" : "#000"} />
      </View>
    )
  }

  const BackgroundComponent = isDark ? LinearGradient : View;
  const backgroundProps = isDark ? { colors: ['#1e1e24', '#111'], style: styles.scroll } : { style: [styles.scroll, { backgroundColor: '#fff' }] };

  return (
    <BackgroundComponent
      {...backgroundProps}
    >
      <StatusBar hidden={true} />
      <View style={{ position: 'absolute', zIndex: 99, top: 40, left: 10 }}>
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons name='arrow-back' size={30} color='white' style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            elevation: 5,
          }} />
        </Pressable>
      </View>
      <ScrollView>
        <MovieHeater originalTitle={movieQuery.data.originalTitle} title={movieQuery.data.title} poster={movieQuery.data.poster} />
        <MovieDescription movie={movieQuery.data}></MovieDescription>
        <CastHorizontalList actores={castQuery.data} titulo={"Actores"} />
        <View style={{ margin: 25 }}></View>
      </ScrollView>
    </BackgroundComponent>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  viewCarga: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    margin: 5,
  }
});