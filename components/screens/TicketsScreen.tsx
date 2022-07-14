import React from "react";
import { Text, View } from "react-native";
import { Button, NativeBaseProvider, Image, HStack, VStack } from "native-base";

import { global_style } from "../styles/GlobalStyle";

import { Footer } from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";
import {tickets_screen_style} from "../styles/TicketsScreenStyle";
import {Header} from "../header/Header";

export const TicketsScreen = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
          <Header
              navigation={navigation}
              picture={3}
              account={1}
              goto="LoginScreen"
              text="Tickets"
          >
              <VStack style={tickets_screen_style.vstack1}>
                  <Image source={require("../../images/header-1.png")} style={tickets_screen_style.picture1}></Image>
              </VStack>
          </Header>

          <View>
              <View style={tickets_screen_style.view1}>
                  <View>
                      <Image style={tickets_screen_style.picture2} source={require("../../images/tickets-screen-1.png")} />
                      <Text>wifnwiwowfno</Text>
                  </View>
                  <View>
                      <Image style={tickets_screen_style.picture2} source={require("../../images/tickets-screen-2.png")} />
                      <Text>wofnwoifwanfiwoanfiwainf</Text>
                  </View>
              </View>
              <View style={tickets_screen_style.view1}>
                  <View>
                      <Image style={tickets_screen_style.picture2} source={require("../../images/tickets-screen-3.png")} />
                      <Text>opfnwepifnif</Text>
                  </View>
                  <View>
                      <Image style={tickets_screen_style.picture2} source={require("../../images/tickets-screen-4.png")} />
                      <Text>wfnwoifwnf</Text>
                  </View>
              </View>
          </View>


        <Footer navigation={navigation} currentScreen={FooterPage.TICKETS} />
      </View>
    </NativeBaseProvider>
  );
};
