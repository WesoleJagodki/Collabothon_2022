import React from "react";
import { View } from "react-native";
import { NativeBaseProvider, Image, HStack } from "native-base";

import { footer_style } from "./FooterStyle";

export const Footer = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={footer_style.container}>
        <HStack space={10}>
          <Image
            style={footer_style.picture1}
            source={require("../../images/footer-1.png")}
            alt="Orientarium ZOO Łódź"
          />
          <Image
            style={footer_style.picture1}
            source={require("../../images/footer-2.png")}
            alt="Orientarium ZOO Łódź"
          />
          <Image
            style={footer_style.picture1}
            source={require("../../images/footer-3.png")}
            alt="Orientarium ZOO Łódź"
          />
          <Image
            style={footer_style.picture1}
            source={require("../../images/footer-4.png")}
            alt="Orientarium ZOO Łódź"
          />
          <Image
            style={footer_style.picture2}
            source={require("../../images/footer-5.png")}
            alt="Orientarium ZOO Łódź"
          />
        </HStack>
      </View>
    </NativeBaseProvider>
  );
};
