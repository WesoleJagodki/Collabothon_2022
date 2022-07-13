import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {LoadingScreen} from "../components/screens/LoadingScreen";
import {RegistrationScreen} from "../components/screens/RegistrationScreen";
import { MapScreen } from "../components/screens/MapScreen";

const Stack = createNativeStackNavigator();

export const RootNavigator = function () : JSX.Element {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={LoadingScreen} options={{title: "LoadingScreen"}}/>
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{title: "RegistrationScreen"}}/>
            <Stack.Screen name="MapScreen" component={MapScreen} options={{title: "MapScreen"}}/>
            <Stack.Screen name="PicturePickerScreen" component={MapScreen} options={{title: "PicturePickerScreen"}}/>
        </Stack.Navigator>
    );
};
