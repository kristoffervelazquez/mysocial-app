import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { askUserForPermissions } from "../helpers/askUserForPermissions";
import { StackActions } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Haptics from "expo-haptics";
import { showNotification } from "../helpers/showNotification";
import { openAppSettings } from "../helpers/openSettings";

type ScreenProps = NativeStackScreenProps<any, "QrScanner">;
const QRScanner = ({ navigation }: ScreenProps) => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
      if (status === "denied") {
        askUserForPermissions();
      }
    })();
  }, []);

  const handleBarCodeScanned = async (scanData: BarCodeEvent) => {
    setScanned(true);
    const { data } = scanData;
    const pushAction = StackActions.replace("PublicProfileScreen", {
      link: data,
    });
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    // await showNotification({ title: "Qr scanned", body: data });
    navigation.dispatch(pushAction);
  };

  const handlePress = () => {
    openAppSettings();
  };

  return (
    <View style={styles.container}>
      {hasPermission ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: "center" }}>No access to camera</Text>
          <Button title={"Allow Camera Access"} onPress={handlePress} />
        </View>
      )}

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default QRScanner;
