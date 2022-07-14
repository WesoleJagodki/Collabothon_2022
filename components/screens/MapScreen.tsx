import { NativeBaseProvider, View, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, SafeAreaView, ScrollView, StatusBar, Dimensions } from 'react-native';

import * as Location from 'expo-location';
import { create, all } from 'mathjs';

import { map_screen } from '../styles/MapScreenStyle'

const config = {}
const math = create(all, config)

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const A2 = math.matrix([[51.76363339393569, 19.412120261093946]]);

function to_map_coords(latitude: number, longitude: number) {
    const theta = math.pi * -120 / 180;
    const R_map_to_global = math.matrix([[math.cos(theta), math.sin(theta)], [-math.sin(theta), math.cos(theta)]])
    const p = math.matrix([[latitude, longitude]]);
    const transformed = math.multiply(p, math.inv(R_map_to_global));
    return { x: transformed.get([0, 0]), y: transformed.get([0, 1]) }
}

export const MapScreen = function ({ navigation }: any): JSX.Element {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                throw new Error('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    const { x, y } = location ? to_map_coords(location.coords.latitude, location.coords.longitude) : { x: undefined, y: undefined };

    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} horizontal={true}>
                    <ScrollView style={styles.scrollView}
                        horizontal={false}
                        maximumZoomScale={styles.map.width / screen_width / 2}
                        minimumZoomScale={styles.map.width / screen_width / 6}
                        zoomScale={1}
                        bouncesZoom={true}
                        contentOffset={{ x: 500, y: 0 }}
                    >
                        <Image
                            style={styles.map}
                            source={require('../../images/lodz_zoo_map.jpg')}
                        />
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                position: "absolute",
                                top: y,
                                left: x
                            }}
                            source={require('../../images/location.png')}
                        />
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};