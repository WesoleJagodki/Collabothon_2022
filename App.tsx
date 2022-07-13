import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {RootNavigator} from "./navigator/RootNavigator";
import {NativeBaseProvider} from "native-base";

export default function App(): JSX.Element {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
