import { UserApi } from "../../services/user";
import { global_style } from "../styles/GlobalStyle";
import { registration_screen } from "../styles/RegistrationScreenStyle";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Button,
  NativeBaseProvider,
  Image,
  VStack,
  Input,
  HStack,
  Checkbox,
  Icon,
} from "native-base";
import React from "react";
import { Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const RegistrationScreen = function ({ navigation }: any): JSX.Element {
  const [Username, setUsername] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [BirthDay, setBirthDay] = React.useState("");
  const [Gender, setGender] = React.useState("");
  const [PIN, setPIN] = React.useState("");

  const [invalidUsername, setInvalidUsername] = React.useState(false);

  const handleChangeUsername = (text) => {
    setUsername(text);
    setInvalidUsername(false);
  };
  const handleChangeEmail = (text) => setEmail(text);
  const handleChangePassword = (text) => setPassword(text);
  const handleChangeBirthDay = (text) => setBirthDay(text);
  const handleChangeGender = (text) => setGender(text);
  const handleChangePIN = (text) => setPIN(text);

  const [show, setShow] = React.useState(false);
  const [checkboxValues, setCheckboxValues] = React.useState([]);

  async function register() {
    const result = await UserApi.registerUser({
      Username,
      Email,
      Password,
      BirthDay,
      Gender,
      PIN,
    });
    if (result) {
      navigation.navigate("MainScreen");
    } else {
      setInvalidUsername(true);
    }
  }

  return (
    <NativeBaseProvider>
      <KeyboardAwareScrollView
        contentContainerStyle={global_style.container}
        scrollEnabled={false}
      >
        <VStack style={registration_screen.vstack1} alignItems="center">
          <Text style={registration_screen.text1}>Create a New Account</Text>
          <Text style={registration_screen.text2}>
            Create an account and enter the
          </Text>
          <Text style={registration_screen.text2}>world of wildlife</Text>
          <VStack
            style={registration_screen.vstack2}
            space={4}
            alignItems="center"
          >
            <>
              <Input
                variant="rounded"
                borderRadius="10"
                shadow={4}
                minH="4%"
                style={global_style.input}
                placeholder="Username"
                value={Username}
                isInvalid={invalidUsername}
                onChangeText={handleChangeUsername}
              />
              {invalidUsername && (
                <Text style={{ color: "rgb(255, 0, 0)" }}>
                  Username is already registered.
                </Text>
              )}
            </>
            <Input
              variant="rounded"
              borderRadius="10"
              shadow={4}
              minH="4%"
              style={global_style.input}
              placeholder="Email"
              value={Email}
              onChangeText={handleChangeEmail}
            />
            <Input
              variant="rounded"
              borderRadius="10"
              minH="4%"
              shadow={4}
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
            <Input
              variant="rounded"
              borderRadius="10"
              shadow={4}
              minH="4%"
              style={global_style.input}
              placeholder="Birth Day"
              value={BirthDay}
              onChangeText={handleChangeBirthDay}
            />
            <Input
              variant="rounded"
              borderRadius="10"
              shadow={4}
              minH="4%"
              style={global_style.input}
              placeholder="Gender"
              value={Gender}
              onChangeText={handleChangeGender}
            />
            <Input
              variant="rounded"
              borderRadius="10"
              shadow={4}
              minH="4%"
              style={global_style.input}
              placeholder="PIN"
              value={PIN}
              onChangeText={handleChangePIN}
            />
            <Checkbox.Group onChange={setCheckboxValues} value={checkboxValues}>
              <Checkbox
                colorScheme={"green"}
                shadow={4}
                value="accept"
                accessibilityLabel="I agree to the Terms of Service and Privacy Policy"
              >
                <Text style={registration_screen.text3}>
                  I agree to the Terms of Service and Privacy Policy
                </Text>
              </Checkbox>
            </Checkbox.Group>
            <Button
              bg="#5E9D75"
              style={registration_screen.button}
              colorScheme={"green"}
              onPress={register}
            >
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
              <Text style={registration_screen.text5}>
                Already have an account?
              </Text>
              <Text
                style={registration_screen.text6}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                Log In
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </KeyboardAwareScrollView>
    </NativeBaseProvider>
  );
};
