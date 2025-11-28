import { router } from 'expo-router';
import {Ionicons} from '@expo/vector-icons'
import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import { LinearGradient} from 'expo-linear-gradient'
import React from 'react'

const MovieHeater = ({poster, originalTitle, title}) => {

    const { height: screenHeight } = useWindowDimensions();

    return (
        <>
            <LinearGradient colors={['rgba(0,0,0,0.2)', 'transparent']} start={[0, 1]} style={{
                height: screenHeight * 0.7,
                position: 'absolute',
                zIndex: 1,
                width: '100%',
                borderRadius: 25
            }}/>
            <View style={{position: 'absolute', zIndex: 99, elevation: 9, top: 45, left:10 }}>
                <Pressable onPress={() => router.dismiss()}>
                    <Ionicons name='arrow-back' size={30} color='white'/>
                </Pressable>
            </View>
            <View style={{height: screenHeight * 0.7}}>
                <View style={{flex: 1, overflow: 'hidden', borderRadius: 25}}>
                    <Image source={{uri: poster }} resizeMode='cover' style={{flex: 1}}/>
                </View>
            </View>
            <View style={{padding: 5, marginTop: 5}} >
                <Text>{originalTitle}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
            </View>
        </>
    )
}

export default MovieHeater