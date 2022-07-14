import React from "react";
import {Text, View} from "react-native";
import {NativeBaseProvider, HStack} from "native-base"

import {header_style} from "./HeaderStyle";

export const Header = function ({navigation}): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={header_style.container}>
                <Text>Hi</Text>
            </View>
        </NativeBaseProvider>
    );
};
