import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {LoadingScreen} from "../components/screens/LoadingScreen";
import {RegistrationScreen} from "../components/screens/RegistrationScreen";

const Stack = createNativeStackNavigator();

export const RootNavigator = function () : JSX.Element {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={LoadingScreen} options={{title: "LoadingScreen"}}/>
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{title: "RegistrationScreen"}}/>
        </Stack.Navigator>
    );
};
