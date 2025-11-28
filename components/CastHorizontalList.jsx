import { StyleSheet, View, Text, FlatList} from 'react-native'
import CastPoster from './CastPoster';

const CastHorizontalList = ({actores, titulo}) => {

  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.titulo}>{titulo}</Text>
      <FlatList
        horizontal
        data={actores}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <CastPoster id={item.id} poster={item.profile} nombre={item.name} personaje={item.character} smallPoster/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
});

export default CastHorizontalList