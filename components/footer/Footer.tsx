import React from "react";
import {View} from "react-native";
import {NativeBaseProvider, HStack} from "native-base"

import {footer_style} from "./FooterStyle";
import { FooterItem, FooterPage } from "./FooterItem";

interface Props {
    navigation: any;
    currentScreen: FooterPage;
}

export const Footer = function ({navigation, currentScreen} : Props): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={footer_style.container}>
                <HStack space={4} alignContent="center">
                    <FooterItem navigation={navigation} page={FooterPage.HOME} isSelected={currentScreen === FooterPage.HOME} text="Home"/>
                    <FooterItem navigation={navigation} page={FooterPage.QUESTS} isSelected={currentScreen === FooterPage.QUESTS} text="Quests"/>
                    <FooterItem navigation={navigation} page={FooterPage.TICKETS} isSelected={currentScreen === FooterPage.TICKETS} text="Tickets"/>
                    <FooterItem navigation={navigation} page={FooterPage.MAP} isSelected={currentScreen === FooterPage.MAP} text="Map"/>
                    <FooterItem navigation={navigation} page={FooterPage.INFO} isSelected={currentScreen === FooterPage.INFO} text="Info"/>
                </HStack>
            </View>
        </NativeBaseProvider>
    );
};
