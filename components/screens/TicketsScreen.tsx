import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, NativeBaseProvider, Image, VStack } from "native-base";

import { global_style } from "../styles/GlobalStyle";

import { Footer } from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";
import { tickets_screen_style } from "../styles/TicketsScreenStyle";
import { Header } from "../header/Header";
import { registration_screen } from "../styles/RegistrationScreenStyle";
import { BuyTicketPopup } from "../popups/BuyTicketPopup";

export const TicketsScreen = function ({ navigation }: any): JSX.Element {
  const [ticket1Visible, setTicket1Visible] = useState(false);
  const [ticket2Visible, setTicket2Visible] = useState(false);
  const [ticket3Visible, setTicket3Visible] = useState(false);
  const [ticket4Visible, setTicket4Visible] = useState(false);
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Header navigation={navigation} picture={1} account={2} text="Tickets">
          <BuyTicketPopup
            ticketDescription="Ticket with Karta Łodzianina"
            ticketImage={require("../../images/tickets-screen-1.png")}
            ticketPrice="40PLN"
            visible={ticket1Visible}
            onOkPressed={() => setTicket1Visible(false)}
            onCancelPressed={() => setTicket1Visible(false)}
          />
          <BuyTicketPopup
            ticketDescription="Ticket Orientarium ZOO Łódź"
            ticketImage={require("../../images/tickets-screen-2.png")}
            ticketPrice="70PLN"
            visible={ticket2Visible}
            onOkPressed={() => setTicket2Visible(false)}
            onCancelPressed={() => setTicket2Visible(false)}
          />
          <BuyTicketPopup
            ticketDescription="Combined ticket: ZOO Łódź and EC1"
            ticketImage={require("../../images/tickets-screen-3.png")}
            ticketPrice="40PLN"
            visible={ticket3Visible}
            onOkPressed={() => setTicket3Visible(false)}
            onCancelPressed={() => setTicket3Visible(false)}
          />
          <BuyTicketPopup
            ticketDescription="Family ticket (2 + 2)"
            ticketImage={require("../../images/tickets-screen-4.png")}
            ticketPrice="220PLN"
            visible={ticket4Visible}
            onOkPressed={() => setTicket4Visible(false)}
            onCancelPressed={() => setTicket4Visible(false)}
          />
          <VStack style={tickets_screen_style.vstack1}>
            <Image
              source={require("../../images/header-1.png")}
              style={tickets_screen_style.picture1}
              alt="Orientarium ZOO Łódź"
            ></Image>
          </VStack>
        </Header>

        <View style={tickets_screen_style.view1}>
          <View style={tickets_screen_style.view2}>
            <View style={tickets_screen_style.view3}>
              <Image
                style={tickets_screen_style.picture2}
                source={require("../../images/tickets-screen-1.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={tickets_screen_style.text1}>
                Ticket with Karta Łodzianina
              </Text>
              <Text style={tickets_screen_style.text2}>40 pln</Text>
              <View style={tickets_screen_style.view4}>
                <Button
                  bg="#00AEEB"
                  style={tickets_screen_style.button1}
                  onPress={() => navigation.navigate("TicketDetailsScreen1")}
                >
                  <Text style={tickets_screen_style.text3}>More details</Text>
                </Button>
                <Button
                  bg="#00AEEB"
                  style={tickets_screen_style.button1}
                  onPress={() => setTicket1Visible(true)}
                >
                  <Text style={tickets_screen_style.text3}>Buy</Text>
                </Button>
              </View>
            </View>
            <View style={tickets_screen_style.view3}>
              <Image
                style={tickets_screen_style.picture2}
                source={require("../../images/tickets-screen-2.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={tickets_screen_style.text1}>
                Ticket Orientarium ZOO Łódź
              </Text>
              <Text style={tickets_screen_style.text2}>70 pln</Text>
              <View style={tickets_screen_style.view4}>
                <Button
                  bg="#EE5420"
                  style={tickets_screen_style.button1}
                  onPress={() => navigation.navigate("TicketDetailsScreen2")}
                >
                  <Text style={tickets_screen_style.text3}>More details</Text>
                </Button>
                <Button
                  bg="#EE5420"
                  style={tickets_screen_style.button1}
                  onPress={() => setTicket2Visible(true)}
                >
                  <Text style={tickets_screen_style.text3}>Buy</Text>
                </Button>
              </View>
            </View>
          </View>
          <View style={tickets_screen_style.view2}>
            <View style={tickets_screen_style.view3}>
              <Image
                style={tickets_screen_style.picture2}
                source={require("../../images/tickets-screen-3.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={tickets_screen_style.text1}>
                Combined ticket: ZOO Łódź and EC1
              </Text>
              <Text style={tickets_screen_style.text2}>40 pln</Text>
              <View style={tickets_screen_style.view4}>
                <Button
                  bg="#41A42F"
                  style={tickets_screen_style.button1}
                  onPress={() => navigation.navigate("TicketDetailsScreen3")}
                >
                  <Text style={tickets_screen_style.text3}>More details</Text>
                </Button>
                <Button
                  bg="#41A42F"
                  style={tickets_screen_style.button1}
                  onPress={() => setTicket3Visible(true)}
                >
                  <Text style={tickets_screen_style.text3}>Buy</Text>
                </Button>
              </View>
            </View>
            <View style={tickets_screen_style.view3}>
              <Image
                style={tickets_screen_style.picture2}
                source={require("../../images/tickets-screen-4.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={tickets_screen_style.text1}>
                Family Ticket (2 + 2)
              </Text>
              <Text style={tickets_screen_style.text2}>220 pln</Text>
              <View style={tickets_screen_style.view4}>
                <Button
                  bg="#0C72D7"
                  style={tickets_screen_style.button1}
                  onPress={() => navigation.navigate("TicketDetailsScreen4")}
                >
                  <Text style={tickets_screen_style.text3}>More details</Text>
                </Button>
                <Button
                  bg="#0C72D7"
                  style={tickets_screen_style.button1}
                  onPress={() => setTicket4Visible(true)}
                >
                  <Text style={tickets_screen_style.text3}>Buy</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>

        <Footer navigation={navigation} currentScreen={FooterPage.TICKETS} />
      </View>
    </NativeBaseProvider>
  );
};
