import React from "react";
import {Text, View} from "react-native";
import {Button, NativeBaseProvider} from "native-base";
import {useTranslation} from "react-i18next";
import {global} from "../styles/GlobalStyle";

export const FirstScreen = function (): JSX.Element {
    const { t } = useTranslation();
    return (
        <NativeBaseProvider>
            <View style={global.container}>
                <Button>Click Me</Button>
                <Text style={global.text}>{t("test-1")}</Text>
            </View>
        </NativeBaseProvider>
    );
};
