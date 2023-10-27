import { Alert } from "react-native";
import { openAppSettings } from "./openSettings";

export const askUserForPermissions = async () => {
  return new Promise((resolve) => {
    Alert.alert(
      "Permission Required",
      "Please grant camera permissions in your device settings.",
      [
        {
          text: "Cancel",
          onPress: () => resolve(false),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            openAppSettings();
            resolve(true);
          },
        },
      ],
      { cancelable: false }
    );
  });
};
