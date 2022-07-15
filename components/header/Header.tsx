import React from "react";
import { Text, View } from "react-native";
import { NativeBaseProvider, Image, Button } from "native-base";

import { header_style } from "./HeaderStyle";

interface Props {
  navigation: any;
  text: any;
  goto: any;
  picture: number;
  account: number;
}

const headerImages = {
  header1: require("../../images/header-1.png"),
  header2: require("../../images/header-2.png"),
  header3: null,
  account1: require("../../images/account-screen-1.png"),
  account2: null,
};

export const Header = function ({
  navigation,
  text,
  goto,
  picture,
  account,
  children,
}: Props): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={header_style.container}>
        <View>{children}</View>
        <Button
          style={header_style.button1}
          onPress={() => navigation.navigate(goto)}
        >
          <Image
            style={header_style.picture}
            source={headerImages[`header${picture}`]}
            alt="Orientarium ZOO Łódź"
          />
        </Button>

        <Text style={children ? header_style.text : header_style.textcenter}>
          {text}
        </Text>
        <Button
          style={header_style.button2}
          onPress={() => navigation.navigate("RegistrationScreen")}
        >
          <Image
            style={header_style.account}
            source={headerImages[`account${account}`]}
            alt="Orientarium ZOO Łódź"
          />
        </Button>
      </View>
    </NativeBaseProvider>
  );
};
