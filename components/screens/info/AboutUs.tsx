import React from "react";
import { View } from "react-native";
import { NativeBaseProvider } from "native-base";

import { global_style } from "../../styles/GlobalStyle";

import { Footer } from "../../footer/Footer";
import { FooterPage } from "../../footer/FooterItem";
import { Header } from "../../header/Header";

export const AboutUs = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Header
          navigation={navigation}
          picture={3}
          account={1}
          goto="LoginScreen"
          text="About us"
        />
        <Footer navigation={navigation} currentScreen={FooterPage.INFO} />
      </View>
    </NativeBaseProvider>
  );
};
