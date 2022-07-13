import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {StartScreen} from "../components/screens/StartScreen"

const Stack = createNativeStackNavigator();

export const RootNavigator = function () : JSX.Element {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={StartScreen} options={{ title: "StartScreen" }}/>
        </Stack.Navigator>
    );
};
