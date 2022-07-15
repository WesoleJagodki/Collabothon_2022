import React from "react";
import { Text, View } from "react-native";
import { NativeBaseProvider, HStack, Image} from "native-base";

import { button_style } from "./CustomButtonStyle";

interface Props {
  navigation: any;
  text: any;
  goto: any;
  picture: number;
  account: number;
}

export const CustomButton = function ({
  navigation,
  text,
  goto,
  picture,
  account,
}: Props): JSX.Element {
  return (
    <View></View>
  );
};
