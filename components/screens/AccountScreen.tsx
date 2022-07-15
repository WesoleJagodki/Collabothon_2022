import React from "react";
import { ScrollView, View } from "react-native";
import { Badge, HStack, Image, NativeBaseProvider, Text } from "native-base";

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
        <ScrollView style={account_screen_style.scrollview} horizontal={true}>
          <Badge shadow={4} rounded={20} style={account_screen_style.badge}>
            <Image
              rounded={10}
              style={account_screen_style.picture2}
              source={require("../../images/account-screen-2.png")}
              alt="Orientarium ZOO Łódź"
            />
            <Text style={account_screen_style.text7}>50% Ticket discout</Text>
            <HStack left="35%">
              <Image
                style={account_screen_style.picture3}
                source={require("../../images/coin.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={account_screen_style.text8}>1000</Text>
            </HStack>
          </Badge>
          <Badge shadow={4} rounded={20} style={account_screen_style.badge}>
            <Image
              rounded={10}
              style={account_screen_style.picture2}
              source={require("../../images/account-screen-3.png")}
              alt="Orientarium ZOO Łódź"
            />
            <Text style={account_screen_style.text7}>FREE Ticket</Text>
            <HStack left="35%">
              <Image
                style={account_screen_style.picture3}
                source={require("../../images/coin.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={account_screen_style.text8}>2000</Text>
            </HStack>
          </Badge>
          <Badge shadow={4} rounded={20} style={account_screen_style.badge}>
            <Image
              rounded={10}
              style={account_screen_style.picture2}
              source={require("../../images/account-screen-4.png")}
              alt="Orientarium ZOO Łódź"
            />
            <Text style={account_screen_style.text7}>Zoo Mug</Text>
            <HStack left="35%">
              <Image
                style={account_screen_style.picture3}
                source={require("../../images/coin.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={account_screen_style.text8}>1500</Text>
            </HStack>
          </Badge>
          <Badge shadow={4} rounded={20} style={account_screen_style.badge}>
            <Image
              rounded={10}
              style={account_screen_style.picture2}
              source={require("../../images/account-screen-5.png")}
              alt="Orientarium ZOO Łódź"
            />
            <Text style={account_screen_style.text7}>ZOO Tshirt</Text>
            <HStack left="35%">
              <Image
                style={account_screen_style.picture3}
                source={require("../../images/coin.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={account_screen_style.text8}>750</Text>
            </HStack>
          </Badge>
        </ScrollView>

        <Text style={account_screen_style.text3}>Scheduled hours</Text>
        <Text style={account_screen_style.text4}>Friday, 15th May</Text>
        <Text style={account_screen_style.text5}>Lemury Senior - 11:30</Text>
        <Text style={account_screen_style.text6}>Penguins - 13:00</Text>

        <Footer navigation={navigation} currentScreen={FooterPage.HOME} />
      </View>
    </NativeBaseProvider>
  );
};
