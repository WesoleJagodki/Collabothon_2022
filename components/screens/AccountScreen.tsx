import React from "react";
import { View } from "react-native";
import { Image, NativeBaseProvider, Text } from "native-base";

import { global_style } from "../styles/GlobalStyle";
import { account_screen_style } from "../styles/AccountScreenStyle";

import { Footer } from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";
import { Header } from "../header/Header";

export const AccountScreen = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Header
          navigation={navigation}
          picture={2}
          account={3}
          goto={"MainScreen"}
          text="Account"
        />
        <Image
          style={account_screen_style.picture1}
          source={require("../../images/account-screen-1.png")}
          alt="Orientarium ZOO Łódź"
        />
        <Text style={account_screen_style.text1}>Alpaca Puciu</Text>
        <Text style={account_screen_style.text2}>Points</Text>
        <Text style={account_screen_style.text3}>Scheduled hours</Text>
        <Text style={account_screen_style.text4}>Friday, 15th May</Text>
        <Text style={account_screen_style.text5}>Lemury Senior - 11:30</Text>
        <Text style={account_screen_style.text6}>Penguins - 13:00</Text>

        <Footer navigation={navigation} currentScreen={FooterPage.HOME} />
      </View>
    </NativeBaseProvider>
  );
};
