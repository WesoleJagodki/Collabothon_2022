import React from "react";
import { Text, View } from "react-native";
import { Button, NativeBaseProvider, Image } from "native-base";

import { global_style } from "../styles/GlobalStyle";
import { loading_screen } from "../styles/LoadingScreenStyle";
import { BuyTicketPopup } from "../popups/BuyTicketPopup";

export const LoadingScreen = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <BuyTicketPopup onCancelPressed={() => null} onOkPressed={() => null} ticketDescription="TIcket" ticketImage={require("../../images/arrow.png")} ticketPrice="50PLN" visible={true}  />
      <View style={[global_style.container, loading_screen.container]}>
        <Image
          style={loading_screen.picture1}
          source={require("../../images/loading-screen-1.png")}
          alt="Orientarium ZOO Łódź"
        />
        <Image
          style={loading_screen.picture2}
          source={require("../../images/loading-screen-2.png")}
          alt="Orientarium ZOO Łódź"
        />
        <Button
          style={loading_screen.button}
          bg="white"
          _pressed={{ bg: "muted.300" }}
          onPress={() => navigation.navigate("MainScreen")}
        >
          <Text style={loading_screen.text}>GET STARTED</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
};
