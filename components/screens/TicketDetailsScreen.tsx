import React, { useState } from "react";
import { Pressable, Text, View, TouchableOpacity } from "react-native";
import { Button, NativeBaseProvider, Image, HStack, VStack } from "native-base";

import { global_style } from "../styles/GlobalStyle";

import { Footer } from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";
import { ticket_details_screen_style } from "../styles/TicketDetailsScreen";
import { tickets_screen_style } from "../styles/TicketsScreenStyle";
import { Header } from "../header/Header";
import { BuyTicketPopup } from "../popups/BuyTicketPopup";

export const TicketDetailsScreen = function ({
  navigation,
  description,
  ticketImage,
  buttonColor,
  ticketShortDescription,
  ticketPrice
}: any): JSX.Element {
    const [buyVisible, setBuyVisible] = useState(false);
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Header
          navigation={navigation}
          picture={3}
          account={2}
          goto="TicketsScreen"
          text="Details"
        >
          <VStack style={tickets_screen_style.vstack1}>
            <Pressable onPress={() => navigation.navigate("TicketsScreen")}>
              <Image
                source={require("../../images/header-2.png")}
                style={tickets_screen_style.picture1}
                alt="Orientarium ZOO Łódź"
              ></Image>
            </Pressable>
          </VStack>
        </Header>

        <BuyTicketPopup
          ticketDescription={ticketShortDescription}
          ticketImage={ticketImage}
          ticketPrice={ticketPrice}
          visible={buyVisible}
          onOkPressed={() => setBuyVisible(false)}
          onCancelPressed={() => setBuyVisible(false)}
        />

        <View style={tickets_screen_style.view1}>
          <Text style={{ fontSize: 18 }}>{description}</Text>
          <Image
            source={ticketImage}
            style={{ alignSelf: "center", margin: 10 }}
            alt="Ticket"
          />
          <TouchableOpacity
            style={{ backgroundColor: buttonColor, borderRadius: 10 }}
            onPress={() => setBuyVisible(true)}
          >
            <Text style={ticket_details_screen_style.buy_button_text}>Buy</Text>
          </TouchableOpacity>
        </View>

        <Footer navigation={navigation} currentScreen={FooterPage.TICKETS} />
      </View>
    </NativeBaseProvider>
  );
};
