import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {LoadingScreen} from "../components/screens/LoadingScreen"

const Stack = createNativeStackNavigator();

export const RootNavigator = function () : JSX.Element {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={LoadingScreen} options={{ title: "LoadingScreen" }}/>
        </Stack.Navigator>
    );
};
