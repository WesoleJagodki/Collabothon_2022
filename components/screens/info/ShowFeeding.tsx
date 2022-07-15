import { Footer } from "../../footer/Footer";
import { FooterPage } from "../../footer/FooterItem";
import { Header } from "../../header/Header";
import { style } from "../../styles/ShowFeedingStyle";
import { global_style } from "../../styles/GlobalStyle";
import { Pressable,Image, NativeBaseProvider, VStack } from "native-base";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export const ShowFeeding = function ({ navigation }: any): JSX.Element {
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
            <View style={{ height: 10 }} />
                  <View style={style.container}>

              <Text style={style.text}>
                          Demonstration feedings provide many great emotions and allow you to get to know the animals living in our zoo better.
                          This is a special opportunity to find out what our pupils eat: whole fruit,
                          pieces of fruit, with peel or peeled, what products they do not like and which they are fond of.

                          </Text>
                          <View style={{ height: 22 }} />
              <Text style={style.text2}>
                          Indian Elephants - 11:00<br></br>
                          Lemury Senior - 11:30<br></br>
                          Orangutans - 13:00<br></br>
                          Penguins - 13:00<br></br>
                          Malay Bears - 13:30<br></br>
                          Little Pandas - 14:30<br></br>
                          Ariranie - 14:30<br></br>
                          Giraffes - 15:00<br></br>
                          Meerkats - 17:00<br></br>
                      </Text>
                      <View style={style.img}>
                          <Image
                              source={require("../../../images/eat1.jpg")}
                              height={"300"}
                              width={"300"}
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
