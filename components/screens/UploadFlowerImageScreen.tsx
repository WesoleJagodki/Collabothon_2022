import React, { useState } from "react";
import { View, Button, Image, TouchableOpacity } from "react-native";
import { Header } from "../header/Header";

import * as ImagePicker from "expo-image-picker";
import { NativeBaseProvider, Pressable, Text, VStack } from "native-base";
import { global_style } from "../styles/GlobalStyle";
import { tickets_screen_style } from "../styles/TicketsScreenStyle";
import { Footer } from "../footer/Footer";
import { FooterPage } from "../footer/FooterItem";
import { upload_image_style } from "../styles/UploadImageStyle";
import { MessagePopup } from "../popups/MessagePopup";
import { UserApi } from "../../services/user";

function uploadImage(image: any, successCallback: any, failCallback: any) {
  if (!image?.uri) {
    return;
  }

  let localUri = image.uri || "";
  let filename = localUri.split("/").pop() || "";

  let match = /\.(\w+)$/.exec(filename);
  let formdata = new FormData();

  formdata.append("file", image.base64);

  let requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://be07-31-182-74-174.eu.ngrok.io/predict_tulip",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => JSON.parse(result).result ? successCallback() : failCallback())
    .catch((error) => console.log("error", error));
}

export const UploadFlowerImageScreen = function ({ navigation }: any): JSX.Element {
  const [image, setImage] =
    React.useState<null | ImagePicker.ImagePickerResult>(null);

  const [successVisible, setSuccessVisible] = useState(false);
  const [failureVisible, setFailureVisible] = useState(false);

  function success() {
    setSuccessVisible(true);
    UserApi.addPoints(10);
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled && result.uri) {
      setImage(result);
    }
  };

  return (
    <NativeBaseProvider>
      <View style={global_style.container}>
        <Header
          navigation={navigation}
          picture={3}
          account={2}
          goto="TicketsScreen"
          goto2="TicketsScreen"
          text="Upload image"
        >
          <MessagePopup visible={successVisible} header="Congrats!" description="You have earned 10 paw coins." exitButtonText="Complete" onCancelPressed={() => setSuccessVisible(false)} />
          <MessagePopup visible={failureVisible} header="Mission Failed" description="The inserted photo does not match." exitButtonText="Close" onCancelPressed={() => setFailureVisible(false)} />
          <VStack style={tickets_screen_style.vstack1}>
            <Pressable onPress={() => navigation.navigate("QuestsScreen")}>
              <Image
                source={require("../../images/header-2.png")}
                style={tickets_screen_style.picture1}
                alt="Orientarium ZOO Łódź"
              ></Image>
            </Pressable>
          </VStack>
        </Header>

        <View style={tickets_screen_style.view1}>
          <Text style={{ fontSize: 18, textAlign: "center", margin: 20 }}>
            Tuplips (Tulipa)
          </Text>
          {image ? (
            <Image
              source={{ uri: image.uri }}
              style={upload_image_style.pictureView}
            />
          ) : (
            <View
              style={[
                upload_image_style.pictureView,
                { backgroundColor: "gray" },
              ]}
            ></View>
          )}
          <TouchableOpacity
            onPress={pickImage}
            style={upload_image_style.upload_button}
          >
            <Text style={upload_image_style.btn_text}>Take photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => uploadImage(image, success, () => setFailureVisible(true))}
            style={upload_image_style.upload_button}
          >
            <Text style={upload_image_style.btn_text}>Send image</Text>
          </TouchableOpacity>
        </View>

        <Footer navigation={navigation} currentScreen={FooterPage.TICKETS} />
      </View>
    </NativeBaseProvider>
  );
};
