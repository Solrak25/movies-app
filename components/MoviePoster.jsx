import { router } from 'expo-router';
import { Image, Pressable } from 'react-native';

const MoviePoster = ({ id, poster, smallPoster = false }) => {

  return (
    <Pressable onPress={() => router.push(`${id}`)}>
      <Image
        source={{ uri: poster }}
        style={{
          width: smallPoster ? 90 : 150,
          height: smallPoster ? 140 : 250,
          borderRadius: 18,
          marginHorizontal: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 9,
        }}
        resizeMode="cover"
      />
    </Pressable>
  )
}

export default MoviePoster