import { FlatList, StyleSheet, Text, View, useColorScheme } from 'react-native';
import CastPoster from './CastPoster';

const CastHorizontalList = ({ actores, titulo }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={{ width: '100%' }}>
      <Text style={[styles.titulo, { color: isDark ? '#e0e0e0' : 'black' }]}>{titulo}</Text>
      <FlatList
        horizontal
        data={actores}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CastPoster id={item.id} poster={item.profile} nombre={item.name} personaje={item.character} smallPoster />}
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

export default CastHorizontalList