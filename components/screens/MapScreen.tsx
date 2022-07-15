import { NativeBaseProvider, View } from "native-base";
import React from "react";
import { Image, SafeAreaView, ScrollView, Dimensions } from "react-native";

import { map_screen } from "../styles/MapScreenStyle";
import { global_style } from "../styles/GlobalStyle";
import { Footer } from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";

const screen_width = Dimensions.get("window").width;

export const MapScreen = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={global_style.container}>
        <ScrollView style={map_screen.scrollView} horizontal={true}>
          <ScrollView
            style={map_screen.scrollView}
            horizontal={false}
            maximumZoomScale={map_screen.map.width / screen_width / 2}
            minimumZoomScale={map_screen.map.width / screen_width / 8}
            zoomScale={0.5}
            bouncesZoom={true}
          >
            <Image
              style={map_screen.map}
              source={require("../../images/map-screen-2.jpg")}
              alt="Orientarium ZOO Łódź"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
      <View style={global_style.container}>
        <Footer navigation={navigation} currentScreen={FooterPage.MAP} />
      </View>
    </NativeBaseProvider>
  );
};
