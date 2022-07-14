import React from "react";
import {View} from "react-native";
import {NativeBaseProvider} from "native-base"

import {global_style} from "../styles/GlobalStyle";

import {Footer} from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";
import {Header} from "../header/Header";

export const MainScreen = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={global_style.container}>
                <Header />
                <Footer navigation={navigation} currentScreen={FooterPage.HOME} />
            </View>
        </NativeBaseProvider>
    );
};
