import React from "react";
import {Text, View} from "react-native";
import {NativeBaseProvider} from "native-base"
import { LinearGradient } from 'expo-linear-gradient';

import {start_screen} from "../styles/StartScreenStyle";


export const StartScreen = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
             <View style={start_screen.container}>
                 <LinearGradient colors={["rgba(9,142,214,100)", "transparent"]} style={start_screen.gradient}>
                     <Text>Test</Text>
                 </LinearGradient>
            </View>
        </NativeBaseProvider>
    );
};
