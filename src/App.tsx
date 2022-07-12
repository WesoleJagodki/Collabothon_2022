import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {RootNavigator} from "./navigation/RootNavigator";
import {NativeBaseProvider} from "native-base";
import "./translations/i18n";

export default function App(): JSX.Element {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
