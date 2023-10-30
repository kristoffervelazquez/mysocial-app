import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

const takePhoto = async () => {
  const getCameraPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status !== "granted") {
      // Los permisos no se concedieron, maneja el caso según tus necesidades
      console.log("Permisos de cámara no concedidos.");
    }
  };

  const { assets, canceled } = await ImagePicker.launchCameraAsync({
    quality: 1,

    cameraType: ImagePicker.CameraType.front,
  });

  if (!canceled) {
    return assets[0].uri;
  }
};
