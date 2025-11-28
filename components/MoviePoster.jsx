import { router } from 'expo-router';
import { View, Image, Pressable} from 'react-native'

const MoviePoster = ({id, poster, smallPoster = false}) => {

  return (
    <Pressable onPress={() => router.push(`${id}`)}>
        <Image 
        source={{uri: poster}}
        style={{
            width: smallPoster? 85 : 150,
            height: smallPoster? 130: 250,
            borderRadius: 15,
            margin: 10
        }}
        resizeMode="cover"
        />
    </Pressable>
  )
}

export default MoviePoster