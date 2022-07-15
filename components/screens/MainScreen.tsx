import React from "react";
import { ScrollView, View } from "react-native";
import { Badge, Image, NativeBaseProvider, Text } from "native-base";

import { global_style } from "../styles/GlobalStyle";
import { main_screen_style } from "../styles/MainScreenStyle";

import { Footer } from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";
import { Header } from "../header/Header";

export const MainScreen = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Header
          navigation={navigation}
          picture={3}
          account={1}
          goto2="AccountScreen"
          text="Home"
        />
        <Text style={main_screen_style.text9}>Hello</Text>
        <Image
          style={main_screen_style.picture1}
          source={require("../../images/main-screen-1.png")}
          alt="Orientarium ZOO Łódź"
        />
        <Text style={main_screen_style.text10}>
          Nature is a treasure save it for pleasure!
        </Text>
        <Text style={main_screen_style.text1}>Points</Text>
        <Image
          style={main_screen_style.picture4}
          source={require("../../images/coin.png")}
          alt="Orientarium ZOO Łódź"
        />
        <Text style={main_screen_style.text12}>705</Text>
        <Text style={main_screen_style.text11}>Check prizes</Text>
        <Text style={main_screen_style.text2}>News</Text>
        <ScrollView style={main_screen_style.scrollview} horizontal={true}>
          <Badge shadow={4} rounded={20} style={main_screen_style.badge}>
            <Image
              rounded={10}
              style={main_screen_style.picture2}
              source={require("../../images/main-screen-3.png")}
              alt="Orientarium ZOO Łódź"
            />
            <Text marginTop={10} style={main_screen_style.text7}>
              Shark Day at Orientarium Zoo Łódź!
            </Text>
            <Text style={main_screen_style.text8}>
              About 400 species of sharks live in nature. Some of them can be
              seen at the Orientarium Zoo Łódź. The feast of these animals falls
              on July 14. On this occasion, visitors to the Łódź garden can
              count on additional attractions.
            </Text>
          </Badge>
          <Badge shadow={4} rounded={20} style={main_screen_style.badge}>
            <Image
              rounded={10}
              style={main_screen_style.picture2}
              source={require("../../images/main-screen-4.png")}
              alt="Orientarium ZOO Łódź"
            />
            <Text style={main_screen_style.text7}>
              Ophelia and Otello had offspring!
            </Text>
            <Text style={main_screen_style.text8}>
              A baby panda was born in the Łódź zoo! This is the second child of
              a pair of these cute garden animals. 9-year-old Ophelia and
              4-year-old Otello had another child. Their first child, Lavinia,
              was born 2 years ago, and last year she left for the zoo in
              Pilsen. On June 22, another young couple were born. - Our joy is
              even greater because it is an endangered species.
            </Text>
          </Badge>
        </ScrollView>

        <Text style={main_screen_style.text3}>Add to calendar</Text>
        <Text style={main_screen_style.text4}>Friday, 15th May</Text>
        <Text style={main_screen_style.text5}>Indian Elephants - 11:00</Text>
        <Image
          style={main_screen_style.picture5}
          source={require("../../images/main-screen-2.png")}
          alt="Orientarium ZOO Łódź"
        />
        <Text style={main_screen_style.text6}>Lemury Senior - 11:30</Text>
        <Image
          style={main_screen_style.picture6}
          source={require("../../images/main-screen-2.png")}
          alt="Orientarium ZOO Łódź"
        />
        <Footer navigation={navigation} currentScreen={FooterPage.HOME} />
      </View>
    </NativeBaseProvider>
  );
};
