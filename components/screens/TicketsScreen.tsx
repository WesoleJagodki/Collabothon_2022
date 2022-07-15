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

          <View style={tickets_screen_style.view1}>
              <View style={tickets_screen_style.view2}>
                  <View style={tickets_screen_style.view3}>
                      <Image style={tickets_screen_style.picture2} source={require("../../images/tickets-screen-1.png")} />
                      <Text style={tickets_screen_style.text1}>Ticket with Karta Łodzianina</Text>
                      <Text style={tickets_screen_style.text2}>40 pln</Text>
                  </View>
                  <View style={tickets_screen_style.view3}>
                      <Image style={tickets_screen_style.picture2} source={require("../../images/tickets-screen-2.png")} />
                      <Text style={tickets_screen_style.text1}>Ticket Orientarium ZOO Łódź</Text>
                      <Text style={tickets_screen_style.text2}>70 pln</Text>
                  </View>
              </View>
              <View style={tickets_screen_style.view2}>
                  <View style={tickets_screen_style.view3}>
                      <Image style={tickets_screen_style.picture2} source={require("../../images/tickets-screen-3.png")} />
                      <Text style={tickets_screen_style.text1}>Combined ticket: ZOO Łódź and EC1</Text>
                      <Text style={tickets_screen_style.text2}>40 pln</Text>
                  </View>
                  <View style={tickets_screen_style.view3}>
                      <Image style={tickets_screen_style.picture2} source={require("../../images/tickets-screen-4.png")} />
                      <Text style={tickets_screen_style.text1}>Family Ticket (2 + 2)</Text>
                      <Text style={tickets_screen_style.text2}>220 pln</Text>
                  </View>
              </View>
          </View>


        <Footer navigation={navigation} currentScreen={FooterPage.TICKETS} />
      </View>
    </NativeBaseProvider>
  );
};
