import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {FirstScreen} from "../frontend/components/FirstScreen";

const Stack = createNativeStackNavigator();

export const RootNavigator = function () : JSX.Element {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={FirstScreen} options={{ title: "FirstScreen" }}/>
        </Stack.Navigator>
    );
};
