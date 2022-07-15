import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import {
  Button,
  NativeBaseProvider,
  Image,
  HStack,
  Badge,
  VStack,
} from "native-base";

import { global_style } from "../styles/GlobalStyle";
import { quest_screen_style } from "../styles/QuestScreenStyle";

import { Footer } from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";
import { Header } from "../header/Header";
import { quest_inside_screen_style } from "../styles/QuestInsideScreenStyle";
import { tickets_screen_style } from "../styles/TicketsScreenStyle";
import { flowers_mission_screen_style } from "../styles/FlowersMissionScreenStyle";
import { QuestScreen } from "./QuestScreen";

export const FlowersMissionScreen = function ({
  navigation,
}: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Header
          navigation={navigation}
          picture={3}
          account={2}
          goto="LoginScreen"
          text="Flower mission"
        >
          <VStack style={tickets_screen_style.vstack1}>
            <TouchableOpacity onPress={() => navigation.navigate(QuestScreen)}>
              <Image
                source={require("../../images/header-2.png")}
                style={tickets_screen_style.picture1}
                alt="Orientarium ZOO Łódź"
              ></Image>
            </TouchableOpacity>
          </VStack>
        </Header>
        <ScrollView style={flowers_mission_screen_style.test}>
          <View style={flowers_mission_screen_style.view1}>
            <Badge
              shadow={4}
              rounded={20}
              style={quest_inside_screen_style.badge}
            >
              <Image
                style={flowers_mission_screen_style.picture}
                source={require("../../images/flowers-mission-1.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={flowers_mission_screen_style.text2}>
                Helianthus (Helianthus annuus)
              </Text>
              <View style={flowers_mission_screen_style.view2}>
                <Image
                  source={require("../../images/quest-inside-screen-7.png")}
                  alt="Orientarium ZOO Łódź"
                ></Image>
                <Text style={flowers_mission_screen_style.text2}>10</Text>
              </View>
              <Button bg="#ED7B1F" style={flowers_mission_screen_style.button1}>
                <Text style={flowers_mission_screen_style.text4}>
                  Lern more
                </Text>
              </Button>
            </Badge>
            <Badge
              shadow={4}
              rounded={20}
              style={quest_inside_screen_style.badge}
            >
              <Image
                style={flowers_mission_screen_style.picture}
                source={require("../../images/flowers-mission-2.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={flowers_mission_screen_style.text2}>
                Tuplips (Tulipa)
              </Text>
              <View style={flowers_mission_screen_style.view2}>
                <Image
                  source={require("../../images/quest-inside-screen-7.png")}
                  alt="Orientarium ZOO Łódź"
                ></Image>
                <Text style={flowers_mission_screen_style.text2}>10</Text>
              </View>
              <Button bg="#ED7B1F" style={flowers_mission_screen_style.button1}>
                <Text style={flowers_mission_screen_style.text4}>
                  Lern more
                </Text>
              </Button>
            </Badge>
          </View>
          <View style={flowers_mission_screen_style.view3}>
            <Badge
              shadow={4}
              rounded={20}
              style={flowers_mission_screen_style.badge}
            >
              <Image
                style={flowers_mission_screen_style.picture}
                source={require("../../images/flowers-mission-3.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={flowers_mission_screen_style.text2}>
                Daisy (Bellis perennis)
              </Text>
              {/*<Text style={quest_inside_screen_style.text3}>Collect all the flower pictures to get points</Text>*/}
              <View style={flowers_mission_screen_style.view2}>
                <Image
                  source={require("../../images/quest-inside-screen-7.png")}
                  alt="Orientarium ZOO Łódź"
                ></Image>
                <Text style={flowers_mission_screen_style.text2}>10</Text>
              </View>
              <Button bg="#ED7B1F" style={flowers_mission_screen_style.button1}>
                <Text style={flowers_mission_screen_style.text4}>
                  Lern more
                </Text>
              </Button>
            </Badge>
            <Badge
              shadow={4}
              rounded={20}
              style={flowers_mission_screen_style.badge}
            >
              <Image
                style={flowers_mission_screen_style.picture}
                source={require("../../images/flowers-mission-4.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={flowers_mission_screen_style.text2}>
                Rose (Rosa rubiginosa)
              </Text>
              {/*<Text style={quest_inside_screen_style.text3}>Collect all the trees pictures to get points</Text>*/}
              <View style={flowers_mission_screen_style.view2}>
                <Image
                  source={require("../../images/quest-inside-screen-8.png")}
                  alt="Orientarium ZOO Łódź"
                ></Image>
                <Text style={flowers_mission_screen_style.text2}>10</Text>
              </View>
              <Button bg="#5E9D75" style={flowers_mission_screen_style.button1}>
                <Text style={flowers_mission_screen_style.text4}>
                  Add photo
                </Text>
              </Button>
            </Badge>
          </View>
          {/*<View style={flowers_mission_screen_style.view3}>*/}
          {/*    <Badge shadow={4} rounded={20} style={flowers_mission_screen_style.badge}>*/}
          {/*        <Image*/}
          {/*            style={flowers_mission_screen_style.picture}*/}
          {/*            source={require("../../images/quest-inside-screen-9.png")}*/}
          {/*            alt="Orientarium ZOO Łódź"*/}
          {/*        />*/}
          {/*        <Text style={flowers_mission_screen_style.text2}>Crested porcupine (Hystrix cristata)</Text>*/}
          {/*        /!*<Text style={quest_inside_screen_style.text3}>Collect all the flower pictures to get points</Text>*!/*/}
          {/*        <View style={flowers_mission_screen_style.view2}>*/}
          {/*            <Image source={require("../../images/quest-inside-screen-8.png")} alt="Orientarium ZOO Łódź"></Image>*/}
          {/*            <Text style={flowers_mission_screen_style.text2}>10</Text>*/}
          {/*        </View>*/}
          {/*        <Button*/}
          {/*            bg="#5E9D75"*/}
          {/*            style={flowers_mission_screen_style.button1}*/}
          {/*        >*/}
          {/*            <Text style={flowers_mission_screen_style.text4}>Add photo</Text>*/}
          {/*        </Button>*/}
          {/*    </Badge>*/}
          {/*    <Badge shadow={4} rounded={20} style={flowers_mission_screen_style.badge}>*/}
          {/*        <Image*/}
          {/*            style={flowers_mission_screen_style.picture}*/}
          {/*            source={require("../../images/quest-inside-screen-10.png")}*/}
          {/*            alt="Orientarium ZOO Łódź"*/}
          {/*        />*/}
          {/*        <Text style={flowers_mission_screen_style.text2}>Binturong (Arctictis binturong)</Text>*/}
          {/*        /!*<Text style={quest_inside_screen_style.text3}>Collect all the trees pictures to get points</Text>*!/*/}
          {/*        <View style={flowers_mission_screen_style.view2}>*/}
          {/*            <Image source={require("../../images/quest-inside-screen-8.png")} alt="Orientarium ZOO Łódź"></Image>*/}
          {/*            <Text style={flowers_mission_screen_style.text2}>10</Text>*/}
          {/*        </View>*/}
          {/*        <Button*/}
          {/*            bg="#5E9D75"*/}
          {/*            style={flowers_mission_screen_style.button1}*/}
          {/*        >*/}
          {/*            <Text style={flowers_mission_screen_style.text4}>Add photo</Text>*/}
          {/*        </Button>*/}
          {/*    </Badge>*/}
          {/*</View>*/}
        </ScrollView>
        <Footer navigation={navigation} currentScreen={FooterPage.QUESTS} />
      </View>
    </NativeBaseProvider>
  );
};
