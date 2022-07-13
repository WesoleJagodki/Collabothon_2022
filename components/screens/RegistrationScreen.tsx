import React from "react";
import {Text, View} from "react-native";
import {Button, NativeBaseProvider, Image} from "native-base"

import {global_style} from "../styles/GlobalStyle";

export const RegistrationScreen = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={global_style.container}>
            </View>
        </NativeBaseProvider>
    );
};
