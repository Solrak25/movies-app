import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import { useMovie } from '../../core/api/useMovie';
import MovieHeater from '../../components/movie/MovieHeater';
import CastHorizontalList from '../../components/CastHorizontalList';
import MovieDescription from '../../components/movie/MovieDescription';
import { useCast } from '../../core/api/useCast';

export default function MovieScreen(){

  const { id } = useLocalSearchParams();
  const { movieQuery } = useMovie({ id });
  const { castQuery } = useCast({id})

  if(movieQuery.isLoading || !movieQuery.data){
    return(
     <View style={styles.viewCarga}>
       <Text style={styles.texto} >Espere por favor</Text>
        <ActivityIndicator size={40}/>
      </View>
    )
  }

  return (
    <ScrollView>
      <MovieHeater originalTitle={movieQuery.data.originalTitle} title={movieQuery.data.title} poster={movieQuery.data.poster }/>
      <MovieDescription movie={movieQuery.data}></MovieDescription>
      <CastHorizontalList actores={castQuery.data} titulo={"Actores"}/>
      <View style={{margin: 25}}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewCarga: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    margin: 5,
  }
});