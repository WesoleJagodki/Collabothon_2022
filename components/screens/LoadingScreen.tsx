import React from "react";
import {Text, View} from "react-native";
import {Button, NativeBaseProvider, Image} from "native-base"

import {loading_screen} from "../styles/LoadingScreenStyle";


export const LoadingScreen = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
             <View style={loading_screen.container}>
                 <Image
                     opacity={70}
                     style={loading_screen.picture1}
                     source={require("../../images/loading-screen-1.png")}
                     alt="Orientarium ZOO"
                 />
                 <Image
                     style={loading_screen.picture2}
                     source={require("../../images/loading-screen-2.png")}
                     alt="Orientarium ZOO"
                 />
                 <Button style={loading_screen.button} bg="white" _pressed={{bg: "muted.300"}}>
                     <Text style={loading_screen.text}>GET STARTED</Text>
                 </Button>
            </View>
        </NativeBaseProvider>
    );
};
