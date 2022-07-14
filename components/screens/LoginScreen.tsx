import { UserApi } from "../../services/user";
import { global_style } from "../styles/GlobalStyle";
import { login_screen } from "../styles/LoginScreenStyle";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Button,
  NativeBaseProvider,
  Image,
  VStack,
  Input,
  HStack,
  Icon,
} from "native-base";
import React from "react";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const LoginScreen = function ({ navigation }: any): JSX.Element {
  const [Username, setUsername] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [areErros, setErrors] = React.useState(false);

  const handleChangeUsername = (text) => {
    setErrors(false);
    setUsername(text);
  };

  const handleChangePassword = (text) => {
    setErrors(false);
    setPassword(text);
  };

  const [show, setShow] = React.useState(false);

  async function login() {
    const result = await UserApi.loginUser(Username, Password);
    if (result) {
      navigation.navigate("MainScreen");
    } else {
      setErrors(true);
    }
  }

  return (
    <NativeBaseProvider>
      <KeyboardAwareScrollView contentContainerStyle={global_style.container}>
        <VStack style={login_screen.vstack1} alignItems="center">
          <Text style={login_screen.text1}>Hello Again!</Text>
          <Text style={login_screen.text2}>
            Welcome back you’ve been missed!
          </Text>
          <VStack style={login_screen.vstack2} space={4} alignItems="center">
            <View>
              <Input
                variant="rounded"
                borderRadius="10"
                shadow={4}
                minH="4%"
                minW="85%"
                marginBottom={4}
                style={global_style.input}
                placeholder="Username"
                value={Username}
                isInvalid={areErros}
                onChangeText={handleChangeUsername}
              />
              {areErros && (
                <Text style={{ color: "rgb(255, 0, 0)" }}>
                  Username or password is invalid.
                </Text>
              )}
              <Input
                variant="rounded"
                borderRadius="10"
                minH="4%"
                shadow={4}
                minW="85%"
                isInvalid={areErros}
                style={global_style.input}
                type={show ? "text" : "password"}
                InputRightElement={
                  <Icon
                    as={
                      <MaterialIcons
                        style={global_style.icon}
                        size={20}
                        name={show ? "visibility" : "visibility-off"}
                      />
                    }
                    onPress={() => setShow(!show)}
                  />
                }
                placeholder="Password"
                value={Password}
                onChangeText={handleChangePassword}
              />
            </View>
            <Text style={login_screen.text3}>Recovery Password</Text>
            <Button
                bg="#5E9D75"
              style={login_screen.button}
              colorScheme={"green"}
              onPress={login}
            >
              <Text style={login_screen.text4}>Log in</Text>
            </Button>
            <Image
              style={login_screen.picture1}
              source={require("../../images/login-screen-1.png")}
              alt="Orientarium ZOO Łódź"
            />
            <HStack style={login_screen.hstack} space={1}>
              <Text style={login_screen.text5}>Not a member?</Text>
              <Text
                style={login_screen.text6}
                onPress={() => navigation.navigate("RegistrationScreen")}
              >
                Register now
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </KeyboardAwareScrollView>
    </NativeBaseProvider>
  );
};
