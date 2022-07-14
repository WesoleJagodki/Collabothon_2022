import React from "react";
import {View} from "react-native";
import {NativeBaseProvider, Image, HStack} from "native-base"

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
                <HStack space={10}>
                    <FooterItem navigation={navigation} page={FooterPage.HOME} isSelected={currentScreen === FooterPage.HOME}/>
                    <FooterItem navigation={navigation} page={FooterPage.QUESTS} isSelected={currentScreen === FooterPage.QUESTS}/>
                    <FooterItem navigation={navigation} page={FooterPage.TICKETS} isSelected={currentScreen === FooterPage.TICKETS}/>
                    <FooterItem navigation={navigation} page={FooterPage.MAP} isSelected={currentScreen === FooterPage.MAP}/>
                    <FooterItem navigation={navigation} page={FooterPage.INFO} isSelected={currentScreen === FooterPage.INFO}/>
                </HStack>
            </View>
        </NativeBaseProvider>
    );
};
