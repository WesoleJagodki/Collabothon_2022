import React from "react";
import {Text, View} from "react-native";
import {Button, NativeBaseProvider, Image, VStack, Input} from "native-base"

import {global_style} from "../styles/GlobalStyle";
import {registration_screen} from "../styles/RegistrationScreenStyle";

export const RegistrationScreen = function ({navigation} : any): JSX.Element {
    const [Username, setUsername] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [BirthDay, setBirthDay] = React.useState("");
    const [Gender, setGender] = React.useState("");
    const [PIN, setPIN] = React.useState("");

    const handleChange = text => setValue(text);

    return (
        <NativeBaseProvider>
            <View style={global_style.container}>
                <VStack style={registration_screen.vstack1} alignItems="center">
                    <Text style={registration_screen.text1}>Create a New Account</Text>
                    <Text style={registration_screen.text2}>Create an account and enter the</Text>
                    <Text style={registration_screen.text2}>world of wildlife</Text>
                    <VStack style={registration_screen.vstack2} space={26} alignItems="center">
                        <Input variant="rounded" borderRadius="10" shadow={4} style={registration_screen.input} placeholder="Username" value={Username} onChangeText={handleChange}/>
                        <Input variant="rounded" borderRadius="10" shadow={4} style={registration_screen.input} placeholder="Email" value={Email} onChangeText={handleChange}/>
                        <Input variant="rounded" borderRadius="10" shadow={4} style={registration_screen.input} placeholder="Password" value={Password} onChangeText={handleChange}/>
                        <Input variant="rounded" borderRadius="10" shadow={4} style={registration_screen.input} placeholder="Birth Day" value={BirthDay} onChangeText={handleChange}/>
                        <Input variant="rounded" borderRadius="10" shadow={4} style={registration_screen.input} placeholder="Gender" value={Gender} onChangeText={handleChange}/>
                        <Input variant="rounded" borderRadius="10" shadow={4} style={registration_screen.input} placeholder="PIN" value={PIN} onChangeText={handleChange}/>
                    </VStack>
                </VStack>


            </View>
        </NativeBaseProvider>
    );
};
