import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import SettingsScreen from "../screens/SettingsScreen";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import QrGenerationScreen from "../screens/QrGenerationScreen";
import QrScreen from "../screens/QrScreen";
import QrScannerScreen from "../screens/QrScannerScreen";
import HomeScreen from "../screens/HomeScreen";
import PublicProfileScreen from "../screens/PublicProfileScreen";
import EditSocialScreen from "../screens/EditSocialScreen";
import EditAboutMeScreen from "../screens/EditAboutMeScreen";
import QrDropDownMenuButton from "../components/QrDropDownMenuButton";

interface ButtonProps {
  navigation: NavigationProp<any>;
}

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRight: () => <QrDropDownMenuButton />,
          headerTitle: "My Social",
          headerTitleAlign: "center",
          headerLeft: () => <SettingsButton navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="PublicProfileScreen"
        component={PublicProfileScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="EditSocialScreen" component={EditSocialScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen
        name="QrScanner"
        options={{ headerTitle: "Read QR" }}
        component={QrScannerScreen}
      />
      <Stack.Screen
        name="QrGenerationScreen"
        options={{ headerTitle: "Generate QR" }}
        component={QrGenerationScreen}
      />
      <Stack.Screen
        name="QrScreen"
        options={{ headerTitle: "Share your QR!" }}
        component={QrScreen}
      />
      <Stack.Screen
        name="EditAboutMeScreen"
        options={{ headerTitle: "Edit About Me" }}
        component={EditAboutMeScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const QrButton = ({ navigation }: ButtonProps) => {
  const generateQr = StackActions.push("QrGenerationScreen");
  const readQr = StackActions.push("QrScanner");

  return (
    <View
      style={{
        flexDirection: "row",
        width: 100,
        justifyContent: "space-around",
      }}
    >
      <TouchableOpacity onPress={() => navigation.dispatch(generateQr)}>
        <Icon name="qr-code-outline" size={30} color={"blue"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.dispatch(readQr)}>
        <Icon2 name="qrcode-scan" size={30} color={"blue"} />
      </TouchableOpacity>
    </View>
  );
};

const SettingsButton = ({ navigation }: ButtonProps) => {
  const pushAction = StackActions.push("SettingsScreen");
  return (
    <TouchableOpacity onPress={() => navigation.dispatch(pushAction)}>
      <Icon name="settings-outline" size={30} color={"blue"} />
    </TouchableOpacity>
  );
};
