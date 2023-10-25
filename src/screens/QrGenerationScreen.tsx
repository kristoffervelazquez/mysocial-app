import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StackActions, useNavigation } from "@react-navigation/native";

const QrGenerationScreen = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const navigate = useNavigation();

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const generateQR = () => {
    const pushAction = StackActions.push("QrScreen", {
      data: ["123", "321", "321"],
    });
    navigate.dispatch(pushAction);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "900" }}>Select socials to share</Text>
      <View style={{ height: 20 }} />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ fontWeight: "bold", width: 30 }}>All</Text>
        {/* <Icon name="checkmark-done-sharp" size={30} color="green" /> */}
        <Switch onChange={toggleSwitch} value={isEnabled} />
      </View>
      <View style={{ height: 20 }} />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Icon name="logo-whatsapp" size={30} color="green" />
        <Switch onChange={toggleSwitch} value={isEnabled} />
      </View>
      <View style={{ height: 20 }} />

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Icon name="logo-instagram" size={30} color="purple" />
        <Switch onChange={toggleSwitch} value={isEnabled} />
      </View>
      <View style={{ height: 20 }} />

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Icon name="logo-facebook" size={30} color="blue" />

        <Switch onChange={toggleSwitch} value={isEnabled} />
      </View>

      <TouchableOpacity style={styles.qrContainer} onPress={() => generateQR()}>
        <Text style={styles.qrText}>Generate Qr</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QrGenerationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  image: {
    backgroundColor: "red",
    width: 330,
    height: 330,
    resizeMode: "stretch",
  },
  qrContainer: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "blue",
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
  },
  qrText: { fontWeight: "bold", color: "white", padding: 10 },
});
