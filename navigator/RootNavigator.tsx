import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoadingScreen } from "../components/screens/LoadingScreen";
import { RegistrationScreen } from "../components/screens/RegistrationScreen";
import { LoginScreen } from "../components/screens/LoginScreen";
import { MainScreen } from "../components/screens/MainScreen";

import { MapScreen } from "../components/screens/MapScreen";
import { PicturePickerScreen } from "../components/screens/PicturePickerScreen";

const Stack = createNativeStackNavigator();

export const RootNavigator = function (): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Root"
        component={LoadingScreen}
        options={{ title: "LoadingScreen" }}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{ title: "RegistrationScreen" }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "LoginScreen" }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ title: "MainScreen" }}
      />

      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: "MapScreen" }}
      />
      <Stack.Screen
        name="PicturePickerScreen"
        component={PicturePickerScreen}
        options={{ title: "PicturePickerScreen" }}
      />
    </Stack.Navigator>
  );
};
