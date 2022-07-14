import React from "react";
import { Text, View } from "react-native";
import {NativeBaseProvider, HStack, Image, Button} from "native-base";

import { header_style } from "./HeaderStyle";

interface Props {
    navigation: any;
    text: any;
}

export const Header = function ({ navigation, text} : Props): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={header_style.container}>
          <HStack>
              <Image
                  style={header_style.picture}
                  source={require("../../images/header-2.png")}
                  alt="Orientarium ZOO Łódź"
              />
              <Text style={header_style.text}>{text}</Text>
              <Button onPress={() => navigation.navigate("LoginScreen")} style={header_style.button}>
                  <Image
                      style={header_style.account}
                      source={require("../../images/account-screen-1.png")}
                      alt="Orientarium ZOO Łódź"
                  />
              </Button>

          </HStack>
      </View>
    </NativeBaseProvider>
  );
};
