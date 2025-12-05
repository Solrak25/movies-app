import { Image, Text, View, useColorScheme } from 'react-native';

const CastPoster = ({ poster, smallPoster = false, nombre, personaje }) => {

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  if (poster == null) poster = 'https://i.stack.imgur.com/l60Hf.png';

  return (
    <View>
      <Image
        source={{ uri: poster }}
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
          borderRadius: 15,
          margin: 10
        }}
        resizeMode="cover"
      />
      <Text style={{
        width: smallPoster ? 85 : 150,
        marginLeft: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: isDark ? 'white' : 'black'
      }}>{nombre}</Text>
      <Text style={{
        width: smallPoster ? 85 : 150,
        marginLeft: 15,
        color: isDark ? '#e0e0e0' : '#666'
      }}>{personaje}</Text>
    </View>
  )
}

export default CastPoster