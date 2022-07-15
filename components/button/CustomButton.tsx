import React from "react";
import { View } from "react-native";

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
  return <View></View>;
};
