import client from "./client";
import { exp } from "react-native-reanimated";

const register = (pushToken) =>
  client.post("/expoPushTokens", { token: pushToken });

export default {
  register,
};
