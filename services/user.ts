import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export class UserApi {
  static async registerUser(user: any): Promise<boolean> {
    let response = null;
    try {
      response = await axios.post("http://localhost:8000/api/user", user);
    } catch (e) {
      console.log(e);
      return false;
    }

    if (response.status !== 200) {
    }
    const token = await axios.post("http://localhost:8000/api/token/", {
      username: user.Username,
      password: user.Password,
    });

    const jsonValue = JSON.stringify(token);
    await AsyncStorage.setItem("@tokens", jsonValue);
    return true;
  }

  static async loginUser(email: string, password: string): Promise<void> {
    const token = await axios.post("http://localhost:8000/api/token/", {
      email: email,
      password: password,
    });

    const jsonValue = JSON.stringify(token);
    await AsyncStorage.setItem("@tokens", jsonValue);
  }
}
