import React from "react";
import { Text, View } from "react-native";
import { Button, NativeBaseProvider, Image } from "native-base";

import { global_style } from "../styles/GlobalStyle";

import { Footer } from "../footer/Footer";

export const MainScreen = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Footer />
      </View>
    </NativeBaseProvider>
  );
};
