import { NativeBaseProvider, View, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, SafeAreaView, ScrollView, StatusBar, Dimensions } from 'react-native';

import * as Location from 'expo-location';
import { create, all, Matrix } from 'mathjs';

import { map_screen } from '../styles/MapScreenStyle'

const config = {}
const math = create(all, config)

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const A1 = math.matrix([[19.40871316916693, 51.76363339393569]]);
const A2 = math.matrix([[19.412120261093946, 51.76363339393569]]);
const A3 = math.matrix([[19.40871316916693, 51.75851318962107]]);
const A4 = math.matrix([[19.412120261093946, 51.75851318962107]]);

const w = math.norm(math.subtract(A2, A1), 1);
const h = math.norm(math.subtract(A1, A3), 1);

const w_px = map_screen.map.width;
const h_px = map_screen.map.height;

const theta = math.pi * 120 / 180;
const R_map_to_global = math.matrix([[math.cos(theta), math.sin(theta)], [-math.sin(theta), math.cos(theta)]])

/* Doesn't work :c */
function to_map_coords(latitude: number, longitude: number) {
    const p = math.matrix([[longitude, latitude]]);
    const p_map = math.subtract(p, A2);
    
    // @ts-ignore
    const p_px_map = math.matrix([[p_map.get([0, 0]) * (w_px/w), p_map.get([0, 1]) * (w_px/w)]]);
    const transformed = math.multiply(p_px_map, math.inv(R_map_to_global));

    console.log(p_px_map);

    return { x: Math.round(transformed.get([0, 0])), y: Math.round(transformed.get([0, 1])) }
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

    const { x, y } = location ? to_map_coords(location.coords.latitude, location.coords.longitude) : { x: 0, y: 0 };

    return (
        <NativeBaseProvider>
            <SafeAreaView style={map_screen.container}>
                <ScrollView style={map_screen.scrollView} horizontal={true}>
                    <ScrollView style={map_screen.scrollView}
                        horizontal={false}
                        maximumZoomScale={map_screen.map.width / screen_width / 2}
                        minimumZoomScale={map_screen.map.width / screen_width / 6}
                        zoomScale={1}
                        bouncesZoom={true}
                    >
                        <Image
                            style={map_screen.map}
                            source={require('../../images/lodz_zoo_map.jpg')}
                        />
                        {/* <Image
                            style={{
                                width: 50,
                                height: 50,
                                position: "absolute",
                                marginTop: y,
                                marginLeft: x
                            }}
                            source={require('../../images/location.png')}
                        /> */}
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};