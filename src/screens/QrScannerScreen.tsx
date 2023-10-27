import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { askUserForPermissions } from "../helpers/askUserForPermissions";
import { StackActions } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

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

  const handleBarCodeScanned = (data: BarCodeEvent) => {
    setScanned(true);
    alert(
      `Bar code with type ${data.type} and data ${data.data} has been scanned!`
    );
  };

  const handlePress = () => {
    const goToPublicProfile = StackActions.replace("PublicProfileScreen", {
      link: "https://my-social-v1.netlify.app/kingg?id=123&name=kristoffer&age=20",
    });
    navigation.dispatch(goToPublicProfile);
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
