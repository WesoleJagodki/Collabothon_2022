import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export class UserApi {
  static async registerUser(user: any): Promise<boolean> {
    let response;
    try {
      response = await axios.post("https://mateuszpapuga.pl/api/user", user);
    } catch (e) {
      return false;
    }

    if (response.status !== 200) {
    }
    const token = await axios.post("https://mateuszpapuga.pl/api/token/", {
      username: user.Username,
      password: user.Password,
    });

    const jsonValue = JSON.stringify(token);
    await AsyncStorage.setItem("@tokens", jsonValue);
    return true;
  }

  static async loginUser(email: string, password: string): Promise<boolean> {
    let token;
    try {
      token = await axios.post("https://mateuszpapuga.pl/api/token/", {
        username: email,
        password: password,
      });
    } catch (e) {
      return false;
    }

    const jsonValue = JSON.stringify(token);
    await AsyncStorage.setItem("@tokens", jsonValue);
    return true;
  }
}
