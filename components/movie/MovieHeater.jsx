import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, useColorScheme, useWindowDimensions, View } from 'react-native';

const MovieHeater = ({ poster, originalTitle, title }) => {

    const { height: screenHeight } = useWindowDimensions();
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <>
            <LinearGradient colors={['rgba(0,0,0,0.2)', 'transparent']} start={[0, 1]} style={{
                height: screenHeight * 0.7,
                position: 'absolute',
                zIndex: 1,
                width: '100%',
                borderRadius: 25
            }} />

            <View style={{ height: screenHeight * 0.7 }}>
                <View style={{ flex: 1, overflow: 'hidden', borderRadius: 25 }}>
                    <Image source={{ uri: poster }} resizeMode='cover' style={{ flex: 1 }} />
                </View>
            </View>
            <View style={{ padding: 5, marginTop: 5 }} >
                <Text style={{ color: isDark ? 'white' : 'black', opacity: 0.6 }}>{originalTitle}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: isDark ? 'white' : 'black' }}>{title}</Text>
            </View>
        </>
    )
}

export default MovieHeater