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

    await AsyncStorage.setItem("@user", JSON.stringify(user));
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

    await AsyncStorage.setItem("@user", JSON.stringify({}));
    return true;
  }
  static async getPoints(): Promise<number> {
    const u = await AsyncStorage.getItem(`@user`) as string;
    const user = JSON.parse(u)
    console.log(user)
  let p;

    if(user.point === undefined) {
      p = 705
    }
    else{
      p = user.point
    }

    return p
  }
  static async addPoints(points) {
    const u = await AsyncStorage.getItem(`@user`) as string
    const user = JSON.parse(u)

    console.log(user)
    let n
    try {
       n = user.point
    } catch (e) {
      n = 705
    }
    if(n === undefined)
    {
      n = 705;
    }
    n += points;
    user.point = n
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem("@user", jsonValue);
  }
}
