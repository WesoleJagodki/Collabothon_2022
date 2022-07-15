import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, NativeBaseProvider, Image, HStack, Badge } from "native-base";

import { global_style } from "../styles/GlobalStyle";

import { Footer } from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";
import { Header } from "../header/Header";
import { quest_inside_screen_style } from "../styles/QuestInsideScreenStyle";

export const QuestInsideScreen = function ({ navigation }: any): JSX.Element {
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
        <HStack space={10} style={quest_inside_screen_style.hstack}>
          <Button
            onPress={() => navigation.navigate("QuestScreen")}
            rounded={20}
            backgroundColor={0}
          >
            <Text>Outside</Text>
          </Button>
          <Button rounded={20} colorScheme={"orange"}>
            Inside
          </Button>
        </HStack>
        <ScrollView style={quest_inside_screen_style.test}>
          <View style={quest_inside_screen_style.view1}>
            <Badge
              shadow={4}
              rounded={20}
              style={quest_inside_screen_style.badge}
            >
              <Image
                style={quest_inside_screen_style.picture}
                source={require("../../images/quest-inside-screen-1.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={quest_inside_screen_style.text2}>
                Giant otter (Pteronura brasiliensis)
              </Text>
              {/*<Text style={quest_inside_screen_style.text3}></Text>*/}
              <View style={quest_inside_screen_style.view2}>
                <Image
                  source={require("../../images/quest-inside-screen-7.png")}
                  alt="Orientarium ZOO Łódź"
                ></Image>
                <Text style={quest_inside_screen_style.text2}>10</Text>
              </View>
              <Button bg="#00AEEB" style={quest_inside_screen_style.button1}>
                <Text style={quest_inside_screen_style.text4}>Lern more</Text>
              </Button>
            </Badge>
            <Badge
              shadow={4}
              rounded={20}
              style={quest_inside_screen_style.badge}
            >
              <Image
                style={quest_inside_screen_style.picture}
                source={require("../../images/quest-inside-screen-2.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={quest_inside_screen_style.text2}>
                Java mouse-deer (Trangulus javanicus)
              </Text>
              {/*<Text style={quest_inside_screen_style.text3}>Collect all the trees pictures to get points</Text>*/}
              <View style={quest_inside_screen_style.view2}>
                <Image
                  source={require("../../images/quest-inside-screen-7.png")}
                  alt="Orientarium ZOO Łódź"
                ></Image>
                <Text style={quest_inside_screen_style.text2}>10</Text>
              </View>
              <Button bg="#00AEEB" style={quest_inside_screen_style.button1}>
                <Text style={quest_inside_screen_style.text4}>Lern more</Text>
              </Button>
            </Badge>
          </View>
          <View style={quest_inside_screen_style.view1}>
            <Badge
              shadow={4}
              rounded={20}
              style={quest_inside_screen_style.badge}
            >
              <Image
                style={quest_inside_screen_style.picture}
                source={require("../../images/quest-inside-screen-3.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={quest_inside_screen_style.text2}>
                Kirk's dik-dik (Madoqua kirkii)
              </Text>
              {/*<Text style={quest_inside_screen_style.text3}>Collect all the flower pictures to get points</Text>*/}
              <View style={quest_inside_screen_style.view2}>
                <Image
                  source={require("../../images/quest-inside-screen-7.png")}
                  alt="Orientarium ZOO Łódź"
                ></Image>
                <Text style={quest_inside_screen_style.text2}>10</Text>
              </View>
              <Button bg="#00AEEB" style={quest_inside_screen_style.button1}>
                <Text style={quest_inside_screen_style.text4}>Lern more</Text>
              </Button>
            </Badge>
            <Badge
              shadow={4}
              rounded={20}
              style={quest_inside_screen_style.badge}
            >
              <Image
                style={quest_inside_screen_style.picture}
                source={require("../../images/quest-inside-screen-4.png")}
                alt="Orientarium ZOO Łódź"
              />
              <Text style={quest_inside_screen_style.text2}>
                Binturong (Arctictis binturong)
              </Text>
              {/*<Text style={quest_inside_screen_style.text3}>Collect all the trees pictures to get points</Text>*/}
              <View style={quest_inside_screen_style.view2}>
                <Image
                  source={require("../../images/quest-inside-screen-8.png")}
                  alt="Orientarium ZOO Łódź"
                ></Image>
                <Text style={quest_inside_screen_style.text2}>10</Text>
              </View>
              <Button
                bg="#5E9D75"
                style={quest_inside_screen_style.button1}
                onPress={() => navigation.navigate("UploadImageScreen")}
              >
                <Text style={quest_inside_screen_style.text4}>Add photo</Text>
              </Button>
            </Badge>
          </View>
        </ScrollView>
        <Footer navigation={navigation} currentScreen={FooterPage.QUESTS} />
      </View>
    </NativeBaseProvider>
  );
};
