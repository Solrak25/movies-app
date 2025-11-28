import { useRef } from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import MoviePoster from './MoviePoster';

const MainSlideShow = ({ movies }) => {
  const ref = useRef(null);
  const width = useWindowDimensions().width;
  return (
    <View style={{ height: 275, width: '100%' }}>
      <Carousel
        ref={ref}
        data={movies}
        renderItem = {({item}) => <MoviePoster id={item.id} poster={item.poster}/>}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        width={200}
        height={350}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  );
};

export default MainSlideShow;
