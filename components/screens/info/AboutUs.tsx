import { Footer } from "../../footer/Footer";
import { FooterPage } from "../../footer/FooterItem";
import { Header } from "../../header/Header";
import { style } from "../../styles/AboutUs";
import { global_style } from "../../styles/GlobalStyle";
import { Image, NativeBaseProvider } from "native-base";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export const AboutUs = function ({ navigation }: any): JSX.Element {
  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Header
          navigation={navigation}
          picture={3}
          account={1}
          goto="LoginScreen"
          text="About us"
        />
        <View>
          <ScrollView style={style.view}>
            <View style={style.container}>
              <Text style={style.text}>
                Our mission is to protect endangered species, educate and
                support the genetic pool of wild animals that are threatened
                with extinction in the wild. We are transforming from a
                demonstration role into a center that cares for biodiversity and
                conducts scientific work. The zoo in Łódź is inhabited by over
                3,350 individuals, representing over 554 species.
              </Text>
              <View style={style.img}>
                <Image
                  source={require("../../../images/abous_us.png")}
                  height={"200"}
                  width={"300"}
                  alt="elephant"
                />
              </View>
              <Text style={style.text}>
                We are the only garden in Poland where you can see, among others
                arirans, i.e. giant otters, Sumatran orangutans, gavial
                crocodiles and forest dogs. As the first in Poland, we imported
                Asian lions in 1996, today they are one of the greatest
                attractions of our garden.
              </Text>
              <View style={{ height: 22 }} />
              <Text style={style.text}>
                In 2022, we opened the most modern breeding complex in Europe
                dedicated to Southeast Asia.
              </Text>
              <View style={{ height: 22 }} />
              <Text style={style.text}>
                The runs and aviaries in Orientarium occupy the area of almost
                10 football pitches. The applied solutions allow keeping animals
                in large spaces in combination with other species and in a
                varied environment. Our guests can observe the inhabitants of
                the Orientarium from three perspectives: underwater, land and
                from above.
              </Text>
              <View style={{ height: 22 }} />
              <Text style={style.text}>
                The garden was created on the last patch of the former Łódź
                Forest and currently borders on the beautiful and largest park
                complex in Łódź, commonly known as Park na Zdrowiu. The exact
                date of the opening of the Zoological Garden is unknown, but it
                is assumed that it happened when the construction of the
                surrounding fence was completed, which took place in the second
                half of 1938. The first inhabitant of our Zoo was Boruta deer,
                which, as history says, wandered to the city center and was
                caught in Reymonta Square.
              </Text>
            </View>
          </ScrollView>
        </View>
        <Footer navigation={navigation} currentScreen={FooterPage.INFO} />
      </View>
    </NativeBaseProvider>
  );
};
