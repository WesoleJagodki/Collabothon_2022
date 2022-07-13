import React from "react";
import { Text, View} from "react-native";
import {Button, NativeBaseProvider, Image} from "native-base"

import {loading_screen} from "../styles/LoadingScreenStyle";


export const LoadingScreen = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
             <View style={loading_screen.container}>
                 <Image
                     style={loading_screen.picture1}
                     source={require("../../images/loading-screen-1.png")}
                 />
                 <Image
                     style={loading_screen.picture2}
                     source={require("../../images/loading-screen-2.png")}
                 />
                 <Button style={loading_screen.button}>
                     <Text style={loading_screen.text}>GET STARTED</Text>
                 </Button>
            </View>
        </NativeBaseProvider>
    );
};
