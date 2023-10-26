import React from "react";
import TopTabNavigation from "./TopTabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import SettingsScreen from "../screens/SettingsScreen";
import Icon from "react-native-vector-icons/Ionicons";
import QrGenerationScreen from "../screens/QrGenerationScreen";
import QrScreen from "../screens/QrScreen";

interface ButtonProps {
  navigation: NavigationProp<any>;
}

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Profile"
        component={TopTabNavigation}
        options={{
          headerRight: () => <QrButton navigation={navigation} />,
          headerTitle: "My Social",
          headerTitleAlign: "center",
          headerLeft: () => <SettingsButton navigation={navigation} />,
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
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
    </Stack.Navigator>
  );
};

export default AppStack;

const QrButton = ({ navigation }: ButtonProps) => {
  const pushAction = StackActions.push("QrGenerationScreen");
  return (
    <TouchableOpacity onPress={() => navigation.dispatch(pushAction)}>
      <Icon name="qr-code-outline" size={30} color={"blue"} />
    </TouchableOpacity>
  );
};

const SettingsButton = ({ navigation }: ButtonProps) => {
  const pushAction = StackActions.push("Settings");
  return (
    <TouchableOpacity onPress={() => navigation.dispatch(pushAction)}>
      <Icon name="settings-outline" size={30} color={"blue"} />
    </TouchableOpacity>
  );
};
