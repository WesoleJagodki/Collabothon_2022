import React from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Button, NativeBaseProvider, Image, HStack, Badge, VStack} from "native-base";
import { global_style } from "../styles/GlobalStyle";
import { quest_screen_style } from "../styles/QuestScreenStyle";

import { Footer } from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";
import { Header } from "../header/Header";

export const QuestScreen = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
          <View style={global_style.container}>
              <Header
                  navigation={navigation}
                  picture={3}
                  account={2}
                  goto="LoginScreen"
                  text="Quests"
              />
              <HStack space={10} style={quest_screen_style.hstack}>
                  <Button rounded={20} colorScheme={"orange"}>Outside</Button>
                  <Button onPress={() => navigation.navigate("QuestInsideScreen")}
                          rounded={20}
                          backgroundColor={0}>
                      <Text>Inside</Text>
                  </Button>
              </HStack>
              <Text style={quest_screen_style.text1}>Mission</Text>
                  <ScrollView style={quest_screen_style.test}>
                        <TouchableOpacity style={quest_screen_style.touchable} onPress={() => navigation.navigate("FlowersMissionScreen")}>
                            <Badge shadow={4} rounded={20} style={quest_screen_style.badge}>
                                <Image
                                    style={quest_screen_style.picture}
                                    source={require("../../images/quest-screen-1.png")}
                                    alt="Orientarium ZOO Łódź"
                                />
                                <Text style={quest_screen_style.text2}>Flowers</Text>
                                <Text style={quest_screen_style.text3}>Collect all the flower pictures to get points</Text>
                            </Badge>
                        </TouchableOpacity>
                      <TouchableOpacity style={quest_screen_style.touchable} onPress={() => navigation.navigate("FlowersMissionScreen")}>
                          <Badge shadow={4} rounded={20} style={quest_screen_style.badge}>
                              <Image
                                  style={quest_screen_style.picture}
                                  source={require("../../images/quest-screen-2.png")}
                                  alt="Orientarium ZOO Łódź"
                              />
                              <Text style={quest_screen_style.text2}>Trees</Text>
                              <Text style={quest_screen_style.text3}>Collect all the trees pictures to get points</Text>
                          </Badge>
                      </TouchableOpacity>
                      <TouchableOpacity style={quest_screen_style.touchable} onPress={() => navigation.navigate("FlowersMissionScreen")}>
                          <Badge shadow={4} rounded={20} style={quest_screen_style.badge}>
                              <Image
                                  style={quest_screen_style.picture}
                                  source={require("../../images/quest-screen-3.png")}
                                  alt="Orientarium ZOO Łódź"
                              />
                              <Text style={quest_screen_style.text2}>Quiz</Text>
                              <Text style={quest_screen_style.text3}>Answer the questions to get points</Text>
                          </Badge>
                      </TouchableOpacity>
                  </ScrollView>
            <Footer navigation={navigation} currentScreen={FooterPage.QUESTS} />
          </View>
    </NativeBaseProvider>
  );
};
