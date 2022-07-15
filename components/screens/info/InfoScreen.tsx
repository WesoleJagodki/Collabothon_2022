import { Footer } from "../../footer/Footer";
import { FooterPage } from "../../footer/FooterItem";
import { global_style } from "../../styles/GlobalStyle";
import { info_screen_style } from "../../styles/InfoScreenStyle";
import { Header } from "../../header/Header";
import { NativeBaseProvider, Image } from "native-base";
import React from "react";
import { Text, View } from "react-native";

const screens = [
  {
    header: "ZOO information",
    elements: [
      { text: "About us", screen: "AboutUs" },
      { text: "Opening hours", screen: "OpeningHours" },
      { text: "Show feeding", screen: "ShowFeeding" },
      { text: "Restaurants" },
      { text: "Drive" },
      { text: "Contact" },
    ],
  },
  {
    header: "Business",
    elements: [
      { text: "Events" },
      { text: "Outdoor" },
      { text: "Advertisement" },
      { text: "Sponsoring" },
    ],
  },
  {
    header: "Help",
    elements: [{ text: "FAQ" }],
  },
  {
    header: "Privacy & Legal",
    elements: [{ text: "Privacy policy" }],
  },
];

export const InfoScreen = function ({ navigation }: any): JSX.Element {
  const arrow = require("../../../images/arrow.png");
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Header
          navigation={navigation}
          picture={3}
          account={2}
          goto="LoginScreen"
          text="Info"
        />
        <View style={info_screen_style.container}>
          {screens.map((e, index) => {
            return (
              <View key={index}>
                <Text style={info_screen_style.listHeader}>{e.header}</Text>
                <View>
                  {e.elements.map((element, e_index) => {
                    return (
                      <View
                        style={info_screen_style.listElement}
                        key={e_index}
                        onTouchStart={() => navigation.navigate(element.screen)}
                      >
                        <Text>{element.text}</Text>
                        <Image
                          source={arrow}
                          height={"15"}
                          width={"15"}
                          alt="arrow"
                        />
                      </View>
                    );
                  })}
                </View>
                <View
                  style={
                    index === screens.length - 1
                      ? null
                      : info_screen_style.divider
                  }
                ></View>
              </View>
            );
          })}
        </View>
        <Footer navigation={navigation} currentScreen={FooterPage.INFO} />
      </View>
    </NativeBaseProvider>
  );
};
