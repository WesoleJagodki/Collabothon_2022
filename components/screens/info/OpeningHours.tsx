import { Footer } from "../../footer/Footer";
import { FooterPage } from "../../footer/FooterItem";
import { Header } from "../../header/Header";
import { style } from "../../styles/OpeningHoursStyle";
import { global_style } from "../../styles/GlobalStyle";
import { Image, NativeBaseProvider } from "native-base";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export const OpeningHours = function ({ navigation }: any): JSX.Element {
  const arrow = require("../../../images/arrow.png");
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Header
          navigation={navigation}
          picture={3}
          account={1}
          goto="LoginScreen"
          text="Opening hours"
        />

        <View>
          <View style={{ height: 100 }} />
          <View style={style.container}>
            <Text style={style.text}>
              The ZOO Lodz Orientarium is open all year round. In case of bad
              weather, the animals stay in 8 heated pavilions, and the
              Orientarium building is the largest of them.
            </Text>
            <View style={{ height: 22 }} />
            <Text style={style.text2}>We invite you to enter:</Text>
            <Text style={style.text2}>9:00 - 18:00</Text>
            <View style={{ height: 22 }} />
            <Text style={style.text}>We close the zoo area at 19:00.</Text>
            <View style={{ height: 80 }} />
            <View style={style.img}>
              <Image
                source={require("../../../images/time.png")}
                height={"400"}
                width={"350"}
                alt="sloth"
              />
            </View>
          </View>
        </View>
        <Footer navigation={navigation} currentScreen={FooterPage.INFO} />
      </View>
    </NativeBaseProvider>
  );
};
