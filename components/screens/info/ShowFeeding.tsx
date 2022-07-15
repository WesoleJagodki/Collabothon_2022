import { Footer } from "../../footer/Footer";
import { FooterPage } from "../../footer/FooterItem";
import { Header } from "../../header/Header";
import { style } from "../../styles/ShowFeedingStyle";
import { global_style } from "../../styles/GlobalStyle";
import { Image, NativeBaseProvider, VStack } from "native-base";
import React from "react";
import { Text, View } from "react-native";

export const ShowFeeding = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Header
          navigation={navigation}
          picture={2}
          account={2}
          goto="InfoScreen"
          text="Opening hours"
        />
        <View>
          <View style={{ height: 10 }} />
          <View style={style.container}>
            <Text style={style.text}>
              Demonstration feedings provide many great emotions and allow you
              to get to know the animals living in our zoo better. This is a
              special opportunity to find out what our pupils eat: whole fruit,
              pieces of fruit, with peel or peeled, what products they do not
              like and which they are fond of.
            </Text>
            <View style={{ height: 22 }} />
            <VStack>
              <Text style={style.text2}>Indian Elephants - 11:00</Text>
              <Text style={style.text2}>Lemury Senior - 11:30</Text>
              <Text style={style.text2}>Orangutans - 13:00</Text>

              <Text style={style.text2}>Penguins - 13:00</Text>

              <Text style={style.text2}>Malay Bears - 13:30</Text>

              <Text style={style.text2}>Little Pandas - 14:30</Text>

              <Text style={style.text2}>Ariranie - 14:30</Text>

              <Text style={style.text2}>Giraffes - 15:00</Text>

              <Text style={style.text2}>Meerkats - 17:00</Text>
            </VStack>
            <View style={style.img}>
              <Image
                rounded={10}
                source={require("../../../images/eat1.jpg")}
                height={"200"}
                width={"300"}
                top={"15%"}
                alt="eat"
              />
            </View>
          </View>
        </View>
        <Footer navigation={navigation} currentScreen={FooterPage.INFO} />
      </View>
    </NativeBaseProvider>
  );
};
