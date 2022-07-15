import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoadingScreen } from "../components/screens/LoadingScreen";
import { RegistrationScreen } from "../components/screens/RegistrationScreen";
import { LoginScreen } from "../components/screens/LoginScreen";
import { MainScreen } from "../components/screens/MainScreen";
import { QuestScreen } from "../components/screens/QuestScreen";
import { QuestInsideScreen } from "../components/screens/QuestInsideScreen";
import { TicketsScreen } from "../components/screens/TicketsScreen";
import { MapScreen } from "../components/screens/MapScreen";
import { InfoScreen } from "../components/screens/info/InfoScreen";
import { AboutUs } from "../components/screens/info/AboutUs";

import { PicturePickerScreen } from "../components/screens/PicturePickerScreen";

const Stack = createNativeStackNavigator();

export const RootNavigator = function (): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Root"
        component={QuestInsideScreen}
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
        name="QuestScreen"
        component={QuestScreen}
        options={{ title: "QuestScreen" }}
      />
      <Stack.Screen
        name="QuestInsideScreen"
        component={QuestInsideScreen}
        options={{ title: "QuestInsideScreen" }}
      />
      <Stack.Screen
        name="TicketsScreen"
        component={TicketsScreen}
        options={{ title: "TicketsScreen" }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: "MapScreen" }}
      />
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{ title: "InfoScreen" }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ title: "AboutUs" }}
      />

      <Stack.Screen
        name="PicturePickerScreen"
        component={PicturePickerScreen}
        options={{ title: "PicturePickerScreen" }}
      />
    </Stack.Navigator>
  );
};
