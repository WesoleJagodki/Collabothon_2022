import React from "react";
import { Text, View } from "react-native";
import { Button, NativeBaseProvider, Image } from "native-base";

import { global_style } from "../styles/GlobalStyle";

import { Footer } from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";

export const QuestScreen = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Footer navigation={navigation} currentScreen={FooterPage.QUESTS} />
      </View>
    </NativeBaseProvider>
  );
};
