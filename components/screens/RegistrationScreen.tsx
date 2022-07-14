import React from "react";
import {Text} from "react-native";
import {Button, NativeBaseProvider, Image, VStack, Input, HStack, Checkbox} from "native-base"
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import {global_style} from "../styles/GlobalStyle";
import {registration_screen} from "../styles/RegistrationScreenStyle";

export const RegistrationScreen = function ({navigation} : any): JSX.Element {
    const [Username, setUsername] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [BirthDay, setBirthDay] = React.useState("");
    const [Gender, setGender] = React.useState("");
    const [PIN, setPIN] = React.useState("");

    const handleChangeUsername = text => setUsername(text);
    const handleChangeEmail = text => setEmail(text);
    const handleChangePassword = text => setPassword(text);
    const handleChangeBirthDay = text => setBirthDay(text);
    const handleChangeGender = text => setGender(text);
    const handleChangePIN = text => setPIN(text);

    const [show, setShow] = React.useState(false);
    const [checkboxValues, setCheckboxValues] = React.useState([]);

    return (
        <NativeBaseProvider>
            <KeyboardAwareScrollView contentContainerStyle={global_style.container} scrollEnabled={false}>
                <VStack style={registration_screen.vstack1} alignItems="center">
                    <Text style={registration_screen.text1}>Create a New Account</Text>
                    <Text style={registration_screen.text2}>Create an account and enter the</Text>
                    <Text style={registration_screen.text2}>world of wildlife</Text>
                    <VStack style={registration_screen.vstack2} space={4} alignItems="center">
                        <Input variant="rounded" borderRadius="10" shadow={4} minH="4%" style={registration_screen.input} placeholder="Username" value={Username} onChangeText={handleChangeUsername}/>
                        <Input variant="rounded" borderRadius="10" shadow={4} minH="4%" style={registration_screen.input} placeholder="Email" value={Email} onChangeText={handleChangeEmail}/>
                        <Input type={show ? "text" : "password"} variant="rounded" borderRadius="10" shadow={4} minH="4%" style={registration_screen.input} placeholder="Password" value={Password} onChangeText={handleChangePassword}/>
                        <Input variant="rounded" borderRadius="10" shadow={4} minH="4%" style={registration_screen.input} placeholder="Birth Day" value={BirthDay} onChangeText={handleChangeBirthDay}/>
                        <Input variant="rounded" borderRadius="10" shadow={4} minH="4%" style={registration_screen.input} placeholder="Gender" value={Gender} onChangeText={handleChangeGender}/>
                        <Input variant="rounded" borderRadius="10" shadow={4} minH="4%" style={registration_screen.input} placeholder="PIN" value={PIN} onChangeText={handleChangePIN}/>
                        <Checkbox.Group onChange={setCheckboxValues} value={checkboxValues}>
                            <Checkbox shadow={4} value="accept" accessibilityLabel="I agree to the Terms of Service and Privacy Policy">
                                <Text style={registration_screen.text3}>I agree to the Terms of Service and Privacy Policy</Text>
                            </Checkbox>
                        </Checkbox.Group>
                        <Button style={registration_screen.button} colorScheme={"green"}>
                            <Text style={registration_screen.text4}>Sign up</Text>
                        </Button>
                        <Image
                            style={registration_screen.picture1}
                            source={require("../../images/registration-screen-1.png")}
                            alt="Orientarium ZOO Łódź"
                        />
                        <Image
                            style={registration_screen.picture2}
                            source={require("../../images/registration-screen-2.png")}
                            alt="Orientarium ZOO Łódź"
                        />
                        <HStack style={registration_screen.hstack} space={1}>
                            <Text style={registration_screen.text5}>Already have an account?</Text>
                            <Text style={registration_screen.text6} onPress={() => navigation.navigate("Root")}>Log In</Text>
                        </HStack>
                    </VStack>
                </VStack>
            </KeyboardAwareScrollView>
        </NativeBaseProvider>
    );
};
