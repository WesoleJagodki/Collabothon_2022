import React from "react";
import {View} from "react-native";
import {NativeBaseProvider, Image, HStack} from "native-base"

import {footer_style} from "./FooterStyle";
import { FooterItem, FooterPage } from "./FooterItem";

export const Footer = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={footer_style.container}>
                <HStack space={10}>
                    <FooterItem navigation={navigation} page={FooterPage.HOME} isSelected={false}/>
                    <FooterItem navigation={navigation} page={FooterPage.QUESTS} isSelected={false}/>
                    <FooterItem navigation={navigation} page={FooterPage.TICKETS} isSelected={false}/>
                    <FooterItem navigation={navigation} page={FooterPage.MAP} isSelected={false}/>
                    <FooterItem navigation={navigation} page={FooterPage.INFO} isSelected={false}/>
                </HStack>
            </View>
        </NativeBaseProvider>
    );
};
