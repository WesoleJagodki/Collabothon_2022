import { NativeBaseProvider} from 'native-base';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {Image} from 'native-base';

import * as Location from 'expo-location';
import { create, all } from 'mathjs';

import { map_screen } from '../styles/MapScreenStyle'

const config = {}
const math = create(all, config)

const screen_width = Dimensions.get('window').width;

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
            <SafeAreaView style={map_screen.container}>
                <ScrollView style={map_screen.scrollView} horizontal={true}>
                    <ScrollView style={map_screen.scrollView}
                        horizontal={false}
                        maximumZoomScale={map_screen.map.width / screen_width / 2}
                        minimumZoomScale={map_screen.map.width / screen_width / 6}
                        zoomScale={1}
                        bouncesZoom={true}
                        contentOffset={{ x: 500, y: 0 }}
                    >
                        <Image
                            style={map_screen.map}
                            source={require('../../images/map-screen-2.jpg')}
                            alt="Orientarium ZOO Łódź"
                        />
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                position: "absolute",
                                top: y,
                                left: x
                            }}
                            source={require('../../images/map-screen-1.png')}
                            alt="Orientarium ZOO Łódź"
                        />
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};
