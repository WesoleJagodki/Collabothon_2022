import React from "react";
import {View, Button, Image} from "react-native";

import * as ImagePicker from 'expo-image-picker';

export const PicturePickerScreen = function (): JSX.Element {
  const [image, setImage] = React.useState<null | string>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.uri) {
      setImage(result.uri);

      let localUri = result.uri || "";
      let filename = localUri.split('/').pop() || "";

      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      let formData = new FormData();

      // @ts-ignore
      formData.append('photo', { uri: localUri, name: filename, type });

      console.log( { uri: localUri, name: filename, type });

      await fetch("http://127.0.0.1:8000/image", {
        method: 'POST',
        body: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
